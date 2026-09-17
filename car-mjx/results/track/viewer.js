const $ = selector => document.querySelector(selector);
const panels = ['a', 'b'].map(id => ({id, root: $(`#panel-${id}`), select: $(`#student-${id}`), hits: []}));
const cache = new Map();
let metadata, data, request = 0;
const pct = value => `${Math.round(value * 100)}%`;
const color = alpha => metadata.palette[Math.round(Math.max(0, Math.min(1, alpha)) * 255)];
const mode = () => $('input[name=mode]:checked').value;

async function json(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response.json();
}

function draw(panel) {
  if (!data) return;
  const student = data.students[Number(panel.select.value)];
  const start = Number($('#start').value);
  const episode = student.episodes[start];
  const average = mode() === 'mean';
  const canvas = panel.root.querySelector('canvas');
  const bounds = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(bounds.width * dpr); canvas.height = Math.round(bounds.height * dpr);
  const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);
  const points = metadata.track.points;
  const xmin = Math.min(...points.map(p => p[0])) - 6, xmax = Math.max(...points.map(p => p[0])) + 6;
  const ymin = Math.min(...points.map(p => p[1])) - 6, ymax = Math.max(...points.map(p => p[1])) + 6;
  const scale = Math.min(bounds.width / (xmax - xmin), bounds.height / (ymax - ymin));
  const transform = p => [(bounds.width - scale * (xmax - xmin)) / 2 + (p[0] - xmin) * scale,
    (bounds.height - scale * (ymax - ymin)) / 2 + (ymax - p[1]) * scale];
  const path = (points, close = false) => {
    points.forEach((p, i) => { const q = transform(p); if (i) ctx.lineTo(...q); else ctx.moveTo(...q); });
    if (close) ctx.closePath();
  };
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, bounds.width, bounds.height);
  const left = [], right = [];
  points.forEach((p, i) => {
    const next = points[(i + 1) % points.length], dx = next[0] - p[0], dy = next[1] - p[1], len = Math.hypot(dx, dy);
    left.push([p[0] - dy / len * p[3], p[1] + dx / len * p[3]]);
    right.push([p[0] + dy / len * p[2], p[1] - dx / len * p[2]]);
  });
  ctx.beginPath(); path(left, true); path(right, true); ctx.fillStyle = '#eef0f2'; ctx.fill('evenodd');
  ctx.strokeStyle = '#bdc5cd'; ctx.lineWidth = .75; ctx.stroke();
  panel.hits = [];
  const line = (from, to, alpha, label) => {
    const a = transform(from), b = transform(to);
    ctx.beginPath(); ctx.moveTo(...a); ctx.lineTo(...b);
    ctx.lineWidth = 3.3; ctx.lineCap = 'round'; ctx.strokeStyle = alpha === null ? '#c1c8cf' : color(alpha); ctx.stroke();
    panel.hits.push({a, b, label});
  };
  if (average) {
    student.profile.alpha.forEach((alpha, i) => {
      const position = metadata.track.length * (i + .5) / metadata.track.bins;
      const label = alpha === null ? `${position.toFixed(0)} m: unobserved` :
        `Mean alpha ${alpha.toFixed(3)} | ${student.profile.episodes[i]}/${data.starts} drives | ${position.toFixed(0)} m`;
      line(metadata.track.bin_points[i], metadata.track.bin_points[i + 1], alpha, label);
    });
  } else {
    for (const row of episode.segments) {
      line(row.slice(0, 2), row.slice(2, 4), row[4],
        `Alpha ${row[4].toFixed(2)} | ${(row[5] / metadata.control_hz).toFixed(1)} - ${(row[6] / metadata.control_hz).toFixed(1)} s`);
    }
    const first = transform(episode.first), last = transform(episode.last);
    ctx.beginPath(); ctx.arc(...first, 4, 0, 2 * Math.PI); ctx.fillStyle = '#fff'; ctx.fill();
    ctx.strokeStyle = '#147560'; ctx.lineWidth = 1.7; ctx.stroke();
    if (episode.outcome === 'lap') {
      ctx.beginPath(); ctx.arc(...last, 3.8, 0, 2 * Math.PI); ctx.fillStyle = '#147560'; ctx.fill();
    } else {
      ctx.beginPath(); ctx.moveTo(last[0] - 5, last[1] - 5); ctx.lineTo(last[0] + 5, last[1] + 5);
      ctx.moveTo(last[0] + 5, last[1] - 5); ctx.lineTo(last[0] - 5, last[1] + 5);
      ctx.strokeStyle = '#b01e35'; ctx.lineWidth = 2.5; ctx.stroke();
    }
  }
  const origin = transform(points[0]);
  ctx.fillStyle = '#69737e'; ctx.font = '10px system-ui'; ctx.fillText('Track origin (0 m)', origin[0] - 30, origin[1] + 19);
  panel.root.querySelector('[data-stat=solo]').textContent = `${pct(student.solo_lap_rate)} (${Math.round(student.solo_lap_rate * data.starts)}/${data.starts})`;
  panel.root.querySelector('[data-stat=coached]').textContent = `${pct(student.coached_lap_rate)} (${Math.round(student.coached_lap_rate * data.starts)}/${data.starts})`;
  panel.root.querySelector('[data-stat=alpha]').textContent = (average ? student.mean_alpha : episode.alpha).toFixed(3);
  const outcome = panel.root.querySelector('[data-outcome]');
  outcome.dataset.failed = String(!average && episode.outcome !== 'lap');
  if (average) {
    const coverage = student.profile.episodes.filter(n => n > 0);
    outcome.textContent = `${coverage.length}/${metadata.track.bins} road bins observed | ${coverage.length ? Math.min(...coverage) : 0}-${Math.max(0, ...coverage)}/${data.starts} drives per observed bin`;
  } else {
    const label = {lap: 'Lap completed', crash: 'Crash', stall: 'Stalled', timeout: 'Time limit', unknown: 'Unknown end'}[episode.outcome];
    outcome.textContent = `Start ${start} | ${label} at ${episode.seconds.toFixed(1)} s | lap progress ${pct(episode.progress)}`;
  }
  canvas.dataset.segments = String(panel.hits.length);
  canvas.dataset.student = `s${student.seed}:${student.update}`;
  canvas.dataset.seed = String(data.seed);
  canvas.dataset.mode = mode();
  panel.root.querySelector('.tooltip').hidden = true;
}

