(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Eg="modulepreload",Mg=function(i){return"/demo/"+i},gc={},bg=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let p=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");s=p(t.map(h=>{if(h=Mg(h),h in gc)return;gc[h]=!0;const m=h.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${_}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":Eg,m||(g.as="script"),g.crossOrigin="",g.href=h,d&&g.setAttribute("nonce",d),document.head.appendChild(g),m)return new Promise((v,b)=>{g.addEventListener("load",v),g.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return s.then(c=>{for(const d of c||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};var Tg=(async function(i={}){var e,t=i,n=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!o&&!s;if(o){const{createRequire:r}=await bg(async()=>{const{createRequire:a}=await Promise.resolve().then(()=>HE);return{createRequire:a}},void 0);var d=r(import.meta.url)}var p="./this.program",h=(r,a)=>{throw a},m=import.meta.url,_="";function g(r){return t.locateFile?t.locateFile(r,_):_+r}var v,b;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var P=process.versions.node,E=P.split(".").slice(0,3);if(E=E[0]*1e4+E[1]*100+E[2].split("-")[0]*1,E<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+P+")");var S=d("fs");m.startsWith("file:")&&(_=d("path").dirname(d("url").fileURLToPath(m))+"/"),b=a=>{a=W(a)?new URL(a):a;var l=S.readFileSync(a);return C(Buffer.isBuffer(l)),l},v=async(a,l=!0)=>{a=W(a)?new URL(a):a;var u=S.readFileSync(a,l?void 0:"utf8");return C(l?Buffer.isBuffer(u):typeof u=="string"),u},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),h=(a,l)=>{throw process.exitCode=a,l}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||s){try{_=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");s&&(b=r=>{var a=new XMLHttpRequest;return a.open("GET",r,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),v=async r=>{if(W(r))return new Promise((l,u)=>{var f=new XMLHttpRequest;f.open("GET",r,!0),f.responseType="arraybuffer",f.onload=()=>{if(f.status==200||f.status==0&&f.response){l(f.response);return}u(f.status)},f.onerror=u,f.send(null)});var a=await fetch(r,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var D=console.log.bind(console),F=console.error.bind(console);C(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var L;typeof WebAssembly!="object"&&F("no native wasm support detected");var O=!1;function C(r,a){r||G("Assertion failed"+(a?": "+a:""))}var W=r=>r.startsWith("file://");function A(){var r=Cs();C((r&3)==0),r==0&&(r+=4),ye[r>>2]=34821223,ye[r+4>>2]=2310721022,ye[0]=1668509029}function I(){if(!O){var r=Cs();r==0&&(r+=4);var a=ye[r>>2],l=ye[r+4>>2];(a!=34821223||l!=2310721022)&&G(`Stack overflow! Stack cookie has been overwritten at ${Pe(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Pe(l)} ${Pe(a)}`),ye[0]!=1668509029&&G("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class k extends Error{}class z extends k{}class ne extends k{constructor(a){super(a),this.excPtr=a;const l=tc(a);this.name=l[0],this.message=l[1]}}(()=>{var r=new Int16Array(1),a=new Int8Array(r.buffer);if(r[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function te(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){G(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Q(r){return()=>C(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function re(r){Object.getOwnPropertyDescriptor(t,r)&&G(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function Z(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function J(r,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){a()}})}function Se(r,a){J(r,()=>{Fe(`\`${r}\` is not longer defined by emscripten. ${a}`)})}Se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Se("asm","Please use wasmExports instead");function pe(r){J(r,()=>{var a=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=r;l.startsWith("_")||(l="$"+r),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,Z(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Fe(a)}),Ce(r)}function Ce(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var a=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Z(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),G(a)}})}var Ie,Ae,$e,Ze,Je,oe,ve,ie,ye,We,Xe,yt,ot,ft=!1;function Tt(){var r=$e.buffer;Ze=new Int8Array(r),oe=new Int16Array(r),Je=new Uint8Array(r),ve=new Uint16Array(r),ie=new Int32Array(r),ye=new Uint32Array(r),We=new Float32Array(r),Xe=new Float64Array(r),yt=new BigInt64Array(r),ot=new BigUint64Array(r)}C(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function nt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Te(t.preRun.shift());te("preRun"),Be(H)}function Ut(){C(!ft),ft=!0,I(),!t.noFSInit&&!y.initialized&&y.init(),Bi.__wasm_call_ctors(),y.ignorePermissions=!1}function V(){if(I(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)it(t.postRun.shift());te("postRun"),Be(De)}var Pt=0,ut=null,_t={},Ue=null;function U(r){Pt++,t.monitorRunDependencies?.(Pt),r?(C(!_t[r]),_t[r]=1,Ue===null&&typeof setInterval<"u"&&(Ue=setInterval(()=>{if(O){clearInterval(Ue),Ue=null;return}var a=!1;for(var l in _t)a||(a=!0,F("still waiting on run dependencies:")),F(`dependency: ${l}`);a&&F("(end of list)")},1e4))):F("warning: run dependency added without ID")}function M(r){if(Pt--,t.monitorRunDependencies?.(Pt),r?(C(_t[r]),delete _t[r]):F("warning: run dependency removed without ID"),Pt==0&&(Ue!==null&&(clearInterval(Ue),Ue=null),ut)){var a=ut;ut=null,a()}}function G(r){t.onAbort?.(r),r="Aborted("+r+")",F(r),O=!0;var a=new WebAssembly.RuntimeError(r);throw Ae?.(a),a}function se(r,a){return(...l)=>{C(ft,`native function \`${r}\` called before runtime initialization`);var u=Bi[r];return C(u,`exported native function \`${r}\` not found`),C(l.length<=a,`native function \`${r}\` called with ${l.length} args but expects ${a}`),u(...l)}}var he;function le(){return t.locateFile?g("mujoco.wasm"):new URL("/demo/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Ne(r){if(r==he&&L)return new Uint8Array(L);if(b)return b(r);throw"both async and sync fetching of the wasm failed"}async function be(r){if(!L)try{var a=await v(r);return new Uint8Array(a)}catch{}return Ne(r)}async function He(r,a){try{var l=await be(r),u=await WebAssembly.instantiate(l,a);return u}catch(f){F(`failed to asynchronously prepare wasm: ${f}`),W(he)&&F(`warning: Loading from a file URI (${he}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),G(f)}}async function je(r,a,l){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!W(a)&&!o)try{var u=fetch(a,{credentials:"same-origin"}),f=await WebAssembly.instantiateStreaming(u,l);return f}catch(x){F(`wasm streaming compile failed: ${x}`),F("falling back to ArrayBuffer instantiation")}return He(a,l)}function xe(){return{env:hc,wasi_snapshot_preview1:hc}}async function Me(){function r(T,w){return Bi=T.exports,$e=Bi.memory,C($e,"memory not found in wasm exports"),Tt(),Sa=Bi.__indirect_function_table,C(Sa,"table not found in wasm exports"),bh(Bi),M("wasm-instantiate"),Bi}U("wasm-instantiate");var a=t;function l(T){return C(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,r(T.instance)}var u=xe();if(t.instantiateWasm)return new Promise((T,w)=>{try{t.instantiateWasm(u,(N,q)=>{T(r(N,q))})}catch(N){F(`Module.instantiateWasm callback failed with error: ${N}`),w(N)}});he??=le();var f=await je(L,he,u),x=l(f);return x}class Oe{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`,this.status=a}}var Be=r=>{for(;r.length>0;)r.shift()(t)},De=[],it=r=>De.push(r),H=[],Te=r=>H.push(r),Ee=!0,Pe=r=>(C(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),$=r=>oc(r),B=()=>cc(),Fe=r=>{Fe.shown||={},Fe.shown[r]||(Fe.shown[r]=1,o&&(r="warning: "+r),F(r))},Ye=typeof TextDecoder<"u"?new TextDecoder:void 0,vt=(r,a=0,l=NaN)=>{for(var u=a+l,f=a;r[f]&&!(f>=u);)++f;if(f-a>16&&r.buffer&&Ye)return Ye.decode(r.subarray(a,f));for(var x="";a<f;){var T=r[a++];if(!(T&128)){x+=String.fromCharCode(T);continue}var w=r[a++]&63;if((T&224)==192){x+=String.fromCharCode((T&31)<<6|w);continue}var N=r[a++]&63;if((T&240)==224?T=(T&15)<<12|w<<6|N:((T&248)!=240&&Fe("Invalid UTF-8 leading byte "+Pe(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|w<<12|N<<6|r[a++]&63),T<65536)x+=String.fromCharCode(T);else{var q=T-65536;x+=String.fromCharCode(55296|q>>10,56320|q&1023)}}return x},lt=(r,a)=>(C(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?vt(Je,r,a):""),Tn=(r,a,l,u)=>G(`Assertion failed: ${lt(r)}, at: `+[a?lt(a):"unknown filename",l,u?lt(u):"unknown function"]),Gt=[],Fi=0,Rr=r=>{var a=new xn(r);return a.get_caught()||(a.set_caught(!0),Fi--),a.set_rethrown(!1),Gt.push(a),Aa(r),fc(r)},ps=()=>{if(!Gt.length)return 0;var r=Gt[Gt.length-1];return Aa(r.excPtr),r.excPtr},vn=0,sa=()=>{ge(0,0),C(Gt.length>0);var r=Gt.pop();Ps(r.excPtr),vn=0};class xn{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){ye[this.ptr+4>>2]=a}get_type(){return ye[this.ptr+4>>2]}set_destructor(a){ye[this.ptr+8>>2]=a}get_destructor(){return ye[this.ptr+8>>2]}set_caught(a){a=a?1:0,Ze[this.ptr+12]=a}get_caught(){return Ze[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,Ze[this.ptr+13]=a}get_rethrown(){return Ze[this.ptr+13]!=0}init(a,l){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(l)}set_adjusted_ptr(a){ye[this.ptr+16>>2]=a}get_adjusted_ptr(){return ye[this.ptr+16>>2]}}var _i=r=>ac(r),Ji=r=>{var a=vn?.excPtr;if(!a)return _i(0),0;var l=new xn(a);l.set_adjusted_ptr(a);var u=l.get_type();if(!u)return _i(0),a;for(var f of r){if(f===0||f===u)break;var x=l.ptr+16;if(dc(f,u,x))return _i(f),a}return _i(u),a},oa=()=>Ji([]),Qi=r=>Ji([r]),la=(r,a)=>Ji([r,a]),Li=()=>{var r=Gt.pop();r||G("no exception to throw");var a=r.excPtr;throw r.get_rethrown()||(Gt.push(r),r.set_rethrown(!0),r.set_caught(!1),Fi++),vn=new ne(a),vn},ca=r=>{if(r){var a=new xn(r);Gt.push(a),a.set_rethrown(!0),Li()}},ua=(r,a,l)=>{var u=new xn(r);throw u.init(a,l),vn=new ne(r),Fi++,vn},ms=()=>Fi,gs=r=>{throw vn||(vn=new ne(r)),vn},wt={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(r).slice(1)},normalizeArray:(r,a)=>{for(var l=0,u=r.length-1;u>=0;u--){var f=r[u];f==="."?r.splice(u,1):f===".."?(r.splice(u,1),l++):l&&(r.splice(u,1),l--)}if(a)for(;l;l--)r.unshift("..");return r},normalize:r=>{var a=wt.isAbs(r),l=r.slice(-1)==="/";return r=wt.normalizeArray(r.split("/").filter(u=>!!u),!a).join("/"),!r&&!a&&(r="."),r&&l&&(r+="/"),(a?"/":"")+r},dirname:r=>{var a=wt.splitPath(r),l=a[0],u=a[1];return!l&&!u?".":(u&&(u=u.slice(0,-1)),l+u)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>wt.normalize(r.join("/")),join2:(r,a)=>wt.normalize(r+"/"+a)},_s=()=>{if(o){var r=d("crypto");return a=>r.randomFillSync(a)}return a=>crypto.getRandomValues(a)},da=r=>{(da=_s())(r)},vi={resolve:(...r)=>{for(var a="",l=!1,u=r.length-1;u>=-1&&!l;u--){var f=u>=0?r[u]:y.cwd();if(typeof f!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!f)return"";a=f+"/"+a,l=wt.isAbs(f)}return a=wt.normalizeArray(a.split("/").filter(x=>!!x),!l).join("/"),(l?"/":"")+a||"."},relative:(r,a)=>{r=vi.resolve(r).slice(1),a=vi.resolve(a).slice(1);function l(q){for(var Y=0;Y<q.length&&q[Y]==="";Y++);for(var ce=q.length-1;ce>=0&&q[ce]==="";ce--);return Y>ce?[]:q.slice(Y,ce-Y+1)}for(var u=l(r.split("/")),f=l(a.split("/")),x=Math.min(u.length,f.length),T=x,w=0;w<x;w++)if(u[w]!==f[w]){T=w;break}for(var N=[],w=T;w<u.length;w++)N.push("..");return N=N.concat(f.slice(T)),N.join("/")}},R=[],X=r=>{for(var a=0,l=0;l<r.length;++l){var u=r.charCodeAt(l);u<=127?a++:u<=2047?a+=2:u>=55296&&u<=57343?(a+=4,++l):a+=3}return a},ae=(r,a,l,u)=>{if(C(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(u>0))return 0;for(var f=l,x=l+u-1,T=0;T<r.length;++T){var w=r.codePointAt(T);if(w<=127){if(l>=x)break;a[l++]=w}else if(w<=2047){if(l+1>=x)break;a[l++]=192|w>>6,a[l++]=128|w&63}else if(w<=65535){if(l+2>=x)break;a[l++]=224|w>>12,a[l++]=128|w>>6&63,a[l++]=128|w&63}else{if(l+3>=x)break;w>1114111&&Fe("Invalid Unicode code point "+Pe(w)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[l++]=240|w>>18,a[l++]=128|w>>12&63,a[l++]=128|w>>6&63,a[l++]=128|w&63,T++}}return a[l]=0,l-f},K=(r,a,l)=>{var u=X(r)+1,f=new Array(u),x=ae(r,f,0,f.length);return f.length=x,f},j=()=>{if(!R.length){var r=null;if(o){var a=256,l=Buffer.alloc(a),u=0,f=process.stdin.fd;try{u=S.readSync(f,l,0,a)}catch(x){if(x.toString().includes("EOF"))u=0;else throw x}u>0&&(r=l.slice(0,u).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;R=K(r)}return R.shift()},we={ttys:[],init(){},shutdown(){},register(r,a){we.ttys[r]={input:[],output:[],ops:a},y.registerDevice(r,we.stream_ops)},stream_ops:{open(r){var a=we.ttys[r.node.rdev];if(!a)throw new y.ErrnoError(43);r.tty=a,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,a,l,u,f){if(!r.tty||!r.tty.ops.get_char)throw new y.ErrnoError(60);for(var x=0,T=0;T<u;T++){var w;try{w=r.tty.ops.get_char(r.tty)}catch{throw new y.ErrnoError(29)}if(w===void 0&&x===0)throw new y.ErrnoError(6);if(w==null)break;x++,a[l+T]=w}return x&&(r.node.atime=Date.now()),x},write(r,a,l,u,f){if(!r.tty||!r.tty.ops.put_char)throw new y.ErrnoError(60);try{for(var x=0;x<u;x++)r.tty.ops.put_char(r.tty,a[l+x])}catch{throw new y.ErrnoError(29)}return u&&(r.node.mtime=r.node.ctime=Date.now()),x}},default_tty_ops:{get_char(r){return j()},put_char(r,a){a===null||a===10?(D(vt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(D(vt(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,a,l){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,a){a===null||a===10?(F(vt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(F(vt(r.output)),r.output=[])}}},Le=r=>{G("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},fe={ops_table:null,mount(r){return fe.createNode(null,"/",16895,0)},createNode(r,a,l,u){if(y.isBlkdev(l)||y.isFIFO(l))throw new y.ErrnoError(63);fe.ops_table||={dir:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr,lookup:fe.node_ops.lookup,mknod:fe.node_ops.mknod,rename:fe.node_ops.rename,unlink:fe.node_ops.unlink,rmdir:fe.node_ops.rmdir,readdir:fe.node_ops.readdir,symlink:fe.node_ops.symlink},stream:{llseek:fe.stream_ops.llseek}},file:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr},stream:{llseek:fe.stream_ops.llseek,read:fe.stream_ops.read,write:fe.stream_ops.write,mmap:fe.stream_ops.mmap,msync:fe.stream_ops.msync}},link:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr,readlink:fe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr},stream:y.chrdev_stream_ops}};var f=y.createNode(r,a,l,u);return y.isDir(f.mode)?(f.node_ops=fe.ops_table.dir.node,f.stream_ops=fe.ops_table.dir.stream,f.contents={}):y.isFile(f.mode)?(f.node_ops=fe.ops_table.file.node,f.stream_ops=fe.ops_table.file.stream,f.usedBytes=0,f.contents=null):y.isLink(f.mode)?(f.node_ops=fe.ops_table.link.node,f.stream_ops=fe.ops_table.link.stream):y.isChrdev(f.mode)&&(f.node_ops=fe.ops_table.chrdev.node,f.stream_ops=fe.ops_table.chrdev.stream),f.atime=f.mtime=f.ctime=Date.now(),r&&(r.contents[a]=f,r.atime=r.mtime=r.ctime=f.atime),f},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,a){var l=r.contents?r.contents.length:0;if(!(l>=a)){var u=1024*1024;a=Math.max(a,l*(l<u?2:1.125)>>>0),l!=0&&(a=Math.max(a,256));var f=r.contents;r.contents=new Uint8Array(a),r.usedBytes>0&&r.contents.set(f.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,a){if(r.usedBytes!=a)if(a==0)r.contents=null,r.usedBytes=0;else{var l=r.contents;r.contents=new Uint8Array(a),l&&r.contents.set(l.subarray(0,Math.min(a,r.usedBytes))),r.usedBytes=a}},node_ops:{getattr(r){var a={};return a.dev=y.isChrdev(r.mode)?r.id:1,a.ino=r.id,a.mode=r.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=r.rdev,y.isDir(r.mode)?a.size=4096:y.isFile(r.mode)?a.size=r.usedBytes:y.isLink(r.mode)?a.size=r.link.length:a.size=0,a.atime=new Date(r.atime),a.mtime=new Date(r.mtime),a.ctime=new Date(r.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(r,a){for(const l of["mode","atime","mtime","ctime"])a[l]!=null&&(r[l]=a[l]);a.size!==void 0&&fe.resizeFileStorage(r,a.size)},lookup(r,a){throw new y.ErrnoError(44)},mknod(r,a,l,u){return fe.createNode(r,a,l,u)},rename(r,a,l){var u;try{u=y.lookupNode(a,l)}catch{}if(u){if(y.isDir(r.mode))for(var f in u.contents)throw new y.ErrnoError(55);y.hashRemoveNode(u)}delete r.parent.contents[r.name],a.contents[l]=r,r.name=l,a.ctime=a.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,a){delete r.contents[a],r.ctime=r.mtime=Date.now()},rmdir(r,a){var l=y.lookupNode(r,a);for(var u in l.contents)throw new y.ErrnoError(55);delete r.contents[a],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,a,l){var u=fe.createNode(r,a,41471,0);return u.link=l,u},readlink(r){if(!y.isLink(r.mode))throw new y.ErrnoError(28);return r.link}},stream_ops:{read(r,a,l,u,f){var x=r.node.contents;if(f>=r.node.usedBytes)return 0;var T=Math.min(r.node.usedBytes-f,u);if(C(T>=0),T>8&&x.subarray)a.set(x.subarray(f,f+T),l);else for(var w=0;w<T;w++)a[l+w]=x[f+w];return T},write(r,a,l,u,f,x){if(C(!(a instanceof ArrayBuffer)),a.buffer===Ze.buffer&&(x=!1),!u)return 0;var T=r.node;if(T.mtime=T.ctime=Date.now(),a.subarray&&(!T.contents||T.contents.subarray)){if(x)return C(f===0,"canOwn must imply no weird position inside the file"),T.contents=a.subarray(l,l+u),T.usedBytes=u,u;if(T.usedBytes===0&&f===0)return T.contents=a.slice(l,l+u),T.usedBytes=u,u;if(f+u<=T.usedBytes)return T.contents.set(a.subarray(l,l+u),f),u}if(fe.expandFileStorage(T,f+u),T.contents.subarray&&a.subarray)T.contents.set(a.subarray(l,l+u),f);else for(var w=0;w<u;w++)T.contents[f+w]=a[l+w];return T.usedBytes=Math.max(T.usedBytes,f+u),u},llseek(r,a,l){var u=a;if(l===1?u+=r.position:l===2&&y.isFile(r.node.mode)&&(u+=r.node.usedBytes),u<0)throw new y.ErrnoError(28);return u},mmap(r,a,l,u,f){if(!y.isFile(r.node.mode))throw new y.ErrnoError(43);var x,T,w=r.node.contents;if(!(f&2)&&w&&w.buffer===Ze.buffer)T=!1,x=w.byteOffset;else{if(T=!0,x=Le(),!x)throw new y.ErrnoError(48);w&&((l>0||l+a<w.length)&&(w.subarray?w=w.subarray(l,l+a):w=Array.prototype.slice.call(w,l,l+a)),Ze.set(w,x))}return{ptr:x,allocated:T}},msync(r,a,l,u,f){return fe.stream_ops.write(r,a,0,u,l,!1),0}}},ze=async r=>{var a=await v(r);return C(a,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(a)},Ve=(...r)=>y.createDataFile(...r),Qe=r=>{for(var a=r;;){if(!_t[r])return r;r=a+Math.random()}},tt=[],Ge=(r,a,l,u)=>{typeof Browser<"u"&&Browser.init();var f=!1;return tt.forEach(x=>{f||x.canHandle(a)&&(x.handle(r,a,l,u),f=!0)}),f},Mt=(r,a,l,u,f,x,T,w,N,q)=>{var Y=a?vi.resolve(wt.join2(r,a)):r,ce=Qe(`cp ${Y}`);function de(ue){function me(qe){q?.(),w||Ve(r,a,qe,u,f,N),x?.(),M(ce)}Ge(ue,Y,me,()=>{T?.(),M(ce)})||me(ue)}U(ce),typeof l=="string"?ze(l).then(de,T):de(l)},Nt=r=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=a[r];if(typeof l>"u")throw new Error(`Unknown file open mode: ${r}`);return l},Ft=(r,a)=>{var l=0;return r&&(l|=365),a&&(l|=146),l},At=r=>lt(rc(r)),Ht={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},y={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(r){super(ft?At(r):""),this.errno=r;for(var a in Ht)if(Ht[a]===r){this.code=a;break}}},FSStream:class{shared={};get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(r,a,l,u){r||(r=this),this.parent=r,this.mount=r.mount,this.id=y.nextInode++,this.name=a,this.mode=l,this.rdev=u,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return y.isDir(this.mode)}get isDevice(){return y.isChrdev(this.mode)}},lookupPath(r,a={}){if(!r)throw new y.ErrnoError(44);a.follow_mount??=!0,wt.isAbs(r)||(r=y.cwd()+"/"+r);e:for(var l=0;l<40;l++){for(var u=r.split("/").filter(q=>!!q),f=y.root,x="/",T=0;T<u.length;T++){var w=T===u.length-1;if(w&&a.parent)break;if(u[T]!=="."){if(u[T]===".."){if(x=wt.dirname(x),y.isRoot(f)){r=x+"/"+u.slice(T+1).join("/");continue e}else f=f.parent;continue}x=wt.join2(x,u[T]);try{f=y.lookupNode(f,u[T])}catch(q){if(q?.errno===44&&w&&a.noent_okay)return{path:x};throw q}if(y.isMountpoint(f)&&(!w||a.follow_mount)&&(f=f.mounted.root),y.isLink(f.mode)&&(!w||a.follow)){if(!f.node_ops.readlink)throw new y.ErrnoError(52);var N=f.node_ops.readlink(f);wt.isAbs(N)||(N=wt.dirname(x)+"/"+N),r=N+"/"+u.slice(T+1).join("/");continue e}}}return{path:x,node:f}}throw new y.ErrnoError(32)},getPath(r){for(var a;;){if(y.isRoot(r)){var l=r.mount.mountpoint;return a?l[l.length-1]!=="/"?`${l}/${a}`:l+a:l}a=a?`${r.name}/${a}`:r.name,r=r.parent}},hashName(r,a){for(var l=0,u=0;u<a.length;u++)l=(l<<5)-l+a.charCodeAt(u)|0;return(r+l>>>0)%y.nameTable.length},hashAddNode(r){var a=y.hashName(r.parent.id,r.name);r.name_next=y.nameTable[a],y.nameTable[a]=r},hashRemoveNode(r){var a=y.hashName(r.parent.id,r.name);if(y.nameTable[a]===r)y.nameTable[a]=r.name_next;else for(var l=y.nameTable[a];l;){if(l.name_next===r){l.name_next=r.name_next;break}l=l.name_next}},lookupNode(r,a){var l=y.mayLookup(r);if(l)throw new y.ErrnoError(l);for(var u=y.hashName(r.id,a),f=y.nameTable[u];f;f=f.name_next){var x=f.name;if(f.parent.id===r.id&&x===a)return f}return y.lookup(r,a)},createNode(r,a,l,u){C(typeof r=="object");var f=new y.FSNode(r,a,l,u);return y.hashAddNode(f),f},destroyNode(r){y.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var a=["r","w","rw"][r&3];return r&512&&(a+="w"),a},nodePermissions(r,a){return y.ignorePermissions?0:a.includes("r")&&!(r.mode&292)||a.includes("w")&&!(r.mode&146)||a.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!y.isDir(r.mode))return 54;var a=y.nodePermissions(r,"x");return a||(r.node_ops.lookup?0:2)},mayCreate(r,a){if(!y.isDir(r.mode))return 54;try{var l=y.lookupNode(r,a);return 20}catch{}return y.nodePermissions(r,"wx")},mayDelete(r,a,l){var u;try{u=y.lookupNode(r,a)}catch(x){return x.errno}var f=y.nodePermissions(r,"wx");if(f)return f;if(l){if(!y.isDir(u.mode))return 54;if(y.isRoot(u)||y.getPath(u)===y.cwd())return 10}else if(y.isDir(u.mode))return 31;return 0},mayOpen(r,a){return r?y.isLink(r.mode)?32:y.isDir(r.mode)&&(y.flagsToPermissionString(a)!=="r"||a&576)?31:y.nodePermissions(r,y.flagsToPermissionString(a)):44},checkOpExists(r,a){if(!r)throw new y.ErrnoError(a);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=y.MAX_OPEN_FDS;r++)if(!y.streams[r])return r;throw new y.ErrnoError(33)},getStreamChecked(r){var a=y.getStream(r);if(!a)throw new y.ErrnoError(8);return a},getStream:r=>y.streams[r],createStream(r,a=-1){return C(a>=-1),r=Object.assign(new y.FSStream,r),a==-1&&(a=y.nextfd()),r.fd=a,y.streams[a]=r,r},closeStream(r){y.streams[r]=null},dupStream(r,a=-1){var l=y.createStream(r,a);return l.stream_ops?.dup?.(l),l},doSetAttr(r,a,l){var u=r?.stream_ops.setattr,f=u?r:a;u??=a.node_ops.setattr,y.checkOpExists(u,63),u(f,l)},chrdev_stream_ops:{open(r){var a=y.getDevice(r.node.rdev);r.stream_ops=a.stream_ops,r.stream_ops.open?.(r)},llseek(){throw new y.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,a)=>r<<8|a,registerDevice(r,a){y.devices[r]={stream_ops:a}},getDevice:r=>y.devices[r],getMounts(r){for(var a=[],l=[r];l.length;){var u=l.pop();a.push(u),l.push(...u.mounts)}return a},syncfs(r,a){typeof r=="function"&&(a=r,r=!1),y.syncFSRequests++,y.syncFSRequests>1&&F(`warning: ${y.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=y.getMounts(y.root.mount),u=0;function f(T){return C(y.syncFSRequests>0),y.syncFSRequests--,a(T)}function x(T){if(T)return x.errored?void 0:(x.errored=!0,f(T));++u>=l.length&&f(null)}l.forEach(T=>{if(!T.type.syncfs)return x(null);T.type.syncfs(T,r,x)})},mount(r,a,l){if(typeof r=="string")throw r;var u=l==="/",f=!l,x;if(u&&y.root)throw new y.ErrnoError(10);if(!u&&!f){var T=y.lookupPath(l,{follow_mount:!1});if(l=T.path,x=T.node,y.isMountpoint(x))throw new y.ErrnoError(10);if(!y.isDir(x.mode))throw new y.ErrnoError(54)}var w={type:r,opts:a,mountpoint:l,mounts:[]},N=r.mount(w);return N.mount=w,w.root=N,u?y.root=N:x&&(x.mounted=w,x.mount&&x.mount.mounts.push(w)),N},unmount(r){var a=y.lookupPath(r,{follow_mount:!1});if(!y.isMountpoint(a.node))throw new y.ErrnoError(28);var l=a.node,u=l.mounted,f=y.getMounts(u);Object.keys(y.nameTable).forEach(T=>{for(var w=y.nameTable[T];w;){var N=w.name_next;f.includes(w.mount)&&y.destroyNode(w),w=N}}),l.mounted=null;var x=l.mount.mounts.indexOf(u);C(x!==-1),l.mount.mounts.splice(x,1)},lookup(r,a){return r.node_ops.lookup(r,a)},mknod(r,a,l){var u=y.lookupPath(r,{parent:!0}),f=u.node,x=wt.basename(r);if(!x)throw new y.ErrnoError(28);if(x==="."||x==="..")throw new y.ErrnoError(20);var T=y.mayCreate(f,x);if(T)throw new y.ErrnoError(T);if(!f.node_ops.mknod)throw new y.ErrnoError(63);return f.node_ops.mknod(f,x,a,l)},statfs(r){return y.statfsNode(y.lookupPath(r,{follow:!0}).node)},statfsStream(r){return y.statfsNode(r.node)},statfsNode(r){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:y.nextInode,ffree:y.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(a,r.node_ops.statfs(r.mount.opts.root)),a},create(r,a=438){return a&=4095,a|=32768,y.mknod(r,a,0)},mkdir(r,a=511){return a&=1023,a|=16384,y.mknod(r,a,0)},mkdirTree(r,a){var l=r.split("/"),u="";for(var f of l)if(f){(u||wt.isAbs(r))&&(u+="/"),u+=f;try{y.mkdir(u,a)}catch(x){if(x.errno!=20)throw x}}},mkdev(r,a,l){return typeof l>"u"&&(l=a,a=438),a|=8192,y.mknod(r,a,l)},symlink(r,a){if(!vi.resolve(r))throw new y.ErrnoError(44);var l=y.lookupPath(a,{parent:!0}),u=l.node;if(!u)throw new y.ErrnoError(44);var f=wt.basename(a),x=y.mayCreate(u,f);if(x)throw new y.ErrnoError(x);if(!u.node_ops.symlink)throw new y.ErrnoError(63);return u.node_ops.symlink(u,f,r)},rename(r,a){var l=wt.dirname(r),u=wt.dirname(a),f=wt.basename(r),x=wt.basename(a),T,w,N;if(T=y.lookupPath(r,{parent:!0}),w=T.node,T=y.lookupPath(a,{parent:!0}),N=T.node,!w||!N)throw new y.ErrnoError(44);if(w.mount!==N.mount)throw new y.ErrnoError(75);var q=y.lookupNode(w,f),Y=vi.relative(r,u);if(Y.charAt(0)!==".")throw new y.ErrnoError(28);if(Y=vi.relative(a,l),Y.charAt(0)!==".")throw new y.ErrnoError(55);var ce;try{ce=y.lookupNode(N,x)}catch{}if(q!==ce){var de=y.isDir(q.mode),ue=y.mayDelete(w,f,de);if(ue)throw new y.ErrnoError(ue);if(ue=ce?y.mayDelete(N,x,de):y.mayCreate(N,x),ue)throw new y.ErrnoError(ue);if(!w.node_ops.rename)throw new y.ErrnoError(63);if(y.isMountpoint(q)||ce&&y.isMountpoint(ce))throw new y.ErrnoError(10);if(N!==w&&(ue=y.nodePermissions(w,"w"),ue))throw new y.ErrnoError(ue);y.hashRemoveNode(q);try{w.node_ops.rename(q,N,x),q.parent=N}catch(me){throw me}finally{y.hashAddNode(q)}}},rmdir(r){var a=y.lookupPath(r,{parent:!0}),l=a.node,u=wt.basename(r),f=y.lookupNode(l,u),x=y.mayDelete(l,u,!0);if(x)throw new y.ErrnoError(x);if(!l.node_ops.rmdir)throw new y.ErrnoError(63);if(y.isMountpoint(f))throw new y.ErrnoError(10);l.node_ops.rmdir(l,u),y.destroyNode(f)},readdir(r){var a=y.lookupPath(r,{follow:!0}),l=a.node,u=y.checkOpExists(l.node_ops.readdir,54);return u(l)},unlink(r){var a=y.lookupPath(r,{parent:!0}),l=a.node;if(!l)throw new y.ErrnoError(44);var u=wt.basename(r),f=y.lookupNode(l,u),x=y.mayDelete(l,u,!1);if(x)throw new y.ErrnoError(x);if(!l.node_ops.unlink)throw new y.ErrnoError(63);if(y.isMountpoint(f))throw new y.ErrnoError(10);l.node_ops.unlink(l,u),y.destroyNode(f)},readlink(r){var a=y.lookupPath(r),l=a.node;if(!l)throw new y.ErrnoError(44);if(!l.node_ops.readlink)throw new y.ErrnoError(28);return l.node_ops.readlink(l)},stat(r,a){var l=y.lookupPath(r,{follow:!a}),u=l.node,f=y.checkOpExists(u.node_ops.getattr,63);return f(u)},fstat(r){var a=y.getStreamChecked(r),l=a.node,u=a.stream_ops.getattr,f=u?a:l;return u??=l.node_ops.getattr,y.checkOpExists(u,63),u(f)},lstat(r){return y.stat(r,!0)},doChmod(r,a,l,u){y.doSetAttr(r,a,{mode:l&4095|a.mode&-4096,ctime:Date.now(),dontFollow:u})},chmod(r,a,l){var u;if(typeof r=="string"){var f=y.lookupPath(r,{follow:!l});u=f.node}else u=r;y.doChmod(null,u,a,l)},lchmod(r,a){y.chmod(r,a,!0)},fchmod(r,a){var l=y.getStreamChecked(r);y.doChmod(l,l.node,a,!1)},doChown(r,a,l){y.doSetAttr(r,a,{timestamp:Date.now(),dontFollow:l})},chown(r,a,l,u){var f;if(typeof r=="string"){var x=y.lookupPath(r,{follow:!u});f=x.node}else f=r;y.doChown(null,f,u)},lchown(r,a,l){y.chown(r,a,l,!0)},fchown(r,a,l){var u=y.getStreamChecked(r);y.doChown(u,u.node,!1)},doTruncate(r,a,l){if(y.isDir(a.mode))throw new y.ErrnoError(31);if(!y.isFile(a.mode))throw new y.ErrnoError(28);var u=y.nodePermissions(a,"w");if(u)throw new y.ErrnoError(u);y.doSetAttr(r,a,{size:l,timestamp:Date.now()})},truncate(r,a){if(a<0)throw new y.ErrnoError(28);var l;if(typeof r=="string"){var u=y.lookupPath(r,{follow:!0});l=u.node}else l=r;y.doTruncate(null,l,a)},ftruncate(r,a){var l=y.getStreamChecked(r);if(a<0||(l.flags&2097155)===0)throw new y.ErrnoError(28);y.doTruncate(l,l.node,a)},utime(r,a,l){var u=y.lookupPath(r,{follow:!0}),f=u.node,x=y.checkOpExists(f.node_ops.setattr,63);x(f,{atime:a,mtime:l})},open(r,a,l=438){if(r==="")throw new y.ErrnoError(44);a=typeof a=="string"?Nt(a):a,a&64?l=l&4095|32768:l=0;var u,f;if(typeof r=="object")u=r;else{f=r.endsWith("/");var x=y.lookupPath(r,{follow:!(a&131072),noent_okay:!0});u=x.node,r=x.path}var T=!1;if(a&64)if(u){if(a&128)throw new y.ErrnoError(20)}else{if(f)throw new y.ErrnoError(31);u=y.mknod(r,l|511,0),T=!0}if(!u)throw new y.ErrnoError(44);if(y.isChrdev(u.mode)&&(a&=-513),a&65536&&!y.isDir(u.mode))throw new y.ErrnoError(54);if(!T){var w=y.mayOpen(u,a);if(w)throw new y.ErrnoError(w)}a&512&&!T&&y.truncate(u,0),a&=-131713;var N=y.createStream({node:u,path:y.getPath(u),flags:a,seekable:!0,position:0,stream_ops:u.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),T&&y.chmod(u,l&511),t.logReadFiles&&!(a&1)&&(r in y.readFiles||(y.readFiles[r]=1)),N},close(r){if(y.isClosed(r))throw new y.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(a){throw a}finally{y.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,a,l){if(y.isClosed(r))throw new y.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new y.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new y.ErrnoError(28);return r.position=r.stream_ops.llseek(r,a,l),r.ungotten=[],r.position},read(r,a,l,u,f){if(C(l>=0),u<0||f<0)throw new y.ErrnoError(28);if(y.isClosed(r))throw new y.ErrnoError(8);if((r.flags&2097155)===1)throw new y.ErrnoError(8);if(y.isDir(r.node.mode))throw new y.ErrnoError(31);if(!r.stream_ops.read)throw new y.ErrnoError(28);var x=typeof f<"u";if(!x)f=r.position;else if(!r.seekable)throw new y.ErrnoError(70);var T=r.stream_ops.read(r,a,l,u,f);return x||(r.position+=T),T},write(r,a,l,u,f,x){if(C(l>=0),u<0||f<0)throw new y.ErrnoError(28);if(y.isClosed(r))throw new y.ErrnoError(8);if((r.flags&2097155)===0)throw new y.ErrnoError(8);if(y.isDir(r.node.mode))throw new y.ErrnoError(31);if(!r.stream_ops.write)throw new y.ErrnoError(28);r.seekable&&r.flags&1024&&y.llseek(r,0,2);var T=typeof f<"u";if(!T)f=r.position;else if(!r.seekable)throw new y.ErrnoError(70);var w=r.stream_ops.write(r,a,l,u,f,x);return T||(r.position+=w),w},mmap(r,a,l,u,f){if((u&2)!==0&&(f&2)===0&&(r.flags&2097155)!==2)throw new y.ErrnoError(2);if((r.flags&2097155)===1)throw new y.ErrnoError(2);if(!r.stream_ops.mmap)throw new y.ErrnoError(43);if(!a)throw new y.ErrnoError(28);return r.stream_ops.mmap(r,a,l,u,f)},msync(r,a,l,u,f){return C(l>=0),r.stream_ops.msync?r.stream_ops.msync(r,a,l,u,f):0},ioctl(r,a,l){if(!r.stream_ops.ioctl)throw new y.ErrnoError(59);return r.stream_ops.ioctl(r,a,l)},readFile(r,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var l=y.open(r,a.flags),u=y.stat(r),f=u.size,x=new Uint8Array(f);return y.read(l,x,0,f,0),a.encoding==="utf8"&&(x=vt(x)),y.close(l),x},writeFile(r,a,l={}){l.flags=l.flags||577;var u=y.open(r,l.flags,l.mode);if(typeof a=="string"&&(a=new Uint8Array(K(a))),ArrayBuffer.isView(a))y.write(u,a,0,a.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");y.close(u)},cwd:()=>y.currentPath,chdir(r){var a=y.lookupPath(r,{follow:!0});if(a.node===null)throw new y.ErrnoError(44);if(!y.isDir(a.node.mode))throw new y.ErrnoError(54);var l=y.nodePermissions(a.node,"x");if(l)throw new y.ErrnoError(l);y.currentPath=a.path},createDefaultDirectories(){y.mkdir("/tmp"),y.mkdir("/home"),y.mkdir("/home/web_user")},createDefaultDevices(){y.mkdir("/dev"),y.registerDevice(y.makedev(1,3),{read:()=>0,write:(u,f,x,T,w)=>T,llseek:()=>0}),y.mkdev("/dev/null",y.makedev(1,3)),we.register(y.makedev(5,0),we.default_tty_ops),we.register(y.makedev(6,0),we.default_tty1_ops),y.mkdev("/dev/tty",y.makedev(5,0)),y.mkdev("/dev/tty1",y.makedev(6,0));var r=new Uint8Array(1024),a=0,l=()=>(a===0&&(da(r),a=r.byteLength),r[--a]);y.createDevice("/dev","random",l),y.createDevice("/dev","urandom",l),y.mkdir("/dev/shm"),y.mkdir("/dev/shm/tmp")},createSpecialDirectories(){y.mkdir("/proc");var r=y.mkdir("/proc/self");y.mkdir("/proc/self/fd"),y.mount({mount(){var a=y.createNode(r,"fd",16895,73);return a.stream_ops={llseek:fe.stream_ops.llseek},a.node_ops={lookup(l,u){var f=+u,x=y.getStreamChecked(f),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>x.path},id:f+1};return T.parent=T,T},readdir(){return Array.from(y.streams.entries()).filter(([l,u])=>u).map(([l,u])=>l.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(r,a,l){r?y.createDevice("/dev","stdin",r):y.symlink("/dev/tty","/dev/stdin"),a?y.createDevice("/dev","stdout",null,a):y.symlink("/dev/tty","/dev/stdout"),l?y.createDevice("/dev","stderr",null,l):y.symlink("/dev/tty1","/dev/stderr");var u=y.open("/dev/stdin",0),f=y.open("/dev/stdout",1),x=y.open("/dev/stderr",1);C(u.fd===0,`invalid handle for stdin (${u.fd})`),C(f.fd===1,`invalid handle for stdout (${f.fd})`),C(x.fd===2,`invalid handle for stderr (${x.fd})`)},staticInit(){y.nameTable=new Array(4096),y.mount(fe,{},"/"),y.createDefaultDirectories(),y.createDefaultDevices(),y.createSpecialDirectories(),y.filesystems={MEMFS:fe}},init(r,a,l){C(!y.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),y.initialized=!0,r??=t.stdin,a??=t.stdout,l??=t.stderr,y.createStandardStreams(r,a,l)},quit(){y.initialized=!1,Rs(0);for(var r of y.streams)r&&y.close(r)},findObject(r,a){var l=y.analyzePath(r,a);return l.exists?l.object:null},analyzePath(r,a){try{var l=y.lookupPath(r,{follow:!a});r=l.path}catch{}var u={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=y.lookupPath(r,{parent:!0});u.parentExists=!0,u.parentPath=l.path,u.parentObject=l.node,u.name=wt.basename(r),l=y.lookupPath(r,{follow:!a}),u.exists=!0,u.path=l.path,u.object=l.node,u.name=l.node.name,u.isRoot=l.path==="/"}catch(f){u.error=f.errno}return u},createPath(r,a,l,u){r=typeof r=="string"?r:y.getPath(r);for(var f=a.split("/").reverse();f.length;){var x=f.pop();if(x){var T=wt.join2(r,x);try{y.mkdir(T)}catch(w){if(w.errno!=20)throw w}r=T}}return T},createFile(r,a,l,u,f){var x=wt.join2(typeof r=="string"?r:y.getPath(r),a),T=Ft(u,f);return y.create(x,T)},createDataFile(r,a,l,u,f,x){var T=a;r&&(r=typeof r=="string"?r:y.getPath(r),T=a?wt.join2(r,a):r);var w=Ft(u,f),N=y.create(T,w);if(l){if(typeof l=="string"){for(var q=new Array(l.length),Y=0,ce=l.length;Y<ce;++Y)q[Y]=l.charCodeAt(Y);l=q}y.chmod(N,w|146);var de=y.open(N,577);y.write(de,l,0,l.length,0,x),y.close(de),y.chmod(N,w)}},createDevice(r,a,l,u){var f=wt.join2(typeof r=="string"?r:y.getPath(r),a),x=Ft(!!l,!!u);y.createDevice.major??=64;var T=y.makedev(y.createDevice.major++,0);return y.registerDevice(T,{open(w){w.seekable=!1},close(w){u?.buffer?.length&&u(10)},read(w,N,q,Y,ce){for(var de=0,ue=0;ue<Y;ue++){var me;try{me=l()}catch{throw new y.ErrnoError(29)}if(me===void 0&&de===0)throw new y.ErrnoError(6);if(me==null)break;de++,N[q+ue]=me}return de&&(w.node.atime=Date.now()),de},write(w,N,q,Y,ce){for(var de=0;de<Y;de++)try{u(N[q+de])}catch{throw new y.ErrnoError(29)}return Y&&(w.node.mtime=w.node.ctime=Date.now()),de}}),y.mkdev(f,x,T)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=b(r.url),r.usedBytes=r.contents.length}catch{throw new y.ErrnoError(29)}},createLazyFile(r,a,l,u,f){class x{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var me=ue%this.chunkSize,qe=ue/this.chunkSize|0;return this.getter(qe)[me]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",l,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+l+". Status: "+ue.status);var me=Number(ue.getResponseHeader("Content-length")),qe,dt=(qe=ue.getResponseHeader("Accept-Ranges"))&&qe==="bytes",at=(qe=ue.getResponseHeader("Content-Encoding"))&&qe==="gzip",Lt=1024*1024;dt||(Lt=me);var xt=(Xt,on)=>{if(Xt>on)throw new Error("invalid range ("+Xt+", "+on+") or no bytes requested!");if(on>me-1)throw new Error("only "+me+" bytes available! programmer error!");var Dt=new XMLHttpRequest;if(Dt.open("GET",l,!1),me!==Lt&&Dt.setRequestHeader("Range","bytes="+Xt+"-"+on),Dt.responseType="arraybuffer",Dt.overrideMimeType&&Dt.overrideMimeType("text/plain; charset=x-user-defined"),Dt.send(null),!(Dt.status>=200&&Dt.status<300||Dt.status===304))throw new Error("Couldn't load "+l+". Status: "+Dt.status);return Dt.response!==void 0?new Uint8Array(Dt.response||[]):K(Dt.responseText||"")},tn=this;tn.setDataGetter(Xt=>{var on=Xt*Lt,Dt=(Xt+1)*Lt-1;if(Dt=Math.min(Dt,me-1),typeof tn.chunks[Xt]>"u"&&(tn.chunks[Xt]=xt(on,Dt)),typeof tn.chunks[Xt]>"u")throw new Error("doXHR failed!");return tn.chunks[Xt]}),(at||!me)&&(Lt=me=1,me=this.getter(0).length,Lt=me,D("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Lt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!s)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new x,w={isDevice:!1,contents:T}}else var w={isDevice:!1,url:l};var N=y.createFile(r,a,w,u,f);w.contents?N.contents=w.contents:w.url&&(N.contents=null,N.url=w.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var q={},Y=Object.keys(N.stream_ops);Y.forEach(de=>{var ue=N.stream_ops[de];q[de]=(...me)=>(y.forceLoadFile(N),ue(...me))});function ce(de,ue,me,qe,dt){var at=de.node.contents;if(dt>=at.length)return 0;var Lt=Math.min(at.length-dt,qe);if(C(Lt>=0),at.slice)for(var xt=0;xt<Lt;xt++)ue[me+xt]=at[dt+xt];else for(var xt=0;xt<Lt;xt++)ue[me+xt]=at.get(dt+xt);return Lt}return q.read=(de,ue,me,qe,dt)=>(y.forceLoadFile(N),ce(de,ue,me,qe,dt)),q.mmap=(de,ue,me,qe,dt)=>{y.forceLoadFile(N);var at=Le();if(!at)throw new y.ErrnoError(48);return ce(de,Ze,at,ue,me),{ptr:at,allocated:!0}},N.stream_ops=q,N},absolutePath(){G("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){G("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){G("FS.createLink has been removed; use FS.symlink instead")},joinPath(){G("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){G("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){G("FS.standardizePath has been removed; use PATH.normalize instead")}},ct={DEFAULT_POLLMASK:5,calculateAt(r,a,l){if(wt.isAbs(a))return a;var u;if(r===-100)u=y.cwd();else{var f=ct.getStreamFromFD(r);u=f.path}if(a.length==0){if(!l)throw new y.ErrnoError(44);return u}return u+"/"+a},writeStat(r,a){ie[r>>2]=a.dev,ie[r+4>>2]=a.mode,ye[r+8>>2]=a.nlink,ie[r+12>>2]=a.uid,ie[r+16>>2]=a.gid,ie[r+20>>2]=a.rdev,yt[r+24>>3]=BigInt(a.size),ie[r+32>>2]=4096,ie[r+36>>2]=a.blocks;var l=a.atime.getTime(),u=a.mtime.getTime(),f=a.ctime.getTime();return yt[r+40>>3]=BigInt(Math.floor(l/1e3)),ye[r+48>>2]=l%1e3*1e3*1e3,yt[r+56>>3]=BigInt(Math.floor(u/1e3)),ye[r+64>>2]=u%1e3*1e3*1e3,yt[r+72>>3]=BigInt(Math.floor(f/1e3)),ye[r+80>>2]=f%1e3*1e3*1e3,yt[r+88>>3]=BigInt(a.ino),0},writeStatFs(r,a){ie[r+4>>2]=a.bsize,ie[r+40>>2]=a.bsize,ie[r+8>>2]=a.blocks,ie[r+12>>2]=a.bfree,ie[r+16>>2]=a.bavail,ie[r+20>>2]=a.files,ie[r+24>>2]=a.ffree,ie[r+28>>2]=a.fsid,ie[r+44>>2]=a.flags,ie[r+36>>2]=a.namelen},doMsync(r,a,l,u,f){if(!y.isFile(a.node.mode))throw new y.ErrnoError(43);if(u&2)return 0;var x=Je.slice(r,r+l);y.msync(a,x,f,l,u)},getStreamFromFD(r){var a=y.getStreamChecked(r);return a},varargs:void 0,getStr(r){var a=lt(r);return a}};function mt(r,a,l){try{var u=ct.getStreamFromFD(r);if(C(!l),u.fd===a)return-28;if(a<0||a>=y.MAX_OPEN_FDS)return-8;var f=y.getStream(a);return f&&y.close(f),y.dupStream(u,a).fd}catch(x){if(typeof y>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}var en=()=>{C(ct.varargs!=null);var r=ie[+ct.varargs>>2];return ct.varargs+=4,r},Zt=en;function ri(r,a,l){ct.varargs=l;try{var u=ct.getStreamFromFD(r);switch(a){case 0:{var f=en();if(f<0)return-28;for(;y.streams[f];)f++;var x;return x=y.dupStream(u,f),x.fd}case 1:case 2:return 0;case 3:return u.flags;case 4:{var f=en();return u.flags|=f,0}case 12:{var f=Zt(),T=0;return oe[f+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(w){if(typeof y>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function xi(r,a){try{return ct.writeStat(a,y.fstat(r))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Rt(r,a,l){ct.varargs=l;try{var u=ct.getStreamFromFD(r);switch(a){case 21509:return u.tty?0:-59;case 21505:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcgets){var f=u.tty.ops.ioctl_tcgets(u),x=Zt();ie[x>>2]=f.c_iflag||0,ie[x+4>>2]=f.c_oflag||0,ie[x+8>>2]=f.c_cflag||0,ie[x+12>>2]=f.c_lflag||0;for(var T=0;T<32;T++)Ze[x+T+17]=f.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return u.tty?0:-59;case 21506:case 21507:case 21508:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcsets){for(var x=Zt(),w=ie[x>>2],N=ie[x+4>>2],q=ie[x+8>>2],Y=ie[x+12>>2],ce=[],T=0;T<32;T++)ce.push(Ze[x+T+17]);return u.tty.ops.ioctl_tcsets(u.tty,a,{c_iflag:w,c_oflag:N,c_cflag:q,c_lflag:Y,c_cc:ce})}return 0}case 21519:{if(!u.tty)return-59;var x=Zt();return ie[x>>2]=0,0}case 21520:return u.tty?-28:-59;case 21531:{var x=Zt();return y.ioctl(u,a,x)}case 21523:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tiocgwinsz){var de=u.tty.ops.ioctl_tiocgwinsz(u.tty),x=Zt();oe[x>>1]=de[0],oe[x+2>>1]=de[1]}return 0}case 21524:return u.tty?0:-59;case 21515:return u.tty?0:-59;default:return-28}}catch(ue){if(typeof y>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function Wt(r,a){try{return r=ct.getStr(r),ct.writeStat(a,y.lstat(r))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function zn(r,a,l,u){try{a=ct.getStr(a);var f=u&256,x=u&4096;return u=u&-6401,C(!u,`unknown flags in __syscall_newfstatat: ${u}`),a=ct.calculateAt(r,a,x),ct.writeStat(l,f?y.lstat(a):y.stat(a))}catch(T){if(typeof y>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function zt(r,a,l,u){ct.varargs=u;try{a=ct.getStr(a),a=ct.calculateAt(r,a);var f=u?en():0;return y.open(a,l,f).fd}catch(x){if(typeof y>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function Vn(r,a){try{return r=ct.getStr(r),ct.writeStat(a,y.stat(r))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var Si=()=>G("native code called abort()"),Bt=r=>{for(var a="";;){var l=Je[r++];if(!l)return a;a+=String.fromCharCode(l)}},er={},Ii={},fa={},Cr=class extends Error{constructor(a){super(a),this.name="BindingError"}},ht=r=>{throw new Cr(r)};function yd(r,a,l={}){var u=a.name;if(r||ht(`type "${u}" must have a positive integer typeid pointer`),Ii.hasOwnProperty(r)){if(l.ignoreDuplicateRegistrations)return;ht(`Cannot register type '${u}' twice`)}if(Ii[r]=a,delete fa[r],er.hasOwnProperty(r)){var f=er[r];delete er[r],f.forEach(x=>x())}}function Sn(r,a,l={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return yd(r,a,l)}var Cl=(r,a,l)=>{switch(a){case 1:return l?u=>Ze[u]:u=>Je[u];case 2:return l?u=>oe[u>>1]:u=>ve[u>>1];case 4:return l?u=>ie[u>>2]:u=>ye[u>>2];case 8:return l?u=>yt[u>>3]:u=>ot[u>>3];default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},Ui=r=>{if(r===null)return"null";var a=typeof r;return a==="object"||a==="array"||a==="function"?r.toString():""+r},Pl=(r,a,l,u)=>{if(a<l||a>u)throw new TypeError(`Passing a number "${Ui(a)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${l}, ${u}]!`)},Ed=(r,a,l,u,f)=>{a=Bt(a);const x=u===0n;let T=w=>w;if(x){const w=l*8;T=N=>BigInt.asUintN(w,N),f=T(f)}Sn(r,{name:a,fromWireType:T,toWireType:(w,N)=>{if(typeof N=="number")N=BigInt(N);else if(typeof N!="bigint")throw new TypeError(`Cannot convert "${Ui(N)}" to ${this.name}`);return Pl(a,N,u,f),N},argPackAdvance:Gn,readValueFromPointer:Cl(a,l,!x),destructorFunction:null})},Gn=8,Md=(r,a,l,u)=>{a=Bt(a),Sn(r,{name:a,fromWireType:function(f){return!!f},toWireType:function(f,x){return x?l:u},argPackAdvance:Gn,readValueFromPointer:function(f){return this.fromWireType(Je[f])},destructorFunction:null})},bd=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),vs=r=>{function a(l){return l.$$.ptrType.registeredClass.name}ht(a(r)+" instance already deleted")},xs=!1,Dl=r=>{},Td=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},Fl=r=>{r.count.value-=1;var a=r.count.value===0;a&&Td(r)},Ll=(r,a,l)=>{if(a===l)return r;if(l.baseClass===void 0)return null;var u=Ll(r,a,l.baseClass);return u===null?null:l.downcast(u)},Il={},wd={},Ad=(r,a)=>{for(a===void 0&&ht("ptr should not be undefined");r.baseClass;)a=r.upcast(a),r=r.baseClass;return a},Rd=(r,a)=>(a=Ad(r,a),wd[a]),Cd=class extends Error{constructor(a){super(a),this.name="InternalError"}},ha=r=>{throw new Cd(r)},pa=(r,a)=>{(!a.ptrType||!a.ptr)&&ha("makeClassHandle requires ptr and ptrType");var l=!!a.smartPtrType,u=!!a.smartPtr;return l!==u&&ha("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Pr(Object.create(r,{$$:{value:a,writable:!0}}))};function Ul(r){var a=this.getPointee(r);if(!a)return this.destructor(r),null;var l=Rd(this.registeredClass,a);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=a,l.$$.smartPtr=r,l.clone();var u=l.clone();return this.destructor(r),u}function f(){return this.isSmartPointer?pa(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:r}):pa(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var x=this.registeredClass.getActualType(a),T=Il[x];if(!T)return f.call(this);var w;this.isConst?w=T.constPointerType:w=T.pointerType;var N=Ll(a,this.registeredClass,w.registeredClass);return N===null?f.call(this):this.isSmartPointer?pa(w.registeredClass.instancePrototype,{ptrType:w,ptr:N,smartPtrType:this,smartPtr:r}):pa(w.registeredClass.instancePrototype,{ptrType:w,ptr:N})}var Pr=r=>typeof FinalizationRegistry>"u"?(Pr=a=>a,r):(xs=new FinalizationRegistry(a=>{console.warn(a.leakWarning),Fl(a.$$)}),Pr=a=>{var l=a.$$,u=!!l.smartPtr;if(u){var f={$$:l},x=l.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${x.name} <${Pe(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,Ul),f.leakWarning=T.stack.replace(/^Error: /,""),xs.register(a,f,a)}return a},Dl=a=>xs.unregister(a),Pr(r)),Pd=()=>{let r=ma.prototype;Object.assign(r,{isAliasOf(l){if(!(this instanceof ma)||!(l instanceof ma))return!1;var u=this.$$.ptrType.registeredClass,f=this.$$.ptr;l.$$=l.$$;for(var x=l.$$.ptrType.registeredClass,T=l.$$.ptr;u.baseClass;)f=u.upcast(f),u=u.baseClass;for(;x.baseClass;)T=x.upcast(T),x=x.baseClass;return u===x&&f===T},clone(){if(this.$$.ptr||vs(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=Pr(Object.create(Object.getPrototypeOf(this),{$$:{value:bd(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||vs(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),Dl(this),Fl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||vs(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(r[a]=r.delete)};function ma(){}var ga=(r,a)=>Object.defineProperty(a,"name",{value:r}),Ss=(r,a,l)=>{if(r[a].overloadTable===void 0){var u=r[a];r[a]=function(...f){return r[a].overloadTable.hasOwnProperty(f.length)||ht(`Function '${l}' called with an invalid number of arguments (${f.length}) - expects one of (${r[a].overloadTable})!`),r[a].overloadTable[f.length].apply(this,f)},r[a].overloadTable=[],r[a].overloadTable[u.argCount]=u}},ys=(r,a,l)=>{t.hasOwnProperty(r)?((l===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[l]!==void 0)&&ht(`Cannot register public name '${r}' twice`),Ss(t,r,r),t[r].overloadTable.hasOwnProperty(l)&&ht(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[r].overloadTable[l]=a):(t[r]=a,t[r].argCount=l)},Dd=48,Fd=57,Ld=r=>{C(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var a=r.charCodeAt(0);return a>=Dd&&a<=Fd?`_${r}`:r};function Id(r,a,l,u,f,x,T,w){this.name=r,this.constructor=a,this.instancePrototype=l,this.rawDestructor=u,this.baseClass=f,this.getActualType=x,this.upcast=T,this.downcast=w,this.pureVirtualFunctions=[]}var _a=(r,a,l)=>{for(;a!==l;)a.upcast||ht(`Expected null or instance of ${l.name}, got an instance of ${a.name}`),r=a.upcast(r),a=a.baseClass;return r};function Ud(r,a){if(a===null)return this.isReference&&ht(`null is not a valid ${this.name}`),0;a.$$||ht(`Cannot pass "${Ui(a)}" as a ${this.name}`),a.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=a.$$.ptrType.registeredClass,u=_a(a.$$.ptr,l,this.registeredClass);return u}function Nd(r,a){var l;if(a===null)return this.isReference&&ht(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,l),l):0;(!a||!a.$$)&&ht(`Cannot pass "${Ui(a)}" as a ${this.name}`),a.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&ht(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var u=a.$$.ptrType.registeredClass;if(l=_a(a.$$.ptr,u,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&ht("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?l=a.$$.smartPtr:ht(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)l=a.$$.smartPtr;else{var f=a.clone();l=this.rawShare(l,$t.toHandle(()=>f.delete())),r!==null&&r.push(this.rawDestructor,l)}break;default:ht("Unsupporting sharing policy")}return l}function Od(r,a){if(a===null)return this.isReference&&ht(`null is not a valid ${this.name}`),0;a.$$||ht(`Cannot pass "${Ui(a)}" as a ${this.name}`),a.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&ht(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var l=a.$$.ptrType.registeredClass,u=_a(a.$$.ptr,l,this.registeredClass);return u}function va(r){return this.fromWireType(ye[r>>2])}var Bd=()=>{Object.assign(xa.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:Gn,readValueFromPointer:va,fromWireType:Ul})};function xa(r,a,l,u,f,x,T,w,N,q,Y){this.name=r,this.registeredClass=a,this.isReference=l,this.isConst=u,this.isSmartPointer=f,this.pointeeType=x,this.sharingPolicy=T,this.rawGetPointee=w,this.rawConstructor=N,this.rawShare=q,this.rawDestructor=Y,!f&&a.baseClass===void 0?u?(this.toWireType=Ud,this.destructorFunction=null):(this.toWireType=Od,this.destructorFunction=null):this.toWireType=Nd}var Nl=(r,a,l)=>{t.hasOwnProperty(r)||ha("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&l!==void 0?t[r].overloadTable[l]=a:(t[r]=a,t[r].argCount=l)},Ol=[],Sa,_e=r=>{var a=Ol[r];return a||(Ol[r]=a=Sa.get(r)),C(Sa.get(r)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},Hn=(r,a,l=!1)=>{C(!l,"Async bindings are only supported with JSPI."),r=Bt(r);function u(){var x=_e(a);return x}var f=u();return typeof f!="function"&&ht(`unknown function pointer with signature ${r}: ${a}`),f};class kd extends Error{}var Bl=r=>{var a=ic(r),l=Bt(a);return $n(a),l},Ni=(r,a)=>{var l=[],u={};function f(x){if(!u[x]&&!Ii[x]){if(fa[x]){fa[x].forEach(f);return}l.push(x),u[x]=!0}}throw a.forEach(f),new kd(`${r}: `+l.map(Bl).join([", "]))},wn=(r,a,l)=>{r.forEach(w=>fa[w]=a);function u(w){var N=l(w);N.length!==r.length&&ha("Mismatched type converter count");for(var q=0;q<r.length;++q)Sn(r[q],N[q])}var f=new Array(a.length),x=[],T=0;a.forEach((w,N)=>{Ii.hasOwnProperty(w)?f[N]=Ii[w]:(x.push(w),er.hasOwnProperty(w)||(er[w]=[]),er[w].push(()=>{f[N]=Ii[w],++T,T===x.length&&u(f)}))}),x.length===0&&u(f)},zd=(r,a,l,u,f,x,T,w,N,q,Y,ce,de)=>{Y=Bt(Y),x=Hn(f,x),w&&=Hn(T,w),q&&=Hn(N,q),de=Hn(ce,de);var ue=Ld(Y);ys(ue,function(){Ni(`Cannot construct ${Y} due to unbound types`,[u])}),wn([r,a,l],u?[u]:[],me=>{me=me[0];var qe,dt;u?(qe=me.registeredClass,dt=qe.instancePrototype):dt=ma.prototype;var at=ga(Y,function(...Dt){if(Object.getPrototypeOf(this)!==Lt)throw new Cr(`Use 'new' to construct ${Y}`);if(xt.constructor_body===void 0)throw new Cr(`${Y} has no accessible constructor`);var ki=xt.constructor_body[Dt.length];if(ki===void 0)throw new Cr(`Tried to invoke ctor of ${Y} with invalid number of parameters (${Dt.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return ki.apply(this,Dt)}),Lt=Object.create(dt,{constructor:{value:at}});at.prototype=Lt;var xt=new Id(Y,at,Lt,de,qe,x,w,q);xt.baseClass&&(xt.baseClass.__derivedClasses??=[],xt.baseClass.__derivedClasses.push(xt));var tn=new xa(Y,xt,!0,!1,!1),Xt=new xa(Y+"*",xt,!1,!1,!1),on=new xa(Y+" const*",xt,!1,!0,!1);return Il[r]={pointerType:Xt,constPointerType:on},Nl(ue,at),[tn,Xt,on]})},Es=r=>{for(;r.length;){var a=r.pop(),l=r.pop();l(a)}};function kl(r){for(var a=1;a<r.length;++a)if(r[a]!==null&&r[a].destructorFunction===void 0)return!0;return!1}function Vd(r,a,l,u,f){if(r<a||r>l){var x=a==l?a:`${a} to ${l}`;f(`function ${u} called with ${r} arguments, expected ${x}`)}}function Gd(r,a,l,u){var f=kl(r),x=r.length-2,T=[],w=["fn"];a&&w.push("thisWired");for(var N=0;N<x;++N)T.push(`arg${N}`),w.push(`arg${N}Wired`);T=T.join(","),w=w.join(",");var q=`return function (${T}) {
`;q+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,f&&(q+=`var destructors = [];
`);var Y=f?"destructors":"null",ce=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(q+=`var thisWired = classParam['toWireType'](${Y}, this);
`);for(var N=0;N<x;++N)q+=`var arg${N}Wired = argType${N}['toWireType'](${Y}, arg${N});
`,ce.push(`argType${N}`);if(q+=(l||u?"var rv = ":"")+`invoker(${w});
`,f)q+=`runDestructors(destructors);
`;else for(var N=a?1:2;N<r.length;++N){var de=N===1?"thisWired":"arg"+(N-2)+"Wired";r[N].destructorFunction!==null&&(q+=`${de}_dtor(${de});
`,ce.push(`${de}_dtor`))}return l&&(q+=`var ret = retType['fromWireType'](rv);
return ret;
`),q+=`}
`,ce.push("checkArgCount","minArgs","maxArgs"),q=`if (arguments.length !== ${ce.length}){ throw new Error(humanName + "Expected ${ce.length} closure arguments " + arguments.length + " given."); }
${q}`,[ce,q]}function Hd(r){for(var a=r.length-2,l=r.length-1;l>=2&&r[l].optional;--l)a--;return a}function ya(r,a,l,u,f,x){var T=a.length;T<2&&ht("argTypes array size mismatch! Must at least get return value and 'this' types!"),C(!x,"Async bindings are only supported with JSPI.");for(var w=a[1]!==null&&l!==null,N=kl(a),q=a[0].name!=="void",Y=T-2,ce=Hd(a),de=[r,ht,u,f,Es,a[0],a[1]],ue=0;ue<T-2;++ue)de.push(a[ue+2]);if(!N)for(var ue=w?1:2;ue<a.length;++ue)a[ue].destructorFunction!==null&&de.push(a[ue].destructorFunction);de.push(Vd,ce,Y);let[me,qe]=Gd(a,w,q,x);var dt=new Function(...me,qe)(...de);return ga(r,dt)}var Ea=(r,a)=>{for(var l=[],u=0;u<r;u++)l.push(ye[a+u*4>>2]);return l},Ms=r=>{r=r.trim();const a=r.indexOf("(");return a===-1?r:(C(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,a))},Wd=(r,a,l,u,f,x,T,w,N)=>{var q=Ea(l,u);a=Bt(a),a=Ms(a),x=Hn(f,x,w),wn([],[r],Y=>{Y=Y[0];var ce=`${Y.name}.${a}`;function de(){Ni(`Cannot call ${ce} due to unbound types`,q)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ue=Y.registeredClass.constructor;return ue[a]===void 0?(de.argCount=l-1,ue[a]=de):(Ss(ue,a,ce),ue[a].overloadTable[l-1]=de),wn([],q,me=>{var qe=[me[0],null].concat(me.slice(1)),dt=ya(ce,qe,null,x,T,w);if(ue[a].overloadTable===void 0?(dt.argCount=l-1,ue[a]=dt):ue[a].overloadTable[l-1]=dt,Y.registeredClass.__derivedClasses)for(const at of Y.registeredClass.__derivedClasses)at.constructor.hasOwnProperty(a)||(at.constructor[a]=dt);return[]}),[]})},$d=(r,a,l,u,f,x)=>{C(a>0);var T=Ea(a,l);f=Hn(u,f),wn([],[r],w=>{w=w[0];var N=`constructor ${w.name}`;if(w.registeredClass.constructor_body===void 0&&(w.registeredClass.constructor_body=[]),w.registeredClass.constructor_body[a-1]!==void 0)throw new Cr(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return w.registeredClass.constructor_body[a-1]=()=>{Ni(`Cannot construct ${w.name} due to unbound types`,T)},wn([],T,q=>(q.splice(1,0,null),w.registeredClass.constructor_body[a-1]=ya(N,q,null,f,x),[])),[]})},Xd=(r,a,l,u,f,x,T,w,N,q)=>{var Y=Ea(l,u);a=Bt(a),a=Ms(a),x=Hn(f,x,N),wn([],[r],ce=>{ce=ce[0];var de=`${ce.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),w&&ce.registeredClass.pureVirtualFunctions.push(a);function ue(){Ni(`Cannot call ${de} due to unbound types`,Y)}var me=ce.registeredClass.instancePrototype,qe=me[a];return qe===void 0||qe.overloadTable===void 0&&qe.className!==ce.name&&qe.argCount===l-2?(ue.argCount=l-2,ue.className=ce.name,me[a]=ue):(Ss(me,a,de),me[a].overloadTable[l-2]=ue),wn([],Y,dt=>{var at=ya(de,dt,ce,x,T,N);return me[a].overloadTable===void 0?(at.argCount=l-2,me[a]=at):me[a].overloadTable[l-2]=at,[]}),[]})},zl=(r,a,l)=>(r instanceof Object||ht(`${l} with invalid "this": ${r}`),r instanceof a.registeredClass.constructor||ht(`${l} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||ht(`cannot call emscripten binding method ${l} on deleted object`),_a(r.$$.ptr,r.$$.ptrType.registeredClass,a.registeredClass)),qd=(r,a,l,u,f,x,T,w,N,q)=>{a=Bt(a),f=Hn(u,f),wn([],[r],Y=>{Y=Y[0];var ce=`${Y.name}.${a}`,de={get(){Ni(`Cannot access ${ce} due to unbound types`,[l,T])},enumerable:!0,configurable:!0};return N?de.set=()=>Ni(`Cannot access ${ce} due to unbound types`,[l,T]):de.set=ue=>ht(ce+" is a read-only property"),Object.defineProperty(Y.registeredClass.instancePrototype,a,de),wn([],N?[l,T]:[l],ue=>{var me=ue[0],qe={get(){var at=zl(this,Y,ce+" getter");return me.fromWireType(f(x,at))},enumerable:!0};if(N){N=Hn(w,N);var dt=ue[1];qe.set=function(at){var Lt=zl(this,Y,ce+" setter"),xt=[];N(q,Lt,dt.toWireType(xt,at)),Es(xt)}}return Object.defineProperty(Y.registeredClass.instancePrototype,a,qe),[]}),[]})},jd=(r,a,l)=>{r=Bt(r),wn([],[a],u=>(u=u[0],t[r]=u.fromWireType(l),[]))},Vl=[],Wn=[0,1,,1,null,1,!0,1,!1,1],bs=r=>{r>9&&--Wn[r+1]===0&&(C(Wn[r]!==void 0,"Decref for unallocated handle."),Wn[r]=void 0,Vl.push(r))},$t={toValue:r=>(r||ht(`Cannot use deleted val. handle = ${r}`),C(r===2||Wn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Wn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=Vl.pop()||Wn.length;return Wn[a]=r,Wn[a+1]=1,a}}}},Gl={name:"emscripten::val",fromWireType:r=>{var a=$t.toValue(r);return bs(r),a},toWireType:(r,a)=>$t.toHandle(a),argPackAdvance:Gn,readValueFromPointer:va,destructorFunction:null},Hl=r=>Sn(r,Gl),Yd=(r,a,l)=>{switch(a){case 1:return l?function(u){return this.fromWireType(Ze[u])}:function(u){return this.fromWireType(Je[u])};case 2:return l?function(u){return this.fromWireType(oe[u>>1])}:function(u){return this.fromWireType(ve[u>>1])};case 4:return l?function(u){return this.fromWireType(ie[u>>2])}:function(u){return this.fromWireType(ye[u>>2])};default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},Kd=(r,a,l,u)=>{a=Bt(a);function f(){}f.values={},Sn(r,{name:a,constructor:f,fromWireType:function(x){return this.constructor.values[x]},toWireType:(x,T)=>T.value,argPackAdvance:Gn,readValueFromPointer:Yd(a,l,u),destructorFunction:null}),ys(a,f)},Ma=(r,a)=>{var l=Ii[r];return l===void 0&&ht(`${a} has unknown type ${Bl(r)}`),l},Zd=(r,a,l)=>{var u=Ma(r,"enum");a=Bt(a);var f=u.constructor,x=Object.create(u.constructor.prototype,{value:{value:l},constructor:{value:ga(`${u.name}_${a}`,function(){})}});f.values[l]=x,f[a]=x},Jd=(r,a)=>{switch(a){case 4:return function(l){return this.fromWireType(We[l>>2])};case 8:return function(l){return this.fromWireType(Xe[l>>3])};default:throw new TypeError(`invalid float width (${a}): ${r}`)}},Qd=(r,a,l)=>{a=Bt(a),Sn(r,{name:a,fromWireType:u=>u,toWireType:(u,f)=>{if(typeof f!="number"&&typeof f!="boolean")throw new TypeError(`Cannot convert ${Ui(f)} to ${this.name}`);return f},argPackAdvance:Gn,readValueFromPointer:Jd(a,l),destructorFunction:null})},ef=(r,a,l,u,f,x,T,w)=>{var N=Ea(a,l);r=Bt(r),r=Ms(r),f=Hn(u,f,T),ys(r,function(){Ni(`Cannot call ${r} due to unbound types`,N)},a-1),wn([],N,q=>{var Y=[q[0],null].concat(q.slice(1));return Nl(r,ya(r,Y,null,f,x,T),a-1),[]})},tf=(r,a,l,u,f)=>{a=Bt(a);const x=u===0;let T=N=>N;if(x){var w=32-8*l;T=N=>N<<w>>>w,f=T(f)}Sn(r,{name:a,fromWireType:T,toWireType:(N,q)=>{if(typeof q!="number"&&typeof q!="boolean")throw new TypeError(`Cannot convert "${Ui(q)}" to ${a}`);return Pl(a,q,u,f),q},argPackAdvance:Gn,readValueFromPointer:Cl(a,l,u!==0),destructorFunction:null})},nf=(r,a,l)=>{var u=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],f=u[a];function x(T){var w=ye[T>>2],N=ye[T+4>>2];return new f(Ze.buffer,N,w)}l=Bt(l),Sn(r,{name:l,fromWireType:x,argPackAdvance:Gn,readValueFromPointer:x},{ignoreDuplicateRegistrations:!0})},rf=Object.assign({optional:!0},Gl),af=(r,a)=>{Sn(r,rf)},Oi=(r,a,l)=>(C(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ae(r,Je,a,l)),sf=(r,a)=>{a=Bt(a),Sn(r,{name:a,fromWireType(l){for(var u=ye[l>>2],f=l+4,x,T,w=f,T=0;T<=u;++T){var N=f+T;if(T==u||Je[N]==0){var q=N-w,Y=lt(w,q);x===void 0?x=Y:(x+="\0",x+=Y),w=N+1}}return $n(l),x},toWireType(l,u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));var f,x=typeof u=="string";x||ArrayBuffer.isView(u)&&u.BYTES_PER_ELEMENT==1||ht("Cannot pass non-string to std::string"),x?f=X(u):f=u.length;var T=As(4+f+1),w=T+4;return ye[T>>2]=f,x?Oi(u,w,f+1):Je.set(u,w),l!==null&&l.push($n,T),T},argPackAdvance:Gn,readValueFromPointer:va,destructorFunction(l){$n(l)}})},Wl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,of=(r,a)=>{C(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=r>>1,u=l+a/2,f=l;!(f>=u)&&ve[f];)++f;if(f-l>16&&Wl)return Wl.decode(ve.subarray(l,f));for(var x="",T=l;!(T>=u);++T){var w=ve[T];if(w==0)break;x+=String.fromCharCode(w)}return x},lf=(r,a,l)=>{if(C(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),C(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??=2147483647,l<2)return 0;l-=2;for(var u=a,f=l<r.length*2?l/2:r.length,x=0;x<f;++x){var T=r.charCodeAt(x);oe[a>>1]=T,a+=2}return oe[a>>1]=0,a-u},cf=r=>r.length*2,uf=(r,a)=>{C(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",u=0;!(u>=a/4);u++){var f=ie[r+u*4>>2];if(!f)break;l+=String.fromCodePoint(f)}return l},df=(r,a,l)=>{if(C(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),C(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??=2147483647,l<4)return 0;for(var u=a,f=u+l-4,x=0;x<r.length;++x){var T=r.codePointAt(x);if(T>65535&&x++,ie[a>>2]=T,a+=4,a+4>f)break}return ie[a>>2]=0,a-u},ff=r=>{for(var a=0,l=0;l<r.length;++l){var u=r.codePointAt(l);u>65535&&l++,a+=4}return a},hf=(r,a,l)=>{l=Bt(l);var u,f,x,T;a===2?(u=of,f=lf,T=cf,x=w=>ve[w>>1]):a===4&&(u=uf,f=df,T=ff,x=w=>ye[w>>2]),Sn(r,{name:l,fromWireType:w=>{for(var N=ye[w>>2],q,Y=w+4,ce=0;ce<=N;++ce){var de=w+4+ce*a;if(ce==N||x(de)==0){var ue=de-Y,me=u(Y,ue);q===void 0?q=me:(q+="\0",q+=me),Y=de+a}}return $n(w),q},toWireType:(w,N)=>{typeof N!="string"&&ht(`Cannot pass non-string to C++ string type ${l}`);var q=T(N),Y=As(4+q+a);return ye[Y>>2]=q/a,f(N,Y+4,q+a),w!==null&&w.push($n,Y),Y},argPackAdvance:Gn,readValueFromPointer:va,destructorFunction(w){$n(w)}})},pf=(r,a)=>{Hl(r)},mf=(r,a)=>{a=Bt(a),Sn(r,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,u)=>{}})},gf=()=>{throw new z},$l=(r,a,l)=>{var u=[],f=r.toWireType(u,l);return u.length&&(ye[a>>2]=$t.toHandle(u)),f},_f=(r,a,l)=>(r=$t.toValue(r),a=Ma(a,"emval::as"),$l(a,l,r)),ba=[],vf=(r,a,l,u)=>(r=ba[r],a=$t.toValue(a),r(null,a,l,u)),xf={},Ts=r=>{var a=xf[r];return a===void 0?Bt(r):a},Sf=(r,a,l,u,f)=>(r=ba[r],a=$t.toValue(a),l=Ts(l),r(a,a[l],u,f)),Xl=()=>globalThis,yf=r=>r===0?$t.toHandle(Xl()):(r=Ts(r),$t.toHandle(Xl()[r])),Ef=r=>{var a=ba.length;return ba.push(r),a},Mf=(r,a)=>{for(var l=new Array(r),u=0;u<r;++u)l[u]=Ma(ye[a+u*4>>2],`parameter ${u}`);return l},bf=(r,a,l)=>{var u=Mf(r,a),f=u.shift();r--;var x=`return function (obj, func, destructorsRef, args) {
`,T=0,w=[];l===0&&w.push("obj");for(var N=["retType"],q=[f],Y=0;Y<r;++Y)w.push(`arg${Y}`),N.push(`argType${Y}`),q.push(u[Y]),x+=`  var arg${Y} = argType${Y}.readValueFromPointer(args${T?"+"+T:""});
`,T+=u[Y].argPackAdvance;var ce=l===1?"new func":"func.call";x+=`  var rv = ${ce}(${w.join(", ")});
`,f.isVoid||(N.push("emval_returnValue"),q.push($l),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),x+=`};
`;var de=new Function(...N,x)(...q),ue=`methodCaller<(${u.map(me=>me.name).join(", ")}) => ${f.name}>`;return Ef(ga(ue,de))},Tf=(r,a)=>(r=$t.toValue(r),a=$t.toValue(a),$t.toHandle(r[a])),wf=r=>{r>9&&(Wn[r+1]+=1)},Af=r=>(r=$t.toValue(r),typeof r=="number"),Rf=r=>(r=$t.toValue(r),typeof r=="string"),Cf=()=>$t.toHandle([]),Pf=r=>$t.toHandle(Ts(r)),Df=r=>{var a=$t.toValue(r);Es(a),bs(r)},Ff=(r,a)=>{r=Ma(r,"_emval_take_value");var l=r.readValueFromPointer(a);return $t.toHandle(l)},Lf=r=>{throw r=$t.toValue(r),r},If=r=>r%4===0&&(r%100!==0||r%400===0),Uf=[0,31,60,91,121,152,182,213,244,274,305,335],Nf=[0,31,59,90,120,151,181,212,243,273,304,334],ql=r=>{var a=If(r.getFullYear()),l=a?Uf:Nf,u=l[r.getMonth()]+r.getDate()-1;return u},Of=9007199254740992,Bf=-9007199254740992,jl=r=>r<Bf||r>Of?NaN:Number(r);function kf(r,a){r=jl(r);var l=new Date(r*1e3);ie[a>>2]=l.getSeconds(),ie[a+4>>2]=l.getMinutes(),ie[a+8>>2]=l.getHours(),ie[a+12>>2]=l.getDate(),ie[a+16>>2]=l.getMonth(),ie[a+20>>2]=l.getFullYear()-1900,ie[a+24>>2]=l.getDay();var u=ql(l)|0;ie[a+28>>2]=u,ie[a+36>>2]=-(l.getTimezoneOffset()*60);var f=new Date(l.getFullYear(),0,1),x=new Date(l.getFullYear(),6,1).getTimezoneOffset(),T=f.getTimezoneOffset(),w=(x!=T&&l.getTimezoneOffset()==Math.min(T,x))|0;ie[a+32>>2]=w}var zf=function(r){var a=(()=>{var l=new Date(ie[r+20>>2]+1900,ie[r+16>>2],ie[r+12>>2],ie[r+8>>2],ie[r+4>>2],ie[r>>2],0),u=ie[r+32>>2],f=l.getTimezoneOffset(),x=new Date(l.getFullYear(),0,1),T=new Date(l.getFullYear(),6,1).getTimezoneOffset(),w=x.getTimezoneOffset(),N=Math.min(w,T);if(u<0)ie[r+32>>2]=+(T!=w&&N==f);else if(u>0!=(N==f)){var q=Math.max(w,T),Y=u>0?N:q;l.setTime(l.getTime()+(Y-f)*6e4)}ie[r+24>>2]=l.getDay();var ce=ql(l)|0;ie[r+28>>2]=ce,ie[r>>2]=l.getSeconds(),ie[r+4>>2]=l.getMinutes(),ie[r+8>>2]=l.getHours(),ie[r+12>>2]=l.getDate(),ie[r+16>>2]=l.getMonth(),ie[r+20>>2]=l.getYear();var de=l.getTime();return isNaN(de)?-1:de/1e3})();return BigInt(a)},Vf=(r,a,l,u)=>{var f=new Date().getFullYear(),x=new Date(f,0,1),T=new Date(f,6,1),w=x.getTimezoneOffset(),N=T.getTimezoneOffset(),q=Math.max(w,N);ye[r>>2]=q*60,ie[a>>2]=+(w!=N);var Y=ue=>{var me=ue>=0?"-":"+",qe=Math.abs(ue),dt=String(Math.floor(qe/60)).padStart(2,"0"),at=String(qe%60).padStart(2,"0");return`UTC${me}${dt}${at}`},ce=Y(w),de=Y(N);C(ce),C(de),C(X(ce)<=16,`timezone name truncated to fit in TZNAME_MAX (${ce})`),C(X(de)<=16,`timezone name truncated to fit in TZNAME_MAX (${de})`),N<w?(Oi(ce,l,17),Oi(de,u,17)):(Oi(ce,u,17),Oi(de,l,17))},Yl=()=>performance.now(),Kl=()=>Date.now(),Gf=r=>r>=0&&r<=3;function Hf(r,a,l){if(!Gf(r))return 28;var u;r===0?u=Kl():u=Yl();var f=Math.round(u*1e3*1e3);return yt[l>>3]=BigInt(f),0}var Ta=[],Wf=(r,a)=>{C(Array.isArray(Ta)),C(a%16==0),Ta.length=0;for(var l;l=Je[r++];){var u=String.fromCharCode(l),f=["d","f","i","p"];f.push("j"),C(f.includes(u),`Invalid character ${l}("${u}") in readEmAsmArgs! Use only [${f}], and do not specify "v" for void return argument.`);var x=l!=105;x&=l!=112,a+=x&&a%8?4:0,Ta.push(l==112?ye[a>>2]:l==106?yt[a>>3]:l==105?ie[a>>2]:Xe[a>>3]),a+=x?8:4}return Ta},$f=(r,a,l)=>{var u=Wf(a,l);return C(nc.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),nc[r](...u)},Xf=(r,a,l)=>$f(r,a,l),Zl=()=>2147483648,qf=()=>Zl(),jf=(r,a)=>(C(a,"alignment argument is required"),Math.ceil(r/a)*a),Yf=r=>{var a=$e.buffer,l=(r-a.byteLength+65535)/65536|0;try{return $e.grow(l),Tt(),1}catch(u){F(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${r} bytes, but got error: ${u}`)}},Kf=r=>{var a=Je.length;r>>>=0,C(r>a);var l=Zl();if(r>l)return F(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${l} bytes!`),!1;for(var u=1;u<=4;u*=2){var f=a*(1+.2/u);f=Math.min(f,r+100663296);var x=Math.min(l,jf(Math.max(r,f),65536)),T=Yf(x);if(T)return!0}return F(`Failed to grow the heap from ${a} bytes to ${x} bytes, not enough memory!`),!1},ws={},Zf=()=>p||"./this.program",Dr=()=>{if(!Dr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:Zf()};for(var l in ws)ws[l]===void 0?delete a[l]:a[l]=ws[l];var u=[];for(var l in a)u.push(`${l}=${a[l]}`);Dr.strings=u}return Dr.strings},Jf=(r,a)=>{var l=0,u=0;for(var f of Dr()){var x=a+l;ye[r+u>>2]=x,l+=Oi(f,x,1/0)+1,u+=4}return 0},Qf=(r,a)=>{var l=Dr();ye[r>>2]=l.length;var u=0;for(var f of l)u+=X(f)+1;return ye[a>>2]=u,0},Jl=0,Ql=()=>Ee||Jl>0,eh=r=>{Ql()||(t.onExit?.(r),O=!0),h(r,new Oe(r))},th=(r,a)=>{if(fm(),Ql()&&!a){var l=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${Jl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ae?.(l),F(l)}eh(r)},nh=th;function ih(r){try{var a=ct.getStreamFromFD(r);return y.close(a),0}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var rh=(r,a,l,u)=>{for(var f=0,x=0;x<l;x++){var T=ye[a>>2],w=ye[a+4>>2];a+=8;var N=y.read(r,Ze,T,w,u);if(N<0)return-1;if(f+=N,N<w)break}return f};function ah(r,a,l,u){try{var f=ct.getStreamFromFD(r),x=rh(f,a,l);return ye[u>>2]=x,0}catch(T){if(typeof y>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function sh(r,a,l,u){a=jl(a);try{if(isNaN(a))return 61;var f=ct.getStreamFromFD(r);return y.llseek(f,a,l),yt[u>>3]=BigInt(f.position),f.getdents&&a===0&&l===0&&(f.getdents=null),0}catch(x){if(typeof y>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var oh=(r,a,l,u)=>{for(var f=0,x=0;x<l;x++){var T=ye[a>>2],w=ye[a+4>>2];a+=8;var N=y.write(r,Ze,T,w,u);if(N<0)return-1;if(f+=N,N<w)break}return f};function lh(r,a,l,u){try{var f=ct.getStreamFromFD(r),x=oh(f,a,l);return ye[u>>2]=x,0}catch(T){if(typeof y>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var ch=r=>r,uh=r=>{var a=t["_"+r];return C(a,"Cannot call unknown function "+r+", make sure it is exported"),a},dh=(r,a)=>{C(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ze.set(r,a)},wa=r=>lc(r),fh=r=>{var a=X(r)+1,l=wa(a);return Oi(r,l,a),l},ec=(r,a,l,u,f)=>{var x={string:me=>{var qe=0;return me!=null&&me!==0&&(qe=fh(me)),qe},array:me=>{var qe=wa(me.length);return dh(me,qe),qe}};function T(me){return a==="string"?lt(me):a==="boolean"?!!me:me}var w=uh(r),N=[],q=0;if(C(a!=="array",'Return type should not be "array".'),u)for(var Y=0;Y<u.length;Y++){var ce=x[l[Y]];ce?(q===0&&(q=B()),N[Y]=ce(u[Y])):N[Y]=u[Y]}var de=w(...N);function ue(me){return q!==0&&$(q),T(me)}return de=ue(de),de},hh=(r,a,l,u)=>(...f)=>ec(r,a,l,f),ph=(...r)=>y.createPath(...r),mh=(...r)=>y.unlink(...r),gh=(...r)=>y.createLazyFile(...r),_h=(...r)=>y.createDevice(...r),vh=r=>Aa(r),xh=r=>Ps(r),Sh=r=>{var a=B(),l=wa(4),u=wa(4);uc(r,l,u);var f=ye[l>>2],x=ye[u>>2],T=lt(f);$n(f);var w;return x&&(w=lt(x),$n(x)),$(a),[T,w]},tc=r=>Sh(r);y.createPreloadedFile=Mt,y.staticInit(),Pd(),Bd(),C(Wn.length===10),t.noExitRuntime&&(Ee=t.noExitRuntime),t.preloadPlugins&&(tt=t.preloadPlugins),t.print&&(D=t.print),t.printErr&&(F=t.printErr),t.wasmBinary&&(L=t.wasmBinary),Mh(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),C(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),C(typeof t.read>"u","Module.read option was removed"),C(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),C(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),C(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),C(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),C(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),C(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),C(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),C(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=M,t.ccall=ec,t.cwrap=hh,t.FS_createPreloadedFile=Mt,t.FS_unlink=mh,t.FS_createPath=ph,t.FS_createDevice=_h,t.FS=y,t.FS_createDataFile=Ve,t.FS_createLazyFile=gh,t.MEMFS=fe;var yh=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];yh.forEach(pe);var Eh=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Eh.forEach(Ce),t.incrementExceptionRefcount=vh,t.decrementExceptionRefcount=xh,t.getExceptionMessage=tc;function Mh(){re("fetchSettings")}var nc={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(a){},enumerable:!0,configurable:!0})})}},ic=Q("___getTypeName"),As=Q("_malloc"),Rs=Q("_fflush"),$n=Q("_free"),Cs=Q("_emscripten_stack_get_end"),rc=Q("_strerror"),ge=Q("_setThrew"),ac=Q("__emscripten_tempret_set"),sc=Q("_emscripten_stack_init"),oc=Q("__emscripten_stack_restore"),lc=Q("__emscripten_stack_alloc"),cc=Q("_emscripten_stack_get_current"),Ps=Q("___cxa_decrement_exception_refcount"),Aa=Q("___cxa_increment_exception_refcount"),uc=Q("___get_exception_message"),dc=Q("___cxa_can_catch"),fc=Q("___cxa_get_exception_ptr");function bh(r){ic=se("__getTypeName",1),As=se("malloc",1),Rs=se("fflush",1),$n=se("free",1),Cs=r.emscripten_stack_get_end,r.emscripten_stack_get_base,rc=se("strerror",1),ge=se("setThrew",2),ac=se("_emscripten_tempret_set",1),sc=r.emscripten_stack_init,r.emscripten_stack_get_free,oc=r._emscripten_stack_restore,lc=r._emscripten_stack_alloc,cc=r.emscripten_stack_get_current,Ps=se("__cxa_decrement_exception_refcount",1),Aa=se("__cxa_increment_exception_refcount",1),uc=se("__get_exception_message",3),dc=se("__cxa_can_catch",3),fc=se("__cxa_get_exception_ptr",1)}var hc={__assert_fail:Tn,__cxa_begin_catch:Rr,__cxa_current_primary_exception:ps,__cxa_end_catch:sa,__cxa_find_matching_catch_2:oa,__cxa_find_matching_catch_3:Qi,__cxa_find_matching_catch_4:la,__cxa_rethrow:Li,__cxa_rethrow_primary_exception:ca,__cxa_throw:ua,__cxa_uncaught_exceptions:ms,__resumeException:gs,__syscall_dup3:mt,__syscall_fcntl64:ri,__syscall_fstat64:xi,__syscall_ioctl:Rt,__syscall_lstat64:Wt,__syscall_newfstatat:zn,__syscall_openat:zt,__syscall_stat64:Vn,_abort_js:Si,_embind_register_bigint:Ed,_embind_register_bool:Md,_embind_register_class:zd,_embind_register_class_class_function:Wd,_embind_register_class_constructor:$d,_embind_register_class_function:Xd,_embind_register_class_property:qd,_embind_register_constant:jd,_embind_register_emval:Hl,_embind_register_enum:Kd,_embind_register_enum_value:Zd,_embind_register_float:Qd,_embind_register_function:ef,_embind_register_integer:tf,_embind_register_memory_view:nf,_embind_register_optional:af,_embind_register_std_string:sf,_embind_register_std_wstring:hf,_embind_register_user_type:pf,_embind_register_void:mf,_emscripten_throw_longjmp:gf,_emval_as:_f,_emval_call:vf,_emval_call_method:Sf,_emval_decref:bs,_emval_get_global:yf,_emval_get_method_caller:bf,_emval_get_property:Tf,_emval_incref:wf,_emval_is_number:Af,_emval_is_string:Rf,_emval_new_array:Cf,_emval_new_cstring:Pf,_emval_run_destructors:Df,_emval_take_value:Ff,_emval_throw:Lf,_localtime_js:kf,_mktime_js:zf,_tzset_js:Vf,clock_time_get:Hf,emscripten_asm_const_int:Xf,emscripten_date_now:Kl,emscripten_get_heap_max:qf,emscripten_get_now:Yl,emscripten_resize_heap:Kf,environ_get:Jf,environ_sizes_get:Qf,exit:nh,fd_close:ih,fd_read:ah,fd_seek:sh,fd_write:lh,invoke_ddd:Zp,invoke_dddi:pp,invoke_dddidi:mp,invoke_ddidi:hp,invoke_di:gp,invoke_dii:rp,invoke_diii:Bh,invoke_diiii:fp,invoke_diiiidd:up,invoke_diiiidi:Vh,invoke_diiiii:Lh,invoke_diiiiii:qh,invoke_diiiiiii:_p,invoke_diiiiiiiii:$h,invoke_diiiiiiiiiiii:Xh,invoke_fiii:lm,invoke_i:Ih,invoke_id:Xp,invoke_ii:Ah,invoke_iid:Ap,invoke_iidddd:nm,invoke_iidiii:tp,invoke_iidiiid:Qh,invoke_iidiiiiidi:np,invoke_iif:tm,invoke_iii:Th,invoke_iiid:ip,invoke_iiididdddddd:ep,invoke_iiidiiiiiiii:Jh,invoke_iiii:Ph,invoke_iiiidddiiiii:xp,invoke_iiiii:Oh,invoke_iiiiid:Op,invoke_iiiiii:Fp,invoke_iiiiiii:Cp,invoke_iiiiiiii:wp,invoke_iiiiiiiidd:Bp,invoke_iiiiiiiii:cp,invoke_iiiiiiiiii:Pp,invoke_iiiiiiiiiidddiiiiiiiii:Zh,invoke_iiiiiiiiiii:om,invoke_iiiiiiiiiiii:cm,invoke_iiiiiiiiiiiii:$p,invoke_iiij:Dp,invoke_iiji:Np,invoke_j:am,invoke_ji:Wp,invoke_jiiii:Lp,invoke_jij:Hp,invoke_v:Ch,invoke_vi:Rh,invoke_vid:Rp,invoke_viddd:Ip,invoke_vidddd:Up,invoke_vidi:dp,invoke_vidiii:Yh,invoke_vii:Fh,invoke_viid:op,invoke_viiddi:Gp,invoke_viiddidi:Vp,invoke_viiddii:vp,invoke_viidi:sp,invoke_viidii:zh,invoke_viidiii:bp,invoke_viidiiid:Ep,invoke_viidiiiii:Kh,invoke_viidiiiiidi:Tp,invoke_viidiiiiiiii:jh,invoke_viii:wh,invoke_viiid:Hh,invoke_viiidd:zp,invoke_viiidi:ap,invoke_viiididdddddd:Mp,invoke_viiidiiiiiiii:yp,invoke_viiii:Nh,invoke_viiiiddd:kp,invoke_viiiidi:Jp,invoke_viiiifi:Qp,invoke_viiiii:Dh,invoke_viiiiid:Gh,invoke_viiiiii:Uh,invoke_viiiiiii:kh,invoke_viiiiiiii:lp,invoke_viiiiiiiiii:Yp,invoke_viiiiiiiiiidddiiiiiiiii:Sp,invoke_viiiiiiiiiiid:Wh,invoke_viiiiiiiiiiiii:jp,invoke_viiiiiiiiiiiiiii:um,invoke_viiiiiiiiiiiiiiiiii:Kp,invoke_viiiij:im,invoke_viij:rm,invoke_viijii:sm,invoke_vij:em,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:qp,llvm_eh_typeid_for:ch},Bi=await Me();function Th(r,a,l){var u=B();try{return _e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function wh(r,a,l,u){var f=B();try{_e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function Ah(r,a){var l=B();try{return _e(r)(a)}catch(u){if($(l),!(u instanceof k))throw u;ge(1,0)}}function Rh(r,a){var l=B();try{_e(r)(a)}catch(u){if($(l),!(u instanceof k))throw u;ge(1,0)}}function Ch(r){var a=B();try{_e(r)()}catch(l){if($(a),!(l instanceof k))throw l;ge(1,0)}}function Ph(r,a,l,u){var f=B();try{return _e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function Dh(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Fh(r,a,l){var u=B();try{_e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function Lh(r,a,l,u,f,x){var T=B();try{return _e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Ih(r){var a=B();try{return _e(r)()}catch(l){if($(a),!(l instanceof k))throw l;ge(1,0)}}function Uh(r,a,l,u,f,x,T){var w=B();try{_e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function Nh(r,a,l,u,f){var x=B();try{_e(r)(a,l,u,f)}catch(T){if($(x),!(T instanceof k))throw T;ge(1,0)}}function Oh(r,a,l,u,f){var x=B();try{return _e(r)(a,l,u,f)}catch(T){if($(x),!(T instanceof k))throw T;ge(1,0)}}function Bh(r,a,l,u){var f=B();try{return _e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function kh(r,a,l,u,f,x,T,w){var N=B();try{_e(r)(a,l,u,f,x,T,w)}catch(q){if($(N),!(q instanceof k))throw q;ge(1,0)}}function zh(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Vh(r,a,l,u,f,x,T){var w=B();try{return _e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function Gh(r,a,l,u,f,x,T){var w=B();try{_e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function Hh(r,a,l,u,f){var x=B();try{_e(r)(a,l,u,f)}catch(T){if($(x),!(T instanceof k))throw T;ge(1,0)}}function Wh(r,a,l,u,f,x,T,w,N,q,Y,ce,de){var ue=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function $h(r,a,l,u,f,x,T,w,N,q){var Y=B();try{return _e(r)(a,l,u,f,x,T,w,N,q)}catch(ce){if($(Y),!(ce instanceof k))throw ce;ge(1,0)}}function Xh(r,a,l,u,f,x,T,w,N,q,Y,ce,de){var ue=B();try{return _e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function qh(r,a,l,u,f,x,T){var w=B();try{return _e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function jh(r,a,l,u,f,x,T,w,N,q,Y,ce){var de=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce)}catch(ue){if($(de),!(ue instanceof k))throw ue;ge(1,0)}}function Yh(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Kh(r,a,l,u,f,x,T,w,N){var q=B();try{_e(r)(a,l,u,f,x,T,w,N)}catch(Y){if($(q),!(Y instanceof k))throw Y;ge(1,0)}}function Zh(r,a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe,dt,at,Lt,xt,tn,Xt){var on=B();try{return _e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe,dt,at,Lt,xt,tn,Xt)}catch(Dt){if($(on),!(Dt instanceof k))throw Dt;ge(1,0)}}function Jh(r,a,l,u,f,x,T,w,N,q,Y,ce){var de=B();try{return _e(r)(a,l,u,f,x,T,w,N,q,Y,ce)}catch(ue){if($(de),!(ue instanceof k))throw ue;ge(1,0)}}function Qh(r,a,l,u,f,x,T){var w=B();try{return _e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function ep(r,a,l,u,f,x,T,w,N,q,Y,ce){var de=B();try{return _e(r)(a,l,u,f,x,T,w,N,q,Y,ce)}catch(ue){if($(de),!(ue instanceof k))throw ue;ge(1,0)}}function tp(r,a,l,u,f,x){var T=B();try{return _e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function np(r,a,l,u,f,x,T,w,N,q){var Y=B();try{return _e(r)(a,l,u,f,x,T,w,N,q)}catch(ce){if($(Y),!(ce instanceof k))throw ce;ge(1,0)}}function ip(r,a,l,u){var f=B();try{return _e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function rp(r,a,l){var u=B();try{return _e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function ap(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function sp(r,a,l,u,f){var x=B();try{_e(r)(a,l,u,f)}catch(T){if($(x),!(T instanceof k))throw T;ge(1,0)}}function op(r,a,l,u){var f=B();try{_e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function lp(r,a,l,u,f,x,T,w,N){var q=B();try{_e(r)(a,l,u,f,x,T,w,N)}catch(Y){if($(q),!(Y instanceof k))throw Y;ge(1,0)}}function cp(r,a,l,u,f,x,T,w,N){var q=B();try{return _e(r)(a,l,u,f,x,T,w,N)}catch(Y){if($(q),!(Y instanceof k))throw Y;ge(1,0)}}function up(r,a,l,u,f,x,T){var w=B();try{return _e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function dp(r,a,l,u){var f=B();try{_e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function fp(r,a,l,u,f){var x=B();try{return _e(r)(a,l,u,f)}catch(T){if($(x),!(T instanceof k))throw T;ge(1,0)}}function hp(r,a,l,u,f){var x=B();try{return _e(r)(a,l,u,f)}catch(T){if($(x),!(T instanceof k))throw T;ge(1,0)}}function pp(r,a,l,u){var f=B();try{return _e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function mp(r,a,l,u,f,x){var T=B();try{return _e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function gp(r,a){var l=B();try{return _e(r)(a)}catch(u){if($(l),!(u instanceof k))throw u;ge(1,0)}}function _p(r,a,l,u,f,x,T,w){var N=B();try{return _e(r)(a,l,u,f,x,T,w)}catch(q){if($(N),!(q instanceof k))throw q;ge(1,0)}}function vp(r,a,l,u,f,x,T){var w=B();try{_e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function xp(r,a,l,u,f,x,T,w,N,q,Y,ce){var de=B();try{return _e(r)(a,l,u,f,x,T,w,N,q,Y,ce)}catch(ue){if($(de),!(ue instanceof k))throw ue;ge(1,0)}}function Sp(r,a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe,dt,at,Lt,xt,tn,Xt,on){var Dt=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe,dt,at,Lt,xt,tn,Xt,on)}catch(ki){if($(Dt),!(ki instanceof k))throw ki;ge(1,0)}}function yp(r,a,l,u,f,x,T,w,N,q,Y,ce,de){var ue=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function Ep(r,a,l,u,f,x,T,w){var N=B();try{_e(r)(a,l,u,f,x,T,w)}catch(q){if($(N),!(q instanceof k))throw q;ge(1,0)}}function Mp(r,a,l,u,f,x,T,w,N,q,Y,ce,de){var ue=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function bp(r,a,l,u,f,x,T){var w=B();try{_e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function Tp(r,a,l,u,f,x,T,w,N,q,Y){var ce=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y)}catch(de){if($(ce),!(de instanceof k))throw de;ge(1,0)}}function wp(r,a,l,u,f,x,T,w){var N=B();try{return _e(r)(a,l,u,f,x,T,w)}catch(q){if($(N),!(q instanceof k))throw q;ge(1,0)}}function Ap(r,a,l){var u=B();try{return _e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function Rp(r,a,l){var u=B();try{_e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function Cp(r,a,l,u,f,x,T){var w=B();try{return _e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function Pp(r,a,l,u,f,x,T,w,N,q){var Y=B();try{return _e(r)(a,l,u,f,x,T,w,N,q)}catch(ce){if($(Y),!(ce instanceof k))throw ce;ge(1,0)}}function Dp(r,a,l,u){var f=B();try{return _e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function Fp(r,a,l,u,f,x){var T=B();try{return _e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Lp(r,a,l,u,f){var x=B();try{return _e(r)(a,l,u,f)}catch(T){if($(x),!(T instanceof k))throw T;return ge(1,0),0n}}function Ip(r,a,l,u,f){var x=B();try{_e(r)(a,l,u,f)}catch(T){if($(x),!(T instanceof k))throw T;ge(1,0)}}function Up(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Np(r,a,l,u){var f=B();try{return _e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function Op(r,a,l,u,f,x){var T=B();try{return _e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Bp(r,a,l,u,f,x,T,w,N,q){var Y=B();try{return _e(r)(a,l,u,f,x,T,w,N,q)}catch(ce){if($(Y),!(ce instanceof k))throw ce;ge(1,0)}}function kp(r,a,l,u,f,x,T,w){var N=B();try{_e(r)(a,l,u,f,x,T,w)}catch(q){if($(N),!(q instanceof k))throw q;ge(1,0)}}function zp(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Vp(r,a,l,u,f,x,T,w){var N=B();try{_e(r)(a,l,u,f,x,T,w)}catch(q){if($(N),!(q instanceof k))throw q;ge(1,0)}}function Gp(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function Hp(r,a,l){var u=B();try{return _e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;return ge(1,0),0n}}function Wp(r,a){var l=B();try{return _e(r)(a)}catch(u){if($(l),!(u instanceof k))throw u;return ge(1,0),0n}}function $p(r,a,l,u,f,x,T,w,N,q,Y,ce,de){var ue=B();try{return _e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function Xp(r,a){var l=B();try{return _e(r)(a)}catch(u){if($(l),!(u instanceof k))throw u;ge(1,0)}}function qp(r,a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe,dt,at,Lt,xt,tn,Xt,on,Dt,ki,pm,mm,gm,_m,vm,xm,Sm,ym,Em,Mm,bm,Tm,wm,Am,Rm,Cm,Pm,Dm,Fm,Lm,Im,Um,Nm,Om,Bm,km,zm,Vm,Gm,Hm,Wm,$m,Xm,qm,jm,Ym,Km,Zm,Jm,Qm,eg,tg,ng,ig,rg,ag,sg,og,lg,cg,ug,dg,fg,hg,pg,mg,gg,_g,vg,xg,Sg){var yg=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe,dt,at,Lt,xt,tn,Xt,on,Dt,ki,pm,mm,gm,_m,vm,xm,Sm,ym,Em,Mm,bm,Tm,wm,Am,Rm,Cm,Pm,Dm,Fm,Lm,Im,Um,Nm,Om,Bm,km,zm,Vm,Gm,Hm,Wm,$m,Xm,qm,jm,Ym,Km,Zm,Jm,Qm,eg,tg,ng,ig,rg,ag,sg,og,lg,cg,ug,dg,fg,hg,pg,mg,gg,_g,vg,xg,Sg)}catch(mc){if($(yg),!(mc instanceof k))throw mc;ge(1,0)}}function jp(r,a,l,u,f,x,T,w,N,q,Y,ce,de,ue){var me=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de,ue)}catch(qe){if($(me),!(qe instanceof k))throw qe;ge(1,0)}}function Yp(r,a,l,u,f,x,T,w,N,q,Y){var ce=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y)}catch(de){if($(ce),!(de instanceof k))throw de;ge(1,0)}}function Kp(r,a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe,dt,at,Lt){var xt=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe,dt,at,Lt)}catch(tn){if($(xt),!(tn instanceof k))throw tn;ge(1,0)}}function Zp(r,a,l){var u=B();try{return _e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function Jp(r,a,l,u,f,x,T){var w=B();try{_e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function Qp(r,a,l,u,f,x,T){var w=B();try{_e(r)(a,l,u,f,x,T)}catch(N){if($(w),!(N instanceof k))throw N;ge(1,0)}}function em(r,a,l){var u=B();try{_e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function tm(r,a,l){var u=B();try{return _e(r)(a,l)}catch(f){if($(u),!(f instanceof k))throw f;ge(1,0)}}function nm(r,a,l,u,f,x){var T=B();try{return _e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function im(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function rm(r,a,l,u){var f=B();try{_e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function am(r){var a=B();try{return _e(r)()}catch(l){if($(a),!(l instanceof k))throw l;return ge(1,0),0n}}function sm(r,a,l,u,f,x){var T=B();try{_e(r)(a,l,u,f,x)}catch(w){if($(T),!(w instanceof k))throw w;ge(1,0)}}function om(r,a,l,u,f,x,T,w,N,q,Y){var ce=B();try{return _e(r)(a,l,u,f,x,T,w,N,q,Y)}catch(de){if($(ce),!(de instanceof k))throw de;ge(1,0)}}function lm(r,a,l,u){var f=B();try{return _e(r)(a,l,u)}catch(x){if($(f),!(x instanceof k))throw x;ge(1,0)}}function cm(r,a,l,u,f,x,T,w,N,q,Y,ce){var de=B();try{return _e(r)(a,l,u,f,x,T,w,N,q,Y,ce)}catch(ue){if($(de),!(ue instanceof k))throw ue;ge(1,0)}}function um(r,a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe){var dt=B();try{_e(r)(a,l,u,f,x,T,w,N,q,Y,ce,de,ue,me,qe)}catch(at){if($(dt),!(at instanceof k))throw at;ge(1,0)}}var pc;function dm(){sc(),A()}function Ds(){if(Pt>0){ut=Ds;return}if(dm(),nt(),Pt>0){ut=Ds;return}function r(){C(!pc),pc=!0,t.calledRun=!0,!O&&(Ut(),Ie?.(t),t.onRuntimeInitialized?.(),te("onRuntimeInitialized"),C(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),V())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),I()}function fm(){var r=D,a=F,l=!1;D=F=u=>{l=!0};try{Rs(0),["stdout","stderr"].forEach(u=>{var f=y.analyzePath("/dev/"+u);if(f){var x=f.object,T=x.rdev,w=we.ttys[T];w?.output?.length&&(l=!0)}})}catch{}D=r,F=a,l&&Fe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function hm(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();te("preInit")}hm(),Ds(),ft?e=t:e=new Promise((r,a)=>{Ie=r,Ae=a});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){G(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const wg="/demo/assets/mujoco-D9UjOFNX.wasm";var gn=Uint8Array,_r=Uint16Array,Ag=Int32Array,wu=new gn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Au=new gn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Rg=new gn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ru=function(i,e){for(var t=new _r(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Ag(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)s[o]=o-t[n]<<5|n;return{b:t,r:s}},Cu=Ru(wu,2),Pu=Cu.b,Cg=Cu.r;Pu[28]=258,Cg[258]=28;var Pg=Ru(Au,0),Dg=Pg.b,xo=new _r(32768);for(var It=0;It<32768;++It){var yi=(It&43690)>>1|(It&21845)<<1;yi=(yi&52428)>>2|(yi&13107)<<2,yi=(yi&61680)>>4|(yi&3855)<<4,xo[It]=((yi&65280)>>8|(yi&255)<<8)>>1}var Hr=(function(i,e,t){for(var n=i.length,s=0,o=new _r(e);s<n;++s)i[s]&&++o[i[s]-1];var c=new _r(e);for(s=1;s<e;++s)c[s]=c[s-1]+o[s-1]<<1;var d;if(t){d=new _r(1<<e);var p=15-e;for(s=0;s<n;++s)if(i[s])for(var h=s<<4|i[s],m=e-i[s],_=c[i[s]-1]++<<m,g=_|(1<<m)-1;_<=g;++_)d[xo[_]>>p]=h}else for(d=new _r(n),s=0;s<n;++s)i[s]&&(d[s]=xo[c[i[s]-1]++]>>15-i[s]);return d}),Jr=new gn(288);for(var It=0;It<144;++It)Jr[It]=8;for(var It=144;It<256;++It)Jr[It]=9;for(var It=256;It<280;++It)Jr[It]=7;for(var It=280;It<288;++It)Jr[It]=8;var Du=new gn(32);for(var It=0;It<32;++It)Du[It]=5;var Fg=Hr(Jr,9,1),Lg=Hr(Du,5,1),Fs=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},An=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Ls=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Ig=function(i){return(i+7)/8|0},Ug=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new gn(i.subarray(e,t))},Ng=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Dn=function(i,e,t){var n=new Error(e||Ng[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Dn),!t)throw n;return n},Og=function(i,e,t,n){var s=i.length,o=0;if(!s||e.f&&!e.l)return t||new gn(0);var c=!t,d=c||e.i!=2,p=e.i;c&&(t=new gn(s*3));var h=function(Xe){var yt=t.length;if(Xe>yt){var ot=new gn(Math.max(yt*2,Xe));ot.set(t),t=ot}},m=e.f||0,_=e.p||0,g=e.b||0,v=e.l,b=e.d,P=e.m,E=e.n,S=s*8;do{if(!v){m=An(i,_,1);var D=An(i,_+1,3);if(_+=3,D)if(D==1)v=Fg,b=Lg,P=9,E=5;else if(D==2){var C=An(i,_,31)+257,W=An(i,_+10,15)+4,A=C+An(i,_+5,31)+1;_+=14;for(var I=new gn(A),k=new gn(19),z=0;z<W;++z)k[Rg[z]]=An(i,_+z*3,7);_+=W*3;for(var ne=Fs(k),te=(1<<ne)-1,Q=Hr(k,ne,1),z=0;z<A;){var re=Q[An(i,_,te)];_+=re&15;var F=re>>4;if(F<16)I[z++]=F;else{var Z=0,J=0;for(F==16?(J=3+An(i,_,3),_+=2,Z=I[z-1]):F==17?(J=3+An(i,_,7),_+=3):F==18&&(J=11+An(i,_,127),_+=7);J--;)I[z++]=Z}}var Se=I.subarray(0,C),pe=I.subarray(C);P=Fs(Se),E=Fs(pe),v=Hr(Se,P,1),b=Hr(pe,E,1)}else Dn(1);else{var F=Ig(_)+4,L=i[F-4]|i[F-3]<<8,O=F+L;if(O>s){p&&Dn(0);break}d&&h(g+L),t.set(i.subarray(F,O),g),e.b=g+=L,e.p=_=O*8,e.f=m;continue}if(_>S){p&&Dn(0);break}}d&&h(g+131072);for(var Ce=(1<<P)-1,Ie=(1<<E)-1,Ae=_;;Ae=_){var Z=v[Ls(i,_)&Ce],$e=Z>>4;if(_+=Z&15,_>S){p&&Dn(0);break}if(Z||Dn(2),$e<256)t[g++]=$e;else if($e==256){Ae=_,v=null;break}else{var Ze=$e-254;if($e>264){var z=$e-257,Je=wu[z];Ze=An(i,_,(1<<Je)-1)+Pu[z],_+=Je}var oe=b[Ls(i,_)&Ie],ve=oe>>4;oe||Dn(3),_+=oe&15;var pe=Dg[ve];if(ve>3){var Je=Au[ve];pe+=Ls(i,_)&(1<<Je)-1,_+=Je}if(_>S){p&&Dn(0);break}d&&h(g+131072);var ie=g+Ze;if(g<pe){var ye=o-pe,We=Math.min(pe,ie);for(ye+g<0&&Dn(3);g<We;++g)t[g]=n[ye+g]}for(;g<ie;++g)t[g]=t[g-pe]}}e.l=v,e.p=Ae,e.b=g,e.f=m,v&&(m=1,e.m=P,e.d=b,e.n=E)}while(!m);return g!=t.length&&c?Ug(t,0,g):t.subarray(0,g)},Bg=new gn(0),kg=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Dn(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},zg=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};function Vg(i,e){var t=kg(i);return t+8>i.length&&Dn(6,"invalid gzip data"),Og(i.subarray(t,-8),{i:2},new gn(zg(i)),e)}var Gg=typeof TextDecoder<"u"&&new TextDecoder,Hg=0;try{Gg.decode(Bg,{stream:!0}),Hg=1}catch{}const Fu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Lu=([i,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(e).forEach(s=>{n.setAttribute(s,String(e[s]))}),t?.length&&t.forEach(s=>{const o=Lu(s);n.appendChild(o)}),n},Wg=(i,e={})=>{const n={...Fu,...e};return Lu(["svg",n,i])};const $g=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const Xg=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const qg=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const jg=i=>{const e=qg(i);return e.charAt(0).toUpperCase()+e.slice(1)};const Yg=i=>Array.from(i.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),_c=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",vc=(i,{nameAttr:e,icons:t,attrs:n})=>{const s=i.getAttribute(e);if(s==null)return;const o=jg(s),c=t[o];if(!c)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const d=Yg(i),p=$g(d)?{}:{"aria-hidden":"true"},h={...Fu,"data-lucide":s,...p,...n,...d},m=_c(d),_=_c(n),g=Xg("lucide",`lucide-${s}`,...m,..._);g&&Object.assign(h,{class:g});const v=Wg(c,h);return i.parentNode?.replaceChild(v,i)};const Kg=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];const Zg=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];const Jg=[["path",{d:"m6 9 6 6 6-6"}]];const Qg=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];const e_=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];const t_=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];const n_=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];const i_=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];const r_=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const a_=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];const s_=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const o_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const l_=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];const c_=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const u_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];const d_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];const f_=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const Iu=({icons:i={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:s}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(c=>vc(c,{nameAttr:e,icons:i,attrs:t})),s&&Array.from(n.querySelectorAll("template")).forEach(d=>Iu({icons:i,nameAttr:e,attrs:t,root:d.content,inTemplates:s})),e==="data-lucide"){const c=n.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(d=>vc(d,{nameAttr:"icon-name",icons:i,attrs:t})))}},Fn=(i,e=-1,t=1)=>Math.min(t,Math.max(e,i)),Wr=([i,e,t,n])=>[1-2*(t*t+n*n),2*(e*t-i*n),2*(e*n+i*t),2*(e*t+i*n),1-2*(e*e+n*n),2*(t*n-i*e),2*(e*n-i*t),2*(t*n+i*e),1-2*(e*e+t*t)],xc=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]],Sc=(i,e)=>[i[0]*e[0]+i[3]*e[1]+i[6]*e[2],i[1]*e[0]+i[4]*e[1]+i[7]*e[2],i[2]*e[0]+i[5]*e[1]+i[8]*e[2]];class h_{constructor(e){this.source=e,this.metadata=e.metadata}predict(e,t=!0){let n=Float32Array.from(e);if(n.length!==this.source.w0[0].length||!n.every(Number.isFinite))throw new Error("Invalid policy observation");for(let s=0;s<3;s++){const o=this.source[`w${s}`],c=this.source[`b${s}`],d=new Float32Array(o.length);for(let p=0;p<o.length;p++){let h=c[p];for(let m=0;m<n.length;m++)h+=o[p][m]*n[m];d[p]=s<2&&h<0?Math.expm1(h):h}n=d}return Array.from(n,s=>t?Fn(s):s)}}class p_{constructor(e,t,n,s){this.mj=e;const o=new e.MjVFS;o.addBuffer("scene.mjb",t),this.model=e.MjModel.from_binary_path("scene.mjb",o),o.delete(),this.data=new e.MjData(this.model),this.contactForce=new e.DoubleBuffer(6);const c=this.model.body("drone");this.bodyId=c.id,c.delete();const d=this.model.geom("drone_collision");this.collisionId=d.id,d.delete(),this.gates=n.gates.map(p=>p.map(Math.fround)),this.policies=Object.fromEntries(Object.entries(s).map(([p,h])=>[p,new h_(h)])),this.weight=this.model.body_mass.reduce((p,h)=>p+h,0)*9.81,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.mode="expert",this.alpha=.8,this.skill=0,this.effectiveAlpha=1,this.reset()}get position(){return Array.from(this.data.qpos.subarray(0,3))}get quaternion(){return Array.from(this.data.qpos.subarray(3,7))}gateCoordinates(e,t=this.gate){const n=this.gates[t],s=e[0]-n[0],o=e[1]-n[1],c=Math.cos(n[5]),d=Math.sin(n[5]);return[c*s+d*o,-d*s+c*o,e[2]-n[2]]}reset(e=0,t=0){const n=this.mj,s=this.data,o=this.gates[e];n.mj_resetData(this.model,s),this.gate=e,s.qpos.set([o[0]+6*Math.cos(o[5]),o[1]+6*Math.sin(o[5]),o[2]],0);let c=o[5]+Math.PI+t;c=((c+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,s.qpos.set([Math.cos(c/2),0,0,Math.sin(c/2)],3),s.qvel.set([200,-200,200,-200],6),this.motors=[0,0,0,0],this.integral=[0,0,0],this.previousOmega=[0,0,0],this.steps=0,this.gatesPassed=0,this.lastGateTime=0,this.crashes=0,this.lapStart=null,n.mj_forward(this.model,s),this.previousPosition=this.position,this.cachedGate=this.gateCoordinates(this.position),this.lastAction=[-1+2/3.15,0,0,0],this.lastHuman=[0,0,0,0]}observation(){const e=this.data.qvel;return Float32Array.from([...e.subarray(3,6),...this.position,...Sc(Wr(this.quaternion),e.subarray(0,3)),...this.quaternion,...this.cachedGate,this.gates[this.gate][5]])}controller(e){const t=Array.from(this.data.qvel.subarray(3,6)),n=Sc(Wr(this.quaternion),this.data.qvel.subarray(0,3)),s=[250,250,120],o=[500,500,16.7],c=[2.5,2.5,0],d=[33.3,33.3,166.7],p=[16572e-9,16656e-9,29262e-9],h=t.map((L,O)=>{const C=e[O+1]*(O===2?200:100)*Math.PI/180-L;this.integral[O]=Fn(this.integral[O]+C/250,-d[O],d[O]);const W=Math.abs(this.previousOmega[O])<1e-4?L:this.previousOmega[O];return p[O]*(s[O]*C+o[O]*this.integral[O]-c[O]*(L-W)*250)});this.previousOmega=t;const m=(e[0]+1)/2*this.weight*3.15,_=.043*Math.sqrt(2)/2,g=78e-11/23e-9,[v,b,P]=[h[0]/_,h[1]/_,h[2]/g],E=[m+v-b+P,m-v-b-P,m-v+b+P,m+v+b-P].map(L=>L/(4*23e-9));for(let L=0;L<4;L++){const O=Fn(Math.sign(E[L])*Math.sqrt(Math.abs(E[L])),0,2500);this.motors[L]=Fn(this.motors[L]+(O-this.motors[L])*.004/.005,0,2500)}const S=this.motors.map(L=>23e-9*L*L),D=this.motors.reduce((L,O)=>L+O,0),F=n.map((L,O)=>-D*[91785e-11,91785e-11,10311e-10][O]*L);return F[2]+=S.reduce((L,O)=>L+O,0),{force:F,moment:[_*(S[0]-S[1]-S[2]+S[3]),_*(-S[0]-S[1]+S[2]+S[3]),g*(S[0]-S[1]+S[2]-S[3])]}}action(e=[-1+2/3.15,0,0,0]){const t=this.observation(),n=this.policies.expert.predict(t);if(this.lastHuman=[...e],this.mode==="expert")return this.effectiveAlpha=1,n;if(this.mode==="manual")return this.effectiveAlpha=0,e.map(o=>Fn(o));if(this.mode==="tracking")return this.effectiveAlpha=1,this.policies.tracking.predict([...t,e[1],e[3]]);let s=this.alpha;if(this.mode==="coach"){const o=this.policies.coach.predict([...t,this.skill],!1)[0];s=1/(1+Math.exp(-Fn((o-2357.8374)/2786.9996,-80,80)))}return this.effectiveAlpha=Fn(s,.3,1),n.map((o,c)=>c===1||c===3?Fn(this.effectiveAlpha*o+(1-this.effectiveAlpha)*e[c]):o)}step(e){if(e.length!==4||!e.every(Number.isFinite))throw new Error("Invalid action");e=Array.from(e,g=>Fn(g)),this.lastAction=e;const t=this.data,n=this.mj;for(let g=0;g<5;g++){const{force:v,moment:b}=this.controller(e),P=Wr(this.quaternion);t.xfrc_applied.fill(0),t.xfrc_applied.set([...xc(P,v),...xc(P,b)],this.bodyId*6),n.mj_step(this.model,t),n.mj_forward(this.model,t)}this.steps++;const s=this.steps*.02,o=this.position;this.cachedGate=this.gateCoordinates(o);const c=this.crashes?"Contact":o[2]>6||o[2]<.1&&s>1.5?"Altitude":s-this.lastGateTime>7?"Gate timeout":"",d=this.gateCoordinates(this.previousPosition),p=this.cachedGate,h=p[0]-d[0],m=-d[0]/(h+1e-8),_=h<-1e-6&&Math.hypot(...o.map((g,v)=>g-this.previousPosition[v]))>1e-6&&m>=0&&m<=1&&Math.abs(d[1]+m*(p[1]-d[1]))<=.5&&Math.abs(d[2]+m*(p[2]-d[2]))<=.5;if(_&&(this.gate=(this.gate+1)%12,this.totalGates++,this.gatesPassed++,this.lastGateTime=s,this.gate===1&&(this.lapStart!==null&&(this.lastLap=s-this.lapStart,this.laps++,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap)),this.lapStart=s)),this.previousPosition=o,this.steps>100&&t.ncon){const g=t.contact;for(let v=0;v<t.ncon;v++){const b=g.get(v),P=b.geom1===this.collisionId||b.geom2===this.collisionId;if(b.delete(),P){n.mj_contactForce(this.model,t,v,this.contactForce);const E=this.contactForce.GetView();this.crashes+=Math.hypot(...E.subarray(0,3))>1e-8?1:0;break}}g.delete()}return c&&this.failures++,{crossed:_,failed:!!c,cause:c}}snapshot(){return{mode:this.mode,steps:this.steps,position:this.position,gates:this.totalGates,target:this.gate,laps:this.laps,failures:this.failures,alpha:this.effectiveAlpha}}dispose(){this.contactForce.delete(),this.data.delete(),this.model.delete()}}const fl="183",m_=0,yc=1,g_=2,Za=1,__=2,kr=3,Pi=0,hn=1,Ln=2,hi=0,vr=1,Ec=2,Mc=3,bc=4,v_=5,qi=100,x_=101,S_=102,y_=103,E_=104,M_=200,b_=201,T_=202,w_=203,So=204,yo=205,A_=206,R_=207,C_=208,P_=209,D_=210,F_=211,L_=212,I_=213,U_=214,Eo=0,Mo=1,bo=2,Sr=3,To=4,wo=5,Ao=6,Ro=7,Uu=0,N_=1,O_=2,Jn=0,Nu=1,Ou=2,Bu=3,hl=4,ku=5,zu=6,Vu=7,Gu=300,Zi=301,yr=302,Is=303,Us=304,ls=306,as=1e3,di=1001,Co=1002,Jt=1003,B_=1004,Ra=1005,an=1006,Ns=1007,Yi=1008,_n=1009,Hu=1010,Wu=1011,qr=1012,pl=1013,ei=1014,Yn=1015,mi=1016,ml=1017,gl=1018,jr=1020,$u=35902,Xu=35899,qu=1021,ju=1022,Un=1023,gi=1026,Ki=1027,Yu=1028,_l=1029,Er=1030,vl=1031,xl=1033,Ja=33776,Qa=33777,es=33778,ts=33779,Po=35840,Do=35841,Fo=35842,Lo=35843,Io=36196,Uo=37492,No=37496,Oo=37488,Bo=37489,ko=37490,zo=37491,Vo=37808,Go=37809,Ho=37810,Wo=37811,$o=37812,Xo=37813,qo=37814,jo=37815,Yo=37816,Ko=37817,Zo=37818,Jo=37819,Qo=37820,el=37821,tl=36492,nl=36494,il=36495,rl=36283,al=36284,sl=36285,ol=36286,k_=3200,Ku=0,z_=1,Ri="",dn="srgb",Mr="srgb-linear",ss="linear",Ct="srgb",tr=7680,Tc=519,V_=512,G_=513,H_=514,Sl=515,W_=516,$_=517,yl=518,X_=519,wc=35044,Ac="300 es",Kn=2e3,Yr=2001;function q_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function j_(){const i=Kr("canvas");return i.style.display="block",i}const Rc={};function Cc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Zu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=Zu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Et(...i){i=Zu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function os(...i){const e=i.join(" ");e in Rc||(Rc[e]=!0,et(...i))}function Y_(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const K_={[Eo]:Mo,[bo]:Ao,[To]:Ro,[Sr]:wo,[Mo]:Eo,[Ao]:bo,[Ro]:To,[wo]:Sr};class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,ll=180/Math.PI;function Qr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Z_(i,e){return(i%e+e)%e}function Bs(i,e,t){return(1-t)*i+t*e}function Fr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*s+e.x,this.y=o*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,c,d){let p=n[s+0],h=n[s+1],m=n[s+2],_=n[s+3],g=o[c+0],v=o[c+1],b=o[c+2],P=o[c+3];if(_!==P||p!==g||h!==v||m!==b){let E=p*g+h*v+m*b+_*P;E<0&&(g=-g,v=-v,b=-b,P=-P,E=-E);let S=1-d;if(E<.9995){const D=Math.acos(E),F=Math.sin(D);S=Math.sin(S*D)/F,d=Math.sin(d*D)/F,p=p*S+g*d,h=h*S+v*d,m=m*S+b*d,_=_*S+P*d}else{p=p*S+g*d,h=h*S+v*d,m=m*S+b*d,_=_*S+P*d;const D=1/Math.sqrt(p*p+h*h+m*m+_*_);p*=D,h*=D,m*=D,_*=D}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,o,c){const d=n[s],p=n[s+1],h=n[s+2],m=n[s+3],_=o[c],g=o[c+1],v=o[c+2],b=o[c+3];return e[t]=d*b+m*_+p*v-h*g,e[t+1]=p*b+m*g+h*_-d*v,e[t+2]=h*b+m*v+d*g-p*_,e[t+3]=m*b-d*_-p*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,c=e._order,d=Math.cos,p=Math.sin,h=d(n/2),m=d(s/2),_=d(o/2),g=p(n/2),v=p(s/2),b=p(o/2);switch(c){case"XYZ":this._x=g*m*_+h*v*b,this._y=h*v*_-g*m*b,this._z=h*m*b+g*v*_,this._w=h*m*_-g*v*b;break;case"YXZ":this._x=g*m*_+h*v*b,this._y=h*v*_-g*m*b,this._z=h*m*b-g*v*_,this._w=h*m*_+g*v*b;break;case"ZXY":this._x=g*m*_-h*v*b,this._y=h*v*_+g*m*b,this._z=h*m*b+g*v*_,this._w=h*m*_-g*v*b;break;case"ZYX":this._x=g*m*_-h*v*b,this._y=h*v*_+g*m*b,this._z=h*m*b-g*v*_,this._w=h*m*_+g*v*b;break;case"YZX":this._x=g*m*_+h*v*b,this._y=h*v*_+g*m*b,this._z=h*m*b-g*v*_,this._w=h*m*_-g*v*b;break;case"XZY":this._x=g*m*_-h*v*b,this._y=h*v*_-g*m*b,this._z=h*m*b+g*v*_,this._w=h*m*_+g*v*b;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],c=t[1],d=t[5],p=t[9],h=t[2],m=t[6],_=t[10],g=n+d+_;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(m-p)*v,this._y=(o-h)*v,this._z=(c-s)*v}else if(n>d&&n>_){const v=2*Math.sqrt(1+n-d-_);this._w=(m-p)/v,this._x=.25*v,this._y=(s+c)/v,this._z=(o+h)/v}else if(d>_){const v=2*Math.sqrt(1+d-n-_);this._w=(o-h)/v,this._x=(s+c)/v,this._y=.25*v,this._z=(p+m)/v}else{const v=2*Math.sqrt(1+_-n-d);this._w=(c-s)/v,this._x=(o+h)/v,this._y=(p+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,c=e._w,d=t._x,p=t._y,h=t._z,m=t._w;return this._x=n*m+c*d+s*h-o*p,this._y=s*m+c*p+o*d-n*h,this._z=o*m+c*h+n*p-s*d,this._w=c*m-n*d-s*p-o*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,o=e._z,c=e._w,d=this.dot(e);d<0&&(n=-n,s=-s,o=-o,c=-c,d=-d);let p=1-t;if(d<.9995){const h=Math.acos(d),m=Math.sin(h);p=Math.sin(p*h)/m,t=Math.sin(t*h)/m,this._x=this._x*p+n*t,this._y=this._y*p+s*t,this._z=this._z*p+o*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+n*t,this._y=this._y*p+s*t,this._z=this._z*p+o*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,c=e.y,d=e.z,p=e.w,h=2*(c*s-d*n),m=2*(d*t-o*s),_=2*(o*n-c*t);return this.x=t+p*h+c*_-d*m,this.y=n+p*m+d*h-o*_,this.z=s+p*_+o*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,c=t.x,d=t.y,p=t.z;return this.x=s*p-o*d,this.y=o*c-n*p,this.z=n*d-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ks.copy(this).projectOnVector(e),this.sub(ks)}reflect(e){return this.sub(ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new ee,Pc=new Zn;class rt{constructor(e,t,n,s,o,c,d,p,h){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,c,d,p,h)}set(e,t,n,s,o,c,d,p,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=d,m[3]=t,m[4]=o,m[5]=p,m[6]=n,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,c=n[0],d=n[3],p=n[6],h=n[1],m=n[4],_=n[7],g=n[2],v=n[5],b=n[8],P=s[0],E=s[3],S=s[6],D=s[1],F=s[4],L=s[7],O=s[2],C=s[5],W=s[8];return o[0]=c*P+d*D+p*O,o[3]=c*E+d*F+p*C,o[6]=c*S+d*L+p*W,o[1]=h*P+m*D+_*O,o[4]=h*E+m*F+_*C,o[7]=h*S+m*L+_*W,o[2]=g*P+v*D+b*O,o[5]=g*E+v*F+b*C,o[8]=g*S+v*L+b*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],d=e[5],p=e[6],h=e[7],m=e[8];return t*c*m-t*d*h-n*o*m+n*d*p+s*o*h-s*c*p}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],d=e[5],p=e[6],h=e[7],m=e[8],_=m*c-d*h,g=d*p-m*o,v=h*o-c*p,b=t*_+n*g+s*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=_*P,e[1]=(s*h-m*n)*P,e[2]=(d*n-s*c)*P,e[3]=g*P,e[4]=(m*t-s*p)*P,e[5]=(s*o-d*t)*P,e[6]=v*P,e[7]=(n*p-h*t)*P,e[8]=(c*t-n*o)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,c,d){const p=Math.cos(o),h=Math.sin(o);return this.set(n*p,n*h,-n*(p*c+h*d)+c+e,-s*h,s*p,-s*(-h*c+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new rt,Dc=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J_(){const i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ct&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ct&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:e,whitePoint:n,transfer:ss,toXYZ:Dc,fromXYZ:Fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Dc,fromXYZ:Fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}const St=J_();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let nr;class Q_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nr===void 0&&(nr=Kr("canvas")),nr.width=e.width,nr.height=e.height;const s=nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=pi(o[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ev=0;class El{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Qr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,d=s.length;c<d;c++)s[c].isDataTexture?o.push(Vs(s[c].image)):o.push(Vs(s[c]))}else o=Vs(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Q_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let tv=0;const Gs=new ee;class sn extends wr{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=di,s=di,o=an,c=Yi,d=Un,p=_n,h=sn.DEFAULT_ANISOTROPY,m=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Qr(),this.name="",this.source=new El(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gs).x}get height(){return this.source.getSize(Gs).y}get depth(){return this.source.getSize(Gs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Gu;sn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,s=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const p=e.elements,h=p[0],m=p[4],_=p[8],g=p[1],v=p[5],b=p[9],P=p[2],E=p[6],S=p[10];if(Math.abs(m-g)<.01&&Math.abs(_-P)<.01&&Math.abs(b-E)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+P)<.1&&Math.abs(b+E)<.1&&Math.abs(h+v+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,L=(v+1)/2,O=(S+1)/2,C=(m+g)/4,W=(_+P)/4,A=(b+E)/4;return F>L&&F>O?F<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(F),s=C/n,o=W/n):L>O?L<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(L),n=C/s,o=A/s):O<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),n=W/o,s=A/o),this.set(n,s,o,t),this}let D=Math.sqrt((E-b)*(E-b)+(_-P)*(_-P)+(g-m)*(g-m));return Math.abs(D)<.001&&(D=1),this.x=(E-b)/D,this.y=(_-P)/D,this.z=(g-m)/D,this.w=Math.acos((h+v+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nv extends wr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},o=new sn(s),c=n.count;for(let d=0;d<c;d++)this.textures[d]=o.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new El(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends nv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ju extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iv extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ot{constructor(e,t,n,s,o,c,d,p,h,m,_,g,v,b,P,E){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,c,d,p,h,m,_,g,v,b,P,E)}set(e,t,n,s,o,c,d,p,h,m,_,g,v,b,P,E){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=s,S[1]=o,S[5]=c,S[9]=d,S[13]=p,S[2]=h,S[6]=m,S[10]=_,S[14]=g,S[3]=v,S[7]=b,S[11]=P,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ir.setFromMatrixColumn(e,0).length(),o=1/ir.setFromMatrixColumn(e,1).length(),c=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,c=Math.cos(n),d=Math.sin(n),p=Math.cos(s),h=Math.sin(s),m=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const g=c*m,v=c*_,b=d*m,P=d*_;t[0]=p*m,t[4]=-p*_,t[8]=h,t[1]=v+b*h,t[5]=g-P*h,t[9]=-d*p,t[2]=P-g*h,t[6]=b+v*h,t[10]=c*p}else if(e.order==="YXZ"){const g=p*m,v=p*_,b=h*m,P=h*_;t[0]=g+P*d,t[4]=b*d-v,t[8]=c*h,t[1]=c*_,t[5]=c*m,t[9]=-d,t[2]=v*d-b,t[6]=P+g*d,t[10]=c*p}else if(e.order==="ZXY"){const g=p*m,v=p*_,b=h*m,P=h*_;t[0]=g-P*d,t[4]=-c*_,t[8]=b+v*d,t[1]=v+b*d,t[5]=c*m,t[9]=P-g*d,t[2]=-c*h,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){const g=c*m,v=c*_,b=d*m,P=d*_;t[0]=p*m,t[4]=b*h-v,t[8]=g*h+P,t[1]=p*_,t[5]=P*h+g,t[9]=v*h-b,t[2]=-h,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){const g=c*p,v=c*h,b=d*p,P=d*h;t[0]=p*m,t[4]=P-g*_,t[8]=b*_+v,t[1]=_,t[5]=c*m,t[9]=-d*m,t[2]=-h*m,t[6]=v*_+b,t[10]=g-P*_}else if(e.order==="XZY"){const g=c*p,v=c*h,b=d*p,P=d*h;t[0]=p*m,t[4]=-_,t[8]=h*m,t[1]=g*_+P,t[5]=c*m,t[9]=v*_-b,t[2]=b*_-v,t[6]=d*m,t[10]=P*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,av)}lookAt(e,t,n){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ei.crossVectors(n,pn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ei.crossVectors(n,pn)),Ei.normalize(),Ca.crossVectors(pn,Ei),s[0]=Ei.x,s[4]=Ca.x,s[8]=pn.x,s[1]=Ei.y,s[5]=Ca.y,s[9]=pn.y,s[2]=Ei.z,s[6]=Ca.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,c=n[0],d=n[4],p=n[8],h=n[12],m=n[1],_=n[5],g=n[9],v=n[13],b=n[2],P=n[6],E=n[10],S=n[14],D=n[3],F=n[7],L=n[11],O=n[15],C=s[0],W=s[4],A=s[8],I=s[12],k=s[1],z=s[5],ne=s[9],te=s[13],Q=s[2],re=s[6],Z=s[10],J=s[14],Se=s[3],pe=s[7],Ce=s[11],Ie=s[15];return o[0]=c*C+d*k+p*Q+h*Se,o[4]=c*W+d*z+p*re+h*pe,o[8]=c*A+d*ne+p*Z+h*Ce,o[12]=c*I+d*te+p*J+h*Ie,o[1]=m*C+_*k+g*Q+v*Se,o[5]=m*W+_*z+g*re+v*pe,o[9]=m*A+_*ne+g*Z+v*Ce,o[13]=m*I+_*te+g*J+v*Ie,o[2]=b*C+P*k+E*Q+S*Se,o[6]=b*W+P*z+E*re+S*pe,o[10]=b*A+P*ne+E*Z+S*Ce,o[14]=b*I+P*te+E*J+S*Ie,o[3]=D*C+F*k+L*Q+O*Se,o[7]=D*W+F*z+L*re+O*pe,o[11]=D*A+F*ne+L*Z+O*Ce,o[15]=D*I+F*te+L*J+O*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],c=e[1],d=e[5],p=e[9],h=e[13],m=e[2],_=e[6],g=e[10],v=e[14],b=e[3],P=e[7],E=e[11],S=e[15],D=p*v-h*g,F=d*v-h*_,L=d*g-p*_,O=c*v-h*m,C=c*g-p*m,W=c*_-d*m;return t*(P*D-E*F+S*L)-n*(b*D-E*O+S*C)+s*(b*F-P*O+S*W)-o*(b*L-P*C+E*W)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],d=e[5],p=e[6],h=e[7],m=e[8],_=e[9],g=e[10],v=e[11],b=e[12],P=e[13],E=e[14],S=e[15],D=t*d-n*c,F=t*p-s*c,L=t*h-o*c,O=n*p-s*d,C=n*h-o*d,W=s*h-o*p,A=m*P-_*b,I=m*E-g*b,k=m*S-v*b,z=_*E-g*P,ne=_*S-v*P,te=g*S-v*E,Q=D*te-F*ne+L*z+O*k-C*I+W*A;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/Q;return e[0]=(d*te-p*ne+h*z)*re,e[1]=(s*ne-n*te-o*z)*re,e[2]=(P*W-E*C+S*O)*re,e[3]=(g*C-_*W-v*O)*re,e[4]=(p*k-c*te-h*I)*re,e[5]=(t*te-s*k+o*I)*re,e[6]=(E*L-b*W-S*F)*re,e[7]=(m*W-g*L+v*F)*re,e[8]=(c*ne-d*k+h*A)*re,e[9]=(n*k-t*ne-o*A)*re,e[10]=(b*C-P*L+S*D)*re,e[11]=(_*L-m*C-v*D)*re,e[12]=(d*I-c*z-p*A)*re,e[13]=(t*z-n*I+s*A)*re,e[14]=(P*F-b*O-E*D)*re,e[15]=(m*O-_*F+g*D)*re,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,c=e.x,d=e.y,p=e.z,h=o*c,m=o*d;return this.set(h*c+n,h*d-s*p,h*p+s*d,0,h*d+s*p,m*d+n,m*p-s*c,0,h*p-s*d,m*p+s*c,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,c){return this.set(1,n,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,c=t._y,d=t._z,p=t._w,h=o+o,m=c+c,_=d+d,g=o*h,v=o*m,b=o*_,P=c*m,E=c*_,S=d*_,D=p*h,F=p*m,L=p*_,O=n.x,C=n.y,W=n.z;return s[0]=(1-(P+S))*O,s[1]=(v+L)*O,s[2]=(b-F)*O,s[3]=0,s[4]=(v-L)*C,s[5]=(1-(g+S))*C,s[6]=(E+D)*C,s[7]=0,s[8]=(b+F)*W,s[9]=(E-D)*W,s[10]=(1-(g+P))*W,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return n.set(1,1,1),t.identity(),this;let c=ir.set(s[0],s[1],s[2]).length();const d=ir.set(s[4],s[5],s[6]).length(),p=ir.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Rn.copy(this);const h=1/c,m=1/d,_=1/p;return Rn.elements[0]*=h,Rn.elements[1]*=h,Rn.elements[2]*=h,Rn.elements[4]*=m,Rn.elements[5]*=m,Rn.elements[6]*=m,Rn.elements[8]*=_,Rn.elements[9]*=_,Rn.elements[10]*=_,t.setFromRotationMatrix(Rn),n.x=c,n.y=d,n.z=p,this}makePerspective(e,t,n,s,o,c,d=Kn,p=!1){const h=this.elements,m=2*o/(t-e),_=2*o/(n-s),g=(t+e)/(t-e),v=(n+s)/(n-s);let b,P;if(p)b=o/(c-o),P=c*o/(c-o);else if(d===Kn)b=-(c+o)/(c-o),P=-2*c*o/(c-o);else if(d===Yr)b=-c/(c-o),P=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,o,c,d=Kn,p=!1){const h=this.elements,m=2/(t-e),_=2/(n-s),g=-(t+e)/(t-e),v=-(n+s)/(n-s);let b,P;if(p)b=1/(c-o),P=c/(c-o);else if(d===Kn)b=-2/(c-o),P=-(c+o)/(c-o);else if(d===Yr)b=-1/(c-o),P=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=b,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new ee,Rn=new Ot,rv=new ee(0,0,0),av=new ee(1,1,1),Ei=new ee,Ca=new ee,pn=new ee,Lc=new Ot,Ic=new Zn;class ti{constructor(e=0,t=0,n=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],c=s[4],d=s[8],p=s[1],h=s[5],m=s[9],_=s[2],g=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,v),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-pt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(d,v));break;case"XZY":this._z=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-m,v),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sv=0;const Uc=new ee,rr=new Zn,ai=new Ot,Pa=new ee,Lr=new ee,ov=new ee,lv=new Zn,Nc=new ee(1,0,0),Oc=new ee(0,1,0),Bc=new ee(0,0,1),kc={type:"added"},cv={type:"removed"},ar={type:"childadded",child:null},Hs={type:"childremoved",child:null};class Qt extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new ee,t=new ti,n=new Zn,s=new ee(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new rt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(Nc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Lr,Pa,this.up):ai.lookAt(Pa,Lr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(ai),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),ar.child=e,this.dispatchEvent(ar),ar.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cv),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*s,o[13]+=n-o[1]*t-o[5]*n-o[9]*s,o[14]+=s-o[2]*t-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const _=p[h];o(e.shapes,_)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(o(e.materials,this.material[p]));s.material=d}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];s.animations.push(o(e.animations,p))}}if(t){const d=c(e.geometries),p=c(e.materials),h=c(e.textures),m=c(e.images),_=c(e.shapes),g=c(e.skeletons),v=c(e.animations),b=c(e.nodes);d.length>0&&(n.geometries=d),p.length>0&&(n.materials=p),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=s,n;function c(d){const p=[];for(const h in d){const m=d[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Qt.DEFAULT_UP=new ee(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,c=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const P of e.hand.values()){const E=t.getJointPose(P,n),S=this._getHandJoint(h,P);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=m.position.distanceTo(_.position),v=.02,b=.005;h.inputState.pinching&&g>v+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return d!==null&&(d.visible=s!==null),p!==null&&(p.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Da;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function $s(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=St.workingColorSpace){if(e=Z_(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=$s(c,o,e+1/3),this.g=$s(c,o,e),this.b=$s(c,o,e-1/3)}return St.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function n(o){o!==void 0&&parseFloat(o)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],d=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return St.workingToColorSpace(rn.copy(this),e),Math.round(pt(rn.r*255,0,255))*65536+Math.round(pt(rn.g*255,0,255))*256+Math.round(pt(rn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(rn.copy(this),t);const n=rn.r,s=rn.g,o=rn.b,c=Math.max(n,s,o),d=Math.min(n,s,o);let p,h;const m=(d+c)/2;if(d===c)p=0,h=0;else{const _=c-d;switch(h=m<=.5?_/(c+d):_/(2-c-d),c){case n:p=(s-o)/_+(s<o?6:0);break;case s:p=(o-n)/_+2;break;case o:p=(n-s)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=dn){St.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,s=rn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Fa);const n=Bs(Mi.h,Fa.h,t),s=Bs(Mi.s,Fa.s,t),o=Bs(Mi.l,Fa.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new gt;gt.NAMES=ed;class dv extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new ee,si=new ee,Xs=new ee,oi=new ee,sr=new ee,or=new ee,zc=new ee,qs=new ee,js=new ee,Ys=new ee,Ks=new kt,Zs=new kt,Js=new kt;class In{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Cn.subVectors(s,t),si.subVectors(n,t),Xs.subVectors(e,t);const c=Cn.dot(Cn),d=Cn.dot(si),p=Cn.dot(Xs),h=si.dot(si),m=si.dot(Xs),_=c*h-d*d;if(_===0)return o.set(0,0,0),null;const g=1/_,v=(h*p-d*m)*g,b=(c*m-d*p)*g;return o.set(1-v-b,b,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,o,c,d,p){return this.getBarycoord(e,t,n,s,oi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,oi.x),p.addScaledVector(c,oi.y),p.addScaledVector(d,oi.z),p)}static getInterpolatedAttribute(e,t,n,s,o,c){return Ks.setScalar(0),Zs.setScalar(0),Js.setScalar(0),Ks.fromBufferAttribute(e,t),Zs.fromBufferAttribute(e,n),Js.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Ks,o.x),c.addScaledVector(Zs,o.y),c.addScaledVector(Js,o.z),c}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),si.subVectors(e,t),Cn.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Cn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return In.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let c,d;sr.subVectors(s,n),or.subVectors(o,n),qs.subVectors(e,n);const p=sr.dot(qs),h=or.dot(qs);if(p<=0&&h<=0)return t.copy(n);js.subVectors(e,s);const m=sr.dot(js),_=or.dot(js);if(m>=0&&_<=m)return t.copy(s);const g=p*_-m*h;if(g<=0&&p>=0&&m<=0)return c=p/(p-m),t.copy(n).addScaledVector(sr,c);Ys.subVectors(e,o);const v=sr.dot(Ys),b=or.dot(Ys);if(b>=0&&v<=b)return t.copy(o);const P=v*h-p*b;if(P<=0&&h>=0&&b<=0)return d=h/(h-b),t.copy(n).addScaledVector(or,d);const E=m*b-v*_;if(E<=0&&_-m>=0&&v-b>=0)return zc.subVectors(o,s),d=(_-m)/(_-m+(v-b)),t.copy(s).addScaledVector(zc,d);const S=1/(E+P+g);return c=P*S,d=g*S,t.copy(n).addScaledVector(sr,c).addScaledVector(or,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ea{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=o.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Pn):Pn.fromBufferAttribute(o,c),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),Ia.subVectors(this.max,Ir),lr.subVectors(e.a,Ir),cr.subVectors(e.b,Ir),ur.subVectors(e.c,Ir),bi.subVectors(cr,lr),Ti.subVectors(ur,cr),zi.subVectors(lr,ur);let t=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-zi.z,zi.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,zi.z,0,-zi.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-zi.y,zi.x,0];return!Qs(t,lr,cr,ur,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,lr,cr,ur,Ia))?!1:(Ua.crossVectors(bi,Ti),t=[Ua.x,Ua.y,Ua.z],Qs(t,lr,cr,ur,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Pn=new ee,La=new ea,lr=new ee,cr=new ee,ur=new ee,bi=new ee,Ti=new ee,zi=new ee,Ir=new ee,Ia=new ee,Ua=new ee,Vi=new ee;function Qs(i,e,t,n,s){for(let o=0,c=i.length-3;o<=c;o+=3){Vi.fromArray(i,o);const d=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),p=e.dot(Vi),h=t.dot(Vi),m=n.dot(Vi);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>d)return!1}return!0}const Vt=new ee,Na=new bt;let fv=0;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),n=cn(n,this.array),s=cn(s,this.array),o=cn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}}class td extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nd extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mn extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}const hv=new ea,Ur=new ee,eo=new ee;class Ml{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hv.setFromPoints(e).getCenter(n);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(eo)),this.expandByPoint(Ur.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pv=0;const yn=new Ot,to=new Qt,dr=new ee,mn=new ea,Nr=new ea,Kt=new ee;class kn extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?nd:td)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new rt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const d=t[o];Nr.setFromBufferAttribute(d),this.morphTargetsRelative?(Kt.addVectors(mn.min,Nr.min),mn.expandByPoint(Kt),Kt.addVectors(mn.max,Nr.max),mn.expandByPoint(Kt)):(mn.expandByPoint(Nr.min),mn.expandByPoint(Nr.max))}mn.getCenter(n);let s=0;for(let o=0,c=e.count;o<c;o++)Kt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let o=0,c=t.length;o<c;o++){const d=t[o],p=this.morphTargetsRelative;for(let h=0,m=d.count;h<m;h++)Kt.fromBufferAttribute(d,h),p&&(dr.fromBufferAttribute(e,h),Kt.add(dr)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let A=0;A<n.count;A++)d[A]=new ee,p[A]=new ee;const h=new ee,m=new ee,_=new ee,g=new bt,v=new bt,b=new bt,P=new ee,E=new ee;function S(A,I,k){h.fromBufferAttribute(n,A),m.fromBufferAttribute(n,I),_.fromBufferAttribute(n,k),g.fromBufferAttribute(o,A),v.fromBufferAttribute(o,I),b.fromBufferAttribute(o,k),m.sub(h),_.sub(h),v.sub(g),b.sub(g);const z=1/(v.x*b.y-b.x*v.y);isFinite(z)&&(P.copy(m).multiplyScalar(b.y).addScaledVector(_,-v.y).multiplyScalar(z),E.copy(_).multiplyScalar(v.x).addScaledVector(m,-b.x).multiplyScalar(z),d[A].add(P),d[I].add(P),d[k].add(P),p[A].add(E),p[I].add(E),p[k].add(E))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,I=D.length;A<I;++A){const k=D[A],z=k.start,ne=k.count;for(let te=z,Q=z+ne;te<Q;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const F=new ee,L=new ee,O=new ee,C=new ee;function W(A){O.fromBufferAttribute(s,A),C.copy(O);const I=d[A];F.copy(I),F.sub(O.multiplyScalar(O.dot(I))).normalize(),L.crossVectors(C,I);const z=L.dot(p[A])<0?-1:1;c.setXYZW(A,F.x,F.y,F.z,z)}for(let A=0,I=D.length;A<I;++A){const k=D[A],z=k.start,ne=k.count;for(let te=z,Q=z+ne;te<Q;te+=3)W(e.getX(te+0)),W(e.getX(te+1)),W(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const s=new ee,o=new ee,c=new ee,d=new ee,p=new ee,h=new ee,m=new ee,_=new ee;if(e)for(let g=0,v=e.count;g<v;g+=3){const b=e.getX(g+0),P=e.getX(g+1),E=e.getX(g+2);s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,P),c.fromBufferAttribute(t,E),m.subVectors(c,o),_.subVectors(s,o),m.cross(_),d.fromBufferAttribute(n,b),p.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),d.add(m),p.add(m),h.add(m),n.setXYZ(b,d.x,d.y,d.z),n.setXYZ(P,p.x,p.y,p.z),n.setXYZ(E,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)s.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,o),_.subVectors(s,o),m.cross(_),n.setXYZ(g+0,m.x,m.y,m.z),n.setXYZ(g+1,m.x,m.y,m.z),n.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(d,p){const h=d.array,m=d.itemSize,_=d.normalized,g=new h.constructor(p.length*m);let v=0,b=0;for(let P=0,E=p.length;P<E;P++){d.isInterleavedBufferAttribute?v=p[P]*d.data.stride+d.offset:v=p[P]*m;for(let S=0;S<m;S++)g[b++]=h[v++]}return new On(g,m,_)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,s=this.attributes;for(const d in s){const p=s[d],h=e(p,n);t.setAttribute(d,h)}const o=this.morphAttributes;for(const d in o){const p=[],h=o[d];for(let m=0,_=h.length;m<_;m++){const g=h[m],v=e(g,n);p.push(v)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const h=n[p];e.data.attributes[p]=h.toJSON(e.data)}const s={};let o=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let _=0,g=h.length;_<g;_++){const v=h[_];m.push(v.toJSON(e.data))}m.length>0&&(s[p]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const o=e.morphAttributes;for(const h in o){const m=[],_=o[h];for(let g=0,v=_.length;g<v;g++)m.push(_[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mv=0;class ta extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=vr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=yo,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const c=[];for(const d in o){const p=o[d];delete p.metadata,c.push(p)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ci=new ee,no=new ee,Oa=new ee,wi=new ee,io=new ee,Ba=new ee,ro=new ee;class gv{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){no.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(no);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Oa),d=wi.dot(this.direction),p=-wi.dot(Oa),h=wi.lengthSq(),m=Math.abs(1-c*c);let _,g,v,b;if(m>0)if(_=c*p-d,g=c*d-p,b=o*m,_>=0)if(g>=-b)if(g<=b){const P=1/m;_*=P,g*=P,v=_*(_+c*g+2*d)+g*(c*_+g+2*p)+h}else g=o,_=Math.max(0,-(c*g+d)),v=-_*_+g*(g+2*p)+h;else g=-o,_=Math.max(0,-(c*g+d)),v=-_*_+g*(g+2*p)+h;else g<=-b?(_=Math.max(0,-(-c*o+d)),g=_>0?-o:Math.min(Math.max(-o,-p),o),v=-_*_+g*(g+2*p)+h):g<=b?(_=0,g=Math.min(Math.max(-o,-p),o),v=g*(g+2*p)+h):(_=Math.max(0,-(c*o+d)),g=_>0?o:Math.min(Math.max(-o,-p),o),v=-_*_+g*(g+2*p)+h);else g=c>0?-o:o,_=Math.max(0,-(c*g+d)),v=-_*_+g*(g+2*p)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(no).addScaledVector(Oa,g),v}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),d=n-c,p=n+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,c,d,p;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),m>=0?(o=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(o=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),n>c||o>s||((o>n||isNaN(n))&&(n=o),(c<s||isNaN(s))&&(s=c),_>=0?(d=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(d=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),n>p||d>s)||((d>n||n!==n)&&(n=d),(p<s||s!==s)&&(s=p),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,o){io.subVectors(t,e),Ba.subVectors(n,e),ro.crossVectors(io,Ba);let c=this.direction.dot(ro),d;if(c>0){if(s)return null;d=1}else if(c<0)d=-1,c=-c;else return null;wi.subVectors(this.origin,e);const p=d*this.direction.dot(Ba.crossVectors(wi,Ba));if(p<0)return null;const h=d*this.direction.dot(io.cross(wi));if(h<0||p+h>c)return null;const m=-d*wi.dot(ro);return m<0?null:this.at(m/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bl extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vc=new Ot,Gi=new gv,ka=new Ml,Gc=new ee,za=new ee,Va=new ee,Ga=new ee,ao=new ee,Ha=new ee,Hc=new ee,Wa=new ee;class Bn extends Qt{constructor(e=new kn,t=new bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(o&&d){Ha.set(0,0,0);for(let p=0,h=o.length;p<h;p++){const m=d[p],_=o[p];m!==0&&(ao.fromBufferAttribute(_,e),c?Ha.addScaledVector(ao,m):Ha.addScaledVector(ao.sub(t),m))}t.add(Ha)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(o),Gi.copy(e.ray).recast(e.near),!(ka.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ka,Gc)===null||Gi.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Vc.copy(o).invert(),Gi.copy(e.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s;const o=this.geometry,c=this.material,d=o.index,p=o.attributes.position,h=o.attributes.uv,m=o.attributes.uv1,_=o.attributes.normal,g=o.groups,v=o.drawRange;if(d!==null)if(Array.isArray(c))for(let b=0,P=g.length;b<P;b++){const E=g[b],S=c[E.materialIndex],D=Math.max(E.start,v.start),F=Math.min(d.count,Math.min(E.start+E.count,v.start+v.count));for(let L=D,O=F;L<O;L+=3){const C=d.getX(L),W=d.getX(L+1),A=d.getX(L+2);s=$a(this,S,e,n,h,m,_,C,W,A),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=E.materialIndex,t.push(s))}}else{const b=Math.max(0,v.start),P=Math.min(d.count,v.start+v.count);for(let E=b,S=P;E<S;E+=3){const D=d.getX(E),F=d.getX(E+1),L=d.getX(E+2);s=$a(this,c,e,n,h,m,_,D,F,L),s&&(s.faceIndex=Math.floor(E/3),t.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,P=g.length;b<P;b++){const E=g[b],S=c[E.materialIndex],D=Math.max(E.start,v.start),F=Math.min(p.count,Math.min(E.start+E.count,v.start+v.count));for(let L=D,O=F;L<O;L+=3){const C=L,W=L+1,A=L+2;s=$a(this,S,e,n,h,m,_,C,W,A),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=E.materialIndex,t.push(s))}}else{const b=Math.max(0,v.start),P=Math.min(p.count,v.start+v.count);for(let E=b,S=P;E<S;E+=3){const D=E,F=E+1,L=E+2;s=$a(this,c,e,n,h,m,_,D,F,L),s&&(s.faceIndex=Math.floor(E/3),t.push(s))}}}}function _v(i,e,t,n,s,o,c,d){let p;if(e.side===hn?p=n.intersectTriangle(c,o,s,!0,d):p=n.intersectTriangle(s,o,c,e.side===Pi,d),p===null)return null;Wa.copy(d),Wa.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Wa);return h<t.near||h>t.far?null:{distance:h,point:Wa.clone(),object:i}}function $a(i,e,t,n,s,o,c,d,p,h){i.getVertexPosition(d,za),i.getVertexPosition(p,Va),i.getVertexPosition(h,Ga);const m=_v(i,e,t,n,za,Va,Ga,Hc);if(m){const _=new ee;In.getBarycoord(Hc,za,Va,Ga,_),s&&(m.uv=In.getInterpolatedAttribute(s,d,p,h,_,new bt)),o&&(m.uv1=In.getInterpolatedAttribute(o,d,p,h,_,new bt)),c&&(m.normal=In.getInterpolatedAttribute(c,d,p,h,_,new ee),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const g={a:d,b:p,c:h,normal:new ee,materialIndex:0};In.getNormal(za,Va,Ga,g.normal),m.face=g,m.barycoord=_}return m}class vv extends sn{constructor(e=null,t=1,n=1,s,o,c,d,p,h=Jt,m=Jt,_,g){super(null,c,d,p,h,m,s,o,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const so=new ee,xv=new ee,Sv=new rt;class Xi{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=so.subVectors(n,t).cross(xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(so),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sv.getNormalMatrix(e),s=this.coplanarPoint(so).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Ml,yv=new bt(.5,.5),Xa=new ee;class Tl{constructor(e=new Xi,t=new Xi,n=new Xi,s=new Xi,o=new Xi,c=new Xi){this.planes=[e,t,n,s,o,c]}set(e,t,n,s,o,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(n),d[3].copy(s),d[4].copy(o),d[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){const s=this.planes,o=e.elements,c=o[0],d=o[1],p=o[2],h=o[3],m=o[4],_=o[5],g=o[6],v=o[7],b=o[8],P=o[9],E=o[10],S=o[11],D=o[12],F=o[13],L=o[14],O=o[15];if(s[0].setComponents(h-c,v-m,S-b,O-D).normalize(),s[1].setComponents(h+c,v+m,S+b,O+D).normalize(),s[2].setComponents(h+d,v+_,S+P,O+F).normalize(),s[3].setComponents(h-d,v-_,S-P,O-F).normalize(),n)s[4].setComponents(p,g,E,L).normalize(),s[5].setComponents(h-p,v-g,S-E,O-L).normalize();else if(s[4].setComponents(h-p,v-g,S-E,O-L).normalize(),t===Kn)s[5].setComponents(h+p,v+g,S+E,O+L).normalize();else if(t===Yr)s[5].setComponents(p,g,E,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);const t=yv.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xa.x=s.normal.x>0?e.max.x:e.min.x,Xa.y=s.normal.y>0?e.max.y:e.min.y,Xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class id extends sn{constructor(e=[],t=Zi,n,s,o,c,d,p,h,m){super(e,t,n,s,o,c,d,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zr extends sn{constructor(e,t,n=ei,s,o,c,d=Jt,p=Jt,h,m=gi,_=1){if(m!==gi&&m!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,s,o,c,d,p,m,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new El(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ev extends Zr{constructor(e,t=ei,n=Zi,s,o,c=Jt,d=Jt,p,h=gi){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,n,s,o,c,d,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rd extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class na extends kn{constructor(e=1,t=1,n=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:c};const d=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const p=[],h=[],m=[],_=[];let g=0,v=0;b("z","y","x",-1,-1,n,t,e,c,o,0),b("z","y","x",1,-1,n,t,-e,c,o,1),b("x","z","y",1,1,e,n,t,s,c,2),b("x","z","y",1,-1,e,n,-t,s,c,3),b("x","y","z",1,-1,e,t,n,s,o,4),b("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(p),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(m,3)),this.setAttribute("uv",new Mn(_,2));function b(P,E,S,D,F,L,O,C,W,A,I){const k=L/W,z=O/A,ne=L/2,te=O/2,Q=C/2,re=W+1,Z=A+1;let J=0,Se=0;const pe=new ee;for(let Ce=0;Ce<Z;Ce++){const Ie=Ce*z-te;for(let Ae=0;Ae<re;Ae++){const $e=Ae*k-ne;pe[P]=$e*D,pe[E]=Ie*F,pe[S]=Q,h.push(pe.x,pe.y,pe.z),pe[P]=0,pe[E]=0,pe[S]=C>0?1:-1,m.push(pe.x,pe.y,pe.z),_.push(Ae/W),_.push(1-Ce/A),J+=1}}for(let Ce=0;Ce<A;Ce++)for(let Ie=0;Ie<W;Ie++){const Ae=g+Ie+re*Ce,$e=g+Ie+re*(Ce+1),Ze=g+(Ie+1)+re*(Ce+1),Je=g+(Ie+1)+re*Ce;p.push(Ae,$e,Je),p.push($e,Ze,Je),Se+=6}d.addGroup(v,Se,I),v+=Se,g+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cs extends kn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,c=t/2,d=Math.floor(n),p=Math.floor(s),h=d+1,m=p+1,_=e/d,g=t/p,v=[],b=[],P=[],E=[];for(let S=0;S<m;S++){const D=S*g-c;for(let F=0;F<h;F++){const L=F*_-o;b.push(L,-D,0),P.push(0,0,1),E.push(F/d),E.push(1-S/p)}}for(let S=0;S<p;S++)for(let D=0;D<d;D++){const F=D+h*S,L=D+h*(S+1),O=D+1+h*(S+1),C=D+1+h*S;v.push(F,L,C),v.push(L,O,C)}this.setIndex(v),this.setAttribute("position",new Mn(b,3)),this.setAttribute("normal",new Mn(P,3)),this.setAttribute("uv",new Mn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}function br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ln(i){const e={};for(let t=0;t<i.length;t++){const n=br(i[t]);for(const s in n)e[s]=n[s]}return e}function Mv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ad(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const bv={clone:br,merge:ln};var Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=Mv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Av extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rv extends ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cv extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pv extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Wc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Wc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Wc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Dv{constructor(e,t,n){const s=this;let o=!1,c=0,d=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){d++,o===!1&&s.onStart!==void 0&&s.onStart(m,c,d),o=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,d),c===d&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,_){return h.push(m,_),this},this.removeHandler=function(m){const _=h.indexOf(m);return _!==-1&&h.splice(_,2),this},this.getHandler=function(m){for(let _=0,g=h.length;_<g;_+=2){const v=h[_],b=h[_+1];if(v.global&&(v.lastIndex=0),v.test(m))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fv=new Dv;class wl{constructor(e){this.manager=e!==void 0?e:Fv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wl.DEFAULT_MATERIAL_NAME="__DEFAULT";const fr=new WeakMap;class Lv extends wl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=oo.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let _=fr.get(c);_===void 0&&(_=[],fr.set(c,_)),_.push({onLoad:t,onError:s})}return c}const d=Kr("img");function p(){m(),t&&t(this);const _=fr.get(this)||[];for(let g=0;g<_.length;g++){const v=_[g];v.onLoad&&v.onLoad(this)}fr.delete(this),o.manager.itemEnd(e)}function h(_){m(),s&&s(_),oo.remove(`image:${e}`);const g=fr.get(this)||[];for(let v=0;v<g.length;v++){const b=g[v];b.onError&&b.onError(_)}fr.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){d.removeEventListener("load",p,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),oo.add(`image:${e}`,d),o.manager.itemStart(e),d.src=e,d}}class Iv extends wl{constructor(e){super(e)}load(e,t,n,s){const o=new sn,c=new Lv(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){o.image=d,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class Al extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Uv extends Al{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const lo=new Ot,$c=new ee,Xc=new ee;class Nv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Yr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qa=new ee,ja=new Zn,Xn=new ee;class sd extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qa,ja,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,ja,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(qa,ja,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,ja,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new ee,qc=new bt,jc=new bt;class En extends sd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ll*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,qc,jc),t.subVectors(jc,qc)}setViewOffset(e,t,n,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;o+=c.offsetX*s/p,t-=c.offsetY*n/h,s*=c.width/p,n*=c.height/h}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Rl extends sd{constructor(e=-1,t=1,n=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,c=n+e,d=s+t,p=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,d-=m*this.view.offsetY,p=d-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ov extends Nv{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yc extends Al{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Ov}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Bv extends Al{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const hr=-90,pr=1;class kv extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(hr,pr,e,t);s.layers=this.layers,this.add(s);const o=new En(hr,pr,e,t);o.layers=this.layers,this.add(o);const c=new En(hr,pr,e,t);c.layers=this.layers,this.add(c);const d=new En(hr,pr,e,t);d.layers=this.layers,this.add(d);const p=new En(hr,pr,e,t);p.layers=this.layers,this.add(p);const h=new En(hr,pr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,c,d,p]=t;for(const h of t)this.remove(h);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,d,p,h,m]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let E=!1;e.isWebGLRenderer===!0?E=e.state.buffers.depth.getReversed():E=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,s),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,2,s),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,3,s),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(n,4,s),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,s),E&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(_,g,v),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class zv extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Kc(i,e,t,n){const s=Vv(n);switch(t){case qu:return i*e;case Yu:return i*e/s.components*s.byteLength;case _l:return i*e/s.components*s.byteLength;case Er:return i*e*2/s.components*s.byteLength;case vl:return i*e*2/s.components*s.byteLength;case ju:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case xl:return i*e*4/s.components*s.byteLength;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case es:case ts:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Do:case Lo:return Math.max(i,16)*Math.max(e,8)/4;case Po:case Fo:return Math.max(i,8)*Math.max(e,8)/2;case Io:case Uo:case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case No:case ko:case zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tl:case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rl:case al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sl:case ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vv(i){switch(i){case _n:case Hu:return{byteLength:1,components:1};case qr:case Wu:case mi:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case ei:case pl:case Yn:return{byteLength:4,components:1};case $u:case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);function od(){let i=null,e=!1,t=null,n=null;function s(o,c){t(o,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Gv(i){const e=new WeakMap;function t(d,p){const h=d.array,m=d.usage,_=h.byteLength,g=i.createBuffer();i.bindBuffer(p,g),i.bufferData(p,h,m),d.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=i.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function n(d,p,h){const m=p.array,_=p.updateRanges;if(i.bindBuffer(h,d),_.length===0)i.bufferSubData(h,0,m);else{_.sort((v,b)=>v.start-b.start);let g=0;for(let v=1;v<_.length;v++){const b=_[g],P=_[v];P.start<=b.start+b.count+1?b.count=Math.max(b.count,P.start+P.count-b.start):(++g,_[g]=P)}_.length=g+1;for(let v=0,b=_.length;v<b;v++){const P=_[v];i.bufferSubData(h,P.start*m.BYTES_PER_ELEMENT,m,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(i.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,d,p),h.version=d.version}}return{get:s,remove:o,update:c}}var Hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wv=`#ifdef USE_ALPHAHASH
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
#endif`,$v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yv=`#ifdef USE_AOMAP
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
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
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
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,f0=`#define PI 3.141592653589793
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
} // validated`,h0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,V0=`uniform sampler2D dfgLUT;
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
}`,G0=`
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ax=`float getShadowMask() {
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
}`,Rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,Kx=`#define DISTANCE
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
}`,Zx=`#define DISTANCE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eS=`uniform float scale;
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#include <common>
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
}`,iS=`uniform vec3 diffuse;
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
}`,rS=`#define LAMBERT
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
}`,aS=`#define LAMBERT
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
}`,sS=`#define MATCAP
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
}`,oS=`#define MATCAP
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
}`,lS=`#define NORMAL
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
}`,cS=`#define NORMAL
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
}`,uS=`#define PHONG
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
}`,dS=`#define PHONG
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
}`,fS=`#define STANDARD
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
}`,hS=`#define STANDARD
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
}`,pS=`#define TOON
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
}`,mS=`#define TOON
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
}`,gS=`uniform float size;
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
}`,_S=`uniform vec3 diffuse;
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
}`,vS=`#include <common>
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
}`,xS=`uniform vec3 color;
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
}`,SS=`uniform float rotation;
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
}`,yS=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Hv,alphahash_pars_fragment:Wv,alphamap_fragment:$v,alphamap_pars_fragment:Xv,alphatest_fragment:qv,alphatest_pars_fragment:jv,aomap_fragment:Yv,aomap_pars_fragment:Kv,batching_pars_vertex:Zv,batching_vertex:Jv,begin_vertex:Qv,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:u0,color_vertex:d0,common:f0,cube_uv_reflection_fragment:h0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:_0,emissivemap_pars_fragment:v0,colorspace_fragment:x0,colorspace_pars_fragment:S0,envmap_fragment:y0,envmap_common_pars_fragment:E0,envmap_pars_fragment:M0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:U0,envmap_vertex:T0,fog_vertex:w0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:D0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:L0,lights_pars_begin:I0,lights_toon_fragment:N0,lights_toon_pars_fragment:O0,lights_phong_fragment:B0,lights_phong_pars_fragment:k0,lights_physical_fragment:z0,lights_physical_pars_fragment:V0,lights_fragment_begin:G0,lights_fragment_maps:H0,lights_fragment_end:W0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:j0,map_fragment:Y0,map_pars_fragment:K0,map_particle_fragment:Z0,map_particle_pars_fragment:J0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:ex,morphinstance_vertex:tx,morphcolor_vertex:nx,morphnormal_vertex:ix,morphtarget_pars_vertex:rx,morphtarget_vertex:ax,normal_fragment_begin:sx,normal_fragment_maps:ox,normal_pars_fragment:lx,normal_pars_vertex:cx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:px,iridescence_pars_fragment:mx,opaque_fragment:gx,packing:_x,premultiplied_alpha_fragment:vx,project_vertex:xx,dithering_fragment:Sx,dithering_pars_fragment:yx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Tx,shadowmap_vertex:wx,shadowmask_pars_fragment:Ax,skinbase_vertex:Rx,skinning_pars_vertex:Cx,skinning_vertex:Px,skinnormal_vertex:Dx,specularmap_fragment:Fx,specularmap_pars_fragment:Lx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Ox,uv_pars_fragment:Bx,uv_pars_vertex:kx,uv_vertex:zx,worldpos_vertex:Vx,background_vert:Gx,background_frag:Hx,backgroundCube_vert:Wx,backgroundCube_frag:$x,cube_vert:Xx,cube_frag:qx,depth_vert:jx,depth_frag:Yx,distance_vert:Kx,distance_frag:Zx,equirect_vert:Jx,equirect_frag:Qx,linedashed_vert:eS,linedashed_frag:tS,meshbasic_vert:nS,meshbasic_frag:iS,meshlambert_vert:rS,meshlambert_frag:aS,meshmatcap_vert:sS,meshmatcap_frag:oS,meshnormal_vert:lS,meshnormal_frag:cS,meshphong_vert:uS,meshphong_frag:dS,meshphysical_vert:fS,meshphysical_frag:hS,meshtoon_vert:pS,meshtoon_frag:mS,points_vert:gS,points_frag:_S,shadow_vert:vS,shadow_frag:xS,sprite_vert:SS,sprite_frag:yS},Re={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},jn={basic:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:ln([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:ln([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new gt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:ln([Re.points,Re.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:ln([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:ln([Re.common,Re.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:ln([Re.sprite,Re.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:ln([Re.common,Re.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:ln([Re.lights,Re.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};jn.physical={uniforms:ln([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ya={r:0,b:0,g:0},Wi=new ti,ES=new Ot;function MS(i,e,t,n,s,o){const c=new gt(0);let d=s===!0?0:1,p,h,m=null,_=0,g=null;function v(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const L=D.backgroundBlurriness>0;F=e.get(F,L)}return F}function b(D){let F=!1;const L=v(D);L===null?E(c,d):L&&L.isColor&&(E(L,1),F=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function P(D,F){const L=v(F);L&&(L.isCubeTexture||L.mapping===ls)?(h===void 0&&(h=new Bn(new na(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:br(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,C,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Wi.copy(F.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ES.makeRotationFromEuler(Wi)),h.material.toneMapped=St.getTransfer(L.colorSpace)!==Ct,(m!==L||_!==L.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,m=L,_=L.version,g=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Bn(new cs(2,2),new ni({name:"BackgroundMaterial",uniforms:br(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=St.getTransfer(L.colorSpace)!==Ct,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(m!==L||_!==L.version||g!==i.toneMapping)&&(p.material.needsUpdate=!0,m=L,_=L.version,g=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function E(D,F){D.getRGB(Ya,ad(i)),t.buffers.color.setClear(Ya.r,Ya.g,Ya.b,F,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,F=1){c.set(D),d=F,E(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,E(c,d)},render:b,addToRenderList:P,dispose:S}}function bS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null);let o=s,c=!1;function d(z,ne,te,Q,re){let Z=!1;const J=_(z,Q,te,ne);o!==J&&(o=J,h(o.object)),Z=v(z,Q,te,re),Z&&b(z,Q,te,re),re!==null&&e.update(re,i.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,L(z,ne,te,Q),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return i.createVertexArray()}function h(z){return i.bindVertexArray(z)}function m(z){return i.deleteVertexArray(z)}function _(z,ne,te,Q){const re=Q.wireframe===!0;let Z=n[ne.id];Z===void 0&&(Z={},n[ne.id]=Z);const J=z.isInstancedMesh===!0?z.id:0;let Se=Z[J];Se===void 0&&(Se={},Z[J]=Se);let pe=Se[te.id];pe===void 0&&(pe={},Se[te.id]=pe);let Ce=pe[re];return Ce===void 0&&(Ce=g(p()),pe[re]=Ce),Ce}function g(z){const ne=[],te=[],Q=[];for(let re=0;re<t;re++)ne[re]=0,te[re]=0,Q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:te,attributeDivisors:Q,object:z,attributes:{},index:null}}function v(z,ne,te,Q){const re=o.attributes,Z=ne.attributes;let J=0;const Se=te.getAttributes();for(const pe in Se)if(Se[pe].location>=0){const Ie=re[pe];let Ae=Z[pe];if(Ae===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(Ae=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(Ae=z.instanceColor)),Ie===void 0||Ie.attribute!==Ae||Ae&&Ie.data!==Ae.data)return!0;J++}return o.attributesNum!==J||o.index!==Q}function b(z,ne,te,Q){const re={},Z=ne.attributes;let J=0;const Se=te.getAttributes();for(const pe in Se)if(Se[pe].location>=0){let Ie=Z[pe];Ie===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(Ie=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(Ie=z.instanceColor));const Ae={};Ae.attribute=Ie,Ie&&Ie.data&&(Ae.data=Ie.data),re[pe]=Ae,J++}o.attributes=re,o.attributesNum=J,o.index=Q}function P(){const z=o.newAttributes;for(let ne=0,te=z.length;ne<te;ne++)z[ne]=0}function E(z){S(z,0)}function S(z,ne){const te=o.newAttributes,Q=o.enabledAttributes,re=o.attributeDivisors;te[z]=1,Q[z]===0&&(i.enableVertexAttribArray(z),Q[z]=1),re[z]!==ne&&(i.vertexAttribDivisor(z,ne),re[z]=ne)}function D(){const z=o.newAttributes,ne=o.enabledAttributes;for(let te=0,Q=ne.length;te<Q;te++)ne[te]!==z[te]&&(i.disableVertexAttribArray(te),ne[te]=0)}function F(z,ne,te,Q,re,Z,J){J===!0?i.vertexAttribIPointer(z,ne,te,re,Z):i.vertexAttribPointer(z,ne,te,Q,re,Z)}function L(z,ne,te,Q){P();const re=Q.attributes,Z=te.getAttributes(),J=ne.defaultAttributeValues;for(const Se in Z){const pe=Z[Se];if(pe.location>=0){let Ce=re[Se];if(Ce===void 0&&(Se==="instanceMatrix"&&z.instanceMatrix&&(Ce=z.instanceMatrix),Se==="instanceColor"&&z.instanceColor&&(Ce=z.instanceColor)),Ce!==void 0){const Ie=Ce.normalized,Ae=Ce.itemSize,$e=e.get(Ce);if($e===void 0)continue;const Ze=$e.buffer,Je=$e.type,oe=$e.bytesPerElement,ve=Je===i.INT||Je===i.UNSIGNED_INT||Ce.gpuType===pl;if(Ce.isInterleavedBufferAttribute){const ie=Ce.data,ye=ie.stride,We=Ce.offset;if(ie.isInstancedInterleavedBuffer){for(let Xe=0;Xe<pe.locationSize;Xe++)S(pe.location+Xe,ie.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Xe=0;Xe<pe.locationSize;Xe++)E(pe.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let Xe=0;Xe<pe.locationSize;Xe++)F(pe.location+Xe,Ae/pe.locationSize,Je,Ie,ye*oe,(We+Ae/pe.locationSize*Xe)*oe,ve)}else{if(Ce.isInstancedBufferAttribute){for(let ie=0;ie<pe.locationSize;ie++)S(pe.location+ie,Ce.meshPerAttribute);z.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ie=0;ie<pe.locationSize;ie++)E(pe.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let ie=0;ie<pe.locationSize;ie++)F(pe.location+ie,Ae/pe.locationSize,Je,Ie,Ae*oe,Ae/pe.locationSize*ie*oe,ve)}}else if(J!==void 0){const Ie=J[Se];if(Ie!==void 0)switch(Ie.length){case 2:i.vertexAttrib2fv(pe.location,Ie);break;case 3:i.vertexAttrib3fv(pe.location,Ie);break;case 4:i.vertexAttrib4fv(pe.location,Ie);break;default:i.vertexAttrib1fv(pe.location,Ie)}}}}D()}function O(){I();for(const z in n){const ne=n[z];for(const te in ne){const Q=ne[te];for(const re in Q){const Z=Q[re];for(const J in Z)m(Z[J].object),delete Z[J];delete Q[re]}}delete n[z]}}function C(z){if(n[z.id]===void 0)return;const ne=n[z.id];for(const te in ne){const Q=ne[te];for(const re in Q){const Z=Q[re];for(const J in Z)m(Z[J].object),delete Z[J];delete Q[re]}}delete n[z.id]}function W(z){for(const ne in n){const te=n[ne];for(const Q in te){const re=te[Q];if(re[z.id]===void 0)continue;const Z=re[z.id];for(const J in Z)m(Z[J].object),delete Z[J];delete re[z.id]}}}function A(z){for(const ne in n){const te=n[ne],Q=z.isInstancedMesh===!0?z.id:0,re=te[Q];if(re!==void 0){for(const Z in re){const J=re[Z];for(const Se in J)m(J[Se].object),delete J[Se];delete re[Z]}delete te[Q],Object.keys(te).length===0&&delete n[ne]}}}function I(){k(),c=!0,o!==s&&(o=s,h(o.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:I,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfObject:A,releaseStatesOfProgram:W,initAttributes:P,enableAttribute:E,disableUnusedAttributes:D}}function TS(i,e,t){let n;function s(h){n=h}function o(h,m){i.drawArrays(n,h,m),t.update(m,n,1)}function c(h,m,_){_!==0&&(i.drawArraysInstanced(n,h,m,_),t.update(m,n,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,m,0,_);let v=0;for(let b=0;b<_;b++)v+=m[b];t.update(v,n,1)}function p(h,m,_,g){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<h.length;b++)c(h[b],m[b],g[b]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,m,0,g,0,_);let b=0;for(let P=0;P<_;P++)b+=m[P]*g[P];t.update(b,n,1)}}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function wS(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(W){return!(W!==Un&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(W){const A=W===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(W!==_n&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&W!==Yn&&!A)}function p(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=p(h);m!==h&&(et("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:b,maxTextureSize:P,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:L,maxSamples:O,samples:C}}function AS(i){const e=this;let t=null,n=0,s=!1,o=!1;const c=new Xi,d=new rt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||n!==0||s;return s=g,n=_.length,v},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){t=m(_,g,0)},this.setState=function(_,g,v){const b=_.clippingPlanes,P=_.clipIntersection,E=_.clipShadows,S=i.get(_);if(!s||b===null||b.length===0||o&&!E)o?m(null):h();else{const D=o?0:n,F=D*4;let L=S.clippingState||null;p.value=L,L=m(b,g,F,v);for(let O=0;O!==F;++O)L[O]=t[O];S.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=D}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,g,v,b){const P=_!==null?_.length:0;let E=null;if(P!==0){if(E=p.value,b!==!0||E===null){const S=v+P*4,D=g.matrixWorldInverse;d.getNormalMatrix(D),(E===null||E.length<S)&&(E=new Float32Array(S));for(let F=0,L=v;F!==P;++F,L+=4)c.copy(_[F]).applyMatrix4(D,d),c.normal.toArray(E,L),E[L+3]=c.constant}p.value=E,p.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,E}}const Ci=4,Zc=[.125,.215,.35,.446,.526,.582],ji=20,RS=256,Or=new Rl,Jc=new gt;let co=null,uo=0,fo=0,ho=!1;const CS=new ee;class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:c=256,position:d=CS}=o;co=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,s,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(co,uo,fo),this._renderer.xr.enabled=ho,e.scissorTest=!1,mr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),co=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:mi,format:Un,colorSpace:Mr,depthBuffer:!1},s=eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PS(o)),this._blurMaterial=FS(o,e,t),this._ggxMaterial=DS(o,e,t)}return s}_compileMaterial(e){const t=new Bn(new kn,e);this._renderer.compile(t,Or)}_sceneToCubeUV(e,t,n,s,o){const p=new En(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,v=_.toneMapping;_.getClearColor(Jc),_.toneMapping=Jn,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new na,new bl({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,E=P.material;let S=!1;const D=e.background;D?D.isColor&&(E.color.copy(D),e.background=null,S=!0):(E.color.copy(Jc),S=!0);for(let F=0;F<6;F++){const L=F%3;L===0?(p.up.set(0,h[F],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+m[F],o.y,o.z)):L===1?(p.up.set(0,0,h[F]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+m[F],o.z)):(p.up.set(0,h[F],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+m[F]));const O=this._cubeSize;mr(s,L*O,F>2?O:0,O,O),_.setRenderTarget(s),S&&_.render(P,p),_.render(e,p)}_.toneMapping=v,_.autoClear=g,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Zi||e.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const d=o.uniforms;d.envMap.value=e;const p=this._cubeSize;mr(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(c,Or)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[n];d.material=c;const p=c.uniforms,h=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-m*m),g=0+h*1.25,v=_*g,{_lodMax:b}=this,P=this._sizeLods[n],E=3*P*(n>b-Ci?n-b+Ci:0),S=4*(this._cubeSize-P);p.envMap.value=e.texture,p.roughness.value=v,p.mipInt.value=b-t,mr(o,E,S,3*P,2*P),s.setRenderTarget(o),s.render(d,Or),p.envMap.value=o.texture,p.roughness.value=0,p.mipInt.value=b-n,mr(e,E,S,3*P,2*P),s.setRenderTarget(e),s.render(d,Or)}_blur(e,t,n,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",o),this._halfBlur(c,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,c,d){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const m=3,_=this._lodMeshes[s];_.material=h;const g=h.uniforms,v=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*ji-1),P=o/b,E=isFinite(o)?1+Math.floor(m*P):ji;E>ji&&et(`sigmaRadians, ${o}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${ji}`);const S=[];let D=0;for(let W=0;W<ji;++W){const A=W/P,I=Math.exp(-A*A/2);S.push(I),W===0?D+=I:W<E&&(D+=2*I)}for(let W=0;W<S.length;W++)S[W]=S[W]/D;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=S,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:F}=this;g.dTheta.value=b,g.mipInt.value=F-n;const L=this._sizeLods[s],O=3*L*(s>F-Ci?s-F+Ci:0),C=4*(this._cubeSize-L);mr(t,O,C,3*L,2*L),p.setRenderTarget(t),p.render(_,Or)}}function PS(i){const e=[],t=[],n=[];let s=i;const o=i-Ci+1+Zc.length;for(let c=0;c<o;c++){const d=Math.pow(2,s);e.push(d);let p=1/d;c>i-Ci?p=Zc[c-i+Ci-1]:c===0&&(p=0),t.push(p);const h=1/(d-2),m=-h,_=1+h,g=[m,m,_,m,_,_,m,m,_,_,m,_],v=6,b=6,P=3,E=2,S=1,D=new Float32Array(P*b*v),F=new Float32Array(E*b*v),L=new Float32Array(S*b*v);for(let C=0;C<v;C++){const W=C%3*2/3-1,A=C>2?0:-1,I=[W,A,0,W+2/3,A,0,W+2/3,A+1,0,W,A,0,W+2/3,A+1,0,W,A+1,0];D.set(I,P*b*C),F.set(g,E*b*C);const k=[C,C,C,C,C,C];L.set(k,S*b*C)}const O=new kn;O.setAttribute("position",new On(D,P)),O.setAttribute("uv",new On(F,E)),O.setAttribute("faceIndex",new On(L,S)),n.push(new Bn(O,null)),s>Ci&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function eu(i,e,t){const n=new Qn(i,e,t);return n.texture.mapping=ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function DS(i,e,t){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:us(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function FS(i,e,t){const n=new Float32Array(ji),s=new ee(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:us(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function tu(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:us(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function nu(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:us(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function us(){return`

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
	`}class ld extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new id(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new na(5,5,5),o=new ni({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:hi});o.uniforms.tEquirect.value=t;const c=new Bn(s,o),d=t.minFilter;return t.minFilter===Yi&&(t.minFilter=an),new kv(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(o)}}function LS(i){let e=new WeakMap,t=new WeakMap,n=null;function s(g,v=!1){return g==null?null:v?c(g):o(g)}function o(g){if(g&&g.isTexture){const v=g.mapping;if(v===Is||v===Us)if(e.has(g)){const b=e.get(g).texture;return d(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const P=new ld(b.height);return P.fromEquirectangularTexture(i,g),e.set(g,P),g.addEventListener("dispose",h),d(P.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const v=g.mapping,b=v===Is||v===Us,P=v===Zi||v===yr;if(b||P){let E=t.get(g);const S=E!==void 0?E.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return n===null&&(n=new Qc(i)),E=b?n.fromEquirectangular(g,E):n.fromCubemap(g,E),E.texture.pmremVersion=g.pmremVersion,t.set(g,E),E.texture;if(E!==void 0)return E.texture;{const D=g.image;return b&&D&&D.height>0||P&&D&&p(D)?(n===null&&(n=new Qc(i)),E=b?n.fromEquirectangular(g):n.fromCubemap(g),E.texture.pmremVersion=g.pmremVersion,t.set(g,E),g.addEventListener("dispose",m),E.texture):null}}}return g}function d(g,v){return v===Is?g.mapping=Zi:v===Us&&(g.mapping=yr),g}function p(g){let v=0;const b=6;for(let P=0;P<b;P++)g[P]!==void 0&&v++;return v===b}function h(g){const v=g.target;v.removeEventListener("dispose",h);const b=e.get(v);b!==void 0&&(e.delete(v),b.dispose())}function m(g){const v=g.target;v.removeEventListener("dispose",m);const b=t.get(v);b!==void 0&&(t.delete(v),b.dispose())}function _(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function IS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&os("WebGLRenderer: "+n+" extension not supported."),s}}}function US(i,e,t,n){const s={},o=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",c),delete s[g.id];const v=o.get(g);v&&(e.remove(v),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(_,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const v in g)e.update(g[v],i.ARRAY_BUFFER)}function h(_){const g=[],v=_.index,b=_.attributes.position;let P=0;if(b===void 0)return;if(v!==null){const D=v.array;P=v.version;for(let F=0,L=D.length;F<L;F+=3){const O=D[F+0],C=D[F+1],W=D[F+2];g.push(O,C,C,W,W,O)}}else{const D=b.array;P=b.version;for(let F=0,L=D.length/3-1;F<L;F+=3){const O=F+0,C=F+1,W=F+2;g.push(O,C,C,W,W,O)}}const E=new(b.count>=65535?nd:td)(g,1);E.version=P;const S=o.get(_);S&&e.remove(S),o.set(_,E)}function m(_){const g=o.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&h(_)}else h(_);return o.get(_)}return{get:d,update:p,getWireframeAttribute:m}}function NS(i,e,t){let n;function s(g){n=g}let o,c;function d(g){o=g.type,c=g.bytesPerElement}function p(g,v){i.drawElements(n,v,o,g*c),t.update(v,n,1)}function h(g,v,b){b!==0&&(i.drawElementsInstanced(n,v,o,g*c,b),t.update(v,n,b))}function m(g,v,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,o,g,0,b);let E=0;for(let S=0;S<b;S++)E+=v[S];t.update(E,n,1)}function _(g,v,b,P){if(b===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let S=0;S<g.length;S++)h(g[S]/c,v[S],P[S]);else{E.multiDrawElementsInstancedWEBGL(n,v,0,o,g,0,P,0,b);let S=0;for(let D=0;D<b;D++)S+=v[D]*P[D];t.update(S,n,1)}}this.setMode=s,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function OS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(o/3);break;case i.LINES:t.lines+=d*(o/2);break;case i.LINE_STRIP:t.lines+=d*(o-1);break;case i.LINE_LOOP:t.lines+=d*o;break;case i.POINTS:t.points+=d*o;break;default:Et("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function BS(i,e,t){const n=new WeakMap,s=new kt;function o(c,d,p){const h=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let g=n.get(d);if(g===void 0||g.count!==_){let I=function(){W.dispose(),n.delete(d),d.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const v=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let F=0;v===!0&&(F=1),b===!0&&(F=2),P===!0&&(F=3);let L=d.attributes.position.count*F,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*O*4*_),W=new Ju(C,L,O,_);W.type=Yn,W.needsUpdate=!0;const A=F*4;for(let k=0;k<_;k++){const z=E[k],ne=S[k],te=D[k],Q=L*O*4*k;for(let re=0;re<z.count;re++){const Z=re*A;v===!0&&(s.fromBufferAttribute(z,re),C[Q+Z+0]=s.x,C[Q+Z+1]=s.y,C[Q+Z+2]=s.z,C[Q+Z+3]=0),b===!0&&(s.fromBufferAttribute(ne,re),C[Q+Z+4]=s.x,C[Q+Z+5]=s.y,C[Q+Z+6]=s.z,C[Q+Z+7]=0),P===!0&&(s.fromBufferAttribute(te,re),C[Q+Z+8]=s.x,C[Q+Z+9]=s.y,C[Q+Z+10]=s.z,C[Q+Z+11]=te.itemSize===4?s.w:1)}}g={count:_,texture:W,size:new bt(L,O)},n.set(d,g),d.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let v=0;for(let P=0;P<h.length;P++)v+=h[P];const b=d.morphTargetsRelative?1:1-v;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",h)}p.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:o}}function kS(i,e,t,n,s){let o=new WeakMap;function c(h){const m=s.render.frame,_=h.geometry,g=e.get(h,_);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),o.get(h)!==m&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==m&&(v.update(),o.set(v,m))}return g}function d(){o=new WeakMap}function p(h){const m=h.target;m.removeEventListener("dispose",p),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:d}}const zS={[Nu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[hl]:"ACES_FILMIC_TONE_MAPPING",[zu]:"AGX_TONE_MAPPING",[Vu]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};function VS(i,e,t,n,s){const o=new Qn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),c=new Qn(e,t,{type:mi,depthBuffer:!1,stencilBuffer:!1}),d=new kn;d.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Mn([0,2,0,0,2,0],2));const p=new Av({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Bn(d,p),m=new Rl(-1,1,1,-1,0,1);let _=null,g=null,v=!1,b,P=null,E=[],S=!1;this.setSize=function(D,F){o.setSize(D,F),c.setSize(D,F);for(let L=0;L<E.length;L++){const O=E[L];O.setSize&&O.setSize(D,F)}},this.setEffects=function(D){E=D,S=E.length>0&&E[0].isRenderPass===!0;const F=o.width,L=o.height;for(let O=0;O<E.length;O++){const C=E[O];C.setSize&&C.setSize(F,L)}},this.begin=function(D,F){if(v||D.toneMapping===Jn&&E.length===0)return!1;if(P=F,F!==null){const L=F.width,O=F.height;(o.width!==L||o.height!==O)&&this.setSize(L,O)}return S===!1&&D.setRenderTarget(o),b=D.toneMapping,D.toneMapping=Jn,!0},this.hasRenderPass=function(){return S},this.end=function(D,F){D.toneMapping=b,v=!0;let L=o,O=c;for(let C=0;C<E.length;C++){const W=E[C];if(W.enabled!==!1&&(W.render(D,O,L,F),W.needsSwap!==!1)){const A=L;L=O,O=A}}if(_!==D.outputColorSpace||g!==D.toneMapping){_=D.outputColorSpace,g=D.toneMapping,p.defines={},St.getTransfer(_)===Ct&&(p.defines.SRGB_TRANSFER="");const C=zS[g];C&&(p.defines[C]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(P),D.render(h,m),P=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),c.dispose(),d.dispose(),p.dispose()}}const cd=new sn,cl=new Zr(1,1),ud=new Ju,dd=new iv,fd=new id,iu=[],ru=[],au=new Float32Array(16),su=new Float32Array(9),ou=new Float32Array(4);function Ar(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=iu[s];if(o===void 0&&(o=new Float32Array(s),iu[s]=o),e!==0){n.toArray(o,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(o,d)}return o}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ds(i,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function GS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function HS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function WS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function $S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function XS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;ou.set(n),i.uniformMatrix2fv(this.addr,!1,ou),jt(t,n)}}function qS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;su.set(n),i.uniformMatrix3fv(this.addr,!1,su),jt(t,n)}}function jS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;au.set(n),i.uniformMatrix4fv(this.addr,!1,au),jt(t,n)}}function YS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function KS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function ZS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function JS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function QS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function iy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=t.isReversedDepthBuffer()?yl:Sl,o=cl):o=cd,t.setTexture2D(e||o,s)}function ry(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dd,s)}function ay(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fd,s)}function sy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ud,s)}function oy(i){switch(i){case 5126:return GS;case 35664:return HS;case 35665:return WS;case 35666:return $S;case 35674:return XS;case 35675:return qS;case 35676:return jS;case 5124:case 35670:return YS;case 35667:case 35671:return KS;case 35668:case 35672:return ZS;case 35669:case 35673:return JS;case 5125:return QS;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return sy}}function ly(i,e){i.uniform1fv(this.addr,e)}function cy(i,e){const t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function uy(i,e){const t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function dy(i,e){const t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function fy(i,e){const t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hy(i,e){const t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function py(i,e){const t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function my(i,e){i.uniform1iv(this.addr,e)}function gy(i,e){i.uniform2iv(this.addr,e)}function _y(i,e){i.uniform3iv(this.addr,e)}function vy(i,e){i.uniform4iv(this.addr,e)}function xy(i,e){i.uniform1uiv(this.addr,e)}function Sy(i,e){i.uniform2uiv(this.addr,e)}function yy(i,e){i.uniform3uiv(this.addr,e)}function Ey(i,e){i.uniform4uiv(this.addr,e)}function My(i,e,t){const n=this.cache,s=e.length,o=ds(t,s);qt(n,o)||(i.uniform1iv(this.addr,o),jt(n,o));let c;this.type===i.SAMPLER_2D_SHADOW?c=cl:c=cd;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||c,o[d])}function by(i,e,t){const n=this.cache,s=e.length,o=ds(t,s);qt(n,o)||(i.uniform1iv(this.addr,o),jt(n,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||dd,o[c])}function Ty(i,e,t){const n=this.cache,s=e.length,o=ds(t,s);qt(n,o)||(i.uniform1iv(this.addr,o),jt(n,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||fd,o[c])}function wy(i,e,t){const n=this.cache,s=e.length,o=ds(t,s);qt(n,o)||(i.uniform1iv(this.addr,o),jt(n,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||ud,o[c])}function Ay(i){switch(i){case 5126:return ly;case 35664:return cy;case 35665:return uy;case 35666:return dy;case 35674:return fy;case 35675:return hy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return _y;case 35669:case 35673:return vy;case 5125:return xy;case 36294:return Sy;case 36295:return yy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return wy}}class Ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oy(t.type)}}class Cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ay(t.type)}}class Py{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const d=s[o];d.setValue(e,t[d.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function lu(i,e){i.seq.push(e),i.map[e.id]=e}function Dy(i,e,t){const n=i.name,s=n.length;for(po.lastIndex=0;;){const o=po.exec(n),c=po.lastIndex;let d=o[1];const p=o[2]==="]",h=o[3];if(p&&(d=d|0),h===void 0||h==="["&&c+2===s){lu(t,h===void 0?new Ry(d,i,e):new Cy(d,i,e));break}else{let _=t.map[d];_===void 0&&(_=new Py(d),lu(t,_)),t=_}}}class ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<n;++c){const d=e.getActiveUniform(t,c),p=e.getUniformLocation(t,d.name);Dy(d,p,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,c=t.length;o!==c;++o){const d=t[o],p=n[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function cu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fy=37297;let Ly=0;function Iy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const d=c+1;n.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return n.join(`
`)}const uu=new rt;function Uy(i){St._getMatrix(uu,St.workingColorSpace,i);const e=`mat3( ${uu.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(i)){case ss:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function du(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+Iy(i.getShaderSource(e),d)}else return o}function Ny(i,e){const t=Uy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Oy={[Nu]:"Linear",[Ou]:"Reinhard",[Bu]:"Cineon",[hl]:"ACESFilmic",[zu]:"AgX",[Vu]:"Neutral",[ku]:"Custom"};function By(i,e){const t=Oy[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ka=new ee;function ky(){St.getLuminanceCoefficients(Ka);const i=Ka.x.toFixed(4),e=Ka.y.toFixed(4),t=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Vy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),c=o.name;let d=1;o.type===i.FLOAT_MAT2&&(d=2),o.type===i.FLOAT_MAT3&&(d=3),o.type===i.FLOAT_MAT4&&(d=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function zr(i){return i!==""}function fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Hy,$y)}const Wy=new Map;function $y(i,e){let t=st[e];if(t===void 0){const n=Wy.get(e);if(n!==void 0)t=st[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ul(t)}const Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(Xy,qy)}function qy(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function mu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const jy={[Za]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function Yy(i){return jy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ky={[Zi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE_UV"};function Zy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ky[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Jy={[yr]:"ENVMAP_MODE_REFRACTION"};function Qy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={[Uu]:"ENVMAP_BLENDING_MULTIPLY",[N_]:"ENVMAP_BLENDING_MIX",[O_]:"ENVMAP_BLENDING_ADD"};function tE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":eE[i.combine]||"ENVMAP_BLENDING_NONE"}function nE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iE(i,e,t,n){const s=i.getContext(),o=t.defines;let c=t.vertexShader,d=t.fragmentShader;const p=Yy(t),h=Zy(t),m=Qy(t),_=tE(t),g=nE(t),v=zy(t),b=Vy(o),P=s.createProgram();let E,S,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(zr).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(zr).join(`
`),S.length>0&&(S+=`
`)):(E=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),S=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?st.tonemapping_pars_fragment:"",t.toneMapping!==Jn?By("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Ny("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),c=ul(c),c=fu(c,t),c=hu(c,t),d=ul(d),d=fu(d,t),d=hu(d,t),c=pu(c),d=pu(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,E=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",t.glslVersion===Ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const F=D+E+c,L=D+S+d,O=cu(s,s.VERTEX_SHADER,F),C=cu(s,s.FRAGMENT_SHADER,L);s.attachShader(P,O),s.attachShader(P,C),t.index0AttributeName!==void 0?s.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(P,0,"position"),s.linkProgram(P);function W(z){if(i.debug.checkShaderErrors){const ne=s.getProgramInfoLog(P)||"",te=s.getShaderInfoLog(O)||"",Q=s.getShaderInfoLog(C)||"",re=ne.trim(),Z=te.trim(),J=Q.trim();let Se=!0,pe=!0;if(s.getProgramParameter(P,s.LINK_STATUS)===!1)if(Se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,P,O,C);else{const Ce=du(s,O,"vertex"),Ie=du(s,C,"fragment");Et("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(P,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+re+`
`+Ce+`
`+Ie)}else re!==""?et("WebGLProgram: Program Info Log:",re):(Z===""||J==="")&&(pe=!1);pe&&(z.diagnostics={runnable:Se,programLog:re,vertexShader:{log:Z,prefix:E},fragmentShader:{log:J,prefix:S}})}s.deleteShader(O),s.deleteShader(C),A=new ns(s,P),I=Gy(s,P)}let A;this.getUniforms=function(){return A===void 0&&W(this),A};let I;this.getAttributes=function(){return I===void 0&&W(this),I};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(P,Fy)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=O,this.fragmentShader=C,this}let rE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sE(e),t.set(e,n)),n}}class sE{constructor(e){this.id=rE++,this.code=e,this.usedTimes=0}}function oE(i,e,t,n,s,o){const c=new Qu,d=new aE,p=new Set,h=[],m=new Map,_=n.logarithmicDepthBuffer;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return p.add(A),A===0?"uv":`uv${A}`}function P(A,I,k,z,ne){const te=z.fog,Q=ne.geometry,re=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Z=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,J=e.get(A.envMap||re,Z),Se=J&&J.mapping===ls?J.image.height:null,pe=v[A.type];A.precision!==null&&(g=n.getMaxPrecision(A.precision),g!==A.precision&&et("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const Ce=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ie=Ce!==void 0?Ce.length:0;let Ae=0;Q.morphAttributes.position!==void 0&&(Ae=1),Q.morphAttributes.normal!==void 0&&(Ae=2),Q.morphAttributes.color!==void 0&&(Ae=3);let $e,Ze,Je,oe;if(pe){const lt=jn[pe];$e=lt.vertexShader,Ze=lt.fragmentShader}else $e=A.vertexShader,Ze=A.fragmentShader,d.update(A),Je=d.getVertexShaderID(A),oe=d.getFragmentShaderID(A);const ve=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),ye=ne.isInstancedMesh===!0,We=ne.isBatchedMesh===!0,Xe=!!A.map,yt=!!A.matcap,ot=!!J,ft=!!A.aoMap,Tt=!!A.lightMap,nt=!!A.bumpMap,Ut=!!A.normalMap,V=!!A.displacementMap,Pt=!!A.emissiveMap,ut=!!A.metalnessMap,_t=!!A.roughnessMap,Ue=A.anisotropy>0,U=A.clearcoat>0,M=A.dispersion>0,G=A.iridescence>0,se=A.sheen>0,he=A.transmission>0,le=Ue&&!!A.anisotropyMap,Ne=U&&!!A.clearcoatMap,be=U&&!!A.clearcoatNormalMap,He=U&&!!A.clearcoatRoughnessMap,je=G&&!!A.iridescenceMap,xe=G&&!!A.iridescenceThicknessMap,Me=se&&!!A.sheenColorMap,Oe=se&&!!A.sheenRoughnessMap,Be=!!A.specularMap,De=!!A.specularColorMap,it=!!A.specularIntensityMap,H=he&&!!A.transmissionMap,Te=he&&!!A.thicknessMap,Ee=!!A.gradientMap,Pe=!!A.alphaMap,$=A.alphaTest>0,B=!!A.alphaHash,Fe=!!A.extensions;let Ye=Jn;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const vt={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:$e,fragmentShader:Ze,defines:A.defines,customVertexShaderID:Je,customFragmentShaderID:oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:We,batchingColor:We&&ne._colorsTexture!==null,instancing:ye,instancingColor:ye&&ne.instanceColor!==null,instancingMorph:ye&&ne.morphTexture!==null,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Mr,alphaToCoverage:!!A.alphaToCoverage,map:Xe,matcap:yt,envMap:ot,envMapMode:ot&&J.mapping,envMapCubeUVHeight:Se,aoMap:ft,lightMap:Tt,bumpMap:nt,normalMap:Ut,displacementMap:V,emissiveMap:Pt,normalMapObjectSpace:Ut&&A.normalMapType===z_,normalMapTangentSpace:Ut&&A.normalMapType===Ku,metalnessMap:ut,roughnessMap:_t,anisotropy:Ue,anisotropyMap:le,clearcoat:U,clearcoatMap:Ne,clearcoatNormalMap:be,clearcoatRoughnessMap:He,dispersion:M,iridescence:G,iridescenceMap:je,iridescenceThicknessMap:xe,sheen:se,sheenColorMap:Me,sheenRoughnessMap:Oe,specularMap:Be,specularColorMap:De,specularIntensityMap:it,transmission:he,transmissionMap:H,thicknessMap:Te,gradientMap:Ee,opaque:A.transparent===!1&&A.blending===vr&&A.alphaToCoverage===!1,alphaMap:Pe,alphaTest:$,alphaHash:B,combine:A.combine,mapUv:Xe&&b(A.map.channel),aoMapUv:ft&&b(A.aoMap.channel),lightMapUv:Tt&&b(A.lightMap.channel),bumpMapUv:nt&&b(A.bumpMap.channel),normalMapUv:Ut&&b(A.normalMap.channel),displacementMapUv:V&&b(A.displacementMap.channel),emissiveMapUv:Pt&&b(A.emissiveMap.channel),metalnessMapUv:ut&&b(A.metalnessMap.channel),roughnessMapUv:_t&&b(A.roughnessMap.channel),anisotropyMapUv:le&&b(A.anisotropyMap.channel),clearcoatMapUv:Ne&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&b(A.sheenRoughnessMap.channel),specularMapUv:Be&&b(A.specularMap.channel),specularColorMapUv:De&&b(A.specularColorMap.channel),specularIntensityMapUv:it&&b(A.specularIntensityMap.channel),transmissionMapUv:H&&b(A.transmissionMap.channel),thicknessMapUv:Te&&b(A.thicknessMap.channel),alphaMapUv:Pe&&b(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ut||Ue),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!Q.attributes.uv&&(Xe||Pe),fog:!!te,useFog:A.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Q.attributes.normal===void 0&&Ut===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ie,skinning:ne.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ae,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Xe&&A.map.isVideoTexture===!0&&St.getTransfer(A.map.colorSpace)===Ct,decodeVideoTextureEmissive:Pt&&A.emissiveMap.isVideoTexture===!0&&St.getTransfer(A.emissiveMap.colorSpace)===Ct,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ln,flipSided:A.side===hn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Fe&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&A.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return vt.vertexUv1s=p.has(1),vt.vertexUv2s=p.has(2),vt.vertexUv3s=p.has(3),p.clear(),vt}function E(A){const I=[];if(A.shaderID?I.push(A.shaderID):(I.push(A.customVertexShaderID),I.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)I.push(k),I.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(S(I,A),D(I,A),I.push(i.outputColorSpace)),I.push(A.customProgramCacheKey),I.join()}function S(A,I){A.push(I.precision),A.push(I.outputColorSpace),A.push(I.envMapMode),A.push(I.envMapCubeUVHeight),A.push(I.mapUv),A.push(I.alphaMapUv),A.push(I.lightMapUv),A.push(I.aoMapUv),A.push(I.bumpMapUv),A.push(I.normalMapUv),A.push(I.displacementMapUv),A.push(I.emissiveMapUv),A.push(I.metalnessMapUv),A.push(I.roughnessMapUv),A.push(I.anisotropyMapUv),A.push(I.clearcoatMapUv),A.push(I.clearcoatNormalMapUv),A.push(I.clearcoatRoughnessMapUv),A.push(I.iridescenceMapUv),A.push(I.iridescenceThicknessMapUv),A.push(I.sheenColorMapUv),A.push(I.sheenRoughnessMapUv),A.push(I.specularMapUv),A.push(I.specularColorMapUv),A.push(I.specularIntensityMapUv),A.push(I.transmissionMapUv),A.push(I.thicknessMapUv),A.push(I.combine),A.push(I.fogExp2),A.push(I.sizeAttenuation),A.push(I.morphTargetsCount),A.push(I.morphAttributeCount),A.push(I.numDirLights),A.push(I.numPointLights),A.push(I.numSpotLights),A.push(I.numSpotLightMaps),A.push(I.numHemiLights),A.push(I.numRectAreaLights),A.push(I.numDirLightShadows),A.push(I.numPointLightShadows),A.push(I.numSpotLightShadows),A.push(I.numSpotLightShadowsWithMaps),A.push(I.numLightProbes),A.push(I.shadowMapType),A.push(I.toneMapping),A.push(I.numClippingPlanes),A.push(I.numClipIntersection),A.push(I.depthPacking)}function D(A,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),A.push(c.mask)}function F(A){const I=v[A.type];let k;if(I){const z=jn[I];k=bv.clone(z.uniforms)}else k=A.uniforms;return k}function L(A,I){let k=m.get(I);return k!==void 0?++k.usedTimes:(k=new iE(i,I,A,s),h.push(k),m.set(I,k)),k}function O(A){if(--A.usedTimes===0){const I=h.indexOf(A);h[I]=h[h.length-1],h.pop(),m.delete(A.cacheKey),A.destroy()}}function C(A){d.remove(A)}function W(){d.dispose()}return{getParameters:P,getProgramCacheKey:E,getUniforms:F,acquireProgram:L,releaseProgram:O,releaseShaderCache:C,programs:h,dispose:W}}function lE(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function n(c){i.delete(c)}function s(c,d,p){i.get(c)[d]=p}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function cE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _u(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function c(g){let v=0;return g.isInstancedMesh&&(v+=2),g.isSkinnedMesh&&(v+=1),v}function d(g,v,b,P,E,S){let D=i[e];return D===void 0?(D={id:g.id,object:g,geometry:v,material:b,materialVariant:c(g),groupOrder:P,renderOrder:g.renderOrder,z:E,group:S},i[e]=D):(D.id=g.id,D.object=g,D.geometry=v,D.material=b,D.materialVariant=c(g),D.groupOrder=P,D.renderOrder=g.renderOrder,D.z=E,D.group=S),e++,D}function p(g,v,b,P,E,S){const D=d(g,v,b,P,E,S);b.transmission>0?n.push(D):b.transparent===!0?s.push(D):t.push(D)}function h(g,v,b,P,E,S){const D=d(g,v,b,P,E,S);b.transmission>0?n.unshift(D):b.transparent===!0?s.unshift(D):t.unshift(D)}function m(g,v){t.length>1&&t.sort(g||cE),n.length>1&&n.sort(v||gu),s.length>1&&s.sort(v||gu)}function _(){for(let g=e,v=i.length;g<v;g++){const b=i[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:p,unshift:h,finish:_,sort:m}}function uE(){let i=new WeakMap;function e(n,s){const o=i.get(n);let c;return o===void 0?(c=new _u,i.set(n,[c])):s>=o.length?(c=new _u,o.push(c)):c=o[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function dE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new gt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function fE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hE=0;function pE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mE(i){const e=new dE,t=fE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ee);const s=new ee,o=new Ot,c=new Ot;function d(h){let m=0,_=0,g=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let v=0,b=0,P=0,E=0,S=0,D=0,F=0,L=0,O=0,C=0,W=0;h.sort(pE);for(let I=0,k=h.length;I<k;I++){const z=h[I],ne=z.color,te=z.intensity,Q=z.distance;let re=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Er?re=z.shadow.map.texture:re=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=ne.r*te,_+=ne.g*te,g+=ne.b*te;else if(z.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(z.sh.coefficients[Z],te);W++}else if(z.isDirectionalLight){const Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const J=z.shadow,Se=t.get(z);Se.shadowIntensity=J.intensity,Se.shadowBias=J.bias,Se.shadowNormalBias=J.normalBias,Se.shadowRadius=J.radius,Se.shadowMapSize=J.mapSize,n.directionalShadow[v]=Se,n.directionalShadowMap[v]=re,n.directionalShadowMatrix[v]=z.shadow.matrix,D++}n.directional[v]=Z,v++}else if(z.isSpotLight){const Z=e.get(z);Z.position.setFromMatrixPosition(z.matrixWorld),Z.color.copy(ne).multiplyScalar(te),Z.distance=Q,Z.coneCos=Math.cos(z.angle),Z.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Z.decay=z.decay,n.spot[P]=Z;const J=z.shadow;if(z.map&&(n.spotLightMap[O]=z.map,O++,J.updateMatrices(z),z.castShadow&&C++),n.spotLightMatrix[P]=J.matrix,z.castShadow){const Se=t.get(z);Se.shadowIntensity=J.intensity,Se.shadowBias=J.bias,Se.shadowNormalBias=J.normalBias,Se.shadowRadius=J.radius,Se.shadowMapSize=J.mapSize,n.spotShadow[P]=Se,n.spotShadowMap[P]=re,L++}P++}else if(z.isRectAreaLight){const Z=e.get(z);Z.color.copy(ne).multiplyScalar(te),Z.halfWidth.set(z.width*.5,0,0),Z.halfHeight.set(0,z.height*.5,0),n.rectArea[E]=Z,E++}else if(z.isPointLight){const Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),Z.distance=z.distance,Z.decay=z.decay,z.castShadow){const J=z.shadow,Se=t.get(z);Se.shadowIntensity=J.intensity,Se.shadowBias=J.bias,Se.shadowNormalBias=J.normalBias,Se.shadowRadius=J.radius,Se.shadowMapSize=J.mapSize,Se.shadowCameraNear=J.camera.near,Se.shadowCameraFar=J.camera.far,n.pointShadow[b]=Se,n.pointShadowMap[b]=re,n.pointShadowMatrix[b]=z.shadow.matrix,F++}n.point[b]=Z,b++}else if(z.isHemisphereLight){const Z=e.get(z);Z.skyColor.copy(z.color).multiplyScalar(te),Z.groundColor.copy(z.groundColor).multiplyScalar(te),n.hemi[S]=Z,S++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=_,n.ambient[2]=g;const A=n.hash;(A.directionalLength!==v||A.pointLength!==b||A.spotLength!==P||A.rectAreaLength!==E||A.hemiLength!==S||A.numDirectionalShadows!==D||A.numPointShadows!==F||A.numSpotShadows!==L||A.numSpotMaps!==O||A.numLightProbes!==W)&&(n.directional.length=v,n.spot.length=P,n.rectArea.length=E,n.point.length=b,n.hemi.length=S,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=F,n.pointShadowMap.length=F,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=F,n.spotLightMatrix.length=L+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=W,A.directionalLength=v,A.pointLength=b,A.spotLength=P,A.rectAreaLength=E,A.hemiLength=S,A.numDirectionalShadows=D,A.numPointShadows=F,A.numSpotShadows=L,A.numSpotMaps=O,A.numLightProbes=W,n.version=hE++)}function p(h,m){let _=0,g=0,v=0,b=0,P=0;const E=m.matrixWorldInverse;for(let S=0,D=h.length;S<D;S++){const F=h[S];if(F.isDirectionalLight){const L=n.directional[_];L.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(E),_++}else if(F.isSpotLight){const L=n.spot[v];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(E),L.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(E),v++}else if(F.isRectAreaLight){const L=n.rectArea[b];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(E),c.identity(),o.copy(F.matrixWorld),o.premultiply(E),c.extractRotation(o),L.halfWidth.set(F.width*.5,0,0),L.halfHeight.set(0,F.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),b++}else if(F.isPointLight){const L=n.point[g];L.position.setFromMatrixPosition(F.matrixWorld),L.position.applyMatrix4(E),g++}else if(F.isHemisphereLight){const L=n.hemi[P];L.direction.setFromMatrixPosition(F.matrixWorld),L.direction.transformDirection(E),P++}}}return{setup:d,setupView:p,state:n}}function vu(i){const e=new mE(i),t=[],n=[];function s(m){h.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function c(m){n.push(m)}function d(){e.setup(t)}function p(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:d,setupLightsView:p,pushLight:o,pushShadow:c}}function gE(i){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let d;return c===void 0?(d=new vu(i),e.set(s,[d])):o>=c.length?(d=new vu(i),c.push(d)):d=c[o],d}function n(){e=new WeakMap}return{get:t,dispose:n}}const _E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
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
}`,xE=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],SE=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],xu=new Ot,Br=new ee,mo=new ee;function yE(i,e,t){let n=new Tl;const s=new bt,o=new bt,c=new kt,d=new Cv,p=new Pv,h={},m=t.maxTextureSize,_={[Pi]:hn,[hn]:Pi,[Ln]:Ln},g=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:_E,fragmentShader:vE}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const b=new kn;b.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new Bn(b,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let S=this.type;this.render=function(C,W,A){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||C.length===0)return;this.type===__&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Za);const I=i.getRenderTarget(),k=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(hi),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const te=S!==this.type;te&&W.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(re=>re.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,re=C.length;Q<re;Q++){const Z=C[Q],J=Z.shadow;if(J===void 0){et("WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const Se=J.getFrameExtents();s.multiply(Se),o.copy(J.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/Se.x),s.x=o.x*Se.x,J.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/Se.y),s.y=o.y*Se.y,J.mapSize.y=o.y));const pe=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=pe,J.map===null||te===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===kr){if(Z.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Qn(s.x,s.y,{format:Er,type:mi,minFilter:an,magFilter:an,generateMipmaps:!1}),J.map.texture.name=Z.name+".shadowMap",J.map.depthTexture=new Zr(s.x,s.y,Yn),J.map.depthTexture.name=Z.name+".shadowMapDepth",J.map.depthTexture.format=gi,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Jt,J.map.depthTexture.magFilter=Jt}else Z.isPointLight?(J.map=new ld(s.x),J.map.depthTexture=new Ev(s.x,ei)):(J.map=new Qn(s.x,s.y),J.map.depthTexture=new Zr(s.x,s.y,ei)),J.map.depthTexture.name=Z.name+".shadowMap",J.map.depthTexture.format=gi,this.type===Za?(J.map.depthTexture.compareFunction=pe?yl:Sl,J.map.depthTexture.minFilter=an,J.map.depthTexture.magFilter=an):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Jt,J.map.depthTexture.magFilter=Jt);J.camera.updateProjectionMatrix()}const Ce=J.map.isWebGLCubeRenderTarget?6:1;for(let Ie=0;Ie<Ce;Ie++){if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(J.map),i.clear());const Ae=J.getViewport(Ie);c.set(o.x*Ae.x,o.y*Ae.y,o.x*Ae.z,o.y*Ae.w),ne.viewport(c)}if(Z.isPointLight){const Ae=J.camera,$e=J.matrix,Ze=Z.distance||Ae.far;Ze!==Ae.far&&(Ae.far=Ze,Ae.updateProjectionMatrix()),Br.setFromMatrixPosition(Z.matrixWorld),Ae.position.copy(Br),mo.copy(Ae.position),mo.add(xE[Ie]),Ae.up.copy(SE[Ie]),Ae.lookAt(mo),Ae.updateMatrixWorld(),$e.makeTranslation(-Br.x,-Br.y,-Br.z),xu.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),J._frustum.setFromProjectionMatrix(xu,Ae.coordinateSystem,Ae.reversedDepth)}else J.updateMatrices(Z);n=J.getFrustum(),L(W,A,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===kr&&D(J,A),J.needsUpdate=!1}S=this.type,E.needsUpdate=!1,i.setRenderTarget(I,k,z)};function D(C,W){const A=e.update(P);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qn(s.x,s.y,{format:Er,type:mi})),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(W,null,A,g,P,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(W,null,A,v,P,null)}function F(C,W,A,I){let k=null;const z=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)k=z;else if(k=A.isPointLight===!0?p:d,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){const ne=k.uuid,te=W.uuid;let Q=h[ne];Q===void 0&&(Q={},h[ne]=Q);let re=Q[te];re===void 0&&(re=k.clone(),Q[te]=re,W.addEventListener("dispose",O)),k=re}if(k.visible=W.visible,k.wireframe=W.wireframe,I===kr?k.side=W.shadowSide!==null?W.shadowSide:W.side:k.side=W.shadowSide!==null?W.shadowSide:_[W.side],k.alphaMap=W.alphaMap,k.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,k.map=W.map,k.clipShadows=W.clipShadows,k.clippingPlanes=W.clippingPlanes,k.clipIntersection=W.clipIntersection,k.displacementMap=W.displacementMap,k.displacementScale=W.displacementScale,k.displacementBias=W.displacementBias,k.wireframeLinewidth=W.wireframeLinewidth,k.linewidth=W.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const ne=i.properties.get(k);ne.light=A}return k}function L(C,W,A,I,k){if(C.visible===!1)return;if(C.layers.test(W.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&k===kr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const te=e.update(C),Q=C.material;if(Array.isArray(Q)){const re=te.groups;for(let Z=0,J=re.length;Z<J;Z++){const Se=re[Z],pe=Q[Se.materialIndex];if(pe&&pe.visible){const Ce=F(C,pe,I,k);C.onBeforeShadow(i,C,W,A,te,Ce,Se),i.renderBufferDirect(A,null,te,Ce,C,Se),C.onAfterShadow(i,C,W,A,te,Ce,Se)}}}else if(Q.visible){const re=F(C,Q,I,k);C.onBeforeShadow(i,C,W,A,te,re,null),i.renderBufferDirect(A,null,te,re,C,null),C.onAfterShadow(i,C,W,A,te,re,null)}}const ne=C.children;for(let te=0,Q=ne.length;te<Q;te++)L(ne[te],W,A,I,k)}function O(C){C.target.removeEventListener("dispose",O);for(const A in h){const I=h[A],k=C.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function EE(i,e){function t(){let H=!1;const Te=new kt;let Ee=null;const Pe=new kt(0,0,0,0);return{setMask:function($){Ee!==$&&!H&&(i.colorMask($,$,$,$),Ee=$)},setLocked:function($){H=$},setClear:function($,B,Fe,Ye,vt){vt===!0&&($*=Ye,B*=Ye,Fe*=Ye),Te.set($,B,Fe,Ye),Pe.equals(Te)===!1&&(i.clearColor($,B,Fe,Ye),Pe.copy(Te))},reset:function(){H=!1,Ee=null,Pe.set(-1,0,0,0)}}}function n(){let H=!1,Te=!1,Ee=null,Pe=null,$=null;return{setReversed:function(B){if(Te!==B){const Fe=e.get("EXT_clip_control");B?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Te=B;const Ye=$;$=null,this.setClear(Ye)}},getReversed:function(){return Te},setTest:function(B){B?ve(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(B){Ee!==B&&!H&&(i.depthMask(B),Ee=B)},setFunc:function(B){if(Te&&(B=K_[B]),Pe!==B){switch(B){case Eo:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case bo:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Ao:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=B}},setLocked:function(B){H=B},setClear:function(B){$!==B&&($=B,Te&&(B=1-B),i.clearDepth(B))},reset:function(){H=!1,Ee=null,Pe=null,$=null,Te=!1}}}function s(){let H=!1,Te=null,Ee=null,Pe=null,$=null,B=null,Fe=null,Ye=null,vt=null;return{setTest:function(lt){H||(lt?ve(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(lt){Te!==lt&&!H&&(i.stencilMask(lt),Te=lt)},setFunc:function(lt,Tn,Gt){(Ee!==lt||Pe!==Tn||$!==Gt)&&(i.stencilFunc(lt,Tn,Gt),Ee=lt,Pe=Tn,$=Gt)},setOp:function(lt,Tn,Gt){(B!==lt||Fe!==Tn||Ye!==Gt)&&(i.stencilOp(lt,Tn,Gt),B=lt,Fe=Tn,Ye=Gt)},setLocked:function(lt){H=lt},setClear:function(lt){vt!==lt&&(i.clearStencil(lt),vt=lt)},reset:function(){H=!1,Te=null,Ee=null,Pe=null,$=null,B=null,Fe=null,Ye=null,vt=null}}}const o=new t,c=new n,d=new s,p=new WeakMap,h=new WeakMap;let m={},_={},g=new WeakMap,v=[],b=null,P=!1,E=null,S=null,D=null,F=null,L=null,O=null,C=null,W=new gt(0,0,0),A=0,I=!1,k=null,z=null,ne=null,te=null,Q=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const Se=i.getParameter(i.VERSION);Se.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Se)[1]),Z=J>=1):Se.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),Z=J>=2);let pe=null,Ce={};const Ie=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),$e=new kt().fromArray(Ie),Ze=new kt().fromArray(Ae);function Je(H,Te,Ee,Pe){const $=new Uint8Array(4),B=i.createTexture();i.bindTexture(H,B),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Ee;Fe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(Te+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return B}const oe={};oe[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ve(i.DEPTH_TEST),c.setFunc(Sr),nt(!1),Ut(yc),ve(i.CULL_FACE),ft(hi);function ve(H){m[H]!==!0&&(i.enable(H),m[H]=!0)}function ie(H){m[H]!==!1&&(i.disable(H),m[H]=!1)}function ye(H,Te){return _[H]!==Te?(i.bindFramebuffer(H,Te),_[H]=Te,H===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Te),H===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function We(H,Te){let Ee=v,Pe=!1;if(H){Ee=g.get(Te),Ee===void 0&&(Ee=[],g.set(Te,Ee));const $=H.textures;if(Ee.length!==$.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let B=0,Fe=$.length;B<Fe;B++)Ee[B]=i.COLOR_ATTACHMENT0+B;Ee.length=$.length,Pe=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(Ee)}function Xe(H){return b!==H?(i.useProgram(H),b=H,!0):!1}const yt={[qi]:i.FUNC_ADD,[x_]:i.FUNC_SUBTRACT,[S_]:i.FUNC_REVERSE_SUBTRACT};yt[y_]=i.MIN,yt[E_]=i.MAX;const ot={[M_]:i.ZERO,[b_]:i.ONE,[T_]:i.SRC_COLOR,[So]:i.SRC_ALPHA,[D_]:i.SRC_ALPHA_SATURATE,[C_]:i.DST_COLOR,[A_]:i.DST_ALPHA,[w_]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[P_]:i.ONE_MINUS_DST_COLOR,[R_]:i.ONE_MINUS_DST_ALPHA,[F_]:i.CONSTANT_COLOR,[L_]:i.ONE_MINUS_CONSTANT_COLOR,[I_]:i.CONSTANT_ALPHA,[U_]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(H,Te,Ee,Pe,$,B,Fe,Ye,vt,lt){if(H===hi){P===!0&&(ie(i.BLEND),P=!1);return}if(P===!1&&(ve(i.BLEND),P=!0),H!==v_){if(H!==E||lt!==I){if((S!==qi||L!==qi)&&(i.blendEquation(i.FUNC_ADD),S=qi,L=qi),lt)switch(H){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Et("WebGLState: Invalid blending: ",H);break}else switch(H){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mc:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",H);break}D=null,F=null,O=null,C=null,W.set(0,0,0),A=0,E=H,I=lt}return}$=$||Te,B=B||Ee,Fe=Fe||Pe,(Te!==S||$!==L)&&(i.blendEquationSeparate(yt[Te],yt[$]),S=Te,L=$),(Ee!==D||Pe!==F||B!==O||Fe!==C)&&(i.blendFuncSeparate(ot[Ee],ot[Pe],ot[B],ot[Fe]),D=Ee,F=Pe,O=B,C=Fe),(Ye.equals(W)===!1||vt!==A)&&(i.blendColor(Ye.r,Ye.g,Ye.b,vt),W.copy(Ye),A=vt),E=H,I=!1}function Tt(H,Te){H.side===Ln?ie(i.CULL_FACE):ve(i.CULL_FACE);let Ee=H.side===hn;Te&&(Ee=!Ee),nt(Ee),H.blending===vr&&H.transparent===!1?ft(hi):ft(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),o.setMask(H.colorWrite);const Pe=H.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Pt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(H){k!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),k=H)}function Ut(H){H!==m_?(ve(i.CULL_FACE),H!==z&&(H===yc?i.cullFace(i.BACK):H===g_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),z=H}function V(H){H!==ne&&(Z&&i.lineWidth(H),ne=H)}function Pt(H,Te,Ee){H?(ve(i.POLYGON_OFFSET_FILL),(te!==Te||Q!==Ee)&&(te=Te,Q=Ee,c.getReversed()&&(Te=-Te),i.polygonOffset(Te,Ee))):ie(i.POLYGON_OFFSET_FILL)}function ut(H){H?ve(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function _t(H){H===void 0&&(H=i.TEXTURE0+re-1),pe!==H&&(i.activeTexture(H),pe=H)}function Ue(H,Te,Ee){Ee===void 0&&(pe===null?Ee=i.TEXTURE0+re-1:Ee=pe);let Pe=Ce[Ee];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ce[Ee]=Pe),(Pe.type!==H||Pe.texture!==Te)&&(pe!==Ee&&(i.activeTexture(Ee),pe=Ee),i.bindTexture(H,Te||oe[H]),Pe.type=H,Pe.texture=Te)}function U(){const H=Ce[pe];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function se(){try{i.texSubImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function he(){try{i.texSubImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function be(){try{i.texStorage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function He(){try{i.texStorage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function je(){try{i.texImage2D(...arguments)}catch(H){Et("WebGLState:",H)}}function xe(){try{i.texImage3D(...arguments)}catch(H){Et("WebGLState:",H)}}function Me(H){$e.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),$e.copy(H))}function Oe(H){Ze.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ze.copy(H))}function Be(H,Te){let Ee=h.get(Te);Ee===void 0&&(Ee=new WeakMap,h.set(Te,Ee));let Pe=Ee.get(H);Pe===void 0&&(Pe=i.getUniformBlockIndex(Te,H.name),Ee.set(H,Pe))}function De(H,Te){const Pe=h.get(Te).get(H);p.get(Te)!==Pe&&(i.uniformBlockBinding(Te,Pe,H.__bindingPointIndex),p.set(Te,Pe))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},pe=null,Ce={},_={},g=new WeakMap,v=[],b=null,P=!1,E=null,S=null,D=null,F=null,L=null,O=null,C=null,W=new gt(0,0,0),A=0,I=!1,k=null,z=null,ne=null,te=null,Q=null,$e.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:ve,disable:ie,bindFramebuffer:ye,drawBuffers:We,useProgram:Xe,setBlending:ft,setMaterial:Tt,setFlipSided:nt,setCullFace:Ut,setLineWidth:V,setPolygonOffset:Pt,setScissorTest:ut,activeTexture:_t,bindTexture:Ue,unbindTexture:U,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:je,texImage3D:xe,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:be,texStorage3D:He,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:Ne,scissor:Me,viewport:Oe,reset:it}}function ME(i,e,t,n,s,o,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,m=new WeakMap;let _;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,M){return v?new OffscreenCanvas(U,M):Kr("canvas")}function P(U,M,G){let se=1;const he=Ue(U);if((he.width>G||he.height>G)&&(se=G/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const le=Math.floor(se*he.width),Ne=Math.floor(se*he.height);_===void 0&&(_=b(le,Ne));const be=M?b(le,Ne):_;return be.width=le,be.height=Ne,be.getContext("2d").drawImage(U,0,0,le,Ne),et("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+le+"x"+Ne+")."),be}else return"data"in U&&et("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function E(U){return U.generateMipmaps}function S(U){i.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function F(U,M,G,se,he=!1){if(U!==null){if(i[U]!==void 0)return i[U];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let le=M;if(M===i.RED&&(G===i.FLOAT&&(le=i.R32F),G===i.HALF_FLOAT&&(le=i.R16F),G===i.UNSIGNED_BYTE&&(le=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.R8UI),G===i.UNSIGNED_SHORT&&(le=i.R16UI),G===i.UNSIGNED_INT&&(le=i.R32UI),G===i.BYTE&&(le=i.R8I),G===i.SHORT&&(le=i.R16I),G===i.INT&&(le=i.R32I)),M===i.RG&&(G===i.FLOAT&&(le=i.RG32F),G===i.HALF_FLOAT&&(le=i.RG16F),G===i.UNSIGNED_BYTE&&(le=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RG8UI),G===i.UNSIGNED_SHORT&&(le=i.RG16UI),G===i.UNSIGNED_INT&&(le=i.RG32UI),G===i.BYTE&&(le=i.RG8I),G===i.SHORT&&(le=i.RG16I),G===i.INT&&(le=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RGB8UI),G===i.UNSIGNED_SHORT&&(le=i.RGB16UI),G===i.UNSIGNED_INT&&(le=i.RGB32UI),G===i.BYTE&&(le=i.RGB8I),G===i.SHORT&&(le=i.RGB16I),G===i.INT&&(le=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),G===i.UNSIGNED_INT&&(le=i.RGBA32UI),G===i.BYTE&&(le=i.RGBA8I),G===i.SHORT&&(le=i.RGBA16I),G===i.INT&&(le=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),M===i.RGBA){const Ne=he?ss:St.getTransfer(se);G===i.FLOAT&&(le=i.RGBA32F),G===i.HALF_FLOAT&&(le=i.RGBA16F),G===i.UNSIGNED_BYTE&&(le=Ne===Ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function L(U,M){let G;return U?M===null||M===ei||M===jr?G=i.DEPTH24_STENCIL8:M===Yn?G=i.DEPTH32F_STENCIL8:M===qr&&(G=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ei||M===jr?G=i.DEPTH_COMPONENT24:M===Yn?G=i.DEPTH_COMPONENT32F:M===qr&&(G=i.DEPTH_COMPONENT16),G}function O(U,M){return E(U)===!0||U.isFramebufferTexture&&U.minFilter!==Jt&&U.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function C(U){const M=U.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&m.delete(M)}function W(U){const M=U.target;M.removeEventListener("dispose",W),k(M)}function A(U){const M=n.get(U);if(M.__webglInit===void 0)return;const G=U.source,se=g.get(G);if(se){const he=se[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&I(U),Object.keys(se).length===0&&g.delete(G)}n.remove(U)}function I(U){const M=n.get(U);i.deleteTexture(M.__webglTexture);const G=U.source,se=g.get(G);delete se[M.__cacheKey],c.memory.textures--}function k(U){const M=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let he=0;he<M.__webglFramebuffer[se].length;he++)i.deleteFramebuffer(M.__webglFramebuffer[se][he]);else i.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)i.deleteFramebuffer(M.__webglFramebuffer[se]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=U.textures;for(let se=0,he=G.length;se<he;se++){const le=n.get(G[se]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),c.memory.textures--),n.remove(G[se])}n.remove(U)}let z=0;function ne(){z=0}function te(){const U=z;return U>=s.maxTextures&&et("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),z+=1,U}function Q(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function re(U,M){const G=n.get(U);if(U.isVideoTexture&&ut(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){const se=U.image;if(se===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,U,M);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function Z(U,M){const G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){oe(G,U,M);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function J(U,M){const G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){oe(G,U,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function Se(U,M){const G=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&G.__version!==U.version){ve(G,U,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const pe={[as]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Co]:i.MIRRORED_REPEAT},Ce={[Jt]:i.NEAREST,[B_]:i.NEAREST_MIPMAP_NEAREST,[Ra]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Ns]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},Ie={[V_]:i.NEVER,[X_]:i.ALWAYS,[G_]:i.LESS,[Sl]:i.LEQUAL,[H_]:i.EQUAL,[yl]:i.GEQUAL,[W_]:i.GREATER,[$_]:i.NOTEQUAL};function Ae(U,M){if(M.type===Yn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===Ns||M.magFilter===Ra||M.magFilter===Yi||M.minFilter===an||M.minFilter===Ns||M.minFilter===Ra||M.minFilter===Yi)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,pe[M.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,pe[M.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,pe[M.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Ce[M.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Ce[M.minFilter]),M.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==Ra&&M.minFilter!==Yi||M.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $e(U,M){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",C));const se=M.source;let he=g.get(se);he===void 0&&(he={},g.set(se,he));const le=Q(M);if(le!==U.__cacheKey){he[le]===void 0&&(he[le]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,G=!0),he[le].usedTimes++;const Ne=he[U.__cacheKey];Ne!==void 0&&(he[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&I(M)),U.__cacheKey=le,U.__webglTexture=he[le].texture}return G}function Ze(U,M,G){return Math.floor(Math.floor(U/G)/M)}function Je(U,M,G,se){const le=U.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,se,M.data);else{le.sort((xe,Me)=>xe.start-Me.start);let Ne=0;for(let xe=1;xe<le.length;xe++){const Me=le[Ne],Oe=le[xe],Be=Me.start+Me.count,De=Ze(Oe.start,M.width,4),it=Ze(Me.start,M.width,4);Oe.start<=Be+1&&De===it&&Ze(Oe.start+Oe.count-1,M.width,4)===De?Me.count=Math.max(Me.count,Oe.start+Oe.count-Me.start):(++Ne,le[Ne]=Oe)}le.length=Ne+1;const be=i.getParameter(i.UNPACK_ROW_LENGTH),He=i.getParameter(i.UNPACK_SKIP_PIXELS),je=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let xe=0,Me=le.length;xe<Me;xe++){const Oe=le[xe],Be=Math.floor(Oe.start/4),De=Math.ceil(Oe.count/4),it=Be%M.width,H=Math.floor(Be/M.width),Te=De,Ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,it),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,it,H,Te,Ee,G,se,M.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,je)}}function oe(U,M,G){let se=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=i.TEXTURE_3D);const he=$e(U,M),le=M.source;t.bindTexture(se,U.__webglTexture,i.TEXTURE0+G);const Ne=n.get(le);if(le.version!==Ne.__version||he===!0){t.activeTexture(i.TEXTURE0+G);const be=St.getPrimaries(St.workingColorSpace),He=M.colorSpace===Ri?null:St.getPrimaries(M.colorSpace),je=M.colorSpace===Ri||be===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let xe=P(M.image,!1,s.maxTextureSize);xe=_t(M,xe);const Me=o.convert(M.format,M.colorSpace),Oe=o.convert(M.type);let Be=F(M.internalFormat,Me,Oe,M.colorSpace,M.isVideoTexture);Ae(se,M);let De;const it=M.mipmaps,H=M.isVideoTexture!==!0,Te=Ne.__version===void 0||he===!0,Ee=le.dataReady,Pe=O(M,xe);if(M.isDepthTexture)Be=L(M.format===Ki,M.type),Te&&(H?t.texStorage2D(i.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Be,xe.width,xe.height,0,Me,Oe,null));else if(M.isDataTexture)if(it.length>0){H&&Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Be,it[0].width,it[0].height);for(let $=0,B=it.length;$<B;$++)De=it[$],H?Ee&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,De.width,De.height,Me,Oe,De.data):t.texImage2D(i.TEXTURE_2D,$,Be,De.width,De.height,0,Me,Oe,De.data);M.generateMipmaps=!1}else H?(Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Be,xe.width,xe.height),Ee&&Je(M,xe,Me,Oe)):t.texImage2D(i.TEXTURE_2D,0,Be,xe.width,xe.height,0,Me,Oe,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Be,it[0].width,it[0].height,xe.depth);for(let $=0,B=it.length;$<B;$++)if(De=it[$],M.format!==Un)if(Me!==null)if(H){if(Ee)if(M.layerUpdates.size>0){const Fe=Kc(De.width,De.height,M.format,M.type);for(const Ye of M.layerUpdates){const vt=De.data.subarray(Ye*Fe/De.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Ye,De.width,De.height,1,Me,vt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,De.width,De.height,xe.depth,Me,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Be,De.width,De.height,xe.depth,0,De.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,De.width,De.height,xe.depth,Me,Oe,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Be,De.width,De.height,xe.depth,0,Me,Oe,De.data)}else{H&&Te&&t.texStorage2D(i.TEXTURE_2D,Pe,Be,it[0].width,it[0].height);for(let $=0,B=it.length;$<B;$++)De=it[$],M.format!==Un?Me!==null?H?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,De.width,De.height,Me,De.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Be,De.width,De.height,0,De.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,De.width,De.height,Me,Oe,De.data):t.texImage2D(i.TEXTURE_2D,$,Be,De.width,De.height,0,Me,Oe,De.data)}else if(M.isDataArrayTexture)if(H){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Be,xe.width,xe.height,xe.depth),Ee)if(M.layerUpdates.size>0){const $=Kc(xe.width,xe.height,M.format,M.type);for(const B of M.layerUpdates){const Fe=xe.data.subarray(B*$/xe.data.BYTES_PER_ELEMENT,(B+1)*$/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,B,xe.width,xe.height,1,Me,Oe,Fe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Me,Oe,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,Me,Oe,xe.data);else if(M.isData3DTexture)H?(Te&&t.texStorage3D(i.TEXTURE_3D,Pe,Be,xe.width,xe.height,xe.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Me,Oe,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,Me,Oe,xe.data);else if(M.isFramebufferTexture){if(Te)if(H)t.texStorage2D(i.TEXTURE_2D,Pe,Be,xe.width,xe.height);else{let $=xe.width,B=xe.height;for(let Fe=0;Fe<Pe;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,Be,$,B,0,Me,Oe,null),$>>=1,B>>=1}}else if(it.length>0){if(H&&Te){const $=Ue(it[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Be,$.width,$.height)}for(let $=0,B=it.length;$<B;$++)De=it[$],H?Ee&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Me,Oe,De):t.texImage2D(i.TEXTURE_2D,$,Be,Me,Oe,De);M.generateMipmaps=!1}else if(H){if(Te){const $=Ue(xe);t.texStorage2D(i.TEXTURE_2D,Pe,Be,$.width,$.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Oe,xe)}else t.texImage2D(i.TEXTURE_2D,0,Be,Me,Oe,xe);E(M)&&S(se),Ne.__version=le.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function ve(U,M,G){if(M.image.length!==6)return;const se=$e(U,M),he=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+G);const le=n.get(he);if(he.version!==le.__version||se===!0){t.activeTexture(i.TEXTURE0+G);const Ne=St.getPrimaries(St.workingColorSpace),be=M.colorSpace===Ri?null:St.getPrimaries(M.colorSpace),He=M.colorSpace===Ri||Ne===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const je=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let B=0;B<6;B++)!je&&!xe?Me[B]=P(M.image[B],!0,s.maxCubemapSize):Me[B]=xe?M.image[B].image:M.image[B],Me[B]=_t(M,Me[B]);const Oe=Me[0],Be=o.convert(M.format,M.colorSpace),De=o.convert(M.type),it=F(M.internalFormat,Be,De,M.colorSpace),H=M.isVideoTexture!==!0,Te=le.__version===void 0||se===!0,Ee=he.dataReady;let Pe=O(M,Oe);Ae(i.TEXTURE_CUBE_MAP,M);let $;if(je){H&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,it,Oe.width,Oe.height);for(let B=0;B<6;B++){$=Me[B].mipmaps;for(let Fe=0;Fe<$.length;Fe++){const Ye=$[Fe];M.format!==Un?Be!==null?H?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,0,0,Ye.width,Ye.height,Be,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,it,Ye.width,Ye.height,0,Ye.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,0,0,Ye.width,Ye.height,Be,De,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,it,Ye.width,Ye.height,0,Be,De,Ye.data)}}}else{if($=M.mipmaps,H&&Te){$.length>0&&Pe++;const B=Ue(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,it,B.width,B.height)}for(let B=0;B<6;B++)if(xe){H?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Me[B].width,Me[B].height,Be,De,Me[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,it,Me[B].width,Me[B].height,0,Be,De,Me[B].data);for(let Fe=0;Fe<$.length;Fe++){const vt=$[Fe].image[B].image;H?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,0,0,vt.width,vt.height,Be,De,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,it,vt.width,vt.height,0,Be,De,vt.data)}}else{H?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Be,De,Me[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,it,Be,De,Me[B]);for(let Fe=0;Fe<$.length;Fe++){const Ye=$[Fe];H?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,0,0,Be,De,Ye.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,it,Be,De,Ye.image[B])}}}E(M)&&S(i.TEXTURE_CUBE_MAP),le.__version=he.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function ie(U,M,G,se,he,le){const Ne=o.convert(G.format,G.colorSpace),be=o.convert(G.type),He=F(G.internalFormat,Ne,be,G.colorSpace),je=n.get(M),xe=n.get(G);if(xe.__renderTarget=M,!je.__hasExternalTextures){const Me=Math.max(1,M.width>>le),Oe=Math.max(1,M.height>>le);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,le,He,Me,Oe,M.depth,0,Ne,be,null):t.texImage2D(he,le,He,Me,Oe,0,Ne,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Pt(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,he,xe.__webglTexture,0,V(M)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,he,xe.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(U,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,U),M.depthBuffer){const se=M.depthTexture,he=se&&se.isDepthTexture?se.type:null,le=L(M.stencilBuffer,he),Ne=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(M),le,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(M),le,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,le,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,U)}else{const se=M.textures;for(let he=0;he<se.length;he++){const le=se[he],Ne=o.convert(le.format,le.colorSpace),be=o.convert(le.type),He=F(le.internalFormat,Ne,be,le.colorSpace);Pt(M)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(M),He,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(M),He,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,He,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(U,M,G){const se=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),se){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M.depthTexture);const je=o.convert(M.depthTexture.format),xe=o.convert(M.depthTexture.type);let Me;M.depthTexture.format===gi?Me=i.DEPTH_COMPONENT24:M.depthTexture.format===Ki&&(Me=i.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Me,M.width,M.height,0,je,xe,null)}}else re(M.depthTexture,0);const le=he.__webglTexture,Ne=V(M),be=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,He=M.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===gi)Pt(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,He,be,le,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,He,be,le,0);else if(M.depthTexture.format===Ki)Pt(M)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,He,be,le,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,He,be,le,0);else throw new Error("Unknown depthTexture format")}function Xe(U){const M=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const se=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=se}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let se=0;se<6;se++)We(M.__webglFramebuffer[se],U,se);else{const se=U.texture.mipmaps;se&&se.length>0?We(M.__webglFramebuffer[0],U,0):We(M.__webglFramebuffer,U,0)}else if(G){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=i.createRenderbuffer(),ye(M.__webglDepthbuffer[se],U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,le)}}else{const se=U.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ye(M.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(U,M,G){const se=n.get(U);M!==void 0&&ie(se.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Xe(U)}function ot(U){const M=U.texture,G=n.get(U),se=n.get(M);U.addEventListener("dispose",W);const he=U.textures,le=U.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=M.version,c.memory.textures++),le){G.__webglFramebuffer=[];for(let be=0;be<6;be++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[be]=[];for(let He=0;He<M.mipmaps.length;He++)G.__webglFramebuffer[be][He]=i.createFramebuffer()}else G.__webglFramebuffer[be]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let be=0;be<M.mipmaps.length;be++)G.__webglFramebuffer[be]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let be=0,He=he.length;be<He;be++){const je=n.get(he[be]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&Pt(U)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){const He=he[be];G.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[be]);const je=o.convert(He.format,He.colorSpace),xe=o.convert(He.type),Me=F(He.internalFormat,je,xe,He.colorSpace,U.isXRRenderTarget===!0),Oe=V(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Me,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,G.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,M);for(let be=0;be<6;be++)if(M.mipmaps&&M.mipmaps.length>0)for(let He=0;He<M.mipmaps.length;He++)ie(G.__webglFramebuffer[be][He],U,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,He);else ie(G.__webglFramebuffer[be],U,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);E(M)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let be=0,He=he.length;be<He;be++){const je=he[be],xe=n.get(je);let Me=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,xe.__webglTexture),Ae(Me,je),ie(G.__webglFramebuffer,U,je,i.COLOR_ATTACHMENT0+be,Me,0),E(je)&&S(Me)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,se.__webglTexture),Ae(be,M),M.mipmaps&&M.mipmaps.length>0)for(let He=0;He<M.mipmaps.length;He++)ie(G.__webglFramebuffer[He],U,M,i.COLOR_ATTACHMENT0,be,He);else ie(G.__webglFramebuffer,U,M,i.COLOR_ATTACHMENT0,be,0);E(M)&&S(be),t.unbindTexture()}U.depthBuffer&&Xe(U)}function ft(U){const M=U.textures;for(let G=0,se=M.length;G<se;G++){const he=M[G];if(E(he)){const le=D(U),Ne=n.get(he).__webglTexture;t.bindTexture(le,Ne),S(le),t.unbindTexture()}}}const Tt=[],nt=[];function Ut(U){if(U.samples>0){if(Pt(U)===!1){const M=U.textures,G=U.width,se=U.height;let he=i.COLOR_BUFFER_BIT;const le=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(U),be=M.length>1;if(be)for(let je=0;je<M.length;je++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const He=U.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let je=0;je<M.length;je++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[je]);const xe=n.get(M[je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,G,se,0,0,G,se,he,i.NEAREST),p===!0&&(Tt.length=0,nt.length=0,Tt.push(i.COLOR_ATTACHMENT0+je),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Tt.push(le),nt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let je=0;je<M.length;je++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[je]);const xe=n.get(M[je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const M=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function V(U){return Math.min(s.maxSamples,U.samples)}function Pt(U){const M=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(U){const M=c.render.frame;m.get(U)!==M&&(m.set(U,M),U.update())}function _t(U,M){const G=U.colorSpace,se=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==Mr&&G!==Ri&&(St.getTransfer(G)===Ct?(se!==Un||he!==_n)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",G)),M}function Ue(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=ne,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=Se,this.rebindTextures=yt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bE(i,e){function t(n,s=Ri){let o;const c=St.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hu)return i.BYTE;if(n===Wu)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===mi)return i.HALF_FLOAT;if(n===qu)return i.ALPHA;if(n===ju)return i.RGB;if(n===Un)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Yu)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===Er)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Ja||n===Qa||n===es||n===ts)if(c===Ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===es)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ts)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Do||n===Fo||n===Lo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Po)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Uo||n===No||n===Oo||n===Bo||n===ko||n===zo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Io||n===Uo)return c===Ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===No)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oo)return o.COMPRESSED_R11_EAC;if(n===Bo)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ko)return o.COMPRESSED_RG11_EAC;if(n===zo)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vo||n===Go||n===Ho||n===Wo||n===$o||n===Xo||n===qo||n===jo||n===Yo||n===Ko||n===Zo||n===Jo||n===Qo||n===el)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Vo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===nl||n===il)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===tl)return c===Ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===al||n===sl||n===ol)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===rl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===al)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wE=`
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

}`;class AE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:TE,fragmentShader:wE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bn(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends wr{constructor(e,t){super();const n=this;let s=null,o=1,c=null,d="local-floor",p=1,h=null,m=null,_=null,g=null,v=null,b=null;const P=typeof XRWebGLBinding<"u",E=new AE,S={},D=t.getContextAttributes();let F=null,L=null;const O=[],C=[],W=new bt;let A=null;const I=new En;I.viewport=new kt;const k=new En;k.viewport=new kt;const z=[I,k],ne=new zv;let te=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ws,O[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ws,O[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ws,O[oe]=ve),ve.getHandSpace()};function re(oe){const ve=C.indexOf(oe.inputSource);if(ve===-1)return;const ie=O[ve];ie!==void 0&&(ie.update(oe.inputSource,oe.frame,h||c),ie.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Z(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",J);for(let oe=0;oe<O.length;oe++){const ve=C[oe];ve!==null&&(C[oe]=null,O[oe].disconnect(ve))}te=null,Q=null,E.reset();for(const oe in S)delete S[oe];e.setRenderTarget(F),v=null,g=null,_=null,s=null,L=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){d=oe,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _===null&&P&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(F=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",J),D.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(W),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ye=null,We=null;D.depth&&(We=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=D.stencil?Ki:gi,ye=D.stencil?jr:ei);const Xe={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:o};_=this.getBinding(),g=_.createProjectionLayer(Xe),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Qn(g.textureWidth,g.textureHeight,{format:Un,type:_n,depthTexture:new Zr(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ie={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new Qn(v.framebufferWidth,v.framebufferHeight,{format:Un,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await s.requestReferenceSpace(d),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function J(oe){for(let ve=0;ve<oe.removed.length;ve++){const ie=oe.removed[ve],ye=C.indexOf(ie);ye>=0&&(C[ye]=null,O[ye].disconnect(ie))}for(let ve=0;ve<oe.added.length;ve++){const ie=oe.added[ve];let ye=C.indexOf(ie);if(ye===-1){for(let Xe=0;Xe<O.length;Xe++)if(Xe>=C.length){C.push(ie),ye=Xe;break}else if(C[Xe]===null){C[Xe]=ie,ye=Xe;break}if(ye===-1)break}const We=O[ye];We&&We.connect(ie)}}const Se=new ee,pe=new ee;function Ce(oe,ve,ie){Se.setFromMatrixPosition(ve.matrixWorld),pe.setFromMatrixPosition(ie.matrixWorld);const ye=Se.distanceTo(pe),We=ve.projectionMatrix.elements,Xe=ie.projectionMatrix.elements,yt=We[14]/(We[10]-1),ot=We[14]/(We[10]+1),ft=(We[9]+1)/We[5],Tt=(We[9]-1)/We[5],nt=(We[8]-1)/We[0],Ut=(Xe[8]+1)/Xe[0],V=yt*nt,Pt=yt*Ut,ut=ye/(-nt+Ut),_t=ut*-nt;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(_t),oe.translateZ(ut),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),We[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ue=yt+ut,U=ot+ut,M=V-_t,G=Pt+(ye-_t),se=ft*ot/U*Ue,he=Tt*ot/U*Ue;oe.projectionMatrix.makePerspective(M,G,se,he,Ue,U),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ie(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let ve=oe.near,ie=oe.far;E.texture!==null&&(E.depthNear>0&&(ve=E.depthNear),E.depthFar>0&&(ie=E.depthFar)),ne.near=k.near=I.near=ve,ne.far=k.far=I.far=ie,(te!==ne.near||Q!==ne.far)&&(s.updateRenderState({depthNear:ne.near,depthFar:ne.far}),te=ne.near,Q=ne.far),ne.layers.mask=oe.layers.mask|6,I.layers.mask=ne.layers.mask&-5,k.layers.mask=ne.layers.mask&-3;const ye=oe.parent,We=ne.cameras;Ie(ne,ye);for(let Xe=0;Xe<We.length;Xe++)Ie(We[Xe],ye);We.length===2?Ce(ne,I,k):ne.projectionMatrix.copy(I.projectionMatrix),Ae(oe,ne,ye)};function Ae(oe,ve,ie){ie===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(ie.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=ll*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(g===null&&v===null))return p},this.setFoveation=function(oe){p=oe,g!==null&&(g.fixedFoveation=oe),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=oe)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(ne)},this.getCameraTexture=function(oe){return S[oe]};let $e=null;function Ze(oe,ve){if(m=ve.getViewerPose(h||c),b=ve,m!==null){const ie=m.views;v!==null&&(e.setRenderTargetFramebuffer(L,v.framebuffer),e.setRenderTarget(L));let ye=!1;ie.length!==ne.cameras.length&&(ne.cameras.length=0,ye=!0);for(let ot=0;ot<ie.length;ot++){const ft=ie[ot];let Tt=null;if(v!==null)Tt=v.getViewport(ft);else{const Ut=_.getViewSubImage(g,ft);Tt=Ut.viewport,ot===0&&(e.setRenderTargetTextures(L,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(L))}let nt=z[ot];nt===void 0&&(nt=new En,nt.layers.enable(ot),nt.viewport=new kt,z[ot]=nt),nt.matrix.fromArray(ft.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ft.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ot===0&&(ne.matrix.copy(nt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),ye===!0&&ne.cameras.push(nt)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&P){_=n.getBinding();const ot=_.getDepthInformation(ie[0]);ot&&ot.isValid&&ot.texture&&E.init(ot,s.renderState)}if(We&&We.includes("camera-access")&&P){e.state.unbindTexture(),_=n.getBinding();for(let ot=0;ot<ie.length;ot++){const ft=ie[ot].camera;if(ft){let Tt=S[ft];Tt||(Tt=new rd,S[ft]=Tt);const nt=_.getCameraImage(ft);Tt.sourceTexture=nt}}}}for(let ie=0;ie<O.length;ie++){const ye=C[ie],We=O[ie];ye!==null&&We!==void 0&&We.update(ye,ve,h||c)}$e&&$e(oe,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),b=null}const Je=new od;Je.setAnimationLoop(Ze),this.setAnimationLoop=function(oe){$e=oe},this.dispose=function(){}}}const $i=new ti,CE=new Ot;function PE(i,e){function t(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function n(E,S){S.color.getRGB(E.fogColor.value,ad(i)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function s(E,S,D,F,L){S.isMeshBasicMaterial?o(E,S):S.isMeshLambertMaterial?(o(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(E,S),_(E,S)):S.isMeshPhongMaterial?(o(E,S),m(E,S),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(E,S),g(E,S),S.isMeshPhysicalMaterial&&v(E,S,L)):S.isMeshMatcapMaterial?(o(E,S),b(E,S)):S.isMeshDepthMaterial?o(E,S):S.isMeshDistanceMaterial?(o(E,S),P(E,S)):S.isMeshNormalMaterial?o(E,S):S.isLineBasicMaterial?(c(E,S),S.isLineDashedMaterial&&d(E,S)):S.isPointsMaterial?p(E,S,D,F):S.isSpriteMaterial?h(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,t(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,t(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,t(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===hn&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,t(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===hn&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,t(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,t(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const D=e.get(S),F=D.envMap,L=D.envMapRotation;F&&(E.envMap.value=F,$i.copy(L),$i.x*=-1,$i.y*=-1,$i.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),E.envMapRotation.value.setFromMatrix4(CE.makeRotationFromEuler($i)),E.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,E.aoMapTransform))}function c(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,t(S.map,E.mapTransform))}function d(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function p(E,S,D,F){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*D,E.scale.value=F*.5,S.map&&(E.map.value=S.map,t(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,t(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function h(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,t(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,t(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function m(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function _(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function g(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function v(E,S,D){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===hn&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=D.texture,E.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,E.specularIntensityMapTransform))}function b(E,S){S.matcap&&(E.matcap.value=S.matcap)}function P(E,S){const D=e.get(S).light;E.referencePosition.value.setFromMatrixPosition(D.matrixWorld),E.nearDistance.value=D.shadow.camera.near,E.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DE(i,e,t,n){let s={},o={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,F){const L=F.program;n.uniformBlockBinding(D,L)}function h(D,F){let L=s[D.id];L===void 0&&(b(D),L=m(D),s[D.id]=L,D.addEventListener("dispose",E));const O=F.program;n.updateUBOMapping(D,O);const C=e.render.frame;o[D.id]!==C&&(g(D),o[D.id]=C)}function m(D){const F=_();D.__bindingPointIndex=F;const L=i.createBuffer(),O=D.__size,C=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,L),L}function _(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const F=s[D.id],L=D.uniforms,O=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let C=0,W=L.length;C<W;C++){const A=Array.isArray(L[C])?L[C]:[L[C]];for(let I=0,k=A.length;I<k;I++){const z=A[I];if(v(z,C,I,O)===!0){const ne=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let Q=0;for(let re=0;re<te.length;re++){const Z=te[re],J=P(Z);typeof Z=="number"||typeof Z=="boolean"?(z.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,ne+Q,z.__data)):Z.isMatrix3?(z.__data[0]=Z.elements[0],z.__data[1]=Z.elements[1],z.__data[2]=Z.elements[2],z.__data[3]=0,z.__data[4]=Z.elements[3],z.__data[5]=Z.elements[4],z.__data[6]=Z.elements[5],z.__data[7]=0,z.__data[8]=Z.elements[6],z.__data[9]=Z.elements[7],z.__data[10]=Z.elements[8],z.__data[11]=0):(Z.toArray(z.__data,Q),Q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ne,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(D,F,L,O){const C=D.value,W=F+"_"+L;if(O[W]===void 0)return typeof C=="number"||typeof C=="boolean"?O[W]=C:O[W]=C.clone(),!0;{const A=O[W];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return O[W]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function b(D){const F=D.uniforms;let L=0;const O=16;for(let W=0,A=F.length;W<A;W++){const I=Array.isArray(F[W])?F[W]:[F[W]];for(let k=0,z=I.length;k<z;k++){const ne=I[k],te=Array.isArray(ne.value)?ne.value:[ne.value];for(let Q=0,re=te.length;Q<re;Q++){const Z=te[Q],J=P(Z),Se=L%O,pe=Se%J.boundary,Ce=Se+pe;L+=pe,Ce!==0&&O-Ce<J.storage&&(L+=O-Ce),ne.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=L,L+=J.storage}}}const C=L%O;return C>0&&(L+=O-C),D.__size=L,D.__cache={},this}function P(D){const F={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(F.boundary=4,F.storage=4):D.isVector2?(F.boundary=8,F.storage=8):D.isVector3||D.isColor?(F.boundary=16,F.storage=12):D.isVector4?(F.boundary=16,F.storage=16):D.isMatrix3?(F.boundary=48,F.storage=48):D.isMatrix4?(F.boundary=64,F.storage=64):D.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",D),F}function E(D){const F=D.target;F.removeEventListener("dispose",E);const L=c.indexOf(F.__bindingPointIndex);c.splice(L,1),i.deleteBuffer(s[F.id]),delete s[F.id],delete o[F.id]}function S(){for(const D in s)i.deleteBuffer(s[D]);c=[],s={},o={}}return{bind:p,update:h,dispose:S}}const FE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qn=null;function LE(){return qn===null&&(qn=new vv(FE,16,16,Er,mi),qn.name="DFG_LUT",qn.minFilter=an,qn.magFilter=an,qn.wrapS=di,qn.wrapT=di,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class IE{constructor(e={}){const{canvas:t=j_(),context:n=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:v=_n}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=c;const P=v,E=new Set([xl,vl,_l]),S=new Set([_n,ei,qr,jr,ml,gl]),D=new Uint32Array(4),F=new Int32Array(4);let L=null,O=null;const C=[],W=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let k=!1;this._outputColorSpace=dn;let z=0,ne=0,te=null,Q=-1,re=null;const Z=new kt,J=new kt;let Se=null;const pe=new gt(0);let Ce=0,Ie=t.width,Ae=t.height,$e=1,Ze=null,Je=null;const oe=new kt(0,0,Ie,Ae),ve=new kt(0,0,Ie,Ae);let ie=!1;const ye=new Tl;let We=!1,Xe=!1;const yt=new Ot,ot=new ee,ft=new kt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Ut(){return te===null?$e:1}let V=n;function Pt(R,X){return t.getContext(R,X)}try{const R={alpha:!0,depth:s,stencil:o,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",vt,!1),V===null){const X="webgl2";if(V=Pt(X,R),V===null)throw Pt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Et("WebGLRenderer: "+R.message),R}let ut,_t,Ue,U,M,G,se,he,le,Ne,be,He,je,xe,Me,Oe,Be,De,it,H,Te,Ee,Pe;function $(){ut=new IS(V),ut.init(),Te=new bE(V,ut),_t=new wS(V,ut,e,Te),Ue=new EE(V,ut),_t.reversedDepthBuffer&&g&&Ue.buffers.depth.setReversed(!0),U=new OS(V),M=new lE,G=new ME(V,ut,Ue,M,_t,Te,U),se=new LS(I),he=new Gv(V),Ee=new bS(V,he),le=new US(V,he,U,Ee),Ne=new kS(V,le,he,Ee,U),De=new BS(V,_t,G),Me=new AS(M),be=new oE(I,se,ut,_t,Ee,Me),He=new PE(I,M),je=new uE,xe=new gE(ut),Be=new MS(I,se,Ue,Ne,b,p),Oe=new yE(I,Ne,_t),Pe=new DE(V,U,_t,Ue),it=new TS(V,ut,U),H=new NS(V,ut,U),U.programs=be.programs,I.capabilities=_t,I.extensions=ut,I.properties=M,I.renderLists=je,I.shadowMap=Oe,I.state=Ue,I.info=U}$(),P!==_n&&(A=new VS(P,t.width,t.height,s,o));const B=new RE(I,V);this.xr=B,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $e},this.setPixelRatio=function(R){R!==void 0&&($e=R,this.setSize(Ie,Ae,!1))},this.getSize=function(R){return R.set(Ie,Ae)},this.setSize=function(R,X,ae=!0){if(B.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=R,Ae=X,t.width=Math.floor(R*$e),t.height=Math.floor(X*$e),ae===!0&&(t.style.width=R+"px",t.style.height=X+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(Ie*$e,Ae*$e).floor()},this.setDrawingBufferSize=function(R,X,ae){Ie=R,Ae=X,$e=ae,t.width=Math.floor(R*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,R,X)},this.setEffects=function(R){if(P===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let X=0;X<R.length;X++)if(R[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,X,ae,K){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,X,ae,K),Ue.viewport(Z.copy(oe).multiplyScalar($e).round())},this.getScissor=function(R){return R.copy(ve)},this.setScissor=function(R,X,ae,K){R.isVector4?ve.set(R.x,R.y,R.z,R.w):ve.set(R,X,ae,K),Ue.scissor(J.copy(ve).multiplyScalar($e).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(R){Ue.setScissorTest(ie=R)},this.setOpaqueSort=function(R){Ze=R},this.setTransparentSort=function(R){Je=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ae=!0){let K=0;if(R){let j=!1;if(te!==null){const we=te.texture.format;j=E.has(we)}if(j){const we=te.texture.type,Le=S.has(we),fe=Be.getClearColor(),ze=Be.getClearAlpha(),Ve=fe.r,Qe=fe.g,tt=fe.b;Le?(D[0]=Ve,D[1]=Qe,D[2]=tt,D[3]=ze,V.clearBufferuiv(V.COLOR,0,D)):(F[0]=Ve,F[1]=Qe,F[2]=tt,F[3]=ze,V.clearBufferiv(V.COLOR,0,F))}else K|=V.COLOR_BUFFER_BIT}X&&(K|=V.DEPTH_BUFFER_BIT),ae&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Be.dispose(),je.dispose(),xe.dispose(),M.dispose(),se.dispose(),Ne.dispose(),Ee.dispose(),Pe.dispose(),be.dispose(),B.dispose(),B.removeEventListener("sessionstart",vn),B.removeEventListener("sessionend",sa),xn.stop()};function Fe(R){R.preventDefault(),Cc("WebGLRenderer: Context Lost."),k=!0}function Ye(){Cc("WebGLRenderer: Context Restored."),k=!1;const R=U.autoReset,X=Oe.enabled,ae=Oe.autoUpdate,K=Oe.needsUpdate,j=Oe.type;$(),U.autoReset=R,Oe.enabled=X,Oe.autoUpdate=ae,Oe.needsUpdate=K,Oe.type=j}function vt(R){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){const X=R.target;X.removeEventListener("dispose",lt),Tn(X)}function Tn(R){Gt(R),M.remove(R)}function Gt(R){const X=M.get(R).programs;X!==void 0&&(X.forEach(function(ae){be.releaseProgram(ae)}),R.isShaderMaterial&&be.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ae,K,j,we){X===null&&(X=Tt);const Le=j.isMesh&&j.matrixWorld.determinant()<0,fe=ms(R,X,ae,K,j);Ue.setMaterial(K,Le);let ze=ae.index,Ve=1;if(K.wireframe===!0){if(ze=le.getWireframeAttribute(ae),ze===void 0)return;Ve=2}const Qe=ae.drawRange,tt=ae.attributes.position;let Ge=Qe.start*Ve,Mt=(Qe.start+Qe.count)*Ve;we!==null&&(Ge=Math.max(Ge,we.start*Ve),Mt=Math.min(Mt,(we.start+we.count)*Ve)),ze!==null?(Ge=Math.max(Ge,0),Mt=Math.min(Mt,ze.count)):tt!=null&&(Ge=Math.max(Ge,0),Mt=Math.min(Mt,tt.count));const Nt=Mt-Ge;if(Nt<0||Nt===1/0)return;Ee.setup(j,K,fe,ae,ze);let Ft,At=it;if(ze!==null&&(Ft=he.get(ze),At=H,At.setIndex(Ft)),j.isMesh)K.wireframe===!0?(Ue.setLineWidth(K.wireframeLinewidth*Ut()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(j.isLine){let Ht=K.linewidth;Ht===void 0&&(Ht=1),Ue.setLineWidth(Ht*Ut()),j.isLineSegments?At.setMode(V.LINES):j.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else j.isPoints?At.setMode(V.POINTS):j.isSprite&&At.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)os("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))At.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ht=j._multiDrawStarts,y=j._multiDrawCounts,ct=j._multiDrawCount,mt=ze?he.get(ze).bytesPerElement:1,en=M.get(K).currentProgram.getUniforms();for(let Zt=0;Zt<ct;Zt++)en.setValue(V,"_gl_DrawID",Zt),At.render(Ht[Zt]/mt,y[Zt])}else if(j.isInstancedMesh)At.renderInstances(Ge,Nt,j.count);else if(ae.isInstancedBufferGeometry){const Ht=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,y=Math.min(ae.instanceCount,Ht);At.renderInstances(Ge,Nt,y)}else At.render(Ge,Nt)};function Fi(R,X,ae){R.transparent===!0&&R.side===Ln&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,Li(R,X,ae),R.side=Pi,R.needsUpdate=!0,Li(R,X,ae),R.side=Ln):Li(R,X,ae)}this.compile=function(R,X,ae=null){ae===null&&(ae=R),O=xe.get(ae),O.init(X),W.push(O),ae.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(O.pushLight(j),j.castShadow&&O.pushShadow(j))}),R!==ae&&R.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(O.pushLight(j),j.castShadow&&O.pushShadow(j))}),O.setupLights();const K=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const fe=we[Le];Fi(fe,ae,j),K.add(fe)}else Fi(we,ae,j),K.add(we)}),O=W.pop(),K},this.compileAsync=function(R,X,ae=null){const K=this.compile(R,X,ae);return new Promise(j=>{function we(){if(K.forEach(function(Le){M.get(Le).currentProgram.isReady()&&K.delete(Le)}),K.size===0){j(R);return}setTimeout(we,10)}ut.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Rr=null;function ps(R){Rr&&Rr(R)}function vn(){xn.stop()}function sa(){xn.start()}const xn=new od;xn.setAnimationLoop(ps),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(R){Rr=R,B.setAnimationLoop(R),R===null?xn.stop():xn.start()},B.addEventListener("sessionstart",vn),B.addEventListener("sessionend",sa),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const ae=B.enabled===!0&&B.isPresenting===!0,K=A!==null&&(te===null||ae)&&A.begin(I,te);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(B.cameraAutoUpdate===!0&&B.updateCamera(X),X=B.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,X,te),O=xe.get(R,W.length),O.init(X),W.push(O),yt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ye.setFromProjectionMatrix(yt,Kn,X.reversedDepth),Xe=this.localClippingEnabled,We=Me.init(this.clippingPlanes,Xe),L=je.get(R,C.length),L.init(),C.push(L),B.enabled===!0&&B.isPresenting===!0){const Le=I.xr.getDepthSensingMesh();Le!==null&&_i(Le,X,-1/0,I.sortObjects)}_i(R,X,0,I.sortObjects),L.finish(),I.sortObjects===!0&&L.sort(Ze,Je),nt=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,nt&&Be.addToRenderList(L,R),this.info.render.frame++,We===!0&&Me.beginShadows();const j=O.state.shadowsArray;if(Oe.render(j,R,X),We===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&A.hasRenderPass())===!1){const Le=L.opaque,fe=L.transmissive;if(O.setupLights(),X.isArrayCamera){const ze=X.cameras;if(fe.length>0)for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const tt=ze[Ve];oa(Le,fe,R,tt)}nt&&Be.render(R);for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const tt=ze[Ve];Ji(L,R,tt,tt.viewport)}}else fe.length>0&&oa(Le,fe,R,X),nt&&Be.render(R),Ji(L,R,X)}te!==null&&ne===0&&(G.updateMultisampleRenderTarget(te),G.updateRenderTargetMipmap(te)),K&&A.end(I),R.isScene===!0&&R.onAfterRender(I,R,X),Ee.resetDefaultState(),Q=-1,re=null,W.pop(),W.length>0?(O=W[W.length-1],We===!0&&Me.setGlobalState(I.clippingPlanes,O.state.camera)):O=null,C.pop(),C.length>0?L=C[C.length-1]:L=null};function _i(R,X,ae,K){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ye.intersectsSprite(R)){K&&ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(yt);const Le=Ne.update(R),fe=R.material;fe.visible&&L.push(R,Le,fe,ae,ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ye.intersectsObject(R))){const Le=Ne.update(R),fe=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ft.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ft.copy(Le.boundingSphere.center)),ft.applyMatrix4(R.matrixWorld).applyMatrix4(yt)),Array.isArray(fe)){const ze=Le.groups;for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const tt=ze[Ve],Ge=fe[tt.materialIndex];Ge&&Ge.visible&&L.push(R,Le,Ge,ae,ft.z,tt)}}else fe.visible&&L.push(R,Le,fe,ae,ft.z,null)}}const we=R.children;for(let Le=0,fe=we.length;Le<fe;Le++)_i(we[Le],X,ae,K)}function Ji(R,X,ae,K){const{opaque:j,transmissive:we,transparent:Le}=R;O.setupLightsView(ae),We===!0&&Me.setGlobalState(I.clippingPlanes,ae),K&&Ue.viewport(Z.copy(K)),j.length>0&&Qi(j,X,ae),we.length>0&&Qi(we,X,ae),Le.length>0&&Qi(Le,X,ae),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function oa(R,X,ae,K){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[K.id]===void 0){const Ge=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[K.id]=new Qn(1,1,{generateMipmaps:!0,type:Ge?mi:_n,minFilter:Yi,samples:Math.max(4,_t.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const we=O.state.transmissionRenderTarget[K.id],Le=K.viewport||Z;we.setSize(Le.z*I.transmissionResolutionScale,Le.w*I.transmissionResolutionScale);const fe=I.getRenderTarget(),ze=I.getActiveCubeFace(),Ve=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(pe),Ce=I.getClearAlpha(),Ce<1&&I.setClearColor(16777215,.5),I.clear(),nt&&Be.render(ae);const Qe=I.toneMapping;I.toneMapping=Jn;const tt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),O.setupLightsView(K),We===!0&&Me.setGlobalState(I.clippingPlanes,K),Qi(R,ae,K),G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Mt=0,Nt=X.length;Mt<Nt;Mt++){const Ft=X[Mt],{object:At,geometry:Ht,material:y,group:ct}=Ft;if(y.side===Ln&&At.layers.test(K.layers)){const mt=y.side;y.side=hn,y.needsUpdate=!0,la(At,ae,K,Ht,y,ct),y.side=mt,y.needsUpdate=!0,Ge=!0}}Ge===!0&&(G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we))}I.setRenderTarget(fe,ze,Ve),I.setClearColor(pe,Ce),tt!==void 0&&(K.viewport=tt),I.toneMapping=Qe}function Qi(R,X,ae){const K=X.isScene===!0?X.overrideMaterial:null;for(let j=0,we=R.length;j<we;j++){const Le=R[j],{object:fe,geometry:ze,group:Ve}=Le;let Qe=Le.material;Qe.allowOverride===!0&&K!==null&&(Qe=K),fe.layers.test(ae.layers)&&la(fe,X,ae,ze,Qe,Ve)}}function la(R,X,ae,K,j,we){R.onBeforeRender(I,X,ae,K,j,we),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(I,X,ae,K,R,we),j.transparent===!0&&j.side===Ln&&j.forceSinglePass===!1?(j.side=hn,j.needsUpdate=!0,I.renderBufferDirect(ae,X,K,j,R,we),j.side=Pi,j.needsUpdate=!0,I.renderBufferDirect(ae,X,K,j,R,we),j.side=Ln):I.renderBufferDirect(ae,X,K,j,R,we),R.onAfterRender(I,X,ae,K,j,we)}function Li(R,X,ae){X.isScene!==!0&&(X=Tt);const K=M.get(R),j=O.state.lights,we=O.state.shadowsArray,Le=j.state.version,fe=be.getParameters(R,j.state,we,X,ae),ze=be.getProgramCacheKey(fe);let Ve=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?X.environment:null,K.fog=X.fog;const Qe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=se.get(R.envMap||K.environment,Qe),K.envMapRotation=K.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",lt),Ve=new Map,K.programs=Ve);let tt=Ve.get(ze);if(tt!==void 0){if(K.currentProgram===tt&&K.lightsStateVersion===Le)return ua(R,fe),tt}else fe.uniforms=be.getUniforms(R),R.onBeforeCompile(fe,I),tt=be.acquireProgram(fe,ze),Ve.set(ze,tt),K.uniforms=fe.uniforms;const Ge=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),ua(R,fe),K.needsLights=wt(R),K.lightsStateVersion=Le,K.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotLightMatrix.value=j.state.spotLightMatrix,Ge.spotLightMap.value=j.state.spotLightMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=tt,K.uniformsList=null,tt}function ca(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=ns.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function ua(R,X){const ae=M.get(R);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function ms(R,X,ae,K,j){X.isScene!==!0&&(X=Tt),G.resetTextureUnits();const we=X.fog,Le=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?X.environment:null,fe=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Mr,ze=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ve=se.get(K.envMap||Le,ze),Qe=K.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,tt=!!ae.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,Nt=!!ae.morphAttributes.color;let Ft=Jn;K.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ft=I.toneMapping);const At=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ht=At!==void 0?At.length:0,y=M.get(K),ct=O.state.lights;if(We===!0&&(Xe===!0||R!==re)){const zt=R===re&&K.id===Q;Me.setState(K,R,zt)}let mt=!1;K.version===y.__version?(y.needsLights&&y.lightsStateVersion!==ct.state.version||y.outputColorSpace!==fe||j.isBatchedMesh&&y.batching===!1||!j.isBatchedMesh&&y.batching===!0||j.isBatchedMesh&&y.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&y.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&y.instancing===!1||!j.isInstancedMesh&&y.instancing===!0||j.isSkinnedMesh&&y.skinning===!1||!j.isSkinnedMesh&&y.skinning===!0||j.isInstancedMesh&&y.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&y.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&y.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&y.instancingMorph===!1&&j.morphTexture!==null||y.envMap!==Ve||K.fog===!0&&y.fog!==we||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Me.numPlanes||y.numIntersection!==Me.numIntersection)||y.vertexAlphas!==Qe||y.vertexTangents!==tt||y.morphTargets!==Ge||y.morphNormals!==Mt||y.morphColors!==Nt||y.toneMapping!==Ft||y.morphTargetsCount!==Ht)&&(mt=!0):(mt=!0,y.__version=K.version);let en=y.currentProgram;mt===!0&&(en=Li(K,X,j));let Zt=!1,ri=!1,xi=!1;const Rt=en.getUniforms(),Wt=y.uniforms;if(Ue.useProgram(en.program)&&(Zt=!0,ri=!0,xi=!0),K.id!==Q&&(Q=K.id,ri=!0),Zt||re!==R){Ue.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Rt.setValue(V,"projectionMatrix",R.projectionMatrix),Rt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Vn=Rt.map.cameraPosition;Vn!==void 0&&Vn.setValue(V,ot.setFromMatrixPosition(R.matrixWorld)),_t.logarithmicDepthBuffer&&Rt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Rt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),re!==R&&(re=R,ri=!0,xi=!0)}if(y.needsLights&&(ct.state.directionalShadowMap.length>0&&Rt.setValue(V,"directionalShadowMap",ct.state.directionalShadowMap,G),ct.state.spotShadowMap.length>0&&Rt.setValue(V,"spotShadowMap",ct.state.spotShadowMap,G),ct.state.pointShadowMap.length>0&&Rt.setValue(V,"pointShadowMap",ct.state.pointShadowMap,G)),j.isSkinnedMesh){Rt.setOptional(V,j,"bindMatrix"),Rt.setOptional(V,j,"bindMatrixInverse");const zt=j.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Rt.setValue(V,"boneTexture",zt.boneTexture,G))}j.isBatchedMesh&&(Rt.setOptional(V,j,"batchingTexture"),Rt.setValue(V,"batchingTexture",j._matricesTexture,G),Rt.setOptional(V,j,"batchingIdTexture"),Rt.setValue(V,"batchingIdTexture",j._indirectTexture,G),Rt.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&Rt.setValue(V,"batchingColorTexture",j._colorsTexture,G));const zn=ae.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&De.update(j,ae,en),(ri||y.receiveShadow!==j.receiveShadow)&&(y.receiveShadow=j.receiveShadow,Rt.setValue(V,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&X.environment!==null&&(Wt.envMapIntensity.value=X.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=LE()),ri&&(Rt.setValue(V,"toneMappingExposure",I.toneMappingExposure),y.needsLights&&gs(Wt,xi),we&&K.fog===!0&&He.refreshFogUniforms(Wt,we),He.refreshMaterialUniforms(Wt,K,$e,Ae,O.state.transmissionRenderTarget[R.id]),ns.upload(V,ca(y),Wt,G)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ns.upload(V,ca(y),Wt,G),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Rt.setValue(V,"center",j.center),Rt.setValue(V,"modelViewMatrix",j.modelViewMatrix),Rt.setValue(V,"normalMatrix",j.normalMatrix),Rt.setValue(V,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const zt=K.uniformsGroups;for(let Vn=0,Si=zt.length;Vn<Si;Vn++){const Bt=zt[Vn];Pe.update(Bt,en),Pe.bind(Bt,en)}}return en}function gs(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function wt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(R,X,ae){const K=M.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=X,M.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ae,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ae=M.get(R);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const _s=V.createFramebuffer();this.setRenderTarget=function(R,X=0,ae=0){te=R,z=X,ne=ae;let K=null,j=!1,we=!1;if(R){const fe=M.get(R);if(fe.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(V.FRAMEBUFFER,fe.__webglFramebuffer),Z.copy(R.viewport),J.copy(R.scissor),Se=R.scissorTest,Ue.viewport(Z),Ue.scissor(J),Ue.setScissorTest(Se),Q=-1;return}else if(fe.__webglFramebuffer===void 0)G.setupRenderTarget(R);else if(fe.__hasExternalTextures)G.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(fe.__boundDepthTexture!==Qe){if(Qe!==null&&M.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(R)}}const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(we=!0);const Ve=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?K=Ve[X][ae]:K=Ve[X],j=!0):R.samples>0&&G.useMultisampledRTT(R)===!1?K=M.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[ae]:K=Ve,Z.copy(R.viewport),J.copy(R.scissor),Se=R.scissorTest}else Z.copy(oe).multiplyScalar($e).floor(),J.copy(ve).multiplyScalar($e).floor(),Se=ie;if(ae!==0&&(K=_s),Ue.bindFramebuffer(V.FRAMEBUFFER,K)&&Ue.drawBuffers(R,K),Ue.viewport(Z),Ue.scissor(J),Ue.setScissorTest(Se),j){const fe=M.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe.__webglTexture,ae)}else if(we){const fe=X;for(let ze=0;ze<R.textures.length;ze++){const Ve=M.get(R.textures[ze]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,ae,fe)}}else if(R!==null&&ae!==0){const fe=M.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fe.__webglTexture,ae)}Q=-1},this.readRenderTargetPixels=function(R,X,ae,K,j,we,Le,fe=0){if(!(R&&R.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){Ue.bindFramebuffer(V.FRAMEBUFFER,ze);try{const Ve=R.textures[fe],Qe=Ve.format,tt=Ve.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+fe),!_t.textureFormatReadable(Qe)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(tt)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-K&&ae>=0&&ae<=R.height-j&&V.readPixels(X,ae,K,j,Te.convert(Qe),Te.convert(tt),we)}finally{const Ve=te!==null?M.get(te).__webglFramebuffer:null;Ue.bindFramebuffer(V.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,X,ae,K,j,we,Le,fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze)if(X>=0&&X<=R.width-K&&ae>=0&&ae<=R.height-j){Ue.bindFramebuffer(V.FRAMEBUFFER,ze);const Ve=R.textures[fe],Qe=Ve.format,tt=Ve.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+fe),!_t.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.bufferData(V.PIXEL_PACK_BUFFER,we.byteLength,V.STREAM_READ),V.readPixels(X,ae,K,j,Te.convert(Qe),Te.convert(tt),0);const Mt=te!==null?M.get(te).__webglFramebuffer:null;Ue.bindFramebuffer(V.FRAMEBUFFER,Mt);const Nt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Y_(V,Nt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ge),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,we),V.deleteBuffer(Ge),V.deleteSync(Nt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ae=0){const K=Math.pow(2,-ae),j=Math.floor(R.image.width*K),we=Math.floor(R.image.height*K),Le=X!==null?X.x:0,fe=X!==null?X.y:0;G.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Le,fe,j,we),Ue.unbindTexture()};const da=V.createFramebuffer(),vi=V.createFramebuffer();this.copyTextureToTexture=function(R,X,ae=null,K=null,j=0,we=0){let Le,fe,ze,Ve,Qe,tt,Ge,Mt,Nt;const Ft=R.isCompressedTexture?R.mipmaps[we]:R.image;if(ae!==null)Le=ae.max.x-ae.min.x,fe=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,Ve=ae.min.x,Qe=ae.min.y,tt=ae.isBox3?ae.min.z:0;else{const Wt=Math.pow(2,-j);Le=Math.floor(Ft.width*Wt),fe=Math.floor(Ft.height*Wt),R.isDataArrayTexture?ze=Ft.depth:R.isData3DTexture?ze=Math.floor(Ft.depth*Wt):ze=1,Ve=0,Qe=0,tt=0}K!==null?(Ge=K.x,Mt=K.y,Nt=K.z):(Ge=0,Mt=0,Nt=0);const At=Te.convert(X.format),Ht=Te.convert(X.type);let y;X.isData3DTexture?(G.setTexture3D(X,0),y=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),y=V.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),y=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const ct=V.getParameter(V.UNPACK_ROW_LENGTH),mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),en=V.getParameter(V.UNPACK_SKIP_PIXELS),Zt=V.getParameter(V.UNPACK_SKIP_ROWS),ri=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ve),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,tt);const xi=R.isDataArrayTexture||R.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Wt=M.get(R),zn=M.get(X),zt=M.get(Wt.__renderTarget),Vn=M.get(zn.__renderTarget);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Si=0;Si<ze;Si++)xi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(R).__webglTexture,j,tt+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(X).__webglTexture,we,Nt+Si)),V.blitFramebuffer(Ve,Qe,Le,fe,Ge,Mt,Le,fe,V.DEPTH_BUFFER_BIT,V.NEAREST);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||M.has(R)){const Wt=M.get(R),zn=M.get(X);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,da),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,vi);for(let zt=0;zt<ze;zt++)xi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.__webglTexture,j,tt+zt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Wt.__webglTexture,j),Rt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,we,Nt+zt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,we),j!==0?V.blitFramebuffer(Ve,Qe,Le,fe,Ge,Mt,Le,fe,V.COLOR_BUFFER_BIT,V.NEAREST):Rt?V.copyTexSubImage3D(y,we,Ge,Mt,Nt+zt,Ve,Qe,Le,fe):V.copyTexSubImage2D(y,we,Ge,Mt,Ve,Qe,Le,fe);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rt?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(y,we,Ge,Mt,Nt,Le,fe,ze,At,Ht,Ft.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(y,we,Ge,Mt,Nt,Le,fe,ze,At,Ft.data):V.texSubImage3D(y,we,Ge,Mt,Nt,Le,fe,ze,At,Ht,Ft):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,we,Ge,Mt,Le,fe,At,Ht,Ft.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,we,Ge,Mt,Ft.width,Ft.height,At,Ft.data):V.texSubImage2D(V.TEXTURE_2D,we,Ge,Mt,Le,fe,At,Ht,Ft);V.pixelStorei(V.UNPACK_ROW_LENGTH,ct),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,en),V.pixelStorei(V.UNPACK_SKIP_ROWS,Zt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ri),we===0&&X.generateMipmaps&&V.generateMipmap(y),Ue.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&G.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?G.setTextureCube(R,0):R.isData3DTexture?G.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?G.setTexture2DArray(R,0):G.setTexture2D(R,0),Ue.unbindTexture()},this.resetState=function(){z=0,ne=0,te=null,Ue.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}function UE(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},c={},d=i[0].morphTargetsRelative,p=new kn;let h=0;for(let m=0;m<i.length;++m){const _=i[m];let g=0;if(t!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in _.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;o[v]===void 0&&(o[v]=[]),o[v].push(_.attributes[v]),g++}if(g!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(d!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in _.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;c[v]===void 0&&(c[v]=[]),c[v].push(_.morphAttributes[v])}if(e){let v;if(t)v=_.index.count;else if(_.attributes.position!==void 0)v=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;p.addGroup(h,v,m),h+=v}}if(t){let m=0;const _=[];for(let g=0;g<i.length;++g){const v=i[g].index;for(let b=0;b<v.count;++b)_.push(v.getX(b)+m);m+=i[g].attributes.position.count}p.setIndex(_)}for(const m in o){const _=Su(o[m]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;p.setAttribute(m,_)}for(const m in c){const _=c[m][0].length;if(_===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[m]=[];for(let g=0;g<_;++g){const v=[];for(let P=0;P<c[m].length;++P)v.push(c[m][P][g]);const b=Su(v);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;p.morphAttributes[m].push(b)}}return p}function Su(i){let e,t,n,s=-1,o=0;for(let h=0;h<i.length;++h){const m=i[h];if(e===void 0&&(e=m.array.constructor),e!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=m.normalized),n!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=m.gpuType),s!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=m.count*t}const c=new e(o),d=new On(c,t,n);let p=0;for(let h=0;h<i.length;++h){const m=i[h];if(m.isInterleavedBufferAttribute){const _=p/t;for(let g=0,v=m.count;g<v;g++)for(let b=0;b<t;b++){const P=m.getComponent(g,b);d.setComponent(g+_,b,P)}}else c.set(m.array,p);p+=m.count*t}return s!==void 0&&(d.gpuType=s),d}class NE{constructor(e,t,n){this.sim=t,this.source=n,this.mode="fpv",this.lastStep=-1,this.smooth=null,this.renderer=new IE({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=dn,this.renderer.toneMapping=hl,this.renderer.toneMappingExposure=1.35,e.append(this.renderer.domElement),this.scene=new dv,this.scene.background=new gt("#d4e5ed"),this.scene.add(new Bv(16777215,1.7));const s=new Uv(15136255,12102032,1.8);s.up.set(0,0,1),this.scene.add(s);const o=new Yc(16775144,2.2);o.position.set(1,15,18),this.scene.add(o);const c=new Yc(14019071,.9);c.position.set(-18,-15,6),this.scene.add(c),this.camera=new En(82,1,.008,250),this.camera.up.set(0,0,1),this.fov=n.cameras.fpv.fovy,this.dynamic=[],this.gateMeshes=new Map,this.materials=[],this.geometries=[],this.textures=[];const d=getComputedStyle(e);this.gateColors={current:d.getPropertyValue("--gate-current").trim(),idle:d.getPropertyValue("--gate-idle").trim()};const p=new Iv,h=new Map,m=new Map,_=new Map;this.textureReady=[];const g=n.meshes.map(v=>{const b=new kn;return b.setAttribute("position",new Mn(v.position.flat(),3)),b.setAttribute("normal",new Mn(v.normal.flat(),3)),v.uv&&b.setAttribute("uv",new Mn(v.uv.flat(),2)),this.geometries.push(b),b});for(const v of n.geoms){if(v.mesh<0)continue;const b=v.bodyName?.startsWith("gate"),P=v.body>0&&!b,E=JSON.stringify([v.rgba,v.texture,b]);let S=m.get(E);if(!S){if(S=new Rv({color:new gt().setRGB(...v.rgba.slice(0,3)),roughness:.9,metalness:.02,side:Ln,emissive:2434341,emissiveIntensity:.16}),v.texture){if(!h.has(v.texture)){let F,L;this.textureReady.push(new Promise((C,W)=>{F=C,L=W}));const O=p.load(`/demo/sim/textures/${v.texture}`,F,void 0,L);O.colorSpace=dn,O.wrapS=O.wrapT=as,O.anisotropy=4,h.set(v.texture,O),this.textures.push(O)}S.map=h.get(v.texture)}m.set(E,S),this.materials.push(S)}const D=this.matrix(v.matrix,v.position);if(!P&&!b){const F=g[v.mesh].clone().applyMatrix4(D);this.geometries.push(F),_.has(S)||_.set(S,[]),_.get(S).push(F)}else{b?(S=new bl({color:this.gateColors.idle,side:Ln,toneMapped:!1}),this.materials.push(S)):(S=S.clone(),S.emissive.set(0),S.roughness=.65,S.metalness=.08,v.bodyName.endsWith("_prop")&&S.color.set("#e6e9ed"),this.materials.push(S));const F=new Bn(g[v.mesh],S);F.matrixAutoUpdate=!1,F.matrix.copy(D),this.scene.add(F),b?this.gateMeshes.set(Number(v.bodyName.slice(4)),F):this.dynamic.push({mesh:F,id:v.id})}}for(const[v,b]of _)for(const P of[!0,!1]){const E=b.filter(D=>!!D.attributes.uv===P);if(!E.length)continue;const S=UE(E);this.geometries.push(S),this.scene.add(new Bn(S,v))}this.observer=new ResizeObserver(()=>this.resize(e)),this.observer.observe(e),this.resize(e)}matrix(e,t){return new Ot().set(e[0],e[1],e[2],t[0],e[3],e[4],e[5],t[1],e[6],e[7],e[8],t[2],0,0,0,1)}resize(e){const{width:t,height:n}=e.getBoundingClientRect();this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}render(){const e=this.sim,t=e.data,n=new ee(...e.position),s=new Zn(e.quaternion[1],e.quaternion[2],e.quaternion[3],e.quaternion[0]);for(const{mesh:o,id:c}of this.dynamic)o.matrix.copy(this.matrix(t.geom_xmat.subarray(c*9,c*9+9),t.geom_xpos.subarray(c*3,c*3+3))),o.matrixWorldNeedsUpdate=!0;for(const[o,c]of this.gateMeshes)c.visible=o!==(e.gate===6?0:6),c.material.color.set(o===e.gate?this.gateColors.current:this.gateColors.idle);if(this.mode==="fpv"){this.camera.fov=this.fov,this.camera.position.copy(n).add(new ee(...this.source.cameras.fpv.position).applyQuaternion(s));const o=this.source.cameras.fpv.quaternion,c=new Zn(o[1],o[2],o[3],o[0]),d=Wr(e.quaternion),p=Math.atan2(d[3],d[0]),h=s.clone().multiply(c),m=new Zn().setFromAxisAngle(new ee(0,0,1),p).multiply(c),_=new Zn(h.x*.9+m.x*.1,h.y*.9+m.y*.1,h.z*.9+m.z*.1,h.w*.9+m.w*.1).normalize();!this.smooth||e.steps<this.lastStep?this.smooth=_:e.steps!==this.lastStep&&(this.smooth.dot(_)<0&&_.set(-_.x,-_.y,-_.z,-_.w),this.smooth.set(this.smooth.x*.6+_.x*.4,this.smooth.y*.6+_.y*.4,this.smooth.z*.6+_.z*.4,this.smooth.w*.6+_.w*.4).normalize()),this.camera.quaternion.copy(this.smooth)}else if(this.mode==="follow"){this.camera.fov=62;const o=Wr(e.quaternion),c=Math.atan2(o[3],o[0]);this.camera.position.copy(n).add(new ee(-1.15*Math.cos(c),-1.15*Math.sin(c),.38)),this.camera.lookAt(n.clone().add(new ee(.7*Math.cos(c),.7*Math.sin(c),.12)))}else this.camera.fov=58,this.camera.position.set(3,26,7.5),this.camera.lookAt(-3,0,1.5);this.lastStep=e.steps,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}dispose(){this.observer.disconnect(),this.renderer.dispose();for(const e of new Set(this.geometries))e.dispose();for(const e of this.materials)e.dispose();for(const e of this.textures)e.dispose()}}const yu=-1+2/3.15,is=[{name:"Roll",index:1,keys:[["KeyA","A"],["KeyD","D"]]},{name:"Yaw",index:3,keys:[["KeyQ","Q"],["KeyE","E"]]},{name:"Pitch",index:2,keys:[["KeyW","W"],["KeyS","S"]]},{name:"Thrust",index:0,keys:[["ArrowDown","Down"],["ArrowUp","Up"]]}],Eu=[["Space","Space","Pause / resume"],["KeyR","R","Reset flight"],["KeyC","C","Camera"],["KeyH","H","Tutorial"]],$r=i=>Number.isFinite(i)?Math.max(-1,Math.min(1,i)):0,go=(i,e,t=1)=>Math.abs(i)<e?0:t*Math.sign(i)*Math.sqrt(Math.abs(i));function OE(i,e,t,n={left:[0,0],right:[0,0]}){const s=[yu+.5*(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown"))),.8*(Number(i.has("KeyD"))-Number(i.has("KeyA"))),.8*(Number(i.has("KeyS"))-Number(i.has("KeyW"))),.8*(Number(i.has("KeyE"))-Number(i.has("KeyQ")))],o=is.filter(d=>d.keys.some(([p])=>i.has(p))).map(d=>d.index);let c=s.slice();if(e?.connected){const d=p=>$r(e.axes[p]);c=[-Math.sign(d(1))*Math.pow(Math.abs(d(1)),1.5),go(d(t.rollAxis),t.deadzone,t.invertRoll?-1:1),go(-d(3),t.deadzone),go(d(t.yawAxis),t.deadzone,t.invertYaw?-1:1)];for(const p of o)c[p]=s[p]}return n.left.some(d=>d!==0)&&(c[0]=yu-n.left[1]*.5,c[3]=n.left[0]),n.right.some(d=>d!==0)&&(c[1]=n.right[0],c[2]=n.right[1]),{human:c.map($r),keyboardAxes:o}}const Mu=(i,e)=>`<kbd data-key="${i}">${e}</kbd>`;class BE{constructor({onClose:e,onFly:t}){this.dialog=document.createElement("dialog"),this.dialog.id="tutorial",this.dialog.setAttribute("aria-labelledby","tutorial-title"),this.dialog.innerHTML=`
      <header class="tutorial-header"><div><span class="tutorial-state">Flight paused</span><h2 id="tutorial-title">Tutorial & input check</h2></div><button id="close-tutorial" class="icon-button" aria-label="Close tutorial" title="Close tutorial (Esc)"><i data-lucide="x"></i></button></header>
      <div class="tutorial-body">
        <section class="keyboard-monitor"><h3><i data-lucide="keyboard"></i> Keyboard</h3>
          <div class="key-groups">${is.map(n=>`<div class="key-group"><span>${n.name}</span><div>${n.keys.map(([s,o])=>Mu(s,o)).join("")}</div></div>`).join("")}</div>
          <div class="shortcut-list">${Eu.map(([n,s,o])=>`<div>${Mu(n,s)}<span>${o}</span></div>`).join("")}</div>
          <div class="input-event"><span>Last key</span><strong id="last-key">Waiting for input</strong></div>
        </section>
        <section class="gamepad-monitor"><h3><i data-lucide="gamepad-2"></i> Controller <span id="pad-status">Not detected</span></h3>
          <p id="pad-name">Waiting for controller input</p>
          <div class="stick-monitors">${["Left","Right"].map((n,s)=>`<div><div class="stick-monitor" aria-label="${n} stick"><span id="pad-stick-${s}"></span></div><span>${n} stick</span><small>Axes ${s*2} / ${s*2+1}</small></div>`).join("")}</div>
          <div id="pad-axes" class="raw-axes" aria-label="Controller axes"></div>
          <div class="buttons-heading">Buttons <span>Unassigned to flight commands</span></div><div id="pad-buttons" class="pad-buttons" aria-label="Controller buttons"></div>
        </section>
        <section class="input-output"><div class="output-heading"><h3>Flight input</h3><label>Mode <span data-mirror="mode"></span></label></div>
          <div class="channel-grid">${is.map(n=>`<div class="input-channel" data-channel="${n.index}"><div><strong>${n.name}</strong><output>0.00</output></div><div class="axis-track"><i></i></div><span class="channel-owner"></span></div>`).join("")}</div>
          <div class="input-rules"><span>Keyboard priority on pressed axes</span><span>Space / R / C: input preview only while Tutorial is open</span></div>
        </section>
        <details class="controller-mapping"><summary>Controller mapping & deadzone</summary><div class="mapping-grid">
          <label>Roll axis<span data-mirror="roll-axis"></span></label><label>Yaw axis<span data-mirror="yaw-axis"></span></label>
          <label class="mapping-check"><span data-mirror="invert-roll"></span>Invert roll</label><label class="mapping-check"><span data-mirror="invert-yaw"></span>Invert yaw</label>
          <label class="deadzone-setting">Deadzone <output id="tutorial-deadzone-label">5%</output><span data-mirror="deadzone"></span></label>
          <span class="fixed-axes">Thrust: axis 1 · Pitch: axis 3</span>
        </div><p id="mapping-status" role="status"></p></details>
      </div>
      <footer class="tutorial-footer"><span><i data-lucide="pause"></i> Input preview · simulation frozen</span><div><button id="return-paused" class="tutorial-secondary">Return paused</button><button id="tutorial-fly" class="primary"><i data-lucide="gamepad-2"></i>Start assisted flight</button></div></footer>`,document.body.append(this.dialog),this.mirrors=[];for(const n of this.dialog.querySelectorAll("[data-mirror]")){const s=document.getElementById(n.dataset.mirror),o=s.cloneNode(!0);o.id=`tutorial-${s.id}`,o.disabled=!1,n.replaceWith(o),o.addEventListener("input",()=>{s.value=o.value,s.checked=o.checked,s.dispatchEvent(new Event("input",{bubbles:!0})),s.dispatchEvent(new Event("change",{bubbles:!0})),this.sync()}),this.mirrors.push({source:s,proxy:o})}this.dialog.querySelector("#close-tutorial").onclick=e,this.dialog.querySelector("#return-paused").onclick=e,this.dialog.querySelector("#tutorial-fly").onclick=t,this.dialog.addEventListener("cancel",n=>{n.preventDefault(),e()}),this.padSignature=""}get open(){return this.dialog.open}sync(){for(const{source:e,proxy:t}of this.mirrors)t.value=e.value,t.checked=e.checked;this.dialog.querySelector("#tutorial-deadzone-label").value=document.getElementById("deadzone").value+"%"}show(){this.sync(),this.dialog.showModal(),this.dialog.querySelector("#close-tutorial").focus(),this.dialog.querySelector(".tutorial-body").scrollTop=0}close(){this.dialog.close()}recordKey(e){const t=Eu.find(o=>o[0]===e),n=is.find(o=>o.keys.some(c=>c[0]===e)),s=t?.[1]||n?.keys.find(o=>o[0]===e)?.[1]||e;this.dialog.querySelector("#last-key").textContent=`${s} · ${t?.[2]||n?.name||"Unassigned"}`}update(e,t,n,s){if(!this.open)return;for(const m of this.dialog.querySelectorAll("[data-key]"))m.classList.toggle("pressed",e.has(m.dataset.key));const o=this.dialog.querySelector("#pad-status");o.textContent=t?"Connected":"Not detected",o.classList.toggle("connected",!!t),this.dialog.querySelector("#pad-name").textContent=t?t.id:"Waiting for controller input";const c=Math.min(t?.axes.length||0,32),d=Math.min(t?.buttons.length||0,64),p=`${t?.index}:${t?.id}:${c}:${d}`;if(p!==this.padSignature){this.padSignature=p,this.dialog.querySelector("#pad-axes").innerHTML=Array.from({length:c},(m,_)=>`<label>Axis ${_}<meter min="-1" max="1" value="0" data-axis="${_}"></meter><output data-axis-value="${_}">0.00</output></label>`).join(""),this.dialog.querySelector("#pad-buttons").innerHTML=d?Array.from({length:d},(m,_)=>`<span data-pad-button="${_}">B${_}</span>`).join(""):'<span class="no-buttons">No buttons detected</span>';for(const{source:m,proxy:_}of this.mirrors.filter(g=>["roll-axis","yaw-axis"].includes(g.source.id))){for(let g=0;g<c;g++)Array.from(m.options).some(v=>v.value===String(g))||m.add(new Option(`Axis ${g}`,g));_.replaceChildren(...Array.from(m.options,g=>g.cloneNode(!0))),_.value=m.value}}for(let m=0;m<2;m++)this.dialog.querySelector(`#pad-stick-${m}`).style.transform=`translate(${$r(t?.axes[m*2])*28}px,${$r(t?.axes[m*2+1])*28}px)`;for(let m=0;m<c;m++){const _=$r(t.axes[m]);this.dialog.querySelector(`[data-axis="${m}"]`).value=_,this.dialog.querySelector(`[data-axis-value="${m}"]`).value=_.toFixed(2)}for(let m=0;m<d;m++){const _=t.buttons[m],g=typeof _=="number"?_:_.value,v=this.dialog.querySelector(`[data-pad-button="${m}"]`);v.classList.toggle("pressed",!!_.pressed||g>.1),v.title=`Button ${m}: ${Number(g||0).toFixed(2)}`}for(const m of this.dialog.querySelectorAll("[data-channel]")){const _=Number(m.dataset.channel),g=n[_];m.dataset.value=g.toFixed(3),m.querySelector("output").value=g.toFixed(2),m.querySelector(".axis-track i").style.left=`${(g+1)*50}%`,m.querySelector(".channel-owner").textContent=s==="expert"?"AI controlled":s==="manual"?"You control":_===1||_===3?"You + AI":"AI controlled"}const h=t?["roll-axis","yaw-axis"].filter(m=>Number(document.getElementById(m).value)>=t.axes.length):[];this.dialog.querySelector("#mapping-status").textContent=h.length?`Unavailable axis: ${h.map(m=>m.replace("-axis","")).join(", ")}`:""}}const un=i=>`<i data-lucide="${i}"></i>`;document.querySelector("#app").innerHTML=`
<div id="viewport" aria-label="Interactive MuJoCo drone racing scene"></div>
<header class="brand"><span class="brand-mark">${un("plane")}</span><div><h1>AI Coaching</h1><span>Drone Racing</span></div></header>
<button id="open-tutorial" class="tutorial-entry" title="Tutorial & input check (H)" aria-haspopup="dialog" aria-controls="tutorial">${un("book-open")}<span>Tutorial</span><kbd>H</kbd></button>
<div class="telemetry"><div><span>LAP</span><strong id="lap">00</strong></div><div><span>TIME</span><strong id="timer">00:00.00</strong></div><div><span>GATE</span><strong id="gate">01 <small>/ 12</small></strong></div></div>
<aside id="settings" class="settings" hidden aria-label="Flight settings"><div class="panel-title"><h2>Flight settings</h2><button class="icon-button" id="close-settings" title="Close settings" aria-label="Close settings">${un("x")}</button></div>
<label>Control mode<select id="mode"><option value="expert">Expert autopilot</option><option value="assisted">Assisted flight</option><option value="manual">Manual flight</option><option value="coach">Coach · fixed skill</option><option value="tracking">Tracking policy</option></select></label>
<label>AI assistance <output id="alpha-label">80%</output><input id="alpha" type="range" min="30" max="100" value="80"></label>
<label id="skill-row" hidden>Fixed skill <output id="skill-label">0.00</output><input id="skill" type="range" min="0" max="100" value="0"></label>
<label>Brightness <output id="exposure-label">135%</output><input id="exposure" type="range" min="60" max="220" value="135"></label>
<div class="input-heading">${un("gamepad-2")}<strong id="device">Keyboard</strong></div>
<label>Roll axis<select id="roll-axis"><option value="2">Right stick X · axis 2</option><option value="0">Axis 0</option><option value="1">Axis 1</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<label>Yaw axis<select id="yaw-axis"><option value="0">Left stick X · axis 0</option><option value="1">Axis 1</option><option value="2">Axis 2</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<div class="checks"><label><input id="invert-roll" type="checkbox">Invert roll</label><label><input id="invert-yaw" type="checkbox" checked>Invert yaw</label></div>
<label>Stick deadzone <output id="deadzone-label">5%</output><input id="deadzone" type="range" min="0" max="30" value="5"></label>
<button id="export" class="export">${un("download")} Export flight log</button><div class="engine">MuJoCo 3.13 <span>Browser physics</span></div></aside>
<div class="flight-data"><span id="speed">0.0 <small>m/s</small></span><span id="altitude">2.0 <small>m AGL</small></span><span id="status">EXPERT ACTIVE</span></div>
<div class="gate-strip" id="gate-strip" aria-label="Gate progress">${Array.from({length:12},(i,e)=>`<span data-gate="${e}">${e+1}</span>`).join("")}</div>
<div class="joystick left-stick" aria-label="Touch yaw and thrust" role="application"><span></span></div><div class="joystick right-stick" aria-label="Touch roll and pitch" role="application"><span></span></div>
<nav class="toolbar" aria-label="Flight controls"><div class="scene-name"><span class="live-dot"></span>Warehouse <span class="track-label">/ Figure 8</span></div><span class="divider"></span>
<div class="segmented" aria-label="Camera view"><button data-view="fpv" class="selected">FPV</button><button data-view="follow">Chase</button><button data-view="overview">Track</button></div><span class="divider"></span>
<button id="pause" class="icon-button" title="Pause (Space)" aria-label="Pause">${un("pause")}</button><button id="reset" class="icon-button" title="Reset flight (R)" aria-label="Reset flight">${un("rotate-ccw")}</button><button id="sound" class="icon-button" title="Enable rotor audio" aria-label="Enable rotor audio">${un("volume-x")}</button><button id="settings-toggle" class="icon-button" title="Flight settings" aria-label="Flight settings" aria-expanded="false">${un("settings-2")}</button><button id="fullscreen" class="icon-button" title="Full screen" aria-label="Full screen">${un("maximize")}</button>
<button id="take-control" class="primary">${un("gamepad-2")}<span>Take control</span></button></nav>
<div id="notice" role="status" hidden></div><div class="loading" id="loading"><span class="spinner"></span><strong>Preparing flight</strong><span id="loading-status">Loading MuJoCo</span><button id="retry" hidden>Retry</button></div>`;const kE={Play:s_,Pause:r_,RotateCcw:o_,Settings2:l_,Maximize:n_,Minimize:i_,Gamepad2:e_,Camera:Zg,Download:Qg,Volume2:u_,VolumeX:d_,X:f_,Sun:c_,Plane:a_,ChevronDown:Jg,BookOpen:Kg,Keyboard:t_},ia=()=>Iu({icons:kE});ia();const ke=i=>document.getElementById(i),hd=document.querySelectorAll("#open-tutorial,.toolbar button,.settings button,.settings input,.settings select");hd.forEach(i=>i.disabled=!0);let Ke,fn,Nn=!1,Di=!1,_o=0,Xr=0,pd=0,bu,ui,Vr,Gr,gr=!1;const ra=new Set,fi={left:[0,0],right:[0,0]},rs=[];let dl="Keyboard";const bn=new BE({onClose:Tu,onFly:()=>{Tu(!1),aa(),Tr("assisted"),ii(!1),Yt("Assisted flight started")}});ia();function Yt(i,e){if(ke("notice").textContent=i,e){const t=document.createElement("kbd");t.textContent=e,ke("notice").append(t)}ke("notice").hidden=!1,clearTimeout(bu),bu=setTimeout(()=>ke("notice").hidden=!0,3e3)}function ii(i){Nn=bn.open||!!i,Xr=0,ke("pause").innerHTML=un(Nn?"play":"pause"),ke("pause").setAttribute("aria-label",Nn?"Resume":"Pause"),ke("pause").title=`${Nn?"Resume":"Pause"} (Space)`,ia()}function md(){ii(!Nn),Yt(Nn?"Flight paused":"Flight resumed","Space")}function Tr(i){if(!Ke||!["expert","assisted","manual","coach","tracking"].includes(i))throw new Error("Invalid flight mode");Ke.mode=i,ke("mode").value=i,ke("skill-row").hidden=i!=="coach",ke("take-control").classList.toggle("controlling",i!=="expert"),ke("take-control").querySelector("span").textContent=i==="expert"?"Take control":"Autopilot",bn.sync()}function aa(){!Ke||bn.open||(Ke.reset(),fn.smooth=null,Xr=0,Yt("Flight reset","R"))}function gd(i){if(!["fpv","follow","overview"].includes(i))throw new Error("Invalid camera");fn&&(fn.mode=i),document.querySelectorAll("[data-view]").forEach(e=>e.classList.toggle("selected",e.dataset.view===i))}function _d(i){gd(i),Yt(`Camera: ${{fpv:"FPV",follow:"Chase",overview:"Track"}[i]}`,"C")}function fs(i){ke("settings").hidden=!i,ke("settings-toggle").setAttribute("aria-expanded",String(i))}function hs(){ra.clear(),fi.left=[0,0],fi.right=[0,0],document.querySelectorAll(".joystick>span").forEach(i=>i.style.transform="")}function vd(){!Di||bn.open||(hs(),fs(!1),ii(!0),ke("notice").hidden=!0,bn.show())}function Tu(i=!0){bn.close(),hs(),ii(!0),ke("open-tutorial").focus(),i&&Yt("Flight paused","Space")}function zE(){let i=[];try{i=Array.from(navigator.getGamepads?.()??[])}catch{}const e=i.find(o=>o?.connected),t={rollAxis:Number(ke("roll-axis").value),yawAxis:Number(ke("yaw-axis").value),invertRoll:ke("invert-roll").checked,invertYaw:ke("invert-yaw").checked,deadzone:Number(ke("deadzone").value)/100},{human:n,keyboardAxes:s}=OE(ra,e,t,fi);return dl=e?`${s.length?"Keyboard + ":""}${e.id}`:"Keyboard",(fi.left.some(o=>o!==0)||fi.right.some(o=>o!==0))&&(dl="Touch controls"),{human:n,pad:e}}for(const i of["left","right"]){let e=function(s){const o=t.getBoundingClientRect();fi[i]=[Fn((s.clientX-o.left-o.width/2)/(o.width*.35)),Fn((s.clientY-o.top-o.height/2)/(o.height*.35))],t.firstElementChild.style.transform=`translate(${fi[i][0]*28}px,${fi[i][1]*28}px)`};const t=document.querySelector(`.${i}-stick`);let n=null;t.addEventListener("pointerdown",s=>{n=s.pointerId,t.setPointerCapture(n),e(s)}),t.addEventListener("pointermove",s=>{s.pointerId===n&&e(s)});for(const s of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(s,()=>{n=null,fi[i]=[0,0],t.firstElementChild.style.transform=""})}ke("pause").onclick=md;ke("reset").onclick=aa;ke("open-tutorial").onclick=vd;ke("settings-toggle").onclick=()=>{fs(ke("settings").hidden),Yt(ke("settings").hidden?"Settings closed":"Flight settings")};ke("close-settings").onclick=()=>{fs(!1),Yt("Settings closed")};ke("take-control").onclick=()=>{Di&&(Ke.mode==="expert"?(aa(),Tr("assisted"),ii(!1),Yt("Assisted flight started")):(Tr("expert"),Yt("Expert autopilot active")))};ke("mode").onchange=i=>{Tr(i.target.value),Yt(ke("mode").selectedOptions[0].textContent)};document.querySelectorAll("[data-view]").forEach(i=>{i.title=`${i.textContent} camera (C to cycle)`,i.onclick=()=>_d(i.dataset.view)});ke("alpha").oninput=i=>{Ke&&(Ke.alpha=Number(i.target.value)/100),ke("alpha-label").value=i.target.value+"%"};ke("skill").oninput=i=>{Ke&&(Ke.skill=Number(i.target.value)/100),ke("skill-label").value=(Number(i.target.value)/100).toFixed(2)};ke("exposure").oninput=i=>{fn&&(fn.renderer.toneMappingExposure=Number(i.target.value)/100),ke("exposure-label").value=i.target.value+"%"};ke("deadzone").oninput=i=>ke("deadzone-label").value=i.target.value+"%";ke("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Yt("Full screen is unavailable in this browser")}};document.addEventListener("fullscreenchange",()=>{const i=!!document.fullscreenElement;ke("fullscreen").innerHTML=un(i?"minimize":"maximize"),ke("fullscreen").title=i?"Exit full screen":"Full screen",ke("fullscreen").setAttribute("aria-label",ke("fullscreen").title),ia(),Yt(i?"Full screen enabled":"Full screen closed")});ke("sound").onclick=async()=>{try{ui||(ui=new(window.AudioContext||window.webkitAudioContext),Vr=ui.createOscillator(),Vr.type="sawtooth",Gr=ui.createGain(),Gr.gain.value=0,Vr.connect(Gr),Gr.connect(ui.destination),Vr.start()),await ui.resume(),gr=!gr,ke("sound").innerHTML=un(gr?"volume-2":"volume-x"),ke("sound").setAttribute("aria-label",gr?"Mute rotor audio":"Enable rotor audio"),ke("sound").title=ke("sound").getAttribute("aria-label"),ia(),Yt(gr?"Rotor audio enabled":"Rotor audio muted")}catch{Yt("Audio is unavailable")}};ke("export").onclick=()=>{if(!Ke)return;const i=new Blob([JSON.stringify({manifest:Ke.policies.expert.metadata,physics:"MuJoCo 3.13 WASM",state:Ke.snapshot(),rows:rs},null,2)],{type:"application/json"}),e=URL.createObjectURL(i),t=document.createElement("a");t.href=e,t.download=`ai-coaching-drone-racing-${Date.now()}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Yt("Flight log exported")};window.addEventListener("keydown",i=>{if(!Di)return;const e=["INPUT","SELECT","TEXTAREA"].includes(i.target.tagName);bn.open&&bn.recordKey(i.code),!e&&(ra.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!(bn.open||i.repeat)&&(i.code==="Space"&&md(),i.code==="KeyR"&&aa(),i.code==="KeyC"&&fn&&_d(["fpv","follow","overview"][(["fpv","follow","overview"].indexOf(fn.mode)+1)%3]),i.code==="KeyH"&&vd(),i.code==="Escape"&&fs(!1)))});window.addEventListener("keyup",i=>ra.delete(i.code));window.addEventListener("blur",()=>{hs(),Di&&ii(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(hs(),Di&&ii(!0))});window.addEventListener("gamepadconnected",i=>Yt(`Controller connected: ${i.gamepad.id}`));window.addEventListener("gamepaddisconnected",()=>{Di&&(Tr("expert"),Yt("Controller disconnected. Autopilot active."))});const VE=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${(i%60).toFixed(2).padStart(5,"0")}`;function xd(){ke("lap").textContent=String(Ke.laps).padStart(2,"0"),ke("timer").textContent=VE(Ke.lapStart===null?Ke.steps*.02:Ke.steps*.02-Ke.lapStart),ke("gate").innerHTML=`${String(Ke.gate+1).padStart(2,"0")} <small>/ 12</small>`,ke("speed").innerHTML=`${Math.hypot(...Ke.data.qvel.subarray(0,3)).toFixed(1)} <small>m/s</small>`,ke("altitude").innerHTML=`${Ke.position[2].toFixed(1)} <small>m AGL</small>`,ke("status").textContent=Nn?"PAUSED":Ke.mode==="expert"?"EXPERT ACTIVE":Ke.mode==="manual"?"MANUAL":`${Ke.mode.toUpperCase()} · ${Math.round(Ke.effectiveAlpha*100)}% AI`,ke("device").textContent=dl,document.querySelectorAll("[data-gate]").forEach(i=>{i.classList.toggle("current",Number(i.dataset.gate)===Ke.gate),i.classList.toggle("passed",Number(i.dataset.gate)<Ke.gate)})}function Sd(i){try{_o&&(Xr+=Nn?0:Math.min((i-_o)/1e3,.1)),_o=i;const{human:e,pad:t}=zE();for(bn.update(ra,t,e,Ke.mode);Xr>=.02&&!Nn;){const n=Ke.action(e),s=Ke.step(n);Xr-=.02,Ke.steps%5===0&&(rs.push({time:Ke.data.time,mode:Ke.mode,position:Ke.position,action:n,human:e,gate:Ke.gate,alpha:Ke.effectiveAlpha}),rs.length>36e3&&rs.shift()),s.failed&&(Yt(`${s.cause}. Resetting flight.`),Ke.reset((Ke.gate+11)%12),fn.smooth=null)}fn.render(),pd++%3===0&&xd(),ui&&(Vr.frequency.setTargetAtTime(90+Ke.motors.reduce((n,s)=>n+s,0)/35,ui.currentTime,.08),Gr.gain.setTargetAtTime(gr&&!Nn?.012:0,ui.currentTime,.04))}catch(e){console.error(e),ii(!0),Yt("Flight paused due to a simulation error.")}requestAnimationFrame(Sd)}async function vo(i){const e=await fetch(`/demo/sim/${i}`);if(!e.ok)throw new Error(`Could not load ${i} (${e.status})`);const t=new Uint8Array(await e.arrayBuffer());return t[0]===31&&t[1]===139?Vg(t):t}async function GE(){try{const i=await Tg({locateFile:o=>o.endsWith(".wasm")?wg:o});ke("loading-status").textContent="Loading warehouse and expert";const e=await vo("physics.mjb.gz"),t=JSON.parse(new TextDecoder().decode(await vo("scene.json.gz"))),n=JSON.parse(new TextDecoder().decode(await vo("policies.json.gz")));Ke=new p_(i,e,t,n),fn=new NE(ke("viewport"),Ke,t),await Promise.all(fn.textureReady),fn.render(),Di=!0,hd.forEach(o=>o.disabled=!1),ke("loading").hidden=!0,requestAnimationFrame(Sd),window.flight={snapshot:()=>({...Ke.snapshot(),paused:Nn,tutorialOpen:bn.open,view:fn.mode,frames:pd,ready:Di,action:Ke.lastAction,human:Ke.lastHuman}),setPaused:ii,setMode:Tr,setCamera:gd,reset:aa,step:o=>{if(bn.open)throw new Error("Close the tutorial before advancing physics");if(!Number.isInteger(o)||o<0||o>1e4)throw new Error("Invalid steps");for(let c=0;c<o&&!Ke.step(Ke.action()).failed;c++);return fn.render(),xd(),Ke.snapshot()}};const s=document.modelContext;if(s?.registerTool){const o=new AbortController;for(const c of[{name:"get_flight_state",description:"Read current flight state",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>window.flight.snapshot()},{name:"set_flight_paused",description:"Pause or resume the flight",inputSchema:{type:"object",properties:{paused:{type:"boolean"}},required:["paused"],additionalProperties:!1},execute:d=>{if(typeof d.paused!="boolean")throw new Error("paused must be boolean");return ii(d.paused),window.flight.snapshot()}}])Promise.resolve(s.registerTool(c,{signal:o.signal})).catch(()=>{});window.addEventListener("pagehide",()=>o.abort(),{once:!0})}}catch(i){console.error(i),ke("loading-status").textContent=i.message,ke("loading").classList.add("error"),ke("retry").hidden=!1,ke("retry").onclick=()=>location.reload()}}GE();const HE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
