(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const Wm="modulepreload",Xm=function(r,e){return new URL(r,e).href},ql={},$m=function(e,t,n){let a=Promise.resolve();if(t&&t.length>0){let h=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const c=document.getElementsByTagName("link"),f=document.querySelector("meta[property=csp-nonce]"),p=f?.nonce||f?.getAttribute("nonce");a=h(t.map(g=>{if(g=Xm(g,n),g in ql)return;ql[g]=!0;const y=g.endsWith(".css"),m=y?'[rel="stylesheet"]':"";if(n)for(let b=c.length-1;b>=0;b--){const P=c[b];if(P.href===g&&(!y||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${m}`))return;const M=document.createElement("link");if(M.rel=y?"stylesheet":Wm,y||(M.as="script"),M.crossOrigin="",M.href=g,p&&M.setAttribute("nonce",p),document.head.appendChild(M),y)return new Promise((b,P)=>{M.addEventListener("load",b),M.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${g}`)))})}))}function o(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&o(f.reason);return e().catch(o)})};var qm=(async function(r={}){var e,t=r,n=typeof window=="object",a=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!o&&!a;if(o){const{createRequire:i}=await $m(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>Iy);return{createRequire:s}},void 0,import.meta.url);var f=i(import.meta.url)}var p="./this.program",h=(i,s)=>{throw s},g=import.meta.url,y="";function m(i){return t.locateFile?t.locateFile(i,y):y+i}var M,b;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var P=process.versions.node,S=P.split(".").slice(0,3);if(S=S[0]*1e4+S[1]*100+S[2].split("-")[0]*1,S<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+P+")");var v=f("fs");g.startsWith("file:")&&(y=f("path").dirname(f("url").fileURLToPath(g))+"/"),b=s=>{s=H(s)?new URL(s):s;var l=v.readFileSync(s);return C(Buffer.isBuffer(l)),l},M=async(s,l=!0)=>{s=H(s)?new URL(s):s;var u=v.readFileSync(s,l?void 0:"utf8");return C(l?Buffer.isBuffer(u):typeof u=="string"),u},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),h=(s,l)=>{throw process.exitCode=s,l}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||a){try{y=new URL(".",g).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");a&&(b=i=>{var s=new XMLHttpRequest;return s.open("GET",i,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),M=async i=>{if(H(i))return new Promise((l,u)=>{var d=new XMLHttpRequest;d.open("GET",i,!0),d.responseType="arraybuffer",d.onload=()=>{if(d.status==200||d.status==0&&d.response){l(d.response);return}u(d.status)},d.onerror=u,d.send(null)});var s=await fetch(i,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var D=console.log.bind(console),I=console.error.bind(console);C(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var U;typeof WebAssembly!="object"&&I("no native wasm support detected");var k=!1;function C(i,s){i||G("Assertion failed"+(s?": "+s:""))}var H=i=>i.startsWith("file://");function A(){var i=da();C((i&3)==0),i==0&&(i+=4),Ee[i>>2]=34821223,Ee[i+4>>2]=2310721022,Ee[0]=1668509029}function F(){if(!k){var i=da();i==0&&(i+=4);var s=Ee[i>>2],l=Ee[i+4>>2];(s!=34821223||l!=2310721022)&&G(`Stack overflow! Stack cookie has been overwritten at ${Re(i)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Re(l)} ${Re(s)}`),Ee[0]!=1668509029&&G("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class O extends Error{}class z extends O{}class j extends O{constructor(s){super(s),this.excPtr=s;const l=Fl(s);this.name=l[0],this.message=l[1]}}(()=>{var i=new Int16Array(1),s=new Int8Array(i.buffer);if(i[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function Z(i){Object.getOwnPropertyDescriptor(t,i)||Object.defineProperty(t,i,{configurable:!0,set(){G(`Attempt to set \`Module.${i}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Y(i){return()=>C(!1,`call to '${i}' via reference taken before Wasm module initialization`)}function ie(i){Object.getOwnPropertyDescriptor(t,i)&&G(`\`Module.${i}\` was supplied but \`${i}\` not included in INCOMING_MODULE_JS_API`)}function te(i){return i==="FS_createPath"||i==="FS_createDataFile"||i==="FS_createPreloadedFile"||i==="FS_unlink"||i==="addRunDependency"||i==="FS_createLazyFile"||i==="FS_createDevice"||i==="removeRunDependency"}function ne(i,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,i)&&Object.defineProperty(globalThis,i,{configurable:!0,get(){s()}})}function xe(i,s){ne(i,()=>{Fe(`\`${i}\` is not longer defined by emscripten. ${s}`)})}xe("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),xe("asm","Please use wasmExports instead");function _e(i){ne(i,()=>{var s=`\`${i}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=i;l.startsWith("_")||(l="$"+i),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,te(i)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Fe(s)}),Ce(i)}function Ce(i){Object.getOwnPropertyDescriptor(t,i)||Object.defineProperty(t,i,{configurable:!0,get(){var s=`'${i}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;te(i)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),G(s)}})}var Ue,Pe,je,Ze,st,le,Se,se,Ee,He,$e,bt,lt,ft=!1;function Mt(){var i=je.buffer;Ze=new Int8Array(i),le=new Int16Array(i),st=new Uint8Array(i),Se=new Uint16Array(i),se=new Int32Array(i),Ee=new Uint32Array(i),He=new Float32Array(i),$e=new Float64Array(i),bt=new BigInt64Array(i),lt=new BigUint64Array(i)}C(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function Qe(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)be(t.preRun.shift());Z("preRun"),Be(W)}function Lt(){C(!ft),ft=!0,F(),!t.noFSInit&&!x.initialized&&x.init(),bi.__wasm_call_ctors(),x.ignorePermissions=!1}function V(){if(F(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)et(t.postRun.shift());Z("postRun"),Be(De)}var Rt=0,ct=null,_t={},Ie=null;function L(i){Rt++,t.monitorRunDependencies?.(Rt),i?(C(!_t[i]),_t[i]=1,Ie===null&&typeof setInterval<"u"&&(Ie=setInterval(()=>{if(k){clearInterval(Ie),Ie=null;return}var s=!1;for(var l in _t)s||(s=!0,I("still waiting on run dependencies:")),I(`dependency: ${l}`);s&&I("(end of list)")},1e4))):I("warning: run dependency added without ID")}function E(i){if(Rt--,t.monitorRunDependencies?.(Rt),i?(C(_t[i]),delete _t[i]):I("warning: run dependency removed without ID"),Rt==0&&(Ie!==null&&(clearInterval(Ie),Ie=null),ct)){var s=ct;ct=null,s()}}function G(i){t.onAbort?.(i),i="Aborted("+i+")",I(i),k=!0;var s=new WebAssembly.RuntimeError(i);throw Pe?.(s),s}function ae(i,s){return(...l)=>{C(ft,`native function \`${i}\` called before runtime initialization`);var u=bi[i];return C(u,`exported native function \`${i}\` not found`),C(l.length<=s,`native function \`${i}\` called with ${l.length} args but expects ${s}`),u(...l)}}var he;function oe(){return t.locateFile?m("mujoco.wasm"):new URL(""+new URL("mujoco-D9UjOFNX.wasm",import.meta.url).href,import.meta.url).href}function Ne(i){if(i==he&&U)return new Uint8Array(U);if(b)return b(i);throw"both async and sync fetching of the wasm failed"}async function Te(i){if(!U)try{var s=await M(i);return new Uint8Array(s)}catch{}return Ne(i)}async function Ge(i,s){try{var l=await Te(i),u=await WebAssembly.instantiate(l,s);return u}catch(d){I(`failed to asynchronously prepare wasm: ${d}`),H(he)&&I(`warning: Loading from a file URI (${he}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),G(d)}}async function Xe(i,s,l){if(!i&&typeof WebAssembly.instantiateStreaming=="function"&&!H(s)&&!o)try{var u=fetch(s,{credentials:"same-origin"}),d=await WebAssembly.instantiateStreaming(u,l);return d}catch(_){I(`wasm streaming compile failed: ${_}`),I("falling back to ArrayBuffer instantiation")}return Ge(s,l)}function ve(){return{env:Wl,wasi_snapshot_preview1:Wl}}async function Me(){function i(T,w){return bi=T.exports,je=bi.memory,C(je,"memory not found in wasm exports"),Mt(),ns=bi.__indirect_function_table,C(ns,"table not found in wasm exports"),$d(bi),E("wasm-instantiate"),bi}L("wasm-instantiate");var s=t;function l(T){return C(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,i(T.instance)}var u=ve();if(t.instantiateWasm)return new Promise((T,w)=>{try{t.instantiateWasm(u,(N,q)=>{T(i(N,q))})}catch(N){I(`Module.instantiateWasm callback failed with error: ${N}`),w(N)}});he??=oe();var d=await Xe(U,he,u),_=l(d);return _}class Oe{name="ExitStatus";constructor(s){this.message=`Program terminated with exit(${s})`,this.status=s}}var Be=i=>{for(;i.length>0;)i.shift()(t)},De=[],et=i=>De.push(i),W=[],be=i=>W.push(i),ye=!0,Re=i=>(C(typeof i=="number"),i>>>=0,"0x"+i.toString(16).padStart(8,"0")),X=i=>Bl(i),B=()=>zl(),Fe=i=>{Fe.shown||={},Fe.shown[i]||(Fe.shown[i]=1,o&&(i="warning: "+i),I(i))},qe=typeof TextDecoder<"u"?new TextDecoder:void 0,gt=(i,s=0,l=NaN)=>{for(var u=s+l,d=s;i[d]&&!(d>=u);)++d;if(d-s>16&&i.buffer&&qe)return qe.decode(i.subarray(s,d));for(var _="";s<d;){var T=i[s++];if(!(T&128)){_+=String.fromCharCode(T);continue}var w=i[s++]&63;if((T&224)==192){_+=String.fromCharCode((T&31)<<6|w);continue}var N=i[s++]&63;if((T&240)==224?T=(T&15)<<12|w<<6|N:((T&248)!=240&&Fe("Invalid UTF-8 leading byte "+Re(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|w<<12|N<<6|i[s++]&63),T<65536)_+=String.fromCharCode(T);else{var q=T-65536;_+=String.fromCharCode(55296|q>>10,56320|q&1023)}}return _},rt=(i,s)=>(C(typeof i=="number",`UTF8ToString expects a number (got ${typeof i})`),i?gt(st,i,s):""),yn=(i,s,l,u)=>G(`Assertion failed: ${rt(i)}, at: `+[s?rt(s):"unknown filename",l,u?rt(u):"unknown function"]),zt=[],xi=0,yr=i=>{var s=new _n(i);return s.get_caught()||(s.set_caught(!0),xi--),s.set_rethrown(!1),zt.push(s),cs(i),Hl(i)},Zs=()=>{if(!zt.length)return 0;var i=zt[zt.length-1];return cs(i.excPtr),i.excPtr},mn=0,Gr=()=>{me(0,0),C(zt.length>0);var i=zt.pop();ha(i.excPtr),mn=0};class _n{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){Ee[this.ptr+4>>2]=s}get_type(){return Ee[this.ptr+4>>2]}set_destructor(s){Ee[this.ptr+8>>2]=s}get_destructor(){return Ee[this.ptr+8>>2]}set_caught(s){s=s?1:0,Ze[this.ptr+12]=s}get_caught(){return Ze[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,Ze[this.ptr+13]=s}get_rethrown(){return Ze[this.ptr+13]!=0}init(s,l){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(l)}set_adjusted_ptr(s){Ee[this.ptr+16>>2]=s}get_adjusted_ptr(){return Ee[this.ptr+16>>2]}}var si=i=>Nl(i),zi=i=>{var s=mn?.excPtr;if(!s)return si(0),0;var l=new _n(s);l.set_adjusted_ptr(s);var u=l.get_type();if(!u)return si(0),s;for(var d of i){if(d===0||d===u)break;var _=l.ptr+16;if(Gl(d,u,_))return si(d),s}return si(u),s},Hr=()=>zi([]),Vi=i=>zi([i]),Wr=(i,s)=>zi([i,s]),Si=()=>{var i=zt.pop();i||G("no exception to throw");var s=i.excPtr;throw i.get_rethrown()||(zt.push(i),i.set_rethrown(!0),i.set_caught(!1),xi++),mn=new j(s),mn},Xr=i=>{if(i){var s=new _n(i);zt.push(s),s.set_rethrown(!0),Si()}},$r=(i,s,l)=>{var u=new _n(i);throw u.init(s,l),mn=new j(i),xi++,mn},Js=()=>xi,Qs=i=>{throw mn||(mn=new j(i)),mn},Et={isAbs:i=>i.charAt(0)==="/",splitPath:i=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(i).slice(1)},normalizeArray:(i,s)=>{for(var l=0,u=i.length-1;u>=0;u--){var d=i[u];d==="."?i.splice(u,1):d===".."?(i.splice(u,1),l++):l&&(i.splice(u,1),l--)}if(s)for(;l;l--)i.unshift("..");return i},normalize:i=>{var s=Et.isAbs(i),l=i.slice(-1)==="/";return i=Et.normalizeArray(i.split("/").filter(u=>!!u),!s).join("/"),!i&&!s&&(i="."),i&&l&&(i+="/"),(s?"/":"")+i},dirname:i=>{var s=Et.splitPath(i),l=s[0],u=s[1];return!l&&!u?".":(u&&(u=u.slice(0,-1)),l+u)},basename:i=>i&&i.match(/([^\/]+|\/)\/*$/)[1],join:(...i)=>Et.normalize(i.join("/")),join2:(i,s)=>Et.normalize(i+"/"+s)},ea=()=>{if(o){var i=f("crypto");return s=>i.randomFillSync(s)}return s=>crypto.getRandomValues(s)},qr=i=>{(qr=ea())(i)},ai={resolve:(...i)=>{for(var s="",l=!1,u=i.length-1;u>=-1&&!l;u--){var d=u>=0?i[u]:x.cwd();if(typeof d!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!d)return"";s=d+"/"+s,l=Et.isAbs(d)}return s=Et.normalizeArray(s.split("/").filter(_=>!!_),!l).join("/"),(l?"/":"")+s||"."},relative:(i,s)=>{i=ai.resolve(i).slice(1),s=ai.resolve(s).slice(1);function l(q){for(var Q=0;Q<q.length&&q[Q]==="";Q++);for(var ce=q.length-1;ce>=0&&q[ce]==="";ce--);return Q>ce?[]:q.slice(Q,ce-Q+1)}for(var u=l(i.split("/")),d=l(s.split("/")),_=Math.min(u.length,d.length),T=_,w=0;w<_;w++)if(u[w]!==d[w]){T=w;break}for(var N=[],w=T;w<u.length;w++)N.push("..");return N=N.concat(d.slice(T)),N.join("/")}},R=[],$=i=>{for(var s=0,l=0;l<i.length;++l){var u=i.charCodeAt(l);u<=127?s++:u<=2047?s+=2:u>=55296&&u<=57343?(s+=4,++l):s+=3}return s},re=(i,s,l,u)=>{if(C(typeof i=="string",`stringToUTF8Array expects a string (got ${typeof i})`),!(u>0))return 0;for(var d=l,_=l+u-1,T=0;T<i.length;++T){var w=i.codePointAt(T);if(w<=127){if(l>=_)break;s[l++]=w}else if(w<=2047){if(l+1>=_)break;s[l++]=192|w>>6,s[l++]=128|w&63}else if(w<=65535){if(l+2>=_)break;s[l++]=224|w>>12,s[l++]=128|w>>6&63,s[l++]=128|w&63}else{if(l+3>=_)break;w>1114111&&Fe("Invalid Unicode code point "+Re(w)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[l++]=240|w>>18,s[l++]=128|w>>12&63,s[l++]=128|w>>6&63,s[l++]=128|w&63,T++}}return s[l]=0,l-d},ee=(i,s,l)=>{var u=$(i)+1,d=new Array(u),_=re(i,d,0,d.length);return d.length=_,d},J=()=>{if(!R.length){var i=null;if(o){var s=256,l=Buffer.alloc(s),u=0,d=process.stdin.fd;try{u=v.readSync(d,l,0,s)}catch(_){if(_.toString().includes("EOF"))u=0;else throw _}u>0&&(i=l.slice(0,u).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(i=window.prompt("Input: "),i!==null&&(i+=`
`));if(!i)return null;R=ee(i)}return R.shift()},we={ttys:[],init(){},shutdown(){},register(i,s){we.ttys[i]={input:[],output:[],ops:s},x.registerDevice(i,we.stream_ops)},stream_ops:{open(i){var s=we.ttys[i.node.rdev];if(!s)throw new x.ErrnoError(43);i.tty=s,i.seekable=!1},close(i){i.tty.ops.fsync(i.tty)},fsync(i){i.tty.ops.fsync(i.tty)},read(i,s,l,u,d){if(!i.tty||!i.tty.ops.get_char)throw new x.ErrnoError(60);for(var _=0,T=0;T<u;T++){var w;try{w=i.tty.ops.get_char(i.tty)}catch{throw new x.ErrnoError(29)}if(w===void 0&&_===0)throw new x.ErrnoError(6);if(w==null)break;_++,s[l+T]=w}return _&&(i.node.atime=Date.now()),_},write(i,s,l,u,d){if(!i.tty||!i.tty.ops.put_char)throw new x.ErrnoError(60);try{for(var _=0;_<u;_++)i.tty.ops.put_char(i.tty,s[l+_])}catch{throw new x.ErrnoError(29)}return u&&(i.node.mtime=i.node.ctime=Date.now()),_}},default_tty_ops:{get_char(i){return J()},put_char(i,s){s===null||s===10?(D(gt(i.output)),i.output=[]):s!=0&&i.output.push(s)},fsync(i){i.output?.length>0&&(D(gt(i.output)),i.output=[])},ioctl_tcgets(i){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(i,s,l){return 0},ioctl_tiocgwinsz(i){return[24,80]}},default_tty1_ops:{put_char(i,s){s===null||s===10?(I(gt(i.output)),i.output=[]):s!=0&&i.output.push(s)},fsync(i){i.output?.length>0&&(I(gt(i.output)),i.output=[])}}},Le=i=>{G("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},de={ops_table:null,mount(i){return de.createNode(null,"/",16895,0)},createNode(i,s,l,u){if(x.isBlkdev(l)||x.isFIFO(l))throw new x.ErrnoError(63);de.ops_table||={dir:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,lookup:de.node_ops.lookup,mknod:de.node_ops.mknod,rename:de.node_ops.rename,unlink:de.node_ops.unlink,rmdir:de.node_ops.rmdir,readdir:de.node_ops.readdir,symlink:de.node_ops.symlink},stream:{llseek:de.stream_ops.llseek}},file:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:{llseek:de.stream_ops.llseek,read:de.stream_ops.read,write:de.stream_ops.write,mmap:de.stream_ops.mmap,msync:de.stream_ops.msync}},link:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,readlink:de.node_ops.readlink},stream:{}},chrdev:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:x.chrdev_stream_ops}};var d=x.createNode(i,s,l,u);return x.isDir(d.mode)?(d.node_ops=de.ops_table.dir.node,d.stream_ops=de.ops_table.dir.stream,d.contents={}):x.isFile(d.mode)?(d.node_ops=de.ops_table.file.node,d.stream_ops=de.ops_table.file.stream,d.usedBytes=0,d.contents=null):x.isLink(d.mode)?(d.node_ops=de.ops_table.link.node,d.stream_ops=de.ops_table.link.stream):x.isChrdev(d.mode)&&(d.node_ops=de.ops_table.chrdev.node,d.stream_ops=de.ops_table.chrdev.stream),d.atime=d.mtime=d.ctime=Date.now(),i&&(i.contents[s]=d,i.atime=i.mtime=i.ctime=d.atime),d},getFileDataAsTypedArray(i){return i.contents?i.contents.subarray?i.contents.subarray(0,i.usedBytes):new Uint8Array(i.contents):new Uint8Array(0)},expandFileStorage(i,s){var l=i.contents?i.contents.length:0;if(!(l>=s)){var u=1024*1024;s=Math.max(s,l*(l<u?2:1.125)>>>0),l!=0&&(s=Math.max(s,256));var d=i.contents;i.contents=new Uint8Array(s),i.usedBytes>0&&i.contents.set(d.subarray(0,i.usedBytes),0)}},resizeFileStorage(i,s){if(i.usedBytes!=s)if(s==0)i.contents=null,i.usedBytes=0;else{var l=i.contents;i.contents=new Uint8Array(s),l&&i.contents.set(l.subarray(0,Math.min(s,i.usedBytes))),i.usedBytes=s}},node_ops:{getattr(i){var s={};return s.dev=x.isChrdev(i.mode)?i.id:1,s.ino=i.id,s.mode=i.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=i.rdev,x.isDir(i.mode)?s.size=4096:x.isFile(i.mode)?s.size=i.usedBytes:x.isLink(i.mode)?s.size=i.link.length:s.size=0,s.atime=new Date(i.atime),s.mtime=new Date(i.mtime),s.ctime=new Date(i.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(i,s){for(const l of["mode","atime","mtime","ctime"])s[l]!=null&&(i[l]=s[l]);s.size!==void 0&&de.resizeFileStorage(i,s.size)},lookup(i,s){throw new x.ErrnoError(44)},mknod(i,s,l,u){return de.createNode(i,s,l,u)},rename(i,s,l){var u;try{u=x.lookupNode(s,l)}catch{}if(u){if(x.isDir(i.mode))for(var d in u.contents)throw new x.ErrnoError(55);x.hashRemoveNode(u)}delete i.parent.contents[i.name],s.contents[l]=i,i.name=l,s.ctime=s.mtime=i.parent.ctime=i.parent.mtime=Date.now()},unlink(i,s){delete i.contents[s],i.ctime=i.mtime=Date.now()},rmdir(i,s){var l=x.lookupNode(i,s);for(var u in l.contents)throw new x.ErrnoError(55);delete i.contents[s],i.ctime=i.mtime=Date.now()},readdir(i){return[".","..",...Object.keys(i.contents)]},symlink(i,s,l){var u=de.createNode(i,s,41471,0);return u.link=l,u},readlink(i){if(!x.isLink(i.mode))throw new x.ErrnoError(28);return i.link}},stream_ops:{read(i,s,l,u,d){var _=i.node.contents;if(d>=i.node.usedBytes)return 0;var T=Math.min(i.node.usedBytes-d,u);if(C(T>=0),T>8&&_.subarray)s.set(_.subarray(d,d+T),l);else for(var w=0;w<T;w++)s[l+w]=_[d+w];return T},write(i,s,l,u,d,_){if(C(!(s instanceof ArrayBuffer)),s.buffer===Ze.buffer&&(_=!1),!u)return 0;var T=i.node;if(T.mtime=T.ctime=Date.now(),s.subarray&&(!T.contents||T.contents.subarray)){if(_)return C(d===0,"canOwn must imply no weird position inside the file"),T.contents=s.subarray(l,l+u),T.usedBytes=u,u;if(T.usedBytes===0&&d===0)return T.contents=s.slice(l,l+u),T.usedBytes=u,u;if(d+u<=T.usedBytes)return T.contents.set(s.subarray(l,l+u),d),u}if(de.expandFileStorage(T,d+u),T.contents.subarray&&s.subarray)T.contents.set(s.subarray(l,l+u),d);else for(var w=0;w<u;w++)T.contents[d+w]=s[l+w];return T.usedBytes=Math.max(T.usedBytes,d+u),u},llseek(i,s,l){var u=s;if(l===1?u+=i.position:l===2&&x.isFile(i.node.mode)&&(u+=i.node.usedBytes),u<0)throw new x.ErrnoError(28);return u},mmap(i,s,l,u,d){if(!x.isFile(i.node.mode))throw new x.ErrnoError(43);var _,T,w=i.node.contents;if(!(d&2)&&w&&w.buffer===Ze.buffer)T=!1,_=w.byteOffset;else{if(T=!0,_=Le(),!_)throw new x.ErrnoError(48);w&&((l>0||l+s<w.length)&&(w.subarray?w=w.subarray(l,l+s):w=Array.prototype.slice.call(w,l,l+s)),Ze.set(w,_))}return{ptr:_,allocated:T}},msync(i,s,l,u,d){return de.stream_ops.write(i,s,0,u,l,!1),0}}},ke=async i=>{var s=await M(i);return C(s,`Loading data file "${i}" failed (no arrayBuffer).`),new Uint8Array(s)},ze=(...i)=>x.createDataFile(...i),Ke=i=>{for(var s=i;;){if(!_t[i])return i;i=s+Math.random()}},Je=[],Ve=(i,s,l,u)=>{typeof Browser<"u"&&Browser.init();var d=!1;return Je.forEach(_=>{d||_.canHandle(s)&&(_.handle(i,s,l,u),d=!0)}),d},yt=(i,s,l,u,d,_,T,w,N,q)=>{var Q=s?ai.resolve(Et.join2(i,s)):i,ce=Ke(`cp ${Q}`);function fe(ue){function pe(We){q?.(),w||ze(i,s,We,u,d,N),_?.(),E(ce)}Ve(ue,Q,pe,()=>{T?.(),E(ce)})||pe(ue)}L(ce),typeof l=="string"?ke(l).then(fe,T):fe(l)},It=i=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=s[i];if(typeof l>"u")throw new Error(`Unknown file open mode: ${i}`);return l},Pt=(i,s)=>{var l=0;return i&&(l|=365),s&&(l|=146),l},Tt=i=>rt(Ul(i)),Vt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},x={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(i){super(ft?Tt(i):""),this.errno=i;for(var s in Vt)if(Vt[s]===i){this.code=s;break}}},FSStream:class{shared={};get object(){return this.node}set object(i){this.node=i}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(i){this.shared.flags=i}get position(){return this.shared.position}set position(i){this.shared.position=i}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(i,s,l,u){i||(i=this),this.parent=i,this.mount=i.mount,this.id=x.nextInode++,this.name=s,this.mode=l,this.rdev=u,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(i){i?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(i){i?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return x.isDir(this.mode)}get isDevice(){return x.isChrdev(this.mode)}},lookupPath(i,s={}){if(!i)throw new x.ErrnoError(44);s.follow_mount??=!0,Et.isAbs(i)||(i=x.cwd()+"/"+i);e:for(var l=0;l<40;l++){for(var u=i.split("/").filter(q=>!!q),d=x.root,_="/",T=0;T<u.length;T++){var w=T===u.length-1;if(w&&s.parent)break;if(u[T]!=="."){if(u[T]===".."){if(_=Et.dirname(_),x.isRoot(d)){i=_+"/"+u.slice(T+1).join("/");continue e}else d=d.parent;continue}_=Et.join2(_,u[T]);try{d=x.lookupNode(d,u[T])}catch(q){if(q?.errno===44&&w&&s.noent_okay)return{path:_};throw q}if(x.isMountpoint(d)&&(!w||s.follow_mount)&&(d=d.mounted.root),x.isLink(d.mode)&&(!w||s.follow)){if(!d.node_ops.readlink)throw new x.ErrnoError(52);var N=d.node_ops.readlink(d);Et.isAbs(N)||(N=Et.dirname(_)+"/"+N),i=N+"/"+u.slice(T+1).join("/");continue e}}}return{path:_,node:d}}throw new x.ErrnoError(32)},getPath(i){for(var s;;){if(x.isRoot(i)){var l=i.mount.mountpoint;return s?l[l.length-1]!=="/"?`${l}/${s}`:l+s:l}s=s?`${i.name}/${s}`:i.name,i=i.parent}},hashName(i,s){for(var l=0,u=0;u<s.length;u++)l=(l<<5)-l+s.charCodeAt(u)|0;return(i+l>>>0)%x.nameTable.length},hashAddNode(i){var s=x.hashName(i.parent.id,i.name);i.name_next=x.nameTable[s],x.nameTable[s]=i},hashRemoveNode(i){var s=x.hashName(i.parent.id,i.name);if(x.nameTable[s]===i)x.nameTable[s]=i.name_next;else for(var l=x.nameTable[s];l;){if(l.name_next===i){l.name_next=i.name_next;break}l=l.name_next}},lookupNode(i,s){var l=x.mayLookup(i);if(l)throw new x.ErrnoError(l);for(var u=x.hashName(i.id,s),d=x.nameTable[u];d;d=d.name_next){var _=d.name;if(d.parent.id===i.id&&_===s)return d}return x.lookup(i,s)},createNode(i,s,l,u){C(typeof i=="object");var d=new x.FSNode(i,s,l,u);return x.hashAddNode(d),d},destroyNode(i){x.hashRemoveNode(i)},isRoot(i){return i===i.parent},isMountpoint(i){return!!i.mounted},isFile(i){return(i&61440)===32768},isDir(i){return(i&61440)===16384},isLink(i){return(i&61440)===40960},isChrdev(i){return(i&61440)===8192},isBlkdev(i){return(i&61440)===24576},isFIFO(i){return(i&61440)===4096},isSocket(i){return(i&49152)===49152},flagsToPermissionString(i){var s=["r","w","rw"][i&3];return i&512&&(s+="w"),s},nodePermissions(i,s){return x.ignorePermissions?0:s.includes("r")&&!(i.mode&292)||s.includes("w")&&!(i.mode&146)||s.includes("x")&&!(i.mode&73)?2:0},mayLookup(i){if(!x.isDir(i.mode))return 54;var s=x.nodePermissions(i,"x");return s||(i.node_ops.lookup?0:2)},mayCreate(i,s){if(!x.isDir(i.mode))return 54;try{var l=x.lookupNode(i,s);return 20}catch{}return x.nodePermissions(i,"wx")},mayDelete(i,s,l){var u;try{u=x.lookupNode(i,s)}catch(_){return _.errno}var d=x.nodePermissions(i,"wx");if(d)return d;if(l){if(!x.isDir(u.mode))return 54;if(x.isRoot(u)||x.getPath(u)===x.cwd())return 10}else if(x.isDir(u.mode))return 31;return 0},mayOpen(i,s){return i?x.isLink(i.mode)?32:x.isDir(i.mode)&&(x.flagsToPermissionString(s)!=="r"||s&576)?31:x.nodePermissions(i,x.flagsToPermissionString(s)):44},checkOpExists(i,s){if(!i)throw new x.ErrnoError(s);return i},MAX_OPEN_FDS:4096,nextfd(){for(var i=0;i<=x.MAX_OPEN_FDS;i++)if(!x.streams[i])return i;throw new x.ErrnoError(33)},getStreamChecked(i){var s=x.getStream(i);if(!s)throw new x.ErrnoError(8);return s},getStream:i=>x.streams[i],createStream(i,s=-1){return C(s>=-1),i=Object.assign(new x.FSStream,i),s==-1&&(s=x.nextfd()),i.fd=s,x.streams[s]=i,i},closeStream(i){x.streams[i]=null},dupStream(i,s=-1){var l=x.createStream(i,s);return l.stream_ops?.dup?.(l),l},doSetAttr(i,s,l){var u=i?.stream_ops.setattr,d=u?i:s;u??=s.node_ops.setattr,x.checkOpExists(u,63),u(d,l)},chrdev_stream_ops:{open(i){var s=x.getDevice(i.node.rdev);i.stream_ops=s.stream_ops,i.stream_ops.open?.(i)},llseek(){throw new x.ErrnoError(70)}},major:i=>i>>8,minor:i=>i&255,makedev:(i,s)=>i<<8|s,registerDevice(i,s){x.devices[i]={stream_ops:s}},getDevice:i=>x.devices[i],getMounts(i){for(var s=[],l=[i];l.length;){var u=l.pop();s.push(u),l.push(...u.mounts)}return s},syncfs(i,s){typeof i=="function"&&(s=i,i=!1),x.syncFSRequests++,x.syncFSRequests>1&&I(`warning: ${x.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=x.getMounts(x.root.mount),u=0;function d(T){return C(x.syncFSRequests>0),x.syncFSRequests--,s(T)}function _(T){if(T)return _.errored?void 0:(_.errored=!0,d(T));++u>=l.length&&d(null)}l.forEach(T=>{if(!T.type.syncfs)return _(null);T.type.syncfs(T,i,_)})},mount(i,s,l){if(typeof i=="string")throw i;var u=l==="/",d=!l,_;if(u&&x.root)throw new x.ErrnoError(10);if(!u&&!d){var T=x.lookupPath(l,{follow_mount:!1});if(l=T.path,_=T.node,x.isMountpoint(_))throw new x.ErrnoError(10);if(!x.isDir(_.mode))throw new x.ErrnoError(54)}var w={type:i,opts:s,mountpoint:l,mounts:[]},N=i.mount(w);return N.mount=w,w.root=N,u?x.root=N:_&&(_.mounted=w,_.mount&&_.mount.mounts.push(w)),N},unmount(i){var s=x.lookupPath(i,{follow_mount:!1});if(!x.isMountpoint(s.node))throw new x.ErrnoError(28);var l=s.node,u=l.mounted,d=x.getMounts(u);Object.keys(x.nameTable).forEach(T=>{for(var w=x.nameTable[T];w;){var N=w.name_next;d.includes(w.mount)&&x.destroyNode(w),w=N}}),l.mounted=null;var _=l.mount.mounts.indexOf(u);C(_!==-1),l.mount.mounts.splice(_,1)},lookup(i,s){return i.node_ops.lookup(i,s)},mknod(i,s,l){var u=x.lookupPath(i,{parent:!0}),d=u.node,_=Et.basename(i);if(!_)throw new x.ErrnoError(28);if(_==="."||_==="..")throw new x.ErrnoError(20);var T=x.mayCreate(d,_);if(T)throw new x.ErrnoError(T);if(!d.node_ops.mknod)throw new x.ErrnoError(63);return d.node_ops.mknod(d,_,s,l)},statfs(i){return x.statfsNode(x.lookupPath(i,{follow:!0}).node)},statfsStream(i){return x.statfsNode(i.node)},statfsNode(i){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:x.nextInode,ffree:x.nextInode-1,fsid:42,flags:2,namelen:255};return i.node_ops.statfs&&Object.assign(s,i.node_ops.statfs(i.mount.opts.root)),s},create(i,s=438){return s&=4095,s|=32768,x.mknod(i,s,0)},mkdir(i,s=511){return s&=1023,s|=16384,x.mknod(i,s,0)},mkdirTree(i,s){var l=i.split("/"),u="";for(var d of l)if(d){(u||Et.isAbs(i))&&(u+="/"),u+=d;try{x.mkdir(u,s)}catch(_){if(_.errno!=20)throw _}}},mkdev(i,s,l){return typeof l>"u"&&(l=s,s=438),s|=8192,x.mknod(i,s,l)},symlink(i,s){if(!ai.resolve(i))throw new x.ErrnoError(44);var l=x.lookupPath(s,{parent:!0}),u=l.node;if(!u)throw new x.ErrnoError(44);var d=Et.basename(s),_=x.mayCreate(u,d);if(_)throw new x.ErrnoError(_);if(!u.node_ops.symlink)throw new x.ErrnoError(63);return u.node_ops.symlink(u,d,i)},rename(i,s){var l=Et.dirname(i),u=Et.dirname(s),d=Et.basename(i),_=Et.basename(s),T,w,N;if(T=x.lookupPath(i,{parent:!0}),w=T.node,T=x.lookupPath(s,{parent:!0}),N=T.node,!w||!N)throw new x.ErrnoError(44);if(w.mount!==N.mount)throw new x.ErrnoError(75);var q=x.lookupNode(w,d),Q=ai.relative(i,u);if(Q.charAt(0)!==".")throw new x.ErrnoError(28);if(Q=ai.relative(s,l),Q.charAt(0)!==".")throw new x.ErrnoError(55);var ce;try{ce=x.lookupNode(N,_)}catch{}if(q!==ce){var fe=x.isDir(q.mode),ue=x.mayDelete(w,d,fe);if(ue)throw new x.ErrnoError(ue);if(ue=ce?x.mayDelete(N,_,fe):x.mayCreate(N,_),ue)throw new x.ErrnoError(ue);if(!w.node_ops.rename)throw new x.ErrnoError(63);if(x.isMountpoint(q)||ce&&x.isMountpoint(ce))throw new x.ErrnoError(10);if(N!==w&&(ue=x.nodePermissions(w,"w"),ue))throw new x.ErrnoError(ue);x.hashRemoveNode(q);try{w.node_ops.rename(q,N,_),q.parent=N}catch(pe){throw pe}finally{x.hashAddNode(q)}}},rmdir(i){var s=x.lookupPath(i,{parent:!0}),l=s.node,u=Et.basename(i),d=x.lookupNode(l,u),_=x.mayDelete(l,u,!0);if(_)throw new x.ErrnoError(_);if(!l.node_ops.rmdir)throw new x.ErrnoError(63);if(x.isMountpoint(d))throw new x.ErrnoError(10);l.node_ops.rmdir(l,u),x.destroyNode(d)},readdir(i){var s=x.lookupPath(i,{follow:!0}),l=s.node,u=x.checkOpExists(l.node_ops.readdir,54);return u(l)},unlink(i){var s=x.lookupPath(i,{parent:!0}),l=s.node;if(!l)throw new x.ErrnoError(44);var u=Et.basename(i),d=x.lookupNode(l,u),_=x.mayDelete(l,u,!1);if(_)throw new x.ErrnoError(_);if(!l.node_ops.unlink)throw new x.ErrnoError(63);if(x.isMountpoint(d))throw new x.ErrnoError(10);l.node_ops.unlink(l,u),x.destroyNode(d)},readlink(i){var s=x.lookupPath(i),l=s.node;if(!l)throw new x.ErrnoError(44);if(!l.node_ops.readlink)throw new x.ErrnoError(28);return l.node_ops.readlink(l)},stat(i,s){var l=x.lookupPath(i,{follow:!s}),u=l.node,d=x.checkOpExists(u.node_ops.getattr,63);return d(u)},fstat(i){var s=x.getStreamChecked(i),l=s.node,u=s.stream_ops.getattr,d=u?s:l;return u??=l.node_ops.getattr,x.checkOpExists(u,63),u(d)},lstat(i){return x.stat(i,!0)},doChmod(i,s,l,u){x.doSetAttr(i,s,{mode:l&4095|s.mode&-4096,ctime:Date.now(),dontFollow:u})},chmod(i,s,l){var u;if(typeof i=="string"){var d=x.lookupPath(i,{follow:!l});u=d.node}else u=i;x.doChmod(null,u,s,l)},lchmod(i,s){x.chmod(i,s,!0)},fchmod(i,s){var l=x.getStreamChecked(i);x.doChmod(l,l.node,s,!1)},doChown(i,s,l){x.doSetAttr(i,s,{timestamp:Date.now(),dontFollow:l})},chown(i,s,l,u){var d;if(typeof i=="string"){var _=x.lookupPath(i,{follow:!u});d=_.node}else d=i;x.doChown(null,d,u)},lchown(i,s,l){x.chown(i,s,l,!0)},fchown(i,s,l){var u=x.getStreamChecked(i);x.doChown(u,u.node,!1)},doTruncate(i,s,l){if(x.isDir(s.mode))throw new x.ErrnoError(31);if(!x.isFile(s.mode))throw new x.ErrnoError(28);var u=x.nodePermissions(s,"w");if(u)throw new x.ErrnoError(u);x.doSetAttr(i,s,{size:l,timestamp:Date.now()})},truncate(i,s){if(s<0)throw new x.ErrnoError(28);var l;if(typeof i=="string"){var u=x.lookupPath(i,{follow:!0});l=u.node}else l=i;x.doTruncate(null,l,s)},ftruncate(i,s){var l=x.getStreamChecked(i);if(s<0||(l.flags&2097155)===0)throw new x.ErrnoError(28);x.doTruncate(l,l.node,s)},utime(i,s,l){var u=x.lookupPath(i,{follow:!0}),d=u.node,_=x.checkOpExists(d.node_ops.setattr,63);_(d,{atime:s,mtime:l})},open(i,s,l=438){if(i==="")throw new x.ErrnoError(44);s=typeof s=="string"?It(s):s,s&64?l=l&4095|32768:l=0;var u,d;if(typeof i=="object")u=i;else{d=i.endsWith("/");var _=x.lookupPath(i,{follow:!(s&131072),noent_okay:!0});u=_.node,i=_.path}var T=!1;if(s&64)if(u){if(s&128)throw new x.ErrnoError(20)}else{if(d)throw new x.ErrnoError(31);u=x.mknod(i,l|511,0),T=!0}if(!u)throw new x.ErrnoError(44);if(x.isChrdev(u.mode)&&(s&=-513),s&65536&&!x.isDir(u.mode))throw new x.ErrnoError(54);if(!T){var w=x.mayOpen(u,s);if(w)throw new x.ErrnoError(w)}s&512&&!T&&x.truncate(u,0),s&=-131713;var N=x.createStream({node:u,path:x.getPath(u),flags:s,seekable:!0,position:0,stream_ops:u.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),T&&x.chmod(u,l&511),t.logReadFiles&&!(s&1)&&(i in x.readFiles||(x.readFiles[i]=1)),N},close(i){if(x.isClosed(i))throw new x.ErrnoError(8);i.getdents&&(i.getdents=null);try{i.stream_ops.close&&i.stream_ops.close(i)}catch(s){throw s}finally{x.closeStream(i.fd)}i.fd=null},isClosed(i){return i.fd===null},llseek(i,s,l){if(x.isClosed(i))throw new x.ErrnoError(8);if(!i.seekable||!i.stream_ops.llseek)throw new x.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new x.ErrnoError(28);return i.position=i.stream_ops.llseek(i,s,l),i.ungotten=[],i.position},read(i,s,l,u,d){if(C(l>=0),u<0||d<0)throw new x.ErrnoError(28);if(x.isClosed(i))throw new x.ErrnoError(8);if((i.flags&2097155)===1)throw new x.ErrnoError(8);if(x.isDir(i.node.mode))throw new x.ErrnoError(31);if(!i.stream_ops.read)throw new x.ErrnoError(28);var _=typeof d<"u";if(!_)d=i.position;else if(!i.seekable)throw new x.ErrnoError(70);var T=i.stream_ops.read(i,s,l,u,d);return _||(i.position+=T),T},write(i,s,l,u,d,_){if(C(l>=0),u<0||d<0)throw new x.ErrnoError(28);if(x.isClosed(i))throw new x.ErrnoError(8);if((i.flags&2097155)===0)throw new x.ErrnoError(8);if(x.isDir(i.node.mode))throw new x.ErrnoError(31);if(!i.stream_ops.write)throw new x.ErrnoError(28);i.seekable&&i.flags&1024&&x.llseek(i,0,2);var T=typeof d<"u";if(!T)d=i.position;else if(!i.seekable)throw new x.ErrnoError(70);var w=i.stream_ops.write(i,s,l,u,d,_);return T||(i.position+=w),w},mmap(i,s,l,u,d){if((u&2)!==0&&(d&2)===0&&(i.flags&2097155)!==2)throw new x.ErrnoError(2);if((i.flags&2097155)===1)throw new x.ErrnoError(2);if(!i.stream_ops.mmap)throw new x.ErrnoError(43);if(!s)throw new x.ErrnoError(28);return i.stream_ops.mmap(i,s,l,u,d)},msync(i,s,l,u,d){return C(l>=0),i.stream_ops.msync?i.stream_ops.msync(i,s,l,u,d):0},ioctl(i,s,l){if(!i.stream_ops.ioctl)throw new x.ErrnoError(59);return i.stream_ops.ioctl(i,s,l)},readFile(i,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var l=x.open(i,s.flags),u=x.stat(i),d=u.size,_=new Uint8Array(d);return x.read(l,_,0,d,0),s.encoding==="utf8"&&(_=gt(_)),x.close(l),_},writeFile(i,s,l={}){l.flags=l.flags||577;var u=x.open(i,l.flags,l.mode);if(typeof s=="string"&&(s=new Uint8Array(ee(s))),ArrayBuffer.isView(s))x.write(u,s,0,s.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");x.close(u)},cwd:()=>x.currentPath,chdir(i){var s=x.lookupPath(i,{follow:!0});if(s.node===null)throw new x.ErrnoError(44);if(!x.isDir(s.node.mode))throw new x.ErrnoError(54);var l=x.nodePermissions(s.node,"x");if(l)throw new x.ErrnoError(l);x.currentPath=s.path},createDefaultDirectories(){x.mkdir("/tmp"),x.mkdir("/home"),x.mkdir("/home/web_user")},createDefaultDevices(){x.mkdir("/dev"),x.registerDevice(x.makedev(1,3),{read:()=>0,write:(u,d,_,T,w)=>T,llseek:()=>0}),x.mkdev("/dev/null",x.makedev(1,3)),we.register(x.makedev(5,0),we.default_tty_ops),we.register(x.makedev(6,0),we.default_tty1_ops),x.mkdev("/dev/tty",x.makedev(5,0)),x.mkdev("/dev/tty1",x.makedev(6,0));var i=new Uint8Array(1024),s=0,l=()=>(s===0&&(qr(i),s=i.byteLength),i[--s]);x.createDevice("/dev","random",l),x.createDevice("/dev","urandom",l),x.mkdir("/dev/shm"),x.mkdir("/dev/shm/tmp")},createSpecialDirectories(){x.mkdir("/proc");var i=x.mkdir("/proc/self");x.mkdir("/proc/self/fd"),x.mount({mount(){var s=x.createNode(i,"fd",16895,73);return s.stream_ops={llseek:de.stream_ops.llseek},s.node_ops={lookup(l,u){var d=+u,_=x.getStreamChecked(d),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>_.path},id:d+1};return T.parent=T,T},readdir(){return Array.from(x.streams.entries()).filter(([l,u])=>u).map(([l,u])=>l.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(i,s,l){i?x.createDevice("/dev","stdin",i):x.symlink("/dev/tty","/dev/stdin"),s?x.createDevice("/dev","stdout",null,s):x.symlink("/dev/tty","/dev/stdout"),l?x.createDevice("/dev","stderr",null,l):x.symlink("/dev/tty1","/dev/stderr");var u=x.open("/dev/stdin",0),d=x.open("/dev/stdout",1),_=x.open("/dev/stderr",1);C(u.fd===0,`invalid handle for stdin (${u.fd})`),C(d.fd===1,`invalid handle for stdout (${d.fd})`),C(_.fd===2,`invalid handle for stderr (${_.fd})`)},staticInit(){x.nameTable=new Array(4096),x.mount(de,{},"/"),x.createDefaultDirectories(),x.createDefaultDevices(),x.createSpecialDirectories(),x.filesystems={MEMFS:de}},init(i,s,l){C(!x.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),x.initialized=!0,i??=t.stdin,s??=t.stdout,l??=t.stderr,x.createStandardStreams(i,s,l)},quit(){x.initialized=!1,fa(0);for(var i of x.streams)i&&x.close(i)},findObject(i,s){var l=x.analyzePath(i,s);return l.exists?l.object:null},analyzePath(i,s){try{var l=x.lookupPath(i,{follow:!s});i=l.path}catch{}var u={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=x.lookupPath(i,{parent:!0});u.parentExists=!0,u.parentPath=l.path,u.parentObject=l.node,u.name=Et.basename(i),l=x.lookupPath(i,{follow:!s}),u.exists=!0,u.path=l.path,u.object=l.node,u.name=l.node.name,u.isRoot=l.path==="/"}catch(d){u.error=d.errno}return u},createPath(i,s,l,u){i=typeof i=="string"?i:x.getPath(i);for(var d=s.split("/").reverse();d.length;){var _=d.pop();if(_){var T=Et.join2(i,_);try{x.mkdir(T)}catch(w){if(w.errno!=20)throw w}i=T}}return T},createFile(i,s,l,u,d){var _=Et.join2(typeof i=="string"?i:x.getPath(i),s),T=Pt(u,d);return x.create(_,T)},createDataFile(i,s,l,u,d,_){var T=s;i&&(i=typeof i=="string"?i:x.getPath(i),T=s?Et.join2(i,s):i);var w=Pt(u,d),N=x.create(T,w);if(l){if(typeof l=="string"){for(var q=new Array(l.length),Q=0,ce=l.length;Q<ce;++Q)q[Q]=l.charCodeAt(Q);l=q}x.chmod(N,w|146);var fe=x.open(N,577);x.write(fe,l,0,l.length,0,_),x.close(fe),x.chmod(N,w)}},createDevice(i,s,l,u){var d=Et.join2(typeof i=="string"?i:x.getPath(i),s),_=Pt(!!l,!!u);x.createDevice.major??=64;var T=x.makedev(x.createDevice.major++,0);return x.registerDevice(T,{open(w){w.seekable=!1},close(w){u?.buffer?.length&&u(10)},read(w,N,q,Q,ce){for(var fe=0,ue=0;ue<Q;ue++){var pe;try{pe=l()}catch{throw new x.ErrnoError(29)}if(pe===void 0&&fe===0)throw new x.ErrnoError(6);if(pe==null)break;fe++,N[q+ue]=pe}return fe&&(w.node.atime=Date.now()),fe},write(w,N,q,Q,ce){for(var fe=0;fe<Q;fe++)try{u(N[q+fe])}catch{throw new x.ErrnoError(29)}return Q&&(w.node.mtime=w.node.ctime=Date.now()),fe}}),x.mkdev(d,_,T)},forceLoadFile(i){if(i.isDevice||i.isFolder||i.link||i.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{i.contents=b(i.url),i.usedBytes=i.contents.length}catch{throw new x.ErrnoError(29)}},createLazyFile(i,s,l,u,d){class _{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var pe=ue%this.chunkSize,We=ue/this.chunkSize|0;return this.getter(We)[pe]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",l,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+l+". Status: "+ue.status);var pe=Number(ue.getResponseHeader("Content-length")),We,ut=(We=ue.getResponseHeader("Accept-Ranges"))&&We==="bytes",nt=(We=ue.getResponseHeader("Content-Encoding"))&&We==="gzip",Dt=1024*1024;ut||(Dt=pe);var vt=(Wt,rn)=>{if(Wt>rn)throw new Error("invalid range ("+Wt+", "+rn+") or no bytes requested!");if(rn>pe-1)throw new Error("only "+pe+" bytes available! programmer error!");var Ct=new XMLHttpRequest;if(Ct.open("GET",l,!1),pe!==Dt&&Ct.setRequestHeader("Range","bytes="+Wt+"-"+rn),Ct.responseType="arraybuffer",Ct.overrideMimeType&&Ct.overrideMimeType("text/plain; charset=x-user-defined"),Ct.send(null),!(Ct.status>=200&&Ct.status<300||Ct.status===304))throw new Error("Couldn't load "+l+". Status: "+Ct.status);return Ct.response!==void 0?new Uint8Array(Ct.response||[]):ee(Ct.responseText||"")},Qt=this;Qt.setDataGetter(Wt=>{var rn=Wt*Dt,Ct=(Wt+1)*Dt-1;if(Ct=Math.min(Ct,pe-1),typeof Qt.chunks[Wt]>"u"&&(Qt.chunks[Wt]=vt(rn,Ct)),typeof Qt.chunks[Wt]>"u")throw new Error("doXHR failed!");return Qt.chunks[Wt]}),(nt||!pe)&&(Dt=pe=1,pe=this.getter(0).length,Dt=pe,D("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=pe,this._chunkSize=Dt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!a)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new _,w={isDevice:!1,contents:T}}else var w={isDevice:!1,url:l};var N=x.createFile(i,s,w,u,d);w.contents?N.contents=w.contents:w.url&&(N.contents=null,N.url=w.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var q={},Q=Object.keys(N.stream_ops);Q.forEach(fe=>{var ue=N.stream_ops[fe];q[fe]=(...pe)=>(x.forceLoadFile(N),ue(...pe))});function ce(fe,ue,pe,We,ut){var nt=fe.node.contents;if(ut>=nt.length)return 0;var Dt=Math.min(nt.length-ut,We);if(C(Dt>=0),nt.slice)for(var vt=0;vt<Dt;vt++)ue[pe+vt]=nt[ut+vt];else for(var vt=0;vt<Dt;vt++)ue[pe+vt]=nt.get(ut+vt);return Dt}return q.read=(fe,ue,pe,We,ut)=>(x.forceLoadFile(N),ce(fe,ue,pe,We,ut)),q.mmap=(fe,ue,pe,We,ut)=>{x.forceLoadFile(N);var nt=Le();if(!nt)throw new x.ErrnoError(48);return ce(fe,Ze,nt,ue,pe),{ptr:nt,allocated:!0}},N.stream_ops=q,N},absolutePath(){G("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){G("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){G("FS.createLink has been removed; use FS.symlink instead")},joinPath(){G("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){G("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){G("FS.standardizePath has been removed; use PATH.normalize instead")}},at={DEFAULT_POLLMASK:5,calculateAt(i,s,l){if(Et.isAbs(s))return s;var u;if(i===-100)u=x.cwd();else{var d=at.getStreamFromFD(i);u=d.path}if(s.length==0){if(!l)throw new x.ErrnoError(44);return u}return u+"/"+s},writeStat(i,s){se[i>>2]=s.dev,se[i+4>>2]=s.mode,Ee[i+8>>2]=s.nlink,se[i+12>>2]=s.uid,se[i+16>>2]=s.gid,se[i+20>>2]=s.rdev,bt[i+24>>3]=BigInt(s.size),se[i+32>>2]=4096,se[i+36>>2]=s.blocks;var l=s.atime.getTime(),u=s.mtime.getTime(),d=s.ctime.getTime();return bt[i+40>>3]=BigInt(Math.floor(l/1e3)),Ee[i+48>>2]=l%1e3*1e3*1e3,bt[i+56>>3]=BigInt(Math.floor(u/1e3)),Ee[i+64>>2]=u%1e3*1e3*1e3,bt[i+72>>3]=BigInt(Math.floor(d/1e3)),Ee[i+80>>2]=d%1e3*1e3*1e3,bt[i+88>>3]=BigInt(s.ino),0},writeStatFs(i,s){se[i+4>>2]=s.bsize,se[i+40>>2]=s.bsize,se[i+8>>2]=s.blocks,se[i+12>>2]=s.bfree,se[i+16>>2]=s.bavail,se[i+20>>2]=s.files,se[i+24>>2]=s.ffree,se[i+28>>2]=s.fsid,se[i+44>>2]=s.flags,se[i+36>>2]=s.namelen},doMsync(i,s,l,u,d){if(!x.isFile(s.node.mode))throw new x.ErrnoError(43);if(u&2)return 0;var _=st.slice(i,i+l);x.msync(s,_,d,l,u)},getStreamFromFD(i){var s=x.getStreamChecked(i);return s},varargs:void 0,getStr(i){var s=rt(i);return s}};function mt(i,s,l){try{var u=at.getStreamFromFD(i);if(C(!l),u.fd===s)return-28;if(s<0||s>=x.MAX_OPEN_FDS)return-8;var d=x.getStream(s);return d&&x.close(d),x.dupStream(u,s).fd}catch(_){if(typeof x>"u"||_.name!=="ErrnoError")throw _;return-_.errno}}var Jt=()=>{C(at.varargs!=null);var i=se[+at.varargs>>2];return at.varargs+=4,i},Yt=Jt;function qn(i,s,l){at.varargs=l;try{var u=at.getStreamFromFD(i);switch(s){case 0:{var d=Jt();if(d<0)return-28;for(;x.streams[d];)d++;var _;return _=x.dupStream(u,d),_.fd}case 1:case 2:return 0;case 3:return u.flags;case 4:{var d=Jt();return u.flags|=d,0}case 12:{var d=Yt(),T=0;return le[d+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(w){if(typeof x>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function oi(i,s){try{return at.writeStat(s,x.fstat(i))}catch(l){if(typeof x>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function wt(i,s,l){at.varargs=l;try{var u=at.getStreamFromFD(i);switch(s){case 21509:return u.tty?0:-59;case 21505:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcgets){var d=u.tty.ops.ioctl_tcgets(u),_=Yt();se[_>>2]=d.c_iflag||0,se[_+4>>2]=d.c_oflag||0,se[_+8>>2]=d.c_cflag||0,se[_+12>>2]=d.c_lflag||0;for(var T=0;T<32;T++)Ze[_+T+17]=d.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return u.tty?0:-59;case 21506:case 21507:case 21508:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcsets){for(var _=Yt(),w=se[_>>2],N=se[_+4>>2],q=se[_+8>>2],Q=se[_+12>>2],ce=[],T=0;T<32;T++)ce.push(Ze[_+T+17]);return u.tty.ops.ioctl_tcsets(u.tty,s,{c_iflag:w,c_oflag:N,c_cflag:q,c_lflag:Q,c_cc:ce})}return 0}case 21519:{if(!u.tty)return-59;var _=Yt();return se[_>>2]=0,0}case 21520:return u.tty?-28:-59;case 21531:{var _=Yt();return x.ioctl(u,s,_)}case 21523:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tiocgwinsz){var fe=u.tty.ops.ioctl_tiocgwinsz(u.tty),_=Yt();le[_>>1]=fe[0],le[_+2>>1]=fe[1]}return 0}case 21524:return u.tty?0:-59;case 21515:return u.tty?0:-59;default:return-28}}catch(ue){if(typeof x>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function Gt(i,s){try{return i=at.getStr(i),at.writeStat(s,x.lstat(i))}catch(l){if(typeof x>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Pn(i,s,l,u){try{s=at.getStr(s);var d=u&256,_=u&4096;return u=u&-6401,C(!u,`unknown flags in __syscall_newfstatat: ${u}`),s=at.calculateAt(i,s,_),at.writeStat(l,d?x.lstat(s):x.stat(s))}catch(T){if(typeof x>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function Bt(i,s,l,u){at.varargs=u;try{s=at.getStr(s),s=at.calculateAt(i,s);var d=u?Jt():0;return x.open(s,l,d).fd}catch(_){if(typeof x>"u"||_.name!=="ErrnoError")throw _;return-_.errno}}function Dn(i,s){try{return i=at.getStr(i),at.writeStat(s,x.stat(i))}catch(l){if(typeof x>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var li=()=>G("native code called abort()"),Ut=i=>{for(var s="";;){var l=st[i++];if(!l)return s;s+=String.fromCharCode(l)}},Gi={},yi={},jr={},Mr=class extends Error{constructor(s){super(s),this.name="BindingError"}},dt=i=>{throw new Mr(i)};function Hu(i,s,l={}){var u=s.name;if(i||dt(`type "${u}" must have a positive integer typeid pointer`),yi.hasOwnProperty(i)){if(l.ignoreDuplicateRegistrations)return;dt(`Cannot register type '${u}' twice`)}if(yi[i]=s,delete jr[i],Gi.hasOwnProperty(i)){var d=Gi[i];delete Gi[i],d.forEach(_=>_())}}function gn(i,s,l={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Hu(i,s,l)}var al=(i,s,l)=>{switch(s){case 1:return l?u=>Ze[u]:u=>st[u];case 2:return l?u=>le[u>>1]:u=>Se[u>>1];case 4:return l?u=>se[u>>2]:u=>Ee[u>>2];case 8:return l?u=>bt[u>>3]:u=>lt[u>>3];default:throw new TypeError(`invalid integer width (${s}): ${i}`)}},Mi=i=>{if(i===null)return"null";var s=typeof i;return s==="object"||s==="array"||s==="function"?i.toString():""+i},ol=(i,s,l,u)=>{if(s<l||s>u)throw new TypeError(`Passing a number "${Mi(s)}" from JS side to C/C++ side to an argument of type "${i}", which is outside the valid range [${l}, ${u}]!`)},Wu=(i,s,l,u,d)=>{s=Ut(s);const _=u===0n;let T=w=>w;if(_){const w=l*8;T=N=>BigInt.asUintN(w,N),d=T(d)}gn(i,{name:s,fromWireType:T,toWireType:(w,N)=>{if(typeof N=="number")N=BigInt(N);else if(typeof N!="bigint")throw new TypeError(`Cannot convert "${Mi(N)}" to ${this.name}`);return ol(s,N,u,d),N},argPackAdvance:Fn,readValueFromPointer:al(s,l,!_),destructorFunction:null})},Fn=8,Xu=(i,s,l,u)=>{s=Ut(s),gn(i,{name:s,fromWireType:function(d){return!!d},toWireType:function(d,_){return _?l:u},argPackAdvance:Fn,readValueFromPointer:function(d){return this.fromWireType(st[d])},destructorFunction:null})},$u=i=>({count:i.count,deleteScheduled:i.deleteScheduled,preservePointerOnDelete:i.preservePointerOnDelete,ptr:i.ptr,ptrType:i.ptrType,smartPtr:i.smartPtr,smartPtrType:i.smartPtrType}),ta=i=>{function s(l){return l.$$.ptrType.registeredClass.name}dt(s(i)+" instance already deleted")},na=!1,ll=i=>{},qu=i=>{i.smartPtr?i.smartPtrType.rawDestructor(i.smartPtr):i.ptrType.registeredClass.rawDestructor(i.ptr)},cl=i=>{i.count.value-=1;var s=i.count.value===0;s&&qu(i)},ul=(i,s,l)=>{if(s===l)return i;if(l.baseClass===void 0)return null;var u=ul(i,s,l.baseClass);return u===null?null:l.downcast(u)},fl={},ju={},Yu=(i,s)=>{for(s===void 0&&dt("ptr should not be undefined");i.baseClass;)s=i.upcast(s),i=i.baseClass;return s},Ku=(i,s)=>(s=Yu(i,s),ju[s]),Zu=class extends Error{constructor(s){super(s),this.name="InternalError"}},Yr=i=>{throw new Zu(i)},Kr=(i,s)=>{(!s.ptrType||!s.ptr)&&Yr("makeClassHandle requires ptr and ptrType");var l=!!s.smartPtrType,u=!!s.smartPtr;return l!==u&&Yr("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Er(Object.create(i,{$$:{value:s,writable:!0}}))};function dl(i){var s=this.getPointee(i);if(!s)return this.destructor(i),null;var l=Ku(this.registeredClass,s);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=s,l.$$.smartPtr=i,l.clone();var u=l.clone();return this.destructor(i),u}function d(){return this.isSmartPointer?Kr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:i}):Kr(this.registeredClass.instancePrototype,{ptrType:this,ptr:i})}var _=this.registeredClass.getActualType(s),T=fl[_];if(!T)return d.call(this);var w;this.isConst?w=T.constPointerType:w=T.pointerType;var N=ul(s,this.registeredClass,w.registeredClass);return N===null?d.call(this):this.isSmartPointer?Kr(w.registeredClass.instancePrototype,{ptrType:w,ptr:N,smartPtrType:this,smartPtr:i}):Kr(w.registeredClass.instancePrototype,{ptrType:w,ptr:N})}var Er=i=>typeof FinalizationRegistry>"u"?(Er=s=>s,i):(na=new FinalizationRegistry(s=>{console.warn(s.leakWarning),cl(s.$$)}),Er=s=>{var l=s.$$,u=!!l.smartPtr;if(u){var d={$$:l},_=l.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${_.name} <${Re(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,dl),d.leakWarning=T.stack.replace(/^Error: /,""),na.register(s,d,s)}return s},ll=s=>na.unregister(s),Er(i)),Ju=()=>{let i=Zr.prototype;Object.assign(i,{isAliasOf(l){if(!(this instanceof Zr)||!(l instanceof Zr))return!1;var u=this.$$.ptrType.registeredClass,d=this.$$.ptr;l.$$=l.$$;for(var _=l.$$.ptrType.registeredClass,T=l.$$.ptr;u.baseClass;)d=u.upcast(d),u=u.baseClass;for(;_.baseClass;)T=_.upcast(T),_=_.baseClass;return u===_&&d===T},clone(){if(this.$$.ptr||ta(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=Er(Object.create(Object.getPrototypeOf(this),{$$:{value:$u(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||ta(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),ll(this),cl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ta(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(i[s]=i.delete)};function Zr(){}var Jr=(i,s)=>Object.defineProperty(s,"name",{value:i}),ia=(i,s,l)=>{if(i[s].overloadTable===void 0){var u=i[s];i[s]=function(...d){return i[s].overloadTable.hasOwnProperty(d.length)||dt(`Function '${l}' called with an invalid number of arguments (${d.length}) - expects one of (${i[s].overloadTable})!`),i[s].overloadTable[d.length].apply(this,d)},i[s].overloadTable=[],i[s].overloadTable[u.argCount]=u}},ra=(i,s,l)=>{t.hasOwnProperty(i)?((l===void 0||t[i].overloadTable!==void 0&&t[i].overloadTable[l]!==void 0)&&dt(`Cannot register public name '${i}' twice`),ia(t,i,i),t[i].overloadTable.hasOwnProperty(l)&&dt(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[i].overloadTable[l]=s):(t[i]=s,t[i].argCount=l)},Qu=48,ef=57,tf=i=>{C(typeof i=="string"),i=i.replace(/[^a-zA-Z0-9_]/g,"$");var s=i.charCodeAt(0);return s>=Qu&&s<=ef?`_${i}`:i};function nf(i,s,l,u,d,_,T,w){this.name=i,this.constructor=s,this.instancePrototype=l,this.rawDestructor=u,this.baseClass=d,this.getActualType=_,this.upcast=T,this.downcast=w,this.pureVirtualFunctions=[]}var Qr=(i,s,l)=>{for(;s!==l;)s.upcast||dt(`Expected null or instance of ${l.name}, got an instance of ${s.name}`),i=s.upcast(i),s=s.baseClass;return i};function rf(i,s){if(s===null)return this.isReference&&dt(`null is not a valid ${this.name}`),0;s.$$||dt(`Cannot pass "${Mi(s)}" as a ${this.name}`),s.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=s.$$.ptrType.registeredClass,u=Qr(s.$$.ptr,l,this.registeredClass);return u}function sf(i,s){var l;if(s===null)return this.isReference&&dt(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),i!==null&&i.push(this.rawDestructor,l),l):0;(!s||!s.$$)&&dt(`Cannot pass "${Mi(s)}" as a ${this.name}`),s.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&dt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var u=s.$$.ptrType.registeredClass;if(l=Qr(s.$$.ptr,u,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&dt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?l=s.$$.smartPtr:dt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)l=s.$$.smartPtr;else{var d=s.clone();l=this.rawShare(l,Ht.toHandle(()=>d.delete())),i!==null&&i.push(this.rawDestructor,l)}break;default:dt("Unsupporting sharing policy")}return l}function af(i,s){if(s===null)return this.isReference&&dt(`null is not a valid ${this.name}`),0;s.$$||dt(`Cannot pass "${Mi(s)}" as a ${this.name}`),s.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&dt(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass,u=Qr(s.$$.ptr,l,this.registeredClass);return u}function es(i){return this.fromWireType(Ee[i>>2])}var of=()=>{Object.assign(ts.prototype,{getPointee(i){return this.rawGetPointee&&(i=this.rawGetPointee(i)),i},destructor(i){this.rawDestructor?.(i)},argPackAdvance:Fn,readValueFromPointer:es,fromWireType:dl})};function ts(i,s,l,u,d,_,T,w,N,q,Q){this.name=i,this.registeredClass=s,this.isReference=l,this.isConst=u,this.isSmartPointer=d,this.pointeeType=_,this.sharingPolicy=T,this.rawGetPointee=w,this.rawConstructor=N,this.rawShare=q,this.rawDestructor=Q,!d&&s.baseClass===void 0?u?(this.toWireType=rf,this.destructorFunction=null):(this.toWireType=af,this.destructorFunction=null):this.toWireType=sf}var hl=(i,s,l)=>{t.hasOwnProperty(i)||Yr("Replacing nonexistent public symbol"),t[i].overloadTable!==void 0&&l!==void 0?t[i].overloadTable[l]=s:(t[i]=s,t[i].argCount=l)},pl=[],ns,ge=i=>{var s=pl[i];return s||(pl[i]=s=ns.get(i)),C(ns.get(i)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},Ln=(i,s,l=!1)=>{C(!l,"Async bindings are only supported with JSPI."),i=Ut(i);function u(){var _=ge(s);return _}var d=u();return typeof d!="function"&&dt(`unknown function pointer with signature ${i}: ${s}`),d};class lf extends Error{}var ml=i=>{var s=Il(i),l=Ut(s);return Un(s),l},Ei=(i,s)=>{var l=[],u={};function d(_){if(!u[_]&&!yi[_]){if(jr[_]){jr[_].forEach(d);return}l.push(_),u[_]=!0}}throw s.forEach(d),new lf(`${i}: `+l.map(ml).join([", "]))},Mn=(i,s,l)=>{i.forEach(w=>jr[w]=s);function u(w){var N=l(w);N.length!==i.length&&Yr("Mismatched type converter count");for(var q=0;q<i.length;++q)gn(i[q],N[q])}var d=new Array(s.length),_=[],T=0;s.forEach((w,N)=>{yi.hasOwnProperty(w)?d[N]=yi[w]:(_.push(w),Gi.hasOwnProperty(w)||(Gi[w]=[]),Gi[w].push(()=>{d[N]=yi[w],++T,T===_.length&&u(d)}))}),_.length===0&&u(d)},cf=(i,s,l,u,d,_,T,w,N,q,Q,ce,fe)=>{Q=Ut(Q),_=Ln(d,_),w&&=Ln(T,w),q&&=Ln(N,q),fe=Ln(ce,fe);var ue=tf(Q);ra(ue,function(){Ei(`Cannot construct ${Q} due to unbound types`,[u])}),Mn([i,s,l],u?[u]:[],pe=>{pe=pe[0];var We,ut;u?(We=pe.registeredClass,ut=We.instancePrototype):ut=Zr.prototype;var nt=Jr(Q,function(...Ct){if(Object.getPrototypeOf(this)!==Dt)throw new Mr(`Use 'new' to construct ${Q}`);if(vt.constructor_body===void 0)throw new Mr(`${Q} has no accessible constructor`);var wi=vt.constructor_body[Ct.length];if(wi===void 0)throw new Mr(`Tried to invoke ctor of ${Q} with invalid number of parameters (${Ct.length}) - expected (${Object.keys(vt.constructor_body).toString()}) parameters instead!`);return wi.apply(this,Ct)}),Dt=Object.create(ut,{constructor:{value:nt}});nt.prototype=Dt;var vt=new nf(Q,nt,Dt,fe,We,_,w,q);vt.baseClass&&(vt.baseClass.__derivedClasses??=[],vt.baseClass.__derivedClasses.push(vt));var Qt=new ts(Q,vt,!0,!1,!1),Wt=new ts(Q+"*",vt,!1,!1,!1),rn=new ts(Q+" const*",vt,!1,!0,!1);return fl[i]={pointerType:Wt,constPointerType:rn},hl(ue,nt),[Qt,Wt,rn]})},sa=i=>{for(;i.length;){var s=i.pop(),l=i.pop();l(s)}};function _l(i){for(var s=1;s<i.length;++s)if(i[s]!==null&&i[s].destructorFunction===void 0)return!0;return!1}function uf(i,s,l,u,d){if(i<s||i>l){var _=s==l?s:`${s} to ${l}`;d(`function ${u} called with ${i} arguments, expected ${_}`)}}function ff(i,s,l,u){var d=_l(i),_=i.length-2,T=[],w=["fn"];s&&w.push("thisWired");for(var N=0;N<_;++N)T.push(`arg${N}`),w.push(`arg${N}Wired`);T=T.join(","),w=w.join(",");var q=`return function (${T}) {
`;q+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,d&&(q+=`var destructors = [];
`);var Q=d?"destructors":"null",ce=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&(q+=`var thisWired = classParam['toWireType'](${Q}, this);
`);for(var N=0;N<_;++N)q+=`var arg${N}Wired = argType${N}['toWireType'](${Q}, arg${N});
`,ce.push(`argType${N}`);if(q+=(l||u?"var rv = ":"")+`invoker(${w});
`,d)q+=`runDestructors(destructors);
`;else for(var N=s?1:2;N<i.length;++N){var fe=N===1?"thisWired":"arg"+(N-2)+"Wired";i[N].destructorFunction!==null&&(q+=`${fe}_dtor(${fe});
`,ce.push(`${fe}_dtor`))}return l&&(q+=`var ret = retType['fromWireType'](rv);
return ret;
`),q+=`}
`,ce.push("checkArgCount","minArgs","maxArgs"),q=`if (arguments.length !== ${ce.length}){ throw new Error(humanName + "Expected ${ce.length} closure arguments " + arguments.length + " given."); }
${q}`,[ce,q]}function df(i){for(var s=i.length-2,l=i.length-1;l>=2&&i[l].optional;--l)s--;return s}function is(i,s,l,u,d,_){var T=s.length;T<2&&dt("argTypes array size mismatch! Must at least get return value and 'this' types!"),C(!_,"Async bindings are only supported with JSPI.");for(var w=s[1]!==null&&l!==null,N=_l(s),q=s[0].name!=="void",Q=T-2,ce=df(s),fe=[i,dt,u,d,sa,s[0],s[1]],ue=0;ue<T-2;++ue)fe.push(s[ue+2]);if(!N)for(var ue=w?1:2;ue<s.length;++ue)s[ue].destructorFunction!==null&&fe.push(s[ue].destructorFunction);fe.push(uf,ce,Q);let[pe,We]=ff(s,w,q,_);var ut=new Function(...pe,We)(...fe);return Jr(i,ut)}var rs=(i,s)=>{for(var l=[],u=0;u<i;u++)l.push(Ee[s+u*4>>2]);return l},aa=i=>{i=i.trim();const s=i.indexOf("(");return s===-1?i:(C(i.endsWith(")"),"Parentheses for argument names should match."),i.slice(0,s))},hf=(i,s,l,u,d,_,T,w,N)=>{var q=rs(l,u);s=Ut(s),s=aa(s),_=Ln(d,_,w),Mn([],[i],Q=>{Q=Q[0];var ce=`${Q.name}.${s}`;function fe(){Ei(`Cannot call ${ce} due to unbound types`,q)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var ue=Q.registeredClass.constructor;return ue[s]===void 0?(fe.argCount=l-1,ue[s]=fe):(ia(ue,s,ce),ue[s].overloadTable[l-1]=fe),Mn([],q,pe=>{var We=[pe[0],null].concat(pe.slice(1)),ut=is(ce,We,null,_,T,w);if(ue[s].overloadTable===void 0?(ut.argCount=l-1,ue[s]=ut):ue[s].overloadTable[l-1]=ut,Q.registeredClass.__derivedClasses)for(const nt of Q.registeredClass.__derivedClasses)nt.constructor.hasOwnProperty(s)||(nt.constructor[s]=ut);return[]}),[]})},pf=(i,s,l,u,d,_)=>{C(s>0);var T=rs(s,l);d=Ln(u,d),Mn([],[i],w=>{w=w[0];var N=`constructor ${w.name}`;if(w.registeredClass.constructor_body===void 0&&(w.registeredClass.constructor_body=[]),w.registeredClass.constructor_body[s-1]!==void 0)throw new Mr(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return w.registeredClass.constructor_body[s-1]=()=>{Ei(`Cannot construct ${w.name} due to unbound types`,T)},Mn([],T,q=>(q.splice(1,0,null),w.registeredClass.constructor_body[s-1]=is(N,q,null,d,_),[])),[]})},mf=(i,s,l,u,d,_,T,w,N,q)=>{var Q=rs(l,u);s=Ut(s),s=aa(s),_=Ln(d,_,N),Mn([],[i],ce=>{ce=ce[0];var fe=`${ce.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),w&&ce.registeredClass.pureVirtualFunctions.push(s);function ue(){Ei(`Cannot call ${fe} due to unbound types`,Q)}var pe=ce.registeredClass.instancePrototype,We=pe[s];return We===void 0||We.overloadTable===void 0&&We.className!==ce.name&&We.argCount===l-2?(ue.argCount=l-2,ue.className=ce.name,pe[s]=ue):(ia(pe,s,fe),pe[s].overloadTable[l-2]=ue),Mn([],Q,ut=>{var nt=is(fe,ut,ce,_,T,N);return pe[s].overloadTable===void 0?(nt.argCount=l-2,pe[s]=nt):pe[s].overloadTable[l-2]=nt,[]}),[]})},gl=(i,s,l)=>(i instanceof Object||dt(`${l} with invalid "this": ${i}`),i instanceof s.registeredClass.constructor||dt(`${l} incompatible with "this" of type ${i.constructor.name}`),i.$$.ptr||dt(`cannot call emscripten binding method ${l} on deleted object`),Qr(i.$$.ptr,i.$$.ptrType.registeredClass,s.registeredClass)),_f=(i,s,l,u,d,_,T,w,N,q)=>{s=Ut(s),d=Ln(u,d),Mn([],[i],Q=>{Q=Q[0];var ce=`${Q.name}.${s}`,fe={get(){Ei(`Cannot access ${ce} due to unbound types`,[l,T])},enumerable:!0,configurable:!0};return N?fe.set=()=>Ei(`Cannot access ${ce} due to unbound types`,[l,T]):fe.set=ue=>dt(ce+" is a read-only property"),Object.defineProperty(Q.registeredClass.instancePrototype,s,fe),Mn([],N?[l,T]:[l],ue=>{var pe=ue[0],We={get(){var nt=gl(this,Q,ce+" getter");return pe.fromWireType(d(_,nt))},enumerable:!0};if(N){N=Ln(w,N);var ut=ue[1];We.set=function(nt){var Dt=gl(this,Q,ce+" setter"),vt=[];N(q,Dt,ut.toWireType(vt,nt)),sa(vt)}}return Object.defineProperty(Q.registeredClass.instancePrototype,s,We),[]}),[]})},gf=(i,s,l)=>{i=Ut(i),Mn([],[s],u=>(u=u[0],t[i]=u.fromWireType(l),[]))},vl=[],In=[0,1,,1,null,1,!0,1,!1,1],oa=i=>{i>9&&--In[i+1]===0&&(C(In[i]!==void 0,"Decref for unallocated handle."),In[i]=void 0,vl.push(i))},Ht={toValue:i=>(i||dt(`Cannot use deleted val. handle = ${i}`),C(i===2||In[i]!==void 0&&i%2===0,`invalid handle: ${i}`),In[i]),toHandle:i=>{switch(i){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=vl.pop()||In.length;return In[s]=i,In[s+1]=1,s}}}},xl={name:"emscripten::val",fromWireType:i=>{var s=Ht.toValue(i);return oa(i),s},toWireType:(i,s)=>Ht.toHandle(s),argPackAdvance:Fn,readValueFromPointer:es,destructorFunction:null},Sl=i=>gn(i,xl),vf=(i,s,l)=>{switch(s){case 1:return l?function(u){return this.fromWireType(Ze[u])}:function(u){return this.fromWireType(st[u])};case 2:return l?function(u){return this.fromWireType(le[u>>1])}:function(u){return this.fromWireType(Se[u>>1])};case 4:return l?function(u){return this.fromWireType(se[u>>2])}:function(u){return this.fromWireType(Ee[u>>2])};default:throw new TypeError(`invalid integer width (${s}): ${i}`)}},xf=(i,s,l,u)=>{s=Ut(s);function d(){}d.values={},gn(i,{name:s,constructor:d,fromWireType:function(_){return this.constructor.values[_]},toWireType:(_,T)=>T.value,argPackAdvance:Fn,readValueFromPointer:vf(s,l,u),destructorFunction:null}),ra(s,d)},ss=(i,s)=>{var l=yi[i];return l===void 0&&dt(`${s} has unknown type ${ml(i)}`),l},Sf=(i,s,l)=>{var u=ss(i,"enum");s=Ut(s);var d=u.constructor,_=Object.create(u.constructor.prototype,{value:{value:l},constructor:{value:Jr(`${u.name}_${s}`,function(){})}});d.values[l]=_,d[s]=_},yf=(i,s)=>{switch(s){case 4:return function(l){return this.fromWireType(He[l>>2])};case 8:return function(l){return this.fromWireType($e[l>>3])};default:throw new TypeError(`invalid float width (${s}): ${i}`)}},Mf=(i,s,l)=>{s=Ut(s),gn(i,{name:s,fromWireType:u=>u,toWireType:(u,d)=>{if(typeof d!="number"&&typeof d!="boolean")throw new TypeError(`Cannot convert ${Mi(d)} to ${this.name}`);return d},argPackAdvance:Fn,readValueFromPointer:yf(s,l),destructorFunction:null})},Ef=(i,s,l,u,d,_,T,w)=>{var N=rs(s,l);i=Ut(i),i=aa(i),d=Ln(u,d,T),ra(i,function(){Ei(`Cannot call ${i} due to unbound types`,N)},s-1),Mn([],N,q=>{var Q=[q[0],null].concat(q.slice(1));return hl(i,is(i,Q,null,d,_,T),s-1),[]})},Tf=(i,s,l,u,d)=>{s=Ut(s);const _=u===0;let T=N=>N;if(_){var w=32-8*l;T=N=>N<<w>>>w,d=T(d)}gn(i,{name:s,fromWireType:T,toWireType:(N,q)=>{if(typeof q!="number"&&typeof q!="boolean")throw new TypeError(`Cannot convert "${Mi(q)}" to ${s}`);return ol(s,q,u,d),q},argPackAdvance:Fn,readValueFromPointer:al(s,l,u!==0),destructorFunction:null})},bf=(i,s,l)=>{var u=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],d=u[s];function _(T){var w=Ee[T>>2],N=Ee[T+4>>2];return new d(Ze.buffer,N,w)}l=Ut(l),gn(i,{name:l,fromWireType:_,argPackAdvance:Fn,readValueFromPointer:_},{ignoreDuplicateRegistrations:!0})},wf=Object.assign({optional:!0},xl),Af=(i,s)=>{gn(i,wf)},Ti=(i,s,l)=>(C(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),re(i,st,s,l)),Rf=(i,s)=>{s=Ut(s),gn(i,{name:s,fromWireType(l){for(var u=Ee[l>>2],d=l+4,_,T,w=d,T=0;T<=u;++T){var N=d+T;if(T==u||st[N]==0){var q=N-w,Q=rt(w,q);_===void 0?_=Q:(_+="\0",_+=Q),w=N+1}}return Un(l),_},toWireType(l,u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));var d,_=typeof u=="string";_||ArrayBuffer.isView(u)&&u.BYTES_PER_ELEMENT==1||dt("Cannot pass non-string to std::string"),_?d=$(u):d=u.length;var T=ua(4+d+1),w=T+4;return Ee[T>>2]=d,_?Ti(u,w,d+1):st.set(u,w),l!==null&&l.push(Un,T),T},argPackAdvance:Fn,readValueFromPointer:es,destructorFunction(l){Un(l)}})},yl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Cf=(i,s)=>{C(i%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=i>>1,u=l+s/2,d=l;!(d>=u)&&Se[d];)++d;if(d-l>16&&yl)return yl.decode(Se.subarray(l,d));for(var _="",T=l;!(T>=u);++T){var w=Se[T];if(w==0)break;_+=String.fromCharCode(w)}return _},Pf=(i,s,l)=>{if(C(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),C(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??=2147483647,l<2)return 0;l-=2;for(var u=s,d=l<i.length*2?l/2:i.length,_=0;_<d;++_){var T=i.charCodeAt(_);le[s>>1]=T,s+=2}return le[s>>1]=0,s-u},Df=i=>i.length*2,Ff=(i,s)=>{C(i%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",u=0;!(u>=s/4);u++){var d=se[i+u*4>>2];if(!d)break;l+=String.fromCodePoint(d)}return l},Lf=(i,s,l)=>{if(C(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),C(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??=2147483647,l<4)return 0;for(var u=s,d=u+l-4,_=0;_<i.length;++_){var T=i.codePointAt(_);if(T>65535&&_++,se[s>>2]=T,s+=4,s+4>d)break}return se[s>>2]=0,s-u},If=i=>{for(var s=0,l=0;l<i.length;++l){var u=i.codePointAt(l);u>65535&&l++,s+=4}return s},Uf=(i,s,l)=>{l=Ut(l);var u,d,_,T;s===2?(u=Cf,d=Pf,T=Df,_=w=>Se[w>>1]):s===4&&(u=Ff,d=Lf,T=If,_=w=>Ee[w>>2]),gn(i,{name:l,fromWireType:w=>{for(var N=Ee[w>>2],q,Q=w+4,ce=0;ce<=N;++ce){var fe=w+4+ce*s;if(ce==N||_(fe)==0){var ue=fe-Q,pe=u(Q,ue);q===void 0?q=pe:(q+="\0",q+=pe),Q=fe+s}}return Un(w),q},toWireType:(w,N)=>{typeof N!="string"&&dt(`Cannot pass non-string to C++ string type ${l}`);var q=T(N),Q=ua(4+q+s);return Ee[Q>>2]=q/s,d(N,Q+4,q+s),w!==null&&w.push(Un,Q),Q},argPackAdvance:Fn,readValueFromPointer:es,destructorFunction(w){Un(w)}})},Nf=(i,s)=>{Sl(i)},Of=(i,s)=>{s=Ut(s),gn(i,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,u)=>{}})},Bf=()=>{throw new z},Ml=(i,s,l)=>{var u=[],d=i.toWireType(u,l);return u.length&&(Ee[s>>2]=Ht.toHandle(u)),d},kf=(i,s,l)=>(i=Ht.toValue(i),s=ss(s,"emval::as"),Ml(s,l,i)),as=[],zf=(i,s,l,u)=>(i=as[i],s=Ht.toValue(s),i(null,s,l,u)),Vf={},la=i=>{var s=Vf[i];return s===void 0?Ut(i):s},Gf=(i,s,l,u,d)=>(i=as[i],s=Ht.toValue(s),l=la(l),i(s,s[l],u,d)),El=()=>globalThis,Hf=i=>i===0?Ht.toHandle(El()):(i=la(i),Ht.toHandle(El()[i])),Wf=i=>{var s=as.length;return as.push(i),s},Xf=(i,s)=>{for(var l=new Array(i),u=0;u<i;++u)l[u]=ss(Ee[s+u*4>>2],`parameter ${u}`);return l},$f=(i,s,l)=>{var u=Xf(i,s),d=u.shift();i--;var _=`return function (obj, func, destructorsRef, args) {
`,T=0,w=[];l===0&&w.push("obj");for(var N=["retType"],q=[d],Q=0;Q<i;++Q)w.push(`arg${Q}`),N.push(`argType${Q}`),q.push(u[Q]),_+=`  var arg${Q} = argType${Q}.readValueFromPointer(args${T?"+"+T:""});
`,T+=u[Q].argPackAdvance;var ce=l===1?"new func":"func.call";_+=`  var rv = ${ce}(${w.join(", ")});
`,d.isVoid||(N.push("emval_returnValue"),q.push(Ml),_+=`  return emval_returnValue(retType, destructorsRef, rv);
`),_+=`};
`;var fe=new Function(...N,_)(...q),ue=`methodCaller<(${u.map(pe=>pe.name).join(", ")}) => ${d.name}>`;return Wf(Jr(ue,fe))},qf=(i,s)=>(i=Ht.toValue(i),s=Ht.toValue(s),Ht.toHandle(i[s])),jf=i=>{i>9&&(In[i+1]+=1)},Yf=i=>(i=Ht.toValue(i),typeof i=="number"),Kf=i=>(i=Ht.toValue(i),typeof i=="string"),Zf=()=>Ht.toHandle([]),Jf=i=>Ht.toHandle(la(i)),Qf=i=>{var s=Ht.toValue(i);sa(s),oa(i)},ed=(i,s)=>{i=ss(i,"_emval_take_value");var l=i.readValueFromPointer(s);return Ht.toHandle(l)},td=i=>{throw i=Ht.toValue(i),i},nd=i=>i%4===0&&(i%100!==0||i%400===0),id=[0,31,60,91,121,152,182,213,244,274,305,335],rd=[0,31,59,90,120,151,181,212,243,273,304,334],Tl=i=>{var s=nd(i.getFullYear()),l=s?id:rd,u=l[i.getMonth()]+i.getDate()-1;return u},sd=9007199254740992,ad=-9007199254740992,bl=i=>i<ad||i>sd?NaN:Number(i);function od(i,s){i=bl(i);var l=new Date(i*1e3);se[s>>2]=l.getSeconds(),se[s+4>>2]=l.getMinutes(),se[s+8>>2]=l.getHours(),se[s+12>>2]=l.getDate(),se[s+16>>2]=l.getMonth(),se[s+20>>2]=l.getFullYear()-1900,se[s+24>>2]=l.getDay();var u=Tl(l)|0;se[s+28>>2]=u,se[s+36>>2]=-(l.getTimezoneOffset()*60);var d=new Date(l.getFullYear(),0,1),_=new Date(l.getFullYear(),6,1).getTimezoneOffset(),T=d.getTimezoneOffset(),w=(_!=T&&l.getTimezoneOffset()==Math.min(T,_))|0;se[s+32>>2]=w}var ld=function(i){var s=(()=>{var l=new Date(se[i+20>>2]+1900,se[i+16>>2],se[i+12>>2],se[i+8>>2],se[i+4>>2],se[i>>2],0),u=se[i+32>>2],d=l.getTimezoneOffset(),_=new Date(l.getFullYear(),0,1),T=new Date(l.getFullYear(),6,1).getTimezoneOffset(),w=_.getTimezoneOffset(),N=Math.min(w,T);if(u<0)se[i+32>>2]=+(T!=w&&N==d);else if(u>0!=(N==d)){var q=Math.max(w,T),Q=u>0?N:q;l.setTime(l.getTime()+(Q-d)*6e4)}se[i+24>>2]=l.getDay();var ce=Tl(l)|0;se[i+28>>2]=ce,se[i>>2]=l.getSeconds(),se[i+4>>2]=l.getMinutes(),se[i+8>>2]=l.getHours(),se[i+12>>2]=l.getDate(),se[i+16>>2]=l.getMonth(),se[i+20>>2]=l.getYear();var fe=l.getTime();return isNaN(fe)?-1:fe/1e3})();return BigInt(s)},cd=(i,s,l,u)=>{var d=new Date().getFullYear(),_=new Date(d,0,1),T=new Date(d,6,1),w=_.getTimezoneOffset(),N=T.getTimezoneOffset(),q=Math.max(w,N);Ee[i>>2]=q*60,se[s>>2]=+(w!=N);var Q=ue=>{var pe=ue>=0?"-":"+",We=Math.abs(ue),ut=String(Math.floor(We/60)).padStart(2,"0"),nt=String(We%60).padStart(2,"0");return`UTC${pe}${ut}${nt}`},ce=Q(w),fe=Q(N);C(ce),C(fe),C($(ce)<=16,`timezone name truncated to fit in TZNAME_MAX (${ce})`),C($(fe)<=16,`timezone name truncated to fit in TZNAME_MAX (${fe})`),N<w?(Ti(ce,l,17),Ti(fe,u,17)):(Ti(ce,u,17),Ti(fe,l,17))},wl=()=>performance.now(),Al=()=>Date.now(),ud=i=>i>=0&&i<=3;function fd(i,s,l){if(!ud(i))return 28;var u;i===0?u=Al():u=wl();var d=Math.round(u*1e3*1e3);return bt[l>>3]=BigInt(d),0}var os=[],dd=(i,s)=>{C(Array.isArray(os)),C(s%16==0),os.length=0;for(var l;l=st[i++];){var u=String.fromCharCode(l),d=["d","f","i","p"];d.push("j"),C(d.includes(u),`Invalid character ${l}("${u}") in readEmAsmArgs! Use only [${d}], and do not specify "v" for void return argument.`);var _=l!=105;_&=l!=112,s+=_&&s%8?4:0,os.push(l==112?Ee[s>>2]:l==106?bt[s>>3]:l==105?se[s>>2]:$e[s>>3]),s+=_?8:4}return os},hd=(i,s,l)=>{var u=dd(s,l);return C(Ll.hasOwnProperty(i),`No EM_ASM constant found at address ${i}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Ll[i](...u)},pd=(i,s,l)=>hd(i,s,l),Rl=()=>2147483648,md=()=>Rl(),_d=(i,s)=>(C(s,"alignment argument is required"),Math.ceil(i/s)*s),gd=i=>{var s=je.buffer,l=(i-s.byteLength+65535)/65536|0;try{return je.grow(l),Mt(),1}catch(u){I(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${i} bytes, but got error: ${u}`)}},vd=i=>{var s=st.length;i>>>=0,C(i>s);var l=Rl();if(i>l)return I(`Cannot enlarge memory, requested ${i} bytes, but the limit is ${l} bytes!`),!1;for(var u=1;u<=4;u*=2){var d=s*(1+.2/u);d=Math.min(d,i+100663296);var _=Math.min(l,_d(Math.max(i,d),65536)),T=gd(_);if(T)return!0}return I(`Failed to grow the heap from ${s} bytes to ${_} bytes, not enough memory!`),!1},ca={},xd=()=>p||"./this.program",Tr=()=>{if(!Tr.strings){var i=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:i,_:xd()};for(var l in ca)ca[l]===void 0?delete s[l]:s[l]=ca[l];var u=[];for(var l in s)u.push(`${l}=${s[l]}`);Tr.strings=u}return Tr.strings},Sd=(i,s)=>{var l=0,u=0;for(var d of Tr()){var _=s+l;Ee[i+u>>2]=_,l+=Ti(d,_,1/0)+1,u+=4}return 0},yd=(i,s)=>{var l=Tr();Ee[i>>2]=l.length;var u=0;for(var d of l)u+=$(d)+1;return Ee[s>>2]=u,0},Cl=0,Pl=()=>ye||Cl>0,Md=i=>{Pl()||(t.onExit?.(i),k=!0),h(i,new Oe(i))},Ed=(i,s)=>{if(Ip(),Pl()&&!s){var l=`program exited (with status: ${i}), but keepRuntimeAlive() is set (counter=${Cl}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Pe?.(l),I(l)}Md(i)},Td=Ed;function bd(i){try{var s=at.getStreamFromFD(i);return x.close(s),0}catch(l){if(typeof x>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var wd=(i,s,l,u)=>{for(var d=0,_=0;_<l;_++){var T=Ee[s>>2],w=Ee[s+4>>2];s+=8;var N=x.read(i,Ze,T,w,u);if(N<0)return-1;if(d+=N,N<w)break}return d};function Ad(i,s,l,u){try{var d=at.getStreamFromFD(i),_=wd(d,s,l);return Ee[u>>2]=_,0}catch(T){if(typeof x>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function Rd(i,s,l,u){s=bl(s);try{if(isNaN(s))return 61;var d=at.getStreamFromFD(i);return x.llseek(d,s,l),bt[u>>3]=BigInt(d.position),d.getdents&&s===0&&l===0&&(d.getdents=null),0}catch(_){if(typeof x>"u"||_.name!=="ErrnoError")throw _;return _.errno}}var Cd=(i,s,l,u)=>{for(var d=0,_=0;_<l;_++){var T=Ee[s>>2],w=Ee[s+4>>2];s+=8;var N=x.write(i,Ze,T,w,u);if(N<0)return-1;if(d+=N,N<w)break}return d};function Pd(i,s,l,u){try{var d=at.getStreamFromFD(i),_=Cd(d,s,l);return Ee[u>>2]=_,0}catch(T){if(typeof x>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var Dd=i=>i,Fd=i=>{var s=t["_"+i];return C(s,"Cannot call unknown function "+i+", make sure it is exported"),s},Ld=(i,s)=>{C(i.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ze.set(i,s)},ls=i=>kl(i),Id=i=>{var s=$(i)+1,l=ls(s);return Ti(i,l,s),l},Dl=(i,s,l,u,d)=>{var _={string:pe=>{var We=0;return pe!=null&&pe!==0&&(We=Id(pe)),We},array:pe=>{var We=ls(pe.length);return Ld(pe,We),We}};function T(pe){return s==="string"?rt(pe):s==="boolean"?!!pe:pe}var w=Fd(i),N=[],q=0;if(C(s!=="array",'Return type should not be "array".'),u)for(var Q=0;Q<u.length;Q++){var ce=_[l[Q]];ce?(q===0&&(q=B()),N[Q]=ce(u[Q])):N[Q]=u[Q]}var fe=w(...N);function ue(pe){return q!==0&&X(q),T(pe)}return fe=ue(fe),fe},Ud=(i,s,l,u)=>(...d)=>Dl(i,s,l,d),Nd=(...i)=>x.createPath(...i),Od=(...i)=>x.unlink(...i),Bd=(...i)=>x.createLazyFile(...i),kd=(...i)=>x.createDevice(...i),zd=i=>cs(i),Vd=i=>ha(i),Gd=i=>{var s=B(),l=ls(4),u=ls(4);Vl(i,l,u);var d=Ee[l>>2],_=Ee[u>>2],T=rt(d);Un(d);var w;return _&&(w=rt(_),Un(_)),X(s),[T,w]},Fl=i=>Gd(i);x.createPreloadedFile=yt,x.staticInit(),Ju(),of(),C(In.length===10),t.noExitRuntime&&(ye=t.noExitRuntime),t.preloadPlugins&&(Je=t.preloadPlugins),t.print&&(D=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(U=t.wasmBinary),Xd(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),C(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),C(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),C(typeof t.read>"u","Module.read option was removed"),C(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),C(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),C(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),C(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),C(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),C(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),C(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),C(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=L,t.removeRunDependency=E,t.ccall=Dl,t.cwrap=Ud,t.FS_createPreloadedFile=yt,t.FS_unlink=Od,t.FS_createPath=Nd,t.FS_createDevice=kd,t.FS=x,t.FS_createDataFile=ze,t.FS_createLazyFile=Bd,t.MEMFS=de;var Hd=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Hd.forEach(_e);var Wd=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Wd.forEach(Ce),t.incrementExceptionRefcount=zd,t.decrementExceptionRefcount=Vd,t.getExceptionMessage=Fl;function Xd(){ie("fetchSettings")}var Ll={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(i){Object.defineProperty(t,i,{get:function(){return t["get_"+i]()},set:function(s){},enumerable:!0,configurable:!0})})}},Il=Y("___getTypeName"),ua=Y("_malloc"),fa=Y("_fflush"),Un=Y("_free"),da=Y("_emscripten_stack_get_end"),Ul=Y("_strerror"),me=Y("_setThrew"),Nl=Y("__emscripten_tempret_set"),Ol=Y("_emscripten_stack_init"),Bl=Y("__emscripten_stack_restore"),kl=Y("__emscripten_stack_alloc"),zl=Y("_emscripten_stack_get_current"),ha=Y("___cxa_decrement_exception_refcount"),cs=Y("___cxa_increment_exception_refcount"),Vl=Y("___get_exception_message"),Gl=Y("___cxa_can_catch"),Hl=Y("___cxa_get_exception_ptr");function $d(i){Il=ae("__getTypeName",1),ua=ae("malloc",1),fa=ae("fflush",1),Un=ae("free",1),da=i.emscripten_stack_get_end,i.emscripten_stack_get_base,Ul=ae("strerror",1),me=ae("setThrew",2),Nl=ae("_emscripten_tempret_set",1),Ol=i.emscripten_stack_init,i.emscripten_stack_get_free,Bl=i._emscripten_stack_restore,kl=i._emscripten_stack_alloc,zl=i.emscripten_stack_get_current,ha=ae("__cxa_decrement_exception_refcount",1),cs=ae("__cxa_increment_exception_refcount",1),Vl=ae("__get_exception_message",3),Gl=ae("__cxa_can_catch",3),Hl=ae("__cxa_get_exception_ptr",1)}var Wl={__assert_fail:yn,__cxa_begin_catch:yr,__cxa_current_primary_exception:Zs,__cxa_end_catch:Gr,__cxa_find_matching_catch_2:Hr,__cxa_find_matching_catch_3:Vi,__cxa_find_matching_catch_4:Wr,__cxa_rethrow:Si,__cxa_rethrow_primary_exception:Xr,__cxa_throw:$r,__cxa_uncaught_exceptions:Js,__resumeException:Qs,__syscall_dup3:mt,__syscall_fcntl64:qn,__syscall_fstat64:oi,__syscall_ioctl:wt,__syscall_lstat64:Gt,__syscall_newfstatat:Pn,__syscall_openat:Bt,__syscall_stat64:Dn,_abort_js:li,_embind_register_bigint:Wu,_embind_register_bool:Xu,_embind_register_class:cf,_embind_register_class_class_function:hf,_embind_register_class_constructor:pf,_embind_register_class_function:mf,_embind_register_class_property:_f,_embind_register_constant:gf,_embind_register_emval:Sl,_embind_register_enum:xf,_embind_register_enum_value:Sf,_embind_register_float:Mf,_embind_register_function:Ef,_embind_register_integer:Tf,_embind_register_memory_view:bf,_embind_register_optional:Af,_embind_register_std_string:Rf,_embind_register_std_wstring:Uf,_embind_register_user_type:Nf,_embind_register_void:Of,_emscripten_throw_longjmp:Bf,_emval_as:kf,_emval_call:zf,_emval_call_method:Gf,_emval_decref:oa,_emval_get_global:Hf,_emval_get_method_caller:$f,_emval_get_property:qf,_emval_incref:jf,_emval_is_number:Yf,_emval_is_string:Kf,_emval_new_array:Zf,_emval_new_cstring:Jf,_emval_run_destructors:Qf,_emval_take_value:ed,_emval_throw:td,_localtime_js:od,_mktime_js:ld,_tzset_js:cd,clock_time_get:fd,emscripten_asm_const_int:pd,emscripten_date_now:Al,emscripten_get_heap_max:md,emscripten_get_now:wl,emscripten_resize_heap:vd,environ_get:Sd,environ_sizes_get:yd,exit:Td,fd_close:bd,fd_read:Ad,fd_seek:Rd,fd_write:Pd,invoke_ddd:xp,invoke_dddi:Nh,invoke_dddidi:Oh,invoke_ddidi:Uh,invoke_di:Bh,invoke_dii:wh,invoke_diii:ah,invoke_diiii:Ih,invoke_diiiidd:Fh,invoke_diiiidi:ch,invoke_diiiii:th,invoke_diiiiii:mh,invoke_diiiiiii:kh,invoke_diiiiiiiii:hh,invoke_diiiiiiiiiiii:ph,invoke_fiii:Pp,invoke_i:nh,invoke_id:pp,invoke_ii:Yd,invoke_iid:Yh,invoke_iidddd:Tp,invoke_iidiii:Eh,invoke_iidiiid:yh,invoke_iidiiiiidi:Th,invoke_iif:Ep,invoke_iii:qd,invoke_iiid:bh,invoke_iiididdddddd:Mh,invoke_iiidiiiiiiii:Sh,invoke_iiii:Jd,invoke_iiiidddiiiii:Vh,invoke_iiiii:sh,invoke_iiiiid:sp,invoke_iiiiii:ep,invoke_iiiiiii:Zh,invoke_iiiiiiii:jh,invoke_iiiiiiiidd:ap,invoke_iiiiiiiii:Dh,invoke_iiiiiiiiii:Jh,invoke_iiiiiiiiiidddiiiiiiiii:xh,invoke_iiiiiiiiiii:Cp,invoke_iiiiiiiiiiii:Dp,invoke_iiiiiiiiiiiii:hp,invoke_iiij:Qh,invoke_iiji:rp,invoke_j:Ap,invoke_ji:dp,invoke_jiiii:tp,invoke_jij:fp,invoke_v:Zd,invoke_vi:Kd,invoke_vid:Kh,invoke_viddd:np,invoke_vidddd:ip,invoke_vidi:Lh,invoke_vidiii:gh,invoke_vii:eh,invoke_viid:Ch,invoke_viiddi:up,invoke_viiddidi:cp,invoke_viiddii:zh,invoke_viidi:Rh,invoke_viidii:lh,invoke_viidiii:$h,invoke_viidiiid:Wh,invoke_viidiiiii:vh,invoke_viidiiiiidi:qh,invoke_viidiiiiiiii:_h,invoke_viii:jd,invoke_viiid:fh,invoke_viiidd:lp,invoke_viiidi:Ah,invoke_viiididdddddd:Xh,invoke_viiidiiiiiiii:Hh,invoke_viiii:rh,invoke_viiiiddd:op,invoke_viiiidi:Sp,invoke_viiiifi:yp,invoke_viiiii:Qd,invoke_viiiiid:uh,invoke_viiiiii:ih,invoke_viiiiiii:oh,invoke_viiiiiiii:Ph,invoke_viiiiiiiiii:gp,invoke_viiiiiiiiiidddiiiiiiiii:Gh,invoke_viiiiiiiiiiid:dh,invoke_viiiiiiiiiiiii:_p,invoke_viiiiiiiiiiiiiii:Fp,invoke_viiiiiiiiiiiiiiiiii:vp,invoke_viiiij:bp,invoke_viij:wp,invoke_viijii:Rp,invoke_vij:Mp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:mp,llvm_eh_typeid_for:Dd},bi=await Me();function qd(i,s,l){var u=B();try{return ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;me(1,0)}}function jd(i,s,l,u){var d=B();try{ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function Yd(i,s){var l=B();try{return ge(i)(s)}catch(u){if(X(l),!(u instanceof O))throw u;me(1,0)}}function Kd(i,s){var l=B();try{ge(i)(s)}catch(u){if(X(l),!(u instanceof O))throw u;me(1,0)}}function Zd(i){var s=B();try{ge(i)()}catch(l){if(X(s),!(l instanceof O))throw l;me(1,0)}}function Jd(i,s,l,u){var d=B();try{return ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function Qd(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function eh(i,s,l){var u=B();try{ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;me(1,0)}}function th(i,s,l,u,d,_){var T=B();try{return ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function nh(i){var s=B();try{return ge(i)()}catch(l){if(X(s),!(l instanceof O))throw l;me(1,0)}}function ih(i,s,l,u,d,_,T){var w=B();try{ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function rh(i,s,l,u,d){var _=B();try{ge(i)(s,l,u,d)}catch(T){if(X(_),!(T instanceof O))throw T;me(1,0)}}function sh(i,s,l,u,d){var _=B();try{return ge(i)(s,l,u,d)}catch(T){if(X(_),!(T instanceof O))throw T;me(1,0)}}function ah(i,s,l,u){var d=B();try{return ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function oh(i,s,l,u,d,_,T,w){var N=B();try{ge(i)(s,l,u,d,_,T,w)}catch(q){if(X(N),!(q instanceof O))throw q;me(1,0)}}function lh(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function ch(i,s,l,u,d,_,T){var w=B();try{return ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function uh(i,s,l,u,d,_,T){var w=B();try{ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function fh(i,s,l,u,d){var _=B();try{ge(i)(s,l,u,d)}catch(T){if(X(_),!(T instanceof O))throw T;me(1,0)}}function dh(i,s,l,u,d,_,T,w,N,q,Q,ce,fe){var ue=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe)}catch(pe){if(X(ue),!(pe instanceof O))throw pe;me(1,0)}}function hh(i,s,l,u,d,_,T,w,N,q){var Q=B();try{return ge(i)(s,l,u,d,_,T,w,N,q)}catch(ce){if(X(Q),!(ce instanceof O))throw ce;me(1,0)}}function ph(i,s,l,u,d,_,T,w,N,q,Q,ce,fe){var ue=B();try{return ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe)}catch(pe){if(X(ue),!(pe instanceof O))throw pe;me(1,0)}}function mh(i,s,l,u,d,_,T){var w=B();try{return ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function _h(i,s,l,u,d,_,T,w,N,q,Q,ce){var fe=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce)}catch(ue){if(X(fe),!(ue instanceof O))throw ue;me(1,0)}}function gh(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function vh(i,s,l,u,d,_,T,w,N){var q=B();try{ge(i)(s,l,u,d,_,T,w,N)}catch(Q){if(X(q),!(Q instanceof O))throw Q;me(1,0)}}function xh(i,s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We,ut,nt,Dt,vt,Qt,Wt){var rn=B();try{return ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We,ut,nt,Dt,vt,Qt,Wt)}catch(Ct){if(X(rn),!(Ct instanceof O))throw Ct;me(1,0)}}function Sh(i,s,l,u,d,_,T,w,N,q,Q,ce){var fe=B();try{return ge(i)(s,l,u,d,_,T,w,N,q,Q,ce)}catch(ue){if(X(fe),!(ue instanceof O))throw ue;me(1,0)}}function yh(i,s,l,u,d,_,T){var w=B();try{return ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function Mh(i,s,l,u,d,_,T,w,N,q,Q,ce){var fe=B();try{return ge(i)(s,l,u,d,_,T,w,N,q,Q,ce)}catch(ue){if(X(fe),!(ue instanceof O))throw ue;me(1,0)}}function Eh(i,s,l,u,d,_){var T=B();try{return ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function Th(i,s,l,u,d,_,T,w,N,q){var Q=B();try{return ge(i)(s,l,u,d,_,T,w,N,q)}catch(ce){if(X(Q),!(ce instanceof O))throw ce;me(1,0)}}function bh(i,s,l,u){var d=B();try{return ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function wh(i,s,l){var u=B();try{return ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;me(1,0)}}function Ah(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function Rh(i,s,l,u,d){var _=B();try{ge(i)(s,l,u,d)}catch(T){if(X(_),!(T instanceof O))throw T;me(1,0)}}function Ch(i,s,l,u){var d=B();try{ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function Ph(i,s,l,u,d,_,T,w,N){var q=B();try{ge(i)(s,l,u,d,_,T,w,N)}catch(Q){if(X(q),!(Q instanceof O))throw Q;me(1,0)}}function Dh(i,s,l,u,d,_,T,w,N){var q=B();try{return ge(i)(s,l,u,d,_,T,w,N)}catch(Q){if(X(q),!(Q instanceof O))throw Q;me(1,0)}}function Fh(i,s,l,u,d,_,T){var w=B();try{return ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function Lh(i,s,l,u){var d=B();try{ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function Ih(i,s,l,u,d){var _=B();try{return ge(i)(s,l,u,d)}catch(T){if(X(_),!(T instanceof O))throw T;me(1,0)}}function Uh(i,s,l,u,d){var _=B();try{return ge(i)(s,l,u,d)}catch(T){if(X(_),!(T instanceof O))throw T;me(1,0)}}function Nh(i,s,l,u){var d=B();try{return ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function Oh(i,s,l,u,d,_){var T=B();try{return ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function Bh(i,s){var l=B();try{return ge(i)(s)}catch(u){if(X(l),!(u instanceof O))throw u;me(1,0)}}function kh(i,s,l,u,d,_,T,w){var N=B();try{return ge(i)(s,l,u,d,_,T,w)}catch(q){if(X(N),!(q instanceof O))throw q;me(1,0)}}function zh(i,s,l,u,d,_,T){var w=B();try{ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function Vh(i,s,l,u,d,_,T,w,N,q,Q,ce){var fe=B();try{return ge(i)(s,l,u,d,_,T,w,N,q,Q,ce)}catch(ue){if(X(fe),!(ue instanceof O))throw ue;me(1,0)}}function Gh(i,s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We,ut,nt,Dt,vt,Qt,Wt,rn){var Ct=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We,ut,nt,Dt,vt,Qt,Wt,rn)}catch(wi){if(X(Ct),!(wi instanceof O))throw wi;me(1,0)}}function Hh(i,s,l,u,d,_,T,w,N,q,Q,ce,fe){var ue=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe)}catch(pe){if(X(ue),!(pe instanceof O))throw pe;me(1,0)}}function Wh(i,s,l,u,d,_,T,w){var N=B();try{ge(i)(s,l,u,d,_,T,w)}catch(q){if(X(N),!(q instanceof O))throw q;me(1,0)}}function Xh(i,s,l,u,d,_,T,w,N,q,Q,ce,fe){var ue=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe)}catch(pe){if(X(ue),!(pe instanceof O))throw pe;me(1,0)}}function $h(i,s,l,u,d,_,T){var w=B();try{ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function qh(i,s,l,u,d,_,T,w,N,q,Q){var ce=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q)}catch(fe){if(X(ce),!(fe instanceof O))throw fe;me(1,0)}}function jh(i,s,l,u,d,_,T,w){var N=B();try{return ge(i)(s,l,u,d,_,T,w)}catch(q){if(X(N),!(q instanceof O))throw q;me(1,0)}}function Yh(i,s,l){var u=B();try{return ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;me(1,0)}}function Kh(i,s,l){var u=B();try{ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;me(1,0)}}function Zh(i,s,l,u,d,_,T){var w=B();try{return ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function Jh(i,s,l,u,d,_,T,w,N,q){var Q=B();try{return ge(i)(s,l,u,d,_,T,w,N,q)}catch(ce){if(X(Q),!(ce instanceof O))throw ce;me(1,0)}}function Qh(i,s,l,u){var d=B();try{return ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function ep(i,s,l,u,d,_){var T=B();try{return ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function tp(i,s,l,u,d){var _=B();try{return ge(i)(s,l,u,d)}catch(T){if(X(_),!(T instanceof O))throw T;return me(1,0),0n}}function np(i,s,l,u,d){var _=B();try{ge(i)(s,l,u,d)}catch(T){if(X(_),!(T instanceof O))throw T;me(1,0)}}function ip(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function rp(i,s,l,u){var d=B();try{return ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function sp(i,s,l,u,d,_){var T=B();try{return ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function ap(i,s,l,u,d,_,T,w,N,q){var Q=B();try{return ge(i)(s,l,u,d,_,T,w,N,q)}catch(ce){if(X(Q),!(ce instanceof O))throw ce;me(1,0)}}function op(i,s,l,u,d,_,T,w){var N=B();try{ge(i)(s,l,u,d,_,T,w)}catch(q){if(X(N),!(q instanceof O))throw q;me(1,0)}}function lp(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function cp(i,s,l,u,d,_,T,w){var N=B();try{ge(i)(s,l,u,d,_,T,w)}catch(q){if(X(N),!(q instanceof O))throw q;me(1,0)}}function up(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function fp(i,s,l){var u=B();try{return ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;return me(1,0),0n}}function dp(i,s){var l=B();try{return ge(i)(s)}catch(u){if(X(l),!(u instanceof O))throw u;return me(1,0),0n}}function hp(i,s,l,u,d,_,T,w,N,q,Q,ce,fe){var ue=B();try{return ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe)}catch(pe){if(X(ue),!(pe instanceof O))throw pe;me(1,0)}}function pp(i,s){var l=B();try{return ge(i)(s)}catch(u){if(X(l),!(u instanceof O))throw u;me(1,0)}}function mp(i,s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We,ut,nt,Dt,vt,Qt,Wt,rn,Ct,wi,Np,Op,Bp,kp,zp,Vp,Gp,Hp,Wp,Xp,$p,qp,jp,Yp,Kp,Zp,Jp,Qp,em,tm,nm,im,rm,sm,am,om,lm,cm,um,fm,dm,hm,pm,mm,_m,gm,vm,xm,Sm,ym,Mm,Em,Tm,bm,wm,Am,Rm,Cm,Pm,Dm,Fm,Lm,Im,Um,Nm,Om,Bm,km,zm,Vm,Gm){var Hm=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We,ut,nt,Dt,vt,Qt,Wt,rn,Ct,wi,Np,Op,Bp,kp,zp,Vp,Gp,Hp,Wp,Xp,$p,qp,jp,Yp,Kp,Zp,Jp,Qp,em,tm,nm,im,rm,sm,am,om,lm,cm,um,fm,dm,hm,pm,mm,_m,gm,vm,xm,Sm,ym,Mm,Em,Tm,bm,wm,Am,Rm,Cm,Pm,Dm,Fm,Lm,Im,Um,Nm,Om,Bm,km,zm,Vm,Gm)}catch($l){if(X(Hm),!($l instanceof O))throw $l;me(1,0)}}function _p(i,s,l,u,d,_,T,w,N,q,Q,ce,fe,ue){var pe=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe,ue)}catch(We){if(X(pe),!(We instanceof O))throw We;me(1,0)}}function gp(i,s,l,u,d,_,T,w,N,q,Q){var ce=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q)}catch(fe){if(X(ce),!(fe instanceof O))throw fe;me(1,0)}}function vp(i,s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We,ut,nt,Dt){var vt=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We,ut,nt,Dt)}catch(Qt){if(X(vt),!(Qt instanceof O))throw Qt;me(1,0)}}function xp(i,s,l){var u=B();try{return ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;me(1,0)}}function Sp(i,s,l,u,d,_,T){var w=B();try{ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function yp(i,s,l,u,d,_,T){var w=B();try{ge(i)(s,l,u,d,_,T)}catch(N){if(X(w),!(N instanceof O))throw N;me(1,0)}}function Mp(i,s,l){var u=B();try{ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;me(1,0)}}function Ep(i,s,l){var u=B();try{return ge(i)(s,l)}catch(d){if(X(u),!(d instanceof O))throw d;me(1,0)}}function Tp(i,s,l,u,d,_){var T=B();try{return ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function bp(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function wp(i,s,l,u){var d=B();try{ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function Ap(i){var s=B();try{return ge(i)()}catch(l){if(X(s),!(l instanceof O))throw l;return me(1,0),0n}}function Rp(i,s,l,u,d,_){var T=B();try{ge(i)(s,l,u,d,_)}catch(w){if(X(T),!(w instanceof O))throw w;me(1,0)}}function Cp(i,s,l,u,d,_,T,w,N,q,Q){var ce=B();try{return ge(i)(s,l,u,d,_,T,w,N,q,Q)}catch(fe){if(X(ce),!(fe instanceof O))throw fe;me(1,0)}}function Pp(i,s,l,u){var d=B();try{return ge(i)(s,l,u)}catch(_){if(X(d),!(_ instanceof O))throw _;me(1,0)}}function Dp(i,s,l,u,d,_,T,w,N,q,Q,ce){var fe=B();try{return ge(i)(s,l,u,d,_,T,w,N,q,Q,ce)}catch(ue){if(X(fe),!(ue instanceof O))throw ue;me(1,0)}}function Fp(i,s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We){var ut=B();try{ge(i)(s,l,u,d,_,T,w,N,q,Q,ce,fe,ue,pe,We)}catch(nt){if(X(ut),!(nt instanceof O))throw nt;me(1,0)}}var Xl;function Lp(){Ol(),A()}function pa(){if(Rt>0){ct=pa;return}if(Lp(),Qe(),Rt>0){ct=pa;return}function i(){C(!Xl),Xl=!0,t.calledRun=!0,!k&&(Lt(),Ue?.(t),t.onRuntimeInitialized?.(),Z("onRuntimeInitialized"),C(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),V())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),i()},1)):i(),F()}function Ip(){var i=D,s=I,l=!1;D=I=u=>{l=!0};try{fa(0),["stdout","stderr"].forEach(u=>{var d=x.analyzePath("/dev/"+u);if(d){var _=d.object,T=_.rdev,w=we.ttys[T];w?.output?.length&&(l=!0)}})}catch{}D=i,I=s,l&&Fe("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Up(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();Z("preInit")}Up(),pa(),ft?e=t:e=new Promise((i,s)=>{Ue=i,Pe=s});for(const i of Object.keys(t))i in r||Object.defineProperty(r,i,{configurable:!0,get(){G(`Access to module property ('${i}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const jm=""+new URL("mujoco-D9UjOFNX.wasm",import.meta.url).href;const Wo="183",Ym=0,jl=1,Km=2,Us=1,Zm=2,Lr=3,vi=0,ln=1,An=2,ei=0,rr=1,Yl=2,Kl=3,Zl=4,Jm=5,Ii=100,Qm=101,e_=102,t_=103,n_=104,i_=200,r_=201,s_=202,a_=203,Ka=204,Za=205,o_=206,l_=207,c_=208,u_=209,f_=210,d_=211,h_=212,p_=213,m_=214,Ja=0,Qa=1,eo=2,ar=3,to=4,no=5,io=6,ro=7,Jc=0,__=1,g_=2,Vn=0,Qc=1,eu=2,tu=3,nu=4,iu=5,ru=6,su=7,au=300,ki=301,or=302,ma=303,_a=304,qs=306,so=1e3,Qn=1001,ao=1002,Kt=1003,v_=1004,us=1005,nn=1006,ga=1007,Ni=1008,hn=1009,ou=1010,lu=1011,Ur=1012,Xo=1013,Wn=1014,kn=1015,ii=1016,$o=1017,qo=1018,Nr=1020,cu=35902,uu=35899,fu=1021,du=1022,Cn=1023,ri=1026,Oi=1027,hu=1028,jo=1029,lr=1030,Yo=1031,Ko=1033,Ns=33776,Os=33777,Bs=33778,ks=33779,oo=35840,lo=35841,co=35842,uo=35843,fo=36196,ho=37492,po=37496,mo=37488,_o=37489,go=37490,vo=37491,xo=37808,So=37809,yo=37810,Mo=37811,Eo=37812,To=37813,bo=37814,wo=37815,Ao=37816,Ro=37817,Co=37818,Po=37819,Do=37820,Fo=37821,Lo=36492,Io=36494,Uo=36495,No=36283,Oo=36284,Bo=36285,ko=36286,x_=3200,pu=0,S_=1,mi="",xn="srgb",cr="srgb-linear",Vs="linear",At="srgb",Hi=7680,Jl=519,y_=512,M_=513,E_=514,Zo=515,T_=516,b_=517,Jo=518,w_=519,Ql=35044,ec="300 es",zn=2e3,Or=2001;function A_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function R_(){const r=Gs("canvas");return r.style.display="block",r}const tc={};function nc(...r){const e="THREE."+r.shift();console.log(e,...r)}function mu(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ye(...r){r=mu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function St(...r){r=mu(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Hs(...r){const e=r.join(" ");e in tc||(tc[e]=!0,Ye(...r))}function C_(r,e,t){return new Promise(function(n,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const P_={[Ja]:Qa,[eo]:io,[to]:ro,[ar]:no,[Qa]:Ja,[io]:eo,[ro]:to,[no]:ar};class pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],va=Math.PI/180,zo=180/Math.PI;function zr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function D_(r,e){return(r%e+e)%e}function xa(r,e,t){return(1-t)*r+t*e}function br(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function on(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*a+e.x,this.y=o*a+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mr{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,c,f){let p=n[a+0],h=n[a+1],g=n[a+2],y=n[a+3],m=o[c+0],M=o[c+1],b=o[c+2],P=o[c+3];if(y!==P||p!==m||h!==M||g!==b){let S=p*m+h*M+g*b+y*P;S<0&&(m=-m,M=-M,b=-b,P=-P,S=-S);let v=1-f;if(S<.9995){const D=Math.acos(S),I=Math.sin(D);v=Math.sin(v*D)/I,f=Math.sin(f*D)/I,p=p*v+m*f,h=h*v+M*f,g=g*v+b*f,y=y*v+P*f}else{p=p*v+m*f,h=h*v+M*f,g=g*v+b*f,y=y*v+P*f;const D=1/Math.sqrt(p*p+h*h+g*g+y*y);p*=D,h*=D,g*=D,y*=D}}e[t]=p,e[t+1]=h,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,n,a,o,c){const f=n[a],p=n[a+1],h=n[a+2],g=n[a+3],y=o[c],m=o[c+1],M=o[c+2],b=o[c+3];return e[t]=f*b+g*y+p*M-h*m,e[t+1]=p*b+g*m+h*y-f*M,e[t+2]=h*b+g*M+f*m-p*y,e[t+3]=g*b-f*y-p*m-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,c=e._order,f=Math.cos,p=Math.sin,h=f(n/2),g=f(a/2),y=f(o/2),m=p(n/2),M=p(a/2),b=p(o/2);switch(c){case"XYZ":this._x=m*g*y+h*M*b,this._y=h*M*y-m*g*b,this._z=h*g*b+m*M*y,this._w=h*g*y-m*M*b;break;case"YXZ":this._x=m*g*y+h*M*b,this._y=h*M*y-m*g*b,this._z=h*g*b-m*M*y,this._w=h*g*y+m*M*b;break;case"ZXY":this._x=m*g*y-h*M*b,this._y=h*M*y+m*g*b,this._z=h*g*b+m*M*y,this._w=h*g*y-m*M*b;break;case"ZYX":this._x=m*g*y-h*M*b,this._y=h*M*y+m*g*b,this._z=h*g*b-m*M*y,this._w=h*g*y+m*M*b;break;case"YZX":this._x=m*g*y+h*M*b,this._y=h*M*y+m*g*b,this._z=h*g*b-m*M*y,this._w=h*g*y-m*M*b;break;case"XZY":this._x=m*g*y-h*M*b,this._y=h*M*y-m*g*b,this._z=h*g*b+m*M*y,this._w=h*g*y+m*M*b;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],c=t[1],f=t[5],p=t[9],h=t[2],g=t[6],y=t[10],m=n+f+y;if(m>0){const M=.5/Math.sqrt(m+1);this._w=.25/M,this._x=(g-p)*M,this._y=(o-h)*M,this._z=(c-a)*M}else if(n>f&&n>y){const M=2*Math.sqrt(1+n-f-y);this._w=(g-p)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(o+h)/M}else if(f>y){const M=2*Math.sqrt(1+f-n-y);this._w=(o-h)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+y-n-f);this._w=(c-a)/M,this._x=(o+h)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,c=e._w,f=t._x,p=t._y,h=t._z,g=t._w;return this._x=n*g+c*f+a*h-o*p,this._y=a*g+c*p+o*f-n*h,this._z=o*g+c*h+n*p-a*f,this._w=c*g-n*f-a*p-o*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,o=e._z,c=e._w,f=this.dot(e);f<0&&(n=-n,a=-a,o=-o,c=-c,f=-f);let p=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);p=Math.sin(p*h)/g,t=Math.sin(t*h)/g,this._x=this._x*p+n*t,this._y=this._y*p+a*t,this._z=this._z*p+o*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+n*t,this._y=this._y*p+a*t,this._z=this._z*p+o*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,c=e.y,f=e.z,p=e.w,h=2*(c*a-f*n),g=2*(f*t-o*a),y=2*(o*n-c*t);return this.x=t+p*h+c*y-f*g,this.y=n+p*g+f*h-o*y,this.z=a+p*y+o*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,c=t.x,f=t.y,p=t.z;return this.x=a*p-o*f,this.y=o*c-n*p,this.z=n*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new K,ic=new mr;class tt{constructor(e,t,n,a,o,c,f,p,h){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,c,f,p,h)}set(e,t,n,a,o,c,f,p,h){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=o,g[5]=p,g[6]=n,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,c=n[0],f=n[3],p=n[6],h=n[1],g=n[4],y=n[7],m=n[2],M=n[5],b=n[8],P=a[0],S=a[3],v=a[6],D=a[1],I=a[4],U=a[7],k=a[2],C=a[5],H=a[8];return o[0]=c*P+f*D+p*k,o[3]=c*S+f*I+p*C,o[6]=c*v+f*U+p*H,o[1]=h*P+g*D+y*k,o[4]=h*S+g*I+y*C,o[7]=h*v+g*U+y*H,o[2]=m*P+M*D+b*k,o[5]=m*S+M*I+b*C,o[8]=m*v+M*U+b*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],c=e[4],f=e[5],p=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-n*o*g+n*f*p+a*o*h-a*c*p}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],c=e[4],f=e[5],p=e[6],h=e[7],g=e[8],y=g*c-f*h,m=f*p-g*o,M=h*o-c*p,b=t*y+n*m+a*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=y*P,e[1]=(a*h-g*n)*P,e[2]=(f*n-a*c)*P,e[3]=m*P,e[4]=(g*t-a*p)*P,e[5]=(a*o-f*t)*P,e[6]=M*P,e[7]=(n*p-h*t)*P,e[8]=(c*t-n*o)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,c,f){const p=Math.cos(o),h=Math.sin(o);return this.set(n*p,n*h,-n*(p*c+h*f)+c+e,-a*h,a*p,-a*(-h*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new tt,rc=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F_(){const r={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===At&&(a.r=ti(a.r),a.g=ti(a.g),a.b=ti(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===At&&(a.r=sr(a.r),a.g=sr(a.g),a.b=sr(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mi?Vs:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[cr]:{primaries:e,whitePoint:n,transfer:Vs,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:At,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),r}const xt=F_();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Wi;class L_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=Gs("canvas")),Wi.width=e.width,Wi.height=e.height;const a=Wi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=ti(o[c]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I_=0;class Qo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?o.push(Ma(a[c].image)):o.push(Ma(a[c]))}else o=Ma(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ma(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?L_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let U_=0;const Ea=new K;class an extends pr{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=Qn,a=Qn,o=nn,c=Ni,f=Cn,p=hn,h=an.DEFAULT_ANISOTROPY,g=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=zr(),this.name="",this.source=new Qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=au;an.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,n=0,a=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const p=e.elements,h=p[0],g=p[4],y=p[8],m=p[1],M=p[5],b=p[9],P=p[2],S=p[6],v=p[10];if(Math.abs(g-m)<.01&&Math.abs(y-P)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+m)<.1&&Math.abs(y+P)<.1&&Math.abs(b+S)<.1&&Math.abs(h+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,U=(M+1)/2,k=(v+1)/2,C=(g+m)/4,H=(y+P)/4,A=(b+S)/4;return I>U&&I>k?I<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(I),a=C/n,o=H/n):U>k?U<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(U),n=C/a,o=A/a):k<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(k),n=H/o,a=A/o),this.set(n,a,o,t),this}let D=Math.sqrt((S-b)*(S-b)+(y-P)*(y-P)+(m-g)*(m-g));return Math.abs(D)<.001&&(D=1),this.x=(S-b)/D,this.y=(y-P)/D,this.z=(m-g)/D,this.w=Math.acos((h+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N_ extends pr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:n.depth},o=new an(a),c=n.count;for(let f=0;f<c;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Qo(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends N_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _u extends an{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O_ extends an{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e,t,n,a,o,c,f,p,h,g,y,m,M,b,P,S){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,c,f,p,h,g,y,m,M,b,P,S)}set(e,t,n,a,o,c,f,p,h,g,y,m,M,b,P,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=a,v[1]=o,v[5]=c,v[9]=f,v[13]=p,v[2]=h,v[6]=g,v[10]=y,v[14]=m,v[3]=M,v[7]=b,v[11]=P,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,a=1/Xi.setFromMatrixColumn(e,0).length(),o=1/Xi.setFromMatrixColumn(e,1).length(),c=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,c=Math.cos(n),f=Math.sin(n),p=Math.cos(a),h=Math.sin(a),g=Math.cos(o),y=Math.sin(o);if(e.order==="XYZ"){const m=c*g,M=c*y,b=f*g,P=f*y;t[0]=p*g,t[4]=-p*y,t[8]=h,t[1]=M+b*h,t[5]=m-P*h,t[9]=-f*p,t[2]=P-m*h,t[6]=b+M*h,t[10]=c*p}else if(e.order==="YXZ"){const m=p*g,M=p*y,b=h*g,P=h*y;t[0]=m+P*f,t[4]=b*f-M,t[8]=c*h,t[1]=c*y,t[5]=c*g,t[9]=-f,t[2]=M*f-b,t[6]=P+m*f,t[10]=c*p}else if(e.order==="ZXY"){const m=p*g,M=p*y,b=h*g,P=h*y;t[0]=m-P*f,t[4]=-c*y,t[8]=b+M*f,t[1]=M+b*f,t[5]=c*g,t[9]=P-m*f,t[2]=-c*h,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const m=c*g,M=c*y,b=f*g,P=f*y;t[0]=p*g,t[4]=b*h-M,t[8]=m*h+P,t[1]=p*y,t[5]=P*h+m,t[9]=M*h-b,t[2]=-h,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const m=c*p,M=c*h,b=f*p,P=f*h;t[0]=p*g,t[4]=P-m*y,t[8]=b*y+M,t[1]=y,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=M*y+b,t[10]=m-P*y}else if(e.order==="XZY"){const m=c*p,M=c*h,b=f*p,P=f*h;t[0]=p*g,t[4]=-y,t[8]=h*g,t[1]=m*y+P,t[5]=c*g,t[9]=M*y-b,t[2]=b*y-M,t[6]=f*g,t[10]=P*y+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B_,e,k_)}lookAt(e,t,n){const a=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ci.crossVectors(n,un),ci.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ci.crossVectors(n,un)),ci.normalize(),fs.crossVectors(un,ci),a[0]=ci.x,a[4]=fs.x,a[8]=un.x,a[1]=ci.y,a[5]=fs.y,a[9]=un.y,a[2]=ci.z,a[6]=fs.z,a[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,c=n[0],f=n[4],p=n[8],h=n[12],g=n[1],y=n[5],m=n[9],M=n[13],b=n[2],P=n[6],S=n[10],v=n[14],D=n[3],I=n[7],U=n[11],k=n[15],C=a[0],H=a[4],A=a[8],F=a[12],O=a[1],z=a[5],j=a[9],Z=a[13],Y=a[2],ie=a[6],te=a[10],ne=a[14],xe=a[3],_e=a[7],Ce=a[11],Ue=a[15];return o[0]=c*C+f*O+p*Y+h*xe,o[4]=c*H+f*z+p*ie+h*_e,o[8]=c*A+f*j+p*te+h*Ce,o[12]=c*F+f*Z+p*ne+h*Ue,o[1]=g*C+y*O+m*Y+M*xe,o[5]=g*H+y*z+m*ie+M*_e,o[9]=g*A+y*j+m*te+M*Ce,o[13]=g*F+y*Z+m*ne+M*Ue,o[2]=b*C+P*O+S*Y+v*xe,o[6]=b*H+P*z+S*ie+v*_e,o[10]=b*A+P*j+S*te+v*Ce,o[14]=b*F+P*Z+S*ne+v*Ue,o[3]=D*C+I*O+U*Y+k*xe,o[7]=D*H+I*z+U*ie+k*_e,o[11]=D*A+I*j+U*te+k*Ce,o[15]=D*F+I*Z+U*ne+k*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],c=e[1],f=e[5],p=e[9],h=e[13],g=e[2],y=e[6],m=e[10],M=e[14],b=e[3],P=e[7],S=e[11],v=e[15],D=p*M-h*m,I=f*M-h*y,U=f*m-p*y,k=c*M-h*g,C=c*m-p*g,H=c*y-f*g;return t*(P*D-S*I+v*U)-n*(b*D-S*k+v*C)+a*(b*I-P*k+v*H)-o*(b*U-P*C+S*H)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],c=e[4],f=e[5],p=e[6],h=e[7],g=e[8],y=e[9],m=e[10],M=e[11],b=e[12],P=e[13],S=e[14],v=e[15],D=t*f-n*c,I=t*p-a*c,U=t*h-o*c,k=n*p-a*f,C=n*h-o*f,H=a*h-o*p,A=g*P-y*b,F=g*S-m*b,O=g*v-M*b,z=y*S-m*P,j=y*v-M*P,Z=m*v-M*S,Y=D*Z-I*j+U*z+k*O-C*F+H*A;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/Y;return e[0]=(f*Z-p*j+h*z)*ie,e[1]=(a*j-n*Z-o*z)*ie,e[2]=(P*H-S*C+v*k)*ie,e[3]=(m*C-y*H-M*k)*ie,e[4]=(p*O-c*Z-h*F)*ie,e[5]=(t*Z-a*O+o*F)*ie,e[6]=(S*U-b*H-v*I)*ie,e[7]=(g*H-m*U+M*I)*ie,e[8]=(c*j-f*O+h*A)*ie,e[9]=(n*O-t*j-o*A)*ie,e[10]=(b*C-P*U+v*D)*ie,e[11]=(y*U-g*C-M*D)*ie,e[12]=(f*F-c*z-p*A)*ie,e[13]=(t*z-n*F+a*A)*ie,e[14]=(P*I-b*k-S*D)*ie,e[15]=(g*k-y*I+m*D)*ie,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,c=e.x,f=e.y,p=e.z,h=o*c,g=o*f;return this.set(h*c+n,h*f-a*p,h*p+a*f,0,h*f+a*p,g*f+n,g*p-a*c,0,h*p-a*f,g*p+a*c,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,c){return this.set(1,n,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,c=t._y,f=t._z,p=t._w,h=o+o,g=c+c,y=f+f,m=o*h,M=o*g,b=o*y,P=c*g,S=c*y,v=f*y,D=p*h,I=p*g,U=p*y,k=n.x,C=n.y,H=n.z;return a[0]=(1-(P+v))*k,a[1]=(M+U)*k,a[2]=(b-I)*k,a[3]=0,a[4]=(M-U)*C,a[5]=(1-(m+v))*C,a[6]=(S+D)*C,a[7]=0,a[8]=(b+I)*H,a[9]=(S-D)*H,a[10]=(1-(m+P))*H,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinant();if(o===0)return n.set(1,1,1),t.identity(),this;let c=Xi.set(a[0],a[1],a[2]).length();const f=Xi.set(a[4],a[5],a[6]).length(),p=Xi.set(a[8],a[9],a[10]).length();o<0&&(c=-c),En.copy(this);const h=1/c,g=1/f,y=1/p;return En.elements[0]*=h,En.elements[1]*=h,En.elements[2]*=h,En.elements[4]*=g,En.elements[5]*=g,En.elements[6]*=g,En.elements[8]*=y,En.elements[9]*=y,En.elements[10]*=y,t.setFromRotationMatrix(En),n.x=c,n.y=f,n.z=p,this}makePerspective(e,t,n,a,o,c,f=zn,p=!1){const h=this.elements,g=2*o/(t-e),y=2*o/(n-a),m=(t+e)/(t-e),M=(n+a)/(n-a);let b,P;if(p)b=o/(c-o),P=c*o/(c-o);else if(f===zn)b=-(c+o)/(c-o),P=-2*c*o/(c-o);else if(f===Or)b=-c/(c-o),P=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=y,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,a,o,c,f=zn,p=!1){const h=this.elements,g=2/(t-e),y=2/(n-a),m=-(t+e)/(t-e),M=-(n+a)/(n-a);let b,P;if(p)b=1/(c-o),P=c/(c-o);else if(f===zn)b=-2/(c-o),P=-(c+o)/(c-o);else if(f===Or)b=-1/(c-o),P=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=y,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new K,En=new Ft,B_=new K(0,0,0),k_=new K(1,1,1),ci=new K,fs=new K,un=new K,ac=new Ft,oc=new mr;class Xn{constructor(e=0,t=0,n=0,a=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],c=a[4],f=a[8],p=a[1],h=a[5],g=a[9],y=a[2],m=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(ht(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-ht(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(m,M),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-g,M),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z_=0;const lc=new K,$i=new mr,jn=new Ft,ds=new K,wr=new K,V_=new K,G_=new mr,cc=new K(1,0,0),uc=new K(0,1,0),fc=new K(0,0,1),dc={type:"added"},H_={type:"removed"},qi={type:"childadded",child:null},Ta={type:"childremoved",child:null};class jt extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new K,t=new Xn,n=new mr,a=new K(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ft},normalMatrix:{value:new tt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(fc,e)}translateOnAxis(e,t){return lc.copy(e).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(wr,ds,this.up):jn.lookAt(ds,wr,this.up),this.quaternion.setFromRotationMatrix(jn),a&&(jn.extractRotation(a.matrixWorld),$i.setFromRotationMatrix(jn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),qi.child=e,this.dispatchEvent(qi),qi.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H_),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,V_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,G_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*a,o[13]+=n-o[1]*t-o[5]*n-o[9]*a,o[14]+=a-o[2]*t-o[6]*n-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const y=p[h];o(e.shapes,y)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(o(e.materials,this.material[p]));a.material=f}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(o(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),h=c(e.textures),g=c(e.images),y=c(e.shapes),m=c(e.skeletons),M=c(e.animations),b=c(e.nodes);f.length>0&&(n.geometries=f),p.length>0&&(n.materials=p),h.length>0&&(n.textures=h),g.length>0&&(n.images=g),y.length>0&&(n.shapes=y),m.length>0&&(n.skeletons=m),M.length>0&&(n.animations=M),b.length>0&&(n.nodes=b)}return n.object=a,n;function c(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}jt.DEFAULT_UP=new K(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hs extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const P of e.hand.values()){const S=t.getJointPose(P,n),v=this._getHandJoint(h,P);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],m=g.position.distanceTo(y.position),M=.02,b=.005;h.inputState.pinching&&m>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},ps={h:0,s:0,l:0};function wa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=xt.workingColorSpace){if(e=D_(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=wa(c,o,e+1/3),this.g=wa(c,o,e),this.b=wa(c,o,e-1/3)}return xt.colorSpaceToWorking(this,a),this}setStyle(e,t=xn){function n(o){o!==void 0&&parseFloat(o)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return xt.workingToColorSpace(tn.copy(this),e),Math.round(ht(tn.r*255,0,255))*65536+Math.round(ht(tn.g*255,0,255))*256+Math.round(ht(tn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(tn.copy(this),t);const n=tn.r,a=tn.g,o=tn.b,c=Math.max(n,a,o),f=Math.min(n,a,o);let p,h;const g=(f+c)/2;if(f===c)p=0,h=0;else{const y=c-f;switch(h=g<=.5?y/(c+f):y/(2-c-f),c){case n:p=(a-o)/y+(a<o?6:0);break;case a:p=(o-n)/y+2;break;case o:p=(n-a)/y+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=xn){xt.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,a=tn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(ps);const n=xa(ui.h,ps.h,t),a=xa(ui.s,ps.s,t),o=xa(ui.l,ps.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new pt;pt.NAMES=vu;class X_ extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Tn=new K,Yn=new K,Aa=new K,Kn=new K,ji=new K,Yi=new K,hc=new K,Ra=new K,Ca=new K,Pa=new K,Da=new Ot,Fa=new Ot,La=new Ot;class Rn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Tn.subVectors(e,t),a.cross(Tn);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Tn.subVectors(a,t),Yn.subVectors(n,t),Aa.subVectors(e,t);const c=Tn.dot(Tn),f=Tn.dot(Yn),p=Tn.dot(Aa),h=Yn.dot(Yn),g=Yn.dot(Aa),y=c*h-f*f;if(y===0)return o.set(0,0,0),null;const m=1/y,M=(h*p-f*g)*m,b=(c*g-f*p)*m;return o.set(1-M-b,b,M)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,a,o,c,f,p){return this.getBarycoord(e,t,n,a,Kn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(o,Kn.x),p.addScaledVector(c,Kn.y),p.addScaledVector(f,Kn.z),p)}static getInterpolatedAttribute(e,t,n,a,o,c){return Da.setScalar(0),Fa.setScalar(0),La.setScalar(0),Da.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,n),La.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Da,o.x),c.addScaledVector(Fa,o.y),c.addScaledVector(La,o.z),c}static isFrontFacing(e,t,n,a){return Tn.subVectors(n,t),Yn.subVectors(e,t),Tn.cross(Yn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let c,f;ji.subVectors(a,n),Yi.subVectors(o,n),Ra.subVectors(e,n);const p=ji.dot(Ra),h=Yi.dot(Ra);if(p<=0&&h<=0)return t.copy(n);Ca.subVectors(e,a);const g=ji.dot(Ca),y=Yi.dot(Ca);if(g>=0&&y<=g)return t.copy(a);const m=p*y-g*h;if(m<=0&&p>=0&&g<=0)return c=p/(p-g),t.copy(n).addScaledVector(ji,c);Pa.subVectors(e,o);const M=ji.dot(Pa),b=Yi.dot(Pa);if(b>=0&&M<=b)return t.copy(o);const P=M*h-p*b;if(P<=0&&h>=0&&b<=0)return f=h/(h-b),t.copy(n).addScaledVector(Yi,f);const S=g*b-M*y;if(S<=0&&y-g>=0&&M-b>=0)return hc.subVectors(o,a),f=(y-g)/(y-g+(M-b)),t.copy(a).addScaledVector(hc,f);const v=1/(S+P+m);return c=P*v,f=m*v,t.copy(n).addScaledVector(ji,c).addScaledVector(Yi,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Vr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=o.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,bn):bn.fromBufferAttribute(o,c),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),_s.subVectors(this.max,Ar),Ki.subVectors(e.a,Ar),Zi.subVectors(e.b,Ar),Ji.subVectors(e.c,Ar),fi.subVectors(Zi,Ki),di.subVectors(Ji,Zi),Ai.subVectors(Ki,Ji);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ai.z,Ai.y,fi.z,0,-fi.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];return!Ia(t,Ki,Zi,Ji,_s)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Ki,Zi,Ji,_s))?!1:(gs.crossVectors(fi,di),t=[gs.x,gs.y,gs.z],Ia(t,Ki,Zi,Ji,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new K,new K,new K,new K,new K,new K,new K,new K],bn=new K,ms=new Vr,Ki=new K,Zi=new K,Ji=new K,fi=new K,di=new K,Ai=new K,Ar=new K,_s=new K,gs=new K,Ri=new K;function Ia(r,e,t,n,a){for(let o=0,c=r.length-3;o<=c;o+=3){Ri.fromArray(r,o);const f=a.x*Math.abs(Ri.x)+a.y*Math.abs(Ri.y)+a.z*Math.abs(Ri.z),p=e.dot(Ri),h=t.dot(Ri),g=n.dot(Ri);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const kt=new K,vs=new ot;let $_=0;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ql,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),a=on(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),a=on(a,this.array),o=on(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class xu extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Su extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const q_=new Vr,Rr=new K,Ua=new K;class js{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):q_.setFromPoints(e).getCenter(n);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);const t=Rr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Rr,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(Ua)),this.expandByPoint(Rr.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let j_=0;const vn=new Ft,Na=new jt,Qi=new K,fn=new Vr,Cr=new Vr,qt=new K;class cn extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A_(e)?Su:xu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new tt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];fn.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const f=t[o];Cr.setFromBufferAttribute(f),this.morphTargetsRelative?(qt.addVectors(fn.min,Cr.min),fn.expandByPoint(qt),qt.addVectors(fn.max,Cr.max),fn.expandByPoint(qt)):(fn.expandByPoint(Cr.min),fn.expandByPoint(Cr.max))}fn.getCenter(n);let a=0;for(let o=0,c=e.count;o<c;o++)qt.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(qt));if(t)for(let o=0,c=t.length;o<c;o++){const f=t[o],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)qt.fromBufferAttribute(f,h),p&&(Qi.fromBufferAttribute(e,h),qt.add(Qi)),a=Math.max(a,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let A=0;A<n.count;A++)f[A]=new K,p[A]=new K;const h=new K,g=new K,y=new K,m=new ot,M=new ot,b=new ot,P=new K,S=new K;function v(A,F,O){h.fromBufferAttribute(n,A),g.fromBufferAttribute(n,F),y.fromBufferAttribute(n,O),m.fromBufferAttribute(o,A),M.fromBufferAttribute(o,F),b.fromBufferAttribute(o,O),g.sub(h),y.sub(h),M.sub(m),b.sub(m);const z=1/(M.x*b.y-b.x*M.y);isFinite(z)&&(P.copy(g).multiplyScalar(b.y).addScaledVector(y,-M.y).multiplyScalar(z),S.copy(y).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(z),f[A].add(P),f[F].add(P),f[O].add(P),p[A].add(S),p[F].add(S),p[O].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,F=D.length;A<F;++A){const O=D[A],z=O.start,j=O.count;for(let Z=z,Y=z+j;Z<Y;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const I=new K,U=new K,k=new K,C=new K;function H(A){k.fromBufferAttribute(a,A),C.copy(k);const F=f[A];I.copy(F),I.sub(k.multiplyScalar(k.dot(F))).normalize(),U.crossVectors(C,F);const z=U.dot(p[A])<0?-1:1;c.setXYZW(A,I.x,I.y,I.z,z)}for(let A=0,F=D.length;A<F;++A){const O=D[A],z=O.start,j=O.count;for(let Z=z,Y=z+j;Z<Y;Z+=3)H(e.getX(Z+0)),H(e.getX(Z+1)),H(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,M=n.count;m<M;m++)n.setXYZ(m,0,0,0);const a=new K,o=new K,c=new K,f=new K,p=new K,h=new K,g=new K,y=new K;if(e)for(let m=0,M=e.count;m<M;m+=3){const b=e.getX(m+0),P=e.getX(m+1),S=e.getX(m+2);a.fromBufferAttribute(t,b),o.fromBufferAttribute(t,P),c.fromBufferAttribute(t,S),g.subVectors(c,o),y.subVectors(a,o),g.cross(y),f.fromBufferAttribute(n,b),p.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),f.add(g),p.add(g),h.add(g),n.setXYZ(b,f.x,f.y,f.z),n.setXYZ(P,p.x,p.y,p.z),n.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,M=t.count;m<M;m+=3)a.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,o),y.subVectors(a,o),g.cross(y),n.setXYZ(m+0,g.x,g.y,g.z),n.setXYZ(m+1,g.x,g.y,g.z),n.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(f,p){const h=f.array,g=f.itemSize,y=f.normalized,m=new h.constructor(p.length*g);let M=0,b=0;for(let P=0,S=p.length;P<S;P++){f.isInterleavedBufferAttribute?M=p[P]*f.data.stride+f.offset:M=p[P]*g;for(let v=0;v<g;v++)m[b++]=h[M++]}return new Hn(m,g,y)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,a=this.attributes;for(const f in a){const p=a[f],h=e(p,n);t.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const p=[],h=o[f];for(let g=0,y=h.length;g<y;g++){const m=h[g],M=e(m,n);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const h=n[p];e.data.attributes[p]=h.toJSON(e.data)}const a={};let o=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let y=0,m=h.length;y<m;y++){const M=h[y];g.push(M.toJSON(e.data))}g.length>0&&(a[p]=g,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const h in a){const g=a[h];this.setAttribute(h,g.clone(t))}const o=e.morphAttributes;for(const h in o){const g=[],y=o[h];for(let m=0,M=y.length;m<M;m++)g.push(y[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const y=c[h];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Y_=0;class _r extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=rr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Za,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const c=[];for(const f in o){const p=o[f];delete p.metadata,c.push(p)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Jn=new K,Oa=new K,xs=new K,hi=new K,Ba=new K,Ss=new K,ka=new K;class yu{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Oa.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Oa);const o=e.distanceTo(t)*.5,c=-this.direction.dot(xs),f=hi.dot(this.direction),p=-hi.dot(xs),h=hi.lengthSq(),g=Math.abs(1-c*c);let y,m,M,b;if(g>0)if(y=c*p-f,m=c*f-p,b=o*g,y>=0)if(m>=-b)if(m<=b){const P=1/g;y*=P,m*=P,M=y*(y+c*m+2*f)+m*(c*y+m+2*p)+h}else m=o,y=Math.max(0,-(c*m+f)),M=-y*y+m*(m+2*p)+h;else m=-o,y=Math.max(0,-(c*m+f)),M=-y*y+m*(m+2*p)+h;else m<=-b?(y=Math.max(0,-(-c*o+f)),m=y>0?-o:Math.min(Math.max(-o,-p),o),M=-y*y+m*(m+2*p)+h):m<=b?(y=0,m=Math.min(Math.max(-o,-p),o),M=m*(m+2*p)+h):(y=Math.max(0,-(c*o+f)),m=y>0?o:Math.min(Math.max(-o,-p),o),M=-y*y+m*(m+2*p)+h);else m=c>0?-o:o,y=Math.max(0,-(c*m+f)),M=-y*y+m*(m+2*p)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Oa).addScaledVector(xs,m),M}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),a=Jn.dot(Jn)-n*n,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),f=n-c,p=n+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,c,f,p;const h=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,a=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,a=(e.min.x-m.x)*h),g>=0?(o=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(o=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),n>c||o>a||((o>n||isNaN(n))&&(n=o),(c<a||isNaN(a))&&(a=c),y>=0?(f=(e.min.z-m.z)*y,p=(e.max.z-m.z)*y):(f=(e.max.z-m.z)*y,p=(e.min.z-m.z)*y),n>p||f>a)||((f>n||n!==n)&&(n=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,a,o){Ba.subVectors(t,e),Ss.subVectors(n,e),ka.crossVectors(Ba,Ss);let c=this.direction.dot(ka),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;hi.subVectors(this.origin,e);const p=f*this.direction.dot(Ss.crossVectors(hi,Ss));if(p<0)return null;const h=f*this.direction.dot(Ba.cross(hi));if(h<0||p+h>c)return null;const g=-f*hi.dot(ka);return g<0?null:this.at(g/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class el extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pc=new Ft,Ci=new yu,ys=new js,mc=new K,Ms=new K,Es=new K,Ts=new K,za=new K,bs=new K,_c=new K,ws=new K;class pn extends jt{constructor(e=new cn,t=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(o&&f){bs.set(0,0,0);for(let p=0,h=o.length;p<h;p++){const g=f[p],y=o[p];g!==0&&(za.fromBufferAttribute(y,e),c?bs.addScaledVector(za,g):bs.addScaledVector(za.sub(t),g))}t.add(bs)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(o),Ci.copy(e.ray).recast(e.near),!(ys.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ys,mc)===null||Ci.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(pc.copy(o).invert(),Ci.copy(e.ray).applyMatrix4(pc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let a;const o=this.geometry,c=this.material,f=o.index,p=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,y=o.attributes.normal,m=o.groups,M=o.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,P=m.length;b<P;b++){const S=m[b],v=c[S.materialIndex],D=Math.max(S.start,M.start),I=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let U=D,k=I;U<k;U+=3){const C=f.getX(U),H=f.getX(U+1),A=f.getX(U+2);a=As(this,v,e,n,h,g,y,C,H,A),a&&(a.faceIndex=Math.floor(U/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const b=Math.max(0,M.start),P=Math.min(f.count,M.start+M.count);for(let S=b,v=P;S<v;S+=3){const D=f.getX(S),I=f.getX(S+1),U=f.getX(S+2);a=As(this,c,e,n,h,g,y,D,I,U),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,P=m.length;b<P;b++){const S=m[b],v=c[S.materialIndex],D=Math.max(S.start,M.start),I=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let U=D,k=I;U<k;U+=3){const C=U,H=U+1,A=U+2;a=As(this,v,e,n,h,g,y,C,H,A),a&&(a.faceIndex=Math.floor(U/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const b=Math.max(0,M.start),P=Math.min(p.count,M.start+M.count);for(let S=b,v=P;S<v;S+=3){const D=S,I=S+1,U=S+2;a=As(this,c,e,n,h,g,y,D,I,U),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function K_(r,e,t,n,a,o,c,f){let p;if(e.side===ln?p=n.intersectTriangle(c,o,a,!0,f):p=n.intersectTriangle(a,o,c,e.side===vi,f),p===null)return null;ws.copy(f),ws.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(ws);return h<t.near||h>t.far?null:{distance:h,point:ws.clone(),object:r}}function As(r,e,t,n,a,o,c,f,p,h){r.getVertexPosition(f,Ms),r.getVertexPosition(p,Es),r.getVertexPosition(h,Ts);const g=K_(r,e,t,n,Ms,Es,Ts,_c);if(g){const y=new K;Rn.getBarycoord(_c,Ms,Es,Ts,y),a&&(g.uv=Rn.getInterpolatedAttribute(a,f,p,h,y,new ot)),o&&(g.uv1=Rn.getInterpolatedAttribute(o,f,p,h,y,new ot)),c&&(g.normal=Rn.getInterpolatedAttribute(c,f,p,h,y,new K),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:p,c:h,normal:new K,materialIndex:0};Rn.getNormal(Ms,Es,Ts,m.normal),g.face=m,g.barycoord=y}return g}class Z_ extends an{constructor(e=null,t=1,n=1,a,o,c,f,p,h=Kt,g=Kt,y,m){super(null,c,f,p,h,g,a,o,y,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Va=new K,J_=new K,Q_=new tt;class Li{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Va.subVectors(n,t).cross(J_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Va),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Q_.getNormalMatrix(e),a=this.coplanarPoint(Va).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new js,eg=new ot(.5,.5),Rs=new K;class tl{constructor(e=new Li,t=new Li,n=new Li,a=new Li,o=new Li,c=new Li){this.planes=[e,t,n,a,o,c]}set(e,t,n,a,o,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(n),f[3].copy(a),f[4].copy(o),f[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const a=this.planes,o=e.elements,c=o[0],f=o[1],p=o[2],h=o[3],g=o[4],y=o[5],m=o[6],M=o[7],b=o[8],P=o[9],S=o[10],v=o[11],D=o[12],I=o[13],U=o[14],k=o[15];if(a[0].setComponents(h-c,M-g,v-b,k-D).normalize(),a[1].setComponents(h+c,M+g,v+b,k+D).normalize(),a[2].setComponents(h+f,M+y,v+P,k+I).normalize(),a[3].setComponents(h-f,M-y,v-P,k-I).normalize(),n)a[4].setComponents(p,m,S,U).normalize(),a[5].setComponents(h-p,M-m,v-S,k-U).normalize();else if(a[4].setComponents(h-p,M-m,v-S,k-U).normalize(),t===zn)a[5].setComponents(h+p,M+m,v+S,k+U).normalize();else if(t===Or)a[5].setComponents(p,m,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=eg.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Rs.x=a.normal.x>0?e.max.x:e.min.x,Rs.y=a.normal.y>0?e.max.y:e.min.y,Rs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mu extends _r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ws=new K,Xs=new K,gc=new Ft,Pr=new yu,Cs=new js,Ga=new K,vc=new K;class tg extends jt{constructor(e=new cn,t=new Mu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)Ws.fromBufferAttribute(t,a-1),Xs.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Ws.distanceTo(Xs);e.setAttribute("lineDistance",new Zt(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(a),Cs.radius+=o,e.ray.intersectsSphere(Cs)===!1)return;gc.copy(a).invert(),Pr.copy(e.ray).applyMatrix4(gc);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const M=Math.max(0,c.start),b=Math.min(g.count,c.start+c.count);for(let P=M,S=b-1;P<S;P+=h){const v=g.getX(P),D=g.getX(P+1),I=Ps(this,e,Pr,p,v,D,P);I&&t.push(I)}if(this.isLineLoop){const P=g.getX(b-1),S=g.getX(M),v=Ps(this,e,Pr,p,P,S,b-1);v&&t.push(v)}}else{const M=Math.max(0,c.start),b=Math.min(m.count,c.start+c.count);for(let P=M,S=b-1;P<S;P+=h){const v=Ps(this,e,Pr,p,P,P+1,P);v&&t.push(v)}if(this.isLineLoop){const P=Ps(this,e,Pr,p,b-1,M,b-1);P&&t.push(P)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function Ps(r,e,t,n,a,o,c){const f=r.geometry.attributes.position;if(Ws.fromBufferAttribute(f,a),Xs.fromBufferAttribute(f,o),t.distanceSqToSegment(Ws,Xs,Ga,vc)>n)return;Ga.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Ga);if(!(h<e.near||h>e.far))return{distance:h,point:vc.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}class Eu extends an{constructor(e=[],t=ki,n,a,o,c,f,p,h,g){super(e,t,n,a,o,c,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Br extends an{constructor(e,t,n=Wn,a,o,c,f=Kt,p=Kt,h,g=ri,y=1){if(g!==ri&&g!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:y};super(m,a,o,c,f,p,g,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ng extends Br{constructor(e,t=Wn,n=ki,a,o,c=Kt,f=Kt,p,h=ri){const g={width:e,height:e,depth:1},y=[g,g,g,g,g,g];super(e,e,t,n,a,o,c,f,p,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tu extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gr extends cn{constructor(e=1,t=1,n=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:c};const f=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const p=[],h=[],g=[],y=[];let m=0,M=0;b("z","y","x",-1,-1,n,t,e,c,o,0),b("z","y","x",1,-1,n,t,-e,c,o,1),b("x","z","y",1,1,e,n,t,a,c,2),b("x","z","y",1,-1,e,n,-t,a,c,3),b("x","y","z",1,-1,e,t,n,a,o,4),b("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(p),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(g,3)),this.setAttribute("uv",new Zt(y,2));function b(P,S,v,D,I,U,k,C,H,A,F){const O=U/H,z=k/A,j=U/2,Z=k/2,Y=C/2,ie=H+1,te=A+1;let ne=0,xe=0;const _e=new K;for(let Ce=0;Ce<te;Ce++){const Ue=Ce*z-Z;for(let Pe=0;Pe<ie;Pe++){const je=Pe*O-j;_e[P]=je*D,_e[S]=Ue*I,_e[v]=Y,h.push(_e.x,_e.y,_e.z),_e[P]=0,_e[S]=0,_e[v]=C>0?1:-1,g.push(_e.x,_e.y,_e.z),y.push(Pe/H),y.push(1-Ce/A),ne+=1}}for(let Ce=0;Ce<A;Ce++)for(let Ue=0;Ue<H;Ue++){const Pe=m+Ue+ie*Ce,je=m+Ue+ie*(Ce+1),Ze=m+(Ue+1)+ie*(Ce+1),st=m+(Ue+1)+ie*Ce;p.push(Pe,je,st),p.push(je,Ze,st),xe+=6}f.addGroup(M,xe,F),M+=xe,m+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class nl extends cn{constructor(e=1,t=1,n=1,a=32,o=1,c=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:p};const h=this;a=Math.floor(a),o=Math.floor(o);const g=[],y=[],m=[],M=[];let b=0;const P=[],S=n/2;let v=0;D(),c===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(g),this.setAttribute("position",new Zt(y,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(M,2));function D(){const U=new K,k=new K;let C=0;const H=(t-e)/n;for(let A=0;A<=o;A++){const F=[],O=A/o,z=O*(t-e)+e;for(let j=0;j<=a;j++){const Z=j/a,Y=Z*p+f,ie=Math.sin(Y),te=Math.cos(Y);k.x=z*ie,k.y=-O*n+S,k.z=z*te,y.push(k.x,k.y,k.z),U.set(ie,H,te).normalize(),m.push(U.x,U.y,U.z),M.push(Z,1-O),F.push(b++)}P.push(F)}for(let A=0;A<a;A++)for(let F=0;F<o;F++){const O=P[F][A],z=P[F+1][A],j=P[F+1][A+1],Z=P[F][A+1];(e>0||F!==0)&&(g.push(O,z,Z),C+=3),(t>0||F!==o-1)&&(g.push(z,j,Z),C+=3)}h.addGroup(v,C,0),v+=C}function I(U){const k=b,C=new ot,H=new K;let A=0;const F=U===!0?e:t,O=U===!0?1:-1;for(let j=1;j<=a;j++)y.push(0,S*O,0),m.push(0,O,0),M.push(.5,.5),b++;const z=b;for(let j=0;j<=a;j++){const Y=j/a*p+f,ie=Math.cos(Y),te=Math.sin(Y);H.x=F*te,H.y=S*O,H.z=F*ie,y.push(H.x,H.y,H.z),m.push(0,O,0),C.x=ie*.5+.5,C.y=te*.5*O+.5,M.push(C.x,C.y),b++}for(let j=0;j<a;j++){const Z=k+j,Y=z+j;U===!0?g.push(Y,Y+1,Z):g.push(Y+1,Y,Z),A+=3}h.addGroup(v,A,U===!0?1:2),v+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vr extends cn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,c=t/2,f=Math.floor(n),p=Math.floor(a),h=f+1,g=p+1,y=e/f,m=t/p,M=[],b=[],P=[],S=[];for(let v=0;v<g;v++){const D=v*m-c;for(let I=0;I<h;I++){const U=I*y-o;b.push(U,-D,0),P.push(0,0,1),S.push(I/f),S.push(1-v/p)}}for(let v=0;v<p;v++)for(let D=0;D<f;D++){const I=D+h*v,U=D+h*(v+1),k=D+1+h*(v+1),C=D+1+h*v;M.push(I,U,C),M.push(U,k,C)}this.setIndex(M),this.setAttribute("position",new Zt(b,3)),this.setAttribute("normal",new Zt(P,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class il extends cn{constructor(e=1,t=32,n=16,a=0,o=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:o,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const p=Math.min(c+f,Math.PI);let h=0;const g=[],y=new K,m=new K,M=[],b=[],P=[],S=[];for(let v=0;v<=n;v++){const D=[],I=v/n;let U=0;v===0&&c===0?U=.5/t:v===n&&p===Math.PI&&(U=-.5/t);for(let k=0;k<=t;k++){const C=k/t;y.x=-e*Math.cos(a+C*o)*Math.sin(c+I*f),y.y=e*Math.cos(c+I*f),y.z=e*Math.sin(a+C*o)*Math.sin(c+I*f),b.push(y.x,y.y,y.z),m.copy(y).normalize(),P.push(m.x,m.y,m.z),S.push(C+U,1-I),D.push(h++)}g.push(D)}for(let v=0;v<n;v++)for(let D=0;D<t;D++){const I=g[v][D+1],U=g[v][D],k=g[v+1][D],C=g[v+1][D+1];(v!==0||c>0)&&M.push(I,U,C),(v!==n-1||p<Math.PI)&&M.push(U,k,C)}this.setIndex(M),this.setAttribute("position",new Zt(b,3)),this.setAttribute("normal",new Zt(P,3)),this.setAttribute("uv",new Zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ur(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const a=r[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function sn(r){const e={};for(let t=0;t<r.length;t++){const n=ur(r[t]);for(const a in n)e[a]=n[a]}return e}function ig(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function bu(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const rg={clone:ur,merge:sn};var sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class og extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rl extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pu,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lg extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cg extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wu extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ug extends wu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ha=new Ft,xc=new K,Sc=new K;class fg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Or||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ds=new K,Fs=new mr,Nn=new K;class Au extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ds,Fs,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Fs,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ds,Fs,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Fs,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new K,yc=new ot,Mc=new ot;class Sn extends Au{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,yc,Mc),t.subVectors(Mc,yc)}setViewOffset(e,t,n,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/p,t-=c.offsetY*n/h,a*=c.width/p,n*=c.height/h}const f=this.filmOffset;f!==0&&(o+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class sl extends Au{constructor(e=-1,t=1,n=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,c=n+e,f=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(o,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dg extends fg{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends wu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new dg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const er=-90,tr=1;class pg extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Sn(er,tr,e,t);a.layers=this.layers,this.add(a);const o=new Sn(er,tr,e,t);o.layers=this.layers,this.add(o);const c=new Sn(er,tr,e,t);c.layers=this.layers,this.add(c);const f=new Sn(er,tr,e,t);f.layers=this.layers,this.add(f);const p=new Sn(er,tr,e,t);p.layers=this.layers,this.add(p);const h=new Sn(er,tr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,c,f,p]=t;for(const h of t)this.remove(h);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,f,p,h,g]=this.children,y=e.getRenderTarget(),m=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(n,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(y,m,M),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class mg extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ec=new ot;class _g{constructor(e=new ot(1/0,1/0),t=new ot(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ec.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ec).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Tc(r,e,t,n){const a=gg(n);switch(t){case fu:return r*e;case hu:return r*e/a.components*a.byteLength;case jo:return r*e/a.components*a.byteLength;case lr:return r*e*2/a.components*a.byteLength;case Yo:return r*e*2/a.components*a.byteLength;case du:return r*e*3/a.components*a.byteLength;case Cn:return r*e*4/a.components*a.byteLength;case Ko:return r*e*4/a.components*a.byteLength;case Ns:case Os:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bs:case ks:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lo:case uo:return Math.max(r,16)*Math.max(e,8)/4;case oo:case co:return Math.max(r,8)*Math.max(e,8)/2;case fo:case ho:case mo:case _o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case po:case go:case vo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case To:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ao:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Co:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Po:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Do:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Lo:case Io:case Uo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case No:case Oo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bo:case ko:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gg(r){switch(r){case hn:case ou:return{byteLength:1,components:1};case Ur:case lu:case ii:return{byteLength:2,components:1};case $o:case qo:return{byteLength:2,components:4};case Wn:case Xo:case kn:return{byteLength:4,components:1};case cu:case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);function Ru(){let r=null,e=!1,t=null,n=null;function a(o,c){t(o,c),n=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function vg(r){const e=new WeakMap;function t(f,p){const h=f.array,g=f.usage,y=h.byteLength,m=r.createBuffer();r.bindBuffer(p,m),r.bufferData(p,h,g),f.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:y}}function n(f,p,h){const g=p.array,y=p.updateRanges;if(r.bindBuffer(h,f),y.length===0)r.bufferSubData(h,0,g);else{y.sort((M,b)=>M.start-b.start);let m=0;for(let M=1;M<y.length;M++){const b=y[m],P=y[M];P.start<=b.start+b.count+1?b.count=Math.max(b.count,P.start+P.count-b.start):(++m,y[m]=P)}y.length=m+1;for(let M=0,b=y.length;M<b;M++){const P=y[M];r.bufferSubData(h,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(r.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,f,p),h.version=f.version}}return{get:a,remove:o,update:c}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
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
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
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
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fg=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Gg=`#define PI 3.141592653589793
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
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,av=`#ifdef USE_GRADIENTMAP
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
}`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
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
#endif`,fv=`#ifdef USE_ENVMAP
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
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_v=`PhysicalMaterial material;
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
#endif`,gv=`uniform sampler2D dfgLUT;
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
}`,vv=`
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rv=`#if defined( USE_POINTS_UV )
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
#endif`,Cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
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
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
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
#endif`,Gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i0=`float getShadowMask() {
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
}`,r0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x0=`uniform sampler2D t2D;
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
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
}`,b0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,A0=`#define DISTANCE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,I0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,V0=`#define PHONG
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
}`,G0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,W0=`#define TOON
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
}`,X0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,q0=`uniform vec3 diffuse;
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
}`,j0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,K0=`uniform float rotation;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:xg,alphahash_pars_fragment:Sg,alphamap_fragment:yg,alphamap_pars_fragment:Mg,alphatest_fragment:Eg,alphatest_pars_fragment:Tg,aomap_fragment:bg,aomap_pars_fragment:wg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Dg,iridescence_fragment:Fg,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:kg,color_pars_vertex:zg,color_vertex:Vg,common:Gg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:$g,emissivemap_fragment:qg,emissivemap_pars_fragment:jg,colorspace_fragment:Yg,colorspace_pars_fragment:Kg,envmap_fragment:Zg,envmap_common_pars_fragment:Jg,envmap_pars_fragment:Qg,envmap_pars_vertex:ev,envmap_physical_pars_fragment:fv,envmap_vertex:tv,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:rv,fog_pars_fragment:sv,gradientmap_pars_fragment:av,lightmap_pars_fragment:ov,lights_lambert_fragment:lv,lights_lambert_pars_fragment:cv,lights_pars_begin:uv,lights_toon_fragment:dv,lights_toon_pars_fragment:hv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:_v,lights_physical_pars_fragment:gv,lights_fragment_begin:vv,lights_fragment_maps:xv,lights_fragment_end:Sv,logdepthbuf_fragment:yv,logdepthbuf_pars_fragment:Mv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:Tv,map_fragment:bv,map_pars_fragment:wv,map_particle_fragment:Av,map_particle_pars_fragment:Rv,metalnessmap_fragment:Cv,metalnessmap_pars_fragment:Pv,morphinstance_vertex:Dv,morphcolor_vertex:Fv,morphnormal_vertex:Lv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Uv,normal_fragment_begin:Nv,normal_fragment_maps:Ov,normal_pars_fragment:Bv,normal_pars_vertex:kv,normal_vertex:zv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Gv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Wv,iridescence_pars_fragment:Xv,opaque_fragment:$v,packing:qv,premultiplied_alpha_fragment:jv,project_vertex:Yv,dithering_fragment:Kv,dithering_pars_fragment:Zv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:e0,shadowmap_pars_vertex:t0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:r0,skinning_pars_vertex:s0,skinning_vertex:a0,skinnormal_vertex:o0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:u0,tonemapping_pars_fragment:f0,transmission_fragment:d0,transmission_pars_fragment:h0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:_0,worldpos_vertex:g0,background_vert:v0,background_frag:x0,backgroundCube_vert:S0,backgroundCube_frag:y0,cube_vert:M0,cube_frag:E0,depth_vert:T0,depth_frag:b0,distance_vert:w0,distance_frag:A0,equirect_vert:R0,equirect_frag:C0,linedashed_vert:P0,linedashed_frag:D0,meshbasic_vert:F0,meshbasic_frag:L0,meshlambert_vert:I0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:O0,meshnormal_vert:B0,meshnormal_frag:k0,meshphong_vert:z0,meshphong_frag:V0,meshphysical_vert:G0,meshphysical_frag:H0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:$0,points_frag:q0,shadow_vert:j0,shadow_frag:Y0,sprite_vert:K0,sprite_frag:Z0},Ae={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Bn={basic:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new pt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:sn([Ae.points,Ae.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:sn([Ae.common,Ae.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:sn([Ae.sprite,Ae.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:sn([Ae.lights,Ae.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Bn.physical={uniforms:sn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ls={r:0,b:0,g:0},Di=new Xn,J0=new Ft;function Q0(r,e,t,n,a,o){const c=new pt(0);let f=a===!0?0:1,p,h,g=null,y=0,m=null;function M(D){let I=D.isScene===!0?D.background:null;if(I&&I.isTexture){const U=D.backgroundBlurriness>0;I=e.get(I,U)}return I}function b(D){let I=!1;const U=M(D);U===null?S(c,f):U&&U.isColor&&(S(U,1),I=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(r.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function P(D,I){const U=M(I);U&&(U.isCubeTexture||U.mapping===qs)?(h===void 0&&(h=new pn(new gr(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ur(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,C,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Di.copy(I.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Di)),h.material.toneMapped=xt.getTransfer(U.colorSpace)!==At,(g!==U||y!==U.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,g=U,y=U.version,m=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new pn(new vr(2,2),new $n({name:"BackgroundMaterial",uniforms:ur(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=xt.getTransfer(U.colorSpace)!==At,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||y!==U.version||m!==r.toneMapping)&&(p.material.needsUpdate=!0,g=U,y=U.version,m=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function S(D,I){D.getRGB(Ls,bu(r)),t.buffers.color.setClear(Ls.r,Ls.g,Ls.b,I,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,I=1){c.set(D),f=I,S(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,S(c,f)},render:b,addToRenderList:P,dispose:v}}function ex(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},a=m(null);let o=a,c=!1;function f(z,j,Z,Y,ie){let te=!1;const ne=y(z,Y,Z,j);o!==ne&&(o=ne,h(o.object)),te=M(z,Y,Z,ie),te&&b(z,Y,Z,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,U(z,j,Z,Y),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return r.createVertexArray()}function h(z){return r.bindVertexArray(z)}function g(z){return r.deleteVertexArray(z)}function y(z,j,Z,Y){const ie=Y.wireframe===!0;let te=n[j.id];te===void 0&&(te={},n[j.id]=te);const ne=z.isInstancedMesh===!0?z.id:0;let xe=te[ne];xe===void 0&&(xe={},te[ne]=xe);let _e=xe[Z.id];_e===void 0&&(_e={},xe[Z.id]=_e);let Ce=_e[ie];return Ce===void 0&&(Ce=m(p()),_e[ie]=Ce),Ce}function m(z){const j=[],Z=[],Y=[];for(let ie=0;ie<t;ie++)j[ie]=0,Z[ie]=0,Y[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Z,attributeDivisors:Y,object:z,attributes:{},index:null}}function M(z,j,Z,Y){const ie=o.attributes,te=j.attributes;let ne=0;const xe=Z.getAttributes();for(const _e in xe)if(xe[_e].location>=0){const Ue=ie[_e];let Pe=te[_e];if(Pe===void 0&&(_e==="instanceMatrix"&&z.instanceMatrix&&(Pe=z.instanceMatrix),_e==="instanceColor"&&z.instanceColor&&(Pe=z.instanceColor)),Ue===void 0||Ue.attribute!==Pe||Pe&&Ue.data!==Pe.data)return!0;ne++}return o.attributesNum!==ne||o.index!==Y}function b(z,j,Z,Y){const ie={},te=j.attributes;let ne=0;const xe=Z.getAttributes();for(const _e in xe)if(xe[_e].location>=0){let Ue=te[_e];Ue===void 0&&(_e==="instanceMatrix"&&z.instanceMatrix&&(Ue=z.instanceMatrix),_e==="instanceColor"&&z.instanceColor&&(Ue=z.instanceColor));const Pe={};Pe.attribute=Ue,Ue&&Ue.data&&(Pe.data=Ue.data),ie[_e]=Pe,ne++}o.attributes=ie,o.attributesNum=ne,o.index=Y}function P(){const z=o.newAttributes;for(let j=0,Z=z.length;j<Z;j++)z[j]=0}function S(z){v(z,0)}function v(z,j){const Z=o.newAttributes,Y=o.enabledAttributes,ie=o.attributeDivisors;Z[z]=1,Y[z]===0&&(r.enableVertexAttribArray(z),Y[z]=1),ie[z]!==j&&(r.vertexAttribDivisor(z,j),ie[z]=j)}function D(){const z=o.newAttributes,j=o.enabledAttributes;for(let Z=0,Y=j.length;Z<Y;Z++)j[Z]!==z[Z]&&(r.disableVertexAttribArray(Z),j[Z]=0)}function I(z,j,Z,Y,ie,te,ne){ne===!0?r.vertexAttribIPointer(z,j,Z,ie,te):r.vertexAttribPointer(z,j,Z,Y,ie,te)}function U(z,j,Z,Y){P();const ie=Y.attributes,te=Z.getAttributes(),ne=j.defaultAttributeValues;for(const xe in te){const _e=te[xe];if(_e.location>=0){let Ce=ie[xe];if(Ce===void 0&&(xe==="instanceMatrix"&&z.instanceMatrix&&(Ce=z.instanceMatrix),xe==="instanceColor"&&z.instanceColor&&(Ce=z.instanceColor)),Ce!==void 0){const Ue=Ce.normalized,Pe=Ce.itemSize,je=e.get(Ce);if(je===void 0)continue;const Ze=je.buffer,st=je.type,le=je.bytesPerElement,Se=st===r.INT||st===r.UNSIGNED_INT||Ce.gpuType===Xo;if(Ce.isInterleavedBufferAttribute){const se=Ce.data,Ee=se.stride,He=Ce.offset;if(se.isInstancedInterleavedBuffer){for(let $e=0;$e<_e.locationSize;$e++)v(_e.location+$e,se.meshPerAttribute);z.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let $e=0;$e<_e.locationSize;$e++)S(_e.location+$e);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let $e=0;$e<_e.locationSize;$e++)I(_e.location+$e,Pe/_e.locationSize,st,Ue,Ee*le,(He+Pe/_e.locationSize*$e)*le,Se)}else{if(Ce.isInstancedBufferAttribute){for(let se=0;se<_e.locationSize;se++)v(_e.location+se,Ce.meshPerAttribute);z.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let se=0;se<_e.locationSize;se++)S(_e.location+se);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let se=0;se<_e.locationSize;se++)I(_e.location+se,Pe/_e.locationSize,st,Ue,Pe*le,Pe/_e.locationSize*se*le,Se)}}else if(ne!==void 0){const Ue=ne[xe];if(Ue!==void 0)switch(Ue.length){case 2:r.vertexAttrib2fv(_e.location,Ue);break;case 3:r.vertexAttrib3fv(_e.location,Ue);break;case 4:r.vertexAttrib4fv(_e.location,Ue);break;default:r.vertexAttrib1fv(_e.location,Ue)}}}}D()}function k(){F();for(const z in n){const j=n[z];for(const Z in j){const Y=j[Z];for(const ie in Y){const te=Y[ie];for(const ne in te)g(te[ne].object),delete te[ne];delete Y[ie]}}delete n[z]}}function C(z){if(n[z.id]===void 0)return;const j=n[z.id];for(const Z in j){const Y=j[Z];for(const ie in Y){const te=Y[ie];for(const ne in te)g(te[ne].object),delete te[ne];delete Y[ie]}}delete n[z.id]}function H(z){for(const j in n){const Z=n[j];for(const Y in Z){const ie=Z[Y];if(ie[z.id]===void 0)continue;const te=ie[z.id];for(const ne in te)g(te[ne].object),delete te[ne];delete ie[z.id]}}}function A(z){for(const j in n){const Z=n[j],Y=z.isInstancedMesh===!0?z.id:0,ie=Z[Y];if(ie!==void 0){for(const te in ie){const ne=ie[te];for(const xe in ne)g(ne[xe].object),delete ne[xe];delete ie[te]}delete Z[Y],Object.keys(Z).length===0&&delete n[j]}}}function F(){O(),c=!0,o!==a&&(o=a,h(o.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:F,resetDefaultState:O,dispose:k,releaseStatesOfGeometry:C,releaseStatesOfObject:A,releaseStatesOfProgram:H,initAttributes:P,enableAttribute:S,disableUnusedAttributes:D}}function tx(r,e,t){let n;function a(h){n=h}function o(h,g){r.drawArrays(n,h,g),t.update(g,n,1)}function c(h,g,y){y!==0&&(r.drawArraysInstanced(n,h,g,y),t.update(g,n,y))}function f(h,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,g,0,y);let M=0;for(let b=0;b<y;b++)M+=g[b];t.update(M,n,1)}function p(h,g,y,m){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)c(h[b],g[b],m[b]);else{M.multiDrawArraysInstancedWEBGL(n,h,0,g,0,m,0,y);let b=0;for(let P=0;P<y;P++)b+=g[P]*m[P];t.update(b,n,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function nx(r,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(H){return!(H!==Cn&&n.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(H){const A=H===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==hn&&n.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==kn&&!A)}function p(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=p(h);g!==h&&(Ye("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const y=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),C=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:m,maxTextures:M,maxVertexTextures:b,maxTextureSize:P,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:U,maxSamples:k,samples:C}}function ix(r){const e=this;let t=null,n=0,a=!1,o=!1;const c=new Li,f=new tt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,m){const M=y.length!==0||m||n!==0||a;return a=m,n=y.length,M},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,m){t=g(y,m,0)},this.setState=function(y,m,M){const b=y.clippingPlanes,P=y.clipIntersection,S=y.clipShadows,v=r.get(y);if(!a||b===null||b.length===0||o&&!S)o?g(null):h();else{const D=o?0:n,I=D*4;let U=v.clippingState||null;p.value=U,U=g(b,m,I,M);for(let k=0;k!==I;++k)U[k]=t[k];v.clippingState=U,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=D}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(y,m,M,b){const P=y!==null?y.length:0;let S=null;if(P!==0){if(S=p.value,b!==!0||S===null){const v=M+P*4,D=m.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<v)&&(S=new Float32Array(v));for(let I=0,U=M;I!==P;++I,U+=4)c.copy(y[I]).applyMatrix4(D,f),c.normal.toArray(S,U),S[U+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,S}}const _i=4,bc=[.125,.215,.35,.446,.526,.582],Ui=20,rx=256,Dr=new sl,wc=new pt;let Wa=null,Xa=0,$a=0,qa=!1;const sx=new K;class Ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,o={}){const{size:c=256,position:f=sx}=o;Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,a,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,$a),this._renderer.xr.enabled=qa,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ii,format:Cn,colorSpace:cr,depthBuffer:!1},a=Rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ax(o)),this._blurMaterial=lx(o,e,t),this._ggxMaterial=ox(o,e,t)}return a}_compileMaterial(e){const t=new pn(new cn,e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,a,o){const p=new Sn(90,1,t,n),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,m=y.autoClear,M=y.toneMapping;y.getClearColor(wc),y.toneMapping=Vn,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(a),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new gr,new el({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,S=P.material;let v=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,v=!0):(S.color.copy(wc),v=!0);for(let I=0;I<6;I++){const U=I%3;U===0?(p.up.set(0,h[I],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x+g[I],o.y,o.z)):U===1?(p.up.set(0,0,h[I]),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y+g[I],o.z)):(p.up.set(0,h[I],0),p.position.set(o.x,o.y,o.z),p.lookAt(o.x,o.y,o.z+g[I]));const k=this._cubeSize;nr(a,U*k,I>2?k:0,k,k),y.setRenderTarget(a),v&&y.render(P,p),y.render(e,p)}y.toneMapping=M,y.autoClear=m,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===ki||e.mapping===or;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const f=o.uniforms;f.envMap.value=e;const p=this._cubeSize;nr(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(c,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[n];f.material=c;const p=c.uniforms,h=n/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),y=Math.sqrt(h*h-g*g),m=0+h*1.25,M=y*m,{_lodMax:b}=this,P=this._sizeLods[n],S=3*P*(n>b-_i?n-b+_i:0),v=4*(this._cubeSize-P);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=b-t,nr(o,S,v,3*P,2*P),a.setRenderTarget(o),a.render(f,Dr),p.envMap.value=o.texture,p.roughness.value=0,p.mipInt.value=b-n,nr(e,S,v,3*P,2*P),a.setRenderTarget(e),a.render(f,Dr)}_blur(e,t,n,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,a,"latitudinal",o),this._halfBlur(c,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&St("blur direction must be either latitudinal or longitudinal!");const g=3,y=this._lodMeshes[a];y.material=h;const m=h.uniforms,M=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Ui-1),P=o/b,S=isFinite(o)?1+Math.floor(g*P):Ui;S>Ui&&Ye(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ui}`);const v=[];let D=0;for(let H=0;H<Ui;++H){const A=H/P,F=Math.exp(-A*A/2);v.push(F),H===0?D+=F:H<S&&(D+=2*F)}for(let H=0;H<v.length;H++)v[H]=v[H]/D;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=v,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:I}=this;m.dTheta.value=b,m.mipInt.value=I-n;const U=this._sizeLods[a],k=3*U*(a>I-_i?a-I+_i:0),C=4*(this._cubeSize-U);nr(t,k,C,3*U,2*U),p.setRenderTarget(t),p.render(y,Dr)}}function ax(r){const e=[],t=[],n=[];let a=r;const o=r-_i+1+bc.length;for(let c=0;c<o;c++){const f=Math.pow(2,a);e.push(f);let p=1/f;c>r-_i?p=bc[c-r+_i-1]:c===0&&(p=0),t.push(p);const h=1/(f-2),g=-h,y=1+h,m=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,b=6,P=3,S=2,v=1,D=new Float32Array(P*b*M),I=new Float32Array(S*b*M),U=new Float32Array(v*b*M);for(let C=0;C<M;C++){const H=C%3*2/3-1,A=C>2?0:-1,F=[H,A,0,H+2/3,A,0,H+2/3,A+1,0,H,A,0,H+2/3,A+1,0,H,A+1,0];D.set(F,P*b*C),I.set(m,S*b*C);const O=[C,C,C,C,C,C];U.set(O,v*b*C)}const k=new cn;k.setAttribute("position",new Hn(D,P)),k.setAttribute("uv",new Hn(I,S)),k.setAttribute("faceIndex",new Hn(U,v)),n.push(new pn(k,null)),a>_i&&a--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Rc(r,e,t){const n=new Gn(r,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(r,e,t,n,a){r.viewport.set(e,t,n,a),r.scissor.set(e,t,n,a)}function ox(r,e,t){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function lx(r,e,t){const n=new Float32Array(Ui),a=new K(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Cc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Pc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ys(){return`

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
	`}class Cu extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Eu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new gr(5,5,5),o=new $n({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:ei});o.uniforms.tEquirect.value=t;const c=new pn(a,o),f=t.minFilter;return t.minFilter===Ni&&(t.minFilter=nn),new pg(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,a);e.setRenderTarget(o)}}function cx(r){let e=new WeakMap,t=new WeakMap,n=null;function a(m,M=!1){return m==null?null:M?c(m):o(m)}function o(m){if(m&&m.isTexture){const M=m.mapping;if(M===ma||M===_a)if(e.has(m)){const b=e.get(m).texture;return f(b,m.mapping)}else{const b=m.image;if(b&&b.height>0){const P=new Cu(b.height);return P.fromEquirectangularTexture(r,m),e.set(m,P),m.addEventListener("dispose",h),f(P.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const M=m.mapping,b=M===ma||M===_a,P=M===ki||M===or;if(b||P){let S=t.get(m);const v=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==v)return n===null&&(n=new Ac(r)),S=b?n.fromEquirectangular(m,S):n.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const D=m.image;return b&&D&&D.height>0||P&&D&&p(D)?(n===null&&(n=new Ac(r)),S=b?n.fromEquirectangular(m):n.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",g),S.texture):null}}}return m}function f(m,M){return M===ma?m.mapping=ki:M===_a&&(m.mapping=or),m}function p(m){let M=0;const b=6;for(let P=0;P<b;P++)m[P]!==void 0&&M++;return M===b}function h(m){const M=m.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function g(m){const M=m.target;M.removeEventListener("dispose",g);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function y(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:y}}function ux(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const a=r.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Hs("WebGLRenderer: "+n+" extension not supported."),a}}}function fx(r,e,t,n){const a={},o=new WeakMap;function c(y){const m=y.target;m.index!==null&&e.remove(m.index);for(const b in m.attributes)e.remove(m.attributes[b]);m.removeEventListener("dispose",c),delete a[m.id];const M=o.get(m);M&&(e.remove(M),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(y,m){return a[m.id]===!0||(m.addEventListener("dispose",c),a[m.id]=!0,t.memory.geometries++),m}function p(y){const m=y.attributes;for(const M in m)e.update(m[M],r.ARRAY_BUFFER)}function h(y){const m=[],M=y.index,b=y.attributes.position;let P=0;if(b===void 0)return;if(M!==null){const D=M.array;P=M.version;for(let I=0,U=D.length;I<U;I+=3){const k=D[I+0],C=D[I+1],H=D[I+2];m.push(k,C,C,H,H,k)}}else{const D=b.array;P=b.version;for(let I=0,U=D.length/3-1;I<U;I+=3){const k=I+0,C=I+1,H=I+2;m.push(k,C,C,H,H,k)}}const S=new(b.count>=65535?Su:xu)(m,1);S.version=P;const v=o.get(y);v&&e.remove(v),o.set(y,S)}function g(y){const m=o.get(y);if(m){const M=y.index;M!==null&&m.version<M.version&&h(y)}else h(y);return o.get(y)}return{get:f,update:p,getWireframeAttribute:g}}function dx(r,e,t){let n;function a(m){n=m}let o,c;function f(m){o=m.type,c=m.bytesPerElement}function p(m,M){r.drawElements(n,M,o,m*c),t.update(M,n,1)}function h(m,M,b){b!==0&&(r.drawElementsInstanced(n,M,o,m*c,b),t.update(M,n,b))}function g(m,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,M,0,o,m,0,b);let S=0;for(let v=0;v<b;v++)S+=M[v];t.update(S,n,1)}function y(m,M,b,P){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<m.length;v++)h(m[v]/c,M[v],P[v]);else{S.multiDrawElementsInstancedWEBGL(n,M,0,o,m,0,P,0,b);let v=0;for(let D=0;D<b;D++)v+=M[D]*P[D];t.update(v,n,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function hx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(o/3);break;case r.LINES:t.lines+=f*(o/2);break;case r.LINE_STRIP:t.lines+=f*(o-1);break;case r.LINE_LOOP:t.lines+=f*o;break;case r.POINTS:t.points+=f*o;break;default:St("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function px(r,e,t){const n=new WeakMap,a=new Ot;function o(c,f,p){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=g!==void 0?g.length:0;let m=n.get(f);if(m===void 0||m.count!==y){let F=function(){H.dispose(),n.delete(f),f.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],v=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let I=0;M===!0&&(I=1),b===!0&&(I=2),P===!0&&(I=3);let U=f.attributes.position.count*I,k=1;U>e.maxTextureSize&&(k=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*k*4*y),H=new _u(C,U,k,y);H.type=kn,H.needsUpdate=!0;const A=I*4;for(let O=0;O<y;O++){const z=S[O],j=v[O],Z=D[O],Y=U*k*4*O;for(let ie=0;ie<z.count;ie++){const te=ie*A;M===!0&&(a.fromBufferAttribute(z,ie),C[Y+te+0]=a.x,C[Y+te+1]=a.y,C[Y+te+2]=a.z,C[Y+te+3]=0),b===!0&&(a.fromBufferAttribute(j,ie),C[Y+te+4]=a.x,C[Y+te+5]=a.y,C[Y+te+6]=a.z,C[Y+te+7]=0),P===!0&&(a.fromBufferAttribute(Z,ie),C[Y+te+8]=a.x,C[Y+te+9]=a.y,C[Y+te+10]=a.z,C[Y+te+11]=Z.itemSize===4?a.w:1)}}m={count:y,texture:H,size:new ot(U,k)},n.set(f,m),f.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let M=0;for(let P=0;P<h.length;P++)M+=h[P];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(r,"morphTargetBaseInfluence",b),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:o}}function mx(r,e,t,n,a){let o=new WeakMap;function c(h){const g=a.render.frame,y=h.geometry,m=e.get(h,y);if(o.get(m)!==g&&(e.update(m),o.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),o.get(h)!==g&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const M=h.skeleton;o.get(M)!==g&&(M.update(),o.set(M,g))}return m}function f(){o=new WeakMap}function p(h){const g=h.target;g.removeEventListener("dispose",p),n.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const _x={[Qc]:"LINEAR_TONE_MAPPING",[eu]:"REINHARD_TONE_MAPPING",[tu]:"CINEON_TONE_MAPPING",[nu]:"ACES_FILMIC_TONE_MAPPING",[ru]:"AGX_TONE_MAPPING",[su]:"NEUTRAL_TONE_MAPPING",[iu]:"CUSTOM_TONE_MAPPING"};function gx(r,e,t,n,a){const o=new Gn(e,t,{type:r,depthBuffer:n,stencilBuffer:a}),c=new Gn(e,t,{type:ii,depthBuffer:!1,stencilBuffer:!1}),f=new cn;f.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const p=new og({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new pn(f,p),g=new sl(-1,1,1,-1,0,1);let y=null,m=null,M=!1,b,P=null,S=[],v=!1;this.setSize=function(D,I){o.setSize(D,I),c.setSize(D,I);for(let U=0;U<S.length;U++){const k=S[U];k.setSize&&k.setSize(D,I)}},this.setEffects=function(D){S=D,v=S.length>0&&S[0].isRenderPass===!0;const I=o.width,U=o.height;for(let k=0;k<S.length;k++){const C=S[k];C.setSize&&C.setSize(I,U)}},this.begin=function(D,I){if(M||D.toneMapping===Vn&&S.length===0)return!1;if(P=I,I!==null){const U=I.width,k=I.height;(o.width!==U||o.height!==k)&&this.setSize(U,k)}return v===!1&&D.setRenderTarget(o),b=D.toneMapping,D.toneMapping=Vn,!0},this.hasRenderPass=function(){return v},this.end=function(D,I){D.toneMapping=b,M=!0;let U=o,k=c;for(let C=0;C<S.length;C++){const H=S[C];if(H.enabled!==!1&&(H.render(D,k,U,I),H.needsSwap!==!1)){const A=U;U=k,k=A}}if(y!==D.outputColorSpace||m!==D.toneMapping){y=D.outputColorSpace,m=D.toneMapping,p.defines={},xt.getTransfer(y)===At&&(p.defines.SRGB_TRANSFER="");const C=_x[m];C&&(p.defines[C]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(P),D.render(h,g),P=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),c.dispose(),f.dispose(),p.dispose()}}const Pu=new an,Vo=new Br(1,1),Du=new _u,Fu=new O_,Lu=new Eu,Dc=[],Fc=[],Lc=new Float32Array(16),Ic=new Float32Array(9),Uc=new Float32Array(4);function xr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const a=e*t;let o=Dc[a];if(o===void 0&&(o=new Float32Array(a),Dc[a]=o),e!==0){n.toArray(o,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(o,f)}return o}function Xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function $t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ks(r,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2fv(this.addr,e),$t(t,e)}}function Sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;r.uniform3fv(this.addr,e),$t(t,e)}}function yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4fv(this.addr,e),$t(t,e)}}function Mx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Uc.set(n),r.uniformMatrix2fv(this.addr,!1,Uc),$t(t,n)}}function Ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Ic.set(n),r.uniformMatrix3fv(this.addr,!1,Ic),$t(t,n)}}function Tx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Lc.set(n),r.uniformMatrix4fv(this.addr,!1,Lc),$t(t,n)}}function bx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2iv(this.addr,e),$t(t,e)}}function Ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3iv(this.addr,e),$t(t,e)}}function Rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4iv(this.addr,e),$t(t,e)}}function Cx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Px(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;r.uniform2uiv(this.addr,e),$t(t,e)}}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;r.uniform3uiv(this.addr,e),$t(t,e)}}function Fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;r.uniform4uiv(this.addr,e),$t(t,e)}}function Lx(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(Vo.compareFunction=t.isReversedDepthBuffer()?Jo:Zo,o=Vo):o=Pu,t.setTexture2D(e||o,a)}function Ix(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Fu,a)}function Ux(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Lu,a)}function Nx(r,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(r.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Du,a)}function Ox(r){switch(r){case 5126:return vx;case 35664:return xx;case 35665:return Sx;case 35666:return yx;case 35674:return Mx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Dx;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Lx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Nx}}function Bx(r,e){r.uniform1fv(this.addr,e)}function kx(r,e){const t=xr(e,this.size,2);r.uniform2fv(this.addr,t)}function zx(r,e){const t=xr(e,this.size,3);r.uniform3fv(this.addr,t)}function Vx(r,e){const t=xr(e,this.size,4);r.uniform4fv(this.addr,t)}function Gx(r,e){const t=xr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Hx(r,e){const t=xr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Wx(r,e){const t=xr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xx(r,e){r.uniform1iv(this.addr,e)}function $x(r,e){r.uniform2iv(this.addr,e)}function qx(r,e){r.uniform3iv(this.addr,e)}function jx(r,e){r.uniform4iv(this.addr,e)}function Yx(r,e){r.uniform1uiv(this.addr,e)}function Kx(r,e){r.uniform2uiv(this.addr,e)}function Zx(r,e){r.uniform3uiv(this.addr,e)}function Jx(r,e){r.uniform4uiv(this.addr,e)}function Qx(r,e,t){const n=this.cache,a=e.length,o=Ks(t,a);Xt(n,o)||(r.uniform1iv(this.addr,o),$t(n,o));let c;this.type===r.SAMPLER_2D_SHADOW?c=Vo:c=Pu;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||c,o[f])}function eS(r,e,t){const n=this.cache,a=e.length,o=Ks(t,a);Xt(n,o)||(r.uniform1iv(this.addr,o),$t(n,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Fu,o[c])}function tS(r,e,t){const n=this.cache,a=e.length,o=Ks(t,a);Xt(n,o)||(r.uniform1iv(this.addr,o),$t(n,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Lu,o[c])}function nS(r,e,t){const n=this.cache,a=e.length,o=Ks(t,a);Xt(n,o)||(r.uniform1iv(this.addr,o),$t(n,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Du,o[c])}function iS(r){switch(r){case 5126:return Bx;case 35664:return kx;case 35665:return zx;case 35666:return Vx;case 35674:return Gx;case 35675:return Hx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return $x;case 35668:case 35672:return qx;case 35669:case 35673:return jx;case 5125:return Yx;case 36294:return Kx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}class rS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ox(t.type)}}class sS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iS(t.type)}}class aS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const f=a[o];f.setValue(e,t[f.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Nc(r,e){r.seq.push(e),r.map[e.id]=e}function oS(r,e,t){const n=r.name,a=n.length;for(ja.lastIndex=0;;){const o=ja.exec(n),c=ja.lastIndex;let f=o[1];const p=o[2]==="]",h=o[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===a){Nc(t,h===void 0?new rS(f,r,e):new sS(f,r,e));break}else{let y=t.map[f];y===void 0&&(y=new aS(f),Nc(t,y)),t=y}}}class zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<n;++c){const f=e.getActiveUniform(t,c),p=e.getUniformLocation(t,f.name);oS(f,p,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,c=t.length;o!==c;++o){const f=t[o],p=n[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&n.push(c)}return n}}function Oc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const lS=37297;let cS=0;function uS(r,e){const t=r.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const f=c+1;n.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return n.join(`
`)}const Bc=new tt;function fS(r){xt._getMatrix(Bc,xt.workingColorSpace,r);const e=`mat3( ${Bc.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(r)){case Vs:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+uS(r.getShaderSource(e),f)}else return o}function dS(r,e){const t=fS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hS={[Qc]:"Linear",[eu]:"Reinhard",[tu]:"Cineon",[nu]:"ACESFilmic",[ru]:"AgX",[su]:"Neutral",[iu]:"Custom"};function pS(r,e){const t=hS[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Is=new K;function mS(){xt.getLuminanceCoefficients(Is);const r=Is.x.toFixed(4),e=Is.y.toFixed(4),t=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _S(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function gS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=r.getActiveAttrib(e,a),c=o.name;let f=1;o.type===r.FLOAT_MAT2&&(f=2),o.type===r.FLOAT_MAT3&&(f=3),o.type===r.FLOAT_MAT4&&(f=4),t[c]={type:o.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function Ir(r){return r!==""}function zc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(r){return r.replace(xS,yS)}const SS=new Map;function yS(r,e){let t=it[e];if(t===void 0){const n=SS.get(e);if(n!==void 0)t=it[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Go(t)}const MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(r){return r.replace(MS,ES)}function ES(r,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Hc(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const TS={[Us]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function bS(r){return TS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wS={[ki]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE_UV"};function AS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const RS={[or]:"ENVMAP_MODE_REFRACTION"};function CS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":RS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PS={[Jc]:"ENVMAP_BLENDING_MULTIPLY",[__]:"ENVMAP_BLENDING_MIX",[g_]:"ENVMAP_BLENDING_ADD"};function DS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":PS[r.combine]||"ENVMAP_BLENDING_NONE"}function FS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function LS(r,e,t,n){const a=r.getContext(),o=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=bS(t),h=AS(t),g=CS(t),y=DS(t),m=FS(t),M=_S(t),b=gS(o),P=a.createProgram();let S,v,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ir).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ir).join(`
`),v.length>0&&(v+=`
`)):(S=[Hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),v=[Hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?it.tonemapping_pars_fragment:"",t.toneMapping!==Vn?pS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,dS("linearToOutputTexel",t.outputColorSpace),mS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),c=Go(c),c=zc(c,t),c=Vc(c,t),f=Go(f),f=zc(f,t),f=Vc(f,t),c=Gc(c),f=Gc(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=D+S+c,U=D+v+f,k=Oc(a,a.VERTEX_SHADER,I),C=Oc(a,a.FRAGMENT_SHADER,U);a.attachShader(P,k),a.attachShader(P,C),t.index0AttributeName!==void 0?a.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(P,0,"position"),a.linkProgram(P);function H(z){if(r.debug.checkShaderErrors){const j=a.getProgramInfoLog(P)||"",Z=a.getShaderInfoLog(k)||"",Y=a.getShaderInfoLog(C)||"",ie=j.trim(),te=Z.trim(),ne=Y.trim();let xe=!0,_e=!0;if(a.getProgramParameter(P,a.LINK_STATUS)===!1)if(xe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,P,k,C);else{const Ce=kc(a,k,"vertex"),Ue=kc(a,C,"fragment");St("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(P,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ie+`
`+Ce+`
`+Ue)}else ie!==""?Ye("WebGLProgram: Program Info Log:",ie):(te===""||ne==="")&&(_e=!1);_e&&(z.diagnostics={runnable:xe,programLog:ie,vertexShader:{log:te,prefix:S},fragmentShader:{log:ne,prefix:v}})}a.deleteShader(k),a.deleteShader(C),A=new zs(a,P),F=vS(a,P)}let A;this.getUniforms=function(){return A===void 0&&H(this),A};let F;this.getAttributes=function(){return F===void 0&&H(this),F};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(P,lS)),O},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cS++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=k,this.fragmentShader=C,this}let IS=0;class US{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NS(e),t.set(e,n)),n}}class NS{constructor(e){this.id=IS++,this.code=e,this.usedTimes=0}}function OS(r,e,t,n,a,o){const c=new gu,f=new US,p=new Set,h=[],g=new Map,y=n.logarithmicDepthBuffer;let m=n.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return p.add(A),A===0?"uv":`uv${A}`}function P(A,F,O,z,j){const Z=z.fog,Y=j.geometry,ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ne=e.get(A.envMap||ie,te),xe=ne&&ne.mapping===qs?ne.image.height:null,_e=M[A.type];A.precision!==null&&(m=n.getMaxPrecision(A.precision),m!==A.precision&&Ye("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const Ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ue=Ce!==void 0?Ce.length:0;let Pe=0;Y.morphAttributes.position!==void 0&&(Pe=1),Y.morphAttributes.normal!==void 0&&(Pe=2),Y.morphAttributes.color!==void 0&&(Pe=3);let je,Ze,st,le;if(_e){const rt=Bn[_e];je=rt.vertexShader,Ze=rt.fragmentShader}else je=A.vertexShader,Ze=A.fragmentShader,f.update(A),st=f.getVertexShaderID(A),le=f.getFragmentShaderID(A);const Se=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),Ee=j.isInstancedMesh===!0,He=j.isBatchedMesh===!0,$e=!!A.map,bt=!!A.matcap,lt=!!ne,ft=!!A.aoMap,Mt=!!A.lightMap,Qe=!!A.bumpMap,Lt=!!A.normalMap,V=!!A.displacementMap,Rt=!!A.emissiveMap,ct=!!A.metalnessMap,_t=!!A.roughnessMap,Ie=A.anisotropy>0,L=A.clearcoat>0,E=A.dispersion>0,G=A.iridescence>0,ae=A.sheen>0,he=A.transmission>0,oe=Ie&&!!A.anisotropyMap,Ne=L&&!!A.clearcoatMap,Te=L&&!!A.clearcoatNormalMap,Ge=L&&!!A.clearcoatRoughnessMap,Xe=G&&!!A.iridescenceMap,ve=G&&!!A.iridescenceThicknessMap,Me=ae&&!!A.sheenColorMap,Oe=ae&&!!A.sheenRoughnessMap,Be=!!A.specularMap,De=!!A.specularColorMap,et=!!A.specularIntensityMap,W=he&&!!A.transmissionMap,be=he&&!!A.thicknessMap,ye=!!A.gradientMap,Re=!!A.alphaMap,X=A.alphaTest>0,B=!!A.alphaHash,Fe=!!A.extensions;let qe=Vn;A.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(qe=r.toneMapping);const gt={shaderID:_e,shaderType:A.type,shaderName:A.name,vertexShader:je,fragmentShader:Ze,defines:A.defines,customVertexShaderID:st,customFragmentShaderID:le,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:He,batchingColor:He&&j._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&j.instanceColor!==null,instancingMorph:Ee&&j.morphTexture!==null,outputColorSpace:Se===null?r.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:cr,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:bt,envMap:lt,envMapMode:lt&&ne.mapping,envMapCubeUVHeight:xe,aoMap:ft,lightMap:Mt,bumpMap:Qe,normalMap:Lt,displacementMap:V,emissiveMap:Rt,normalMapObjectSpace:Lt&&A.normalMapType===S_,normalMapTangentSpace:Lt&&A.normalMapType===pu,metalnessMap:ct,roughnessMap:_t,anisotropy:Ie,anisotropyMap:oe,clearcoat:L,clearcoatMap:Ne,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ge,dispersion:E,iridescence:G,iridescenceMap:Xe,iridescenceThicknessMap:ve,sheen:ae,sheenColorMap:Me,sheenRoughnessMap:Oe,specularMap:Be,specularColorMap:De,specularIntensityMap:et,transmission:he,transmissionMap:W,thicknessMap:be,gradientMap:ye,opaque:A.transparent===!1&&A.blending===rr&&A.alphaToCoverage===!1,alphaMap:Re,alphaTest:X,alphaHash:B,combine:A.combine,mapUv:$e&&b(A.map.channel),aoMapUv:ft&&b(A.aoMap.channel),lightMapUv:Mt&&b(A.lightMap.channel),bumpMapUv:Qe&&b(A.bumpMap.channel),normalMapUv:Lt&&b(A.normalMap.channel),displacementMapUv:V&&b(A.displacementMap.channel),emissiveMapUv:Rt&&b(A.emissiveMap.channel),metalnessMapUv:ct&&b(A.metalnessMap.channel),roughnessMapUv:_t&&b(A.roughnessMap.channel),anisotropyMapUv:oe&&b(A.anisotropyMap.channel),clearcoatMapUv:Ne&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&b(A.sheenRoughnessMap.channel),specularMapUv:Be&&b(A.specularMap.channel),specularColorMapUv:De&&b(A.specularColorMap.channel),specularIntensityMapUv:et&&b(A.specularIntensityMap.channel),transmissionMapUv:W&&b(A.transmissionMap.channel),thicknessMapUv:be&&b(A.thicknessMap.channel),alphaMapUv:Re&&b(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Lt||Ie),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Y.attributes.uv&&($e||Re),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Y.attributes.normal===void 0&&Lt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:se,skinning:j.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Pe,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&xt.getTransfer(A.map.colorSpace)===At,decodeVideoTextureEmissive:Rt&&A.emissiveMap.isVideoTexture===!0&&xt.getTransfer(A.emissiveMap.colorSpace)===At,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===An,flipSided:A.side===ln,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Fe&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&A.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return gt.vertexUv1s=p.has(1),gt.vertexUv2s=p.has(2),gt.vertexUv3s=p.has(3),p.clear(),gt}function S(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)F.push(O),F.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(v(F,A),D(F,A),F.push(r.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function v(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function D(A,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),A.push(c.mask)}function I(A){const F=M[A.type];let O;if(F){const z=Bn[F];O=rg.clone(z.uniforms)}else O=A.uniforms;return O}function U(A,F){let O=g.get(F);return O!==void 0?++O.usedTimes:(O=new LS(r,F,A,a),h.push(O),g.set(F,O)),O}function k(A){if(--A.usedTimes===0){const F=h.indexOf(A);h[F]=h[h.length-1],h.pop(),g.delete(A.cacheKey),A.destroy()}}function C(A){f.remove(A)}function H(){f.dispose()}return{getParameters:P,getProgramCacheKey:S,getUniforms:I,acquireProgram:U,releaseProgram:k,releaseShaderCache:C,programs:h,dispose:H}}function BS(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function n(c){r.delete(c)}function a(c,f,p){r.get(c)[f]=p}function o(){r=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function kS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Wc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xc(){const r=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function c(m){let M=0;return m.isInstancedMesh&&(M+=2),m.isSkinnedMesh&&(M+=1),M}function f(m,M,b,P,S,v){let D=r[e];return D===void 0?(D={id:m.id,object:m,geometry:M,material:b,materialVariant:c(m),groupOrder:P,renderOrder:m.renderOrder,z:S,group:v},r[e]=D):(D.id=m.id,D.object=m,D.geometry=M,D.material=b,D.materialVariant=c(m),D.groupOrder=P,D.renderOrder=m.renderOrder,D.z=S,D.group=v),e++,D}function p(m,M,b,P,S,v){const D=f(m,M,b,P,S,v);b.transmission>0?n.push(D):b.transparent===!0?a.push(D):t.push(D)}function h(m,M,b,P,S,v){const D=f(m,M,b,P,S,v);b.transmission>0?n.unshift(D):b.transparent===!0?a.unshift(D):t.unshift(D)}function g(m,M){t.length>1&&t.sort(m||kS),n.length>1&&n.sort(M||Wc),a.length>1&&a.sort(M||Wc)}function y(){for(let m=e,M=r.length;m<M;m++){const b=r[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:p,unshift:h,finish:y,sort:g}}function zS(){let r=new WeakMap;function e(n,a){const o=r.get(n);let c;return o===void 0?(c=new Xc,r.set(n,[c])):a>=o.length?(c=new Xc,o.push(c)):c=o[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function VS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new pt};break;case"SpotLight":t={position:new K,direction:new K,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function GS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let HS=0;function WS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function XS(r){const e=new VS,t=GS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new K);const a=new K,o=new Ft,c=new Ft;function f(h){let g=0,y=0,m=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let M=0,b=0,P=0,S=0,v=0,D=0,I=0,U=0,k=0,C=0,H=0;h.sort(WS);for(let F=0,O=h.length;F<O;F++){const z=h[F],j=z.color,Z=z.intensity,Y=z.distance;let ie=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===lr?ie=z.shadow.map.texture:ie=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=j.r*Z,y+=j.g*Z,m+=j.b*Z;else if(z.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(z.sh.coefficients[te],Z);H++}else if(z.isDirectionalLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ne=z.shadow,xe=t.get(z);xe.shadowIntensity=ne.intensity,xe.shadowBias=ne.bias,xe.shadowNormalBias=ne.normalBias,xe.shadowRadius=ne.radius,xe.shadowMapSize=ne.mapSize,n.directionalShadow[M]=xe,n.directionalShadowMap[M]=ie,n.directionalShadowMatrix[M]=z.shadow.matrix,D++}n.directional[M]=te,M++}else if(z.isSpotLight){const te=e.get(z);te.position.setFromMatrixPosition(z.matrixWorld),te.color.copy(j).multiplyScalar(Z),te.distance=Y,te.coneCos=Math.cos(z.angle),te.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),te.decay=z.decay,n.spot[P]=te;const ne=z.shadow;if(z.map&&(n.spotLightMap[k]=z.map,k++,ne.updateMatrices(z),z.castShadow&&C++),n.spotLightMatrix[P]=ne.matrix,z.castShadow){const xe=t.get(z);xe.shadowIntensity=ne.intensity,xe.shadowBias=ne.bias,xe.shadowNormalBias=ne.normalBias,xe.shadowRadius=ne.radius,xe.shadowMapSize=ne.mapSize,n.spotShadow[P]=xe,n.spotShadowMap[P]=ie,U++}P++}else if(z.isRectAreaLight){const te=e.get(z);te.color.copy(j).multiplyScalar(Z),te.halfWidth.set(z.width*.5,0,0),te.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=te,S++}else if(z.isPointLight){const te=e.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity),te.distance=z.distance,te.decay=z.decay,z.castShadow){const ne=z.shadow,xe=t.get(z);xe.shadowIntensity=ne.intensity,xe.shadowBias=ne.bias,xe.shadowNormalBias=ne.normalBias,xe.shadowRadius=ne.radius,xe.shadowMapSize=ne.mapSize,xe.shadowCameraNear=ne.camera.near,xe.shadowCameraFar=ne.camera.far,n.pointShadow[b]=xe,n.pointShadowMap[b]=ie,n.pointShadowMatrix[b]=z.shadow.matrix,I++}n.point[b]=te,b++}else if(z.isHemisphereLight){const te=e.get(z);te.skyColor.copy(z.color).multiplyScalar(Z),te.groundColor.copy(z.groundColor).multiplyScalar(Z),n.hemi[v]=te,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=y,n.ambient[2]=m;const A=n.hash;(A.directionalLength!==M||A.pointLength!==b||A.spotLength!==P||A.rectAreaLength!==S||A.hemiLength!==v||A.numDirectionalShadows!==D||A.numPointShadows!==I||A.numSpotShadows!==U||A.numSpotMaps!==k||A.numLightProbes!==H)&&(n.directional.length=M,n.spot.length=P,n.rectArea.length=S,n.point.length=b,n.hemi.length=v,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=U+k-C,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=H,A.directionalLength=M,A.pointLength=b,A.spotLength=P,A.rectAreaLength=S,A.hemiLength=v,A.numDirectionalShadows=D,A.numPointShadows=I,A.numSpotShadows=U,A.numSpotMaps=k,A.numLightProbes=H,n.version=HS++)}function p(h,g){let y=0,m=0,M=0,b=0,P=0;const S=g.matrixWorldInverse;for(let v=0,D=h.length;v<D;v++){const I=h[v];if(I.isDirectionalLight){const U=n.directional[y];U.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(S),y++}else if(I.isSpotLight){const U=n.spot[M];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const U=n.rectArea[b];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(S),c.identity(),o.copy(I.matrixWorld),o.premultiply(S),c.extractRotation(o),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),b++}else if(I.isPointLight){const U=n.point[m];U.position.setFromMatrixPosition(I.matrixWorld),U.position.applyMatrix4(S),m++}else if(I.isHemisphereLight){const U=n.hemi[P];U.direction.setFromMatrixPosition(I.matrixWorld),U.direction.transformDirection(S),P++}}}return{setup:f,setupView:p,state:n}}function $c(r){const e=new XS(r),t=[],n=[];function a(g){h.camera=g,t.length=0,n.length=0}function o(g){t.push(g)}function c(g){n.push(g)}function f(){e.setup(t)}function p(g){e.setupView(t,g)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:p,pushLight:o,pushShadow:c}}function $S(r){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let f;return c===void 0?(f=new $c(r),e.set(a,[f])):o>=c.length?(f=new $c(r),c.push(f)):f=c[o],f}function n(){e=new WeakMap}return{get:t,dispose:n}}const qS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jS=`uniform sampler2D shadow_pass;
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
}`,YS=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],KS=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],qc=new Ft,Fr=new K,Ya=new K;function ZS(r,e,t){let n=new tl;const a=new ot,o=new ot,c=new Ot,f=new lg,p=new cg,h={},g=t.maxTextureSize,y={[vi]:ln,[ln]:vi,[An]:An},m=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:qS,fragmentShader:jS}),M=m.clone();M.defines.HORIZONTAL_PASS=1;const b=new cn;b.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new pn(b,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let v=this.type;this.render=function(C,H,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;this.type===Zm&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Us);const F=r.getRenderTarget(),O=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),j=r.state;j.setBlending(ei),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Z=v!==this.type;Z&&H.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(ie=>ie.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,ie=C.length;Y<ie;Y++){const te=C[Y],ne=te.shadow;if(ne===void 0){Ye("WebGLShadowMap:",te,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;a.copy(ne.mapSize);const xe=ne.getFrameExtents();a.multiply(xe),o.copy(ne.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(o.x=Math.floor(g/xe.x),a.x=o.x*xe.x,ne.mapSize.x=o.x),a.y>g&&(o.y=Math.floor(g/xe.y),a.y=o.y*xe.y,ne.mapSize.y=o.y));const _e=r.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=_e,ne.map===null||Z===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===Lr){if(te.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new Gn(a.x,a.y,{format:lr,type:ii,minFilter:nn,magFilter:nn,generateMipmaps:!1}),ne.map.texture.name=te.name+".shadowMap",ne.map.depthTexture=new Br(a.x,a.y,kn),ne.map.depthTexture.name=te.name+".shadowMapDepth",ne.map.depthTexture.format=ri,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Kt,ne.map.depthTexture.magFilter=Kt}else te.isPointLight?(ne.map=new Cu(a.x),ne.map.depthTexture=new ng(a.x,Wn)):(ne.map=new Gn(a.x,a.y),ne.map.depthTexture=new Br(a.x,a.y,Wn)),ne.map.depthTexture.name=te.name+".shadowMap",ne.map.depthTexture.format=ri,this.type===Us?(ne.map.depthTexture.compareFunction=_e?Jo:Zo,ne.map.depthTexture.minFilter=nn,ne.map.depthTexture.magFilter=nn):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=Kt,ne.map.depthTexture.magFilter=Kt);ne.camera.updateProjectionMatrix()}const Ce=ne.map.isWebGLCubeRenderTarget?6:1;for(let Ue=0;Ue<Ce;Ue++){if(ne.map.isWebGLCubeRenderTarget)r.setRenderTarget(ne.map,Ue),r.clear();else{Ue===0&&(r.setRenderTarget(ne.map),r.clear());const Pe=ne.getViewport(Ue);c.set(o.x*Pe.x,o.y*Pe.y,o.x*Pe.z,o.y*Pe.w),j.viewport(c)}if(te.isPointLight){const Pe=ne.camera,je=ne.matrix,Ze=te.distance||Pe.far;Ze!==Pe.far&&(Pe.far=Ze,Pe.updateProjectionMatrix()),Fr.setFromMatrixPosition(te.matrixWorld),Pe.position.copy(Fr),Ya.copy(Pe.position),Ya.add(YS[Ue]),Pe.up.copy(KS[Ue]),Pe.lookAt(Ya),Pe.updateMatrixWorld(),je.makeTranslation(-Fr.x,-Fr.y,-Fr.z),qc.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(qc,Pe.coordinateSystem,Pe.reversedDepth)}else ne.updateMatrices(te);n=ne.getFrustum(),U(H,A,ne.camera,te,this.type)}ne.isPointLightShadow!==!0&&this.type===Lr&&D(ne,A),ne.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(F,O,z)};function D(C,H){const A=e.update(P);m.defines.VSM_SAMPLES!==C.blurSamples&&(m.defines.VSM_SAMPLES=C.blurSamples,M.defines.VSM_SAMPLES=C.blurSamples,m.needsUpdate=!0,M.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Gn(a.x,a.y,{format:lr,type:ii})),m.uniforms.shadow_pass.value=C.map.depthTexture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(H,null,A,m,P,null),M.uniforms.shadow_pass.value=C.mapPass.texture,M.uniforms.resolution.value=C.mapSize,M.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(H,null,A,M,P,null)}function I(C,H,A,F){let O=null;const z=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)O=z;else if(O=A.isPointLight===!0?p:f,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const j=O.uuid,Z=H.uuid;let Y=h[j];Y===void 0&&(Y={},h[j]=Y);let ie=Y[Z];ie===void 0&&(ie=O.clone(),Y[Z]=ie,H.addEventListener("dispose",k)),O=ie}if(O.visible=H.visible,O.wireframe=H.wireframe,F===Lr?O.side=H.shadowSide!==null?H.shadowSide:H.side:O.side=H.shadowSide!==null?H.shadowSide:y[H.side],O.alphaMap=H.alphaMap,O.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,O.map=H.map,O.clipShadows=H.clipShadows,O.clippingPlanes=H.clippingPlanes,O.clipIntersection=H.clipIntersection,O.displacementMap=H.displacementMap,O.displacementScale=H.displacementScale,O.displacementBias=H.displacementBias,O.wireframeLinewidth=H.wireframeLinewidth,O.linewidth=H.linewidth,A.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const j=r.properties.get(O);j.light=A}return O}function U(C,H,A,F,O){if(C.visible===!1)return;if(C.layers.test(H.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&O===Lr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const Z=e.update(C),Y=C.material;if(Array.isArray(Y)){const ie=Z.groups;for(let te=0,ne=ie.length;te<ne;te++){const xe=ie[te],_e=Y[xe.materialIndex];if(_e&&_e.visible){const Ce=I(C,_e,F,O);C.onBeforeShadow(r,C,H,A,Z,Ce,xe),r.renderBufferDirect(A,null,Z,Ce,C,xe),C.onAfterShadow(r,C,H,A,Z,Ce,xe)}}}else if(Y.visible){const ie=I(C,Y,F,O);C.onBeforeShadow(r,C,H,A,Z,ie,null),r.renderBufferDirect(A,null,Z,ie,C,null),C.onAfterShadow(r,C,H,A,Z,ie,null)}}const j=C.children;for(let Z=0,Y=j.length;Z<Y;Z++)U(j[Z],H,A,F,O)}function k(C){C.target.removeEventListener("dispose",k);for(const A in h){const F=h[A],O=C.target.uuid;O in F&&(F[O].dispose(),delete F[O])}}}function JS(r,e){function t(){let W=!1;const be=new Ot;let ye=null;const Re=new Ot(0,0,0,0);return{setMask:function(X){ye!==X&&!W&&(r.colorMask(X,X,X,X),ye=X)},setLocked:function(X){W=X},setClear:function(X,B,Fe,qe,gt){gt===!0&&(X*=qe,B*=qe,Fe*=qe),be.set(X,B,Fe,qe),Re.equals(be)===!1&&(r.clearColor(X,B,Fe,qe),Re.copy(be))},reset:function(){W=!1,ye=null,Re.set(-1,0,0,0)}}}function n(){let W=!1,be=!1,ye=null,Re=null,X=null;return{setReversed:function(B){if(be!==B){const Fe=e.get("EXT_clip_control");B?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),be=B;const qe=X;X=null,this.setClear(qe)}},getReversed:function(){return be},setTest:function(B){B?Se(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(B){ye!==B&&!W&&(r.depthMask(B),ye=B)},setFunc:function(B){if(be&&(B=P_[B]),Re!==B){switch(B){case Ja:r.depthFunc(r.NEVER);break;case Qa:r.depthFunc(r.ALWAYS);break;case eo:r.depthFunc(r.LESS);break;case ar:r.depthFunc(r.LEQUAL);break;case to:r.depthFunc(r.EQUAL);break;case no:r.depthFunc(r.GEQUAL);break;case io:r.depthFunc(r.GREATER);break;case ro:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Re=B}},setLocked:function(B){W=B},setClear:function(B){X!==B&&(X=B,be&&(B=1-B),r.clearDepth(B))},reset:function(){W=!1,ye=null,Re=null,X=null,be=!1}}}function a(){let W=!1,be=null,ye=null,Re=null,X=null,B=null,Fe=null,qe=null,gt=null;return{setTest:function(rt){W||(rt?Se(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(rt){be!==rt&&!W&&(r.stencilMask(rt),be=rt)},setFunc:function(rt,yn,zt){(ye!==rt||Re!==yn||X!==zt)&&(r.stencilFunc(rt,yn,zt),ye=rt,Re=yn,X=zt)},setOp:function(rt,yn,zt){(B!==rt||Fe!==yn||qe!==zt)&&(r.stencilOp(rt,yn,zt),B=rt,Fe=yn,qe=zt)},setLocked:function(rt){W=rt},setClear:function(rt){gt!==rt&&(r.clearStencil(rt),gt=rt)},reset:function(){W=!1,be=null,ye=null,Re=null,X=null,B=null,Fe=null,qe=null,gt=null}}}const o=new t,c=new n,f=new a,p=new WeakMap,h=new WeakMap;let g={},y={},m=new WeakMap,M=[],b=null,P=!1,S=null,v=null,D=null,I=null,U=null,k=null,C=null,H=new pt(0,0,0),A=0,F=!1,O=null,z=null,j=null,Z=null,Y=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,ne=0;const xe=r.getParameter(r.VERSION);xe.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(xe)[1]),te=ne>=1):xe.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),te=ne>=2);let _e=null,Ce={};const Ue=r.getParameter(r.SCISSOR_BOX),Pe=r.getParameter(r.VIEWPORT),je=new Ot().fromArray(Ue),Ze=new Ot().fromArray(Pe);function st(W,be,ye,Re){const X=new Uint8Array(4),B=r.createTexture();r.bindTexture(W,B),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Fe=0;Fe<ye;Fe++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,X):r.texImage2D(be+Fe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,X);return B}const le={};le[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Se(r.DEPTH_TEST),c.setFunc(ar),Qe(!1),Lt(jl),Se(r.CULL_FACE),ft(ei);function Se(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function se(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Ee(W,be){return y[W]!==be?(r.bindFramebuffer(W,be),y[W]=be,W===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=be),W===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=be),!0):!1}function He(W,be){let ye=M,Re=!1;if(W){ye=m.get(be),ye===void 0&&(ye=[],m.set(be,ye));const X=W.textures;if(ye.length!==X.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let B=0,Fe=X.length;B<Fe;B++)ye[B]=r.COLOR_ATTACHMENT0+B;ye.length=X.length,Re=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Re=!0);Re&&r.drawBuffers(ye)}function $e(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const bt={[Ii]:r.FUNC_ADD,[Qm]:r.FUNC_SUBTRACT,[e_]:r.FUNC_REVERSE_SUBTRACT};bt[t_]=r.MIN,bt[n_]=r.MAX;const lt={[i_]:r.ZERO,[r_]:r.ONE,[s_]:r.SRC_COLOR,[Ka]:r.SRC_ALPHA,[f_]:r.SRC_ALPHA_SATURATE,[c_]:r.DST_COLOR,[o_]:r.DST_ALPHA,[a_]:r.ONE_MINUS_SRC_COLOR,[Za]:r.ONE_MINUS_SRC_ALPHA,[u_]:r.ONE_MINUS_DST_COLOR,[l_]:r.ONE_MINUS_DST_ALPHA,[d_]:r.CONSTANT_COLOR,[h_]:r.ONE_MINUS_CONSTANT_COLOR,[p_]:r.CONSTANT_ALPHA,[m_]:r.ONE_MINUS_CONSTANT_ALPHA};function ft(W,be,ye,Re,X,B,Fe,qe,gt,rt){if(W===ei){P===!0&&(se(r.BLEND),P=!1);return}if(P===!1&&(Se(r.BLEND),P=!0),W!==Jm){if(W!==S||rt!==F){if((v!==Ii||U!==Ii)&&(r.blendEquation(r.FUNC_ADD),v=Ii,U=Ii),rt)switch(W){case rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yl:r.blendFunc(r.ONE,r.ONE);break;case Kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:St("WebGLState: Invalid blending: ",W);break}else switch(W){case rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kl:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",W);break}D=null,I=null,k=null,C=null,H.set(0,0,0),A=0,S=W,F=rt}return}X=X||be,B=B||ye,Fe=Fe||Re,(be!==v||X!==U)&&(r.blendEquationSeparate(bt[be],bt[X]),v=be,U=X),(ye!==D||Re!==I||B!==k||Fe!==C)&&(r.blendFuncSeparate(lt[ye],lt[Re],lt[B],lt[Fe]),D=ye,I=Re,k=B,C=Fe),(qe.equals(H)===!1||gt!==A)&&(r.blendColor(qe.r,qe.g,qe.b,gt),H.copy(qe),A=gt),S=W,F=!1}function Mt(W,be){W.side===An?se(r.CULL_FACE):Se(r.CULL_FACE);let ye=W.side===ln;be&&(ye=!ye),Qe(ye),W.blending===rr&&W.transparent===!1?ft(ei):ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),o.setMask(W.colorWrite);const Re=W.stencilWrite;f.setTest(Re),Re&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Se(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(W){O!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),O=W)}function Lt(W){W!==Ym?(Se(r.CULL_FACE),W!==z&&(W===jl?r.cullFace(r.BACK):W===Km?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),z=W}function V(W){W!==j&&(te&&r.lineWidth(W),j=W)}function Rt(W,be,ye){W?(Se(r.POLYGON_OFFSET_FILL),(Z!==be||Y!==ye)&&(Z=be,Y=ye,c.getReversed()&&(be=-be),r.polygonOffset(be,ye))):se(r.POLYGON_OFFSET_FILL)}function ct(W){W?Se(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function _t(W){W===void 0&&(W=r.TEXTURE0+ie-1),_e!==W&&(r.activeTexture(W),_e=W)}function Ie(W,be,ye){ye===void 0&&(_e===null?ye=r.TEXTURE0+ie-1:ye=_e);let Re=Ce[ye];Re===void 0&&(Re={type:void 0,texture:void 0},Ce[ye]=Re),(Re.type!==W||Re.texture!==be)&&(_e!==ye&&(r.activeTexture(ye),_e=ye),r.bindTexture(W,be||le[W]),Re.type=W,Re.texture=be)}function L(){const W=Ce[_e];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){St("WebGLState:",W)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(W){St("WebGLState:",W)}}function ae(){try{r.texSubImage2D(...arguments)}catch(W){St("WebGLState:",W)}}function he(){try{r.texSubImage3D(...arguments)}catch(W){St("WebGLState:",W)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(W){St("WebGLState:",W)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(W){St("WebGLState:",W)}}function Te(){try{r.texStorage2D(...arguments)}catch(W){St("WebGLState:",W)}}function Ge(){try{r.texStorage3D(...arguments)}catch(W){St("WebGLState:",W)}}function Xe(){try{r.texImage2D(...arguments)}catch(W){St("WebGLState:",W)}}function ve(){try{r.texImage3D(...arguments)}catch(W){St("WebGLState:",W)}}function Me(W){je.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),je.copy(W))}function Oe(W){Ze.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ze.copy(W))}function Be(W,be){let ye=h.get(be);ye===void 0&&(ye=new WeakMap,h.set(be,ye));let Re=ye.get(W);Re===void 0&&(Re=r.getUniformBlockIndex(be,W.name),ye.set(W,Re))}function De(W,be){const Re=h.get(be).get(W);p.get(be)!==Re&&(r.uniformBlockBinding(be,Re,W.__bindingPointIndex),p.set(be,Re))}function et(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},_e=null,Ce={},y={},m=new WeakMap,M=[],b=null,P=!1,S=null,v=null,D=null,I=null,U=null,k=null,C=null,H=new pt(0,0,0),A=0,F=!1,O=null,z=null,j=null,Z=null,Y=null,je.set(0,0,r.canvas.width,r.canvas.height),Ze.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),f.reset()}return{buffers:{color:o,depth:c,stencil:f},enable:Se,disable:se,bindFramebuffer:Ee,drawBuffers:He,useProgram:$e,setBlending:ft,setMaterial:Mt,setFlipSided:Qe,setCullFace:Lt,setLineWidth:V,setPolygonOffset:Rt,setScissorTest:ct,activeTexture:_t,bindTexture:Ie,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:Xe,texImage3D:ve,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:Te,texStorage3D:Ge,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ne,scissor:Me,viewport:Oe,reset:et}}function QS(r,e,t,n,a,o,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ot,g=new WeakMap;let y;const m=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Gs("canvas")}function P(L,E,G){let ae=1;const he=Ie(L);if((he.width>G||he.height>G)&&(ae=G/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(ae*he.width),Ne=Math.floor(ae*he.height);y===void 0&&(y=b(oe,Ne));const Te=E?b(oe,Ne):y;return Te.width=oe,Te.height=Ne,Te.getContext("2d").drawImage(L,0,0,oe,Ne),Ye("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+oe+"x"+Ne+")."),Te}else return"data"in L&&Ye("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function S(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(L,E,G,ae,he=!1){if(L!==null){if(r[L]!==void 0)return r[L];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=E;if(E===r.RED&&(G===r.FLOAT&&(oe=r.R32F),G===r.HALF_FLOAT&&(oe=r.R16F),G===r.UNSIGNED_BYTE&&(oe=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(oe=r.R8UI),G===r.UNSIGNED_SHORT&&(oe=r.R16UI),G===r.UNSIGNED_INT&&(oe=r.R32UI),G===r.BYTE&&(oe=r.R8I),G===r.SHORT&&(oe=r.R16I),G===r.INT&&(oe=r.R32I)),E===r.RG&&(G===r.FLOAT&&(oe=r.RG32F),G===r.HALF_FLOAT&&(oe=r.RG16F),G===r.UNSIGNED_BYTE&&(oe=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(oe=r.RG8UI),G===r.UNSIGNED_SHORT&&(oe=r.RG16UI),G===r.UNSIGNED_INT&&(oe=r.RG32UI),G===r.BYTE&&(oe=r.RG8I),G===r.SHORT&&(oe=r.RG16I),G===r.INT&&(oe=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),G===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),G===r.UNSIGNED_INT&&(oe=r.RGB32UI),G===r.BYTE&&(oe=r.RGB8I),G===r.SHORT&&(oe=r.RGB16I),G===r.INT&&(oe=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),G===r.UNSIGNED_INT&&(oe=r.RGBA32UI),G===r.BYTE&&(oe=r.RGBA8I),G===r.SHORT&&(oe=r.RGBA16I),G===r.INT&&(oe=r.RGBA32I)),E===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),E===r.RGBA){const Ne=he?Vs:xt.getTransfer(ae);G===r.FLOAT&&(oe=r.RGBA32F),G===r.HALF_FLOAT&&(oe=r.RGBA16F),G===r.UNSIGNED_BYTE&&(oe=Ne===At?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function U(L,E){let G;return L?E===null||E===Wn||E===Nr?G=r.DEPTH24_STENCIL8:E===kn?G=r.DEPTH32F_STENCIL8:E===Ur&&(G=r.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wn||E===Nr?G=r.DEPTH_COMPONENT24:E===kn?G=r.DEPTH_COMPONENT32F:E===Ur&&(G=r.DEPTH_COMPONENT16),G}function k(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Kt&&L.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function C(L){const E=L.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&g.delete(E)}function H(L){const E=L.target;E.removeEventListener("dispose",H),O(E)}function A(L){const E=n.get(L);if(E.__webglInit===void 0)return;const G=L.source,ae=m.get(G);if(ae){const he=ae[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&F(L),Object.keys(ae).length===0&&m.delete(G)}n.remove(L)}function F(L){const E=n.get(L);r.deleteTexture(E.__webglTexture);const G=L.source,ae=m.get(G);delete ae[E.__cacheKey],c.memory.textures--}function O(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let he=0;he<E.__webglFramebuffer[ae].length;he++)r.deleteFramebuffer(E.__webglFramebuffer[ae][he]);else r.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)r.deleteFramebuffer(E.__webglFramebuffer[ae]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=L.textures;for(let ae=0,he=G.length;ae<he;ae++){const oe=n.get(G[ae]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),c.memory.textures--),n.remove(G[ae])}n.remove(L)}let z=0;function j(){z=0}function Z(){const L=z;return L>=a.maxTextures&&Ye("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),z+=1,L}function Y(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ie(L,E){const G=n.get(L);if(L.isVideoTexture&&ct(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const ae=L.image;if(ae===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,L,E);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function te(L,E){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){le(G,L,E);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function ne(L,E){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){le(G,L,E);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function xe(L,E){const G=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){Se(G,L,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}const _e={[so]:r.REPEAT,[Qn]:r.CLAMP_TO_EDGE,[ao]:r.MIRRORED_REPEAT},Ce={[Kt]:r.NEAREST,[v_]:r.NEAREST_MIPMAP_NEAREST,[us]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[ga]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},Ue={[y_]:r.NEVER,[w_]:r.ALWAYS,[M_]:r.LESS,[Zo]:r.LEQUAL,[E_]:r.EQUAL,[Jo]:r.GEQUAL,[T_]:r.GREATER,[b_]:r.NOTEQUAL};function Pe(L,E){if(E.type===kn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===nn||E.magFilter===ga||E.magFilter===us||E.magFilter===Ni||E.minFilter===nn||E.minFilter===ga||E.minFilter===us||E.minFilter===Ni)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,_e[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,_e[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,_e[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Ce[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Ce[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kt||E.minFilter!==us&&E.minFilter!==Ni||E.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function je(L,E){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",C));const ae=E.source;let he=m.get(ae);he===void 0&&(he={},m.set(ae,he));const oe=Y(E);if(oe!==L.__cacheKey){he[oe]===void 0&&(he[oe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,G=!0),he[oe].usedTimes++;const Ne=he[L.__cacheKey];Ne!==void 0&&(he[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&F(E)),L.__cacheKey=oe,L.__webglTexture=he[oe].texture}return G}function Ze(L,E,G){return Math.floor(Math.floor(L/G)/E)}function st(L,E,G,ae){const oe=L.updateRanges;if(oe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,G,ae,E.data);else{oe.sort((ve,Me)=>ve.start-Me.start);let Ne=0;for(let ve=1;ve<oe.length;ve++){const Me=oe[Ne],Oe=oe[ve],Be=Me.start+Me.count,De=Ze(Oe.start,E.width,4),et=Ze(Me.start,E.width,4);Oe.start<=Be+1&&De===et&&Ze(Oe.start+Oe.count-1,E.width,4)===De?Me.count=Math.max(Me.count,Oe.start+Oe.count-Me.start):(++Ne,oe[Ne]=Oe)}oe.length=Ne+1;const Te=r.getParameter(r.UNPACK_ROW_LENGTH),Ge=r.getParameter(r.UNPACK_SKIP_PIXELS),Xe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ve=0,Me=oe.length;ve<Me;ve++){const Oe=oe[ve],Be=Math.floor(Oe.start/4),De=Math.ceil(Oe.count/4),et=Be%E.width,W=Math.floor(Be/E.width),be=De,ye=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,et),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,et,W,be,ye,G,ae,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Te),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,Xe)}}function le(L,E,G){let ae=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=r.TEXTURE_3D);const he=je(L,E),oe=E.source;t.bindTexture(ae,L.__webglTexture,r.TEXTURE0+G);const Ne=n.get(oe);if(oe.version!==Ne.__version||he===!0){t.activeTexture(r.TEXTURE0+G);const Te=xt.getPrimaries(xt.workingColorSpace),Ge=E.colorSpace===mi?null:xt.getPrimaries(E.colorSpace),Xe=E.colorSpace===mi||Te===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ve=P(E.image,!1,a.maxTextureSize);ve=_t(E,ve);const Me=o.convert(E.format,E.colorSpace),Oe=o.convert(E.type);let Be=I(E.internalFormat,Me,Oe,E.colorSpace,E.isVideoTexture);Pe(ae,E);let De;const et=E.mipmaps,W=E.isVideoTexture!==!0,be=Ne.__version===void 0||he===!0,ye=oe.dataReady,Re=k(E,ve);if(E.isDepthTexture)Be=U(E.format===Oi,E.type),be&&(W?t.texStorage2D(r.TEXTURE_2D,1,Be,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,Be,ve.width,ve.height,0,Me,Oe,null));else if(E.isDataTexture)if(et.length>0){W&&be&&t.texStorage2D(r.TEXTURE_2D,Re,Be,et[0].width,et[0].height);for(let X=0,B=et.length;X<B;X++)De=et[X],W?ye&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,De.width,De.height,Me,Oe,De.data):t.texImage2D(r.TEXTURE_2D,X,Be,De.width,De.height,0,Me,Oe,De.data);E.generateMipmaps=!1}else W?(be&&t.texStorage2D(r.TEXTURE_2D,Re,Be,ve.width,ve.height),ye&&st(E,ve,Me,Oe)):t.texImage2D(r.TEXTURE_2D,0,Be,ve.width,ve.height,0,Me,Oe,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Be,et[0].width,et[0].height,ve.depth);for(let X=0,B=et.length;X<B;X++)if(De=et[X],E.format!==Cn)if(Me!==null)if(W){if(ye)if(E.layerUpdates.size>0){const Fe=Tc(De.width,De.height,E.format,E.type);for(const qe of E.layerUpdates){const gt=De.data.subarray(qe*Fe/De.data.BYTES_PER_ELEMENT,(qe+1)*Fe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,qe,De.width,De.height,1,Me,gt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,De.width,De.height,ve.depth,Me,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Be,De.width,De.height,ve.depth,0,De.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?ye&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,De.width,De.height,ve.depth,Me,Oe,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Be,De.width,De.height,ve.depth,0,Me,Oe,De.data)}else{W&&be&&t.texStorage2D(r.TEXTURE_2D,Re,Be,et[0].width,et[0].height);for(let X=0,B=et.length;X<B;X++)De=et[X],E.format!==Cn?Me!==null?W?ye&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,De.width,De.height,Me,De.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Be,De.width,De.height,0,De.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?ye&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,De.width,De.height,Me,Oe,De.data):t.texImage2D(r.TEXTURE_2D,X,Be,De.width,De.height,0,Me,Oe,De.data)}else if(E.isDataArrayTexture)if(W){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Be,ve.width,ve.height,ve.depth),ye)if(E.layerUpdates.size>0){const X=Tc(ve.width,ve.height,E.format,E.type);for(const B of E.layerUpdates){const Fe=ve.data.subarray(B*X/ve.data.BYTES_PER_ELEMENT,(B+1)*X/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,B,ve.width,ve.height,1,Me,Oe,Fe)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Me,Oe,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,ve.width,ve.height,ve.depth,0,Me,Oe,ve.data);else if(E.isData3DTexture)W?(be&&t.texStorage3D(r.TEXTURE_3D,Re,Be,ve.width,ve.height,ve.depth),ye&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Me,Oe,ve.data)):t.texImage3D(r.TEXTURE_3D,0,Be,ve.width,ve.height,ve.depth,0,Me,Oe,ve.data);else if(E.isFramebufferTexture){if(be)if(W)t.texStorage2D(r.TEXTURE_2D,Re,Be,ve.width,ve.height);else{let X=ve.width,B=ve.height;for(let Fe=0;Fe<Re;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,Be,X,B,0,Me,Oe,null),X>>=1,B>>=1}}else if(et.length>0){if(W&&be){const X=Ie(et[0]);t.texStorage2D(r.TEXTURE_2D,Re,Be,X.width,X.height)}for(let X=0,B=et.length;X<B;X++)De=et[X],W?ye&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,Me,Oe,De):t.texImage2D(r.TEXTURE_2D,X,Be,Me,Oe,De);E.generateMipmaps=!1}else if(W){if(be){const X=Ie(ve);t.texStorage2D(r.TEXTURE_2D,Re,Be,X.width,X.height)}ye&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Oe,ve)}else t.texImage2D(r.TEXTURE_2D,0,Be,Me,Oe,ve);S(E)&&v(ae),Ne.__version=oe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Se(L,E,G){if(E.image.length!==6)return;const ae=je(L,E),he=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+G);const oe=n.get(he);if(he.version!==oe.__version||ae===!0){t.activeTexture(r.TEXTURE0+G);const Ne=xt.getPrimaries(xt.workingColorSpace),Te=E.colorSpace===mi?null:xt.getPrimaries(E.colorSpace),Ge=E.colorSpace===mi||Ne===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,ve=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let B=0;B<6;B++)!Xe&&!ve?Me[B]=P(E.image[B],!0,a.maxCubemapSize):Me[B]=ve?E.image[B].image:E.image[B],Me[B]=_t(E,Me[B]);const Oe=Me[0],Be=o.convert(E.format,E.colorSpace),De=o.convert(E.type),et=I(E.internalFormat,Be,De,E.colorSpace),W=E.isVideoTexture!==!0,be=oe.__version===void 0||ae===!0,ye=he.dataReady;let Re=k(E,Oe);Pe(r.TEXTURE_CUBE_MAP,E);let X;if(Xe){W&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,et,Oe.width,Oe.height);for(let B=0;B<6;B++){X=Me[B].mipmaps;for(let Fe=0;Fe<X.length;Fe++){const qe=X[Fe];E.format!==Cn?Be!==null?W?ye&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,0,0,qe.width,qe.height,Be,qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,et,qe.width,qe.height,0,qe.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,0,0,qe.width,qe.height,Be,De,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe,et,qe.width,qe.height,0,Be,De,qe.data)}}}else{if(X=E.mipmaps,W&&be){X.length>0&&Re++;const B=Ie(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,et,B.width,B.height)}for(let B=0;B<6;B++)if(ve){W?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Me[B].width,Me[B].height,Be,De,Me[B].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,et,Me[B].width,Me[B].height,0,Be,De,Me[B].data);for(let Fe=0;Fe<X.length;Fe++){const gt=X[Fe].image[B].image;W?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,0,0,gt.width,gt.height,Be,De,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,et,gt.width,gt.height,0,Be,De,gt.data)}}else{W?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Be,De,Me[B]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,et,Be,De,Me[B]);for(let Fe=0;Fe<X.length;Fe++){const qe=X[Fe];W?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,0,0,Be,De,qe.image[B]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,Fe+1,et,Be,De,qe.image[B])}}}S(E)&&v(r.TEXTURE_CUBE_MAP),oe.__version=he.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function se(L,E,G,ae,he,oe){const Ne=o.convert(G.format,G.colorSpace),Te=o.convert(G.type),Ge=I(G.internalFormat,Ne,Te,G.colorSpace),Xe=n.get(E),ve=n.get(G);if(ve.__renderTarget=E,!Xe.__hasExternalTextures){const Me=Math.max(1,E.width>>oe),Oe=Math.max(1,E.height>>oe);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,oe,Ge,Me,Oe,E.depth,0,Ne,Te,null):t.texImage2D(he,oe,Ge,Me,Oe,0,Ne,Te,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Rt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,he,ve.__webglTexture,0,V(E)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,he,ve.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(L,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const ae=E.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,oe=U(E.stencilBuffer,he),Ne=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Rt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),oe,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),oe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,oe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,L)}else{const ae=E.textures;for(let he=0;he<ae.length;he++){const oe=ae[he],Ne=o.convert(oe.format,oe.colorSpace),Te=o.convert(oe.type),Ge=I(oe.internalFormat,Ne,Te,oe.colorSpace);Rt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),Ge,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),Ge,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ge,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(L,E,G){const ae=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",C)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,E.depthTexture);const Xe=o.convert(E.depthTexture.format),ve=o.convert(E.depthTexture.type);let Me;E.depthTexture.format===ri?Me=r.DEPTH_COMPONENT24:E.depthTexture.format===Oi&&(Me=r.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Me,E.width,E.height,0,Xe,ve,null)}}else ie(E.depthTexture,0);const oe=he.__webglTexture,Ne=V(E),Te=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,Ge=E.depthTexture.format===Oi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ri)Rt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ge,Te,oe,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,Ge,Te,oe,0);else if(E.depthTexture.format===Oi)Rt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ge,Te,oe,0,Ne):r.framebufferTexture2D(r.FRAMEBUFFER,Ge,Te,oe,0);else throw new Error("Unknown depthTexture format")}function $e(L){const E=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ae=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ae}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ae=0;ae<6;ae++)He(E.__webglFramebuffer[ae],L,ae);else{const ae=L.texture.mipmaps;ae&&ae.length>0?He(E.__webglFramebuffer[0],L,0):He(E.__webglFramebuffer,L,0)}else if(G){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=r.createRenderbuffer(),Ee(E.__webglDepthbuffer[ae],L,!1);else{const he=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,oe)}}else{const ae=L.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ee(E.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,oe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(L,E,G){const ae=n.get(L);E!==void 0&&se(ae.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&$e(L)}function lt(L){const E=L.texture,G=n.get(L),ae=n.get(E);L.addEventListener("dispose",H);const he=L.textures,oe=L.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=E.version,c.memory.textures++),oe){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let Ge=0;Ge<E.mipmaps.length;Ge++)G.__webglFramebuffer[Te][Ge]=r.createFramebuffer()}else G.__webglFramebuffer[Te]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)G.__webglFramebuffer[Te]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let Te=0,Ge=he.length;Te<Ge;Te++){const Xe=n.get(he[Te]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=r.createTexture(),c.memory.textures++)}if(L.samples>0&&Rt(L)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Te=0;Te<he.length;Te++){const Ge=he[Te];G.__webglColorRenderbuffer[Te]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Te]);const Xe=o.convert(Ge.format,Ge.colorSpace),ve=o.convert(Ge.type),Me=I(Ge.internalFormat,Xe,ve,Ge.colorSpace,L.isXRRenderTarget===!0),Oe=V(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Me,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,G.__webglColorRenderbuffer[Te])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ge=0;Ge<E.mipmaps.length;Ge++)se(G.__webglFramebuffer[Te][Ge],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge);else se(G.__webglFramebuffer[Te],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(E)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Te=0,Ge=he.length;Te<Ge;Te++){const Xe=he[Te],ve=n.get(Xe);let Me=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,ve.__webglTexture),Pe(Me,Xe),se(G.__webglFramebuffer,L,Xe,r.COLOR_ATTACHMENT0+Te,Me,0),S(Xe)&&v(Me)}t.unbindTexture()}else{let Te=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Te,ae.__webglTexture),Pe(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let Ge=0;Ge<E.mipmaps.length;Ge++)se(G.__webglFramebuffer[Ge],L,E,r.COLOR_ATTACHMENT0,Te,Ge);else se(G.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Te,0);S(E)&&v(Te),t.unbindTexture()}L.depthBuffer&&$e(L)}function ft(L){const E=L.textures;for(let G=0,ae=E.length;G<ae;G++){const he=E[G];if(S(he)){const oe=D(L),Ne=n.get(he).__webglTexture;t.bindTexture(oe,Ne),v(oe),t.unbindTexture()}}}const Mt=[],Qe=[];function Lt(L){if(L.samples>0){if(Rt(L)===!1){const E=L.textures,G=L.width,ae=L.height;let he=r.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=n.get(L),Te=E.length>1;if(Te)for(let Xe=0;Xe<E.length;Xe++)t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Ge=L.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Xe=0;Xe<E.length;Xe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),Te){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Xe]);const ve=n.get(E[Xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ve,0)}r.blitFramebuffer(0,0,G,ae,0,0,G,ae,he,r.NEAREST),p===!0&&(Mt.length=0,Qe.length=0,Mt.push(r.COLOR_ATTACHMENT0+Xe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Mt.push(oe),Qe.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Te)for(let Xe=0;Xe<E.length;Xe++){t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[Xe]);const ve=n.get(E[Xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(L){return Math.min(a.maxSamples,L.samples)}function Rt(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(L){const E=c.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function _t(L,E){const G=L.colorSpace,ae=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==cr&&G!==mi&&(xt.getTransfer(G)===At?(ae!==Cn||he!==hn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",G)),E}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=j,this.setTexture2D=ie,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=xe,this.rebindTextures=bt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ey(r,e){function t(n,a=mi){let o;const c=xt.getTransfer(a);if(n===hn)return r.UNSIGNED_BYTE;if(n===$o)return r.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===cu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ou)return r.BYTE;if(n===lu)return r.SHORT;if(n===Ur)return r.UNSIGNED_SHORT;if(n===Xo)return r.INT;if(n===Wn)return r.UNSIGNED_INT;if(n===kn)return r.FLOAT;if(n===ii)return r.HALF_FLOAT;if(n===fu)return r.ALPHA;if(n===du)return r.RGB;if(n===Cn)return r.RGBA;if(n===ri)return r.DEPTH_COMPONENT;if(n===Oi)return r.DEPTH_STENCIL;if(n===hu)return r.RED;if(n===jo)return r.RED_INTEGER;if(n===lr)return r.RG;if(n===Yo)return r.RG_INTEGER;if(n===Ko)return r.RGBA_INTEGER;if(n===Ns||n===Os||n===Bs||n===ks)if(c===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===uo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===oo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===ho||n===po||n===mo||n===_o||n===go||n===vo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===fo||n===ho)return c===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===po)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===mo)return o.COMPRESSED_R11_EAC;if(n===_o)return o.COMPRESSED_SIGNED_R11_EAC;if(n===go)return o.COMPRESSED_RG11_EAC;if(n===vo)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xo||n===So||n===yo||n===Mo||n===Eo||n===To||n===bo||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Do||n===Fo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===xo)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ao)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ro)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Co)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Po)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return c===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===Io||n===Uo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Lo)return c===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Oo||n===Bo||n===ko)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===No)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
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

}`;class iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Tu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $n({vertexShader:ty,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends pr{constructor(e,t){super();const n=this;let a=null,o=1,c=null,f="local-floor",p=1,h=null,g=null,y=null,m=null,M=null,b=null;const P=typeof XRWebGLBinding<"u",S=new iy,v={},D=t.getContextAttributes();let I=null,U=null;const k=[],C=[],H=new ot;let A=null;const F=new Sn;F.viewport=new Ot;const O=new Sn;O.viewport=new Ot;const z=[F,O],j=new mg;let Z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Se=k[le];return Se===void 0&&(Se=new ba,k[le]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(le){let Se=k[le];return Se===void 0&&(Se=new ba,k[le]=Se),Se.getGripSpace()},this.getHand=function(le){let Se=k[le];return Se===void 0&&(Se=new ba,k[le]=Se),Se.getHandSpace()};function ie(le){const Se=C.indexOf(le.inputSource);if(Se===-1)return;const se=k[Se];se!==void 0&&(se.update(le.inputSource,le.frame,h||c),se.dispatchEvent({type:le.type,data:le.inputSource}))}function te(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",ne);for(let le=0;le<k.length;le++){const Se=C[le];Se!==null&&(C[le]=null,k[le].disconnect(Se))}Z=null,Y=null,S.reset();for(const le in v)delete v[le];e.setRenderTarget(I),M=null,m=null,y=null,a=null,U=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(H.width,H.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){f=le,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(le){h=le},this.getBaseLayer=function(){return m!==null?m:M},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(a,t)),y},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function(le){if(a=le,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",te),a.addEventListener("inputsourceschange",ne),D.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(H),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ee=null,He=null;D.depth&&(He=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=D.stencil?Oi:ri,Ee=D.stencil?Nr:Wn);const $e={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:o};y=this.getBinding(),m=y.createProjectionLayer($e),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),U=new Gn(m.textureWidth,m.textureHeight,{format:Cn,type:hn,depthTexture:new Br(m.textureWidth,m.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const se={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(a,t,se),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Gn(M.framebufferWidth,M.framebufferHeight,{format:Cn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await a.requestReferenceSpace(f),st.setContext(a),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ne(le){for(let Se=0;Se<le.removed.length;Se++){const se=le.removed[Se],Ee=C.indexOf(se);Ee>=0&&(C[Ee]=null,k[Ee].disconnect(se))}for(let Se=0;Se<le.added.length;Se++){const se=le.added[Se];let Ee=C.indexOf(se);if(Ee===-1){for(let $e=0;$e<k.length;$e++)if($e>=C.length){C.push(se),Ee=$e;break}else if(C[$e]===null){C[$e]=se,Ee=$e;break}if(Ee===-1)break}const He=k[Ee];He&&He.connect(se)}}const xe=new K,_e=new K;function Ce(le,Se,se){xe.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(se.matrixWorld);const Ee=xe.distanceTo(_e),He=Se.projectionMatrix.elements,$e=se.projectionMatrix.elements,bt=He[14]/(He[10]-1),lt=He[14]/(He[10]+1),ft=(He[9]+1)/He[5],Mt=(He[9]-1)/He[5],Qe=(He[8]-1)/He[0],Lt=($e[8]+1)/$e[0],V=bt*Qe,Rt=bt*Lt,ct=Ee/(-Qe+Lt),_t=ct*-Qe;if(Se.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(_t),le.translateZ(ct),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),He[10]===-1)le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const Ie=bt+ct,L=lt+ct,E=V-_t,G=Rt+(Ee-_t),ae=ft*lt/L*Ie,he=Mt*lt/L*Ie;le.projectionMatrix.makePerspective(E,G,ae,he,Ie,L),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Ue(le,Se){Se===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Se.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(a===null)return;let Se=le.near,se=le.far;S.texture!==null&&(S.depthNear>0&&(Se=S.depthNear),S.depthFar>0&&(se=S.depthFar)),j.near=O.near=F.near=Se,j.far=O.far=F.far=se,(Z!==j.near||Y!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),Z=j.near,Y=j.far),j.layers.mask=le.layers.mask|6,F.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;const Ee=le.parent,He=j.cameras;Ue(j,Ee);for(let $e=0;$e<He.length;$e++)Ue(He[$e],Ee);He.length===2?Ce(j,F,O):j.projectionMatrix.copy(F.projectionMatrix),Pe(le,j,Ee)};function Pe(le,Se,se){se===null?le.matrix.copy(Se.matrixWorld):(le.matrix.copy(se.matrixWorld),le.matrix.invert(),le.matrix.multiply(Se.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=zo*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(m===null&&M===null))return p},this.setFoveation=function(le){p=le,m!==null&&(m.fixedFoveation=le),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=le)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(le){return v[le]};let je=null;function Ze(le,Se){if(g=Se.getViewerPose(h||c),b=Se,g!==null){const se=g.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let Ee=!1;se.length!==j.cameras.length&&(j.cameras.length=0,Ee=!0);for(let lt=0;lt<se.length;lt++){const ft=se[lt];let Mt=null;if(M!==null)Mt=M.getViewport(ft);else{const Lt=y.getViewSubImage(m,ft);Mt=Lt.viewport,lt===0&&(e.setRenderTargetTextures(U,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(U))}let Qe=z[lt];Qe===void 0&&(Qe=new Sn,Qe.layers.enable(lt),Qe.viewport=new Ot,z[lt]=Qe),Qe.matrix.fromArray(ft.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ft.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),lt===0&&(j.matrix.copy(Qe.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ee===!0&&j.cameras.push(Qe)}const He=a.enabledFeatures;if(He&&He.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&P){y=n.getBinding();const lt=y.getDepthInformation(se[0]);lt&&lt.isValid&&lt.texture&&S.init(lt,a.renderState)}if(He&&He.includes("camera-access")&&P){e.state.unbindTexture(),y=n.getBinding();for(let lt=0;lt<se.length;lt++){const ft=se[lt].camera;if(ft){let Mt=v[ft];Mt||(Mt=new Tu,v[ft]=Mt);const Qe=y.getCameraImage(ft);Mt.sourceTexture=Qe}}}}for(let se=0;se<k.length;se++){const Ee=C[se],He=k[se];Ee!==null&&He!==void 0&&He.update(Ee,Se,h||c)}je&&je(le,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),b=null}const st=new Ru;st.setAnimationLoop(Ze),this.setAnimationLoop=function(le){je=le},this.dispose=function(){}}}const Fi=new Xn,sy=new Ft;function ay(r,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function n(S,v){v.color.getRGB(S.fogColor.value,bu(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function a(S,v,D,I,U){v.isMeshBasicMaterial?o(S,v):v.isMeshLambertMaterial?(o(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(o(S,v),y(S,v)):v.isMeshPhongMaterial?(o(S,v),g(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(o(S,v),m(S,v),v.isMeshPhysicalMaterial&&M(S,v,U)):v.isMeshMatcapMaterial?(o(S,v),b(S,v)):v.isMeshDepthMaterial?o(S,v):v.isMeshDistanceMaterial?(o(S,v),P(S,v)):v.isMeshNormalMaterial?o(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&f(S,v)):v.isPointsMaterial?p(S,v,D,I):v.isSpriteMaterial?h(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function o(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===ln&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===ln&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const D=e.get(v),I=D.envMap,U=D.envMapRotation;I&&(S.envMap.value=I,Fi.copy(U),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),S.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(Fi)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function f(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function p(S,v,D,I){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*D,S.scale.value=I*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function y(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function m(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,D){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ln&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,v){v.matcap&&(S.matcap.value=v.matcap)}function P(S,v){const D=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function oy(r,e,t,n){let a={},o={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,I){const U=I.program;n.uniformBlockBinding(D,U)}function h(D,I){let U=a[D.id];U===void 0&&(b(D),U=g(D),a[D.id]=U,D.addEventListener("dispose",S));const k=I.program;n.updateUBOMapping(D,k);const C=e.render.frame;o[D.id]!==C&&(m(D),o[D.id]=C)}function g(D){const I=y();D.__bindingPointIndex=I;const U=r.createBuffer(),k=D.__size,C=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,k,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,U),U}function y(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(D){const I=a[D.id],U=D.uniforms,k=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let C=0,H=U.length;C<H;C++){const A=Array.isArray(U[C])?U[C]:[U[C]];for(let F=0,O=A.length;F<O;F++){const z=A[F];if(M(z,C,F,k)===!0){const j=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let Y=0;for(let ie=0;ie<Z.length;ie++){const te=Z[ie],ne=P(te);typeof te=="number"||typeof te=="boolean"?(z.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,j+Y,z.__data)):te.isMatrix3?(z.__data[0]=te.elements[0],z.__data[1]=te.elements[1],z.__data[2]=te.elements[2],z.__data[3]=0,z.__data[4]=te.elements[3],z.__data[5]=te.elements[4],z.__data[6]=te.elements[5],z.__data[7]=0,z.__data[8]=te.elements[6],z.__data[9]=te.elements[7],z.__data[10]=te.elements[8],z.__data[11]=0):(te.toArray(z.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,I,U,k){const C=D.value,H=I+"_"+U;if(k[H]===void 0)return typeof C=="number"||typeof C=="boolean"?k[H]=C:k[H]=C.clone(),!0;{const A=k[H];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return k[H]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function b(D){const I=D.uniforms;let U=0;const k=16;for(let H=0,A=I.length;H<A;H++){const F=Array.isArray(I[H])?I[H]:[I[H]];for(let O=0,z=F.length;O<z;O++){const j=F[O],Z=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,ie=Z.length;Y<ie;Y++){const te=Z[Y],ne=P(te),xe=U%k,_e=xe%ne.boundary,Ce=xe+_e;U+=_e,Ce!==0&&k-Ce<ne.storage&&(U+=k-Ce),j.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=U,U+=ne.storage}}}const C=U%k;return C>0&&(U+=k-C),D.__size=U,D.__cache={},this}function P(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",D),I}function S(D){const I=D.target;I.removeEventListener("dispose",S);const U=c.indexOf(I.__bindingPointIndex);c.splice(U,1),r.deleteBuffer(a[I.id]),delete a[I.id],delete o[I.id]}function v(){for(const D in a)r.deleteBuffer(a[D]);c=[],a={},o={}}return{bind:p,update:h,dispose:v}}const ly=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function cy(){return On===null&&(On=new Z_(ly,16,16,lr,ii),On.name="DFG_LUT",On.minFilter=nn,On.magFilter=nn,On.wrapS=Qn,On.wrapT=Qn,On.generateMipmaps=!1,On.needsUpdate=!0),On}class uy{constructor(e={}){const{canvas:t=R_(),context:n=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:m=!1,outputBufferType:M=hn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=c;const P=M,S=new Set([Ko,Yo,jo]),v=new Set([hn,Wn,Ur,Nr,$o,qo]),D=new Uint32Array(4),I=new Int32Array(4);let U=null,k=null;const C=[],H=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let O=!1;this._outputColorSpace=xn;let z=0,j=0,Z=null,Y=-1,ie=null;const te=new Ot,ne=new Ot;let xe=null;const _e=new pt(0);let Ce=0,Ue=t.width,Pe=t.height,je=1,Ze=null,st=null;const le=new Ot(0,0,Ue,Pe),Se=new Ot(0,0,Ue,Pe);let se=!1;const Ee=new tl;let He=!1,$e=!1;const bt=new Ft,lt=new K,ft=new Ot,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Lt(){return Z===null?je:1}let V=n;function Rt(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:a,stencil:o,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",gt,!1),V===null){const $="webgl2";if(V=Rt($,R),V===null)throw Rt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw St("WebGLRenderer: "+R.message),R}let ct,_t,Ie,L,E,G,ae,he,oe,Ne,Te,Ge,Xe,ve,Me,Oe,Be,De,et,W,be,ye,Re;function X(){ct=new ux(V),ct.init(),be=new ey(V,ct),_t=new nx(V,ct,e,be),Ie=new JS(V,ct),_t.reversedDepthBuffer&&m&&Ie.buffers.depth.setReversed(!0),L=new hx(V),E=new BS,G=new QS(V,ct,Ie,E,_t,be,L),ae=new cx(F),he=new vg(V),ye=new ex(V,he),oe=new fx(V,he,L,ye),Ne=new mx(V,oe,he,ye,L),De=new px(V,_t,G),Me=new ix(E),Te=new OS(F,ae,ct,_t,ye,Me),Ge=new ay(F,E),Xe=new zS,ve=new $S(ct),Be=new Q0(F,ae,Ie,Ne,b,p),Oe=new ZS(F,Ne,_t),Re=new oy(V,L,_t,Ie),et=new tx(V,ct,L),W=new dx(V,ct,L),L.programs=Te.programs,F.capabilities=_t,F.extensions=ct,F.properties=E,F.renderLists=Xe,F.shadowMap=Oe,F.state=Ie,F.info=L}X(),P!==hn&&(A=new gx(P,t.width,t.height,a,o));const B=new ry(F,V);this.xr=B,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return je},this.setPixelRatio=function(R){R!==void 0&&(je=R,this.setSize(Ue,Pe,!1))},this.getSize=function(R){return R.set(Ue,Pe)},this.setSize=function(R,$,re=!0){if(B.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=R,Pe=$,t.width=Math.floor(R*je),t.height=Math.floor($*je),re===!0&&(t.style.width=R+"px",t.style.height=$+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(Ue*je,Pe*je).floor()},this.setDrawingBufferSize=function(R,$,re){Ue=R,Pe=$,je=re,t.width=Math.floor(R*re),t.height=Math.floor($*re),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(P===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(te)},this.getViewport=function(R){return R.copy(le)},this.setViewport=function(R,$,re,ee){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,$,re,ee),Ie.viewport(te.copy(le).multiplyScalar(je).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,$,re,ee){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,$,re,ee),Ie.scissor(ne.copy(Se).multiplyScalar(je).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(R){Ie.setScissorTest(se=R)},this.setOpaqueSort=function(R){Ze=R},this.setTransparentSort=function(R){st=R},this.getClearColor=function(R){return R.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,re=!0){let ee=0;if(R){let J=!1;if(Z!==null){const we=Z.texture.format;J=S.has(we)}if(J){const we=Z.texture.type,Le=v.has(we),de=Be.getClearColor(),ke=Be.getClearAlpha(),ze=de.r,Ke=de.g,Je=de.b;Le?(D[0]=ze,D[1]=Ke,D[2]=Je,D[3]=ke,V.clearBufferuiv(V.COLOR,0,D)):(I[0]=ze,I[1]=Ke,I[2]=Je,I[3]=ke,V.clearBufferiv(V.COLOR,0,I))}else ee|=V.COLOR_BUFFER_BIT}$&&(ee|=V.DEPTH_BUFFER_BIT),re&&(ee|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&V.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Be.dispose(),Xe.dispose(),ve.dispose(),E.dispose(),ae.dispose(),Ne.dispose(),ye.dispose(),Re.dispose(),Te.dispose(),B.dispose(),B.removeEventListener("sessionstart",mn),B.removeEventListener("sessionend",Gr),_n.stop()};function Fe(R){R.preventDefault(),nc("WebGLRenderer: Context Lost."),O=!0}function qe(){nc("WebGLRenderer: Context Restored."),O=!1;const R=L.autoReset,$=Oe.enabled,re=Oe.autoUpdate,ee=Oe.needsUpdate,J=Oe.type;X(),L.autoReset=R,Oe.enabled=$,Oe.autoUpdate=re,Oe.needsUpdate=ee,Oe.type=J}function gt(R){St("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const $=R.target;$.removeEventListener("dispose",rt),yn($)}function yn(R){zt(R),E.remove(R)}function zt(R){const $=E.get(R).programs;$!==void 0&&($.forEach(function(re){Te.releaseProgram(re)}),R.isShaderMaterial&&Te.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,re,ee,J,we){$===null&&($=Mt);const Le=J.isMesh&&J.matrixWorld.determinant()<0,de=Js(R,$,re,ee,J);Ie.setMaterial(ee,Le);let ke=re.index,ze=1;if(ee.wireframe===!0){if(ke=oe.getWireframeAttribute(re),ke===void 0)return;ze=2}const Ke=re.drawRange,Je=re.attributes.position;let Ve=Ke.start*ze,yt=(Ke.start+Ke.count)*ze;we!==null&&(Ve=Math.max(Ve,we.start*ze),yt=Math.min(yt,(we.start+we.count)*ze)),ke!==null?(Ve=Math.max(Ve,0),yt=Math.min(yt,ke.count)):Je!=null&&(Ve=Math.max(Ve,0),yt=Math.min(yt,Je.count));const It=yt-Ve;if(It<0||It===1/0)return;ye.setup(J,ee,de,re,ke);let Pt,Tt=et;if(ke!==null&&(Pt=he.get(ke),Tt=W,Tt.setIndex(Pt)),J.isMesh)ee.wireframe===!0?(Ie.setLineWidth(ee.wireframeLinewidth*Lt()),Tt.setMode(V.LINES)):Tt.setMode(V.TRIANGLES);else if(J.isLine){let Vt=ee.linewidth;Vt===void 0&&(Vt=1),Ie.setLineWidth(Vt*Lt()),J.isLineSegments?Tt.setMode(V.LINES):J.isLineLoop?Tt.setMode(V.LINE_LOOP):Tt.setMode(V.LINE_STRIP)}else J.isPoints?Tt.setMode(V.POINTS):J.isSprite&&Tt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Hs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Tt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Vt=J._multiDrawStarts,x=J._multiDrawCounts,at=J._multiDrawCount,mt=ke?he.get(ke).bytesPerElement:1,Jt=E.get(ee).currentProgram.getUniforms();for(let Yt=0;Yt<at;Yt++)Jt.setValue(V,"_gl_DrawID",Yt),Tt.render(Vt[Yt]/mt,x[Yt])}else if(J.isInstancedMesh)Tt.renderInstances(Ve,It,J.count);else if(re.isInstancedBufferGeometry){const Vt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,x=Math.min(re.instanceCount,Vt);Tt.renderInstances(Ve,It,x)}else Tt.render(Ve,It)};function xi(R,$,re){R.transparent===!0&&R.side===An&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,Si(R,$,re),R.side=vi,R.needsUpdate=!0,Si(R,$,re),R.side=An):Si(R,$,re)}this.compile=function(R,$,re=null){re===null&&(re=R),k=ve.get(re),k.init($),H.push(k),re.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(k.pushLight(J),J.castShadow&&k.pushShadow(J))}),R!==re&&R.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(k.pushLight(J),J.castShadow&&k.pushShadow(J))}),k.setupLights();const ee=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const we=J.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const de=we[Le];xi(de,re,J),ee.add(de)}else xi(we,re,J),ee.add(we)}),k=H.pop(),ee},this.compileAsync=function(R,$,re=null){const ee=this.compile(R,$,re);return new Promise(J=>{function we(){if(ee.forEach(function(Le){E.get(Le).currentProgram.isReady()&&ee.delete(Le)}),ee.size===0){J(R);return}setTimeout(we,10)}ct.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let yr=null;function Zs(R){yr&&yr(R)}function mn(){_n.stop()}function Gr(){_n.start()}const _n=new Ru;_n.setAnimationLoop(Zs),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(R){yr=R,B.setAnimationLoop(R),R===null?_n.stop():_n.start()},B.addEventListener("sessionstart",mn),B.addEventListener("sessionend",Gr),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const re=B.enabled===!0&&B.isPresenting===!0,ee=A!==null&&(Z===null||re)&&A.begin(F,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(B.cameraAutoUpdate===!0&&B.updateCamera($),$=B.getCamera()),R.isScene===!0&&R.onBeforeRender(F,R,$,Z),k=ve.get(R,H.length),k.init($),H.push(k),bt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ee.setFromProjectionMatrix(bt,zn,$.reversedDepth),$e=this.localClippingEnabled,He=Me.init(this.clippingPlanes,$e),U=Xe.get(R,C.length),U.init(),C.push(U),B.enabled===!0&&B.isPresenting===!0){const Le=F.xr.getDepthSensingMesh();Le!==null&&si(Le,$,-1/0,F.sortObjects)}si(R,$,0,F.sortObjects),U.finish(),F.sortObjects===!0&&U.sort(Ze,st),Qe=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,Qe&&Be.addToRenderList(U,R),this.info.render.frame++,He===!0&&Me.beginShadows();const J=k.state.shadowsArray;if(Oe.render(J,R,$),He===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&A.hasRenderPass())===!1){const Le=U.opaque,de=U.transmissive;if(k.setupLights(),$.isArrayCamera){const ke=$.cameras;if(de.length>0)for(let ze=0,Ke=ke.length;ze<Ke;ze++){const Je=ke[ze];Hr(Le,de,R,Je)}Qe&&Be.render(R);for(let ze=0,Ke=ke.length;ze<Ke;ze++){const Je=ke[ze];zi(U,R,Je,Je.viewport)}}else de.length>0&&Hr(Le,de,R,$),Qe&&Be.render(R),zi(U,R,$)}Z!==null&&j===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),ee&&A.end(F),R.isScene===!0&&R.onAfterRender(F,R,$),ye.resetDefaultState(),Y=-1,ie=null,H.pop(),H.length>0?(k=H[H.length-1],He===!0&&Me.setGlobalState(F.clippingPlanes,k.state.camera)):k=null,C.pop(),C.length>0?U=C[C.length-1]:U=null};function si(R,$,re,ee){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)k.pushLight(R),R.castShadow&&k.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ee.intersectsSprite(R)){ee&&ft.setFromMatrixPosition(R.matrixWorld).applyMatrix4(bt);const Le=Ne.update(R),de=R.material;de.visible&&U.push(R,Le,de,re,ft.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ee.intersectsObject(R))){const Le=Ne.update(R),de=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ft.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ft.copy(Le.boundingSphere.center)),ft.applyMatrix4(R.matrixWorld).applyMatrix4(bt)),Array.isArray(de)){const ke=Le.groups;for(let ze=0,Ke=ke.length;ze<Ke;ze++){const Je=ke[ze],Ve=de[Je.materialIndex];Ve&&Ve.visible&&U.push(R,Le,Ve,re,ft.z,Je)}}else de.visible&&U.push(R,Le,de,re,ft.z,null)}}const we=R.children;for(let Le=0,de=we.length;Le<de;Le++)si(we[Le],$,re,ee)}function zi(R,$,re,ee){const{opaque:J,transmissive:we,transparent:Le}=R;k.setupLightsView(re),He===!0&&Me.setGlobalState(F.clippingPlanes,re),ee&&Ie.viewport(te.copy(ee)),J.length>0&&Vi(J,$,re),we.length>0&&Vi(we,$,re),Le.length>0&&Vi(Le,$,re),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Hr(R,$,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ee.id]===void 0){const Ve=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ee.id]=new Gn(1,1,{generateMipmaps:!0,type:Ve?ii:hn,minFilter:Ni,samples:Math.max(4,_t.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const we=k.state.transmissionRenderTarget[ee.id],Le=ee.viewport||te;we.setSize(Le.z*F.transmissionResolutionScale,Le.w*F.transmissionResolutionScale);const de=F.getRenderTarget(),ke=F.getActiveCubeFace(),ze=F.getActiveMipmapLevel();F.setRenderTarget(we),F.getClearColor(_e),Ce=F.getClearAlpha(),Ce<1&&F.setClearColor(16777215,.5),F.clear(),Qe&&Be.render(re);const Ke=F.toneMapping;F.toneMapping=Vn;const Je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),k.setupLightsView(ee),He===!0&&Me.setGlobalState(F.clippingPlanes,ee),Vi(R,re,ee),G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let yt=0,It=$.length;yt<It;yt++){const Pt=$[yt],{object:Tt,geometry:Vt,material:x,group:at}=Pt;if(x.side===An&&Tt.layers.test(ee.layers)){const mt=x.side;x.side=ln,x.needsUpdate=!0,Wr(Tt,re,ee,Vt,x,at),x.side=mt,x.needsUpdate=!0,Ve=!0}}Ve===!0&&(G.updateMultisampleRenderTarget(we),G.updateRenderTargetMipmap(we))}F.setRenderTarget(de,ke,ze),F.setClearColor(_e,Ce),Je!==void 0&&(ee.viewport=Je),F.toneMapping=Ke}function Vi(R,$,re){const ee=$.isScene===!0?$.overrideMaterial:null;for(let J=0,we=R.length;J<we;J++){const Le=R[J],{object:de,geometry:ke,group:ze}=Le;let Ke=Le.material;Ke.allowOverride===!0&&ee!==null&&(Ke=ee),de.layers.test(re.layers)&&Wr(de,$,re,ke,Ke,ze)}}function Wr(R,$,re,ee,J,we){R.onBeforeRender(F,$,re,ee,J,we),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(F,$,re,ee,R,we),J.transparent===!0&&J.side===An&&J.forceSinglePass===!1?(J.side=ln,J.needsUpdate=!0,F.renderBufferDirect(re,$,ee,J,R,we),J.side=vi,J.needsUpdate=!0,F.renderBufferDirect(re,$,ee,J,R,we),J.side=An):F.renderBufferDirect(re,$,ee,J,R,we),R.onAfterRender(F,$,re,ee,J,we)}function Si(R,$,re){$.isScene!==!0&&($=Mt);const ee=E.get(R),J=k.state.lights,we=k.state.shadowsArray,Le=J.state.version,de=Te.getParameters(R,J.state,we,$,re),ke=Te.getProgramCacheKey(de);let ze=ee.programs;ee.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,ee.fog=$.fog;const Ke=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ee.envMap=ae.get(R.envMap||ee.environment,Ke),ee.envMapRotation=ee.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",rt),ze=new Map,ee.programs=ze);let Je=ze.get(ke);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===Le)return $r(R,de),Je}else de.uniforms=Te.getUniforms(R),R.onBeforeCompile(de,F),Je=Te.acquireProgram(de,ke),ze.set(ke,Je),ee.uniforms=de.uniforms;const Ve=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),$r(R,de),ee.needsLights=Et(R),ee.lightsStateVersion=Le,ee.needsLights&&(Ve.ambientLightColor.value=J.state.ambient,Ve.lightProbe.value=J.state.probe,Ve.directionalLights.value=J.state.directional,Ve.directionalLightShadows.value=J.state.directionalShadow,Ve.spotLights.value=J.state.spot,Ve.spotLightShadows.value=J.state.spotShadow,Ve.rectAreaLights.value=J.state.rectArea,Ve.ltc_1.value=J.state.rectAreaLTC1,Ve.ltc_2.value=J.state.rectAreaLTC2,Ve.pointLights.value=J.state.point,Ve.pointLightShadows.value=J.state.pointShadow,Ve.hemisphereLights.value=J.state.hemi,Ve.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ve.spotLightMatrix.value=J.state.spotLightMatrix,Ve.spotLightMap.value=J.state.spotLightMap,Ve.pointShadowMatrix.value=J.state.pointShadowMatrix),ee.currentProgram=Je,ee.uniformsList=null,Je}function Xr(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=zs.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function $r(R,$){const re=E.get(R);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function Js(R,$,re,ee,J){$.isScene!==!0&&($=Mt),G.resetTextureUnits();const we=$.fog,Le=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?$.environment:null,de=Z===null?F.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:cr,ke=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,ze=ae.get(ee.envMap||Le,ke),Ke=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Je=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ve=!!re.morphAttributes.position,yt=!!re.morphAttributes.normal,It=!!re.morphAttributes.color;let Pt=Vn;ee.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pt=F.toneMapping);const Tt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Vt=Tt!==void 0?Tt.length:0,x=E.get(ee),at=k.state.lights;if(He===!0&&($e===!0||R!==ie)){const Bt=R===ie&&ee.id===Y;Me.setState(ee,R,Bt)}let mt=!1;ee.version===x.__version?(x.needsLights&&x.lightsStateVersion!==at.state.version||x.outputColorSpace!==de||J.isBatchedMesh&&x.batching===!1||!J.isBatchedMesh&&x.batching===!0||J.isBatchedMesh&&x.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&x.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&x.instancing===!1||!J.isInstancedMesh&&x.instancing===!0||J.isSkinnedMesh&&x.skinning===!1||!J.isSkinnedMesh&&x.skinning===!0||J.isInstancedMesh&&x.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&x.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&x.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&x.instancingMorph===!1&&J.morphTexture!==null||x.envMap!==ze||ee.fog===!0&&x.fog!==we||x.numClippingPlanes!==void 0&&(x.numClippingPlanes!==Me.numPlanes||x.numIntersection!==Me.numIntersection)||x.vertexAlphas!==Ke||x.vertexTangents!==Je||x.morphTargets!==Ve||x.morphNormals!==yt||x.morphColors!==It||x.toneMapping!==Pt||x.morphTargetsCount!==Vt)&&(mt=!0):(mt=!0,x.__version=ee.version);let Jt=x.currentProgram;mt===!0&&(Jt=Si(ee,$,J));let Yt=!1,qn=!1,oi=!1;const wt=Jt.getUniforms(),Gt=x.uniforms;if(Ie.useProgram(Jt.program)&&(Yt=!0,qn=!0,oi=!0),ee.id!==Y&&(Y=ee.id,qn=!0),Yt||ie!==R){Ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),wt.setValue(V,"projectionMatrix",R.projectionMatrix),wt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Dn=wt.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,lt.setFromMatrixPosition(R.matrixWorld)),_t.logarithmicDepthBuffer&&wt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&wt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),ie!==R&&(ie=R,qn=!0,oi=!0)}if(x.needsLights&&(at.state.directionalShadowMap.length>0&&wt.setValue(V,"directionalShadowMap",at.state.directionalShadowMap,G),at.state.spotShadowMap.length>0&&wt.setValue(V,"spotShadowMap",at.state.spotShadowMap,G),at.state.pointShadowMap.length>0&&wt.setValue(V,"pointShadowMap",at.state.pointShadowMap,G)),J.isSkinnedMesh){wt.setOptional(V,J,"bindMatrix"),wt.setOptional(V,J,"bindMatrixInverse");const Bt=J.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),wt.setValue(V,"boneTexture",Bt.boneTexture,G))}J.isBatchedMesh&&(wt.setOptional(V,J,"batchingTexture"),wt.setValue(V,"batchingTexture",J._matricesTexture,G),wt.setOptional(V,J,"batchingIdTexture"),wt.setValue(V,"batchingIdTexture",J._indirectTexture,G),wt.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&wt.setValue(V,"batchingColorTexture",J._colorsTexture,G));const Pn=re.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&De.update(J,re,Jt),(qn||x.receiveShadow!==J.receiveShadow)&&(x.receiveShadow=J.receiveShadow,wt.setValue(V,"receiveShadow",J.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&$.environment!==null&&(Gt.envMapIntensity.value=$.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=cy()),qn&&(wt.setValue(V,"toneMappingExposure",F.toneMappingExposure),x.needsLights&&Qs(Gt,oi),we&&ee.fog===!0&&Ge.refreshFogUniforms(Gt,we),Ge.refreshMaterialUniforms(Gt,ee,je,Pe,k.state.transmissionRenderTarget[R.id]),zs.upload(V,Xr(x),Gt,G)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(zs.upload(V,Xr(x),Gt,G),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&wt.setValue(V,"center",J.center),wt.setValue(V,"modelViewMatrix",J.modelViewMatrix),wt.setValue(V,"normalMatrix",J.normalMatrix),wt.setValue(V,"modelMatrix",J.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Bt=ee.uniformsGroups;for(let Dn=0,li=Bt.length;Dn<li;Dn++){const Ut=Bt[Dn];Re.update(Ut,Jt),Re.bind(Ut,Jt)}}return Jt}function Qs(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Et(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,$,re){const ee=E.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=$,E.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const re=E.get(R);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0};const ea=V.createFramebuffer();this.setRenderTarget=function(R,$=0,re=0){Z=R,z=$,j=re;let ee=null,J=!1,we=!1;if(R){const de=E.get(R);if(de.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(V.FRAMEBUFFER,de.__webglFramebuffer),te.copy(R.viewport),ne.copy(R.scissor),xe=R.scissorTest,Ie.viewport(te),Ie.scissor(ne),Ie.setScissorTest(xe),Y=-1;return}else if(de.__webglFramebuffer===void 0)G.setupRenderTarget(R);else if(de.__hasExternalTextures)G.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ke=R.depthTexture;if(de.__boundDepthTexture!==Ke){if(Ke!==null&&E.has(Ke)&&(R.width!==Ke.image.width||R.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const ze=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[$])?ee=ze[$][re]:ee=ze[$],J=!0):R.samples>0&&G.useMultisampledRTT(R)===!1?ee=E.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?ee=ze[re]:ee=ze,te.copy(R.viewport),ne.copy(R.scissor),xe=R.scissorTest}else te.copy(le).multiplyScalar(je).floor(),ne.copy(Se).multiplyScalar(je).floor(),xe=se;if(re!==0&&(ee=ea),Ie.bindFramebuffer(V.FRAMEBUFFER,ee)&&Ie.drawBuffers(R,ee),Ie.viewport(te),Ie.scissor(ne),Ie.setScissorTest(xe),J){const de=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+$,de.__webglTexture,re)}else if(we){const de=$;for(let ke=0;ke<R.textures.length;ke++){const ze=E.get(R.textures[ke]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ke,ze.__webglTexture,re,de)}}else if(R!==null&&re!==0){const de=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,de.__webglTexture,re)}Y=-1},this.readRenderTargetPixels=function(R,$,re,ee,J,we,Le,de=0){if(!(R&&R.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Ie.bindFramebuffer(V.FRAMEBUFFER,ke);try{const ze=R.textures[de],Ke=ze.format,Je=ze.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!_t.textureFormatReadable(Ke)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Je)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ee&&re>=0&&re<=R.height-J&&V.readPixels($,re,ee,J,be.convert(Ke),be.convert(Je),we)}finally{const ze=Z!==null?E.get(Z).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,$,re,ee,J,we,Le,de=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if($>=0&&$<=R.width-ee&&re>=0&&re<=R.height-J){Ie.bindFramebuffer(V.FRAMEBUFFER,ke);const ze=R.textures[de],Ke=ze.format,Je=ze.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!_t.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ve),V.bufferData(V.PIXEL_PACK_BUFFER,we.byteLength,V.STREAM_READ),V.readPixels($,re,ee,J,be.convert(Ke),be.convert(Je),0);const yt=Z!==null?E.get(Z).__webglFramebuffer:null;Ie.bindFramebuffer(V.FRAMEBUFFER,yt);const It=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await C_(V,It,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ve),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,we),V.deleteBuffer(Ve),V.deleteSync(It),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,re=0){const ee=Math.pow(2,-re),J=Math.floor(R.image.width*ee),we=Math.floor(R.image.height*ee),Le=$!==null?$.x:0,de=$!==null?$.y:0;G.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Le,de,J,we),Ie.unbindTexture()};const qr=V.createFramebuffer(),ai=V.createFramebuffer();this.copyTextureToTexture=function(R,$,re=null,ee=null,J=0,we=0){let Le,de,ke,ze,Ke,Je,Ve,yt,It;const Pt=R.isCompressedTexture?R.mipmaps[we]:R.image;if(re!==null)Le=re.max.x-re.min.x,de=re.max.y-re.min.y,ke=re.isBox3?re.max.z-re.min.z:1,ze=re.min.x,Ke=re.min.y,Je=re.isBox3?re.min.z:0;else{const Gt=Math.pow(2,-J);Le=Math.floor(Pt.width*Gt),de=Math.floor(Pt.height*Gt),R.isDataArrayTexture?ke=Pt.depth:R.isData3DTexture?ke=Math.floor(Pt.depth*Gt):ke=1,ze=0,Ke=0,Je=0}ee!==null?(Ve=ee.x,yt=ee.y,It=ee.z):(Ve=0,yt=0,It=0);const Tt=be.convert($.format),Vt=be.convert($.type);let x;$.isData3DTexture?(G.setTexture3D($,0),x=V.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(G.setTexture2DArray($,0),x=V.TEXTURE_2D_ARRAY):(G.setTexture2D($,0),x=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const at=V.getParameter(V.UNPACK_ROW_LENGTH),mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Jt=V.getParameter(V.UNPACK_SKIP_PIXELS),Yt=V.getParameter(V.UNPACK_SKIP_ROWS),qn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Pt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ke),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Je);const oi=R.isDataArrayTexture||R.isData3DTexture,wt=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const Gt=E.get(R),Pn=E.get($),Bt=E.get(Gt.__renderTarget),Dn=E.get(Pn.__renderTarget);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let li=0;li<ke;li++)oi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,Je+li),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get($).__webglTexture,we,It+li)),V.blitFramebuffer(ze,Ke,Le,de,Ve,yt,Le,de,V.DEPTH_BUFFER_BIT,V.NEAREST);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const Gt=E.get(R),Pn=E.get($);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,qr),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,ai);for(let Bt=0;Bt<ke;Bt++)oi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Gt.__webglTexture,J,Je+Bt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gt.__webglTexture,J),wt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pn.__webglTexture,we,It+Bt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pn.__webglTexture,we),J!==0?V.blitFramebuffer(ze,Ke,Le,de,Ve,yt,Le,de,V.COLOR_BUFFER_BIT,V.NEAREST):wt?V.copyTexSubImage3D(x,we,Ve,yt,It+Bt,ze,Ke,Le,de):V.copyTexSubImage2D(x,we,Ve,yt,ze,Ke,Le,de);Ie.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else wt?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(x,we,Ve,yt,It,Le,de,ke,Tt,Vt,Pt.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(x,we,Ve,yt,It,Le,de,ke,Tt,Pt.data):V.texSubImage3D(x,we,Ve,yt,It,Le,de,ke,Tt,Vt,Pt):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,we,Ve,yt,Le,de,Tt,Vt,Pt.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,we,Ve,yt,Pt.width,Pt.height,Tt,Pt.data):V.texSubImage2D(V.TEXTURE_2D,we,Ve,yt,Le,de,Tt,Vt,Pt);V.pixelStorei(V.UNPACK_ROW_LENGTH,at),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Yt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qn),we===0&&$.generateMipmaps&&V.generateMipmap(x),Ie.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&G.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?G.setTextureCube(R,0):R.isData3DTexture?G.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?G.setTexture2DArray(R,0):G.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){z=0,j=0,Z=null,Ie.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Iu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Uu=([r,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(a=>{n.setAttribute(a,String(e[a]))}),t?.length&&t.forEach(a=>{const o=Uu(a);n.appendChild(o)}),n},fy=(r,e={})=>{const n={...Iu,...e};return Uu(["svg",n,r])};const dy=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const hy=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const py=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const my=r=>{const e=py(r);return e.charAt(0).toUpperCase()+e.slice(1)};const _y=r=>Array.from(r.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),jc=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",Yc=(r,{nameAttr:e,icons:t,attrs:n})=>{const a=r.getAttribute(e);if(a==null)return;const o=my(a),c=t[o];if(!c)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);const f=_y(r),p=dy(f)?{}:{"aria-hidden":"true"},h={...Iu,"data-lucide":a,...p,...n,...f},g=jc(f),y=jc(n),m=hy("lucide",`lucide-${a}`,...g,...y);m&&Object.assign(h,{class:m});const M=fy(c,h);return r.parentNode?.replaceChild(M,r)};const gy=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];const vy=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];const xy=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];const Sy=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]];const yy=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const My=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const Ey=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const Ty=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]];const by=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];const wy=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];const Nu=({icons:r={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:a}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(c=>Yc(c,{nameAttr:e,icons:r,attrs:t})),a&&Array.from(n.querySelectorAll("template")).forEach(f=>Nu({icons:r,nameAttr:e,attrs:t,root:f.content,inTemplates:a})),e==="data-lucide"){const c=n.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(f=>Yc(f,{nameAttr:"icon-name",icons:r,attrs:t})))}};function Ay(r){const e=Math.max(-1,Math.min(1,r[0])),t=3*(1+Math.max(-1,Math.min(1,r[1]))),n=Math.tan(.4189*e);return[Math.atan(.33*n/(.33-.125*n)),Math.atan(.33*n/(.33+.125*n)),t*(1-.125*n/.33)/.05,t*(1+.125*n/.33)/.05]}class Kc{constructor(e,t,n,a){this.mj=e,this.initial=n,this.track=a,this.model=e.MjModel.from_xml_string(t),this.data=new e.MjData(this.model),this.steps=0;const o=e.mj_name2id(this.model,e.mjtObj.mjOBJ_JOINT.value,"front_left_steer");if(this.steerIndex=this.model.jnt_qposadr[o],a){this.cumulative=[0];const c=a.points;for(let f=0;f<c.length;f++)this.cumulative.push(this.cumulative.at(-1)+Math.hypot(c[(f+1)%c.length][0]-c[f][0],c[(f+1)%c.length][1]-c[f][1]));this.length=this.cumulative.at(-1)}this.reset(!1)}reset(e=!0){const t=this.data;if(this.mj.mj_resetData(this.model,t),t.qpos.set(this.initial.qpos),t.qvel.set(this.initial.qvel),e&&this.track){const n=this.track.points[0],a=this.track.points[1],o=Math.atan2(a[1]-n[1],a[0]-n[0]);t.qpos.set(n.slice(0,2)),t.qpos.set([Math.cos(o/2),0,0,Math.sin(o/2)],3)}this.mj.mj_forward(this.model,t),this.steps=0,this.failed=!1,this.previousAction=[0,0]}step(e){if(e.length!==2||!e.every(Number.isFinite))throw Error("Invalid action");this.data.ctrl.set(Ay(e));for(let t=0;t<10;t++)this.mj.mj_step(this.model,this.data);if(this.mj.mj_forward(this.model,this.data),this.steps++,this.previousAction=e.map(t=>Math.max(-1,Math.min(1,t))),this.track){const t=this.nearest(),n=this.data.qpos;this.failed=Math.abs(t.ey)>(t.ey>0?t.point[3]:t.point[2])-.26||1-2*(n[4]*n[4]+n[5]*n[5])<.5||!Array.from(n).every(Number.isFinite)}}get position(){return Array.from(this.data.qpos.subarray(0,3))}get yaw(){const[e,t,n,a]=this.data.qpos.subarray(3,7);return Math.atan2(2*(e*a+t*n),1-2*(n*n+a*a))}get speed(){return Math.hypot(this.data.qvel[0],this.data.qvel[1])}nearest(){let e={distance:1/0};const[t,n]=this.position,a=this.track.points;for(let o=0;o<a.length;o++){const c=a[o],f=a[(o+1)%a.length],p=f[0]-c[0],h=f[1]-c[1],g=Math.hypot(p,h);if(g<1e-8)continue;const y=Math.max(0,Math.min(1,((t-c[0])*p+(n-c[1])*h)/(g*g))),m=t-c[0]-y*p,M=n-c[1]-y*h,b=Math.hypot(m,M);b<e.distance&&(e={index:o,point:c,distance:b,ey:(p*M-h*m)/g,s:this.cumulative[o]+y*g,heading:Math.atan2(h,p)})}return e}point(e){e=(e%this.length+this.length)%this.length;let t=0,n=this.track.points.length;for(;t+1<n;){const f=Math.floor((t+n)/2);this.cumulative[f]<=e?t=f:n=f}const a=this.track.points[t],o=this.track.points[(t+1)%this.track.points.length],c=(e-this.cumulative[t])/(this.cumulative[t+1]-this.cumulative[t]);return[a[0]+c*(o[0]-a[0]),a[1]+c*(o[1]-a[1])]}observation(){const e=this.nearest(),t=Math.cos(this.yaw),n=Math.sin(this.yaw),a=this.data.qvel,o=t*a[0]+n*a[1],c=-n*a[0]+t*a[1],f=[e.ey,Math.sin(this.yaw-e.heading),Math.cos(this.yaw-e.heading),this.data.qpos[this.steerIndex]/.4189,o/8,a[5]/4,Math.atan2(c,Math.max(Math.abs(o),.1)),...this.previousAction];for(const p of[1,2,4,8,12,20]){const h=this.point(e.s+p),g=h[0]-this.data.qpos[0],y=h[1]-this.data.qpos[1];f.push((t*g+n*y)/p,(-n*g+t*y)/p)}return Float32Array.from(f,p=>Math.max(-5,Math.min(5,p)))}referenceAction(){const e=this.nearest(),t=this.track.points;let n=e.index,a=0;for(;a<1.2;){const h=t[n],g=t[(n+1)%t.length];a+=Math.hypot(g[0]-h[0],g[1]-h[1]),n=(n+1)%t.length}const o=t[n],c=o[0]-this.data.qpos[0],f=o[1]-this.data.qpos[1],p=-Math.sin(this.yaw)*c+Math.cos(this.yaw)*f;return[Math.max(-1,Math.min(1,Math.atan2(2*.33*p,c*c+f*f)/.4189)),-.5]}dispose(){this.data.delete(),this.model.delete()}}class Ry{constructor(e){this.layers=e.actor,this.metadata=e.metadata}predict(e){let t=Float32Array.from(e);if(t.length!==this.layers[0].w.length||!t.every(Number.isFinite))throw Error("Invalid observation");for(const n of this.layers){const a=new Float32Array(n.b.length);for(let o=0;o<a.length;o++){let c=n.b[o];for(let f=0;f<t.length;f++)c+=t[f]*n.w[f][o];a[o]=Math.tanh(c)}t=a}return Array.from(t)}}const Cy={Video:wy,ScanEye:Ty,Map:Sy,Play:My,Pause:yy,RotateCcw:Ey,ArrowLeft:gy,ArrowRight:vy,ArrowUp:xy,Square:by},Ou=()=>Nu({icons:Cy});Ou();const Bu=document.querySelector("#status"),Py=document.querySelector("#scene");let Nt,ku,Bi=!0,Ho="follow",fr="manual",dr=!1;const dn=new Set,gi=new Set,ni=new X_;ni.background=new pt("#cfdee5");const wn=new Sn(58,innerWidth/innerHeight,.025,700);wn.up.set(0,0,1);const Sr=new uy({antialias:!0,preserveDrawingBuffer:!0});Sr.setPixelRatio(Math.min(devicePixelRatio,2));Sr.setSize(innerWidth,innerHeight);Sr.shadowMap.enabled=!0;Py.append(Sr.domElement);ni.add(new ug("#ffffff","#718275",2.8));const zu=new hg("#fff7ed",3);zu.position.set(-5,-10,20);ni.add(zu);const Vu=new pn(new vr(500,500),new rl({color:"#7e9c87",roughness:1}));Vu.position.z=-.005;ni.add(Vu);const Gu=[];function Dy(r){const e=r.points,t=[],n=[],a=[],o=[];for(let p=0;p<e.length;p++){const h=e[p],g=e[(p+1)%e.length],y=g[0]-h[0],m=g[1]-h[1],M=Math.hypot(y,m)||1,b=[h[0]-m/M*h[3],h[1]+y/M*h[3],.002],P=[h[0]+m/M*h[2],h[1]-y/M*h[2],.002];a.push(b),o.push(P),t.push(...b,...P);const S=(p+1)%e.length;n.push(2*p,2*p+1,2*S,2*S,2*p+1,2*S+1)}const c=new cn;c.setAttribute("position",new Zt(t,3)),c.setIndex(n),c.computeVertexNormals(),ni.add(new pn(c,new rl({color:"#434b55",roughness:1,side:An})));for(const p of[a,o]){const h=new cn().setFromPoints([...p,p[0]].map(g=>new K(...g)));ni.add(new tg(h,new Mu({color:"#ffffff"})))}const f=new pn(new vr(.16,e[0][2]+e[0][3]),new el({color:"#ffffff",side:An}));f.position.set(e[0][0],e[0][1],.005),f.rotation.z=Math.atan2(e[1][1]-e[0][1],e[1][0]-e[0][0]),ni.add(f)}function Fy(){const r=Nt.model;for(let e=1;e<r.ngeom;e++){const t=Array.from(r.geom_size.subarray(e*3,e*3+3)),n=r.geom_type[e];let a;if(n===6)a=new gr(...t.map(p=>2*p));else if(n===5)a=new nl(t[0],t[0],2*t[1],24),a.rotateX(Math.PI/2);else if(n===4)a=new il(1,24,16),a.scale(...t);else continue;const o=r.geom_rgba.subarray(e*4,e*4+4),c=new rl({color:new pt(o[0],o[1],o[2]),roughness:.55}),f=new pn(a,c);ni.add(f),Gu.push({i:e,mesh:f})}}function kr(){if(!dr)return;const r=Nt.data;for(const{i:c,mesh:f}of Gu){f.position.fromArray(r.geom_xpos,c*3);const p=r.geom_xmat.subarray(c*9,c*9+9),h=new Ft().set(p[0],p[1],p[2],0,p[3],p[4],p[5],0,p[6],p[7],p[8],0,0,0,0,1);f.quaternion.setFromRotationMatrix(h)}const[e,t,n]=Nt.position,a=Math.cos(Nt.yaw),o=Math.sin(Nt.yaw);if(Ho==="follow")wn.position.set(e-1.5*a,t-1.5*o,n+.85),wn.lookAt(e+.55*a,t+.55*o,n+.1);else if(Ho==="driver")wn.position.set(e+.04*a,t+.04*o,n+.12),wn.lookAt(e+5*a,t+5*o,n+.1);else{const c=new _g().setFromPoints(Nt.track.points.map(g=>new ot(g[0],g[1]))),f=c.getCenter(new ot),p=c.getSize(new ot),h=Math.max(p.y,p.x/wn.aspect)*1.15;wn.position.set(f.x,f.y-.01,h),wn.lookAt(f.x,f.y,0)}document.querySelector("#speed").textContent=Nt.speed.toFixed(1),Sr.render(ni,wn)}function hr(r){Bi=r;const e=document.querySelector("#pause");e.innerHTML=`<i data-lucide="${Bi?"play":"pause"}"></i>`,e.title=e.ariaLabel=Bi?"Resume":"Pause",Ou(),Bu.textContent=Nt?.failed?"Off track":Bi?"Paused":fr==="reference"?"Reference controller":fr==="policy"?"PPO policy":"Manual"}function $s(){Nt.reset(),hr(!0),kr()}function Ly(){let r=(dn.has("a")||dn.has("arrowleft")||gi.has("left")?1:0)-(dn.has("d")||dn.has("arrowright")||gi.has("right")?1:0),e=dn.has("w")||dn.has("arrowup")||gi.has("gas")?1:-1;const t=Array.from(navigator.getGamepads?.()||[]).find(n=>n?.connected);if(t){const n=t.axes[0]||0;Math.abs(n)>.08&&(r=-n),e=2*(t.buttons[7]?.value||0)-1,(t.buttons[6]?.value||0)>.1&&(e=-1)}return(dn.has("s")||dn.has("arrowdown")||dn.has(" ")||gi.has("brake"))&&(e=-1),[r,e]}function Zc(){return fr==="policy"?ku.predict(Nt.observation()):fr==="reference"?Nt.referenceAction():Ly()}addEventListener("keydown",r=>{["SELECT","INPUT"].includes(document.activeElement.tagName)||["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," "].includes(r.key.toLowerCase())&&(r.preventDefault(),dn.add(r.key.toLowerCase()))});addEventListener("keyup",r=>dn.delete(r.key.toLowerCase()));addEventListener("blur",()=>{dn.clear(),gi.clear(),hr(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(dn.clear(),gi.clear(),hr(!0))});for(const r of document.querySelectorAll("[data-drive]"))r.onpointerdown=e=>{r.setPointerCapture(e.pointerId),gi.add(r.dataset.drive)},r.onpointerup=r.onpointercancel=()=>gi.delete(r.dataset.drive);document.querySelector("#pause").onclick=()=>{dr&&!Nt.failed&&hr(!Bi)};document.querySelector("#reset").onclick=()=>dr&&$s();document.querySelector("#mode").onchange=r=>{fr=r.target.value,dr&&$s()};for(const r of document.querySelectorAll("[data-view]"))r.onclick=()=>{Ho=r.dataset.view;for(const e of document.querySelectorAll("[data-view]"))e.setAttribute("aria-pressed",String(e===r));kr()};addEventListener("resize",()=>{wn.aspect=innerWidth/innerHeight,wn.updateProjectionMatrix(),Sr.setSize(innerWidth,innerHeight),kr()});async function ir(r,e=!0){const t=await fetch(`./sim/${r}`);if(!t.ok)throw Error(`${r}: HTTP ${t.status}`);return e?t.json():t.text()}try{let r=function(p){const h=Math.min((p-c)/1e3,.1);if(c=p,Bi)f=0;else for(f+=h;f>=.05;)if(Nt.step(Zc()),f-=.05,Nt.failed){hr(!0);break}kr(),requestAnimationFrame(r)};const e=await qm({locateFile:p=>p.endsWith(".wasm")?jm:p}),t=await ir("car.xml",!1),n=await ir("initial.json"),a=await ir("track.json"),o=await ir("manifest.json");if(e.mj_versionString()!==o.mujoco)throw Error("Physics version mismatch");if(o.policy_file){const p=await ir(o.policy_file);if(p.metadata.model_sha256!==o.model_sha256)throw Error("Policy model mismatch");ku=new Ry(p);const h=document.createElement("option");h.value="policy",h.textContent=p.metadata.expert_accepted?"PPO Expert":"PPO pilot",document.querySelector("#mode").append(h)}Nt=new Kc(e,t,n,a),Dy(a),Fy(),dr=!0,$s(),window.car={sim:Nt,manifest:o,setPaused:hr,reset:$s,snapshot:()=>({ready:dr,paused:Bi,position:Nt.position,speed:Nt.speed,steps:Nt.steps,failed:Nt.failed,mode:fr}),step:(p=1)=>{for(let h=0;h<p&&!Nt.failed;h++)Nt.step(Zc());return kr(),window.car.snapshot()},parity:async()=>{const p=await ir("native-reference.json"),h={};for(const[g,y]of Object.entries(p.cases)){const m=new Kc(e,t,p.initial);let M=0;for(const b of y)m.step(b.action),M=Math.max(M,...Array.from(m.data.qpos,(P,S)=>Math.abs(P-b.qpos[S])));h[g]=M,m.dispose()}return h}};let c=performance.now(),f=0;requestAnimationFrame(r)}catch(r){Bu.textContent="Physics unavailable",console.error(r)}const Iy=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
