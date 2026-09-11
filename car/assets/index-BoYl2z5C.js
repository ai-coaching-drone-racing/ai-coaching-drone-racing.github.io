(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const r0="modulepreload",s0=function(r){return"/car/"+r},Tu={},a0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let d=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");i=d(t.map(h=>{if(h=s0(h),h in Tu)return;Tu[h]=!0;const p=h.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":r0,p||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),p)return new Promise((_,S)=>{m.addEventListener("load",_),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(c){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=c,window.dispatchEvent(l),!l.defaultPrevented)throw c}return i.then(c=>{for(const l of c||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var o0=(async function(r={}){var e,t=r,n=typeof window=="object",i=typeof WorkerGlobalScope<"u",s=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!s&&!i;if(s){const{createRequire:a}=await a0(async()=>{const{createRequire:o}=await Promise.resolve().then(()=>RT);return{createRequire:o}},void 0);var l=a(import.meta.url)}var d="./this.program",h=(a,o)=>{throw o},p=import.meta.url,g="";function m(a){return t.locateFile?t.locateFile(a,g):g+a}var _,S;if(s){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var w=process.versions.node,y=w.split(".").slice(0,3);if(y=y[0]*1e4+y[1]*100+y[2].split("-")[0]*1,y<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+w+")");var x=l("fs");p.startsWith("file:")&&(g=l("path").dirname(l("url").fileURLToPath(p))+"/"),S=o=>{o=V(o)?new URL(o):o;var u=x.readFileSync(o);return P(Buffer.isBuffer(u)),u},_=async(o,u=!0)=>{o=V(o)?new URL(o):o;var f=x.readFileSync(o,u?void 0:"utf8");return P(u?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),h=(o,u)=>{throw process.exitCode=o,u}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||i){try{g=new URL(".",p).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");i&&(S=a=>{var o=new XMLHttpRequest;return o.open("GET",a,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),_=async a=>{if(V(a))return new Promise((u,f)=>{var v=new XMLHttpRequest;v.open("GET",a,!0),v.responseType="arraybuffer",v.onload=()=>{if(v.status==200||v.status==0&&v.response){u(v.response);return}f(v.status)},v.onerror=f,v.send(null)});var o=await fetch(a,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}else throw new Error("environment detection error");var L=console.log.bind(console),I=console.error.bind(console);P(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var D;typeof WebAssembly!="object"&&I("no native wasm support detected");var O=!1;function P(a,o){a||G("Assertion failed"+(o?": "+o:""))}var V=a=>a.startsWith("file://");function A(){var a=xo();P((a&3)==0),a==0&&(a+=4),Ee[a>>2]=34821223,Ee[a+4>>2]=2310721022,Ee[0]=1668509029}function F(){if(!O){var a=xo();a==0&&(a+=4);var o=Ee[a>>2],u=Ee[a+4>>2];(o!=34821223||u!=2310721022)&&G(`Stack overflow! Stack cookie has been overwritten at ${Re(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Re(u)} ${Re(o)}`),Ee[0]!=1668509029&&G("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class k extends Error{}class B extends k{}class Y extends k{constructor(o){super(o),this.excPtr=o;const u=uu(o);this.name=u[0],this.message=u[1]}}(()=>{var a=new Int16Array(1),o=new Int8Array(a.buffer);if(a[0]=25459,o[0]!==115||o[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function J(a){Object.getOwnPropertyDescriptor(t,a)||Object.defineProperty(t,a,{configurable:!0,set(){G(`Attempt to set \`Module.${a}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function K(a){return()=>P(!1,`call to '${a}' via reference taken before Wasm module initialization`)}function ie(a){Object.getOwnPropertyDescriptor(t,a)&&G(`\`Module.${a}\` was supplied but \`${a}\` not included in INCOMING_MODULE_JS_API`)}function Z(a){return a==="FS_createPath"||a==="FS_createDataFile"||a==="FS_createPreloadedFile"||a==="FS_unlink"||a==="addRunDependency"||a==="FS_createLazyFile"||a==="FS_createDevice"||a==="removeRunDependency"}function te(a,o){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,a)&&Object.defineProperty(globalThis,a,{configurable:!0,get(){o()}})}function pe(a,o){te(a,()=>{Ie(`\`${a}\` is not longer defined by emscripten. ${o}`)})}pe("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),pe("asm","Please use wasmExports instead");function _e(a){te(a,()=>{var o=`\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=a;u.startsWith("_")||(u="$"+a),o+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,Z(a)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ie(o)}),Ce(a)}function Ce(a){Object.getOwnPropertyDescriptor(t,a)||Object.defineProperty(t,a,{configurable:!0,get(){var o=`'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Z(a)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),G(o)}})}var Ne,Pe,Je,et,ut,ce,ye,se,Ee,We,je,Rt,ft,_t=!1;function Tt(){var a=Je.buffer;et=new Int8Array(a),ce=new Int16Array(a),ut=new Uint8Array(a),ye=new Uint16Array(a),se=new Int32Array(a),Ee=new Uint32Array(a),We=new Float32Array(a),je=new Float64Array(a),Rt=new BigInt64Array(a),ft=new BigUint64Array(a)}P(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function it(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Te(t.preRun.shift());J("preRun"),ke(W)}function Bt(){P(!_t),_t=!0,F(),!t.noFSInit&&!E.initialized&&E.init(),Qi.__wasm_call_ctors(),E.ignorePermissions=!1}function H(){if(F(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)rt(t.postRun.shift());J("postRun"),ke(Le)}var Dt=0,pt=null,St={},Fe=null;function N(a){Dt++,t.monitorRunDependencies?.(Dt),a?(P(!St[a]),St[a]=1,Fe===null&&typeof setInterval<"u"&&(Fe=setInterval(()=>{if(O){clearInterval(Fe),Fe=null;return}var o=!1;for(var u in St)o||(o=!0,I("still waiting on run dependencies:")),I(`dependency: ${u}`);o&&I("(end of list)")},1e4))):I("warning: run dependency added without ID")}function b(a){if(Dt--,t.monitorRunDependencies?.(Dt),a?(P(St[a]),delete St[a]):I("warning: run dependency removed without ID"),Dt==0&&(Fe!==null&&(clearInterval(Fe),Fe=null),pt)){var o=pt;pt=null,o()}}function G(a){t.onAbort?.(a),a="Aborted("+a+")",I(a),O=!0;var o=new WebAssembly.RuntimeError(a);throw Pe?.(o),o}function ae(a,o){return(...u)=>{P(_t,`native function \`${a}\` called before runtime initialization`);var f=Qi[a];return P(f,`exported native function \`${a}\` not found`),P(u.length<=o,`native function \`${a}\` called with ${u.length} args but expects ${o}`),f(...u)}}var fe;function oe(){return t.locateFile?m("mujoco.wasm"):new URL("/car/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Ue(a){if(a==fe&&D)return new Uint8Array(D);if(S)return S(a);throw"both async and sync fetching of the wasm failed"}async function be(a){if(!D)try{var o=await _(a);return new Uint8Array(o)}catch{}return Ue(a)}async function Ge(a,o){try{var u=await be(a),f=await WebAssembly.instantiate(u,o);return f}catch(v){I(`failed to asynchronously prepare wasm: ${v}`),V(fe)&&I(`warning: Loading from a file URI (${fe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),G(v)}}async function $e(a,o,u){if(!a&&typeof WebAssembly.instantiateStreaming=="function"&&!V(o)&&!s)try{var f=fetch(o,{credentials:"same-origin"}),v=await WebAssembly.instantiateStreaming(f,u);return v}catch(M){I(`wasm streaming compile failed: ${M}`),I("falling back to ArrayBuffer instantiation")}return Ge(o,u)}function xe(){return{env:Mu,wasi_snapshot_preview1:Mu}}async function Me(){function a(T,R){return Qi=T.exports,Je=Qi.memory,P(Je,"memory not found in wasm exports"),Tt(),Js=Qi.__indirect_function_table,P(Js,"table not found in wasm exports"),am(Qi),b("wasm-instantiate"),Qi}N("wasm-instantiate");var o=t;function u(T){return P(t===o,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),o=null,a(T.instance)}var f=xe();if(t.instantiateWasm)return new Promise((T,R)=>{try{t.instantiateWasm(f,(U,q)=>{T(a(U,q))})}catch(U){I(`Module.instantiateWasm callback failed with error: ${U}`),R(U)}});fe??=oe();var v=await $e(D,fe,f),M=u(v);return M}class Oe{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var ke=a=>{for(;a.length>0;)a.shift()(t)},Le=[],rt=a=>Le.push(a),W=[],Te=a=>W.push(a),Se=!0,Re=a=>(P(typeof a=="number"),a>>>=0,"0x"+a.toString(16).padStart(8,"0")),$=a=>gu(a),z=()=>vu(),Ie=a=>{Ie.shown||={},Ie.shown[a]||(Ie.shown[a]=1,s&&(a="warning: "+a),I(a))},Ke=typeof TextDecoder<"u"?new TextDecoder:void 0,Mt=(a,o=0,u=NaN)=>{for(var f=o+u,v=o;a[v]&&!(v>=f);)++v;if(v-o>16&&a.buffer&&Ke)return Ke.decode(a.subarray(o,v));for(var M="";o<v;){var T=a[o++];if(!(T&128)){M+=String.fromCharCode(T);continue}var R=a[o++]&63;if((T&224)==192){M+=String.fromCharCode((T&31)<<6|R);continue}var U=a[o++]&63;if((T&240)==224?T=(T&15)<<12|R<<6|U:((T&248)!=240&&Ie("Invalid UTF-8 leading byte "+Re(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|R<<12|U<<6|a[o++]&63),T<65536)M+=String.fromCharCode(T);else{var q=T-65536;M+=String.fromCharCode(55296|q>>10,56320|q&1023)}}return M},ct=(a,o)=>(P(typeof a=="number",`UTF8ToString expects a number (got ${typeof a})`),a?Mt(ut,a,o):""),Un=(a,o,u,f)=>G(`Assertion failed: ${ct(a)}, at: `+[o?ct(o):"unknown filename",u,f?ct(f):"unknown function"]),qt=[],ji=0,ss=a=>{var o=new Cn(a);return o.get_caught()||(o.set_caught(!0),ji--),o.set_rethrown(!1),qt.push(o),sa(a),Su(a)},io=()=>{if(!qt.length)return 0;var a=qt[qt.length-1];return sa(a.excPtr),a.excPtr},Rn=0,ks=()=>{ge(0,0),P(qt.length>0);var a=qt.pop();yo(a.excPtr),Rn=0};class Cn{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){Ee[this.ptr+4>>2]=o}get_type(){return Ee[this.ptr+4>>2]}set_destructor(o){Ee[this.ptr+8>>2]=o}get_destructor(){return Ee[this.ptr+8>>2]}set_caught(o){o=o?1:0,et[this.ptr+12]=o}get_caught(){return et[this.ptr+12]!=0}set_rethrown(o){o=o?1:0,et[this.ptr+13]=o}get_rethrown(){return et[this.ptr+13]!=0}init(o,u){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(u)}set_adjusted_ptr(o){Ee[this.ptr+16>>2]=o}get_adjusted_ptr(){return Ee[this.ptr+16>>2]}}var Ii=a=>pu(a),yr=a=>{var o=Rn?.excPtr;if(!o)return Ii(0),0;var u=new Cn(o);u.set_adjusted_ptr(o);var f=u.get_type();if(!f)return Ii(0),o;for(var v of a){if(v===0||v===f)break;var M=u.ptr+16;if(yu(v,f,M))return Ii(v),o}return Ii(f),o},Bs=()=>yr([]),Sr=a=>yr([a]),zs=(a,o)=>yr([a,o]),qi=()=>{var a=qt.pop();a||G("no exception to throw");var o=a.excPtr;throw a.get_rethrown()||(qt.push(a),a.set_rethrown(!0),a.set_caught(!1),ji++),Rn=new Y(o),Rn},Vs=a=>{if(a){var o=new Cn(a);qt.push(o),o.set_rethrown(!0),qi()}},Hs=(a,o,u)=>{var f=new Cn(a);throw f.init(o,u),Rn=new Y(a),ji++,Rn},ro=()=>ji,so=a=>{throw Rn||(Rn=new Y(a)),Rn},wt={isAbs:a=>a.charAt(0)==="/",splitPath:a=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(a).slice(1)},normalizeArray:(a,o)=>{for(var u=0,f=a.length-1;f>=0;f--){var v=a[f];v==="."?a.splice(f,1):v===".."?(a.splice(f,1),u++):u&&(a.splice(f,1),u--)}if(o)for(;u;u--)a.unshift("..");return a},normalize:a=>{var o=wt.isAbs(a),u=a.slice(-1)==="/";return a=wt.normalizeArray(a.split("/").filter(f=>!!f),!o).join("/"),!a&&!o&&(a="."),a&&u&&(a+="/"),(o?"/":"")+a},dirname:a=>{var o=wt.splitPath(a),u=o[0],f=o[1];return!u&&!f?".":(f&&(f=f.slice(0,-1)),u+f)},basename:a=>a&&a.match(/([^\/]+|\/)\/*$/)[1],join:(...a)=>wt.normalize(a.join("/")),join2:(a,o)=>wt.normalize(a+"/"+o)},ao=()=>{if(s){var a=l("crypto");return o=>a.randomFillSync(o)}return o=>crypto.getRandomValues(o)},Gs=a=>{(Gs=ao())(a)},Di={resolve:(...a)=>{for(var o="",u=!1,f=a.length-1;f>=-1&&!u;f--){var v=f>=0?a[f]:E.cwd();if(typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";o=v+"/"+o,u=wt.isAbs(v)}return o=wt.normalizeArray(o.split("/").filter(M=>!!M),!u).join("/"),(u?"/":"")+o||"."},relative:(a,o)=>{a=Di.resolve(a).slice(1),o=Di.resolve(o).slice(1);function u(q){for(var ee=0;ee<q.length&&q[ee]==="";ee++);for(var le=q.length-1;le>=0&&q[le]==="";le--);return ee>le?[]:q.slice(ee,le-ee+1)}for(var f=u(a.split("/")),v=u(o.split("/")),M=Math.min(f.length,v.length),T=M,R=0;R<M;R++)if(f[R]!==v[R]){T=R;break}for(var U=[],R=T;R<f.length;R++)U.push("..");return U=U.concat(v.slice(T)),U.join("/")}},C=[],j=a=>{for(var o=0,u=0;u<a.length;++u){var f=a.charCodeAt(u);f<=127?o++:f<=2047?o+=2:f>=55296&&f<=57343?(o+=4,++u):o+=3}return o},re=(a,o,u,f)=>{if(P(typeof a=="string",`stringToUTF8Array expects a string (got ${typeof a})`),!(f>0))return 0;for(var v=u,M=u+f-1,T=0;T<a.length;++T){var R=a.codePointAt(T);if(R<=127){if(u>=M)break;o[u++]=R}else if(R<=2047){if(u+1>=M)break;o[u++]=192|R>>6,o[u++]=128|R&63}else if(R<=65535){if(u+2>=M)break;o[u++]=224|R>>12,o[u++]=128|R>>6&63,o[u++]=128|R&63}else{if(u+3>=M)break;R>1114111&&Ie("Invalid Unicode code point "+Re(R)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),o[u++]=240|R>>18,o[u++]=128|R>>12&63,o[u++]=128|R>>6&63,o[u++]=128|R&63,T++}}return o[u]=0,u-v},ne=(a,o,u)=>{var f=j(a)+1,v=new Array(f),M=re(a,v,0,v.length);return v.length=M,v},Q=()=>{if(!C.length){var a=null;if(s){var o=256,u=Buffer.alloc(o),f=0,v=process.stdin.fd;try{f=x.readSync(v,u,0,o)}catch(M){if(M.toString().includes("EOF"))f=0;else throw M}f>0&&(a=u.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(a=window.prompt("Input: "),a!==null&&(a+=`
`));if(!a)return null;C=ne(a)}return C.shift()},we={ttys:[],init(){},shutdown(){},register(a,o){we.ttys[a]={input:[],output:[],ops:o},E.registerDevice(a,we.stream_ops)},stream_ops:{open(a){var o=we.ttys[a.node.rdev];if(!o)throw new E.ErrnoError(43);a.tty=o,a.seekable=!1},close(a){a.tty.ops.fsync(a.tty)},fsync(a){a.tty.ops.fsync(a.tty)},read(a,o,u,f,v){if(!a.tty||!a.tty.ops.get_char)throw new E.ErrnoError(60);for(var M=0,T=0;T<f;T++){var R;try{R=a.tty.ops.get_char(a.tty)}catch{throw new E.ErrnoError(29)}if(R===void 0&&M===0)throw new E.ErrnoError(6);if(R==null)break;M++,o[u+T]=R}return M&&(a.node.atime=Date.now()),M},write(a,o,u,f,v){if(!a.tty||!a.tty.ops.put_char)throw new E.ErrnoError(60);try{for(var M=0;M<f;M++)a.tty.ops.put_char(a.tty,o[u+M])}catch{throw new E.ErrnoError(29)}return f&&(a.node.mtime=a.node.ctime=Date.now()),M}},default_tty_ops:{get_char(a){return Q()},put_char(a,o){o===null||o===10?(L(Mt(a.output)),a.output=[]):o!=0&&a.output.push(o)},fsync(a){a.output?.length>0&&(L(Mt(a.output)),a.output=[])},ioctl_tcgets(a){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(a,o,u){return 0},ioctl_tiocgwinsz(a){return[24,80]}},default_tty1_ops:{put_char(a,o){o===null||o===10?(I(Mt(a.output)),a.output=[]):o!=0&&a.output.push(o)},fsync(a){a.output?.length>0&&(I(Mt(a.output)),a.output=[])}}},De=a=>{G("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},de={ops_table:null,mount(a){return de.createNode(null,"/",16895,0)},createNode(a,o,u,f){if(E.isBlkdev(u)||E.isFIFO(u))throw new E.ErrnoError(63);de.ops_table||={dir:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,lookup:de.node_ops.lookup,mknod:de.node_ops.mknod,rename:de.node_ops.rename,unlink:de.node_ops.unlink,rmdir:de.node_ops.rmdir,readdir:de.node_ops.readdir,symlink:de.node_ops.symlink},stream:{llseek:de.stream_ops.llseek}},file:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:{llseek:de.stream_ops.llseek,read:de.stream_ops.read,write:de.stream_ops.write,mmap:de.stream_ops.mmap,msync:de.stream_ops.msync}},link:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,readlink:de.node_ops.readlink},stream:{}},chrdev:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:E.chrdev_stream_ops}};var v=E.createNode(a,o,u,f);return E.isDir(v.mode)?(v.node_ops=de.ops_table.dir.node,v.stream_ops=de.ops_table.dir.stream,v.contents={}):E.isFile(v.mode)?(v.node_ops=de.ops_table.file.node,v.stream_ops=de.ops_table.file.stream,v.usedBytes=0,v.contents=null):E.isLink(v.mode)?(v.node_ops=de.ops_table.link.node,v.stream_ops=de.ops_table.link.stream):E.isChrdev(v.mode)&&(v.node_ops=de.ops_table.chrdev.node,v.stream_ops=de.ops_table.chrdev.stream),v.atime=v.mtime=v.ctime=Date.now(),a&&(a.contents[o]=v,a.atime=a.mtime=a.ctime=v.atime),v},getFileDataAsTypedArray(a){return a.contents?a.contents.subarray?a.contents.subarray(0,a.usedBytes):new Uint8Array(a.contents):new Uint8Array(0)},expandFileStorage(a,o){var u=a.contents?a.contents.length:0;if(!(u>=o)){var f=1024*1024;o=Math.max(o,u*(u<f?2:1.125)>>>0),u!=0&&(o=Math.max(o,256));var v=a.contents;a.contents=new Uint8Array(o),a.usedBytes>0&&a.contents.set(v.subarray(0,a.usedBytes),0)}},resizeFileStorage(a,o){if(a.usedBytes!=o)if(o==0)a.contents=null,a.usedBytes=0;else{var u=a.contents;a.contents=new Uint8Array(o),u&&a.contents.set(u.subarray(0,Math.min(o,a.usedBytes))),a.usedBytes=o}},node_ops:{getattr(a){var o={};return o.dev=E.isChrdev(a.mode)?a.id:1,o.ino=a.id,o.mode=a.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=a.rdev,E.isDir(a.mode)?o.size=4096:E.isFile(a.mode)?o.size=a.usedBytes:E.isLink(a.mode)?o.size=a.link.length:o.size=0,o.atime=new Date(a.atime),o.mtime=new Date(a.mtime),o.ctime=new Date(a.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(a,o){for(const u of["mode","atime","mtime","ctime"])o[u]!=null&&(a[u]=o[u]);o.size!==void 0&&de.resizeFileStorage(a,o.size)},lookup(a,o){throw new E.ErrnoError(44)},mknod(a,o,u,f){return de.createNode(a,o,u,f)},rename(a,o,u){var f;try{f=E.lookupNode(o,u)}catch{}if(f){if(E.isDir(a.mode))for(var v in f.contents)throw new E.ErrnoError(55);E.hashRemoveNode(f)}delete a.parent.contents[a.name],o.contents[u]=a,a.name=u,o.ctime=o.mtime=a.parent.ctime=a.parent.mtime=Date.now()},unlink(a,o){delete a.contents[o],a.ctime=a.mtime=Date.now()},rmdir(a,o){var u=E.lookupNode(a,o);for(var f in u.contents)throw new E.ErrnoError(55);delete a.contents[o],a.ctime=a.mtime=Date.now()},readdir(a){return[".","..",...Object.keys(a.contents)]},symlink(a,o,u){var f=de.createNode(a,o,41471,0);return f.link=u,f},readlink(a){if(!E.isLink(a.mode))throw new E.ErrnoError(28);return a.link}},stream_ops:{read(a,o,u,f,v){var M=a.node.contents;if(v>=a.node.usedBytes)return 0;var T=Math.min(a.node.usedBytes-v,f);if(P(T>=0),T>8&&M.subarray)o.set(M.subarray(v,v+T),u);else for(var R=0;R<T;R++)o[u+R]=M[v+R];return T},write(a,o,u,f,v,M){if(P(!(o instanceof ArrayBuffer)),o.buffer===et.buffer&&(M=!1),!f)return 0;var T=a.node;if(T.mtime=T.ctime=Date.now(),o.subarray&&(!T.contents||T.contents.subarray)){if(M)return P(v===0,"canOwn must imply no weird position inside the file"),T.contents=o.subarray(u,u+f),T.usedBytes=f,f;if(T.usedBytes===0&&v===0)return T.contents=o.slice(u,u+f),T.usedBytes=f,f;if(v+f<=T.usedBytes)return T.contents.set(o.subarray(u,u+f),v),f}if(de.expandFileStorage(T,v+f),T.contents.subarray&&o.subarray)T.contents.set(o.subarray(u,u+f),v);else for(var R=0;R<f;R++)T.contents[v+R]=o[u+R];return T.usedBytes=Math.max(T.usedBytes,v+f),f},llseek(a,o,u){var f=o;if(u===1?f+=a.position:u===2&&E.isFile(a.node.mode)&&(f+=a.node.usedBytes),f<0)throw new E.ErrnoError(28);return f},mmap(a,o,u,f,v){if(!E.isFile(a.node.mode))throw new E.ErrnoError(43);var M,T,R=a.node.contents;if(!(v&2)&&R&&R.buffer===et.buffer)T=!1,M=R.byteOffset;else{if(T=!0,M=De(),!M)throw new E.ErrnoError(48);R&&((u>0||u+o<R.length)&&(R.subarray?R=R.subarray(u,u+o):R=Array.prototype.slice.call(R,u,u+o)),et.set(R,M))}return{ptr:M,allocated:T}},msync(a,o,u,f,v){return de.stream_ops.write(a,o,0,f,u,!1),0}}},Be=async a=>{var o=await _(a);return P(o,`Loading data file "${a}" failed (no arrayBuffer).`),new Uint8Array(o)},ze=(...a)=>E.createDataFile(...a),Qe=a=>{for(var o=a;;){if(!St[a])return a;a=o+Math.random()}},tt=[],Ve=(a,o,u,f)=>{typeof Browser<"u"&&Browser.init();var v=!1;return tt.forEach(M=>{v||M.canHandle(o)&&(M.handle(a,o,u,f),v=!0)}),v},bt=(a,o,u,f,v,M,T,R,U,q)=>{var ee=o?Di.resolve(wt.join2(a,o)):a,le=Qe(`cp ${ee}`);function he(ue){function me(Xe){q?.(),R||ze(a,o,Xe,f,v,U),M?.(),b(le)}Ve(ue,ee,me,()=>{T?.(),b(le)})||me(ue)}N(le),typeof u=="string"?Be(u).then(he,T):he(u)},zt=a=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=o[a];if(typeof u>"u")throw new Error(`Unknown file open mode: ${a}`);return u},Nt=(a,o)=>{var u=0;return a&&(u|=365),o&&(u|=146),u},At=a=>ct(fu(a)),Yt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},E={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(a){super(_t?At(a):""),this.errno=a;for(var o in Yt)if(Yt[o]===a){this.code=o;break}}},FSStream:class{shared={};get object(){return this.node}set object(a){this.node=a}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(a){this.shared.flags=a}get position(){return this.shared.position}set position(a){this.shared.position=a}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(a,o,u,f){a||(a=this),this.parent=a,this.mount=a.mount,this.id=E.nextInode++,this.name=o,this.mode=u,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(a){a?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(a){a?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return E.isDir(this.mode)}get isDevice(){return E.isChrdev(this.mode)}},lookupPath(a,o={}){if(!a)throw new E.ErrnoError(44);o.follow_mount??=!0,wt.isAbs(a)||(a=E.cwd()+"/"+a);e:for(var u=0;u<40;u++){for(var f=a.split("/").filter(q=>!!q),v=E.root,M="/",T=0;T<f.length;T++){var R=T===f.length-1;if(R&&o.parent)break;if(f[T]!=="."){if(f[T]===".."){if(M=wt.dirname(M),E.isRoot(v)){a=M+"/"+f.slice(T+1).join("/");continue e}else v=v.parent;continue}M=wt.join2(M,f[T]);try{v=E.lookupNode(v,f[T])}catch(q){if(q?.errno===44&&R&&o.noent_okay)return{path:M};throw q}if(E.isMountpoint(v)&&(!R||o.follow_mount)&&(v=v.mounted.root),E.isLink(v.mode)&&(!R||o.follow)){if(!v.node_ops.readlink)throw new E.ErrnoError(52);var U=v.node_ops.readlink(v);wt.isAbs(U)||(U=wt.dirname(M)+"/"+U),a=U+"/"+f.slice(T+1).join("/");continue e}}}return{path:M,node:v}}throw new E.ErrnoError(32)},getPath(a){for(var o;;){if(E.isRoot(a)){var u=a.mount.mountpoint;return o?u[u.length-1]!=="/"?`${u}/${o}`:u+o:u}o=o?`${a.name}/${o}`:a.name,a=a.parent}},hashName(a,o){for(var u=0,f=0;f<o.length;f++)u=(u<<5)-u+o.charCodeAt(f)|0;return(a+u>>>0)%E.nameTable.length},hashAddNode(a){var o=E.hashName(a.parent.id,a.name);a.name_next=E.nameTable[o],E.nameTable[o]=a},hashRemoveNode(a){var o=E.hashName(a.parent.id,a.name);if(E.nameTable[o]===a)E.nameTable[o]=a.name_next;else for(var u=E.nameTable[o];u;){if(u.name_next===a){u.name_next=a.name_next;break}u=u.name_next}},lookupNode(a,o){var u=E.mayLookup(a);if(u)throw new E.ErrnoError(u);for(var f=E.hashName(a.id,o),v=E.nameTable[f];v;v=v.name_next){var M=v.name;if(v.parent.id===a.id&&M===o)return v}return E.lookup(a,o)},createNode(a,o,u,f){P(typeof a=="object");var v=new E.FSNode(a,o,u,f);return E.hashAddNode(v),v},destroyNode(a){E.hashRemoveNode(a)},isRoot(a){return a===a.parent},isMountpoint(a){return!!a.mounted},isFile(a){return(a&61440)===32768},isDir(a){return(a&61440)===16384},isLink(a){return(a&61440)===40960},isChrdev(a){return(a&61440)===8192},isBlkdev(a){return(a&61440)===24576},isFIFO(a){return(a&61440)===4096},isSocket(a){return(a&49152)===49152},flagsToPermissionString(a){var o=["r","w","rw"][a&3];return a&512&&(o+="w"),o},nodePermissions(a,o){return E.ignorePermissions?0:o.includes("r")&&!(a.mode&292)||o.includes("w")&&!(a.mode&146)||o.includes("x")&&!(a.mode&73)?2:0},mayLookup(a){if(!E.isDir(a.mode))return 54;var o=E.nodePermissions(a,"x");return o||(a.node_ops.lookup?0:2)},mayCreate(a,o){if(!E.isDir(a.mode))return 54;try{var u=E.lookupNode(a,o);return 20}catch{}return E.nodePermissions(a,"wx")},mayDelete(a,o,u){var f;try{f=E.lookupNode(a,o)}catch(M){return M.errno}var v=E.nodePermissions(a,"wx");if(v)return v;if(u){if(!E.isDir(f.mode))return 54;if(E.isRoot(f)||E.getPath(f)===E.cwd())return 10}else if(E.isDir(f.mode))return 31;return 0},mayOpen(a,o){return a?E.isLink(a.mode)?32:E.isDir(a.mode)&&(E.flagsToPermissionString(o)!=="r"||o&576)?31:E.nodePermissions(a,E.flagsToPermissionString(o)):44},checkOpExists(a,o){if(!a)throw new E.ErrnoError(o);return a},MAX_OPEN_FDS:4096,nextfd(){for(var a=0;a<=E.MAX_OPEN_FDS;a++)if(!E.streams[a])return a;throw new E.ErrnoError(33)},getStreamChecked(a){var o=E.getStream(a);if(!o)throw new E.ErrnoError(8);return o},getStream:a=>E.streams[a],createStream(a,o=-1){return P(o>=-1),a=Object.assign(new E.FSStream,a),o==-1&&(o=E.nextfd()),a.fd=o,E.streams[o]=a,a},closeStream(a){E.streams[a]=null},dupStream(a,o=-1){var u=E.createStream(a,o);return u.stream_ops?.dup?.(u),u},doSetAttr(a,o,u){var f=a?.stream_ops.setattr,v=f?a:o;f??=o.node_ops.setattr,E.checkOpExists(f,63),f(v,u)},chrdev_stream_ops:{open(a){var o=E.getDevice(a.node.rdev);a.stream_ops=o.stream_ops,a.stream_ops.open?.(a)},llseek(){throw new E.ErrnoError(70)}},major:a=>a>>8,minor:a=>a&255,makedev:(a,o)=>a<<8|o,registerDevice(a,o){E.devices[a]={stream_ops:o}},getDevice:a=>E.devices[a],getMounts(a){for(var o=[],u=[a];u.length;){var f=u.pop();o.push(f),u.push(...f.mounts)}return o},syncfs(a,o){typeof a=="function"&&(o=a,a=!1),E.syncFSRequests++,E.syncFSRequests>1&&I(`warning: ${E.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=E.getMounts(E.root.mount),f=0;function v(T){return P(E.syncFSRequests>0),E.syncFSRequests--,o(T)}function M(T){if(T)return M.errored?void 0:(M.errored=!0,v(T));++f>=u.length&&v(null)}u.forEach(T=>{if(!T.type.syncfs)return M(null);T.type.syncfs(T,a,M)})},mount(a,o,u){if(typeof a=="string")throw a;var f=u==="/",v=!u,M;if(f&&E.root)throw new E.ErrnoError(10);if(!f&&!v){var T=E.lookupPath(u,{follow_mount:!1});if(u=T.path,M=T.node,E.isMountpoint(M))throw new E.ErrnoError(10);if(!E.isDir(M.mode))throw new E.ErrnoError(54)}var R={type:a,opts:o,mountpoint:u,mounts:[]},U=a.mount(R);return U.mount=R,R.root=U,f?E.root=U:M&&(M.mounted=R,M.mount&&M.mount.mounts.push(R)),U},unmount(a){var o=E.lookupPath(a,{follow_mount:!1});if(!E.isMountpoint(o.node))throw new E.ErrnoError(28);var u=o.node,f=u.mounted,v=E.getMounts(f);Object.keys(E.nameTable).forEach(T=>{for(var R=E.nameTable[T];R;){var U=R.name_next;v.includes(R.mount)&&E.destroyNode(R),R=U}}),u.mounted=null;var M=u.mount.mounts.indexOf(f);P(M!==-1),u.mount.mounts.splice(M,1)},lookup(a,o){return a.node_ops.lookup(a,o)},mknod(a,o,u){var f=E.lookupPath(a,{parent:!0}),v=f.node,M=wt.basename(a);if(!M)throw new E.ErrnoError(28);if(M==="."||M==="..")throw new E.ErrnoError(20);var T=E.mayCreate(v,M);if(T)throw new E.ErrnoError(T);if(!v.node_ops.mknod)throw new E.ErrnoError(63);return v.node_ops.mknod(v,M,o,u)},statfs(a){return E.statfsNode(E.lookupPath(a,{follow:!0}).node)},statfsStream(a){return E.statfsNode(a.node)},statfsNode(a){var o={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:E.nextInode,ffree:E.nextInode-1,fsid:42,flags:2,namelen:255};return a.node_ops.statfs&&Object.assign(o,a.node_ops.statfs(a.mount.opts.root)),o},create(a,o=438){return o&=4095,o|=32768,E.mknod(a,o,0)},mkdir(a,o=511){return o&=1023,o|=16384,E.mknod(a,o,0)},mkdirTree(a,o){var u=a.split("/"),f="";for(var v of u)if(v){(f||wt.isAbs(a))&&(f+="/"),f+=v;try{E.mkdir(f,o)}catch(M){if(M.errno!=20)throw M}}},mkdev(a,o,u){return typeof u>"u"&&(u=o,o=438),o|=8192,E.mknod(a,o,u)},symlink(a,o){if(!Di.resolve(a))throw new E.ErrnoError(44);var u=E.lookupPath(o,{parent:!0}),f=u.node;if(!f)throw new E.ErrnoError(44);var v=wt.basename(o),M=E.mayCreate(f,v);if(M)throw new E.ErrnoError(M);if(!f.node_ops.symlink)throw new E.ErrnoError(63);return f.node_ops.symlink(f,v,a)},rename(a,o){var u=wt.dirname(a),f=wt.dirname(o),v=wt.basename(a),M=wt.basename(o),T,R,U;if(T=E.lookupPath(a,{parent:!0}),R=T.node,T=E.lookupPath(o,{parent:!0}),U=T.node,!R||!U)throw new E.ErrnoError(44);if(R.mount!==U.mount)throw new E.ErrnoError(75);var q=E.lookupNode(R,v),ee=Di.relative(a,f);if(ee.charAt(0)!==".")throw new E.ErrnoError(28);if(ee=Di.relative(o,u),ee.charAt(0)!==".")throw new E.ErrnoError(55);var le;try{le=E.lookupNode(U,M)}catch{}if(q!==le){var he=E.isDir(q.mode),ue=E.mayDelete(R,v,he);if(ue)throw new E.ErrnoError(ue);if(ue=le?E.mayDelete(U,M,he):E.mayCreate(U,M),ue)throw new E.ErrnoError(ue);if(!R.node_ops.rename)throw new E.ErrnoError(63);if(E.isMountpoint(q)||le&&E.isMountpoint(le))throw new E.ErrnoError(10);if(U!==R&&(ue=E.nodePermissions(R,"w"),ue))throw new E.ErrnoError(ue);E.hashRemoveNode(q);try{R.node_ops.rename(q,U,M),q.parent=U}catch(me){throw me}finally{E.hashAddNode(q)}}},rmdir(a){var o=E.lookupPath(a,{parent:!0}),u=o.node,f=wt.basename(a),v=E.lookupNode(u,f),M=E.mayDelete(u,f,!0);if(M)throw new E.ErrnoError(M);if(!u.node_ops.rmdir)throw new E.ErrnoError(63);if(E.isMountpoint(v))throw new E.ErrnoError(10);u.node_ops.rmdir(u,f),E.destroyNode(v)},readdir(a){var o=E.lookupPath(a,{follow:!0}),u=o.node,f=E.checkOpExists(u.node_ops.readdir,54);return f(u)},unlink(a){var o=E.lookupPath(a,{parent:!0}),u=o.node;if(!u)throw new E.ErrnoError(44);var f=wt.basename(a),v=E.lookupNode(u,f),M=E.mayDelete(u,f,!1);if(M)throw new E.ErrnoError(M);if(!u.node_ops.unlink)throw new E.ErrnoError(63);if(E.isMountpoint(v))throw new E.ErrnoError(10);u.node_ops.unlink(u,f),E.destroyNode(v)},readlink(a){var o=E.lookupPath(a),u=o.node;if(!u)throw new E.ErrnoError(44);if(!u.node_ops.readlink)throw new E.ErrnoError(28);return u.node_ops.readlink(u)},stat(a,o){var u=E.lookupPath(a,{follow:!o}),f=u.node,v=E.checkOpExists(f.node_ops.getattr,63);return v(f)},fstat(a){var o=E.getStreamChecked(a),u=o.node,f=o.stream_ops.getattr,v=f?o:u;return f??=u.node_ops.getattr,E.checkOpExists(f,63),f(v)},lstat(a){return E.stat(a,!0)},doChmod(a,o,u,f){E.doSetAttr(a,o,{mode:u&4095|o.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(a,o,u){var f;if(typeof a=="string"){var v=E.lookupPath(a,{follow:!u});f=v.node}else f=a;E.doChmod(null,f,o,u)},lchmod(a,o){E.chmod(a,o,!0)},fchmod(a,o){var u=E.getStreamChecked(a);E.doChmod(u,u.node,o,!1)},doChown(a,o,u){E.doSetAttr(a,o,{timestamp:Date.now(),dontFollow:u})},chown(a,o,u,f){var v;if(typeof a=="string"){var M=E.lookupPath(a,{follow:!f});v=M.node}else v=a;E.doChown(null,v,f)},lchown(a,o,u){E.chown(a,o,u,!0)},fchown(a,o,u){var f=E.getStreamChecked(a);E.doChown(f,f.node,!1)},doTruncate(a,o,u){if(E.isDir(o.mode))throw new E.ErrnoError(31);if(!E.isFile(o.mode))throw new E.ErrnoError(28);var f=E.nodePermissions(o,"w");if(f)throw new E.ErrnoError(f);E.doSetAttr(a,o,{size:u,timestamp:Date.now()})},truncate(a,o){if(o<0)throw new E.ErrnoError(28);var u;if(typeof a=="string"){var f=E.lookupPath(a,{follow:!0});u=f.node}else u=a;E.doTruncate(null,u,o)},ftruncate(a,o){var u=E.getStreamChecked(a);if(o<0||(u.flags&2097155)===0)throw new E.ErrnoError(28);E.doTruncate(u,u.node,o)},utime(a,o,u){var f=E.lookupPath(a,{follow:!0}),v=f.node,M=E.checkOpExists(v.node_ops.setattr,63);M(v,{atime:o,mtime:u})},open(a,o,u=438){if(a==="")throw new E.ErrnoError(44);o=typeof o=="string"?zt(o):o,o&64?u=u&4095|32768:u=0;var f,v;if(typeof a=="object")f=a;else{v=a.endsWith("/");var M=E.lookupPath(a,{follow:!(o&131072),noent_okay:!0});f=M.node,a=M.path}var T=!1;if(o&64)if(f){if(o&128)throw new E.ErrnoError(20)}else{if(v)throw new E.ErrnoError(31);f=E.mknod(a,u|511,0),T=!0}if(!f)throw new E.ErrnoError(44);if(E.isChrdev(f.mode)&&(o&=-513),o&65536&&!E.isDir(f.mode))throw new E.ErrnoError(54);if(!T){var R=E.mayOpen(f,o);if(R)throw new E.ErrnoError(R)}o&512&&!T&&E.truncate(f,0),o&=-131713;var U=E.createStream({node:f,path:E.getPath(f),flags:o,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),T&&E.chmod(f,u&511),t.logReadFiles&&!(o&1)&&(a in E.readFiles||(E.readFiles[a]=1)),U},close(a){if(E.isClosed(a))throw new E.ErrnoError(8);a.getdents&&(a.getdents=null);try{a.stream_ops.close&&a.stream_ops.close(a)}catch(o){throw o}finally{E.closeStream(a.fd)}a.fd=null},isClosed(a){return a.fd===null},llseek(a,o,u){if(E.isClosed(a))throw new E.ErrnoError(8);if(!a.seekable||!a.stream_ops.llseek)throw new E.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new E.ErrnoError(28);return a.position=a.stream_ops.llseek(a,o,u),a.ungotten=[],a.position},read(a,o,u,f,v){if(P(u>=0),f<0||v<0)throw new E.ErrnoError(28);if(E.isClosed(a))throw new E.ErrnoError(8);if((a.flags&2097155)===1)throw new E.ErrnoError(8);if(E.isDir(a.node.mode))throw new E.ErrnoError(31);if(!a.stream_ops.read)throw new E.ErrnoError(28);var M=typeof v<"u";if(!M)v=a.position;else if(!a.seekable)throw new E.ErrnoError(70);var T=a.stream_ops.read(a,o,u,f,v);return M||(a.position+=T),T},write(a,o,u,f,v,M){if(P(u>=0),f<0||v<0)throw new E.ErrnoError(28);if(E.isClosed(a))throw new E.ErrnoError(8);if((a.flags&2097155)===0)throw new E.ErrnoError(8);if(E.isDir(a.node.mode))throw new E.ErrnoError(31);if(!a.stream_ops.write)throw new E.ErrnoError(28);a.seekable&&a.flags&1024&&E.llseek(a,0,2);var T=typeof v<"u";if(!T)v=a.position;else if(!a.seekable)throw new E.ErrnoError(70);var R=a.stream_ops.write(a,o,u,f,v,M);return T||(a.position+=R),R},mmap(a,o,u,f,v){if((f&2)!==0&&(v&2)===0&&(a.flags&2097155)!==2)throw new E.ErrnoError(2);if((a.flags&2097155)===1)throw new E.ErrnoError(2);if(!a.stream_ops.mmap)throw new E.ErrnoError(43);if(!o)throw new E.ErrnoError(28);return a.stream_ops.mmap(a,o,u,f,v)},msync(a,o,u,f,v){return P(u>=0),a.stream_ops.msync?a.stream_ops.msync(a,o,u,f,v):0},ioctl(a,o,u){if(!a.stream_ops.ioctl)throw new E.ErrnoError(59);return a.stream_ops.ioctl(a,o,u)},readFile(a,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var u=E.open(a,o.flags),f=E.stat(a),v=f.size,M=new Uint8Array(v);return E.read(u,M,0,v,0),o.encoding==="utf8"&&(M=Mt(M)),E.close(u),M},writeFile(a,o,u={}){u.flags=u.flags||577;var f=E.open(a,u.flags,u.mode);if(typeof o=="string"&&(o=new Uint8Array(ne(o))),ArrayBuffer.isView(o))E.write(f,o,0,o.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");E.close(f)},cwd:()=>E.currentPath,chdir(a){var o=E.lookupPath(a,{follow:!0});if(o.node===null)throw new E.ErrnoError(44);if(!E.isDir(o.node.mode))throw new E.ErrnoError(54);var u=E.nodePermissions(o.node,"x");if(u)throw new E.ErrnoError(u);E.currentPath=o.path},createDefaultDirectories(){E.mkdir("/tmp"),E.mkdir("/home"),E.mkdir("/home/web_user")},createDefaultDevices(){E.mkdir("/dev"),E.registerDevice(E.makedev(1,3),{read:()=>0,write:(f,v,M,T,R)=>T,llseek:()=>0}),E.mkdev("/dev/null",E.makedev(1,3)),we.register(E.makedev(5,0),we.default_tty_ops),we.register(E.makedev(6,0),we.default_tty1_ops),E.mkdev("/dev/tty",E.makedev(5,0)),E.mkdev("/dev/tty1",E.makedev(6,0));var a=new Uint8Array(1024),o=0,u=()=>(o===0&&(Gs(a),o=a.byteLength),a[--o]);E.createDevice("/dev","random",u),E.createDevice("/dev","urandom",u),E.mkdir("/dev/shm"),E.mkdir("/dev/shm/tmp")},createSpecialDirectories(){E.mkdir("/proc");var a=E.mkdir("/proc/self");E.mkdir("/proc/self/fd"),E.mount({mount(){var o=E.createNode(a,"fd",16895,73);return o.stream_ops={llseek:de.stream_ops.llseek},o.node_ops={lookup(u,f){var v=+f,M=E.getStreamChecked(v),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>M.path},id:v+1};return T.parent=T,T},readdir(){return Array.from(E.streams.entries()).filter(([u,f])=>f).map(([u,f])=>u.toString())}},o}},{},"/proc/self/fd")},createStandardStreams(a,o,u){a?E.createDevice("/dev","stdin",a):E.symlink("/dev/tty","/dev/stdin"),o?E.createDevice("/dev","stdout",null,o):E.symlink("/dev/tty","/dev/stdout"),u?E.createDevice("/dev","stderr",null,u):E.symlink("/dev/tty1","/dev/stderr");var f=E.open("/dev/stdin",0),v=E.open("/dev/stdout",1),M=E.open("/dev/stderr",1);P(f.fd===0,`invalid handle for stdin (${f.fd})`),P(v.fd===1,`invalid handle for stdout (${v.fd})`),P(M.fd===2,`invalid handle for stderr (${M.fd})`)},staticInit(){E.nameTable=new Array(4096),E.mount(de,{},"/"),E.createDefaultDirectories(),E.createDefaultDevices(),E.createSpecialDirectories(),E.filesystems={MEMFS:de}},init(a,o,u){P(!E.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),E.initialized=!0,a??=t.stdin,o??=t.stdout,u??=t.stderr,E.createStandardStreams(a,o,u)},quit(){E.initialized=!1,vo(0);for(var a of E.streams)a&&E.close(a)},findObject(a,o){var u=E.analyzePath(a,o);return u.exists?u.object:null},analyzePath(a,o){try{var u=E.lookupPath(a,{follow:!o});a=u.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=E.lookupPath(a,{parent:!0});f.parentExists=!0,f.parentPath=u.path,f.parentObject=u.node,f.name=wt.basename(a),u=E.lookupPath(a,{follow:!o}),f.exists=!0,f.path=u.path,f.object=u.node,f.name=u.node.name,f.isRoot=u.path==="/"}catch(v){f.error=v.errno}return f},createPath(a,o,u,f){a=typeof a=="string"?a:E.getPath(a);for(var v=o.split("/").reverse();v.length;){var M=v.pop();if(M){var T=wt.join2(a,M);try{E.mkdir(T)}catch(R){if(R.errno!=20)throw R}a=T}}return T},createFile(a,o,u,f,v){var M=wt.join2(typeof a=="string"?a:E.getPath(a),o),T=Nt(f,v);return E.create(M,T)},createDataFile(a,o,u,f,v,M){var T=o;a&&(a=typeof a=="string"?a:E.getPath(a),T=o?wt.join2(a,o):a);var R=Nt(f,v),U=E.create(T,R);if(u){if(typeof u=="string"){for(var q=new Array(u.length),ee=0,le=u.length;ee<le;++ee)q[ee]=u.charCodeAt(ee);u=q}E.chmod(U,R|146);var he=E.open(U,577);E.write(he,u,0,u.length,0,M),E.close(he),E.chmod(U,R)}},createDevice(a,o,u,f){var v=wt.join2(typeof a=="string"?a:E.getPath(a),o),M=Nt(!!u,!!f);E.createDevice.major??=64;var T=E.makedev(E.createDevice.major++,0);return E.registerDevice(T,{open(R){R.seekable=!1},close(R){f?.buffer?.length&&f(10)},read(R,U,q,ee,le){for(var he=0,ue=0;ue<ee;ue++){var me;try{me=u()}catch{throw new E.ErrnoError(29)}if(me===void 0&&he===0)throw new E.ErrnoError(6);if(me==null)break;he++,U[q+ue]=me}return he&&(R.node.atime=Date.now()),he},write(R,U,q,ee,le){for(var he=0;he<ee;he++)try{f(U[q+he])}catch{throw new E.ErrnoError(29)}return ee&&(R.node.mtime=R.node.ctime=Date.now()),he}}),E.mkdev(v,M,T)},forceLoadFile(a){if(a.isDevice||a.isFolder||a.link||a.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{a.contents=S(a.url),a.usedBytes=a.contents.length}catch{throw new E.ErrnoError(29)}},createLazyFile(a,o,u,f,v){class M{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var me=ue%this.chunkSize,Xe=ue/this.chunkSize|0;return this.getter(Xe)[me]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",u,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+u+". Status: "+ue.status);var me=Number(ue.getResponseHeader("Content-length")),Xe,mt=(Xe=ue.getResponseHeader("Accept-Ranges"))&&Xe==="bytes",at=(Xe=ue.getResponseHeader("Content-Encoding"))&&Xe==="gzip",Ut=1024*1024;mt||(Ut=me);var Et=(Jt,gn)=>{if(Jt>gn)throw new Error("invalid range ("+Jt+", "+gn+") or no bytes requested!");if(gn>me-1)throw new Error("only "+me+" bytes available! programmer error!");var Ft=new XMLHttpRequest;if(Ft.open("GET",u,!1),me!==Ut&&Ft.setRequestHeader("Range","bytes="+Jt+"-"+gn),Ft.responseType="arraybuffer",Ft.overrideMimeType&&Ft.overrideMimeType("text/plain; charset=x-user-defined"),Ft.send(null),!(Ft.status>=200&&Ft.status<300||Ft.status===304))throw new Error("Couldn't load "+u+". Status: "+Ft.status);return Ft.response!==void 0?new Uint8Array(Ft.response||[]):ne(Ft.responseText||"")},fn=this;fn.setDataGetter(Jt=>{var gn=Jt*Ut,Ft=(Jt+1)*Ut-1;if(Ft=Math.min(Ft,me-1),typeof fn.chunks[Jt]>"u"&&(fn.chunks[Jt]=Et(gn,Ft)),typeof fn.chunks[Jt]>"u")throw new Error("doXHR failed!");return fn.chunks[Jt]}),(at||!me)&&(Ut=me=1,me=this.getter(0).length,Ut=me,L("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Ut,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!i)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new M,R={isDevice:!1,contents:T}}else var R={isDevice:!1,url:u};var U=E.createFile(a,o,R,f,v);R.contents?U.contents=R.contents:R.url&&(U.contents=null,U.url=R.url),Object.defineProperties(U,{usedBytes:{get:function(){return this.contents.length}}});var q={},ee=Object.keys(U.stream_ops);ee.forEach(he=>{var ue=U.stream_ops[he];q[he]=(...me)=>(E.forceLoadFile(U),ue(...me))});function le(he,ue,me,Xe,mt){var at=he.node.contents;if(mt>=at.length)return 0;var Ut=Math.min(at.length-mt,Xe);if(P(Ut>=0),at.slice)for(var Et=0;Et<Ut;Et++)ue[me+Et]=at[mt+Et];else for(var Et=0;Et<Ut;Et++)ue[me+Et]=at.get(mt+Et);return Ut}return q.read=(he,ue,me,Xe,mt)=>(E.forceLoadFile(U),le(he,ue,me,Xe,mt)),q.mmap=(he,ue,me,Xe,mt)=>{E.forceLoadFile(U);var at=De();if(!at)throw new E.ErrnoError(48);return le(he,et,at,ue,me),{ptr:at,allocated:!0}},U.stream_ops=q,U},absolutePath(){G("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){G("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){G("FS.createLink has been removed; use FS.symlink instead")},joinPath(){G("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){G("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){G("FS.standardizePath has been removed; use PATH.normalize instead")}},ht={DEFAULT_POLLMASK:5,calculateAt(a,o,u){if(wt.isAbs(o))return o;var f;if(a===-100)f=E.cwd();else{var v=ht.getStreamFromFD(a);f=v.path}if(o.length==0){if(!u)throw new E.ErrnoError(44);return f}return f+"/"+o},writeStat(a,o){se[a>>2]=o.dev,se[a+4>>2]=o.mode,Ee[a+8>>2]=o.nlink,se[a+12>>2]=o.uid,se[a+16>>2]=o.gid,se[a+20>>2]=o.rdev,Rt[a+24>>3]=BigInt(o.size),se[a+32>>2]=4096,se[a+36>>2]=o.blocks;var u=o.atime.getTime(),f=o.mtime.getTime(),v=o.ctime.getTime();return Rt[a+40>>3]=BigInt(Math.floor(u/1e3)),Ee[a+48>>2]=u%1e3*1e3*1e3,Rt[a+56>>3]=BigInt(Math.floor(f/1e3)),Ee[a+64>>2]=f%1e3*1e3*1e3,Rt[a+72>>3]=BigInt(Math.floor(v/1e3)),Ee[a+80>>2]=v%1e3*1e3*1e3,Rt[a+88>>3]=BigInt(o.ino),0},writeStatFs(a,o){se[a+4>>2]=o.bsize,se[a+40>>2]=o.bsize,se[a+8>>2]=o.blocks,se[a+12>>2]=o.bfree,se[a+16>>2]=o.bavail,se[a+20>>2]=o.files,se[a+24>>2]=o.ffree,se[a+28>>2]=o.fsid,se[a+44>>2]=o.flags,se[a+36>>2]=o.namelen},doMsync(a,o,u,f,v){if(!E.isFile(o.node.mode))throw new E.ErrnoError(43);if(f&2)return 0;var M=ut.slice(a,a+u);E.msync(o,M,v,u,f)},getStreamFromFD(a){var o=E.getStreamChecked(a);return o},varargs:void 0,getStr(a){var o=ct(a);return o}};function yt(a,o,u){try{var f=ht.getStreamFromFD(a);if(P(!u),f.fd===o)return-28;if(o<0||o>=E.MAX_OPEN_FDS)return-8;var v=E.getStream(o);return v&&E.close(v),E.dupStream(f,o).fd}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}var dn=()=>{P(ht.varargs!=null);var a=se[+ht.varargs>>2];return ht.varargs+=4,a},un=dn;function gi(a,o,u){ht.varargs=u;try{var f=ht.getStreamFromFD(a);switch(o){case 0:{var v=dn();if(v<0)return-28;for(;E.streams[v];)v++;var M;return M=E.dupStream(f,v),M.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var v=dn();return f.flags|=v,0}case 12:{var v=un(),T=0;return ce[v+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(R){if(typeof E>"u"||R.name!=="ErrnoError")throw R;return-R.errno}}function Fi(a,o){try{return ht.writeStat(o,E.fstat(a))}catch(u){if(typeof E>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Ct(a,o,u){ht.varargs=u;try{var f=ht.getStreamFromFD(a);switch(o){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var v=f.tty.ops.ioctl_tcgets(f),M=un();se[M>>2]=v.c_iflag||0,se[M+4>>2]=v.c_oflag||0,se[M+8>>2]=v.c_cflag||0,se[M+12>>2]=v.c_lflag||0;for(var T=0;T<32;T++)et[M+T+17]=v.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var M=un(),R=se[M>>2],U=se[M+4>>2],q=se[M+8>>2],ee=se[M+12>>2],le=[],T=0;T<32;T++)le.push(et[M+T+17]);return f.tty.ops.ioctl_tcsets(f.tty,o,{c_iflag:R,c_oflag:U,c_cflag:q,c_lflag:ee,c_cc:le})}return 0}case 21519:{if(!f.tty)return-59;var M=un();return se[M>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var M=un();return E.ioctl(f,o,M)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var he=f.tty.ops.ioctl_tiocgwinsz(f.tty),M=un();ce[M>>1]=he[0],ce[M+2>>1]=he[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(ue){if(typeof E>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function Kt(a,o){try{return a=ht.getStr(a),ht.writeStat(o,E.lstat(a))}catch(u){if(typeof E>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function jn(a,o,u,f){try{o=ht.getStr(o);var v=f&256,M=f&4096;return f=f&-6401,P(!f,`unknown flags in __syscall_newfstatat: ${f}`),o=ht.calculateAt(a,o,M),ht.writeStat(u,v?E.lstat(o):E.stat(o))}catch(T){if(typeof E>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function Xt(a,o,u,f){ht.varargs=f;try{o=ht.getStr(o),o=ht.calculateAt(a,o);var v=f?dn():0;return E.open(o,u,v).fd}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function qn(a,o){try{return a=ht.getStr(a),ht.writeStat(o,E.stat(a))}catch(u){if(typeof E>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var Ni=()=>G("native code called abort()"),Ht=a=>{for(var o="";;){var u=ut[a++];if(!u)return o;o+=String.fromCharCode(u)}},Mr={},Yi={},Ws={},as=class extends Error{constructor(o){super(o),this.name="BindingError"}},vt=a=>{throw new as(a)};function rf(a,o,u={}){var f=o.name;if(a||vt(`type "${f}" must have a positive integer typeid pointer`),Yi.hasOwnProperty(a)){if(u.ignoreDuplicateRegistrations)return;vt(`Cannot register type '${f}' twice`)}if(Yi[a]=o,delete Ws[a],Mr.hasOwnProperty(a)){var v=Mr[a];delete Mr[a],v.forEach(M=>M())}}function Pn(a,o,u={}){if(o.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return rf(a,o,u)}var kl=(a,o,u)=>{switch(o){case 1:return u?f=>et[f]:f=>ut[f];case 2:return u?f=>ce[f>>1]:f=>ye[f>>1];case 4:return u?f=>se[f>>2]:f=>Ee[f>>2];case 8:return u?f=>Rt[f>>3]:f=>ft[f>>3];default:throw new TypeError(`invalid integer width (${o}): ${a}`)}},Ki=a=>{if(a===null)return"null";var o=typeof a;return o==="object"||o==="array"||o==="function"?a.toString():""+a},Bl=(a,o,u,f)=>{if(o<u||o>f)throw new TypeError(`Passing a number "${Ki(o)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${u}, ${f}]!`)},sf=(a,o,u,f,v)=>{o=Ht(o);const M=f===0n;let T=R=>R;if(M){const R=u*8;T=U=>BigInt.asUintN(R,U),v=T(v)}Pn(a,{name:o,fromWireType:T,toWireType:(R,U)=>{if(typeof U=="number")U=BigInt(U);else if(typeof U!="bigint")throw new TypeError(`Cannot convert "${Ki(U)}" to ${this.name}`);return Bl(o,U,f,v),U},argPackAdvance:Yn,readValueFromPointer:kl(o,u,!M),destructorFunction:null})},Yn=8,af=(a,o,u,f)=>{o=Ht(o),Pn(a,{name:o,fromWireType:function(v){return!!v},toWireType:function(v,M){return M?u:f},argPackAdvance:Yn,readValueFromPointer:function(v){return this.fromWireType(ut[v])},destructorFunction:null})},of=a=>({count:a.count,deleteScheduled:a.deleteScheduled,preservePointerOnDelete:a.preservePointerOnDelete,ptr:a.ptr,ptrType:a.ptrType,smartPtr:a.smartPtr,smartPtrType:a.smartPtrType}),oo=a=>{function o(u){return u.$$.ptrType.registeredClass.name}vt(o(a)+" instance already deleted")},co=!1,zl=a=>{},cf=a=>{a.smartPtr?a.smartPtrType.rawDestructor(a.smartPtr):a.ptrType.registeredClass.rawDestructor(a.ptr)},Vl=a=>{a.count.value-=1;var o=a.count.value===0;o&&cf(a)},Hl=(a,o,u)=>{if(o===u)return a;if(u.baseClass===void 0)return null;var f=Hl(a,o,u.baseClass);return f===null?null:u.downcast(f)},Gl={},lf={},uf=(a,o)=>{for(o===void 0&&vt("ptr should not be undefined");a.baseClass;)o=a.upcast(o),a=a.baseClass;return o},hf=(a,o)=>(o=uf(a,o),lf[o]),df=class extends Error{constructor(o){super(o),this.name="InternalError"}},Xs=a=>{throw new df(a)},$s=(a,o)=>{(!o.ptrType||!o.ptr)&&Xs("makeClassHandle requires ptr and ptrType");var u=!!o.smartPtrType,f=!!o.smartPtr;return u!==f&&Xs("Both smartPtrType and smartPtr must be specified"),o.count={value:1},os(Object.create(a,{$$:{value:o,writable:!0}}))};function Wl(a){var o=this.getPointee(a);if(!o)return this.destructor(a),null;var u=hf(this.registeredClass,o);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=o,u.$$.smartPtr=a,u.clone();var f=u.clone();return this.destructor(a),f}function v(){return this.isSmartPointer?$s(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:o,smartPtrType:this,smartPtr:a}):$s(this.registeredClass.instancePrototype,{ptrType:this,ptr:a})}var M=this.registeredClass.getActualType(o),T=Gl[M];if(!T)return v.call(this);var R;this.isConst?R=T.constPointerType:R=T.pointerType;var U=Hl(o,this.registeredClass,R.registeredClass);return U===null?v.call(this):this.isSmartPointer?$s(R.registeredClass.instancePrototype,{ptrType:R,ptr:U,smartPtrType:this,smartPtr:a}):$s(R.registeredClass.instancePrototype,{ptrType:R,ptr:U})}var os=a=>typeof FinalizationRegistry>"u"?(os=o=>o,a):(co=new FinalizationRegistry(o=>{console.warn(o.leakWarning),Vl(o.$$)}),os=o=>{var u=o.$$,f=!!u.smartPtr;if(f){var v={$$:u},M=u.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${M.name} <${Re(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,Wl),v.leakWarning=T.stack.replace(/^Error: /,""),co.register(o,v,o)}return o},zl=o=>co.unregister(o),os(a)),ff=()=>{let a=js.prototype;Object.assign(a,{isAliasOf(u){if(!(this instanceof js)||!(u instanceof js))return!1;var f=this.$$.ptrType.registeredClass,v=this.$$.ptr;u.$$=u.$$;for(var M=u.$$.ptrType.registeredClass,T=u.$$.ptr;f.baseClass;)v=f.upcast(v),f=f.baseClass;for(;M.baseClass;)T=M.upcast(T),M=M.baseClass;return f===M&&v===T},clone(){if(this.$$.ptr||oo(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=os(Object.create(Object.getPrototypeOf(this),{$$:{value:of(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||oo(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),zl(this),Vl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||oo(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&vt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const o=Symbol.dispose;o&&(a[o]=a.delete)};function js(){}var qs=(a,o)=>Object.defineProperty(o,"name",{value:a}),lo=(a,o,u)=>{if(a[o].overloadTable===void 0){var f=a[o];a[o]=function(...v){return a[o].overloadTable.hasOwnProperty(v.length)||vt(`Function '${u}' called with an invalid number of arguments (${v.length}) - expects one of (${a[o].overloadTable})!`),a[o].overloadTable[v.length].apply(this,v)},a[o].overloadTable=[],a[o].overloadTable[f.argCount]=f}},uo=(a,o,u)=>{t.hasOwnProperty(a)?((u===void 0||t[a].overloadTable!==void 0&&t[a].overloadTable[u]!==void 0)&&vt(`Cannot register public name '${a}' twice`),lo(t,a,a),t[a].overloadTable.hasOwnProperty(u)&&vt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[a].overloadTable[u]=o):(t[a]=o,t[a].argCount=u)},pf=48,mf=57,gf=a=>{P(typeof a=="string"),a=a.replace(/[^a-zA-Z0-9_]/g,"$");var o=a.charCodeAt(0);return o>=pf&&o<=mf?`_${a}`:a};function _f(a,o,u,f,v,M,T,R){this.name=a,this.constructor=o,this.instancePrototype=u,this.rawDestructor=f,this.baseClass=v,this.getActualType=M,this.upcast=T,this.downcast=R,this.pureVirtualFunctions=[]}var Ys=(a,o,u)=>{for(;o!==u;)o.upcast||vt(`Expected null or instance of ${u.name}, got an instance of ${o.name}`),a=o.upcast(a),o=o.baseClass;return a};function vf(a,o){if(o===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;o.$$||vt(`Cannot pass "${Ki(o)}" as a ${this.name}`),o.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=o.$$.ptrType.registeredClass,f=Ys(o.$$.ptr,u,this.registeredClass);return f}function xf(a,o){var u;if(o===null)return this.isReference&&vt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),a!==null&&a.push(this.rawDestructor,u),u):0;(!o||!o.$$)&&vt(`Cannot pass "${Ki(o)}" as a ${this.name}`),o.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&o.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);var f=o.$$.ptrType.registeredClass;if(u=Ys(o.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(o.$$.smartPtr===void 0&&vt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:o.$$.smartPtrType===this?u=o.$$.smartPtr:vt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=o.$$.smartPtr;break;case 2:if(o.$$.smartPtrType===this)u=o.$$.smartPtr;else{var v=o.clone();u=this.rawShare(u,Zt.toHandle(()=>v.delete())),a!==null&&a.push(this.rawDestructor,u)}break;default:vt("Unsupporting sharing policy")}return u}function yf(a,o){if(o===null)return this.isReference&&vt(`null is not a valid ${this.name}`),0;o.$$||vt(`Cannot pass "${Ki(o)}" as a ${this.name}`),o.$$.ptr||vt(`Cannot pass deleted object as a pointer of type ${this.name}`),o.$$.ptrType.isConst&&vt(`Cannot convert argument of type ${o.$$.ptrType.name} to parameter type ${this.name}`);var u=o.$$.ptrType.registeredClass,f=Ys(o.$$.ptr,u,this.registeredClass);return f}function Ks(a){return this.fromWireType(Ee[a>>2])}var Sf=()=>{Object.assign(Zs.prototype,{getPointee(a){return this.rawGetPointee&&(a=this.rawGetPointee(a)),a},destructor(a){this.rawDestructor?.(a)},argPackAdvance:Yn,readValueFromPointer:Ks,fromWireType:Wl})};function Zs(a,o,u,f,v,M,T,R,U,q,ee){this.name=a,this.registeredClass=o,this.isReference=u,this.isConst=f,this.isSmartPointer=v,this.pointeeType=M,this.sharingPolicy=T,this.rawGetPointee=R,this.rawConstructor=U,this.rawShare=q,this.rawDestructor=ee,!v&&o.baseClass===void 0?f?(this.toWireType=vf,this.destructorFunction=null):(this.toWireType=yf,this.destructorFunction=null):this.toWireType=xf}var Xl=(a,o,u)=>{t.hasOwnProperty(a)||Xs("Replacing nonexistent public symbol"),t[a].overloadTable!==void 0&&u!==void 0?t[a].overloadTable[u]=o:(t[a]=o,t[a].argCount=u)},$l=[],Js,ve=a=>{var o=$l[a];return o||($l[a]=o=Js.get(a)),P(Js.get(a)==o,"JavaScript-side Wasm function table mirror is out of date!"),o},Kn=(a,o,u=!1)=>{P(!u,"Async bindings are only supported with JSPI."),a=Ht(a);function f(){var M=ve(o);return M}var v=f();return typeof v!="function"&&vt(`unknown function pointer with signature ${a}: ${o}`),v};class Mf extends Error{}var jl=a=>{var o=du(a),u=Ht(o);return Jn(o),u},Zi=(a,o)=>{var u=[],f={};function v(M){if(!f[M]&&!Yi[M]){if(Ws[M]){Ws[M].forEach(v);return}u.push(M),f[M]=!0}}throw o.forEach(v),new Mf(`${a}: `+u.map(jl).join([", "]))},On=(a,o,u)=>{a.forEach(R=>Ws[R]=o);function f(R){var U=u(R);U.length!==a.length&&Xs("Mismatched type converter count");for(var q=0;q<a.length;++q)Pn(a[q],U[q])}var v=new Array(o.length),M=[],T=0;o.forEach((R,U)=>{Yi.hasOwnProperty(R)?v[U]=Yi[R]:(M.push(R),Mr.hasOwnProperty(R)||(Mr[R]=[]),Mr[R].push(()=>{v[U]=Yi[R],++T,T===M.length&&f(v)}))}),M.length===0&&f(v)},Ef=(a,o,u,f,v,M,T,R,U,q,ee,le,he)=>{ee=Ht(ee),M=Kn(v,M),R&&=Kn(T,R),q&&=Kn(U,q),he=Kn(le,he);var ue=gf(ee);uo(ue,function(){Zi(`Cannot construct ${ee} due to unbound types`,[f])}),On([a,o,u],f?[f]:[],me=>{me=me[0];var Xe,mt;f?(Xe=me.registeredClass,mt=Xe.instancePrototype):mt=js.prototype;var at=qs(ee,function(...Ft){if(Object.getPrototypeOf(this)!==Ut)throw new as(`Use 'new' to construct ${ee}`);if(Et.constructor_body===void 0)throw new as(`${ee} has no accessible constructor`);var er=Et.constructor_body[Ft.length];if(er===void 0)throw new as(`Tried to invoke ctor of ${ee} with invalid number of parameters (${Ft.length}) - expected (${Object.keys(Et.constructor_body).toString()}) parameters instead!`);return er.apply(this,Ft)}),Ut=Object.create(mt,{constructor:{value:at}});at.prototype=Ut;var Et=new _f(ee,at,Ut,he,Xe,M,R,q);Et.baseClass&&(Et.baseClass.__derivedClasses??=[],Et.baseClass.__derivedClasses.push(Et));var fn=new Zs(ee,Et,!0,!1,!1),Jt=new Zs(ee+"*",Et,!1,!1,!1),gn=new Zs(ee+" const*",Et,!1,!0,!1);return Gl[a]={pointerType:Jt,constPointerType:gn},Xl(ue,at),[fn,Jt,gn]})},ho=a=>{for(;a.length;){var o=a.pop(),u=a.pop();u(o)}};function ql(a){for(var o=1;o<a.length;++o)if(a[o]!==null&&a[o].destructorFunction===void 0)return!0;return!1}function bf(a,o,u,f,v){if(a<o||a>u){var M=o==u?o:`${o} to ${u}`;v(`function ${f} called with ${a} arguments, expected ${M}`)}}function Tf(a,o,u,f){var v=ql(a),M=a.length-2,T=[],R=["fn"];o&&R.push("thisWired");for(var U=0;U<M;++U)T.push(`arg${U}`),R.push(`arg${U}Wired`);T=T.join(","),R=R.join(",");var q=`return function (${T}) {
`;q+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,v&&(q+=`var destructors = [];
`);var ee=v?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];o&&(q+=`var thisWired = classParam['toWireType'](${ee}, this);
`);for(var U=0;U<M;++U)q+=`var arg${U}Wired = argType${U}['toWireType'](${ee}, arg${U});
`,le.push(`argType${U}`);if(q+=(u||f?"var rv = ":"")+`invoker(${R});
`,v)q+=`runDestructors(destructors);
`;else for(var U=o?1:2;U<a.length;++U){var he=U===1?"thisWired":"arg"+(U-2)+"Wired";a[U].destructorFunction!==null&&(q+=`${he}_dtor(${he});
`,le.push(`${he}_dtor`))}return u&&(q+=`var ret = retType['fromWireType'](rv);
return ret;
`),q+=`}
`,le.push("checkArgCount","minArgs","maxArgs"),q=`if (arguments.length !== ${le.length}){ throw new Error(humanName + "Expected ${le.length} closure arguments " + arguments.length + " given."); }
${q}`,[le,q]}function wf(a){for(var o=a.length-2,u=a.length-1;u>=2&&a[u].optional;--u)o--;return o}function Qs(a,o,u,f,v,M){var T=o.length;T<2&&vt("argTypes array size mismatch! Must at least get return value and 'this' types!"),P(!M,"Async bindings are only supported with JSPI.");for(var R=o[1]!==null&&u!==null,U=ql(o),q=o[0].name!=="void",ee=T-2,le=wf(o),he=[a,vt,f,v,ho,o[0],o[1]],ue=0;ue<T-2;++ue)he.push(o[ue+2]);if(!U)for(var ue=R?1:2;ue<o.length;++ue)o[ue].destructorFunction!==null&&he.push(o[ue].destructorFunction);he.push(bf,le,ee);let[me,Xe]=Tf(o,R,q,M);var mt=new Function(...me,Xe)(...he);return qs(a,mt)}var ea=(a,o)=>{for(var u=[],f=0;f<a;f++)u.push(Ee[o+f*4>>2]);return u},fo=a=>{a=a.trim();const o=a.indexOf("(");return o===-1?a:(P(a.endsWith(")"),"Parentheses for argument names should match."),a.slice(0,o))},Af=(a,o,u,f,v,M,T,R,U)=>{var q=ea(u,f);o=Ht(o),o=fo(o),M=Kn(v,M,R),On([],[a],ee=>{ee=ee[0];var le=`${ee.name}.${o}`;function he(){Zi(`Cannot call ${le} due to unbound types`,q)}o.startsWith("@@")&&(o=Symbol[o.substring(2)]);var ue=ee.registeredClass.constructor;return ue[o]===void 0?(he.argCount=u-1,ue[o]=he):(lo(ue,o,le),ue[o].overloadTable[u-1]=he),On([],q,me=>{var Xe=[me[0],null].concat(me.slice(1)),mt=Qs(le,Xe,null,M,T,R);if(ue[o].overloadTable===void 0?(mt.argCount=u-1,ue[o]=mt):ue[o].overloadTable[u-1]=mt,ee.registeredClass.__derivedClasses)for(const at of ee.registeredClass.__derivedClasses)at.constructor.hasOwnProperty(o)||(at.constructor[o]=mt);return[]}),[]})},Rf=(a,o,u,f,v,M)=>{P(o>0);var T=ea(o,u);v=Kn(f,v),On([],[a],R=>{R=R[0];var U=`constructor ${R.name}`;if(R.registeredClass.constructor_body===void 0&&(R.registeredClass.constructor_body=[]),R.registeredClass.constructor_body[o-1]!==void 0)throw new as(`Cannot register multiple constructors with identical number of parameters (${o-1}) for class '${R.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return R.registeredClass.constructor_body[o-1]=()=>{Zi(`Cannot construct ${R.name} due to unbound types`,T)},On([],T,q=>(q.splice(1,0,null),R.registeredClass.constructor_body[o-1]=Qs(U,q,null,v,M),[])),[]})},Cf=(a,o,u,f,v,M,T,R,U,q)=>{var ee=ea(u,f);o=Ht(o),o=fo(o),M=Kn(v,M,U),On([],[a],le=>{le=le[0];var he=`${le.name}.${o}`;o.startsWith("@@")&&(o=Symbol[o.substring(2)]),R&&le.registeredClass.pureVirtualFunctions.push(o);function ue(){Zi(`Cannot call ${he} due to unbound types`,ee)}var me=le.registeredClass.instancePrototype,Xe=me[o];return Xe===void 0||Xe.overloadTable===void 0&&Xe.className!==le.name&&Xe.argCount===u-2?(ue.argCount=u-2,ue.className=le.name,me[o]=ue):(lo(me,o,he),me[o].overloadTable[u-2]=ue),On([],ee,mt=>{var at=Qs(he,mt,le,M,T,U);return me[o].overloadTable===void 0?(at.argCount=u-2,me[o]=at):me[o].overloadTable[u-2]=at,[]}),[]})},Yl=(a,o,u)=>(a instanceof Object||vt(`${u} with invalid "this": ${a}`),a instanceof o.registeredClass.constructor||vt(`${u} incompatible with "this" of type ${a.constructor.name}`),a.$$.ptr||vt(`cannot call emscripten binding method ${u} on deleted object`),Ys(a.$$.ptr,a.$$.ptrType.registeredClass,o.registeredClass)),Pf=(a,o,u,f,v,M,T,R,U,q)=>{o=Ht(o),v=Kn(f,v),On([],[a],ee=>{ee=ee[0];var le=`${ee.name}.${o}`,he={get(){Zi(`Cannot access ${le} due to unbound types`,[u,T])},enumerable:!0,configurable:!0};return U?he.set=()=>Zi(`Cannot access ${le} due to unbound types`,[u,T]):he.set=ue=>vt(le+" is a read-only property"),Object.defineProperty(ee.registeredClass.instancePrototype,o,he),On([],U?[u,T]:[u],ue=>{var me=ue[0],Xe={get(){var at=Yl(this,ee,le+" getter");return me.fromWireType(v(M,at))},enumerable:!0};if(U){U=Kn(R,U);var mt=ue[1];Xe.set=function(at){var Ut=Yl(this,ee,le+" setter"),Et=[];U(q,Ut,mt.toWireType(Et,at)),ho(Et)}}return Object.defineProperty(ee.registeredClass.instancePrototype,o,Xe),[]}),[]})},Lf=(a,o,u)=>{a=Ht(a),On([],[o],f=>(f=f[0],t[a]=f.fromWireType(u),[]))},Kl=[],Zn=[0,1,,1,null,1,!0,1,!1,1],po=a=>{a>9&&--Zn[a+1]===0&&(P(Zn[a]!==void 0,"Decref for unallocated handle."),Zn[a]=void 0,Kl.push(a))},Zt={toValue:a=>(a||vt(`Cannot use deleted val. handle = ${a}`),P(a===2||Zn[a]!==void 0&&a%2===0,`invalid handle: ${a}`),Zn[a]),toHandle:a=>{switch(a){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const o=Kl.pop()||Zn.length;return Zn[o]=a,Zn[o+1]=1,o}}}},Zl={name:"emscripten::val",fromWireType:a=>{var o=Zt.toValue(a);return po(a),o},toWireType:(a,o)=>Zt.toHandle(o),argPackAdvance:Yn,readValueFromPointer:Ks,destructorFunction:null},Jl=a=>Pn(a,Zl),If=(a,o,u)=>{switch(o){case 1:return u?function(f){return this.fromWireType(et[f])}:function(f){return this.fromWireType(ut[f])};case 2:return u?function(f){return this.fromWireType(ce[f>>1])}:function(f){return this.fromWireType(ye[f>>1])};case 4:return u?function(f){return this.fromWireType(se[f>>2])}:function(f){return this.fromWireType(Ee[f>>2])};default:throw new TypeError(`invalid integer width (${o}): ${a}`)}},Df=(a,o,u,f)=>{o=Ht(o);function v(){}v.values={},Pn(a,{name:o,constructor:v,fromWireType:function(M){return this.constructor.values[M]},toWireType:(M,T)=>T.value,argPackAdvance:Yn,readValueFromPointer:If(o,u,f),destructorFunction:null}),uo(o,v)},ta=(a,o)=>{var u=Yi[a];return u===void 0&&vt(`${o} has unknown type ${jl(a)}`),u},Ff=(a,o,u)=>{var f=ta(a,"enum");o=Ht(o);var v=f.constructor,M=Object.create(f.constructor.prototype,{value:{value:u},constructor:{value:qs(`${f.name}_${o}`,function(){})}});v.values[u]=M,v[o]=M},Nf=(a,o)=>{switch(o){case 4:return function(u){return this.fromWireType(We[u>>2])};case 8:return function(u){return this.fromWireType(je[u>>3])};default:throw new TypeError(`invalid float width (${o}): ${a}`)}},Uf=(a,o,u)=>{o=Ht(o),Pn(a,{name:o,fromWireType:f=>f,toWireType:(f,v)=>{if(typeof v!="number"&&typeof v!="boolean")throw new TypeError(`Cannot convert ${Ki(v)} to ${this.name}`);return v},argPackAdvance:Yn,readValueFromPointer:Nf(o,u),destructorFunction:null})},Of=(a,o,u,f,v,M,T,R)=>{var U=ea(o,u);a=Ht(a),a=fo(a),v=Kn(f,v,T),uo(a,function(){Zi(`Cannot call ${a} due to unbound types`,U)},o-1),On([],U,q=>{var ee=[q[0],null].concat(q.slice(1));return Xl(a,Qs(a,ee,null,v,M,T),o-1),[]})},kf=(a,o,u,f,v)=>{o=Ht(o);const M=f===0;let T=U=>U;if(M){var R=32-8*u;T=U=>U<<R>>>R,v=T(v)}Pn(a,{name:o,fromWireType:T,toWireType:(U,q)=>{if(typeof q!="number"&&typeof q!="boolean")throw new TypeError(`Cannot convert "${Ki(q)}" to ${o}`);return Bl(o,q,f,v),q},argPackAdvance:Yn,readValueFromPointer:kl(o,u,f!==0),destructorFunction:null})},Bf=(a,o,u)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],v=f[o];function M(T){var R=Ee[T>>2],U=Ee[T+4>>2];return new v(et.buffer,U,R)}u=Ht(u),Pn(a,{name:u,fromWireType:M,argPackAdvance:Yn,readValueFromPointer:M},{ignoreDuplicateRegistrations:!0})},zf=Object.assign({optional:!0},Zl),Vf=(a,o)=>{Pn(a,zf)},Ji=(a,o,u)=>(P(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),re(a,ut,o,u)),Hf=(a,o)=>{o=Ht(o),Pn(a,{name:o,fromWireType(u){for(var f=Ee[u>>2],v=u+4,M,T,R=v,T=0;T<=f;++T){var U=v+T;if(T==f||ut[U]==0){var q=U-R,ee=ct(R,q);M===void 0?M=ee:(M+="\0",M+=ee),R=U+1}}return Jn(u),M},toWireType(u,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var v,M=typeof f=="string";M||ArrayBuffer.isView(f)&&f.BYTES_PER_ELEMENT==1||vt("Cannot pass non-string to std::string"),M?v=j(f):v=f.length;var T=_o(4+v+1),R=T+4;return Ee[T>>2]=v,M?Ji(f,R,v+1):ut.set(f,R),u!==null&&u.push(Jn,T),T},argPackAdvance:Yn,readValueFromPointer:Ks,destructorFunction(u){Jn(u)}})},Ql=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Gf=(a,o)=>{P(a%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=a>>1,f=u+o/2,v=u;!(v>=f)&&ye[v];)++v;if(v-u>16&&Ql)return Ql.decode(ye.subarray(u,v));for(var M="",T=u;!(T>=f);++T){var R=ye[T];if(R==0)break;M+=String.fromCharCode(R)}return M},Wf=(a,o,u)=>{if(P(o%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),P(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<2)return 0;u-=2;for(var f=o,v=u<a.length*2?u/2:a.length,M=0;M<v;++M){var T=a.charCodeAt(M);ce[o>>1]=T,o+=2}return ce[o>>1]=0,o-f},Xf=a=>a.length*2,$f=(a,o)=>{P(a%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",f=0;!(f>=o/4);f++){var v=se[a+f*4>>2];if(!v)break;u+=String.fromCodePoint(v)}return u},jf=(a,o,u)=>{if(P(o%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),P(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<4)return 0;for(var f=o,v=f+u-4,M=0;M<a.length;++M){var T=a.codePointAt(M);if(T>65535&&M++,se[o>>2]=T,o+=4,o+4>v)break}return se[o>>2]=0,o-f},qf=a=>{for(var o=0,u=0;u<a.length;++u){var f=a.codePointAt(u);f>65535&&u++,o+=4}return o},Yf=(a,o,u)=>{u=Ht(u);var f,v,M,T;o===2?(f=Gf,v=Wf,T=Xf,M=R=>ye[R>>1]):o===4&&(f=$f,v=jf,T=qf,M=R=>Ee[R>>2]),Pn(a,{name:u,fromWireType:R=>{for(var U=Ee[R>>2],q,ee=R+4,le=0;le<=U;++le){var he=R+4+le*o;if(le==U||M(he)==0){var ue=he-ee,me=f(ee,ue);q===void 0?q=me:(q+="\0",q+=me),ee=he+o}}return Jn(R),q},toWireType:(R,U)=>{typeof U!="string"&&vt(`Cannot pass non-string to C++ string type ${u}`);var q=T(U),ee=_o(4+q+o);return Ee[ee>>2]=q/o,v(U,ee+4,q+o),R!==null&&R.push(Jn,ee),ee},argPackAdvance:Yn,readValueFromPointer:Ks,destructorFunction(R){Jn(R)}})},Kf=(a,o)=>{Jl(a)},Zf=(a,o)=>{o=Ht(o),Pn(a,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,f)=>{}})},Jf=()=>{throw new B},eu=(a,o,u)=>{var f=[],v=a.toWireType(f,u);return f.length&&(Ee[o>>2]=Zt.toHandle(f)),v},Qf=(a,o,u)=>(a=Zt.toValue(a),o=ta(o,"emval::as"),eu(o,u,a)),na=[],ep=(a,o,u,f)=>(a=na[a],o=Zt.toValue(o),a(null,o,u,f)),tp={},mo=a=>{var o=tp[a];return o===void 0?Ht(a):o},np=(a,o,u,f,v)=>(a=na[a],o=Zt.toValue(o),u=mo(u),a(o,o[u],f,v)),tu=()=>globalThis,ip=a=>a===0?Zt.toHandle(tu()):(a=mo(a),Zt.toHandle(tu()[a])),rp=a=>{var o=na.length;return na.push(a),o},sp=(a,o)=>{for(var u=new Array(a),f=0;f<a;++f)u[f]=ta(Ee[o+f*4>>2],`parameter ${f}`);return u},ap=(a,o,u)=>{var f=sp(a,o),v=f.shift();a--;var M=`return function (obj, func, destructorsRef, args) {
`,T=0,R=[];u===0&&R.push("obj");for(var U=["retType"],q=[v],ee=0;ee<a;++ee)R.push(`arg${ee}`),U.push(`argType${ee}`),q.push(f[ee]),M+=`  var arg${ee} = argType${ee}.readValueFromPointer(args${T?"+"+T:""});
`,T+=f[ee].argPackAdvance;var le=u===1?"new func":"func.call";M+=`  var rv = ${le}(${R.join(", ")});
`,v.isVoid||(U.push("emval_returnValue"),q.push(eu),M+=`  return emval_returnValue(retType, destructorsRef, rv);
`),M+=`};
`;var he=new Function(...U,M)(...q),ue=`methodCaller<(${f.map(me=>me.name).join(", ")}) => ${v.name}>`;return rp(qs(ue,he))},op=(a,o)=>(a=Zt.toValue(a),o=Zt.toValue(o),Zt.toHandle(a[o])),cp=a=>{a>9&&(Zn[a+1]+=1)},lp=a=>(a=Zt.toValue(a),typeof a=="number"),up=a=>(a=Zt.toValue(a),typeof a=="string"),hp=()=>Zt.toHandle([]),dp=a=>Zt.toHandle(mo(a)),fp=a=>{var o=Zt.toValue(a);ho(o),po(a)},pp=(a,o)=>{a=ta(a,"_emval_take_value");var u=a.readValueFromPointer(o);return Zt.toHandle(u)},mp=a=>{throw a=Zt.toValue(a),a},gp=a=>a%4===0&&(a%100!==0||a%400===0),_p=[0,31,60,91,121,152,182,213,244,274,305,335],vp=[0,31,59,90,120,151,181,212,243,273,304,334],nu=a=>{var o=gp(a.getFullYear()),u=o?_p:vp,f=u[a.getMonth()]+a.getDate()-1;return f},xp=9007199254740992,yp=-9007199254740992,iu=a=>a<yp||a>xp?NaN:Number(a);function Sp(a,o){a=iu(a);var u=new Date(a*1e3);se[o>>2]=u.getSeconds(),se[o+4>>2]=u.getMinutes(),se[o+8>>2]=u.getHours(),se[o+12>>2]=u.getDate(),se[o+16>>2]=u.getMonth(),se[o+20>>2]=u.getFullYear()-1900,se[o+24>>2]=u.getDay();var f=nu(u)|0;se[o+28>>2]=f,se[o+36>>2]=-(u.getTimezoneOffset()*60);var v=new Date(u.getFullYear(),0,1),M=new Date(u.getFullYear(),6,1).getTimezoneOffset(),T=v.getTimezoneOffset(),R=(M!=T&&u.getTimezoneOffset()==Math.min(T,M))|0;se[o+32>>2]=R}var Mp=function(a){var o=(()=>{var u=new Date(se[a+20>>2]+1900,se[a+16>>2],se[a+12>>2],se[a+8>>2],se[a+4>>2],se[a>>2],0),f=se[a+32>>2],v=u.getTimezoneOffset(),M=new Date(u.getFullYear(),0,1),T=new Date(u.getFullYear(),6,1).getTimezoneOffset(),R=M.getTimezoneOffset(),U=Math.min(R,T);if(f<0)se[a+32>>2]=+(T!=R&&U==v);else if(f>0!=(U==v)){var q=Math.max(R,T),ee=f>0?U:q;u.setTime(u.getTime()+(ee-v)*6e4)}se[a+24>>2]=u.getDay();var le=nu(u)|0;se[a+28>>2]=le,se[a>>2]=u.getSeconds(),se[a+4>>2]=u.getMinutes(),se[a+8>>2]=u.getHours(),se[a+12>>2]=u.getDate(),se[a+16>>2]=u.getMonth(),se[a+20>>2]=u.getYear();var he=u.getTime();return isNaN(he)?-1:he/1e3})();return BigInt(o)},Ep=(a,o,u,f)=>{var v=new Date().getFullYear(),M=new Date(v,0,1),T=new Date(v,6,1),R=M.getTimezoneOffset(),U=T.getTimezoneOffset(),q=Math.max(R,U);Ee[a>>2]=q*60,se[o>>2]=+(R!=U);var ee=ue=>{var me=ue>=0?"-":"+",Xe=Math.abs(ue),mt=String(Math.floor(Xe/60)).padStart(2,"0"),at=String(Xe%60).padStart(2,"0");return`UTC${me}${mt}${at}`},le=ee(R),he=ee(U);P(le),P(he),P(j(le)<=16,`timezone name truncated to fit in TZNAME_MAX (${le})`),P(j(he)<=16,`timezone name truncated to fit in TZNAME_MAX (${he})`),U<R?(Ji(le,u,17),Ji(he,f,17)):(Ji(le,f,17),Ji(he,u,17))},ru=()=>performance.now(),su=()=>Date.now(),bp=a=>a>=0&&a<=3;function Tp(a,o,u){if(!bp(a))return 28;var f;a===0?f=su():f=ru();var v=Math.round(f*1e3*1e3);return Rt[u>>3]=BigInt(v),0}var ia=[],wp=(a,o)=>{P(Array.isArray(ia)),P(o%16==0),ia.length=0;for(var u;u=ut[a++];){var f=String.fromCharCode(u),v=["d","f","i","p"];v.push("j"),P(v.includes(f),`Invalid character ${u}("${f}") in readEmAsmArgs! Use only [${v}], and do not specify "v" for void return argument.`);var M=u!=105;M&=u!=112,o+=M&&o%8?4:0,ia.push(u==112?Ee[o>>2]:u==106?Rt[o>>3]:u==105?se[o>>2]:je[o>>3]),o+=M?8:4}return ia},Ap=(a,o,u)=>{var f=wp(o,u);return P(hu.hasOwnProperty(a),`No EM_ASM constant found at address ${a}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),hu[a](...f)},Rp=(a,o,u)=>Ap(a,o,u),au=()=>2147483648,Cp=()=>au(),Pp=(a,o)=>(P(o,"alignment argument is required"),Math.ceil(a/o)*o),Lp=a=>{var o=Je.buffer,u=(a-o.byteLength+65535)/65536|0;try{return Je.grow(u),Tt(),1}catch(f){I(`growMemory: Attempted to grow heap from ${o.byteLength} bytes to ${a} bytes, but got error: ${f}`)}},Ip=a=>{var o=ut.length;a>>>=0,P(a>o);var u=au();if(a>u)return I(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${u} bytes!`),!1;for(var f=1;f<=4;f*=2){var v=o*(1+.2/f);v=Math.min(v,a+100663296);var M=Math.min(u,Pp(Math.max(a,v),65536)),T=Lp(M);if(T)return!0}return I(`Failed to grow the heap from ${o} bytes to ${M} bytes, not enough memory!`),!1},go={},Dp=()=>d||"./this.program",cs=()=>{if(!cs.strings){var a=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:a,_:Dp()};for(var u in go)go[u]===void 0?delete o[u]:o[u]=go[u];var f=[];for(var u in o)f.push(`${u}=${o[u]}`);cs.strings=f}return cs.strings},Fp=(a,o)=>{var u=0,f=0;for(var v of cs()){var M=o+u;Ee[a+f>>2]=M,u+=Ji(v,M,1/0)+1,f+=4}return 0},Np=(a,o)=>{var u=cs();Ee[a>>2]=u.length;var f=0;for(var v of u)f+=j(v)+1;return Ee[o>>2]=f,0},ou=0,cu=()=>Se||ou>0,Up=a=>{cu()||(t.onExit?.(a),O=!0),h(a,new Oe(a))},Op=(a,o)=>{if(qg(),cu()&&!o){var u=`program exited (with status: ${a}), but keepRuntimeAlive() is set (counter=${ou}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Pe?.(u),I(u)}Up(a)},kp=Op;function Bp(a){try{var o=ht.getStreamFromFD(a);return E.close(o),0}catch(u){if(typeof E>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var zp=(a,o,u,f)=>{for(var v=0,M=0;M<u;M++){var T=Ee[o>>2],R=Ee[o+4>>2];o+=8;var U=E.read(a,et,T,R,f);if(U<0)return-1;if(v+=U,U<R)break}return v};function Vp(a,o,u,f){try{var v=ht.getStreamFromFD(a),M=zp(v,o,u);return Ee[f>>2]=M,0}catch(T){if(typeof E>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function Hp(a,o,u,f){o=iu(o);try{if(isNaN(o))return 61;var v=ht.getStreamFromFD(a);return E.llseek(v,o,u),Rt[f>>3]=BigInt(v.position),v.getdents&&o===0&&u===0&&(v.getdents=null),0}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var Gp=(a,o,u,f)=>{for(var v=0,M=0;M<u;M++){var T=Ee[o>>2],R=Ee[o+4>>2];o+=8;var U=E.write(a,et,T,R,f);if(U<0)return-1;if(v+=U,U<R)break}return v};function Wp(a,o,u,f){try{var v=ht.getStreamFromFD(a),M=Gp(v,o,u);return Ee[f>>2]=M,0}catch(T){if(typeof E>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var Xp=a=>a,$p=a=>{var o=t["_"+a];return P(o,"Cannot call unknown function "+a+", make sure it is exported"),o},jp=(a,o)=>{P(a.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),et.set(a,o)},ra=a=>_u(a),qp=a=>{var o=j(a)+1,u=ra(o);return Ji(a,u,o),u},lu=(a,o,u,f,v)=>{var M={string:me=>{var Xe=0;return me!=null&&me!==0&&(Xe=qp(me)),Xe},array:me=>{var Xe=ra(me.length);return jp(me,Xe),Xe}};function T(me){return o==="string"?ct(me):o==="boolean"?!!me:me}var R=$p(a),U=[],q=0;if(P(o!=="array",'Return type should not be "array".'),f)for(var ee=0;ee<f.length;ee++){var le=M[u[ee]];le?(q===0&&(q=z()),U[ee]=le(f[ee])):U[ee]=f[ee]}var he=R(...U);function ue(me){return q!==0&&$(q),T(me)}return he=ue(he),he},Yp=(a,o,u,f)=>(...v)=>lu(a,o,u,v),Kp=(...a)=>E.createPath(...a),Zp=(...a)=>E.unlink(...a),Jp=(...a)=>E.createLazyFile(...a),Qp=(...a)=>E.createDevice(...a),em=a=>sa(a),tm=a=>yo(a),nm=a=>{var o=z(),u=ra(4),f=ra(4);xu(a,u,f);var v=Ee[u>>2],M=Ee[f>>2],T=ct(v);Jn(v);var R;return M&&(R=ct(M),Jn(M)),$(o),[T,R]},uu=a=>nm(a);E.createPreloadedFile=bt,E.staticInit(),ff(),Sf(),P(Zn.length===10),t.noExitRuntime&&(Se=t.noExitRuntime),t.preloadPlugins&&(tt=t.preloadPlugins),t.print&&(L=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(D=t.wasmBinary),sm(),t.arguments&&t.arguments,t.thisProgram&&(d=t.thisProgram),P(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),P(typeof t.read>"u","Module.read option was removed"),P(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),P(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),P(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),P(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),P(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),P(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),P(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),P(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=N,t.removeRunDependency=b,t.ccall=lu,t.cwrap=Yp,t.FS_createPreloadedFile=bt,t.FS_unlink=Zp,t.FS_createPath=Kp,t.FS_createDevice=Qp,t.FS=E,t.FS_createDataFile=ze,t.FS_createLazyFile=Jp,t.MEMFS=de;var im=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];im.forEach(_e);var rm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];rm.forEach(Ce),t.incrementExceptionRefcount=em,t.decrementExceptionRefcount=tm,t.getExceptionMessage=uu;function sm(){ie("fetchSettings")}var hu={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(a){Object.defineProperty(t,a,{get:function(){return t["get_"+a]()},set:function(o){},enumerable:!0,configurable:!0})})}},du=K("___getTypeName"),_o=K("_malloc"),vo=K("_fflush"),Jn=K("_free"),xo=K("_emscripten_stack_get_end"),fu=K("_strerror"),ge=K("_setThrew"),pu=K("__emscripten_tempret_set"),mu=K("_emscripten_stack_init"),gu=K("__emscripten_stack_restore"),_u=K("__emscripten_stack_alloc"),vu=K("_emscripten_stack_get_current"),yo=K("___cxa_decrement_exception_refcount"),sa=K("___cxa_increment_exception_refcount"),xu=K("___get_exception_message"),yu=K("___cxa_can_catch"),Su=K("___cxa_get_exception_ptr");function am(a){du=ae("__getTypeName",1),_o=ae("malloc",1),vo=ae("fflush",1),Jn=ae("free",1),xo=a.emscripten_stack_get_end,a.emscripten_stack_get_base,fu=ae("strerror",1),ge=ae("setThrew",2),pu=ae("_emscripten_tempret_set",1),mu=a.emscripten_stack_init,a.emscripten_stack_get_free,gu=a._emscripten_stack_restore,_u=a._emscripten_stack_alloc,vu=a.emscripten_stack_get_current,yo=ae("__cxa_decrement_exception_refcount",1),sa=ae("__cxa_increment_exception_refcount",1),xu=ae("__get_exception_message",3),yu=ae("__cxa_can_catch",3),Su=ae("__cxa_get_exception_ptr",1)}var Mu={__assert_fail:Un,__cxa_begin_catch:ss,__cxa_current_primary_exception:io,__cxa_end_catch:ks,__cxa_find_matching_catch_2:Bs,__cxa_find_matching_catch_3:Sr,__cxa_find_matching_catch_4:zs,__cxa_rethrow:qi,__cxa_rethrow_primary_exception:Vs,__cxa_throw:Hs,__cxa_uncaught_exceptions:ro,__resumeException:so,__syscall_dup3:yt,__syscall_fcntl64:gi,__syscall_fstat64:Fi,__syscall_ioctl:Ct,__syscall_lstat64:Kt,__syscall_newfstatat:jn,__syscall_openat:Xt,__syscall_stat64:qn,_abort_js:Ni,_embind_register_bigint:sf,_embind_register_bool:af,_embind_register_class:Ef,_embind_register_class_class_function:Af,_embind_register_class_constructor:Rf,_embind_register_class_function:Cf,_embind_register_class_property:Pf,_embind_register_constant:Lf,_embind_register_emval:Jl,_embind_register_enum:Df,_embind_register_enum_value:Ff,_embind_register_float:Uf,_embind_register_function:Of,_embind_register_integer:kf,_embind_register_memory_view:Bf,_embind_register_optional:Vf,_embind_register_std_string:Hf,_embind_register_std_wstring:Yf,_embind_register_user_type:Kf,_embind_register_void:Zf,_emscripten_throw_longjmp:Jf,_emval_as:Qf,_emval_call:ep,_emval_call_method:np,_emval_decref:po,_emval_get_global:ip,_emval_get_method_caller:ap,_emval_get_property:op,_emval_incref:cp,_emval_is_number:lp,_emval_is_string:up,_emval_new_array:hp,_emval_new_cstring:dp,_emval_run_destructors:fp,_emval_take_value:pp,_emval_throw:mp,_localtime_js:Sp,_mktime_js:Mp,_tzset_js:Ep,clock_time_get:Tp,emscripten_asm_const_int:Rp,emscripten_date_now:su,emscripten_get_heap_max:Cp,emscripten_get_now:ru,emscripten_resize_heap:Ip,environ_get:Fp,environ_sizes_get:Np,exit:kp,fd_close:Bp,fd_read:Vp,fd_seek:Hp,fd_write:Wp,invoke_ddd:Dg,invoke_dddi:Km,invoke_dddidi:Zm,invoke_ddidi:Ym,invoke_di:Jm,invoke_dii:zm,invoke_diii:ym,invoke_diiii:qm,invoke_diiiidd:$m,invoke_diiiidi:Em,invoke_diiiii:mm,invoke_diiiiii:Cm,invoke_diiiiiii:Qm,invoke_diiiiiiiii:Am,invoke_diiiiiiiiiiii:Rm,invoke_fiii:Wg,invoke_i:gm,invoke_id:Rg,invoke_ii:lm,invoke_iid:lg,invoke_iidddd:kg,invoke_iidiii:Om,invoke_iidiiid:Nm,invoke_iidiiiiidi:km,invoke_iif:Og,invoke_iii:om,invoke_iiid:Bm,invoke_iiididdddddd:Um,invoke_iiidiiiiiiii:Fm,invoke_iiii:dm,invoke_iiiidddiiiii:tg,invoke_iiiii:xm,invoke_iiiiid:xg,invoke_iiiiii:pg,invoke_iiiiiii:hg,invoke_iiiiiiii:cg,invoke_iiiiiiiidd:yg,invoke_iiiiiiiii:Xm,invoke_iiiiiiiiii:dg,invoke_iiiiiiiiiidddiiiiiiiii:Dm,invoke_iiiiiiiiiii:Gg,invoke_iiiiiiiiiiii:Xg,invoke_iiiiiiiiiiiii:Ag,invoke_iiij:fg,invoke_iiji:vg,invoke_j:Vg,invoke_ji:wg,invoke_jiiii:mg,invoke_jij:Tg,invoke_v:hm,invoke_vi:um,invoke_vid:ug,invoke_viddd:gg,invoke_vidddd:_g,invoke_vidi:jm,invoke_vidiii:Lm,invoke_vii:pm,invoke_viid:Gm,invoke_viiddi:bg,invoke_viiddidi:Eg,invoke_viiddii:eg,invoke_viidi:Hm,invoke_viidii:Mm,invoke_viidiii:ag,invoke_viidiiid:rg,invoke_viidiiiii:Im,invoke_viidiiiiidi:og,invoke_viidiiiiiiii:Pm,invoke_viii:cm,invoke_viiid:Tm,invoke_viiidd:Mg,invoke_viiidi:Vm,invoke_viiididdddddd:sg,invoke_viiidiiiiiiii:ig,invoke_viiii:vm,invoke_viiiiddd:Sg,invoke_viiiidi:Fg,invoke_viiiifi:Ng,invoke_viiiii:fm,invoke_viiiiid:bm,invoke_viiiiii:_m,invoke_viiiiiii:Sm,invoke_viiiiiiii:Wm,invoke_viiiiiiiiii:Lg,invoke_viiiiiiiiiidddiiiiiiiii:ng,invoke_viiiiiiiiiiid:wm,invoke_viiiiiiiiiiiii:Pg,invoke_viiiiiiiiiiiiiii:$g,invoke_viiiiiiiiiiiiiiiiii:Ig,invoke_viiiij:Bg,invoke_viij:zg,invoke_viijii:Hg,invoke_vij:Ug,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:Cg,llvm_eh_typeid_for:Xp},Qi=await Me();function om(a,o,u){var f=z();try{return ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;ge(1,0)}}function cm(a,o,u,f){var v=z();try{ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function lm(a,o){var u=z();try{return ve(a)(o)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function um(a,o){var u=z();try{ve(a)(o)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function hm(a){var o=z();try{ve(a)()}catch(u){if($(o),!(u instanceof k))throw u;ge(1,0)}}function dm(a,o,u,f){var v=z();try{return ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function fm(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function pm(a,o,u){var f=z();try{ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;ge(1,0)}}function mm(a,o,u,f,v,M){var T=z();try{return ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function gm(a){var o=z();try{return ve(a)()}catch(u){if($(o),!(u instanceof k))throw u;ge(1,0)}}function _m(a,o,u,f,v,M,T){var R=z();try{ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function vm(a,o,u,f,v){var M=z();try{ve(a)(o,u,f,v)}catch(T){if($(M),!(T instanceof k))throw T;ge(1,0)}}function xm(a,o,u,f,v){var M=z();try{return ve(a)(o,u,f,v)}catch(T){if($(M),!(T instanceof k))throw T;ge(1,0)}}function ym(a,o,u,f){var v=z();try{return ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Sm(a,o,u,f,v,M,T,R){var U=z();try{ve(a)(o,u,f,v,M,T,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function Mm(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function Em(a,o,u,f,v,M,T){var R=z();try{return ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function bm(a,o,u,f,v,M,T){var R=z();try{ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function Tm(a,o,u,f,v){var M=z();try{ve(a)(o,u,f,v)}catch(T){if($(M),!(T instanceof k))throw T;ge(1,0)}}function wm(a,o,u,f,v,M,T,R,U,q,ee,le,he){var ue=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function Am(a,o,u,f,v,M,T,R,U,q){var ee=z();try{return ve(a)(o,u,f,v,M,T,R,U,q)}catch(le){if($(ee),!(le instanceof k))throw le;ge(1,0)}}function Rm(a,o,u,f,v,M,T,R,U,q,ee,le,he){var ue=z();try{return ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function Cm(a,o,u,f,v,M,T){var R=z();try{return ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function Pm(a,o,u,f,v,M,T,R,U,q,ee,le){var he=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function Lm(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function Im(a,o,u,f,v,M,T,R,U){var q=z();try{ve(a)(o,u,f,v,M,T,R,U)}catch(ee){if($(q),!(ee instanceof k))throw ee;ge(1,0)}}function Dm(a,o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe,mt,at,Ut,Et,fn,Jt){var gn=z();try{return ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe,mt,at,Ut,Et,fn,Jt)}catch(Ft){if($(gn),!(Ft instanceof k))throw Ft;ge(1,0)}}function Fm(a,o,u,f,v,M,T,R,U,q,ee,le){var he=z();try{return ve(a)(o,u,f,v,M,T,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function Nm(a,o,u,f,v,M,T){var R=z();try{return ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function Um(a,o,u,f,v,M,T,R,U,q,ee,le){var he=z();try{return ve(a)(o,u,f,v,M,T,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function Om(a,o,u,f,v,M){var T=z();try{return ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function km(a,o,u,f,v,M,T,R,U,q){var ee=z();try{return ve(a)(o,u,f,v,M,T,R,U,q)}catch(le){if($(ee),!(le instanceof k))throw le;ge(1,0)}}function Bm(a,o,u,f){var v=z();try{return ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function zm(a,o,u){var f=z();try{return ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;ge(1,0)}}function Vm(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function Hm(a,o,u,f,v){var M=z();try{ve(a)(o,u,f,v)}catch(T){if($(M),!(T instanceof k))throw T;ge(1,0)}}function Gm(a,o,u,f){var v=z();try{ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Wm(a,o,u,f,v,M,T,R,U){var q=z();try{ve(a)(o,u,f,v,M,T,R,U)}catch(ee){if($(q),!(ee instanceof k))throw ee;ge(1,0)}}function Xm(a,o,u,f,v,M,T,R,U){var q=z();try{return ve(a)(o,u,f,v,M,T,R,U)}catch(ee){if($(q),!(ee instanceof k))throw ee;ge(1,0)}}function $m(a,o,u,f,v,M,T){var R=z();try{return ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function jm(a,o,u,f){var v=z();try{ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function qm(a,o,u,f,v){var M=z();try{return ve(a)(o,u,f,v)}catch(T){if($(M),!(T instanceof k))throw T;ge(1,0)}}function Ym(a,o,u,f,v){var M=z();try{return ve(a)(o,u,f,v)}catch(T){if($(M),!(T instanceof k))throw T;ge(1,0)}}function Km(a,o,u,f){var v=z();try{return ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Zm(a,o,u,f,v,M){var T=z();try{return ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function Jm(a,o){var u=z();try{return ve(a)(o)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function Qm(a,o,u,f,v,M,T,R){var U=z();try{return ve(a)(o,u,f,v,M,T,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function eg(a,o,u,f,v,M,T){var R=z();try{ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function tg(a,o,u,f,v,M,T,R,U,q,ee,le){var he=z();try{return ve(a)(o,u,f,v,M,T,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function ng(a,o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe,mt,at,Ut,Et,fn,Jt,gn){var Ft=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe,mt,at,Ut,Et,fn,Jt,gn)}catch(er){if($(Ft),!(er instanceof k))throw er;ge(1,0)}}function ig(a,o,u,f,v,M,T,R,U,q,ee,le,he){var ue=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function rg(a,o,u,f,v,M,T,R){var U=z();try{ve(a)(o,u,f,v,M,T,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function sg(a,o,u,f,v,M,T,R,U,q,ee,le,he){var ue=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function ag(a,o,u,f,v,M,T){var R=z();try{ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function og(a,o,u,f,v,M,T,R,U,q,ee){var le=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee)}catch(he){if($(le),!(he instanceof k))throw he;ge(1,0)}}function cg(a,o,u,f,v,M,T,R){var U=z();try{return ve(a)(o,u,f,v,M,T,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function lg(a,o,u){var f=z();try{return ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;ge(1,0)}}function ug(a,o,u){var f=z();try{ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;ge(1,0)}}function hg(a,o,u,f,v,M,T){var R=z();try{return ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function dg(a,o,u,f,v,M,T,R,U,q){var ee=z();try{return ve(a)(o,u,f,v,M,T,R,U,q)}catch(le){if($(ee),!(le instanceof k))throw le;ge(1,0)}}function fg(a,o,u,f){var v=z();try{return ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function pg(a,o,u,f,v,M){var T=z();try{return ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function mg(a,o,u,f,v){var M=z();try{return ve(a)(o,u,f,v)}catch(T){if($(M),!(T instanceof k))throw T;return ge(1,0),0n}}function gg(a,o,u,f,v){var M=z();try{ve(a)(o,u,f,v)}catch(T){if($(M),!(T instanceof k))throw T;ge(1,0)}}function _g(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function vg(a,o,u,f){var v=z();try{return ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function xg(a,o,u,f,v,M){var T=z();try{return ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function yg(a,o,u,f,v,M,T,R,U,q){var ee=z();try{return ve(a)(o,u,f,v,M,T,R,U,q)}catch(le){if($(ee),!(le instanceof k))throw le;ge(1,0)}}function Sg(a,o,u,f,v,M,T,R){var U=z();try{ve(a)(o,u,f,v,M,T,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function Mg(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function Eg(a,o,u,f,v,M,T,R){var U=z();try{ve(a)(o,u,f,v,M,T,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function bg(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function Tg(a,o,u){var f=z();try{return ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;return ge(1,0),0n}}function wg(a,o){var u=z();try{return ve(a)(o)}catch(f){if($(u),!(f instanceof k))throw f;return ge(1,0),0n}}function Ag(a,o,u,f,v,M,T,R,U,q,ee,le,he){var ue=z();try{return ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function Rg(a,o){var u=z();try{return ve(a)(o)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function Cg(a,o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe,mt,at,Ut,Et,fn,Jt,gn,Ft,er,Kg,Zg,Jg,Qg,e_,t_,n_,i_,r_,s_,a_,o_,c_,l_,u_,h_,d_,f_,p_,m_,g_,__,v_,x_,y_,S_,M_,E_,b_,T_,w_,A_,R_,C_,P_,L_,I_,D_,F_,N_,U_,O_,k_,B_,z_,V_,H_,G_,W_,X_,$_,j_,q_,Y_,K_,Z_,J_,Q_,e0,t0,n0){var i0=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe,mt,at,Ut,Et,fn,Jt,gn,Ft,er,Kg,Zg,Jg,Qg,e_,t_,n_,i_,r_,s_,a_,o_,c_,l_,u_,h_,d_,f_,p_,m_,g_,__,v_,x_,y_,S_,M_,E_,b_,T_,w_,A_,R_,C_,P_,L_,I_,D_,F_,N_,U_,O_,k_,B_,z_,V_,H_,G_,W_,X_,$_,j_,q_,Y_,K_,Z_,J_,Q_,e0,t0,n0)}catch(bu){if($(i0),!(bu instanceof k))throw bu;ge(1,0)}}function Pg(a,o,u,f,v,M,T,R,U,q,ee,le,he,ue){var me=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he,ue)}catch(Xe){if($(me),!(Xe instanceof k))throw Xe;ge(1,0)}}function Lg(a,o,u,f,v,M,T,R,U,q,ee){var le=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee)}catch(he){if($(le),!(he instanceof k))throw he;ge(1,0)}}function Ig(a,o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe,mt,at,Ut){var Et=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe,mt,at,Ut)}catch(fn){if($(Et),!(fn instanceof k))throw fn;ge(1,0)}}function Dg(a,o,u){var f=z();try{return ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;ge(1,0)}}function Fg(a,o,u,f,v,M,T){var R=z();try{ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function Ng(a,o,u,f,v,M,T){var R=z();try{ve(a)(o,u,f,v,M,T)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function Ug(a,o,u){var f=z();try{ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;ge(1,0)}}function Og(a,o,u){var f=z();try{return ve(a)(o,u)}catch(v){if($(f),!(v instanceof k))throw v;ge(1,0)}}function kg(a,o,u,f,v,M){var T=z();try{return ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function Bg(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function zg(a,o,u,f){var v=z();try{ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Vg(a){var o=z();try{return ve(a)()}catch(u){if($(o),!(u instanceof k))throw u;return ge(1,0),0n}}function Hg(a,o,u,f,v,M){var T=z();try{ve(a)(o,u,f,v,M)}catch(R){if($(T),!(R instanceof k))throw R;ge(1,0)}}function Gg(a,o,u,f,v,M,T,R,U,q,ee){var le=z();try{return ve(a)(o,u,f,v,M,T,R,U,q,ee)}catch(he){if($(le),!(he instanceof k))throw he;ge(1,0)}}function Wg(a,o,u,f){var v=z();try{return ve(a)(o,u,f)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Xg(a,o,u,f,v,M,T,R,U,q,ee,le){var he=z();try{return ve(a)(o,u,f,v,M,T,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function $g(a,o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe){var mt=z();try{ve(a)(o,u,f,v,M,T,R,U,q,ee,le,he,ue,me,Xe)}catch(at){if($(mt),!(at instanceof k))throw at;ge(1,0)}}var Eu;function jg(){mu(),A()}function So(){if(Dt>0){pt=So;return}if(jg(),it(),Dt>0){pt=So;return}function a(){P(!Eu),Eu=!0,t.calledRun=!0,!O&&(Bt(),Ne?.(t),t.onRuntimeInitialized?.(),J("onRuntimeInitialized"),P(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),H())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),a()},1)):a(),F()}function qg(){var a=L,o=I,u=!1;L=I=f=>{u=!0};try{vo(0),["stdout","stderr"].forEach(f=>{var v=E.analyzePath("/dev/"+f);if(v){var M=v.object,T=M.rdev,R=we.ttys[T];R?.output?.length&&(u=!0)}})}catch{}L=a,I=o,u&&Ie("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Yg(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();J("preInit")}Yg(),So(),_t?e=t:e=new Promise((a,o)=>{Ne=a,Pe=o});for(const a of Object.keys(t))a in r||Object.defineProperty(r,a,{configurable:!0,get(){G(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const c0="/car/assets/mujoco-D9UjOFNX.wasm";const nd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const id=([r,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),t?.length&&t.forEach(i=>{const s=id(i);n.appendChild(s)}),n},l0=(r,e={})=>{const n={...nd,...e};return id(["svg",n,r])};const u0=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const h0=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const d0=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const f0=r=>{const e=d0(r);return e.charAt(0).toUpperCase()+e.slice(1)};const p0=r=>Array.from(r.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),wu=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",Au=(r,{nameAttr:e,icons:t,attrs:n})=>{const i=r.getAttribute(e);if(i==null)return;const s=f0(i),c=t[s];if(!c)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);const l=p0(r),d=u0(l)?{}:{"aria-hidden":"true"},h={...nd,"data-lucide":i,...d,...n,...l},p=wu(l),g=wu(n),m=h0("lucide",`lucide-${i}`,...p,...g);m&&Object.assign(h,{class:m});const _=l0(c,h);return r.parentNode?.replaceChild(_,r)};const m0=[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]];const g0=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];const _0=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];const v0=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];const x0=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]];const y0=[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];const S0=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const M0=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const E0=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const b0=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];const T0=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const ll=({icons:r={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:i}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(c=>Au(c,{nameAttr:e,icons:r,attrs:t})),i&&Array.from(n.querySelectorAll("template")).forEach(l=>ll({icons:r,nameAttr:e,attrs:t,root:l.content,inTemplates:i})),e==="data-lucide"){const c=n.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(l=>Au(l,{nameAttr:"icon-name",icons:r,attrs:t})))}};const ul="183",w0=0,Ru=1,A0=2,Na=1,rd=2,xs=3,Ai=0,En=1,wn=2,Ti=0,Vr=1,Cu=2,Pu=3,Lu=4,R0=5,ur=100,C0=101,P0=102,L0=103,I0=104,D0=200,F0=201,N0=202,U0=203,dc=204,fc=205,O0=206,k0=207,B0=208,z0=209,V0=210,H0=211,G0=212,W0=213,X0=214,pc=0,mc=1,gc=2,Xr=3,_c=4,vc=5,xc=6,yc=7,sd=0,$0=1,j0=2,ai=0,ad=1,od=2,cd=3,hl=4,ld=5,ud=6,hd=7,Iu="attached",q0="detached",dd=300,pr=301,$r=302,Mo=303,Eo=304,Ka=306,mr=1e3,ii=1001,Ga=1002,Qt=1003,fd=1004,ys=1005,en=1006,Ua=1007,Ei=1008,An=1009,pd=1010,md=1011,Rs=1012,dl=1013,li=1014,Fn=1015,Ri=1016,fl=1017,pl=1018,Cs=1020,gd=35902,_d=35899,vd=1021,xd=1022,Nn=1023,Ci=1026,fr=1027,ml=1028,gl=1029,jr=1030,_l=1031,vl=1033,Oa=33776,ka=33777,Ba=33778,za=33779,Sc=35840,Mc=35841,Ec=35842,bc=35843,Tc=36196,wc=37492,Ac=37496,Rc=37488,Cc=37489,Pc=37490,Lc=37491,Ic=37808,Dc=37809,Fc=37810,Nc=37811,Uc=37812,Oc=37813,kc=37814,Bc=37815,zc=37816,Vc=37817,Hc=37818,Gc=37819,Wc=37820,Xc=37821,$c=36492,jc=36494,qc=36495,Yc=36283,Kc=36284,Zc=36285,Jc=36286,Ps=2300,Ls=2301,bo=2302,Du=2303,Fu=2400,Nu=2401,Uu=2402,Y0=2500,K0=0,yd=1,Qc=2,Z0=3200,Sd=0,J0=1,Gi="",Vt="srgb",yn="srgb-linear",Wa="linear",Pt="srgb",Er=7680,Ou=519,Q0=512,ev=513,tv=514,xl=515,nv=516,iv=517,yl=518,rv=519,el=35044,ku="300 es",ri=2e3,Is=2001;function sv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function av(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ov(){const r=Ds("canvas");return r.style.display="block",r}const Bu={};function Xa(...r){const e="THREE."+r.shift();console.log(e,...r)}function Md(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function He(...r){r=Md(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ye(...r){r=Md(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function $a(...r){const e=r.join(" ");e in Bu||(Bu[e]=!0,He(...r))}function cv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const lv={[pc]:mc,[gc]:xc,[_c]:yc,[Xr]:vc,[mc]:pc,[xc]:gc,[yc]:_c,[vc]:Xr};class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,c=i.length;s<c;s++)i[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zu=1234567;const Ms=Math.PI/180,qr=180/Math.PI;function Xn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function Sl(r,e){return(r%e+e)%e}function uv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function hv(r,e,t){return r!==e?(t-r)/(e-r):0}function Es(r,e,t){return(1-t)*r+t*e}function dv(r,e,t,n){return Es(r,e,1-Math.exp(-t*n))}function fv(r,e=1){return e-Math.abs(Sl(r,e*2)-e)}function pv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _v(r,e){return r+Math.random()*(e-r)}function vv(r){return r*(.5-Math.random())}function xv(r){r!==void 0&&(zu=r);let e=zu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yv(r){return r*Ms}function Sv(r){return r*qr}function Mv(r){return(r&r-1)===0&&r!==0}function Ev(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function bv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tv(r,e,t,n,i){const s=Math.cos,c=Math.sin,l=s(t/2),d=c(t/2),h=s((e+n)/2),p=c((e+n)/2),g=s((e-n)/2),m=c((e-n)/2),_=s((n-e)/2),S=c((n-e)/2);switch(i){case"XYX":r.set(l*p,d*g,d*m,l*h);break;case"YZY":r.set(d*m,l*p,d*g,l*h);break;case"ZXZ":r.set(d*g,d*m,l*p,l*h);break;case"XZX":r.set(l*p,d*S,d*_,l*h);break;case"YXY":r.set(d*_,l*p,d*S,l*h);break;case"ZYZ":r.set(d*S,d*_,l*p,l*h);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const wv={DEG2RAD:Ms,RAD2DEG:qr,generateUUID:Xn,clamp:lt,euclideanModulo:Sl,mapLinear:uv,inverseLerp:hv,lerp:Es,damp:dv,pingpong:fv,smoothstep:pv,smootherstep:mv,randInt:gv,randFloat:_v,randFloatSpread:vv,seededRandom:xv,degToRad:yv,radToDeg:Sv,isPowerOfTwo:Mv,ceilPowerOfTwo:Ev,floorPowerOfTwo:bv,setQuaternionFromProperEuler:Tv,normalize:Lt,denormalize:Hn};class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,c=this.y-e.y;return this.x=s*n-c*i+e.x,this.y=s*i+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,c,l){let d=n[i+0],h=n[i+1],p=n[i+2],g=n[i+3],m=s[c+0],_=s[c+1],S=s[c+2],w=s[c+3];if(g!==w||d!==m||h!==_||p!==S){let y=d*m+h*_+p*S+g*w;y<0&&(m=-m,_=-_,S=-S,w=-w,y=-y);let x=1-l;if(y<.9995){const L=Math.acos(y),I=Math.sin(L);x=Math.sin(x*L)/I,l=Math.sin(l*L)/I,d=d*x+m*l,h=h*x+_*l,p=p*x+S*l,g=g*x+w*l}else{d=d*x+m*l,h=h*x+_*l,p=p*x+S*l,g=g*x+w*l;const L=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=L,h*=L,p*=L,g*=L}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,i,s,c){const l=n[i],d=n[i+1],h=n[i+2],p=n[i+3],g=s[c],m=s[c+1],_=s[c+2],S=s[c+3];return e[t]=l*S+p*g+d*_-h*m,e[t+1]=d*S+p*m+h*g-l*_,e[t+2]=h*S+p*_+l*m-d*g,e[t+3]=p*S-l*g-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,c=e._order,l=Math.cos,d=Math.sin,h=l(n/2),p=l(i/2),g=l(s/2),m=d(n/2),_=d(i/2),S=d(s/2);switch(c){case"XYZ":this._x=m*p*g+h*_*S,this._y=h*_*g-m*p*S,this._z=h*p*S+m*_*g,this._w=h*p*g-m*_*S;break;case"YXZ":this._x=m*p*g+h*_*S,this._y=h*_*g-m*p*S,this._z=h*p*S-m*_*g,this._w=h*p*g+m*_*S;break;case"ZXY":this._x=m*p*g-h*_*S,this._y=h*_*g+m*p*S,this._z=h*p*S+m*_*g,this._w=h*p*g-m*_*S;break;case"ZYX":this._x=m*p*g-h*_*S,this._y=h*_*g+m*p*S,this._z=h*p*S-m*_*g,this._w=h*p*g+m*_*S;break;case"YZX":this._x=m*p*g+h*_*S,this._y=h*_*g+m*p*S,this._z=h*p*S-m*_*g,this._w=h*p*g-m*_*S;break;case"XZY":this._x=m*p*g-h*_*S,this._y=h*_*g-m*p*S,this._z=h*p*S+m*_*g,this._w=h*p*g+m*_*S;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],c=t[1],l=t[5],d=t[9],h=t[2],p=t[6],g=t[10],m=n+l+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-d)*_,this._y=(s-h)*_,this._z=(c-i)*_}else if(n>l&&n>g){const _=2*Math.sqrt(1+n-l-g);this._w=(p-d)/_,this._x=.25*_,this._y=(i+c)/_,this._z=(s+h)/_}else if(l>g){const _=2*Math.sqrt(1+l-n-g);this._w=(s-h)/_,this._x=(i+c)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+g-n-l);this._w=(c-i)/_,this._x=(s+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,c=e._w,l=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+c*l+i*h-s*d,this._y=i*p+c*d+s*l-n*h,this._z=s*p+c*h+n*d-i*l,this._w=c*p-n*l-i*d-s*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,c=e._w,l=this.dot(e);l<0&&(n=-n,i=-i,s=-s,c=-c,l=-l);let d=1-t;if(l<.9995){const h=Math.acos(l),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+n*t,this._y=this._y*d+i*t,this._z=this._z*d+s*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+i*t,this._z=this._z*d+s*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,c=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*c,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*c,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,c=e.y,l=e.z,d=e.w,h=2*(c*i-l*n),p=2*(l*t-s*i),g=2*(s*n-c*t);return this.x=t+d*h+c*g-l*p,this.y=n+d*p+l*h-s*g,this.z=i+d*g+s*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,c=t.x,l=t.y,d=t.z;return this.x=i*d-s*l,this.y=s*c-n*d,this.z=n*l-i*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new X,Vu=new fi;class st{constructor(e,t,n,i,s,c,l,d,h){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,c,l,d,h)}set(e,t,n,i,s,c,l,d,h){const p=this.elements;return p[0]=e,p[1]=i,p[2]=l,p[3]=t,p[4]=s,p[5]=d,p[6]=n,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,c=n[0],l=n[3],d=n[6],h=n[1],p=n[4],g=n[7],m=n[2],_=n[5],S=n[8],w=i[0],y=i[3],x=i[6],L=i[1],I=i[4],D=i[7],O=i[2],P=i[5],V=i[8];return s[0]=c*w+l*L+d*O,s[3]=c*y+l*I+d*P,s[6]=c*x+l*D+d*V,s[1]=h*w+p*L+g*O,s[4]=h*y+p*I+g*P,s[7]=h*x+p*D+g*V,s[2]=m*w+_*L+S*O,s[5]=m*y+_*I+S*P,s[8]=m*x+_*D+S*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],c=e[4],l=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*l*h-n*s*p+n*l*d+i*s*h-i*c*d}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],c=e[4],l=e[5],d=e[6],h=e[7],p=e[8],g=p*c-l*h,m=l*d-p*s,_=h*s-c*d,S=t*g+n*m+i*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=g*w,e[1]=(i*h-p*n)*w,e[2]=(l*n-i*c)*w,e[3]=m*w,e[4]=(p*t-i*d)*w,e[5]=(i*s-l*t)*w,e[6]=_*w,e[7]=(n*d-h*t)*w,e[8]=(c*t-n*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,c,l){const d=Math.cos(s),h=Math.sin(s);return this.set(n*d,n*h,-n*(d*c+h*l)+c+e,-i*h,i*d,-i*(-h*c+d*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new st,Hu=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Av(){const r={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(i,s,c){return this.enabled===!1||s===c||!s||!c||(this.spaces[s].transfer===Pt&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[s].primaries!==this.spaces[c].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Pt&&(i.r=Hr(i.r),i.g=Hr(i.g),i.b=Hr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,c){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[yn]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:Hu,fromXYZ:Gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),r}const xt=Av();function wi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class Rv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=Ds("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let c=0;c<s.length;c++)s[c]=wi(s[c]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cv=0;class Ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let c=0,l=i.length;c<l;c++)i[c].isDataTexture?s.push(Ao(i[c].image)):s.push(Ao(i[c]))}else s=Ao(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ao(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let Pv=0;const Ro=new X;class nn extends es{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=ii,i=ii,s=en,c=Ei,l=Nn,d=An,h=nn.DEFAULT_ANISOTROPY,p=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Xn(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=c,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=d,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=dd;nn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,i=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*i+c[12]*s,this.y=c[1]*t+c[5]*n+c[9]*i+c[13]*s,this.z=c[2]*t+c[6]*n+c[10]*i+c[14]*s,this.w=c[3]*t+c[7]*n+c[11]*i+c[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const d=e.elements,h=d[0],p=d[4],g=d[8],m=d[1],_=d[5],S=d[9],w=d[2],y=d[6],x=d[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(S-y)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(S+y)<.1&&Math.abs(h+_+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,D=(_+1)/2,O=(x+1)/2,P=(p+m)/4,V=(g+w)/4,A=(S+y)/4;return I>D&&I>O?I<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(I),i=P/n,s=V/n):D>O?D<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(D),n=P/i,s=A/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=V/s,i=A/s),this.set(n,i,s,t),this}let L=Math.sqrt((y-S)*(y-S)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(L)<.001&&(L=1),this.x=(y-S)/L,this.y=(g-w)/L,this.z=(m-p)/L,this.w=Math.acos((h+_+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lv extends es{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new nn(i),c=n.count;for(let l=0;l<c;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ml(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Lv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ed extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Iv extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nt{constructor(e,t,n,i,s,c,l,d,h,p,g,m,_,S,w,y){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,c,l,d,h,p,g,m,_,S,w,y)}set(e,t,n,i,s,c,l,d,h,p,g,m,_,S,w,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=c,x[9]=l,x[13]=d,x[2]=h,x[6]=p,x[10]=g,x[14]=m,x[3]=_,x[7]=S,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),c=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,c=Math.cos(n),l=Math.sin(n),d=Math.cos(i),h=Math.sin(i),p=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const m=c*p,_=c*g,S=l*p,w=l*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=_+S*h,t[5]=m-w*h,t[9]=-l*d,t[2]=w-m*h,t[6]=S+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*p,_=d*g,S=h*p,w=h*g;t[0]=m+w*l,t[4]=S*l-_,t[8]=c*h,t[1]=c*g,t[5]=c*p,t[9]=-l,t[2]=_*l-S,t[6]=w+m*l,t[10]=c*d}else if(e.order==="ZXY"){const m=d*p,_=d*g,S=h*p,w=h*g;t[0]=m-w*l,t[4]=-c*g,t[8]=S+_*l,t[1]=_+S*l,t[5]=c*p,t[9]=w-m*l,t[2]=-c*h,t[6]=l,t[10]=c*d}else if(e.order==="ZYX"){const m=c*p,_=c*g,S=l*p,w=l*g;t[0]=d*p,t[4]=S*h-_,t[8]=m*h+w,t[1]=d*g,t[5]=w*h+m,t[9]=_*h-S,t[2]=-h,t[6]=l*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,S=l*d,w=l*h;t[0]=d*p,t[4]=w-m*g,t[8]=S*g+_,t[1]=g,t[5]=c*p,t[9]=-l*p,t[2]=-h*p,t[6]=_*g+S,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*d,_=c*h,S=l*d,w=l*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=m*g+w,t[5]=c*p,t[9]=_*g-S,t[2]=S*g-_,t[6]=l*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dv,e,Fv)}lookAt(e,t,n){const i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ui.crossVectors(n,bn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ui.crossVectors(n,bn)),Ui.normalize(),aa.crossVectors(bn,Ui),i[0]=Ui.x,i[4]=aa.x,i[8]=bn.x,i[1]=Ui.y,i[5]=aa.y,i[9]=bn.y,i[2]=Ui.z,i[6]=aa.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,c=n[0],l=n[4],d=n[8],h=n[12],p=n[1],g=n[5],m=n[9],_=n[13],S=n[2],w=n[6],y=n[10],x=n[14],L=n[3],I=n[7],D=n[11],O=n[15],P=i[0],V=i[4],A=i[8],F=i[12],k=i[1],B=i[5],Y=i[9],J=i[13],K=i[2],ie=i[6],Z=i[10],te=i[14],pe=i[3],_e=i[7],Ce=i[11],Ne=i[15];return s[0]=c*P+l*k+d*K+h*pe,s[4]=c*V+l*B+d*ie+h*_e,s[8]=c*A+l*Y+d*Z+h*Ce,s[12]=c*F+l*J+d*te+h*Ne,s[1]=p*P+g*k+m*K+_*pe,s[5]=p*V+g*B+m*ie+_*_e,s[9]=p*A+g*Y+m*Z+_*Ce,s[13]=p*F+g*J+m*te+_*Ne,s[2]=S*P+w*k+y*K+x*pe,s[6]=S*V+w*B+y*ie+x*_e,s[10]=S*A+w*Y+y*Z+x*Ce,s[14]=S*F+w*J+y*te+x*Ne,s[3]=L*P+I*k+D*K+O*pe,s[7]=L*V+I*B+D*ie+O*_e,s[11]=L*A+I*Y+D*Z+O*Ce,s[15]=L*F+I*J+D*te+O*Ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],c=e[1],l=e[5],d=e[9],h=e[13],p=e[2],g=e[6],m=e[10],_=e[14],S=e[3],w=e[7],y=e[11],x=e[15],L=d*_-h*m,I=l*_-h*g,D=l*m-d*g,O=c*_-h*p,P=c*m-d*p,V=c*g-l*p;return t*(w*L-y*I+x*D)-n*(S*L-y*O+x*P)+i*(S*I-w*O+x*V)-s*(S*D-w*P+y*V)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],c=e[4],l=e[5],d=e[6],h=e[7],p=e[8],g=e[9],m=e[10],_=e[11],S=e[12],w=e[13],y=e[14],x=e[15],L=t*l-n*c,I=t*d-i*c,D=t*h-s*c,O=n*d-i*l,P=n*h-s*l,V=i*h-s*d,A=p*w-g*S,F=p*y-m*S,k=p*x-_*S,B=g*y-m*w,Y=g*x-_*w,J=m*x-_*y,K=L*J-I*Y+D*B+O*k-P*F+V*A;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/K;return e[0]=(l*J-d*Y+h*B)*ie,e[1]=(i*Y-n*J-s*B)*ie,e[2]=(w*V-y*P+x*O)*ie,e[3]=(m*P-g*V-_*O)*ie,e[4]=(d*k-c*J-h*F)*ie,e[5]=(t*J-i*k+s*F)*ie,e[6]=(y*D-S*V-x*I)*ie,e[7]=(p*V-m*D+_*I)*ie,e[8]=(c*Y-l*k+h*A)*ie,e[9]=(n*k-t*Y-s*A)*ie,e[10]=(S*P-w*D+x*L)*ie,e[11]=(g*D-p*P-_*L)*ie,e[12]=(l*F-c*B-d*A)*ie,e[13]=(t*B-n*F+i*A)*ie,e[14]=(w*I-S*O-y*L)*ie,e[15]=(p*O-g*I+m*L)*ie,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,c=e.x,l=e.y,d=e.z,h=s*c,p=s*l;return this.set(h*c+n,h*l-i*d,h*d+i*l,0,h*l+i*d,p*l+n,p*d-i*c,0,h*d-i*l,p*d+i*c,s*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,c){return this.set(1,n,s,0,e,1,c,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,c=t._y,l=t._z,d=t._w,h=s+s,p=c+c,g=l+l,m=s*h,_=s*p,S=s*g,w=c*p,y=c*g,x=l*g,L=d*h,I=d*p,D=d*g,O=n.x,P=n.y,V=n.z;return i[0]=(1-(w+x))*O,i[1]=(_+D)*O,i[2]=(S-I)*O,i[3]=0,i[4]=(_-D)*P,i[5]=(1-(m+x))*P,i[6]=(y+L)*P,i[7]=0,i[8]=(S+I)*V,i[9]=(y-L)*V,i[10]=(1-(m+w))*V,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let c=Tr.set(i[0],i[1],i[2]).length();const l=Tr.set(i[4],i[5],i[6]).length(),d=Tr.set(i[8],i[9],i[10]).length();s<0&&(c=-c),kn.copy(this);const h=1/c,p=1/l,g=1/d;return kn.elements[0]*=h,kn.elements[1]*=h,kn.elements[2]*=h,kn.elements[4]*=p,kn.elements[5]*=p,kn.elements[6]*=p,kn.elements[8]*=g,kn.elements[9]*=g,kn.elements[10]*=g,t.setFromRotationMatrix(kn),n.x=c,n.y=l,n.z=d,this}makePerspective(e,t,n,i,s,c,l=ri,d=!1){const h=this.elements,p=2*s/(t-e),g=2*s/(n-i),m=(t+e)/(t-e),_=(n+i)/(n-i);let S,w;if(d)S=s/(c-s),w=c*s/(c-s);else if(l===ri)S=-(c+s)/(c-s),w=-2*c*s/(c-s);else if(l===Is)S=-c/(c-s),w=-c*s/(c-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,c,l=ri,d=!1){const h=this.elements,p=2/(t-e),g=2/(n-i),m=-(t+e)/(t-e),_=-(n+i)/(n-i);let S,w;if(d)S=1/(c-s),w=c/(c-s);else if(l===ri)S=-2/(c-s),w=-(c+s)/(c-s);else if(l===Is)S=-1/(c-s),w=-s/(c-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=g,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Tr=new X,kn=new nt,Dv=new X(0,0,0),Fv=new X(1,1,1),Ui=new X,aa=new X,bn=new X,Wu=new nt,Xu=new fi;class ui{constructor(e=0,t=0,n=0,i=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],c=i[4],l=i[8],d=i[1],h=i[5],p=i[9],g=i[2],m=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,s));break;case"ZYX":this._y=Math.asin(-lt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,s)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-p,_),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class bd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nv=0;const $u=new X,wr=new fi,_i=new nt,oa=new X,ls=new X,Uv=new X,Ov=new fi,ju=new X(1,0,0),qu=new X(0,1,0),Yu=new X(0,0,1),Ku={type:"added"},kv={type:"removed"},Ar={type:"childadded",child:null},Co={type:"childremoved",child:null};class kt extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new X,t=new ui,n=new fi,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new st}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(qu,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(qu,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(ls,oa,this.up):_i.lookAt(oa,ls,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),wr.setFromRotationMatrix(_i),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kv),Co.child=e,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Uv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Ov,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];s(e.shapes,g)}else s(e.shapes,d)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,h=this.material.length;d<h;d++)l.push(s(e.materials,this.material[d]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];i.animations.push(s(e.animations,d))}}if(t){const l=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),_=c(e.animations),S=c(e.nodes);l.length>0&&(n.geometries=l),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=i,n;function c(l){const d=[];for(const h in l){const p=l[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new X(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Wn extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bv={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,c=null;const l=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,n),x=this._getHandJoint(h,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],m=p.position.distanceTo(g.position),_=.02,S=.005;h.inputState.pinching&&m>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return l!==null&&(l.visible=i!==null),d!==null&&(d.visible=s!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Lo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=Sl(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,c=2*n-s;this.r=Lo(c,s,e+1/3),this.g=Lo(c,s,e),this.b=Lo(c,s,e-1/3)}return xt.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const c=i[1],l=i[2];switch(c){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],c=s.length;if(c===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return xt.workingToColorSpace(mn.copy(this),e),Math.round(lt(mn.r*255,0,255))*65536+Math.round(lt(mn.g*255,0,255))*256+Math.round(lt(mn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,s=mn.b,c=Math.max(n,i,s),l=Math.min(n,i,s);let d,h;const p=(l+c)/2;if(l===c)d=0,h=0;else{const g=c-l;switch(h=p<=.5?g/(c+l):g/(2-c-l),c){case n:d=(i-s)/g+(i<s?6:0);break;case i:d=(s-n)/g+2;break;case s:d=(n-i)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Vt){xt.workingToColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(ca);const n=Es(Oi.h,ca.h,t),i=Es(Oi.s,ca.s,t),s=Es(Oi.l,ca.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Ze;Ze.NAMES=Td;class El{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new El(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zv extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bn=new X,vi=new X,Io=new X,xi=new X,Rr=new X,Cr=new X,Zu=new X,Do=new X,Fo=new X,No=new X,Uo=new Ot,Oo=new Ot,ko=new Ot;class Gn{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bn.subVectors(e,t),i.cross(Bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bn.subVectors(i,t),vi.subVectors(n,t),Io.subVectors(e,t);const c=Bn.dot(Bn),l=Bn.dot(vi),d=Bn.dot(Io),h=vi.dot(vi),p=vi.dot(Io),g=c*h-l*l;if(g===0)return s.set(0,0,0),null;const m=1/g,_=(h*d-l*p)*m,S=(c*p-l*d)*m;return s.set(1-_-S,S,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,i,s,c,l,d){return this.getBarycoord(e,t,n,i,xi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(s,xi.x),d.addScaledVector(c,xi.y),d.addScaledVector(l,xi.z),d)}static getInterpolatedAttribute(e,t,n,i,s,c){return Uo.setScalar(0),Oo.setScalar(0),ko.setScalar(0),Uo.fromBufferAttribute(e,t),Oo.fromBufferAttribute(e,n),ko.fromBufferAttribute(e,i),c.setScalar(0),c.addScaledVector(Uo,s.x),c.addScaledVector(Oo,s.y),c.addScaledVector(ko,s.z),c}static isFrontFacing(e,t,n,i){return Bn.subVectors(n,t),vi.subVectors(e,t),Bn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Bn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let c,l;Rr.subVectors(i,n),Cr.subVectors(s,n),Do.subVectors(e,n);const d=Rr.dot(Do),h=Cr.dot(Do);if(d<=0&&h<=0)return t.copy(n);Fo.subVectors(e,i);const p=Rr.dot(Fo),g=Cr.dot(Fo);if(p>=0&&g<=p)return t.copy(i);const m=d*g-p*h;if(m<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(n).addScaledVector(Rr,c);No.subVectors(e,s);const _=Rr.dot(No),S=Cr.dot(No);if(S>=0&&_<=S)return t.copy(s);const w=_*h-d*S;if(w<=0&&h>=0&&S<=0)return l=h/(h-S),t.copy(n).addScaledVector(Cr,l);const y=p*S-_*g;if(y<=0&&g-p>=0&&_-S>=0)return Zu.subVectors(s,i),l=(g-p)/(g-p+(_-S)),t.copy(i).addScaledVector(Zu,l);const x=1/(y+w+m);return c=w*x,l=m*x,t.copy(n).addScaledVector(Rr,c).addScaledVector(Cr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Pi{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=s.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,zn):zn.fromBufferAttribute(s,c),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const i=e.children;for(let s=0,c=i.length;s<c;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),ua.subVectors(this.max,us),Pr.subVectors(e.a,us),Lr.subVectors(e.b,us),Ir.subVectors(e.c,us),ki.subVectors(Lr,Pr),Bi.subVectors(Ir,Lr),tr.subVectors(Pr,Ir);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-tr.z,tr.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,tr.z,0,-tr.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-tr.y,tr.x,0];return!Bo(t,Pr,Lr,Ir,ua)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,Pr,Lr,Ir,ua))?!1:(ha.crossVectors(ki,Bi),t=[ha.x,ha.y,ha.z],Bo(t,Pr,Lr,Ir,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new X,new X,new X,new X,new X,new X,new X,new X],zn=new X,la=new Pi,Pr=new X,Lr=new X,Ir=new X,ki=new X,Bi=new X,tr=new X,us=new X,ua=new X,ha=new X,nr=new X;function Bo(r,e,t,n,i){for(let s=0,c=r.length-3;s<=c;s+=3){nr.fromArray(r,s);const l=i.x*Math.abs(nr.x)+i.y*Math.abs(nr.y)+i.z*Math.abs(nr.z),d=e.dot(nr),h=t.dot(nr),p=n.dot(nr);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>l)return!1}return!0}const $t=new X,da=new gt;let Vv=0;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)da.fromBufferAttribute(this,t),da.applyMatrix3(e),this.setXY(t,da.x,da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}}class wd extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ad extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ln extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hv=new Pi,hs=new X,zo=new X;class pi{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,c=e.length;s<c;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(zo)),this.expandByPoint(hs.copy(e.center).sub(zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gv=0;const Ln=new nt,Vo=new kt,Dr=new X,Tn=new Pi,ds=new Pi,an=new X;class tn extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?Ad:wd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const c=e[i];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ln(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,c=t.length;s<c;s++){const l=t[s];ds.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(Tn.min,ds.min),Tn.expandByPoint(an),an.addVectors(Tn.max,ds.max),Tn.expandByPoint(an)):(Tn.expandByPoint(ds.min),Tn.expandByPoint(ds.max))}Tn.getCenter(n);let i=0;for(let s=0,c=e.count;s<c;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,c=t.length;s<c;s++){const l=t[s],d=this.morphTargetsRelative;for(let h=0,p=l.count;h<p;h++)an.fromBufferAttribute(l,h),d&&(Dr.fromBufferAttribute(e,h),an.add(Dr)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],d=[];for(let A=0;A<n.count;A++)l[A]=new X,d[A]=new X;const h=new X,p=new X,g=new X,m=new gt,_=new gt,S=new gt,w=new X,y=new X;function x(A,F,k){h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,F),g.fromBufferAttribute(n,k),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,F),S.fromBufferAttribute(s,k),p.sub(h),g.sub(h),_.sub(m),S.sub(m);const B=1/(_.x*S.y-S.x*_.y);isFinite(B)&&(w.copy(p).multiplyScalar(S.y).addScaledVector(g,-_.y).multiplyScalar(B),y.copy(g).multiplyScalar(_.x).addScaledVector(p,-S.x).multiplyScalar(B),l[A].add(w),l[F].add(w),l[k].add(w),d[A].add(y),d[F].add(y),d[k].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let A=0,F=L.length;A<F;++A){const k=L[A],B=k.start,Y=k.count;for(let J=B,K=B+Y;J<K;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const I=new X,D=new X,O=new X,P=new X;function V(A){O.fromBufferAttribute(i,A),P.copy(O);const F=l[A];I.copy(F),I.sub(O.multiplyScalar(O.dot(F))).normalize(),D.crossVectors(P,F);const B=D.dot(d[A])<0?-1:1;c.setXYZW(A,I.x,I.y,I.z,B)}for(let A=0,F=L.length;A<F;++A){const k=L[A],B=k.start,Y=k.count;for(let J=B,K=B+Y;J<K;J+=3)V(e.getX(J+0)),V(e.getX(J+1)),V(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const i=new X,s=new X,c=new X,l=new X,d=new X,h=new X,p=new X,g=new X;if(e)for(let m=0,_=e.count;m<_;m+=3){const S=e.getX(m+0),w=e.getX(m+1),y=e.getX(m+2);i.fromBufferAttribute(t,S),s.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),p.subVectors(c,s),g.subVectors(i,s),p.cross(g),l.fromBufferAttribute(n,S),d.fromBufferAttribute(n,w),h.fromBufferAttribute(n,y),l.add(p),d.add(p),h.add(p),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(w,d.x,d.y,d.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,s),g.subVectors(i,s),p.cross(g),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(l,d){const h=l.array,p=l.itemSize,g=l.normalized,m=new h.constructor(d.length*p);let _=0,S=0;for(let w=0,y=d.length;w<y;w++){l.isInterleavedBufferAttribute?_=d[w]*l.data.stride+l.offset:_=d[w]*p;for(let x=0;x<p;x++)m[S++]=h[_++]}return new cn(m,p,g)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const l in i){const d=i[l],h=e(d,n);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const d=[],h=s[l];for(let p=0,g=h.length;p<g;p++){const m=h[p],_=e(m,n);d.push(_)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,d=c.length;l<d;l++){const h=c[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const i={};let s=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,m=h.length;g<m;g++){const _=h[g];p.push(_.toJSON(e.data))}p.length>0&&(i[d]=p,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const p=i[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],g=s[h];for(let m=0,_=g.length;m<_;m++)p.push(g[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new X;class bl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Xa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Xv=0;class ci extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Vr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const c=[];for(const l in s){const d=s[l];delete d.metadata,c.push(d)}return c}if(t){const s=i(e.textures),c=i(e.images);s.length>0&&(n.textures=s),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new X,Ho=new X,fa=new X,zi=new X,Go=new X,pa=new X,Wo=new X;class Za{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ho.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Ho);const s=e.distanceTo(t)*.5,c=-this.direction.dot(fa),l=zi.dot(this.direction),d=-zi.dot(fa),h=zi.lengthSq(),p=Math.abs(1-c*c);let g,m,_,S;if(p>0)if(g=c*d-l,m=c*l-d,S=s*p,g>=0)if(m>=-S)if(m<=S){const w=1/p;g*=w,m*=w,_=g*(g+c*m+2*l)+m*(c*g+m+2*d)+h}else m=s,g=Math.max(0,-(c*m+l)),_=-g*g+m*(m+2*d)+h;else m=-s,g=Math.max(0,-(c*m+l)),_=-g*g+m*(m+2*d)+h;else m<=-S?(g=Math.max(0,-(-c*s+l)),m=g>0?-s:Math.min(Math.max(-s,-d),s),_=-g*g+m*(m+2*d)+h):m<=S?(g=0,m=Math.min(Math.max(-s,-d),s),_=m*(m+2*d)+h):(g=Math.max(0,-(c*s+l)),m=g>0?s:Math.min(Math.max(-s,-d),s),_=-g*g+m*(m+2*d)+h);else m=c>0?-s:s,g=Math.max(0,-(c*m+l)),_=-g*g+m*(m+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),i&&i.copy(Ho).addScaledVector(fa,m),_}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,s=e.radius*e.radius;if(i>s)return null;const c=Math.sqrt(s-i),l=n-c,d=n+c;return d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,c,l,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),p>=0?(s=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(s=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),n>c||s>i||((s>n||isNaN(n))&&(n=s),(c<i||isNaN(i))&&(i=c),g>=0?(l=(e.min.z-m.z)*g,d=(e.max.z-m.z)*g):(l=(e.max.z-m.z)*g,d=(e.min.z-m.z)*g),n>d||l>i)||((l>n||n!==n)&&(n=l),(d<i||i!==i)&&(i=d),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,s){Go.subVectors(t,e),pa.subVectors(n,e),Wo.crossVectors(Go,pa);let c=this.direction.dot(Wo),l;if(c>0){if(i)return null;l=1}else if(c<0)l=-1,c=-c;else return null;zi.subVectors(this.origin,e);const d=l*this.direction.dot(pa.crossVectors(zi,pa));if(d<0)return null;const h=l*this.direction.dot(Go.cross(zi));if(h<0||d+h>c)return null;const p=-l*zi.dot(Wo);return p<0?null:this.at(p/c,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dn extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ju=new nt,ir=new Za,ma=new pi,Qu=new X,ga=new X,_a=new X,va=new X,Xo=new X,xa=new X,eh=new X,ya=new X;class Gt extends kt{constructor(e=new tn,t=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=i.length;s<c;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){xa.set(0,0,0);for(let d=0,h=s.length;d<h;d++){const p=l[d],g=s[d];p!==0&&(Xo.fromBufferAttribute(g,e),c?xa.addScaledVector(Xo,p):xa.addScaledVector(Xo.sub(t),p))}t.add(xa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(ma.containsPoint(ir.origin)===!1&&(ir.intersectSphere(ma,Qu)===null||ir.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Ju),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,n){let i;const s=this.geometry,c=this.material,l=s.index,d=s.attributes.position,h=s.attributes.uv,p=s.attributes.uv1,g=s.attributes.normal,m=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(c))for(let S=0,w=m.length;S<w;S++){const y=m[S],x=c[y.materialIndex],L=Math.max(y.start,_.start),I=Math.min(l.count,Math.min(y.start+y.count,_.start+_.count));for(let D=L,O=I;D<O;D+=3){const P=l.getX(D),V=l.getX(D+1),A=l.getX(D+2);i=Sa(this,x,e,n,h,p,g,P,V,A),i&&(i.faceIndex=Math.floor(D/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const S=Math.max(0,_.start),w=Math.min(l.count,_.start+_.count);for(let y=S,x=w;y<x;y+=3){const L=l.getX(y),I=l.getX(y+1),D=l.getX(y+2);i=Sa(this,c,e,n,h,p,g,L,I,D),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,w=m.length;S<w;S++){const y=m[S],x=c[y.materialIndex],L=Math.max(y.start,_.start),I=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let D=L,O=I;D<O;D+=3){const P=D,V=D+1,A=D+2;i=Sa(this,x,e,n,h,p,g,P,V,A),i&&(i.faceIndex=Math.floor(D/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const S=Math.max(0,_.start),w=Math.min(d.count,_.start+_.count);for(let y=S,x=w;y<x;y+=3){const L=y,I=y+1,D=y+2;i=Sa(this,c,e,n,h,p,g,L,I,D),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function $v(r,e,t,n,i,s,c,l){let d;if(e.side===En?d=n.intersectTriangle(c,s,i,!0,l):d=n.intersectTriangle(i,s,c,e.side===Ai,l),d===null)return null;ya.copy(l),ya.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(ya);return h<t.near||h>t.far?null:{distance:h,point:ya.clone(),object:r}}function Sa(r,e,t,n,i,s,c,l,d,h){r.getVertexPosition(l,ga),r.getVertexPosition(d,_a),r.getVertexPosition(h,va);const p=$v(r,e,t,n,ga,_a,va,eh);if(p){const g=new X;Gn.getBarycoord(eh,ga,_a,va,g),i&&(p.uv=Gn.getInterpolatedAttribute(i,l,d,h,g,new gt)),s&&(p.uv1=Gn.getInterpolatedAttribute(s,l,d,h,g,new gt)),c&&(p.normal=Gn.getInterpolatedAttribute(c,l,d,h,g,new X),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:l,b:d,c:h,normal:new X,materialIndex:0};Gn.getNormal(ga,_a,va,m.normal),p.face=m,p.barycoord=g}return p}const th=new X,nh=new Ot,ih=new Ot,jv=new X,rh=new nt,Ma=new X,$o=new pi,sh=new nt,jo=new Za;class qv extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(i),e.ray.intersectsSphere($o)!==!1&&(sh.copy(i).invert(),jo.copy(e.ray).applyMatrix4(sh),!(this.boundingBox!==null&&jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===q0?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;nh.fromBufferAttribute(i.attributes.skinIndex,e),ih.fromBufferAttribute(i.attributes.skinWeight,e),th.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const c=ih.getComponent(s);if(c!==0){const l=nh.getComponent(s);rh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(jv.copy(th).applyMatrix4(rh),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rd extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tl extends nn{constructor(e=null,t=1,n=1,i,s,c,l,d,h=Qt,p=Qt,g,m){super(null,c,l,d,h,p,i,s,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new nt,Yv=new nt;class wl{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,c=e.length;s<c;s++){const l=e[s]?e[s].matrixWorld:Yv;ah.multiplyMatrices(l,t[s]),ah.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tl(t,e,e,Nn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let c=t[s];c===void 0&&(He("Skeleton: No bone found with UUID:",s),c=new Rd),this.bones.push(c),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const c=t[i];e.bones.push(c.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class tl extends cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fr=new nt,oh=new nt,Ea=[],ch=new Pi,Kv=new nt,fs=new Gt,ps=new pi;class Cd extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tl(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Kv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),ch.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),ps.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,c=e*s+1;for(let l=0;l<n.length;l++)n[l]=i[c+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fr),oh.multiplyMatrices(n,Fr),fs.matrixWorld=oh,fs.raycast(e,Ea);for(let c=0,l=Ea.length;c<l;c++){const d=Ea[c];d.instanceId=s,d.object=this,t.push(d)}Ea.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(i*this.count),i,this.count,ml,Fn));const s=this.morphTexture.source.data.data;let c=0;for(let h=0;h<n.length;h++)c+=n[h];const l=this.geometry.morphTargetsRelative?1:1-c,d=i*e;s[d]=l,s.set(n,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qo=new X,Zv=new X,Jv=new st;class lr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qo.subVectors(n,t).cross(Zv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jv.getNormalMatrix(e),i=this.coplanarPoint(qo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new pi,Qv=new gt(.5,.5),ba=new X;class Al{constructor(e=new lr,t=new lr,n=new lr,i=new lr,s=new lr,c=new lr){this.planes=[e,t,n,i,s,c]}set(e,t,n,i,s,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){const i=this.planes,s=e.elements,c=s[0],l=s[1],d=s[2],h=s[3],p=s[4],g=s[5],m=s[6],_=s[7],S=s[8],w=s[9],y=s[10],x=s[11],L=s[12],I=s[13],D=s[14],O=s[15];if(i[0].setComponents(h-c,_-p,x-S,O-L).normalize(),i[1].setComponents(h+c,_+p,x+S,O+L).normalize(),i[2].setComponents(h+l,_+g,x+w,O+I).normalize(),i[3].setComponents(h-l,_-g,x-w,O-I).normalize(),n)i[4].setComponents(d,m,y,D).normalize(),i[5].setComponents(h-d,_-m,x-y,O-D).normalize();else if(i[4].setComponents(h-d,_-m,x-y,O-D).normalize(),t===ri)i[5].setComponents(h+d,_+m,x+y,O+D).normalize();else if(t===Is)i[5].setComponents(d,m,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const t=Qv.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ba.x=i.normal.x>0?e.max.x:e.min.x,ba.y=i.normal.y>0?e.max.y:e.min.y,ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bs extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ja=new X,qa=new X,lh=new nt,ms=new Za,Ta=new pi,Yo=new X,uh=new X;class Fs extends kt{constructor(e=new tn,t=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ja.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ja.distanceTo(qa);e.setAttribute("lineDistance",new ln(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;lh.copy(i).invert(),ms.copy(e.ray).applyMatrix4(lh);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,h=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){const _=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let w=_,y=S-1;w<y;w+=h){const x=p.getX(w),L=p.getX(w+1),I=wa(this,e,ms,d,x,L,w);I&&t.push(I)}if(this.isLineLoop){const w=p.getX(S-1),y=p.getX(_),x=wa(this,e,ms,d,w,y,S-1);x&&t.push(x)}}else{const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let w=_,y=S-1;w<y;w+=h){const x=wa(this,e,ms,d,w,w+1,w);x&&t.push(x)}if(this.isLineLoop){const w=wa(this,e,ms,d,S-1,_,S-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=i.length;s<c;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function wa(r,e,t,n,i,s,c){const l=r.geometry.attributes.position;if(ja.fromBufferAttribute(l,i),qa.fromBufferAttribute(l,s),t.distanceSqToSegment(ja,qa,Yo,uh)>n)return;Yo.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Yo);if(!(h<e.near||h>e.far))return{distance:h,point:uh.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const hh=new X,dh=new X;class ex extends Fs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)hh.fromBufferAttribute(t,i),dh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hh.distanceTo(dh);e.setAttribute("lineDistance",new ln(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pd extends Fs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ld extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fh=new nt,nl=new Za,Aa=new pi,Ra=new X;class tx extends kt{constructor(e=new tn,t=new Ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=s,e.ray.intersectsSphere(Aa)===!1)return;fh.copy(i).invert(),nl.copy(e.ray).applyMatrix4(fh);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,h=n.index,g=n.attributes.position;if(h!==null){const m=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let S=m,w=_;S<w;S++){const y=h.getX(S);Ra.fromBufferAttribute(g,y),ph(Ra,y,d,i,e,t,this)}}else{const m=Math.max(0,c.start),_=Math.min(g.count,c.start+c.count);for(let S=m,w=_;S<w;S++)Ra.fromBufferAttribute(g,S),ph(Ra,S,d,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,c=i.length;s<c;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function ph(r,e,t,n,i,s,c){const l=nl.distanceSqToPoint(r);if(l<t){const d=new X;nl.closestPointToPoint(r,d),d.applyMatrix4(n);const h=i.ray.origin.distanceTo(d);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Id extends nn{constructor(e=[],t=pr,n,i,s,c,l,d,h,p){super(e,t,n,i,s,c,l,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rl extends nn{constructor(e,t,n,i,s,c,l,d,h){super(e,t,n,i,s,c,l,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ns extends nn{constructor(e,t,n=li,i,s,c,l=Qt,d=Qt,h,p=Ci,g=1){if(p!==Ci&&p!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,i,s,c,l,d,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ml(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nx extends Ns{constructor(e,t=li,n=pr,i,s,c=Qt,l=Qt,d,h=Ci){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,i,s,c,l,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dd extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gr extends tn{constructor(e=1,t=1,n=1,i=1,s=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:c};const l=this;i=Math.floor(i),s=Math.floor(s),c=Math.floor(c);const d=[],h=[],p=[],g=[];let m=0,_=0;S("z","y","x",-1,-1,n,t,e,c,s,0),S("z","y","x",1,-1,n,t,-e,c,s,1),S("x","z","y",1,1,e,n,t,i,c,2),S("x","z","y",1,-1,e,n,-t,i,c,3),S("x","y","z",1,-1,e,t,n,i,s,4),S("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(d),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(p,3)),this.setAttribute("uv",new ln(g,2));function S(w,y,x,L,I,D,O,P,V,A,F){const k=D/V,B=O/A,Y=D/2,J=O/2,K=P/2,ie=V+1,Z=A+1;let te=0,pe=0;const _e=new X;for(let Ce=0;Ce<Z;Ce++){const Ne=Ce*B-J;for(let Pe=0;Pe<ie;Pe++){const Je=Pe*k-Y;_e[w]=Je*L,_e[y]=Ne*I,_e[x]=K,h.push(_e.x,_e.y,_e.z),_e[w]=0,_e[y]=0,_e[x]=P>0?1:-1,p.push(_e.x,_e.y,_e.z),g.push(Pe/V),g.push(1-Ce/A),te+=1}}for(let Ce=0;Ce<A;Ce++)for(let Ne=0;Ne<V;Ne++){const Pe=m+Ne+ie*Ce,Je=m+Ne+ie*(Ce+1),et=m+(Ne+1)+ie*(Ce+1),ut=m+(Ne+1)+ie*Ce;d.push(Pe,Je,ut),d.push(Je,et,ut),pe+=6}l.addGroup(_,pe,F),_+=pe,m+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Cl extends tn{constructor(e=1,t=1,n=1,i=32,s=1,c=!1,l=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:c,thetaStart:l,thetaLength:d};const h=this;i=Math.floor(i),s=Math.floor(s);const p=[],g=[],m=[],_=[];let S=0;const w=[],y=n/2;let x=0;L(),c===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(p),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(m,3)),this.setAttribute("uv",new ln(_,2));function L(){const D=new X,O=new X;let P=0;const V=(t-e)/n;for(let A=0;A<=s;A++){const F=[],k=A/s,B=k*(t-e)+e;for(let Y=0;Y<=i;Y++){const J=Y/i,K=J*d+l,ie=Math.sin(K),Z=Math.cos(K);O.x=B*ie,O.y=-k*n+y,O.z=B*Z,g.push(O.x,O.y,O.z),D.set(ie,V,Z).normalize(),m.push(D.x,D.y,D.z),_.push(J,1-k),F.push(S++)}w.push(F)}for(let A=0;A<i;A++)for(let F=0;F<s;F++){const k=w[F][A],B=w[F+1][A],Y=w[F+1][A+1],J=w[F][A+1];(e>0||F!==0)&&(p.push(k,B,J),P+=3),(t>0||F!==s-1)&&(p.push(B,Y,J),P+=3)}h.addGroup(x,P,0),x+=P}function I(D){const O=S,P=new gt,V=new X;let A=0;const F=D===!0?e:t,k=D===!0?1:-1;for(let Y=1;Y<=i;Y++)g.push(0,y*k,0),m.push(0,k,0),_.push(.5,.5),S++;const B=S;for(let Y=0;Y<=i;Y++){const K=Y/i*d+l,ie=Math.cos(K),Z=Math.sin(K);V.x=F*Z,V.y=y*k,V.z=F*ie,g.push(V.x,V.y,V.z),m.push(0,k,0),P.x=ie*.5+.5,P.y=Z*.5*k+.5,_.push(P.x,P.y),S++}for(let Y=0;Y<i;Y++){const J=O+Y,K=B+Y;D===!0?p.push(K,K+1,J):p.push(K+1,K,J),A+=3}h.addGroup(x,A,D===!0?1:2),x+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ix{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let c;t?c=t:c=e*n[s-1];let l=0,d=s-1,h;for(;l<=d;)if(i=Math.floor(l+(d-l)/2),h=n[i]-c,h<0)l=i+1;else if(h>0)d=i-1;else{d=i;break}if(i=d,n[i]===c)return i/(s-1);const p=n[i],m=n[i+1]-p,_=(c-p)/m;return(i+_)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const c=this.getPoint(i),l=this.getPoint(s),d=t||(c.isVector2?new gt:new X);return d.copy(l).sub(c).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new X,i=[],s=[],c=[],l=new X,d=new nt;for(let _=0;_<=e;_++){const S=_/e;i[_]=this.getTangentAt(S,new X)}s[0]=new X,c[0]=new X;let h=Number.MAX_VALUE;const p=Math.abs(i[0].x),g=Math.abs(i[0].y),m=Math.abs(i[0].z);p<=h&&(h=p,n.set(1,0,0)),g<=h&&(h=g,n.set(0,1,0)),m<=h&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],l),c[0].crossVectors(i[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),c[_]=c[_-1].clone(),l.crossVectors(i[_-1],i[_]),l.length()>Number.EPSILON){l.normalize();const S=Math.acos(lt(i[_-1].dot(i[_]),-1,1));s[_].applyMatrix4(d.makeRotationAxis(l,S))}c[_].crossVectors(i[_],s[_])}if(t===!0){let _=Math.acos(lt(s[0].dot(s[e]),-1,1));_/=e,i[0].dot(l.crossVectors(s[0],s[e]))>0&&(_=-_);for(let S=1;S<=e;S++)s[S].applyMatrix4(d.makeRotationAxis(i[S],_*S)),c[S].crossVectors(i[S],s[S])}return{tangents:i,normals:s,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Pl(){let r=0,e=0,t=0,n=0;function i(s,c,l,d){r=s,e=l,t=-3*s+3*c-2*l-d,n=2*s-2*c+l+d}return{initCatmullRom:function(s,c,l,d,h){i(c,l,h*(l-s),h*(d-c))},initNonuniformCatmullRom:function(s,c,l,d,h,p,g){let m=(c-s)/h-(l-s)/(h+p)+(l-c)/p,_=(l-c)/p-(d-c)/(p+g)+(d-l)/g;m*=p,_*=p,i(c,l,m,_)},calc:function(s){const c=s*s,l=c*s;return r+e*s+t*c+n*l}}}const Ca=new X,Ko=new Pl,Zo=new Pl,Jo=new Pl;class rx extends ix{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new X){const n=t,i=this.points,s=i.length,c=(s-(this.closed?0:1))*e;let l=Math.floor(c),d=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:d===0&&l===s-1&&(l=s-2,d=1);let h,p;this.closed||l>0?h=i[(l-1)%s]:(Ca.subVectors(i[0],i[1]).add(i[0]),h=Ca);const g=i[l%s],m=i[(l+1)%s];if(this.closed||l+2<s?p=i[(l+2)%s]:(Ca.subVectors(i[s-1],i[s-2]).add(i[s-1]),p=Ca),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(g),_),w=Math.pow(g.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(p),_);w<1e-4&&(w=1),S<1e-4&&(S=w),y<1e-4&&(y=w),Ko.initNonuniformCatmullRom(h.x,g.x,m.x,p.x,S,w,y),Zo.initNonuniformCatmullRom(h.y,g.y,m.y,p.y,S,w,y),Jo.initNonuniformCatmullRom(h.z,g.z,m.z,p.z,S,w,y)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(h.x,g.x,m.x,p.x,this.tension),Zo.initCatmullRom(h.y,g.y,m.y,p.y,this.tension),Jo.initCatmullRom(h.z,g.z,m.z,p.z,this.tension));return n.set(Ko.calc(d),Zo.calc(d),Jo.calc(d)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new X().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Wi extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,c=t/2,l=Math.floor(n),d=Math.floor(i),h=l+1,p=d+1,g=e/l,m=t/d,_=[],S=[],w=[],y=[];for(let x=0;x<p;x++){const L=x*m-c;for(let I=0;I<h;I++){const D=I*g-s;S.push(D,-L,0),w.push(0,0,1),y.push(I/l),y.push(1-x/d)}}for(let x=0;x<d;x++)for(let L=0;L<l;L++){const I=L+h*x,D=L+h*(x+1),O=L+1+h*(x+1),P=L+1+h*x;_.push(I,D,P),_.push(D,O,P)}this.setIndex(_),this.setAttribute("position",new ln(S,3)),this.setAttribute("normal",new ln(w,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}function Yr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vn(r){const e={};for(let t=0;t<r.length;t++){const n=Yr(r[t]);for(const i in n)e[i]=n[i]}return e}function sx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Fd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const ax={clone:Yr,merge:vn};var ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ox,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const c=this.uniforms[i].value;c&&c.isTexture?t.uniforms[i]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[i]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[i]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[i]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[i]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[i]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[i]={type:"m4",value:c.toArray()}:t.uniforms[i]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lx extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ja extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends Ja{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ux extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hx extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Pa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function dx(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function mh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,c=0;c!==n;++s){const l=t[s]*e;for(let d=0;d!==e;++d)i[c++]=r[l+d]}return i}function Nd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let c=s[n];if(c!==void 0)if(Array.isArray(c))do c=s[n],c!==void 0&&(e.push(s.time),t.push(...c)),s=r[i++];while(s!==void 0);else if(c.toArray!==void 0)do c=s[n],c!==void 0&&(e.push(s.time),c.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do c=s[n],c!==void 0&&(e.push(s.time),t.push(c)),s=r[i++];while(s!==void 0)}class ts{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let c;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break t}c=t.length;break n}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let d=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===d)break;if(i=s,s=t[--n-1],e>=s)break t}c=n,n=0;break n}break e}for(;n<c;){const l=n+c>>>1;e<t[l]?c=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let c=0;c!==i;++c)t[c]=n[s+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fx extends ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fu,endingEnd:Fu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,c=e+1,l=i[s],d=i[c];if(l===void 0)switch(this.getSettings_().endingStart){case Nu:s=e,l=2*t-n;break;case Uu:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(d===void 0)switch(this.getSettings_().endingEnd){case Nu:c=e,d=2*n-t;break;case Uu:c=1,d=n+i[1]-i[0];break;default:c=e-1,d=t}const h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(d-n),this._offsetPrev=s*p,this._offsetNext=c*p}interpolate_(e,t,n,i){const s=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=e*l,h=d-l,p=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,_=this._weightNext,S=(n-t)/(i-t),w=S*S,y=w*S,x=-m*y+2*m*w-m*S,L=(1+m)*y+(-1.5-2*m)*w+(-.5+m)*S+1,I=(-1-_)*y+(1.5+_)*w+.5*S,D=_*y-_*w;for(let O=0;O!==l;++O)s[O]=x*c[p+O]+L*c[h+O]+I*c[d+O]+D*c[g+O];return s}}class px extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=e*l,h=d-l,p=(n-t)/(i-t),g=1-p;for(let m=0;m!==l;++m)s[m]=c[h+m]*g+c[d+m]*p;return s}}class mx extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class gx extends ts{interpolate_(e,t,n,i){const s=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=e*l,h=d-l,p=this.settings||this.DefaultSettings_,g=p.inTangents,m=p.outTangents;if(!g||!m){const w=(n-t)/(i-t),y=1-w;for(let x=0;x!==l;++x)s[x]=c[h+x]*y+c[d+x]*w;return s}const _=l*2,S=e-1;for(let w=0;w!==l;++w){const y=c[h+w],x=c[d+w],L=S*_+w*2,I=m[L],D=m[L+1],O=e*_+w*2,P=g[O],V=g[O+1];let A=(n-t)/(i-t),F,k,B,Y,J;for(let K=0;K<8;K++){F=A*A,k=F*A,B=1-A,Y=B*B,J=Y*B;const Z=J*t+3*Y*A*I+3*B*F*P+k*i-n;if(Math.abs(Z)<1e-10)break;const te=3*Y*(I-t)+6*B*A*(P-I)+3*F*(i-P);if(Math.abs(te)<1e-10)break;A=A-Z/te,A=Math.max(0,Math.min(1,A))}s[w]=J*y+3*Y*A*D+3*B*F*V+k*x}return s}}class $n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new px(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new gx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Ls:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break;case Du:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Ls;case this.InterpolantFactoryMethodSmooth:return bo;case this.InterpolantFactoryMethodBezier:return Du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,c=i-1;for(;s!==i&&n[s]<e;)++s;for(;c!==-1&&n[c]>t;)--c;if(++c,s!==0||c!==i){s>=c&&(c=Math.max(c,1),s=c-1);const l=this.getValueSize();this.times=n.slice(s,c),this.values=this.values.slice(s*l,c*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==s;l++){const d=n[l];if(typeof d=="number"&&isNaN(d)){Ye("KeyframeTrack: Time is not a valid number.",this,l,d),e=!1;break}if(c!==null&&c>d){Ye("KeyframeTrack: Out of order keys.",this,l,d,c),e=!1;break}c=d}if(i!==void 0&&av(i))for(let l=0,d=i.length;l!==d;++l){const h=i[l];if(isNaN(h)){Ye("KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,s=e.length-1;let c=1;for(let l=1;l<s;++l){let d=!1;const h=e[l],p=e[l+1];if(h!==p&&(l!==1||h!==e[0]))if(i)d=!0;else{const g=l*n,m=g-n,_=g+n;for(let S=0;S!==n;++S){const w=t[g+S];if(w!==t[m+S]||w!==t[_+S]){d=!0;break}}}if(d){if(l!==c){e[c]=e[l];const g=l*n,m=c*n;for(let _=0;_!==n;++_)t[m+_]=t[g+_]}++c}}if(s>0){e[c]=e[s];for(let l=s*n,d=c*n,h=0;h!==n;++h)t[d+h]=t[l+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Ls;class ns extends $n{constructor(e,t,n){super(e,t,n)}}ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ps;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Ud extends $n{constructor(e,t,n,i){super(e,t,n,i)}}Ud.prototype.ValueTypeName="color";class Kr extends $n{constructor(e,t,n,i){super(e,t,n,i)}}Kr.prototype.ValueTypeName="number";class _x extends ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=(n-t)/(i-t);let h=e*l;for(let p=h+l;h!==p;h+=4)fi.slerpFlat(s,0,c,h-l,c,h,d);return s}}class Zr extends $n{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _x(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class is extends $n{constructor(e,t,n){super(e,t,n)}}is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Ps;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;class Jr extends $n{constructor(e,t,n,i){super(e,t,n,i)}}Jr.prototype.ValueTypeName="vector";class vx{constructor(e="",t=-1,n=[],i=Y0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let c=0,l=n.length;c!==l;++c)t.push(yx(n[c]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,c=n.length;s!==c;++s)t.push($n.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,c=[];for(let l=0;l<s;l++){let d=[],h=[];d.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);const p=dx(d);d=mh(d,1,p),h=mh(h,1,p),!i&&d[0]===0&&(d.push(s),h.push(h[0])),c.push(new Kr(".morphTargetInfluences["+t[l].name+"]",d,h).scale(1/n))}return new this(e,-1,c)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,d=e.length;l<d;l++){const h=e[l],p=h.name.match(s);if(p&&p.length>1){const g=p[1];let m=i[g];m||(i[g]=m=[]),m.push(h)}}const c=[];for(const l in i)c.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return c}static parseAnimation(e,t){if(He("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ye("AnimationClip: No animation in JSONLoader data."),null;const n=function(g,m,_,S,w){if(_.length!==0){const y=[],x=[];Nd(_,y,x,S),y.length!==0&&w.push(new g(m,y,x))}},i=[],s=e.name||"default",c=e.fps||30,l=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const m=h[g].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const _={};let S;for(S=0;S<m.length;S++)if(m[S].morphTargets)for(let w=0;w<m[S].morphTargets.length;w++)_[m[S].morphTargets[w]]=-1;for(const w in _){const y=[],x=[];for(let L=0;L!==m[S].morphTargets.length;++L){const I=m[S];y.push(I.time),x.push(I.morphTarget===w?1:0)}i.push(new Kr(".morphTargetInfluence["+w+"]",y,x))}d=_.length*c}else{const _=".bones["+t[g].name+"]";n(Jr,_+".position",m,"pos",i),n(Zr,_+".quaternion",m,"rot",i),n(Jr,_+".scale",m,"scl",i)}}return i.length===0?null:new this(s,d,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Kr;case"vector":case"vector2":case"vector3":case"vector4":return Jr;case"color":return Ud;case"quaternion":return Zr;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function yx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xx(r.type);if(r.times===void 0){const t=[],n=[];Nd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(gh(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!gh(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function gh(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Sx{constructor(e,t,n){const i=this;let s=!1,c=0,l=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){l++,s===!1&&i.onStart!==void 0&&i.onStart(p,c,l),s=!0},this.itemEnd=function(p){c++,i.onProgress!==void 0&&i.onProgress(p,c,l),c===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=h.length;g<m;g+=2){const _=h[g],S=h[g+1];if(_.global&&(_.lastIndex=0),_.test(p))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Mx=new Sx;class _r{constructor(e){this.manager=e!==void 0?e:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_r.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Ex extends Error{constructor(e,t){super(e),this.response=t}}class Ll extends _r{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:i});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=Mi[e],g=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),_=m?parseInt(m):0,S=_!==0;let w=0;const y=new ReadableStream({start(x){L();function L(){g.read().then(({done:I,value:D})=>{if(I)x.close();else{w+=D.byteLength;const O=new ProgressEvent("progress",{lengthComputable:S,loaded:w,total:_});for(let P=0,V=p.length;P<V;P++){const A=p[P];A.onProgress&&A.onProgress(O)}x.enqueue(D),L()}},I=>{x.error(I)})}}});return new Response(y)}else throw new Ex(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,l));case"json":return h.json();default:if(l==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(l),m=g&&g[1]?g[1].toLowerCase():void 0,_=new TextDecoder(m);return h.arrayBuffer().then(S=>_.decode(S))}}}).then(h=>{bi.add(`file:${e}`,h);const p=Mi[e];delete Mi[e];for(let g=0,m=p.length;g<m;g++){const _=p[g];_.onLoad&&_.onLoad(h)}}).catch(h=>{const p=Mi[e];if(p===void 0)throw this.manager.itemError(e),h;delete Mi[e];for(let g=0,m=p.length;g<m;g++){const _=p[g];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Nr=new WeakMap;class bx extends _r{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,c=bi.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(c),s.manager.itemEnd(e)},0);else{let g=Nr.get(c);g===void 0&&(g=[],Nr.set(c,g)),g.push({onLoad:t,onError:i})}return c}const l=Ds("img");function d(){p(),t&&t(this);const g=Nr.get(this)||[];for(let m=0;m<g.length;m++){const _=g[m];_.onLoad&&_.onLoad(this)}Nr.delete(this),s.manager.itemEnd(e)}function h(g){p(),i&&i(g),bi.remove(`image:${e}`);const m=Nr.get(this)||[];for(let _=0;_<m.length;_++){const S=m[_];S.onError&&S.onError(g)}Nr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){l.removeEventListener("load",d,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",d,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,l),s.manager.itemStart(e),l.src=e,l}}class il extends _r{constructor(e){super(e)}load(e,t,n,i){const s=new nn,c=new bx(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Qa extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Tx extends Qa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Qo=new nt,_h=new X,vh=new X;class Il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vh),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Is||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const La=new X,Ia=new fi,Qn=new X;class Od extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(La,Ia,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Ia,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(La,Ia,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Ia,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new X,xh=new gt,yh=new gt;class xn extends Od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,xh,yh),t.subVectors(yh,xh)}setViewOffset(e,t,n,i,s,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;s+=c.offsetX*i/d,t-=c.offsetY*n/h,i*=c.width/d,n*=c.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wx extends Il{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=qr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ax extends Qa{constructor(e,t,n=0,i=Math.PI/3,s=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=c,this.map=null,this.shadow=new wx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Rx extends Il{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}}class Cx extends Qa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class eo extends Od{constructor(e=-1,t=1,n=1,i=-1,s=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,c=n+e,l=i+t,d=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,c=s+h*this.view.width,l-=p*this.view.offsetY,d=l-p*this.view.height}this.projectionMatrix.makeOrthographic(s,c,l,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Px extends Il{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kd extends Qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Px}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ts{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ec=new WeakMap;class Lx extends _r{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,c=bi.get(`image-bitmap:${e}`);if(c!==void 0){if(s.manager.itemStart(e),c.then){c.then(h=>{if(ec.has(c)===!0)i&&i(ec.get(c)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(h),s.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(c),s.manager.itemEnd(e)},0),c}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return bi.add(`image-bitmap:${e}`,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),ec.set(d,h),bi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,d),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ur=-90,Or=1;class Ix extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new xn(Ur,Or,e,t);i.layers=this.layers,this.add(i);const s=new xn(Ur,Or,e,t);s.layers=this.layers,this.add(s);const c=new xn(Ur,Or,e,t);c.layers=this.layers,this.add(c);const l=new xn(Ur,Or,e,t);l.layers=this.layers,this.add(l);const d=new xn(Ur,Or,e,t);d.layers=this.layers,this.add(d);const h=new xn(Ur,Or,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,c,l,d]=t;for(const h of t)this.remove(h);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,l,d,h,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,2,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=w,e.setRenderTarget(n,5,i),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Dx extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dl="\\[\\]\\.:\\/",Fx=new RegExp("["+Dl+"]","g"),Fl="[^"+Dl+"]",Nx="[^"+Dl.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",Fl),Ox=/(WCOD+)?/.source.replace("WCOD",Nx),kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),zx=new RegExp("^"+Ux+Ox+kx+Bx+"$"),Vx=["material","materials","bones","map"];class Hx{constructor(e,t,n){const i=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class It{constructor(e,t,n){this.path=t,this.parsedPath=n||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,n):new It(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fx,"")}static parseTrackName(e){const t=zx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Vx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let c=0;c<s.length;c++){const l=s[c];if(l.name===t||l.uuid===t)return l;const d=n(l.children);if(d)return d}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[i];if(c===void 0){const h=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=s}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=i;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=Hx;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Sh(r,e,t,n){const i=Gx(n);switch(t){case vd:return r*e;case ml:return r*e/i.components*i.byteLength;case gl:return r*e/i.components*i.byteLength;case jr:return r*e*2/i.components*i.byteLength;case _l:return r*e*2/i.components*i.byteLength;case xd:return r*e*3/i.components*i.byteLength;case Nn:return r*e*4/i.components*i.byteLength;case vl:return r*e*4/i.components*i.byteLength;case Oa:case ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mc:case bc:return Math.max(r,16)*Math.max(e,8)/4;case Sc:case Ec:return Math.max(r,8)*Math.max(e,8)/2;case Tc:case wc:case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Pc:case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case $c:case jc:case qc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Yc:case Kc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Zc:case Jc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gx(r){switch(r){case An:case pd:return{byteLength:1,components:1};case Rs:case md:case Ri:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case li:case dl:case Fn:return{byteLength:4,components:1};case gd:case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);function Bd(){let r=null,e=!1,t=null,n=null;function i(s,c){t(s,c),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wx(r){const e=new WeakMap;function t(l,d){const h=l.array,p=l.usage,g=h.byteLength,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,h,p),l.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=r.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,d,h){const p=d.array,g=d.updateRanges;if(r.bindBuffer(h,l),g.length===0)r.bufferSubData(h,0,p);else{g.sort((_,S)=>_.start-S.start);let m=0;for(let _=1;_<g.length;_++){const S=g[m],w=g[_];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++m,g[m]=w)}g.length=m+1;for(let _=0,S=g.length;_<S;_++){const w=g[_];r.bufferSubData(h,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=e.get(l);d&&(r.deleteBuffer(d.buffer),e.delete(l))}function c(l,d){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,d));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,d),h.version=l.version}}return{get:i,remove:s,update:c}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
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
#endif`,jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
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
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
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
#endif`,ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ry=`#ifdef USE_IRIDESCENCE
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
#endif`,sy=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,py=`#define PI 3.141592653589793
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
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gy=`vec3 transformedNormal = objectNormal;
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
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
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
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uy=`uniform bool receiveShadow;
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
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
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
#endif`,Gy=`uniform sampler2D dfgLUT;
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
}`,Wy=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eS=`#if defined( USE_POINTS_UV )
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
#endif`,tS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`#ifdef USE_MORPHTARGETS
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
#endif`,oS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
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
#endif`,pS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ES=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CS=`float getShadowMask() {
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
}`,PS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,FS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,US=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#ifdef USE_TRANSMISSION
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XS=`uniform sampler2D t2D;
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`#include <common>
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
}`,ZS=`#if DEPTH_PACKING == 3200
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
}`,JS=`#define DISTANCE
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
}`,QS=`#define DISTANCE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#include <common>
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
}`,sM=`uniform vec3 diffuse;
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
}`,aM=`#define LAMBERT
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
}`,oM=`#define LAMBERT
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
}`,cM=`#define MATCAP
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
}`,lM=`#define MATCAP
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
}`,uM=`#define NORMAL
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
}`,hM=`#define NORMAL
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
}`,dM=`#define PHONG
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
}`,fM=`#define PHONG
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
}`,pM=`#define STANDARD
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
}`,mM=`#define STANDARD
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
}`,gM=`#define TOON
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
}`,_M=`#define TOON
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
}`,vM=`uniform float size;
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#include <common>
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
}`,SM=`uniform vec3 color;
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
}`,MM=`uniform float rotation;
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
}`,EM=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Xx,alphahash_pars_fragment:$x,alphamap_fragment:jx,alphamap_pars_fragment:qx,alphatest_fragment:Yx,alphatest_pars_fragment:Kx,aomap_fragment:Zx,aomap_pars_fragment:Jx,batching_pars_vertex:Qx,batching_vertex:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:ry,bumpmap_pars_fragment:sy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:cy,clipping_planes_vertex:ly,color_fragment:uy,color_pars_fragment:hy,color_pars_vertex:dy,color_vertex:fy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:_y,displacementmap_vertex:vy,emissivemap_fragment:xy,emissivemap_pars_fragment:yy,colorspace_fragment:Sy,colorspace_pars_fragment:My,envmap_fragment:Ey,envmap_common_pars_fragment:by,envmap_pars_fragment:Ty,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Oy,envmap_vertex:Ay,fog_vertex:Ry,fog_pars_vertex:Cy,fog_fragment:Py,fog_pars_fragment:Ly,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Dy,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Uy,lights_toon_fragment:ky,lights_toon_pars_fragment:By,lights_phong_fragment:zy,lights_phong_pars_fragment:Vy,lights_physical_fragment:Hy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Wy,lights_fragment_maps:Xy,lights_fragment_end:$y,logdepthbuf_fragment:jy,logdepthbuf_pars_fragment:qy,logdepthbuf_pars_vertex:Yy,logdepthbuf_vertex:Ky,map_fragment:Zy,map_pars_fragment:Jy,map_particle_fragment:Qy,map_particle_pars_fragment:eS,metalnessmap_fragment:tS,metalnessmap_pars_fragment:nS,morphinstance_vertex:iS,morphcolor_vertex:rS,morphnormal_vertex:sS,morphtarget_pars_vertex:aS,morphtarget_vertex:oS,normal_fragment_begin:cS,normal_fragment_maps:lS,normal_pars_fragment:uS,normal_pars_vertex:hS,normal_vertex:dS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:pS,clearcoat_normal_fragment_maps:mS,clearcoat_pars_fragment:gS,iridescence_pars_fragment:_S,opaque_fragment:vS,packing:xS,premultiplied_alpha_fragment:yS,project_vertex:SS,dithering_fragment:MS,dithering_pars_fragment:ES,roughnessmap_fragment:bS,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:AS,shadowmap_vertex:RS,shadowmask_pars_fragment:CS,skinbase_vertex:PS,skinning_pars_vertex:LS,skinning_vertex:IS,skinnormal_vertex:DS,specularmap_fragment:FS,specularmap_pars_fragment:NS,tonemapping_fragment:US,tonemapping_pars_fragment:OS,transmission_fragment:kS,transmission_pars_fragment:BS,uv_pars_fragment:zS,uv_pars_vertex:VS,uv_vertex:HS,worldpos_vertex:GS,background_vert:WS,background_frag:XS,backgroundCube_vert:$S,backgroundCube_frag:jS,cube_vert:qS,cube_frag:YS,depth_vert:KS,depth_frag:ZS,distance_vert:JS,distance_frag:QS,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:aM,meshlambert_frag:oM,meshmatcap_vert:cM,meshmatcap_frag:lM,meshnormal_vert:uM,meshnormal_frag:hM,meshphong_vert:dM,meshphong_frag:fM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:_M,points_vert:vM,points_frag:xM,shadow_vert:yM,shadow_frag:SM,sprite_vert:MM,sprite_frag:EM},Ae={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ni={basic:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:vn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:vn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:vn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:vn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:vn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:vn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:vn([Ae.common,Ae.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:vn([Ae.lights,Ae.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ni.physical={uniforms:vn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Da={r:0,b:0,g:0},sr=new ui,bM=new nt;function TM(r,e,t,n,i,s){const c=new Ze(0);let l=i===!0?0:1,d,h,p=null,g=0,m=null;function _(L){let I=L.isScene===!0?L.background:null;if(I&&I.isTexture){const D=L.backgroundBlurriness>0;I=e.get(I,D)}return I}function S(L){let I=!1;const D=_(L);D===null?y(c,l):D&&D.isColor&&(y(D,1),I=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,s):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(L,I){const D=_(I);D&&(D.isCubeTexture||D.mapping===Ka)?(h===void 0&&(h=new Gt(new gr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Yr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),sr.copy(I.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(sr)),h.material.toneMapped=xt.getTransfer(D.colorSpace)!==Pt,(p!==D||g!==D.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,p=D,g=D.version,m=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(d===void 0&&(d=new Gt(new Wi(2,2),new hi({name:"BackgroundMaterial",uniforms:Yr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=D,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=xt.getTransfer(D.colorSpace)!==Pt,D.matrixAutoUpdate===!0&&D.updateMatrix(),d.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||g!==D.version||m!==r.toneMapping)&&(d.material.needsUpdate=!0,p=D,g=D.version,m=r.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function y(L,I){L.getRGB(Da,Fd(r)),t.buffers.color.setClear(Da.r,Da.g,Da.b,I,s)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,I=1){c.set(L),l=I,y(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(L){l=L,y(c,l)},render:S,addToRenderList:w,dispose:x}}function wM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,c=!1;function l(B,Y,J,K,ie){let Z=!1;const te=g(B,K,J,Y);s!==te&&(s=te,h(s.object)),Z=_(B,K,J,ie),Z&&S(B,K,J,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,D(B,Y,J,K),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function d(){return r.createVertexArray()}function h(B){return r.bindVertexArray(B)}function p(B){return r.deleteVertexArray(B)}function g(B,Y,J,K){const ie=K.wireframe===!0;let Z=n[Y.id];Z===void 0&&(Z={},n[Y.id]=Z);const te=B.isInstancedMesh===!0?B.id:0;let pe=Z[te];pe===void 0&&(pe={},Z[te]=pe);let _e=pe[J.id];_e===void 0&&(_e={},pe[J.id]=_e);let Ce=_e[ie];return Ce===void 0&&(Ce=m(d()),_e[ie]=Ce),Ce}function m(B){const Y=[],J=[],K=[];for(let ie=0;ie<t;ie++)Y[ie]=0,J[ie]=0,K[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:K,object:B,attributes:{},index:null}}function _(B,Y,J,K){const ie=s.attributes,Z=Y.attributes;let te=0;const pe=J.getAttributes();for(const _e in pe)if(pe[_e].location>=0){const Ne=ie[_e];let Pe=Z[_e];if(Pe===void 0&&(_e==="instanceMatrix"&&B.instanceMatrix&&(Pe=B.instanceMatrix),_e==="instanceColor"&&B.instanceColor&&(Pe=B.instanceColor)),Ne===void 0||Ne.attribute!==Pe||Pe&&Ne.data!==Pe.data)return!0;te++}return s.attributesNum!==te||s.index!==K}function S(B,Y,J,K){const ie={},Z=Y.attributes;let te=0;const pe=J.getAttributes();for(const _e in pe)if(pe[_e].location>=0){let Ne=Z[_e];Ne===void 0&&(_e==="instanceMatrix"&&B.instanceMatrix&&(Ne=B.instanceMatrix),_e==="instanceColor"&&B.instanceColor&&(Ne=B.instanceColor));const Pe={};Pe.attribute=Ne,Ne&&Ne.data&&(Pe.data=Ne.data),ie[_e]=Pe,te++}s.attributes=ie,s.attributesNum=te,s.index=K}function w(){const B=s.newAttributes;for(let Y=0,J=B.length;Y<J;Y++)B[Y]=0}function y(B){x(B,0)}function x(B,Y){const J=s.newAttributes,K=s.enabledAttributes,ie=s.attributeDivisors;J[B]=1,K[B]===0&&(r.enableVertexAttribArray(B),K[B]=1),ie[B]!==Y&&(r.vertexAttribDivisor(B,Y),ie[B]=Y)}function L(){const B=s.newAttributes,Y=s.enabledAttributes;for(let J=0,K=Y.length;J<K;J++)Y[J]!==B[J]&&(r.disableVertexAttribArray(J),Y[J]=0)}function I(B,Y,J,K,ie,Z,te){te===!0?r.vertexAttribIPointer(B,Y,J,ie,Z):r.vertexAttribPointer(B,Y,J,K,ie,Z)}function D(B,Y,J,K){w();const ie=K.attributes,Z=J.getAttributes(),te=Y.defaultAttributeValues;for(const pe in Z){const _e=Z[pe];if(_e.location>=0){let Ce=ie[pe];if(Ce===void 0&&(pe==="instanceMatrix"&&B.instanceMatrix&&(Ce=B.instanceMatrix),pe==="instanceColor"&&B.instanceColor&&(Ce=B.instanceColor)),Ce!==void 0){const Ne=Ce.normalized,Pe=Ce.itemSize,Je=e.get(Ce);if(Je===void 0)continue;const et=Je.buffer,ut=Je.type,ce=Je.bytesPerElement,ye=ut===r.INT||ut===r.UNSIGNED_INT||Ce.gpuType===dl;if(Ce.isInterleavedBufferAttribute){const se=Ce.data,Ee=se.stride,We=Ce.offset;if(se.isInstancedInterleavedBuffer){for(let je=0;je<_e.locationSize;je++)x(_e.location+je,se.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let je=0;je<_e.locationSize;je++)y(_e.location+je);r.bindBuffer(r.ARRAY_BUFFER,et);for(let je=0;je<_e.locationSize;je++)I(_e.location+je,Pe/_e.locationSize,ut,Ne,Ee*ce,(We+Pe/_e.locationSize*je)*ce,ye)}else{if(Ce.isInstancedBufferAttribute){for(let se=0;se<_e.locationSize;se++)x(_e.location+se,Ce.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let se=0;se<_e.locationSize;se++)y(_e.location+se);r.bindBuffer(r.ARRAY_BUFFER,et);for(let se=0;se<_e.locationSize;se++)I(_e.location+se,Pe/_e.locationSize,ut,Ne,Pe*ce,Pe/_e.locationSize*se*ce,ye)}}else if(te!==void 0){const Ne=te[pe];if(Ne!==void 0)switch(Ne.length){case 2:r.vertexAttrib2fv(_e.location,Ne);break;case 3:r.vertexAttrib3fv(_e.location,Ne);break;case 4:r.vertexAttrib4fv(_e.location,Ne);break;default:r.vertexAttrib1fv(_e.location,Ne)}}}}L()}function O(){F();for(const B in n){const Y=n[B];for(const J in Y){const K=Y[J];for(const ie in K){const Z=K[ie];for(const te in Z)p(Z[te].object),delete Z[te];delete K[ie]}}delete n[B]}}function P(B){if(n[B.id]===void 0)return;const Y=n[B.id];for(const J in Y){const K=Y[J];for(const ie in K){const Z=K[ie];for(const te in Z)p(Z[te].object),delete Z[te];delete K[ie]}}delete n[B.id]}function V(B){for(const Y in n){const J=n[Y];for(const K in J){const ie=J[K];if(ie[B.id]===void 0)continue;const Z=ie[B.id];for(const te in Z)p(Z[te].object),delete Z[te];delete ie[B.id]}}}function A(B){for(const Y in n){const J=n[Y],K=B.isInstancedMesh===!0?B.id:0,ie=J[K];if(ie!==void 0){for(const Z in ie){const te=ie[Z];for(const pe in te)p(te[pe].object),delete te[pe];delete ie[Z]}delete J[K],Object.keys(J).length===0&&delete n[Y]}}}function F(){k(),c=!0,s!==i&&(s=i,h(s.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:F,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:V,initAttributes:w,enableAttribute:y,disableUnusedAttributes:L}}function AM(r,e,t){let n;function i(h){n=h}function s(h,p){r.drawArrays(n,h,p),t.update(p,n,1)}function c(h,p,g){g!==0&&(r.drawArraysInstanced(n,h,p,g),t.update(p,n,g))}function l(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,g);let _=0;for(let S=0;S<g;S++)_+=p[S];t.update(_,n,1)}function d(h,p,g,m){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<h.length;S++)c(h[S],p[S],m[S]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,p,0,m,0,g);let S=0;for(let w=0;w<g;w++)S+=p[w]*m[w];t.update(S,n,1)}}this.setMode=i,this.render=s,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function RM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function c(V){return!(V!==Nn&&n.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(V){const A=V===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==An&&n.convert(V)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Fn&&!A)}function d(V){if(V==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(He("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:D,maxSamples:O,samples:P}}function CM(r){const e=this;let t=null,n=0,i=!1,s=!1;const c=new lr,l=new st,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||n!==0||i;return i=m,n=g.length,_},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,_){const S=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,x=r.get(g);if(!i||S===null||S.length===0||s&&!y)s?p(null):h();else{const L=s?0:n,I=L*4;let D=x.clippingState||null;d.value=D,D=p(S,m,I,_);for(let O=0;O!==I;++O)D[O]=t[O];x.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,m,_,S){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=d.value,S!==!0||y===null){const x=_+w*4,L=m.matrixWorldInverse;l.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let I=0,D=_;I!==w;++I,D+=4)c.copy(g[I]).applyMatrix4(L,l),c.normal.toArray(y,D),y[D+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const Xi=4,Mh=[.125,.215,.35,.446,.526,.582],hr=20,PM=256,gs=new eo,Eh=new Ze;let tc=null,nc=0,ic=0,rc=!1;const LM=new X;class bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:c=256,position:l=LM}=s;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,i,d,l),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=rc,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ri,format:Nn,colorSpace:yn,depthBuffer:!1},i=Th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IM(s)),this._blurMaterial=FM(s,e,t),this._ggxMaterial=DM(s,e,t)}return i}_compileMaterial(e){const t=new Gt(new tn,e);this._renderer.compile(t,gs)}_sceneToCubeUV(e,t,n,i,s){const d=new xn(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(Eh),g.toneMapping=ai,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(i),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gt(new gr,new Dn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let x=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,x=!0):(y.color.copy(Eh),x=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(d.up.set(0,h[I],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x+p[I],s.y,s.z)):D===1?(d.up.set(0,0,h[I]),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y+p[I],s.z)):(d.up.set(0,h[I],0),d.position.set(s.x,s.y,s.z),d.lookAt(s.x,s.y,s.z+p[I]));const O=this._cubeSize;kr(i,D*O,I>2?O:0,O,O),g.setRenderTarget(i),x&&g.render(w,d),g.render(e,d)}g.toneMapping=_,g.autoClear=m,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pr||e.mapping===$r;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const s=i?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=s;const l=s.uniforms;l.envMap.value=e;const d=this._cubeSize;kr(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(c,gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,c=this._ggxMaterial,l=this._lodMeshes[n];l.material=c;const d=c.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-p*p),m=0+h*1.25,_=g*m,{_lodMax:S}=this,w=this._sizeLods[n],y=3*w*(n>S-Xi?n-S+Xi:0),x=4*(this._cubeSize-w);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=S-t,kr(s,y,x,3*w,2*w),i.setRenderTarget(s),i.render(l,gs),d.envMap.value=s.texture,d.roughness.value=0,d.mipInt.value=S-n,kr(e,y,x,3*w,2*w),i.setRenderTarget(e),i.render(l,gs)}_blur(e,t,n,i,s){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,i,"latitudinal",s),this._halfBlur(c,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,c,l){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[i];g.material=h;const m=h.uniforms,_=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*hr-1),w=s/S,y=isFinite(s)?1+Math.floor(p*w):hr;y>hr&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${hr}`);const x=[];let L=0;for(let V=0;V<hr;++V){const A=V/w,F=Math.exp(-A*A/2);x.push(F),V===0?L+=F:V<y&&(L+=2*F)}for(let V=0;V<x.length;V++)x[V]=x[V]/L;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=x,m.latitudinal.value=c==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:I}=this;m.dTheta.value=S,m.mipInt.value=I-n;const D=this._sizeLods[i],O=3*D*(i>I-Xi?i-I+Xi:0),P=4*(this._cubeSize-D);kr(t,O,P,3*D,2*D),d.setRenderTarget(t),d.render(g,gs)}}function IM(r){const e=[],t=[],n=[];let i=r;const s=r-Xi+1+Mh.length;for(let c=0;c<s;c++){const l=Math.pow(2,i);e.push(l);let d=1/l;c>r-Xi?d=Mh[c-r+Xi-1]:c===0&&(d=0),t.push(d);const h=1/(l-2),p=-h,g=1+h,m=[p,p,g,p,g,g,p,p,g,g,p,g],_=6,S=6,w=3,y=2,x=1,L=new Float32Array(w*S*_),I=new Float32Array(y*S*_),D=new Float32Array(x*S*_);for(let P=0;P<_;P++){const V=P%3*2/3-1,A=P>2?0:-1,F=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];L.set(F,w*S*P),I.set(m,y*S*P);const k=[P,P,P,P,P,P];D.set(k,x*S*P)}const O=new tn;O.setAttribute("position",new cn(L,w)),O.setAttribute("uv",new cn(I,y)),O.setAttribute("faceIndex",new cn(D,x)),n.push(new Gt(O,null)),i>Xi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Th(r,e,t){const n=new oi(r,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function DM(r,e,t){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:to(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function FM(r,e,t){const n=new Float32Array(hr),i=new X(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:to(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function wh(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ah(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}class zd extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Id(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gr(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Ti});s.uniforms.tEquirect.value=t;const c=new Gt(i,s),l=t.minFilter;return t.minFilter===Ei&&(t.minFilter=en),new Ix(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,i);e.setRenderTarget(s)}}function NM(r){let e=new WeakMap,t=new WeakMap,n=null;function i(m,_=!1){return m==null?null:_?c(m):s(m)}function s(m){if(m&&m.isTexture){const _=m.mapping;if(_===Mo||_===Eo)if(e.has(m)){const S=e.get(m).texture;return l(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const w=new zd(S.height);return w.fromEquirectangularTexture(r,m),e.set(m,w),m.addEventListener("dispose",h),l(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,S=_===Mo||_===Eo,w=_===pr||_===$r;if(S||w){let y=t.get(m);const x=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return n===null&&(n=new bh(r)),y=S?n.fromEquirectangular(m,y):n.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const L=m.image;return S&&L&&L.height>0||w&&L&&d(L)?(n===null&&(n=new bh(r)),y=S?n.fromEquirectangular(m):n.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",p),y.texture):null}}}return m}function l(m,_){return _===Mo?m.mapping=pr:_===Eo&&(m.mapping=$r),m}function d(m){let _=0;const S=6;for(let w=0;w<S;w++)m[w]!==void 0&&_++;return _===S}function h(m){const _=m.target;_.removeEventListener("dispose",h);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function p(m){const _=m.target;_.removeEventListener("dispose",p);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:g}}function UM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&$a("WebGLRenderer: "+n+" extension not supported."),i}}}function OM(r,e,t,n){const i={},s=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",c),delete i[m.id];const _=s.get(m);_&&(e.remove(_),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(g,m){return i[m.id]===!0||(m.addEventListener("dispose",c),i[m.id]=!0,t.memory.geometries++),m}function d(g){const m=g.attributes;for(const _ in m)e.update(m[_],r.ARRAY_BUFFER)}function h(g){const m=[],_=g.index,S=g.attributes.position;let w=0;if(S===void 0)return;if(_!==null){const L=_.array;w=_.version;for(let I=0,D=L.length;I<D;I+=3){const O=L[I+0],P=L[I+1],V=L[I+2];m.push(O,P,P,V,V,O)}}else{const L=S.array;w=S.version;for(let I=0,D=L.length/3-1;I<D;I+=3){const O=I+0,P=I+1,V=I+2;m.push(O,P,P,V,V,O)}}const y=new(S.count>=65535?Ad:wd)(m,1);y.version=w;const x=s.get(g);x&&e.remove(x),s.set(g,y)}function p(g){const m=s.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&h(g)}else h(g);return s.get(g)}return{get:l,update:d,getWireframeAttribute:p}}function kM(r,e,t){let n;function i(m){n=m}let s,c;function l(m){s=m.type,c=m.bytesPerElement}function d(m,_){r.drawElements(n,_,s,m*c),t.update(_,n,1)}function h(m,_,S){S!==0&&(r.drawElementsInstanced(n,_,s,m*c,S),t.update(_,n,S))}function p(m,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,m,0,S);let y=0;for(let x=0;x<S;x++)y+=_[x];t.update(y,n,1)}function g(m,_,S,w){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<m.length;x++)h(m[x]/c,_[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(n,_,0,s,m,0,w,0,S);let x=0;for(let L=0;L<S;L++)x+=_[L]*w[L];t.update(x,n,1)}}this.setMode=i,this.setIndex=l,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function BM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,c,l){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:Ye("WebGLInfo: Unknown draw mode:",c);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zM(r,e,t){const n=new WeakMap,i=new Ot;function s(c,l,d){const h=c.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=p!==void 0?p.length:0;let m=n.get(l);if(m===void 0||m.count!==g){let F=function(){V.dispose(),n.delete(l),l.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const _=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,y=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],L=l.morphAttributes.color||[];let I=0;_===!0&&(I=1),S===!0&&(I=2),w===!0&&(I=3);let D=l.attributes.position.count*I,O=1;D>e.maxTextureSize&&(O=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const P=new Float32Array(D*O*4*g),V=new Ed(P,D,O,g);V.type=Fn,V.needsUpdate=!0;const A=I*4;for(let k=0;k<g;k++){const B=y[k],Y=x[k],J=L[k],K=D*O*4*k;for(let ie=0;ie<B.count;ie++){const Z=ie*A;_===!0&&(i.fromBufferAttribute(B,ie),P[K+Z+0]=i.x,P[K+Z+1]=i.y,P[K+Z+2]=i.z,P[K+Z+3]=0),S===!0&&(i.fromBufferAttribute(Y,ie),P[K+Z+4]=i.x,P[K+Z+5]=i.y,P[K+Z+6]=i.z,P[K+Z+7]=0),w===!0&&(i.fromBufferAttribute(J,ie),P[K+Z+8]=i.x,P[K+Z+9]=i.y,P[K+Z+10]=i.z,P[K+Z+11]=J.itemSize===4?i.w:1)}}m={count:g,texture:V,size:new gt(D,O)},n.set(l,m),l.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let _=0;for(let w=0;w<h.length;w++)_+=h[w];const S=l.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function VM(r,e,t,n,i){let s=new WeakMap;function c(h){const p=i.render.frame,g=h.geometry,m=e.get(h,g);if(s.get(m)!==p&&(e.update(m),s.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),s.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==p&&(_.update(),s.set(_,p))}return m}function l(){s=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:l}}const HM={[ad]:"LINEAR_TONE_MAPPING",[od]:"REINHARD_TONE_MAPPING",[cd]:"CINEON_TONE_MAPPING",[hl]:"ACES_FILMIC_TONE_MAPPING",[ud]:"AGX_TONE_MAPPING",[hd]:"NEUTRAL_TONE_MAPPING",[ld]:"CUSTOM_TONE_MAPPING"};function GM(r,e,t,n,i){const s=new oi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),c=new oi(e,t,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),l=new tn;l.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ln([0,2,0,0,2,0],2));const d=new lx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Gt(l,d),p=new eo(-1,1,1,-1,0,1);let g=null,m=null,_=!1,S,w=null,y=[],x=!1;this.setSize=function(L,I){s.setSize(L,I),c.setSize(L,I);for(let D=0;D<y.length;D++){const O=y[D];O.setSize&&O.setSize(L,I)}},this.setEffects=function(L){y=L,x=y.length>0&&y[0].isRenderPass===!0;const I=s.width,D=s.height;for(let O=0;O<y.length;O++){const P=y[O];P.setSize&&P.setSize(I,D)}},this.begin=function(L,I){if(_||L.toneMapping===ai&&y.length===0)return!1;if(w=I,I!==null){const D=I.width,O=I.height;(s.width!==D||s.height!==O)&&this.setSize(D,O)}return x===!1&&L.setRenderTarget(s),S=L.toneMapping,L.toneMapping=ai,!0},this.hasRenderPass=function(){return x},this.end=function(L,I){L.toneMapping=S,_=!0;let D=s,O=c;for(let P=0;P<y.length;P++){const V=y[P];if(V.enabled!==!1&&(V.render(L,O,D,I),V.needsSwap!==!1)){const A=D;D=O,O=A}}if(g!==L.outputColorSpace||m!==L.toneMapping){g=L.outputColorSpace,m=L.toneMapping,d.defines={},xt.getTransfer(g)===Pt&&(d.defines.SRGB_TRANSFER="");const P=HM[m];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(w),L.render(h,p),w=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),c.dispose(),l.dispose(),d.dispose()}}const Vd=new nn,rl=new Ns(1,1),Hd=new Ed,Gd=new Iv,Wd=new Id,Rh=[],Ch=[],Ph=new Float32Array(16),Lh=new Float32Array(9),Ih=new Float32Array(4);function rs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Rh[i];if(s===void 0&&(s=new Float32Array(i),Rh[i]=s),e!==0){n.toArray(s,0);for(let c=1,l=0;c!==e;++c)l+=t,r[c].toArray(s,l)}return s}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function no(r,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function WM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function jM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function qM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Ih.set(n),r.uniformMatrix2fv(this.addr,!1,Ih),sn(t,n)}}function YM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Lh.set(n),r.uniformMatrix3fv(this.addr,!1,Lh),sn(t,n)}}function KM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Ph.set(n),r.uniformMatrix4fv(this.addr,!1,Ph),sn(t,n)}}function ZM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function eE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function tE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function iE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function rE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function sE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(rl.compareFunction=t.isReversedDepthBuffer()?yl:xl,s=rl):s=Vd,t.setTexture2D(e||s,i)}function aE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gd,i)}function oE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wd,i)}function cE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hd,i)}function lE(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return $M;case 35666:return jM;case 35674:return qM;case 35675:return YM;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return cE}}function uE(r,e){r.uniform1fv(this.addr,e)}function hE(r,e){const t=rs(e,this.size,2);r.uniform2fv(this.addr,t)}function dE(r,e){const t=rs(e,this.size,3);r.uniform3fv(this.addr,t)}function fE(r,e){const t=rs(e,this.size,4);r.uniform4fv(this.addr,t)}function pE(r,e){const t=rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mE(r,e){const t=rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gE(r,e){const t=rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _E(r,e){r.uniform1iv(this.addr,e)}function vE(r,e){r.uniform2iv(this.addr,e)}function xE(r,e){r.uniform3iv(this.addr,e)}function yE(r,e){r.uniform4iv(this.addr,e)}function SE(r,e){r.uniform1uiv(this.addr,e)}function ME(r,e){r.uniform2uiv(this.addr,e)}function EE(r,e){r.uniform3uiv(this.addr,e)}function bE(r,e){r.uniform4uiv(this.addr,e)}function TE(r,e,t){const n=this.cache,i=e.length,s=no(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let c;this.type===r.SAMPLER_2D_SHADOW?c=rl:c=Vd;for(let l=0;l!==i;++l)t.setTexture2D(e[l]||c,s[l])}function wE(r,e,t){const n=this.cache,i=e.length,s=no(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let c=0;c!==i;++c)t.setTexture3D(e[c]||Gd,s[c])}function AE(r,e,t){const n=this.cache,i=e.length,s=no(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let c=0;c!==i;++c)t.setTextureCube(e[c]||Wd,s[c])}function RE(r,e,t){const n=this.cache,i=e.length,s=no(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let c=0;c!==i;++c)t.setTexture2DArray(e[c]||Hd,s[c])}function CE(r){switch(r){case 5126:return uE;case 35664:return hE;case 35665:return dE;case 35666:return fE;case 35674:return pE;case 35675:return mE;case 35676:return gE;case 5124:case 35670:return _E;case 35667:case 35671:return vE;case 35668:case 35672:return xE;case 35669:case 35673:return yE;case 5125:return SE;case 36294:return ME;case 36295:return EE;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return wE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return RE}}class PE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lE(t.type)}}class LE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CE(t.type)}}class IE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,c=i.length;s!==c;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function Dh(r,e){r.seq.push(e),r.map[e.id]=e}function DE(r,e,t){const n=r.name,i=n.length;for(sc.lastIndex=0;;){const s=sc.exec(n),c=sc.lastIndex;let l=s[1];const d=s[2]==="]",h=s[3];if(d&&(l=l|0),h===void 0||h==="["&&c+2===i){Dh(t,h===void 0?new PE(l,r,e):new LE(l,r,e));break}else{let g=t.map[l];g===void 0&&(g=new IE(l),Dh(t,g)),t=g}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<n;++c){const l=e.getActiveUniform(t,c),d=e.getUniformLocation(t,l.name);DE(l,d,this)}const i=[],s=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(c):s.push(c);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,c=t.length;s!==c;++s){const l=t[s],d=n[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const c=e[i];c.id in t&&n.push(c)}return n}}function Fh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const FE=37297;let NE=0;function UE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let c=i;c<s;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}const Nh=new st;function OE(r){xt._getMatrix(Nh,xt.workingColorSpace,r);const e=`mat3( ${Nh.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(r)){case Wa:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Uh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const c=/ERROR: 0:(\d+)/.exec(s);if(c){const l=parseInt(c[1]);return t.toUpperCase()+`

`+s+`

`+UE(r.getShaderSource(e),l)}else return s}function kE(r,e){const t=OE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const BE={[ad]:"Linear",[od]:"Reinhard",[cd]:"Cineon",[hl]:"ACESFilmic",[ud]:"AgX",[hd]:"Neutral",[ld]:"Custom"};function zE(r,e){const t=BE[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fa=new X;function VE(){xt.getLuminanceCoefficients(Fa);const r=Fa.x.toFixed(4),e=Fa.y.toFixed(4),t=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function GE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function WE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),c=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[c]={type:s.type,location:r.getAttribLocation(e,c),locationSize:l}}return t}function Ss(r){return r!==""}function Oh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XE=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(r){return r.replace(XE,jE)}const $E=new Map;function jE(r,e){let t=ot[e];if(t===void 0){const n=$E.get(e);if(n!==void 0)t=ot[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sl(t)}const qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(r){return r.replace(qE,YE)}function YE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KE={[Na]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function ZE(r){return KE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JE={[pr]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE_UV"};function QE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":JE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const eb={[$r]:"ENVMAP_MODE_REFRACTION"};function tb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":eb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nb={[sd]:"ENVMAP_BLENDING_MULTIPLY",[$0]:"ENVMAP_BLENDING_MIX",[j0]:"ENVMAP_BLENDING_ADD"};function ib(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":nb[r.combine]||"ENVMAP_BLENDING_NONE"}function rb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sb(r,e,t,n){const i=r.getContext(),s=t.defines;let c=t.vertexShader,l=t.fragmentShader;const d=ZE(t),h=QE(t),p=tb(t),g=ib(t),m=rb(t),_=HE(t),S=GE(s),w=i.createProgram();let y,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ss).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ss).join(`
`),x.length>0&&(x+=`
`)):(y=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),x=[zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?ot.tonemapping_pars_fragment:"",t.toneMapping!==ai?zE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,kE("linearToOutputTexel",t.outputColorSpace),VE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),c=sl(c),c=Oh(c,t),c=kh(c,t),l=sl(l),l=Oh(l,t),l=kh(l,t),c=Bh(c),l=Bh(l),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=L+y+c,D=L+x+l,O=Fh(i,i.VERTEX_SHADER,I),P=Fh(i,i.FRAGMENT_SHADER,D);i.attachShader(w,O),i.attachShader(w,P),t.index0AttributeName!==void 0?i.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(w,0,"position"),i.linkProgram(w);function V(B){if(r.debug.checkShaderErrors){const Y=i.getProgramInfoLog(w)||"",J=i.getShaderInfoLog(O)||"",K=i.getShaderInfoLog(P)||"",ie=Y.trim(),Z=J.trim(),te=K.trim();let pe=!0,_e=!0;if(i.getProgramParameter(w,i.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,w,O,P);else{const Ce=Uh(i,O,"vertex"),Ne=Uh(i,P,"fragment");Ye("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(w,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ie+`
`+Ce+`
`+Ne)}else ie!==""?He("WebGLProgram: Program Info Log:",ie):(Z===""||te==="")&&(_e=!1);_e&&(B.diagnostics={runnable:pe,programLog:ie,vertexShader:{log:Z,prefix:y},fragmentShader:{log:te,prefix:x}})}i.deleteShader(O),i.deleteShader(P),A=new Va(i,w),F=WE(i,w)}let A;this.getUniforms=function(){return A===void 0&&V(this),A};let F;this.getAttributes=function(){return F===void 0&&V(this),F};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(w,FE)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=P,this}let ab=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cb(e),t.set(e,n)),n}}class cb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function lb(r,e,t,n,i,s){const c=new bd,l=new ob,d=new Set,h=[],p=new Map,g=n.logarithmicDepthBuffer;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return d.add(A),A===0?"uv":`uv${A}`}function w(A,F,k,B,Y){const J=B.fog,K=Y.geometry,ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,Z=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,te=e.get(A.envMap||ie,Z),pe=te&&te.mapping===Ka?te.image.height:null,_e=_[A.type];A.precision!==null&&(m=n.getMaxPrecision(A.precision),m!==A.precision&&He("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const Ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ne=Ce!==void 0?Ce.length:0;let Pe=0;K.morphAttributes.position!==void 0&&(Pe=1),K.morphAttributes.normal!==void 0&&(Pe=2),K.morphAttributes.color!==void 0&&(Pe=3);let Je,et,ut,ce;if(_e){const ct=ni[_e];Je=ct.vertexShader,et=ct.fragmentShader}else Je=A.vertexShader,et=A.fragmentShader,l.update(A),ut=l.getVertexShaderID(A),ce=l.getFragmentShaderID(A);const ye=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),Ee=Y.isInstancedMesh===!0,We=Y.isBatchedMesh===!0,je=!!A.map,Rt=!!A.matcap,ft=!!te,_t=!!A.aoMap,Tt=!!A.lightMap,it=!!A.bumpMap,Bt=!!A.normalMap,H=!!A.displacementMap,Dt=!!A.emissiveMap,pt=!!A.metalnessMap,St=!!A.roughnessMap,Fe=A.anisotropy>0,N=A.clearcoat>0,b=A.dispersion>0,G=A.iridescence>0,ae=A.sheen>0,fe=A.transmission>0,oe=Fe&&!!A.anisotropyMap,Ue=N&&!!A.clearcoatMap,be=N&&!!A.clearcoatNormalMap,Ge=N&&!!A.clearcoatRoughnessMap,$e=G&&!!A.iridescenceMap,xe=G&&!!A.iridescenceThicknessMap,Me=ae&&!!A.sheenColorMap,Oe=ae&&!!A.sheenRoughnessMap,ke=!!A.specularMap,Le=!!A.specularColorMap,rt=!!A.specularIntensityMap,W=fe&&!!A.transmissionMap,Te=fe&&!!A.thicknessMap,Se=!!A.gradientMap,Re=!!A.alphaMap,$=A.alphaTest>0,z=!!A.alphaHash,Ie=!!A.extensions;let Ke=ai;A.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ke=r.toneMapping);const Mt={shaderID:_e,shaderType:A.type,shaderName:A.name,vertexShader:Je,fragmentShader:et,defines:A.defines,customVertexShaderID:ut,customFragmentShaderID:ce,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:We,batchingColor:We&&Y._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Y.instanceColor!==null,instancingMorph:Ee&&Y.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:yn,alphaToCoverage:!!A.alphaToCoverage,map:je,matcap:Rt,envMap:ft,envMapMode:ft&&te.mapping,envMapCubeUVHeight:pe,aoMap:_t,lightMap:Tt,bumpMap:it,normalMap:Bt,displacementMap:H,emissiveMap:Dt,normalMapObjectSpace:Bt&&A.normalMapType===J0,normalMapTangentSpace:Bt&&A.normalMapType===Sd,metalnessMap:pt,roughnessMap:St,anisotropy:Fe,anisotropyMap:oe,clearcoat:N,clearcoatMap:Ue,clearcoatNormalMap:be,clearcoatRoughnessMap:Ge,dispersion:b,iridescence:G,iridescenceMap:$e,iridescenceThicknessMap:xe,sheen:ae,sheenColorMap:Me,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Le,specularIntensityMap:rt,transmission:fe,transmissionMap:W,thicknessMap:Te,gradientMap:Se,opaque:A.transparent===!1&&A.blending===Vr&&A.alphaToCoverage===!1,alphaMap:Re,alphaTest:$,alphaHash:z,combine:A.combine,mapUv:je&&S(A.map.channel),aoMapUv:_t&&S(A.aoMap.channel),lightMapUv:Tt&&S(A.lightMap.channel),bumpMapUv:it&&S(A.bumpMap.channel),normalMapUv:Bt&&S(A.normalMap.channel),displacementMapUv:H&&S(A.displacementMap.channel),emissiveMapUv:Dt&&S(A.emissiveMap.channel),metalnessMapUv:pt&&S(A.metalnessMap.channel),roughnessMapUv:St&&S(A.roughnessMap.channel),anisotropyMapUv:oe&&S(A.anisotropyMap.channel),clearcoatMapUv:Ue&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&S(A.sheenRoughnessMap.channel),specularMapUv:ke&&S(A.specularMap.channel),specularColorMapUv:Le&&S(A.specularColorMap.channel),specularIntensityMapUv:rt&&S(A.specularIntensityMap.channel),transmissionMapUv:W&&S(A.transmissionMap.channel),thicknessMapUv:Te&&S(A.thicknessMap.channel),alphaMapUv:Re&&S(A.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Bt||Fe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!K.attributes.uv&&(je||Re),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||K.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:se,skinning:Y.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Pe,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ke,decodeVideoTexture:je&&A.map.isVideoTexture===!0&&xt.getTransfer(A.map.colorSpace)===Pt,decodeVideoTextureEmissive:Dt&&A.emissiveMap.isVideoTexture===!0&&xt.getTransfer(A.emissiveMap.colorSpace)===Pt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===wn,flipSided:A.side===En,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ie&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&A.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Mt.vertexUv1s=d.has(1),Mt.vertexUv2s=d.has(2),Mt.vertexUv3s=d.has(3),d.clear(),Mt}function y(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)F.push(k),F.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(x(F,A),L(F,A),F.push(r.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function x(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function L(A,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),A.push(c.mask)}function I(A){const F=_[A.type];let k;if(F){const B=ni[F];k=ax.clone(B.uniforms)}else k=A.uniforms;return k}function D(A,F){let k=p.get(F);return k!==void 0?++k.usedTimes:(k=new sb(r,F,A,i),h.push(k),p.set(F,k)),k}function O(A){if(--A.usedTimes===0){const F=h.indexOf(A);h[F]=h[h.length-1],h.pop(),p.delete(A.cacheKey),A.destroy()}}function P(A){l.remove(A)}function V(){l.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:I,acquireProgram:D,releaseProgram:O,releaseShaderCache:P,programs:h,dispose:V}}function ub(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let l=r.get(c);return l===void 0&&(l={},r.set(c,l)),l}function n(c){r.delete(c)}function i(c,l,d){r.get(c)[l]=d}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function hb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Vh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function l(m,_,S,w,y,x){let L=r[e];return L===void 0?(L={id:m.id,object:m,geometry:_,material:S,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:y,group:x},r[e]=L):(L.id=m.id,L.object=m,L.geometry=_,L.material=S,L.materialVariant=c(m),L.groupOrder=w,L.renderOrder=m.renderOrder,L.z=y,L.group=x),e++,L}function d(m,_,S,w,y,x){const L=l(m,_,S,w,y,x);S.transmission>0?n.push(L):S.transparent===!0?i.push(L):t.push(L)}function h(m,_,S,w,y,x){const L=l(m,_,S,w,y,x);S.transmission>0?n.unshift(L):S.transparent===!0?i.unshift(L):t.unshift(L)}function p(m,_){t.length>1&&t.sort(m||hb),n.length>1&&n.sort(_||Vh),i.length>1&&i.sort(_||Vh)}function g(){for(let m=e,_=r.length;m<_;m++){const S=r[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:d,unshift:h,finish:g,sort:p}}function db(){let r=new WeakMap;function e(n,i){const s=r.get(n);let c;return s===void 0?(c=new Hh,r.set(n,[c])):i>=s.length?(c=new Hh,s.push(c)):c=s[i],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function fb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Ze};break;case"SpotLight":t={position:new X,direction:new X,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function pb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let mb=0;function gb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _b(r){const e=new fb,t=pb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new X);const i=new X,s=new nt,c=new nt;function l(h){let p=0,g=0,m=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let _=0,S=0,w=0,y=0,x=0,L=0,I=0,D=0,O=0,P=0,V=0;h.sort(gb);for(let F=0,k=h.length;F<k;F++){const B=h[F],Y=B.color,J=B.intensity,K=B.distance;let ie=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===jr?ie=B.shadow.map.texture:ie=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=Y.r*J,g+=Y.g*J,m+=Y.b*J;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(B.sh.coefficients[Z],J);V++}else if(B.isDirectionalLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const te=B.shadow,pe=t.get(B);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,n.directionalShadow[_]=pe,n.directionalShadowMap[_]=ie,n.directionalShadowMatrix[_]=B.shadow.matrix,L++}n.directional[_]=Z,_++}else if(B.isSpotLight){const Z=e.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(Y).multiplyScalar(J),Z.distance=K,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,n.spot[w]=Z;const te=B.shadow;if(B.map&&(n.spotLightMap[O]=B.map,O++,te.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[w]=te.matrix,B.castShadow){const pe=t.get(B);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,n.spotShadow[w]=pe,n.spotShadowMap[w]=ie,D++}w++}else if(B.isRectAreaLight){const Z=e.get(B);Z.color.copy(Y).multiplyScalar(J),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),n.rectArea[y]=Z,y++}else if(B.isPointLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const te=B.shadow,pe=t.get(B);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,pe.shadowCameraNear=te.camera.near,pe.shadowCameraFar=te.camera.far,n.pointShadow[S]=pe,n.pointShadowMap[S]=ie,n.pointShadowMatrix[S]=B.shadow.matrix,I++}n.point[S]=Z,S++}else if(B.isHemisphereLight){const Z=e.get(B);Z.skyColor.copy(B.color).multiplyScalar(J),Z.groundColor.copy(B.groundColor).multiplyScalar(J),n.hemi[x]=Z,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const A=n.hash;(A.directionalLength!==_||A.pointLength!==S||A.spotLength!==w||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==L||A.numPointShadows!==I||A.numSpotShadows!==D||A.numSpotMaps!==O||A.numLightProbes!==V)&&(n.directional.length=_,n.spot.length=w,n.rectArea.length=y,n.point.length=S,n.hemi.length=x,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=D+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=V,A.directionalLength=_,A.pointLength=S,A.spotLength=w,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=L,A.numPointShadows=I,A.numSpotShadows=D,A.numSpotMaps=O,A.numLightProbes=V,n.version=mb++)}function d(h,p){let g=0,m=0,_=0,S=0,w=0;const y=p.matrixWorldInverse;for(let x=0,L=h.length;x<L;x++){const I=h[x];if(I.isDirectionalLight){const D=n.directional[g];D.direction.setFromMatrixPosition(I.matrixWorld),i.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(y),g++}else if(I.isSpotLight){const D=n.spot[_];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(I.matrixWorld),i.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(y),_++}else if(I.isRectAreaLight){const D=n.rectArea[S];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),c.identity(),s.copy(I.matrixWorld),s.premultiply(y),c.extractRotation(s),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),S++}else if(I.isPointLight){const D=n.point[m];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),m++}else if(I.isHemisphereLight){const D=n.hemi[w];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:l,setupView:d,state:n}}function Gh(r){const e=new _b(r),t=[],n=[];function i(p){h.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function c(p){n.push(p)}function l(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:l,setupLightsView:d,pushLight:s,pushShadow:c}}function vb(r){let e=new WeakMap;function t(i,s=0){const c=e.get(i);let l;return c===void 0?(l=new Gh(r),e.set(i,[l])):s>=c.length?(l=new Gh(r),c.push(l)):l=c[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yb=`uniform sampler2D shadow_pass;
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
}`,Sb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Mb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Wh=new nt,_s=new X,ac=new X;function Eb(r,e,t){let n=new Al;const i=new gt,s=new gt,c=new Ot,l=new ux,d=new hx,h={},p=t.maxTextureSize,g={[Ai]:En,[En]:Ai,[wn]:wn},m=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:xb,fragmentShader:yb}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const S=new tn;S.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Gt(S,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Na;let x=this.type;this.render=function(P,V,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===rd&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Na);const F=r.getRenderTarget(),k=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Ti),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=x!==this.type;J&&V.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(ie=>ie.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,ie=P.length;K<ie;K++){const Z=P[K],te=Z.shadow;if(te===void 0){He("WebGLShadowMap:",Z,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);const pe=te.getFrameExtents();i.multiply(pe),s.copy(te.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(s.x=Math.floor(p/pe.x),i.x=s.x*pe.x,te.mapSize.x=s.x),i.y>p&&(s.y=Math.floor(p/pe.y),i.y=s.y*pe.y,te.mapSize.y=s.y));const _e=r.state.buffers.depth.getReversed();if(te.camera._reversedDepth=_e,te.map===null||J===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===xs){if(Z.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new oi(i.x,i.y,{format:jr,type:Ri,minFilter:en,magFilter:en,generateMipmaps:!1}),te.map.texture.name=Z.name+".shadowMap",te.map.depthTexture=new Ns(i.x,i.y,Fn),te.map.depthTexture.name=Z.name+".shadowMapDepth",te.map.depthTexture.format=Ci,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Qt,te.map.depthTexture.magFilter=Qt}else Z.isPointLight?(te.map=new zd(i.x),te.map.depthTexture=new nx(i.x,li)):(te.map=new oi(i.x,i.y),te.map.depthTexture=new Ns(i.x,i.y,li)),te.map.depthTexture.name=Z.name+".shadowMap",te.map.depthTexture.format=Ci,this.type===Na?(te.map.depthTexture.compareFunction=_e?yl:xl,te.map.depthTexture.minFilter=en,te.map.depthTexture.magFilter=en):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Qt,te.map.depthTexture.magFilter=Qt);te.camera.updateProjectionMatrix()}const Ce=te.map.isWebGLCubeRenderTarget?6:1;for(let Ne=0;Ne<Ce;Ne++){if(te.map.isWebGLCubeRenderTarget)r.setRenderTarget(te.map,Ne),r.clear();else{Ne===0&&(r.setRenderTarget(te.map),r.clear());const Pe=te.getViewport(Ne);c.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),Y.viewport(c)}if(Z.isPointLight){const Pe=te.camera,Je=te.matrix,et=Z.distance||Pe.far;et!==Pe.far&&(Pe.far=et,Pe.updateProjectionMatrix()),_s.setFromMatrixPosition(Z.matrixWorld),Pe.position.copy(_s),ac.copy(Pe.position),ac.add(Sb[Ne]),Pe.up.copy(Mb[Ne]),Pe.lookAt(ac),Pe.updateMatrixWorld(),Je.makeTranslation(-_s.x,-_s.y,-_s.z),Wh.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),te._frustum.setFromProjectionMatrix(Wh,Pe.coordinateSystem,Pe.reversedDepth)}else te.updateMatrices(Z);n=te.getFrustum(),D(V,A,te.camera,Z,this.type)}te.isPointLightShadow!==!0&&this.type===xs&&L(te,A),te.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(F,k,B)};function L(P,V){const A=e.update(w);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new oi(i.x,i.y,{format:jr,type:Ri})),m.uniforms.shadow_pass.value=P.map.depthTexture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(V,null,A,m,w,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(V,null,A,_,w,null)}function I(P,V,A,F){let k=null;const B=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)k=B;else if(k=A.isPointLight===!0?d:l,r.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Y=k.uuid,J=V.uuid;let K=h[Y];K===void 0&&(K={},h[Y]=K);let ie=K[J];ie===void 0&&(ie=k.clone(),K[J]=ie,V.addEventListener("dispose",O)),k=ie}if(k.visible=V.visible,k.wireframe=V.wireframe,F===xs?k.side=V.shadowSide!==null?V.shadowSide:V.side:k.side=V.shadowSide!==null?V.shadowSide:g[V.side],k.alphaMap=V.alphaMap,k.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,k.map=V.map,k.clipShadows=V.clipShadows,k.clippingPlanes=V.clippingPlanes,k.clipIntersection=V.clipIntersection,k.displacementMap=V.displacementMap,k.displacementScale=V.displacementScale,k.displacementBias=V.displacementBias,k.wireframeLinewidth=V.wireframeLinewidth,k.linewidth=V.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=r.properties.get(k);Y.light=A}return k}function D(P,V,A,F,k){if(P.visible===!1)return;if(P.layers.test(V.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===xs)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const J=e.update(P),K=P.material;if(Array.isArray(K)){const ie=J.groups;for(let Z=0,te=ie.length;Z<te;Z++){const pe=ie[Z],_e=K[pe.materialIndex];if(_e&&_e.visible){const Ce=I(P,_e,F,k);P.onBeforeShadow(r,P,V,A,J,Ce,pe),r.renderBufferDirect(A,null,J,Ce,P,pe),P.onAfterShadow(r,P,V,A,J,Ce,pe)}}}else if(K.visible){const ie=I(P,K,F,k);P.onBeforeShadow(r,P,V,A,J,ie,null),r.renderBufferDirect(A,null,J,ie,P,null),P.onAfterShadow(r,P,V,A,J,ie,null)}}const Y=P.children;for(let J=0,K=Y.length;J<K;J++)D(Y[J],V,A,F,k)}function O(P){P.target.removeEventListener("dispose",O);for(const A in h){const F=h[A],k=P.target.uuid;k in F&&(F[k].dispose(),delete F[k])}}}function bb(r,e){function t(){let W=!1;const Te=new Ot;let Se=null;const Re=new Ot(0,0,0,0);return{setMask:function($){Se!==$&&!W&&(r.colorMask($,$,$,$),Se=$)},setLocked:function($){W=$},setClear:function($,z,Ie,Ke,Mt){Mt===!0&&($*=Ke,z*=Ke,Ie*=Ke),Te.set($,z,Ie,Ke),Re.equals(Te)===!1&&(r.clearColor($,z,Ie,Ke),Re.copy(Te))},reset:function(){W=!1,Se=null,Re.set(-1,0,0,0)}}}function n(){let W=!1,Te=!1,Se=null,Re=null,$=null;return{setReversed:function(z){if(Te!==z){const Ie=e.get("EXT_clip_control");z?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Te=z;const Ke=$;$=null,this.setClear(Ke)}},getReversed:function(){return Te},setTest:function(z){z?ye(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(z){Se!==z&&!W&&(r.depthMask(z),Se=z)},setFunc:function(z){if(Te&&(z=lv[z]),Re!==z){switch(z){case pc:r.depthFunc(r.NEVER);break;case mc:r.depthFunc(r.ALWAYS);break;case gc:r.depthFunc(r.LESS);break;case Xr:r.depthFunc(r.LEQUAL);break;case _c:r.depthFunc(r.EQUAL);break;case vc:r.depthFunc(r.GEQUAL);break;case xc:r.depthFunc(r.GREATER);break;case yc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Re=z}},setLocked:function(z){W=z},setClear:function(z){$!==z&&($=z,Te&&(z=1-z),r.clearDepth(z))},reset:function(){W=!1,Se=null,Re=null,$=null,Te=!1}}}function i(){let W=!1,Te=null,Se=null,Re=null,$=null,z=null,Ie=null,Ke=null,Mt=null;return{setTest:function(ct){W||(ct?ye(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(ct){Te!==ct&&!W&&(r.stencilMask(ct),Te=ct)},setFunc:function(ct,Un,qt){(Se!==ct||Re!==Un||$!==qt)&&(r.stencilFunc(ct,Un,qt),Se=ct,Re=Un,$=qt)},setOp:function(ct,Un,qt){(z!==ct||Ie!==Un||Ke!==qt)&&(r.stencilOp(ct,Un,qt),z=ct,Ie=Un,Ke=qt)},setLocked:function(ct){W=ct},setClear:function(ct){Mt!==ct&&(r.clearStencil(ct),Mt=ct)},reset:function(){W=!1,Te=null,Se=null,Re=null,$=null,z=null,Ie=null,Ke=null,Mt=null}}}const s=new t,c=new n,l=new i,d=new WeakMap,h=new WeakMap;let p={},g={},m=new WeakMap,_=[],S=null,w=!1,y=null,x=null,L=null,I=null,D=null,O=null,P=null,V=new Ze(0,0,0),A=0,F=!1,k=null,B=null,Y=null,J=null,K=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,te=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(pe)[1]),Z=te>=1):pe.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),Z=te>=2);let _e=null,Ce={};const Ne=r.getParameter(r.SCISSOR_BOX),Pe=r.getParameter(r.VIEWPORT),Je=new Ot().fromArray(Ne),et=new Ot().fromArray(Pe);function ut(W,Te,Se,Re){const $=new Uint8Array(4),z=r.createTexture();r.bindTexture(W,z),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<Se;Ie++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(Te+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return z}const ce={};ce[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ye(r.DEPTH_TEST),c.setFunc(Xr),it(!1),Bt(Ru),ye(r.CULL_FACE),_t(Ti);function ye(W){p[W]!==!0&&(r.enable(W),p[W]=!0)}function se(W){p[W]!==!1&&(r.disable(W),p[W]=!1)}function Ee(W,Te){return g[W]!==Te?(r.bindFramebuffer(W,Te),g[W]=Te,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function We(W,Te){let Se=_,Re=!1;if(W){Se=m.get(Te),Se===void 0&&(Se=[],m.set(Te,Se));const $=W.textures;if(Se.length!==$.length||Se[0]!==r.COLOR_ATTACHMENT0){for(let z=0,Ie=$.length;z<Ie;z++)Se[z]=r.COLOR_ATTACHMENT0+z;Se.length=$.length,Re=!0}}else Se[0]!==r.BACK&&(Se[0]=r.BACK,Re=!0);Re&&r.drawBuffers(Se)}function je(W){return S!==W?(r.useProgram(W),S=W,!0):!1}const Rt={[ur]:r.FUNC_ADD,[C0]:r.FUNC_SUBTRACT,[P0]:r.FUNC_REVERSE_SUBTRACT};Rt[L0]=r.MIN,Rt[I0]=r.MAX;const ft={[D0]:r.ZERO,[F0]:r.ONE,[N0]:r.SRC_COLOR,[dc]:r.SRC_ALPHA,[V0]:r.SRC_ALPHA_SATURATE,[B0]:r.DST_COLOR,[O0]:r.DST_ALPHA,[U0]:r.ONE_MINUS_SRC_COLOR,[fc]:r.ONE_MINUS_SRC_ALPHA,[z0]:r.ONE_MINUS_DST_COLOR,[k0]:r.ONE_MINUS_DST_ALPHA,[H0]:r.CONSTANT_COLOR,[G0]:r.ONE_MINUS_CONSTANT_COLOR,[W0]:r.CONSTANT_ALPHA,[X0]:r.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Te,Se,Re,$,z,Ie,Ke,Mt,ct){if(W===Ti){w===!0&&(se(r.BLEND),w=!1);return}if(w===!1&&(ye(r.BLEND),w=!0),W!==R0){if(W!==y||ct!==F){if((x!==ur||D!==ur)&&(r.blendEquation(r.FUNC_ADD),x=ur,D=ur),ct)switch(W){case Vr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cu:r.blendFunc(r.ONE,r.ONE);break;case Pu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ye("WebGLState: Invalid blending: ",W);break}else switch(W){case Vr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Pu:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",W);break}L=null,I=null,O=null,P=null,V.set(0,0,0),A=0,y=W,F=ct}return}$=$||Te,z=z||Se,Ie=Ie||Re,(Te!==x||$!==D)&&(r.blendEquationSeparate(Rt[Te],Rt[$]),x=Te,D=$),(Se!==L||Re!==I||z!==O||Ie!==P)&&(r.blendFuncSeparate(ft[Se],ft[Re],ft[z],ft[Ie]),L=Se,I=Re,O=z,P=Ie),(Ke.equals(V)===!1||Mt!==A)&&(r.blendColor(Ke.r,Ke.g,Ke.b,Mt),V.copy(Ke),A=Mt),y=W,F=!1}function Tt(W,Te){W.side===wn?se(r.CULL_FACE):ye(r.CULL_FACE);let Se=W.side===En;Te&&(Se=!Se),it(Se),W.blending===Vr&&W.transparent===!1?_t(Ti):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),s.setMask(W.colorWrite);const Re=W.stencilWrite;l.setTest(Re),Re&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Dt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function it(W){k!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),k=W)}function Bt(W){W!==w0?(ye(r.CULL_FACE),W!==B&&(W===Ru?r.cullFace(r.BACK):W===A0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),B=W}function H(W){W!==Y&&(Z&&r.lineWidth(W),Y=W)}function Dt(W,Te,Se){W?(ye(r.POLYGON_OFFSET_FILL),(J!==Te||K!==Se)&&(J=Te,K=Se,c.getReversed()&&(Te=-Te),r.polygonOffset(Te,Se))):se(r.POLYGON_OFFSET_FILL)}function pt(W){W?ye(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function St(W){W===void 0&&(W=r.TEXTURE0+ie-1),_e!==W&&(r.activeTexture(W),_e=W)}function Fe(W,Te,Se){Se===void 0&&(_e===null?Se=r.TEXTURE0+ie-1:Se=_e);let Re=Ce[Se];Re===void 0&&(Re={type:void 0,texture:void 0},Ce[Se]=Re),(Re.type!==W||Re.texture!==Te)&&(_e!==Se&&(r.activeTexture(Se),_e=Se),r.bindTexture(W,Te||ce[W]),Re.type=W,Re.texture=Te)}function N(){const W=Ce[_e];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function ae(){try{r.texSubImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function fe(){try{r.texSubImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Ue(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function be(){try{r.texStorage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Ge(){try{r.texStorage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function $e(){try{r.texImage2D(...arguments)}catch(W){Ye("WebGLState:",W)}}function xe(){try{r.texImage3D(...arguments)}catch(W){Ye("WebGLState:",W)}}function Me(W){Je.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Je.copy(W))}function Oe(W){et.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),et.copy(W))}function ke(W,Te){let Se=h.get(Te);Se===void 0&&(Se=new WeakMap,h.set(Te,Se));let Re=Se.get(W);Re===void 0&&(Re=r.getUniformBlockIndex(Te,W.name),Se.set(W,Re))}function Le(W,Te){const Re=h.get(Te).get(W);d.get(Te)!==Re&&(r.uniformBlockBinding(Te,Re,W.__bindingPointIndex),d.set(Te,Re))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},_e=null,Ce={},g={},m=new WeakMap,_=[],S=null,w=!1,y=null,x=null,L=null,I=null,D=null,O=null,P=null,V=new Ze(0,0,0),A=0,F=!1,k=null,B=null,Y=null,J=null,K=null,Je.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:ye,disable:se,bindFramebuffer:Ee,drawBuffers:We,useProgram:je,setBlending:_t,setMaterial:Tt,setFlipSided:it,setCullFace:Bt,setLineWidth:H,setPolygonOffset:Dt,setScissorTest:pt,activeTexture:St,bindTexture:Fe,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:$e,texImage3D:xe,updateUBOMapping:ke,uniformBlockBinding:Le,texStorage2D:be,texStorage3D:Ge,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ue,scissor:Me,viewport:Oe,reset:rt}}function Tb(r,e,t,n,i,s,c){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new gt,p=new WeakMap;let g;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,b){return _?new OffscreenCanvas(N,b):Ds("canvas")}function w(N,b,G){let ae=1;const fe=Fe(N);if((fe.width>G||fe.height>G)&&(ae=G/Math.max(fe.width,fe.height)),ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(ae*fe.width),Ue=Math.floor(ae*fe.height);g===void 0&&(g=S(oe,Ue));const be=b?S(oe,Ue):g;return be.width=oe,be.height=Ue,be.getContext("2d").drawImage(N,0,0,oe,Ue),He("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+oe+"x"+Ue+")."),be}else return"data"in N&&He("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){r.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(N,b,G,ae,fe=!1){if(N!==null){if(r[N]!==void 0)return r[N];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let oe=b;if(b===r.RED&&(G===r.FLOAT&&(oe=r.R32F),G===r.HALF_FLOAT&&(oe=r.R16F),G===r.UNSIGNED_BYTE&&(oe=r.R8)),b===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(oe=r.R8UI),G===r.UNSIGNED_SHORT&&(oe=r.R16UI),G===r.UNSIGNED_INT&&(oe=r.R32UI),G===r.BYTE&&(oe=r.R8I),G===r.SHORT&&(oe=r.R16I),G===r.INT&&(oe=r.R32I)),b===r.RG&&(G===r.FLOAT&&(oe=r.RG32F),G===r.HALF_FLOAT&&(oe=r.RG16F),G===r.UNSIGNED_BYTE&&(oe=r.RG8)),b===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(oe=r.RG8UI),G===r.UNSIGNED_SHORT&&(oe=r.RG16UI),G===r.UNSIGNED_INT&&(oe=r.RG32UI),G===r.BYTE&&(oe=r.RG8I),G===r.SHORT&&(oe=r.RG16I),G===r.INT&&(oe=r.RG32I)),b===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),G===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),G===r.UNSIGNED_INT&&(oe=r.RGB32UI),G===r.BYTE&&(oe=r.RGB8I),G===r.SHORT&&(oe=r.RGB16I),G===r.INT&&(oe=r.RGB32I)),b===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),G===r.UNSIGNED_INT&&(oe=r.RGBA32UI),G===r.BYTE&&(oe=r.RGBA8I),G===r.SHORT&&(oe=r.RGBA16I),G===r.INT&&(oe=r.RGBA32I)),b===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),b===r.RGBA){const Ue=fe?Wa:xt.getTransfer(ae);G===r.FLOAT&&(oe=r.RGBA32F),G===r.HALF_FLOAT&&(oe=r.RGBA16F),G===r.UNSIGNED_BYTE&&(oe=Ue===Pt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function D(N,b){let G;return N?b===null||b===li||b===Cs?G=r.DEPTH24_STENCIL8:b===Fn?G=r.DEPTH32F_STENCIL8:b===Rs&&(G=r.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===li||b===Cs?G=r.DEPTH_COMPONENT24:b===Fn?G=r.DEPTH_COMPONENT32F:b===Rs&&(G=r.DEPTH_COMPONENT16),G}function O(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Qt&&N.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function P(N){const b=N.target;b.removeEventListener("dispose",P),A(b),b.isVideoTexture&&p.delete(b)}function V(N){const b=N.target;b.removeEventListener("dispose",V),k(b)}function A(N){const b=n.get(N);if(b.__webglInit===void 0)return;const G=N.source,ae=m.get(G);if(ae){const fe=ae[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&F(N),Object.keys(ae).length===0&&m.delete(G)}n.remove(N)}function F(N){const b=n.get(N);r.deleteTexture(b.__webglTexture);const G=N.source,ae=m.get(G);delete ae[b.__cacheKey],c.memory.textures--}function k(N){const b=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let fe=0;fe<b.__webglFramebuffer[ae].length;fe++)r.deleteFramebuffer(b.__webglFramebuffer[ae][fe]);else r.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)r.deleteFramebuffer(b.__webglFramebuffer[ae]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=N.textures;for(let ae=0,fe=G.length;ae<fe;ae++){const oe=n.get(G[ae]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),c.memory.textures--),n.remove(G[ae])}n.remove(N)}let B=0;function Y(){B=0}function J(){const N=B;return N>=i.maxTextures&&He("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),B+=1,N}function K(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ie(N,b){const G=n.get(N);if(N.isVideoTexture&&pt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const ae=N.image;if(ae===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,N,b);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+b)}function Z(N,b){const G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ce(G,N,b);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+b)}function te(N,b){const G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ce(G,N,b);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+b)}function pe(N,b){const G=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){ye(G,N,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+b)}const _e={[mr]:r.REPEAT,[ii]:r.CLAMP_TO_EDGE,[Ga]:r.MIRRORED_REPEAT},Ce={[Qt]:r.NEAREST,[fd]:r.NEAREST_MIPMAP_NEAREST,[ys]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[Ua]:r.LINEAR_MIPMAP_NEAREST,[Ei]:r.LINEAR_MIPMAP_LINEAR},Ne={[Q0]:r.NEVER,[rv]:r.ALWAYS,[ev]:r.LESS,[xl]:r.LEQUAL,[tv]:r.EQUAL,[yl]:r.GEQUAL,[nv]:r.GREATER,[iv]:r.NOTEQUAL};function Pe(N,b){if(b.type===Fn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Ua||b.magFilter===ys||b.magFilter===Ei||b.minFilter===en||b.minFilter===Ua||b.minFilter===ys||b.minFilter===Ei)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,_e[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,_e[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,_e[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Ce[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Ce[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==ys&&b.minFilter!==Ei||b.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Je(N,b){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",P));const ae=b.source;let fe=m.get(ae);fe===void 0&&(fe={},m.set(ae,fe));const oe=K(b);if(oe!==N.__cacheKey){fe[oe]===void 0&&(fe[oe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,G=!0),fe[oe].usedTimes++;const Ue=fe[N.__cacheKey];Ue!==void 0&&(fe[N.__cacheKey].usedTimes--,Ue.usedTimes===0&&F(b)),N.__cacheKey=oe,N.__webglTexture=fe[oe].texture}return G}function et(N,b,G){return Math.floor(Math.floor(N/G)/b)}function ut(N,b,G,ae){const oe=N.updateRanges;if(oe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,G,ae,b.data);else{oe.sort((xe,Me)=>xe.start-Me.start);let Ue=0;for(let xe=1;xe<oe.length;xe++){const Me=oe[Ue],Oe=oe[xe],ke=Me.start+Me.count,Le=et(Oe.start,b.width,4),rt=et(Me.start,b.width,4);Oe.start<=ke+1&&Le===rt&&et(Oe.start+Oe.count-1,b.width,4)===Le?Me.count=Math.max(Me.count,Oe.start+Oe.count-Me.start):(++Ue,oe[Ue]=Oe)}oe.length=Ue+1;const be=r.getParameter(r.UNPACK_ROW_LENGTH),Ge=r.getParameter(r.UNPACK_SKIP_PIXELS),$e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let xe=0,Me=oe.length;xe<Me;xe++){const Oe=oe[xe],ke=Math.floor(Oe.start/4),Le=Math.ceil(Oe.count/4),rt=ke%b.width,W=Math.floor(ke/b.width),Te=Le,Se=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,rt),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,rt,W,Te,Se,G,ae,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,$e)}}function ce(N,b,G){let ae=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=r.TEXTURE_3D);const fe=Je(N,b),oe=b.source;t.bindTexture(ae,N.__webglTexture,r.TEXTURE0+G);const Ue=n.get(oe);if(oe.version!==Ue.__version||fe===!0){t.activeTexture(r.TEXTURE0+G);const be=xt.getPrimaries(xt.workingColorSpace),Ge=b.colorSpace===Gi?null:xt.getPrimaries(b.colorSpace),$e=b.colorSpace===Gi||be===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let xe=w(b.image,!1,i.maxTextureSize);xe=St(b,xe);const Me=s.convert(b.format,b.colorSpace),Oe=s.convert(b.type);let ke=I(b.internalFormat,Me,Oe,b.colorSpace,b.isVideoTexture);Pe(ae,b);let Le;const rt=b.mipmaps,W=b.isVideoTexture!==!0,Te=Ue.__version===void 0||fe===!0,Se=oe.dataReady,Re=O(b,xe);if(b.isDepthTexture)ke=D(b.format===fr,b.type),Te&&(W?t.texStorage2D(r.TEXTURE_2D,1,ke,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,ke,xe.width,xe.height,0,Me,Oe,null));else if(b.isDataTexture)if(rt.length>0){W&&Te&&t.texStorage2D(r.TEXTURE_2D,Re,ke,rt[0].width,rt[0].height);for(let $=0,z=rt.length;$<z;$++)Le=rt[$],W?Se&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Le.width,Le.height,Me,Oe,Le.data):t.texImage2D(r.TEXTURE_2D,$,ke,Le.width,Le.height,0,Me,Oe,Le.data);b.generateMipmaps=!1}else W?(Te&&t.texStorage2D(r.TEXTURE_2D,Re,ke,xe.width,xe.height),Se&&ut(b,xe,Me,Oe)):t.texImage2D(r.TEXTURE_2D,0,ke,xe.width,xe.height,0,Me,Oe,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,ke,rt[0].width,rt[0].height,xe.depth);for(let $=0,z=rt.length;$<z;$++)if(Le=rt[$],b.format!==Nn)if(Me!==null)if(W){if(Se)if(b.layerUpdates.size>0){const Ie=Sh(Le.width,Le.height,b.format,b.type);for(const Ke of b.layerUpdates){const Mt=Le.data.subarray(Ke*Ie/Le.data.BYTES_PER_ELEMENT,(Ke+1)*Ie/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Ke,Le.width,Le.height,1,Me,Mt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Le.width,Le.height,xe.depth,Me,Le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,ke,Le.width,Le.height,xe.depth,0,Le.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Le.width,Le.height,xe.depth,Me,Oe,Le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,ke,Le.width,Le.height,xe.depth,0,Me,Oe,Le.data)}else{W&&Te&&t.texStorage2D(r.TEXTURE_2D,Re,ke,rt[0].width,rt[0].height);for(let $=0,z=rt.length;$<z;$++)Le=rt[$],b.format!==Nn?Me!==null?W?Se&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(r.TEXTURE_2D,$,ke,Le.width,Le.height,0,Le.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Se&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Le.width,Le.height,Me,Oe,Le.data):t.texImage2D(r.TEXTURE_2D,$,ke,Le.width,Le.height,0,Me,Oe,Le.data)}else if(b.isDataArrayTexture)if(W){if(Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,ke,xe.width,xe.height,xe.depth),Se)if(b.layerUpdates.size>0){const $=Sh(xe.width,xe.height,b.format,b.type);for(const z of b.layerUpdates){const Ie=xe.data.subarray(z*$/xe.data.BYTES_PER_ELEMENT,(z+1)*$/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,z,xe.width,xe.height,1,Me,Oe,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Me,Oe,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,xe.width,xe.height,xe.depth,0,Me,Oe,xe.data);else if(b.isData3DTexture)W?(Te&&t.texStorage3D(r.TEXTURE_3D,Re,ke,xe.width,xe.height,xe.depth),Se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Me,Oe,xe.data)):t.texImage3D(r.TEXTURE_3D,0,ke,xe.width,xe.height,xe.depth,0,Me,Oe,xe.data);else if(b.isFramebufferTexture){if(Te)if(W)t.texStorage2D(r.TEXTURE_2D,Re,ke,xe.width,xe.height);else{let $=xe.width,z=xe.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,ke,$,z,0,Me,Oe,null),$>>=1,z>>=1}}else if(rt.length>0){if(W&&Te){const $=Fe(rt[0]);t.texStorage2D(r.TEXTURE_2D,Re,ke,$.width,$.height)}for(let $=0,z=rt.length;$<z;$++)Le=rt[$],W?Se&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Me,Oe,Le):t.texImage2D(r.TEXTURE_2D,$,ke,Me,Oe,Le);b.generateMipmaps=!1}else if(W){if(Te){const $=Fe(xe);t.texStorage2D(r.TEXTURE_2D,Re,ke,$.width,$.height)}Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Oe,xe)}else t.texImage2D(r.TEXTURE_2D,0,ke,Me,Oe,xe);y(b)&&x(ae),Ue.__version=oe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ye(N,b,G){if(b.image.length!==6)return;const ae=Je(N,b),fe=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+G);const oe=n.get(fe);if(fe.version!==oe.__version||ae===!0){t.activeTexture(r.TEXTURE0+G);const Ue=xt.getPrimaries(xt.workingColorSpace),be=b.colorSpace===Gi?null:xt.getPrimaries(b.colorSpace),Ge=b.colorSpace===Gi||Ue===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const $e=b.isCompressedTexture||b.image[0].isCompressedTexture,xe=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let z=0;z<6;z++)!$e&&!xe?Me[z]=w(b.image[z],!0,i.maxCubemapSize):Me[z]=xe?b.image[z].image:b.image[z],Me[z]=St(b,Me[z]);const Oe=Me[0],ke=s.convert(b.format,b.colorSpace),Le=s.convert(b.type),rt=I(b.internalFormat,ke,Le,b.colorSpace),W=b.isVideoTexture!==!0,Te=oe.__version===void 0||ae===!0,Se=fe.dataReady;let Re=O(b,Oe);Pe(r.TEXTURE_CUBE_MAP,b);let $;if($e){W&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,rt,Oe.width,Oe.height);for(let z=0;z<6;z++){$=Me[z].mipmaps;for(let Ie=0;Ie<$.length;Ie++){const Ke=$[Ie];b.format!==Nn?ke!==null?W?Se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie,0,0,Ke.width,Ke.height,ke,Ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie,rt,Ke.width,Ke.height,0,Ke.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie,0,0,Ke.width,Ke.height,ke,Le,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie,rt,Ke.width,Ke.height,0,ke,Le,Ke.data)}}}else{if($=b.mipmaps,W&&Te){$.length>0&&Re++;const z=Fe(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,rt,z.width,z.height)}for(let z=0;z<6;z++)if(xe){W?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Me[z].width,Me[z].height,ke,Le,Me[z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,rt,Me[z].width,Me[z].height,0,ke,Le,Me[z].data);for(let Ie=0;Ie<$.length;Ie++){const Mt=$[Ie].image[z].image;W?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie+1,0,0,Mt.width,Mt.height,ke,Le,Mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie+1,rt,Mt.width,Mt.height,0,ke,Le,Mt.data)}}else{W?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ke,Le,Me[z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,rt,ke,Le,Me[z]);for(let Ie=0;Ie<$.length;Ie++){const Ke=$[Ie];W?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie+1,0,0,ke,Le,Ke.image[z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie+1,rt,ke,Le,Ke.image[z])}}}y(b)&&x(r.TEXTURE_CUBE_MAP),oe.__version=fe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function se(N,b,G,ae,fe,oe){const Ue=s.convert(G.format,G.colorSpace),be=s.convert(G.type),Ge=I(G.internalFormat,Ue,be,G.colorSpace),$e=n.get(b),xe=n.get(G);if(xe.__renderTarget=b,!$e.__hasExternalTextures){const Me=Math.max(1,b.width>>oe),Oe=Math.max(1,b.height>>oe);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,oe,Ge,Me,Oe,b.depth,0,Ue,be,null):t.texImage2D(fe,oe,Ge,Me,Oe,0,Ue,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),Dt(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,fe,xe.__webglTexture,0,H(b)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,fe,xe.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(N,b,G){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const ae=b.depthTexture,fe=ae&&ae.isDepthTexture?ae.type:null,oe=D(b.stencilBuffer,fe),Ue=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Dt(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(b),oe,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(b),oe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,oe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ue,r.RENDERBUFFER,N)}else{const ae=b.textures;for(let fe=0;fe<ae.length;fe++){const oe=ae[fe],Ue=s.convert(oe.format,oe.colorSpace),be=s.convert(oe.type),Ge=I(oe.internalFormat,Ue,be,oe.colorSpace);Dt(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(b),Ge,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(b),Ge,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ge,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(N,b,G){const ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(b.depthTexture);if(fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),fe.__webglTexture===void 0){fe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,b.depthTexture);const $e=s.convert(b.depthTexture.format),xe=s.convert(b.depthTexture.type);let Me;b.depthTexture.format===Ci?Me=r.DEPTH_COMPONENT24:b.depthTexture.format===fr&&(Me=r.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Me,b.width,b.height,0,$e,xe,null)}}else ie(b.depthTexture,0);const oe=fe.__webglTexture,Ue=H(b),be=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Ge=b.depthTexture.format===fr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ci)Dt(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ge,be,oe,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,Ge,be,oe,0);else if(b.depthTexture.format===fr)Dt(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ge,be,oe,0,Ue):r.framebufferTexture2D(r.FRAMEBUFFER,Ge,be,oe,0);else throw new Error("Unknown depthTexture format")}function je(N){const b=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ae=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const fe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",fe)};ae.addEventListener("dispose",fe),b.__depthDisposeCallback=fe}b.__boundDepthTexture=ae}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let ae=0;ae<6;ae++)We(b.__webglFramebuffer[ae],N,ae);else{const ae=N.texture.mipmaps;ae&&ae.length>0?We(b.__webglFramebuffer[0],N,0):We(b.__webglFramebuffer,N,0)}else if(G){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=r.createRenderbuffer(),Ee(b.__webglDepthbuffer[ae],N,!1);else{const fe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,oe)}}else{const ae=N.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ee(b.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,oe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(N,b,G){const ae=n.get(N);b!==void 0&&se(ae.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&je(N)}function ft(N){const b=N.texture,G=n.get(N),ae=n.get(b);N.addEventListener("dispose",V);const fe=N.textures,oe=N.isWebGLCubeRenderTarget===!0,Ue=fe.length>1;if(Ue||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=b.version,c.memory.textures++),oe){G.__webglFramebuffer=[];for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[be]=[];for(let Ge=0;Ge<b.mipmaps.length;Ge++)G.__webglFramebuffer[be][Ge]=r.createFramebuffer()}else G.__webglFramebuffer[be]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let be=0;be<b.mipmaps.length;be++)G.__webglFramebuffer[be]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ue)for(let be=0,Ge=fe.length;be<Ge;be++){const $e=n.get(fe[be]);$e.__webglTexture===void 0&&($e.__webglTexture=r.createTexture(),c.memory.textures++)}if(N.samples>0&&Dt(N)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let be=0;be<fe.length;be++){const Ge=fe[be];G.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[be]);const $e=s.convert(Ge.format,Ge.colorSpace),xe=s.convert(Ge.type),Me=I(Ge.internalFormat,$e,xe,Ge.colorSpace,N.isXRRenderTarget===!0),Oe=H(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Me,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,G.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,b);for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)se(G.__webglFramebuffer[be][Ge],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ge);else se(G.__webglFramebuffer[be],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(b)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let be=0,Ge=fe.length;be<Ge;be++){const $e=fe[be],xe=n.get($e);let Me=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Me=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,xe.__webglTexture),Pe(Me,$e),se(G.__webglFramebuffer,N,$e,r.COLOR_ATTACHMENT0+be,Me,0),y($e)&&x(Me)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),Pe(be,b),b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)se(G.__webglFramebuffer[Ge],N,b,r.COLOR_ATTACHMENT0,be,Ge);else se(G.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,be,0);y(b)&&x(be),t.unbindTexture()}N.depthBuffer&&je(N)}function _t(N){const b=N.textures;for(let G=0,ae=b.length;G<ae;G++){const fe=b[G];if(y(fe)){const oe=L(N),Ue=n.get(fe).__webglTexture;t.bindTexture(oe,Ue),x(oe),t.unbindTexture()}}}const Tt=[],it=[];function Bt(N){if(N.samples>0){if(Dt(N)===!1){const b=N.textures,G=N.width,ae=N.height;let fe=r.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=n.get(N),be=b.length>1;if(be)for(let $e=0;$e<b.length;$e++)t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ge=N.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let $e=0;$e<b.length;$e++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[$e]);const xe=n.get(b[$e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,G,ae,0,0,G,ae,fe,r.NEAREST),d===!0&&(Tt.length=0,it.length=0,Tt.push(r.COLOR_ATTACHMENT0+$e),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Tt.push(oe),it.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,it)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let $e=0;$e<b.length;$e++){t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.RENDERBUFFER,Ue.__webglColorRenderbuffer[$e]);const xe=n.get(b[$e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$e,r.TEXTURE_2D,xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function H(N){return Math.min(i.maxSamples,N.samples)}function Dt(N){const b=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pt(N){const b=c.render.frame;p.get(N)!==b&&(p.set(N,b),N.update())}function St(N,b){const G=N.colorSpace,ae=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==yn&&G!==Gi&&(xt.getTransfer(G)===Pt?(ae!==Nn||fe!==An)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",G)),b}function Fe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=pe,this.rebindTextures=Rt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wb(r,e){function t(n,i=Gi){let s;const c=xt.getTransfer(i);if(n===An)return r.UNSIGNED_BYTE;if(n===fl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===gd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===_d)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===pd)return r.BYTE;if(n===md)return r.SHORT;if(n===Rs)return r.UNSIGNED_SHORT;if(n===dl)return r.INT;if(n===li)return r.UNSIGNED_INT;if(n===Fn)return r.FLOAT;if(n===Ri)return r.HALF_FLOAT;if(n===vd)return r.ALPHA;if(n===xd)return r.RGB;if(n===Nn)return r.RGBA;if(n===Ci)return r.DEPTH_COMPONENT;if(n===fr)return r.DEPTH_STENCIL;if(n===ml)return r.RED;if(n===gl)return r.RED_INTEGER;if(n===jr)return r.RG;if(n===_l)return r.RG_INTEGER;if(n===vl)return r.RGBA_INTEGER;if(n===Oa||n===ka||n===Ba||n===za)if(c===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Mc||n===Ec||n===bc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tc||n===wc)return c===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ac)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Rc)return s.COMPRESSED_R11_EAC;if(n===Cc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Pc)return s.COMPRESSED_RG11_EAC;if(n===Lc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ic||n===Dc||n===Fc||n===Nc||n===Uc||n===Oc||n===kc||n===Bc||n===zc||n===Vc||n===Hc||n===Gc||n===Wc||n===Xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ic)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return c===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$c||n===jc||n===qc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$c)return c===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Kc||n===Zc||n===Jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Yc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rb=`
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

}`;class Cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Dd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hi({vertexShader:Ab,fragmentShader:Rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pb extends es{constructor(e,t){super();const n=this;let i=null,s=1,c=null,l="local-floor",d=1,h=null,p=null,g=null,m=null,_=null,S=null;const w=typeof XRWebGLBinding<"u",y=new Cb,x={},L=t.getContextAttributes();let I=null,D=null;const O=[],P=[],V=new gt;let A=null;const F=new xn;F.viewport=new Ot;const k=new xn;k.viewport=new Ot;const B=[F,k],Y=new Dx;let J=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ye=O[ce];return ye===void 0&&(ye=new Po,O[ce]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ce){let ye=O[ce];return ye===void 0&&(ye=new Po,O[ce]=ye),ye.getGripSpace()},this.getHand=function(ce){let ye=O[ce];return ye===void 0&&(ye=new Po,O[ce]=ye),ye.getHandSpace()};function ie(ce){const ye=P.indexOf(ce.inputSource);if(ye===-1)return;const se=O[ye];se!==void 0&&(se.update(ce.inputSource,ce.frame,h||c),se.dispatchEvent({type:ce.type,data:ce.inputSource}))}function Z(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",te);for(let ce=0;ce<O.length;ce++){const ye=P[ce];ye!==null&&(P[ce]=null,O[ce].disconnect(ye))}J=null,K=null,y.reset();for(const ce in x)delete x[ce];e.setRenderTarget(I),_=null,m=null,g=null,i=null,D=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){l=ce,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(i,t)),g},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(ce){if(i=ce,i!==null){if(I=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",te),L.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(V),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ee=null,We=null;L.depth&&(We=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=L.stencil?fr:Ci,Ee=L.stencil?Cs:li);const je={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:s};g=this.getBinding(),m=g.createProjectionLayer(je),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),D=new oi(m.textureWidth,m.textureHeight,{format:Nn,type:An,depthTexture:new Ns(m.textureWidth,m.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const se={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),D=new oi(_.framebufferWidth,_.framebufferHeight,{format:Nn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await i.requestReferenceSpace(l),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function te(ce){for(let ye=0;ye<ce.removed.length;ye++){const se=ce.removed[ye],Ee=P.indexOf(se);Ee>=0&&(P[Ee]=null,O[Ee].disconnect(se))}for(let ye=0;ye<ce.added.length;ye++){const se=ce.added[ye];let Ee=P.indexOf(se);if(Ee===-1){for(let je=0;je<O.length;je++)if(je>=P.length){P.push(se),Ee=je;break}else if(P[je]===null){P[je]=se,Ee=je;break}if(Ee===-1)break}const We=O[Ee];We&&We.connect(se)}}const pe=new X,_e=new X;function Ce(ce,ye,se){pe.setFromMatrixPosition(ye.matrixWorld),_e.setFromMatrixPosition(se.matrixWorld);const Ee=pe.distanceTo(_e),We=ye.projectionMatrix.elements,je=se.projectionMatrix.elements,Rt=We[14]/(We[10]-1),ft=We[14]/(We[10]+1),_t=(We[9]+1)/We[5],Tt=(We[9]-1)/We[5],it=(We[8]-1)/We[0],Bt=(je[8]+1)/je[0],H=Rt*it,Dt=Rt*Bt,pt=Ee/(-it+Bt),St=pt*-it;if(ye.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(St),ce.translateZ(pt),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),We[10]===-1)ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const Fe=Rt+pt,N=ft+pt,b=H-St,G=Dt+(Ee-St),ae=_t*ft/N*Fe,fe=Tt*ft/N*Fe;ce.projectionMatrix.makePerspective(b,G,ae,fe,Fe,N),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Ne(ce,ye){ye===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ye.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(i===null)return;let ye=ce.near,se=ce.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(se=y.depthFar)),Y.near=k.near=F.near=ye,Y.far=k.far=F.far=se,(J!==Y.near||K!==Y.far)&&(i.updateRenderState({depthNear:Y.near,depthFar:Y.far}),J=Y.near,K=Y.far),Y.layers.mask=ce.layers.mask|6,F.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;const Ee=ce.parent,We=Y.cameras;Ne(Y,Ee);for(let je=0;je<We.length;je++)Ne(We[je],Ee);We.length===2?Ce(Y,F,k):Y.projectionMatrix.copy(F.projectionMatrix),Pe(ce,Y,Ee)};function Pe(ce,ye,se){se===null?ce.matrix.copy(ye.matrixWorld):(ce.matrix.copy(se.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ye.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=qr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(ce){d=ce,m!==null&&(m.fixedFoveation=ce),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ce)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ce){return x[ce]};let Je=null;function et(ce,ye){if(p=ye.getViewerPose(h||c),S=ye,p!==null){const se=p.views;_!==null&&(e.setRenderTargetFramebuffer(D,_.framebuffer),e.setRenderTarget(D));let Ee=!1;se.length!==Y.cameras.length&&(Y.cameras.length=0,Ee=!0);for(let ft=0;ft<se.length;ft++){const _t=se[ft];let Tt=null;if(_!==null)Tt=_.getViewport(_t);else{const Bt=g.getViewSubImage(m,_t);Tt=Bt.viewport,ft===0&&(e.setRenderTargetTextures(D,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(D))}let it=B[ft];it===void 0&&(it=new xn,it.layers.enable(ft),it.viewport=new Ot,B[ft]=it),it.matrix.fromArray(_t.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(_t.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ft===0&&(Y.matrix.copy(it.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ee===!0&&Y.cameras.push(it)}const We=i.enabledFeatures;if(We&&We.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&w){g=n.getBinding();const ft=g.getDepthInformation(se[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,i.renderState)}if(We&&We.includes("camera-access")&&w){e.state.unbindTexture(),g=n.getBinding();for(let ft=0;ft<se.length;ft++){const _t=se[ft].camera;if(_t){let Tt=x[_t];Tt||(Tt=new Dd,x[_t]=Tt);const it=g.getCameraImage(_t);Tt.sourceTexture=it}}}}for(let se=0;se<O.length;se++){const Ee=P[se],We=O[se];Ee!==null&&We!==void 0&&We.update(Ee,ye,h||c)}Je&&Je(ce,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),S=null}const ut=new Bd;ut.setAnimationLoop(et),this.setAnimationLoop=function(ce){Je=ce},this.dispose=function(){}}}const ar=new ui,Lb=new nt;function Ib(r,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,Fd(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function i(y,x,L,I,D){x.isMeshBasicMaterial?s(y,x):x.isMeshLambertMaterial?(s(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(y,x),g(y,x)):x.isMeshPhongMaterial?(s(y,x),p(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(y,x),m(y,x),x.isMeshPhysicalMaterial&&_(y,x,D)):x.isMeshMatcapMaterial?(s(y,x),S(y,x)):x.isMeshDepthMaterial?s(y,x):x.isMeshDistanceMaterial?(s(y,x),w(y,x)):x.isMeshNormalMaterial?s(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&l(y,x)):x.isPointsMaterial?d(y,x,L,I):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===En&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===En&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=e.get(x),I=L.envMap,D=L.envMapRotation;I&&(y.envMap.value=I,ar.copy(D),ar.x*=-1,ar.y*=-1,ar.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),y.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(ar)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function l(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function d(y,x,L,I){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=I*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function m(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function _(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===En&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const L=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Db(r,e,t,n){let i={},s={},c=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,I){const D=I.program;n.uniformBlockBinding(L,D)}function h(L,I){let D=i[L.id];D===void 0&&(S(L),D=p(L),i[L.id]=D,L.addEventListener("dispose",y));const O=I.program;n.updateUBOMapping(L,O);const P=e.render.frame;s[L.id]!==P&&(m(L),s[L.id]=P)}function p(L){const I=g();L.__bindingPointIndex=I;const D=r.createBuffer(),O=L.__size,P=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,O,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,D),D}function g(){for(let L=0;L<l;L++)if(c.indexOf(L)===-1)return c.push(L),L;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(L){const I=i[L.id],D=L.uniforms,O=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let P=0,V=D.length;P<V;P++){const A=Array.isArray(D[P])?D[P]:[D[P]];for(let F=0,k=A.length;F<k;F++){const B=A[F];if(_(B,P,F,O)===!0){const Y=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let K=0;for(let ie=0;ie<J.length;ie++){const Z=J[ie],te=w(Z);typeof Z=="number"||typeof Z=="boolean"?(B.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,Y+K,B.__data)):Z.isMatrix3?(B.__data[0]=Z.elements[0],B.__data[1]=Z.elements[1],B.__data[2]=Z.elements[2],B.__data[3]=0,B.__data[4]=Z.elements[3],B.__data[5]=Z.elements[4],B.__data[6]=Z.elements[5],B.__data[7]=0,B.__data[8]=Z.elements[6],B.__data[9]=Z.elements[7],B.__data[10]=Z.elements[8],B.__data[11]=0):(Z.toArray(B.__data,K),K+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(L,I,D,O){const P=L.value,V=I+"_"+D;if(O[V]===void 0)return typeof P=="number"||typeof P=="boolean"?O[V]=P:O[V]=P.clone(),!0;{const A=O[V];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return O[V]=P,!0}else if(A.equals(P)===!1)return A.copy(P),!0}return!1}function S(L){const I=L.uniforms;let D=0;const O=16;for(let V=0,A=I.length;V<A;V++){const F=Array.isArray(I[V])?I[V]:[I[V]];for(let k=0,B=F.length;k<B;k++){const Y=F[k],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,ie=J.length;K<ie;K++){const Z=J[K],te=w(Z),pe=D%O,_e=pe%te.boundary,Ce=pe+_e;D+=_e,Ce!==0&&O-Ce<te.storage&&(D+=O-Ce),Y.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=te.storage}}}const P=D%O;return P>0&&(D+=O-P),L.__size=D,L.__cache={},this}function w(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",L),I}function y(L){const I=L.target;I.removeEventListener("dispose",y);const D=c.indexOf(I.__bindingPointIndex);c.splice(D,1),r.deleteBuffer(i[I.id]),delete i[I.id],delete s[I.id]}function x(){for(const L in i)r.deleteBuffer(i[L]);c=[],i={},s={}}return{bind:d,update:h,dispose:x}}const Fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function Nb(){return ei===null&&(ei=new Tl(Fb,16,16,jr,Ri),ei.name="DFG_LUT",ei.minFilter=en,ei.magFilter=en,ei.wrapS=ii,ei.wrapT=ii,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class Ub{constructor(e={}){const{canvas:t=ov(),context:n=null,depth:i=!0,stencil:s=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:_=An}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=c;const w=_,y=new Set([vl,_l,gl]),x=new Set([An,li,Rs,Cs,fl,pl]),L=new Uint32Array(4),I=new Int32Array(4);let D=null,O=null;const P=[],V=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let k=!1;this._outputColorSpace=Vt;let B=0,Y=0,J=null,K=-1,ie=null;const Z=new Ot,te=new Ot;let pe=null;const _e=new Ze(0);let Ce=0,Ne=t.width,Pe=t.height,Je=1,et=null,ut=null;const ce=new Ot(0,0,Ne,Pe),ye=new Ot(0,0,Ne,Pe);let se=!1;const Ee=new Al;let We=!1,je=!1;const Rt=new nt,ft=new X,_t=new Ot,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Bt(){return J===null?Je:1}let H=n;function Dt(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),H===null){const j="webgl2";if(H=Dt(j,C),H===null)throw Dt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ye("WebGLRenderer: "+C.message),C}let pt,St,Fe,N,b,G,ae,fe,oe,Ue,be,Ge,$e,xe,Me,Oe,ke,Le,rt,W,Te,Se,Re;function $(){pt=new UM(H),pt.init(),Te=new wb(H,pt),St=new RM(H,pt,e,Te),Fe=new bb(H,pt),St.reversedDepthBuffer&&m&&Fe.buffers.depth.setReversed(!0),N=new BM(H),b=new ub,G=new Tb(H,pt,Fe,b,St,Te,N),ae=new NM(F),fe=new Wx(H),Se=new wM(H,fe),oe=new OM(H,fe,N,Se),Ue=new VM(H,oe,fe,Se,N),Le=new zM(H,St,G),Me=new CM(b),be=new lb(F,ae,pt,St,Se,Me),Ge=new Ib(F,b),$e=new db,xe=new vb(pt),ke=new TM(F,ae,Fe,Ue,S,d),Oe=new Eb(F,Ue,St),Re=new Db(H,N,St,Fe),rt=new AM(H,pt,N),W=new kM(H,pt,N),N.programs=be.programs,F.capabilities=St,F.extensions=pt,F.properties=b,F.renderLists=$e,F.shadowMap=Oe,F.state=Fe,F.info=N}$(),w!==An&&(A=new GM(w,t.width,t.height,i,s));const z=new Pb(F,H);this.xr=z,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Je},this.setPixelRatio=function(C){C!==void 0&&(Je=C,this.setSize(Ne,Pe,!1))},this.getSize=function(C){return C.set(Ne,Pe)},this.setSize=function(C,j,re=!0){if(z.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=C,Pe=j,t.width=Math.floor(C*Je),t.height=Math.floor(j*Je),re===!0&&(t.style.width=C+"px",t.style.height=j+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(Ne*Je,Pe*Je).floor()},this.setDrawingBufferSize=function(C,j,re){Ne=C,Pe=j,Je=re,t.width=Math.floor(C*re),t.height=Math.floor(j*re),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(w===An){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(ce)},this.setViewport=function(C,j,re,ne){C.isVector4?ce.set(C.x,C.y,C.z,C.w):ce.set(C,j,re,ne),Fe.viewport(Z.copy(ce).multiplyScalar(Je).round())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,j,re,ne){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,j,re,ne),Fe.scissor(te.copy(ye).multiplyScalar(Je).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){Fe.setScissorTest(se=C)},this.setOpaqueSort=function(C){et=C},this.setTransparentSort=function(C){ut=C},this.getClearColor=function(C){return C.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,re=!0){let ne=0;if(C){let Q=!1;if(J!==null){const we=J.texture.format;Q=y.has(we)}if(Q){const we=J.texture.type,De=x.has(we),de=ke.getClearColor(),Be=ke.getClearAlpha(),ze=de.r,Qe=de.g,tt=de.b;De?(L[0]=ze,L[1]=Qe,L[2]=tt,L[3]=Be,H.clearBufferuiv(H.COLOR,0,L)):(I[0]=ze,I[1]=Qe,I[2]=tt,I[3]=Be,H.clearBufferiv(H.COLOR,0,I))}else ne|=H.COLOR_BUFFER_BIT}j&&(ne|=H.DEPTH_BUFFER_BIT),re&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),ke.dispose(),$e.dispose(),xe.dispose(),b.dispose(),ae.dispose(),Ue.dispose(),Se.dispose(),Re.dispose(),be.dispose(),z.dispose(),z.removeEventListener("sessionstart",Rn),z.removeEventListener("sessionend",ks),Cn.stop()};function Ie(C){C.preventDefault(),Xa("WebGLRenderer: Context Lost."),k=!0}function Ke(){Xa("WebGLRenderer: Context Restored."),k=!1;const C=N.autoReset,j=Oe.enabled,re=Oe.autoUpdate,ne=Oe.needsUpdate,Q=Oe.type;$(),N.autoReset=C,Oe.enabled=j,Oe.autoUpdate=re,Oe.needsUpdate=ne,Oe.type=Q}function Mt(C){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ct(C){const j=C.target;j.removeEventListener("dispose",ct),Un(j)}function Un(C){qt(C),b.remove(C)}function qt(C){const j=b.get(C).programs;j!==void 0&&(j.forEach(function(re){be.releaseProgram(re)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,re,ne,Q,we){j===null&&(j=Tt);const De=Q.isMesh&&Q.matrixWorld.determinant()<0,de=ro(C,j,re,ne,Q);Fe.setMaterial(ne,De);let Be=re.index,ze=1;if(ne.wireframe===!0){if(Be=oe.getWireframeAttribute(re),Be===void 0)return;ze=2}const Qe=re.drawRange,tt=re.attributes.position;let Ve=Qe.start*ze,bt=(Qe.start+Qe.count)*ze;we!==null&&(Ve=Math.max(Ve,we.start*ze),bt=Math.min(bt,(we.start+we.count)*ze)),Be!==null?(Ve=Math.max(Ve,0),bt=Math.min(bt,Be.count)):tt!=null&&(Ve=Math.max(Ve,0),bt=Math.min(bt,tt.count));const zt=bt-Ve;if(zt<0||zt===1/0)return;Se.setup(Q,ne,de,re,Be);let Nt,At=rt;if(Be!==null&&(Nt=fe.get(Be),At=W,At.setIndex(Nt)),Q.isMesh)ne.wireframe===!0?(Fe.setLineWidth(ne.wireframeLinewidth*Bt()),At.setMode(H.LINES)):At.setMode(H.TRIANGLES);else if(Q.isLine){let Yt=ne.linewidth;Yt===void 0&&(Yt=1),Fe.setLineWidth(Yt*Bt()),Q.isLineSegments?At.setMode(H.LINES):Q.isLineLoop?At.setMode(H.LINE_LOOP):At.setMode(H.LINE_STRIP)}else Q.isPoints?At.setMode(H.POINTS):Q.isSprite&&At.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)$a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))At.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Yt=Q._multiDrawStarts,E=Q._multiDrawCounts,ht=Q._multiDrawCount,yt=Be?fe.get(Be).bytesPerElement:1,dn=b.get(ne).currentProgram.getUniforms();for(let un=0;un<ht;un++)dn.setValue(H,"_gl_DrawID",un),At.render(Yt[un]/yt,E[un])}else if(Q.isInstancedMesh)At.renderInstances(Ve,zt,Q.count);else if(re.isInstancedBufferGeometry){const Yt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,E=Math.min(re.instanceCount,Yt);At.renderInstances(Ve,zt,E)}else At.render(Ve,zt)};function ji(C,j,re){C.transparent===!0&&C.side===wn&&C.forceSinglePass===!1?(C.side=En,C.needsUpdate=!0,qi(C,j,re),C.side=Ai,C.needsUpdate=!0,qi(C,j,re),C.side=wn):qi(C,j,re)}this.compile=function(C,j,re=null){re===null&&(re=C),O=xe.get(re),O.init(j),V.push(O),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),C!==re&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),O.setupLights();const ne=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const we=Q.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const de=we[De];ji(de,re,Q),ne.add(de)}else ji(we,re,Q),ne.add(we)}),O=V.pop(),ne},this.compileAsync=function(C,j,re=null){const ne=this.compile(C,j,re);return new Promise(Q=>{function we(){if(ne.forEach(function(De){b.get(De).currentProgram.isReady()&&ne.delete(De)}),ne.size===0){Q(C);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ss=null;function io(C){ss&&ss(C)}function Rn(){Cn.stop()}function ks(){Cn.start()}const Cn=new Bd;Cn.setAnimationLoop(io),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(C){ss=C,z.setAnimationLoop(C),C===null?Cn.stop():Cn.start()},z.addEventListener("sessionstart",Rn),z.addEventListener("sessionend",ks),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const re=z.enabled===!0&&z.isPresenting===!0,ne=A!==null&&(J===null||re)&&A.begin(F,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(j),j=z.getCamera()),C.isScene===!0&&C.onBeforeRender(F,C,j,J),O=xe.get(C,V.length),O.init(j),V.push(O),Rt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ee.setFromProjectionMatrix(Rt,ri,j.reversedDepth),je=this.localClippingEnabled,We=Me.init(this.clippingPlanes,je),D=$e.get(C,P.length),D.init(),P.push(D),z.enabled===!0&&z.isPresenting===!0){const De=F.xr.getDepthSensingMesh();De!==null&&Ii(De,j,-1/0,F.sortObjects)}Ii(C,j,0,F.sortObjects),D.finish(),F.sortObjects===!0&&D.sort(et,ut),it=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,it&&ke.addToRenderList(D,C),this.info.render.frame++,We===!0&&Me.beginShadows();const Q=O.state.shadowsArray;if(Oe.render(Q,C,j),We===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&A.hasRenderPass())===!1){const De=D.opaque,de=D.transmissive;if(O.setupLights(),j.isArrayCamera){const Be=j.cameras;if(de.length>0)for(let ze=0,Qe=Be.length;ze<Qe;ze++){const tt=Be[ze];Bs(De,de,C,tt)}it&&ke.render(C);for(let ze=0,Qe=Be.length;ze<Qe;ze++){const tt=Be[ze];yr(D,C,tt,tt.viewport)}}else de.length>0&&Bs(De,de,C,j),it&&ke.render(C),yr(D,C,j)}J!==null&&Y===0&&(G.updateMultisampleRenderTarget(J),G.updateRenderTargetMipmap(J)),ne&&A.end(F),C.isScene===!0&&C.onAfterRender(F,C,j),Se.resetDefaultState(),K=-1,ie=null,V.pop(),V.length>0?(O=V[V.length-1],We===!0&&Me.setGlobalState(F.clippingPlanes,O.state.camera)):O=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function Ii(C,j,re,ne){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ee.intersectsSprite(C)){ne&&_t.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Rt);const De=Ue.update(C),de=C.material;de.visible&&D.push(C,De,de,re,_t.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ee.intersectsObject(C))){const De=Ue.update(C),de=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_t.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),_t.copy(De.boundingSphere.center)),_t.applyMatrix4(C.matrixWorld).applyMatrix4(Rt)),Array.isArray(de)){const Be=De.groups;for(let ze=0,Qe=Be.length;ze<Qe;ze++){const tt=Be[ze],Ve=de[tt.materialIndex];Ve&&Ve.visible&&D.push(C,De,Ve,re,_t.z,tt)}}else de.visible&&D.push(C,De,de,re,_t.z,null)}}const we=C.children;for(let De=0,de=we.length;De<de;De++)Ii(we[De],j,re,ne)}function yr(C,j,re,ne){const{opaque:Q,transmissive:we,transparent:De}=C;O.setupLightsView(re),We===!0&&Me.setGlobalState(F.clippingPlanes,re),ne&&Fe.viewport(Z.copy(ne)),Q.length>0&&Sr(Q,j,re),we.length>0&&Sr(we,j,re),De.length>0&&Sr(De,j,re),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Bs(C,j,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ne.id]===void 0){const Ve=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ne.id]=new oi(1,1,{generateMipmaps:!0,type:Ve?Ri:An,minFilter:Ei,samples:Math.max(4,St.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const we=O.state.transmissionRenderTarget[ne.id],De=ne.viewport||Z;we.setSize(De.z*F.transmissionResolutionScale,De.w*F.transmissionResolutionScale);const de=F.getRenderTarget(),Be=F.getActiveCubeFace(),ze=F.getActiveMipmapLevel();F.setRenderTarget(we),F.getClearColor(_e),Ce=F.getClearAlpha(),Ce<1&&F.setClearColor(16777215,.5),F.clear(),it&&ke.render(re);const Qe=F.toneMapping;F.toneMapping=ai;const tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),O.setupLightsView(ne),We===!0&&Me.setGlobalState(F.clippingPlanes,ne),Sr(C,re,ne),G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let bt=0,zt=j.length;bt<zt;bt++){const Nt=j[bt],{object:At,geometry:Yt,material:E,group:ht}=Nt;if(E.side===wn&&At.layers.test(ne.layers)){const yt=E.side;E.side=En,E.needsUpdate=!0,zs(At,re,ne,Yt,E,ht),E.side=yt,E.needsUpdate=!0,Ve=!0}}Ve===!0&&(G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we))}F.setRenderTarget(de,Be,ze),F.setClearColor(_e,Ce),tt!==void 0&&(ne.viewport=tt),F.toneMapping=Qe}function Sr(C,j,re){const ne=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,we=C.length;Q<we;Q++){const De=C[Q],{object:de,geometry:Be,group:ze}=De;let Qe=De.material;Qe.allowOverride===!0&&ne!==null&&(Qe=ne),de.layers.test(re.layers)&&zs(de,j,re,Be,Qe,ze)}}function zs(C,j,re,ne,Q,we){C.onBeforeRender(F,j,re,ne,Q,we),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(F,j,re,ne,C,we),Q.transparent===!0&&Q.side===wn&&Q.forceSinglePass===!1?(Q.side=En,Q.needsUpdate=!0,F.renderBufferDirect(re,j,ne,Q,C,we),Q.side=Ai,Q.needsUpdate=!0,F.renderBufferDirect(re,j,ne,Q,C,we),Q.side=wn):F.renderBufferDirect(re,j,ne,Q,C,we),C.onAfterRender(F,j,re,ne,Q,we)}function qi(C,j,re){j.isScene!==!0&&(j=Tt);const ne=b.get(C),Q=O.state.lights,we=O.state.shadowsArray,De=Q.state.version,de=be.getParameters(C,Q.state,we,j,re),Be=be.getProgramCacheKey(de);let ze=ne.programs;ne.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?j.environment:null,ne.fog=j.fog;const Qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ne.envMap=ae.get(C.envMap||ne.environment,Qe),ne.envMapRotation=ne.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",ct),ze=new Map,ne.programs=ze);let tt=ze.get(Be);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===De)return Hs(C,de),tt}else de.uniforms=be.getUniforms(C),C.onBeforeCompile(de,F),tt=be.acquireProgram(de,Be),ze.set(Be,tt),ne.uniforms=de.uniforms;const Ve=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),Hs(C,de),ne.needsLights=wt(C),ne.lightsStateVersion=De,ne.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=tt,ne.uniformsList=null,tt}function Vs(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Va.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Hs(C,j){const re=b.get(C);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function ro(C,j,re,ne,Q){j.isScene!==!0&&(j=Tt),G.resetTextureUnits();const we=j.fog,De=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?j.environment:null,de=J===null?F.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:yn,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,ze=ae.get(ne.envMap||De,Be),Qe=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,tt=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ve=!!re.morphAttributes.position,bt=!!re.morphAttributes.normal,zt=!!re.morphAttributes.color;let Nt=ai;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Nt=F.toneMapping);const At=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Yt=At!==void 0?At.length:0,E=b.get(ne),ht=O.state.lights;if(We===!0&&(je===!0||C!==ie)){const Xt=C===ie&&ne.id===K;Me.setState(ne,C,Xt)}let yt=!1;ne.version===E.__version?(E.needsLights&&E.lightsStateVersion!==ht.state.version||E.outputColorSpace!==de||Q.isBatchedMesh&&E.batching===!1||!Q.isBatchedMesh&&E.batching===!0||Q.isBatchedMesh&&E.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&E.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&E.instancing===!1||!Q.isInstancedMesh&&E.instancing===!0||Q.isSkinnedMesh&&E.skinning===!1||!Q.isSkinnedMesh&&E.skinning===!0||Q.isInstancedMesh&&E.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&E.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&E.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&E.instancingMorph===!1&&Q.morphTexture!==null||E.envMap!==ze||ne.fog===!0&&E.fog!==we||E.numClippingPlanes!==void 0&&(E.numClippingPlanes!==Me.numPlanes||E.numIntersection!==Me.numIntersection)||E.vertexAlphas!==Qe||E.vertexTangents!==tt||E.morphTargets!==Ve||E.morphNormals!==bt||E.morphColors!==zt||E.toneMapping!==Nt||E.morphTargetsCount!==Yt)&&(yt=!0):(yt=!0,E.__version=ne.version);let dn=E.currentProgram;yt===!0&&(dn=qi(ne,j,Q));let un=!1,gi=!1,Fi=!1;const Ct=dn.getUniforms(),Kt=E.uniforms;if(Fe.useProgram(dn.program)&&(un=!0,gi=!0,Fi=!0),ne.id!==K&&(K=ne.id,gi=!0),un||ie!==C){Fe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ct.setValue(H,"projectionMatrix",C.projectionMatrix),Ct.setValue(H,"viewMatrix",C.matrixWorldInverse);const qn=Ct.map.cameraPosition;qn!==void 0&&qn.setValue(H,ft.setFromMatrixPosition(C.matrixWorld)),St.logarithmicDepthBuffer&&Ct.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),ie!==C&&(ie=C,gi=!0,Fi=!0)}if(E.needsLights&&(ht.state.directionalShadowMap.length>0&&Ct.setValue(H,"directionalShadowMap",ht.state.directionalShadowMap,G),ht.state.spotShadowMap.length>0&&Ct.setValue(H,"spotShadowMap",ht.state.spotShadowMap,G),ht.state.pointShadowMap.length>0&&Ct.setValue(H,"pointShadowMap",ht.state.pointShadowMap,G)),Q.isSkinnedMesh){Ct.setOptional(H,Q,"bindMatrix"),Ct.setOptional(H,Q,"bindMatrixInverse");const Xt=Q.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ct.setValue(H,"boneTexture",Xt.boneTexture,G))}Q.isBatchedMesh&&(Ct.setOptional(H,Q,"batchingTexture"),Ct.setValue(H,"batchingTexture",Q._matricesTexture,G),Ct.setOptional(H,Q,"batchingIdTexture"),Ct.setValue(H,"batchingIdTexture",Q._indirectTexture,G),Ct.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ct.setValue(H,"batchingColorTexture",Q._colorsTexture,G));const jn=re.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Le.update(Q,re,dn),(gi||E.receiveShadow!==Q.receiveShadow)&&(E.receiveShadow=Q.receiveShadow,Ct.setValue(H,"receiveShadow",Q.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&j.environment!==null&&(Kt.envMapIntensity.value=j.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=Nb()),gi&&(Ct.setValue(H,"toneMappingExposure",F.toneMappingExposure),E.needsLights&&so(Kt,Fi),we&&ne.fog===!0&&Ge.refreshFogUniforms(Kt,we),Ge.refreshMaterialUniforms(Kt,ne,Je,Pe,O.state.transmissionRenderTarget[C.id]),Va.upload(H,Vs(E),Kt,G)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Va.upload(H,Vs(E),Kt,G),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(H,"center",Q.center),Ct.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ct.setValue(H,"normalMatrix",Q.normalMatrix),Ct.setValue(H,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Xt=ne.uniformsGroups;for(let qn=0,Ni=Xt.length;qn<Ni;qn++){const Ht=Xt[qn];Re.update(Ht,dn),Re.bind(Ht,dn)}}return dn}function so(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function wt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,j,re){const ne=b.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=j,b.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const re=b.get(C);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const ao=H.createFramebuffer();this.setRenderTarget=function(C,j=0,re=0){J=C,B=j,Y=re;let ne=null,Q=!1,we=!1;if(C){const de=b.get(C);if(de.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(H.FRAMEBUFFER,de.__webglFramebuffer),Z.copy(C.viewport),te.copy(C.scissor),pe=C.scissorTest,Fe.viewport(Z),Fe.scissor(te),Fe.setScissorTest(pe),K=-1;return}else if(de.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(de.__hasExternalTextures)G.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qe=C.depthTexture;if(de.__boundDepthTexture!==Qe){if(Qe!==null&&b.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const ze=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[j])?ne=ze[j][re]:ne=ze[j],Q=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?ne=b.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?ne=ze[re]:ne=ze,Z.copy(C.viewport),te.copy(C.scissor),pe=C.scissorTest}else Z.copy(ce).multiplyScalar(Je).floor(),te.copy(ye).multiplyScalar(Je).floor(),pe=se;if(re!==0&&(ne=ao),Fe.bindFramebuffer(H.FRAMEBUFFER,ne)&&Fe.drawBuffers(C,ne),Fe.viewport(Z),Fe.scissor(te),Fe.setScissorTest(pe),Q){const de=b.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,de.__webglTexture,re)}else if(we){const de=j;for(let Be=0;Be<C.textures.length;Be++){const ze=b.get(C.textures[Be]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Be,ze.__webglTexture,re,de)}}else if(C!==null&&re!==0){const de=b.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,de.__webglTexture,re)}K=-1},this.readRenderTargetPixels=function(C,j,re,ne,Q,we,De,de=0){if(!(C&&C.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){Fe.bindFramebuffer(H.FRAMEBUFFER,Be);try{const ze=C.textures[de],Qe=ze.format,tt=ze.type;if(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+de),!St.textureFormatReadable(Qe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(tt)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ne&&re>=0&&re<=C.height-Q&&H.readPixels(j,re,ne,Q,Te.convert(Qe),Te.convert(tt),we)}finally{const ze=J!==null?b.get(J).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,j,re,ne,Q,we,De,de=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be)if(j>=0&&j<=C.width-ne&&re>=0&&re<=C.height-Q){Fe.bindFramebuffer(H.FRAMEBUFFER,Be);const ze=C.textures[de],Qe=ze.format,tt=ze.type;if(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+de),!St.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.bufferData(H.PIXEL_PACK_BUFFER,we.byteLength,H.STREAM_READ),H.readPixels(j,re,ne,Q,Te.convert(Qe),Te.convert(tt),0);const bt=J!==null?b.get(J).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,bt);const zt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await cv(H,zt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,we),H.deleteBuffer(Ve),H.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,re=0){const ne=Math.pow(2,-re),Q=Math.floor(C.image.width*ne),we=Math.floor(C.image.height*ne),De=j!==null?j.x:0,de=j!==null?j.y:0;G.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,De,de,Q,we),Fe.unbindTexture()};const Gs=H.createFramebuffer(),Di=H.createFramebuffer();this.copyTextureToTexture=function(C,j,re=null,ne=null,Q=0,we=0){let De,de,Be,ze,Qe,tt,Ve,bt,zt;const Nt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(re!==null)De=re.max.x-re.min.x,de=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,ze=re.min.x,Qe=re.min.y,tt=re.isBox3?re.min.z:0;else{const Kt=Math.pow(2,-Q);De=Math.floor(Nt.width*Kt),de=Math.floor(Nt.height*Kt),C.isDataArrayTexture?Be=Nt.depth:C.isData3DTexture?Be=Math.floor(Nt.depth*Kt):Be=1,ze=0,Qe=0,tt=0}ne!==null?(Ve=ne.x,bt=ne.y,zt=ne.z):(Ve=0,bt=0,zt=0);const At=Te.convert(j.format),Yt=Te.convert(j.type);let E;j.isData3DTexture?(G.setTexture3D(j,0),E=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(G.setTexture2DArray(j,0),E=H.TEXTURE_2D_ARRAY):(G.setTexture2D(j,0),E=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const ht=H.getParameter(H.UNPACK_ROW_LENGTH),yt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),dn=H.getParameter(H.UNPACK_SKIP_PIXELS),un=H.getParameter(H.UNPACK_SKIP_ROWS),gi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Nt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,tt);const Fi=C.isDataArrayTexture||C.isData3DTexture,Ct=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Kt=b.get(C),jn=b.get(j),Xt=b.get(Kt.__renderTarget),qn=b.get(jn.__renderTarget);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Ni=0;Ni<Be;Ni++)Fi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,b.get(C).__webglTexture,Q,tt+Ni),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,b.get(j).__webglTexture,we,zt+Ni)),H.blitFramebuffer(ze,Qe,De,de,Ve,bt,De,de,H.DEPTH_BUFFER_BIT,H.NEAREST);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||b.has(C)){const Kt=b.get(C),jn=b.get(j);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,Gs),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Di);for(let Xt=0;Xt<Be;Xt++)Fi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.__webglTexture,Q,tt+Xt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Kt.__webglTexture,Q),Ct?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jn.__webglTexture,we,zt+Xt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,jn.__webglTexture,we),Q!==0?H.blitFramebuffer(ze,Qe,De,de,Ve,bt,De,de,H.COLOR_BUFFER_BIT,H.NEAREST):Ct?H.copyTexSubImage3D(E,we,Ve,bt,zt+Xt,ze,Qe,De,de):H.copyTexSubImage2D(E,we,Ve,bt,ze,Qe,De,de);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(E,we,Ve,bt,zt,De,de,Be,At,Yt,Nt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(E,we,Ve,bt,zt,De,de,Be,At,Nt.data):H.texSubImage3D(E,we,Ve,bt,zt,De,de,Be,At,Yt,Nt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,we,Ve,bt,De,de,At,Yt,Nt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,we,Ve,bt,Nt.width,Nt.height,At,Nt.data):H.texSubImage2D(H.TEXTURE_2D,we,Ve,bt,De,de,At,Yt,Nt);H.pixelStorei(H.UNPACK_ROW_LENGTH,ht),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,dn),H.pixelStorei(H.UNPACK_SKIP_ROWS,un),H.pixelStorei(H.UNPACK_SKIP_IMAGES,gi),we===0&&j.generateMipmaps&&H.generateMipmap(E),Fe.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){B=0,Y=0,J=null,Fe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Ob="xlab-roboracer-offroad-1-10",kb="f11738ed35a995c0bc046666e3cb9eb0f7bda053",Bb={wheel_radius:.055,wheel_width:.041,wheel_base:.324,wheel_tread:.255,max_steer_angle:.4},zb={body_frame_xyz_m:[.25083,0,.13677]},ws={id:Ob,source_commit:kb,geometry:Bb,camera:zb},dr=ws.geometry,hn=Object.freeze({wheelbase:dr.wheel_base,tread:dr.wheel_tread,radius:dr.wheel_radius,wheelWidth:dr.wheel_width,maxSteer:dr.max_steer_angle}),Xh=ws,Br=Object.freeze([ws.camera.body_frame_xyz_m[0]-dr.wheel_base/2,ws.camera.body_frame_xyz_m[1],ws.camera.body_frame_xyz_m[2]-dr.wheel_radius-.04]),zr=1.9,Xd=new rx([[-3,-6],[5,-6],[10,-4],[11,1],[8,6],[3,6],[0,2],[-4,1],[-7,5],[-11,4],[-12,-1],[-9,-6]].map(([r,e])=>new X(r,e,0)),!0,"centripetal"),Mn=Xd.getSpacedPoints(240).slice(0,-1),Vb=Xd.getLength();function si(r){const e=Mn.length,t=Mn[(r+e)%e],n=Mn[(r+1+e)%e],i=Mn[(r-1+e)%e],s=n.clone().sub(i).normalize();return{p:t,tangent:s,normal:new X(-s.y,s.x,0),yaw:Math.atan2(s.y,s.x)}}const $d=[-1,1].flatMap(r=>Mn.map((e,t)=>{const n=si(t),i=si(t+1),s=n.p.clone().addScaledVector(n.normal,r*(zr/2+.09)),c=i.p.clone().addScaledVector(i.normal,r*(zr/2+.09));return{x:(s.x+c.x)/2,y:(s.y+c.y)/2,z:.13,halfLength:s.distanceTo(c)/2+.012,yaw:Math.atan2(c.y-s.y,c.x-s.x),side:r,index:t}}));function oc(r){let e=0,t=1/0;for(let n=0;n<Mn.length;n++){const i=Math.hypot(r[0]-Mn[n].x,r[1]-Mn[n].y);i<t&&(t=i,e=n)}return{index:e,distance:t,...si(e)}}function Hb(){const r=si(0),e=[["fl",1,1],["fr",1,-1],["rl",-1,1],["rr",-1,-1]];return`<mujoco model="RoboRacer browser practice">
  <compiler angle="radian"/>
  <option timestep="0.004" integrator="implicitfast" iterations="30" gravity="0 0 -9.81"/>
  <default><geom friction="1 .005 .0001" condim="4" solref=".01 1" solimp=".95 .99 .001"/><joint damping=".003" armature=".00002"/></default>
  <worldbody>
    <geom name="floor" type="plane" size="22 16 .1"/>
    ${$d.map((t,n)=>`<geom name="barrier_${n}" type="box" pos="${t.x} ${t.y} ${t.z}" euler="0 0 ${t.yaw}" size="${t.halfLength} .08 .13"/>`).join("")}
    <body name="chassis" pos="${r.p.x} ${r.p.y} .12" euler="0 0 ${r.yaw}">
      <freejoint name="root"/>
      <geom name="chassis_collision" type="box" size=".245 .105 .035" mass="3.1"/>
      <geom name="camera_collision" type="box" pos="${Br.join(" ")}" size=".014 .045 .0125" mass=".05"/>
      ${e.map(([t,n,i])=>`<body name="susp_${t}" pos="${n*hn.wheelbase/2} ${i*hn.tread/2} -.04">
        <joint name="spring_${t}" type="slide" axis="0 0 1" range="-.018 .018" stiffness="1500" damping="12"/>
        <inertial pos="0 0 0" mass=".025" diaginertia=".00001 .00001 .00001"/>
        <body name="hub_${t}">
          ${n===1?`<joint name="steer_${t}" type="hinge" axis="0 0 1" range="-.5 .5" damping=".15"/>`:""}
          <inertial pos="0 0 0" mass=".02" diaginertia=".00001 .00001 .00001"/>
          <body name="wheel_${t}">
            <joint name="roll_${t}" type="hinge" axis="0 1 0"/>
            <geom name="tire_${t}" type="cylinder" size="${hn.radius} ${hn.wheelWidth/2}" euler="1.57079632679 0 0" mass=".08"/>
          </body>
        </body>
      </body>`).join("")}
    </body>
  </worldbody>
  <actuator>
    <position name="steer_left" joint="steer_fl" kp="15" kv=".6" ctrlrange="-.5 .5" forcerange="-1 1"/>
    <position name="steer_right" joint="steer_fr" kp="15" kv=".6" ctrlrange="-.5 .5" forcerange="-1 1"/>
    <velocity name="drive_left" joint="roll_rl" kv=".15" ctrlrange="-60 60" forcerange="-1.2 1.2"/>
    <velocity name="drive_right" joint="roll_rr" kv=".15" ctrlrange="-60 60" forcerange="-1.2 1.2"/>
  </actuator>
  </mujoco>`}const Vn=(r,e=-1,t=1)=>Math.max(e,Math.min(t,r));class Gb{constructor(e){this.mj=e,this.model=e.MjModel.from_xml_string(Hb()),this.data=new e.MjData(this.model),this.mode="manual",this.speedLimit=2,this.events=[],this.samples=[],this.reset()}get position(){return Array.from(this.data.qpos.subarray(0,3))}get quaternion(){return Array.from(this.data.qpos.subarray(3,7))}get yaw(){const[e,t,n,i]=this.quaternion;return Math.atan2(2*(e*i+t*n),1-2*(n*n+i*i))}get speed(){return this.data.qvel[0]*Math.cos(this.yaw)+this.data.qvel[1]*Math.sin(this.yaw)}reset(){this.mj.mj_resetData(this.model,this.data),this.mj.mj_forward(this.model,this.data),this.elapsed=0,this.laps=0,this.lastLap=null,this.bestLap=null,this.lapStart=0,this.hits=0,this.progress=0,this.previousIndex=0,this.targetSpeed=0,this.steering=0,this.lastContact=!1,this.lapValid=!0,this.bestByMode={manual:null,demo:null},this.samples=[],this.events=[{type:"reset",t:0,mode:this.mode}],this.input={steer:0,throttle:0,brake:0,source:"none"}}setMode(e){if(!["manual","demo"].includes(e))throw new Error("Unknown control mode");e!==this.mode&&this.elapsed>.05&&(this.lapValid=!1),this.mode=e,this.bestLap=this.bestByMode[e],this.lastLap=null,this.targetSpeed=0,this.events.push({type:"mode",mode:e,t:this.elapsed})}demonstration(){const e=oc(this.position),t=.65+Math.abs(this.speed)*.35,n=si(e.index+Math.ceil(t/(Vb/Mn.length))).p,i=n.x-this.position[0],s=n.y-this.position[1],c=-Math.sin(this.yaw)*i+Math.cos(this.yaw)*s,l=Math.atan2(2*hn.wheelbase*c,i*i+s*s),d=Math.min(this.speedLimit,2.3/(1+Math.abs(l)*4));return{steer:Vn(l/hn.maxSteer),throttle:d/this.speedLimit,brake:0,source:"pure-pursuit"}}step(e={steer:0,throttle:0,brake:0,source:"none"}){const t=this.mode==="demo"?this.demonstration():e;if(![t.steer,t.throttle,t.brake].every(Number.isFinite))throw new Error("Non-finite input");this.input={...t};const n=t.throttle>0?Vn(t.throttle,0,1)*this.speedLimit:-Vn(t.brake,0,1)*.7,i=t.brake>0&&this.speed>.12?0:n,s=t.brake>0?5:2;this.targetSpeed+=Vn(i-this.targetSpeed,-s*.02,s*.02),this.steering+=Vn(Vn(t.steer)*hn.maxSteer-this.steering,-1.6*.02,1.6*.02);const c=Math.tan(this.steering)/hn.wheelbase;this.data.ctrl[0]=Math.atan(hn.wheelbase*c/(1-hn.tread/2*c)),this.data.ctrl[1]=Math.atan(hn.wheelbase*c/(1+hn.tread/2*c)),this.data.ctrl[2]=this.targetSpeed*(1-hn.tread/2*c)/hn.radius,this.data.ctrl[3]=this.targetSpeed*(1+hn.tread/2*c)/hn.radius;let l=!1;for(let m=0;m<5;m++){this.mj.mj_step(this.model,this.data);const _=this.data.contact;for(let S=0;S<this.data.ncon;S++){const w=_.get(S),y=this.model.geom_bodyid[w.geom1],x=this.model.geom_bodyid[w.geom2];(y===0?w.geom1:x===0?w.geom2:0)>0&&y===0!=(x===0)&&(l=!0),w.delete()}_.delete()}this.mj.mj_forward(this.model,this.data),this.elapsed+=.02,l&&!this.lastContact&&(this.hits++,this.events.push({type:"collision",t:this.elapsed})),this.lastContact=l;const d=oc(this.position),h=Mn.length;let p=d.index-this.previousIndex;p>h/2&&(p-=h),p<-h/2&&(p+=h),d.distance<1.4&&Math.abs(p)<h/8&&(this.progress+=p);const g=this.previousIndex>h-8&&d.index<8&&p>0&&d.distance<1.4;this.previousIndex=d.index,!this.lapValid&&g&&(this.progress=this.laps*h,this.lapStart=this.elapsed,this.lapValid=!0),this.lapValid&&this.progress>=(this.laps+1)*h&&(this.laps++,this.lastLap=this.elapsed-this.lapStart,this.lapStart=this.elapsed,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap),this.bestByMode[this.mode]=this.bestLap,this.events.push({type:"lap",t:this.elapsed,seconds:this.lastLap,lap:this.laps,mode:this.mode})),Math.round(this.elapsed*50)%5===0&&this.samples.length<36e3&&this.samples.push({t:+this.elapsed.toFixed(2),position:this.position,yaw:this.yaw,speed:this.speed,mode:this.mode,input:{...this.input},distanceFromCenter:d.distance,lap:this.laps,hits:this.hits})}recover(){const e=oc(this.position),t=si(e.index);this.data.qpos.set([t.p.x,t.p.y,.12,Math.cos(t.yaw/2),0,0,Math.sin(t.yaw/2)],0),this.data.qpos.fill(0,7),this.data.qvel.fill(0),this.data.ctrl.fill(0),this.targetSpeed=0,this.steering=0,this.progress=this.laps*Mn.length,this.previousIndex=e.index,this.lapStart=this.elapsed,this.lapValid=!1,this.lastContact=!1,this.events.push({type:"recovery",t:this.elapsed}),this.mj.mj_forward(this.model,this.data)}snapshot(){return{position:this.position,quaternion:this.quaternion,speed:this.speed,elapsed:this.elapsed,mode:this.mode,laps:this.laps,hits:this.hits,lastLap:this.lastLap,bestLap:this.bestLap,input:this.input,steering:this.steering,progress:this.progress}}export(){return{schema:"car-practice-v1",vehicle:"AutoDRIVE F1TENTH visual / xLab RoboRacer geometry",hardwareProfile:Xh.id,hardwareSourceCommit:Xh.source_commit,wheelbaseM:hn.wheelbase,physics:"MuJoCo 3.13.0",nativeAutoDrivePhysics:!1,calibratedToRealCar:!1,course:"authored practice circuit v1",speedLimitMps:this.speedLimit,sampleLimitReached:this.samples.length>=36e3,samples:this.samples,events:this.events}}dispose(){this.data.delete(),this.model.delete()}}class Wb extends _r{constructor(e){super(e)}load(e,t,n,i){const s=this,c=new Ll(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{t(s.parse(l))}catch(d){i?i(d):console.error(d),s.manager.itemError(e)}},n,i)}parse(e){function t(h){const p=new DataView(h),g=32/8*3+32/8*3*3+16/8,m=p.getUint32(80,!0);if(80+32/8+m*g===p.byteLength)return!0;const S=[115,111,108,105,100];for(let w=0;w<5;w++)if(n(S,p,w))return!1;return!0}function n(h,p,g){for(let m=0,_=h.length;m<_;m++)if(h[m]!==p.getUint8(g+m))return!1;return!0}function i(h){const p=new DataView(h),g=p.getUint32(80,!0);let m,_,S,w=!1,y,x,L,I,D;for(let B=0;B<70;B++)p.getUint32(B,!1)==1129270351&&p.getUint8(B+4)==82&&p.getUint8(B+5)==61&&(w=!0,y=new Float32Array(g*3*3),x=p.getUint8(B+6)/255,L=p.getUint8(B+7)/255,I=p.getUint8(B+8)/255,D=p.getUint8(B+9)/255);const O=84,P=50,V=new tn,A=new Float32Array(g*3*3),F=new Float32Array(g*3*3),k=new Ze;for(let B=0;B<g;B++){const Y=O+B*P,J=p.getFloat32(Y,!0),K=p.getFloat32(Y+4,!0),ie=p.getFloat32(Y+8,!0);if(w){const Z=p.getUint16(Y+48,!0);(Z&32768)===0?(m=(Z&31)/31,_=(Z>>5&31)/31,S=(Z>>10&31)/31):(m=x,_=L,S=I)}for(let Z=1;Z<=3;Z++){const te=Y+Z*12,pe=B*3*3+(Z-1)*3;A[pe]=p.getFloat32(te,!0),A[pe+1]=p.getFloat32(te+4,!0),A[pe+2]=p.getFloat32(te+8,!0),F[pe]=J,F[pe+1]=K,F[pe+2]=ie,w&&(k.setRGB(m,_,S,Vt),y[pe]=k.r,y[pe+1]=k.g,y[pe+2]=k.b)}}return V.setAttribute("position",new cn(A,3)),V.setAttribute("normal",new cn(F,3)),w&&(V.setAttribute("color",new cn(y,3)),V.hasColors=!0,V.alpha=D),V}function s(h){const p=new tn,g=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,_=/solid\s(.+)/;let S=0;const w=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+w+w+w,"g"),x=new RegExp("normal"+w+w+w,"g"),L=[],I=[],D=[],O=new X;let P,V=0,A=0,F=0;for(;(P=g.exec(h))!==null;){A=F;const k=P[0],B=(P=_.exec(k))!==null?P[1]:"";for(D.push(B);(P=m.exec(k))!==null;){let K=0,ie=0;const Z=P[0];for(;(P=x.exec(Z))!==null;)O.x=parseFloat(P[1]),O.y=parseFloat(P[2]),O.z=parseFloat(P[3]),ie++;for(;(P=y.exec(Z))!==null;)L.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),I.push(O.x,O.y,O.z),K++,F++;ie!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+S),K!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+S),S++}const Y=A,J=F-A;p.userData.groupNames=D,p.addGroup(Y,J,V),V++}return p.setAttribute("position",new ln(L,3)),p.setAttribute("normal",new ln(I,3)),p}function c(h){return typeof h!="string"?new TextDecoder().decode(h):h}function l(h){if(typeof h=="string"){const p=new Uint8Array(h.length);for(let g=0;g<h.length;g++)p[g]=h.charCodeAt(g)&255;return p.buffer||p}else return h}const d=l(e);return t(d)?i(d):s(c(e))}}function $h(r,e){if(e===K0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Qc||e===yd){let t=r.getIndex();if(t===null){const c=[],l=r.getAttribute("position");if(l!==void 0){for(let d=0;d<l.count;d++)c.push(d);r.setIndex(c),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Qc)for(let c=1;c<=n;c++)i.push(t.getX(0)),i.push(t.getX(c)),i.push(t.getX(c+1));else for(let c=0;c<n;c++)c%2===0?(i.push(t.getX(c)),i.push(t.getX(c+1)),i.push(t.getX(c+2))):(i.push(t.getX(c+2)),i.push(t.getX(c+1)),i.push(t.getX(c)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Xb(r){const e=new Map,t=new Map,n=r.clone();return jd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,c=e.get(i),l=c.skeleton.bones;s.skeleton=c.skeleton.clone(),s.bindMatrix.copy(c.bindMatrix),s.skeleton.bones=l.map(function(d){return t.get(d)}),s.bind(s.skeleton,s.bindMatrix)}),n}function jd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)jd(r.children[n],e.children[n],t)}class $b extends _r{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new oT(t)}),this.register(function(t){return new cT(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new tT(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new rT(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new aT(t)}),this.register(function(t){return new sT(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new jh(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new jh(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new uT(t)})}load(e,t,n,i){const s=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=Ts.extractUrlBase(e);c=Ts.resolveURL(h,this.path)}else c=Ts.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},d=new Ll(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{s.parse(h,c,function(p){t(p),s.manager.itemEnd(e)},l)}catch(p){l(p)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const c={},l={},d=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===qd){try{c[dt.KHR_BINARY_GLTF]=new hT(e)}catch(g){i&&i(g);return}s=JSON.parse(c[dt.KHR_BINARY_GLTF].content)}else s=JSON.parse(d.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new bT(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const g=this.pluginCallbacks[p](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[g.name]=g,c[g.name]=!0}if(s.extensionsUsed)for(let p=0;p<s.extensionsUsed.length;++p){const g=s.extensionsUsed[p],m=s.extensionsRequired||[];switch(g){case dt.KHR_MATERIALS_UNLIT:c[g]=new Yb;break;case dt.KHR_DRACO_MESH_COMPRESSION:c[g]=new dT(s,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:c[g]=new fT;break;case dt.KHR_MESH_QUANTIZATION:c[g]=new pT;break;default:m.indexOf(g)>=0&&l[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(c),h.setPlugins(l),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function jb(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Wt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class qb{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,d=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const p=new Ze(16777215);d.color!==void 0&&p.setRGB(d.color[0],d.color[1],d.color[2],yn);const g=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new kd(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Cx(p),h.distance=g;break;case"spot":h=new Ax(p),h.distance=g,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),ti(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(d){return n._getNodeRef(t.cache,l,d)})}}class Yb{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(e,t,n){const i=[];e.color=new Ze(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const c=s.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],yn),e.opacity=c[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Vt))}return Promise.all(i)}}class Kb{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Zb{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new gt(s,s)}return Promise.all(i)}}class Jb{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Qb{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class eT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],yn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class tT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class nT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ze().setRGB(s[0],s[1],s[2],yn),Promise.all(i)}}class iT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class rT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Ze().setRGB(s[0],s[1],s[2],yn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Vt)),Promise.all(i)}}class sT{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class aT{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?mi:null}extendMaterialParams(e,t){const n=Wt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class oT{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,c)}}class cT{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const c=s.extensions[t],l=i.images[c.source];let d=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(d=h)}return n.loadTextureImage(e,c.source,d)}}class lT{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const c=s.extensions[t],l=i.images[c.source];let d=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(d=h)}return n.loadTextureImage(e,c.source,d)}}class jh{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const d=i.byteOffset||0,h=i.byteLength||0,p=i.count,g=i.byteStride,m=new Uint8Array(l,d,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(p,g,m,i.mode,i.filter).then(function(_){return _.buffer}):c.ready.then(function(){const _=new ArrayBuffer(p*g);return c.decodeGltfBuffer(new Uint8Array(_),p,g,m,i.mode,i.filter),_})})}else return null}}class uT{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==In.TRIANGLES&&h.mode!==In.TRIANGLE_STRIP&&h.mode!==In.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=n.extensions[this.name].attributes,l=[],d={};for(const h in c)l.push(this.parser.getDependency("accessor",c[h]).then(p=>(d[h]=p,d[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const p=h.pop(),g=p.isGroup?p.children:[p],m=h[0].count,_=[];for(const S of g){const w=new nt,y=new X,x=new fi,L=new X(1,1,1),I=new Cd(S.geometry,S.material,m);for(let D=0;D<m;D++)d.TRANSLATION&&y.fromBufferAttribute(d.TRANSLATION,D),d.ROTATION&&x.fromBufferAttribute(d.ROTATION,D),d.SCALE&&L.fromBufferAttribute(d.SCALE,D),I.setMatrixAt(D,w.compose(y,x,L));for(const D in d)if(D==="_COLOR_0"){const O=d[D];I.instanceColor=new tl(O.array,O.itemSize,O.normalized)}else D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"&&S.geometry.setAttribute(D,d[D]);kt.prototype.copy.call(I,S),this.parser.assignFinalMaterial(I),_.push(I)}return p.isGroup?(p.clear(),p.add(..._),p):_[0]}))}}const qd="glTF",vs=12,qh={JSON:1313821514,BIN:5130562};class hT{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vs,s=new DataView(e,vs);let c=0;for(;c<i;){const l=s.getUint32(c,!0);c+=4;const d=s.getUint32(c,!0);if(c+=4,d===qh.JSON){const h=new Uint8Array(e,vs+c,l);this.content=n.decode(h)}else if(d===qh.BIN){const h=vs+c;this.body=e.slice(h,h+l)}c+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,l={},d={},h={};for(const p in c){const g=al[p]||p.toLowerCase();l[g]=c[p]}for(const p in e.attributes){const g=al[p]||p.toLowerCase();if(c[p]!==void 0){const m=n.accessors[e.attributes[p]],_=Gr[m.componentType];h[g]=_.name,d[g]=m.normalized===!0}}return t.getDependency("bufferView",s).then(function(p){return new Promise(function(g,m){i.decodeDracoFile(p,function(_){for(const S in _.attributes){const w=_.attributes[S],y=d[S];y!==void 0&&(w.normalized=y)}g(_)},l,h,yn,m)})})}}class fT{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pT{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class Yd extends ts{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let c=0;c!==i;c++)t[c]=n[s+c];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,c=this.sampleValues,l=this.valueSize,d=l*2,h=l*3,p=i-t,g=(n-t)/p,m=g*g,_=m*g,S=e*h,w=S-h,y=-2*_+3*m,x=_-m,L=1-y,I=x-m+g;for(let D=0;D!==l;D++){const O=c[w+D+l],P=c[w+D+d]*p,V=c[S+D+l],A=c[S+D]*p;s[D]=L*O+I*P+y*V+x*A}return s}}const mT=new fi;class gT extends Yd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return mT.fromArray(s).normalize().toArray(s),s}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yh={9728:Qt,9729:en,9984:fd,9985:Ua,9986:ys,9987:Ei},Kh={33071:ii,33648:Ga,10497:mr},cc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},al={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_T={CUBICSPLINE:void 0,LINEAR:Ls,STEP:Ps},lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vT(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ja({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),r.DefaultMaterial}function or(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xT(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,p=e.length;h<p;h++){const g=e[h];if(g.POSITION!==void 0&&(n=!0),g.NORMAL!==void 0&&(i=!0),g.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const c=[],l=[],d=[];for(let h=0,p=e.length;h<p;h++){const g=e[h];if(n){const m=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):r.attributes.position;c.push(m)}if(i){const m=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):r.attributes.normal;l.push(m)}if(s){const m=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):r.attributes.color;d.push(m)}}return Promise.all([Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(h){const p=h[0],g=h[1],m=h[2];return n&&(r.morphAttributes.position=p),i&&(r.morphAttributes.normal=g),s&&(r.morphAttributes.color=m),r.morphTargetsRelative=!0,r})}function yT(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ST(r){let e;const t=r.extensions&&r.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uc(t.attributes):e=r.indices+":"+uc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+uc(r.targets[n]);return e}function uc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ol(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MT(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ET=new nt;class bT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,c=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const d=l.match(/Version\/(\d+)/);i=n&&d?parseInt(d[1],10):-1,s=l.indexOf("Firefox")>-1,c=s?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&c<98?this.textureLoader=new il(this.options.manager):this.textureLoader=new Lx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ll(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(c){const l={scene:c[0][i.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:i.asset,parser:n,userData:{}};return or(s,l,i),ti(l,i),Promise.all(n._invokeAll(function(d){return d.afterRoot&&d.afterRoot(l)})).then(function(){for(const d of l.scenes)d.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const c=t[i].joints;for(let l=0,d=c.length;l<d;l++)e[c[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const c=e[i];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(n[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(c,l)=>{const d=this.associations.get(c);d!=null&&this.associations.set(l,d);for(const[h,p]of c.children.entries())s(p,l.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,c){return n.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,c){n.load(Ts.resolveURL(t.uri,i.path),s,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const c=cc[i.type],l=Gr[i.componentType],d=i.normalized===!0,h=new l(i.count*c);return Promise.resolve(new cn(h,c,d))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(c){const l=c[0],d=cc[i.type],h=Gr[i.componentType],p=h.BYTES_PER_ELEMENT,g=p*d,m=i.byteOffset||0,_=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,S=i.normalized===!0;let w,y;if(_&&_!==g){const x=Math.floor(m/_),L="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let I=t.cache.get(L);I||(w=new h(l,x*_,i.count*_/p),I=new Wv(w,_/p),t.cache.add(L,I)),y=new bl(I,d,m%_/p,S)}else l===null?w=new h(i.count*d):w=new h(l,m,i.count*d),y=new cn(w,d,S);if(i.sparse!==void 0){const x=cc.SCALAR,L=Gr[i.sparse.indices.componentType],I=i.sparse.indices.byteOffset||0,D=i.sparse.values.byteOffset||0,O=new L(c[1],I,i.sparse.count*x),P=new h(c[2],D,i.sparse.count*d);l!==null&&(y=new cn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let V=0,A=O.length;V<A;V++){const F=O[V];if(y.setX(F,P[V*d]),d>=2&&y.setY(F,P[V*d+1]),d>=3&&y.setZ(F,P[V*d+2]),d>=4&&y.setW(F,P[V*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=S}return y})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,c=t.images[s];let l=this.textureLoader;if(c.uri){const d=n.manager.getHandler(c.uri);d!==null&&(l=d)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const i=this,s=this.json,c=s.textures[e],l=s.images[t],d=(l.uri||l.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=c.name||l.name||"",p.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(p.name=l.uri);const m=(s.samplers||{})[c.sampler]||{};return p.magFilter=Yh[m.magFilter]||en,p.minFilter=Yh[m.minFilter]||Ei,p.wrapS=Kh[m.wrapS]||mr,p.wrapT=Kh[m.wrapT]||mr,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==Qt&&p.minFilter!==en,i.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=i.images[e],l=self.URL||self.webkitURL;let d=c.uri||"",h=!1;if(c.bufferView!==void 0)d=n.getDependency("bufferView",c.bufferView).then(function(g){h=!0;const m=new Blob([g],{type:c.mimeType});return d=l.createObjectURL(m),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(d).then(function(g){return new Promise(function(m,_){let S=m;t.isImageBitmapLoader===!0&&(S=function(w){const y=new nn(w);y.needsUpdate=!0,m(y)}),t.load(Ts.resolveURL(g,s.path),S,void 0,_)})}).then(function(g){return h===!0&&l.revokeObjectURL(d),ti(g,c),g.userData.mimeType=c.mimeType||MT(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),g});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(c){if(!c)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(c=c.clone(),c.channel=n.texCoord),s.extensions[dt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const d=s.associations.get(c);c=s.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(c,l),s.associations.set(c,d)}}return i!==void 0&&(c.colorSpace=i),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let d=this.cache.get(l);d||(d=new Ld,ci.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,d.sizeAttenuation=!1,this.cache.add(l,d)),n=d}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let d=this.cache.get(l);d||(d=new bs,ci.prototype.copy.call(d,n),d.color.copy(n.color),d.map=n.map,this.cache.add(l,d)),n=d}if(i||s||c){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),c&&(l+="flat-shading:");let d=this.cache.get(l);d||(d=n.clone(),s&&(d.vertexColors=!0),c&&(d.flatShading=!0),i&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(l,d),this.associations.set(d,this.associations.get(n))),n=d}e.material=n}getMaterialType(){return Ja}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let c;const l={},d=s.extensions||{},h=[];if(d[dt.KHR_MATERIALS_UNLIT]){const g=i[dt.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),h.push(g.extendParams(l,s,t))}else{const g=s.pbrMetallicRoughness||{};if(l.color=new Ze(1,1,1),l.opacity=1,Array.isArray(g.baseColorFactor)){const m=g.baseColorFactor;l.color.setRGB(m[0],m[1],m[2],yn),l.opacity=m[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",g.baseColorTexture,Vt)),l.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,l.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=wn);const p=s.alphaMode||lc.OPAQUE;if(p===lc.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,p===lc.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&c!==Dn&&(h.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new gt(1,1),s.normalTexture.scale!==void 0)){const g=s.normalTexture.scale;l.normalScale.set(g,g)}if(s.occlusionTexture!==void 0&&c!==Dn&&(h.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&c!==Dn){const g=s.emissiveFactor;l.emissive=new Ze().setRGB(g[0],g[1],g[2],yn)}return s.emissiveTexture!==void 0&&c!==Dn&&h.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,Vt)),Promise.all(h).then(function(){const g=new c(l);return s.name&&(g.name=s.name),ti(g,s),t.associations.set(g,{materials:e}),s.extensions&&or(i,g,s),g})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(l){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(d){return Zh(d,l,t)})}const c=[];for(let l=0,d=e.length;l<d;l++){const h=e[l],p=ST(h),g=i[p];if(g)c.push(g.promise);else{let m;h.extensions&&h.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?m=s(h):m=Zh(new tn,h,t),i[p]={primitive:h,promise:m},c.push(m)}}return Promise.all(c)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],c=s.primitives,l=[];for(let d=0,h=c.length;d<h;d++){const p=c[d].material===void 0?vT(this.cache):this.getDependency("material",c[d].material);l.push(p)}return l.push(t.loadGeometries(c)),Promise.all(l).then(function(d){const h=d.slice(0,d.length-1),p=d[d.length-1],g=[];for(let _=0,S=p.length;_<S;_++){const w=p[_],y=c[_];let x;const L=h[_];if(y.mode===In.TRIANGLES||y.mode===In.TRIANGLE_STRIP||y.mode===In.TRIANGLE_FAN||y.mode===void 0)x=s.isSkinnedMesh===!0?new qv(w,L):new Gt(w,L),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),y.mode===In.TRIANGLE_STRIP?x.geometry=$h(x.geometry,yd):y.mode===In.TRIANGLE_FAN&&(x.geometry=$h(x.geometry,Qc));else if(y.mode===In.LINES)x=new ex(w,L);else if(y.mode===In.LINE_STRIP)x=new Fs(w,L);else if(y.mode===In.LINE_LOOP)x=new Pd(w,L);else if(y.mode===In.POINTS)x=new tx(w,L);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(x.geometry.morphAttributes).length>0&&yT(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),ti(x,s),y.extensions&&or(i,x,y),t.assignFinalMaterial(x),g.push(x)}for(let _=0,S=g.length;_<S;_++)t.associations.set(g[_],{meshes:e,primitives:_});if(g.length===1)return s.extensions&&or(i,g[0],s),g[0];const m=new Wn;s.extensions&&or(i,m,s),t.associations.set(m,{meshes:e});for(let _=0,S=g.length;_<S;_++)m.add(g[_]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(wv.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new eo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),c=i,l=[],d=[];for(let h=0,p=c.length;h<p;h++){const g=c[h];if(g){l.push(g);const m=new nt;s!==null&&m.fromArray(s.array,h*16),d.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new wl(l,d)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,c=[],l=[],d=[],h=[],p=[];for(let g=0,m=i.channels.length;g<m;g++){const _=i.channels[g],S=i.samplers[_.sampler],w=_.target,y=w.node,x=i.parameters!==void 0?i.parameters[S.input]:S.input,L=i.parameters!==void 0?i.parameters[S.output]:S.output;w.node!==void 0&&(c.push(this.getDependency("node",y)),l.push(this.getDependency("accessor",x)),d.push(this.getDependency("accessor",L)),h.push(S),p.push(w))}return Promise.all([Promise.all(c),Promise.all(l),Promise.all(d),Promise.all(h),Promise.all(p)]).then(function(g){const m=g[0],_=g[1],S=g[2],w=g[3],y=g[4],x=[];for(let I=0,D=m.length;I<D;I++){const O=m[I],P=_[I],V=S[I],A=w[I],F=y[I];if(O===void 0)continue;O.updateMatrix&&O.updateMatrix();const k=n._createAnimationTracks(O,P,V,A,F);if(k)for(let B=0;B<k.length;B++)x.push(k[B])}const L=new vx(s,void 0,x);return ti(L,i),L})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const c=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&c.traverse(function(l){if(l.isMesh)for(let d=0,h=i.weights.length;d<h;d++)l.morphTargetInfluences[d]=i.weights[d]}),c})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),c=[],l=i.children||[];for(let h=0,p=l.length;h<p;h++)c.push(n.getDependency("node",l[h]));const d=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(c),d]).then(function(h){const p=h[0],g=h[1],m=h[2];m!==null&&p.traverse(function(_){_.isSkinnedMesh&&_.bind(m,ET)});for(let _=0,S=g.length;_<S;_++)p.add(g[_]);if(p.userData.pivot!==void 0&&g.length>0){const _=p.userData.pivot,S=g[0];p.pivot=new X().fromArray(_),p.position.x-=_[0],p.position.y-=_[1],p.position.z-=_[2],S.position.set(0,0,0),delete p.userData.pivot}return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],c=s.name?i.createUniqueName(s.name):"",l=[],d=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&l.push(d),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let p;if(s.isBone===!0?p=new Rd:h.length>1?p=new Wn:h.length===1?p=h[0]:p=new kt,p!==h[0])for(let g=0,m=h.length;g<m;g++)p.add(h[g]);if(s.name&&(p.userData.name=s.name,p.name=c),ti(p,s),s.extensions&&or(n,p,s),s.matrix!==void 0){const g=new nt;g.fromArray(s.matrix),p.applyMatrix4(g)}else s.translation!==void 0&&p.position.fromArray(s.translation),s.rotation!==void 0&&p.quaternion.fromArray(s.rotation),s.scale!==void 0&&p.scale.fromArray(s.scale);if(!i.associations.has(p))i.associations.set(p,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const g=i.associations.get(p);i.associations.set(p,{...g})}return i.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Wn;n.name&&(s.name=i.createUniqueName(n.name)),ti(s,n),n.extensions&&or(t,s,n);const c=n.nodes||[],l=[];for(let d=0,h=c.length;d<h;d++)l.push(i.getDependency("node",c[d]));return Promise.all(l).then(function(d){for(let p=0,g=d.length;p<g;p++){const m=d[p];m.parent!==null?s.add(Xb(m)):s.add(m)}const h=p=>{const g=new Map;for(const[m,_]of i.associations)(m instanceof ci||m instanceof nn)&&g.set(m,_);return p.traverse(m=>{const _=i.associations.get(m);_!=null&&g.set(m,_)}),g};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const c=[],l=e.name?e.name:e.uuid,d=[];Hi[s.path]===Hi.weights?e.traverse(function(m){m.morphTargetInfluences&&d.push(m.name?m.name:m.uuid)}):d.push(l);let h;switch(Hi[s.path]){case Hi.weights:h=Kr;break;case Hi.rotation:h=Zr;break;case Hi.translation:case Hi.scale:h=Jr;break;default:n.itemSize===1?h=Kr:h=Jr;break}const p=i.interpolation!==void 0?_T[i.interpolation]:Ls,g=this._getArrayFromAccessor(n);for(let m=0,_=d.length;m<_;m++){const S=new h(d[m]+"."+Hi[s.path],t.array,g,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),c.push(S)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ol(t.constructor),i=new Float32Array(t.length);for(let s=0,c=t.length;s<c;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Zr?gT:Yd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TT(r,e,t){const n=e.attributes,i=new Pi;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],d=l.min,h=l.max;if(d!==void 0&&h!==void 0){if(i.set(new X(d[0],d[1],d[2]),new X(h[0],h[1],h[2])),l.normalized){const p=ol(Gr[l.componentType]);i.min.multiplyScalar(p),i.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new X,d=new X;for(let h=0,p=s.length;h<p;h++){const g=s[h];if(g.POSITION!==void 0){const m=t.json.accessors[g.POSITION],_=m.min,S=m.max;if(_!==void 0&&S!==void 0){if(d.setX(Math.max(Math.abs(_[0]),Math.abs(S[0]))),d.setY(Math.max(Math.abs(_[1]),Math.abs(S[1]))),d.setZ(Math.max(Math.abs(_[2]),Math.abs(S[2]))),m.normalized){const w=ol(Gr[m.componentType]);d.multiplyScalar(w)}l.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;const c=new pi;i.getCenter(c.center),c.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=c}function Zh(r,e,t){const n=e.attributes,i=[];function s(c,l){return t.getDependency("accessor",c).then(function(d){r.setAttribute(l,d)})}for(const c in n){const l=al[c]||c.toLowerCase();l in r.attributes||i.push(s(n[c],l))}if(e.indices!==void 0&&!r.index){const c=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(c)}return xt.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),ti(r,e),TT(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xT(r,e.targets,t):r})}const Sn=(r,e={})=>new Ja({color:r,roughness:.87,...e}),cr=new X(0,0,1);function Jh(r,e,t){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d"),s=i.createImageData(128,128);let c=718;for(let d=0;d<s.data.length;d+=4){c=c*1664525+1013904223>>>0;const h=r+(c/4294967296-.5)*e;s.data.set([h,h,h,255],d)}i.putImageData(s,0,0);const l=new Rl(n);return l.colorSpace=Vt,l.wrapS=l.wrapT=mr,l.repeat.set(t,t),l}function hc(r,e="",t="#011f5b",n="#ffffff"){const i=document.createElement("canvas");i.width=1024,i.height=256;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,i.width,i.height),s.textAlign="center",s.fillStyle=n,s.font="600 74px Arial",s.fillText(r,512,e?119:153),e&&(s.font="32px Arial",s.fillText(e,512,189));const c=new Rl(i);return c.colorSpace=Vt,c}class wT{constructor(e,t){this.sim=t,this.scene=new zv,this.scene.background=new Ze("#dce4e8"),this.scene.fog=new El("#dce4e8",32,65),this.mode="chase",this.frames=0,this.renderer=new Ub({canvas:e,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=rd,this.renderer.toneMapping=hl,this.renderer.toneMappingExposure=1.25,this.renderer.outputColorSpace=Vt,this.camera=new xn(68,1,.025,100),this.camera.up.copy(cr);const n=new Tx("#f4f7ff","#7c8590",2.5);n.position.set(0,0,10),this.scene.add(n);const i=new kd("#fff4e1",2.8);i.position.set(-6,-10,16),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-17,right:17,top:13,bottom:-13,near:1,far:45}),i.shadow.normalBias=.025,this.scene.add(i),this.materials={navy:Sn("#011f5b"),red:Sn("#990000"),white:Sn("#f5f6f5"),metal:Sn("#707c86",{metalness:.5,roughness:.55}),black:Sn("#20242a")},this.environment(),this.track(),this.vehicle(),this.snapCamera=!0,this.assetErrors=[],this.assetsReady=!1,this.assetPromise=this.loadAssets().then(()=>this.assetsReady=!0),this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0}box(e,t,n,i=this.scene){const s=new Gt(new gr(...e),n);return s.position.set(...t),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}board(e,t,n,i,s=0){const c=new Gt(new Wi(t,n),new Dn({map:e,side:wn}));return c.position.set(...i),c.rotation.set(Math.PI/2,i[1]<0?Math.PI:0,s),this.scene.add(c),c}environment(){const e=new Gt(new Wi(43,31),Sn("#bbc0c1",{map:Jh(220,8,45)}));e.position.z=-.004,e.receiveShadow=!0,this.scene.add(e);const t=Sn("#e7ebed"),n=Sn("#7f8d9f");for(const i of[-11.8,11.8]){this.box([34,.18,5.2],[0,i,2.6],t),this.box([34,.2,.95],[0,i,.48],n);for(let s=-15;s<=15;s+=5)this.box([.2,.35,5.5],[s,i,2.75],Sn("#bcc4c9")),this.box([3.9,.23,1.55],[s+2.4,i,3.5],new Dn({color:"#e8f5fc"}))}for(const i of[-17,17])this.box([.15,23.7,5.2],[i,0,2.6],t);for(let i=-15;i<=15;i+=5){this.box([.22,23.5,.28],[i,0,5.45],Sn("#9aa8b4"));for(const s of[-7,0,7])this.box([3,.22,.025],[i+1.5,s,5.23],new Dn({color:"#fafaff"}))}for(let i=-15;i<16;i+=3){const s=new Fs(new tn().setFromPoints([new X(i,-11.7,.001),new X(i,11.7,.001)]),new bs({color:"#acb4b7"}));this.scene.add(s)}this.board(hc("AI COACHING","ROBORACER PRACTICE"),7,1.75,[0,11.48,3.95]);for(const i of[-10,-6,-2,2,6,10]){this.box([2,.65,.06],[i,-9.9,.75],Sn("#d9dede"));for(const c of[-.8,.8])this.box([.045,.48,.72],[i+c,-9.9,.36],this.materials.metal);const s=this.box([.34,.025,.24],[i,-9.95,.9],this.materials.black);s.rotation.x=-.2,this.box([.55,.4,.3],[i+.65,-9.8,.16],this.materials.navy)}for(const i of[-9,9])for(let s=-14;s<=14;s+=2)this.box([.035,.035,.65],[s,i,.33],this.materials.metal),s<14&&this.box([2,.035,.035],[s+1,i,.63],this.materials.metal);this.box([1.5,1,.16],[13.5,-8,.08],this.materials.navy),this.board(hc("ROBORACER","1/10 PLATFORM"),2,.5,[13.5,-8.7,.6])}track(){const e=[],t=[];for(let g=0;g<Mn.length;g++){const m=si(g),_=si(g+1),S=(I,D)=>I.p.clone().addScaledVector(I.normal,D*zr/2),w=S(m,1),y=S(m,-1),x=S(_,1),L=S(_,-1);for(const[I,D,O]of[[w,0,g],[y,1,g],[x,0,g+1],[y,1,g],[L,1,g+1],[x,0,g+1]])e.push(I.x,I.y,.006),t.push(D,O/7)}const n=new tn;n.setAttribute("position",new ln(e,3)),n.setAttribute("uv",new ln(t,2)),n.computeVertexNormals();const i=new Gt(n,Sn("#737982",{map:Jh(157,12,3),side:wn}));i.receiveShadow=!0,this.scene.add(i);const s=["#eef0f0","#011f5b"],c=new gr(1,1,1),l=new kt;for(let g=0;g<2;g++){const m=$d.filter(S=>Math.floor(S.index/8)%2===g),_=new Cd(c,Sn(s[g]),m.length);_.castShadow=!0,_.receiveShadow=!0,m.forEach((S,w)=>{l.position.set(S.x,S.y,S.z),l.rotation.set(0,0,S.yaw),l.scale.set(S.halfLength*2,.16,.26),l.updateMatrix(),_.setMatrixAt(w,l.matrix)}),this.scene.add(_)}for(const g of[-1,1]){const m=Mn.map((_,S)=>{const w=si(S);return w.p.clone().addScaledVector(w.normal,g*(zr/2-.045)).setZ(.012)});m.push(m[0]),this.scene.add(new Fs(new tn().setFromPoints(m),new bs({color:"#ffffff"})))}const d=si(0);for(let g=0;g<2;g++)for(let m=0;m<12;m++){const _=d.p.clone().addScaledVector(d.normal,(m-5.5)*zr/12).addScaledVector(d.tangent,g*.08+.55),S=this.box([.08,zr/12,.003],[_.x,_.y,.012],(g+m)%2?this.materials.white:this.materials.black);S.rotation.z=d.yaw}const h=new Wn;h.position.set(d.p.x+.6,d.p.y,0),h.rotation.z=d.yaw,this.scene.add(h);for(const g of[-1,1])this.box([.07,.07,1.3],[0,g*1.14,.65],this.materials.metal,h);this.box([.12,2.35,.22],[0,0,1.3],this.materials.navy,h);const p=new Gt(new Wi(2.2,.21),new Dn({map:hc("AI COACHING"),side:wn}));p.position.set(-.065,0,1.3),p.quaternion.setFromRotationMatrix(new nt().makeBasis(new X(0,-1,0),cr,new X(-1,0,0))),h.add(p),this.line=new Pd(new tn().setFromPoints(Mn.map(g=>g.clone().setZ(.017))),new bs({color:"#d6b356"})),this.line.visible=!1,this.scene.add(this.line)}vehicle(){this.body=new Wn,this.scene.add(this.body),this.vehicleModelReady=!1,this.wheels=[];for(const i of["fl","fr","rl","rr"]){const s=new Wn;s.name=`wheel-visual-${i}`;const c=this.sim.model.body(`wheel_${i}`);this.wheels.push({name:i,group:s,id:c.id}),c.delete(),this.scene.add(s)}this.body.traverse(i=>i.castShadow=!1);for(const i of this.wheels)i.group.traverse(s=>s.castShadow=!1);const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,18,64,64,64);n.addColorStop(0,"#00000060"),n.addColorStop(1,"#00000000"),t.fillStyle=n,t.fillRect(0,0,128,128),this.contactShadow=new Gt(new Wi(.78,.48),new Dn({map:new Rl(e),transparent:!0,depthWrite:!1})),this.scene.add(this.contactShadow)}async loadAssets(){const e="/car/";try{const{scene:t}=await new $b().loadAsync(`${e}vehicle/autodrive/f1tenth.glb`),n=t.getObjectByName("chassis"),i=this.wheels.map(c=>({target:c.group,source:t.getObjectByName(c.name)}));if(!n||i.some(c=>!c.source))throw new Error("Vehicle asset is missing chassis or wheel groups");this.body.add(n);for(const c of i)c.target.add(c.source);const s=new Wn;s.position.set(...Br),this.body.add(s),this.box([.028,.09,.025],[0,0,0],this.materials.black,s);for(const c of[-.03,.03]){const l=new Gt(new Cl(.009,.009,.003,16),Sn("#263f53",{metalness:.3,roughness:.4}));l.rotation.z=Math.PI/2,l.position.set(.015,c,0),s.add(l)}this.vehicleModelReady=!0}catch(t){this.assetErrors.push(`AutoDRIVE vehicle: ${t.message}`)}try{const t=await new il().loadAsync(`${e}venue/penn-logo.png`);t.colorSpace=Vt;const n=3,i=n*t.image.height/t.image.width;for(const[s,c,l]of[["north",-13,11.598],["south",-8,-11.598]]){this.box([n+.3,.08,i+.25],[c,Math.sign(l)*11.65,1.55],this.materials.white);const d=this.board(t,n,i,[c,l,1.55]);d.name=`penn-logo-${s}`,d.userData={brand:"Penn",width:n,height:i}}}catch(t){this.assetErrors.push(`Penn: ${t.message}`)}try{const t=await new Wb().loadAsync(`${e}vehicle/roboracer_max.stl`);t.computeBoundingBox();const n=t.boundingBox.getCenter(new X);t.translate(-n.x,-n.y,-t.boundingBox.min.z);const i=new Gt(t,this.materials.metal);i.scale.setScalar(.5),i.position.set(13.5,-8,.17),i.castShadow=!0,this.scene.add(i),this.labMesh=i}catch(t){this.assetErrors.push(`Vehicle mesh: ${t.message}`)}for(const[t,n,i]of[["xlab",-8,4],["alliance",-2,4],["johns-hopkins",5,5],["jirl",12,3]])try{const s=await new il().loadAsync(`${e}venue/brands/${t}.png`);s.colorSpace=Vt;const c=Math.min(1.5,i*s.image.height/s.image.width);this.box([i+.4,.08,c+.35],[n,11.65,1.7],this.materials.white),this.board(s,i,c,[n,11.598,1.7])}catch(s){this.assetErrors.push(`${t}: ${s.message}`)}}setMode(e){this.mode=e,this.snapCamera=!0}resize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}render(e=.016){const t=this.sim.position,n=this.sim.quaternion,i=new fi(n[1],n[2],n[3],n[0]);this.body.position.set(...t),this.body.quaternion.copy(i);for(const{group:d,id:h}of this.wheels){d.position.fromArray(this.sim.data.xpos,h*3);const p=this.sim.data.xquat;d.quaternion.set(p[h*4+1],p[h*4+2],p[h*4+3],p[h*4])}const s=new X(...t),c=new X,l=new X;this.contactShadow.position.set(t[0],t[1],.018),this.contactShadow.rotation.z=this.sim.yaw,this.mode==="onboard"?(l.set(...Br).applyQuaternion(i).add(s),c.set(Br[0]+6,Br[1],Br[2]).applyQuaternion(i).add(s),this.camera.up.copy(cr.clone().applyQuaternion(i)),this.body.visible=!1):this.mode==="circuit"?(l.set(-17,-20,21),c.set(0,0,0),this.camera.up.copy(cr),this.body.visible=!0):(l.set(-1.65,0,.95).applyAxisAngle(cr,this.sim.yaw).add(s),c.set(1.05,0,.16).applyAxisAngle(cr,this.sim.yaw).add(s),this.camera.up.copy(cr),this.body.visible=!0),this.camera.position.lerp(l,this.snapCamera||this.mode==="onboard"?1:1-Math.exp(-10*e)),this.camera.lookAt(c),this.snapCamera=!1,this.renderer.render(this.scene,this.camera),this.frames++}}function AT(r,e,t={steer:0,throttle:0,brake:0}){const n=(...d)=>d.some(h=>r.has(h));let i=0,s=0,c=0,l="none";if(e?.connected&&e.mapping==="standard"){const d=Number.isFinite(e.axes[0])?e.axes[0]:0;i=Math.abs(d)>.1?-(Math.abs(d)-.1)/.9*Math.sign(d):0,s=Vn(e.buttons[7]?.value||0,0,1),c=Vn(e.buttons[6]?.value||0,0,1),(i||s||c)&&(l="gamepad")}return n("KeyA","ArrowLeft","KeyD","ArrowRight")&&(i=Number(n("KeyA","ArrowLeft"))-Number(n("KeyD","ArrowRight")),l="keyboard"),n("KeyW","ArrowUp")&&(s=1,l="keyboard"),n("KeyS","ArrowDown")&&(c=1,s=0,l="keyboard"),t.steer&&(i=-t.steer,l="touch"),(t.throttle||t.brake)&&(s=t.throttle,c=t.brake,l="touch"),{steer:Vn(i),throttle:Vn(s,0,1),brake:Vn(c,0,1),source:l}}const Kd={Gamepad2:_0,Pause:S0,Play:M0,RotateCcw:E0,SlidersHorizontal:b0,Download:g0,Maximize:v0,X:T0,MoveHorizontal:x0,ChevronsUp:m0,OctagonPause:y0},qe=r=>document.querySelector(r),vr=r=>Array.from(document.querySelectorAll(r));ll({icons:Kd});let on,jt,Qr=!0,Ha=0,Ya=performance.now(),Qh,Zd=!1;const Us=new Set,$i={steer:0,throttle:0,brake:0};let Wr={steer:0,throttle:0,brake:0,source:"none"};const Jd=vr("dialog");let cl=null;function Qd(){let r=[];try{r=Array.from(navigator.getGamepads?.()||[])}catch{}const e=r.find(t=>t?.connected);return Wr=AT(Us,e,$i),e}function ed(){if(!qe("#controls-dialog").open)return;const r=Qd(),e=r?r.mapping==="standard"?r.id:"Unmapped controller - use keyboard":"Scanning for controller...";qe("#device").textContent!==e&&(qe("#device").textContent=e),qe("#pad-hint").hidden=!!r,qe("#steer-meter").value=Wr.steer,qe("#throttle-meter").value=Wr.throttle,qe("#brake-meter").value=Wr.brake,vr("[data-key]").forEach(t=>t.classList.toggle("active",Us.has(t.dataset.key)))}function Os(){clearInterval(cl),cl=null}function Nl(){Os(),!(!qe("#controls-dialog").open||document.hidden)&&(ed(),cl=setInterval(ed,100))}for(const r of["focus","pageshow","gamepadconnected","gamepaddisconnected"])window.addEventListener(r,Nl);document.addEventListener("visibilitychange",()=>document.hidden?Os():Nl());window.addEventListener("pagehide",Os);qe("#controls-dialog").addEventListener("close",()=>{qe("#controls-dialog").open||Os()});function Li(r){qe("#toast").textContent=r,qe("#toast").classList.add("show"),clearTimeout(Qh),Qh=setTimeout(()=>qe("#toast").classList.remove("show"),2400)}function xr(){Us.clear(),$i.steer=$i.throttle=$i.brake=0,qe("#touch-steer").value=0}function di(r){Qr=r,Ha=0,Ya=performance.now(),qe("#paused").hidden=!r,qe("#pause").innerHTML=`<i data-lucide="${r?"play":"pause"}"></i>`,ll({icons:Kd}),qe("#pause").title=`${r?"Resume":"Pause"} (Space)`,qe("#pause").setAttribute("aria-label",r?"Resume":"Pause")}function Ul(r){on&&(on.setMode(r),xr(),vr("[data-mode]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.mode===r))),qe("#mode-label").textContent=r==="demo"?"Demo lap":"Manual driving",di(!1),Li(r==="demo"?"Demo lap - reference driver":"Manual driving"))}function Ol(r){jt?.setMode(r),vr("[data-view]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.view===r))),Li(`${r[0].toUpperCase()+r.slice(1)} view - C`)}function ef(r){Zd=!Qr,di(!0),xr(),r.showModal(),r.id==="controls-dialog"&&Nl()}function As(r,e=Zd){r.id==="controls-dialog"&&Os(),r.close(),xr(),e&&di(!1)}qe("#controls").onclick=()=>ef(qe("#controls-dialog"));qe("#settings").onclick=()=>ef(qe("#settings-dialog"));for(const r of Jd)r.querySelector("[data-close]").onclick=()=>As(r),r.addEventListener("cancel",e=>{e.preventDefault(),As(r)}),r.addEventListener("click",e=>{if(e.target===r){const t=r.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&As(r)}});qe("#start").onclick=()=>{As(qe("#controls-dialog"),!1),Ul("manual")};qe("#pause").onclick=()=>{di(!Qr),Li(`${Qr?"Paused":"Resumed"} - Space`)};qe("#recover").onclick=()=>{on?.recover(),xr(),jt&&(jt.snapCamera=!0),Li("Returned to track - R")};vr("[data-mode]").forEach(r=>r.onclick=()=>Ul(r.dataset.mode));vr("[data-view]").forEach(r=>r.onclick=()=>Ol(r.dataset.view));qe("#speed-limit").oninput=r=>{const e=+r.target.value;on&&(on.speedLimit=e,on.events.push({type:"speed-limit",t:on.elapsed,value:e})),qe("#limit-label").value=`${e.toFixed(1)} m/s`};qe("#reference-line").onchange=r=>jt&&(jt.line.visible=r.target.checked);qe("#reset-session").onclick=()=>{on?.reset(),jt&&(jt.snapCamera=!0),As(qe("#settings-dialog"),!1),di(!0),Li("New session")};qe("#export").onclick=()=>{if(!on)return;const r=new Blob([JSON.stringify({...on.export(),camera:jt.mode},null,2)],{type:"application/json"}),e=URL.createObjectURL(r),t=document.createElement("a");t.href=e,t.download=`driving-session-${new Date().toISOString().replaceAll(":","-")}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Li("Session downloaded")};qe("#fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Li("Fullscreen is unavailable in this browser")}};window.addEventListener("keydown",r=>{if(!(r.target instanceof HTMLInputElement||!["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyR","KeyC","KeyH"].includes(r.code))&&(r.preventDefault(),Us.add(r.code),!r.repeat&&!Jd.some(t=>t.open)&&(r.code==="Space"&&qe("#pause").click(),r.code==="KeyR"&&qe("#recover").click(),r.code==="KeyH"&&qe("#controls").click(),r.code==="KeyC"))){const t=["chase","onboard","circuit"];Ol(t[(t.indexOf(jt?.mode)+1)%3])}});window.addEventListener("keyup",r=>Us.delete(r.code));window.addEventListener("blur",()=>{xr(),on&&di(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(xr(),di(!0))});window.addEventListener("gamepaddisconnected",()=>{xr(),di(!0),Li("Gamepad disconnected - paused")});qe("#touch-steer").oninput=r=>$i.steer=+r.target.value;for(const r of["pointerup","pointercancel","lostpointercapture"])qe("#touch-steer").addEventListener(r,()=>{$i.steer=0,qe("#touch-steer").value=0});for(const r of vr("[data-pedal]")){r.onpointerdown=e=>{r.setPointerCapture(e.pointerId),$i[r.dataset.pedal]=1,e.preventDefault()};for(const e of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(e,()=>$i[r.dataset.pedal]=0)}function td(r){return r===null?"--":`${Math.floor(r/60)}:${(r%60).toFixed(1).padStart(4,"0")}`}function tf(){jt?.resize(innerWidth,innerHeight)}window.addEventListener("resize",tf);function nf(r){const e=Math.min((r-Ya)/1e3,.1);if(Ya=r,Qd(),!Qr)for(Ha+=e;Ha>=.02;)on.step(Wr),Ha-=.02;jt.render(e);const t=on.snapshot();qe("#speed").textContent=(Math.abs(t.speed)*3.6).toFixed(1),qe("#laps").textContent=t.laps,qe("#timer").textContent=td(t.elapsed-on.lapStart),qe("#best").textContent=td(t.bestLap),qe("#hits").textContent=t.hits,requestAnimationFrame(nf)}try{const r=await o0({locateFile:e=>e.endsWith(".wasm")?c0:e});if(on=new Gb(r),jt=new wT(qe("#world"),on),tf(),di(!0),await jt.assetPromise,qe("#loading").hidden=!0,!jt.vehicleModelReady)throw new Error("AutoDRIVE vehicle asset could not load. Please reload.");jt.assetErrors.length&&Li("Some venue artwork could not load"),window.car={sim:on,view:jt,setPaused:di,setMode:Ul,camera:Ol,snapshot:()=>({...on.snapshot(),paused:Qr,view:jt.mode,ready:!0,frames:jt.frames,assetsReady:jt.assetsReady,assetErrors:jt.assetErrors,input:Wr})},Ya=performance.now(),requestAnimationFrame(nf)}catch(r){qe("#loading").hidden=!1,qe("#loading").textContent=`Could not start the driving simulator. ${r.message}`,console.error(r)}const RT=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
