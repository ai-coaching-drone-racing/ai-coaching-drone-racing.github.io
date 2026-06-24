document.addEventListener("DOMContentLoaded", () => {
  const toc = document.querySelector(".toc");
  const tocTrigger = document.querySelector(".publication-header");
  const tocLinks = Array.from(document.querySelectorAll(".toc a[href^='#']"));

  function checkTocVisibility() {
    if (!toc || !tocTrigger) {
      return;
    }

    const triggerRect = tocTrigger.getBoundingClientRect();
    toc.classList.toggle("show", triggerRect.top <= 140);
  }

  const sections = tocLinks
    .map((link) => {
      const section = document.getElementById(link.getAttribute("href").slice(1));
      return section ? { element: section, link } : null;
    })
    .filter(Boolean);

  function updateActiveTocLink() {
    if (!sections.length) {
      return;
    }

    const scrollPosition = window.scrollY + 150;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    let currentSection = null;

    if (window.scrollY + windowHeight >= documentHeight - 50) {
      currentSection = sections[sections.length - 1];
    } else {
      currentSection = sections.find(({ element }) => {
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (!currentSection) {
        currentSection = sections
          .slice()
          .reverse()
          .find(({ element }) => element.getBoundingClientRect().top + window.scrollY <= scrollPosition);
      }
    }

    tocLinks.forEach((link) => link.classList.remove("active"));

    if (currentSection) {
      currentSection.link.classList.add("active");
    }
  }

  function updateToc() {
    checkTocVisibility();
    updateActiveTocLink();
  }

  window.addEventListener("scroll", updateToc, { passive: true });
  window.addEventListener("resize", updateToc);
  updateToc();

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  document.querySelectorAll(".youtube-embed[data-ytid]").forEach((container) => {
    container.querySelector(".yt-play").addEventListener("click", () => {
      const id = container.dataset.ytid;
      container.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1" title="AI Coaching paper overview video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    });
  });

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) {
        return;
      }

      try {
        await copyText(target.textContent.trim());
        button.textContent = "Copied";
        button.classList.add("copied");
      } catch {
        button.textContent = "Copy failed";
      }
    });
  });
});