function redraw() {
  if (!data) return;
  panels.forEach(draw);
  const average = mode() === 'mean'; $('#start').disabled = average;
  $('#caption').textContent = average ?
    'Road means: time-weighted within each drive, then equal weight per visiting drive. Grey = unobserved. Header mean alpha is the whole-drive average, not the mean of road bins.' :
    'Open green circle = first saved point; filled green circle = completed lap; red cross = unsuccessful end. First 0.5 s omitted from the drawing. Same start index in both panels.';
}

async function loadSeed() {
  const token = ++request, seed = Number($('#seed').value);
  $('#status').textContent = `Loading Coach seed ${seed}...`;
  $('#status').dataset.error = 'false';
  try {
    if (!cache.has(seed)) cache.set(seed, await json(`seed${seed}.json`));
    if (token !== request) return;
    data = cache.get(seed);
    for (const [index, panel] of panels.entries()) {
      const selected = panel.select.value || String(index === 0 ? 0 : 15);
      panel.select.replaceChildren(...data.students.map((student, i) =>
        new Option(`s${student.seed} / update ${student.update} - solo laps ${pct(student.solo_lap_rate)}`, i)));
      panel.select.value = selected;
    }
    $('#status').textContent = `Coach seed ${seed} | 16 frozen students | 16 paired starts each | all failures retained`;
    document.body.dataset.ready = 'true'; redraw();
  } catch (error) {
    if (token !== request) return;
    $('#status').textContent = `Unable to load recorded results: ${error.message}`;
    $('#status').dataset.error = 'true';
  }
}

for (const panel of panels) {
  panel.select.addEventListener('change', redraw);
  const canvas = panel.root.querySelector('canvas'), tooltip = panel.root.querySelector('.tooltip');
  new ResizeObserver(() => draw(panel)).observe(canvas);
  canvas.addEventListener('pointermove', event => {
    const rect = canvas.getBoundingClientRect(), x = event.clientX - rect.left, y = event.clientY - rect.top;
    let best, distance = 16;
    for (const hit of panel.hits) {
      const dx = hit.b[0] - hit.a[0], dy = hit.b[1] - hit.a[1];
      const t = Math.max(0, Math.min(1, ((x - hit.a[0]) * dx + (y - hit.a[1]) * dy) / (dx * dx + dy * dy || 1)));
      const d = Math.hypot(x - hit.a[0] - t * dx, y - hit.a[1] - t * dy);
      if (d < distance) { distance = d; best = hit; }
    }
    tooltip.hidden = !best;
    if (best) {
      tooltip.textContent = best.label;
      tooltip.style.left = `${Math.max(0, Math.min(x + 12, rect.width - 237))}px`;
      tooltip.style.top = `${Math.max(0, Math.min(y + 12, rect.height - 54))}px`;
    }
  });
  canvas.addEventListener('pointerleave', () => { tooltip.hidden = true; });
}
$('#seed').addEventListener('change', loadSeed);
$('#start').addEventListener('change', redraw);
document.querySelectorAll('input[name=mode]').forEach(input => input.addEventListener('change', redraw));

try {
  metadata = await json('metadata.json');
  $('#colorbar').style.background = `linear-gradient(to right,${metadata.palette.join(',')})`;
  const first = await json('seed0.json'); cache.set(0, first);
  $('#start').replaceChildren(...Array.from({length: first.starts}, (_, i) => new Option(`Start ${i}`, i)));
  await loadSeed();
} catch (error) {
  $('#status').textContent = `Unable to load recorded results: ${error.message}`; $('#status').dataset.error = 'true';
}
