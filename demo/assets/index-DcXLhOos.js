(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const f_="modulepreload",d_=function(i){return"/demo/"+i},hc={},h_=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){let p=function(h){return Promise.all(h.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),f=c?.nonce||c?.getAttribute("nonce");a=p(t.map(h=>{if(h=d_(h),h in hc)return;hc[h]=!0;const _=h.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const m=document.createElement("link");if(m.rel=_?"stylesheet":f_,_||(m.as="script"),m.crossOrigin="",m.href=h,f&&m.setAttribute("nonce",f),document.head.appendChild(m),_)return new Promise((x,b)=>{m.addEventListener("load",x),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&o(f.reason);return e().catch(o)})};var p_=(async function(i={}){var e,t=i,n=typeof window=="object",a=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!o&&!a;if(o){const{createRequire:r}=await h_(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>Ry);return{createRequire:s}},void 0);var f=r(import.meta.url)}var p="./this.program",h=(r,s)=>{throw s},_=import.meta.url,g="";function m(r){return t.locateFile?t.locateFile(r,g):g+r}var x,b;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var P=process.versions.node,y=P.split(".").slice(0,3);if(y=y[0]*1e4+y[1]*100+y[2].split("-")[0]*1,y<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+P+")");var S=f("fs");_.startsWith("file:")&&(g=f("path").dirname(f("url").fileURLToPath(_))+"/"),b=s=>{s=W(s)?new URL(s):s;var l=S.readFileSync(s);return C(Buffer.isBuffer(l)),l},x=async(s,l=!0)=>{s=W(s)?new URL(s):s;var u=S.readFileSync(s,l?void 0:"utf8");return C(l?Buffer.isBuffer(u):typeof u=="string"),u},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),h=(s,l)=>{throw process.exitCode=s,l}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||a){try{g=new URL(".",_).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");a&&(b=r=>{var s=new XMLHttpRequest;return s.open("GET",r,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),x=async r=>{if(W(r))return new Promise((l,u)=>{var d=new XMLHttpRequest;d.open("GET",r,!0),d.responseType="arraybuffer",d.onload=()=>{if(d.status==200||d.status==0&&d.response){l(d.response);return}u(d.status)},d.onerror=u,d.send(null)});var s=await fetch(r,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var D=console.log.bind(console),F=console.error.bind(console);C(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var L;typeof WebAssembly!="object"&&F("no native wasm support detected");var O=!1;function C(r,s){r||G("Assertion failed"+(s?": "+s:""))}var W=r=>r.startsWith("file://");function A(){var r=Ma();C((r&3)==0),r==0&&(r+=4),Ee[r>>2]=34821223,Ee[r+4>>2]=2310721022,Ee[0]=1668509029}function I(){if(!O){var r=Ma();r==0&&(r+=4);var s=Ee[r>>2],l=Ee[r+4>>2];(s!=34821223||l!=2310721022)&&G(`Stack overflow! Stack cookie has been overwritten at ${Pe(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Pe(l)} ${Pe(s)}`),Ee[0]!=1668509029&&G("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class k extends Error{}class z extends k{}class ne extends k{constructor(s){super(s),this.excPtr=s;const l=Jl(s);this.name=l[0],this.message=l[1]}}(()=>{var r=new Int16Array(1),s=new Int8Array(r.buffer);if(r[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function te(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){G(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Q(r){return()=>C(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function re(r){Object.getOwnPropertyDescriptor(t,r)&&G(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function Z(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function J(r,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){s()}})}function Se(r,s){J(r,()=>{Fe(`\`${r}\` is not longer defined by emscripten. ${s}`)})}Se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Se("asm","Please use wasmExports instead");function pe(r){J(r,()=>{var s=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=r;l.startsWith("_")||(l="$"+r),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,Z(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Fe(s)}),Ce(r)}function Ce(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var s=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Z(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),G(s)}})}var Ie,Ae,We,Ke,Je,oe,ve,ie,Ee,He,$e,Et,ot,dt=!1;function Tt(){var r=We.buffer;Ke=new Int8Array(r),oe=new Int16Array(r),Je=new Uint8Array(r),ve=new Uint16Array(r),ie=new Int32Array(r),Ee=new Uint32Array(r),He=new Float32Array(r),$e=new Float64Array(r),Et=new BigInt64Array(r),ot=new BigUint64Array(r)}C(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function nt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Te(t.preRun.shift());te("preRun"),Be(H)}function Ut(){C(!dt),dt=!0,I(),!t.noFSInit&&!E.initialized&&E.init(),Ni.__wasm_call_ctors(),E.ignorePermissions=!1}function V(){if(I(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)it(t.postRun.shift());te("postRun"),Be(De)}var Pt=0,ut=null,gt={},Ue=null;function U(r){Pt++,t.monitorRunDependencies?.(Pt),r?(C(!gt[r]),gt[r]=1,Ue===null&&typeof setInterval<"u"&&(Ue=setInterval(()=>{if(O){clearInterval(Ue),Ue=null;return}var s=!1;for(var l in gt)s||(s=!0,F("still waiting on run dependencies:")),F(`dependency: ${l}`);s&&F("(end of list)")},1e4))):F("warning: run dependency added without ID")}function M(r){if(Pt--,t.monitorRunDependencies?.(Pt),r?(C(gt[r]),delete gt[r]):F("warning: run dependency removed without ID"),Pt==0&&(Ue!==null&&(clearInterval(Ue),Ue=null),ut)){var s=ut;ut=null,s()}}function G(r){t.onAbort?.(r),r="Aborted("+r+")",F(r),O=!0;var s=new WebAssembly.RuntimeError(r);throw Ae?.(s),s}function ae(r,s){return(...l)=>{C(dt,`native function \`${r}\` called before runtime initialization`);var u=Ni[r];return C(u,`exported native function \`${r}\` not found`),C(l.length<=s,`native function \`${r}\` called with ${l.length} args but expects ${s}`),u(...l)}}var he;function le(){return t.locateFile?m("mujoco.wasm"):new URL("/demo/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Ne(r){if(r==he&&L)return new Uint8Array(L);if(b)return b(r);throw"both async and sync fetching of the wasm failed"}async function be(r){if(!L)try{var s=await x(r);return new Uint8Array(s)}catch{}return Ne(r)}async function Ge(r,s){try{var l=await be(r),u=await WebAssembly.instantiate(l,s);return u}catch(d){F(`failed to asynchronously prepare wasm: ${d}`),W(he)&&F(`warning: Loading from a file URI (${he}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),G(d)}}async function qe(r,s,l){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!W(s)&&!o)try{var u=fetch(s,{credentials:"same-origin"}),d=await WebAssembly.instantiateStreaming(u,l);return d}catch(v){F(`wasm streaming compile failed: ${v}`),F("falling back to ArrayBuffer instantiation")}return Ge(s,l)}function xe(){return{env:uc,wasi_snapshot_preview1:uc}}async function Me(){function r(T,w){return Ni=T.exports,We=Ni.memory,C(We,"memory not found in wasm exports"),Tt(),_s=Ni.__indirect_function_table,C(_s,"table not found in wasm exports"),hh(Ni),M("wasm-instantiate"),Ni}U("wasm-instantiate");var s=t;function l(T){return C(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,r(T.instance)}var u=xe();if(t.instantiateWasm)return new Promise((T,w)=>{try{t.instantiateWasm(u,(N,j)=>{T(r(N,j))})}catch(N){F(`Module.instantiateWasm callback failed with error: ${N}`),w(N)}});he??=le();var d=await qe(L,he,u),v=l(d);return v}class Oe{name="ExitStatus";constructor(s){this.message=`Program terminated with exit(${s})`,this.status=s}}var Be=r=>{for(;r.length>0;)r.shift()(t)},De=[],it=r=>De.push(r),H=[],Te=r=>H.push(r),ye=!0,Pe=r=>(C(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),X=r=>rc(r),B=()=>ac(),Fe=r=>{Fe.shown||={},Fe.shown[r]||(Fe.shown[r]=1,o&&(r="warning: "+r),F(r))},Ye=typeof TextDecoder<"u"?new TextDecoder:void 0,vt=(r,s=0,l=NaN)=>{for(var u=s+l,d=s;r[d]&&!(d>=u);)++d;if(d-s>16&&r.buffer&&Ye)return Ye.decode(r.subarray(s,d));for(var v="";s<d;){var T=r[s++];if(!(T&128)){v+=String.fromCharCode(T);continue}var w=r[s++]&63;if((T&224)==192){v+=String.fromCharCode((T&31)<<6|w);continue}var N=r[s++]&63;if((T&240)==224?T=(T&15)<<12|w<<6|N:((T&248)!=240&&Fe("Invalid UTF-8 leading byte "+Pe(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|w<<12|N<<6|r[s++]&63),T<65536)v+=String.fromCharCode(T);else{var j=T-65536;v+=String.fromCharCode(55296|j>>10,56320|j&1023)}}return v},lt=(r,s)=>(C(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?vt(Je,r,s):""),wn=(r,s,l,u)=>G(`Assertion failed: ${lt(r)}, at: `+[s?lt(s):"unknown filename",l,u?lt(u):"unknown function"]),Gt=[],Pi=0,wr=r=>{var s=new gn(r);return s.get_caught()||(s.set_caught(!0),Pi--),s.set_rethrown(!1),Gt.push(s),Ms(r),cc(r)},la=()=>{if(!Gt.length)return 0;var r=Gt[Gt.length-1];return Ms(r.excPtr),r.excPtr},_n=0,ns=()=>{_e(0,0),C(Gt.length>0);var r=Gt.pop();ba(r.excPtr),_n=0};class gn{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){Ee[this.ptr+4>>2]=s}get_type(){return Ee[this.ptr+4>>2]}set_destructor(s){Ee[this.ptr+8>>2]=s}get_destructor(){return Ee[this.ptr+8>>2]}set_caught(s){s=s?1:0,Ke[this.ptr+12]=s}get_caught(){return Ke[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,Ke[this.ptr+13]=s}get_rethrown(){return Ke[this.ptr+13]!=0}init(s,l){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(l)}set_adjusted_ptr(s){Ee[this.ptr+16>>2]=s}get_adjusted_ptr(){return Ee[this.ptr+16>>2]}}var mi=r=>nc(r),Zi=r=>{var s=_n?.excPtr;if(!s)return mi(0),0;var l=new gn(s);l.set_adjusted_ptr(s);var u=l.get_type();if(!u)return mi(0),s;for(var d of r){if(d===0||d===u)break;var v=l.ptr+16;if(lc(d,u,v))return mi(d),s}return mi(u),s},is=()=>Zi([]),Ji=r=>Zi([r]),rs=(r,s)=>Zi([r,s]),Di=()=>{var r=Gt.pop();r||G("no exception to throw");var s=r.excPtr;throw r.get_rethrown()||(Gt.push(r),r.set_rethrown(!0),r.set_caught(!1),Pi++),_n=new ne(s),_n},ss=r=>{if(r){var s=new gn(r);Gt.push(s),s.set_rethrown(!0),Di()}},as=(r,s,l)=>{var u=new gn(r);throw u.init(s,l),_n=new ne(r),Pi++,_n},ca=()=>Pi,ua=r=>{throw _n||(_n=new ne(r)),_n},wt={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(r).slice(1)},normalizeArray:(r,s)=>{for(var l=0,u=r.length-1;u>=0;u--){var d=r[u];d==="."?r.splice(u,1):d===".."?(r.splice(u,1),l++):l&&(r.splice(u,1),l--)}if(s)for(;l;l--)r.unshift("..");return r},normalize:r=>{var s=wt.isAbs(r),l=r.slice(-1)==="/";return r=wt.normalizeArray(r.split("/").filter(u=>!!u),!s).join("/"),!r&&!s&&(r="."),r&&l&&(r+="/"),(s?"/":"")+r},dirname:r=>{var s=wt.splitPath(r),l=s[0],u=s[1];return!l&&!u?".":(u&&(u=u.slice(0,-1)),l+u)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>wt.normalize(r.join("/")),join2:(r,s)=>wt.normalize(r+"/"+s)},fa=()=>{if(o){var r=f("crypto");return s=>r.randomFillSync(s)}return s=>crypto.getRandomValues(s)},os=r=>{(os=fa())(r)},_i={resolve:(...r)=>{for(var s="",l=!1,u=r.length-1;u>=-1&&!l;u--){var d=u>=0?r[u]:E.cwd();if(typeof d!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!d)return"";s=d+"/"+s,l=wt.isAbs(d)}return s=wt.normalizeArray(s.split("/").filter(v=>!!v),!l).join("/"),(l?"/":"")+s||"."},relative:(r,s)=>{r=_i.resolve(r).slice(1),s=_i.resolve(s).slice(1);function l(j){for(var Y=0;Y<j.length&&j[Y]==="";Y++);for(var ce=j.length-1;ce>=0&&j[ce]==="";ce--);return Y>ce?[]:j.slice(Y,ce-Y+1)}for(var u=l(r.split("/")),d=l(s.split("/")),v=Math.min(u.length,d.length),T=v,w=0;w<v;w++)if(u[w]!==d[w]){T=w;break}for(var N=[],w=T;w<u.length;w++)N.push("..");return N=N.concat(d.slice(T)),N.join("/")}},R=[],$=r=>{for(var s=0,l=0;l<r.length;++l){var u=r.charCodeAt(l);u<=127?s++:u<=2047?s+=2:u>=55296&&u<=57343?(s+=4,++l):s+=3}return s},se=(r,s,l,u)=>{if(C(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(u>0))return 0;for(var d=l,v=l+u-1,T=0;T<r.length;++T){var w=r.codePointAt(T);if(w<=127){if(l>=v)break;s[l++]=w}else if(w<=2047){if(l+1>=v)break;s[l++]=192|w>>6,s[l++]=128|w&63}else if(w<=65535){if(l+2>=v)break;s[l++]=224|w>>12,s[l++]=128|w>>6&63,s[l++]=128|w&63}else{if(l+3>=v)break;w>1114111&&Fe("Invalid Unicode code point "+Pe(w)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[l++]=240|w>>18,s[l++]=128|w>>12&63,s[l++]=128|w>>6&63,s[l++]=128|w&63,T++}}return s[l]=0,l-d},K=(r,s,l)=>{var u=$(r)+1,d=new Array(u),v=se(r,d,0,d.length);return d.length=v,d},q=()=>{if(!R.length){var r=null;if(o){var s=256,l=Buffer.alloc(s),u=0,d=process.stdin.fd;try{u=S.readSync(d,l,0,s)}catch(v){if(v.toString().includes("EOF"))u=0;else throw v}u>0&&(r=l.slice(0,u).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;R=K(r)}return R.shift()},we={ttys:[],init(){},shutdown(){},register(r,s){we.ttys[r]={input:[],output:[],ops:s},E.registerDevice(r,we.stream_ops)},stream_ops:{open(r){var s=we.ttys[r.node.rdev];if(!s)throw new E.ErrnoError(43);r.tty=s,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,s,l,u,d){if(!r.tty||!r.tty.ops.get_char)throw new E.ErrnoError(60);for(var v=0,T=0;T<u;T++){var w;try{w=r.tty.ops.get_char(r.tty)}catch{throw new E.ErrnoError(29)}if(w===void 0&&v===0)throw new E.ErrnoError(6);if(w==null)break;v++,s[l+T]=w}return v&&(r.node.atime=Date.now()),v},write(r,s,l,u,d){if(!r.tty||!r.tty.ops.put_char)throw new E.ErrnoError(60);try{for(var v=0;v<u;v++)r.tty.ops.put_char(r.tty,s[l+v])}catch{throw new E.ErrnoError(29)}return u&&(r.node.mtime=r.node.ctime=Date.now()),v}},default_tty_ops:{get_char(r){return q()},put_char(r,s){s===null||s===10?(D(vt(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){r.output?.length>0&&(D(vt(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,s,l){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,s){s===null||s===10?(F(vt(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){r.output?.length>0&&(F(vt(r.output)),r.output=[])}}},Le=r=>{G("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},de={ops_table:null,mount(r){return de.createNode(null,"/",16895,0)},createNode(r,s,l,u){if(E.isBlkdev(l)||E.isFIFO(l))throw new E.ErrnoError(63);de.ops_table||={dir:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,lookup:de.node_ops.lookup,mknod:de.node_ops.mknod,rename:de.node_ops.rename,unlink:de.node_ops.unlink,rmdir:de.node_ops.rmdir,readdir:de.node_ops.readdir,symlink:de.node_ops.symlink},stream:{llseek:de.stream_ops.llseek}},file:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:{llseek:de.stream_ops.llseek,read:de.stream_ops.read,write:de.stream_ops.write,mmap:de.stream_ops.mmap,msync:de.stream_ops.msync}},link:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,readlink:de.node_ops.readlink},stream:{}},chrdev:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:E.chrdev_stream_ops}};var d=E.createNode(r,s,l,u);return E.isDir(d.mode)?(d.node_ops=de.ops_table.dir.node,d.stream_ops=de.ops_table.dir.stream,d.contents={}):E.isFile(d.mode)?(d.node_ops=de.ops_table.file.node,d.stream_ops=de.ops_table.file.stream,d.usedBytes=0,d.contents=null):E.isLink(d.mode)?(d.node_ops=de.ops_table.link.node,d.stream_ops=de.ops_table.link.stream):E.isChrdev(d.mode)&&(d.node_ops=de.ops_table.chrdev.node,d.stream_ops=de.ops_table.chrdev.stream),d.atime=d.mtime=d.ctime=Date.now(),r&&(r.contents[s]=d,r.atime=r.mtime=r.ctime=d.atime),d},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,s){var l=r.contents?r.contents.length:0;if(!(l>=s)){var u=1024*1024;s=Math.max(s,l*(l<u?2:1.125)>>>0),l!=0&&(s=Math.max(s,256));var d=r.contents;r.contents=new Uint8Array(s),r.usedBytes>0&&r.contents.set(d.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,s){if(r.usedBytes!=s)if(s==0)r.contents=null,r.usedBytes=0;else{var l=r.contents;r.contents=new Uint8Array(s),l&&r.contents.set(l.subarray(0,Math.min(s,r.usedBytes))),r.usedBytes=s}},node_ops:{getattr(r){var s={};return s.dev=E.isChrdev(r.mode)?r.id:1,s.ino=r.id,s.mode=r.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=r.rdev,E.isDir(r.mode)?s.size=4096:E.isFile(r.mode)?s.size=r.usedBytes:E.isLink(r.mode)?s.size=r.link.length:s.size=0,s.atime=new Date(r.atime),s.mtime=new Date(r.mtime),s.ctime=new Date(r.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(r,s){for(const l of["mode","atime","mtime","ctime"])s[l]!=null&&(r[l]=s[l]);s.size!==void 0&&de.resizeFileStorage(r,s.size)},lookup(r,s){throw new E.ErrnoError(44)},mknod(r,s,l,u){return de.createNode(r,s,l,u)},rename(r,s,l){var u;try{u=E.lookupNode(s,l)}catch{}if(u){if(E.isDir(r.mode))for(var d in u.contents)throw new E.ErrnoError(55);E.hashRemoveNode(u)}delete r.parent.contents[r.name],s.contents[l]=r,r.name=l,s.ctime=s.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,s){delete r.contents[s],r.ctime=r.mtime=Date.now()},rmdir(r,s){var l=E.lookupNode(r,s);for(var u in l.contents)throw new E.ErrnoError(55);delete r.contents[s],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,s,l){var u=de.createNode(r,s,41471,0);return u.link=l,u},readlink(r){if(!E.isLink(r.mode))throw new E.ErrnoError(28);return r.link}},stream_ops:{read(r,s,l,u,d){var v=r.node.contents;if(d>=r.node.usedBytes)return 0;var T=Math.min(r.node.usedBytes-d,u);if(C(T>=0),T>8&&v.subarray)s.set(v.subarray(d,d+T),l);else for(var w=0;w<T;w++)s[l+w]=v[d+w];return T},write(r,s,l,u,d,v){if(C(!(s instanceof ArrayBuffer)),s.buffer===Ke.buffer&&(v=!1),!u)return 0;var T=r.node;if(T.mtime=T.ctime=Date.now(),s.subarray&&(!T.contents||T.contents.subarray)){if(v)return C(d===0,"canOwn must imply no weird position inside the file"),T.contents=s.subarray(l,l+u),T.usedBytes=u,u;if(T.usedBytes===0&&d===0)return T.contents=s.slice(l,l+u),T.usedBytes=u,u;if(d+u<=T.usedBytes)return T.contents.set(s.subarray(l,l+u),d),u}if(de.expandFileStorage(T,d+u),T.contents.subarray&&s.subarray)T.contents.set(s.subarray(l,l+u),d);else for(var w=0;w<u;w++)T.contents[d+w]=s[l+w];return T.usedBytes=Math.max(T.usedBytes,d+u),u},llseek(r,s,l){var u=s;if(l===1?u+=r.position:l===2&&E.isFile(r.node.mode)&&(u+=r.node.usedBytes),u<0)throw new E.ErrnoError(28);return u},mmap(r,s,l,u,d){if(!E.isFile(r.node.mode))throw new E.ErrnoError(43);var v,T,w=r.node.contents;if(!(d&2)&&w&&w.buffer===Ke.buffer)T=!1,v=w.byteOffset;else{if(T=!0,v=Le(),!v)throw new E.ErrnoError(48);w&&((l>0||l+s<w.length)&&(w.subarray?w=w.subarray(l,l+s):w=Array.prototype.slice.call(w,l,l+s)),Ke.set(w,v))}return{ptr:v,allocated:T}},msync(r,s,l,u,d){return de.stream_ops.write(r,s,0,u,l,!1),0}}},ke=async r=>{var s=await x(r);return C(s,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(s)},ze=(...r)=>E.createDataFile(...r),Qe=r=>{for(var s=r;;){if(!gt[r])return r;r=s+Math.random()}},tt=[],Ve=(r,s,l,u)=>{typeof Browser<"u"&&Browser.init();var d=!1;return tt.forEach(v=>{d||v.canHandle(s)&&(v.handle(r,s,l,u),d=!0)}),d},Mt=(r,s,l,u,d,v,T,w,N,j)=>{var Y=s?_i.resolve(wt.join2(r,s)):r,ce=Qe(`cp ${Y}`);function fe(ue){function me(je){j?.(),w||ze(r,s,je,u,d,N),v?.(),M(ce)}Ve(ue,Y,me,()=>{T?.(),M(ce)})||me(ue)}U(ce),typeof l=="string"?ke(l).then(fe,T):fe(l)},Nt=r=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=s[r];if(typeof l>"u")throw new Error(`Unknown file open mode: ${r}`);return l},Ft=(r,s)=>{var l=0;return r&&(l|=365),s&&(l|=146),l},At=r=>lt(tc(r)),Ht={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},E={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(r){super(dt?At(r):""),this.errno=r;for(var s in Ht)if(Ht[s]===r){this.code=s;break}}},FSStream:class{shared={};get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(r,s,l,u){r||(r=this),this.parent=r,this.mount=r.mount,this.id=E.nextInode++,this.name=s,this.mode=l,this.rdev=u,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return E.isDir(this.mode)}get isDevice(){return E.isChrdev(this.mode)}},lookupPath(r,s={}){if(!r)throw new E.ErrnoError(44);s.follow_mount??=!0,wt.isAbs(r)||(r=E.cwd()+"/"+r);e:for(var l=0;l<40;l++){for(var u=r.split("/").filter(j=>!!j),d=E.root,v="/",T=0;T<u.length;T++){var w=T===u.length-1;if(w&&s.parent)break;if(u[T]!=="."){if(u[T]===".."){if(v=wt.dirname(v),E.isRoot(d)){r=v+"/"+u.slice(T+1).join("/");continue e}else d=d.parent;continue}v=wt.join2(v,u[T]);try{d=E.lookupNode(d,u[T])}catch(j){if(j?.errno===44&&w&&s.noent_okay)return{path:v};throw j}if(E.isMountpoint(d)&&(!w||s.follow_mount)&&(d=d.mounted.root),E.isLink(d.mode)&&(!w||s.follow)){if(!d.node_ops.readlink)throw new E.ErrnoError(52);var N=d.node_ops.readlink(d);wt.isAbs(N)||(N=wt.dirname(v)+"/"+N),r=N+"/"+u.slice(T+1).join("/");continue e}}}return{path:v,node:d}}throw new E.ErrnoError(32)},getPath(r){for(var s;;){if(E.isRoot(r)){var l=r.mount.mountpoint;return s?l[l.length-1]!=="/"?`${l}/${s}`:l+s:l}s=s?`${r.name}/${s}`:r.name,r=r.parent}},hashName(r,s){for(var l=0,u=0;u<s.length;u++)l=(l<<5)-l+s.charCodeAt(u)|0;return(r+l>>>0)%E.nameTable.length},hashAddNode(r){var s=E.hashName(r.parent.id,r.name);r.name_next=E.nameTable[s],E.nameTable[s]=r},hashRemoveNode(r){var s=E.hashName(r.parent.id,r.name);if(E.nameTable[s]===r)E.nameTable[s]=r.name_next;else for(var l=E.nameTable[s];l;){if(l.name_next===r){l.name_next=r.name_next;break}l=l.name_next}},lookupNode(r,s){var l=E.mayLookup(r);if(l)throw new E.ErrnoError(l);for(var u=E.hashName(r.id,s),d=E.nameTable[u];d;d=d.name_next){var v=d.name;if(d.parent.id===r.id&&v===s)return d}return E.lookup(r,s)},createNode(r,s,l,u){C(typeof r=="object");var d=new E.FSNode(r,s,l,u);return E.hashAddNode(d),d},destroyNode(r){E.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var s=["r","w","rw"][r&3];return r&512&&(s+="w"),s},nodePermissions(r,s){return E.ignorePermissions?0:s.includes("r")&&!(r.mode&292)||s.includes("w")&&!(r.mode&146)||s.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!E.isDir(r.mode))return 54;var s=E.nodePermissions(r,"x");return s||(r.node_ops.lookup?0:2)},mayCreate(r,s){if(!E.isDir(r.mode))return 54;try{var l=E.lookupNode(r,s);return 20}catch{}return E.nodePermissions(r,"wx")},mayDelete(r,s,l){var u;try{u=E.lookupNode(r,s)}catch(v){return v.errno}var d=E.nodePermissions(r,"wx");if(d)return d;if(l){if(!E.isDir(u.mode))return 54;if(E.isRoot(u)||E.getPath(u)===E.cwd())return 10}else if(E.isDir(u.mode))return 31;return 0},mayOpen(r,s){return r?E.isLink(r.mode)?32:E.isDir(r.mode)&&(E.flagsToPermissionString(s)!=="r"||s&576)?31:E.nodePermissions(r,E.flagsToPermissionString(s)):44},checkOpExists(r,s){if(!r)throw new E.ErrnoError(s);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=E.MAX_OPEN_FDS;r++)if(!E.streams[r])return r;throw new E.ErrnoError(33)},getStreamChecked(r){var s=E.getStream(r);if(!s)throw new E.ErrnoError(8);return s},getStream:r=>E.streams[r],createStream(r,s=-1){return C(s>=-1),r=Object.assign(new E.FSStream,r),s==-1&&(s=E.nextfd()),r.fd=s,E.streams[s]=r,r},closeStream(r){E.streams[r]=null},dupStream(r,s=-1){var l=E.createStream(r,s);return l.stream_ops?.dup?.(l),l},doSetAttr(r,s,l){var u=r?.stream_ops.setattr,d=u?r:s;u??=s.node_ops.setattr,E.checkOpExists(u,63),u(d,l)},chrdev_stream_ops:{open(r){var s=E.getDevice(r.node.rdev);r.stream_ops=s.stream_ops,r.stream_ops.open?.(r)},llseek(){throw new E.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,s)=>r<<8|s,registerDevice(r,s){E.devices[r]={stream_ops:s}},getDevice:r=>E.devices[r],getMounts(r){for(var s=[],l=[r];l.length;){var u=l.pop();s.push(u),l.push(...u.mounts)}return s},syncfs(r,s){typeof r=="function"&&(s=r,r=!1),E.syncFSRequests++,E.syncFSRequests>1&&F(`warning: ${E.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=E.getMounts(E.root.mount),u=0;function d(T){return C(E.syncFSRequests>0),E.syncFSRequests--,s(T)}function v(T){if(T)return v.errored?void 0:(v.errored=!0,d(T));++u>=l.length&&d(null)}l.forEach(T=>{if(!T.type.syncfs)return v(null);T.type.syncfs(T,r,v)})},mount(r,s,l){if(typeof r=="string")throw r;var u=l==="/",d=!l,v;if(u&&E.root)throw new E.ErrnoError(10);if(!u&&!d){var T=E.lookupPath(l,{follow_mount:!1});if(l=T.path,v=T.node,E.isMountpoint(v))throw new E.ErrnoError(10);if(!E.isDir(v.mode))throw new E.ErrnoError(54)}var w={type:r,opts:s,mountpoint:l,mounts:[]},N=r.mount(w);return N.mount=w,w.root=N,u?E.root=N:v&&(v.mounted=w,v.mount&&v.mount.mounts.push(w)),N},unmount(r){var s=E.lookupPath(r,{follow_mount:!1});if(!E.isMountpoint(s.node))throw new E.ErrnoError(28);var l=s.node,u=l.mounted,d=E.getMounts(u);Object.keys(E.nameTable).forEach(T=>{for(var w=E.nameTable[T];w;){var N=w.name_next;d.includes(w.mount)&&E.destroyNode(w),w=N}}),l.mounted=null;var v=l.mount.mounts.indexOf(u);C(v!==-1),l.mount.mounts.splice(v,1)},lookup(r,s){return r.node_ops.lookup(r,s)},mknod(r,s,l){var u=E.lookupPath(r,{parent:!0}),d=u.node,v=wt.basename(r);if(!v)throw new E.ErrnoError(28);if(v==="."||v==="..")throw new E.ErrnoError(20);var T=E.mayCreate(d,v);if(T)throw new E.ErrnoError(T);if(!d.node_ops.mknod)throw new E.ErrnoError(63);return d.node_ops.mknod(d,v,s,l)},statfs(r){return E.statfsNode(E.lookupPath(r,{follow:!0}).node)},statfsStream(r){return E.statfsNode(r.node)},statfsNode(r){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:E.nextInode,ffree:E.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(s,r.node_ops.statfs(r.mount.opts.root)),s},create(r,s=438){return s&=4095,s|=32768,E.mknod(r,s,0)},mkdir(r,s=511){return s&=1023,s|=16384,E.mknod(r,s,0)},mkdirTree(r,s){var l=r.split("/"),u="";for(var d of l)if(d){(u||wt.isAbs(r))&&(u+="/"),u+=d;try{E.mkdir(u,s)}catch(v){if(v.errno!=20)throw v}}},mkdev(r,s,l){return typeof l>"u"&&(l=s,s=438),s|=8192,E.mknod(r,s,l)},symlink(r,s){if(!_i.resolve(r))throw new E.ErrnoError(44);var l=E.lookupPath(s,{parent:!0}),u=l.node;if(!u)throw new E.ErrnoError(44);var d=wt.basename(s),v=E.mayCreate(u,d);if(v)throw new E.ErrnoError(v);if(!u.node_ops.symlink)throw new E.ErrnoError(63);return u.node_ops.symlink(u,d,r)},rename(r,s){var l=wt.dirname(r),u=wt.dirname(s),d=wt.basename(r),v=wt.basename(s),T,w,N;if(T=E.lookupPath(r,{parent:!0}),w=T.node,T=E.lookupPath(s,{parent:!0}),N=T.node,!w||!N)throw new E.ErrnoError(44);if(w.mount!==N.mount)throw new E.ErrnoError(75);var j=E.lookupNode(w,d),Y=_i.relative(r,u);if(Y.charAt(0)!==".")throw new E.ErrnoError(28);if(Y=_i.relative(s,l),Y.charAt(0)!==".")throw new E.ErrnoError(55);var ce;try{ce=E.lookupNode(N,v)}catch{}if(j!==ce){var fe=E.isDir(j.mode),ue=E.mayDelete(w,d,fe);if(ue)throw new E.ErrnoError(ue);if(ue=ce?E.mayDelete(N,v,fe):E.mayCreate(N,v),ue)throw new E.ErrnoError(ue);if(!w.node_ops.rename)throw new E.ErrnoError(63);if(E.isMountpoint(j)||ce&&E.isMountpoint(ce))throw new E.ErrnoError(10);if(N!==w&&(ue=E.nodePermissions(w,"w"),ue))throw new E.ErrnoError(ue);E.hashRemoveNode(j);try{w.node_ops.rename(j,N,v),j.parent=N}catch(me){throw me}finally{E.hashAddNode(j)}}},rmdir(r){var s=E.lookupPath(r,{parent:!0}),l=s.node,u=wt.basename(r),d=E.lookupNode(l,u),v=E.mayDelete(l,u,!0);if(v)throw new E.ErrnoError(v);if(!l.node_ops.rmdir)throw new E.ErrnoError(63);if(E.isMountpoint(d))throw new E.ErrnoError(10);l.node_ops.rmdir(l,u),E.destroyNode(d)},readdir(r){var s=E.lookupPath(r,{follow:!0}),l=s.node,u=E.checkOpExists(l.node_ops.readdir,54);return u(l)},unlink(r){var s=E.lookupPath(r,{parent:!0}),l=s.node;if(!l)throw new E.ErrnoError(44);var u=wt.basename(r),d=E.lookupNode(l,u),v=E.mayDelete(l,u,!1);if(v)throw new E.ErrnoError(v);if(!l.node_ops.unlink)throw new E.ErrnoError(63);if(E.isMountpoint(d))throw new E.ErrnoError(10);l.node_ops.unlink(l,u),E.destroyNode(d)},readlink(r){var s=E.lookupPath(r),l=s.node;if(!l)throw new E.ErrnoError(44);if(!l.node_ops.readlink)throw new E.ErrnoError(28);return l.node_ops.readlink(l)},stat(r,s){var l=E.lookupPath(r,{follow:!s}),u=l.node,d=E.checkOpExists(u.node_ops.getattr,63);return d(u)},fstat(r){var s=E.getStreamChecked(r),l=s.node,u=s.stream_ops.getattr,d=u?s:l;return u??=l.node_ops.getattr,E.checkOpExists(u,63),u(d)},lstat(r){return E.stat(r,!0)},doChmod(r,s,l,u){E.doSetAttr(r,s,{mode:l&4095|s.mode&-4096,ctime:Date.now(),dontFollow:u})},chmod(r,s,l){var u;if(typeof r=="string"){var d=E.lookupPath(r,{follow:!l});u=d.node}else u=r;E.doChmod(null,u,s,l)},lchmod(r,s){E.chmod(r,s,!0)},fchmod(r,s){var l=E.getStreamChecked(r);E.doChmod(l,l.node,s,!1)},doChown(r,s,l){E.doSetAttr(r,s,{timestamp:Date.now(),dontFollow:l})},chown(r,s,l,u){var d;if(typeof r=="string"){var v=E.lookupPath(r,{follow:!u});d=v.node}else d=r;E.doChown(null,d,u)},lchown(r,s,l){E.chown(r,s,l,!0)},fchown(r,s,l){var u=E.getStreamChecked(r);E.doChown(u,u.node,!1)},doTruncate(r,s,l){if(E.isDir(s.mode))throw new E.ErrnoError(31);if(!E.isFile(s.mode))throw new E.ErrnoError(28);var u=E.nodePermissions(s,"w");if(u)throw new E.ErrnoError(u);E.doSetAttr(r,s,{size:l,timestamp:Date.now()})},truncate(r,s){if(s<0)throw new E.ErrnoError(28);var l;if(typeof r=="string"){var u=E.lookupPath(r,{follow:!0});l=u.node}else l=r;E.doTruncate(null,l,s)},ftruncate(r,s){var l=E.getStreamChecked(r);if(s<0||(l.flags&2097155)===0)throw new E.ErrnoError(28);E.doTruncate(l,l.node,s)},utime(r,s,l){var u=E.lookupPath(r,{follow:!0}),d=u.node,v=E.checkOpExists(d.node_ops.setattr,63);v(d,{atime:s,mtime:l})},open(r,s,l=438){if(r==="")throw new E.ErrnoError(44);s=typeof s=="string"?Nt(s):s,s&64?l=l&4095|32768:l=0;var u,d;if(typeof r=="object")u=r;else{d=r.endsWith("/");var v=E.lookupPath(r,{follow:!(s&131072),noent_okay:!0});u=v.node,r=v.path}var T=!1;if(s&64)if(u){if(s&128)throw new E.ErrnoError(20)}else{if(d)throw new E.ErrnoError(31);u=E.mknod(r,l|511,0),T=!0}if(!u)throw new E.ErrnoError(44);if(E.isChrdev(u.mode)&&(s&=-513),s&65536&&!E.isDir(u.mode))throw new E.ErrnoError(54);if(!T){var w=E.mayOpen(u,s);if(w)throw new E.ErrnoError(w)}s&512&&!T&&E.truncate(u,0),s&=-131713;var N=E.createStream({node:u,path:E.getPath(u),flags:s,seekable:!0,position:0,stream_ops:u.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),T&&E.chmod(u,l&511),t.logReadFiles&&!(s&1)&&(r in E.readFiles||(E.readFiles[r]=1)),N},close(r){if(E.isClosed(r))throw new E.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(s){throw s}finally{E.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,s,l){if(E.isClosed(r))throw new E.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new E.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new E.ErrnoError(28);return r.position=r.stream_ops.llseek(r,s,l),r.ungotten=[],r.position},read(r,s,l,u,d){if(C(l>=0),u<0||d<0)throw new E.ErrnoError(28);if(E.isClosed(r))throw new E.ErrnoError(8);if((r.flags&2097155)===1)throw new E.ErrnoError(8);if(E.isDir(r.node.mode))throw new E.ErrnoError(31);if(!r.stream_ops.read)throw new E.ErrnoError(28);var v=typeof d<"u";if(!v)d=r.position;else if(!r.seekable)throw new E.ErrnoError(70);var T=r.stream_ops.read(r,s,l,u,d);return v||(r.position+=T),T},write(r,s,l,u,d,v){if(C(l>=0),u<0||d<0)throw new E.ErrnoError(28);if(E.isClosed(r))throw new E.ErrnoError(8);if((r.flags&2097155)===0)throw new E.ErrnoError(8);if(E.isDir(r.node.mode))throw new E.ErrnoError(31);if(!r.stream_ops.write)throw new E.ErrnoError(28);r.seekable&&r.flags&1024&&E.llseek(r,0,2);var T=typeof d<"u";if(!T)d=r.position;else if(!r.seekable)throw new E.ErrnoError(70);var w=r.stream_ops.write(r,s,l,u,d,v);return T||(r.position+=w),w},mmap(r,s,l,u,d){if((u&2)!==0&&(d&2)===0&&(r.flags&2097155)!==2)throw new E.ErrnoError(2);if((r.flags&2097155)===1)throw new E.ErrnoError(2);if(!r.stream_ops.mmap)throw new E.ErrnoError(43);if(!s)throw new E.ErrnoError(28);return r.stream_ops.mmap(r,s,l,u,d)},msync(r,s,l,u,d){return C(l>=0),r.stream_ops.msync?r.stream_ops.msync(r,s,l,u,d):0},ioctl(r,s,l){if(!r.stream_ops.ioctl)throw new E.ErrnoError(59);return r.stream_ops.ioctl(r,s,l)},readFile(r,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var l=E.open(r,s.flags),u=E.stat(r),d=u.size,v=new Uint8Array(d);return E.read(l,v,0,d,0),s.encoding==="utf8"&&(v=vt(v)),E.close(l),v},writeFile(r,s,l={}){l.flags=l.flags||577;var u=E.open(r,l.flags,l.mode);if(typeof s=="string"&&(s=new Uint8Array(K(s))),ArrayBuffer.isView(s))E.write(u,s,0,s.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");E.close(u)},cwd:()=>E.currentPath,chdir(r){var s=E.lookupPath(r,{follow:!0});if(s.node===null)throw new E.ErrnoError(44);if(!E.isDir(s.node.mode))throw new E.ErrnoError(54);var l=E.nodePermissions(s.node,"x");if(l)throw new E.ErrnoError(l);E.currentPath=s.path},createDefaultDirectories(){E.mkdir("/tmp"),E.mkdir("/home"),E.mkdir("/home/web_user")},createDefaultDevices(){E.mkdir("/dev"),E.registerDevice(E.makedev(1,3),{read:()=>0,write:(u,d,v,T,w)=>T,llseek:()=>0}),E.mkdev("/dev/null",E.makedev(1,3)),we.register(E.makedev(5,0),we.default_tty_ops),we.register(E.makedev(6,0),we.default_tty1_ops),E.mkdev("/dev/tty",E.makedev(5,0)),E.mkdev("/dev/tty1",E.makedev(6,0));var r=new Uint8Array(1024),s=0,l=()=>(s===0&&(os(r),s=r.byteLength),r[--s]);E.createDevice("/dev","random",l),E.createDevice("/dev","urandom",l),E.mkdir("/dev/shm"),E.mkdir("/dev/shm/tmp")},createSpecialDirectories(){E.mkdir("/proc");var r=E.mkdir("/proc/self");E.mkdir("/proc/self/fd"),E.mount({mount(){var s=E.createNode(r,"fd",16895,73);return s.stream_ops={llseek:de.stream_ops.llseek},s.node_ops={lookup(l,u){var d=+u,v=E.getStreamChecked(d),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>v.path},id:d+1};return T.parent=T,T},readdir(){return Array.from(E.streams.entries()).filter(([l,u])=>u).map(([l,u])=>l.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(r,s,l){r?E.createDevice("/dev","stdin",r):E.symlink("/dev/tty","/dev/stdin"),s?E.createDevice("/dev","stdout",null,s):E.symlink("/dev/tty","/dev/stdout"),l?E.createDevice("/dev","stderr",null,l):E.symlink("/dev/tty1","/dev/stderr");var u=E.open("/dev/stdin",0),d=E.open("/dev/stdout",1),v=E.open("/dev/stderr",1);C(u.fd===0,`invalid handle for stdin (${u.fd})`),C(d.fd===1,`invalid handle for stdout (${d.fd})`),C(v.fd===2,`invalid handle for stderr (${v.fd})`)},staticInit(){E.nameTable=new Array(4096),E.mount(de,{},"/"),E.createDefaultDirectories(),E.createDefaultDevices(),E.createSpecialDirectories(),E.filesystems={MEMFS:de}},init(r,s,l){C(!E.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),E.initialized=!0,r??=t.stdin,s??=t.stdout,l??=t.stderr,E.createStandardStreams(r,s,l)},quit(){E.initialized=!1,ya(0);for(var r of E.streams)r&&E.close(r)},findObject(r,s){var l=E.analyzePath(r,s);return l.exists?l.object:null},analyzePath(r,s){try{var l=E.lookupPath(r,{follow:!s});r=l.path}catch{}var u={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=E.lookupPath(r,{parent:!0});u.parentExists=!0,u.parentPath=l.path,u.parentObject=l.node,u.name=wt.basename(r),l=E.lookupPath(r,{follow:!s}),u.exists=!0,u.path=l.path,u.object=l.node,u.name=l.node.name,u.isRoot=l.path==="/"}catch(d){u.error=d.errno}return u},createPath(r,s,l,u){r=typeof r=="string"?r:E.getPath(r);for(var d=s.split("/").reverse();d.length;){var v=d.pop();if(v){var T=wt.join2(r,v);try{E.mkdir(T)}catch(w){if(w.errno!=20)throw w}r=T}}return T},createFile(r,s,l,u,d){var v=wt.join2(typeof r=="string"?r:E.getPath(r),s),T=Ft(u,d);return E.create(v,T)},createDataFile(r,s,l,u,d,v){var T=s;r&&(r=typeof r=="string"?r:E.getPath(r),T=s?wt.join2(r,s):r);var w=Ft(u,d),N=E.create(T,w);if(l){if(typeof l=="string"){for(var j=new Array(l.length),Y=0,ce=l.length;Y<ce;++Y)j[Y]=l.charCodeAt(Y);l=j}E.chmod(N,w|146);var fe=E.open(N,577);E.write(fe,l,0,l.length,0,v),E.close(fe),E.chmod(N,w)}},createDevice(r,s,l,u){var d=wt.join2(typeof r=="string"?r:E.getPath(r),s),v=Ft(!!l,!!u);E.createDevice.major??=64;var T=E.makedev(E.createDevice.major++,0);return E.registerDevice(T,{open(w){w.seekable=!1},close(w){u?.buffer?.length&&u(10)},read(w,N,j,Y,ce){for(var fe=0,ue=0;ue<Y;ue++){var me;try{me=l()}catch{throw new E.ErrnoError(29)}if(me===void 0&&fe===0)throw new E.ErrnoError(6);if(me==null)break;fe++,N[j+ue]=me}return fe&&(w.node.atime=Date.now()),fe},write(w,N,j,Y,ce){for(var fe=0;fe<Y;fe++)try{u(N[j+fe])}catch{throw new E.ErrnoError(29)}return Y&&(w.node.mtime=w.node.ctime=Date.now()),fe}}),E.mkdev(d,v,T)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=b(r.url),r.usedBytes=r.contents.length}catch{throw new E.ErrnoError(29)}},createLazyFile(r,s,l,u,d){class v{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var me=ue%this.chunkSize,je=ue/this.chunkSize|0;return this.getter(je)[me]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",l,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+l+". Status: "+ue.status);var me=Number(ue.getResponseHeader("Content-length")),je,ft=(je=ue.getResponseHeader("Accept-Ranges"))&&je==="bytes",st=(je=ue.getResponseHeader("Content-Encoding"))&&je==="gzip",Lt=1024*1024;ft||(Lt=me);var xt=($t,an)=>{if($t>an)throw new Error("invalid range ("+$t+", "+an+") or no bytes requested!");if(an>me-1)throw new Error("only "+me+" bytes available! programmer error!");var Dt=new XMLHttpRequest;if(Dt.open("GET",l,!1),me!==Lt&&Dt.setRequestHeader("Range","bytes="+$t+"-"+an),Dt.responseType="arraybuffer",Dt.overrideMimeType&&Dt.overrideMimeType("text/plain; charset=x-user-defined"),Dt.send(null),!(Dt.status>=200&&Dt.status<300||Dt.status===304))throw new Error("Couldn't load "+l+". Status: "+Dt.status);return Dt.response!==void 0?new Uint8Array(Dt.response||[]):K(Dt.responseText||"")},en=this;en.setDataGetter($t=>{var an=$t*Lt,Dt=($t+1)*Lt-1;if(Dt=Math.min(Dt,me-1),typeof en.chunks[$t]>"u"&&(en.chunks[$t]=xt(an,Dt)),typeof en.chunks[$t]>"u")throw new Error("doXHR failed!");return en.chunks[$t]}),(st||!me)&&(Lt=me=1,me=this.getter(0).length,Lt=me,D("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Lt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!a)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new v,w={isDevice:!1,contents:T}}else var w={isDevice:!1,url:l};var N=E.createFile(r,s,w,u,d);w.contents?N.contents=w.contents:w.url&&(N.contents=null,N.url=w.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var j={},Y=Object.keys(N.stream_ops);Y.forEach(fe=>{var ue=N.stream_ops[fe];j[fe]=(...me)=>(E.forceLoadFile(N),ue(...me))});function ce(fe,ue,me,je,ft){var st=fe.node.contents;if(ft>=st.length)return 0;var Lt=Math.min(st.length-ft,je);if(C(Lt>=0),st.slice)for(var xt=0;xt<Lt;xt++)ue[me+xt]=st[ft+xt];else for(var xt=0;xt<Lt;xt++)ue[me+xt]=st.get(ft+xt);return Lt}return j.read=(fe,ue,me,je,ft)=>(E.forceLoadFile(N),ce(fe,ue,me,je,ft)),j.mmap=(fe,ue,me,je,ft)=>{E.forceLoadFile(N);var st=Le();if(!st)throw new E.ErrnoError(48);return ce(fe,Ke,st,ue,me),{ptr:st,allocated:!0}},N.stream_ops=j,N},absolutePath(){G("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){G("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){G("FS.createLink has been removed; use FS.symlink instead")},joinPath(){G("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){G("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){G("FS.standardizePath has been removed; use PATH.normalize instead")}},ct={DEFAULT_POLLMASK:5,calculateAt(r,s,l){if(wt.isAbs(s))return s;var u;if(r===-100)u=E.cwd();else{var d=ct.getStreamFromFD(r);u=d.path}if(s.length==0){if(!l)throw new E.ErrnoError(44);return u}return u+"/"+s},writeStat(r,s){ie[r>>2]=s.dev,ie[r+4>>2]=s.mode,Ee[r+8>>2]=s.nlink,ie[r+12>>2]=s.uid,ie[r+16>>2]=s.gid,ie[r+20>>2]=s.rdev,Et[r+24>>3]=BigInt(s.size),ie[r+32>>2]=4096,ie[r+36>>2]=s.blocks;var l=s.atime.getTime(),u=s.mtime.getTime(),d=s.ctime.getTime();return Et[r+40>>3]=BigInt(Math.floor(l/1e3)),Ee[r+48>>2]=l%1e3*1e3*1e3,Et[r+56>>3]=BigInt(Math.floor(u/1e3)),Ee[r+64>>2]=u%1e3*1e3*1e3,Et[r+72>>3]=BigInt(Math.floor(d/1e3)),Ee[r+80>>2]=d%1e3*1e3*1e3,Et[r+88>>3]=BigInt(s.ino),0},writeStatFs(r,s){ie[r+4>>2]=s.bsize,ie[r+40>>2]=s.bsize,ie[r+8>>2]=s.blocks,ie[r+12>>2]=s.bfree,ie[r+16>>2]=s.bavail,ie[r+20>>2]=s.files,ie[r+24>>2]=s.ffree,ie[r+28>>2]=s.fsid,ie[r+44>>2]=s.flags,ie[r+36>>2]=s.namelen},doMsync(r,s,l,u,d){if(!E.isFile(s.node.mode))throw new E.ErrnoError(43);if(u&2)return 0;var v=Je.slice(r,r+l);E.msync(s,v,d,l,u)},getStreamFromFD(r){var s=E.getStreamChecked(r);return s},varargs:void 0,getStr(r){var s=lt(r);return s}};function mt(r,s,l){try{var u=ct.getStreamFromFD(r);if(C(!l),u.fd===s)return-28;if(s<0||s>=E.MAX_OPEN_FDS)return-8;var d=E.getStream(s);return d&&E.close(d),E.dupStream(u,s).fd}catch(v){if(typeof E>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}var Qt=()=>{C(ct.varargs!=null);var r=ie[+ct.varargs>>2];return ct.varargs+=4,r},Kt=Qt;function ii(r,s,l){ct.varargs=l;try{var u=ct.getStreamFromFD(r);switch(s){case 0:{var d=Qt();if(d<0)return-28;for(;E.streams[d];)d++;var v;return v=E.dupStream(u,d),v.fd}case 1:case 2:return 0;case 3:return u.flags;case 4:{var d=Qt();return u.flags|=d,0}case 12:{var d=Kt(),T=0;return oe[d+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(w){if(typeof E>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function gi(r,s){try{return ct.writeStat(s,E.fstat(r))}catch(l){if(typeof E>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Rt(r,s,l){ct.varargs=l;try{var u=ct.getStreamFromFD(r);switch(s){case 21509:return u.tty?0:-59;case 21505:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcgets){var d=u.tty.ops.ioctl_tcgets(u),v=Kt();ie[v>>2]=d.c_iflag||0,ie[v+4>>2]=d.c_oflag||0,ie[v+8>>2]=d.c_cflag||0,ie[v+12>>2]=d.c_lflag||0;for(var T=0;T<32;T++)Ke[v+T+17]=d.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return u.tty?0:-59;case 21506:case 21507:case 21508:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcsets){for(var v=Kt(),w=ie[v>>2],N=ie[v+4>>2],j=ie[v+8>>2],Y=ie[v+12>>2],ce=[],T=0;T<32;T++)ce.push(Ke[v+T+17]);return u.tty.ops.ioctl_tcsets(u.tty,s,{c_iflag:w,c_oflag:N,c_cflag:j,c_lflag:Y,c_cc:ce})}return 0}case 21519:{if(!u.tty)return-59;var v=Kt();return ie[v>>2]=0,0}case 21520:return u.tty?-28:-59;case 21531:{var v=Kt();return E.ioctl(u,s,v)}case 21523:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tiocgwinsz){var fe=u.tty.ops.ioctl_tiocgwinsz(u.tty),v=Kt();oe[v>>1]=fe[0],oe[v+2>>1]=fe[1]}return 0}case 21524:return u.tty?0:-59;case 21515:return u.tty?0:-59;default:return-28}}catch(ue){if(typeof E>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function Wt(r,s){try{return r=ct.getStr(r),ct.writeStat(s,E.lstat(r))}catch(l){if(typeof E>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function zn(r,s,l,u){try{s=ct.getStr(s);var d=u&256,v=u&4096;return u=u&-6401,C(!u,`unknown flags in __syscall_newfstatat: ${u}`),s=ct.calculateAt(r,s,v),ct.writeStat(l,d?E.lstat(s):E.stat(s))}catch(T){if(typeof E>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function zt(r,s,l,u){ct.varargs=u;try{s=ct.getStr(s),s=ct.calculateAt(r,s);var d=u?Qt():0;return E.open(s,l,d).fd}catch(v){if(typeof E>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}function Vn(r,s){try{return r=ct.getStr(r),ct.writeStat(s,E.stat(r))}catch(l){if(typeof E>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var vi=()=>G("native code called abort()"),Bt=r=>{for(var s="";;){var l=Je[r++];if(!l)return s;s+=String.fromCharCode(l)}},Qi={},Fi={},ls={},Ar=class extends Error{constructor(s){super(s),this.name="BindingError"}},ht=r=>{throw new Ar(r)};function ff(r,s,l={}){var u=s.name;if(r||ht(`type "${u}" must have a positive integer typeid pointer`),Fi.hasOwnProperty(r)){if(l.ignoreDuplicateRegistrations)return;ht(`Cannot register type '${u}' twice`)}if(Fi[r]=s,delete ls[r],Qi.hasOwnProperty(r)){var d=Qi[r];delete Qi[r],d.forEach(v=>v())}}function vn(r,s,l={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return ff(r,s,l)}var wl=(r,s,l)=>{switch(s){case 1:return l?u=>Ke[u]:u=>Je[u];case 2:return l?u=>oe[u>>1]:u=>ve[u>>1];case 4:return l?u=>ie[u>>2]:u=>Ee[u>>2];case 8:return l?u=>Et[u>>3]:u=>ot[u>>3];default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Li=r=>{if(r===null)return"null";var s=typeof r;return s==="object"||s==="array"||s==="function"?r.toString():""+r},Al=(r,s,l,u)=>{if(s<l||s>u)throw new TypeError(`Passing a number "${Li(s)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${l}, ${u}]!`)},df=(r,s,l,u,d)=>{s=Bt(s);const v=u===0n;let T=w=>w;if(v){const w=l*8;T=N=>BigInt.asUintN(w,N),d=T(d)}vn(r,{name:s,fromWireType:T,toWireType:(w,N)=>{if(typeof N=="number")N=BigInt(N);else if(typeof N!="bigint")throw new TypeError(`Cannot convert "${Li(N)}" to ${this.name}`);return Al(s,N,u,d),N},argPackAdvance:Gn,readValueFromPointer:wl(s,l,!v),destructorFunction:null})},Gn=8,hf=(r,s,l,u)=>{s=Bt(s),vn(r,{name:s,fromWireType:function(d){return!!d},toWireType:function(d,v){return v?l:u},argPackAdvance:Gn,readValueFromPointer:function(d){return this.fromWireType(Je[d])},destructorFunction:null})},pf=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),da=r=>{function s(l){return l.$$.ptrType.registeredClass.name}ht(s(r)+" instance already deleted")},ha=!1,Rl=r=>{},mf=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},Cl=r=>{r.count.value-=1;var s=r.count.value===0;s&&mf(r)},Pl=(r,s,l)=>{if(s===l)return r;if(l.baseClass===void 0)return null;var u=Pl(r,s,l.baseClass);return u===null?null:l.downcast(u)},Dl={},_f={},gf=(r,s)=>{for(s===void 0&&ht("ptr should not be undefined");r.baseClass;)s=r.upcast(s),r=r.baseClass;return s},vf=(r,s)=>(s=gf(r,s),_f[s]),xf=class extends Error{constructor(s){super(s),this.name="InternalError"}},cs=r=>{throw new xf(r)},us=(r,s)=>{(!s.ptrType||!s.ptr)&&cs("makeClassHandle requires ptr and ptrType");var l=!!s.smartPtrType,u=!!s.smartPtr;return l!==u&&cs("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Rr(Object.create(r,{$$:{value:s,writable:!0}}))};function Fl(r){var s=this.getPointee(r);if(!s)return this.destructor(r),null;var l=vf(this.registeredClass,s);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=s,l.$$.smartPtr=r,l.clone();var u=l.clone();return this.destructor(r),u}function d(){return this.isSmartPointer?us(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:r}):us(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var v=this.registeredClass.getActualType(s),T=Dl[v];if(!T)return d.call(this);var w;this.isConst?w=T.constPointerType:w=T.pointerType;var N=Pl(s,this.registeredClass,w.registeredClass);return N===null?d.call(this):this.isSmartPointer?us(w.registeredClass.instancePrototype,{ptrType:w,ptr:N,smartPtrType:this,smartPtr:r}):us(w.registeredClass.instancePrototype,{ptrType:w,ptr:N})}var Rr=r=>typeof FinalizationRegistry>"u"?(Rr=s=>s,r):(ha=new FinalizationRegistry(s=>{console.warn(s.leakWarning),Cl(s.$$)}),Rr=s=>{var l=s.$$,u=!!l.smartPtr;if(u){var d={$$:l},v=l.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${v.name} <${Pe(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,Fl),d.leakWarning=T.stack.replace(/^Error: /,""),ha.register(s,d,s)}return s},Rl=s=>ha.unregister(s),Rr(r)),Sf=()=>{let r=fs.prototype;Object.assign(r,{isAliasOf(l){if(!(this instanceof fs)||!(l instanceof fs))return!1;var u=this.$$.ptrType.registeredClass,d=this.$$.ptr;l.$$=l.$$;for(var v=l.$$.ptrType.registeredClass,T=l.$$.ptr;u.baseClass;)d=u.upcast(d),u=u.baseClass;for(;v.baseClass;)T=v.upcast(T),v=v.baseClass;return u===v&&d===T},clone(){if(this.$$.ptr||da(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=Rr(Object.create(Object.getPrototypeOf(this),{$$:{value:pf(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||da(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),Rl(this),Cl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||da(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(r[s]=r.delete)};function fs(){}var ds=(r,s)=>Object.defineProperty(s,"name",{value:r}),pa=(r,s,l)=>{if(r[s].overloadTable===void 0){var u=r[s];r[s]=function(...d){return r[s].overloadTable.hasOwnProperty(d.length)||ht(`Function '${l}' called with an invalid number of arguments (${d.length}) - expects one of (${r[s].overloadTable})!`),r[s].overloadTable[d.length].apply(this,d)},r[s].overloadTable=[],r[s].overloadTable[u.argCount]=u}},ma=(r,s,l)=>{t.hasOwnProperty(r)?((l===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[l]!==void 0)&&ht(`Cannot register public name '${r}' twice`),pa(t,r,r),t[r].overloadTable.hasOwnProperty(l)&&ht(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[r].overloadTable[l]=s):(t[r]=s,t[r].argCount=l)},Ef=48,yf=57,Mf=r=>{C(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var s=r.charCodeAt(0);return s>=Ef&&s<=yf?`_${r}`:r};function bf(r,s,l,u,d,v,T,w){this.name=r,this.constructor=s,this.instancePrototype=l,this.rawDestructor=u,this.baseClass=d,this.getActualType=v,this.upcast=T,this.downcast=w,this.pureVirtualFunctions=[]}var hs=(r,s,l)=>{for(;s!==l;)s.upcast||ht(`Expected null or instance of ${l.name}, got an instance of ${s.name}`),r=s.upcast(r),s=s.baseClass;return r};function Tf(r,s){if(s===null)return this.isReference&&ht(`null is not a valid ${this.name}`),0;s.$$||ht(`Cannot pass "${Li(s)}" as a ${this.name}`),s.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=s.$$.ptrType.registeredClass,u=hs(s.$$.ptr,l,this.registeredClass);return u}function wf(r,s){var l;if(s===null)return this.isReference&&ht(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,l),l):0;(!s||!s.$$)&&ht(`Cannot pass "${Li(s)}" as a ${this.name}`),s.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&ht(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var u=s.$$.ptrType.registeredClass;if(l=hs(s.$$.ptr,u,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&ht("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?l=s.$$.smartPtr:ht(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)l=s.$$.smartPtr;else{var d=s.clone();l=this.rawShare(l,Xt.toHandle(()=>d.delete())),r!==null&&r.push(this.rawDestructor,l)}break;default:ht("Unsupporting sharing policy")}return l}function Af(r,s){if(s===null)return this.isReference&&ht(`null is not a valid ${this.name}`),0;s.$$||ht(`Cannot pass "${Li(s)}" as a ${this.name}`),s.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&ht(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass,u=hs(s.$$.ptr,l,this.registeredClass);return u}function ps(r){return this.fromWireType(Ee[r>>2])}var Rf=()=>{Object.assign(ms.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:Gn,readValueFromPointer:ps,fromWireType:Fl})};function ms(r,s,l,u,d,v,T,w,N,j,Y){this.name=r,this.registeredClass=s,this.isReference=l,this.isConst=u,this.isSmartPointer=d,this.pointeeType=v,this.sharingPolicy=T,this.rawGetPointee=w,this.rawConstructor=N,this.rawShare=j,this.rawDestructor=Y,!d&&s.baseClass===void 0?u?(this.toWireType=Tf,this.destructorFunction=null):(this.toWireType=Af,this.destructorFunction=null):this.toWireType=wf}var Ll=(r,s,l)=>{t.hasOwnProperty(r)||cs("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&l!==void 0?t[r].overloadTable[l]=s:(t[r]=s,t[r].argCount=l)},Il=[],_s,ge=r=>{var s=Il[r];return s||(Il[r]=s=_s.get(r)),C(_s.get(r)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},Hn=(r,s,l=!1)=>{C(!l,"Async bindings are only supported with JSPI."),r=Bt(r);function u(){var v=ge(s);return v}var d=u();return typeof d!="function"&&ht(`unknown function pointer with signature ${r}: ${s}`),d};class Cf extends Error{}var Ul=r=>{var s=ec(r),l=Bt(s);return Xn(s),l},Ii=(r,s)=>{var l=[],u={};function d(v){if(!u[v]&&!Fi[v]){if(ls[v]){ls[v].forEach(d);return}l.push(v),u[v]=!0}}throw s.forEach(d),new Cf(`${r}: `+l.map(Ul).join([", "]))},An=(r,s,l)=>{r.forEach(w=>ls[w]=s);function u(w){var N=l(w);N.length!==r.length&&cs("Mismatched type converter count");for(var j=0;j<r.length;++j)vn(r[j],N[j])}var d=new Array(s.length),v=[],T=0;s.forEach((w,N)=>{Fi.hasOwnProperty(w)?d[N]=Fi[w]:(v.push(w),Qi.hasOwnProperty(w)||(Qi[w]=[]),Qi[w].push(()=>{d[N]=Fi[w],++T,T===v.length&&u(d)}))}),v.length===0&&u(d)},Pf=(r,s,l,u,d,v,T,w,N,j,Y,ce,fe)=>{Y=Bt(Y),v=Hn(d,v),w&&=Hn(T,w),j&&=Hn(N,j),fe=Hn(ce,fe);var ue=Mf(Y);ma(ue,function(){Ii(`Cannot construct ${Y} due to unbound types`,[u])}),An([r,s,l],u?[u]:[],me=>{me=me[0];var je,ft;u?(je=me.registeredClass,ft=je.instancePrototype):ft=fs.prototype;var st=ds(Y,function(...Dt){if(Object.getPrototypeOf(this)!==Lt)throw new Ar(`Use 'new' to construct ${Y}`);if(xt.constructor_body===void 0)throw new Ar(`${Y} has no accessible constructor`);var Oi=xt.constructor_body[Dt.length];if(Oi===void 0)throw new Ar(`Tried to invoke ctor of ${Y} with invalid number of parameters (${Dt.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return Oi.apply(this,Dt)}),Lt=Object.create(ft,{constructor:{value:st}});st.prototype=Lt;var xt=new bf(Y,st,Lt,fe,je,v,w,j);xt.baseClass&&(xt.baseClass.__derivedClasses??=[],xt.baseClass.__derivedClasses.push(xt));var en=new ms(Y,xt,!0,!1,!1),$t=new ms(Y+"*",xt,!1,!1,!1),an=new ms(Y+" const*",xt,!1,!0,!1);return Dl[r]={pointerType:$t,constPointerType:an},Ll(ue,st),[en,$t,an]})},_a=r=>{for(;r.length;){var s=r.pop(),l=r.pop();l(s)}};function Nl(r){for(var s=1;s<r.length;++s)if(r[s]!==null&&r[s].destructorFunction===void 0)return!0;return!1}function Df(r,s,l,u,d){if(r<s||r>l){var v=s==l?s:`${s} to ${l}`;d(`function ${u} called with ${r} arguments, expected ${v}`)}}function Ff(r,s,l,u){var d=Nl(r),v=r.length-2,T=[],w=["fn"];s&&w.push("thisWired");for(var N=0;N<v;++N)T.push(`arg${N}`),w.push(`arg${N}Wired`);T=T.join(","),w=w.join(",");var j=`return function (${T}) {
`;j+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,d&&(j+=`var destructors = [];
`);var Y=d?"destructors":"null",ce=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&(j+=`var thisWired = classParam['toWireType'](${Y}, this);
`);for(var N=0;N<v;++N)j+=`var arg${N}Wired = argType${N}['toWireType'](${Y}, arg${N});
`,ce.push(`argType${N}`);if(j+=(l||u?"var rv = ":"")+`invoker(${w});
`,d)j+=`runDestructors(destructors);
`;else for(var N=s?1:2;N<r.length;++N){var fe=N===1?"thisWired":"arg"+(N-2)+"Wired";r[N].destructorFunction!==null&&(j+=`${fe}_dtor(${fe});
`,ce.push(`${fe}_dtor`))}return l&&(j+=`var ret = retType['fromWireType'](rv);
return ret;
`),j+=`}
`,ce.push("checkArgCount","minArgs","maxArgs"),j=`if (arguments.length !== ${ce.length}){ throw new Error(humanName + "Expected ${ce.length} closure arguments " + arguments.length + " given."); }
${j}`,[ce,j]}function Lf(r){for(var s=r.length-2,l=r.length-1;l>=2&&r[l].optional;--l)s--;return s}function gs(r,s,l,u,d,v){var T=s.length;T<2&&ht("argTypes array size mismatch! Must at least get return value and 'this' types!"),C(!v,"Async bindings are only supported with JSPI.");for(var w=s[1]!==null&&l!==null,N=Nl(s),j=s[0].name!=="void",Y=T-2,ce=Lf(s),fe=[r,ht,u,d,_a,s[0],s[1]],ue=0;ue<T-2;++ue)fe.push(s[ue+2]);if(!N)for(var ue=w?1:2;ue<s.length;++ue)s[ue].destructorFunction!==null&&fe.push(s[ue].destructorFunction);fe.push(Df,ce,Y);let[me,je]=Ff(s,w,j,v);var ft=new Function(...me,je)(...fe);return ds(r,ft)}var vs=(r,s)=>{for(var l=[],u=0;u<r;u++)l.push(Ee[s+u*4>>2]);return l},ga=r=>{r=r.trim();const s=r.indexOf("(");return s===-1?r:(C(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,s))},If=(r,s,l,u,d,v,T,w,N)=>{var j=vs(l,u);s=Bt(s),s=ga(s),v=Hn(d,v,w),An([],[r],Y=>{Y=Y[0];var ce=`${Y.name}.${s}`;function fe(){Ii(`Cannot call ${ce} due to unbound types`,j)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var ue=Y.registeredClass.constructor;return ue[s]===void 0?(fe.argCount=l-1,ue[s]=fe):(pa(ue,s,ce),ue[s].overloadTable[l-1]=fe),An([],j,me=>{var je=[me[0],null].concat(me.slice(1)),ft=gs(ce,je,null,v,T,w);if(ue[s].overloadTable===void 0?(ft.argCount=l-1,ue[s]=ft):ue[s].overloadTable[l-1]=ft,Y.registeredClass.__derivedClasses)for(const st of Y.registeredClass.__derivedClasses)st.constructor.hasOwnProperty(s)||(st.constructor[s]=ft);return[]}),[]})},Uf=(r,s,l,u,d,v)=>{C(s>0);var T=vs(s,l);d=Hn(u,d),An([],[r],w=>{w=w[0];var N=`constructor ${w.name}`;if(w.registeredClass.constructor_body===void 0&&(w.registeredClass.constructor_body=[]),w.registeredClass.constructor_body[s-1]!==void 0)throw new Ar(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return w.registeredClass.constructor_body[s-1]=()=>{Ii(`Cannot construct ${w.name} due to unbound types`,T)},An([],T,j=>(j.splice(1,0,null),w.registeredClass.constructor_body[s-1]=gs(N,j,null,d,v),[])),[]})},Nf=(r,s,l,u,d,v,T,w,N,j)=>{var Y=vs(l,u);s=Bt(s),s=ga(s),v=Hn(d,v,N),An([],[r],ce=>{ce=ce[0];var fe=`${ce.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),w&&ce.registeredClass.pureVirtualFunctions.push(s);function ue(){Ii(`Cannot call ${fe} due to unbound types`,Y)}var me=ce.registeredClass.instancePrototype,je=me[s];return je===void 0||je.overloadTable===void 0&&je.className!==ce.name&&je.argCount===l-2?(ue.argCount=l-2,ue.className=ce.name,me[s]=ue):(pa(me,s,fe),me[s].overloadTable[l-2]=ue),An([],Y,ft=>{var st=gs(fe,ft,ce,v,T,N);return me[s].overloadTable===void 0?(st.argCount=l-2,me[s]=st):me[s].overloadTable[l-2]=st,[]}),[]})},Ol=(r,s,l)=>(r instanceof Object||ht(`${l} with invalid "this": ${r}`),r instanceof s.registeredClass.constructor||ht(`${l} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||ht(`cannot call emscripten binding method ${l} on deleted object`),hs(r.$$.ptr,r.$$.ptrType.registeredClass,s.registeredClass)),Of=(r,s,l,u,d,v,T,w,N,j)=>{s=Bt(s),d=Hn(u,d),An([],[r],Y=>{Y=Y[0];var ce=`${Y.name}.${s}`,fe={get(){Ii(`Cannot access ${ce} due to unbound types`,[l,T])},enumerable:!0,configurable:!0};return N?fe.set=()=>Ii(`Cannot access ${ce} due to unbound types`,[l,T]):fe.set=ue=>ht(ce+" is a read-only property"),Object.defineProperty(Y.registeredClass.instancePrototype,s,fe),An([],N?[l,T]:[l],ue=>{var me=ue[0],je={get(){var st=Ol(this,Y,ce+" getter");return me.fromWireType(d(v,st))},enumerable:!0};if(N){N=Hn(w,N);var ft=ue[1];je.set=function(st){var Lt=Ol(this,Y,ce+" setter"),xt=[];N(j,Lt,ft.toWireType(xt,st)),_a(xt)}}return Object.defineProperty(Y.registeredClass.instancePrototype,s,je),[]}),[]})},Bf=(r,s,l)=>{r=Bt(r),An([],[s],u=>(u=u[0],t[r]=u.fromWireType(l),[]))},Bl=[],Wn=[0,1,,1,null,1,!0,1,!1,1],va=r=>{r>9&&--Wn[r+1]===0&&(C(Wn[r]!==void 0,"Decref for unallocated handle."),Wn[r]=void 0,Bl.push(r))},Xt={toValue:r=>(r||ht(`Cannot use deleted val. handle = ${r}`),C(r===2||Wn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Wn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=Bl.pop()||Wn.length;return Wn[s]=r,Wn[s+1]=1,s}}}},kl={name:"emscripten::val",fromWireType:r=>{var s=Xt.toValue(r);return va(r),s},toWireType:(r,s)=>Xt.toHandle(s),argPackAdvance:Gn,readValueFromPointer:ps,destructorFunction:null},zl=r=>vn(r,kl),kf=(r,s,l)=>{switch(s){case 1:return l?function(u){return this.fromWireType(Ke[u])}:function(u){return this.fromWireType(Je[u])};case 2:return l?function(u){return this.fromWireType(oe[u>>1])}:function(u){return this.fromWireType(ve[u>>1])};case 4:return l?function(u){return this.fromWireType(ie[u>>2])}:function(u){return this.fromWireType(Ee[u>>2])};default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},zf=(r,s,l,u)=>{s=Bt(s);function d(){}d.values={},vn(r,{name:s,constructor:d,fromWireType:function(v){return this.constructor.values[v]},toWireType:(v,T)=>T.value,argPackAdvance:Gn,readValueFromPointer:kf(s,l,u),destructorFunction:null}),ma(s,d)},xs=(r,s)=>{var l=Fi[r];return l===void 0&&ht(`${s} has unknown type ${Ul(r)}`),l},Vf=(r,s,l)=>{var u=xs(r,"enum");s=Bt(s);var d=u.constructor,v=Object.create(u.constructor.prototype,{value:{value:l},constructor:{value:ds(`${u.name}_${s}`,function(){})}});d.values[l]=v,d[s]=v},Gf=(r,s)=>{switch(s){case 4:return function(l){return this.fromWireType(He[l>>2])};case 8:return function(l){return this.fromWireType($e[l>>3])};default:throw new TypeError(`invalid float width (${s}): ${r}`)}},Hf=(r,s,l)=>{s=Bt(s),vn(r,{name:s,fromWireType:u=>u,toWireType:(u,d)=>{if(typeof d!="number"&&typeof d!="boolean")throw new TypeError(`Cannot convert ${Li(d)} to ${this.name}`);return d},argPackAdvance:Gn,readValueFromPointer:Gf(s,l),destructorFunction:null})},Wf=(r,s,l,u,d,v,T,w)=>{var N=vs(s,l);r=Bt(r),r=ga(r),d=Hn(u,d,T),ma(r,function(){Ii(`Cannot call ${r} due to unbound types`,N)},s-1),An([],N,j=>{var Y=[j[0],null].concat(j.slice(1));return Ll(r,gs(r,Y,null,d,v,T),s-1),[]})},Xf=(r,s,l,u,d)=>{s=Bt(s);const v=u===0;let T=N=>N;if(v){var w=32-8*l;T=N=>N<<w>>>w,d=T(d)}vn(r,{name:s,fromWireType:T,toWireType:(N,j)=>{if(typeof j!="number"&&typeof j!="boolean")throw new TypeError(`Cannot convert "${Li(j)}" to ${s}`);return Al(s,j,u,d),j},argPackAdvance:Gn,readValueFromPointer:wl(s,l,u!==0),destructorFunction:null})},$f=(r,s,l)=>{var u=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],d=u[s];function v(T){var w=Ee[T>>2],N=Ee[T+4>>2];return new d(Ke.buffer,N,w)}l=Bt(l),vn(r,{name:l,fromWireType:v,argPackAdvance:Gn,readValueFromPointer:v},{ignoreDuplicateRegistrations:!0})},jf=Object.assign({optional:!0},kl),qf=(r,s)=>{vn(r,jf)},Ui=(r,s,l)=>(C(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),se(r,Je,s,l)),Yf=(r,s)=>{s=Bt(s),vn(r,{name:s,fromWireType(l){for(var u=Ee[l>>2],d=l+4,v,T,w=d,T=0;T<=u;++T){var N=d+T;if(T==u||Je[N]==0){var j=N-w,Y=lt(w,j);v===void 0?v=Y:(v+="\0",v+=Y),w=N+1}}return Xn(l),v},toWireType(l,u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));var d,v=typeof u=="string";v||ArrayBuffer.isView(u)&&u.BYTES_PER_ELEMENT==1||ht("Cannot pass non-string to std::string"),v?d=$(u):d=u.length;var T=Ea(4+d+1),w=T+4;return Ee[T>>2]=d,v?Ui(u,w,d+1):Je.set(u,w),l!==null&&l.push(Xn,T),T},argPackAdvance:Gn,readValueFromPointer:ps,destructorFunction(l){Xn(l)}})},Vl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Kf=(r,s)=>{C(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=r>>1,u=l+s/2,d=l;!(d>=u)&&ve[d];)++d;if(d-l>16&&Vl)return Vl.decode(ve.subarray(l,d));for(var v="",T=l;!(T>=u);++T){var w=ve[T];if(w==0)break;v+=String.fromCharCode(w)}return v},Zf=(r,s,l)=>{if(C(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),C(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??=2147483647,l<2)return 0;l-=2;for(var u=s,d=l<r.length*2?l/2:r.length,v=0;v<d;++v){var T=r.charCodeAt(v);oe[s>>1]=T,s+=2}return oe[s>>1]=0,s-u},Jf=r=>r.length*2,Qf=(r,s)=>{C(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",u=0;!(u>=s/4);u++){var d=ie[r+u*4>>2];if(!d)break;l+=String.fromCodePoint(d)}return l},ed=(r,s,l)=>{if(C(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),C(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??=2147483647,l<4)return 0;for(var u=s,d=u+l-4,v=0;v<r.length;++v){var T=r.codePointAt(v);if(T>65535&&v++,ie[s>>2]=T,s+=4,s+4>d)break}return ie[s>>2]=0,s-u},td=r=>{for(var s=0,l=0;l<r.length;++l){var u=r.codePointAt(l);u>65535&&l++,s+=4}return s},nd=(r,s,l)=>{l=Bt(l);var u,d,v,T;s===2?(u=Kf,d=Zf,T=Jf,v=w=>ve[w>>1]):s===4&&(u=Qf,d=ed,T=td,v=w=>Ee[w>>2]),vn(r,{name:l,fromWireType:w=>{for(var N=Ee[w>>2],j,Y=w+4,ce=0;ce<=N;++ce){var fe=w+4+ce*s;if(ce==N||v(fe)==0){var ue=fe-Y,me=u(Y,ue);j===void 0?j=me:(j+="\0",j+=me),Y=fe+s}}return Xn(w),j},toWireType:(w,N)=>{typeof N!="string"&&ht(`Cannot pass non-string to C++ string type ${l}`);var j=T(N),Y=Ea(4+j+s);return Ee[Y>>2]=j/s,d(N,Y+4,j+s),w!==null&&w.push(Xn,Y),Y},argPackAdvance:Gn,readValueFromPointer:ps,destructorFunction(w){Xn(w)}})},id=(r,s)=>{zl(r)},rd=(r,s)=>{s=Bt(s),vn(r,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,u)=>{}})},sd=()=>{throw new z},Gl=(r,s,l)=>{var u=[],d=r.toWireType(u,l);return u.length&&(Ee[s>>2]=Xt.toHandle(u)),d},ad=(r,s,l)=>(r=Xt.toValue(r),s=xs(s,"emval::as"),Gl(s,l,r)),Ss=[],od=(r,s,l,u)=>(r=Ss[r],s=Xt.toValue(s),r(null,s,l,u)),ld={},xa=r=>{var s=ld[r];return s===void 0?Bt(r):s},cd=(r,s,l,u,d)=>(r=Ss[r],s=Xt.toValue(s),l=xa(l),r(s,s[l],u,d)),Hl=()=>globalThis,ud=r=>r===0?Xt.toHandle(Hl()):(r=xa(r),Xt.toHandle(Hl()[r])),fd=r=>{var s=Ss.length;return Ss.push(r),s},dd=(r,s)=>{for(var l=new Array(r),u=0;u<r;++u)l[u]=xs(Ee[s+u*4>>2],`parameter ${u}`);return l},hd=(r,s,l)=>{var u=dd(r,s),d=u.shift();r--;var v=`return function (obj, func, destructorsRef, args) {
`,T=0,w=[];l===0&&w.push("obj");for(var N=["retType"],j=[d],Y=0;Y<r;++Y)w.push(`arg${Y}`),N.push(`argType${Y}`),j.push(u[Y]),v+=`  var arg${Y} = argType${Y}.readValueFromPointer(args${T?"+"+T:""});
`,T+=u[Y].argPackAdvance;var ce=l===1?"new func":"func.call";v+=`  var rv = ${ce}(${w.join(", ")});
`,d.isVoid||(N.push("emval_returnValue"),j.push(Gl),v+=`  return emval_returnValue(retType, destructorsRef, rv);
`),v+=`};
`;var fe=new Function(...N,v)(...j),ue=`methodCaller<(${u.map(me=>me.name).join(", ")}) => ${d.name}>`;return fd(ds(ue,fe))},pd=(r,s)=>(r=Xt.toValue(r),s=Xt.toValue(s),Xt.toHandle(r[s])),md=r=>{r>9&&(Wn[r+1]+=1)},_d=r=>(r=Xt.toValue(r),typeof r=="number"),gd=r=>(r=Xt.toValue(r),typeof r=="string"),vd=()=>Xt.toHandle([]),xd=r=>Xt.toHandle(xa(r)),Sd=r=>{var s=Xt.toValue(r);_a(s),va(r)},Ed=(r,s)=>{r=xs(r,"_emval_take_value");var l=r.readValueFromPointer(s);return Xt.toHandle(l)},yd=r=>{throw r=Xt.toValue(r),r},Md=r=>r%4===0&&(r%100!==0||r%400===0),bd=[0,31,60,91,121,152,182,213,244,274,305,335],Td=[0,31,59,90,120,151,181,212,243,273,304,334],Wl=r=>{var s=Md(r.getFullYear()),l=s?bd:Td,u=l[r.getMonth()]+r.getDate()-1;return u},wd=9007199254740992,Ad=-9007199254740992,Xl=r=>r<Ad||r>wd?NaN:Number(r);function Rd(r,s){r=Xl(r);var l=new Date(r*1e3);ie[s>>2]=l.getSeconds(),ie[s+4>>2]=l.getMinutes(),ie[s+8>>2]=l.getHours(),ie[s+12>>2]=l.getDate(),ie[s+16>>2]=l.getMonth(),ie[s+20>>2]=l.getFullYear()-1900,ie[s+24>>2]=l.getDay();var u=Wl(l)|0;ie[s+28>>2]=u,ie[s+36>>2]=-(l.getTimezoneOffset()*60);var d=new Date(l.getFullYear(),0,1),v=new Date(l.getFullYear(),6,1).getTimezoneOffset(),T=d.getTimezoneOffset(),w=(v!=T&&l.getTimezoneOffset()==Math.min(T,v))|0;ie[s+32>>2]=w}var Cd=function(r){var s=(()=>{var l=new Date(ie[r+20>>2]+1900,ie[r+16>>2],ie[r+12>>2],ie[r+8>>2],ie[r+4>>2],ie[r>>2],0),u=ie[r+32>>2],d=l.getTimezoneOffset(),v=new Date(l.getFullYear(),0,1),T=new Date(l.getFullYear(),6,1).getTimezoneOffset(),w=v.getTimezoneOffset(),N=Math.min(w,T);if(u<0)ie[r+32>>2]=+(T!=w&&N==d);else if(u>0!=(N==d)){var j=Math.max(w,T),Y=u>0?N:j;l.setTime(l.getTime()+(Y-d)*6e4)}ie[r+24>>2]=l.getDay();var ce=Wl(l)|0;ie[r+28>>2]=ce,ie[r>>2]=l.getSeconds(),ie[r+4>>2]=l.getMinutes(),ie[r+8>>2]=l.getHours(),ie[r+12>>2]=l.getDate(),ie[r+16>>2]=l.getMonth(),ie[r+20>>2]=l.getYear();var fe=l.getTime();return isNaN(fe)?-1:fe/1e3})();return BigInt(s)},Pd=(r,s,l,u)=>{var d=new Date().getFullYear(),v=new Date(d,0,1),T=new Date(d,6,1),w=v.getTimezoneOffset(),N=T.getTimezoneOffset(),j=Math.max(w,N);Ee[r>>2]=j*60,ie[s>>2]=+(w!=N);var Y=ue=>{var me=ue>=0?"-":"+",je=Math.abs(ue),ft=String(Math.floor(je/60)).padStart(2,"0"),st=String(je%60).padStart(2,"0");return`UTC${me}${ft}${st}`},ce=Y(w),fe=Y(N);C(ce),C(fe),C($(ce)<=16,`timezone name truncated to fit in TZNAME_MAX (${ce})`),C($(fe)<=16,`timezone name truncated to fit in TZNAME_MAX (${fe})`),N<w?(Ui(ce,l,17),Ui(fe,u,17)):(Ui(ce,u,17),Ui(fe,l,17))},$l=()=>performance.now(),jl=()=>Date.now(),Dd=r=>r>=0&&r<=3;function Fd(r,s,l){if(!Dd(r))return 28;var u;r===0?u=jl():u=$l();var d=Math.round(u*1e3*1e3);return Et[l>>3]=BigInt(d),0}var Es=[],Ld=(r,s)=>{C(Array.isArray(Es)),C(s%16==0),Es.length=0;for(var l;l=Je[r++];){var u=String.fromCharCode(l),d=["d","f","i","p"];d.push("j"),C(d.includes(u),`Invalid character ${l}("${u}") in readEmAsmArgs! Use only [${d}], and do not specify "v" for void return argument.`);var v=l!=105;v&=l!=112,s+=v&&s%8?4:0,Es.push(l==112?Ee[s>>2]:l==106?Et[s>>3]:l==105?ie[s>>2]:$e[s>>3]),s+=v?8:4}return Es},Id=(r,s,l)=>{var u=Ld(s,l);return C(Ql.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Ql[r](...u)},Ud=(r,s,l)=>Id(r,s,l),ql=()=>2147483648,Nd=()=>ql(),Od=(r,s)=>(C(s,"alignment argument is required"),Math.ceil(r/s)*s),Bd=r=>{var s=We.buffer,l=(r-s.byteLength+65535)/65536|0;try{return We.grow(l),Tt(),1}catch(u){F(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${r} bytes, but got error: ${u}`)}},kd=r=>{var s=Je.length;r>>>=0,C(r>s);var l=ql();if(r>l)return F(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${l} bytes!`),!1;for(var u=1;u<=4;u*=2){var d=s*(1+.2/u);d=Math.min(d,r+100663296);var v=Math.min(l,Od(Math.max(r,d),65536)),T=Bd(v);if(T)return!0}return F(`Failed to grow the heap from ${s} bytes to ${v} bytes, not enough memory!`),!1},Sa={},zd=()=>p||"./this.program",Cr=()=>{if(!Cr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:zd()};for(var l in Sa)Sa[l]===void 0?delete s[l]:s[l]=Sa[l];var u=[];for(var l in s)u.push(`${l}=${s[l]}`);Cr.strings=u}return Cr.strings},Vd=(r,s)=>{var l=0,u=0;for(var d of Cr()){var v=s+l;Ee[r+u>>2]=v,l+=Ui(d,v,1/0)+1,u+=4}return 0},Gd=(r,s)=>{var l=Cr();Ee[r>>2]=l.length;var u=0;for(var d of l)u+=$(d)+1;return Ee[s>>2]=u,0},Yl=0,Kl=()=>ye||Yl>0,Hd=r=>{Kl()||(t.onExit?.(r),O=!0),h(r,new Oe(r))},Wd=(r,s)=>{if(tm(),Kl()&&!s){var l=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${Yl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ae?.(l),F(l)}Hd(r)},Xd=Wd;function $d(r){try{var s=ct.getStreamFromFD(r);return E.close(s),0}catch(l){if(typeof E>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var jd=(r,s,l,u)=>{for(var d=0,v=0;v<l;v++){var T=Ee[s>>2],w=Ee[s+4>>2];s+=8;var N=E.read(r,Ke,T,w,u);if(N<0)return-1;if(d+=N,N<w)break}return d};function qd(r,s,l,u){try{var d=ct.getStreamFromFD(r),v=jd(d,s,l);return Ee[u>>2]=v,0}catch(T){if(typeof E>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function Yd(r,s,l,u){s=Xl(s);try{if(isNaN(s))return 61;var d=ct.getStreamFromFD(r);return E.llseek(d,s,l),Et[u>>3]=BigInt(d.position),d.getdents&&s===0&&l===0&&(d.getdents=null),0}catch(v){if(typeof E>"u"||v.name!=="ErrnoError")throw v;return v.errno}}var Kd=(r,s,l,u)=>{for(var d=0,v=0;v<l;v++){var T=Ee[s>>2],w=Ee[s+4>>2];s+=8;var N=E.write(r,Ke,T,w,u);if(N<0)return-1;if(d+=N,N<w)break}return d};function Zd(r,s,l,u){try{var d=ct.getStreamFromFD(r),v=Kd(d,s,l);return Ee[u>>2]=v,0}catch(T){if(typeof E>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var Jd=r=>r,Qd=r=>{var s=t["_"+r];return C(s,"Cannot call unknown function "+r+", make sure it is exported"),s},eh=(r,s)=>{C(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ke.set(r,s)},ys=r=>sc(r),th=r=>{var s=$(r)+1,l=ys(s);return Ui(r,l,s),l},Zl=(r,s,l,u,d)=>{var v={string:me=>{var je=0;return me!=null&&me!==0&&(je=th(me)),je},array:me=>{var je=ys(me.length);return eh(me,je),je}};function T(me){return s==="string"?lt(me):s==="boolean"?!!me:me}var w=Qd(r),N=[],j=0;if(C(s!=="array",'Return type should not be "array".'),u)for(var Y=0;Y<u.length;Y++){var ce=v[l[Y]];ce?(j===0&&(j=B()),N[Y]=ce(u[Y])):N[Y]=u[Y]}var fe=w(...N);function ue(me){return j!==0&&X(j),T(me)}return fe=ue(fe),fe},nh=(r,s,l,u)=>(...d)=>Zl(r,s,l,d),ih=(...r)=>E.createPath(...r),rh=(...r)=>E.unlink(...r),sh=(...r)=>E.createLazyFile(...r),ah=(...r)=>E.createDevice(...r),oh=r=>Ms(r),lh=r=>ba(r),ch=r=>{var s=B(),l=ys(4),u=ys(4);oc(r,l,u);var d=Ee[l>>2],v=Ee[u>>2],T=lt(d);Xn(d);var w;return v&&(w=lt(v),Xn(v)),X(s),[T,w]},Jl=r=>ch(r);E.createPreloadedFile=Mt,E.staticInit(),Sf(),Rf(),C(Wn.length===10),t.noExitRuntime&&(ye=t.noExitRuntime),t.preloadPlugins&&(tt=t.preloadPlugins),t.print&&(D=t.print),t.printErr&&(F=t.printErr),t.wasmBinary&&(L=t.wasmBinary),dh(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),C(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),C(typeof t.read>"u","Module.read option was removed"),C(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),C(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),C(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),C(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),C(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),C(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),C(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),C(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=M,t.ccall=Zl,t.cwrap=nh,t.FS_createPreloadedFile=Mt,t.FS_unlink=rh,t.FS_createPath=ih,t.FS_createDevice=ah,t.FS=E,t.FS_createDataFile=ze,t.FS_createLazyFile=sh,t.MEMFS=de;var uh=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];uh.forEach(pe);var fh=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];fh.forEach(Ce),t.incrementExceptionRefcount=oh,t.decrementExceptionRefcount=lh,t.getExceptionMessage=Jl;function dh(){re("fetchSettings")}var Ql={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(s){},enumerable:!0,configurable:!0})})}},ec=Q("___getTypeName"),Ea=Q("_malloc"),ya=Q("_fflush"),Xn=Q("_free"),Ma=Q("_emscripten_stack_get_end"),tc=Q("_strerror"),_e=Q("_setThrew"),nc=Q("__emscripten_tempret_set"),ic=Q("_emscripten_stack_init"),rc=Q("__emscripten_stack_restore"),sc=Q("__emscripten_stack_alloc"),ac=Q("_emscripten_stack_get_current"),ba=Q("___cxa_decrement_exception_refcount"),Ms=Q("___cxa_increment_exception_refcount"),oc=Q("___get_exception_message"),lc=Q("___cxa_can_catch"),cc=Q("___cxa_get_exception_ptr");function hh(r){ec=ae("__getTypeName",1),Ea=ae("malloc",1),ya=ae("fflush",1),Xn=ae("free",1),Ma=r.emscripten_stack_get_end,r.emscripten_stack_get_base,tc=ae("strerror",1),_e=ae("setThrew",2),nc=ae("_emscripten_tempret_set",1),ic=r.emscripten_stack_init,r.emscripten_stack_get_free,rc=r._emscripten_stack_restore,sc=r._emscripten_stack_alloc,ac=r.emscripten_stack_get_current,ba=ae("__cxa_decrement_exception_refcount",1),Ms=ae("__cxa_increment_exception_refcount",1),oc=ae("__get_exception_message",3),lc=ae("__cxa_can_catch",3),cc=ae("__cxa_get_exception_ptr",1)}var uc={__assert_fail:wn,__cxa_begin_catch:wr,__cxa_current_primary_exception:la,__cxa_end_catch:ns,__cxa_find_matching_catch_2:is,__cxa_find_matching_catch_3:Ji,__cxa_find_matching_catch_4:rs,__cxa_rethrow:Di,__cxa_rethrow_primary_exception:ss,__cxa_throw:as,__cxa_uncaught_exceptions:ca,__resumeException:ua,__syscall_dup3:mt,__syscall_fcntl64:ii,__syscall_fstat64:gi,__syscall_ioctl:Rt,__syscall_lstat64:Wt,__syscall_newfstatat:zn,__syscall_openat:zt,__syscall_stat64:Vn,_abort_js:vi,_embind_register_bigint:df,_embind_register_bool:hf,_embind_register_class:Pf,_embind_register_class_class_function:If,_embind_register_class_constructor:Uf,_embind_register_class_function:Nf,_embind_register_class_property:Of,_embind_register_constant:Bf,_embind_register_emval:zl,_embind_register_enum:zf,_embind_register_enum_value:Vf,_embind_register_float:Hf,_embind_register_function:Wf,_embind_register_integer:Xf,_embind_register_memory_view:$f,_embind_register_optional:qf,_embind_register_std_string:Yf,_embind_register_std_wstring:nd,_embind_register_user_type:id,_embind_register_void:rd,_emscripten_throw_longjmp:sd,_emval_as:ad,_emval_call:od,_emval_call_method:cd,_emval_decref:va,_emval_get_global:ud,_emval_get_method_caller:hd,_emval_get_property:pd,_emval_incref:md,_emval_is_number:_d,_emval_is_string:gd,_emval_new_array:vd,_emval_new_cstring:xd,_emval_run_destructors:Sd,_emval_take_value:Ed,_emval_throw:yd,_localtime_js:Rd,_mktime_js:Cd,_tzset_js:Pd,clock_time_get:Fd,emscripten_asm_const_int:Ud,emscripten_date_now:jl,emscripten_get_heap_max:Nd,emscripten_get_now:$l,emscripten_resize_heap:kd,environ_get:Vd,environ_sizes_get:Gd,exit:Xd,fd_close:$d,fd_read:qd,fd_seek:Yd,fd_write:Zd,invoke_ddd:zp,invoke_dddi:ip,invoke_dddidi:rp,invoke_ddidi:np,invoke_di:sp,invoke_dii:jh,invoke_diii:Ah,invoke_diiii:tp,invoke_diiiidd:Qh,invoke_diiiidi:Ph,invoke_diiiii:yh,invoke_diiiiii:Nh,invoke_diiiiiii:ap,invoke_diiiiiiiii:Ih,invoke_diiiiiiiiiiii:Uh,invoke_fiii:Zp,invoke_i:Mh,invoke_id:Up,invoke_ii:_h,invoke_iid:_p,invoke_iidddd:Xp,invoke_iidiii:Wh,invoke_iidiiid:Gh,invoke_iidiiiiidi:Xh,invoke_iif:Wp,invoke_iii:ph,invoke_iiid:$h,invoke_iiididdddddd:Hh,invoke_iiidiiiiiiii:Vh,invoke_iiii:xh,invoke_iiiidddiiiii:lp,invoke_iiiii:wh,invoke_iiiiid:wp,invoke_iiiiii:Ep,invoke_iiiiiii:vp,invoke_iiiiiiii:mp,invoke_iiiiiiiidd:Ap,invoke_iiiiiiiii:Jh,invoke_iiiiiiiiii:xp,invoke_iiiiiiiiiidddiiiiiiiii:zh,invoke_iiiiiiiiiii:Kp,invoke_iiiiiiiiiiii:Jp,invoke_iiiiiiiiiiiii:Ip,invoke_iiij:Sp,invoke_iiji:Tp,invoke_j:qp,invoke_ji:Lp,invoke_jiiii:yp,invoke_jij:Fp,invoke_v:vh,invoke_vi:gh,invoke_vid:gp,invoke_viddd:Mp,invoke_vidddd:bp,invoke_vidi:ep,invoke_vidiii:Bh,invoke_vii:Eh,invoke_viid:Kh,invoke_viiddi:Dp,invoke_viiddidi:Pp,invoke_viiddii:op,invoke_viidi:Yh,invoke_viidii:Ch,invoke_viidiii:hp,invoke_viidiiid:fp,invoke_viidiiiii:kh,invoke_viidiiiiidi:pp,invoke_viidiiiiiiii:Oh,invoke_viii:mh,invoke_viiid:Fh,invoke_viiidd:Cp,invoke_viiidi:qh,invoke_viiididdddddd:dp,invoke_viiidiiiiiiii:up,invoke_viiii:Th,invoke_viiiiddd:Rp,invoke_viiiidi:Vp,invoke_viiiifi:Gp,invoke_viiiii:Sh,invoke_viiiiid:Dh,invoke_viiiiii:bh,invoke_viiiiiii:Rh,invoke_viiiiiiii:Zh,invoke_viiiiiiiiii:Bp,invoke_viiiiiiiiiidddiiiiiiiii:cp,invoke_viiiiiiiiiiid:Lh,invoke_viiiiiiiiiiiii:Op,invoke_viiiiiiiiiiiiiii:Qp,invoke_viiiiiiiiiiiiiiiiii:kp,invoke_viiiij:$p,invoke_viij:jp,invoke_viijii:Yp,invoke_vij:Hp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:Np,llvm_eh_typeid_for:Jd},Ni=await Me();function ph(r,s,l){var u=B();try{return ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;_e(1,0)}}function mh(r,s,l,u){var d=B();try{ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function _h(r,s){var l=B();try{return ge(r)(s)}catch(u){if(X(l),!(u instanceof k))throw u;_e(1,0)}}function gh(r,s){var l=B();try{ge(r)(s)}catch(u){if(X(l),!(u instanceof k))throw u;_e(1,0)}}function vh(r){var s=B();try{ge(r)()}catch(l){if(X(s),!(l instanceof k))throw l;_e(1,0)}}function xh(r,s,l,u){var d=B();try{return ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function Sh(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Eh(r,s,l){var u=B();try{ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;_e(1,0)}}function yh(r,s,l,u,d,v){var T=B();try{return ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Mh(r){var s=B();try{return ge(r)()}catch(l){if(X(s),!(l instanceof k))throw l;_e(1,0)}}function bh(r,s,l,u,d,v,T){var w=B();try{ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function Th(r,s,l,u,d){var v=B();try{ge(r)(s,l,u,d)}catch(T){if(X(v),!(T instanceof k))throw T;_e(1,0)}}function wh(r,s,l,u,d){var v=B();try{return ge(r)(s,l,u,d)}catch(T){if(X(v),!(T instanceof k))throw T;_e(1,0)}}function Ah(r,s,l,u){var d=B();try{return ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function Rh(r,s,l,u,d,v,T,w){var N=B();try{ge(r)(s,l,u,d,v,T,w)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function Ch(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Ph(r,s,l,u,d,v,T){var w=B();try{return ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function Dh(r,s,l,u,d,v,T){var w=B();try{ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function Fh(r,s,l,u,d){var v=B();try{ge(r)(s,l,u,d)}catch(T){if(X(v),!(T instanceof k))throw T;_e(1,0)}}function Lh(r,s,l,u,d,v,T,w,N,j,Y,ce,fe){var ue=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function Ih(r,s,l,u,d,v,T,w,N,j){var Y=B();try{return ge(r)(s,l,u,d,v,T,w,N,j)}catch(ce){if(X(Y),!(ce instanceof k))throw ce;_e(1,0)}}function Uh(r,s,l,u,d,v,T,w,N,j,Y,ce,fe){var ue=B();try{return ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function Nh(r,s,l,u,d,v,T){var w=B();try{return ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function Oh(r,s,l,u,d,v,T,w,N,j,Y,ce){var fe=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce)}catch(ue){if(X(fe),!(ue instanceof k))throw ue;_e(1,0)}}function Bh(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function kh(r,s,l,u,d,v,T,w,N){var j=B();try{ge(r)(s,l,u,d,v,T,w,N)}catch(Y){if(X(j),!(Y instanceof k))throw Y;_e(1,0)}}function zh(r,s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je,ft,st,Lt,xt,en,$t){var an=B();try{return ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je,ft,st,Lt,xt,en,$t)}catch(Dt){if(X(an),!(Dt instanceof k))throw Dt;_e(1,0)}}function Vh(r,s,l,u,d,v,T,w,N,j,Y,ce){var fe=B();try{return ge(r)(s,l,u,d,v,T,w,N,j,Y,ce)}catch(ue){if(X(fe),!(ue instanceof k))throw ue;_e(1,0)}}function Gh(r,s,l,u,d,v,T){var w=B();try{return ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function Hh(r,s,l,u,d,v,T,w,N,j,Y,ce){var fe=B();try{return ge(r)(s,l,u,d,v,T,w,N,j,Y,ce)}catch(ue){if(X(fe),!(ue instanceof k))throw ue;_e(1,0)}}function Wh(r,s,l,u,d,v){var T=B();try{return ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Xh(r,s,l,u,d,v,T,w,N,j){var Y=B();try{return ge(r)(s,l,u,d,v,T,w,N,j)}catch(ce){if(X(Y),!(ce instanceof k))throw ce;_e(1,0)}}function $h(r,s,l,u){var d=B();try{return ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function jh(r,s,l){var u=B();try{return ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;_e(1,0)}}function qh(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Yh(r,s,l,u,d){var v=B();try{ge(r)(s,l,u,d)}catch(T){if(X(v),!(T instanceof k))throw T;_e(1,0)}}function Kh(r,s,l,u){var d=B();try{ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function Zh(r,s,l,u,d,v,T,w,N){var j=B();try{ge(r)(s,l,u,d,v,T,w,N)}catch(Y){if(X(j),!(Y instanceof k))throw Y;_e(1,0)}}function Jh(r,s,l,u,d,v,T,w,N){var j=B();try{return ge(r)(s,l,u,d,v,T,w,N)}catch(Y){if(X(j),!(Y instanceof k))throw Y;_e(1,0)}}function Qh(r,s,l,u,d,v,T){var w=B();try{return ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function ep(r,s,l,u){var d=B();try{ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function tp(r,s,l,u,d){var v=B();try{return ge(r)(s,l,u,d)}catch(T){if(X(v),!(T instanceof k))throw T;_e(1,0)}}function np(r,s,l,u,d){var v=B();try{return ge(r)(s,l,u,d)}catch(T){if(X(v),!(T instanceof k))throw T;_e(1,0)}}function ip(r,s,l,u){var d=B();try{return ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function rp(r,s,l,u,d,v){var T=B();try{return ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function sp(r,s){var l=B();try{return ge(r)(s)}catch(u){if(X(l),!(u instanceof k))throw u;_e(1,0)}}function ap(r,s,l,u,d,v,T,w){var N=B();try{return ge(r)(s,l,u,d,v,T,w)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function op(r,s,l,u,d,v,T){var w=B();try{ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function lp(r,s,l,u,d,v,T,w,N,j,Y,ce){var fe=B();try{return ge(r)(s,l,u,d,v,T,w,N,j,Y,ce)}catch(ue){if(X(fe),!(ue instanceof k))throw ue;_e(1,0)}}function cp(r,s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je,ft,st,Lt,xt,en,$t,an){var Dt=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je,ft,st,Lt,xt,en,$t,an)}catch(Oi){if(X(Dt),!(Oi instanceof k))throw Oi;_e(1,0)}}function up(r,s,l,u,d,v,T,w,N,j,Y,ce,fe){var ue=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function fp(r,s,l,u,d,v,T,w){var N=B();try{ge(r)(s,l,u,d,v,T,w)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function dp(r,s,l,u,d,v,T,w,N,j,Y,ce,fe){var ue=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function hp(r,s,l,u,d,v,T){var w=B();try{ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function pp(r,s,l,u,d,v,T,w,N,j,Y){var ce=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y)}catch(fe){if(X(ce),!(fe instanceof k))throw fe;_e(1,0)}}function mp(r,s,l,u,d,v,T,w){var N=B();try{return ge(r)(s,l,u,d,v,T,w)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function _p(r,s,l){var u=B();try{return ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;_e(1,0)}}function gp(r,s,l){var u=B();try{ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;_e(1,0)}}function vp(r,s,l,u,d,v,T){var w=B();try{return ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function xp(r,s,l,u,d,v,T,w,N,j){var Y=B();try{return ge(r)(s,l,u,d,v,T,w,N,j)}catch(ce){if(X(Y),!(ce instanceof k))throw ce;_e(1,0)}}function Sp(r,s,l,u){var d=B();try{return ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function Ep(r,s,l,u,d,v){var T=B();try{return ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function yp(r,s,l,u,d){var v=B();try{return ge(r)(s,l,u,d)}catch(T){if(X(v),!(T instanceof k))throw T;return _e(1,0),0n}}function Mp(r,s,l,u,d){var v=B();try{ge(r)(s,l,u,d)}catch(T){if(X(v),!(T instanceof k))throw T;_e(1,0)}}function bp(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Tp(r,s,l,u){var d=B();try{return ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function wp(r,s,l,u,d,v){var T=B();try{return ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Ap(r,s,l,u,d,v,T,w,N,j){var Y=B();try{return ge(r)(s,l,u,d,v,T,w,N,j)}catch(ce){if(X(Y),!(ce instanceof k))throw ce;_e(1,0)}}function Rp(r,s,l,u,d,v,T,w){var N=B();try{ge(r)(s,l,u,d,v,T,w)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function Cp(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Pp(r,s,l,u,d,v,T,w){var N=B();try{ge(r)(s,l,u,d,v,T,w)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function Dp(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Fp(r,s,l){var u=B();try{return ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;return _e(1,0),0n}}function Lp(r,s){var l=B();try{return ge(r)(s)}catch(u){if(X(l),!(u instanceof k))throw u;return _e(1,0),0n}}function Ip(r,s,l,u,d,v,T,w,N,j,Y,ce,fe){var ue=B();try{return ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function Up(r,s){var l=B();try{return ge(r)(s)}catch(u){if(X(l),!(u instanceof k))throw u;_e(1,0)}}function Np(r,s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je,ft,st,Lt,xt,en,$t,an,Dt,Oi,im,rm,sm,am,om,lm,cm,um,fm,dm,hm,pm,mm,_m,gm,vm,xm,Sm,Em,ym,Mm,bm,Tm,wm,Am,Rm,Cm,Pm,Dm,Fm,Lm,Im,Um,Nm,Om,Bm,km,zm,Vm,Gm,Hm,Wm,Xm,$m,jm,qm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_,a_,o_,l_,c_){var u_=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je,ft,st,Lt,xt,en,$t,an,Dt,Oi,im,rm,sm,am,om,lm,cm,um,fm,dm,hm,pm,mm,_m,gm,vm,xm,Sm,Em,ym,Mm,bm,Tm,wm,Am,Rm,Cm,Pm,Dm,Fm,Lm,Im,Um,Nm,Om,Bm,km,zm,Vm,Gm,Hm,Wm,Xm,$m,jm,qm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_,a_,o_,l_,c_)}catch(dc){if(X(u_),!(dc instanceof k))throw dc;_e(1,0)}}function Op(r,s,l,u,d,v,T,w,N,j,Y,ce,fe,ue){var me=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe,ue)}catch(je){if(X(me),!(je instanceof k))throw je;_e(1,0)}}function Bp(r,s,l,u,d,v,T,w,N,j,Y){var ce=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y)}catch(fe){if(X(ce),!(fe instanceof k))throw fe;_e(1,0)}}function kp(r,s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je,ft,st,Lt){var xt=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je,ft,st,Lt)}catch(en){if(X(xt),!(en instanceof k))throw en;_e(1,0)}}function zp(r,s,l){var u=B();try{return ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;_e(1,0)}}function Vp(r,s,l,u,d,v,T){var w=B();try{ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function Gp(r,s,l,u,d,v,T){var w=B();try{ge(r)(s,l,u,d,v,T)}catch(N){if(X(w),!(N instanceof k))throw N;_e(1,0)}}function Hp(r,s,l){var u=B();try{ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;_e(1,0)}}function Wp(r,s,l){var u=B();try{return ge(r)(s,l)}catch(d){if(X(u),!(d instanceof k))throw d;_e(1,0)}}function Xp(r,s,l,u,d,v){var T=B();try{return ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function $p(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function jp(r,s,l,u){var d=B();try{ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function qp(r){var s=B();try{return ge(r)()}catch(l){if(X(s),!(l instanceof k))throw l;return _e(1,0),0n}}function Yp(r,s,l,u,d,v){var T=B();try{ge(r)(s,l,u,d,v)}catch(w){if(X(T),!(w instanceof k))throw w;_e(1,0)}}function Kp(r,s,l,u,d,v,T,w,N,j,Y){var ce=B();try{return ge(r)(s,l,u,d,v,T,w,N,j,Y)}catch(fe){if(X(ce),!(fe instanceof k))throw fe;_e(1,0)}}function Zp(r,s,l,u){var d=B();try{return ge(r)(s,l,u)}catch(v){if(X(d),!(v instanceof k))throw v;_e(1,0)}}function Jp(r,s,l,u,d,v,T,w,N,j,Y,ce){var fe=B();try{return ge(r)(s,l,u,d,v,T,w,N,j,Y,ce)}catch(ue){if(X(fe),!(ue instanceof k))throw ue;_e(1,0)}}function Qp(r,s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je){var ft=B();try{ge(r)(s,l,u,d,v,T,w,N,j,Y,ce,fe,ue,me,je)}catch(st){if(X(ft),!(st instanceof k))throw st;_e(1,0)}}var fc;function em(){ic(),A()}function Ta(){if(Pt>0){ut=Ta;return}if(em(),nt(),Pt>0){ut=Ta;return}function r(){C(!fc),fc=!0,t.calledRun=!0,!O&&(Ut(),Ie?.(t),t.onRuntimeInitialized?.(),te("onRuntimeInitialized"),C(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),V())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),I()}function tm(){var r=D,s=F,l=!1;D=F=u=>{l=!0};try{ya(0),["stdout","stderr"].forEach(u=>{var d=E.analyzePath("/dev/"+u);if(d){var v=d.object,T=v.rdev,w=we.ttys[T];w?.output?.length&&(l=!0)}})}catch{}D=r,F=s,l&&Fe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function nm(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();te("preInit")}nm(),Ta(),dt?e=t:e=new Promise((r,s)=>{Ie=r,Ae=s});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){G(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const m_="/demo/assets/mujoco-D9UjOFNX.wasm";var pn=Uint8Array,mr=Uint16Array,__=Int32Array,xu=new pn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Su=new pn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),g_=new pn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Eu=function(i,e){for(var t=new mr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var a=new __(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)a[o]=o-t[n]<<5|n;return{b:t,r:a}},yu=Eu(xu,2),Mu=yu.b,v_=yu.r;Mu[28]=258,v_[258]=28;var x_=Eu(Su,0),S_=x_.b,ho=new mr(32768);for(var It=0;It<32768;++It){var xi=(It&43690)>>1|(It&21845)<<1;xi=(xi&52428)>>2|(xi&13107)<<2,xi=(xi&61680)>>4|(xi&3855)<<4,ho[It]=((xi&65280)>>8|(xi&255)<<8)>>1}var Gr=(function(i,e,t){for(var n=i.length,a=0,o=new mr(e);a<n;++a)i[a]&&++o[i[a]-1];var c=new mr(e);for(a=1;a<e;++a)c[a]=c[a-1]+o[a-1]<<1;var f;if(t){f=new mr(1<<e);var p=15-e;for(a=0;a<n;++a)if(i[a])for(var h=a<<4|i[a],_=e-i[a],g=c[i[a]-1]++<<_,m=g|(1<<_)-1;g<=m;++g)f[ho[g]>>p]=h}else for(f=new mr(n),a=0;a<n;++a)i[a]&&(f[a]=ho[c[i[a]-1]++]>>15-i[a]);return f}),Zr=new pn(288);for(var It=0;It<144;++It)Zr[It]=8;for(var It=144;It<256;++It)Zr[It]=9;for(var It=256;It<280;++It)Zr[It]=7;for(var It=280;It<288;++It)Zr[It]=8;var bu=new pn(32);for(var It=0;It<32;++It)bu[It]=5;var E_=Gr(Zr,9,1),y_=Gr(bu,5,1),wa=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Rn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Aa=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},M_=function(i){return(i+7)/8|0},b_=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new pn(i.subarray(e,t))},T_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Fn=function(i,e,t){var n=new Error(e||T_[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Fn),!t)throw n;return n},w_=function(i,e,t,n){var a=i.length,o=0;if(!a||e.f&&!e.l)return t||new pn(0);var c=!t,f=c||e.i!=2,p=e.i;c&&(t=new pn(a*3));var h=function($e){var Et=t.length;if($e>Et){var ot=new pn(Math.max(Et*2,$e));ot.set(t),t=ot}},_=e.f||0,g=e.p||0,m=e.b||0,x=e.l,b=e.d,P=e.m,y=e.n,S=a*8;do{if(!x){_=Rn(i,g,1);var D=Rn(i,g+1,3);if(g+=3,D)if(D==1)x=E_,b=y_,P=9,y=5;else if(D==2){var C=Rn(i,g,31)+257,W=Rn(i,g+10,15)+4,A=C+Rn(i,g+5,31)+1;g+=14;for(var I=new pn(A),k=new pn(19),z=0;z<W;++z)k[g_[z]]=Rn(i,g+z*3,7);g+=W*3;for(var ne=wa(k),te=(1<<ne)-1,Q=Gr(k,ne,1),z=0;z<A;){var re=Q[Rn(i,g,te)];g+=re&15;var F=re>>4;if(F<16)I[z++]=F;else{var Z=0,J=0;for(F==16?(J=3+Rn(i,g,3),g+=2,Z=I[z-1]):F==17?(J=3+Rn(i,g,7),g+=3):F==18&&(J=11+Rn(i,g,127),g+=7);J--;)I[z++]=Z}}var Se=I.subarray(0,C),pe=I.subarray(C);P=wa(Se),y=wa(pe),x=Gr(Se,P,1),b=Gr(pe,y,1)}else Fn(1);else{var F=M_(g)+4,L=i[F-4]|i[F-3]<<8,O=F+L;if(O>a){p&&Fn(0);break}f&&h(m+L),t.set(i.subarray(F,O),m),e.b=m+=L,e.p=g=O*8,e.f=_;continue}if(g>S){p&&Fn(0);break}}f&&h(m+131072);for(var Ce=(1<<P)-1,Ie=(1<<y)-1,Ae=g;;Ae=g){var Z=x[Aa(i,g)&Ce],We=Z>>4;if(g+=Z&15,g>S){p&&Fn(0);break}if(Z||Fn(2),We<256)t[m++]=We;else if(We==256){Ae=g,x=null;break}else{var Ke=We-254;if(We>264){var z=We-257,Je=xu[z];Ke=Rn(i,g,(1<<Je)-1)+Mu[z],g+=Je}var oe=b[Aa(i,g)&Ie],ve=oe>>4;oe||Fn(3),g+=oe&15;var pe=S_[ve];if(ve>3){var Je=Su[ve];pe+=Aa(i,g)&(1<<Je)-1,g+=Je}if(g>S){p&&Fn(0);break}f&&h(m+131072);var ie=m+Ke;if(m<pe){var Ee=o-pe,He=Math.min(pe,ie);for(Ee+m<0&&Fn(3);m<He;++m)t[m]=n[Ee+m]}for(;m<ie;++m)t[m]=t[m-pe]}}e.l=x,e.p=Ae,e.b=m,e.f=_,x&&(_=1,e.m=P,e.d=b,e.n=y)}while(!_);return m!=t.length&&c?b_(t,0,m):t.subarray(0,m)},A_=new pn(0),R_=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Fn(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},C_=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};function P_(i,e){var t=R_(i);return t+8>i.length&&Fn(6,"invalid gzip data"),w_(i.subarray(t,-8),{i:2},new pn(C_(i)),e)}var D_=typeof TextDecoder<"u"&&new TextDecoder,F_=0;try{D_.decode(A_,{stream:!0}),F_=1}catch{}const Tu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const wu=([i,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(e).forEach(a=>{n.setAttribute(a,String(e[a]))}),t?.length&&t.forEach(a=>{const o=wu(a);n.appendChild(o)}),n},L_=(i,e={})=>{const n={...Tu,...e};return wu(["svg",n,i])};const I_=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const U_=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const N_=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const O_=i=>{const e=N_(i);return e.charAt(0).toUpperCase()+e.slice(1)};const B_=i=>Array.from(i.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),pc=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",mc=(i,{nameAttr:e,icons:t,attrs:n})=>{const a=i.getAttribute(e);if(a==null)return;const o=O_(a),c=t[o];if(!c)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const f=B_(i),p=I_(f)?{}:{"aria-hidden":"true"},h={...Tu,"data-lucide":a,...p,...n,...f},_=pc(f),g=pc(n),m=U_("lucide",`lucide-${a}`,..._,...g);m&&Object.assign(h,{class:m});const x=L_(c,h);return i.parentNode?.replaceChild(x,i)};const k_=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];const z_=[["path",{d:"m6 9 6 6 6-6"}]];const V_=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];const G_=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];const H_=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];const W_=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];const X_=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const $_=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];const j_=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const q_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const Y_=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];const K_=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const Z_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];const J_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];const Q_=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const Au=({icons:i={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:a}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(c=>mc(c,{nameAttr:e,icons:i,attrs:t})),a&&Array.from(n.querySelectorAll("template")).forEach(f=>Au({icons:i,nameAttr:e,attrs:t,root:f.content,inTemplates:a})),e==="data-lucide"){const c=n.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(f=>mc(f,{nameAttr:"icon-name",icons:i,attrs:t})))}},En=(i,e=-1,t=1)=>Math.min(t,Math.max(e,i)),Hr=([i,e,t,n])=>[1-2*(t*t+n*n),2*(e*t-i*n),2*(e*n+i*t),2*(e*t+i*n),1-2*(e*e+n*n),2*(t*n-i*e),2*(e*n-i*t),2*(t*n+i*e),1-2*(e*e+t*t)],_c=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]],gc=(i,e)=>[i[0]*e[0]+i[3]*e[1]+i[6]*e[2],i[1]*e[0]+i[4]*e[1]+i[7]*e[2],i[2]*e[0]+i[5]*e[1]+i[8]*e[2]];class eg{constructor(e){this.source=e,this.metadata=e.metadata}predict(e,t=!0){let n=Float32Array.from(e);if(n.length!==this.source.w0[0].length||!n.every(Number.isFinite))throw new Error("Invalid policy observation");for(let a=0;a<3;a++){const o=this.source[`w${a}`],c=this.source[`b${a}`],f=new Float32Array(o.length);for(let p=0;p<o.length;p++){let h=c[p];for(let _=0;_<n.length;_++)h+=o[p][_]*n[_];f[p]=a<2&&h<0?Math.expm1(h):h}n=f}return Array.from(n,a=>t?En(a):a)}}class tg{constructor(e,t,n,a){this.mj=e;const o=new e.MjVFS;o.addBuffer("scene.mjb",t),this.model=e.MjModel.from_binary_path("scene.mjb",o),o.delete(),this.data=new e.MjData(this.model),this.contactForce=new e.DoubleBuffer(6);const c=this.model.body("drone");this.bodyId=c.id,c.delete();const f=this.model.geom("drone_collision");this.collisionId=f.id,f.delete(),this.gates=n.gates.map(p=>p.map(Math.fround)),this.policies=Object.fromEntries(Object.entries(a).map(([p,h])=>[p,new eg(h)])),this.weight=this.model.body_mass.reduce((p,h)=>p+h,0)*9.81,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.mode="expert",this.alpha=.8,this.skill=0,this.effectiveAlpha=1,this.reset()}get position(){return Array.from(this.data.qpos.subarray(0,3))}get quaternion(){return Array.from(this.data.qpos.subarray(3,7))}gateCoordinates(e,t=this.gate){const n=this.gates[t],a=e[0]-n[0],o=e[1]-n[1],c=Math.cos(n[5]),f=Math.sin(n[5]);return[c*a+f*o,-f*a+c*o,e[2]-n[2]]}reset(e=0,t=0){const n=this.mj,a=this.data,o=this.gates[e];n.mj_resetData(this.model,a),this.gate=e,a.qpos.set([o[0]+6*Math.cos(o[5]),o[1]+6*Math.sin(o[5]),o[2]],0);let c=o[5]+Math.PI+t;c=((c+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,a.qpos.set([Math.cos(c/2),0,0,Math.sin(c/2)],3),a.qvel.set([200,-200,200,-200],6),this.motors=[0,0,0,0],this.integral=[0,0,0],this.previousOmega=[0,0,0],this.steps=0,this.gatesPassed=0,this.lastGateTime=0,this.crashes=0,this.lapStart=null,n.mj_forward(this.model,a),this.previousPosition=this.position,this.cachedGate=this.gateCoordinates(this.position),this.lastAction=[-1+2/3.15,0,0,0],this.lastHuman=[0,0,0,0]}observation(){const e=this.data.qvel;return Float32Array.from([...e.subarray(3,6),...this.position,...gc(Hr(this.quaternion),e.subarray(0,3)),...this.quaternion,...this.cachedGate,this.gates[this.gate][5]])}controller(e){const t=Array.from(this.data.qvel.subarray(3,6)),n=gc(Hr(this.quaternion),this.data.qvel.subarray(0,3)),a=[250,250,120],o=[500,500,16.7],c=[2.5,2.5,0],f=[33.3,33.3,166.7],p=[16572e-9,16656e-9,29262e-9],h=t.map((L,O)=>{const C=e[O+1]*(O===2?200:100)*Math.PI/180-L;this.integral[O]=En(this.integral[O]+C/250,-f[O],f[O]);const W=Math.abs(this.previousOmega[O])<1e-4?L:this.previousOmega[O];return p[O]*(a[O]*C+o[O]*this.integral[O]-c[O]*(L-W)*250)});this.previousOmega=t;const _=(e[0]+1)/2*this.weight*3.15,g=.043*Math.sqrt(2)/2,m=78e-11/23e-9,[x,b,P]=[h[0]/g,h[1]/g,h[2]/m],y=[_+x-b+P,_-x-b-P,_-x+b+P,_+x+b-P].map(L=>L/(4*23e-9));for(let L=0;L<4;L++){const O=En(Math.sign(y[L])*Math.sqrt(Math.abs(y[L])),0,2500);this.motors[L]=En(this.motors[L]+(O-this.motors[L])*.004/.005,0,2500)}const S=this.motors.map(L=>23e-9*L*L),D=this.motors.reduce((L,O)=>L+O,0),F=n.map((L,O)=>-D*[91785e-11,91785e-11,10311e-10][O]*L);return F[2]+=S.reduce((L,O)=>L+O,0),{force:F,moment:[g*(S[0]-S[1]-S[2]+S[3]),g*(-S[0]-S[1]+S[2]+S[3]),m*(S[0]-S[1]+S[2]-S[3])]}}action(e=[-1+2/3.15,0,0,0]){const t=this.observation(),n=this.policies.expert.predict(t);if(this.lastHuman=[...e],this.mode==="expert")return this.effectiveAlpha=1,n;if(this.mode==="manual")return this.effectiveAlpha=0,e.map(o=>En(o));if(this.mode==="tracking")return this.effectiveAlpha=1,this.policies.tracking.predict([...t,e[1],e[3]]);let a=this.alpha;if(this.mode==="coach"){const o=this.policies.coach.predict([...t,this.skill],!1)[0];a=1/(1+Math.exp(-En((o-2357.8374)/2786.9996,-80,80)))}return this.effectiveAlpha=En(a,.3,1),n.map((o,c)=>c===1||c===3?En(this.effectiveAlpha*o+(1-this.effectiveAlpha)*e[c]):o)}step(e){if(e.length!==4||!e.every(Number.isFinite))throw new Error("Invalid action");e=Array.from(e,m=>En(m)),this.lastAction=e;const t=this.data,n=this.mj;for(let m=0;m<5;m++){const{force:x,moment:b}=this.controller(e),P=Hr(this.quaternion);t.xfrc_applied.fill(0),t.xfrc_applied.set([..._c(P,x),..._c(P,b)],this.bodyId*6),n.mj_step(this.model,t),n.mj_forward(this.model,t)}this.steps++;const a=this.steps*.02,o=this.position;this.cachedGate=this.gateCoordinates(o);const c=this.crashes?"Contact":o[2]>6||o[2]<.1&&a>1.5?"Altitude":a-this.lastGateTime>7?"Gate timeout":"",f=this.gateCoordinates(this.previousPosition),p=this.cachedGate,h=p[0]-f[0],_=-f[0]/(h+1e-8),g=h<-1e-6&&Math.hypot(...o.map((m,x)=>m-this.previousPosition[x]))>1e-6&&_>=0&&_<=1&&Math.abs(f[1]+_*(p[1]-f[1]))<=.5&&Math.abs(f[2]+_*(p[2]-f[2]))<=.5;if(g&&(this.gate=(this.gate+1)%12,this.totalGates++,this.gatesPassed++,this.lastGateTime=a,this.gate===1&&(this.lapStart!==null&&(this.lastLap=a-this.lapStart,this.laps++,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap)),this.lapStart=a)),this.previousPosition=o,this.steps>100&&t.ncon){const m=t.contact;for(let x=0;x<t.ncon;x++){const b=m.get(x),P=b.geom1===this.collisionId||b.geom2===this.collisionId;if(b.delete(),P){n.mj_contactForce(this.model,t,x,this.contactForce);const y=this.contactForce.GetView();this.crashes+=Math.hypot(...y.subarray(0,3))>1e-8?1:0;break}}m.delete()}return c&&this.failures++,{crossed:g,failed:!!c,cause:c}}snapshot(){return{mode:this.mode,steps:this.steps,position:this.position,gates:this.totalGates,target:this.gate,laps:this.laps,failures:this.failures,alpha:this.effectiveAlpha}}dispose(){this.contactForce.delete(),this.data.delete(),this.model.delete()}}const al="183",ng=0,vc=1,ig=2,js=1,rg=2,Or=3,Ri=0,fn=1,Ln=2,fi=0,_r=1,xc=2,Sc=3,Ec=4,sg=5,Xi=100,ag=101,og=102,lg=103,cg=104,ug=200,fg=201,dg=202,hg=203,po=204,mo=205,pg=206,mg=207,_g=208,gg=209,vg=210,xg=211,Sg=212,Eg=213,yg=214,_o=0,go=1,vo=2,vr=3,xo=4,So=5,Eo=6,yo=7,Ru=0,Mg=1,bg=2,Jn=0,Cu=1,Pu=2,Du=3,ol=4,Fu=5,Lu=6,Iu=7,Uu=300,Yi=301,xr=302,Ra=303,Ca=304,ia=306,ea=1e3,ui=1001,Mo=1002,Zt=1003,Tg=1004,bs=1005,rn=1006,Pa=1007,ji=1008,mn=1009,Nu=1010,Ou=1011,Xr=1012,ll=1013,ei=1014,Yn=1015,hi=1016,cl=1017,ul=1018,$r=1020,Bu=35902,ku=35899,zu=1021,Vu=1022,Un=1023,pi=1026,qi=1027,Gu=1028,fl=1029,Sr=1030,dl=1031,hl=1033,qs=33776,Ys=33777,Ks=33778,Zs=33779,bo=35840,To=35841,wo=35842,Ao=35843,Ro=36196,Co=37492,Po=37496,Do=37488,Fo=37489,Lo=37490,Io=37491,Uo=37808,No=37809,Oo=37810,Bo=37811,ko=37812,zo=37813,Vo=37814,Go=37815,Ho=37816,Wo=37817,Xo=37818,$o=37819,jo=37820,qo=37821,Yo=36492,Ko=36494,Zo=36495,Jo=36283,Qo=36284,el=36285,tl=36286,wg=3200,Hu=0,Ag=1,wi="",cn="srgb",Er="srgb-linear",ta="linear",Ct="srgb",er=7680,yc=519,Rg=512,Cg=513,Pg=514,pl=515,Dg=516,Fg=517,ml=518,Lg=519,Mc=35044,bc="300 es",Kn=2e3,jr=2001;function Ig(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ug(){const i=qr("canvas");return i.style.display="block",i}const Tc={};function wc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Wu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=Wu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function yt(...i){i=Wu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function na(...i){const e=i.join(" ");e in Tc||(Tc[e]=!0,et(...i))}function Ng(i,e,t){return new Promise(function(n,a){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const Og={[_o]:go,[vo]:Eo,[xo]:yo,[vr]:So,[go]:_o,[Eo]:vo,[yo]:xo,[So]:vr};class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Da=Math.PI/180,nl=180/Math.PI;function Jr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Bg(i,e){return(i%e+e)%e}function Fa(i,e,t){return(1-t)*i+t*e}function Pr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*a+e.x,this.y=o*a+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zn{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,c,f){let p=n[a+0],h=n[a+1],_=n[a+2],g=n[a+3],m=o[c+0],x=o[c+1],b=o[c+2],P=o[c+3];if(g!==P||p!==m||h!==x||_!==b){let y=p*m+h*x+_*b+g*P;y<0&&(m=-m,x=-x,b=-b,P=-P,y=-y);let S=1-f;if(y<.9995){const D=Math.acos(y),F=Math.sin(D);S=Math.sin(S*D)/F,f=Math.sin(f*D)/F,p=p*S+m*f,h=h*S+x*f,_=_*S+b*f,g=g*S+P*f}else{p=p*S+m*f,h=h*S+x*f,_=_*S+b*f,g=g*S+P*f;const D=1/Math.sqrt(p*p+h*h+_*_+g*g);p*=D,h*=D,_*=D,g*=D}}e[t]=p,e[t+1]=h,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,a,o,c){const f=n[a],p=n[a+1],h=n[a+2],_=n[a+3],g=o[c],m=o[c+1],x=o[c+2],b=o[c+3];return e[t]=f*b+_*g+p*x-h*m,e[t+1]=p*b+_*m+h*g-f*x,e[t+2]=h*b+_*x+f*m-p*g,e[t+3]=_*b-f*g-p*m-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,c=e._order,f=Math.cos,p=Math.sin,h=f(n/2),_=f(a/2),g=f(o/2),m=p(n/2),x=p(a/2),b=p(o/2);switch(c){case"XYZ":this._x=m*_*g+h*x*b,this._y=h*x*g-m*_*b,this._z=h*_*b+m*x*g,this._w=h*_*g-m*x*b;break;case"YXZ":this._x=m*_*g+h*x*b,this._y=h*x*g-m*_*b,this._z=h*_*b-m*x*g,this._w=h*_*g+m*x*b;break;case"ZXY":this._x=m*_*g-h*x*b,this._y=h*x*g+m*_*b,this._z=h*_*b+m*x*g,this._w=h*_*g-m*x*b;break;case"ZYX":this._x=m*_*g-h*x*b,this._y=h*x*g+m*_*b,this._z=h*_*b-m*x*g,this._w=h*_*g+m*x*b;break;case"YZX":this._x=m*_*g+h*x*b,this._y=h*x*g+m*_*b,this._z=h*_*b-m*x*g,this._w=h*_*g-m*x*b;break;case"XZY":this._x=m*_*g-h*x*b,this._y=h*x*g-m*_*b,this._z=h*_*b+m*x*g,this._w=h*_*g+m*x*b;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],c=t[1],f=t[5],p=t[9],h=t[2],_=t[6],g=t[10],m=n+f+g;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(_-p)*x,this._y=(o-h)*x,this._z=(c-a)*x}else if(n>f&&n>g){const x=2*Math.sqrt(1+n-f-g);this._w=(_-p)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+h)/x}else if(f>g){const x=2*Math.sqrt(1+f-n-g);this._w=(o-h)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+g-n-f);this._w=(c-a)/x,this._x=(o+h)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,c=e._w,f=t._x,p=t._y,h=t._z,_=t._w;return this._x=n*_+c*f+a*h-o*p,this._y=a*_+c*p+o*f-n*h,this._z=o*_+c*h+n*p-a*f,this._w=c*_-n*f-a*p-o*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,o=e._z,c=e._w,f=this.dot(e);f<0&&(n=-n,a=-a,o=-o,c=-c,f=-f);let p=1-t;if(f<.9995){const h=Math.acos(f),_=Math.sin(h);p=Math.sin(p*h)/_,t=Math.sin(t*h)/_,this._x=this._x*p+n*t,this._y=this._y*p+a*t,this._z=this._z*p+o*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+n*t,this._y=this._y*p+a*t,this._z=this._z*p+o*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,c=e.y,f=e.z,p=e.w,h=2*(c*a-f*n),_=2*(f*t-o*a),g=2*(o*n-c*t);return this.x=t+p*h+c*g-f*_,this.y=n+p*_+f*h-o*g,this.z=a+p*g+o*_-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,c=t.x,f=t.y,p=t.z;return this.x=a*p-o*f,this.y=o*c-n*p,this.z=n*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new ee,Ac=new Zn;class rt{constructor(e,t,n,a,o,c,f,p,h){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,c,f,p,h)}set(e,t,n,a,o,c,f,p,h){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=o,_[5]=p,_[6]=n,_[7]=c,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,c=n[0],f=n[3],p=n[6],h=n[1],_=n[4],g=n[7],m=n[2],x=n[5],b=n[8],P=a[0],y=a[3],S=a[6],D=a[1],F=a[4],L=a[7],O=a[2],C=a[5],W=a[8];return o[0]=c*P+f*D+p*O,o[3]=c*y+f*F+p*C,o[6]=c*S+f*L+p*W,o[1]=h*P+_*D+g*O,o[4]=h*y+_*F+g*C,o[7]=h*S+_*L+g*W,o[2]=m*P+x*D+b*O,o[5]=m*y+x*F+b*C,o[8]=m*S+x*L+b*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],c=e[4],f=e[5],p=e[6],h=e[7],_=e[8];return t*c*_-t*f*h-n*o*_+n*f*p+a*o*h-a*c*p}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],c=e[4],f=e[5],p=e[6],h=e[7],_=e[8],g=_*c-f*h,m=f*p-_*o,x=h*o-c*p,b=t*g+n*m+a*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=g*P,e[1]=(a*h-_*n)*P,e[2]=(f*n-a*c)*P,e[3]=m*P,e[4]=(_*t-a*p)*P,e[5]=(a*o-f*t)*P,e[6]=x*P,e[7]=(n*p-h*t)*P,e[8]=(c*t-n*o)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,c,f){const p=Math.cos(o),h=Math.sin(o);return this.set(n*p,n*h,-n*(p*c+h*f)+c+e,-a*h,a*p,-a*(-h*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new rt,Rc=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cc=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kg(){const i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ct&&(a.r=di(a.r),a.g=di(a.g),a.b=di(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ct&&(a.r=gr(a.r),a.g=gr(a.g),a.b=gr(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wi?ta:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return na("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return na("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:Rc,fromXYZ:Cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Rc,fromXYZ:Cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const St=kg();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let tr;class zg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tr===void 0&&(tr=qr("canvas")),tr.width=e.width,tr.height=e.height;const a=tr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=di(o[c]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vg=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?o.push(Ua(a[c].image)):o.push(Ua(a[c]))}else o=Ua(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let Gg=0;const Na=new ee;class sn extends br{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=ui,a=ui,o=rn,c=ji,f=Un,p=mn,h=sn.DEFAULT_ANISOTROPY,_=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Jr(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Na).x}get height(){return this.source.getSize(Na).y}get depth(){return this.source.getSize(Na).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Uu;sn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,a=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const p=e.elements,h=p[0],_=p[4],g=p[8],m=p[1],x=p[5],b=p[9],P=p[2],y=p[6],S=p[10];if(Math.abs(_-m)<.01&&Math.abs(g-P)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+m)<.1&&Math.abs(g+P)<.1&&Math.abs(b+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,L=(x+1)/2,O=(S+1)/2,C=(_+m)/4,W=(g+P)/4,A=(b+y)/4;return F>L&&F>O?F<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(F),a=C/n,o=W/n):L>O?L<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(L),n=C/a,o=A/a):O<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(O),n=W/o,a=A/o),this.set(n,a,o,t),this}let D=Math.sqrt((y-b)*(y-b)+(g-P)*(g-P)+(m-_)*(m-_));return Math.abs(D)<.001&&(D=1),this.x=(y-b)/D,this.y=(g-P)/D,this.z=(m-_)/D,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hg extends br{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},o=new sn(a),c=n.count;for(let f=0;f<c;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new _l(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends Hg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xu extends sn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wg extends sn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ot{constructor(e,t,n,a,o,c,f,p,h,_,g,m,x,b,P,y){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,c,f,p,h,_,g,m,x,b,P,y)}set(e,t,n,a,o,c,f,p,h,_,g,m,x,b,P,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=a,S[1]=o,S[5]=c,S[9]=f,S[13]=p,S[2]=h,S[6]=_,S[10]=g,S[14]=m,S[3]=x,S[7]=b,S[11]=P,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,a=1/nr.setFromMatrixColumn(e,0).length(),o=1/nr.setFromMatrixColumn(e,1).length(),c=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,c=Math.cos(n),f=Math.sin(n),p=Math.cos(a),h=Math.sin(a),_=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*_,x=c*g,b=f*_,P=f*g;t[0]=p*_,t[4]=-p*g,t[8]=h,t[1]=x+b*h,t[5]=m-P*h,t[9]=-f*p,t[2]=P-m*h,t[6]=b+x*h,t[10]=c*p}else if(e.order==="YXZ"){const m=p*_,x=p*g,b=h*_,P=h*g;t[0]=m+P*f,t[4]=b*f-x,t[8]=c*h,t[1]=c*g,t[5]=c*_,t[9]=-f,t[2]=x*f-b,t[6]=P+m*f,t[10]=c*p}else if(e.order==="ZXY"){const m=p*_,x=p*g,b=h*_,P=h*g;t[0]=m-P*f,t[4]=-c*g,t[8]=b+x*f,t[1]=x+b*f,t[5]=c*_,t[9]=P-m*f,t[2]=-c*h,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const m=c*_,x=c*g,b=f*_,P=f*g;t[0]=p*_,t[4]=b*h-x,t[8]=m*h+P,t[1]=p*g,t[5]=P*h+m,t[9]=x*h-b,t[2]=-h,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const m=c*p,x=c*h,b=f*p,P=f*h;t[0]=p*_,t[4]=P-m*g,t[8]=b*g+x,t[1]=g,t[5]=c*_,t[9]=-f*_,t[2]=-h*_,t[6]=x*g+b,t[10]=m-P*g}else if(e.order==="XZY"){const m=c*p,x=c*h,b=f*p,P=f*h;t[0]=p*_,t[4]=-g,t[8]=h*_,t[1]=m*g+P,t[5]=c*_,t[9]=x*g-b,t[2]=b*g-x,t[6]=f*_,t[10]=P*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,$g)}lookAt(e,t,n){const a=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Si.crossVectors(n,dn),Si.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Si.crossVectors(n,dn)),Si.normalize(),Ts.crossVectors(dn,Si),a[0]=Si.x,a[4]=Ts.x,a[8]=dn.x,a[1]=Si.y,a[5]=Ts.y,a[9]=dn.y,a[2]=Si.z,a[6]=Ts.z,a[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,c=n[0],f=n[4],p=n[8],h=n[12],_=n[1],g=n[5],m=n[9],x=n[13],b=n[2],P=n[6],y=n[10],S=n[14],D=n[3],F=n[7],L=n[11],O=n[15],C=a[0],W=a[4],A=a[8],I=a[12],k=a[1],z=a[5],ne=a[9],te=a[13],Q=a[2],re=a[6],Z=a[10],J=a[14],Se=a[3],pe=a[7],Ce=a[11],Ie=a[15];return o[0]=c*C+f*k+p*Q+h*Se,o[4]=c*W+f*z+p*re+h*pe,o[8]=c*A+f*ne+p*Z+h*Ce,o[12]=c*I+f*te+p*J+h*Ie,o[1]=_*C+g*k+m*Q+x*Se,o[5]=_*W+g*z+m*re+x*pe,o[9]=_*A+g*ne+m*Z+x*Ce,o[13]=_*I+g*te+m*J+x*Ie,o[2]=b*C+P*k+y*Q+S*Se,o[6]=b*W+P*z+y*re+S*pe,o[10]=b*A+P*ne+y*Z+S*Ce,o[14]=b*I+P*te+y*J+S*Ie,o[3]=D*C+F*k+L*Q+O*Se,o[7]=D*W+F*z+L*re+O*pe,o[11]=D*A+F*ne+L*Z+O*Ce,o[15]=D*I+F*te+L*J+O*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],c=e[1],f=e[5],p=e[9],h=e[13],_=e[2],g=e[6],m=e[10],x=e[14],b=e[3],P=e[7],y=e[11],S=e[15],D=p*x-h*m,F=f*x-h*g,L=f*m-p*g,O=c*x-h*_,C=c*m-p*_,W=c*g-f*_;return t*(P*D-y*F+S*L)-n*(b*D-y*O+S*C)+a*(b*F-P*O+S*W)-o*(b*L-P*C+y*W)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],c=e[4],f=e[5],p=e[6],h=e[7],_=e[8],g=e[9],m=e[10],x=e[11],b=e[12],P=e[13],y=e[14],S=e[15],D=t*f-n*c,F=t*p-a*c,L=t*h-o*c,O=n*p-a*f,C=n*h-o*f,W=a*h-o*p,A=_*P-g*b,I=_*y-m*b,k=_*S-x*b,z=g*y-m*P,ne=g*S-x*P,te=m*S-x*y,Q=D*te-F*ne+L*z+O*k-C*I+W*A;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/Q;return e[0]=(f*te-p*ne+h*z)*re,e[1]=(a*ne-n*te-o*z)*re,e[2]=(P*W-y*C+S*O)*re,e[3]=(m*C-g*W-x*O)*re,e[4]=(p*k-c*te-h*I)*re,e[5]=(t*te-a*k+o*I)*re,e[6]=(y*L-b*W-S*F)*re,e[7]=(_*W-m*L+x*F)*re,e[8]=(c*ne-f*k+h*A)*re,e[9]=(n*k-t*ne-o*A)*re,e[10]=(b*C-P*L+S*D)*re,e[11]=(g*L-_*C-x*D)*re,e[12]=(f*I-c*z-p*A)*re,e[13]=(t*z-n*I+a*A)*re,e[14]=(P*F-b*O-y*D)*re,e[15]=(_*O-g*F+m*D)*re,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,c=e.x,f=e.y,p=e.z,h=o*c,_=o*f;return this.set(h*c+n,h*f-a*p,h*p+a*f,0,h*f+a*p,_*f+n,_*p-a*c,0,h*p-a*f,_*p+a*c,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,c){return this.set(1,n,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,c=t._y,f=t._z,p=t._w,h=o+o,_=c+c,g=f+f,m=o*h,x=o*_,b=o*g,P=c*_,y=c*g,S=f*g,D=p*h,F=p*_,L=p*g,O=n.x,C=n.y,W=n.z;return a[0]=(1-(P+S))*O,a[1]=(x+L)*O,a[2]=(b-F)*O,a[3]=0,a[4]=(x-L)*C,a[5]=(1-(m+S))*C,a[6]=(y+D)*C,a[7]=0,a[8]=(b+F)*W,a[9]=(y-D)*W,a[10]=(1-(m+P))*W,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinant();if(o===0)return n.set(1,1,1),t.identity(),this;let c=nr.set(a[0],a[1],a[2]).length();const f=nr.set(a[4],a[5],a[6]).length(),p=nr.set(a[8],a[9],a[10]).length();o<0&&(c=-c),Cn.copy(this);const h=1/c,_=1/f,g=1/p;return Cn.elements[0]*=h,Cn.elements[1]*=h,Cn.elements[2]*=h,Cn.elements[4]*=_,Cn.elements[5]*=_,Cn.elements[6]*=_,Cn.elements[8]*=g,Cn.elements[9]*=g,Cn.elements[10]*=g,t.setFromRotationMatrix(Cn),n.x=c,n.y=f,n.z=p,this}makePerspective(e,t,n,a,o,c,f=Kn,p=!1){const h=this.elements,_=2*o/(t-e),g=2*o/(n-a),m=(t+e)/(t-e),x=(n+a)/(n-a);let b,P;if(p)b=o/(c-o),P=c*o/(c-o);else if(f===Kn)b=-(c+o)/(c-o),P=-2*c*o/(c-o);else if(f===jr)b=-c/(c-o),P=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=_,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,a,o,c,f=Kn,p=!1){const h=this.elements,_=2/(t-e),g=2/(n-a),m=-(t+e)/(t-e),x=-(n+a)/(n-a);let b,P;if(p)b=1/(c-o),P=c/(c-o);else if(f===Kn)b=-2/(c-o),P=-(c+o)/(c-o);else if(f===jr)b=-1/(c-o),P=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=_,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=g,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=b,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const nr=new ee,Cn=new Ot,Xg=new ee(0,0,0),$g=new ee(1,1,1),Si=new ee,Ts=new ee,dn=new ee,Pc=new Ot,Dc=new Zn;class ti{constructor(e=0,t=0,n=0,a=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],c=a[4],f=a[8],p=a[1],h=a[5],_=a[9],g=a[2],m=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-_,x),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class $u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jg=0;const Fc=new ee,ir=new Zn,ri=new Ot,ws=new ee,Dr=new ee,qg=new ee,Yg=new Zn,Lc=new ee(1,0,0),Ic=new ee(0,1,0),Uc=new ee(0,0,1),Nc={type:"added"},Kg={type:"removed"},rr={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Jt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new ee,t=new ti,n=new Zn,a=new ee(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new rt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Dr,ws,this.up):ri.lookAt(ws,Dr,this.up),this.quaternion.setFromRotationMatrix(ri),a&&(ri.extractRotation(a.matrixWorld),ir.setFromRotationMatrix(ri),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),rr.child=e,this.dispatchEvent(rr),rr.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kg),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*a,o[13]+=n-o[1]*t-o[5]*n-o[9]*a,o[14]+=a-o[2]*t-o[6]*n-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,_=p.length;h<_;h++){const g=p[h];o(e.shapes,g)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(o(e.materials,this.material[p]));a.material=f}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(o(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),h=c(e.textures),_=c(e.images),g=c(e.shapes),m=c(e.skeletons),x=c(e.animations),b=c(e.nodes);f.length>0&&(n.geometries=f),p.length>0&&(n.materials=p),h.length>0&&(n.textures=h),_.length>0&&(n.images=_),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),b.length>0&&(n.nodes=b)}return n.object=a,n;function c(f){const p=[];for(const h in f){const _=f[h];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}Jt.DEFAULT_UP=new ee(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class As extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zg={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const P of e.hand.values()){const y=t.getJointPose(P,n),S=this._getHandJoint(h,P);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],m=_.position.distanceTo(g.position),x=.02,b=.005;h.inputState.pinching&&m>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=St.workingColorSpace){if(e=Bg(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=ka(c,o,e+1/3),this.g=ka(c,o,e),this.b=ka(c,o,e-1/3)}return St.colorSpaceToWorking(this,a),this}setStyle(e,t=cn){function n(o){o!==void 0&&parseFloat(o)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return St.workingToColorSpace(nn.copy(this),e),Math.round(pt(nn.r*255,0,255))*65536+Math.round(pt(nn.g*255,0,255))*256+Math.round(pt(nn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(nn.copy(this),t);const n=nn.r,a=nn.g,o=nn.b,c=Math.max(n,a,o),f=Math.min(n,a,o);let p,h;const _=(f+c)/2;if(f===c)p=0,h=0;else{const g=c-f;switch(h=_<=.5?g/(c+f):g/(2-c-f),c){case n:p=(a-o)/g+(a<o?6:0);break;case a:p=(o-n)/g+2;break;case o:p=(n-a)/g+4;break}p/=6}return e.h=p,e.s=h,e.l=_,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=cn){St.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,a=nn.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Rs);const n=Fa(Ei.h,Rs.h,t),a=Fa(Ei.s,Rs.s,t),o=Fa(Ei.l,Rs.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new _t;_t.NAMES=ju;class Jg extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pn=new ee,si=new ee,za=new ee,ai=new ee,sr=new ee,ar=new ee,Oc=new ee,Va=new ee,Ga=new ee,Ha=new ee,Wa=new kt,Xa=new kt,$a=new kt;class In{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Pn.subVectors(e,t),a.cross(Pn);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Pn.subVectors(a,t),si.subVectors(n,t),za.subVectors(e,t);const c=Pn.dot(Pn),f=Pn.dot(si),p=Pn.dot(za),h=si.dot(si),_=si.dot(za),g=c*h-f*f;if(g===0)return o.set(0,0,0),null;const m=1/g,x=(h*p-f*_)*m,b=(c*_-f*p)*m;return o.set(1-x-b,b,x)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,a,o,c,f,p){return this.getBarycoord(e,t,n,a,ai)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,ai.x),p.addScaledVector(c,ai.y),p.addScaledVector(f,ai.z),p)}static getInterpolatedAttribute(e,t,n,a,o,c){return Wa.setScalar(0),Xa.setScalar(0),$a.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,n),$a.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Wa,o.x),c.addScaledVector(Xa,o.y),c.addScaledVector($a,o.z),c}static isFrontFacing(e,t,n,a){return Pn.subVectors(n,t),si.subVectors(e,t),Pn.cross(si).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return In.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let c,f;sr.subVectors(a,n),ar.subVectors(o,n),Va.subVectors(e,n);const p=sr.dot(Va),h=ar.dot(Va);if(p<=0&&h<=0)return t.copy(n);Ga.subVectors(e,a);const _=sr.dot(Ga),g=ar.dot(Ga);if(_>=0&&g<=_)return t.copy(a);const m=p*g-_*h;if(m<=0&&p>=0&&_<=0)return c=p/(p-_),t.copy(n).addScaledVector(sr,c);Ha.subVectors(e,o);const x=sr.dot(Ha),b=ar.dot(Ha);if(b>=0&&x<=b)return t.copy(o);const P=x*h-p*b;if(P<=0&&h>=0&&b<=0)return f=h/(h-b),t.copy(n).addScaledVector(ar,f);const y=_*b-x*g;if(y<=0&&g-_>=0&&x-b>=0)return Oc.subVectors(o,a),f=(g-_)/(g-_+(x-b)),t.copy(a).addScaledVector(Oc,f);const S=1/(y+P+m);return c=P*S,f=m*S,t.copy(n).addScaledVector(sr,c).addScaledVector(ar,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qr{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=o.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Dn):Dn.fromBufferAttribute(o,c),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ps.subVectors(this.max,Fr),or.subVectors(e.a,Fr),lr.subVectors(e.b,Fr),cr.subVectors(e.c,Fr),yi.subVectors(lr,or),Mi.subVectors(cr,lr),Bi.subVectors(or,cr);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Bi.z,Bi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Bi.z,0,-Bi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Bi.y,Bi.x,0];return!ja(t,or,lr,cr,Ps)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,or,lr,cr,Ps))?!1:(Ds.crossVectors(yi,Mi),t=[Ds.x,Ds.y,Ds.z],ja(t,or,lr,cr,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Dn=new ee,Cs=new Qr,or=new ee,lr=new ee,cr=new ee,yi=new ee,Mi=new ee,Bi=new ee,Fr=new ee,Ps=new ee,Ds=new ee,ki=new ee;function ja(i,e,t,n,a){for(let o=0,c=i.length-3;o<=c;o+=3){ki.fromArray(i,o);const f=a.x*Math.abs(ki.x)+a.y*Math.abs(ki.y)+a.z*Math.abs(ki.z),p=e.dot(ki),h=t.dot(ki),_=n.dot(ki);if(Math.max(-Math.max(p,h,_),Math.min(p,h,_))>f)return!1}return!0}const Vt=new ee,Fs=new bt;let Qg=0;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),a=ln(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),n=ln(n,this.array),a=ln(a,this.array),o=ln(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class qu extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yu extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tn extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ev=new Qr,Lr=new ee,qa=new ee;class gl{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ev.setFromPoints(e).getCenter(n);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Lr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(qa)),this.expandByPoint(Lr.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tv=0;const xn=new Ot,Ya=new Jt,ur=new ee,hn=new Qr,Ir=new Qr,Yt=new ee;class kn extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ig(e)?Yu:qu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new rt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Tn(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];hn.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const f=t[o];Ir.setFromBufferAttribute(f),this.morphTargetsRelative?(Yt.addVectors(hn.min,Ir.min),hn.expandByPoint(Yt),Yt.addVectors(hn.max,Ir.max),hn.expandByPoint(Yt)):(hn.expandByPoint(Ir.min),hn.expandByPoint(Ir.max))}hn.getCenter(n);let a=0;for(let o=0,c=e.count;o<c;o++)Yt.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(Yt));if(t)for(let o=0,c=t.length;o<c;o++){const f=t[o],p=this.morphTargetsRelative;for(let h=0,_=f.count;h<_;h++)Yt.fromBufferAttribute(f,h),p&&(ur.fromBufferAttribute(e,h),Yt.add(ur)),a=Math.max(a,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let A=0;A<n.count;A++)f[A]=new ee,p[A]=new ee;const h=new ee,_=new ee,g=new ee,m=new bt,x=new bt,b=new bt,P=new ee,y=new ee;function S(A,I,k){h.fromBufferAttribute(n,A),_.fromBufferAttribute(n,I),g.fromBufferAttribute(n,k),m.fromBufferAttribute(o,A),x.fromBufferAttribute(o,I),b.fromBufferAttribute(o,k),_.sub(h),g.sub(h),x.sub(m),b.sub(m);const z=1/(x.x*b.y-b.x*x.y);isFinite(z)&&(P.copy(_).multiplyScalar(b.y).addScaledVector(g,-x.y).multiplyScalar(z),y.copy(g).multiplyScalar(x.x).addScaledVector(_,-b.x).multiplyScalar(z),f[A].add(P),f[I].add(P),f[k].add(P),p[A].add(y),p[I].add(y),p[k].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,I=D.length;A<I;++A){const k=D[A],z=k.start,ne=k.count;for(let te=z,Q=z+ne;te<Q;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const F=new ee,L=new ee,O=new ee,C=new ee;function W(A){O.fromBufferAttribute(a,A),C.copy(O);const I=f[A];F.copy(I),F.sub(O.multiplyScalar(O.dot(I))).normalize(),L.crossVectors(C,I);const z=L.dot(p[A])<0?-1:1;c.setXYZW(A,F.x,F.y,F.z,z)}for(let A=0,I=D.length;A<I;++A){const k=D[A],z=k.start,ne=k.count;for(let te=z,Q=z+ne;te<Q;te+=3)W(e.getX(te+0)),W(e.getX(te+1)),W(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);const a=new ee,o=new ee,c=new ee,f=new ee,p=new ee,h=new ee,_=new ee,g=new ee;if(e)for(let m=0,x=e.count;m<x;m+=3){const b=e.getX(m+0),P=e.getX(m+1),y=e.getX(m+2);a.fromBufferAttribute(t,b),o.fromBufferAttribute(t,P),c.fromBufferAttribute(t,y),_.subVectors(c,o),g.subVectors(a,o),_.cross(g),f.fromBufferAttribute(n,b),p.fromBufferAttribute(n,P),h.fromBufferAttribute(n,y),f.add(_),p.add(_),h.add(_),n.setXYZ(b,f.x,f.y,f.z),n.setXYZ(P,p.x,p.y,p.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,x=t.count;m<x;m+=3)a.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),_.subVectors(c,o),g.subVectors(a,o),_.cross(g),n.setXYZ(m+0,_.x,_.y,_.z),n.setXYZ(m+1,_.x,_.y,_.z),n.setXYZ(m+2,_.x,_.y,_.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(f,p){const h=f.array,_=f.itemSize,g=f.normalized,m=new h.constructor(p.length*_);let x=0,b=0;for(let P=0,y=p.length;P<y;P++){f.isInterleavedBufferAttribute?x=p[P]*f.data.stride+f.offset:x=p[P]*_;for(let S=0;S<_;S++)m[b++]=h[x++]}return new On(m,_,g)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,a=this.attributes;for(const f in a){const p=a[f],h=e(p,n);t.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const p=[],h=o[f];for(let _=0,g=h.length;_<g;_++){const m=h[_],x=e(m,n);p.push(x)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const h=n[p];e.data.attributes[p]=h.toJSON(e.data)}const a={};let o=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],_=[];for(let g=0,m=h.length;g<m;g++){const x=h[g];_.push(x.toJSON(e.data))}_.length>0&&(a[p]=_,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const h in a){const _=a[h];this.setAttribute(h,_.clone(t))}const o=e.morphAttributes;for(const h in o){const _=[],g=o[h];for(let m=0,x=g.length;m<x;m++)_.push(g[m].clone(t));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,_=c.length;h<_;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nv=0;class es extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=_r,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const c=[];for(const f in o){const p=o[f];delete p.metadata,c.push(p)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const li=new ee,Ka=new ee,Ls=new ee,bi=new ee,Za=new ee,Is=new ee,Ja=new ee;class iv{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ka.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Ka);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Ls),f=bi.dot(this.direction),p=-bi.dot(Ls),h=bi.lengthSq(),_=Math.abs(1-c*c);let g,m,x,b;if(_>0)if(g=c*p-f,m=c*f-p,b=o*_,g>=0)if(m>=-b)if(m<=b){const P=1/_;g*=P,m*=P,x=g*(g+c*m+2*f)+m*(c*g+m+2*p)+h}else m=o,g=Math.max(0,-(c*m+f)),x=-g*g+m*(m+2*p)+h;else m=-o,g=Math.max(0,-(c*m+f)),x=-g*g+m*(m+2*p)+h;else m<=-b?(g=Math.max(0,-(-c*o+f)),m=g>0?-o:Math.min(Math.max(-o,-p),o),x=-g*g+m*(m+2*p)+h):m<=b?(g=0,m=Math.min(Math.max(-o,-p),o),x=m*(m+2*p)+h):(g=Math.max(0,-(c*o+f)),m=g>0?o:Math.min(Math.max(-o,-p),o),x=-g*g+m*(m+2*p)+h);else m=c>0?-o:o,g=Math.max(0,-(c*m+f)),x=-g*g+m*(m+2*p)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ka).addScaledVector(Ls,m),x}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),a=li.dot(li)-n*n,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),f=n-c,p=n+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,c,f,p;const h=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,a=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,a=(e.min.x-m.x)*h),_>=0?(o=(e.min.y-m.y)*_,c=(e.max.y-m.y)*_):(o=(e.max.y-m.y)*_,c=(e.min.y-m.y)*_),n>c||o>a||((o>n||isNaN(n))&&(n=o),(c<a||isNaN(a))&&(a=c),g>=0?(f=(e.min.z-m.z)*g,p=(e.max.z-m.z)*g):(f=(e.max.z-m.z)*g,p=(e.min.z-m.z)*g),n>p||f>a)||((f>n||n!==n)&&(n=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,a,o){Za.subVectors(t,e),Is.subVectors(n,e),Ja.crossVectors(Za,Is);let c=this.direction.dot(Ja),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;bi.subVectors(this.origin,e);const p=f*this.direction.dot(Is.crossVectors(bi,Is));if(p<0)return null;const h=f*this.direction.dot(Za.cross(bi));if(h<0||p+h>c)return null;const _=-f*bi.dot(Ja);return _<0?null:this.at(_/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vl extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bc=new Ot,zi=new iv,Us=new gl,kc=new ee,Ns=new ee,Os=new ee,Bs=new ee,Qa=new ee,ks=new ee,zc=new ee,zs=new ee;class Bn extends Jt{constructor(e=new kn,t=new vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(o&&f){ks.set(0,0,0);for(let p=0,h=o.length;p<h;p++){const _=f[p],g=o[p];_!==0&&(Qa.fromBufferAttribute(g,e),c?ks.addScaledVector(Qa,_):ks.addScaledVector(Qa.sub(t),_))}t.add(ks)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(o),zi.copy(e.ray).recast(e.near),!(Us.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Us,kc)===null||zi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Bc.copy(o).invert(),zi.copy(e.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let a;const o=this.geometry,c=this.material,f=o.index,p=o.attributes.position,h=o.attributes.uv,_=o.attributes.uv1,g=o.attributes.normal,m=o.groups,x=o.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,P=m.length;b<P;b++){const y=m[b],S=c[y.materialIndex],D=Math.max(y.start,x.start),F=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let L=D,O=F;L<O;L+=3){const C=f.getX(L),W=f.getX(L+1),A=f.getX(L+2);a=Vs(this,S,e,n,h,_,g,C,W,A),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const b=Math.max(0,x.start),P=Math.min(f.count,x.start+x.count);for(let y=b,S=P;y<S;y+=3){const D=f.getX(y),F=f.getX(y+1),L=f.getX(y+2);a=Vs(this,c,e,n,h,_,g,D,F,L),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,P=m.length;b<P;b++){const y=m[b],S=c[y.materialIndex],D=Math.max(y.start,x.start),F=Math.min(p.count,Math.min(y.start+y.count,x.start+x.count));for(let L=D,O=F;L<O;L+=3){const C=L,W=L+1,A=L+2;a=Vs(this,S,e,n,h,_,g,C,W,A),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const b=Math.max(0,x.start),P=Math.min(p.count,x.start+x.count);for(let y=b,S=P;y<S;y+=3){const D=y,F=y+1,L=y+2;a=Vs(this,c,e,n,h,_,g,D,F,L),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function rv(i,e,t,n,a,o,c,f){let p;if(e.side===fn?p=n.intersectTriangle(c,o,a,!0,f):p=n.intersectTriangle(a,o,c,e.side===Ri,f),p===null)return null;zs.copy(f),zs.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(zs);return h<t.near||h>t.far?null:{distance:h,point:zs.clone(),object:i}}function Vs(i,e,t,n,a,o,c,f,p,h){i.getVertexPosition(f,Ns),i.getVertexPosition(p,Os),i.getVertexPosition(h,Bs);const _=rv(i,e,t,n,Ns,Os,Bs,zc);if(_){const g=new ee;In.getBarycoord(zc,Ns,Os,Bs,g),a&&(_.uv=In.getInterpolatedAttribute(a,f,p,h,g,new bt)),o&&(_.uv1=In.getInterpolatedAttribute(o,f,p,h,g,new bt)),c&&(_.normal=In.getInterpolatedAttribute(c,f,p,h,g,new ee),_.normal.dot(n.direction)>0&&_.normal.multiplyScalar(-1));const m={a:f,b:p,c:h,normal:new ee,materialIndex:0};In.getNormal(Ns,Os,Bs,m.normal),_.face=m,_.barycoord=g}return _}class sv extends sn{constructor(e=null,t=1,n=1,a,o,c,f,p,h=Zt,_=Zt,g,m){super(null,c,f,p,h,_,a,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eo=new ee,av=new ee,ov=new rt;class Wi{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=eo.subVectors(n,t).cross(av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eo),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ov.getNormalMatrix(e),a=this.coplanarPoint(eo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new gl,lv=new bt(.5,.5),Gs=new ee;class xl{constructor(e=new Wi,t=new Wi,n=new Wi,a=new Wi,o=new Wi,c=new Wi){this.planes=[e,t,n,a,o,c]}set(e,t,n,a,o,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(n),f[3].copy(a),f[4].copy(o),f[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){const a=this.planes,o=e.elements,c=o[0],f=o[1],p=o[2],h=o[3],_=o[4],g=o[5],m=o[6],x=o[7],b=o[8],P=o[9],y=o[10],S=o[11],D=o[12],F=o[13],L=o[14],O=o[15];if(a[0].setComponents(h-c,x-_,S-b,O-D).normalize(),a[1].setComponents(h+c,x+_,S+b,O+D).normalize(),a[2].setComponents(h+f,x+g,S+P,O+F).normalize(),a[3].setComponents(h-f,x-g,S-P,O-F).normalize(),n)a[4].setComponents(p,m,y,L).normalize(),a[5].setComponents(h-p,x-m,S-y,O-L).normalize();else if(a[4].setComponents(h-p,x-m,S-y,O-L).normalize(),t===Kn)a[5].setComponents(h+p,x+m,S+y,O+L).normalize();else if(t===jr)a[5].setComponents(p,m,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=lv.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Gs.x=a.normal.x>0?e.max.x:e.min.x,Gs.y=a.normal.y>0?e.max.y:e.min.y,Gs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ku extends sn{constructor(e=[],t=Yi,n,a,o,c,f,p,h,_){super(e,t,n,a,o,c,f,p,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yr extends sn{constructor(e,t,n=ei,a,o,c,f=Zt,p=Zt,h,_=pi,g=1){if(_!==pi&&_!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,a,o,c,f,p,_,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cv extends Yr{constructor(e,t=ei,n=Yi,a,o,c=Zt,f=Zt,p,h=pi){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,t,n,a,o,c,f,p,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zu extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ts extends kn{constructor(e=1,t=1,n=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:c};const f=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const p=[],h=[],_=[],g=[];let m=0,x=0;b("z","y","x",-1,-1,n,t,e,c,o,0),b("z","y","x",1,-1,n,t,-e,c,o,1),b("x","z","y",1,1,e,n,t,a,c,2),b("x","z","y",1,-1,e,n,-t,a,c,3),b("x","y","z",1,-1,e,t,n,a,o,4),b("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(p),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(g,2));function b(P,y,S,D,F,L,O,C,W,A,I){const k=L/W,z=O/A,ne=L/2,te=O/2,Q=C/2,re=W+1,Z=A+1;let J=0,Se=0;const pe=new ee;for(let Ce=0;Ce<Z;Ce++){const Ie=Ce*z-te;for(let Ae=0;Ae<re;Ae++){const We=Ae*k-ne;pe[P]=We*D,pe[y]=Ie*F,pe[S]=Q,h.push(pe.x,pe.y,pe.z),pe[P]=0,pe[y]=0,pe[S]=C>0?1:-1,_.push(pe.x,pe.y,pe.z),g.push(Ae/W),g.push(1-Ce/A),J+=1}}for(let Ce=0;Ce<A;Ce++)for(let Ie=0;Ie<W;Ie++){const Ae=m+Ie+re*Ce,We=m+Ie+re*(Ce+1),Ke=m+(Ie+1)+re*(Ce+1),Je=m+(Ie+1)+re*Ce;p.push(Ae,We,Je),p.push(We,Ke,Je),Se+=6}f.addGroup(x,Se,I),x+=Se,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ra extends kn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,c=t/2,f=Math.floor(n),p=Math.floor(a),h=f+1,_=p+1,g=e/f,m=t/p,x=[],b=[],P=[],y=[];for(let S=0;S<_;S++){const D=S*m-c;for(let F=0;F<h;F++){const L=F*g-o;b.push(L,-D,0),P.push(0,0,1),y.push(F/f),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let D=0;D<f;D++){const F=D+h*S,L=D+h*(S+1),O=D+1+h*(S+1),C=D+1+h*S;x.push(F,L,C),x.push(L,O,C)}this.setIndex(x),this.setAttribute("position",new Tn(b,3)),this.setAttribute("normal",new Tn(P,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.widthSegments,e.heightSegments)}}function yr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=yr(i[t]);for(const a in n)e[a]=n[a]}return e}function uv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const fv={clone:yr,merge:on};var dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dv,this.fragmentShader=hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=uv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pv extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mv extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _v extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gv extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const to={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Vc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Vc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class vv{constructor(e,t,n){const a=this;let o=!1,c=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(_){f++,o===!1&&a.onStart!==void 0&&a.onStart(_,c,f),o=!0},this.itemEnd=function(_){c++,a.onProgress!==void 0&&a.onProgress(_,c,f),c===f&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(_){a.onError!==void 0&&a.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,g){return h.push(_,g),this},this.removeHandler=function(_){const g=h.indexOf(_);return g!==-1&&h.splice(g,2),this},this.getHandler=function(_){for(let g=0,m=h.length;g<m;g+=2){const x=h[g],b=h[g+1];if(x.global&&(x.lastIndex=0),x.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xv=new vv;class Sl{constructor(e){this.manager=e!==void 0?e:xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,o){n.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";const fr=new WeakMap;class Sv extends Sl{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=to.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let g=fr.get(c);g===void 0&&(g=[],fr.set(c,g)),g.push({onLoad:t,onError:a})}return c}const f=qr("img");function p(){_(),t&&t(this);const g=fr.get(this)||[];for(let m=0;m<g.length;m++){const x=g[m];x.onLoad&&x.onLoad(this)}fr.delete(this),o.manager.itemEnd(e)}function h(g){_(),a&&a(g),to.remove(`image:${e}`);const m=fr.get(this)||[];for(let x=0;x<m.length;x++){const b=m[x];b.onError&&b.onError(g)}fr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function _(){f.removeEventListener("load",p,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),to.add(`image:${e}`,f),o.manager.itemStart(e),f.src=e,f}}class Ev extends Sl{constructor(e){super(e)}load(e,t,n,a){const o=new sn,c=new Sv(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){o.image=f,o.needsUpdate=!0,t!==void 0&&t(o)},n,a),o}}class El extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class yv extends El{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const no=new Ot,Gc=new ee,Hc=new ee;class Mv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),no.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===jr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hs=new ee,Ws=new Zn,$n=new ee;class Qu extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hs,Ws,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hs,Ws,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new ee,Wc=new bt,Xc=new bt;class Mn extends Qu{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,n,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/p,t-=c.offsetY*n/h,a*=c.width/p,n*=c.height/h}const f=this.filmOffset;f!==0&&(o+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class yl extends Qu{constructor(e=-1,t=1,n=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,c=n+e,f=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(o,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class bv extends Mv{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $c extends El{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new bv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Tv extends El{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const dr=-90,hr=1;class wv extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Mn(dr,hr,e,t);a.layers=this.layers,this.add(a);const o=new Mn(dr,hr,e,t);o.layers=this.layers,this.add(o);const c=new Mn(dr,hr,e,t);c.layers=this.layers,this.add(c);const f=new Mn(dr,hr,e,t);f.layers=this.layers,this.add(f);const p=new Mn(dr,hr,e,t);p.layers=this.layers,this.add(p);const h=new Mn(dr,hr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,c,f,p]=t;for(const h of t)this.remove(h);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,f,p,h,_]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(n,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(g,m,x),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Av extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function jc(i,e,t,n){const a=Rv(n);switch(t){case zu:return i*e;case Gu:return i*e/a.components*a.byteLength;case fl:return i*e/a.components*a.byteLength;case Sr:return i*e*2/a.components*a.byteLength;case dl:return i*e*2/a.components*a.byteLength;case Vu:return i*e*3/a.components*a.byteLength;case Un:return i*e*4/a.components*a.byteLength;case hl:return i*e*4/a.components*a.byteLength;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ks:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:case Ao:return Math.max(i,16)*Math.max(e,8)/4;case bo:case wo:return Math.max(i,8)*Math.max(e,8)/2;case Ro:case Co:case Do:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Po:case Lo:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Ko:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rv(i){switch(i){case mn:case Nu:return{byteLength:1,components:1};case Xr:case Ou:case hi:return{byteLength:2,components:1};case cl:case ul:return{byteLength:2,components:4};case ei:case ll:case Yn:return{byteLength:4,components:1};case Bu:case ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);function ef(){let i=null,e=!1,t=null,n=null;function a(o,c){t(o,c),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Cv(i){const e=new WeakMap;function t(f,p){const h=f.array,_=f.usage,g=h.byteLength,m=i.createBuffer();i.bindBuffer(p,m),i.bufferData(p,h,_),f.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=i.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function n(f,p,h){const _=p.array,g=p.updateRanges;if(i.bindBuffer(h,f),g.length===0)i.bufferSubData(h,0,_);else{g.sort((x,b)=>x.start-b.start);let m=0;for(let x=1;x<g.length;x++){const b=g[m],P=g[x];P.start<=b.start+b.count+1?b.count=Math.max(b.count,P.start+P.count-b.start):(++m,g[m]=P)}g.length=m+1;for(let x=0,b=g.length;x<b;x++){const P=g[x];i.bufferSubData(h,P.start*_.BYTES_PER_ELEMENT,_,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(i.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,f,p),h.version=f.version}}return{get:a,remove:o,update:c}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,px=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ox=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:Pv,alphahash_pars_fragment:Dv,alphamap_fragment:Fv,alphamap_pars_fragment:Lv,alphatest_fragment:Iv,alphatest_pars_fragment:Uv,aomap_fragment:Nv,aomap_pars_fragment:Ov,batching_pars_vertex:Bv,batching_vertex:kv,begin_vertex:zv,beginnormal_vertex:Vv,bsdfs:Gv,iridescence_fragment:Hv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:$v,clipping_planes_pars_vertex:jv,clipping_planes_vertex:qv,color_fragment:Yv,color_pars_fragment:Kv,color_pars_vertex:Zv,color_vertex:Jv,common:Qv,cube_uv_reflection_fragment:e0,defaultnormal_vertex:t0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:r0,emissivemap_pars_fragment:s0,colorspace_fragment:a0,colorspace_pars_fragment:o0,envmap_fragment:l0,envmap_common_pars_fragment:c0,envmap_pars_fragment:u0,envmap_pars_vertex:f0,envmap_physical_pars_fragment:y0,envmap_vertex:d0,fog_vertex:h0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:_0,gradientmap_pars_fragment:g0,lightmap_pars_fragment:v0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:S0,lights_pars_begin:E0,lights_toon_fragment:M0,lights_toon_pars_fragment:b0,lights_phong_fragment:T0,lights_phong_pars_fragment:w0,lights_physical_fragment:A0,lights_physical_pars_fragment:R0,lights_fragment_begin:C0,lights_fragment_maps:P0,lights_fragment_end:D0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:I0,logdepthbuf_vertex:U0,map_fragment:N0,map_pars_fragment:O0,map_particle_fragment:B0,map_particle_pars_fragment:k0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:H0,morphnormal_vertex:W0,morphtarget_pars_vertex:X0,morphtarget_vertex:$0,normal_fragment_begin:j0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:K0,normal_vertex:Z0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:tx,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:rx,premultiplied_alpha_fragment:sx,project_vertex:ax,dithering_fragment:ox,dithering_pars_fragment:lx,roughnessmap_fragment:cx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:dx,shadowmap_vertex:hx,shadowmask_pars_fragment:px,skinbase_vertex:mx,skinning_pars_vertex:_x,skinning_vertex:gx,skinnormal_vertex:vx,specularmap_fragment:xx,specularmap_pars_fragment:Sx,tonemapping_fragment:Ex,tonemapping_pars_fragment:yx,transmission_fragment:Mx,transmission_pars_fragment:bx,uv_pars_fragment:Tx,uv_pars_vertex:wx,uv_vertex:Ax,worldpos_vertex:Rx,background_vert:Cx,background_frag:Px,backgroundCube_vert:Dx,backgroundCube_frag:Fx,cube_vert:Lx,cube_frag:Ix,depth_vert:Ux,depth_frag:Nx,distance_vert:Ox,distance_frag:Bx,equirect_vert:kx,equirect_frag:zx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Hx,meshbasic_frag:Wx,meshlambert_vert:Xx,meshlambert_frag:$x,meshmatcap_vert:jx,meshmatcap_frag:qx,meshnormal_vert:Yx,meshnormal_frag:Kx,meshphong_vert:Zx,meshphong_frag:Jx,meshphysical_vert:Qx,meshphysical_frag:eS,meshtoon_vert:tS,meshtoon_frag:nS,points_vert:iS,points_frag:rS,shadow_vert:sS,shadow_frag:aS,sprite_vert:oS,sprite_frag:lS},Re={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},qn={basic:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:on([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:on([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:on([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new _t(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:on([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:on([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:on([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:on([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:on([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:on([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:on([Re.common,Re.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:on([Re.lights,Re.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};qn.physical={uniforms:on([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Xs={r:0,b:0,g:0},Gi=new ti,cS=new Ot;function uS(i,e,t,n,a,o){const c=new _t(0);let f=a===!0?0:1,p,h,_=null,g=0,m=null;function x(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const L=D.backgroundBlurriness>0;F=e.get(F,L)}return F}function b(D){let F=!1;const L=x(D);L===null?y(c,f):L&&L.isColor&&(y(L,1),F=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(D,F){const L=x(F);L&&(L.isCubeTexture||L.mapping===ia)?(h===void 0&&(h=new Bn(new ts(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:yr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Gi.copy(F.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cS.makeRotationFromEuler(Gi)),h.material.toneMapped=St.getTransfer(L.colorSpace)!==Ct,(_!==L||g!==L.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,_=L,g=L.version,m=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Bn(new ra(2,2),new ni({name:"BackgroundMaterial",uniforms:yr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=St.getTransfer(L.colorSpace)!==Ct,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||g!==L.version||m!==i.toneMapping)&&(p.material.needsUpdate=!0,_=L,g=L.version,m=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function y(D,F){D.getRGB(Xs,Ju(i)),t.buffers.color.setClear(Xs.r,Xs.g,Xs.b,F,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,F=1){c.set(D),f=F,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(c,f)},render:b,addToRenderList:P,dispose:S}}function fS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=m(null);let o=a,c=!1;function f(z,ne,te,Q,re){let Z=!1;const J=g(z,Q,te,ne);o!==J&&(o=J,h(o.object)),Z=x(z,Q,te,re),Z&&b(z,Q,te,re),re!==null&&e.update(re,i.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,L(z,ne,te,Q),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return i.createVertexArray()}function h(z){return i.bindVertexArray(z)}function _(z){return i.deleteVertexArray(z)}function g(z,ne,te,Q){const re=Q.wireframe===!0;let Z=n[ne.id];Z===void 0&&(Z={},n[ne.id]=Z);const J=z.isInstancedMesh===!0?z.id:0;let Se=Z[J];Se===void 0&&(Se={},Z[J]=Se);let pe=Se[te.id];pe===void 0&&(pe={},Se[te.id]=pe);let Ce=pe[re];return Ce===void 0&&(Ce=m(p()),pe[re]=Ce),Ce}function m(z){const ne=[],te=[],Q=[];for(let re=0;re<t;re++)ne[re]=0,te[re]=0,Q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:te,attributeDivisors:Q,object:z,attributes:{},index:null}}function x(z,ne,te,Q){const re=o.attributes,Z=ne.attributes;let J=0;const Se=te.getAttributes();for(const pe in Se)if(Se[pe].location>=0){const Ie=re[pe];let Ae=Z[pe];if(Ae===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(Ae=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(Ae=z.instanceColor)),Ie===void 0||Ie.attribute!==Ae||Ae&&Ie.data!==Ae.data)return!0;J++}return o.attributesNum!==J||o.index!==Q}function b(z,ne,te,Q){const re={},Z=ne.attributes;let J=0;const Se=te.getAttributes();for(const pe in Se)if(Se[pe].location>=0){let Ie=Z[pe];Ie===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(Ie=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(Ie=z.instanceColor));const Ae={};Ae.attribute=Ie,Ie&&Ie.data&&(Ae.data=Ie.data),re[pe]=Ae,J++}o.attributes=re,o.attributesNum=J,o.index=Q}function P(){const z=o.newAttributes;for(let ne=0,te=z.length;ne<te;ne++)z[ne]=0}function y(z){S(z,0)}function S(z,ne){const te=o.newAttributes,Q=o.enabledAttributes,re=o.attributeDivisors;te[z]=1,Q[z]===0&&(i.enableVertexAttribArray(z),Q[z]=1),re[z]!==ne&&(i.vertexAttribDivisor(z,ne),re[z]=ne)}function D(){const z=o.newAttributes,ne=o.enabledAttributes;for(let te=0,Q=ne.length;te<Q;te++)ne[te]!==z[te]&&(i.disableVertexAttribArray(te),ne[te]=0)}function F(z,ne,te,Q,re,Z,J){J===!0?i.vertexAttribIPointer(z,ne,te,re,Z):i.vertexAttribPointer(z,ne,te,Q,re,Z)}function L(z,ne,te,Q){P();const re=Q.attributes,Z=te.getAttributes(),J=ne.defaultAttributeValues;for(const Se in Z){const pe=Z[Se];if(pe.location>=0){let Ce=re[Se];if(Ce===void 0&&(Se==="instanceMatrix"&&z.instanceMatrix&&(Ce=z.instanceMatrix),Se==="instanceColor"&&z.instanceColor&&(Ce=z.instanceColor)),Ce!==void 0){const Ie=Ce.normalized,Ae=Ce.itemSize,We=e.get(Ce);if(We===void 0)continue;const Ke=We.buffer,Je=We.type,oe=We.bytesPerElement,ve=Je===i.INT||Je===i.UNSIGNED_INT||Ce.gpuType===ll;if(Ce.isInterleavedBufferAttribute){const ie=Ce.data,Ee=ie.stride,He=Ce.offset;if(ie.isInstancedInterleavedBuffer){for(let $e=0;$e<pe.locationSize;$e++)S(pe.location+$e,ie.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let $e=0;$e<pe.locationSize;$e++)y(pe.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let $e=0;$e<pe.locationSize;$e++)F(pe.location+$e,Ae/pe.locationSize,Je,Ie,Ee*oe,(He+Ae/pe.locationSize*$e)*oe,ve)}else{if(Ce.isInstancedBufferAttribute){for(let ie=0;ie<pe.locationSize;ie++)S(pe.location+ie,Ce.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ie=0;ie<pe.locationSize;ie++)y(pe.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let ie=0;ie<pe.locationSize;ie++)F(pe.location+ie,Ae/pe.locationSize,Je,Ie,Ae*oe,Ae/pe.locationSize*ie*oe,ve)}}else if(J!==void 0){const Ie=J[Se];if(Ie!==void 0)switch(Ie.length){case 2:i.vertexAttrib2fv(pe.location,Ie);break;case 3:i.vertexAttrib3fv(pe.location,Ie);break;case 4:i.vertexAttrib4fv(pe.location,Ie);break;default:i.vertexAttrib1fv(pe.location,Ie)}}}}D()}function O(){I();for(const z in n){const ne=n[z];for(const te in ne){const Q=ne[te];for(const re in Q){const Z=Q[re];for(const J in Z)_(Z[J].object),delete Z[J];delete Q[re]}}delete n[z]}}function C(z){if(n[z.id]===void 0)return;const ne=n[z.id];for(const te in ne){const Q=ne[te];for(const re in Q){const Z=Q[re];for(const J in Z)_(Z[J].object),delete Z[J];delete Q[re]}}delete n[z.id]}function W(z){for(const ne in n){const te=n[ne];for(const Q in te){const re=te[Q];if(re[z.id]===void 0)continue;const Z=re[z.id];for(const J in Z)_(Z[J].object),delete Z[J];delete re[z.id]}}}function A(z){for(const ne in n){const te=n[ne],Q=z.isInstancedMesh===!0?z.id:0,re=te[Q];if(re!==void 0){for(const Z in re){const J=re[Z];for(const Se in J)_(J[Se].object),delete J[Se];delete re[Z]}delete te[Q],Object.keys(te).length===0&&delete n[ne]}}}function I(){k(),c=!0,o!==a&&(o=a,h(o.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfObject:A,releaseStatesOfProgram:W,initAttributes:P,enableAttribute:y,disableUnusedAttributes:D}}function dS(i,e,t){let n;function a(h){n=h}function o(h,_){i.drawArrays(n,h,_),t.update(_,n,1)}function c(h,_,g){g!==0&&(i.drawArraysInstanced(n,h,_,g),t.update(_,n,g))}function f(h,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,_,0,g);let x=0;for(let b=0;b<g;b++)x+=_[b];t.update(x,n,1)}function p(h,_,g,m){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<h.length;b++)c(h[b],_[b],m[b]);else{x.multiDrawArraysInstancedWEBGL(n,h,0,_,0,m,0,g);let b=0;for(let P=0;P<g;P++)b+=_[P]*m[P];t.update(b,n,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function hS(i,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(W){return!(W!==Un&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(W){const A=W===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(W!==mn&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&W!==Yn&&!A)}function p(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const _=p(h);_!==h&&(et("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:b,maxTextureSize:P,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:L,maxSamples:O,samples:C}}function pS(i){const e=this;let t=null,n=0,a=!1,o=!1;const c=new Wi,f=new rt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const x=g.length!==0||m||n!==0||a;return a=m,n=g.length,x},this.beginShadows=function(){o=!0,_(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=_(g,m,0)},this.setState=function(g,m,x){const b=g.clippingPlanes,P=g.clipIntersection,y=g.clipShadows,S=i.get(g);if(!a||b===null||b.length===0||o&&!y)o?_(null):h();else{const D=o?0:n,F=D*4;let L=S.clippingState||null;p.value=L,L=_(b,m,F,x);for(let O=0;O!==F;++O)L[O]=t[O];S.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=D}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function _(g,m,x,b){const P=g!==null?g.length:0;let y=null;if(P!==0){if(y=p.value,b!==!0||y===null){const S=x+P*4,D=m.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<S)&&(y=new Float32Array(S));for(let F=0,L=x;F!==P;++F,L+=4)c.copy(g[F]).applyMatrix4(D,f),c.normal.toArray(y,L),y[L+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,y}}const Ai=4,qc=[.125,.215,.35,.446,.526,.582],$i=20,mS=256,Ur=new yl,Yc=new _t;let io=null,ro=0,so=0,ao=!1;const _S=new ee;class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,o={}){const{size:c=256,position:f=_S}=o;io=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,a,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(io,ro,so),this._renderer.xr.enabled=ao,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:hi,format:Un,colorSpace:Er,depthBuffer:!1},a=Zc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gS(o)),this._blurMaterial=xS(o,e,t),this._ggxMaterial=vS(o,e,t)}return a}_compileMaterial(e){const t=new Bn(new kn,e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,n,a,o){const p=new Mn(90,1,t,n),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,x=g.toneMapping;g.getClearColor(Yc),g.toneMapping=Jn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new ts,new vl({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,y=P.material;let S=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,S=!0):(y.color.copy(Yc),S=!0);for(let F=0;F<6;F++){const L=F%3;L===0?(p.up.set(0,h[F],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+_[F],o.y,o.z)):L===1?(p.up.set(0,0,h[F]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+_[F],o.z)):(p.up.set(0,h[F],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+_[F]));const O=this._cubeSize;pr(a,L*O,F>2?O:0,O,O),g.setRenderTarget(a),S&&g.render(P,p),g.render(e,p)}g.toneMapping=x,g.autoClear=m,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Yi||e.mapping===xr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const f=o.uniforms;f.envMap.value=e;const p=this._cubeSize;pr(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(c,Ur)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[n];f.material=c;const p=c.uniforms,h=n/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-_*_),m=0+h*1.25,x=g*m,{_lodMax:b}=this,P=this._sizeLods[n],y=3*P*(n>b-Ai?n-b+Ai:0),S=4*(this._cubeSize-P);p.envMap.value=e.texture,p.roughness.value=x,p.mipInt.value=b-t,pr(o,y,S,3*P,2*P),a.setRenderTarget(o),a.render(f,Ur),p.envMap.value=o.texture,p.roughness.value=0,p.mipInt.value=b-n,pr(e,y,S,3*P,2*P),a.setRenderTarget(e),a.render(f,Ur)}_blur(e,t,n,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,a,"latitudinal",o),this._halfBlur(c,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[a];g.material=h;const m=h.uniforms,x=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*$i-1),P=o/b,y=isFinite(o)?1+Math.floor(_*P):$i;y>$i&&et(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$i}`);const S=[];let D=0;for(let W=0;W<$i;++W){const A=W/P,I=Math.exp(-A*A/2);S.push(I),W===0?D+=I:W<y&&(D+=2*I)}for(let W=0;W<S.length;W++)S[W]=S[W]/D;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:F}=this;m.dTheta.value=b,m.mipInt.value=F-n;const L=this._sizeLods[a],O=3*L*(a>F-Ai?a-F+Ai:0),C=4*(this._cubeSize-L);pr(t,O,C,3*L,2*L),p.setRenderTarget(t),p.render(g,Ur)}}function gS(i){const e=[],t=[],n=[];let a=i;const o=i-Ai+1+qc.length;for(let c=0;c<o;c++){const f=Math.pow(2,a);e.push(f);let p=1/f;c>i-Ai?p=qc[c-i+Ai-1]:c===0&&(p=0),t.push(p);const h=1/(f-2),_=-h,g=1+h,m=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,b=6,P=3,y=2,S=1,D=new Float32Array(P*b*x),F=new Float32Array(y*b*x),L=new Float32Array(S*b*x);for(let C=0;C<x;C++){const W=C%3*2/3-1,A=C>2?0:-1,I=[W,A,0,W+2/3,A,0,W+2/3,A+1,0,W,A,0,W+2/3,A+1,0,W,A+1,0];D.set(I,P*b*C),F.set(m,y*b*C);const k=[C,C,C,C,C,C];L.set(k,S*b*C)}const O=new kn;O.setAttribute("position",new On(D,P)),O.setAttribute("uv",new On(F,y)),O.setAttribute("faceIndex",new On(L,S)),n.push(new Bn(O,null)),a>Ai&&a--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Zc(i,e,t){const n=new Qn(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function vS(i,e,t){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function xS(i,e,t){const n=new Float32Array($i),a=new ee(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Jc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Qc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class tf extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Ku(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new ts(5,5,5),o=new ni({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:fi});o.uniforms.tEquirect.value=t;const c=new Bn(a,o),f=t.minFilter;return t.minFilter===ji&&(t.minFilter=rn),new wv(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,a);e.setRenderTarget(o)}}function SS(i){let e=new WeakMap,t=new WeakMap,n=null;function a(m,x=!1){return m==null?null:x?c(m):o(m)}function o(m){if(m&&m.isTexture){const x=m.mapping;if(x===Ra||x===Ca)if(e.has(m)){const b=e.get(m).texture;return f(b,m.mapping)}else{const b=m.image;if(b&&b.height>0){const P=new tf(b.height);return P.fromEquirectangularTexture(i,m),e.set(m,P),m.addEventListener("dispose",h),f(P.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const x=m.mapping,b=x===Ra||x===Ca,P=x===Yi||x===xr;if(b||P){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return n===null&&(n=new Kc(i)),y=b?n.fromEquirectangular(m,y):n.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const D=m.image;return b&&D&&D.height>0||P&&D&&p(D)?(n===null&&(n=new Kc(i)),y=b?n.fromEquirectangular(m):n.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",_),y.texture):null}}}return m}function f(m,x){return x===Ra?m.mapping=Yi:x===Ca&&(m.mapping=xr),m}function p(m){let x=0;const b=6;for(let P=0;P<b;P++)m[P]!==void 0&&x++;return x===b}function h(m){const x=m.target;x.removeEventListener("dispose",h);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function _(m){const x=m.target;x.removeEventListener("dispose",_);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:g}}function ES(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&na("WebGLRenderer: "+n+" extension not supported."),a}}}function yS(i,e,t,n){const a={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const b in m.attributes)e.remove(m.attributes[b]);m.removeEventListener("dispose",c),delete a[m.id];const x=o.get(m);x&&(e.remove(x),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(g,m){return a[m.id]===!0||(m.addEventListener("dispose",c),a[m.id]=!0,t.memory.geometries++),m}function p(g){const m=g.attributes;for(const x in m)e.update(m[x],i.ARRAY_BUFFER)}function h(g){const m=[],x=g.index,b=g.attributes.position;let P=0;if(b===void 0)return;if(x!==null){const D=x.array;P=x.version;for(let F=0,L=D.length;F<L;F+=3){const O=D[F+0],C=D[F+1],W=D[F+2];m.push(O,C,C,W,W,O)}}else{const D=b.array;P=b.version;for(let F=0,L=D.length/3-1;F<L;F+=3){const O=F+0,C=F+1,W=F+2;m.push(O,C,C,W,W,O)}}const y=new(b.count>=65535?Yu:qu)(m,1);y.version=P;const S=o.get(g);S&&e.remove(S),o.set(g,y)}function _(g){const m=o.get(g);if(m){const x=g.index;x!==null&&m.version<x.version&&h(g)}else h(g);return o.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function MS(i,e,t){let n;function a(m){n=m}let o,c;function f(m){o=m.type,c=m.bytesPerElement}function p(m,x){i.drawElements(n,x,o,m*c),t.update(x,n,1)}function h(m,x,b){b!==0&&(i.drawElementsInstanced(n,x,o,m*c,b),t.update(x,n,b))}function _(m,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,o,m,0,b);let y=0;for(let S=0;S<b;S++)y+=x[S];t.update(y,n,1)}function g(m,x,b,P){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<m.length;S++)h(m[S]/c,x[S],P[S]);else{y.multiDrawElementsInstancedWEBGL(n,x,0,o,m,0,P,0,b);let S=0;for(let D=0;D<b;D++)S+=x[D]*P[D];t.update(S,n,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function bS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(o/3);break;case i.LINES:t.lines+=f*(o/2);break;case i.LINE_STRIP:t.lines+=f*(o-1);break;case i.LINE_LOOP:t.lines+=f*o;break;case i.POINTS:t.points+=f*o;break;default:yt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function TS(i,e,t){const n=new WeakMap,a=new kt;function o(c,f,p){const h=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let m=n.get(f);if(m===void 0||m.count!==g){let I=function(){W.dispose(),n.delete(f),f.removeEventListener("dispose",I)};m!==void 0&&m.texture.dispose();const x=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let F=0;x===!0&&(F=1),b===!0&&(F=2),P===!0&&(F=3);let L=f.attributes.position.count*F,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*O*4*g),W=new Xu(C,L,O,g);W.type=Yn,W.needsUpdate=!0;const A=F*4;for(let k=0;k<g;k++){const z=y[k],ne=S[k],te=D[k],Q=L*O*4*k;for(let re=0;re<z.count;re++){const Z=re*A;x===!0&&(a.fromBufferAttribute(z,re),C[Q+Z+0]=a.x,C[Q+Z+1]=a.y,C[Q+Z+2]=a.z,C[Q+Z+3]=0),b===!0&&(a.fromBufferAttribute(ne,re),C[Q+Z+4]=a.x,C[Q+Z+5]=a.y,C[Q+Z+6]=a.z,C[Q+Z+7]=0),P===!0&&(a.fromBufferAttribute(te,re),C[Q+Z+8]=a.x,C[Q+Z+9]=a.y,C[Q+Z+10]=a.z,C[Q+Z+11]=te.itemSize===4?a.w:1)}}m={count:g,texture:W,size:new bt(L,O)},n.set(f,m),f.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let x=0;for(let P=0;P<h.length;P++)x+=h[P];const b=f.morphTargetsRelative?1:1-x;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",h)}p.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function wS(i,e,t,n,a){let o=new WeakMap;function c(h){const _=a.render.frame,g=h.geometry,m=e.get(h,g);if(o.get(m)!==_&&(e.update(m),o.set(m,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),o.get(h)!==_&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,_))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==_&&(x.update(),o.set(x,_))}return m}function f(){o=new WeakMap}function p(h){const _=h.target;_.removeEventListener("dispose",p),n.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:c,dispose:f}}const AS={[Cu]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Du]:"CINEON_TONE_MAPPING",[ol]:"ACES_FILMIC_TONE_MAPPING",[Lu]:"AGX_TONE_MAPPING",[Iu]:"NEUTRAL_TONE_MAPPING",[Fu]:"CUSTOM_TONE_MAPPING"};function RS(i,e,t,n,a){const o=new Qn(e,t,{type:i,depthBuffer:n,stencilBuffer:a}),c=new Qn(e,t,{type:hi,depthBuffer:!1,stencilBuffer:!1}),f=new kn;f.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const p=new pv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Bn(f,p),_=new yl(-1,1,1,-1,0,1);let g=null,m=null,x=!1,b,P=null,y=[],S=!1;this.setSize=function(D,F){o.setSize(D,F),c.setSize(D,F);for(let L=0;L<y.length;L++){const O=y[L];O.setSize&&O.setSize(D,F)}},this.setEffects=function(D){y=D,S=y.length>0&&y[0].isRenderPass===!0;const F=o.width,L=o.height;for(let O=0;O<y.length;O++){const C=y[O];C.setSize&&C.setSize(F,L)}},this.begin=function(D,F){if(x||D.toneMapping===Jn&&y.length===0)return!1;if(P=F,F!==null){const L=F.width,O=F.height;(o.width!==L||o.height!==O)&&this.setSize(L,O)}return S===!1&&D.setRenderTarget(o),b=D.toneMapping,D.toneMapping=Jn,!0},this.hasRenderPass=function(){return S},this.end=function(D,F){D.toneMapping=b,x=!0;let L=o,O=c;for(let C=0;C<y.length;C++){const W=y[C];if(W.enabled!==!1&&(W.render(D,O,L,F),W.needsSwap!==!1)){const A=L;L=O,O=A}}if(g!==D.outputColorSpace||m!==D.toneMapping){g=D.outputColorSpace,m=D.toneMapping,p.defines={},St.getTransfer(g)===Ct&&(p.defines.SRGB_TRANSFER="");const C=AS[m];C&&(p.defines[C]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(P),D.render(h,_),P=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),c.dispose(),f.dispose(),p.dispose()}}const nf=new sn,il=new Yr(1,1),rf=new Xu,sf=new Wg,af=new Ku,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),ru=new Float32Array(4);function Tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let o=eu[a];if(o===void 0&&(o=new Float32Array(a),eu[a]=o),e!==0){n.toArray(o,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(o,f)}return o}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function aa(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function CS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function PS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function DS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function FS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function LS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,n))return;ru.set(n),i.uniformMatrix2fv(this.addr,!1,ru),qt(t,n)}}function IS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),qt(t,n)}}function US(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(jt(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),qt(t,n)}}function NS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function OS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function BS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function kS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function zS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function VS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function GS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function HS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function WS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(il.compareFunction=t.isReversedDepthBuffer()?ml:pl,o=il):o=nf,t.setTexture2D(e||o,a)}function XS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||sf,a)}function $S(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||af,a)}function jS(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||rf,a)}function qS(i){switch(i){case 5126:return CS;case 35664:return PS;case 35665:return DS;case 35666:return FS;case 35674:return LS;case 35675:return IS;case 35676:return US;case 5124:case 35670:return NS;case 35667:case 35671:return OS;case 35668:case 35672:return BS;case 35669:case 35673:return kS;case 5125:return zS;case 36294:return VS;case 36295:return GS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return $S;case 36289:case 36303:case 36311:case 36292:return jS}}function YS(i,e){i.uniform1fv(this.addr,e)}function KS(i,e){const t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function ZS(i,e){const t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function JS(i,e){const t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function QS(i,e){const t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eE(i,e){const t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tE(i,e){const t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nE(i,e){i.uniform1iv(this.addr,e)}function iE(i,e){i.uniform2iv(this.addr,e)}function rE(i,e){i.uniform3iv(this.addr,e)}function sE(i,e){i.uniform4iv(this.addr,e)}function aE(i,e){i.uniform1uiv(this.addr,e)}function oE(i,e){i.uniform2uiv(this.addr,e)}function lE(i,e){i.uniform3uiv(this.addr,e)}function cE(i,e){i.uniform4uiv(this.addr,e)}function uE(i,e,t){const n=this.cache,a=e.length,o=aa(t,a);jt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));let c;this.type===i.SAMPLER_2D_SHADOW?c=il:c=nf;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||c,o[f])}function fE(i,e,t){const n=this.cache,a=e.length,o=aa(t,a);jt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||sf,o[c])}function dE(i,e,t){const n=this.cache,a=e.length,o=aa(t,a);jt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||af,o[c])}function hE(i,e,t){const n=this.cache,a=e.length,o=aa(t,a);jt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||rf,o[c])}function pE(i){switch(i){case 5126:return YS;case 35664:return KS;case 35665:return ZS;case 35666:return JS;case 35674:return QS;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return aE;case 36294:return oE;case 36295:return lE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return hE}}class mE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qS(t.type)}}class _E{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pE(t.type)}}class gE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const f=a[o];f.setValue(e,t[f.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function su(i,e){i.seq.push(e),i.map[e.id]=e}function vE(i,e,t){const n=i.name,a=n.length;for(oo.lastIndex=0;;){const o=oo.exec(n),c=oo.lastIndex;let f=o[1];const p=o[2]==="]",h=o[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===a){su(t,h===void 0?new mE(f,i,e):new _E(f,i,e));break}else{let g=t.map[f];g===void 0&&(g=new gE(f),su(t,g)),t=g}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<n;++c){const f=e.getActiveUniform(t,c),p=e.getUniformLocation(t,f.name);vE(f,p,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,c=t.length;o!==c;++o){const f=t[o],p=n[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&n.push(c)}return n}}function au(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xE=37297;let SE=0;function EE(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const f=c+1;n.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return n.join(`
`)}const ou=new rt;function yE(i){St._getMatrix(ou,St.workingColorSpace,i);const e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+EE(i.getShaderSource(e),f)}else return o}function ME(i,e){const t=yE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const bE={[Cu]:"Linear",[Pu]:"Reinhard",[Du]:"Cineon",[ol]:"ACESFilmic",[Lu]:"AgX",[Iu]:"Neutral",[Fu]:"Custom"};function TE(i,e){const t=bE[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $s=new ee;function wE(){St.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),e=$s.y.toFixed(4),t=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function RE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(e,a),c=o.name;let f=1;o.type===i.FLOAT_MAT2&&(f=2),o.type===i.FLOAT_MAT3&&(f=3),o.type===i.FLOAT_MAT4&&(f=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function Br(i){return i!==""}function cu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PE=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(PE,FE)}const DE=new Map;function FE(i,e){let t=at[e];if(t===void 0){const n=DE.get(e);if(n!==void 0)t=at[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(LE,IE)}function IE(i,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function du(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const UE={[js]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function NE(i){return UE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OE={[Yi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE_UV"};function BE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":OE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const kE={[xr]:"ENVMAP_MODE_REFRACTION"};function zE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VE={[Ru]:"ENVMAP_BLENDING_MULTIPLY",[Mg]:"ENVMAP_BLENDING_MIX",[bg]:"ENVMAP_BLENDING_ADD"};function GE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":VE[i.combine]||"ENVMAP_BLENDING_NONE"}function HE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function WE(i,e,t,n){const a=i.getContext(),o=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=NE(t),h=BE(t),_=zE(t),g=GE(t),m=HE(t),x=AE(t),b=RE(o),P=a.createProgram();let y,S,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Br).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Br).join(`
`),S.length>0&&(S+=`
`)):(y=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),S=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?at.tonemapping_pars_fragment:"",t.toneMapping!==Jn?TE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,ME("linearToOutputTexel",t.outputColorSpace),wE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),c=rl(c),c=cu(c,t),c=uu(c,t),f=rl(f),f=cu(f,t),f=uu(f,t),c=fu(c),f=fu(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const F=D+y+c,L=D+S+f,O=au(a,a.VERTEX_SHADER,F),C=au(a,a.FRAGMENT_SHADER,L);a.attachShader(P,O),a.attachShader(P,C),t.index0AttributeName!==void 0?a.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(P,0,"position"),a.linkProgram(P);function W(z){if(i.debug.checkShaderErrors){const ne=a.getProgramInfoLog(P)||"",te=a.getShaderInfoLog(O)||"",Q=a.getShaderInfoLog(C)||"",re=ne.trim(),Z=te.trim(),J=Q.trim();let Se=!0,pe=!0;if(a.getProgramParameter(P,a.LINK_STATUS)===!1)if(Se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,P,O,C);else{const Ce=lu(a,O,"vertex"),Ie=lu(a,C,"fragment");yt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(P,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+re+`
`+Ce+`
`+Ie)}else re!==""?et("WebGLProgram: Program Info Log:",re):(Z===""||J==="")&&(pe=!1);pe&&(z.diagnostics={runnable:Se,programLog:re,vertexShader:{log:Z,prefix:y},fragmentShader:{log:J,prefix:S}})}a.deleteShader(O),a.deleteShader(C),A=new Js(a,P),I=CE(a,P)}let A;this.getUniforms=function(){return A===void 0&&W(this),A};let I;this.getAttributes=function(){return I===void 0&&W(this),I};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(P,xE)),k},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SE++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=O,this.fragmentShader=C,this}let XE=0;class $E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jE(e),t.set(e,n)),n}}class jE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function qE(i,e,t,n,a,o){const c=new $u,f=new $E,p=new Set,h=[],_=new Map,g=n.logarithmicDepthBuffer;let m=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return p.add(A),A===0?"uv":`uv${A}`}function P(A,I,k,z,ne){const te=z.fog,Q=ne.geometry,re=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Z=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,J=e.get(A.envMap||re,Z),Se=J&&J.mapping===ia?J.image.height:null,pe=x[A.type];A.precision!==null&&(m=n.getMaxPrecision(A.precision),m!==A.precision&&et("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const Ce=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ie=Ce!==void 0?Ce.length:0;let Ae=0;Q.morphAttributes.position!==void 0&&(Ae=1),Q.morphAttributes.normal!==void 0&&(Ae=2),Q.morphAttributes.color!==void 0&&(Ae=3);let We,Ke,Je,oe;if(pe){const lt=qn[pe];We=lt.vertexShader,Ke=lt.fragmentShader}else We=A.vertexShader,Ke=A.fragmentShader,f.update(A),Je=f.getVertexShaderID(A),oe=f.getFragmentShaderID(A);const ve=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),Ee=ne.isInstancedMesh===!0,He=ne.isBatchedMesh===!0,$e=!!A.map,Et=!!A.matcap,ot=!!J,dt=!!A.aoMap,Tt=!!A.lightMap,nt=!!A.bumpMap,Ut=!!A.normalMap,V=!!A.displacementMap,Pt=!!A.emissiveMap,ut=!!A.metalnessMap,gt=!!A.roughnessMap,Ue=A.anisotropy>0,U=A.clearcoat>0,M=A.dispersion>0,G=A.iridescence>0,ae=A.sheen>0,he=A.transmission>0,le=Ue&&!!A.anisotropyMap,Ne=U&&!!A.clearcoatMap,be=U&&!!A.clearcoatNormalMap,Ge=U&&!!A.clearcoatRoughnessMap,qe=G&&!!A.iridescenceMap,xe=G&&!!A.iridescenceThicknessMap,Me=ae&&!!A.sheenColorMap,Oe=ae&&!!A.sheenRoughnessMap,Be=!!A.specularMap,De=!!A.specularColorMap,it=!!A.specularIntensityMap,H=he&&!!A.transmissionMap,Te=he&&!!A.thicknessMap,ye=!!A.gradientMap,Pe=!!A.alphaMap,X=A.alphaTest>0,B=!!A.alphaHash,Fe=!!A.extensions;let Ye=Jn;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const vt={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:We,fragmentShader:Ke,defines:A.defines,customVertexShaderID:Je,customFragmentShaderID:oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:He,batchingColor:He&&ne._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&ne.instanceColor!==null,instancingMorph:Ee&&ne.morphTexture!==null,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Er,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:Et,envMap:ot,envMapMode:ot&&J.mapping,envMapCubeUVHeight:Se,aoMap:dt,lightMap:Tt,bumpMap:nt,normalMap:Ut,displacementMap:V,emissiveMap:Pt,normalMapObjectSpace:Ut&&A.normalMapType===Ag,normalMapTangentSpace:Ut&&A.normalMapType===Hu,metalnessMap:ut,roughnessMap:gt,anisotropy:Ue,anisotropyMap:le,clearcoat:U,clearcoatMap:Ne,clearcoatNormalMap:be,clearcoatRoughnessMap:Ge,dispersion:M,iridescence:G,iridescenceMap:qe,iridescenceThicknessMap:xe,sheen:ae,sheenColorMap:Me,sheenRoughnessMap:Oe,specularMap:Be,specularColorMap:De,specularIntensityMap:it,transmission:he,transmissionMap:H,thicknessMap:Te,gradientMap:ye,opaque:A.transparent===!1&&A.blending===_r&&A.alphaToCoverage===!1,alphaMap:Pe,alphaTest:X,alphaHash:B,combine:A.combine,mapUv:$e&&b(A.map.channel),aoMapUv:dt&&b(A.aoMap.channel),lightMapUv:Tt&&b(A.lightMap.channel),bumpMapUv:nt&&b(A.bumpMap.channel),normalMapUv:Ut&&b(A.normalMap.channel),displacementMapUv:V&&b(A.displacementMap.channel),emissiveMapUv:Pt&&b(A.emissiveMap.channel),metalnessMapUv:ut&&b(A.metalnessMap.channel),roughnessMapUv:gt&&b(A.roughnessMap.channel),anisotropyMapUv:le&&b(A.anisotropyMap.channel),clearcoatMapUv:Ne&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&b(A.sheenRoughnessMap.channel),specularMapUv:Be&&b(A.specularMap.channel),specularColorMapUv:De&&b(A.specularColorMap.channel),specularIntensityMapUv:it&&b(A.specularIntensityMap.channel),transmissionMapUv:H&&b(A.transmissionMap.channel),thicknessMapUv:Te&&b(A.thicknessMap.channel),alphaMapUv:Pe&&b(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ut||Ue),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!Q.attributes.uv&&($e||Pe),fog:!!te,useFog:A.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Q.attributes.normal===void 0&&Ut===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ie,skinning:ne.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ae,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&St.getTransfer(A.map.colorSpace)===Ct,decodeVideoTextureEmissive:Pt&&A.emissiveMap.isVideoTexture===!0&&St.getTransfer(A.emissiveMap.colorSpace)===Ct,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ln,flipSided:A.side===fn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Fe&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&A.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return vt.vertexUv1s=p.has(1),vt.vertexUv2s=p.has(2),vt.vertexUv3s=p.has(3),p.clear(),vt}function y(A){const I=[];if(A.shaderID?I.push(A.shaderID):(I.push(A.customVertexShaderID),I.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)I.push(k),I.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(S(I,A),D(I,A),I.push(i.outputColorSpace)),I.push(A.customProgramCacheKey),I.join()}function S(A,I){A.push(I.precision),A.push(I.outputColorSpace),A.push(I.envMapMode),A.push(I.envMapCubeUVHeight),A.push(I.mapUv),A.push(I.alphaMapUv),A.push(I.lightMapUv),A.push(I.aoMapUv),A.push(I.bumpMapUv),A.push(I.normalMapUv),A.push(I.displacementMapUv),A.push(I.emissiveMapUv),A.push(I.metalnessMapUv),A.push(I.roughnessMapUv),A.push(I.anisotropyMapUv),A.push(I.clearcoatMapUv),A.push(I.clearcoatNormalMapUv),A.push(I.clearcoatRoughnessMapUv),A.push(I.iridescenceMapUv),A.push(I.iridescenceThicknessMapUv),A.push(I.sheenColorMapUv),A.push(I.sheenRoughnessMapUv),A.push(I.specularMapUv),A.push(I.specularColorMapUv),A.push(I.specularIntensityMapUv),A.push(I.transmissionMapUv),A.push(I.thicknessMapUv),A.push(I.combine),A.push(I.fogExp2),A.push(I.sizeAttenuation),A.push(I.morphTargetsCount),A.push(I.morphAttributeCount),A.push(I.numDirLights),A.push(I.numPointLights),A.push(I.numSpotLights),A.push(I.numSpotLightMaps),A.push(I.numHemiLights),A.push(I.numRectAreaLights),A.push(I.numDirLightShadows),A.push(I.numPointLightShadows),A.push(I.numSpotLightShadows),A.push(I.numSpotLightShadowsWithMaps),A.push(I.numLightProbes),A.push(I.shadowMapType),A.push(I.toneMapping),A.push(I.numClippingPlanes),A.push(I.numClipIntersection),A.push(I.depthPacking)}function D(A,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),A.push(c.mask)}function F(A){const I=x[A.type];let k;if(I){const z=qn[I];k=fv.clone(z.uniforms)}else k=A.uniforms;return k}function L(A,I){let k=_.get(I);return k!==void 0?++k.usedTimes:(k=new WE(i,I,A,a),h.push(k),_.set(I,k)),k}function O(A){if(--A.usedTimes===0){const I=h.indexOf(A);h[I]=h[h.length-1],h.pop(),_.delete(A.cacheKey),A.destroy()}}function C(A){f.remove(A)}function W(){f.dispose()}return{getParameters:P,getProgramCacheKey:y,getUniforms:F,acquireProgram:L,releaseProgram:O,releaseShaderCache:C,programs:h,dispose:W}}function YE(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function n(c){i.delete(c)}function a(c,f,p){i.get(c)[f]=p}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function KE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){const i=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function f(m,x,b,P,y,S){let D=i[e];return D===void 0?(D={id:m.id,object:m,geometry:x,material:b,materialVariant:c(m),groupOrder:P,renderOrder:m.renderOrder,z:y,group:S},i[e]=D):(D.id=m.id,D.object=m,D.geometry=x,D.material=b,D.materialVariant=c(m),D.groupOrder=P,D.renderOrder=m.renderOrder,D.z=y,D.group=S),e++,D}function p(m,x,b,P,y,S){const D=f(m,x,b,P,y,S);b.transmission>0?n.push(D):b.transparent===!0?a.push(D):t.push(D)}function h(m,x,b,P,y,S){const D=f(m,x,b,P,y,S);b.transmission>0?n.unshift(D):b.transparent===!0?a.unshift(D):t.unshift(D)}function _(m,x){t.length>1&&t.sort(m||KE),n.length>1&&n.sort(x||hu),a.length>1&&a.sort(x||hu)}function g(){for(let m=e,x=i.length;m<x;m++){const b=i[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:p,unshift:h,finish:g,sort:_}}function ZE(){let i=new WeakMap;function e(n,a){const o=i.get(n);let c;return o===void 0?(c=new pu,i.set(n,[c])):a>=o.length?(c=new pu,o.push(c)):c=o[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function JE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new _t};break;case"SpotLight":t={position:new ee,direction:new ee,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function QE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ey=0;function ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ny(i){const e=new JE,t=QE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ee);const a=new ee,o=new Ot,c=new Ot;function f(h){let _=0,g=0,m=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let x=0,b=0,P=0,y=0,S=0,D=0,F=0,L=0,O=0,C=0,W=0;h.sort(ty);for(let I=0,k=h.length;I<k;I++){const z=h[I],ne=z.color,te=z.intensity,Q=z.distance;let re=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Sr?re=z.shadow.map.texture:re=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=ne.r*te,g+=ne.g*te,m+=ne.b*te;else if(z.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(z.sh.coefficients[Z],te);W++}else if(z.isDirectionalLight){const Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const J=z.shadow,Se=t.get(z);Se.shadowIntensity=J.intensity,Se.shadowBias=J.bias,Se.shadowNormalBias=J.normalBias,Se.shadowRadius=J.radius,Se.shadowMapSize=J.mapSize,n.directionalShadow[x]=Se,n.directionalShadowMap[x]=re,n.directionalShadowMatrix[x]=z.shadow.matrix,D++}n.directional[x]=Z,x++}else if(z.isSpotLight){const Z=e.get(z);Z.position.setFromMatrixPosition(z.matrixWorld),Z.color.copy(ne).multiplyScalar(te),Z.distance=Q,Z.coneCos=Math.cos(z.angle),Z.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Z.decay=z.decay,n.spot[P]=Z;const J=z.shadow;if(z.map&&(n.spotLightMap[O]=z.map,O++,J.updateMatrices(z),z.castShadow&&C++),n.spotLightMatrix[P]=J.matrix,z.castShadow){const Se=t.get(z);Se.shadowIntensity=J.intensity,Se.shadowBias=J.bias,Se.shadowNormalBias=J.normalBias,Se.shadowRadius=J.radius,Se.shadowMapSize=J.mapSize,n.spotShadow[P]=Se,n.spotShadowMap[P]=re,L++}P++}else if(z.isRectAreaLight){const Z=e.get(z);Z.color.copy(ne).multiplyScalar(te),Z.halfWidth.set(z.width*.5,0,0),Z.halfHeight.set(0,z.height*.5,0),n.rectArea[y]=Z,y++}else if(z.isPointLight){const Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),Z.distance=z.distance,Z.decay=z.decay,z.castShadow){const J=z.shadow,Se=t.get(z);Se.shadowIntensity=J.intensity,Se.shadowBias=J.bias,Se.shadowNormalBias=J.normalBias,Se.shadowRadius=J.radius,Se.shadowMapSize=J.mapSize,Se.shadowCameraNear=J.camera.near,Se.shadowCameraFar=J.camera.far,n.pointShadow[b]=Se,n.pointShadowMap[b]=re,n.pointShadowMatrix[b]=z.shadow.matrix,F++}n.point[b]=Z,b++}else if(z.isHemisphereLight){const Z=e.get(z);Z.skyColor.copy(z.color).multiplyScalar(te),Z.groundColor.copy(z.groundColor).multiplyScalar(te),n.hemi[S]=Z,S++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=_,n.ambient[1]=g,n.ambient[2]=m;const A=n.hash;(A.directionalLength!==x||A.pointLength!==b||A.spotLength!==P||A.rectAreaLength!==y||A.hemiLength!==S||A.numDirectionalShadows!==D||A.numPointShadows!==F||A.numSpotShadows!==L||A.numSpotMaps!==O||A.numLightProbes!==W)&&(n.directional.length=x,n.spot.length=P,n.rectArea.length=y,n.point.length=b,n.hemi.length=S,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=F,n.pointShadowMap.length=F,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=F,n.spotLightMatrix.length=L+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=W,A.directionalLength=x,A.pointLength=b,A.spotLength=P,A.rectAreaLength=y,A.hemiLength=S,A.numDirectionalShadows=D,A.numPointShadows=F,A.numSpotShadows=L,A.numSpotMaps=O,A.numLightProbes=W,n.version=ey++)}function p(h,_){let g=0,m=0,x=0,b=0,P=0;const y=_.matrixWorldInverse;for(let S=0,D=h.length;S<D;S++){const F=h[S];if(F.isDirectionalLight){const L=n.directional[g];L.direction.setFromMatrixPosition(F.matrixWorld),a.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),g++}else if(F.isSpotLight){const L=n.spot[x];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(F.matrixWorld),a.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),x++}else if(F.isRectAreaLight){const L=n.rectArea[b];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(y),c.identity(),o.copy(F.matrixWorld),o.premultiply(y),c.extractRotation(o),L.halfWidth.set(F.width*.5,0,0),L.halfHeight.set(0,F.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),b++}else if(F.isPointLight){const L=n.point[m];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(y),m++}else if(F.isHemisphereLight){const L=n.hemi[P];L.direction.setFromMatrixPosition(F.matrixWorld),L.direction.transformDirection(y),P++}}}return{setup:f,setupView:p,state:n}}function mu(i){const e=new ny(i),t=[],n=[];function a(_){h.camera=_,t.length=0,n.length=0}function o(_){t.push(_)}function c(_){n.push(_)}function f(){e.setup(t)}function p(_){e.setupView(t,_)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:p,pushLight:o,pushShadow:c}}function iy(i){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let f;return c===void 0?(f=new mu(i),e.set(a,[f])):o>=c.length?(f=new mu(i),c.push(f)):f=c[o],f}function n(){e=new WeakMap}return{get:t,dispose:n}}const ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ay=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],oy=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],_u=new Ot,Nr=new ee,lo=new ee;function ly(i,e,t){let n=new xl;const a=new bt,o=new bt,c=new kt,f=new _v,p=new gv,h={},_=t.maxTextureSize,g={[Ri]:fn,[fn]:Ri,[Ln]:Ln},m=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:ry,fragmentShader:sy}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const b=new kn;b.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new Bn(b,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let S=this.type;this.render=function(C,W,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===rg&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js);const I=i.getRenderTarget(),k=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(fi),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const te=S!==this.type;te&&W.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(re=>re.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,re=C.length;Q<re;Q++){const Z=C[Q],J=Z.shadow;if(J===void 0){et("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const Se=J.getFrameExtents();a.multiply(Se),o.copy(J.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(o.x=Math.floor(_/Se.x),a.x=o.x*Se.x,J.mapSize.x=o.x),a.y>_&&(o.y=Math.floor(_/Se.y),a.y=o.y*Se.y,J.mapSize.y=o.y));const pe=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=pe,J.map===null||te===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Or){if(Z.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Qn(a.x,a.y,{format:Sr,type:hi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Yr(a.x,a.y,Yn),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=pi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Zt,J.map.depthTexture.magFilter=Zt}else Z.isPointLight?(J.map=new tf(a.x),J.map.depthTexture=new cv(a.x,ei)):(J.map=new Qn(a.x,a.y),J.map.depthTexture=new Yr(a.x,a.y,ei)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=pi,this.type===js?(J.map.depthTexture.compareFunction=pe?ml:pl,J.map.depthTexture.minFilter=rn,J.map.depthTexture.magFilter=rn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Zt,J.map.depthTexture.magFilter=Zt);J.camera.updateProjectionMatrix()}const Ce=J.map.isWebGLCubeRenderTarget?6:1;for(let Ie=0;Ie<Ce;Ie++){if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(J.map),i.clear());const Ae=J.getViewport(Ie);c.set(o.x*Ae.x,o.y*Ae.y,o.x*Ae.z,o.y*Ae.w),ne.viewport(c)}if(Z.isPointLight){const Ae=J.camera,We=J.matrix,Ke=Z.distance||Ae.far;Ke!==Ae.far&&(Ae.far=Ke,Ae.updateProjectionMatrix()),Nr.setFromMatrixPosition(Z.matrixWorld),Ae.position.copy(Nr),lo.copy(Ae.position),lo.add(ay[Ie]),Ae.up.copy(oy[Ie]),Ae.lookAt(lo),Ae.updateMatrixWorld(),We.makeTranslation(-Nr.x,-Nr.y,-Nr.z),_u.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),J._frustum.setFromProjectionMatrix(_u,Ae.coordinateSystem,Ae.reversedDepth)}else J.updateMatrices(Z);n=J.getFrustum(),L(W,A,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Or&&D(J,A),J.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(I,k,z)};function D(C,W){const A=e.update(P);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,x.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qn(a.x,a.y,{format:Sr,type:hi})),m.uniforms.shadow_pass.value=C.map.depthTexture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(W,null,A,m,P,null),x.uniforms.shadow_pass.value=C.mapPass.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(W,null,A,x,P,null)}function F(C,W,A,I){let k=null;const z=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)k=z;else if(k=A.isPointLight===!0?p:f,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){const ne=k.uuid,te=W.uuid;let Q=h[ne];Q===void 0&&(Q={},h[ne]=Q);let re=Q[te];re===void 0&&(re=k.clone(),Q[te]=re,W.addEventListener("dispose",O)),k=re}if(k.visible=W.visible,k.wireframe=W.wireframe,I===Or?k.side=W.shadowSide!==null?W.shadowSide:W.side:k.side=W.shadowSide!==null?W.shadowSide:g[W.side],k.alphaMap=W.alphaMap,k.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,k.map=W.map,k.clipShadows=W.clipShadows,k.clippingPlanes=W.clippingPlanes,k.clipIntersection=W.clipIntersection,k.displacementMap=W.displacementMap,k.displacementScale=W.displacementScale,k.displacementBias=W.displacementBias,k.wireframeLinewidth=W.wireframeLinewidth,k.linewidth=W.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const ne=i.properties.get(k);ne.light=A}return k}function L(C,W,A,I,k){if(C.visible===!1)return;if(C.layers.test(W.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&k===Or)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const te=e.update(C),Q=C.material;if(Array.isArray(Q)){const re=te.groups;for(let Z=0,J=re.length;Z<J;Z++){const Se=re[Z],pe=Q[Se.materialIndex];if(pe&&pe.visible){const Ce=F(C,pe,I,k);C.onBeforeShadow(i,C,W,A,te,Ce,Se),i.renderBufferDirect(A,null,te,Ce,C,Se),C.onAfterShadow(i,C,W,A,te,Ce,Se)}}}else if(Q.visible){const re=F(C,Q,I,k);C.onBeforeShadow(i,C,W,A,te,re,null),i.renderBufferDirect(A,null,te,re,C,null),C.onAfterShadow(i,C,W,A,te,re,null)}}const ne=C.children;for(let te=0,Q=ne.length;te<Q;te++)L(ne[te],W,A,I,k)}function O(C){C.target.removeEventListener("dispose",O);for(const A in h){const I=h[A],k=C.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function cy(i,e){function t(){let H=!1;const Te=new kt;let ye=null;const Pe=new kt(0,0,0,0);return{setMask:function(X){ye!==X&&!H&&(i.colorMask(X,X,X,X),ye=X)},setLocked:function(X){H=X},setClear:function(X,B,Fe,Ye,vt){vt===!0&&(X*=Ye,B*=Ye,Fe*=Ye),Te.set(X,B,Fe,Ye),Pe.equals(Te)===!1&&(i.clearColor(X,B,Fe,Ye),Pe.copy(Te))},reset:function(){H=!1,ye=null,Pe.set(-1,0,0,0)}}}function n(){let H=!1,Te=!1,ye=null,Pe=null,X=null;return{setReversed:function(B){if(Te!==B){const Fe=e.get("EXT_clip_control");B?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Te=B;const Ye=X;X=null,this.setClear(Ye)}},getReversed:function(){return Te},setTest:function(B){B?ve(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(B){ye!==B&&!H&&(i.depthMask(B),ye=B)},setFunc:function(B){if(Te&&(B=Og[B]),Pe!==B){switch(B){case _o:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case So:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=B}},setLocked:function(B){H=B},setClear:function(B){X!==B&&(X=B,Te&&(B=1-B),i.clearDepth(B))},reset:function(){H=!1,ye=null,Pe=null,X=null,Te=!1}}}function a(){let H=!1,Te=null,ye=null,Pe=null,X=null,B=null,Fe=null,Ye=null,vt=null;return{setTest:function(lt){H||(lt?ve(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(lt){Te!==lt&&!H&&(i.stencilMask(lt),Te=lt)},setFunc:function(lt,wn,Gt){(ye!==lt||Pe!==wn||X!==Gt)&&(i.stencilFunc(lt,wn,Gt),ye=lt,Pe=wn,X=Gt)},setOp:function(lt,wn,Gt){(B!==lt||Fe!==wn||Ye!==Gt)&&(i.stencilOp(lt,wn,Gt),B=lt,Fe=wn,Ye=Gt)},setLocked:function(lt){H=lt},setClear:function(lt){vt!==lt&&(i.clearStencil(lt),vt=lt)},reset:function(){H=!1,Te=null,ye=null,Pe=null,X=null,B=null,Fe=null,Ye=null,vt=null}}}const o=new t,c=new n,f=new a,p=new WeakMap,h=new WeakMap;let _={},g={},m=new WeakMap,x=[],b=null,P=!1,y=null,S=null,D=null,F=null,L=null,O=null,C=null,W=new _t(0,0,0),A=0,I=!1,k=null,z=null,ne=null,te=null,Q=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const Se=i.getParameter(i.VERSION);Se.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Se)[1]),Z=J>=1):Se.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),Z=J>=2);let pe=null,Ce={};const Ie=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),We=new kt().fromArray(Ie),Ke=new kt().fromArray(Ae);function Je(H,Te,ye,Pe){const X=new Uint8Array(4),B=i.createTexture();i.bindTexture(H,B),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<ye;Fe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(Te+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return B}const oe={};oe[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ve(i.DEPTH_TEST),c.setFunc(vr),nt(!1),Ut(vc),ve(i.CULL_FACE),dt(fi);function ve(H){_[H]!==!0&&(i.enable(H),_[H]=!0)}function ie(H){_[H]!==!1&&(i.disable(H),_[H]=!1)}function Ee(H,Te){return g[H]!==Te?(i.bindFramebuffer(H,Te),g[H]=Te,H===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Te),H===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function He(H,Te){let ye=x,Pe=!1;if(H){ye=m.get(Te),ye===void 0&&(ye=[],m.set(Te,ye));const X=H.textures;if(ye.length!==X.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let B=0,Fe=X.length;B<Fe;B++)ye[B]=i.COLOR_ATTACHMENT0+B;ye.length=X.length,Pe=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(ye)}function $e(H){return b!==H?(i.useProgram(H),b=H,!0):!1}const Et={[Xi]:i.FUNC_ADD,[ag]:i.FUNC_SUBTRACT,[og]:i.FUNC_REVERSE_SUBTRACT};Et[lg]=i.MIN,Et[cg]=i.MAX;const ot={[ug]:i.ZERO,[fg]:i.ONE,[dg]:i.SRC_COLOR,[po]:i.SRC_ALPHA,[vg]:i.SRC_ALPHA_SATURATE,[_g]:i.DST_COLOR,[pg]:i.DST_ALPHA,[hg]:i.ONE_MINUS_SRC_COLOR,[mo]:i.ONE_MINUS_SRC_ALPHA,[gg]:i.ONE_MINUS_DST_COLOR,[mg]:i.ONE_MINUS_DST_ALPHA,[xg]:i.CONSTANT_COLOR,[Sg]:i.ONE_MINUS_CONSTANT_COLOR,[Eg]:i.CONSTANT_ALPHA,[yg]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(H,Te,ye,Pe,X,B,Fe,Ye,vt,lt){if(H===fi){P===!0&&(ie(i.BLEND),P=!1);return}if(P===!1&&(ve(i.BLEND),P=!0),H!==sg){if(H!==y||lt!==I){if((S!==Xi||L!==Xi)&&(i.blendEquation(i.FUNC_ADD),S=Xi,L=Xi),lt)switch(H){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:yt("WebGLState: Invalid blending: ",H);break}else switch(H){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sc:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",H);break}D=null,F=null,O=null,C=null,W.set(0,0,0),A=0,y=H,I=lt}return}X=X||Te,B=B||ye,Fe=Fe||Pe,(Te!==S||X!==L)&&(i.blendEquationSeparate(Et[Te],Et[X]),S=Te,L=X),(ye!==D||Pe!==F||B!==O||Fe!==C)&&(i.blendFuncSeparate(ot[ye],ot[Pe],ot[B],ot[Fe]),D=ye,F=Pe,O=B,C=Fe),(Ye.equals(W)===!1||vt!==A)&&(i.blendColor(Ye.r,Ye.g,Ye.b,vt),W.copy(Ye),A=vt),y=H,I=!1}function Tt(H,Te){H.side===Ln?ie(i.CULL_FACE):ve(i.CULL_FACE);let ye=H.side===fn;Te&&(ye=!ye),nt(ye),H.blending===_r&&H.transparent===!1?dt(fi):dt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);const Pe=H.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Pt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(H){k!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),k=H)}function Ut(H){H!==ng?(ve(i.CULL_FACE),H!==z&&(H===vc?i.cullFace(i.BACK):H===ig?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),z=H}function V(H){H!==ne&&(Z&&i.lineWidth(H),ne=H)}function Pt(H,Te,ye){H?(ve(i.POLYGON_OFFSET_FILL),(te!==Te||Q!==ye)&&(te=Te,Q=ye,c.getReversed()&&(Te=-Te),i.polygonOffset(Te,ye))):ie(i.POLYGON_OFFSET_FILL)}function ut(H){H?ve(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function gt(H){H===void 0&&(H=i.TEXTURE0+re-1),pe!==H&&(i.activeTexture(H),pe=H)}function Ue(H,Te,ye){ye===void 0&&(pe===null?ye=i.TEXTURE0+re-1:ye=pe);let Pe=Ce[ye];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ce[ye]=Pe),(Pe.type!==H||Pe.texture!==Te)&&(pe!==ye&&(i.activeTexture(ye),pe=ye),i.bindTexture(H,Te||oe[H]),Pe.type=H,Pe.texture=Te)}function U(){const H=Ce[pe];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function ae(){try{i.texSubImage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function he(){try{i.texSubImage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function be(){try{i.texStorage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function Ge(){try{i.texStorage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function qe(){try{i.texImage2D(...arguments)}catch(H){yt("WebGLState:",H)}}function xe(){try{i.texImage3D(...arguments)}catch(H){yt("WebGLState:",H)}}function Me(H){We.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),We.copy(H))}function Oe(H){Ke.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ke.copy(H))}function Be(H,Te){let ye=h.get(Te);ye===void 0&&(ye=new WeakMap,h.set(Te,ye));let Pe=ye.get(H);Pe===void 0&&(Pe=i.getUniformBlockIndex(Te,H.name),ye.set(H,Pe))}function De(H,Te){const Pe=h.get(Te).get(H);p.get(Te)!==Pe&&(i.uniformBlockBinding(Te,Pe,H.__bindingPointIndex),p.set(Te,Pe))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},pe=null,Ce={},g={},m=new WeakMap,x=[],b=null,P=!1,y=null,S=null,D=null,F=null,L=null,O=null,C=null,W=new _t(0,0,0),A=0,I=!1,k=null,z=null,ne=null,te=null,Q=null,We.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),f.reset()}return{buffers:{color:o,depth:c,stencil:f},enable:ve,disable:ie,bindFramebuffer:Ee,drawBuffers:He,useProgram:$e,setBlending:dt,setMaterial:Tt,setFlipSided:nt,setCullFace:Ut,setLineWidth:V,setPolygonOffset:Pt,setScissorTest:ut,activeTexture:gt,bindTexture:Ue,unbindTexture:U,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:qe,texImage3D:xe,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:be,texStorage3D:Ge,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:Ne,scissor:Me,viewport:Oe,reset:it}}function uy(i,e,t,n,a,o,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,_=new WeakMap;let g;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,M){return x?new OffscreenCanvas(U,M):qr("canvas")}function P(U,M,G){let ae=1;const he=Ue(U);if((he.width>G||he.height>G)&&(ae=G/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const le=Math.floor(ae*he.width),Ne=Math.floor(ae*he.height);g===void 0&&(g=b(le,Ne));const be=M?b(le,Ne):g;return be.width=le,be.height=Ne,be.getContext("2d").drawImage(U,0,0,le,Ne),et("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+le+"x"+Ne+")."),be}else return"data"in U&&et("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function y(U){return U.generateMipmaps}function S(U){i.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function F(U,M,G,ae,he=!1){if(U!==null){if(i[U]!==void 0)return i[U];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let le=M;if(M===i.RED&&(G===i.FLOAT&&(le=i.R32F),G===i.HALF_FLOAT&&(le=i.R16F),G===i.UNSIGNED_BYTE&&(le=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.R8UI),G===i.UNSIGNED_SHORT&&(le=i.R16UI),G===i.UNSIGNED_INT&&(le=i.R32UI),G===i.BYTE&&(le=i.R8I),G===i.SHORT&&(le=i.R16I),G===i.INT&&(le=i.R32I)),M===i.RG&&(G===i.FLOAT&&(le=i.RG32F),G===i.HALF_FLOAT&&(le=i.RG16F),G===i.UNSIGNED_BYTE&&(le=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RG8UI),G===i.UNSIGNED_SHORT&&(le=i.RG16UI),G===i.UNSIGNED_INT&&(le=i.RG32UI),G===i.BYTE&&(le=i.RG8I),G===i.SHORT&&(le=i.RG16I),G===i.INT&&(le=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RGB8UI),G===i.UNSIGNED_SHORT&&(le=i.RGB16UI),G===i.UNSIGNED_INT&&(le=i.RGB32UI),G===i.BYTE&&(le=i.RGB8I),G===i.SHORT&&(le=i.RGB16I),G===i.INT&&(le=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),G===i.UNSIGNED_INT&&(le=i.RGBA32UI),G===i.BYTE&&(le=i.RGBA8I),G===i.SHORT&&(le=i.RGBA16I),G===i.INT&&(le=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),M===i.RGBA){const Ne=he?ta:St.getTransfer(ae);G===i.FLOAT&&(le=i.RGBA32F),G===i.HALF_FLOAT&&(le=i.RGBA16F),G===i.UNSIGNED_BYTE&&(le=Ne===Ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function L(U,M){let G;return U?M===null||M===ei||M===$r?G=i.DEPTH24_STENCIL8:M===Yn?G=i.DEPTH32F_STENCIL8:M===Xr&&(G=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ei||M===$r?G=i.DEPTH_COMPONENT24:M===Yn?G=i.DEPTH_COMPONENT32F:M===Xr&&(G=i.DEPTH_COMPONENT16),G}function O(U,M){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Zt&&U.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function C(U){const M=U.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&_.delete(M)}function W(U){const M=U.target;M.removeEventListener("dispose",W),k(M)}function A(U){const M=n.get(U);if(M.__webglInit===void 0)return;const G=U.source,ae=m.get(G);if(ae){const he=ae[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&I(U),Object.keys(ae).length===0&&m.delete(G)}n.remove(U)}function I(U){const M=n.get(U);i.deleteTexture(M.__webglTexture);const G=U.source,ae=m.get(G);delete ae[M.__cacheKey],c.memory.textures--}function k(U){const M=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(M.__webglFramebuffer[ae]))for(let he=0;he<M.__webglFramebuffer[ae].length;he++)i.deleteFramebuffer(M.__webglFramebuffer[ae][he]);else i.deleteFramebuffer(M.__webglFramebuffer[ae]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ae])}else{if(Array.isArray(M.__webglFramebuffer))for(let ae=0;ae<M.__webglFramebuffer.length;ae++)i.deleteFramebuffer(M.__webglFramebuffer[ae]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ae=0;ae<M.__webglColorRenderbuffer.length;ae++)M.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ae]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=U.textures;for(let ae=0,he=G.length;ae<he;ae++){const le=n.get(G[ae]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),c.memory.textures--),n.remove(G[ae])}n.remove(U)}let z=0;function ne(){z=0}function te(){const U=z;return U>=a.maxTextures&&et("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),z+=1,U}function Q(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function re(U,M){const G=n.get(U);if(U.isVideoTexture&&ut(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){const ae=U.image;if(ae===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,U,M);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function Z(U,M){const G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){oe(G,U,M);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function J(U,M){const G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){oe(G,U,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function Se(U,M){const G=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&G.__version!==U.version){ve(G,U,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const pe={[ea]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},Ce={[Zt]:i.NEAREST,[Tg]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Pa]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},Ie={[Rg]:i.NEVER,[Lg]:i.ALWAYS,[Cg]:i.LESS,[pl]:i.LEQUAL,[Pg]:i.EQUAL,[ml]:i.GEQUAL,[Dg]:i.GREATER,[Fg]:i.NOTEQUAL};function Ae(U,M){if(M.type===Yn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===Pa||M.magFilter===bs||M.magFilter===ji||M.minFilter===rn||M.minFilter===Pa||M.minFilter===bs||M.minFilter===ji)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,pe[M.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,pe[M.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,pe[M.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Ce[M.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Ce[M.minFilter]),M.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==bs&&M.minFilter!==ji||M.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function We(U,M){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",C));const ae=M.source;let he=m.get(ae);he===void 0&&(he={},m.set(ae,he));const le=Q(M);if(le!==U.__cacheKey){he[le]===void 0&&(he[le]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,G=!0),he[le].usedTimes++;const Ne=he[U.__cacheKey];Ne!==void 0&&(he[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&I(M)),U.__cacheKey=le,U.__webglTexture=he[le].texture}return G}function Ke(U,M,G){return Math.floor(Math.floor(U/G)/M)}function Je(U,M,G,ae){const le=U.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,ae,M.data);else{le.sort((xe,Me)=>xe.start-Me.start);let Ne=0;for(let xe=1;xe<le.length;xe++){const Me=le[Ne],Oe=le[xe],Be=Me.start+Me.count,De=Ke(Oe.start,M.width,4),it=Ke(Me.start,M.width,4);Oe.start<=Be+1&&De===it&&Ke(Oe.start+Oe.count-1,M.width,4)===De?Me.count=Math.max(Me.count,Oe.start+Oe.count-Me.start):(++Ne,le[Ne]=Oe)}le.length=Ne+1;const be=i.getParameter(i.UNPACK_ROW_LENGTH),Ge=i.getParameter(i.UNPACK_SKIP_PIXELS),qe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let xe=0,Me=le.length;xe<Me;xe++){const Oe=le[xe],Be=Math.floor(Oe.start/4),De=Math.ceil(Oe.count/4),it=Be%M.width,H=Math.floor(Be/M.width),Te=De,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,it),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,it,H,Te,ye,G,ae,M.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,qe)}}function oe(U,M,G){let ae=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=i.TEXTURE_3D);const he=We(U,M),le=M.source;t.bindTexture(ae,U.__webglTexture,i.TEXTURE0+G);const Ne=n.get(le);if(le.version!==Ne.__version||he===!0){t.activeTexture(i.TEXTURE0+G);const be=St.getPrimaries(St.workingColorSpace),Ge=M.colorSpace===wi?null:St.getPrimaries(M.colorSpace),qe=M.colorSpace===wi||be===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let xe=P(M.image,!1,a.maxTextureSize);xe=gt(M,xe);const Me=o.convert(M.format,M.colorSpace),Oe=o.convert(M.type);let Be=F(M.internalFormat,Me,Oe,M.colorSpace,M.isVideoTexture);Ae(ae,M);let De;const it=M.mipmaps,H=M.isVideoTexture!==!0,Te=Ne.__version===void 0||he===!0,ye=le.dataReady,Pe=O(M,xe);if(M.isDepthTexture)Be=L(M.format===qi,M.type),Te&&(H?t.texStorage2D(i.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Be,xe.width,xe.height,0,Me,Oe,null));else if(M.isDataTexture)if(it.length>0){H&&Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Be,it[0].width,it[0].height);for(let X=0,B=it.length;X<B;X++)De=it[X],H?ye&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,De.width,De.height,Me,Oe,De.data):t.texImage2D(i.TEXTURE_2D,X,Be,De.width,De.height,0,Me,Oe,De.data);M.generateMipmaps=!1}else H?(Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Be,xe.width,xe.height),ye&&Je(M,xe,Me,Oe)):t.texImage2D(i.TEXTURE_2D,0,Be,xe.width,xe.height,0,Me,Oe,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Be,it[0].width,it[0].height,xe.depth);for(let X=0,B=it.length;X<B;X++)if(De=it[X],M.format!==Un)if(Me!==null)if(H){if(ye)if(M.layerUpdates.size>0){const Fe=jc(De.width,De.height,M.format,M.type);for(const Ye of M.layerUpdates){const vt=De.data.subarray(Ye*Fe/De.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Ye,De.width,De.height,1,Me,vt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,De.width,De.height,xe.depth,Me,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Be,De.width,De.height,xe.depth,0,De.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,De.width,De.height,xe.depth,Me,Oe,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Be,De.width,De.height,xe.depth,0,Me,Oe,De.data)}else{H&&Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Be,it[0].width,it[0].height);for(let X=0,B=it.length;X<B;X++)De=it[X],M.format!==Un?Me!==null?H?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,De.width,De.height,Me,De.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Be,De.width,De.height,0,De.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ye&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,De.width,De.height,Me,Oe,De.data):t.texImage2D(i.TEXTURE_2D,X,Be,De.width,De.height,0,Me,Oe,De.data)}else if(M.isDataArrayTexture)if(H){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Be,xe.width,xe.height,xe.depth),ye)if(M.layerUpdates.size>0){const X=jc(xe.width,xe.height,M.format,M.type);for(const B of M.layerUpdates){const Fe=xe.data.subarray(B*X/xe.data.BYTES_PER_ELEMENT,(B+1)*X/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,B,xe.width,xe.height,1,Me,Oe,Fe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Me,Oe,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,Me,Oe,xe.data);else if(M.isData3DTexture)H?(Te&&t.texStorage3D(i.TEXTURE_3D,Pe,Be,xe.width,xe.height,xe.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Me,Oe,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,Me,Oe,xe.data);else if(M.isFramebufferTexture){if(Te)if(H)t.texStorage2D(i.TEXTURE_2D,Pe,Be,xe.width,xe.height);else{let X=xe.width,B=xe.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Be,X,B,0,Me,Oe,null),X>>=1,B>>=1}}else if(it.length>0){if(H&&Te){const X=Ue(it[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Be,X.width,X.height)}for(let X=0,B=it.length;X<B;X++)De=it[X],H?ye&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Me,Oe,De):t.texImage2D(i.TEXTURE_2D,X,Be,Me,Oe,De);M.generateMipmaps=!1}else if(H){if(Te){const X=Ue(xe);t.texStorage2D(i.TEXTURE_2D,Pe,Be,X.width,X.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Oe,xe)}else t.texImage2D(i.TEXTURE_2D,0,Be,Me,Oe,xe);y(M)&&S(ae),Ne.__version=le.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function ve(U,M,G){if(M.image.length!==6)return;const ae=We(U,M),he=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+G);const le=n.get(he);if(he.version!==le.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);const Ne=St.getPrimaries(St.workingColorSpace),be=M.colorSpace===wi?null:St.getPrimaries(M.colorSpace),Ge=M.colorSpace===wi||Ne===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let B=0;B<6;B++)!qe&&!xe?Me[B]=P(M.image[B],!0,a.maxCubemapSize):Me[B]=xe?M.image[B].image:M.image[B],Me[B]=gt(M,Me[B]);const Oe=Me[0],Be=o.convert(M.format,M.colorSpace),De=o.convert(M.type),it=F(M.internalFormat,Be,De,M.colorSpace),H=M.isVideoTexture!==!0,Te=le.__version===void 0||ae===!0,ye=he.dataReady;let Pe=O(M,Oe);Ae(i.TEXTURE_CUBE_MAP,M);let X;if(qe){H&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,it,Oe.width,Oe.height);for(let B=0;B<6;B++){X=Me[B].mipmaps;for(let Fe=0;Fe<X.length;Fe++){const Ye=X[Fe];M.format!==Un?Be!==null?H?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,0,0,Ye.width,Ye.height,Be,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,it,Ye.width,Ye.height,0,Ye.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,0,0,Ye.width,Ye.height,Be,De,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,it,Ye.width,Ye.height,0,Be,De,Ye.data)}}}else{if(X=M.mipmaps,H&&Te){X.length>0&&Pe++;const B=Ue(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,it,B.width,B.height)}for(let B=0;B<6;B++)if(xe){H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Me[B].width,Me[B].height,Be,De,Me[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,it,Me[B].width,Me[B].height,0,Be,De,Me[B].data);for(let Fe=0;Fe<X.length;Fe++){const vt=X[Fe].image[B].image;H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,0,0,vt.width,vt.height,Be,De,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,it,vt.width,vt.height,0,Be,De,vt.data)}}else{H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Be,De,Me[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,it,Be,De,Me[B]);for(let Fe=0;Fe<X.length;Fe++){const Ye=X[Fe];H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,0,0,Be,De,Ye.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,it,Be,De,Ye.image[B])}}}y(M)&&S(i.TEXTURE_CUBE_MAP),le.__version=he.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function ie(U,M,G,ae,he,le){const Ne=o.convert(G.format,G.colorSpace),be=o.convert(G.type),Ge=F(G.internalFormat,Ne,be,G.colorSpace),qe=n.get(M),xe=n.get(G);if(xe.__renderTarget=M,!qe.__hasExternalTextures){const Me=Math.max(1,M.width>>le),Oe=Math.max(1,M.height>>le);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,le,Ge,Me,Oe,M.depth,0,Ne,be,null):t.texImage2D(he,le,Ge,Me,Oe,0,Ne,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Pt(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,he,xe.__webglTexture,0,V(M)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,he,xe.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(U,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,U),M.depthBuffer){const ae=M.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,le=L(M.stencilBuffer,he),Ne=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(M),le,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(M),le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,le,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,U)}else{const ae=M.textures;for(let he=0;he<ae.length;he++){const le=ae[he],Ne=o.convert(le.format,le.colorSpace),be=o.convert(le.type),Ge=F(le.internalFormat,Ne,be,le.colorSpace);Pt(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(M),Ge,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(M),Ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ge,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(U,M,G){const ae=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M.depthTexture);const qe=o.convert(M.depthTexture.format),xe=o.convert(M.depthTexture.type);let Me;M.depthTexture.format===pi?Me=i.DEPTH_COMPONENT24:M.depthTexture.format===qi&&(Me=i.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Me,M.width,M.height,0,qe,xe,null)}}else re(M.depthTexture,0);const le=he.__webglTexture,Ne=V(M),be=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Ge=M.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===pi)Pt(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ge,be,le,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,Ge,be,le,0);else if(M.depthTexture.format===qi)Pt(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ge,be,le,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,Ge,be,le,0);else throw new Error("Unknown depthTexture format")}function $e(U){const M=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ae){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=ae}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let ae=0;ae<6;ae++)He(M.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?He(M.__webglFramebuffer[0],U,0):He(M.__webglFramebuffer,U,0)}else if(G){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]===void 0)M.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ee(M.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,le)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ee(M.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(U,M,G){const ae=n.get(U);M!==void 0&&ie(ae.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&$e(U)}function ot(U){const M=U.texture,G=n.get(U),ae=n.get(M);U.addEventListener("dispose",W);const he=U.textures,le=U.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=M.version,c.memory.textures++),le){G.__webglFramebuffer=[];for(let be=0;be<6;be++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[be]=[];for(let Ge=0;Ge<M.mipmaps.length;Ge++)G.__webglFramebuffer[be][Ge]=i.createFramebuffer()}else G.__webglFramebuffer[be]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let be=0;be<M.mipmaps.length;be++)G.__webglFramebuffer[be]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let be=0,Ge=he.length;be<Ge;be++){const qe=n.get(he[be]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&Pt(U)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){const Ge=he[be];G.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[be]);const qe=o.convert(Ge.format,Ge.colorSpace),xe=o.convert(Ge.type),Me=F(Ge.internalFormat,qe,xe,Ge.colorSpace,U.isXRRenderTarget===!0),Oe=V(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Me,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,G.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M);for(let be=0;be<6;be++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ge=0;Ge<M.mipmaps.length;Ge++)ie(G.__webglFramebuffer[be][Ge],U,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge);else ie(G.__webglFramebuffer[be],U,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(M)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let be=0,Ge=he.length;be<Ge;be++){const qe=he[be],xe=n.get(qe);let Me=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,xe.__webglTexture),Ae(Me,qe),ie(G.__webglFramebuffer,U,qe,i.COLOR_ATTACHMENT0+be,Me,0),y(qe)&&S(Me)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),Ae(be,M),M.mipmaps&&M.mipmaps.length>0)for(let Ge=0;Ge<M.mipmaps.length;Ge++)ie(G.__webglFramebuffer[Ge],U,M,i.COLOR_ATTACHMENT0,be,Ge);else ie(G.__webglFramebuffer,U,M,i.COLOR_ATTACHMENT0,be,0);y(M)&&S(be),t.unbindTexture()}U.depthBuffer&&$e(U)}function dt(U){const M=U.textures;for(let G=0,ae=M.length;G<ae;G++){const he=M[G];if(y(he)){const le=D(U),Ne=n.get(he).__webglTexture;t.bindTexture(le,Ne),S(le),t.unbindTexture()}}}const Tt=[],nt=[];function Ut(U){if(U.samples>0){if(Pt(U)===!1){const M=U.textures,G=U.width,ae=U.height;let he=i.COLOR_BUFFER_BIT;const le=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(U),be=M.length>1;if(be)for(let qe=0;qe<M.length;qe++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Ge=U.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let qe=0;qe<M.length;qe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[qe]);const xe=n.get(M[qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,G,ae,0,0,G,ae,he,i.NEAREST),p===!0&&(Tt.length=0,nt.length=0,Tt.push(i.COLOR_ATTACHMENT0+qe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Tt.push(le),nt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let qe=0;qe<M.length;qe++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[qe]);const xe=n.get(M[qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const M=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function V(U){return Math.min(a.maxSamples,U.samples)}function Pt(U){const M=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(U){const M=c.render.frame;_.get(U)!==M&&(_.set(U,M),U.update())}function gt(U,M){const G=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==Er&&G!==wi&&(St.getTransfer(G)===Ct?(ae!==Un||he!==mn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",G)),M}function Ue(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=ne,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=Se,this.rebindTextures=Et,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fy(i,e){function t(n,a=wi){let o;const c=St.getTransfer(a);if(n===mn)return i.UNSIGNED_BYTE;if(n===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nu)return i.BYTE;if(n===Ou)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===ll)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===zu)return i.ALPHA;if(n===Vu)return i.RGB;if(n===Un)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Gu)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===Sr)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===hl)return i.RGBA_INTEGER;if(n===qs||n===Ys||n===Ks||n===Zs)if(c===Ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===qs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===qs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===To||n===wo||n===Ao)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===bo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Co||n===Po||n===Do||n===Fo||n===Lo||n===Io)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ro||n===Co)return c===Ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Po)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return o.COMPRESSED_R11_EAC;if(n===Fo)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return o.COMPRESSED_RG11_EAC;if(n===Io)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uo||n===No||n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Go||n===Ho||n===Wo||n===Xo||n===$o||n===jo||n===qo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Uo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$o)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Ko||n===Zo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Yo)return c===Ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===Qo||n===el||n===tl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Qo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:dy,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bn(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class my extends br{constructor(e,t){super();const n=this;let a=null,o=1,c=null,f="local-floor",p=1,h=null,_=null,g=null,m=null,x=null,b=null;const P=typeof XRWebGLBinding<"u",y=new py,S={},D=t.getContextAttributes();let F=null,L=null;const O=[],C=[],W=new bt;let A=null;const I=new Mn;I.viewport=new kt;const k=new Mn;k.viewport=new kt;const z=[I,k],ne=new Av;let te=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ba,O[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ba,O[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ba,O[oe]=ve),ve.getHandSpace()};function re(oe){const ve=C.indexOf(oe.inputSource);if(ve===-1)return;const ie=O[ve];ie!==void 0&&(ie.update(oe.inputSource,oe.frame,h||c),ie.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Z(){a.removeEventListener("select",re),a.removeEventListener("selectstart",re),a.removeEventListener("selectend",re),a.removeEventListener("squeeze",re),a.removeEventListener("squeezestart",re),a.removeEventListener("squeezeend",re),a.removeEventListener("end",Z),a.removeEventListener("inputsourceschange",J);for(let oe=0;oe<O.length;oe++){const ve=C[oe];ve!==null&&(C[oe]=null,O[oe].disconnect(ve))}te=null,Q=null,y.reset();for(const oe in S)delete S[oe];e.setRenderTarget(F),x=null,m=null,g=null,a=null,L=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return g===null&&P&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function(oe){if(a=oe,a!==null){if(F=e.getRenderTarget(),a.addEventListener("select",re),a.addEventListener("selectstart",re),a.addEventListener("selectend",re),a.addEventListener("squeeze",re),a.addEventListener("squeezestart",re),a.addEventListener("squeezeend",re),a.addEventListener("end",Z),a.addEventListener("inputsourceschange",J),D.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(W),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ee=null,He=null;D.depth&&(He=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=D.stencil?qi:pi,Ee=D.stencil?$r:ei);const $e={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer($e),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),L=new Qn(m.textureWidth,m.textureHeight,{format:Un,type:mn,depthTexture:new Yr(m.textureWidth,m.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const ie={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Qn(x.framebufferWidth,x.framebufferHeight,{format:Un,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await a.requestReferenceSpace(f),Je.setContext(a),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(oe){for(let ve=0;ve<oe.removed.length;ve++){const ie=oe.removed[ve],Ee=C.indexOf(ie);Ee>=0&&(C[Ee]=null,O[Ee].disconnect(ie))}for(let ve=0;ve<oe.added.length;ve++){const ie=oe.added[ve];let Ee=C.indexOf(ie);if(Ee===-1){for(let $e=0;$e<O.length;$e++)if($e>=C.length){C.push(ie),Ee=$e;break}else if(C[$e]===null){C[$e]=ie,Ee=$e;break}if(Ee===-1)break}const He=O[Ee];He&&He.connect(ie)}}const Se=new ee,pe=new ee;function Ce(oe,ve,ie){Se.setFromMatrixPosition(ve.matrixWorld),pe.setFromMatrixPosition(ie.matrixWorld);const Ee=Se.distanceTo(pe),He=ve.projectionMatrix.elements,$e=ie.projectionMatrix.elements,Et=He[14]/(He[10]-1),ot=He[14]/(He[10]+1),dt=(He[9]+1)/He[5],Tt=(He[9]-1)/He[5],nt=(He[8]-1)/He[0],Ut=($e[8]+1)/$e[0],V=Et*nt,Pt=Et*Ut,ut=Ee/(-nt+Ut),gt=ut*-nt;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(gt),oe.translateZ(ut),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),He[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ue=Et+ut,U=ot+ut,M=V-gt,G=Pt+(Ee-gt),ae=dt*ot/U*Ue,he=Tt*ot/U*Ue;oe.projectionMatrix.makePerspective(M,G,ae,he,Ue,U),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ie(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(a===null)return;let ve=oe.near,ie=oe.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(ie=y.depthFar)),ne.near=k.near=I.near=ve,ne.far=k.far=I.far=ie,(te!==ne.near||Q!==ne.far)&&(a.updateRenderState({depthNear:ne.near,depthFar:ne.far}),te=ne.near,Q=ne.far),ne.layers.mask=oe.layers.mask|6,I.layers.mask=ne.layers.mask&-5,k.layers.mask=ne.layers.mask&-3;const Ee=oe.parent,He=ne.cameras;Ie(ne,Ee);for(let $e=0;$e<He.length;$e++)Ie(He[$e],Ee);He.length===2?Ce(ne,I,k):ne.projectionMatrix.copy(I.projectionMatrix),Ae(oe,ne,Ee)};function Ae(oe,ve,ie){ie===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(ie.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=nl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(m===null&&x===null))return p},this.setFoveation=function(oe){p=oe,m!==null&&(m.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(oe){return S[oe]};let We=null;function Ke(oe,ve){if(_=ve.getViewerPose(h||c),b=ve,_!==null){const ie=_.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Ee=!1;ie.length!==ne.cameras.length&&(ne.cameras.length=0,Ee=!0);for(let ot=0;ot<ie.length;ot++){const dt=ie[ot];let Tt=null;if(x!==null)Tt=x.getViewport(dt);else{const Ut=g.getViewSubImage(m,dt);Tt=Ut.viewport,ot===0&&(e.setRenderTargetTextures(L,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(L))}let nt=z[ot];nt===void 0&&(nt=new Mn,nt.layers.enable(ot),nt.viewport=new kt,z[ot]=nt),nt.matrix.fromArray(dt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(dt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ot===0&&(ne.matrix.copy(nt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ee===!0&&ne.cameras.push(nt)}const He=a.enabledFeatures;if(He&&He.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&P){g=n.getBinding();const ot=g.getDepthInformation(ie[0]);ot&&ot.isValid&&ot.texture&&y.init(ot,a.renderState)}if(He&&He.includes("camera-access")&&P){e.state.unbindTexture(),g=n.getBinding();for(let ot=0;ot<ie.length;ot++){const dt=ie[ot].camera;if(dt){let Tt=S[dt];Tt||(Tt=new Zu,S[dt]=Tt);const nt=g.getCameraImage(dt);Tt.sourceTexture=nt}}}}for(let ie=0;ie<O.length;ie++){const Ee=C[ie],He=O[ie];Ee!==null&&He!==void 0&&He.update(Ee,ve,h||c)}We&&We(oe,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),b=null}const Je=new ef;Je.setAnimationLoop(Ke),this.setAnimationLoop=function(oe){We=oe},this.dispose=function(){}}}const Hi=new ti,_y=new Ot;function gy(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function n(y,S){S.color.getRGB(y.fogColor.value,Ju(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,D,F,L){S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),g(y,S)):S.isMeshPhongMaterial?(o(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),m(y,S),S.isMeshPhysicalMaterial&&x(y,S,L)):S.isMeshMatcapMaterial?(o(y,S),b(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),P(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?p(y,S,D,F):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===fn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===fn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const D=e.get(S),F=D.envMap,L=D.envMapRotation;F&&(y.envMap.value=F,Hi.copy(L),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),y.envMapRotation.value.setFromMatrix4(_y.makeRotationFromEuler(Hi)),y.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,D,F){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*D,y.scale.value=F*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,D){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===fn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function P(y,S){const D=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function vy(i,e,t,n){let a={},o={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,F){const L=F.program;n.uniformBlockBinding(D,L)}function h(D,F){let L=a[D.id];L===void 0&&(b(D),L=_(D),a[D.id]=L,D.addEventListener("dispose",y));const O=F.program;n.updateUBOMapping(D,O);const C=e.render.frame;o[D.id]!==C&&(m(D),o[D.id]=C)}function _(D){const F=g();D.__bindingPointIndex=F;const L=i.createBuffer(),O=D.__size,C=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,L),L}function g(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(D){const F=a[D.id],L=D.uniforms,O=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let C=0,W=L.length;C<W;C++){const A=Array.isArray(L[C])?L[C]:[L[C]];for(let I=0,k=A.length;I<k;I++){const z=A[I];if(x(z,C,I,O)===!0){const ne=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let Q=0;for(let re=0;re<te.length;re++){const Z=te[re],J=P(Z);typeof Z=="number"||typeof Z=="boolean"?(z.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,ne+Q,z.__data)):Z.isMatrix3?(z.__data[0]=Z.elements[0],z.__data[1]=Z.elements[1],z.__data[2]=Z.elements[2],z.__data[3]=0,z.__data[4]=Z.elements[3],z.__data[5]=Z.elements[4],z.__data[6]=Z.elements[5],z.__data[7]=0,z.__data[8]=Z.elements[6],z.__data[9]=Z.elements[7],z.__data[10]=Z.elements[8],z.__data[11]=0):(Z.toArray(z.__data,Q),Q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ne,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(D,F,L,O){const C=D.value,W=F+"_"+L;if(O[W]===void 0)return typeof C=="number"||typeof C=="boolean"?O[W]=C:O[W]=C.clone(),!0;{const A=O[W];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return O[W]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function b(D){const F=D.uniforms;let L=0;const O=16;for(let W=0,A=F.length;W<A;W++){const I=Array.isArray(F[W])?F[W]:[F[W]];for(let k=0,z=I.length;k<z;k++){const ne=I[k],te=Array.isArray(ne.value)?ne.value:[ne.value];for(let Q=0,re=te.length;Q<re;Q++){const Z=te[Q],J=P(Z),Se=L%O,pe=Se%J.boundary,Ce=Se+pe;L+=pe,Ce!==0&&O-Ce<J.storage&&(L+=O-Ce),ne.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=L,L+=J.storage}}}const C=L%O;return C>0&&(L+=O-C),D.__size=L,D.__cache={},this}function P(D){const F={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(F.boundary=4,F.storage=4):D.isVector2?(F.boundary=8,F.storage=8):D.isVector3||D.isColor?(F.boundary=16,F.storage=12):D.isVector4?(F.boundary=16,F.storage=16):D.isMatrix3?(F.boundary=48,F.storage=48):D.isMatrix4?(F.boundary=64,F.storage=64):D.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",D),F}function y(D){const F=D.target;F.removeEventListener("dispose",y);const L=c.indexOf(F.__bindingPointIndex);c.splice(L,1),i.deleteBuffer(a[F.id]),delete a[F.id],delete o[F.id]}function S(){for(const D in a)i.deleteBuffer(a[D]);c=[],a={},o={}}return{bind:p,update:h,dispose:S}}const xy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function Sy(){return jn===null&&(jn=new sv(xy,16,16,Sr,hi),jn.name="DFG_LUT",jn.minFilter=rn,jn.magFilter=rn,jn.wrapS=ui,jn.wrapT=ui,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class Ey{constructor(e={}){const{canvas:t=Ug(),context:n=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:x=mn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=c;const P=x,y=new Set([hl,dl,fl]),S=new Set([mn,ei,Xr,$r,cl,ul]),D=new Uint32Array(4),F=new Int32Array(4);let L=null,O=null;const C=[],W=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let k=!1;this._outputColorSpace=cn;let z=0,ne=0,te=null,Q=-1,re=null;const Z=new kt,J=new kt;let Se=null;const pe=new _t(0);let Ce=0,Ie=t.width,Ae=t.height,We=1,Ke=null,Je=null;const oe=new kt(0,0,Ie,Ae),ve=new kt(0,0,Ie,Ae);let ie=!1;const Ee=new xl;let He=!1,$e=!1;const Et=new Ot,ot=new ee,dt=new kt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Ut(){return te===null?We:1}let V=n;function Pt(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:a,stencil:o,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${al}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",vt,!1),V===null){const $="webgl2";if(V=Pt($,R),V===null)throw Pt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw yt("WebGLRenderer: "+R.message),R}let ut,gt,Ue,U,M,G,ae,he,le,Ne,be,Ge,qe,xe,Me,Oe,Be,De,it,H,Te,ye,Pe;function X(){ut=new ES(V),ut.init(),Te=new fy(V,ut),gt=new hS(V,ut,e,Te),Ue=new cy(V,ut),gt.reversedDepthBuffer&&m&&Ue.buffers.depth.setReversed(!0),U=new bS(V),M=new YE,G=new uy(V,ut,Ue,M,gt,Te,U),ae=new SS(I),he=new Cv(V),ye=new fS(V,he),le=new yS(V,he,U,ye),Ne=new wS(V,le,he,ye,U),De=new TS(V,gt,G),Me=new pS(M),be=new qE(I,ae,ut,gt,ye,Me),Ge=new gy(I,M),qe=new ZE,xe=new iy(ut),Be=new uS(I,ae,Ue,Ne,b,p),Oe=new ly(I,Ne,gt),Pe=new vy(V,U,gt,Ue),it=new dS(V,ut,U),H=new MS(V,ut,U),U.programs=be.programs,I.capabilities=gt,I.extensions=ut,I.properties=M,I.renderLists=qe,I.shadowMap=Oe,I.state=Ue,I.info=U}X(),P!==mn&&(A=new RS(P,t.width,t.height,a,o));const B=new my(I,V);this.xr=B,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(R){R!==void 0&&(We=R,this.setSize(Ie,Ae,!1))},this.getSize=function(R){return R.set(Ie,Ae)},this.setSize=function(R,$,se=!0){if(B.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=R,Ae=$,t.width=Math.floor(R*We),t.height=Math.floor($*We),se===!0&&(t.style.width=R+"px",t.style.height=$+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(Ie*We,Ae*We).floor()},this.setDrawingBufferSize=function(R,$,se){Ie=R,Ae=$,We=se,t.width=Math.floor(R*se),t.height=Math.floor($*se),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(P===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,$,se,K){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,$,se,K),Ue.viewport(Z.copy(oe).multiplyScalar(We).round())},this.getScissor=function(R){return R.copy(ve)},this.setScissor=function(R,$,se,K){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,$,se,K),Ue.scissor(J.copy(ve).multiplyScalar(We).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(R){Ue.setScissorTest(ie=R)},this.setOpaqueSort=function(R){Ke=R},this.setTransparentSort=function(R){Je=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,se=!0){let K=0;if(R){let q=!1;if(te!==null){const we=te.texture.format;q=y.has(we)}if(q){const we=te.texture.type,Le=S.has(we),de=Be.getClearColor(),ke=Be.getClearAlpha(),ze=de.r,Qe=de.g,tt=de.b;Le?(D[0]=ze,D[1]=Qe,D[2]=tt,D[3]=ke,V.clearBufferuiv(V.COLOR,0,D)):(F[0]=ze,F[1]=Qe,F[2]=tt,F[3]=ke,V.clearBufferiv(V.COLOR,0,F))}else K|=V.COLOR_BUFFER_BIT}$&&(K|=V.DEPTH_BUFFER_BIT),se&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Be.dispose(),qe.dispose(),xe.dispose(),M.dispose(),ae.dispose(),Ne.dispose(),ye.dispose(),Pe.dispose(),be.dispose(),B.dispose(),B.removeEventListener("sessionstart",_n),B.removeEventListener("sessionend",ns),gn.stop()};function Fe(R){R.preventDefault(),wc("WebGLRenderer: Context Lost."),k=!0}function Ye(){wc("WebGLRenderer: Context Restored."),k=!1;const R=U.autoReset,$=Oe.enabled,se=Oe.autoUpdate,K=Oe.needsUpdate,q=Oe.type;X(),U.autoReset=R,Oe.enabled=$,Oe.autoUpdate=se,Oe.needsUpdate=K,Oe.type=q}function vt(R){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){const $=R.target;$.removeEventListener("dispose",lt),wn($)}function wn(R){Gt(R),M.remove(R)}function Gt(R){const $=M.get(R).programs;$!==void 0&&($.forEach(function(se){be.releaseProgram(se)}),R.isShaderMaterial&&be.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,se,K,q,we){$===null&&($=Tt);const Le=q.isMesh&&q.matrixWorld.determinant()<0,de=ca(R,$,se,K,q);Ue.setMaterial(K,Le);let ke=se.index,ze=1;if(K.wireframe===!0){if(ke=le.getWireframeAttribute(se),ke===void 0)return;ze=2}const Qe=se.drawRange,tt=se.attributes.position;let Ve=Qe.start*ze,Mt=(Qe.start+Qe.count)*ze;we!==null&&(Ve=Math.max(Ve,we.start*ze),Mt=Math.min(Mt,(we.start+we.count)*ze)),ke!==null?(Ve=Math.max(Ve,0),Mt=Math.min(Mt,ke.count)):tt!=null&&(Ve=Math.max(Ve,0),Mt=Math.min(Mt,tt.count));const Nt=Mt-Ve;if(Nt<0||Nt===1/0)return;ye.setup(q,K,de,se,ke);let Ft,At=it;if(ke!==null&&(Ft=he.get(ke),At=H,At.setIndex(Ft)),q.isMesh)K.wireframe===!0?(Ue.setLineWidth(K.wireframeLinewidth*Ut()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(q.isLine){let Ht=K.linewidth;Ht===void 0&&(Ht=1),Ue.setLineWidth(Ht*Ut()),q.isLineSegments?At.setMode(V.LINES):q.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else q.isPoints?At.setMode(V.POINTS):q.isSprite&&At.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)na("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))At.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ht=q._multiDrawStarts,E=q._multiDrawCounts,ct=q._multiDrawCount,mt=ke?he.get(ke).bytesPerElement:1,Qt=M.get(K).currentProgram.getUniforms();for(let Kt=0;Kt<ct;Kt++)Qt.setValue(V,"_gl_DrawID",Kt),At.render(Ht[Kt]/mt,E[Kt])}else if(q.isInstancedMesh)At.renderInstances(Ve,Nt,q.count);else if(se.isInstancedBufferGeometry){const Ht=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,E=Math.min(se.instanceCount,Ht);At.renderInstances(Ve,Nt,E)}else At.render(Ve,Nt)};function Pi(R,$,se){R.transparent===!0&&R.side===Ln&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,Di(R,$,se),R.side=Ri,R.needsUpdate=!0,Di(R,$,se),R.side=Ln):Di(R,$,se)}this.compile=function(R,$,se=null){se===null&&(se=R),O=xe.get(se),O.init($),W.push(O),se.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(O.pushLight(q),q.castShadow&&O.pushShadow(q))}),R!==se&&R.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(O.pushLight(q),q.castShadow&&O.pushShadow(q))}),O.setupLights();const K=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const we=q.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const de=we[Le];Pi(de,se,q),K.add(de)}else Pi(we,se,q),K.add(we)}),O=W.pop(),K},this.compileAsync=function(R,$,se=null){const K=this.compile(R,$,se);return new Promise(q=>{function we(){if(K.forEach(function(Le){M.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){q(R);return}setTimeout(we,10)}ut.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let wr=null;function la(R){wr&&wr(R)}function _n(){gn.stop()}function ns(){gn.start()}const gn=new ef;gn.setAnimationLoop(la),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(R){wr=R,B.setAnimationLoop(R),R===null?gn.stop():gn.start()},B.addEventListener("sessionstart",_n),B.addEventListener("sessionend",ns),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const se=B.enabled===!0&&B.isPresenting===!0,K=A!==null&&(te===null||se)&&A.begin(I,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(B.cameraAutoUpdate===!0&&B.updateCamera($),$=B.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,$,te),O=xe.get(R,W.length),O.init($),W.push(O),Et.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ee.setFromProjectionMatrix(Et,Kn,$.reversedDepth),$e=this.localClippingEnabled,He=Me.init(this.clippingPlanes,$e),L=qe.get(R,C.length),L.init(),C.push(L),B.enabled===!0&&B.isPresenting===!0){const Le=I.xr.getDepthSensingMesh();Le!==null&&mi(Le,$,-1/0,I.sortObjects)}mi(R,$,0,I.sortObjects),L.finish(),I.sortObjects===!0&&L.sort(Ke,Je),nt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,nt&&Be.addToRenderList(L,R),this.info.render.frame++,He===!0&&Me.beginShadows();const q=O.state.shadowsArray;if(Oe.render(q,R,$),He===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&A.hasRenderPass())===!1){const Le=L.opaque,de=L.transmissive;if(O.setupLights(),$.isArrayCamera){const ke=$.cameras;if(de.length>0)for(let ze=0,Qe=ke.length;ze<Qe;ze++){const tt=ke[ze];is(Le,de,R,tt)}nt&&Be.render(R);for(let ze=0,Qe=ke.length;ze<Qe;ze++){const tt=ke[ze];Zi(L,R,tt,tt.viewport)}}else de.length>0&&is(Le,de,R,$),nt&&Be.render(R),Zi(L,R,$)}te!==null&&ne===0&&(G.updateMultisampleRenderTarget(te),G.updateRenderTargetMipmap(te)),K&&A.end(I),R.isScene===!0&&R.onAfterRender(I,R,$),ye.resetDefaultState(),Q=-1,re=null,W.pop(),W.length>0?(O=W[W.length-1],He===!0&&Me.setGlobalState(I.clippingPlanes,O.state.camera)):O=null,C.pop(),C.length>0?L=C[C.length-1]:L=null};function mi(R,$,se,K){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ee.intersectsSprite(R)){K&&dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const Le=Ne.update(R),de=R.material;de.visible&&L.push(R,Le,de,se,dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ee.intersectsObject(R))){const Le=Ne.update(R),de=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),dt.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),dt.copy(Le.boundingSphere.center)),dt.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(de)){const ke=Le.groups;for(let ze=0,Qe=ke.length;ze<Qe;ze++){const tt=ke[ze],Ve=de[tt.materialIndex];Ve&&Ve.visible&&L.push(R,Le,Ve,se,dt.z,tt)}}else de.visible&&L.push(R,Le,de,se,dt.z,null)}}const we=R.children;for(let Le=0,de=we.length;Le<de;Le++)mi(we[Le],$,se,K)}function Zi(R,$,se,K){const{opaque:q,transmissive:we,transparent:Le}=R;O.setupLightsView(se),He===!0&&Me.setGlobalState(I.clippingPlanes,se),K&&Ue.viewport(Z.copy(K)),q.length>0&&Ji(q,$,se),we.length>0&&Ji(we,$,se),Le.length>0&&Ji(Le,$,se),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function is(R,$,se,K){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[K.id]===void 0){const Ve=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[K.id]=new Qn(1,1,{generateMipmaps:!0,type:Ve?hi:mn,minFilter:ji,samples:Math.max(4,gt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const we=O.state.transmissionRenderTarget[K.id],Le=K.viewport||Z;we.setSize(Le.z*I.transmissionResolutionScale,Le.w*I.transmissionResolutionScale);const de=I.getRenderTarget(),ke=I.getActiveCubeFace(),ze=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(pe),Ce=I.getClearAlpha(),Ce<1&&I.setClearColor(16777215,.5),I.clear(),nt&&Be.render(se);const Qe=I.toneMapping;I.toneMapping=Jn;const tt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),O.setupLightsView(K),He===!0&&Me.setGlobalState(I.clippingPlanes,K),Ji(R,se,K),G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Mt=0,Nt=$.length;Mt<Nt;Mt++){const Ft=$[Mt],{object:At,geometry:Ht,material:E,group:ct}=Ft;if(E.side===Ln&&At.layers.test(K.layers)){const mt=E.side;E.side=fn,E.needsUpdate=!0,rs(At,se,K,Ht,E,ct),E.side=mt,E.needsUpdate=!0,Ve=!0}}Ve===!0&&(G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we))}I.setRenderTarget(de,ke,ze),I.setClearColor(pe,Ce),tt!==void 0&&(K.viewport=tt),I.toneMapping=Qe}function Ji(R,$,se){const K=$.isScene===!0?$.overrideMaterial:null;for(let q=0,we=R.length;q<we;q++){const Le=R[q],{object:de,geometry:ke,group:ze}=Le;let Qe=Le.material;Qe.allowOverride===!0&&K!==null&&(Qe=K),de.layers.test(se.layers)&&rs(de,$,se,ke,Qe,ze)}}function rs(R,$,se,K,q,we){R.onBeforeRender(I,$,se,K,q,we),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(I,$,se,K,R,we),q.transparent===!0&&q.side===Ln&&q.forceSinglePass===!1?(q.side=fn,q.needsUpdate=!0,I.renderBufferDirect(se,$,K,q,R,we),q.side=Ri,q.needsUpdate=!0,I.renderBufferDirect(se,$,K,q,R,we),q.side=Ln):I.renderBufferDirect(se,$,K,q,R,we),R.onAfterRender(I,$,se,K,q,we)}function Di(R,$,se){$.isScene!==!0&&($=Tt);const K=M.get(R),q=O.state.lights,we=O.state.shadowsArray,Le=q.state.version,de=be.getParameters(R,q.state,we,$,se),ke=be.getProgramCacheKey(de);let ze=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,K.fog=$.fog;const Qe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=ae.get(R.envMap||K.environment,Qe),K.envMapRotation=K.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",lt),ze=new Map,K.programs=ze);let tt=ze.get(ke);if(tt!==void 0){if(K.currentProgram===tt&&K.lightsStateVersion===Le)return as(R,de),tt}else de.uniforms=be.getUniforms(R),R.onBeforeCompile(de,I),tt=be.acquireProgram(de,ke),ze.set(ke,tt),K.uniforms=de.uniforms;const Ve=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),as(R,de),K.needsLights=wt(R),K.lightsStateVersion=Le,K.needsLights&&(Ve.ambientLightColor.value=q.state.ambient,Ve.lightProbe.value=q.state.probe,Ve.directionalLights.value=q.state.directional,Ve.directionalLightShadows.value=q.state.directionalShadow,Ve.spotLights.value=q.state.spot,Ve.spotLightShadows.value=q.state.spotShadow,Ve.rectAreaLights.value=q.state.rectArea,Ve.ltc_1.value=q.state.rectAreaLTC1,Ve.ltc_2.value=q.state.rectAreaLTC2,Ve.pointLights.value=q.state.point,Ve.pointLightShadows.value=q.state.pointShadow,Ve.hemisphereLights.value=q.state.hemi,Ve.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=q.state.spotLightMatrix,Ve.spotLightMap.value=q.state.spotLightMap,Ve.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=tt,K.uniformsList=null,tt}function ss(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Js.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function as(R,$){const se=M.get(R);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function ca(R,$,se,K,q){$.isScene!==!0&&($=Tt),G.resetTextureUnits();const we=$.fog,Le=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?$.environment:null,de=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Er,ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,ze=ae.get(K.envMap||Le,ke),Qe=K.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!se.morphAttributes.position,Mt=!!se.morphAttributes.normal,Nt=!!se.morphAttributes.color;let Ft=Jn;K.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ft=I.toneMapping);const At=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ht=At!==void 0?At.length:0,E=M.get(K),ct=O.state.lights;if(He===!0&&($e===!0||R!==re)){const zt=R===re&&K.id===Q;Me.setState(K,R,zt)}let mt=!1;K.version===E.__version?(E.needsLights&&E.lightsStateVersion!==ct.state.version||E.outputColorSpace!==de||q.isBatchedMesh&&E.batching===!1||!q.isBatchedMesh&&E.batching===!0||q.isBatchedMesh&&E.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&E.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&E.instancing===!1||!q.isInstancedMesh&&E.instancing===!0||q.isSkinnedMesh&&E.skinning===!1||!q.isSkinnedMesh&&E.skinning===!0||q.isInstancedMesh&&E.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&E.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&E.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&E.instancingMorph===!1&&q.morphTexture!==null||E.envMap!==ze||K.fog===!0&&E.fog!==we||E.numClippingPlanes!==void 0&&(E.numClippingPlanes!==Me.numPlanes||E.numIntersection!==Me.numIntersection)||E.vertexAlphas!==Qe||E.vertexTangents!==tt||E.morphTargets!==Ve||E.morphNormals!==Mt||E.morphColors!==Nt||E.toneMapping!==Ft||E.morphTargetsCount!==Ht)&&(mt=!0):(mt=!0,E.__version=K.version);let Qt=E.currentProgram;mt===!0&&(Qt=Di(K,$,q));let Kt=!1,ii=!1,gi=!1;const Rt=Qt.getUniforms(),Wt=E.uniforms;if(Ue.useProgram(Qt.program)&&(Kt=!0,ii=!0,gi=!0),K.id!==Q&&(Q=K.id,ii=!0),Kt||re!==R){Ue.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(V,"projectionMatrix",R.projectionMatrix),Rt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Vn=Rt.map.cameraPosition;Vn!==void 0&&Vn.setValue(V,ot.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&Rt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Rt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),re!==R&&(re=R,ii=!0,gi=!0)}if(E.needsLights&&(ct.state.directionalShadowMap.length>0&&Rt.setValue(V,"directionalShadowMap",ct.state.directionalShadowMap,G),ct.state.spotShadowMap.length>0&&Rt.setValue(V,"spotShadowMap",ct.state.spotShadowMap,G),ct.state.pointShadowMap.length>0&&Rt.setValue(V,"pointShadowMap",ct.state.pointShadowMap,G)),q.isSkinnedMesh){Rt.setOptional(V,q,"bindMatrix"),Rt.setOptional(V,q,"bindMatrixInverse");const zt=q.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Rt.setValue(V,"boneTexture",zt.boneTexture,G))}q.isBatchedMesh&&(Rt.setOptional(V,q,"batchingTexture"),Rt.setValue(V,"batchingTexture",q._matricesTexture,G),Rt.setOptional(V,q,"batchingIdTexture"),Rt.setValue(V,"batchingIdTexture",q._indirectTexture,G),Rt.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&Rt.setValue(V,"batchingColorTexture",q._colorsTexture,G));const zn=se.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&De.update(q,se,Qt),(ii||E.receiveShadow!==q.receiveShadow)&&(E.receiveShadow=q.receiveShadow,Rt.setValue(V,"receiveShadow",q.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&$.environment!==null&&(Wt.envMapIntensity.value=$.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Sy()),ii&&(Rt.setValue(V,"toneMappingExposure",I.toneMappingExposure),E.needsLights&&ua(Wt,gi),we&&K.fog===!0&&Ge.refreshFogUniforms(Wt,we),Ge.refreshMaterialUniforms(Wt,K,We,Ae,O.state.transmissionRenderTarget[R.id]),Js.upload(V,ss(E),Wt,G)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Js.upload(V,ss(E),Wt,G),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Rt.setValue(V,"center",q.center),Rt.setValue(V,"modelViewMatrix",q.modelViewMatrix),Rt.setValue(V,"normalMatrix",q.normalMatrix),Rt.setValue(V,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const zt=K.uniformsGroups;for(let Vn=0,vi=zt.length;Vn<vi;Vn++){const Bt=zt[Vn];Pe.update(Bt,Qt),Pe.bind(Bt,Qt)}}return Qt}function ua(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function wt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,$,se){const K=M.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=$,M.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:se,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const se=M.get(R);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0};const fa=V.createFramebuffer();this.setRenderTarget=function(R,$=0,se=0){te=R,z=$,ne=se;let K=null,q=!1,we=!1;if(R){const de=M.get(R);if(de.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(V.FRAMEBUFFER,de.__webglFramebuffer),Z.copy(R.viewport),J.copy(R.scissor),Se=R.scissorTest,Ue.viewport(Z),Ue.scissor(J),Ue.setScissorTest(Se),Q=-1;return}else if(de.__webglFramebuffer===void 0)G.setupRenderTarget(R);else if(de.__hasExternalTextures)G.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(de.__boundDepthTexture!==Qe){if(Qe!==null&&M.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const ze=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[$])?K=ze[$][se]:K=ze[$],q=!0):R.samples>0&&G.useMultisampledRTT(R)===!1?K=M.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?K=ze[se]:K=ze,Z.copy(R.viewport),J.copy(R.scissor),Se=R.scissorTest}else Z.copy(oe).multiplyScalar(We).floor(),J.copy(ve).multiplyScalar(We).floor(),Se=ie;if(se!==0&&(K=fa),Ue.bindFramebuffer(V.FRAMEBUFFER,K)&&Ue.drawBuffers(R,K),Ue.viewport(Z),Ue.scissor(J),Ue.setScissorTest(Se),q){const de=M.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,de.__webglTexture,se)}else if(we){const de=$;for(let ke=0;ke<R.textures.length;ke++){const ze=M.get(R.textures[ke]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ke,ze.__webglTexture,se,de)}}else if(R!==null&&se!==0){const de=M.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,de.__webglTexture,se)}Q=-1},this.readRenderTargetPixels=function(R,$,se,K,q,we,Le,de=0){if(!(R&&R.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Ue.bindFramebuffer(V.FRAMEBUFFER,ke);try{const ze=R.textures[de],Qe=ze.format,tt=ze.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!gt.textureFormatReadable(Qe)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(tt)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-K&&se>=0&&se<=R.height-q&&V.readPixels($,se,K,q,Te.convert(Qe),Te.convert(tt),we)}finally{const ze=te!==null?M.get(te).__webglFramebuffer:null;Ue.bindFramebuffer(V.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,$,se,K,q,we,Le,de=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if($>=0&&$<=R.width-K&&se>=0&&se<=R.height-q){Ue.bindFramebuffer(V.FRAMEBUFFER,ke);const ze=R.textures[de],Qe=ze.format,tt=ze.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!gt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ve),V.bufferData(V.PIXEL_PACK_BUFFER,we.byteLength,V.STREAM_READ),V.readPixels($,se,K,q,Te.convert(Qe),Te.convert(tt),0);const Mt=te!==null?M.get(te).__webglFramebuffer:null;Ue.bindFramebuffer(V.FRAMEBUFFER,Mt);const Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ng(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ve),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,we),V.deleteBuffer(Ve),V.deleteSync(Nt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,se=0){const K=Math.pow(2,-se),q=Math.floor(R.image.width*K),we=Math.floor(R.image.height*K),Le=$!==null?$.x:0,de=$!==null?$.y:0;G.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,Le,de,q,we),Ue.unbindTexture()};const os=V.createFramebuffer(),_i=V.createFramebuffer();this.copyTextureToTexture=function(R,$,se=null,K=null,q=0,we=0){let Le,de,ke,ze,Qe,tt,Ve,Mt,Nt;const Ft=R.isCompressedTexture?R.mipmaps[we]:R.image;if(se!==null)Le=se.max.x-se.min.x,de=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,ze=se.min.x,Qe=se.min.y,tt=se.isBox3?se.min.z:0;else{const Wt=Math.pow(2,-q);Le=Math.floor(Ft.width*Wt),de=Math.floor(Ft.height*Wt),R.isDataArrayTexture?ke=Ft.depth:R.isData3DTexture?ke=Math.floor(Ft.depth*Wt):ke=1,ze=0,Qe=0,tt=0}K!==null?(Ve=K.x,Mt=K.y,Nt=K.z):(Ve=0,Mt=0,Nt=0);const At=Te.convert($.format),Ht=Te.convert($.type);let E;$.isData3DTexture?(G.setTexture3D($,0),E=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(G.setTexture2DArray($,0),E=V.TEXTURE_2D_ARRAY):(G.setTexture2D($,0),E=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const ct=V.getParameter(V.UNPACK_ROW_LENGTH),mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Qt=V.getParameter(V.UNPACK_SKIP_PIXELS),Kt=V.getParameter(V.UNPACK_SKIP_ROWS),ii=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,tt);const gi=R.isDataArrayTexture||R.isData3DTexture,Rt=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const Wt=M.get(R),zn=M.get($),zt=M.get(Wt.__renderTarget),Vn=M.get(zn.__renderTarget);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let vi=0;vi<ke;vi++)gi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(R).__webglTexture,q,tt+vi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get($).__webglTexture,we,Nt+vi)),V.blitFramebuffer(ze,Qe,Le,de,Ve,Mt,Le,de,V.DEPTH_BUFFER_BIT,V.NEAREST);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||M.has(R)){const Wt=M.get(R),zn=M.get($);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,os),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,_i);for(let zt=0;zt<ke;zt++)gi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.__webglTexture,q,tt+zt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Wt.__webglTexture,q),Rt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,we,Nt+zt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,we),q!==0?V.blitFramebuffer(ze,Qe,Le,de,Ve,Mt,Le,de,V.COLOR_BUFFER_BIT,V.NEAREST):Rt?V.copyTexSubImage3D(E,we,Ve,Mt,Nt+zt,ze,Qe,Le,de):V.copyTexSubImage2D(E,we,Ve,Mt,ze,Qe,Le,de);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rt?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(E,we,Ve,Mt,Nt,Le,de,ke,At,Ht,Ft.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(E,we,Ve,Mt,Nt,Le,de,ke,At,Ft.data):V.texSubImage3D(E,we,Ve,Mt,Nt,Le,de,ke,At,Ht,Ft):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,we,Ve,Mt,Le,de,At,Ht,Ft.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,we,Ve,Mt,Ft.width,Ft.height,At,Ft.data):V.texSubImage2D(V.TEXTURE_2D,we,Ve,Mt,Le,de,At,Ht,Ft);V.pixelStorei(V.UNPACK_ROW_LENGTH,ct),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ii),we===0&&$.generateMipmaps&&V.generateMipmap(E),Ue.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&G.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?G.setTextureCube(R,0):R.isData3DTexture?G.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?G.setTexture2DArray(R,0):G.setTexture2D(R,0),Ue.unbindTexture()},this.resetState=function(){z=0,ne=0,te=null,Ue.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}function yy(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),a=new Set(Object.keys(i[0].morphAttributes)),o={},c={},f=i[0].morphTargetsRelative,p=new kn;let h=0;for(let _=0;_<i.length;++_){const g=i[_];let m=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in g.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(g.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". Make sure all geometries have the same number of attributes."),null;if(f!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in g.morphAttributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+".  .morphAttributes must be consistent throughout all geometries."),null;c[x]===void 0&&(c[x]=[]),c[x].push(g.morphAttributes[x])}if(e){let x;if(t)x=g.index.count;else if(g.attributes.position!==void 0)x=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". The geometry must have either an index or a position attribute"),null;p.addGroup(h,x,_),h+=x}}if(t){let _=0;const g=[];for(let m=0;m<i.length;++m){const x=i[m].index;for(let b=0;b<x.count;++b)g.push(x.getX(b)+_);_+=i[m].attributes.position.count}p.setIndex(g)}for(const _ in o){const g=gu(o[_]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+_+" attribute."),null;p.setAttribute(_,g)}for(const _ in c){const g=c[_][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[_]=[];for(let m=0;m<g;++m){const x=[];for(let P=0;P<c[_].length;++P)x.push(c[_][P][m]);const b=gu(x);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+_+" morphAttribute."),null;p.morphAttributes[_].push(b)}}return p}function gu(i){let e,t,n,a=-1,o=0;for(let h=0;h<i.length;++h){const _=i[h];if(e===void 0&&(e=_.array.constructor),e!==_.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=_.itemSize),t!==_.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=_.normalized),n!==_.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=_.gpuType),a!==_.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=_.count*t}const c=new e(o),f=new On(c,t,n);let p=0;for(let h=0;h<i.length;++h){const _=i[h];if(_.isInterleavedBufferAttribute){const g=p/t;for(let m=0,x=_.count;m<x;m++)for(let b=0;b<t;b++){const P=_.getComponent(m,b);f.setComponent(m+g,b,P)}}else c.set(_.array,p);p+=_.count*t}return a!==void 0&&(f.gpuType=a),f}class My{constructor(e,t,n){this.sim=t,this.source=n,this.mode="fpv",this.lastStep=-1,this.smooth=null,this.renderer=new Ey({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=cn,this.renderer.toneMapping=ol,this.renderer.toneMappingExposure=1.35,e.append(this.renderer.domElement),this.scene=new Jg,this.scene.background=new _t("#d4e5ed"),this.scene.add(new Tv(16777215,1.7));const a=new yv(15136255,12102032,1.8);a.up.set(0,0,1),this.scene.add(a);const o=new $c(16775144,2.2);o.position.set(1,15,18),this.scene.add(o);const c=new $c(14019071,.9);c.position.set(-18,-15,6),this.scene.add(c),this.camera=new Mn(82,1,.008,250),this.camera.up.set(0,0,1),this.fov=n.cameras.fpv.fovy,this.dynamic=[],this.gateMeshes=new Map,this.materials=[],this.geometries=[],this.textures=[];const f=getComputedStyle(e);this.gateColors={current:f.getPropertyValue("--penn-red").trim(),idle:f.getPropertyValue("--penn-blue").trim()};const p=new Ev,h=new Map,_=new Map,g=new Map;this.textureReady=[];const m=n.meshes.map(x=>{const b=new kn;return b.setAttribute("position",new Tn(x.position.flat(),3)),b.setAttribute("normal",new Tn(x.normal.flat(),3)),x.uv&&b.setAttribute("uv",new Tn(x.uv.flat(),2)),this.geometries.push(b),b});for(const x of n.geoms){if(x.mesh<0)continue;const b=x.bodyName?.startsWith("gate"),P=x.body>0&&!b,y=JSON.stringify([x.rgba,x.texture,b]);let S=_.get(y);if(!S){if(S=new mv({color:new _t().setRGB(...x.rgba.slice(0,3)),roughness:.9,metalness:.02,side:Ln,emissive:2434341,emissiveIntensity:.16}),x.texture){if(!h.has(x.texture)){let F,L;this.textureReady.push(new Promise((C,W)=>{F=C,L=W}));const O=p.load(`/demo/sim/textures/${x.texture}`,F,void 0,L);O.colorSpace=cn,O.wrapS=O.wrapT=ea,O.anisotropy=4,h.set(x.texture,O),this.textures.push(O)}S.map=h.get(x.texture)}_.set(y,S),this.materials.push(S)}const D=this.matrix(x.matrix,x.position);if(!P&&!b){const F=m[x.mesh].clone().applyMatrix4(D);this.geometries.push(F),g.has(S)||g.set(S,[]),g.get(S).push(F)}else{b?(S=new vl({color:this.gateColors.idle,side:Ln,toneMapped:!1}),this.materials.push(S)):(S=S.clone(),S.emissive.set(0),S.roughness=.65,S.metalness=.08,x.bodyName.endsWith("_prop")&&S.color.set("#e6e9ed"),this.materials.push(S));const F=new Bn(m[x.mesh],S);F.matrixAutoUpdate=!1,F.matrix.copy(D),this.scene.add(F),b?this.gateMeshes.set(Number(x.bodyName.slice(4)),F):this.dynamic.push({mesh:F,id:x.id})}}for(const[x,b]of g)for(const P of[!0,!1]){const y=b.filter(D=>!!D.attributes.uv===P);if(!y.length)continue;const S=yy(y);this.geometries.push(S),this.scene.add(new Bn(S,x))}this.observer=new ResizeObserver(()=>this.resize(e)),this.observer.observe(e),this.resize(e)}matrix(e,t){return new Ot().set(e[0],e[1],e[2],t[0],e[3],e[4],e[5],t[1],e[6],e[7],e[8],t[2],0,0,0,1)}resize(e){const{width:t,height:n}=e.getBoundingClientRect();this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}render(){const e=this.sim,t=e.data,n=new ee(...e.position),a=new Zn(e.quaternion[1],e.quaternion[2],e.quaternion[3],e.quaternion[0]);for(const{mesh:o,id:c}of this.dynamic)o.matrix.copy(this.matrix(t.geom_xmat.subarray(c*9,c*9+9),t.geom_xpos.subarray(c*3,c*3+3))),o.matrixWorldNeedsUpdate=!0;for(const[o,c]of this.gateMeshes)c.visible=o!==(e.gate===6?0:6),c.material.color.set(o===e.gate?this.gateColors.current:this.gateColors.idle);if(this.mode==="fpv"){this.camera.fov=this.fov,this.camera.position.copy(n).add(new ee(...this.source.cameras.fpv.position).applyQuaternion(a));const o=this.source.cameras.fpv.quaternion,c=new Zn(o[1],o[2],o[3],o[0]),f=Hr(e.quaternion),p=Math.atan2(f[3],f[0]),h=a.clone().multiply(c),_=new Zn().setFromAxisAngle(new ee(0,0,1),p).multiply(c),g=new Zn(h.x*.9+_.x*.1,h.y*.9+_.y*.1,h.z*.9+_.z*.1,h.w*.9+_.w*.1).normalize();!this.smooth||e.steps<this.lastStep?this.smooth=g:e.steps!==this.lastStep&&(this.smooth.dot(g)<0&&g.set(-g.x,-g.y,-g.z,-g.w),this.smooth.set(this.smooth.x*.6+g.x*.4,this.smooth.y*.6+g.y*.4,this.smooth.z*.6+g.z*.4,this.smooth.w*.6+g.w*.4).normalize()),this.camera.quaternion.copy(this.smooth)}else if(this.mode==="follow"){this.camera.fov=62;const o=Hr(e.quaternion),c=Math.atan2(o[3],o[0]);this.camera.position.copy(n).add(new ee(-1.15*Math.cos(c),-1.15*Math.sin(c),.38)),this.camera.lookAt(n.clone().add(new ee(.7*Math.cos(c),.7*Math.sin(c),.12)))}else this.camera.fov=58,this.camera.position.set(3,26,7.5),this.camera.lookAt(-3,0,1.5);this.lastStep=e.steps,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}dispose(){this.observer.disconnect(),this.renderer.dispose();for(const e of new Set(this.geometries))e.dispose();for(const e of this.materials)e.dispose();for(const e of this.textures)e.dispose()}}const Sn=i=>`<i data-lucide="${i}"></i>`;document.querySelector("#app").innerHTML=`
<div id="viewport" aria-label="Interactive MuJoCo drone racing scene"></div>
<header class="brand"><span class="brand-mark">${Sn("plane")}</span><div><h1>AI Coaching</h1><span>Drone Racing</span></div></header>
<div class="telemetry"><div><span>LAP</span><strong id="lap">00</strong></div><div><span>TIME</span><strong id="timer">00:00.00</strong></div><div><span>GATE</span><strong id="gate">01 <small>/ 12</small></strong></div></div>
<aside id="settings" class="settings" hidden aria-label="Flight settings"><div class="panel-title"><h2>Flight settings</h2><button class="icon-button" id="close-settings" title="Close settings" aria-label="Close settings">${Sn("x")}</button></div>
<label>Control mode<select id="mode"><option value="expert">Expert autopilot</option><option value="assisted">Assisted flight</option><option value="manual">Manual flight</option><option value="coach">Coach · fixed skill</option><option value="tracking">Tracking policy</option></select></label>
<label>AI assistance <output id="alpha-label">80%</output><input id="alpha" type="range" min="30" max="100" value="80"></label>
<label id="skill-row" hidden>Fixed skill <output id="skill-label">0.00</output><input id="skill" type="range" min="0" max="100" value="0"></label>
<label>Brightness <output id="exposure-label">135%</output><input id="exposure" type="range" min="60" max="220" value="135"></label>
<div class="input-heading">${Sn("gamepad-2")}<strong id="device">Keyboard</strong></div>
<label>Roll axis<select id="roll-axis"><option value="2">Right stick X · axis 2</option><option value="0">Axis 0</option><option value="1">Axis 1</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<label>Yaw axis<select id="yaw-axis"><option value="0">Left stick X · axis 0</option><option value="1">Axis 1</option><option value="2">Axis 2</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<div class="checks"><label><input id="invert-roll" type="checkbox">Invert roll</label><label><input id="invert-yaw" type="checkbox" checked>Invert yaw</label></div>
<label>Stick deadzone <output id="deadzone-label">5%</output><input id="deadzone" type="range" min="0" max="30" value="5"></label>
<button id="export" class="export">${Sn("download")} Export flight log</button><div class="engine">MuJoCo 3.13 <span>Browser physics</span></div></aside>
<div class="flight-data"><span id="speed">0.0 <small>m/s</small></span><span id="altitude">2.0 <small>m AGL</small></span><span id="status">EXPERT ACTIVE</span></div>
<div class="gate-strip" id="gate-strip" aria-label="Gate progress">${Array.from({length:12},(i,e)=>`<span data-gate="${e}">${e+1}</span>`).join("")}</div>
<div class="joystick left-stick" aria-label="Touch yaw and thrust" role="application"><span></span></div><div class="joystick right-stick" aria-label="Touch roll and pitch" role="application"><span></span></div>
<nav class="toolbar" aria-label="Flight controls"><div class="scene-name"><span class="live-dot"></span>Warehouse <span class="track-label">/ Figure 8</span></div><span class="divider"></span>
<div class="segmented" aria-label="Camera view"><button data-view="fpv" class="selected">FPV</button><button data-view="follow">Chase</button><button data-view="overview">Track</button></div><span class="divider"></span>
<button id="pause" class="icon-button" title="Pause" aria-label="Pause">${Sn("pause")}</button><button id="reset" class="icon-button" title="Reset flight" aria-label="Reset flight">${Sn("rotate-ccw")}</button><button id="sound" class="icon-button" title="Enable rotor audio" aria-label="Enable rotor audio">${Sn("volume-x")}</button><button id="settings-toggle" class="icon-button" title="Flight settings" aria-label="Flight settings" aria-expanded="false">${Sn("settings-2")}</button><button id="fullscreen" class="icon-button" title="Full screen" aria-label="Full screen">${Sn("maximize")}</button>
<button id="take-control" class="primary">${Sn("gamepad-2")}<span>Take control</span></button></nav>
<div id="notice" role="status" hidden></div><div class="loading" id="loading"><span class="spinner"></span><strong>Preparing flight</strong><span id="loading-status">Loading MuJoCo</span><button id="retry" hidden>Retry</button></div>`;const by={Play:j_,Pause:X_,RotateCcw:q_,Settings2:Y_,Maximize:H_,Minimize:W_,Gamepad2:G_,Camera:k_,Download:V_,Volume2:Z_,VolumeX:J_,X:Q_,Sun:K_,Plane:$_,ChevronDown:z_},Ml=()=>Au({icons:by});Ml();const Xe=i=>document.getElementById(i),of=document.querySelectorAll(".toolbar button,.settings button,.settings input,.settings select");of.forEach(i=>i.disabled=!0);let Ze,un,Nn=!1,Mr=!1,co=0,Wr=0,lf=0,vu,ci,kr,zr,Vr=!1;const yn=new Set,bn={left:[0,0],right:[0,0]},Qs=[];let sl="Keyboard";function Ki(i){Xe("notice").textContent=i,Xe("notice").hidden=!1,clearTimeout(vu),vu=setTimeout(()=>Xe("notice").hidden=!0,2500)}function Ci(i){Nn=!!i,Wr=0,Xe("pause").innerHTML=Sn(Nn?"play":"pause"),Xe("pause").setAttribute("aria-label",Nn?"Resume":"Pause"),Xe("pause").title=Nn?"Resume":"Pause",Ml()}function Kr(i){if(!Ze||!["expert","assisted","manual","coach","tracking"].includes(i))throw new Error("Invalid flight mode");Ze.mode=i,Xe("mode").value=i,Xe("skill-row").hidden=i!=="coach",Xe("take-control").classList.toggle("controlling",i!=="expert"),Xe("take-control").querySelector("span").textContent=i==="expert"?"Take control":"Autopilot"}function oa(){Ze&&(Ze.reset(),un.smooth=null,Wr=0,Ki("Flight reset"))}function bl(i){if(!["fpv","follow","overview"].includes(i))throw new Error("Invalid camera");un&&(un.mode=i),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("selected",e.dataset.view===i))}function Tl(i){Xe("settings").hidden=!i,Xe("settings-toggle").setAttribute("aria-expanded",String(i))}function uo(i,e=1){return Math.abs(i)<Number(Xe("deadzone").value)/100?0:e*Math.sign(i)*Math.sqrt(Math.abs(i))}function Ty(){let i=[-.3650793650793651+.5*((yn.has("ArrowUp")?1:0)-(yn.has("ArrowDown")?1:0)),.8*((yn.has("KeyD")?1:0)-(yn.has("KeyA")?1:0)),.8*((yn.has("KeyS")?1:0)-(yn.has("KeyW")?1:0)),.8*((yn.has("KeyE")?1:0)-(yn.has("KeyQ")?1:0))],e=[];try{e=Array.from(navigator.getGamepads?.()??[])}catch{}const t=e.find(n=>n?.connected);if(sl=t?t.id:"Keyboard",t){const n=t.axes[Number(Xe("roll-axis").value)]??0,a=t.axes[Number(Xe("yaw-axis").value)]??0;i=[-Math.sign(t.axes[1]??0)*Math.pow(Math.abs(t.axes[1]??0),1.5),uo(n,Xe("invert-roll").checked?-1:1),uo(-(t.axes[3]??0)),uo(a,Xe("invert-yaw").checked?-1:1)]}return(bn.left.some(n=>n!==0)||bn.right.some(n=>n!==0))&&(i=[-1+2/3.15-bn.left[1]*.5,bn.right[0],bn.right[1],bn.left[0]],sl="Touch controls"),i.map(n=>En(n))}for(const i of["left","right"]){let e=function(a){const o=t.getBoundingClientRect();bn[i]=[En((a.clientX-o.left-o.width/2)/(o.width*.35)),En((a.clientY-o.top-o.height/2)/(o.height*.35))],t.firstElementChild.style.transform=`translate(${bn[i][0]*28}px,${bn[i][1]*28}px)`};const t=document.querySelector(`.${i}-stick`);let n=null;t.addEventListener("pointerdown",a=>{n=a.pointerId,t.setPointerCapture(n),e(a)}),t.addEventListener("pointermove",a=>{a.pointerId===n&&e(a)});for(const a of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(a,()=>{n=null,bn[i]=[0,0],t.firstElementChild.style.transform=""})}Xe("pause").onclick=()=>Ci(!Nn);Xe("reset").onclick=oa;Xe("settings-toggle").onclick=()=>Tl(Xe("settings").hidden);Xe("close-settings").onclick=()=>Tl(!1);Xe("take-control").onclick=()=>{Mr&&(Ze.mode==="expert"?(oa(),Kr("assisted"),Ci(!1)):Kr("expert"))};Xe("mode").onchange=i=>Kr(i.target.value);document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>bl(i.dataset.view));Xe("alpha").oninput=i=>{Ze&&(Ze.alpha=Number(i.target.value)/100),Xe("alpha-label").value=i.target.value+"%"};Xe("skill").oninput=i=>{Ze&&(Ze.skill=Number(i.target.value)/100),Xe("skill-label").value=(Number(i.target.value)/100).toFixed(2)};Xe("exposure").oninput=i=>{un&&(un.renderer.toneMappingExposure=Number(i.target.value)/100),Xe("exposure-label").value=i.target.value+"%"};Xe("deadzone").oninput=i=>Xe("deadzone-label").value=i.target.value+"%";Xe("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Ki("Full screen is unavailable in this browser")}};Xe("sound").onclick=async()=>{try{ci||(ci=new(window.AudioContext||window.webkitAudioContext),kr=ci.createOscillator(),kr.type="sawtooth",zr=ci.createGain(),zr.gain.value=0,kr.connect(zr),zr.connect(ci.destination),kr.start()),await ci.resume(),Vr=!Vr,Xe("sound").innerHTML=Sn(Vr?"volume-2":"volume-x"),Xe("sound").setAttribute("aria-label",Vr?"Mute rotor audio":"Enable rotor audio"),Xe("sound").title=Xe("sound").getAttribute("aria-label"),Ml()}catch{Ki("Audio is unavailable")}};Xe("export").onclick=()=>{if(!Ze)return;const i=new Blob([JSON.stringify({manifest:Ze.policies.expert.metadata,physics:"MuJoCo 3.13 WASM",state:Ze.snapshot(),rows:Qs},null,2)],{type:"application/json"}),e=URL.createObjectURL(i),t=document.createElement("a");t.href=e,t.download=`ai-coaching-drone-racing-${Date.now()}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)};window.addEventListener("keydown",i=>{["INPUT","SELECT","TEXTAREA"].includes(i.target.tagName)||(yn.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(i.code==="Space"&&Ci(!Nn),i.code==="KeyR"&&oa(),i.code==="KeyC"&&un&&bl(["fpv","follow","overview"][(["fpv","follow","overview"].indexOf(un.mode)+1)%3]),i.code==="Escape"&&Tl(!1)))});window.addEventListener("keyup",i=>yn.delete(i.code));window.addEventListener("blur",()=>{yn.clear(),bn.left=bn.right=[0,0],Mr&&Ci(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(yn.clear(),Mr&&Ci(!0))});window.addEventListener("gamepadconnected",i=>Ki(`Controller connected: ${i.gamepad.id}`));window.addEventListener("gamepaddisconnected",()=>{Mr&&(Kr("expert"),Ki("Controller disconnected. Autopilot active."))});const wy=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${(i%60).toFixed(2).padStart(5,"0")}`;function cf(){Xe("lap").textContent=String(Ze.laps).padStart(2,"0"),Xe("timer").textContent=wy(Ze.lapStart===null?Ze.steps*.02:Ze.steps*.02-Ze.lapStart),Xe("gate").innerHTML=`${String(Ze.gate+1).padStart(2,"0")} <small>/ 12</small>`,Xe("speed").innerHTML=`${Math.hypot(...Ze.data.qvel.subarray(0,3)).toFixed(1)} <small>m/s</small>`,Xe("altitude").innerHTML=`${Ze.position[2].toFixed(1)} <small>m AGL</small>`,Xe("status").textContent=Nn?"PAUSED":Ze.mode==="expert"?"EXPERT ACTIVE":Ze.mode==="manual"?"MANUAL":`${Ze.mode.toUpperCase()} · ${Math.round(Ze.effectiveAlpha*100)}% AI`,Xe("device").textContent=sl,document.querySelectorAll("[data-gate]").forEach(i=>{i.classList.toggle("current",Number(i.dataset.gate)===Ze.gate),i.classList.toggle("passed",Number(i.dataset.gate)<Ze.gate)})}function uf(i){try{for(co&&(Wr+=Nn?0:Math.min((i-co)/1e3,.1)),co=i;Wr>=.02&&!Nn;){const e=Ty(),t=Ze.action(e),n=Ze.step(t);Wr-=.02,Ze.steps%5===0&&(Qs.push({time:Ze.data.time,mode:Ze.mode,position:Ze.position,action:t,human:e,gate:Ze.gate,alpha:Ze.effectiveAlpha}),Qs.length>36e3&&Qs.shift()),n.failed&&(Ki(`${n.cause}. Resetting flight.`),Ze.reset((Ze.gate+11)%12),un.smooth=null)}un.render(),lf++%3===0&&cf(),ci&&(kr.frequency.setTargetAtTime(90+Ze.motors.reduce((e,t)=>e+t,0)/35,ci.currentTime,.08),zr.gain.setTargetAtTime(Vr&&!Nn?.012:0,ci.currentTime,.04))}catch(e){console.error(e),Ci(!0),Ki("Flight paused due to a simulation error.")}requestAnimationFrame(uf)}async function fo(i){const e=await fetch(`/demo/sim/${i}`);if(!e.ok)throw new Error(`Could not load ${i} (${e.status})`);const t=new Uint8Array(await e.arrayBuffer());return t[0]===31&&t[1]===139?P_(t):t}async function Ay(){try{const i=await p_({locateFile:o=>o.endsWith(".wasm")?m_:o});Xe("loading-status").textContent="Loading warehouse and expert";const e=await fo("physics.mjb.gz"),t=JSON.parse(new TextDecoder().decode(await fo("scene.json.gz"))),n=JSON.parse(new TextDecoder().decode(await fo("policies.json.gz")));Ze=new tg(i,e,t,n),un=new My(Xe("viewport"),Ze,t),await Promise.all(un.textureReady),un.render(),Mr=!0,of.forEach(o=>o.disabled=!1),Xe("loading").hidden=!0,requestAnimationFrame(uf),window.flight={snapshot:()=>({...Ze.snapshot(),paused:Nn,view:un.mode,frames:lf,ready:Mr,action:Ze.lastAction,human:Ze.lastHuman}),setPaused:Ci,setMode:Kr,setCamera:bl,reset:oa,step:o=>{if(!Number.isInteger(o)||o<0||o>1e4)throw new Error("Invalid steps");for(let c=0;c<o&&!Ze.step(Ze.action()).failed;c++);return un.render(),cf(),Ze.snapshot()}};const a=document.modelContext;if(a?.registerTool){const o=new AbortController;for(const c of[{name:"get_flight_state",description:"Read current flight state",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>window.flight.snapshot()},{name:"set_flight_paused",description:"Pause or resume the flight",inputSchema:{type:"object",properties:{paused:{type:"boolean"}},required:["paused"],additionalProperties:!1},execute:f=>{if(typeof f.paused!="boolean")throw new Error("paused must be boolean");return Ci(f.paused),window.flight.snapshot()}}])Promise.resolve(a.registerTool(c,{signal:o.signal})).catch(()=>{});window.addEventListener("pagehide",()=>o.abort(),{once:!0})}}catch(i){console.error(i),Xe("loading-status").textContent=i.message,Xe("loading").classList.add("error"),Xe("retry").hidden=!1,Xe("retry").onclick=()=>location.reload()}}Ay();const Ry=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
