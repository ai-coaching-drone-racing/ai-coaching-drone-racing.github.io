(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const E_="modulepreload",b_=function(i){return"/car/"+i},Mc={},w_=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let h=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=c?.nonce||c?.getAttribute("nonce");s=h(t.map(f=>{if(f=b_(f),f in Mc)return;Mc[f]=!0;const m=f.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const _=document.createElement("link");if(_.rel=m?"stylesheet":E_,m||(_.as="script"),_.crossOrigin="",_.href=f,d&&_.setAttribute("nonce",d),document.head.appendChild(_),m)return new Promise((v,E)=>{_.addEventListener("load",v),_.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return s.then(c=>{for(const d of c||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};var T_=(async function(i={}){var e,t=i,n=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!o&&!s;if(o){const{createRequire:r}=await w_(async()=>{const{createRequire:a}=await Promise.resolve().then(()=>yM);return{createRequire:a}},void 0);var d=r(import.meta.url)}var h="./this.program",f=(r,a)=>{throw a},m=import.meta.url,g="";function _(r){return t.locateFile?t.locateFile(r,g):g+r}var v,E;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var R=process.versions.node,M=R.split(".").slice(0,3);if(M=M[0]*1e4+M[1]*100+M[2].split("-")[0]*1,M<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+R+")");var S=d("fs");m.startsWith("file:")&&(g=d("path").dirname(d("url").fileURLToPath(m))+"/"),E=a=>{a=V(a)?new URL(a):a;var l=S.readFileSync(a);return P(Buffer.isBuffer(l)),l},v=async(a,l=!0)=>{a=V(a)?new URL(a):a;var u=S.readFileSync(a,l?void 0:"utf8");return P(l?Buffer.isBuffer(u):typeof u=="string"),u},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(a,l)=>{throw process.exitCode=a,l}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||s){try{g=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");s&&(E=r=>{var a=new XMLHttpRequest;return a.open("GET",r,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),v=async r=>{if(V(r))return new Promise((l,u)=>{var p=new XMLHttpRequest;p.open("GET",r,!0),p.responseType="arraybuffer",p.onload=()=>{if(p.status==200||p.status==0&&p.response){l(p.response);return}u(p.status)},p.onerror=u,p.send(null)});var a=await fetch(r,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var D=console.log.bind(console),F=console.error.bind(console);P(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var I;typeof WebAssembly!="object"&&F("no native wasm support detected");var z=!1;function P(r,a){r||G("Assertion failed"+(a?": "+a:""))}var V=r=>r.startsWith("file://");function A(){var r=Ia();P((r&3)==0),r==0&&(r+=4),Ee[r>>2]=34821223,Ee[r+4>>2]=2310721022,Ee[0]=1668509029}function L(){if(!z){var r=Ia();r==0&&(r+=4);var a=Ee[r>>2],l=Ee[r+4>>2];(a!=34821223||l!=2310721022)&&G(`Stack overflow! Stack cookie has been overwritten at ${Ce(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Ce(l)} ${Ce(a)}`),Ee[0]!=1668509029&&G("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class O extends Error{}class B extends O{}class Y extends O{constructor(a){super(a),this.excPtr=a;const l=oc(a);this.name=l[0],this.message=l[1]}}(()=>{var r=new Int16Array(1),a=new Int8Array(r.buffer);if(r[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function J(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){G(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function K(r){return()=>P(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function ne(r){Object.getOwnPropertyDescriptor(t,r)&&G(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function Z(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function ie(r,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){a()}})}function pe(r,a){ie(r,()=>{Le(`\`${r}\` is not longer defined by emscripten. ${a}`)})}pe("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),pe("asm","Please use wasmExports instead");function ge(r){ie(r,()=>{var a=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,l=r;l.startsWith("_")||(l="$"+r),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${l}')`,Z(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Le(a)}),Re(r)}function Re(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var a=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Z(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),G(a)}})}var Ue,Pe,Ye,Je,at,le,Se,se,Ee,Ge,$e,Tt,ct,ht=!1;function Et(){var r=Ye.buffer;Je=new Int8Array(r),le=new Int16Array(r),at=new Uint8Array(r),Se=new Uint16Array(r),se=new Int32Array(r),Ee=new Uint32Array(r),Ge=new Float32Array(r),$e=new Float64Array(r),Tt=new BigInt64Array(r),ct=new BigUint64Array(r)}P(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function et(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)we(t.preRun.shift());J("preRun"),Be(W)}function It(){P(!ht),ht=!0,L(),!t.noFSInit&&!y.initialized&&y.init(),Ii.__wasm_call_ctors(),y.ignorePermissions=!1}function H(){if(L(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)tt(t.postRun.shift());J("postRun"),Be(De)}var Rt=0,ut=null,_t={},Ie=null;function U(r){Rt++,t.monitorRunDependencies?.(Rt),r?(P(!_t[r]),_t[r]=1,Ie===null&&typeof setInterval<"u"&&(Ie=setInterval(()=>{if(z){clearInterval(Ie),Ie=null;return}var a=!1;for(var l in _t)a||(a=!0,F("still waiting on run dependencies:")),F(`dependency: ${l}`);a&&F("(end of list)")},1e4))):F("warning: run dependency added without ID")}function b(r){if(Rt--,t.monitorRunDependencies?.(Rt),r?(P(_t[r]),delete _t[r]):F("warning: run dependency removed without ID"),Rt==0&&(Ie!==null&&(clearInterval(Ie),Ie=null),ut)){var a=ut;ut=null,a()}}function G(r){t.onAbort?.(r),r="Aborted("+r+")",F(r),z=!0;var a=new WebAssembly.RuntimeError(r);throw Pe?.(a),a}function ae(r,a){return(...l)=>{P(ht,`native function \`${r}\` called before runtime initialization`);var u=Ii[r];return P(u,`exported native function \`${r}\` not found`),P(l.length<=a,`native function \`${r}\` called with ${l.length} args but expects ${a}`),u(...l)}}var he;function oe(){return t.locateFile?_("mujoco.wasm"):new URL("/car/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Ne(r){if(r==he&&I)return new Uint8Array(I);if(E)return E(r);throw"both async and sync fetching of the wasm failed"}async function be(r){if(!I)try{var a=await v(r);return new Uint8Array(a)}catch{}return Ne(r)}async function He(r,a){try{var l=await be(r),u=await WebAssembly.instantiate(l,a);return u}catch(p){F(`failed to asynchronously prepare wasm: ${p}`),V(he)&&F(`warning: Loading from a file URI (${he}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),G(p)}}async function Xe(r,a,l){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!V(a)&&!o)try{var u=fetch(a,{credentials:"same-origin"}),p=await WebAssembly.instantiateStreaming(u,l);return p}catch(x){F(`wasm streaming compile failed: ${x}`),F("falling back to ArrayBuffer instantiation")}return He(a,l)}function xe(){return{env:xc,wasi_snapshot_preview1:xc}}async function Me(){function r(w,T){return Ii=w.exports,Ye=Ii.memory,P(Ye,"memory not found in wasm exports"),Et(),Ms=Ii.__indirect_function_table,P(Ms,"table not found in wasm exports"),wh(Ii),b("wasm-instantiate"),Ii}U("wasm-instantiate");var a=t;function l(w){return P(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,r(w.instance)}var u=xe();if(t.instantiateWasm)return new Promise((w,T)=>{try{t.instantiateWasm(u,(N,j)=>{w(r(N,j))})}catch(N){F(`Module.instantiateWasm callback failed with error: ${N}`),T(N)}});he??=oe();var p=await Xe(I,he,u),x=l(p);return x}class Oe{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`,this.status=a}}var Be=r=>{for(;r.length>0;)r.shift()(t)},De=[],tt=r=>De.push(r),W=[],we=r=>W.push(r),ye=!0,Ce=r=>(P(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),X=r=>hc(r),k=()=>mc(),Le=r=>{Le.shown||={},Le.shown[r]||(Le.shown[r]=1,o&&(r="warning: "+r),F(r))},je=typeof TextDecoder<"u"?new TextDecoder:void 0,gt=(r,a=0,l=NaN)=>{for(var u=a+l,p=a;r[p]&&!(p>=u);)++p;if(p-a>16&&r.buffer&&je)return je.decode(r.subarray(a,p));for(var x="";a<p;){var w=r[a++];if(!(w&128)){x+=String.fromCharCode(w);continue}var T=r[a++]&63;if((w&224)==192){x+=String.fromCharCode((w&31)<<6|T);continue}var N=r[a++]&63;if((w&240)==224?w=(w&15)<<12|T<<6|N:((w&248)!=240&&Le("Invalid UTF-8 leading byte "+Ce(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|T<<12|N<<6|r[a++]&63),w<65536)x+=String.fromCharCode(w);else{var j=w-65536;x+=String.fromCharCode(55296|j>>10,56320|j&1023)}}return x},st=(r,a)=>(P(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?gt(at,r,a):""),An=(r,a,l,u)=>G(`Assertion failed: ${st(r)}, at: `+[a?st(a):"unknown filename",l,u?st(u):"unknown function"]),Ht=[],Ci=0,Ir=r=>{var a=new Mn(r);return a.get_caught()||(a.set_caught(!0),Ci--),a.set_rethrown(!1),Ht.push(a),Rs(r),vc(r)},xa=()=>{if(!Ht.length)return 0;var r=Ht[Ht.length-1];return Rs(r.excPtr),r.excPtr},yn=0,ls=()=>{_e(0,0),P(Ht.length>0);var r=Ht.pop();Ua(r.excPtr),yn=0};class Mn{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Ee[this.ptr+4>>2]=a}get_type(){return Ee[this.ptr+4>>2]}set_destructor(a){Ee[this.ptr+8>>2]=a}get_destructor(){return Ee[this.ptr+8>>2]}set_caught(a){a=a?1:0,Je[this.ptr+12]=a}get_caught(){return Je[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,Je[this.ptr+13]=a}get_rethrown(){return Je[this.ptr+13]!=0}init(a,l){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(l)}set_adjusted_ptr(a){Ee[this.ptr+16>>2]=a}get_adjusted_ptr(){return Ee[this.ptr+16>>2]}}var hi=r=>dc(r),tr=r=>{var a=yn?.excPtr;if(!a)return hi(0),0;var l=new Mn(a);l.set_adjusted_ptr(a);var u=l.get_type();if(!u)return hi(0),a;for(var p of r){if(p===0||p===u)break;var x=l.ptr+16;if(gc(p,u,x))return hi(p),a}return hi(u),a},cs=()=>tr([]),nr=r=>tr([r]),us=(r,a)=>tr([r,a]),Ri=()=>{var r=Ht.pop();r||G("no exception to throw");var a=r.excPtr;throw r.get_rethrown()||(Ht.push(r),r.set_rethrown(!0),r.set_caught(!1),Ci++),yn=new Y(a),yn},ds=r=>{if(r){var a=new Mn(r);Ht.push(a),a.set_rethrown(!0),Ri()}},fs=(r,a,l)=>{var u=new Mn(r);throw u.init(a,l),yn=new Y(r),Ci++,yn},Sa=()=>Ci,ya=r=>{throw yn||(yn=new Y(r)),yn},bt={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(r).slice(1)},normalizeArray:(r,a)=>{for(var l=0,u=r.length-1;u>=0;u--){var p=r[u];p==="."?r.splice(u,1):p===".."?(r.splice(u,1),l++):l&&(r.splice(u,1),l--)}if(a)for(;l;l--)r.unshift("..");return r},normalize:r=>{var a=bt.isAbs(r),l=r.slice(-1)==="/";return r=bt.normalizeArray(r.split("/").filter(u=>!!u),!a).join("/"),!r&&!a&&(r="."),r&&l&&(r+="/"),(a?"/":"")+r},dirname:r=>{var a=bt.splitPath(r),l=a[0],u=a[1];return!l&&!u?".":(u&&(u=u.slice(0,-1)),l+u)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>bt.normalize(r.join("/")),join2:(r,a)=>bt.normalize(r+"/"+a)},Ma=()=>{if(o){var r=d("crypto");return a=>r.randomFillSync(a)}return a=>crypto.getRandomValues(a)},hs=r=>{(hs=Ma())(r)},pi={resolve:(...r)=>{for(var a="",l=!1,u=r.length-1;u>=-1&&!l;u--){var p=u>=0?r[u]:y.cwd();if(typeof p!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!p)return"";a=p+"/"+a,l=bt.isAbs(p)}return a=bt.normalizeArray(a.split("/").filter(x=>!!x),!l).join("/"),(l?"/":"")+a||"."},relative:(r,a)=>{r=pi.resolve(r).slice(1),a=pi.resolve(a).slice(1);function l(j){for(var ee=0;ee<j.length&&j[ee]==="";ee++);for(var ce=j.length-1;ce>=0&&j[ce]==="";ce--);return ee>ce?[]:j.slice(ee,ce-ee+1)}for(var u=l(r.split("/")),p=l(a.split("/")),x=Math.min(u.length,p.length),w=x,T=0;T<x;T++)if(u[T]!==p[T]){w=T;break}for(var N=[],T=w;T<u.length;T++)N.push("..");return N=N.concat(p.slice(w)),N.join("/")}},C=[],$=r=>{for(var a=0,l=0;l<r.length;++l){var u=r.charCodeAt(l);u<=127?a++:u<=2047?a+=2:u>=55296&&u<=57343?(a+=4,++l):a+=3}return a},re=(r,a,l,u)=>{if(P(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(u>0))return 0;for(var p=l,x=l+u-1,w=0;w<r.length;++w){var T=r.codePointAt(w);if(T<=127){if(l>=x)break;a[l++]=T}else if(T<=2047){if(l+1>=x)break;a[l++]=192|T>>6,a[l++]=128|T&63}else if(T<=65535){if(l+2>=x)break;a[l++]=224|T>>12,a[l++]=128|T>>6&63,a[l++]=128|T&63}else{if(l+3>=x)break;T>1114111&&Le("Invalid Unicode code point "+Ce(T)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[l++]=240|T>>18,a[l++]=128|T>>12&63,a[l++]=128|T>>6&63,a[l++]=128|T&63,w++}}return a[l]=0,l-p},te=(r,a,l)=>{var u=$(r)+1,p=new Array(u),x=re(r,p,0,p.length);return p.length=x,p},Q=()=>{if(!C.length){var r=null;if(o){var a=256,l=Buffer.alloc(a),u=0,p=process.stdin.fd;try{u=S.readSync(p,l,0,a)}catch(x){if(x.toString().includes("EOF"))u=0;else throw x}u>0&&(r=l.slice(0,u).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;C=te(r)}return C.shift()},Te={ttys:[],init(){},shutdown(){},register(r,a){Te.ttys[r]={input:[],output:[],ops:a},y.registerDevice(r,Te.stream_ops)},stream_ops:{open(r){var a=Te.ttys[r.node.rdev];if(!a)throw new y.ErrnoError(43);r.tty=a,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,a,l,u,p){if(!r.tty||!r.tty.ops.get_char)throw new y.ErrnoError(60);for(var x=0,w=0;w<u;w++){var T;try{T=r.tty.ops.get_char(r.tty)}catch{throw new y.ErrnoError(29)}if(T===void 0&&x===0)throw new y.ErrnoError(6);if(T==null)break;x++,a[l+w]=T}return x&&(r.node.atime=Date.now()),x},write(r,a,l,u,p){if(!r.tty||!r.tty.ops.put_char)throw new y.ErrnoError(60);try{for(var x=0;x<u;x++)r.tty.ops.put_char(r.tty,a[l+x])}catch{throw new y.ErrnoError(29)}return u&&(r.node.mtime=r.node.ctime=Date.now()),x}},default_tty_ops:{get_char(r){return Q()},put_char(r,a){a===null||a===10?(D(gt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(D(gt(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,a,l){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,a){a===null||a===10?(F(gt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(F(gt(r.output)),r.output=[])}}},Fe=r=>{G("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},fe={ops_table:null,mount(r){return fe.createNode(null,"/",16895,0)},createNode(r,a,l,u){if(y.isBlkdev(l)||y.isFIFO(l))throw new y.ErrnoError(63);fe.ops_table||={dir:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr,lookup:fe.node_ops.lookup,mknod:fe.node_ops.mknod,rename:fe.node_ops.rename,unlink:fe.node_ops.unlink,rmdir:fe.node_ops.rmdir,readdir:fe.node_ops.readdir,symlink:fe.node_ops.symlink},stream:{llseek:fe.stream_ops.llseek}},file:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr},stream:{llseek:fe.stream_ops.llseek,read:fe.stream_ops.read,write:fe.stream_ops.write,mmap:fe.stream_ops.mmap,msync:fe.stream_ops.msync}},link:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr,readlink:fe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr},stream:y.chrdev_stream_ops}};var p=y.createNode(r,a,l,u);return y.isDir(p.mode)?(p.node_ops=fe.ops_table.dir.node,p.stream_ops=fe.ops_table.dir.stream,p.contents={}):y.isFile(p.mode)?(p.node_ops=fe.ops_table.file.node,p.stream_ops=fe.ops_table.file.stream,p.usedBytes=0,p.contents=null):y.isLink(p.mode)?(p.node_ops=fe.ops_table.link.node,p.stream_ops=fe.ops_table.link.stream):y.isChrdev(p.mode)&&(p.node_ops=fe.ops_table.chrdev.node,p.stream_ops=fe.ops_table.chrdev.stream),p.atime=p.mtime=p.ctime=Date.now(),r&&(r.contents[a]=p,r.atime=r.mtime=r.ctime=p.atime),p},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,a){var l=r.contents?r.contents.length:0;if(!(l>=a)){var u=1024*1024;a=Math.max(a,l*(l<u?2:1.125)>>>0),l!=0&&(a=Math.max(a,256));var p=r.contents;r.contents=new Uint8Array(a),r.usedBytes>0&&r.contents.set(p.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,a){if(r.usedBytes!=a)if(a==0)r.contents=null,r.usedBytes=0;else{var l=r.contents;r.contents=new Uint8Array(a),l&&r.contents.set(l.subarray(0,Math.min(a,r.usedBytes))),r.usedBytes=a}},node_ops:{getattr(r){var a={};return a.dev=y.isChrdev(r.mode)?r.id:1,a.ino=r.id,a.mode=r.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=r.rdev,y.isDir(r.mode)?a.size=4096:y.isFile(r.mode)?a.size=r.usedBytes:y.isLink(r.mode)?a.size=r.link.length:a.size=0,a.atime=new Date(r.atime),a.mtime=new Date(r.mtime),a.ctime=new Date(r.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(r,a){for(const l of["mode","atime","mtime","ctime"])a[l]!=null&&(r[l]=a[l]);a.size!==void 0&&fe.resizeFileStorage(r,a.size)},lookup(r,a){throw new y.ErrnoError(44)},mknod(r,a,l,u){return fe.createNode(r,a,l,u)},rename(r,a,l){var u;try{u=y.lookupNode(a,l)}catch{}if(u){if(y.isDir(r.mode))for(var p in u.contents)throw new y.ErrnoError(55);y.hashRemoveNode(u)}delete r.parent.contents[r.name],a.contents[l]=r,r.name=l,a.ctime=a.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,a){delete r.contents[a],r.ctime=r.mtime=Date.now()},rmdir(r,a){var l=y.lookupNode(r,a);for(var u in l.contents)throw new y.ErrnoError(55);delete r.contents[a],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,a,l){var u=fe.createNode(r,a,41471,0);return u.link=l,u},readlink(r){if(!y.isLink(r.mode))throw new y.ErrnoError(28);return r.link}},stream_ops:{read(r,a,l,u,p){var x=r.node.contents;if(p>=r.node.usedBytes)return 0;var w=Math.min(r.node.usedBytes-p,u);if(P(w>=0),w>8&&x.subarray)a.set(x.subarray(p,p+w),l);else for(var T=0;T<w;T++)a[l+T]=x[p+T];return w},write(r,a,l,u,p,x){if(P(!(a instanceof ArrayBuffer)),a.buffer===Je.buffer&&(x=!1),!u)return 0;var w=r.node;if(w.mtime=w.ctime=Date.now(),a.subarray&&(!w.contents||w.contents.subarray)){if(x)return P(p===0,"canOwn must imply no weird position inside the file"),w.contents=a.subarray(l,l+u),w.usedBytes=u,u;if(w.usedBytes===0&&p===0)return w.contents=a.slice(l,l+u),w.usedBytes=u,u;if(p+u<=w.usedBytes)return w.contents.set(a.subarray(l,l+u),p),u}if(fe.expandFileStorage(w,p+u),w.contents.subarray&&a.subarray)w.contents.set(a.subarray(l,l+u),p);else for(var T=0;T<u;T++)w.contents[p+T]=a[l+T];return w.usedBytes=Math.max(w.usedBytes,p+u),u},llseek(r,a,l){var u=a;if(l===1?u+=r.position:l===2&&y.isFile(r.node.mode)&&(u+=r.node.usedBytes),u<0)throw new y.ErrnoError(28);return u},mmap(r,a,l,u,p){if(!y.isFile(r.node.mode))throw new y.ErrnoError(43);var x,w,T=r.node.contents;if(!(p&2)&&T&&T.buffer===Je.buffer)w=!1,x=T.byteOffset;else{if(w=!0,x=Fe(),!x)throw new y.ErrnoError(48);T&&((l>0||l+a<T.length)&&(T.subarray?T=T.subarray(l,l+a):T=Array.prototype.slice.call(T,l,l+a)),Je.set(T,x))}return{ptr:x,allocated:w}},msync(r,a,l,u,p){return fe.stream_ops.write(r,a,0,u,l,!1),0}}},ke=async r=>{var a=await v(r);return P(a,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(a)},ze=(...r)=>y.createDataFile(...r),Ke=r=>{for(var a=r;;){if(!_t[r])return r;r=a+Math.random()}},Qe=[],Ve=(r,a,l,u)=>{typeof Browser<"u"&&Browser.init();var p=!1;return Qe.forEach(x=>{p||x.canHandle(a)&&(x.handle(r,a,l,u),p=!0)}),p},Mt=(r,a,l,u,p,x,w,T,N,j)=>{var ee=a?pi.resolve(bt.join2(r,a)):r,ce=Ke(`cp ${ee}`);function de(ue){function me(We){j?.(),T||ze(r,a,We,u,p,N),x?.(),b(ce)}Ve(ue,ee,me,()=>{w?.(),b(ce)})||me(ue)}U(ce),typeof l=="string"?ke(l).then(de,w):de(l)},Ut=r=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},l=a[r];if(typeof l>"u")throw new Error(`Unknown file open mode: ${r}`);return l},Lt=(r,a)=>{var l=0;return r&&(l|=365),a&&(l|=146),l},wt=r=>st(uc(r)),Gt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},y={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(r){super(ht?wt(r):""),this.errno=r;for(var a in Gt)if(Gt[a]===r){this.code=a;break}}},FSStream:class{shared={};get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(r,a,l,u){r||(r=this),this.parent=r,this.mount=r.mount,this.id=y.nextInode++,this.name=a,this.mode=l,this.rdev=u,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return y.isDir(this.mode)}get isDevice(){return y.isChrdev(this.mode)}},lookupPath(r,a={}){if(!r)throw new y.ErrnoError(44);a.follow_mount??=!0,bt.isAbs(r)||(r=y.cwd()+"/"+r);e:for(var l=0;l<40;l++){for(var u=r.split("/").filter(j=>!!j),p=y.root,x="/",w=0;w<u.length;w++){var T=w===u.length-1;if(T&&a.parent)break;if(u[w]!=="."){if(u[w]===".."){if(x=bt.dirname(x),y.isRoot(p)){r=x+"/"+u.slice(w+1).join("/");continue e}else p=p.parent;continue}x=bt.join2(x,u[w]);try{p=y.lookupNode(p,u[w])}catch(j){if(j?.errno===44&&T&&a.noent_okay)return{path:x};throw j}if(y.isMountpoint(p)&&(!T||a.follow_mount)&&(p=p.mounted.root),y.isLink(p.mode)&&(!T||a.follow)){if(!p.node_ops.readlink)throw new y.ErrnoError(52);var N=p.node_ops.readlink(p);bt.isAbs(N)||(N=bt.dirname(x)+"/"+N),r=N+"/"+u.slice(w+1).join("/");continue e}}}return{path:x,node:p}}throw new y.ErrnoError(32)},getPath(r){for(var a;;){if(y.isRoot(r)){var l=r.mount.mountpoint;return a?l[l.length-1]!=="/"?`${l}/${a}`:l+a:l}a=a?`${r.name}/${a}`:r.name,r=r.parent}},hashName(r,a){for(var l=0,u=0;u<a.length;u++)l=(l<<5)-l+a.charCodeAt(u)|0;return(r+l>>>0)%y.nameTable.length},hashAddNode(r){var a=y.hashName(r.parent.id,r.name);r.name_next=y.nameTable[a],y.nameTable[a]=r},hashRemoveNode(r){var a=y.hashName(r.parent.id,r.name);if(y.nameTable[a]===r)y.nameTable[a]=r.name_next;else for(var l=y.nameTable[a];l;){if(l.name_next===r){l.name_next=r.name_next;break}l=l.name_next}},lookupNode(r,a){var l=y.mayLookup(r);if(l)throw new y.ErrnoError(l);for(var u=y.hashName(r.id,a),p=y.nameTable[u];p;p=p.name_next){var x=p.name;if(p.parent.id===r.id&&x===a)return p}return y.lookup(r,a)},createNode(r,a,l,u){P(typeof r=="object");var p=new y.FSNode(r,a,l,u);return y.hashAddNode(p),p},destroyNode(r){y.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var a=["r","w","rw"][r&3];return r&512&&(a+="w"),a},nodePermissions(r,a){return y.ignorePermissions?0:a.includes("r")&&!(r.mode&292)||a.includes("w")&&!(r.mode&146)||a.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!y.isDir(r.mode))return 54;var a=y.nodePermissions(r,"x");return a||(r.node_ops.lookup?0:2)},mayCreate(r,a){if(!y.isDir(r.mode))return 54;try{var l=y.lookupNode(r,a);return 20}catch{}return y.nodePermissions(r,"wx")},mayDelete(r,a,l){var u;try{u=y.lookupNode(r,a)}catch(x){return x.errno}var p=y.nodePermissions(r,"wx");if(p)return p;if(l){if(!y.isDir(u.mode))return 54;if(y.isRoot(u)||y.getPath(u)===y.cwd())return 10}else if(y.isDir(u.mode))return 31;return 0},mayOpen(r,a){return r?y.isLink(r.mode)?32:y.isDir(r.mode)&&(y.flagsToPermissionString(a)!=="r"||a&576)?31:y.nodePermissions(r,y.flagsToPermissionString(a)):44},checkOpExists(r,a){if(!r)throw new y.ErrnoError(a);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=y.MAX_OPEN_FDS;r++)if(!y.streams[r])return r;throw new y.ErrnoError(33)},getStreamChecked(r){var a=y.getStream(r);if(!a)throw new y.ErrnoError(8);return a},getStream:r=>y.streams[r],createStream(r,a=-1){return P(a>=-1),r=Object.assign(new y.FSStream,r),a==-1&&(a=y.nextfd()),r.fd=a,y.streams[a]=r,r},closeStream(r){y.streams[r]=null},dupStream(r,a=-1){var l=y.createStream(r,a);return l.stream_ops?.dup?.(l),l},doSetAttr(r,a,l){var u=r?.stream_ops.setattr,p=u?r:a;u??=a.node_ops.setattr,y.checkOpExists(u,63),u(p,l)},chrdev_stream_ops:{open(r){var a=y.getDevice(r.node.rdev);r.stream_ops=a.stream_ops,r.stream_ops.open?.(r)},llseek(){throw new y.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,a)=>r<<8|a,registerDevice(r,a){y.devices[r]={stream_ops:a}},getDevice:r=>y.devices[r],getMounts(r){for(var a=[],l=[r];l.length;){var u=l.pop();a.push(u),l.push(...u.mounts)}return a},syncfs(r,a){typeof r=="function"&&(a=r,r=!1),y.syncFSRequests++,y.syncFSRequests>1&&F(`warning: ${y.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var l=y.getMounts(y.root.mount),u=0;function p(w){return P(y.syncFSRequests>0),y.syncFSRequests--,a(w)}function x(w){if(w)return x.errored?void 0:(x.errored=!0,p(w));++u>=l.length&&p(null)}l.forEach(w=>{if(!w.type.syncfs)return x(null);w.type.syncfs(w,r,x)})},mount(r,a,l){if(typeof r=="string")throw r;var u=l==="/",p=!l,x;if(u&&y.root)throw new y.ErrnoError(10);if(!u&&!p){var w=y.lookupPath(l,{follow_mount:!1});if(l=w.path,x=w.node,y.isMountpoint(x))throw new y.ErrnoError(10);if(!y.isDir(x.mode))throw new y.ErrnoError(54)}var T={type:r,opts:a,mountpoint:l,mounts:[]},N=r.mount(T);return N.mount=T,T.root=N,u?y.root=N:x&&(x.mounted=T,x.mount&&x.mount.mounts.push(T)),N},unmount(r){var a=y.lookupPath(r,{follow_mount:!1});if(!y.isMountpoint(a.node))throw new y.ErrnoError(28);var l=a.node,u=l.mounted,p=y.getMounts(u);Object.keys(y.nameTable).forEach(w=>{for(var T=y.nameTable[w];T;){var N=T.name_next;p.includes(T.mount)&&y.destroyNode(T),T=N}}),l.mounted=null;var x=l.mount.mounts.indexOf(u);P(x!==-1),l.mount.mounts.splice(x,1)},lookup(r,a){return r.node_ops.lookup(r,a)},mknod(r,a,l){var u=y.lookupPath(r,{parent:!0}),p=u.node,x=bt.basename(r);if(!x)throw new y.ErrnoError(28);if(x==="."||x==="..")throw new y.ErrnoError(20);var w=y.mayCreate(p,x);if(w)throw new y.ErrnoError(w);if(!p.node_ops.mknod)throw new y.ErrnoError(63);return p.node_ops.mknod(p,x,a,l)},statfs(r){return y.statfsNode(y.lookupPath(r,{follow:!0}).node)},statfsStream(r){return y.statfsNode(r.node)},statfsNode(r){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:y.nextInode,ffree:y.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(a,r.node_ops.statfs(r.mount.opts.root)),a},create(r,a=438){return a&=4095,a|=32768,y.mknod(r,a,0)},mkdir(r,a=511){return a&=1023,a|=16384,y.mknod(r,a,0)},mkdirTree(r,a){var l=r.split("/"),u="";for(var p of l)if(p){(u||bt.isAbs(r))&&(u+="/"),u+=p;try{y.mkdir(u,a)}catch(x){if(x.errno!=20)throw x}}},mkdev(r,a,l){return typeof l>"u"&&(l=a,a=438),a|=8192,y.mknod(r,a,l)},symlink(r,a){if(!pi.resolve(r))throw new y.ErrnoError(44);var l=y.lookupPath(a,{parent:!0}),u=l.node;if(!u)throw new y.ErrnoError(44);var p=bt.basename(a),x=y.mayCreate(u,p);if(x)throw new y.ErrnoError(x);if(!u.node_ops.symlink)throw new y.ErrnoError(63);return u.node_ops.symlink(u,p,r)},rename(r,a){var l=bt.dirname(r),u=bt.dirname(a),p=bt.basename(r),x=bt.basename(a),w,T,N;if(w=y.lookupPath(r,{parent:!0}),T=w.node,w=y.lookupPath(a,{parent:!0}),N=w.node,!T||!N)throw new y.ErrnoError(44);if(T.mount!==N.mount)throw new y.ErrnoError(75);var j=y.lookupNode(T,p),ee=pi.relative(r,u);if(ee.charAt(0)!==".")throw new y.ErrnoError(28);if(ee=pi.relative(a,l),ee.charAt(0)!==".")throw new y.ErrnoError(55);var ce;try{ce=y.lookupNode(N,x)}catch{}if(j!==ce){var de=y.isDir(j.mode),ue=y.mayDelete(T,p,de);if(ue)throw new y.ErrnoError(ue);if(ue=ce?y.mayDelete(N,x,de):y.mayCreate(N,x),ue)throw new y.ErrnoError(ue);if(!T.node_ops.rename)throw new y.ErrnoError(63);if(y.isMountpoint(j)||ce&&y.isMountpoint(ce))throw new y.ErrnoError(10);if(N!==T&&(ue=y.nodePermissions(T,"w"),ue))throw new y.ErrnoError(ue);y.hashRemoveNode(j);try{T.node_ops.rename(j,N,x),j.parent=N}catch(me){throw me}finally{y.hashAddNode(j)}}},rmdir(r){var a=y.lookupPath(r,{parent:!0}),l=a.node,u=bt.basename(r),p=y.lookupNode(l,u),x=y.mayDelete(l,u,!0);if(x)throw new y.ErrnoError(x);if(!l.node_ops.rmdir)throw new y.ErrnoError(63);if(y.isMountpoint(p))throw new y.ErrnoError(10);l.node_ops.rmdir(l,u),y.destroyNode(p)},readdir(r){var a=y.lookupPath(r,{follow:!0}),l=a.node,u=y.checkOpExists(l.node_ops.readdir,54);return u(l)},unlink(r){var a=y.lookupPath(r,{parent:!0}),l=a.node;if(!l)throw new y.ErrnoError(44);var u=bt.basename(r),p=y.lookupNode(l,u),x=y.mayDelete(l,u,!1);if(x)throw new y.ErrnoError(x);if(!l.node_ops.unlink)throw new y.ErrnoError(63);if(y.isMountpoint(p))throw new y.ErrnoError(10);l.node_ops.unlink(l,u),y.destroyNode(p)},readlink(r){var a=y.lookupPath(r),l=a.node;if(!l)throw new y.ErrnoError(44);if(!l.node_ops.readlink)throw new y.ErrnoError(28);return l.node_ops.readlink(l)},stat(r,a){var l=y.lookupPath(r,{follow:!a}),u=l.node,p=y.checkOpExists(u.node_ops.getattr,63);return p(u)},fstat(r){var a=y.getStreamChecked(r),l=a.node,u=a.stream_ops.getattr,p=u?a:l;return u??=l.node_ops.getattr,y.checkOpExists(u,63),u(p)},lstat(r){return y.stat(r,!0)},doChmod(r,a,l,u){y.doSetAttr(r,a,{mode:l&4095|a.mode&-4096,ctime:Date.now(),dontFollow:u})},chmod(r,a,l){var u;if(typeof r=="string"){var p=y.lookupPath(r,{follow:!l});u=p.node}else u=r;y.doChmod(null,u,a,l)},lchmod(r,a){y.chmod(r,a,!0)},fchmod(r,a){var l=y.getStreamChecked(r);y.doChmod(l,l.node,a,!1)},doChown(r,a,l){y.doSetAttr(r,a,{timestamp:Date.now(),dontFollow:l})},chown(r,a,l,u){var p;if(typeof r=="string"){var x=y.lookupPath(r,{follow:!u});p=x.node}else p=r;y.doChown(null,p,u)},lchown(r,a,l){y.chown(r,a,l,!0)},fchown(r,a,l){var u=y.getStreamChecked(r);y.doChown(u,u.node,!1)},doTruncate(r,a,l){if(y.isDir(a.mode))throw new y.ErrnoError(31);if(!y.isFile(a.mode))throw new y.ErrnoError(28);var u=y.nodePermissions(a,"w");if(u)throw new y.ErrnoError(u);y.doSetAttr(r,a,{size:l,timestamp:Date.now()})},truncate(r,a){if(a<0)throw new y.ErrnoError(28);var l;if(typeof r=="string"){var u=y.lookupPath(r,{follow:!0});l=u.node}else l=r;y.doTruncate(null,l,a)},ftruncate(r,a){var l=y.getStreamChecked(r);if(a<0||(l.flags&2097155)===0)throw new y.ErrnoError(28);y.doTruncate(l,l.node,a)},utime(r,a,l){var u=y.lookupPath(r,{follow:!0}),p=u.node,x=y.checkOpExists(p.node_ops.setattr,63);x(p,{atime:a,mtime:l})},open(r,a,l=438){if(r==="")throw new y.ErrnoError(44);a=typeof a=="string"?Ut(a):a,a&64?l=l&4095|32768:l=0;var u,p;if(typeof r=="object")u=r;else{p=r.endsWith("/");var x=y.lookupPath(r,{follow:!(a&131072),noent_okay:!0});u=x.node,r=x.path}var w=!1;if(a&64)if(u){if(a&128)throw new y.ErrnoError(20)}else{if(p)throw new y.ErrnoError(31);u=y.mknod(r,l|511,0),w=!0}if(!u)throw new y.ErrnoError(44);if(y.isChrdev(u.mode)&&(a&=-513),a&65536&&!y.isDir(u.mode))throw new y.ErrnoError(54);if(!w){var T=y.mayOpen(u,a);if(T)throw new y.ErrnoError(T)}a&512&&!w&&y.truncate(u,0),a&=-131713;var N=y.createStream({node:u,path:y.getPath(u),flags:a,seekable:!0,position:0,stream_ops:u.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),w&&y.chmod(u,l&511),t.logReadFiles&&!(a&1)&&(r in y.readFiles||(y.readFiles[r]=1)),N},close(r){if(y.isClosed(r))throw new y.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(a){throw a}finally{y.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,a,l){if(y.isClosed(r))throw new y.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new y.ErrnoError(70);if(l!=0&&l!=1&&l!=2)throw new y.ErrnoError(28);return r.position=r.stream_ops.llseek(r,a,l),r.ungotten=[],r.position},read(r,a,l,u,p){if(P(l>=0),u<0||p<0)throw new y.ErrnoError(28);if(y.isClosed(r))throw new y.ErrnoError(8);if((r.flags&2097155)===1)throw new y.ErrnoError(8);if(y.isDir(r.node.mode))throw new y.ErrnoError(31);if(!r.stream_ops.read)throw new y.ErrnoError(28);var x=typeof p<"u";if(!x)p=r.position;else if(!r.seekable)throw new y.ErrnoError(70);var w=r.stream_ops.read(r,a,l,u,p);return x||(r.position+=w),w},write(r,a,l,u,p,x){if(P(l>=0),u<0||p<0)throw new y.ErrnoError(28);if(y.isClosed(r))throw new y.ErrnoError(8);if((r.flags&2097155)===0)throw new y.ErrnoError(8);if(y.isDir(r.node.mode))throw new y.ErrnoError(31);if(!r.stream_ops.write)throw new y.ErrnoError(28);r.seekable&&r.flags&1024&&y.llseek(r,0,2);var w=typeof p<"u";if(!w)p=r.position;else if(!r.seekable)throw new y.ErrnoError(70);var T=r.stream_ops.write(r,a,l,u,p,x);return w||(r.position+=T),T},mmap(r,a,l,u,p){if((u&2)!==0&&(p&2)===0&&(r.flags&2097155)!==2)throw new y.ErrnoError(2);if((r.flags&2097155)===1)throw new y.ErrnoError(2);if(!r.stream_ops.mmap)throw new y.ErrnoError(43);if(!a)throw new y.ErrnoError(28);return r.stream_ops.mmap(r,a,l,u,p)},msync(r,a,l,u,p){return P(l>=0),r.stream_ops.msync?r.stream_ops.msync(r,a,l,u,p):0},ioctl(r,a,l){if(!r.stream_ops.ioctl)throw new y.ErrnoError(59);return r.stream_ops.ioctl(r,a,l)},readFile(r,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var l=y.open(r,a.flags),u=y.stat(r),p=u.size,x=new Uint8Array(p);return y.read(l,x,0,p,0),a.encoding==="utf8"&&(x=gt(x)),y.close(l),x},writeFile(r,a,l={}){l.flags=l.flags||577;var u=y.open(r,l.flags,l.mode);if(typeof a=="string"&&(a=new Uint8Array(te(a))),ArrayBuffer.isView(a))y.write(u,a,0,a.byteLength,void 0,l.canOwn);else throw new Error("Unsupported data type");y.close(u)},cwd:()=>y.currentPath,chdir(r){var a=y.lookupPath(r,{follow:!0});if(a.node===null)throw new y.ErrnoError(44);if(!y.isDir(a.node.mode))throw new y.ErrnoError(54);var l=y.nodePermissions(a.node,"x");if(l)throw new y.ErrnoError(l);y.currentPath=a.path},createDefaultDirectories(){y.mkdir("/tmp"),y.mkdir("/home"),y.mkdir("/home/web_user")},createDefaultDevices(){y.mkdir("/dev"),y.registerDevice(y.makedev(1,3),{read:()=>0,write:(u,p,x,w,T)=>w,llseek:()=>0}),y.mkdev("/dev/null",y.makedev(1,3)),Te.register(y.makedev(5,0),Te.default_tty_ops),Te.register(y.makedev(6,0),Te.default_tty1_ops),y.mkdev("/dev/tty",y.makedev(5,0)),y.mkdev("/dev/tty1",y.makedev(6,0));var r=new Uint8Array(1024),a=0,l=()=>(a===0&&(hs(r),a=r.byteLength),r[--a]);y.createDevice("/dev","random",l),y.createDevice("/dev","urandom",l),y.mkdir("/dev/shm"),y.mkdir("/dev/shm/tmp")},createSpecialDirectories(){y.mkdir("/proc");var r=y.mkdir("/proc/self");y.mkdir("/proc/self/fd"),y.mount({mount(){var a=y.createNode(r,"fd",16895,73);return a.stream_ops={llseek:fe.stream_ops.llseek},a.node_ops={lookup(l,u){var p=+u,x=y.getStreamChecked(p),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>x.path},id:p+1};return w.parent=w,w},readdir(){return Array.from(y.streams.entries()).filter(([l,u])=>u).map(([l,u])=>l.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(r,a,l){r?y.createDevice("/dev","stdin",r):y.symlink("/dev/tty","/dev/stdin"),a?y.createDevice("/dev","stdout",null,a):y.symlink("/dev/tty","/dev/stdout"),l?y.createDevice("/dev","stderr",null,l):y.symlink("/dev/tty1","/dev/stderr");var u=y.open("/dev/stdin",0),p=y.open("/dev/stdout",1),x=y.open("/dev/stderr",1);P(u.fd===0,`invalid handle for stdin (${u.fd})`),P(p.fd===1,`invalid handle for stdout (${p.fd})`),P(x.fd===2,`invalid handle for stderr (${x.fd})`)},staticInit(){y.nameTable=new Array(4096),y.mount(fe,{},"/"),y.createDefaultDirectories(),y.createDefaultDevices(),y.createSpecialDirectories(),y.filesystems={MEMFS:fe}},init(r,a,l){P(!y.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),y.initialized=!0,r??=t.stdin,a??=t.stdout,l??=t.stderr,y.createStandardStreams(r,a,l)},quit(){y.initialized=!1,Fa(0);for(var r of y.streams)r&&y.close(r)},findObject(r,a){var l=y.analyzePath(r,a);return l.exists?l.object:null},analyzePath(r,a){try{var l=y.lookupPath(r,{follow:!a});r=l.path}catch{}var u={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var l=y.lookupPath(r,{parent:!0});u.parentExists=!0,u.parentPath=l.path,u.parentObject=l.node,u.name=bt.basename(r),l=y.lookupPath(r,{follow:!a}),u.exists=!0,u.path=l.path,u.object=l.node,u.name=l.node.name,u.isRoot=l.path==="/"}catch(p){u.error=p.errno}return u},createPath(r,a,l,u){r=typeof r=="string"?r:y.getPath(r);for(var p=a.split("/").reverse();p.length;){var x=p.pop();if(x){var w=bt.join2(r,x);try{y.mkdir(w)}catch(T){if(T.errno!=20)throw T}r=w}}return w},createFile(r,a,l,u,p){var x=bt.join2(typeof r=="string"?r:y.getPath(r),a),w=Lt(u,p);return y.create(x,w)},createDataFile(r,a,l,u,p,x){var w=a;r&&(r=typeof r=="string"?r:y.getPath(r),w=a?bt.join2(r,a):r);var T=Lt(u,p),N=y.create(w,T);if(l){if(typeof l=="string"){for(var j=new Array(l.length),ee=0,ce=l.length;ee<ce;++ee)j[ee]=l.charCodeAt(ee);l=j}y.chmod(N,T|146);var de=y.open(N,577);y.write(de,l,0,l.length,0,x),y.close(de),y.chmod(N,T)}},createDevice(r,a,l,u){var p=bt.join2(typeof r=="string"?r:y.getPath(r),a),x=Lt(!!l,!!u);y.createDevice.major??=64;var w=y.makedev(y.createDevice.major++,0);return y.registerDevice(w,{open(T){T.seekable=!1},close(T){u?.buffer?.length&&u(10)},read(T,N,j,ee,ce){for(var de=0,ue=0;ue<ee;ue++){var me;try{me=l()}catch{throw new y.ErrnoError(29)}if(me===void 0&&de===0)throw new y.ErrnoError(6);if(me==null)break;de++,N[j+ue]=me}return de&&(T.node.atime=Date.now()),de},write(T,N,j,ee,ce){for(var de=0;de<ee;de++)try{u(N[j+de])}catch{throw new y.ErrnoError(29)}return ee&&(T.node.mtime=T.node.ctime=Date.now()),de}}),y.mkdev(p,x,w)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=E(r.url),r.usedBytes=r.contents.length}catch{throw new y.ErrnoError(29)}},createLazyFile(r,a,l,u,p){class x{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var me=ue%this.chunkSize,We=ue/this.chunkSize|0;return this.getter(We)[me]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",l,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+l+". Status: "+ue.status);var me=Number(ue.getResponseHeader("Content-length")),We,dt=(We=ue.getResponseHeader("Accept-Ranges"))&&We==="bytes",it=(We=ue.getResponseHeader("Content-Encoding"))&&We==="gzip",Ft=1024*1024;dt||(Ft=me);var vt=($t,dn)=>{if($t>dn)throw new Error("invalid range ("+$t+", "+dn+") or no bytes requested!");if(dn>me-1)throw new Error("only "+me+" bytes available! programmer error!");var Pt=new XMLHttpRequest;if(Pt.open("GET",l,!1),me!==Ft&&Pt.setRequestHeader("Range","bytes="+$t+"-"+dn),Pt.responseType="arraybuffer",Pt.overrideMimeType&&Pt.overrideMimeType("text/plain; charset=x-user-defined"),Pt.send(null),!(Pt.status>=200&&Pt.status<300||Pt.status===304))throw new Error("Couldn't load "+l+". Status: "+Pt.status);return Pt.response!==void 0?new Uint8Array(Pt.response||[]):te(Pt.responseText||"")},on=this;on.setDataGetter($t=>{var dn=$t*Ft,Pt=($t+1)*Ft-1;if(Pt=Math.min(Pt,me-1),typeof on.chunks[$t]>"u"&&(on.chunks[$t]=vt(dn,Pt)),typeof on.chunks[$t]>"u")throw new Error("doXHR failed!");return on.chunks[$t]}),(it||!me)&&(Ft=me=1,me=this.getter(0).length,Ft=me,D("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Ft,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!s)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new x,T={isDevice:!1,contents:w}}else var T={isDevice:!1,url:l};var N=y.createFile(r,a,T,u,p);T.contents?N.contents=T.contents:T.url&&(N.contents=null,N.url=T.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var j={},ee=Object.keys(N.stream_ops);ee.forEach(de=>{var ue=N.stream_ops[de];j[de]=(...me)=>(y.forceLoadFile(N),ue(...me))});function ce(de,ue,me,We,dt){var it=de.node.contents;if(dt>=it.length)return 0;var Ft=Math.min(it.length-dt,We);if(P(Ft>=0),it.slice)for(var vt=0;vt<Ft;vt++)ue[me+vt]=it[dt+vt];else for(var vt=0;vt<Ft;vt++)ue[me+vt]=it.get(dt+vt);return Ft}return j.read=(de,ue,me,We,dt)=>(y.forceLoadFile(N),ce(de,ue,me,We,dt)),j.mmap=(de,ue,me,We,dt)=>{y.forceLoadFile(N);var it=Fe();if(!it)throw new y.ErrnoError(48);return ce(de,Je,it,ue,me),{ptr:it,allocated:!0}},N.stream_ops=j,N},absolutePath(){G("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){G("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){G("FS.createLink has been removed; use FS.symlink instead")},joinPath(){G("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){G("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){G("FS.standardizePath has been removed; use PATH.normalize instead")}},ot={DEFAULT_POLLMASK:5,calculateAt(r,a,l){if(bt.isAbs(a))return a;var u;if(r===-100)u=y.cwd();else{var p=ot.getStreamFromFD(r);u=p.path}if(a.length==0){if(!l)throw new y.ErrnoError(44);return u}return u+"/"+a},writeStat(r,a){se[r>>2]=a.dev,se[r+4>>2]=a.mode,Ee[r+8>>2]=a.nlink,se[r+12>>2]=a.uid,se[r+16>>2]=a.gid,se[r+20>>2]=a.rdev,Tt[r+24>>3]=BigInt(a.size),se[r+32>>2]=4096,se[r+36>>2]=a.blocks;var l=a.atime.getTime(),u=a.mtime.getTime(),p=a.ctime.getTime();return Tt[r+40>>3]=BigInt(Math.floor(l/1e3)),Ee[r+48>>2]=l%1e3*1e3*1e3,Tt[r+56>>3]=BigInt(Math.floor(u/1e3)),Ee[r+64>>2]=u%1e3*1e3*1e3,Tt[r+72>>3]=BigInt(Math.floor(p/1e3)),Ee[r+80>>2]=p%1e3*1e3*1e3,Tt[r+88>>3]=BigInt(a.ino),0},writeStatFs(r,a){se[r+4>>2]=a.bsize,se[r+40>>2]=a.bsize,se[r+8>>2]=a.blocks,se[r+12>>2]=a.bfree,se[r+16>>2]=a.bavail,se[r+20>>2]=a.files,se[r+24>>2]=a.ffree,se[r+28>>2]=a.fsid,se[r+44>>2]=a.flags,se[r+36>>2]=a.namelen},doMsync(r,a,l,u,p){if(!y.isFile(a.node.mode))throw new y.ErrnoError(43);if(u&2)return 0;var x=at.slice(r,r+l);y.msync(a,x,p,l,u)},getStreamFromFD(r){var a=y.getStreamChecked(r);return a},varargs:void 0,getStr(r){var a=st(r);return a}};function mt(r,a,l){try{var u=ot.getStreamFromFD(r);if(P(!l),u.fd===a)return-28;if(a<0||a>=y.MAX_OPEN_FDS)return-8;var p=y.getStream(a);return p&&y.close(p),y.dupStream(u,a).fd}catch(x){if(typeof y>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}var an=()=>{P(ot.varargs!=null);var r=se[+ot.varargs>>2];return ot.varargs+=4,r},Qt=an;function Qn(r,a,l){ot.varargs=l;try{var u=ot.getStreamFromFD(r);switch(a){case 0:{var p=an();if(p<0)return-28;for(;y.streams[p];)p++;var x;return x=y.dupStream(u,p),x.fd}case 1:case 2:return 0;case 3:return u.flags;case 4:{var p=an();return u.flags|=p,0}case 12:{var p=Qt(),w=0;return le[p+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(T){if(typeof y>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function mi(r,a){try{return ot.writeStat(a,y.fstat(r))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function At(r,a,l){ot.varargs=l;try{var u=ot.getStreamFromFD(r);switch(a){case 21509:return u.tty?0:-59;case 21505:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcgets){var p=u.tty.ops.ioctl_tcgets(u),x=Qt();se[x>>2]=p.c_iflag||0,se[x+4>>2]=p.c_oflag||0,se[x+8>>2]=p.c_cflag||0,se[x+12>>2]=p.c_lflag||0;for(var w=0;w<32;w++)Je[x+w+17]=p.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return u.tty?0:-59;case 21506:case 21507:case 21508:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tcsets){for(var x=Qt(),T=se[x>>2],N=se[x+4>>2],j=se[x+8>>2],ee=se[x+12>>2],ce=[],w=0;w<32;w++)ce.push(Je[x+w+17]);return u.tty.ops.ioctl_tcsets(u.tty,a,{c_iflag:T,c_oflag:N,c_cflag:j,c_lflag:ee,c_cc:ce})}return 0}case 21519:{if(!u.tty)return-59;var x=Qt();return se[x>>2]=0,0}case 21520:return u.tty?-28:-59;case 21531:{var x=Qt();return y.ioctl(u,a,x)}case 21523:{if(!u.tty)return-59;if(u.tty.ops.ioctl_tiocgwinsz){var de=u.tty.ops.ioctl_tiocgwinsz(u.tty),x=Qt();le[x>>1]=de[0],le[x+2>>1]=de[1]}return 0}case 21524:return u.tty?0:-59;case 21515:return u.tty?0:-59;default:return-28}}catch(ue){if(typeof y>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function Wt(r,a){try{return r=ot.getStr(r),ot.writeStat(a,y.lstat(r))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}function Nn(r,a,l,u){try{a=ot.getStr(a);var p=u&256,x=u&4096;return u=u&-6401,P(!u,`unknown flags in __syscall_newfstatat: ${u}`),a=ot.calculateAt(r,a,x),ot.writeStat(l,p?y.lstat(a):y.stat(a))}catch(w){if(typeof y>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function zt(r,a,l,u){ot.varargs=u;try{a=ot.getStr(a),a=ot.calculateAt(r,a);var p=u?an():0;return y.open(a,l,p).fd}catch(x){if(typeof y>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function On(r,a){try{return r=ot.getStr(r),ot.writeStat(a,y.stat(r))}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return-l.errno}}var _i=()=>G("native code called abort()"),Nt=r=>{for(var a="";;){var l=at[r++];if(!l)return a;a+=String.fromCharCode(l)}},ir={},Pi={},ps={},Ur=class extends Error{constructor(a){super(a),this.name="BindingError"}},pt=r=>{throw new Ur(r)};function Md(r,a,l={}){var u=a.name;if(r||pt(`type "${u}" must have a positive integer typeid pointer`),Pi.hasOwnProperty(r)){if(l.ignoreDuplicateRegistrations)return;pt(`Cannot register type '${u}' twice`)}if(Pi[r]=a,delete ps[r],ir.hasOwnProperty(r)){var p=ir[r];delete ir[r],p.forEach(x=>x())}}function En(r,a,l={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Md(r,a,l)}var Ul=(r,a,l)=>{switch(a){case 1:return l?u=>Je[u]:u=>at[u];case 2:return l?u=>le[u>>1]:u=>Se[u>>1];case 4:return l?u=>se[u>>2]:u=>Ee[u>>2];case 8:return l?u=>Tt[u>>3]:u=>ct[u>>3];default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},Di=r=>{if(r===null)return"null";var a=typeof r;return a==="object"||a==="array"||a==="function"?r.toString():""+r},Nl=(r,a,l,u)=>{if(a<l||a>u)throw new TypeError(`Passing a number "${Di(a)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${l}, ${u}]!`)},Ed=(r,a,l,u,p)=>{a=Nt(a);const x=u===0n;let w=T=>T;if(x){const T=l*8;w=N=>BigInt.asUintN(T,N),p=w(p)}En(r,{name:a,fromWireType:w,toWireType:(T,N)=>{if(typeof N=="number")N=BigInt(N);else if(typeof N!="bigint")throw new TypeError(`Cannot convert "${Di(N)}" to ${this.name}`);return Nl(a,N,u,p),N},argPackAdvance:Bn,readValueFromPointer:Ul(a,l,!x),destructorFunction:null})},Bn=8,bd=(r,a,l,u)=>{a=Nt(a),En(r,{name:a,fromWireType:function(p){return!!p},toWireType:function(p,x){return x?l:u},argPackAdvance:Bn,readValueFromPointer:function(p){return this.fromWireType(at[p])},destructorFunction:null})},wd=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),Ea=r=>{function a(l){return l.$$.ptrType.registeredClass.name}pt(a(r)+" instance already deleted")},ba=!1,Ol=r=>{},Td=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},Bl=r=>{r.count.value-=1;var a=r.count.value===0;a&&Td(r)},kl=(r,a,l)=>{if(a===l)return r;if(l.baseClass===void 0)return null;var u=kl(r,a,l.baseClass);return u===null?null:l.downcast(u)},zl={},Ad={},Cd=(r,a)=>{for(a===void 0&&pt("ptr should not be undefined");r.baseClass;)a=r.upcast(a),r=r.baseClass;return a},Rd=(r,a)=>(a=Cd(r,a),Ad[a]),Pd=class extends Error{constructor(a){super(a),this.name="InternalError"}},ms=r=>{throw new Pd(r)},_s=(r,a)=>{(!a.ptrType||!a.ptr)&&ms("makeClassHandle requires ptr and ptrType");var l=!!a.smartPtrType,u=!!a.smartPtr;return l!==u&&ms("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Nr(Object.create(r,{$$:{value:a,writable:!0}}))};function Vl(r){var a=this.getPointee(r);if(!a)return this.destructor(r),null;var l=Rd(this.registeredClass,a);if(l!==void 0){if(l.$$.count.value===0)return l.$$.ptr=a,l.$$.smartPtr=r,l.clone();var u=l.clone();return this.destructor(r),u}function p(){return this.isSmartPointer?_s(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:r}):_s(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var x=this.registeredClass.getActualType(a),w=zl[x];if(!w)return p.call(this);var T;this.isConst?T=w.constPointerType:T=w.pointerType;var N=kl(a,this.registeredClass,T.registeredClass);return N===null?p.call(this):this.isSmartPointer?_s(T.registeredClass.instancePrototype,{ptrType:T,ptr:N,smartPtrType:this,smartPtr:r}):_s(T.registeredClass.instancePrototype,{ptrType:T,ptr:N})}var Nr=r=>typeof FinalizationRegistry>"u"?(Nr=a=>a,r):(ba=new FinalizationRegistry(a=>{console.warn(a.leakWarning),Bl(a.$$)}),Nr=a=>{var l=a.$$,u=!!l.smartPtr;if(u){var p={$$:l},x=l.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${x.name} <${Ce(l.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,Vl),p.leakWarning=w.stack.replace(/^Error: /,""),ba.register(a,p,a)}return a},Ol=a=>ba.unregister(a),Nr(r)),Dd=()=>{let r=gs.prototype;Object.assign(r,{isAliasOf(l){if(!(this instanceof gs)||!(l instanceof gs))return!1;var u=this.$$.ptrType.registeredClass,p=this.$$.ptr;l.$$=l.$$;for(var x=l.$$.ptrType.registeredClass,w=l.$$.ptr;u.baseClass;)p=u.upcast(p),u=u.baseClass;for(;x.baseClass;)w=x.upcast(w),x=x.baseClass;return u===x&&p===w},clone(){if(this.$$.ptr||Ea(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var l=Nr(Object.create(Object.getPrototypeOf(this),{$$:{value:wd(this.$$)}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},delete(){this.$$.ptr||Ea(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&pt("Object already scheduled for deletion"),Ol(this),Bl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ea(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&pt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(r[a]=r.delete)};function gs(){}var vs=(r,a)=>Object.defineProperty(a,"name",{value:r}),wa=(r,a,l)=>{if(r[a].overloadTable===void 0){var u=r[a];r[a]=function(...p){return r[a].overloadTable.hasOwnProperty(p.length)||pt(`Function '${l}' called with an invalid number of arguments (${p.length}) - expects one of (${r[a].overloadTable})!`),r[a].overloadTable[p.length].apply(this,p)},r[a].overloadTable=[],r[a].overloadTable[u.argCount]=u}},Ta=(r,a,l)=>{t.hasOwnProperty(r)?((l===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[l]!==void 0)&&pt(`Cannot register public name '${r}' twice`),wa(t,r,r),t[r].overloadTable.hasOwnProperty(l)&&pt(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`),t[r].overloadTable[l]=a):(t[r]=a,t[r].argCount=l)},Ld=48,Fd=57,Id=r=>{P(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var a=r.charCodeAt(0);return a>=Ld&&a<=Fd?`_${r}`:r};function Ud(r,a,l,u,p,x,w,T){this.name=r,this.constructor=a,this.instancePrototype=l,this.rawDestructor=u,this.baseClass=p,this.getActualType=x,this.upcast=w,this.downcast=T,this.pureVirtualFunctions=[]}var xs=(r,a,l)=>{for(;a!==l;)a.upcast||pt(`Expected null or instance of ${l.name}, got an instance of ${a.name}`),r=a.upcast(r),a=a.baseClass;return r};function Nd(r,a){if(a===null)return this.isReference&&pt(`null is not a valid ${this.name}`),0;a.$$||pt(`Cannot pass "${Di(a)}" as a ${this.name}`),a.$$.ptr||pt(`Cannot pass deleted object as a pointer of type ${this.name}`);var l=a.$$.ptrType.registeredClass,u=xs(a.$$.ptr,l,this.registeredClass);return u}function Od(r,a){var l;if(a===null)return this.isReference&&pt(`null is not a valid ${this.name}`),this.isSmartPointer?(l=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,l),l):0;(!a||!a.$$)&&pt(`Cannot pass "${Di(a)}" as a ${this.name}`),a.$$.ptr||pt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&pt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var u=a.$$.ptrType.registeredClass;if(l=xs(a.$$.ptr,u,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&pt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?l=a.$$.smartPtr:pt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:l=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)l=a.$$.smartPtr;else{var p=a.clone();l=this.rawShare(l,Xt.toHandle(()=>p.delete())),r!==null&&r.push(this.rawDestructor,l)}break;default:pt("Unsupporting sharing policy")}return l}function Bd(r,a){if(a===null)return this.isReference&&pt(`null is not a valid ${this.name}`),0;a.$$||pt(`Cannot pass "${Di(a)}" as a ${this.name}`),a.$$.ptr||pt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&pt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var l=a.$$.ptrType.registeredClass,u=xs(a.$$.ptr,l,this.registeredClass);return u}function Ss(r){return this.fromWireType(Ee[r>>2])}var kd=()=>{Object.assign(ys.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:Bn,readValueFromPointer:Ss,fromWireType:Vl})};function ys(r,a,l,u,p,x,w,T,N,j,ee){this.name=r,this.registeredClass=a,this.isReference=l,this.isConst=u,this.isSmartPointer=p,this.pointeeType=x,this.sharingPolicy=w,this.rawGetPointee=T,this.rawConstructor=N,this.rawShare=j,this.rawDestructor=ee,!p&&a.baseClass===void 0?u?(this.toWireType=Nd,this.destructorFunction=null):(this.toWireType=Bd,this.destructorFunction=null):this.toWireType=Od}var Hl=(r,a,l)=>{t.hasOwnProperty(r)||ms("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&l!==void 0?t[r].overloadTable[l]=a:(t[r]=a,t[r].argCount=l)},Gl=[],Ms,ve=r=>{var a=Gl[r];return a||(Gl[r]=a=Ms.get(r)),P(Ms.get(r)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},kn=(r,a,l=!1)=>{P(!l,"Async bindings are only supported with JSPI."),r=Nt(r);function u(){var x=ve(a);return x}var p=u();return typeof p!="function"&&pt(`unknown function pointer with signature ${r}: ${a}`),p};class zd extends Error{}var Wl=r=>{var a=cc(r),l=Nt(a);return Vn(a),l},Li=(r,a)=>{var l=[],u={};function p(x){if(!u[x]&&!Pi[x]){if(ps[x]){ps[x].forEach(p);return}l.push(x),u[x]=!0}}throw a.forEach(p),new zd(`${r}: `+l.map(Wl).join([", "]))},Cn=(r,a,l)=>{r.forEach(T=>ps[T]=a);function u(T){var N=l(T);N.length!==r.length&&ms("Mismatched type converter count");for(var j=0;j<r.length;++j)En(r[j],N[j])}var p=new Array(a.length),x=[],w=0;a.forEach((T,N)=>{Pi.hasOwnProperty(T)?p[N]=Pi[T]:(x.push(T),ir.hasOwnProperty(T)||(ir[T]=[]),ir[T].push(()=>{p[N]=Pi[T],++w,w===x.length&&u(p)}))}),x.length===0&&u(p)},Vd=(r,a,l,u,p,x,w,T,N,j,ee,ce,de)=>{ee=Nt(ee),x=kn(p,x),T&&=kn(w,T),j&&=kn(N,j),de=kn(ce,de);var ue=Id(ee);Ta(ue,function(){Li(`Cannot construct ${ee} due to unbound types`,[u])}),Cn([r,a,l],u?[u]:[],me=>{me=me[0];var We,dt;u?(We=me.registeredClass,dt=We.instancePrototype):dt=gs.prototype;var it=vs(ee,function(...Pt){if(Object.getPrototypeOf(this)!==Ft)throw new Ur(`Use 'new' to construct ${ee}`);if(vt.constructor_body===void 0)throw new Ur(`${ee} has no accessible constructor`);var Ui=vt.constructor_body[Pt.length];if(Ui===void 0)throw new Ur(`Tried to invoke ctor of ${ee} with invalid number of parameters (${Pt.length}) - expected (${Object.keys(vt.constructor_body).toString()}) parameters instead!`);return Ui.apply(this,Pt)}),Ft=Object.create(dt,{constructor:{value:it}});it.prototype=Ft;var vt=new Ud(ee,it,Ft,de,We,x,T,j);vt.baseClass&&(vt.baseClass.__derivedClasses??=[],vt.baseClass.__derivedClasses.push(vt));var on=new ys(ee,vt,!0,!1,!1),$t=new ys(ee+"*",vt,!1,!1,!1),dn=new ys(ee+" const*",vt,!1,!0,!1);return zl[r]={pointerType:$t,constPointerType:dn},Hl(ue,it),[on,$t,dn]})},Aa=r=>{for(;r.length;){var a=r.pop(),l=r.pop();l(a)}};function Xl(r){for(var a=1;a<r.length;++a)if(r[a]!==null&&r[a].destructorFunction===void 0)return!0;return!1}function Hd(r,a,l,u,p){if(r<a||r>l){var x=a==l?a:`${a} to ${l}`;p(`function ${u} called with ${r} arguments, expected ${x}`)}}function Gd(r,a,l,u){var p=Xl(r),x=r.length-2,w=[],T=["fn"];a&&T.push("thisWired");for(var N=0;N<x;++N)w.push(`arg${N}`),T.push(`arg${N}Wired`);w=w.join(","),T=T.join(",");var j=`return function (${w}) {
`;j+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,p&&(j+=`var destructors = [];
`);var ee=p?"destructors":"null",ce=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(j+=`var thisWired = classParam['toWireType'](${ee}, this);
`);for(var N=0;N<x;++N)j+=`var arg${N}Wired = argType${N}['toWireType'](${ee}, arg${N});
`,ce.push(`argType${N}`);if(j+=(l||u?"var rv = ":"")+`invoker(${T});
`,p)j+=`runDestructors(destructors);
`;else for(var N=a?1:2;N<r.length;++N){var de=N===1?"thisWired":"arg"+(N-2)+"Wired";r[N].destructorFunction!==null&&(j+=`${de}_dtor(${de});
`,ce.push(`${de}_dtor`))}return l&&(j+=`var ret = retType['fromWireType'](rv);
return ret;
`),j+=`}
`,ce.push("checkArgCount","minArgs","maxArgs"),j=`if (arguments.length !== ${ce.length}){ throw new Error(humanName + "Expected ${ce.length} closure arguments " + arguments.length + " given."); }
${j}`,[ce,j]}function Wd(r){for(var a=r.length-2,l=r.length-1;l>=2&&r[l].optional;--l)a--;return a}function Es(r,a,l,u,p,x){var w=a.length;w<2&&pt("argTypes array size mismatch! Must at least get return value and 'this' types!"),P(!x,"Async bindings are only supported with JSPI.");for(var T=a[1]!==null&&l!==null,N=Xl(a),j=a[0].name!=="void",ee=w-2,ce=Wd(a),de=[r,pt,u,p,Aa,a[0],a[1]],ue=0;ue<w-2;++ue)de.push(a[ue+2]);if(!N)for(var ue=T?1:2;ue<a.length;++ue)a[ue].destructorFunction!==null&&de.push(a[ue].destructorFunction);de.push(Hd,ce,ee);let[me,We]=Gd(a,T,j,x);var dt=new Function(...me,We)(...de);return vs(r,dt)}var bs=(r,a)=>{for(var l=[],u=0;u<r;u++)l.push(Ee[a+u*4>>2]);return l},Ca=r=>{r=r.trim();const a=r.indexOf("(");return a===-1?r:(P(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,a))},Xd=(r,a,l,u,p,x,w,T,N)=>{var j=bs(l,u);a=Nt(a),a=Ca(a),x=kn(p,x,T),Cn([],[r],ee=>{ee=ee[0];var ce=`${ee.name}.${a}`;function de(){Li(`Cannot call ${ce} due to unbound types`,j)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ue=ee.registeredClass.constructor;return ue[a]===void 0?(de.argCount=l-1,ue[a]=de):(wa(ue,a,ce),ue[a].overloadTable[l-1]=de),Cn([],j,me=>{var We=[me[0],null].concat(me.slice(1)),dt=Es(ce,We,null,x,w,T);if(ue[a].overloadTable===void 0?(dt.argCount=l-1,ue[a]=dt):ue[a].overloadTable[l-1]=dt,ee.registeredClass.__derivedClasses)for(const it of ee.registeredClass.__derivedClasses)it.constructor.hasOwnProperty(a)||(it.constructor[a]=dt);return[]}),[]})},$d=(r,a,l,u,p,x)=>{P(a>0);var w=bs(a,l);p=kn(u,p),Cn([],[r],T=>{T=T[0];var N=`constructor ${T.name}`;if(T.registeredClass.constructor_body===void 0&&(T.registeredClass.constructor_body=[]),T.registeredClass.constructor_body[a-1]!==void 0)throw new Ur(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${T.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return T.registeredClass.constructor_body[a-1]=()=>{Li(`Cannot construct ${T.name} due to unbound types`,w)},Cn([],w,j=>(j.splice(1,0,null),T.registeredClass.constructor_body[a-1]=Es(N,j,null,p,x),[])),[]})},jd=(r,a,l,u,p,x,w,T,N,j)=>{var ee=bs(l,u);a=Nt(a),a=Ca(a),x=kn(p,x,N),Cn([],[r],ce=>{ce=ce[0];var de=`${ce.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),T&&ce.registeredClass.pureVirtualFunctions.push(a);function ue(){Li(`Cannot call ${de} due to unbound types`,ee)}var me=ce.registeredClass.instancePrototype,We=me[a];return We===void 0||We.overloadTable===void 0&&We.className!==ce.name&&We.argCount===l-2?(ue.argCount=l-2,ue.className=ce.name,me[a]=ue):(wa(me,a,de),me[a].overloadTable[l-2]=ue),Cn([],ee,dt=>{var it=Es(de,dt,ce,x,w,N);return me[a].overloadTable===void 0?(it.argCount=l-2,me[a]=it):me[a].overloadTable[l-2]=it,[]}),[]})},$l=(r,a,l)=>(r instanceof Object||pt(`${l} with invalid "this": ${r}`),r instanceof a.registeredClass.constructor||pt(`${l} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||pt(`cannot call emscripten binding method ${l} on deleted object`),xs(r.$$.ptr,r.$$.ptrType.registeredClass,a.registeredClass)),qd=(r,a,l,u,p,x,w,T,N,j)=>{a=Nt(a),p=kn(u,p),Cn([],[r],ee=>{ee=ee[0];var ce=`${ee.name}.${a}`,de={get(){Li(`Cannot access ${ce} due to unbound types`,[l,w])},enumerable:!0,configurable:!0};return N?de.set=()=>Li(`Cannot access ${ce} due to unbound types`,[l,w]):de.set=ue=>pt(ce+" is a read-only property"),Object.defineProperty(ee.registeredClass.instancePrototype,a,de),Cn([],N?[l,w]:[l],ue=>{var me=ue[0],We={get(){var it=$l(this,ee,ce+" getter");return me.fromWireType(p(x,it))},enumerable:!0};if(N){N=kn(T,N);var dt=ue[1];We.set=function(it){var Ft=$l(this,ee,ce+" setter"),vt=[];N(j,Ft,dt.toWireType(vt,it)),Aa(vt)}}return Object.defineProperty(ee.registeredClass.instancePrototype,a,We),[]}),[]})},Yd=(r,a,l)=>{r=Nt(r),Cn([],[a],u=>(u=u[0],t[r]=u.fromWireType(l),[]))},jl=[],zn=[0,1,,1,null,1,!0,1,!1,1],Ra=r=>{r>9&&--zn[r+1]===0&&(P(zn[r]!==void 0,"Decref for unallocated handle."),zn[r]=void 0,jl.push(r))},Xt={toValue:r=>(r||pt(`Cannot use deleted val. handle = ${r}`),P(r===2||zn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),zn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=jl.pop()||zn.length;return zn[a]=r,zn[a+1]=1,a}}}},ql={name:"emscripten::val",fromWireType:r=>{var a=Xt.toValue(r);return Ra(r),a},toWireType:(r,a)=>Xt.toHandle(a),argPackAdvance:Bn,readValueFromPointer:Ss,destructorFunction:null},Yl=r=>En(r,ql),Kd=(r,a,l)=>{switch(a){case 1:return l?function(u){return this.fromWireType(Je[u])}:function(u){return this.fromWireType(at[u])};case 2:return l?function(u){return this.fromWireType(le[u>>1])}:function(u){return this.fromWireType(Se[u>>1])};case 4:return l?function(u){return this.fromWireType(se[u>>2])}:function(u){return this.fromWireType(Ee[u>>2])};default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},Zd=(r,a,l,u)=>{a=Nt(a);function p(){}p.values={},En(r,{name:a,constructor:p,fromWireType:function(x){return this.constructor.values[x]},toWireType:(x,w)=>w.value,argPackAdvance:Bn,readValueFromPointer:Kd(a,l,u),destructorFunction:null}),Ta(a,p)},ws=(r,a)=>{var l=Pi[r];return l===void 0&&pt(`${a} has unknown type ${Wl(r)}`),l},Jd=(r,a,l)=>{var u=ws(r,"enum");a=Nt(a);var p=u.constructor,x=Object.create(u.constructor.prototype,{value:{value:l},constructor:{value:vs(`${u.name}_${a}`,function(){})}});p.values[l]=x,p[a]=x},Qd=(r,a)=>{switch(a){case 4:return function(l){return this.fromWireType(Ge[l>>2])};case 8:return function(l){return this.fromWireType($e[l>>3])};default:throw new TypeError(`invalid float width (${a}): ${r}`)}},ef=(r,a,l)=>{a=Nt(a),En(r,{name:a,fromWireType:u=>u,toWireType:(u,p)=>{if(typeof p!="number"&&typeof p!="boolean")throw new TypeError(`Cannot convert ${Di(p)} to ${this.name}`);return p},argPackAdvance:Bn,readValueFromPointer:Qd(a,l),destructorFunction:null})},tf=(r,a,l,u,p,x,w,T)=>{var N=bs(a,l);r=Nt(r),r=Ca(r),p=kn(u,p,w),Ta(r,function(){Li(`Cannot call ${r} due to unbound types`,N)},a-1),Cn([],N,j=>{var ee=[j[0],null].concat(j.slice(1));return Hl(r,Es(r,ee,null,p,x,w),a-1),[]})},nf=(r,a,l,u,p)=>{a=Nt(a);const x=u===0;let w=N=>N;if(x){var T=32-8*l;w=N=>N<<T>>>T,p=w(p)}En(r,{name:a,fromWireType:w,toWireType:(N,j)=>{if(typeof j!="number"&&typeof j!="boolean")throw new TypeError(`Cannot convert "${Di(j)}" to ${a}`);return Nl(a,j,u,p),j},argPackAdvance:Bn,readValueFromPointer:Ul(a,l,u!==0),destructorFunction:null})},rf=(r,a,l)=>{var u=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],p=u[a];function x(w){var T=Ee[w>>2],N=Ee[w+4>>2];return new p(Je.buffer,N,T)}l=Nt(l),En(r,{name:l,fromWireType:x,argPackAdvance:Bn,readValueFromPointer:x},{ignoreDuplicateRegistrations:!0})},sf=Object.assign({optional:!0},ql),af=(r,a)=>{En(r,sf)},Fi=(r,a,l)=>(P(typeof l=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),re(r,at,a,l)),of=(r,a)=>{a=Nt(a),En(r,{name:a,fromWireType(l){for(var u=Ee[l>>2],p=l+4,x,w,T=p,w=0;w<=u;++w){var N=p+w;if(w==u||at[N]==0){var j=N-T,ee=st(T,j);x===void 0?x=ee:(x+="\0",x+=ee),T=N+1}}return Vn(l),x},toWireType(l,u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));var p,x=typeof u=="string";x||ArrayBuffer.isView(u)&&u.BYTES_PER_ELEMENT==1||pt("Cannot pass non-string to std::string"),x?p=$(u):p=u.length;var w=La(4+p+1),T=w+4;return Ee[w>>2]=p,x?Fi(u,T,p+1):at.set(u,T),l!==null&&l.push(Vn,w),w},argPackAdvance:Bn,readValueFromPointer:Ss,destructorFunction(l){Vn(l)}})},Kl=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,lf=(r,a)=>{P(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var l=r>>1,u=l+a/2,p=l;!(p>=u)&&Se[p];)++p;if(p-l>16&&Kl)return Kl.decode(Se.subarray(l,p));for(var x="",w=l;!(w>=u);++w){var T=Se[w];if(T==0)break;x+=String.fromCharCode(T)}return x},cf=(r,a,l)=>{if(P(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),P(typeof l=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??=2147483647,l<2)return 0;l-=2;for(var u=a,p=l<r.length*2?l/2:r.length,x=0;x<p;++x){var w=r.charCodeAt(x);le[a>>1]=w,a+=2}return le[a>>1]=0,a-u},uf=r=>r.length*2,df=(r,a)=>{P(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var l="",u=0;!(u>=a/4);u++){var p=se[r+u*4>>2];if(!p)break;l+=String.fromCodePoint(p)}return l},ff=(r,a,l)=>{if(P(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),P(typeof l=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),l??=2147483647,l<4)return 0;for(var u=a,p=u+l-4,x=0;x<r.length;++x){var w=r.codePointAt(x);if(w>65535&&x++,se[a>>2]=w,a+=4,a+4>p)break}return se[a>>2]=0,a-u},hf=r=>{for(var a=0,l=0;l<r.length;++l){var u=r.codePointAt(l);u>65535&&l++,a+=4}return a},pf=(r,a,l)=>{l=Nt(l);var u,p,x,w;a===2?(u=lf,p=cf,w=uf,x=T=>Se[T>>1]):a===4&&(u=df,p=ff,w=hf,x=T=>Ee[T>>2]),En(r,{name:l,fromWireType:T=>{for(var N=Ee[T>>2],j,ee=T+4,ce=0;ce<=N;++ce){var de=T+4+ce*a;if(ce==N||x(de)==0){var ue=de-ee,me=u(ee,ue);j===void 0?j=me:(j+="\0",j+=me),ee=de+a}}return Vn(T),j},toWireType:(T,N)=>{typeof N!="string"&&pt(`Cannot pass non-string to C++ string type ${l}`);var j=w(N),ee=La(4+j+a);return Ee[ee>>2]=j/a,p(N,ee+4,j+a),T!==null&&T.push(Vn,ee),ee},argPackAdvance:Bn,readValueFromPointer:Ss,destructorFunction(T){Vn(T)}})},mf=(r,a)=>{Yl(r)},_f=(r,a)=>{a=Nt(a),En(r,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(l,u)=>{}})},gf=()=>{throw new B},Zl=(r,a,l)=>{var u=[],p=r.toWireType(u,l);return u.length&&(Ee[a>>2]=Xt.toHandle(u)),p},vf=(r,a,l)=>(r=Xt.toValue(r),a=ws(a,"emval::as"),Zl(a,l,r)),Ts=[],xf=(r,a,l,u)=>(r=Ts[r],a=Xt.toValue(a),r(null,a,l,u)),Sf={},Pa=r=>{var a=Sf[r];return a===void 0?Nt(r):a},yf=(r,a,l,u,p)=>(r=Ts[r],a=Xt.toValue(a),l=Pa(l),r(a,a[l],u,p)),Jl=()=>globalThis,Mf=r=>r===0?Xt.toHandle(Jl()):(r=Pa(r),Xt.toHandle(Jl()[r])),Ef=r=>{var a=Ts.length;return Ts.push(r),a},bf=(r,a)=>{for(var l=new Array(r),u=0;u<r;++u)l[u]=ws(Ee[a+u*4>>2],`parameter ${u}`);return l},wf=(r,a,l)=>{var u=bf(r,a),p=u.shift();r--;var x=`return function (obj, func, destructorsRef, args) {
`,w=0,T=[];l===0&&T.push("obj");for(var N=["retType"],j=[p],ee=0;ee<r;++ee)T.push(`arg${ee}`),N.push(`argType${ee}`),j.push(u[ee]),x+=`  var arg${ee} = argType${ee}.readValueFromPointer(args${w?"+"+w:""});
`,w+=u[ee].argPackAdvance;var ce=l===1?"new func":"func.call";x+=`  var rv = ${ce}(${T.join(", ")});
`,p.isVoid||(N.push("emval_returnValue"),j.push(Zl),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),x+=`};
`;var de=new Function(...N,x)(...j),ue=`methodCaller<(${u.map(me=>me.name).join(", ")}) => ${p.name}>`;return Ef(vs(ue,de))},Tf=(r,a)=>(r=Xt.toValue(r),a=Xt.toValue(a),Xt.toHandle(r[a])),Af=r=>{r>9&&(zn[r+1]+=1)},Cf=r=>(r=Xt.toValue(r),typeof r=="number"),Rf=r=>(r=Xt.toValue(r),typeof r=="string"),Pf=()=>Xt.toHandle([]),Df=r=>Xt.toHandle(Pa(r)),Lf=r=>{var a=Xt.toValue(r);Aa(a),Ra(r)},Ff=(r,a)=>{r=ws(r,"_emval_take_value");var l=r.readValueFromPointer(a);return Xt.toHandle(l)},If=r=>{throw r=Xt.toValue(r),r},Uf=r=>r%4===0&&(r%100!==0||r%400===0),Nf=[0,31,60,91,121,152,182,213,244,274,305,335],Of=[0,31,59,90,120,151,181,212,243,273,304,334],Ql=r=>{var a=Uf(r.getFullYear()),l=a?Nf:Of,u=l[r.getMonth()]+r.getDate()-1;return u},Bf=9007199254740992,kf=-9007199254740992,ec=r=>r<kf||r>Bf?NaN:Number(r);function zf(r,a){r=ec(r);var l=new Date(r*1e3);se[a>>2]=l.getSeconds(),se[a+4>>2]=l.getMinutes(),se[a+8>>2]=l.getHours(),se[a+12>>2]=l.getDate(),se[a+16>>2]=l.getMonth(),se[a+20>>2]=l.getFullYear()-1900,se[a+24>>2]=l.getDay();var u=Ql(l)|0;se[a+28>>2]=u,se[a+36>>2]=-(l.getTimezoneOffset()*60);var p=new Date(l.getFullYear(),0,1),x=new Date(l.getFullYear(),6,1).getTimezoneOffset(),w=p.getTimezoneOffset(),T=(x!=w&&l.getTimezoneOffset()==Math.min(w,x))|0;se[a+32>>2]=T}var Vf=function(r){var a=(()=>{var l=new Date(se[r+20>>2]+1900,se[r+16>>2],se[r+12>>2],se[r+8>>2],se[r+4>>2],se[r>>2],0),u=se[r+32>>2],p=l.getTimezoneOffset(),x=new Date(l.getFullYear(),0,1),w=new Date(l.getFullYear(),6,1).getTimezoneOffset(),T=x.getTimezoneOffset(),N=Math.min(T,w);if(u<0)se[r+32>>2]=+(w!=T&&N==p);else if(u>0!=(N==p)){var j=Math.max(T,w),ee=u>0?N:j;l.setTime(l.getTime()+(ee-p)*6e4)}se[r+24>>2]=l.getDay();var ce=Ql(l)|0;se[r+28>>2]=ce,se[r>>2]=l.getSeconds(),se[r+4>>2]=l.getMinutes(),se[r+8>>2]=l.getHours(),se[r+12>>2]=l.getDate(),se[r+16>>2]=l.getMonth(),se[r+20>>2]=l.getYear();var de=l.getTime();return isNaN(de)?-1:de/1e3})();return BigInt(a)},Hf=(r,a,l,u)=>{var p=new Date().getFullYear(),x=new Date(p,0,1),w=new Date(p,6,1),T=x.getTimezoneOffset(),N=w.getTimezoneOffset(),j=Math.max(T,N);Ee[r>>2]=j*60,se[a>>2]=+(T!=N);var ee=ue=>{var me=ue>=0?"-":"+",We=Math.abs(ue),dt=String(Math.floor(We/60)).padStart(2,"0"),it=String(We%60).padStart(2,"0");return`UTC${me}${dt}${it}`},ce=ee(T),de=ee(N);P(ce),P(de),P($(ce)<=16,`timezone name truncated to fit in TZNAME_MAX (${ce})`),P($(de)<=16,`timezone name truncated to fit in TZNAME_MAX (${de})`),N<T?(Fi(ce,l,17),Fi(de,u,17)):(Fi(ce,u,17),Fi(de,l,17))},tc=()=>performance.now(),nc=()=>Date.now(),Gf=r=>r>=0&&r<=3;function Wf(r,a,l){if(!Gf(r))return 28;var u;r===0?u=nc():u=tc();var p=Math.round(u*1e3*1e3);return Tt[l>>3]=BigInt(p),0}var As=[],Xf=(r,a)=>{P(Array.isArray(As)),P(a%16==0),As.length=0;for(var l;l=at[r++];){var u=String.fromCharCode(l),p=["d","f","i","p"];p.push("j"),P(p.includes(u),`Invalid character ${l}("${u}") in readEmAsmArgs! Use only [${p}], and do not specify "v" for void return argument.`);var x=l!=105;x&=l!=112,a+=x&&a%8?4:0,As.push(l==112?Ee[a>>2]:l==106?Tt[a>>3]:l==105?se[a>>2]:$e[a>>3]),a+=x?8:4}return As},$f=(r,a,l)=>{var u=Xf(a,l);return P(lc.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),lc[r](...u)},jf=(r,a,l)=>$f(r,a,l),ic=()=>2147483648,qf=()=>ic(),Yf=(r,a)=>(P(a,"alignment argument is required"),Math.ceil(r/a)*a),Kf=r=>{var a=Ye.buffer,l=(r-a.byteLength+65535)/65536|0;try{return Ye.grow(l),Et(),1}catch(u){F(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${r} bytes, but got error: ${u}`)}},Zf=r=>{var a=at.length;r>>>=0,P(r>a);var l=ic();if(r>l)return F(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${l} bytes!`),!1;for(var u=1;u<=4;u*=2){var p=a*(1+.2/u);p=Math.min(p,r+100663296);var x=Math.min(l,Yf(Math.max(r,p),65536)),w=Kf(x);if(w)return!0}return F(`Failed to grow the heap from ${a} bytes to ${x} bytes, not enough memory!`),!1},Da={},Jf=()=>h||"./this.program",Or=()=>{if(!Or.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:Jf()};for(var l in Da)Da[l]===void 0?delete a[l]:a[l]=Da[l];var u=[];for(var l in a)u.push(`${l}=${a[l]}`);Or.strings=u}return Or.strings},Qf=(r,a)=>{var l=0,u=0;for(var p of Or()){var x=a+l;Ee[r+u>>2]=x,l+=Fi(p,x,1/0)+1,u+=4}return 0},eh=(r,a)=>{var l=Or();Ee[r>>2]=l.length;var u=0;for(var p of l)u+=$(p)+1;return Ee[a>>2]=u,0},rc=0,sc=()=>ye||rc>0,th=r=>{sc()||(t.onExit?.(r),z=!0),f(r,new Oe(r))},nh=(r,a)=>{if(hm(),sc()&&!a){var l=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${rc}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Pe?.(l),F(l)}th(r)},ih=nh;function rh(r){try{var a=ot.getStreamFromFD(r);return y.close(a),0}catch(l){if(typeof y>"u"||l.name!=="ErrnoError")throw l;return l.errno}}var sh=(r,a,l,u)=>{for(var p=0,x=0;x<l;x++){var w=Ee[a>>2],T=Ee[a+4>>2];a+=8;var N=y.read(r,Je,w,T,u);if(N<0)return-1;if(p+=N,N<T)break}return p};function ah(r,a,l,u){try{var p=ot.getStreamFromFD(r),x=sh(p,a,l);return Ee[u>>2]=x,0}catch(w){if(typeof y>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function oh(r,a,l,u){a=ec(a);try{if(isNaN(a))return 61;var p=ot.getStreamFromFD(r);return y.llseek(p,a,l),Tt[u>>3]=BigInt(p.position),p.getdents&&a===0&&l===0&&(p.getdents=null),0}catch(x){if(typeof y>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var lh=(r,a,l,u)=>{for(var p=0,x=0;x<l;x++){var w=Ee[a>>2],T=Ee[a+4>>2];a+=8;var N=y.write(r,Je,w,T,u);if(N<0)return-1;if(p+=N,N<T)break}return p};function ch(r,a,l,u){try{var p=ot.getStreamFromFD(r),x=lh(p,a,l);return Ee[u>>2]=x,0}catch(w){if(typeof y>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var uh=r=>r,dh=r=>{var a=t["_"+r];return P(a,"Cannot call unknown function "+r+", make sure it is exported"),a},fh=(r,a)=>{P(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Je.set(r,a)},Cs=r=>pc(r),hh=r=>{var a=$(r)+1,l=Cs(a);return Fi(r,l,a),l},ac=(r,a,l,u,p)=>{var x={string:me=>{var We=0;return me!=null&&me!==0&&(We=hh(me)),We},array:me=>{var We=Cs(me.length);return fh(me,We),We}};function w(me){return a==="string"?st(me):a==="boolean"?!!me:me}var T=dh(r),N=[],j=0;if(P(a!=="array",'Return type should not be "array".'),u)for(var ee=0;ee<u.length;ee++){var ce=x[l[ee]];ce?(j===0&&(j=k()),N[ee]=ce(u[ee])):N[ee]=u[ee]}var de=T(...N);function ue(me){return j!==0&&X(j),w(me)}return de=ue(de),de},ph=(r,a,l,u)=>(...p)=>ac(r,a,l,p),mh=(...r)=>y.createPath(...r),_h=(...r)=>y.unlink(...r),gh=(...r)=>y.createLazyFile(...r),vh=(...r)=>y.createDevice(...r),xh=r=>Rs(r),Sh=r=>Ua(r),yh=r=>{var a=k(),l=Cs(4),u=Cs(4);_c(r,l,u);var p=Ee[l>>2],x=Ee[u>>2],w=st(p);Vn(p);var T;return x&&(T=st(x),Vn(x)),X(a),[w,T]},oc=r=>yh(r);y.createPreloadedFile=Mt,y.staticInit(),Dd(),kd(),P(zn.length===10),t.noExitRuntime&&(ye=t.noExitRuntime),t.preloadPlugins&&(Qe=t.preloadPlugins),t.print&&(D=t.print),t.printErr&&(F=t.printErr),t.wasmBinary&&(I=t.wasmBinary),bh(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),P(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),P(typeof t.read>"u","Module.read option was removed"),P(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),P(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),P(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),P(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),P(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),P(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),P(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),P(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=b,t.ccall=ac,t.cwrap=ph,t.FS_createPreloadedFile=Mt,t.FS_unlink=_h,t.FS_createPath=mh,t.FS_createDevice=vh,t.FS=y,t.FS_createDataFile=ze,t.FS_createLazyFile=gh,t.MEMFS=fe;var Mh=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Mh.forEach(ge);var Eh=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Eh.forEach(Re),t.incrementExceptionRefcount=xh,t.decrementExceptionRefcount=Sh,t.getExceptionMessage=oc;function bh(){ne("fetchSettings")}var lc={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(a){},enumerable:!0,configurable:!0})})}},cc=K("___getTypeName"),La=K("_malloc"),Fa=K("_fflush"),Vn=K("_free"),Ia=K("_emscripten_stack_get_end"),uc=K("_strerror"),_e=K("_setThrew"),dc=K("__emscripten_tempret_set"),fc=K("_emscripten_stack_init"),hc=K("__emscripten_stack_restore"),pc=K("__emscripten_stack_alloc"),mc=K("_emscripten_stack_get_current"),Ua=K("___cxa_decrement_exception_refcount"),Rs=K("___cxa_increment_exception_refcount"),_c=K("___get_exception_message"),gc=K("___cxa_can_catch"),vc=K("___cxa_get_exception_ptr");function wh(r){cc=ae("__getTypeName",1),La=ae("malloc",1),Fa=ae("fflush",1),Vn=ae("free",1),Ia=r.emscripten_stack_get_end,r.emscripten_stack_get_base,uc=ae("strerror",1),_e=ae("setThrew",2),dc=ae("_emscripten_tempret_set",1),fc=r.emscripten_stack_init,r.emscripten_stack_get_free,hc=r._emscripten_stack_restore,pc=r._emscripten_stack_alloc,mc=r.emscripten_stack_get_current,Ua=ae("__cxa_decrement_exception_refcount",1),Rs=ae("__cxa_increment_exception_refcount",1),_c=ae("__get_exception_message",3),gc=ae("__cxa_can_catch",3),vc=ae("__cxa_get_exception_ptr",1)}var xc={__assert_fail:An,__cxa_begin_catch:Ir,__cxa_current_primary_exception:xa,__cxa_end_catch:ls,__cxa_find_matching_catch_2:cs,__cxa_find_matching_catch_3:nr,__cxa_find_matching_catch_4:us,__cxa_rethrow:Ri,__cxa_rethrow_primary_exception:ds,__cxa_throw:fs,__cxa_uncaught_exceptions:Sa,__resumeException:ya,__syscall_dup3:mt,__syscall_fcntl64:Qn,__syscall_fstat64:mi,__syscall_ioctl:At,__syscall_lstat64:Wt,__syscall_newfstatat:Nn,__syscall_openat:zt,__syscall_stat64:On,_abort_js:_i,_embind_register_bigint:Ed,_embind_register_bool:bd,_embind_register_class:Vd,_embind_register_class_class_function:Xd,_embind_register_class_constructor:$d,_embind_register_class_function:jd,_embind_register_class_property:qd,_embind_register_constant:Yd,_embind_register_emval:Yl,_embind_register_enum:Zd,_embind_register_enum_value:Jd,_embind_register_float:ef,_embind_register_function:tf,_embind_register_integer:nf,_embind_register_memory_view:rf,_embind_register_optional:af,_embind_register_std_string:of,_embind_register_std_wstring:pf,_embind_register_user_type:mf,_embind_register_void:_f,_emscripten_throw_longjmp:gf,_emval_as:vf,_emval_call:xf,_emval_call_method:yf,_emval_decref:Ra,_emval_get_global:Mf,_emval_get_method_caller:wf,_emval_get_property:Tf,_emval_incref:Af,_emval_is_number:Cf,_emval_is_string:Rf,_emval_new_array:Pf,_emval_new_cstring:Df,_emval_run_destructors:Lf,_emval_take_value:Ff,_emval_throw:If,_localtime_js:zf,_mktime_js:Vf,_tzset_js:Hf,clock_time_get:Wf,emscripten_asm_const_int:jf,emscripten_date_now:nc,emscripten_get_heap_max:qf,emscripten_get_now:tc,emscripten_resize_heap:Zf,environ_get:Qf,environ_sizes_get:eh,exit:ih,fd_close:rh,fd_read:ah,fd_seek:oh,fd_write:ch,invoke_ddd:Jp,invoke_dddi:mp,invoke_dddidi:_p,invoke_ddidi:pp,invoke_di:gp,invoke_dii:sp,invoke_diii:kh,invoke_diiii:hp,invoke_diiiidd:dp,invoke_diiiidi:Hh,invoke_diiiii:Ih,invoke_diiiiii:qh,invoke_diiiiiii:vp,invoke_diiiiiiiii:$h,invoke_diiiiiiiiiiii:jh,invoke_fiii:cm,invoke_i:Uh,invoke_id:jp,invoke_ii:Ch,invoke_iid:Cp,invoke_iidddd:im,invoke_iidiii:np,invoke_iidiiid:ep,invoke_iidiiiiidi:ip,invoke_iif:nm,invoke_iii:Th,invoke_iiid:rp,invoke_iiididdddddd:tp,invoke_iiidiiiiiiii:Qh,invoke_iiii:Dh,invoke_iiiidddiiiii:Sp,invoke_iiiii:Bh,invoke_iiiiid:Bp,invoke_iiiiii:Fp,invoke_iiiiiii:Pp,invoke_iiiiiiii:Ap,invoke_iiiiiiiidd:kp,invoke_iiiiiiiii:up,invoke_iiiiiiiiii:Dp,invoke_iiiiiiiiiidddiiiiiiiii:Jh,invoke_iiiiiiiiiii:lm,invoke_iiiiiiiiiiii:um,invoke_iiiiiiiiiiiii:$p,invoke_iiij:Lp,invoke_iiji:Op,invoke_j:am,invoke_ji:Xp,invoke_jiiii:Ip,invoke_jij:Wp,invoke_v:Ph,invoke_vi:Rh,invoke_vid:Rp,invoke_viddd:Up,invoke_vidddd:Np,invoke_vidi:fp,invoke_vidiii:Kh,invoke_vii:Fh,invoke_viid:lp,invoke_viiddi:Gp,invoke_viiddidi:Hp,invoke_viiddii:xp,invoke_viidi:op,invoke_viidii:Vh,invoke_viidiii:wp,invoke_viidiiid:Ep,invoke_viidiiiii:Zh,invoke_viidiiiiidi:Tp,invoke_viidiiiiiiii:Yh,invoke_viii:Ah,invoke_viiid:Wh,invoke_viiidd:Vp,invoke_viiidi:ap,invoke_viiididdddddd:bp,invoke_viiidiiiiiiii:Mp,invoke_viiii:Oh,invoke_viiiiddd:zp,invoke_viiiidi:Qp,invoke_viiiifi:em,invoke_viiiii:Lh,invoke_viiiiid:Gh,invoke_viiiiii:Nh,invoke_viiiiiii:zh,invoke_viiiiiiii:cp,invoke_viiiiiiiiii:Kp,invoke_viiiiiiiiiidddiiiiiiiii:yp,invoke_viiiiiiiiiiid:Xh,invoke_viiiiiiiiiiiii:Yp,invoke_viiiiiiiiiiiiiii:dm,invoke_viiiiiiiiiiiiiiiiii:Zp,invoke_viiiij:rm,invoke_viij:sm,invoke_viijii:om,invoke_vij:tm,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:qp,llvm_eh_typeid_for:uh},Ii=await Me();function Th(r,a,l){var u=k();try{return ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;_e(1,0)}}function Ah(r,a,l,u){var p=k();try{ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function Ch(r,a){var l=k();try{return ve(r)(a)}catch(u){if(X(l),!(u instanceof O))throw u;_e(1,0)}}function Rh(r,a){var l=k();try{ve(r)(a)}catch(u){if(X(l),!(u instanceof O))throw u;_e(1,0)}}function Ph(r){var a=k();try{ve(r)()}catch(l){if(X(a),!(l instanceof O))throw l;_e(1,0)}}function Dh(r,a,l,u){var p=k();try{return ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function Lh(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function Fh(r,a,l){var u=k();try{ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;_e(1,0)}}function Ih(r,a,l,u,p,x){var w=k();try{return ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function Uh(r){var a=k();try{return ve(r)()}catch(l){if(X(a),!(l instanceof O))throw l;_e(1,0)}}function Nh(r,a,l,u,p,x,w){var T=k();try{ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function Oh(r,a,l,u,p){var x=k();try{ve(r)(a,l,u,p)}catch(w){if(X(x),!(w instanceof O))throw w;_e(1,0)}}function Bh(r,a,l,u,p){var x=k();try{return ve(r)(a,l,u,p)}catch(w){if(X(x),!(w instanceof O))throw w;_e(1,0)}}function kh(r,a,l,u){var p=k();try{return ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function zh(r,a,l,u,p,x,w,T){var N=k();try{ve(r)(a,l,u,p,x,w,T)}catch(j){if(X(N),!(j instanceof O))throw j;_e(1,0)}}function Vh(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function Hh(r,a,l,u,p,x,w){var T=k();try{return ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function Gh(r,a,l,u,p,x,w){var T=k();try{ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function Wh(r,a,l,u,p){var x=k();try{ve(r)(a,l,u,p)}catch(w){if(X(x),!(w instanceof O))throw w;_e(1,0)}}function Xh(r,a,l,u,p,x,w,T,N,j,ee,ce,de){var ue=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de)}catch(me){if(X(ue),!(me instanceof O))throw me;_e(1,0)}}function $h(r,a,l,u,p,x,w,T,N,j){var ee=k();try{return ve(r)(a,l,u,p,x,w,T,N,j)}catch(ce){if(X(ee),!(ce instanceof O))throw ce;_e(1,0)}}function jh(r,a,l,u,p,x,w,T,N,j,ee,ce,de){var ue=k();try{return ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de)}catch(me){if(X(ue),!(me instanceof O))throw me;_e(1,0)}}function qh(r,a,l,u,p,x,w){var T=k();try{return ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function Yh(r,a,l,u,p,x,w,T,N,j,ee,ce){var de=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce)}catch(ue){if(X(de),!(ue instanceof O))throw ue;_e(1,0)}}function Kh(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function Zh(r,a,l,u,p,x,w,T,N){var j=k();try{ve(r)(a,l,u,p,x,w,T,N)}catch(ee){if(X(j),!(ee instanceof O))throw ee;_e(1,0)}}function Jh(r,a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We,dt,it,Ft,vt,on,$t){var dn=k();try{return ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We,dt,it,Ft,vt,on,$t)}catch(Pt){if(X(dn),!(Pt instanceof O))throw Pt;_e(1,0)}}function Qh(r,a,l,u,p,x,w,T,N,j,ee,ce){var de=k();try{return ve(r)(a,l,u,p,x,w,T,N,j,ee,ce)}catch(ue){if(X(de),!(ue instanceof O))throw ue;_e(1,0)}}function ep(r,a,l,u,p,x,w){var T=k();try{return ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function tp(r,a,l,u,p,x,w,T,N,j,ee,ce){var de=k();try{return ve(r)(a,l,u,p,x,w,T,N,j,ee,ce)}catch(ue){if(X(de),!(ue instanceof O))throw ue;_e(1,0)}}function np(r,a,l,u,p,x){var w=k();try{return ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function ip(r,a,l,u,p,x,w,T,N,j){var ee=k();try{return ve(r)(a,l,u,p,x,w,T,N,j)}catch(ce){if(X(ee),!(ce instanceof O))throw ce;_e(1,0)}}function rp(r,a,l,u){var p=k();try{return ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function sp(r,a,l){var u=k();try{return ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;_e(1,0)}}function ap(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function op(r,a,l,u,p){var x=k();try{ve(r)(a,l,u,p)}catch(w){if(X(x),!(w instanceof O))throw w;_e(1,0)}}function lp(r,a,l,u){var p=k();try{ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function cp(r,a,l,u,p,x,w,T,N){var j=k();try{ve(r)(a,l,u,p,x,w,T,N)}catch(ee){if(X(j),!(ee instanceof O))throw ee;_e(1,0)}}function up(r,a,l,u,p,x,w,T,N){var j=k();try{return ve(r)(a,l,u,p,x,w,T,N)}catch(ee){if(X(j),!(ee instanceof O))throw ee;_e(1,0)}}function dp(r,a,l,u,p,x,w){var T=k();try{return ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function fp(r,a,l,u){var p=k();try{ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function hp(r,a,l,u,p){var x=k();try{return ve(r)(a,l,u,p)}catch(w){if(X(x),!(w instanceof O))throw w;_e(1,0)}}function pp(r,a,l,u,p){var x=k();try{return ve(r)(a,l,u,p)}catch(w){if(X(x),!(w instanceof O))throw w;_e(1,0)}}function mp(r,a,l,u){var p=k();try{return ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function _p(r,a,l,u,p,x){var w=k();try{return ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function gp(r,a){var l=k();try{return ve(r)(a)}catch(u){if(X(l),!(u instanceof O))throw u;_e(1,0)}}function vp(r,a,l,u,p,x,w,T){var N=k();try{return ve(r)(a,l,u,p,x,w,T)}catch(j){if(X(N),!(j instanceof O))throw j;_e(1,0)}}function xp(r,a,l,u,p,x,w){var T=k();try{ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function Sp(r,a,l,u,p,x,w,T,N,j,ee,ce){var de=k();try{return ve(r)(a,l,u,p,x,w,T,N,j,ee,ce)}catch(ue){if(X(de),!(ue instanceof O))throw ue;_e(1,0)}}function yp(r,a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We,dt,it,Ft,vt,on,$t,dn){var Pt=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We,dt,it,Ft,vt,on,$t,dn)}catch(Ui){if(X(Pt),!(Ui instanceof O))throw Ui;_e(1,0)}}function Mp(r,a,l,u,p,x,w,T,N,j,ee,ce,de){var ue=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de)}catch(me){if(X(ue),!(me instanceof O))throw me;_e(1,0)}}function Ep(r,a,l,u,p,x,w,T){var N=k();try{ve(r)(a,l,u,p,x,w,T)}catch(j){if(X(N),!(j instanceof O))throw j;_e(1,0)}}function bp(r,a,l,u,p,x,w,T,N,j,ee,ce,de){var ue=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de)}catch(me){if(X(ue),!(me instanceof O))throw me;_e(1,0)}}function wp(r,a,l,u,p,x,w){var T=k();try{ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function Tp(r,a,l,u,p,x,w,T,N,j,ee){var ce=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee)}catch(de){if(X(ce),!(de instanceof O))throw de;_e(1,0)}}function Ap(r,a,l,u,p,x,w,T){var N=k();try{return ve(r)(a,l,u,p,x,w,T)}catch(j){if(X(N),!(j instanceof O))throw j;_e(1,0)}}function Cp(r,a,l){var u=k();try{return ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;_e(1,0)}}function Rp(r,a,l){var u=k();try{ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;_e(1,0)}}function Pp(r,a,l,u,p,x,w){var T=k();try{return ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function Dp(r,a,l,u,p,x,w,T,N,j){var ee=k();try{return ve(r)(a,l,u,p,x,w,T,N,j)}catch(ce){if(X(ee),!(ce instanceof O))throw ce;_e(1,0)}}function Lp(r,a,l,u){var p=k();try{return ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function Fp(r,a,l,u,p,x){var w=k();try{return ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function Ip(r,a,l,u,p){var x=k();try{return ve(r)(a,l,u,p)}catch(w){if(X(x),!(w instanceof O))throw w;return _e(1,0),0n}}function Up(r,a,l,u,p){var x=k();try{ve(r)(a,l,u,p)}catch(w){if(X(x),!(w instanceof O))throw w;_e(1,0)}}function Np(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function Op(r,a,l,u){var p=k();try{return ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function Bp(r,a,l,u,p,x){var w=k();try{return ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function kp(r,a,l,u,p,x,w,T,N,j){var ee=k();try{return ve(r)(a,l,u,p,x,w,T,N,j)}catch(ce){if(X(ee),!(ce instanceof O))throw ce;_e(1,0)}}function zp(r,a,l,u,p,x,w,T){var N=k();try{ve(r)(a,l,u,p,x,w,T)}catch(j){if(X(N),!(j instanceof O))throw j;_e(1,0)}}function Vp(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function Hp(r,a,l,u,p,x,w,T){var N=k();try{ve(r)(a,l,u,p,x,w,T)}catch(j){if(X(N),!(j instanceof O))throw j;_e(1,0)}}function Gp(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function Wp(r,a,l){var u=k();try{return ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;return _e(1,0),0n}}function Xp(r,a){var l=k();try{return ve(r)(a)}catch(u){if(X(l),!(u instanceof O))throw u;return _e(1,0),0n}}function $p(r,a,l,u,p,x,w,T,N,j,ee,ce,de){var ue=k();try{return ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de)}catch(me){if(X(ue),!(me instanceof O))throw me;_e(1,0)}}function jp(r,a){var l=k();try{return ve(r)(a)}catch(u){if(X(l),!(u instanceof O))throw u;_e(1,0)}}function qp(r,a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We,dt,it,Ft,vt,on,$t,dn,Pt,Ui,mm,_m,gm,vm,xm,Sm,ym,Mm,Em,bm,wm,Tm,Am,Cm,Rm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,Bm,km,zm,Vm,Hm,Gm,Wm,Xm,$m,jm,qm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_,a_,o_,l_,c_,u_,d_,f_,h_,p_,m_,__,g_,v_,x_,S_,y_){var M_=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We,dt,it,Ft,vt,on,$t,dn,Pt,Ui,mm,_m,gm,vm,xm,Sm,ym,Mm,Em,bm,wm,Tm,Am,Cm,Rm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,Bm,km,zm,Vm,Hm,Gm,Wm,Xm,$m,jm,qm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_,a_,o_,l_,c_,u_,d_,f_,h_,p_,m_,__,g_,v_,x_,S_,y_)}catch(yc){if(X(M_),!(yc instanceof O))throw yc;_e(1,0)}}function Yp(r,a,l,u,p,x,w,T,N,j,ee,ce,de,ue){var me=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de,ue)}catch(We){if(X(me),!(We instanceof O))throw We;_e(1,0)}}function Kp(r,a,l,u,p,x,w,T,N,j,ee){var ce=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee)}catch(de){if(X(ce),!(de instanceof O))throw de;_e(1,0)}}function Zp(r,a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We,dt,it,Ft){var vt=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We,dt,it,Ft)}catch(on){if(X(vt),!(on instanceof O))throw on;_e(1,0)}}function Jp(r,a,l){var u=k();try{return ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;_e(1,0)}}function Qp(r,a,l,u,p,x,w){var T=k();try{ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function em(r,a,l,u,p,x,w){var T=k();try{ve(r)(a,l,u,p,x,w)}catch(N){if(X(T),!(N instanceof O))throw N;_e(1,0)}}function tm(r,a,l){var u=k();try{ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;_e(1,0)}}function nm(r,a,l){var u=k();try{return ve(r)(a,l)}catch(p){if(X(u),!(p instanceof O))throw p;_e(1,0)}}function im(r,a,l,u,p,x){var w=k();try{return ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function rm(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function sm(r,a,l,u){var p=k();try{ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function am(r){var a=k();try{return ve(r)()}catch(l){if(X(a),!(l instanceof O))throw l;return _e(1,0),0n}}function om(r,a,l,u,p,x){var w=k();try{ve(r)(a,l,u,p,x)}catch(T){if(X(w),!(T instanceof O))throw T;_e(1,0)}}function lm(r,a,l,u,p,x,w,T,N,j,ee){var ce=k();try{return ve(r)(a,l,u,p,x,w,T,N,j,ee)}catch(de){if(X(ce),!(de instanceof O))throw de;_e(1,0)}}function cm(r,a,l,u){var p=k();try{return ve(r)(a,l,u)}catch(x){if(X(p),!(x instanceof O))throw x;_e(1,0)}}function um(r,a,l,u,p,x,w,T,N,j,ee,ce){var de=k();try{return ve(r)(a,l,u,p,x,w,T,N,j,ee,ce)}catch(ue){if(X(de),!(ue instanceof O))throw ue;_e(1,0)}}function dm(r,a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We){var dt=k();try{ve(r)(a,l,u,p,x,w,T,N,j,ee,ce,de,ue,me,We)}catch(it){if(X(dt),!(it instanceof O))throw it;_e(1,0)}}var Sc;function fm(){fc(),A()}function Na(){if(Rt>0){ut=Na;return}if(fm(),et(),Rt>0){ut=Na;return}function r(){P(!Sc),Sc=!0,t.calledRun=!0,!z&&(It(),Ue?.(t),t.onRuntimeInitialized?.(),J("onRuntimeInitialized"),P(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),H())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),L()}function hm(){var r=D,a=F,l=!1;D=F=u=>{l=!0};try{Fa(0),["stdout","stderr"].forEach(u=>{var p=y.analyzePath("/dev/"+u);if(p){var x=p.object,w=x.rdev,T=Te.ttys[w];T?.output?.length&&(l=!0)}})}catch{}D=r,F=a,l&&Le("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function pm(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();J("preInit")}pm(),Na(),ht?e=t:e=new Promise((r,a)=>{Ue=r,Pe=a});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){G(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const A_="/car/assets/mujoco-D9UjOFNX.wasm";const Du={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Lu=([i,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(e).forEach(s=>{n.setAttribute(s,String(e[s]))}),t?.length&&t.forEach(s=>{const o=Lu(s);n.appendChild(o)}),n},C_=(i,e={})=>{const n={...Du,...e};return Lu(["svg",n,i])};const R_=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const P_=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const D_=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const L_=i=>{const e=D_(i);return e.charAt(0).toUpperCase()+e.slice(1)};const F_=i=>Array.from(i.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),Ec=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",bc=(i,{nameAttr:e,icons:t,attrs:n})=>{const s=i.getAttribute(e);if(s==null)return;const o=L_(s),c=t[o];if(!c)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const d=F_(i),h=R_(d)?{}:{"aria-hidden":"true"},f={...Du,"data-lucide":s,...h,...n,...d},m=Ec(d),g=Ec(n),_=P_("lucide",`lucide-${s}`,...m,...g);_&&Object.assign(f,{class:_});const v=C_(c,f);return i.parentNode?.replaceChild(v,i)};const I_=[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]];const U_=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];const N_=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];const O_=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];const B_=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]];const k_=[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];const z_=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const V_=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const H_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const G_=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];const W_=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const ml=({icons:i={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:s}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(c=>bc(c,{nameAttr:e,icons:i,attrs:t})),s&&Array.from(n.querySelectorAll("template")).forEach(d=>ml({icons:i,nameAttr:e,attrs:t,root:d.content,inTemplates:s})),e==="data-lucide"){const c=n.querySelectorAll("[icon-name]");c.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(c).forEach(d=>bc(d,{nameAttr:"icon-name",icons:i,attrs:t})))}};const _l="183",X_=0,wc=1,$_=2,na=1,Fu=2,Yr=3,Ai=0,_n=1,Tn=2,li=0,Mr=1,Tc=2,Ac=3,Cc=4,j_=5,Wi=100,q_=101,Y_=102,K_=103,Z_=104,J_=200,Q_=201,eg=202,tg=203,Eo=204,bo=205,ng=206,ig=207,rg=208,sg=209,ag=210,og=211,lg=212,cg=213,ug=214,wo=0,To=1,Ao=2,br=3,Co=4,Ro=5,Po=6,Do=7,Iu=0,dg=1,fg=2,jn=0,Uu=1,Nu=2,Ou=3,gl=4,Bu=5,ku=6,zu=7,Vu=300,Yi=301,wr=302,Oa=303,Ba=304,_a=306,ua=1e3,oi=1001,Lo=1002,tn=1003,hg=1004,Ps=1005,un=1006,ka=1007,$i=1008,Sn=1009,Hu=1010,Gu=1011,es=1012,vl=1013,Yn=1014,In=1015,ui=1016,xl=1017,Sl=1018,ts=1020,Wu=35902,Xu=35899,$u=1021,ju=1022,Un=1023,di=1026,ji=1027,yl=1028,Ml=1029,Tr=1030,El=1031,bl=1033,ia=33776,ra=33777,sa=33778,aa=33779,Fo=35840,Io=35841,Uo=35842,No=35843,Oo=36196,Bo=37492,ko=37496,zo=37488,Vo=37489,Ho=37490,Go=37491,Wo=37808,Xo=37809,$o=37810,jo=37811,qo=37812,Yo=37813,Ko=37814,Zo=37815,Jo=37816,Qo=37817,el=37818,tl=37819,nl=37820,il=37821,rl=36492,sl=36494,al=36495,ol=36283,ll=36284,cl=36285,ul=36286,pg=3200,qu=0,mg=1,bi="",en="srgb",Ar="srgb-linear",da="linear",Ct="srgb",rr=7680,Rc=519,_g=512,gg=513,vg=514,wl=515,xg=516,Sg=517,Tl=518,yg=519,Pc=35044,Dc="300 es",Xn=2e3,ns=2001;function Mg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eg(){const i=is("canvas");return i.style.display="block",i}const Lc={};function Fc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Yu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=Yu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function yt(...i){i=Yu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fa(...i){const e=i.join(" ");e in Lc||(Lc[e]=!0,qe(...i))}function bg(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const wg={[wo]:To,[Ao]:Po,[Co]:Do,[br]:Ro,[To]:wo,[Po]:Ao,[Do]:Co,[Ro]:br};class Pr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],za=Math.PI/180,dl=180/Math.PI;function as(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Tg(i,e){return(i%e+e)%e}function Va(i,e,t){return(1-t)*i+t*e}function Br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*s+e.x,this.y=o*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,c,d){let h=n[s+0],f=n[s+1],m=n[s+2],g=n[s+3],_=o[c+0],v=o[c+1],E=o[c+2],R=o[c+3];if(g!==R||h!==_||f!==v||m!==E){let M=h*_+f*v+m*E+g*R;M<0&&(_=-_,v=-v,E=-E,R=-R,M=-M);let S=1-d;if(M<.9995){const D=Math.acos(M),F=Math.sin(D);S=Math.sin(S*D)/F,d=Math.sin(d*D)/F,h=h*S+_*d,f=f*S+v*d,m=m*S+E*d,g=g*S+R*d}else{h=h*S+_*d,f=f*S+v*d,m=m*S+E*d,g=g*S+R*d;const D=1/Math.sqrt(h*h+f*f+m*m+g*g);h*=D,f*=D,m*=D,g*=D}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,o,c){const d=n[s],h=n[s+1],f=n[s+2],m=n[s+3],g=o[c],_=o[c+1],v=o[c+2],E=o[c+3];return e[t]=d*E+m*g+h*v-f*_,e[t+1]=h*E+m*_+f*g-d*v,e[t+2]=f*E+m*v+d*_-h*g,e[t+3]=m*E-d*g-h*_-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,c=e._order,d=Math.cos,h=Math.sin,f=d(n/2),m=d(s/2),g=d(o/2),_=h(n/2),v=h(s/2),E=h(o/2);switch(c){case"XYZ":this._x=_*m*g+f*v*E,this._y=f*v*g-_*m*E,this._z=f*m*E+_*v*g,this._w=f*m*g-_*v*E;break;case"YXZ":this._x=_*m*g+f*v*E,this._y=f*v*g-_*m*E,this._z=f*m*E-_*v*g,this._w=f*m*g+_*v*E;break;case"ZXY":this._x=_*m*g-f*v*E,this._y=f*v*g+_*m*E,this._z=f*m*E+_*v*g,this._w=f*m*g-_*v*E;break;case"ZYX":this._x=_*m*g-f*v*E,this._y=f*v*g+_*m*E,this._z=f*m*E-_*v*g,this._w=f*m*g+_*v*E;break;case"YZX":this._x=_*m*g+f*v*E,this._y=f*v*g+_*m*E,this._z=f*m*E-_*v*g,this._w=f*m*g-_*v*E;break;case"XZY":this._x=_*m*g-f*v*E,this._y=f*v*g-_*m*E,this._z=f*m*E+_*v*g,this._w=f*m*g+_*v*E;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],c=t[1],d=t[5],h=t[9],f=t[2],m=t[6],g=t[10],_=n+d+g;if(_>0){const v=.5/Math.sqrt(_+1);this._w=.25/v,this._x=(m-h)*v,this._y=(o-f)*v,this._z=(c-s)*v}else if(n>d&&n>g){const v=2*Math.sqrt(1+n-d-g);this._w=(m-h)/v,this._x=.25*v,this._y=(s+c)/v,this._z=(o+f)/v}else if(d>g){const v=2*Math.sqrt(1+d-n-g);this._w=(o-f)/v,this._x=(s+c)/v,this._y=.25*v,this._z=(h+m)/v}else{const v=2*Math.sqrt(1+g-n-d);this._w=(c-s)/v,this._x=(o+f)/v,this._y=(h+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,c=e._w,d=t._x,h=t._y,f=t._z,m=t._w;return this._x=n*m+c*d+s*f-o*h,this._y=s*m+c*h+o*d-n*f,this._z=o*m+c*f+n*h-s*d,this._w=c*m-n*d-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,o=e._z,c=e._w,d=this.dot(e);d<0&&(n=-n,s=-s,o=-o,c=-c,d=-d);let h=1-t;if(d<.9995){const f=Math.acos(d),m=Math.sin(f);h=Math.sin(h*f)/m,t=Math.sin(t*f)/m,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,c=e.y,d=e.z,h=e.w,f=2*(c*s-d*n),m=2*(d*t-o*s),g=2*(o*n-c*t);return this.x=t+h*f+c*g-d*m,this.y=n+h*m+d*f-o*g,this.z=s+h*g+o*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,c=t.x,d=t.y,h=t.z;return this.x=s*h-o*d,this.y=o*c-n*h,this.z=n*d-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new q,Ic=new Zi;class nt{constructor(e,t,n,s,o,c,d,h,f){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,c,d,h,f)}set(e,t,n,s,o,c,d,h,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=d,m[3]=t,m[4]=o,m[5]=h,m[6]=n,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,c=n[0],d=n[3],h=n[6],f=n[1],m=n[4],g=n[7],_=n[2],v=n[5],E=n[8],R=s[0],M=s[3],S=s[6],D=s[1],F=s[4],I=s[7],z=s[2],P=s[5],V=s[8];return o[0]=c*R+d*D+h*z,o[3]=c*M+d*F+h*P,o[6]=c*S+d*I+h*V,o[1]=f*R+m*D+g*z,o[4]=f*M+m*F+g*P,o[7]=f*S+m*I+g*V,o[2]=_*R+v*D+E*z,o[5]=_*M+v*F+E*P,o[8]=_*S+v*I+E*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8];return t*c*m-t*d*f-n*o*m+n*d*h+s*o*f-s*c*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],g=m*c-d*f,_=d*h-m*o,v=f*o-c*h,E=t*g+n*_+s*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=g*R,e[1]=(s*f-m*n)*R,e[2]=(d*n-s*c)*R,e[3]=_*R,e[4]=(m*t-s*h)*R,e[5]=(s*o-d*t)*R,e[6]=v*R,e[7]=(n*h-f*t)*R,e[8]=(c*t-n*o)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,c,d){const h=Math.cos(o),f=Math.sin(o);return this.set(n*h,n*f,-n*(h*c+f*d)+c+e,-s*f,s*h,-s*(-f*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new nt,Uc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ag(){const i={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ct&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ct&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return fa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return fa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ar]:{primaries:e,whitePoint:n,transfer:da,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}const xt=Ag();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let sr;class Cg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=is("canvas")),sr.width=e.width,sr.height=e.height;const s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=ci(o[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rg=0;class Al{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,d=s.length;c<d;c++)s[c].isDataTexture?o.push(Wa(s[c].image)):o.push(Wa(s[c]))}else o=Wa(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Pg=0;const Xa=new q;class rn extends Pr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=oi,s=oi,o=un,c=$i,d=Un,h=Sn,f=rn.DEFAULT_ANISOTROPY,m=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=as(),this.name="",this.source=new Al(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Vu;rn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,s=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const h=e.elements,f=h[0],m=h[4],g=h[8],_=h[1],v=h[5],E=h[9],R=h[2],M=h[6],S=h[10];if(Math.abs(m-_)<.01&&Math.abs(g-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+R)<.1&&Math.abs(E+M)<.1&&Math.abs(f+v+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(f+1)/2,I=(v+1)/2,z=(S+1)/2,P=(m+_)/4,V=(g+R)/4,A=(E+M)/4;return F>I&&F>z?F<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(F),s=P/n,o=V/n):I>z?I<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(I),n=P/s,o=A/s):z<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(z),n=V/o,s=A/o),this.set(n,s,o,t),this}let D=Math.sqrt((M-E)*(M-E)+(g-R)*(g-R)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(g-R)/D,this.z=(_-m)/D,this.w=Math.acos((f+v+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dg extends Pr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},o=new rn(s),c=n.count;for(let d=0;d<c;d++)this.textures[d]=o.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Al(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Dg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ku extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lg extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dt{constructor(e,t,n,s,o,c,d,h,f,m,g,_,v,E,R,M){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,c,d,h,f,m,g,_,v,E,R,M)}set(e,t,n,s,o,c,d,h,f,m,g,_,v,E,R,M){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=s,S[1]=o,S[5]=c,S[9]=d,S[13]=h,S[2]=f,S[6]=m,S[10]=g,S[14]=_,S[3]=v,S[7]=E,S[11]=R,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ar.setFromMatrixColumn(e,0).length(),o=1/ar.setFromMatrixColumn(e,1).length(),c=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,c=Math.cos(n),d=Math.sin(n),h=Math.cos(s),f=Math.sin(s),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=c*m,v=c*g,E=d*m,R=d*g;t[0]=h*m,t[4]=-h*g,t[8]=f,t[1]=v+E*f,t[5]=_-R*f,t[9]=-d*h,t[2]=R-_*f,t[6]=E+v*f,t[10]=c*h}else if(e.order==="YXZ"){const _=h*m,v=h*g,E=f*m,R=f*g;t[0]=_+R*d,t[4]=E*d-v,t[8]=c*f,t[1]=c*g,t[5]=c*m,t[9]=-d,t[2]=v*d-E,t[6]=R+_*d,t[10]=c*h}else if(e.order==="ZXY"){const _=h*m,v=h*g,E=f*m,R=f*g;t[0]=_-R*d,t[4]=-c*g,t[8]=E+v*d,t[1]=v+E*d,t[5]=c*m,t[9]=R-_*d,t[2]=-c*f,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const _=c*m,v=c*g,E=d*m,R=d*g;t[0]=h*m,t[4]=E*f-v,t[8]=_*f+R,t[1]=h*g,t[5]=R*f+_,t[9]=v*f-E,t[2]=-f,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,v=c*f,E=d*h,R=d*f;t[0]=h*m,t[4]=R-_*g,t[8]=E*g+v,t[1]=g,t[5]=c*m,t[9]=-d*m,t[2]=-f*m,t[6]=v*g+E,t[10]=_-R*g}else if(e.order==="XZY"){const _=c*h,v=c*f,E=d*h,R=d*f;t[0]=h*m,t[4]=-g,t[8]=f*m,t[1]=_*g+R,t[5]=c*m,t[9]=v*g-E,t[2]=E*g-v,t[6]=d*m,t[10]=R*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fg,e,Ig)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),gi.crossVectors(n,vn),gi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),gi.crossVectors(n,vn)),gi.normalize(),Ds.crossVectors(vn,gi),s[0]=gi.x,s[4]=Ds.x,s[8]=vn.x,s[1]=gi.y,s[5]=Ds.y,s[9]=vn.y,s[2]=gi.z,s[6]=Ds.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,c=n[0],d=n[4],h=n[8],f=n[12],m=n[1],g=n[5],_=n[9],v=n[13],E=n[2],R=n[6],M=n[10],S=n[14],D=n[3],F=n[7],I=n[11],z=n[15],P=s[0],V=s[4],A=s[8],L=s[12],O=s[1],B=s[5],Y=s[9],J=s[13],K=s[2],ne=s[6],Z=s[10],ie=s[14],pe=s[3],ge=s[7],Re=s[11],Ue=s[15];return o[0]=c*P+d*O+h*K+f*pe,o[4]=c*V+d*B+h*ne+f*ge,o[8]=c*A+d*Y+h*Z+f*Re,o[12]=c*L+d*J+h*ie+f*Ue,o[1]=m*P+g*O+_*K+v*pe,o[5]=m*V+g*B+_*ne+v*ge,o[9]=m*A+g*Y+_*Z+v*Re,o[13]=m*L+g*J+_*ie+v*Ue,o[2]=E*P+R*O+M*K+S*pe,o[6]=E*V+R*B+M*ne+S*ge,o[10]=E*A+R*Y+M*Z+S*Re,o[14]=E*L+R*J+M*ie+S*Ue,o[3]=D*P+F*O+I*K+z*pe,o[7]=D*V+F*B+I*ne+z*ge,o[11]=D*A+F*Y+I*Z+z*Re,o[15]=D*L+F*J+I*ie+z*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],c=e[1],d=e[5],h=e[9],f=e[13],m=e[2],g=e[6],_=e[10],v=e[14],E=e[3],R=e[7],M=e[11],S=e[15],D=h*v-f*_,F=d*v-f*g,I=d*_-h*g,z=c*v-f*m,P=c*_-h*m,V=c*g-d*m;return t*(R*D-M*F+S*I)-n*(E*D-M*z+S*P)+s*(E*F-R*z+S*V)-o*(E*I-R*P+M*V)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],g=e[9],_=e[10],v=e[11],E=e[12],R=e[13],M=e[14],S=e[15],D=t*d-n*c,F=t*h-s*c,I=t*f-o*c,z=n*h-s*d,P=n*f-o*d,V=s*f-o*h,A=m*R-g*E,L=m*M-_*E,O=m*S-v*E,B=g*M-_*R,Y=g*S-v*R,J=_*S-v*M,K=D*J-F*Y+I*B+z*O-P*L+V*A;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/K;return e[0]=(d*J-h*Y+f*B)*ne,e[1]=(s*Y-n*J-o*B)*ne,e[2]=(R*V-M*P+S*z)*ne,e[3]=(_*P-g*V-v*z)*ne,e[4]=(h*O-c*J-f*L)*ne,e[5]=(t*J-s*O+o*L)*ne,e[6]=(M*I-E*V-S*F)*ne,e[7]=(m*V-_*I+v*F)*ne,e[8]=(c*Y-d*O+f*A)*ne,e[9]=(n*O-t*Y-o*A)*ne,e[10]=(E*P-R*I+S*D)*ne,e[11]=(g*I-m*P-v*D)*ne,e[12]=(d*L-c*B-h*A)*ne,e[13]=(t*B-n*L+s*A)*ne,e[14]=(R*F-E*z-M*D)*ne,e[15]=(m*z-g*F+_*D)*ne,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,c=e.x,d=e.y,h=e.z,f=o*c,m=o*d;return this.set(f*c+n,f*d-s*h,f*h+s*d,0,f*d+s*h,m*d+n,m*h-s*c,0,f*h-s*d,m*h+s*c,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,c){return this.set(1,n,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,c=t._y,d=t._z,h=t._w,f=o+o,m=c+c,g=d+d,_=o*f,v=o*m,E=o*g,R=c*m,M=c*g,S=d*g,D=h*f,F=h*m,I=h*g,z=n.x,P=n.y,V=n.z;return s[0]=(1-(R+S))*z,s[1]=(v+I)*z,s[2]=(E-F)*z,s[3]=0,s[4]=(v-I)*P,s[5]=(1-(_+S))*P,s[6]=(M+D)*P,s[7]=0,s[8]=(E+F)*V,s[9]=(M-D)*V,s[10]=(1-(_+R))*V,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return n.set(1,1,1),t.identity(),this;let c=ar.set(s[0],s[1],s[2]).length();const d=ar.set(s[4],s[5],s[6]).length(),h=ar.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Rn.copy(this);const f=1/c,m=1/d,g=1/h;return Rn.elements[0]*=f,Rn.elements[1]*=f,Rn.elements[2]*=f,Rn.elements[4]*=m,Rn.elements[5]*=m,Rn.elements[6]*=m,Rn.elements[8]*=g,Rn.elements[9]*=g,Rn.elements[10]*=g,t.setFromRotationMatrix(Rn),n.x=c,n.y=d,n.z=h,this}makePerspective(e,t,n,s,o,c,d=Xn,h=!1){const f=this.elements,m=2*o/(t-e),g=2*o/(n-s),_=(t+e)/(t-e),v=(n+s)/(n-s);let E,R;if(h)E=o/(c-o),R=c*o/(c-o);else if(d===Xn)E=-(c+o)/(c-o),R=-2*c*o/(c-o);else if(d===ns)E=-c/(c-o),R=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=g,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=E,f[14]=R,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,o,c,d=Xn,h=!1){const f=this.elements,m=2/(t-e),g=2/(n-s),_=-(t+e)/(t-e),v=-(n+s)/(n-s);let E,R;if(h)E=1/(c-o),R=c/(c-o);else if(d===Xn)E=-2/(c-o),R=-(c+o)/(c-o);else if(d===ns)E=-1/(c-o),R=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=0,f[12]=_,f[1]=0,f[5]=g,f[9]=0,f[13]=v,f[2]=0,f[6]=0,f[10]=E,f[14]=R,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ar=new q,Rn=new Dt,Fg=new q(0,0,0),Ig=new q(1,1,1),gi=new q,Ds=new q,vn=new q,Oc=new Dt,Bc=new Zi;class Kn{constructor(e=0,t=0,n=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],c=s[4],d=s[8],h=s[1],f=s[5],m=s[9],g=s[2],_=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,v),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(lt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-lt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,v),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(d,v));break;case"XZY":this._z=Math.asin(-lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-m,v),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ug=0;const kc=new q,or=new Zi,ei=new Dt,Ls=new q,kr=new q,Ng=new q,Og=new Zi,zc=new q(1,0,0),Vc=new q(0,1,0),Hc=new q(0,0,1),Gc={type:"added"},Bg={type:"removed"},lr={type:"childadded",child:null},$a={type:"childremoved",child:null};class qt extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new q,t=new Kn,n=new Zi,s=new q(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new nt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Hc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ls.copy(e):Ls.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(kr,Ls,this.up):ei.lookAt(Ls,kr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),or.setFromRotationMatrix(ei),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gc),lr.child=e,this.dispatchEvent(lr),lr.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bg),$a.child=e,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gc),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*s,o[13]+=n-o[1]*t-o[5]*n-o[9]*s,o[14]+=s-o[2]*t-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(o(e.materials,this.material[h]));s.material=d}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];s.animations.push(o(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),f=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),v=c(e.animations),E=c(e.nodes);d.length>0&&(n.geometries=d),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),_.length>0&&(n.skeletons=_),v.length>0&&(n.animations=v),E.length>0&&(n.nodes=E)}return n.object=s,n;function c(d){const h=[];for(const f in d){const m=d[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}qt.DEFAULT_UP=new q(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qi extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kg={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,c=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const R of e.hand.values()){const M=t.getJointPose(R,n),S=this._getHandJoint(f,R);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=m.position.distanceTo(g.position),v=.02,E=.005;f.inputState.pinching&&_>v+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=v-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return d!==null&&(d.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=Tg(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=qa(c,o,e+1/3),this.g=qa(c,o,e),this.b=qa(c,o,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(o){o!==void 0&&parseFloat(o)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],d=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return xt.workingToColorSpace(cn.copy(this),e),Math.round(lt(cn.r*255,0,255))*65536+Math.round(lt(cn.g*255,0,255))*256+Math.round(lt(cn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(cn.copy(this),t);const n=cn.r,s=cn.g,o=cn.b,c=Math.max(n,s,o),d=Math.min(n,s,o);let h,f;const m=(d+c)/2;if(d===c)h=0,f=0;else{const g=c-d;switch(f=m<=.5?g/(c+d):g/(2-c-d),c){case n:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-n)/g+2;break;case o:h=(n-s)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=en){xt.workingToColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,s=cn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Fs);const n=Va(vi.h,Fs.h,t),s=Va(vi.s,Fs.s,t),o=Va(vi.l,Fs.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new ft;ft.NAMES=Ju;class Cl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(e),this.near=t,this.far=n}clone(){return new Cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zg extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pn=new q,ti=new q,Ya=new q,ni=new q,cr=new q,ur=new q,Wc=new q,Ka=new q,Za=new q,Ja=new q,Qa=new kt,eo=new kt,to=new kt;class Fn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Pn.subVectors(s,t),ti.subVectors(n,t),Ya.subVectors(e,t);const c=Pn.dot(Pn),d=Pn.dot(ti),h=Pn.dot(Ya),f=ti.dot(ti),m=ti.dot(Ya),g=c*f-d*d;if(g===0)return o.set(0,0,0),null;const _=1/g,v=(f*h-d*m)*_,E=(c*m-d*h)*_;return o.set(1-v-E,E,v)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,o,c,d,h){return this.getBarycoord(e,t,n,s,ni)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,ni.x),h.addScaledVector(c,ni.y),h.addScaledVector(d,ni.z),h)}static getInterpolatedAttribute(e,t,n,s,o,c){return Qa.setScalar(0),eo.setScalar(0),to.setScalar(0),Qa.fromBufferAttribute(e,t),eo.fromBufferAttribute(e,n),to.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Qa,o.x),c.addScaledVector(eo,o.y),c.addScaledVector(to,o.z),c}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),ti.subVectors(e,t),Pn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let c,d;cr.subVectors(s,n),ur.subVectors(o,n),Ka.subVectors(e,n);const h=cr.dot(Ka),f=ur.dot(Ka);if(h<=0&&f<=0)return t.copy(n);Za.subVectors(e,s);const m=cr.dot(Za),g=ur.dot(Za);if(m>=0&&g<=m)return t.copy(s);const _=h*g-m*f;if(_<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(n).addScaledVector(cr,c);Ja.subVectors(e,o);const v=cr.dot(Ja),E=ur.dot(Ja);if(E>=0&&v<=E)return t.copy(o);const R=v*f-h*E;if(R<=0&&f>=0&&E<=0)return d=f/(f-E),t.copy(n).addScaledVector(ur,d);const M=m*E-v*g;if(M<=0&&g-m>=0&&v-E>=0)return Wc.subVectors(o,s),d=(g-m)/(g-m+(v-E)),t.copy(s).addScaledVector(Wc,d);const S=1/(M+R+_);return c=R*S,d=_*S,t.copy(n).addScaledVector(cr,c).addScaledVector(ur,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ji{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=o.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Dn):Dn.fromBufferAttribute(o,c),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Us.subVectors(this.max,zr),dr.subVectors(e.a,zr),fr.subVectors(e.b,zr),hr.subVectors(e.c,zr),xi.subVectors(fr,dr),Si.subVectors(hr,fr),Ni.subVectors(dr,hr);let t=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-Ni.z,Ni.y,xi.z,0,-xi.x,Si.z,0,-Si.x,Ni.z,0,-Ni.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-Ni.y,Ni.x,0];return!no(t,dr,fr,hr,Us)||(t=[1,0,0,0,1,0,0,0,1],!no(t,dr,fr,hr,Us))?!1:(Ns.crossVectors(xi,Si),t=[Ns.x,Ns.y,Ns.z],no(t,dr,fr,hr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new q,new q,new q,new q,new q,new q,new q,new q],Dn=new q,Is=new Ji,dr=new q,fr=new q,hr=new q,xi=new q,Si=new q,Ni=new q,zr=new q,Us=new q,Ns=new q,Oi=new q;function no(i,e,t,n,s){for(let o=0,c=i.length-3;o<=c;o+=3){Oi.fromArray(i,o);const d=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),h=e.dot(Oi),f=t.dot(Oi),m=n.dot(Oi);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>d)return!1}return!0}const Vt=new q,Os=new St;let Vg=0;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),n=hn(n,this.array),s=hn(s,this.array),o=hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pc&&(e.usage=this.usage),e}}class Qu extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ed extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hg=new Ji,Vr=new q,io=new q;class Dr{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hg.setFromPoints(e).getCenter(n);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(io)),this.expandByPoint(Vr.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gg=0;const bn=new Dt,ro=new qt,pr=new q,xn=new Ji,Hr=new Ji,Zt=new q;class nn extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mg(e)?ed:Qu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new nt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new sn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];xn.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const d=t[o];Hr.setFromBufferAttribute(d),this.morphTargetsRelative?(Zt.addVectors(xn.min,Hr.min),xn.expandByPoint(Zt),Zt.addVectors(xn.max,Hr.max),xn.expandByPoint(Zt)):(xn.expandByPoint(Hr.min),xn.expandByPoint(Hr.max))}xn.getCenter(n);let s=0;for(let o=0,c=e.count;o<c;o++)Zt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let o=0,c=t.length;o<c;o++){const d=t[o],h=this.morphTargetsRelative;for(let f=0,m=d.count;f<m;f++)Zt.fromBufferAttribute(d,f),h&&(pr.fromBufferAttribute(e,f),Zt.add(pr)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let A=0;A<n.count;A++)d[A]=new q,h[A]=new q;const f=new q,m=new q,g=new q,_=new St,v=new St,E=new St,R=new q,M=new q;function S(A,L,O){f.fromBufferAttribute(n,A),m.fromBufferAttribute(n,L),g.fromBufferAttribute(n,O),_.fromBufferAttribute(o,A),v.fromBufferAttribute(o,L),E.fromBufferAttribute(o,O),m.sub(f),g.sub(f),v.sub(_),E.sub(_);const B=1/(v.x*E.y-E.x*v.y);isFinite(B)&&(R.copy(m).multiplyScalar(E.y).addScaledVector(g,-v.y).multiplyScalar(B),M.copy(g).multiplyScalar(v.x).addScaledVector(m,-E.x).multiplyScalar(B),d[A].add(R),d[L].add(R),d[O].add(R),h[A].add(M),h[L].add(M),h[O].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,L=D.length;A<L;++A){const O=D[A],B=O.start,Y=O.count;for(let J=B,K=B+Y;J<K;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const F=new q,I=new q,z=new q,P=new q;function V(A){z.fromBufferAttribute(s,A),P.copy(z);const L=d[A];F.copy(L),F.sub(z.multiplyScalar(z.dot(L))).normalize(),I.crossVectors(P,L);const B=I.dot(h[A])<0?-1:1;c.setXYZW(A,F.x,F.y,F.z,B)}for(let A=0,L=D.length;A<L;++A){const O=D[A],B=O.start,Y=O.count;for(let J=B,K=B+Y;J<K;J+=3)V(e.getX(J+0)),V(e.getX(J+1)),V(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,v=n.count;_<v;_++)n.setXYZ(_,0,0,0);const s=new q,o=new q,c=new q,d=new q,h=new q,f=new q,m=new q,g=new q;if(e)for(let _=0,v=e.count;_<v;_+=3){const E=e.getX(_+0),R=e.getX(_+1),M=e.getX(_+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,R),c.fromBufferAttribute(t,M),m.subVectors(c,o),g.subVectors(s,o),m.cross(g),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,R),f.fromBufferAttribute(n,M),d.add(m),h.add(m),f.add(m),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(R,h.x,h.y,h.z),n.setXYZ(M,f.x,f.y,f.z)}else for(let _=0,v=t.count;_<v;_+=3)s.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,o),g.subVectors(s,o),m.cross(g),n.setXYZ(_+0,m.x,m.y,m.z),n.setXYZ(_+1,m.x,m.y,m.z),n.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(d,h){const f=d.array,m=d.itemSize,g=d.normalized,_=new f.constructor(h.length*m);let v=0,E=0;for(let R=0,M=h.length;R<M;R++){d.isInterleavedBufferAttribute?v=h[R]*d.data.stride+d.offset:v=h[R]*m;for(let S=0;S<m;S++)_[E++]=f[v++]}return new gn(_,m,g)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nn,n=this.index.array,s=this.attributes;for(const d in s){const h=s[d],f=e(h,n);t.setAttribute(d,f)}const o=this.morphAttributes;for(const d in o){const h=[],f=o[d];for(let m=0,g=f.length;m<g;m++){const _=f[m],v=e(_,n);h.push(v)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const f=c[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let g=0,_=f.length;g<_;g++){const v=f[g];m.push(v.toJSON(e.data))}m.length>0&&(s[h]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],g=o[f];for(let _=0,v=g.length;_<v;_++)m.push(g[_].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Wg=0;class Lr extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Mr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=bo,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eo&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ri=new q,so=new q,Bs=new q,yi=new q,ao=new q,ks=new q,oo=new q;class td{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){so.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(so);const o=e.distanceTo(t)*.5,c=-this.direction.dot(Bs),d=yi.dot(this.direction),h=-yi.dot(Bs),f=yi.lengthSq(),m=Math.abs(1-c*c);let g,_,v,E;if(m>0)if(g=c*h-d,_=c*d-h,E=o*m,g>=0)if(_>=-E)if(_<=E){const R=1/m;g*=R,_*=R,v=g*(g+c*_+2*d)+_*(c*g+_+2*h)+f}else _=o,g=Math.max(0,-(c*_+d)),v=-g*g+_*(_+2*h)+f;else _=-o,g=Math.max(0,-(c*_+d)),v=-g*g+_*(_+2*h)+f;else _<=-E?(g=Math.max(0,-(-c*o+d)),_=g>0?-o:Math.min(Math.max(-o,-h),o),v=-g*g+_*(_+2*h)+f):_<=E?(g=0,_=Math.min(Math.max(-o,-h),o),v=_*(_+2*h)+f):(g=Math.max(0,-(c*o+d)),_=g>0?o:Math.min(Math.max(-o,-h),o),v=-g*g+_*(_+2*h)+f);else _=c>0?-o:o,g=Math.max(0,-(c*_+d)),v=-g*g+_*(_+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(so).addScaledVector(Bs,_),v}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),d=n-c,h=n+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,c,d,h;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(n=(e.min.x-_.x)*f,s=(e.max.x-_.x)*f):(n=(e.max.x-_.x)*f,s=(e.min.x-_.x)*f),m>=0?(o=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(o=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),n>c||o>s||((o>n||isNaN(n))&&(n=o),(c<s||isNaN(s))&&(s=c),g>=0?(d=(e.min.z-_.z)*g,h=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,h=(e.min.z-_.z)*g),n>h||d>s)||((d>n||n!==n)&&(n=d),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,o){ao.subVectors(t,e),ks.subVectors(n,e),oo.crossVectors(ao,ks);let c=this.direction.dot(oo),d;if(c>0){if(s)return null;d=1}else if(c<0)d=-1,c=-c;else return null;yi.subVectors(this.origin,e);const h=d*this.direction.dot(ks.crossVectors(yi,ks));if(h<0)return null;const f=d*this.direction.dot(ao.cross(yi));if(f<0||h+f>c)return null;const m=-d*yi.dot(oo);return m<0?null:this.at(m/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ei extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xc=new Dt,Bi=new td,zs=new Dr,$c=new q,Vs=new q,Hs=new q,Gs=new q,lo=new q,Ws=new q,jc=new q,Xs=new q;class Bt extends qt{constructor(e=new nn,t=new Ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(o&&d){Ws.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const m=d[h],g=o[h];m!==0&&(lo.fromBufferAttribute(g,e),c?Ws.addScaledVector(lo,m):Ws.addScaledVector(lo.sub(t),m))}t.add(Ws)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(o),Bi.copy(e.ray).recast(e.near),!(zs.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(zs,$c)===null||Bi.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(Xc.copy(o).invert(),Bi.copy(e.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let s;const o=this.geometry,c=this.material,d=o.index,h=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,_=o.groups,v=o.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,R=_.length;E<R;E++){const M=_[E],S=c[M.materialIndex],D=Math.max(M.start,v.start),F=Math.min(d.count,Math.min(M.start+M.count,v.start+v.count));for(let I=D,z=F;I<z;I+=3){const P=d.getX(I),V=d.getX(I+1),A=d.getX(I+2);s=$s(this,S,e,n,f,m,g,P,V,A),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const E=Math.max(0,v.start),R=Math.min(d.count,v.start+v.count);for(let M=E,S=R;M<S;M+=3){const D=d.getX(M),F=d.getX(M+1),I=d.getX(M+2);s=$s(this,c,e,n,f,m,g,D,F,I),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,R=_.length;E<R;E++){const M=_[E],S=c[M.materialIndex],D=Math.max(M.start,v.start),F=Math.min(h.count,Math.min(M.start+M.count,v.start+v.count));for(let I=D,z=F;I<z;I+=3){const P=I,V=I+1,A=I+2;s=$s(this,S,e,n,f,m,g,P,V,A),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const E=Math.max(0,v.start),R=Math.min(h.count,v.start+v.count);for(let M=E,S=R;M<S;M+=3){const D=M,F=M+1,I=M+2;s=$s(this,c,e,n,f,m,g,D,F,I),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}}}function Xg(i,e,t,n,s,o,c,d){let h;if(e.side===_n?h=n.intersectTriangle(c,o,s,!0,d):h=n.intersectTriangle(s,o,c,e.side===Ai,d),h===null)return null;Xs.copy(d),Xs.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Xs);return f<t.near||f>t.far?null:{distance:f,point:Xs.clone(),object:i}}function $s(i,e,t,n,s,o,c,d,h,f){i.getVertexPosition(d,Vs),i.getVertexPosition(h,Hs),i.getVertexPosition(f,Gs);const m=Xg(i,e,t,n,Vs,Hs,Gs,jc);if(m){const g=new q;Fn.getBarycoord(jc,Vs,Hs,Gs,g),s&&(m.uv=Fn.getInterpolatedAttribute(s,d,h,f,g,new St)),o&&(m.uv1=Fn.getInterpolatedAttribute(o,d,h,f,g,new St)),c&&(m.normal=Fn.getInterpolatedAttribute(c,d,h,f,g,new q),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const _={a:d,b:h,c:f,normal:new q,materialIndex:0};Fn.getNormal(Vs,Hs,Gs,_.normal),m.face=_,m.barycoord=g}return m}class nd extends rn{constructor(e=null,t=1,n=1,s,o,c,d,h,f=tn,m=tn,g,_){super(null,c,d,h,f,m,s,o,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qc extends gn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mr=new Dt,Yc=new Dt,js=[],Kc=new Ji,$g=new Dt,Gr=new Bt,Wr=new Dr;class jg extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$g)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Kc.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Kc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Wr.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,c=e*o+1;for(let d=0;d<n.length;d++)n[d]=s[c+d]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,mr),Yc.multiplyMatrices(n,mr),Gr.matrixWorld=Yc,Gr.raycast(e,js);for(let c=0,d=js.length;c<d;c++){const h=js[c];h.instanceId=o,h.object=this,t.push(h)}js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nd(new Float32Array(s*this.count),s,this.count,yl,In));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<n.length;f++)c+=n[f];const d=this.geometry.morphTargetsRelative?1:1-c,h=s*e;o[h]=d,o.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const co=new q,qg=new q,Yg=new nt;class Gi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=co.subVectors(n,t).cross(qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yg.getNormalMatrix(e),s=this.coplanarPoint(co).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Dr,Kg=new St(.5,.5),qs=new q;class Rl{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,o=new Gi,c=new Gi){this.planes=[e,t,n,s,o,c]}set(e,t,n,s,o,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(n),d[3].copy(s),d[4].copy(o),d[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const s=this.planes,o=e.elements,c=o[0],d=o[1],h=o[2],f=o[3],m=o[4],g=o[5],_=o[6],v=o[7],E=o[8],R=o[9],M=o[10],S=o[11],D=o[12],F=o[13],I=o[14],z=o[15];if(s[0].setComponents(f-c,v-m,S-E,z-D).normalize(),s[1].setComponents(f+c,v+m,S+E,z+D).normalize(),s[2].setComponents(f+d,v+g,S+R,z+F).normalize(),s[3].setComponents(f-d,v-g,S-R,z-F).normalize(),n)s[4].setComponents(h,_,M,I).normalize(),s[5].setComponents(f-h,v-_,S-M,z-I).normalize();else if(s[4].setComponents(f-h,v-_,S-M,z-I).normalize(),t===Xn)s[5].setComponents(f+h,v+_,S+M,z+I).normalize();else if(t===ns)s[5].setComponents(h,_,M,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=Kg.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qs.x=s.normal.x>0?e.max.x:e.min.x,qs.y=s.normal.y>0?e.max.y:e.min.y,qs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oa extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ha=new q,pa=new q,Zc=new Dt,Xr=new td,Ys=new Dr,uo=new q,Jc=new q;class fl extends qt{constructor(e=new nn,t=new oa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)ha.fromBufferAttribute(t,s-1),pa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ha.distanceTo(pa);e.setAttribute("lineDistance",new sn(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=o,e.ray.intersectsSphere(Ys)===!1)return;Zc.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Zc);const d=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=this.isLineSegments?2:1,m=n.index,_=n.attributes.position;if(m!==null){const v=Math.max(0,c.start),E=Math.min(m.count,c.start+c.count);for(let R=v,M=E-1;R<M;R+=f){const S=m.getX(R),D=m.getX(R+1),F=Ks(this,e,Xr,h,S,D,R);F&&t.push(F)}if(this.isLineLoop){const R=m.getX(E-1),M=m.getX(v),S=Ks(this,e,Xr,h,R,M,E-1);S&&t.push(S)}}else{const v=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let R=v,M=E-1;R<M;R+=f){const S=Ks(this,e,Xr,h,R,R+1,R);S&&t.push(S)}if(this.isLineLoop){const R=Ks(this,e,Xr,h,E-1,v,E-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const d=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function Ks(i,e,t,n,s,o,c){const d=i.geometry.attributes.position;if(ha.fromBufferAttribute(d,s),pa.fromBufferAttribute(d,o),t.distanceSqToSegment(ha,pa,uo,Jc)>n)return;uo.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(uo);if(!(f<e.near||f>e.far))return{distance:f,point:Jc.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}class Zg extends fl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class id extends rn{constructor(e=[],t=Yi,n,s,o,c,d,h,f,m){super(e,t,n,s,o,c,d,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pl extends rn{constructor(e,t,n,s,o,c,d,h,f){super(e,t,n,s,o,c,d,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rs extends rn{constructor(e,t,n=Yn,s,o,c,d=tn,h=tn,f,m=di,g=1){if(m!==di&&m!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:g};super(_,s,o,c,d,h,m,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Al(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jg extends rs{constructor(e,t=Yn,n=Yi,s,o,c=tn,d=tn,h,f=di){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,n,s,o,c,d,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rd extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ki extends nn{constructor(e=1,t=1,n=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:c};const d=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],m=[],g=[];let _=0,v=0;E("z","y","x",-1,-1,n,t,e,c,o,0),E("z","y","x",1,-1,n,t,-e,c,o,1),E("x","z","y",1,1,e,n,t,s,c,2),E("x","z","y",1,-1,e,n,-t,s,c,3),E("x","y","z",1,-1,e,t,n,s,o,4),E("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(h),this.setAttribute("position",new sn(f,3)),this.setAttribute("normal",new sn(m,3)),this.setAttribute("uv",new sn(g,2));function E(R,M,S,D,F,I,z,P,V,A,L){const O=I/V,B=z/A,Y=I/2,J=z/2,K=P/2,ne=V+1,Z=A+1;let ie=0,pe=0;const ge=new q;for(let Re=0;Re<Z;Re++){const Ue=Re*B-J;for(let Pe=0;Pe<ne;Pe++){const Ye=Pe*O-Y;ge[R]=Ye*D,ge[M]=Ue*F,ge[S]=K,f.push(ge.x,ge.y,ge.z),ge[R]=0,ge[M]=0,ge[S]=P>0?1:-1,m.push(ge.x,ge.y,ge.z),g.push(Pe/V),g.push(1-Re/A),ie+=1}}for(let Re=0;Re<A;Re++)for(let Ue=0;Ue<V;Ue++){const Pe=_+Ue+ne*Re,Ye=_+Ue+ne*(Re+1),Je=_+(Ue+1)+ne*(Re+1),at=_+(Ue+1)+ne*Re;h.push(Pe,Ye,at),h.push(Ye,Je,at),pe+=6}d.addGroup(v,pe,L),v+=pe,_+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zr extends nn{constructor(e=1,t=1,n=1,s=32,o=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:c,thetaStart:d,thetaLength:h};const f=this;s=Math.floor(s),o=Math.floor(o);const m=[],g=[],_=[],v=[];let E=0;const R=[],M=n/2;let S=0;D(),c===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(v,2));function D(){const I=new q,z=new q;let P=0;const V=(t-e)/n;for(let A=0;A<=o;A++){const L=[],O=A/o,B=O*(t-e)+e;for(let Y=0;Y<=s;Y++){const J=Y/s,K=J*h+d,ne=Math.sin(K),Z=Math.cos(K);z.x=B*ne,z.y=-O*n+M,z.z=B*Z,g.push(z.x,z.y,z.z),I.set(ne,V,Z).normalize(),_.push(I.x,I.y,I.z),v.push(J,1-O),L.push(E++)}R.push(L)}for(let A=0;A<s;A++)for(let L=0;L<o;L++){const O=R[L][A],B=R[L+1][A],Y=R[L+1][A+1],J=R[L][A+1];(e>0||L!==0)&&(m.push(O,B,J),P+=3),(t>0||L!==o-1)&&(m.push(B,Y,J),P+=3)}f.addGroup(S,P,0),S+=P}function F(I){const z=E,P=new St,V=new q;let A=0;const L=I===!0?e:t,O=I===!0?1:-1;for(let Y=1;Y<=s;Y++)g.push(0,M*O,0),_.push(0,O,0),v.push(.5,.5),E++;const B=E;for(let Y=0;Y<=s;Y++){const K=Y/s*h+d,ne=Math.cos(K),Z=Math.sin(K);V.x=L*Z,V.y=M*O,V.z=L*ne,g.push(V.x,V.y,V.z),_.push(0,O,0),P.x=ne*.5+.5,P.y=Z*.5*O+.5,v.push(P.x,P.y),E++}for(let Y=0;Y<s;Y++){const J=z+Y,K=B+Y;I===!0?m.push(K,K+1,J):m.push(K+1,K,J),A+=3}f.addGroup(S,A,I===!0?1:2),S+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qg{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const o=n.length;let c;t?c=t:c=e*n[o-1];let d=0,h=o-1,f;for(;d<=h;)if(s=Math.floor(d+(h-d)/2),f=n[s]-c,f<0)d=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,n[s]===c)return s/(o-1);const m=n[s],_=n[s+1]-m,v=(c-m)/_;return(s+v)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const c=this.getPoint(s),d=this.getPoint(o),h=t||(c.isVector2?new St:new q);return h.copy(d).sub(c).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new q,s=[],o=[],c=[],d=new q,h=new Dt;for(let v=0;v<=e;v++){const E=v/e;s[v]=this.getTangentAt(E,new q)}o[0]=new q,c[0]=new q;let f=Number.MAX_VALUE;const m=Math.abs(s[0].x),g=Math.abs(s[0].y),_=Math.abs(s[0].z);m<=f&&(f=m,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),_<=f&&n.set(0,0,1),d.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],d),c[0].crossVectors(s[0],o[0]);for(let v=1;v<=e;v++){if(o[v]=o[v-1].clone(),c[v]=c[v-1].clone(),d.crossVectors(s[v-1],s[v]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(lt(s[v-1].dot(s[v]),-1,1));o[v].applyMatrix4(h.makeRotationAxis(d,E))}c[v].crossVectors(s[v],o[v])}if(t===!0){let v=Math.acos(lt(o[0].dot(o[e]),-1,1));v/=e,s[0].dot(d.crossVectors(o[0],o[e]))>0&&(v=-v);for(let E=1;E<=e;E++)o[E].applyMatrix4(h.makeRotationAxis(s[E],v*E)),c[E].crossVectors(s[E],o[E])}return{tangents:s,normals:o,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Dl(){let i=0,e=0,t=0,n=0;function s(o,c,d,h){i=o,e=d,t=-3*o+3*c-2*d-h,n=2*o-2*c+d+h}return{initCatmullRom:function(o,c,d,h,f){s(c,d,f*(d-o),f*(h-c))},initNonuniformCatmullRom:function(o,c,d,h,f,m,g){let _=(c-o)/f-(d-o)/(f+m)+(d-c)/m,v=(d-c)/m-(h-c)/(m+g)+(h-d)/g;_*=m,v*=m,s(c,d,_,v)},calc:function(o){const c=o*o,d=c*o;return i+e*o+t*c+n*d}}}const Zs=new q,fo=new Dl,ho=new Dl,po=new Dl;class e0 extends Qg{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new q){const n=t,s=this.points,o=s.length,c=(o-(this.closed?0:1))*e;let d=Math.floor(c),h=c-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/o)+1)*o:h===0&&d===o-1&&(d=o-2,h=1);let f,m;this.closed||d>0?f=s[(d-1)%o]:(Zs.subVectors(s[0],s[1]).add(s[0]),f=Zs);const g=s[d%o],_=s[(d+1)%o];if(this.closed||d+2<o?m=s[(d+2)%o]:(Zs.subVectors(s[o-1],s[o-2]).add(s[o-1]),m=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let E=Math.pow(f.distanceToSquared(g),v),R=Math.pow(g.distanceToSquared(_),v),M=Math.pow(_.distanceToSquared(m),v);R<1e-4&&(R=1),E<1e-4&&(E=R),M<1e-4&&(M=R),fo.initNonuniformCatmullRom(f.x,g.x,_.x,m.x,E,R,M),ho.initNonuniformCatmullRom(f.y,g.y,_.y,m.y,E,R,M),po.initNonuniformCatmullRom(f.z,g.z,_.z,m.z,E,R,M)}else this.curveType==="catmullrom"&&(fo.initCatmullRom(f.x,g.x,_.x,m.x,this.tension),ho.initCatmullRom(f.y,g.y,_.y,m.y,this.tension),po.initCatmullRom(f.z,g.z,_.z,m.z,this.tension));return n.set(fo.calc(h),ho.calc(h),po.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new q().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ai extends nn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,c=t/2,d=Math.floor(n),h=Math.floor(s),f=d+1,m=h+1,g=e/d,_=t/h,v=[],E=[],R=[],M=[];for(let S=0;S<m;S++){const D=S*_-c;for(let F=0;F<f;F++){const I=F*g-o;E.push(I,-D,0),R.push(0,0,1),M.push(F/d),M.push(1-S/h)}}for(let S=0;S<h;S++)for(let D=0;D<d;D++){const F=D+f*S,I=D+f*(S+1),z=D+1+f*(S+1),P=D+1+f*S;v.push(F,I,P),v.push(I,z,P)}this.setIndex(v),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(R,3)),this.setAttribute("uv",new sn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}function Cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=Cr(i[t]);for(const s in n)e[s]=n[s]}return e}function t0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const n0={clone:Cr,merge:fn};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class s0 extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class a0 extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qu,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o0 extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l0 extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Qc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Qc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Qc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class c0{constructor(e,t,n){const s=this;let o=!1,c=0,d=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){d++,o===!1&&s.onStart!==void 0&&s.onStart(m,c,d),o=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,d),c===d&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){const g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=f.length;g<_;g+=2){const v=f[g],E=f[g+1];if(v.global&&(v.lastIndex=0),v.test(m))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const u0=new c0;class os{constructor(e){this.manager=e!==void 0?e:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}os.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class d0 extends Error{constructor(e,t){super(e),this.response=t}}class f0 extends os{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Jr.get(`file:${e}`);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:s});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const m=si[e],g=f.body.getReader(),_=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),v=_?parseInt(_):0,E=v!==0;let R=0;const M=new ReadableStream({start(S){D();function D(){g.read().then(({done:F,value:I})=>{if(F)S.close();else{R+=I.byteLength;const z=new ProgressEvent("progress",{lengthComputable:E,loaded:R,total:v});for(let P=0,V=m.length;P<V;P++){const A=m[P];A.onProgress&&A.onProgress(z)}S.enqueue(I),D()}},F=>{S.error(F)})}}});return new Response(M)}else throw new d0(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(m=>new DOMParser().parseFromString(m,d));case"json":return f.json();default:if(d==="")return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),_=g&&g[1]?g[1].toLowerCase():void 0,v=new TextDecoder(_);return f.arrayBuffer().then(E=>v.decode(E))}}}).then(f=>{Jr.add(`file:${e}`,f);const m=si[e];delete si[e];for(let g=0,_=m.length;g<_;g++){const v=m[g];v.onLoad&&v.onLoad(f)}}).catch(f=>{const m=si[e];if(m===void 0)throw this.manager.itemError(e),f;delete si[e];for(let g=0,_=m.length;g<_;g++){const v=m[g];v.onError&&v.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _r=new WeakMap;class h0 extends os{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Jr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let g=_r.get(c);g===void 0&&(g=[],_r.set(c,g)),g.push({onLoad:t,onError:s})}return c}const d=is("img");function h(){m(),t&&t(this);const g=_r.get(this)||[];for(let _=0;_<g.length;_++){const v=g[_];v.onLoad&&v.onLoad(this)}_r.delete(this),o.manager.itemEnd(e)}function f(g){m(),s&&s(g),Jr.remove(`image:${e}`);const _=_r.get(this)||[];for(let v=0;v<_.length;v++){const E=_[v];E.onError&&E.onError(g)}_r.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){d.removeEventListener("load",h,!1),d.removeEventListener("error",f,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Jr.add(`image:${e}`,d),o.manager.itemStart(e),d.src=e,d}}class p0 extends os{constructor(e){super(e)}load(e,t,n,s){const o=new rn,c=new h0(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){o.image=d,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class ad extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class m0 extends ad{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const mo=new Dt,eu=new q,tu=new q;class _0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tu),t.updateMatrixWorld(),mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ns||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Js=new q,Qs=new Zi,Hn=new q;class od extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Js,Qs,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Js,Qs,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Js,Qs,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Js,Qs,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new q,nu=new St,iu=new St;class wn extends od{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dl*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,n,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*n/f,s*=c.width/h,n*=c.height/f}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ll extends od{constructor(e=-1,t=1,n=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,c=n+e,d=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,d-=m*this.view.offsetY,h=d-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class g0 extends _0{constructor(){super(new Ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class v0 extends ad{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new g0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const gr=-90,vr=1;class x0 extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(gr,vr,e,t);s.layers=this.layers,this.add(s);const o=new wn(gr,vr,e,t);o.layers=this.layers,this.add(o);const c=new wn(gr,vr,e,t);c.layers=this.layers,this.add(c);const d=new wn(gr,vr,e,t);d.layers=this.layers,this.add(d);const h=new wn(gr,vr,e,t);h.layers=this.layers,this.add(h);const f=new wn(gr,vr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,c,d,h]=t;for(const f of t)this.remove(f);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,d,h,f,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,2,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,3,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,_,v),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class S0 extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ru(i,e,t,n){const s=y0(n);switch(t){case $u:return i*e;case yl:return i*e/s.components*s.byteLength;case Ml:return i*e/s.components*s.byteLength;case Tr:return i*e*2/s.components*s.byteLength;case El:return i*e*2/s.components*s.byteLength;case ju:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case bl:return i*e*4/s.components*s.byteLength;case ia:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:case No:return Math.max(i,16)*Math.max(e,8)/4;case Fo:case Uo:return Math.max(i,8)*Math.max(e,8)/2;case Oo:case Bo:case zo:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case Ho:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case rl:case sl:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ol:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case cl:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y0(i){switch(i){case Sn:case Hu:return{byteLength:1,components:1};case es:case Gu:case ui:return{byteLength:2,components:1};case xl:case Sl:return{byteLength:2,components:4};case Yn:case vl:case In:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);function ld(){let i=null,e=!1,t=null,n=null;function s(o,c){t(o,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function M0(i){const e=new WeakMap;function t(d,h){const f=d.array,m=d.usage,g=f.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,f,m),d.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)v=i.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:g}}function n(d,h,f){const m=h.array,g=h.updateRanges;if(i.bindBuffer(f,d),g.length===0)i.bufferSubData(f,0,m);else{g.sort((v,E)=>v.start-E.start);let _=0;for(let v=1;v<g.length;v++){const E=g[_],R=g[v];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++_,g[_]=R)}g.length=_+1;for(let v=0,E=g.length;v<E;v++){const R=g[v];i.bufferSubData(f,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(i.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,d,h),f.version=d.version}}return{get:s,remove:o,update:c}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
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
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N0=`#ifdef USE_IRIDESCENCE
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
#endif`,O0=`#ifdef USE_BUMPMAP
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q0=`vec3 transformedNormal = objectNormal;
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
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,dv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
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
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
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
#endif`,yv=`uniform sampler2D dfgLUT;
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
}`,Mv=`
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lv=`#if defined( USE_POINTS_UV )
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
#endif`,Fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
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
}`,Rx=`#if DEPTH_PACKING == 3200
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
}`,Px=`#define DISTANCE
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
}`,Dx=`#define DISTANCE
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Nx=`#include <common>
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#define LAMBERT
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
}`,kx=`#define LAMBERT
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
}`,zx=`#define MATCAP
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
}`,Vx=`#define MATCAP
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
}`,Hx=`#define NORMAL
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
}`,Gx=`#define NORMAL
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,Yx=`#define TOON
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
}`,Kx=`uniform float size;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Qx=`uniform vec3 color;
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
}`,eS=`uniform float rotation;
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
}`,tS=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:E0,alphahash_pars_fragment:b0,alphamap_fragment:w0,alphamap_pars_fragment:T0,alphatest_fragment:A0,alphatest_pars_fragment:C0,aomap_fragment:R0,aomap_pars_fragment:P0,batching_pars_vertex:D0,batching_vertex:L0,begin_vertex:F0,beginnormal_vertex:I0,bsdfs:U0,iridescence_fragment:N0,bumpmap_pars_fragment:O0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:k0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:V0,color_fragment:H0,color_pars_fragment:G0,color_pars_vertex:W0,color_vertex:X0,common:$0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:q0,displacementmap_pars_vertex:Y0,displacementmap_vertex:K0,emissivemap_fragment:Z0,emissivemap_pars_fragment:J0,colorspace_fragment:Q0,colorspace_pars_fragment:ev,envmap_fragment:tv,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:rv,envmap_physical_pars_fragment:mv,envmap_vertex:sv,fog_vertex:av,fog_pars_vertex:ov,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:dv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:hv,lights_pars_begin:pv,lights_toon_fragment:_v,lights_toon_pars_fragment:gv,lights_phong_fragment:vv,lights_phong_pars_fragment:xv,lights_physical_fragment:Sv,lights_physical_pars_fragment:yv,lights_fragment_begin:Mv,lights_fragment_maps:Ev,lights_fragment_end:bv,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Cv,map_fragment:Rv,map_pars_fragment:Pv,map_particle_fragment:Dv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Uv,morphcolor_vertex:Nv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Bv,morphtarget_vertex:kv,normal_fragment_begin:zv,normal_fragment_maps:Vv,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:jv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Yv,opaque_fragment:Kv,packing:Zv,premultiplied_alpha_fragment:Jv,project_vertex:Qv,dithering_fragment:ex,dithering_pars_fragment:tx,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:sx,shadowmap_vertex:ax,shadowmask_pars_fragment:ox,skinbase_vertex:lx,skinning_pars_vertex:cx,skinning_vertex:ux,skinnormal_vertex:dx,specularmap_fragment:fx,specularmap_pars_fragment:hx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:_x,transmission_pars_fragment:gx,uv_pars_fragment:vx,uv_pars_vertex:xx,uv_vertex:Sx,worldpos_vertex:yx,background_vert:Mx,background_frag:Ex,backgroundCube_vert:bx,backgroundCube_frag:wx,cube_vert:Tx,cube_frag:Ax,depth_vert:Cx,depth_frag:Rx,distance_vert:Px,distance_frag:Dx,equirect_vert:Lx,equirect_frag:Fx,linedashed_vert:Ix,linedashed_frag:Ux,meshbasic_vert:Nx,meshbasic_frag:Ox,meshlambert_vert:Bx,meshlambert_frag:kx,meshmatcap_vert:zx,meshmatcap_frag:Vx,meshnormal_vert:Hx,meshnormal_frag:Gx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:$x,meshphysical_frag:jx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:Kx,points_frag:Zx,shadow_vert:Jx,shadow_frag:Qx,sprite_vert:eS,sprite_frag:tS},Ae={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Wn={basic:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:fn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:fn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ft(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:fn([Ae.points,Ae.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:fn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:fn([Ae.common,Ae.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:fn([Ae.sprite,Ae.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:fn([Ae.common,Ae.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:fn([Ae.lights,Ae.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Wn.physical={uniforms:fn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const ea={r:0,b:0,g:0},zi=new Kn,nS=new Dt;function iS(i,e,t,n,s,o){const c=new ft(0);let d=s===!0?0:1,h,f,m=null,g=0,_=null;function v(D){let F=D.isScene===!0?D.background:null;if(F&&F.isTexture){const I=D.backgroundBlurriness>0;F=e.get(F,I)}return F}function E(D){let F=!1;const I=v(D);I===null?M(c,d):I&&I.isColor&&(M(I,1),F=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(D,F){const I=v(F);I&&(I.isCubeTexture||I.mapping===_a)?(f===void 0&&(f=new Bt(new Ki(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Cr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(z,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),zi.copy(F.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),f.material.uniforms.envMap.value=I,f.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(zi)),f.material.toneMapped=xt.getTransfer(I.colorSpace)!==Ct,(m!==I||g!==I.version||_!==i.toneMapping)&&(f.material.needsUpdate=!0,m=I,g=I.version,_=i.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new Bt(new ai(2,2),new Zn({name:"BackgroundMaterial",uniforms:Cr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=xt.getTransfer(I.colorSpace)!==Ct,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||g!==I.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,m=I,g=I.version,_=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function M(D,F){D.getRGB(ea,sd(i)),t.buffers.color.setClear(ea.r,ea.g,ea.b,F,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,F=1){c.set(D),d=F,M(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(c,d)},render:E,addToRenderList:R,dispose:S}}function rS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=_(null);let o=s,c=!1;function d(B,Y,J,K,ne){let Z=!1;const ie=g(B,K,J,Y);o!==ie&&(o=ie,f(o.object)),Z=v(B,K,J,ne),Z&&E(B,K,J,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,I(B,Y,J,K),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function h(){return i.createVertexArray()}function f(B){return i.bindVertexArray(B)}function m(B){return i.deleteVertexArray(B)}function g(B,Y,J,K){const ne=K.wireframe===!0;let Z=n[Y.id];Z===void 0&&(Z={},n[Y.id]=Z);const ie=B.isInstancedMesh===!0?B.id:0;let pe=Z[ie];pe===void 0&&(pe={},Z[ie]=pe);let ge=pe[J.id];ge===void 0&&(ge={},pe[J.id]=ge);let Re=ge[ne];return Re===void 0&&(Re=_(h()),ge[ne]=Re),Re}function _(B){const Y=[],J=[],K=[];for(let ne=0;ne<t;ne++)Y[ne]=0,J[ne]=0,K[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:J,attributeDivisors:K,object:B,attributes:{},index:null}}function v(B,Y,J,K){const ne=o.attributes,Z=Y.attributes;let ie=0;const pe=J.getAttributes();for(const ge in pe)if(pe[ge].location>=0){const Ue=ne[ge];let Pe=Z[ge];if(Pe===void 0&&(ge==="instanceMatrix"&&B.instanceMatrix&&(Pe=B.instanceMatrix),ge==="instanceColor"&&B.instanceColor&&(Pe=B.instanceColor)),Ue===void 0||Ue.attribute!==Pe||Pe&&Ue.data!==Pe.data)return!0;ie++}return o.attributesNum!==ie||o.index!==K}function E(B,Y,J,K){const ne={},Z=Y.attributes;let ie=0;const pe=J.getAttributes();for(const ge in pe)if(pe[ge].location>=0){let Ue=Z[ge];Ue===void 0&&(ge==="instanceMatrix"&&B.instanceMatrix&&(Ue=B.instanceMatrix),ge==="instanceColor"&&B.instanceColor&&(Ue=B.instanceColor));const Pe={};Pe.attribute=Ue,Ue&&Ue.data&&(Pe.data=Ue.data),ne[ge]=Pe,ie++}o.attributes=ne,o.attributesNum=ie,o.index=K}function R(){const B=o.newAttributes;for(let Y=0,J=B.length;Y<J;Y++)B[Y]=0}function M(B){S(B,0)}function S(B,Y){const J=o.newAttributes,K=o.enabledAttributes,ne=o.attributeDivisors;J[B]=1,K[B]===0&&(i.enableVertexAttribArray(B),K[B]=1),ne[B]!==Y&&(i.vertexAttribDivisor(B,Y),ne[B]=Y)}function D(){const B=o.newAttributes,Y=o.enabledAttributes;for(let J=0,K=Y.length;J<K;J++)Y[J]!==B[J]&&(i.disableVertexAttribArray(J),Y[J]=0)}function F(B,Y,J,K,ne,Z,ie){ie===!0?i.vertexAttribIPointer(B,Y,J,ne,Z):i.vertexAttribPointer(B,Y,J,K,ne,Z)}function I(B,Y,J,K){R();const ne=K.attributes,Z=J.getAttributes(),ie=Y.defaultAttributeValues;for(const pe in Z){const ge=Z[pe];if(ge.location>=0){let Re=ne[pe];if(Re===void 0&&(pe==="instanceMatrix"&&B.instanceMatrix&&(Re=B.instanceMatrix),pe==="instanceColor"&&B.instanceColor&&(Re=B.instanceColor)),Re!==void 0){const Ue=Re.normalized,Pe=Re.itemSize,Ye=e.get(Re);if(Ye===void 0)continue;const Je=Ye.buffer,at=Ye.type,le=Ye.bytesPerElement,Se=at===i.INT||at===i.UNSIGNED_INT||Re.gpuType===vl;if(Re.isInterleavedBufferAttribute){const se=Re.data,Ee=se.stride,Ge=Re.offset;if(se.isInstancedInterleavedBuffer){for(let $e=0;$e<ge.locationSize;$e++)S(ge.location+$e,se.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let $e=0;$e<ge.locationSize;$e++)M(ge.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let $e=0;$e<ge.locationSize;$e++)F(ge.location+$e,Pe/ge.locationSize,at,Ue,Ee*le,(Ge+Pe/ge.locationSize*$e)*le,Se)}else{if(Re.isInstancedBufferAttribute){for(let se=0;se<ge.locationSize;se++)S(ge.location+se,Re.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let se=0;se<ge.locationSize;se++)M(ge.location+se);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let se=0;se<ge.locationSize;se++)F(ge.location+se,Pe/ge.locationSize,at,Ue,Pe*le,Pe/ge.locationSize*se*le,Se)}}else if(ie!==void 0){const Ue=ie[pe];if(Ue!==void 0)switch(Ue.length){case 2:i.vertexAttrib2fv(ge.location,Ue);break;case 3:i.vertexAttrib3fv(ge.location,Ue);break;case 4:i.vertexAttrib4fv(ge.location,Ue);break;default:i.vertexAttrib1fv(ge.location,Ue)}}}}D()}function z(){L();for(const B in n){const Y=n[B];for(const J in Y){const K=Y[J];for(const ne in K){const Z=K[ne];for(const ie in Z)m(Z[ie].object),delete Z[ie];delete K[ne]}}delete n[B]}}function P(B){if(n[B.id]===void 0)return;const Y=n[B.id];for(const J in Y){const K=Y[J];for(const ne in K){const Z=K[ne];for(const ie in Z)m(Z[ie].object),delete Z[ie];delete K[ne]}}delete n[B.id]}function V(B){for(const Y in n){const J=n[Y];for(const K in J){const ne=J[K];if(ne[B.id]===void 0)continue;const Z=ne[B.id];for(const ie in Z)m(Z[ie].object),delete Z[ie];delete ne[B.id]}}}function A(B){for(const Y in n){const J=n[Y],K=B.isInstancedMesh===!0?B.id:0,ne=J[K];if(ne!==void 0){for(const Z in ne){const ie=ne[Z];for(const pe in ie)m(ie[pe].object),delete ie[pe];delete ne[Z]}delete J[K],Object.keys(J).length===0&&delete n[Y]}}}function L(){O(),c=!0,o!==s&&(o=s,f(o.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:L,resetDefaultState:O,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:V,initAttributes:R,enableAttribute:M,disableUnusedAttributes:D}}function sS(i,e,t){let n;function s(f){n=f}function o(f,m){i.drawArrays(n,f,m),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function d(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let v=0;for(let E=0;E<g;E++)v+=m[E];t.update(v,n,1)}function h(f,m,g,_){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<f.length;E++)c(f[E],m[E],_[E]);else{v.multiDrawArraysInstancedWEBGL(n,f,0,m,0,_,0,g);let E=0;for(let R=0;R<g;R++)E+=m[R]*_[R];t.update(E,n,1)}}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function aS(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(V){return!(V!==Un&&n.convert(V)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const A=V===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Sn&&n.convert(V)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==In&&!A)}function h(V){if(V==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(qe("WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:v,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:D,maxVaryings:F,maxFragmentUniforms:I,maxSamples:z,samples:P}}function oS(i){const e=this;let t=null,n=0,s=!1,o=!1;const c=new Gi,d=new nt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const v=g.length!==0||_||n!==0||s;return s=_,n=g.length,v},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,v){const E=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,S=i.get(g);if(!s||E===null||E.length===0||o&&!M)o?m(null):f();else{const D=o?0:n,F=D*4;let I=S.clippingState||null;h.value=I,I=m(E,_,F,v);for(let z=0;z!==F;++z)I[z]=t[z];S.clippingState=I,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,_,v,E){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=h.value,E!==!0||M===null){const S=v+R*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<S)&&(M=new Float32Array(S));for(let F=0,I=v;F!==R;++F,I+=4)c.copy(g[F]).applyMatrix4(D,d),c.normal.toArray(M,I),M[I+3]=c.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}const wi=4,su=[.125,.215,.35,.446,.526,.582],Xi=20,lS=256,$r=new Ll,au=new ft;let _o=null,go=0,vo=0,xo=!1;const cS=new q;class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:c=256,position:d=cS}=o;_o=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,go,vo),this._renderer.xr.enabled=xo,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:ui,format:Un,colorSpace:Ar,depthBuffer:!1},s=lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uS(o)),this._blurMaterial=fS(o,e,t),this._ggxMaterial=dS(o,e,t)}return s}_compileMaterial(e){const t=new Bt(new nn,e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,n,s,o){const h=new wn(90,1,t,n),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(au),g.toneMapping=jn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Ki,new Ei({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let S=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,S=!0):(M.color.copy(au),S=!0);for(let F=0;F<6;F++){const I=F%3;I===0?(h.up.set(0,f[F],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+m[F],o.y,o.z)):I===1?(h.up.set(0,0,f[F]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+m[F],o.z)):(h.up.set(0,f[F],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+m[F]));const z=this._cubeSize;xr(s,I*z,F>2?z:0,z,z),g.setRenderTarget(s),S&&g.render(R,h),g.render(e,h)}g.toneMapping=v,g.autoClear=_,e.background=D}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Yi||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const d=o.uniforms;d.envMap.value=e;const h=this._cubeSize;xr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,$r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[n];d.material=c;const h=c.uniforms,f=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-m*m),_=0+f*1.25,v=g*_,{_lodMax:E}=this,R=this._sizeLods[n],M=3*R*(n>E-wi?n-E+wi:0),S=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=v,h.mipInt.value=E-t,xr(o,M,S,3*R,2*R),s.setRenderTarget(o),s.render(d,$r),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=E-n,xr(e,M,S,3*R,2*R),s.setRenderTarget(e),s.render(d,$r)}_blur(e,t,n,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",o),this._halfBlur(c,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,c,d){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[s];g.material=f;const _=f.uniforms,v=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*Xi-1),R=o/E,M=isFinite(o)?1+Math.floor(m*R):Xi;M>Xi&&qe(`sigmaRadians, ${o}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Xi}`);const S=[];let D=0;for(let V=0;V<Xi;++V){const A=V/R,L=Math.exp(-A*A/2);S.push(L),V===0?D+=L:V<M&&(D+=2*L)}for(let V=0;V<S.length;V++)S[V]=S[V]/D;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=S,_.latitudinal.value=c==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:F}=this;_.dTheta.value=E,_.mipInt.value=F-n;const I=this._sizeLods[s],z=3*I*(s>F-wi?s-F+wi:0),P=4*(this._cubeSize-I);xr(t,z,P,3*I,2*I),h.setRenderTarget(t),h.render(g,$r)}}function uS(i){const e=[],t=[],n=[];let s=i;const o=i-wi+1+su.length;for(let c=0;c<o;c++){const d=Math.pow(2,s);e.push(d);let h=1/d;c>i-wi?h=su[c-i+wi-1]:c===0&&(h=0),t.push(h);const f=1/(d-2),m=-f,g=1+f,_=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,E=6,R=3,M=2,S=1,D=new Float32Array(R*E*v),F=new Float32Array(M*E*v),I=new Float32Array(S*E*v);for(let P=0;P<v;P++){const V=P%3*2/3-1,A=P>2?0:-1,L=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];D.set(L,R*E*P),F.set(_,M*E*P);const O=[P,P,P,P,P,P];I.set(O,S*E*P)}const z=new nn;z.setAttribute("position",new gn(D,R)),z.setAttribute("uv",new gn(F,M)),z.setAttribute("faceIndex",new gn(I,S)),n.push(new Bt(z,null)),s>wi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lu(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function dS(i,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ga(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function fS(i,e,t){const n=new Float32Array(Xi),s=new q(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function cu(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function uu(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}class cd extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new id(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ki(5,5,5),o=new Zn({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:li});o.uniforms.tEquirect.value=t;const c=new Bt(s,o),d=t.minFilter;return t.minFilter===$i&&(t.minFilter=un),new x0(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(o)}}function hS(i){let e=new WeakMap,t=new WeakMap,n=null;function s(_,v=!1){return _==null?null:v?c(_):o(_)}function o(_){if(_&&_.isTexture){const v=_.mapping;if(v===Oa||v===Ba)if(e.has(_)){const E=e.get(_).texture;return d(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const R=new cd(E.height);return R.fromEquirectangularTexture(i,_),e.set(_,R),_.addEventListener("dispose",f),d(R.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const v=_.mapping,E=v===Oa||v===Ba,R=v===Yi||v===wr;if(E||R){let M=t.get(_);const S=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return n===null&&(n=new ou(i)),M=E?n.fromEquirectangular(_,M):n.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,t.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return E&&D&&D.height>0||R&&D&&h(D)?(n===null&&(n=new ou(i)),M=E?n.fromEquirectangular(_):n.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,t.set(_,M),_.addEventListener("dispose",m),M.texture):null}}}return _}function d(_,v){return v===Oa?_.mapping=Yi:v===Ba&&(_.mapping=wr),_}function h(_){let v=0;const E=6;for(let R=0;R<E;R++)_[R]!==void 0&&v++;return v===E}function f(_){const v=_.target;v.removeEventListener("dispose",f);const E=e.get(v);E!==void 0&&(e.delete(v),E.dispose())}function m(_){const v=_.target;v.removeEventListener("dispose",m);const E=t.get(v);E!==void 0&&(t.delete(v),E.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function pS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fa("WebGLRenderer: "+n+" extension not supported."),s}}}function mS(i,e,t,n){const s={},o=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",c),delete s[_.id];const v=o.get(_);v&&(e.remove(v),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function h(g){const _=g.attributes;for(const v in _)e.update(_[v],i.ARRAY_BUFFER)}function f(g){const _=[],v=g.index,E=g.attributes.position;let R=0;if(E===void 0)return;if(v!==null){const D=v.array;R=v.version;for(let F=0,I=D.length;F<I;F+=3){const z=D[F+0],P=D[F+1],V=D[F+2];_.push(z,P,P,V,V,z)}}else{const D=E.array;R=E.version;for(let F=0,I=D.length/3-1;F<I;F+=3){const z=F+0,P=F+1,V=F+2;_.push(z,P,P,V,V,z)}}const M=new(E.count>=65535?ed:Qu)(_,1);M.version=R;const S=o.get(g);S&&e.remove(S),o.set(g,M)}function m(g){const _=o.get(g);if(_){const v=g.index;v!==null&&_.version<v.version&&f(g)}else f(g);return o.get(g)}return{get:d,update:h,getWireframeAttribute:m}}function _S(i,e,t){let n;function s(_){n=_}let o,c;function d(_){o=_.type,c=_.bytesPerElement}function h(_,v){i.drawElements(n,v,o,_*c),t.update(v,n,1)}function f(_,v,E){E!==0&&(i.drawElementsInstanced(n,v,o,_*c,E),t.update(v,n,E))}function m(_,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,o,_,0,E);let M=0;for(let S=0;S<E;S++)M+=v[S];t.update(M,n,1)}function g(_,v,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<_.length;S++)f(_[S]/c,v[S],R[S]);else{M.multiDrawElementsInstancedWEBGL(n,v,0,o,_,0,R,0,E);let S=0;for(let D=0;D<E;D++)S+=v[D]*R[D];t.update(S,n,1)}}this.setMode=s,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function gS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(o/3);break;case i.LINES:t.lines+=d*(o/2);break;case i.LINE_STRIP:t.lines+=d*(o-1);break;case i.LINE_LOOP:t.lines+=d*o;break;case i.POINTS:t.points+=d*o;break;default:yt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vS(i,e,t){const n=new WeakMap,s=new kt;function o(c,d,h){const f=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let _=n.get(d);if(_===void 0||_.count!==g){let L=function(){V.dispose(),n.delete(d),d.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const v=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let F=0;v===!0&&(F=1),E===!0&&(F=2),R===!0&&(F=3);let I=d.attributes.position.count*F,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*z*4*g),V=new Ku(P,I,z,g);V.type=In,V.needsUpdate=!0;const A=F*4;for(let O=0;O<g;O++){const B=M[O],Y=S[O],J=D[O],K=I*z*4*O;for(let ne=0;ne<B.count;ne++){const Z=ne*A;v===!0&&(s.fromBufferAttribute(B,ne),P[K+Z+0]=s.x,P[K+Z+1]=s.y,P[K+Z+2]=s.z,P[K+Z+3]=0),E===!0&&(s.fromBufferAttribute(Y,ne),P[K+Z+4]=s.x,P[K+Z+5]=s.y,P[K+Z+6]=s.z,P[K+Z+7]=0),R===!0&&(s.fromBufferAttribute(J,ne),P[K+Z+8]=s.x,P[K+Z+9]=s.y,P[K+Z+10]=s.z,P[K+Z+11]=J.itemSize===4?s.w:1)}}_={count:g,texture:V,size:new St(I,z)},n.set(d,_),d.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let v=0;for(let R=0;R<f.length;R++)v+=f[R];const E=d.morphTargetsRelative?1:1-v;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:o}}function xS(i,e,t,n,s){let o=new WeakMap;function c(f){const m=s.render.frame,g=f.geometry,_=e.get(f,g);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==m&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,m))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==m&&(v.update(),o.set(v,m))}return _}function d(){o=new WeakMap}function h(f){const m=f.target;m.removeEventListener("dispose",h),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:d}}const SS={[Uu]:"LINEAR_TONE_MAPPING",[Nu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[gl]:"ACES_FILMIC_TONE_MAPPING",[ku]:"AGX_TONE_MAPPING",[zu]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function yS(i,e,t,n,s){const o=new qn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),c=new qn(e,t,{type:ui,depthBuffer:!1,stencilBuffer:!1}),d=new nn;d.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new sn([0,2,0,0,2,0],2));const h=new s0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bt(d,h),m=new Ll(-1,1,1,-1,0,1);let g=null,_=null,v=!1,E,R=null,M=[],S=!1;this.setSize=function(D,F){o.setSize(D,F),c.setSize(D,F);for(let I=0;I<M.length;I++){const z=M[I];z.setSize&&z.setSize(D,F)}},this.setEffects=function(D){M=D,S=M.length>0&&M[0].isRenderPass===!0;const F=o.width,I=o.height;for(let z=0;z<M.length;z++){const P=M[z];P.setSize&&P.setSize(F,I)}},this.begin=function(D,F){if(v||D.toneMapping===jn&&M.length===0)return!1;if(R=F,F!==null){const I=F.width,z=F.height;(o.width!==I||o.height!==z)&&this.setSize(I,z)}return S===!1&&D.setRenderTarget(o),E=D.toneMapping,D.toneMapping=jn,!0},this.hasRenderPass=function(){return S},this.end=function(D,F){D.toneMapping=E,v=!0;let I=o,z=c;for(let P=0;P<M.length;P++){const V=M[P];if(V.enabled!==!1&&(V.render(D,z,I,F),V.needsSwap!==!1)){const A=I;I=z,z=A}}if(g!==D.outputColorSpace||_!==D.toneMapping){g=D.outputColorSpace,_=D.toneMapping,h.defines={},xt.getTransfer(g)===Ct&&(h.defines.SRGB_TRANSFER="");const P=SS[_];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,D.setRenderTarget(R),D.render(f,m),R=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),c.dispose(),d.dispose(),h.dispose()}}const ud=new rn,hl=new rs(1,1),dd=new Ku,fd=new Lg,hd=new id,du=[],fu=[],hu=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Fr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=du[s];if(o===void 0&&(o=new Float32Array(s),du[s]=o),e!==0){n.toArray(o,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(o,d)}return o}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function va(i,e){let t=fu[e];t===void 0&&(t=new Int32Array(e),fu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function MS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ES(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function bS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function wS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function TS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;mu.set(n),i.uniformMatrix2fv(this.addr,!1,mu),Kt(t,n)}}function AS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;pu.set(n),i.uniformMatrix3fv(this.addr,!1,pu),Kt(t,n)}}function CS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),Kt(t,n)}}function RS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function PS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function DS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function LS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function FS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function IS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function US(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function NS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function OS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(hl.compareFunction=t.isReversedDepthBuffer()?Tl:wl,o=hl):o=ud,t.setTexture2D(e||o,s)}function BS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fd,s)}function kS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hd,s)}function zS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dd,s)}function VS(i){switch(i){case 5126:return MS;case 35664:return ES;case 35665:return bS;case 35666:return wS;case 35674:return TS;case 35675:return AS;case 35676:return CS;case 5124:case 35670:return RS;case 35667:case 35671:return PS;case 35668:case 35672:return DS;case 35669:case 35673:return LS;case 5125:return FS;case 36294:return IS;case 36295:return US;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return OS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return zS}}function HS(i,e){i.uniform1fv(this.addr,e)}function GS(i,e){const t=Fr(e,this.size,2);i.uniform2fv(this.addr,t)}function WS(i,e){const t=Fr(e,this.size,3);i.uniform3fv(this.addr,t)}function XS(i,e){const t=Fr(e,this.size,4);i.uniform4fv(this.addr,t)}function $S(i,e){const t=Fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jS(i,e){const t=Fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qS(i,e){const t=Fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function YS(i,e){i.uniform1iv(this.addr,e)}function KS(i,e){i.uniform2iv(this.addr,e)}function ZS(i,e){i.uniform3iv(this.addr,e)}function JS(i,e){i.uniform4iv(this.addr,e)}function QS(i,e){i.uniform1uiv(this.addr,e)}function ey(i,e){i.uniform2uiv(this.addr,e)}function ty(i,e){i.uniform3uiv(this.addr,e)}function ny(i,e){i.uniform4uiv(this.addr,e)}function iy(i,e,t){const n=this.cache,s=e.length,o=va(t,s);Yt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));let c;this.type===i.SAMPLER_2D_SHADOW?c=hl:c=ud;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||c,o[d])}function ry(i,e,t){const n=this.cache,s=e.length,o=va(t,s);Yt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||fd,o[c])}function sy(i,e,t){const n=this.cache,s=e.length,o=va(t,s);Yt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||hd,o[c])}function ay(i,e,t){const n=this.cache,s=e.length,o=va(t,s);Yt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||dd,o[c])}function oy(i){switch(i){case 5126:return HS;case 35664:return GS;case 35665:return WS;case 35666:return XS;case 35674:return $S;case 35675:return jS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return KS;case 35668:case 35672:return ZS;case 35669:case 35673:return JS;case 5125:return QS;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ay}}class ly{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=VS(t.type)}}class cy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=oy(t.type)}}class uy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const d=s[o];d.setValue(e,t[d.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function _u(i,e){i.seq.push(e),i.map[e.id]=e}function dy(i,e,t){const n=i.name,s=n.length;for(So.lastIndex=0;;){const o=So.exec(n),c=So.lastIndex;let d=o[1];const h=o[2]==="]",f=o[3];if(h&&(d=d|0),f===void 0||f==="["&&c+2===s){_u(t,f===void 0?new ly(d,i,e):new cy(d,i,e));break}else{let g=t.map[d];g===void 0&&(g=new uy(d),_u(t,g)),t=g}}}class la{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<n;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);dy(d,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,c=t.length;o!==c;++o){const d=t[o],h=n[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function gu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const fy=37297;let hy=0;function py(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const d=c+1;n.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return n.join(`
`)}const vu=new nt;function my(i){xt._getMatrix(vu,xt.workingColorSpace,i);const e=`mat3( ${vu.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case da:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+py(i.getShaderSource(e),d)}else return o}function _y(i,e){const t=my(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const gy={[Uu]:"Linear",[Nu]:"Reinhard",[Ou]:"Cineon",[gl]:"ACESFilmic",[ku]:"AgX",[zu]:"Neutral",[Bu]:"Custom"};function vy(i,e){const t=gy[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new q;function xy(){xt.getLuminanceCoefficients(ta);const i=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function yy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function My(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),c=o.name;let d=1;o.type===i.FLOAT_MAT2&&(d=2),o.type===i.FLOAT_MAT3&&(d=3),o.type===i.FLOAT_MAT4&&(d=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function Kr(i){return i!==""}function Su(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(Ey,wy)}const by=new Map;function wy(i,e){let t=rt[e];if(t===void 0){const n=by.get(e);if(n!==void 0)t=rt[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pl(t)}const Ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(Ty,Ay)}function Ay(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Eu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Cy={[na]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function Ry(i){return Cy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Py={[Yi]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[_a]:"ENVMAP_TYPE_CUBE_UV"};function Dy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Py[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ly={[wr]:"ENVMAP_MODE_REFRACTION"};function Fy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ly[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Iy={[Iu]:"ENVMAP_BLENDING_MULTIPLY",[dg]:"ENVMAP_BLENDING_MIX",[fg]:"ENVMAP_BLENDING_ADD"};function Uy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Iy[i.combine]||"ENVMAP_BLENDING_NONE"}function Ny(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Oy(i,e,t,n){const s=i.getContext(),o=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=Ry(t),f=Dy(t),m=Fy(t),g=Uy(t),_=Ny(t),v=Sy(t),E=yy(o),R=s.createProgram();let M,S,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Kr).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Kr).join(`
`),S.length>0&&(S+=`
`)):(M=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),S=[Eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?rt.tonemapping_pars_fragment:"",t.toneMapping!==jn?vy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,_y("linearToOutputTexel",t.outputColorSpace),xy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),c=pl(c),c=Su(c,t),c=yu(c,t),d=pl(d),d=Su(d,t),d=yu(d,t),c=Mu(c),d=Mu(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const F=D+M+c,I=D+S+d,z=gu(s,s.VERTEX_SHADER,F),P=gu(s,s.FRAGMENT_SHADER,I);s.attachShader(R,z),s.attachShader(R,P),t.index0AttributeName!==void 0?s.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(R,0,"position"),s.linkProgram(R);function V(B){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(R)||"",J=s.getShaderInfoLog(z)||"",K=s.getShaderInfoLog(P)||"",ne=Y.trim(),Z=J.trim(),ie=K.trim();let pe=!0,ge=!0;if(s.getProgramParameter(R,s.LINK_STATUS)===!1)if(pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,R,z,P);else{const Re=xu(s,z,"vertex"),Ue=xu(s,P,"fragment");yt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(R,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ne+`
`+Re+`
`+Ue)}else ne!==""?qe("WebGLProgram: Program Info Log:",ne):(Z===""||ie==="")&&(ge=!1);ge&&(B.diagnostics={runnable:pe,programLog:ne,vertexShader:{log:Z,prefix:M},fragmentShader:{log:ie,prefix:S}})}s.deleteShader(z),s.deleteShader(P),A=new la(s,R),L=My(s,R)}let A;this.getUniforms=function(){return A===void 0&&V(this),A};let L;this.getAttributes=function(){return L===void 0&&V(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(R,fy)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hy++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=P,this}let By=0;class ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zy(e),t.set(e,n)),n}}class zy{constructor(e){this.id=By++,this.code=e,this.usedTimes=0}}function Vy(i,e,t,n,s,o){const c=new Zu,d=new ky,h=new Set,f=[],m=new Map,g=n.logarithmicDepthBuffer;let _=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return h.add(A),A===0?"uv":`uv${A}`}function R(A,L,O,B,Y){const J=B.fog,K=Y.geometry,ne=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,Z=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ie=e.get(A.envMap||ne,Z),pe=ie&&ie.mapping===_a?ie.image.height:null,ge=v[A.type];A.precision!==null&&(_=n.getMaxPrecision(A.precision),_!==A.precision&&qe("WebGLProgram.getParameters:",A.precision,"not supported, using",_,"instead."));const Re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ue=Re!==void 0?Re.length:0;let Pe=0;K.morphAttributes.position!==void 0&&(Pe=1),K.morphAttributes.normal!==void 0&&(Pe=2),K.morphAttributes.color!==void 0&&(Pe=3);let Ye,Je,at,le;if(ge){const st=Wn[ge];Ye=st.vertexShader,Je=st.fragmentShader}else Ye=A.vertexShader,Je=A.fragmentShader,d.update(A),at=d.getVertexShaderID(A),le=d.getFragmentShaderID(A);const Se=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),Ee=Y.isInstancedMesh===!0,Ge=Y.isBatchedMesh===!0,$e=!!A.map,Tt=!!A.matcap,ct=!!ie,ht=!!A.aoMap,Et=!!A.lightMap,et=!!A.bumpMap,It=!!A.normalMap,H=!!A.displacementMap,Rt=!!A.emissiveMap,ut=!!A.metalnessMap,_t=!!A.roughnessMap,Ie=A.anisotropy>0,U=A.clearcoat>0,b=A.dispersion>0,G=A.iridescence>0,ae=A.sheen>0,he=A.transmission>0,oe=Ie&&!!A.anisotropyMap,Ne=U&&!!A.clearcoatMap,be=U&&!!A.clearcoatNormalMap,He=U&&!!A.clearcoatRoughnessMap,Xe=G&&!!A.iridescenceMap,xe=G&&!!A.iridescenceThicknessMap,Me=ae&&!!A.sheenColorMap,Oe=ae&&!!A.sheenRoughnessMap,Be=!!A.specularMap,De=!!A.specularColorMap,tt=!!A.specularIntensityMap,W=he&&!!A.transmissionMap,we=he&&!!A.thicknessMap,ye=!!A.gradientMap,Ce=!!A.alphaMap,X=A.alphaTest>0,k=!!A.alphaHash,Le=!!A.extensions;let je=jn;A.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(je=i.toneMapping);const gt={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:Ye,fragmentShader:Je,defines:A.defines,customVertexShaderID:at,customFragmentShaderID:le,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:_,batching:Ge,batchingColor:Ge&&Y._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Y.instanceColor!==null,instancingMorph:Ee&&Y.morphTexture!==null,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ar,alphaToCoverage:!!A.alphaToCoverage,map:$e,matcap:Tt,envMap:ct,envMapMode:ct&&ie.mapping,envMapCubeUVHeight:pe,aoMap:ht,lightMap:Et,bumpMap:et,normalMap:It,displacementMap:H,emissiveMap:Rt,normalMapObjectSpace:It&&A.normalMapType===mg,normalMapTangentSpace:It&&A.normalMapType===qu,metalnessMap:ut,roughnessMap:_t,anisotropy:Ie,anisotropyMap:oe,clearcoat:U,clearcoatMap:Ne,clearcoatNormalMap:be,clearcoatRoughnessMap:He,dispersion:b,iridescence:G,iridescenceMap:Xe,iridescenceThicknessMap:xe,sheen:ae,sheenColorMap:Me,sheenRoughnessMap:Oe,specularMap:Be,specularColorMap:De,specularIntensityMap:tt,transmission:he,transmissionMap:W,thicknessMap:we,gradientMap:ye,opaque:A.transparent===!1&&A.blending===Mr&&A.alphaToCoverage===!1,alphaMap:Ce,alphaTest:X,alphaHash:k,combine:A.combine,mapUv:$e&&E(A.map.channel),aoMapUv:ht&&E(A.aoMap.channel),lightMapUv:Et&&E(A.lightMap.channel),bumpMapUv:et&&E(A.bumpMap.channel),normalMapUv:It&&E(A.normalMap.channel),displacementMapUv:H&&E(A.displacementMap.channel),emissiveMapUv:Rt&&E(A.emissiveMap.channel),metalnessMapUv:ut&&E(A.metalnessMap.channel),roughnessMapUv:_t&&E(A.roughnessMap.channel),anisotropyMapUv:oe&&E(A.anisotropyMap.channel),clearcoatMapUv:Ne&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&E(A.sheenRoughnessMap.channel),specularMapUv:Be&&E(A.specularMap.channel),specularColorMapUv:De&&E(A.specularColorMap.channel),specularIntensityMapUv:tt&&E(A.specularIntensityMap.channel),transmissionMapUv:W&&E(A.transmissionMap.channel),thicknessMapUv:we&&E(A.thicknessMap.channel),alphaMapUv:Ce&&E(A.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(It||Ie),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!K.attributes.uv&&($e||Ce),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||K.attributes.normal===void 0&&It===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:se,skinning:Y.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Pe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:$e&&A.map.isVideoTexture===!0&&xt.getTransfer(A.map.colorSpace)===Ct,decodeVideoTextureEmissive:Rt&&A.emissiveMap.isVideoTexture===!0&&xt.getTransfer(A.emissiveMap.colorSpace)===Ct,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Tn,flipSided:A.side===_n,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Le&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&A.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return gt.vertexUv1s=h.has(1),gt.vertexUv2s=h.has(2),gt.vertexUv3s=h.has(3),h.clear(),gt}function M(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)L.push(O),L.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(S(L,A),D(L,A),L.push(i.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function S(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function D(A,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),A.push(c.mask)}function F(A){const L=v[A.type];let O;if(L){const B=Wn[L];O=n0.clone(B.uniforms)}else O=A.uniforms;return O}function I(A,L){let O=m.get(L);return O!==void 0?++O.usedTimes:(O=new Oy(i,L,A,s),f.push(O),m.set(L,O)),O}function z(A){if(--A.usedTimes===0){const L=f.indexOf(A);f[L]=f[f.length-1],f.pop(),m.delete(A.cacheKey),A.destroy()}}function P(A){d.remove(A)}function V(){d.dispose()}return{getParameters:R,getProgramCacheKey:M,getUniforms:F,acquireProgram:I,releaseProgram:z,releaseShaderCache:P,programs:f,dispose:V}}function Hy(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function n(c){i.delete(c)}function s(c,d,h){i.get(c)[d]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function Gy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function bu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wu(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function c(_){let v=0;return _.isInstancedMesh&&(v+=2),_.isSkinnedMesh&&(v+=1),v}function d(_,v,E,R,M,S){let D=i[e];return D===void 0?(D={id:_.id,object:_,geometry:v,material:E,materialVariant:c(_),groupOrder:R,renderOrder:_.renderOrder,z:M,group:S},i[e]=D):(D.id=_.id,D.object=_,D.geometry=v,D.material=E,D.materialVariant=c(_),D.groupOrder=R,D.renderOrder=_.renderOrder,D.z=M,D.group=S),e++,D}function h(_,v,E,R,M,S){const D=d(_,v,E,R,M,S);E.transmission>0?n.push(D):E.transparent===!0?s.push(D):t.push(D)}function f(_,v,E,R,M,S){const D=d(_,v,E,R,M,S);E.transmission>0?n.unshift(D):E.transparent===!0?s.unshift(D):t.unshift(D)}function m(_,v){t.length>1&&t.sort(_||Gy),n.length>1&&n.sort(v||bu),s.length>1&&s.sort(v||bu)}function g(){for(let _=e,v=i.length;_<v;_++){const E=i[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:h,unshift:f,finish:g,sort:m}}function Wy(){let i=new WeakMap;function e(n,s){const o=i.get(n);let c;return o===void 0?(c=new wu,i.set(n,[c])):s>=o.length?(c=new wu,o.push(c)):c=o[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ft};break;case"SpotLight":t={position:new q,direction:new q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function $y(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jy=0;function qy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yy(i){const e=new Xy,t=$y(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new q);const s=new q,o=new Dt,c=new Dt;function d(f){let m=0,g=0,_=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let v=0,E=0,R=0,M=0,S=0,D=0,F=0,I=0,z=0,P=0,V=0;f.sort(qy);for(let L=0,O=f.length;L<O;L++){const B=f[L],Y=B.color,J=B.intensity,K=B.distance;let ne=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Tr?ne=B.shadow.map.texture:ne=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)m+=Y.r*J,g+=Y.g*J,_+=Y.b*J;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(B.sh.coefficients[Z],J);V++}else if(B.isDirectionalLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ie=B.shadow,pe=t.get(B);pe.shadowIntensity=ie.intensity,pe.shadowBias=ie.bias,pe.shadowNormalBias=ie.normalBias,pe.shadowRadius=ie.radius,pe.shadowMapSize=ie.mapSize,n.directionalShadow[v]=pe,n.directionalShadowMap[v]=ne,n.directionalShadowMatrix[v]=B.shadow.matrix,D++}n.directional[v]=Z,v++}else if(B.isSpotLight){const Z=e.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(Y).multiplyScalar(J),Z.distance=K,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,n.spot[R]=Z;const ie=B.shadow;if(B.map&&(n.spotLightMap[z]=B.map,z++,ie.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[R]=ie.matrix,B.castShadow){const pe=t.get(B);pe.shadowIntensity=ie.intensity,pe.shadowBias=ie.bias,pe.shadowNormalBias=ie.normalBias,pe.shadowRadius=ie.radius,pe.shadowMapSize=ie.mapSize,n.spotShadow[R]=pe,n.spotShadowMap[R]=ne,I++}R++}else if(B.isRectAreaLight){const Z=e.get(B);Z.color.copy(Y).multiplyScalar(J),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),n.rectArea[M]=Z,M++}else if(B.isPointLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const ie=B.shadow,pe=t.get(B);pe.shadowIntensity=ie.intensity,pe.shadowBias=ie.bias,pe.shadowNormalBias=ie.normalBias,pe.shadowRadius=ie.radius,pe.shadowMapSize=ie.mapSize,pe.shadowCameraNear=ie.camera.near,pe.shadowCameraFar=ie.camera.far,n.pointShadow[E]=pe,n.pointShadowMap[E]=ne,n.pointShadowMatrix[E]=B.shadow.matrix,F++}n.point[E]=Z,E++}else if(B.isHemisphereLight){const Z=e.get(B);Z.skyColor.copy(B.color).multiplyScalar(J),Z.groundColor.copy(B.groundColor).multiplyScalar(J),n.hemi[S]=Z,S++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=_;const A=n.hash;(A.directionalLength!==v||A.pointLength!==E||A.spotLength!==R||A.rectAreaLength!==M||A.hemiLength!==S||A.numDirectionalShadows!==D||A.numPointShadows!==F||A.numSpotShadows!==I||A.numSpotMaps!==z||A.numLightProbes!==V)&&(n.directional.length=v,n.spot.length=R,n.rectArea.length=M,n.point.length=E,n.hemi.length=S,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=F,n.pointShadowMap.length=F,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=F,n.spotLightMatrix.length=I+z-P,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=V,A.directionalLength=v,A.pointLength=E,A.spotLength=R,A.rectAreaLength=M,A.hemiLength=S,A.numDirectionalShadows=D,A.numPointShadows=F,A.numSpotShadows=I,A.numSpotMaps=z,A.numLightProbes=V,n.version=jy++)}function h(f,m){let g=0,_=0,v=0,E=0,R=0;const M=m.matrixWorldInverse;for(let S=0,D=f.length;S<D;S++){const F=f[S];if(F.isDirectionalLight){const I=n.directional[g];I.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(M),g++}else if(F.isSpotLight){const I=n.spot[v];I.position.setFromMatrixPosition(F.matrixWorld),I.position.applyMatrix4(M),I.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(M),v++}else if(F.isRectAreaLight){const I=n.rectArea[E];I.position.setFromMatrixPosition(F.matrixWorld),I.position.applyMatrix4(M),c.identity(),o.copy(F.matrixWorld),o.premultiply(M),c.extractRotation(o),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),E++}else if(F.isPointLight){const I=n.point[_];I.position.setFromMatrixPosition(F.matrixWorld),I.position.applyMatrix4(M),_++}else if(F.isHemisphereLight){const I=n.hemi[R];I.direction.setFromMatrixPosition(F.matrixWorld),I.direction.transformDirection(M),R++}}}return{setup:d,setupView:h,state:n}}function Tu(i){const e=new Yy(i),t=[],n=[];function s(m){f.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function c(m){n.push(m)}function d(){e.setup(t)}function h(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:d,setupLightsView:h,pushLight:o,pushShadow:c}}function Ky(i){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let d;return c===void 0?(d=new Tu(i),e.set(s,[d])):o>=c.length?(d=new Tu(i),c.push(d)):d=c[o],d}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
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
}`,Qy=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],eM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Au=new Dt,jr=new q,yo=new q;function tM(i,e,t){let n=new Rl;const s=new St,o=new St,c=new kt,d=new o0,h=new l0,f={},m=t.maxTextureSize,g={[Ai]:_n,[_n]:Ai,[Tn]:Tn},_=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Zy,fragmentShader:Jy}),v=_.clone();v.defines.HORIZONTAL_PASS=1;const E=new nn;E.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Bt(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let S=this.type;this.render=function(P,V,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===Fu&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=na);const L=i.getRenderTarget(),O=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(li),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=S!==this.type;J&&V.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(ne=>ne.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,ne=P.length;K<ne;K++){const Z=P[K],ie=Z.shadow;if(ie===void 0){qe("WebGLShadowMap:",Z,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);const pe=ie.getFrameExtents();s.multiply(pe),o.copy(ie.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/pe.x),s.x=o.x*pe.x,ie.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/pe.y),s.y=o.y*pe.y,ie.mapSize.y=o.y));const ge=i.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=ge,ie.map===null||J===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===Yr){if(Z.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new qn(s.x,s.y,{format:Tr,type:ui,minFilter:un,magFilter:un,generateMipmaps:!1}),ie.map.texture.name=Z.name+".shadowMap",ie.map.depthTexture=new rs(s.x,s.y,In),ie.map.depthTexture.name=Z.name+".shadowMapDepth",ie.map.depthTexture.format=di,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=tn,ie.map.depthTexture.magFilter=tn}else Z.isPointLight?(ie.map=new cd(s.x),ie.map.depthTexture=new Jg(s.x,Yn)):(ie.map=new qn(s.x,s.y),ie.map.depthTexture=new rs(s.x,s.y,Yn)),ie.map.depthTexture.name=Z.name+".shadowMap",ie.map.depthTexture.format=di,this.type===na?(ie.map.depthTexture.compareFunction=ge?Tl:wl,ie.map.depthTexture.minFilter=un,ie.map.depthTexture.magFilter=un):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=tn,ie.map.depthTexture.magFilter=tn);ie.camera.updateProjectionMatrix()}const Re=ie.map.isWebGLCubeRenderTarget?6:1;for(let Ue=0;Ue<Re;Ue++){if(ie.map.isWebGLCubeRenderTarget)i.setRenderTarget(ie.map,Ue),i.clear();else{Ue===0&&(i.setRenderTarget(ie.map),i.clear());const Pe=ie.getViewport(Ue);c.set(o.x*Pe.x,o.y*Pe.y,o.x*Pe.z,o.y*Pe.w),Y.viewport(c)}if(Z.isPointLight){const Pe=ie.camera,Ye=ie.matrix,Je=Z.distance||Pe.far;Je!==Pe.far&&(Pe.far=Je,Pe.updateProjectionMatrix()),jr.setFromMatrixPosition(Z.matrixWorld),Pe.position.copy(jr),yo.copy(Pe.position),yo.add(Qy[Ue]),Pe.up.copy(eM[Ue]),Pe.lookAt(yo),Pe.updateMatrixWorld(),Ye.makeTranslation(-jr.x,-jr.y,-jr.z),Au.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(Au,Pe.coordinateSystem,Pe.reversedDepth)}else ie.updateMatrices(Z);n=ie.getFrustum(),I(V,A,ie.camera,Z,this.type)}ie.isPointLightShadow!==!0&&this.type===Yr&&D(ie,A),ie.needsUpdate=!1}S=this.type,M.needsUpdate=!1,i.setRenderTarget(L,O,B)};function D(P,V){const A=e.update(R);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,v.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qn(s.x,s.y,{format:Tr,type:ui})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(V,null,A,_,R,null),v.uniforms.shadow_pass.value=P.mapPass.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(V,null,A,v,R,null)}function F(P,V,A,L){let O=null;const B=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)O=B;else if(O=A.isPointLight===!0?h:d,i.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Y=O.uuid,J=V.uuid;let K=f[Y];K===void 0&&(K={},f[Y]=K);let ne=K[J];ne===void 0&&(ne=O.clone(),K[J]=ne,V.addEventListener("dispose",z)),O=ne}if(O.visible=V.visible,O.wireframe=V.wireframe,L===Yr?O.side=V.shadowSide!==null?V.shadowSide:V.side:O.side=V.shadowSide!==null?V.shadowSide:g[V.side],O.alphaMap=V.alphaMap,O.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,O.map=V.map,O.clipShadows=V.clipShadows,O.clippingPlanes=V.clippingPlanes,O.clipIntersection=V.clipIntersection,O.displacementMap=V.displacementMap,O.displacementScale=V.displacementScale,O.displacementBias=V.displacementBias,O.wireframeLinewidth=V.wireframeLinewidth,O.linewidth=V.linewidth,A.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const Y=i.properties.get(O);Y.light=A}return O}function I(P,V,A,L,O){if(P.visible===!1)return;if(P.layers.test(V.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&O===Yr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const J=e.update(P),K=P.material;if(Array.isArray(K)){const ne=J.groups;for(let Z=0,ie=ne.length;Z<ie;Z++){const pe=ne[Z],ge=K[pe.materialIndex];if(ge&&ge.visible){const Re=F(P,ge,L,O);P.onBeforeShadow(i,P,V,A,J,Re,pe),i.renderBufferDirect(A,null,J,Re,P,pe),P.onAfterShadow(i,P,V,A,J,Re,pe)}}}else if(K.visible){const ne=F(P,K,L,O);P.onBeforeShadow(i,P,V,A,J,ne,null),i.renderBufferDirect(A,null,J,ne,P,null),P.onAfterShadow(i,P,V,A,J,ne,null)}}const Y=P.children;for(let J=0,K=Y.length;J<K;J++)I(Y[J],V,A,L,O)}function z(P){P.target.removeEventListener("dispose",z);for(const A in f){const L=f[A],O=P.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function nM(i,e){function t(){let W=!1;const we=new kt;let ye=null;const Ce=new kt(0,0,0,0);return{setMask:function(X){ye!==X&&!W&&(i.colorMask(X,X,X,X),ye=X)},setLocked:function(X){W=X},setClear:function(X,k,Le,je,gt){gt===!0&&(X*=je,k*=je,Le*=je),we.set(X,k,Le,je),Ce.equals(we)===!1&&(i.clearColor(X,k,Le,je),Ce.copy(we))},reset:function(){W=!1,ye=null,Ce.set(-1,0,0,0)}}}function n(){let W=!1,we=!1,ye=null,Ce=null,X=null;return{setReversed:function(k){if(we!==k){const Le=e.get("EXT_clip_control");k?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),we=k;const je=X;X=null,this.setClear(je)}},getReversed:function(){return we},setTest:function(k){k?Se(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(k){ye!==k&&!W&&(i.depthMask(k),ye=k)},setFunc:function(k){if(we&&(k=wg[k]),Ce!==k){switch(k){case wo:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Ro:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=k}},setLocked:function(k){W=k},setClear:function(k){X!==k&&(X=k,we&&(k=1-k),i.clearDepth(k))},reset:function(){W=!1,ye=null,Ce=null,X=null,we=!1}}}function s(){let W=!1,we=null,ye=null,Ce=null,X=null,k=null,Le=null,je=null,gt=null;return{setTest:function(st){W||(st?Se(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(st){we!==st&&!W&&(i.stencilMask(st),we=st)},setFunc:function(st,An,Ht){(ye!==st||Ce!==An||X!==Ht)&&(i.stencilFunc(st,An,Ht),ye=st,Ce=An,X=Ht)},setOp:function(st,An,Ht){(k!==st||Le!==An||je!==Ht)&&(i.stencilOp(st,An,Ht),k=st,Le=An,je=Ht)},setLocked:function(st){W=st},setClear:function(st){gt!==st&&(i.clearStencil(st),gt=st)},reset:function(){W=!1,we=null,ye=null,Ce=null,X=null,k=null,Le=null,je=null,gt=null}}}const o=new t,c=new n,d=new s,h=new WeakMap,f=new WeakMap;let m={},g={},_=new WeakMap,v=[],E=null,R=!1,M=null,S=null,D=null,F=null,I=null,z=null,P=null,V=new ft(0,0,0),A=0,L=!1,O=null,B=null,Y=null,J=null,K=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ie=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(pe)[1]),Z=ie>=1):pe.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),Z=ie>=2);let ge=null,Re={};const Ue=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Ye=new kt().fromArray(Ue),Je=new kt().fromArray(Pe);function at(W,we,ye,Ce){const X=new Uint8Array(4),k=i.createTexture();i.bindTexture(W,k),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ye;Le++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(we+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return k}const le={};le[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Se(i.DEPTH_TEST),c.setFunc(br),et(!1),It(wc),Se(i.CULL_FACE),ht(li);function Se(W){m[W]!==!0&&(i.enable(W),m[W]=!0)}function se(W){m[W]!==!1&&(i.disable(W),m[W]=!1)}function Ee(W,we){return g[W]!==we?(i.bindFramebuffer(W,we),g[W]=we,W===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=we),W===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Ge(W,we){let ye=v,Ce=!1;if(W){ye=_.get(we),ye===void 0&&(ye=[],_.set(we,ye));const X=W.textures;if(ye.length!==X.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let k=0,Le=X.length;k<Le;k++)ye[k]=i.COLOR_ATTACHMENT0+k;ye.length=X.length,Ce=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(ye)}function $e(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const Tt={[Wi]:i.FUNC_ADD,[q_]:i.FUNC_SUBTRACT,[Y_]:i.FUNC_REVERSE_SUBTRACT};Tt[K_]=i.MIN,Tt[Z_]=i.MAX;const ct={[J_]:i.ZERO,[Q_]:i.ONE,[eg]:i.SRC_COLOR,[Eo]:i.SRC_ALPHA,[ag]:i.SRC_ALPHA_SATURATE,[rg]:i.DST_COLOR,[ng]:i.DST_ALPHA,[tg]:i.ONE_MINUS_SRC_COLOR,[bo]:i.ONE_MINUS_SRC_ALPHA,[sg]:i.ONE_MINUS_DST_COLOR,[ig]:i.ONE_MINUS_DST_ALPHA,[og]:i.CONSTANT_COLOR,[lg]:i.ONE_MINUS_CONSTANT_COLOR,[cg]:i.CONSTANT_ALPHA,[ug]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(W,we,ye,Ce,X,k,Le,je,gt,st){if(W===li){R===!0&&(se(i.BLEND),R=!1);return}if(R===!1&&(Se(i.BLEND),R=!0),W!==j_){if(W!==M||st!==L){if((S!==Wi||I!==Wi)&&(i.blendEquation(i.FUNC_ADD),S=Wi,I=Wi),st)switch(W){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:yt("WebGLState: Invalid blending: ",W);break}else switch(W){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ac:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",W);break}D=null,F=null,z=null,P=null,V.set(0,0,0),A=0,M=W,L=st}return}X=X||we,k=k||ye,Le=Le||Ce,(we!==S||X!==I)&&(i.blendEquationSeparate(Tt[we],Tt[X]),S=we,I=X),(ye!==D||Ce!==F||k!==z||Le!==P)&&(i.blendFuncSeparate(ct[ye],ct[Ce],ct[k],ct[Le]),D=ye,F=Ce,z=k,P=Le),(je.equals(V)===!1||gt!==A)&&(i.blendColor(je.r,je.g,je.b,gt),V.copy(je),A=gt),M=W,L=!1}function Et(W,we){W.side===Tn?se(i.CULL_FACE):Se(i.CULL_FACE);let ye=W.side===_n;we&&(ye=!ye),et(ye),W.blending===Mr&&W.transparent===!1?ht(li):ht(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),o.setMask(W.colorWrite);const Ce=W.stencilWrite;d.setTest(Ce),Ce&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(W){O!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),O=W)}function It(W){W!==X_?(Se(i.CULL_FACE),W!==B&&(W===wc?i.cullFace(i.BACK):W===$_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),B=W}function H(W){W!==Y&&(Z&&i.lineWidth(W),Y=W)}function Rt(W,we,ye){W?(Se(i.POLYGON_OFFSET_FILL),(J!==we||K!==ye)&&(J=we,K=ye,c.getReversed()&&(we=-we),i.polygonOffset(we,ye))):se(i.POLYGON_OFFSET_FILL)}function ut(W){W?Se(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function _t(W){W===void 0&&(W=i.TEXTURE0+ne-1),ge!==W&&(i.activeTexture(W),ge=W)}function Ie(W,we,ye){ye===void 0&&(ge===null?ye=i.TEXTURE0+ne-1:ye=ge);let Ce=Re[ye];Ce===void 0&&(Ce={type:void 0,texture:void 0},Re[ye]=Ce),(Ce.type!==W||Ce.texture!==we)&&(ge!==ye&&(i.activeTexture(ye),ge=ye),i.bindTexture(W,we||le[W]),Ce.type=W,Ce.texture=we)}function U(){const W=Re[ge];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(W){yt("WebGLState:",W)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(W){yt("WebGLState:",W)}}function ae(){try{i.texSubImage2D(...arguments)}catch(W){yt("WebGLState:",W)}}function he(){try{i.texSubImage3D(...arguments)}catch(W){yt("WebGLState:",W)}}function oe(){try{i.compressedTexSubImage2D(...arguments)}catch(W){yt("WebGLState:",W)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(W){yt("WebGLState:",W)}}function be(){try{i.texStorage2D(...arguments)}catch(W){yt("WebGLState:",W)}}function He(){try{i.texStorage3D(...arguments)}catch(W){yt("WebGLState:",W)}}function Xe(){try{i.texImage2D(...arguments)}catch(W){yt("WebGLState:",W)}}function xe(){try{i.texImage3D(...arguments)}catch(W){yt("WebGLState:",W)}}function Me(W){Ye.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ye.copy(W))}function Oe(W){Je.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Je.copy(W))}function Be(W,we){let ye=f.get(we);ye===void 0&&(ye=new WeakMap,f.set(we,ye));let Ce=ye.get(W);Ce===void 0&&(Ce=i.getUniformBlockIndex(we,W.name),ye.set(W,Ce))}function De(W,we){const Ce=f.get(we).get(W);h.get(we)!==Ce&&(i.uniformBlockBinding(we,Ce,W.__bindingPointIndex),h.set(we,Ce))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ge=null,Re={},g={},_=new WeakMap,v=[],E=null,R=!1,M=null,S=null,D=null,F=null,I=null,z=null,P=null,V=new ft(0,0,0),A=0,L=!1,O=null,B=null,Y=null,J=null,K=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:Se,disable:se,bindFramebuffer:Ee,drawBuffers:Ge,useProgram:$e,setBlending:ht,setMaterial:Et,setFlipSided:et,setCullFace:It,setLineWidth:H,setPolygonOffset:Rt,setScissorTest:ut,activeTexture:_t,bindTexture:Ie,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:Xe,texImage3D:xe,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:be,texStorage3D:He,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ne,scissor:Me,viewport:Oe,reset:tt}}function iM(i,e,t,n,s,o,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new St,m=new WeakMap;let g;const _=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return v?new OffscreenCanvas(U,b):is("canvas")}function R(U,b,G){let ae=1;const he=Ie(U);if((he.width>G||he.height>G)&&(ae=G/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const oe=Math.floor(ae*he.width),Ne=Math.floor(ae*he.height);g===void 0&&(g=E(oe,Ne));const be=b?E(oe,Ne):g;return be.width=oe,be.height=Ne,be.getContext("2d").drawImage(U,0,0,oe,Ne),qe("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+oe+"x"+Ne+")."),be}else return"data"in U&&qe("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){i.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function F(U,b,G,ae,he=!1){if(U!==null){if(i[U]!==void 0)return i[U];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let oe=b;if(b===i.RED&&(G===i.FLOAT&&(oe=i.R32F),G===i.HALF_FLOAT&&(oe=i.R16F),G===i.UNSIGNED_BYTE&&(oe=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.R8UI),G===i.UNSIGNED_SHORT&&(oe=i.R16UI),G===i.UNSIGNED_INT&&(oe=i.R32UI),G===i.BYTE&&(oe=i.R8I),G===i.SHORT&&(oe=i.R16I),G===i.INT&&(oe=i.R32I)),b===i.RG&&(G===i.FLOAT&&(oe=i.RG32F),G===i.HALF_FLOAT&&(oe=i.RG16F),G===i.UNSIGNED_BYTE&&(oe=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RG8UI),G===i.UNSIGNED_SHORT&&(oe=i.RG16UI),G===i.UNSIGNED_INT&&(oe=i.RG32UI),G===i.BYTE&&(oe=i.RG8I),G===i.SHORT&&(oe=i.RG16I),G===i.INT&&(oe=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),G===i.UNSIGNED_INT&&(oe=i.RGB32UI),G===i.BYTE&&(oe=i.RGB8I),G===i.SHORT&&(oe=i.RGB16I),G===i.INT&&(oe=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),G===i.UNSIGNED_INT&&(oe=i.RGBA32UI),G===i.BYTE&&(oe=i.RGBA8I),G===i.SHORT&&(oe=i.RGBA16I),G===i.INT&&(oe=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),b===i.RGBA){const Ne=he?da:xt.getTransfer(ae);G===i.FLOAT&&(oe=i.RGBA32F),G===i.HALF_FLOAT&&(oe=i.RGBA16F),G===i.UNSIGNED_BYTE&&(oe=Ne===Ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function I(U,b){let G;return U?b===null||b===Yn||b===ts?G=i.DEPTH24_STENCIL8:b===In?G=i.DEPTH32F_STENCIL8:b===es&&(G=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yn||b===ts?G=i.DEPTH_COMPONENT24:b===In?G=i.DEPTH_COMPONENT32F:b===es&&(G=i.DEPTH_COMPONENT16),G}function z(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==tn&&U.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function P(U){const b=U.target;b.removeEventListener("dispose",P),A(b),b.isVideoTexture&&m.delete(b)}function V(U){const b=U.target;b.removeEventListener("dispose",V),O(b)}function A(U){const b=n.get(U);if(b.__webglInit===void 0)return;const G=U.source,ae=_.get(G);if(ae){const he=ae[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&L(U),Object.keys(ae).length===0&&_.delete(G)}n.remove(U)}function L(U){const b=n.get(U);i.deleteTexture(b.__webglTexture);const G=U.source,ae=_.get(G);delete ae[b.__cacheKey],c.memory.textures--}function O(U){const b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let he=0;he<b.__webglFramebuffer[ae].length;he++)i.deleteFramebuffer(b.__webglFramebuffer[ae][he]);else i.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)i.deleteFramebuffer(b.__webglFramebuffer[ae]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=U.textures;for(let ae=0,he=G.length;ae<he;ae++){const oe=n.get(G[ae]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),c.memory.textures--),n.remove(G[ae])}n.remove(U)}let B=0;function Y(){B=0}function J(){const U=B;return U>=s.maxTextures&&qe("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),B+=1,U}function K(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ne(U,b){const G=n.get(U);if(U.isVideoTexture&&ut(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){const ae=U.image;if(ae===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,U,b);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function Z(U,b){const G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){le(G,U,b);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function ie(U,b){const G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){le(G,U,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function pe(U,b){const G=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&G.__version!==U.version){Se(G,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const ge={[ua]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},Re={[tn]:i.NEAREST,[hg]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[$i]:i.LINEAR_MIPMAP_LINEAR},Ue={[_g]:i.NEVER,[yg]:i.ALWAYS,[gg]:i.LESS,[wl]:i.LEQUAL,[vg]:i.EQUAL,[Tl]:i.GEQUAL,[xg]:i.GREATER,[Sg]:i.NOTEQUAL};function Pe(U,b){if(b.type===In&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===ka||b.magFilter===Ps||b.magFilter===$i||b.minFilter===un||b.minFilter===ka||b.minFilter===Ps||b.minFilter===$i)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ge[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ge[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ge[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Re[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Re[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==Ps&&b.minFilter!==$i||b.type===In&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ye(U,b){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",P));const ae=b.source;let he=_.get(ae);he===void 0&&(he={},_.set(ae,he));const oe=K(b);if(oe!==U.__cacheKey){he[oe]===void 0&&(he[oe]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,G=!0),he[oe].usedTimes++;const Ne=he[U.__cacheKey];Ne!==void 0&&(he[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&L(b)),U.__cacheKey=oe,U.__webglTexture=he[oe].texture}return G}function Je(U,b,G){return Math.floor(Math.floor(U/G)/b)}function at(U,b,G,ae){const oe=U.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,ae,b.data);else{oe.sort((xe,Me)=>xe.start-Me.start);let Ne=0;for(let xe=1;xe<oe.length;xe++){const Me=oe[Ne],Oe=oe[xe],Be=Me.start+Me.count,De=Je(Oe.start,b.width,4),tt=Je(Me.start,b.width,4);Oe.start<=Be+1&&De===tt&&Je(Oe.start+Oe.count-1,b.width,4)===De?Me.count=Math.max(Me.count,Oe.start+Oe.count-Me.start):(++Ne,oe[Ne]=Oe)}oe.length=Ne+1;const be=i.getParameter(i.UNPACK_ROW_LENGTH),He=i.getParameter(i.UNPACK_SKIP_PIXELS),Xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let xe=0,Me=oe.length;xe<Me;xe++){const Oe=oe[xe],Be=Math.floor(Oe.start/4),De=Math.ceil(Oe.count/4),tt=Be%b.width,W=Math.floor(Be/b.width),we=De,ye=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,tt,W,we,ye,G,ae,b.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,Xe)}}function le(U,b,G){let ae=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=i.TEXTURE_3D);const he=Ye(U,b),oe=b.source;t.bindTexture(ae,U.__webglTexture,i.TEXTURE0+G);const Ne=n.get(oe);if(oe.version!==Ne.__version||he===!0){t.activeTexture(i.TEXTURE0+G);const be=xt.getPrimaries(xt.workingColorSpace),He=b.colorSpace===bi?null:xt.getPrimaries(b.colorSpace),Xe=b.colorSpace===bi||be===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let xe=R(b.image,!1,s.maxTextureSize);xe=_t(b,xe);const Me=o.convert(b.format,b.colorSpace),Oe=o.convert(b.type);let Be=F(b.internalFormat,Me,Oe,b.colorSpace,b.isVideoTexture);Pe(ae,b);let De;const tt=b.mipmaps,W=b.isVideoTexture!==!0,we=Ne.__version===void 0||he===!0,ye=oe.dataReady,Ce=z(b,xe);if(b.isDepthTexture)Be=I(b.format===ji,b.type),we&&(W?t.texStorage2D(i.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Be,xe.width,xe.height,0,Me,Oe,null));else if(b.isDataTexture)if(tt.length>0){W&&we&&t.texStorage2D(i.TEXTURE_2D,Ce,Be,tt[0].width,tt[0].height);for(let X=0,k=tt.length;X<k;X++)De=tt[X],W?ye&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,De.width,De.height,Me,Oe,De.data):t.texImage2D(i.TEXTURE_2D,X,Be,De.width,De.height,0,Me,Oe,De.data);b.generateMipmaps=!1}else W?(we&&t.texStorage2D(i.TEXTURE_2D,Ce,Be,xe.width,xe.height),ye&&at(b,xe,Me,Oe)):t.texImage2D(i.TEXTURE_2D,0,Be,xe.width,xe.height,0,Me,Oe,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Be,tt[0].width,tt[0].height,xe.depth);for(let X=0,k=tt.length;X<k;X++)if(De=tt[X],b.format!==Un)if(Me!==null)if(W){if(ye)if(b.layerUpdates.size>0){const Le=ru(De.width,De.height,b.format,b.type);for(const je of b.layerUpdates){const gt=De.data.subarray(je*Le/De.data.BYTES_PER_ELEMENT,(je+1)*Le/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,je,De.width,De.height,1,Me,gt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,De.width,De.height,xe.depth,Me,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Be,De.width,De.height,xe.depth,0,De.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,De.width,De.height,xe.depth,Me,Oe,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Be,De.width,De.height,xe.depth,0,Me,Oe,De.data)}else{W&&we&&t.texStorage2D(i.TEXTURE_2D,Ce,Be,tt[0].width,tt[0].height);for(let X=0,k=tt.length;X<k;X++)De=tt[X],b.format!==Un?Me!==null?W?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,De.width,De.height,Me,De.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Be,De.width,De.height,0,De.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?ye&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,De.width,De.height,Me,Oe,De.data):t.texImage2D(i.TEXTURE_2D,X,Be,De.width,De.height,0,Me,Oe,De.data)}else if(b.isDataArrayTexture)if(W){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Be,xe.width,xe.height,xe.depth),ye)if(b.layerUpdates.size>0){const X=ru(xe.width,xe.height,b.format,b.type);for(const k of b.layerUpdates){const Le=xe.data.subarray(k*X/xe.data.BYTES_PER_ELEMENT,(k+1)*X/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,k,xe.width,xe.height,1,Me,Oe,Le)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Me,Oe,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,Me,Oe,xe.data);else if(b.isData3DTexture)W?(we&&t.texStorage3D(i.TEXTURE_3D,Ce,Be,xe.width,xe.height,xe.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Me,Oe,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,Me,Oe,xe.data);else if(b.isFramebufferTexture){if(we)if(W)t.texStorage2D(i.TEXTURE_2D,Ce,Be,xe.width,xe.height);else{let X=xe.width,k=xe.height;for(let Le=0;Le<Ce;Le++)t.texImage2D(i.TEXTURE_2D,Le,Be,X,k,0,Me,Oe,null),X>>=1,k>>=1}}else if(tt.length>0){if(W&&we){const X=Ie(tt[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Be,X.width,X.height)}for(let X=0,k=tt.length;X<k;X++)De=tt[X],W?ye&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Me,Oe,De):t.texImage2D(i.TEXTURE_2D,X,Be,Me,Oe,De);b.generateMipmaps=!1}else if(W){if(we){const X=Ie(xe);t.texStorage2D(i.TEXTURE_2D,Ce,Be,X.width,X.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Oe,xe)}else t.texImage2D(i.TEXTURE_2D,0,Be,Me,Oe,xe);M(b)&&S(ae),Ne.__version=oe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Se(U,b,G){if(b.image.length!==6)return;const ae=Ye(U,b),he=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+G);const oe=n.get(he);if(he.version!==oe.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);const Ne=xt.getPrimaries(xt.workingColorSpace),be=b.colorSpace===bi?null:xt.getPrimaries(b.colorSpace),He=b.colorSpace===bi||Ne===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Xe=b.isCompressedTexture||b.image[0].isCompressedTexture,xe=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let k=0;k<6;k++)!Xe&&!xe?Me[k]=R(b.image[k],!0,s.maxCubemapSize):Me[k]=xe?b.image[k].image:b.image[k],Me[k]=_t(b,Me[k]);const Oe=Me[0],Be=o.convert(b.format,b.colorSpace),De=o.convert(b.type),tt=F(b.internalFormat,Be,De,b.colorSpace),W=b.isVideoTexture!==!0,we=oe.__version===void 0||ae===!0,ye=he.dataReady;let Ce=z(b,Oe);Pe(i.TEXTURE_CUBE_MAP,b);let X;if(Xe){W&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,tt,Oe.width,Oe.height);for(let k=0;k<6;k++){X=Me[k].mipmaps;for(let Le=0;Le<X.length;Le++){const je=X[Le];b.format!==Un?Be!==null?W?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le,0,0,je.width,je.height,Be,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le,tt,je.width,je.height,0,je.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le,0,0,je.width,je.height,Be,De,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le,tt,je.width,je.height,0,Be,De,je.data)}}}else{if(X=b.mipmaps,W&&we){X.length>0&&Ce++;const k=Ie(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,tt,k.width,k.height)}for(let k=0;k<6;k++)if(xe){W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Me[k].width,Me[k].height,Be,De,Me[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,tt,Me[k].width,Me[k].height,0,Be,De,Me[k].data);for(let Le=0;Le<X.length;Le++){const gt=X[Le].image[k].image;W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le+1,0,0,gt.width,gt.height,Be,De,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le+1,tt,gt.width,gt.height,0,Be,De,gt.data)}}else{W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Be,De,Me[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,tt,Be,De,Me[k]);for(let Le=0;Le<X.length;Le++){const je=X[Le];W?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le+1,0,0,Be,De,je.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,Le+1,tt,Be,De,je.image[k])}}}M(b)&&S(i.TEXTURE_CUBE_MAP),oe.__version=he.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function se(U,b,G,ae,he,oe){const Ne=o.convert(G.format,G.colorSpace),be=o.convert(G.type),He=F(G.internalFormat,Ne,be,G.colorSpace),Xe=n.get(b),xe=n.get(G);if(xe.__renderTarget=b,!Xe.__hasExternalTextures){const Me=Math.max(1,b.width>>oe),Oe=Math.max(1,b.height>>oe);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,oe,He,Me,Oe,b.depth,0,Ne,be,null):t.texImage2D(he,oe,He,Me,Oe,0,Ne,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Rt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,he,xe.__webglTexture,0,H(b)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,he,xe.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(U,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){const ae=b.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,oe=I(b.stencilBuffer,he),Ne=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Rt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H(b),oe,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,H(b),oe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,oe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,U)}else{const ae=b.textures;for(let he=0;he<ae.length;he++){const oe=ae[he],Ne=o.convert(oe.format,oe.colorSpace),be=o.convert(oe.type),He=F(oe.internalFormat,Ne,be,oe.colorSpace);Rt(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H(b),He,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,H(b),He,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,He,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(U,b,G){const ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,b.depthTexture);const Xe=o.convert(b.depthTexture.format),xe=o.convert(b.depthTexture.type);let Me;b.depthTexture.format===di?Me=i.DEPTH_COMPONENT24:b.depthTexture.format===ji&&(Me=i.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Me,b.width,b.height,0,Xe,xe,null)}}else ne(b.depthTexture,0);const oe=he.__webglTexture,Ne=H(b),be=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,He=b.depthTexture.format===ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===di)Rt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,He,be,oe,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,He,be,oe,0);else if(b.depthTexture.format===ji)Rt(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,He,be,oe,0,Ne):i.framebufferTexture2D(i.FRAMEBUFFER,He,be,oe,0);else throw new Error("Unknown depthTexture format")}function $e(U){const b=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=ae}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let ae=0;ae<6;ae++)Ge(b.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?Ge(b.__webglFramebuffer[0],U,0):Ge(b.__webglFramebuffer,U,0)}else if(G){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=i.createRenderbuffer(),Ee(b.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,oe)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ee(b.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(U,b,G){const ae=n.get(U);b!==void 0&&se(ae.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&$e(U)}function ct(U){const b=U.texture,G=n.get(U),ae=n.get(b);U.addEventListener("dispose",V);const he=U.textures,oe=U.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=b.version,c.memory.textures++),oe){G.__webglFramebuffer=[];for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[be]=[];for(let He=0;He<b.mipmaps.length;He++)G.__webglFramebuffer[be][He]=i.createFramebuffer()}else G.__webglFramebuffer[be]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let be=0;be<b.mipmaps.length;be++)G.__webglFramebuffer[be]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let be=0,He=he.length;be<He;be++){const Xe=n.get(he[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&Rt(U)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){const He=he[be];G.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[be]);const Xe=o.convert(He.format,He.colorSpace),xe=o.convert(He.type),Me=F(He.internalFormat,Xe,xe,He.colorSpace,U.isXRRenderTarget===!0),Oe=H(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Me,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,G.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,b);for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)se(G.__webglFramebuffer[be][He],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,He);else se(G.__webglFramebuffer[be],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);M(b)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let be=0,He=he.length;be<He;be++){const Xe=he[be],xe=n.get(Xe);let Me=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,xe.__webglTexture),Pe(Me,Xe),se(G.__webglFramebuffer,U,Xe,i.COLOR_ATTACHMENT0+be,Me,0),M(Xe)&&S(Me)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),Pe(be,b),b.mipmaps&&b.mipmaps.length>0)for(let He=0;He<b.mipmaps.length;He++)se(G.__webglFramebuffer[He],U,b,i.COLOR_ATTACHMENT0,be,He);else se(G.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,be,0);M(b)&&S(be),t.unbindTexture()}U.depthBuffer&&$e(U)}function ht(U){const b=U.textures;for(let G=0,ae=b.length;G<ae;G++){const he=b[G];if(M(he)){const oe=D(U),Ne=n.get(he).__webglTexture;t.bindTexture(oe,Ne),S(oe),t.unbindTexture()}}}const Et=[],et=[];function It(U){if(U.samples>0){if(Rt(U)===!1){const b=U.textures,G=U.width,ae=U.height;let he=i.COLOR_BUFFER_BIT;const oe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(U),be=b.length>1;if(be)for(let Xe=0;Xe<b.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const He=U.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Xe=0;Xe<b.length;Xe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Xe]);const xe=n.get(b[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,G,ae,0,0,G,ae,he,i.NEAREST),h===!0&&(Et.length=0,et.length=0,Et.push(i.COLOR_ATTACHMENT0+Xe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Et.push(oe),et.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Xe=0;Xe<b.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[Xe]);const xe=n.get(b[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function H(U){return Math.min(s.maxSamples,U.samples)}function Rt(U){const b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(U){const b=c.render.frame;m.get(U)!==b&&(m.set(U,b),U.update())}function _t(U,b){const G=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==Ar&&G!==bi&&(xt.getTransfer(G)===Ct?(ae!==Un||he!==Sn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",G)),b}function Ie(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=ie,this.setTextureCube=pe,this.rebindTextures=Tt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rM(i,e){function t(n,s=bi){let o;const c=xt.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===$u)return i.ALPHA;if(n===ju)return i.RGB;if(n===Un)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===Tr)return i.RG;if(n===El)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===ia||n===ra||n===sa||n===aa)if(c===Ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ia)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ia)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Io||n===Uo||n===No)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Fo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Io)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===ko||n===zo||n===Vo||n===Ho||n===Go)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Oo||n===Bo)return c===Ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ko)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===zo)return o.COMPRESSED_R11_EAC;if(n===Vo)return o.COMPRESSED_SIGNED_R11_EAC;if(n===Ho)return o.COMPRESSED_RG11_EAC;if(n===Go)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wo||n===Xo||n===$o||n===jo||n===qo||n===Yo||n===Ko||n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Wo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return c===Ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===sl||n===al)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===rl)return c===Ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===ll||n===cl||n===ul)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===ol)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const sM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aM=`
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

}`;class oM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:sM,fragmentShader:aM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lM extends Pr{constructor(e,t){super();const n=this;let s=null,o=1,c=null,d="local-floor",h=1,f=null,m=null,g=null,_=null,v=null,E=null;const R=typeof XRWebGLBinding<"u",M=new oM,S={},D=t.getContextAttributes();let F=null,I=null;const z=[],P=[],V=new St;let A=null;const L=new wn;L.viewport=new kt;const O=new wn;O.viewport=new kt;const B=[L,O],Y=new S0;let J=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Se=z[le];return Se===void 0&&(Se=new ja,z[le]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(le){let Se=z[le];return Se===void 0&&(Se=new ja,z[le]=Se),Se.getGripSpace()},this.getHand=function(le){let Se=z[le];return Se===void 0&&(Se=new ja,z[le]=Se),Se.getHandSpace()};function ne(le){const Se=P.indexOf(le.inputSource);if(Se===-1)return;const se=z[Se];se!==void 0&&(se.update(le.inputSource,le.frame,f||c),se.dispatchEvent({type:le.type,data:le.inputSource}))}function Z(){s.removeEventListener("select",ne),s.removeEventListener("selectstart",ne),s.removeEventListener("selectend",ne),s.removeEventListener("squeeze",ne),s.removeEventListener("squeezestart",ne),s.removeEventListener("squeezeend",ne),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ie);for(let le=0;le<z.length;le++){const Se=P[le];Se!==null&&(P[le]=null,z[le].disconnect(Se))}J=null,K=null,M.reset();for(const le in S)delete S[le];e.setRenderTarget(F),v=null,_=null,g=null,s=null,I=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){o=le,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){d=le,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(le){f=le},this.getBaseLayer=function(){return _!==null?_:v},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(F=e.getRenderTarget(),s.addEventListener("select",ne),s.addEventListener("selectstart",ne),s.addEventListener("selectend",ne),s.addEventListener("squeeze",ne),s.addEventListener("squeezestart",ne),s.addEventListener("squeezeend",ne),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ie),D.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(V),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ee=null,Ge=null;D.depth&&(Ge=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=D.stencil?ji:di,Ee=D.stencil?ts:Yn);const $e={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:o};g=this.getBinding(),_=g.createProjectionLayer($e),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new qn(_.textureWidth,_.textureHeight,{format:Un,type:Sn,depthTexture:new rs(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const se={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),I=new qn(v.framebufferWidth,v.framebufferHeight,{format:Un,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(d),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ie(le){for(let Se=0;Se<le.removed.length;Se++){const se=le.removed[Se],Ee=P.indexOf(se);Ee>=0&&(P[Ee]=null,z[Ee].disconnect(se))}for(let Se=0;Se<le.added.length;Se++){const se=le.added[Se];let Ee=P.indexOf(se);if(Ee===-1){for(let $e=0;$e<z.length;$e++)if($e>=P.length){P.push(se),Ee=$e;break}else if(P[$e]===null){P[$e]=se,Ee=$e;break}if(Ee===-1)break}const Ge=z[Ee];Ge&&Ge.connect(se)}}const pe=new q,ge=new q;function Re(le,Se,se){pe.setFromMatrixPosition(Se.matrixWorld),ge.setFromMatrixPosition(se.matrixWorld);const Ee=pe.distanceTo(ge),Ge=Se.projectionMatrix.elements,$e=se.projectionMatrix.elements,Tt=Ge[14]/(Ge[10]-1),ct=Ge[14]/(Ge[10]+1),ht=(Ge[9]+1)/Ge[5],Et=(Ge[9]-1)/Ge[5],et=(Ge[8]-1)/Ge[0],It=($e[8]+1)/$e[0],H=Tt*et,Rt=Tt*It,ut=Ee/(-et+It),_t=ut*-et;if(Se.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(_t),le.translateZ(ut),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Ge[10]===-1)le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const Ie=Tt+ut,U=ct+ut,b=H-_t,G=Rt+(Ee-_t),ae=ht*ct/U*Ie,he=Et*ct/U*Ie;le.projectionMatrix.makePerspective(b,G,ae,he,Ie,U),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Ue(le,Se){Se===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Se.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let Se=le.near,se=le.far;M.texture!==null&&(M.depthNear>0&&(Se=M.depthNear),M.depthFar>0&&(se=M.depthFar)),Y.near=O.near=L.near=Se,Y.far=O.far=L.far=se,(J!==Y.near||K!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),J=Y.near,K=Y.far),Y.layers.mask=le.layers.mask|6,L.layers.mask=Y.layers.mask&-5,O.layers.mask=Y.layers.mask&-3;const Ee=le.parent,Ge=Y.cameras;Ue(Y,Ee);for(let $e=0;$e<Ge.length;$e++)Ue(Ge[$e],Ee);Ge.length===2?Re(Y,L,O):Y.projectionMatrix.copy(L.projectionMatrix),Pe(le,Y,Ee)};function Pe(le,Se,se){se===null?le.matrix.copy(Se.matrixWorld):(le.matrix.copy(se.matrixWorld),le.matrix.invert(),le.matrix.multiply(Se.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Se.projectionMatrix),le.projectionMatrixInverse.copy(Se.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=dl*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(_===null&&v===null))return h},this.setFoveation=function(le){h=le,_!==null&&(_.fixedFoveation=le),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=le)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(le){return S[le]};let Ye=null;function Je(le,Se){if(m=Se.getViewerPose(f||c),E=Se,m!==null){const se=m.views;v!==null&&(e.setRenderTargetFramebuffer(I,v.framebuffer),e.setRenderTarget(I));let Ee=!1;se.length!==Y.cameras.length&&(Y.cameras.length=0,Ee=!0);for(let ct=0;ct<se.length;ct++){const ht=se[ct];let Et=null;if(v!==null)Et=v.getViewport(ht);else{const It=g.getViewSubImage(_,ht);Et=It.viewport,ct===0&&(e.setRenderTargetTextures(I,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(I))}let et=B[ct];et===void 0&&(et=new wn,et.layers.enable(ct),et.viewport=new kt,B[ct]=et),et.matrix.fromArray(ht.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ht.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Et.x,Et.y,Et.width,Et.height),ct===0&&(Y.matrix.copy(et.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ee===!0&&Y.cameras.push(et)}const Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){g=n.getBinding();const ct=g.getDepthInformation(se[0]);ct&&ct.isValid&&ct.texture&&M.init(ct,s.renderState)}if(Ge&&Ge.includes("camera-access")&&R){e.state.unbindTexture(),g=n.getBinding();for(let ct=0;ct<se.length;ct++){const ht=se[ct].camera;if(ht){let Et=S[ht];Et||(Et=new rd,S[ht]=Et);const et=g.getCameraImage(ht);Et.sourceTexture=et}}}}for(let se=0;se<z.length;se++){const Ee=P[se],Ge=z[se];Ee!==null&&Ge!==void 0&&Ge.update(Ee,Se,f||c)}Ye&&Ye(le,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),E=null}const at=new ld;at.setAnimationLoop(Je),this.setAnimationLoop=function(le){Ye=le},this.dispose=function(){}}}const Vi=new Kn,cM=new Dt;function uM(i,e){function t(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function n(M,S){S.color.getRGB(M.fogColor.value,sd(i)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function s(M,S,D,F,I){S.isMeshBasicMaterial?o(M,S):S.isMeshLambertMaterial?(o(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(M,S),g(M,S)):S.isMeshPhongMaterial?(o(M,S),m(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(M,S),_(M,S),S.isMeshPhysicalMaterial&&v(M,S,I)):S.isMeshMatcapMaterial?(o(M,S),E(M,S)):S.isMeshDepthMaterial?o(M,S):S.isMeshDistanceMaterial?(o(M,S),R(M,S)):S.isMeshNormalMaterial?o(M,S):S.isLineBasicMaterial?(c(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?h(M,S,D,F):S.isSpriteMaterial?f(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,t(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,t(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,t(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===_n&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,t(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===_n&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,t(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,t(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const D=e.get(S),F=D.envMap,I=D.envMapRotation;F&&(M.envMap.value=F,Vi.copy(I),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),M.envMapRotation.value.setFromMatrix4(cM.makeRotationFromEuler(Vi)),M.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,M.aoMapTransform))}function c(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,t(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function h(M,S,D,F){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*D,M.scale.value=F*.5,S.map&&(M.map.value=S.map,t(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,t(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,t(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,t(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function _(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function v(M,S,D){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===_n&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function R(M,S){const D=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dM(i,e,t,n){let s={},o={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,F){const I=F.program;n.uniformBlockBinding(D,I)}function f(D,F){let I=s[D.id];I===void 0&&(E(D),I=m(D),s[D.id]=I,D.addEventListener("dispose",M));const z=F.program;n.updateUBOMapping(D,z);const P=e.render.frame;o[D.id]!==P&&(_(D),o[D.id]=P)}function m(D){const F=g();D.__bindingPointIndex=F;const I=i.createBuffer(),z=D.__size,P=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,z,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,I),I}function g(){for(let D=0;D<d;D++)if(c.indexOf(D)===-1)return c.push(D),D;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const F=s[D.id],I=D.uniforms,z=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let P=0,V=I.length;P<V;P++){const A=Array.isArray(I[P])?I[P]:[I[P]];for(let L=0,O=A.length;L<O;L++){const B=A[L];if(v(B,P,L,z)===!0){const Y=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let K=0;for(let ne=0;ne<J.length;ne++){const Z=J[ne],ie=R(Z);typeof Z=="number"||typeof Z=="boolean"?(B.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Y+K,B.__data)):Z.isMatrix3?(B.__data[0]=Z.elements[0],B.__data[1]=Z.elements[1],B.__data[2]=Z.elements[2],B.__data[3]=0,B.__data[4]=Z.elements[3],B.__data[5]=Z.elements[4],B.__data[6]=Z.elements[5],B.__data[7]=0,B.__data[8]=Z.elements[6],B.__data[9]=Z.elements[7],B.__data[10]=Z.elements[8],B.__data[11]=0):(Z.toArray(B.__data,K),K+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(D,F,I,z){const P=D.value,V=F+"_"+I;if(z[V]===void 0)return typeof P=="number"||typeof P=="boolean"?z[V]=P:z[V]=P.clone(),!0;{const A=z[V];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return z[V]=P,!0}else if(A.equals(P)===!1)return A.copy(P),!0}return!1}function E(D){const F=D.uniforms;let I=0;const z=16;for(let V=0,A=F.length;V<A;V++){const L=Array.isArray(F[V])?F[V]:[F[V]];for(let O=0,B=L.length;O<B;O++){const Y=L[O],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,ne=J.length;K<ne;K++){const Z=J[K],ie=R(Z),pe=I%z,ge=pe%ie.boundary,Re=pe+ge;I+=ge,Re!==0&&z-Re<ie.storage&&(I+=z-Re),Y.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=I,I+=ie.storage}}}const P=I%z;return P>0&&(I+=z-P),D.__size=I,D.__cache={},this}function R(D){const F={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(F.boundary=4,F.storage=4):D.isVector2?(F.boundary=8,F.storage=8):D.isVector3||D.isColor?(F.boundary=16,F.storage=12):D.isVector4?(F.boundary=16,F.storage=16):D.isMatrix3?(F.boundary=48,F.storage=48):D.isMatrix4?(F.boundary=64,F.storage=64):D.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",D),F}function M(D){const F=D.target;F.removeEventListener("dispose",M);const I=c.indexOf(F.__bindingPointIndex);c.splice(I,1),i.deleteBuffer(s[F.id]),delete s[F.id],delete o[F.id]}function S(){for(const D in s)i.deleteBuffer(s[D]);c=[],s={},o={}}return{bind:h,update:f,dispose:S}}const fM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function hM(){return Gn===null&&(Gn=new nd(fM,16,16,Tr,ui),Gn.name="DFG_LUT",Gn.minFilter=un,Gn.magFilter=un,Gn.wrapS=oi,Gn.wrapT=oi,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class pM{constructor(e={}){const{canvas:t=Eg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:v=Sn}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=c;const R=v,M=new Set([bl,El,Ml]),S=new Set([Sn,Yn,es,ts,xl,Sl]),D=new Uint32Array(4),F=new Int32Array(4);let I=null,z=null;const P=[],V=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1;this._outputColorSpace=en;let B=0,Y=0,J=null,K=-1,ne=null;const Z=new kt,ie=new kt;let pe=null;const ge=new ft(0);let Re=0,Ue=t.width,Pe=t.height,Ye=1,Je=null,at=null;const le=new kt(0,0,Ue,Pe),Se=new kt(0,0,Ue,Pe);let se=!1;const Ee=new Rl;let Ge=!1,$e=!1;const Tt=new Dt,ct=new q,ht=new kt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function It(){return J===null?Ye:1}let H=n;function Rt(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:s,stencil:o,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_l}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",gt,!1),H===null){const $="webgl2";if(H=Rt($,C),H===null)throw Rt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw yt("WebGLRenderer: "+C.message),C}let ut,_t,Ie,U,b,G,ae,he,oe,Ne,be,He,Xe,xe,Me,Oe,Be,De,tt,W,we,ye,Ce;function X(){ut=new pS(H),ut.init(),we=new rM(H,ut),_t=new aS(H,ut,e,we),Ie=new nM(H,ut),_t.reversedDepthBuffer&&_&&Ie.buffers.depth.setReversed(!0),U=new gS(H),b=new Hy,G=new iM(H,ut,Ie,b,_t,we,U),ae=new hS(L),he=new M0(H),ye=new rS(H,he),oe=new mS(H,he,U,ye),Ne=new xS(H,oe,he,ye,U),De=new vS(H,_t,G),Me=new oS(b),be=new Vy(L,ae,ut,_t,ye,Me),He=new uM(L,b),Xe=new Wy,xe=new Ky(ut),Be=new iS(L,ae,Ie,Ne,E,h),Oe=new tM(L,Ne,_t),Ce=new dM(H,U,_t,Ie),tt=new sS(H,ut,U),W=new _S(H,ut,U),U.programs=be.programs,L.capabilities=_t,L.extensions=ut,L.properties=b,L.renderLists=Xe,L.shadowMap=Oe,L.state=Ie,L.info=U}X(),R!==Sn&&(A=new yS(R,t.width,t.height,s,o));const k=new lM(L,H);this.xr=k,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ye},this.setPixelRatio=function(C){C!==void 0&&(Ye=C,this.setSize(Ue,Pe,!1))},this.getSize=function(C){return C.set(Ue,Pe)},this.setSize=function(C,$,re=!0){if(k.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=C,Pe=$,t.width=Math.floor(C*Ye),t.height=Math.floor($*Ye),re===!0&&(t.style.width=C+"px",t.style.height=$+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(Ue*Ye,Pe*Ye).floor()},this.setDrawingBufferSize=function(C,$,re){Ue=C,Pe=$,Ye=re,t.width=Math.floor(C*re),t.height=Math.floor($*re),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(R===Sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(le)},this.setViewport=function(C,$,re,te){C.isVector4?le.set(C.x,C.y,C.z,C.w):le.set(C,$,re,te),Ie.viewport(Z.copy(le).multiplyScalar(Ye).round())},this.getScissor=function(C){return C.copy(Se)},this.setScissor=function(C,$,re,te){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,$,re,te),Ie.scissor(ie.copy(Se).multiplyScalar(Ye).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(C){Ie.setScissorTest(se=C)},this.setOpaqueSort=function(C){Je=C},this.setTransparentSort=function(C){at=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,re=!0){let te=0;if(C){let Q=!1;if(J!==null){const Te=J.texture.format;Q=M.has(Te)}if(Q){const Te=J.texture.type,Fe=S.has(Te),fe=Be.getClearColor(),ke=Be.getClearAlpha(),ze=fe.r,Ke=fe.g,Qe=fe.b;Fe?(D[0]=ze,D[1]=Ke,D[2]=Qe,D[3]=ke,H.clearBufferuiv(H.COLOR,0,D)):(F[0]=ze,F[1]=Ke,F[2]=Qe,F[3]=ke,H.clearBufferiv(H.COLOR,0,F))}else te|=H.COLOR_BUFFER_BIT}$&&(te|=H.DEPTH_BUFFER_BIT),re&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Be.dispose(),Xe.dispose(),xe.dispose(),b.dispose(),ae.dispose(),Ne.dispose(),ye.dispose(),Ce.dispose(),be.dispose(),k.dispose(),k.removeEventListener("sessionstart",yn),k.removeEventListener("sessionend",ls),Mn.stop()};function Le(C){C.preventDefault(),Fc("WebGLRenderer: Context Lost."),O=!0}function je(){Fc("WebGLRenderer: Context Restored."),O=!1;const C=U.autoReset,$=Oe.enabled,re=Oe.autoUpdate,te=Oe.needsUpdate,Q=Oe.type;X(),U.autoReset=C,Oe.enabled=$,Oe.autoUpdate=re,Oe.needsUpdate=te,Oe.type=Q}function gt(C){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const $=C.target;$.removeEventListener("dispose",st),An($)}function An(C){Ht(C),b.remove(C)}function Ht(C){const $=b.get(C).programs;$!==void 0&&($.forEach(function(re){be.releaseProgram(re)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,re,te,Q,Te){$===null&&($=Et);const Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,fe=Sa(C,$,re,te,Q);Ie.setMaterial(te,Fe);let ke=re.index,ze=1;if(te.wireframe===!0){if(ke=oe.getWireframeAttribute(re),ke===void 0)return;ze=2}const Ke=re.drawRange,Qe=re.attributes.position;let Ve=Ke.start*ze,Mt=(Ke.start+Ke.count)*ze;Te!==null&&(Ve=Math.max(Ve,Te.start*ze),Mt=Math.min(Mt,(Te.start+Te.count)*ze)),ke!==null?(Ve=Math.max(Ve,0),Mt=Math.min(Mt,ke.count)):Qe!=null&&(Ve=Math.max(Ve,0),Mt=Math.min(Mt,Qe.count));const Ut=Mt-Ve;if(Ut<0||Ut===1/0)return;ye.setup(Q,te,fe,re,ke);let Lt,wt=tt;if(ke!==null&&(Lt=he.get(ke),wt=W,wt.setIndex(Lt)),Q.isMesh)te.wireframe===!0?(Ie.setLineWidth(te.wireframeLinewidth*It()),wt.setMode(H.LINES)):wt.setMode(H.TRIANGLES);else if(Q.isLine){let Gt=te.linewidth;Gt===void 0&&(Gt=1),Ie.setLineWidth(Gt*It()),Q.isLineSegments?wt.setMode(H.LINES):Q.isLineLoop?wt.setMode(H.LINE_LOOP):wt.setMode(H.LINE_STRIP)}else Q.isPoints?wt.setMode(H.POINTS):Q.isSprite&&wt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)fa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))wt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Gt=Q._multiDrawStarts,y=Q._multiDrawCounts,ot=Q._multiDrawCount,mt=ke?he.get(ke).bytesPerElement:1,an=b.get(te).currentProgram.getUniforms();for(let Qt=0;Qt<ot;Qt++)an.setValue(H,"_gl_DrawID",Qt),wt.render(Gt[Qt]/mt,y[Qt])}else if(Q.isInstancedMesh)wt.renderInstances(Ve,Ut,Q.count);else if(re.isInstancedBufferGeometry){const Gt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,y=Math.min(re.instanceCount,Gt);wt.renderInstances(Ve,Ut,y)}else wt.render(Ve,Ut)};function Ci(C,$,re){C.transparent===!0&&C.side===Tn&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,Ri(C,$,re),C.side=Ai,C.needsUpdate=!0,Ri(C,$,re),C.side=Tn):Ri(C,$,re)}this.compile=function(C,$,re=null){re===null&&(re=C),z=xe.get(re),z.init($),V.push(z),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test($.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),C!==re&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test($.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),z.setupLights();const te=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Te=Q.material;if(Te)if(Array.isArray(Te))for(let Fe=0;Fe<Te.length;Fe++){const fe=Te[Fe];Ci(fe,re,Q),te.add(fe)}else Ci(Te,re,Q),te.add(Te)}),z=V.pop(),te},this.compileAsync=function(C,$,re=null){const te=this.compile(C,$,re);return new Promise(Q=>{function Te(){if(te.forEach(function(Fe){b.get(Fe).currentProgram.isReady()&&te.delete(Fe)}),te.size===0){Q(C);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Ir=null;function xa(C){Ir&&Ir(C)}function yn(){Mn.stop()}function ls(){Mn.start()}const Mn=new ld;Mn.setAnimationLoop(xa),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(C){Ir=C,k.setAnimationLoop(C),C===null?Mn.stop():Mn.start()},k.addEventListener("sessionstart",yn),k.addEventListener("sessionend",ls),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const re=k.enabled===!0&&k.isPresenting===!0,te=A!==null&&(J===null||re)&&A.begin(L,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(k.cameraAutoUpdate===!0&&k.updateCamera($),$=k.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,$,J),z=xe.get(C,V.length),z.init($),V.push(z),Tt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ee.setFromProjectionMatrix(Tt,Xn,$.reversedDepth),$e=this.localClippingEnabled,Ge=Me.init(this.clippingPlanes,$e),I=Xe.get(C,P.length),I.init(),P.push(I),k.enabled===!0&&k.isPresenting===!0){const Fe=L.xr.getDepthSensingMesh();Fe!==null&&hi(Fe,$,-1/0,L.sortObjects)}hi(C,$,0,L.sortObjects),I.finish(),L.sortObjects===!0&&I.sort(Je,at),et=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,et&&Be.addToRenderList(I,C),this.info.render.frame++,Ge===!0&&Me.beginShadows();const Q=z.state.shadowsArray;if(Oe.render(Q,C,$),Ge===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&A.hasRenderPass())===!1){const Fe=I.opaque,fe=I.transmissive;if(z.setupLights(),$.isArrayCamera){const ke=$.cameras;if(fe.length>0)for(let ze=0,Ke=ke.length;ze<Ke;ze++){const Qe=ke[ze];cs(Fe,fe,C,Qe)}et&&Be.render(C);for(let ze=0,Ke=ke.length;ze<Ke;ze++){const Qe=ke[ze];tr(I,C,Qe,Qe.viewport)}}else fe.length>0&&cs(Fe,fe,C,$),et&&Be.render(C),tr(I,C,$)}J!==null&&Y===0&&(G.updateMultisampleRenderTarget(J),G.updateRenderTargetMipmap(J)),te&&A.end(L),C.isScene===!0&&C.onAfterRender(L,C,$),ye.resetDefaultState(),K=-1,ne=null,V.pop(),V.length>0?(z=V[V.length-1],Ge===!0&&Me.setGlobalState(L.clippingPlanes,z.state.camera)):z=null,P.pop(),P.length>0?I=P[P.length-1]:I=null};function hi(C,$,re,te){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ee.intersectsSprite(C)){te&&ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Tt);const Fe=Ne.update(C),fe=C.material;fe.visible&&I.push(C,Fe,fe,re,ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ee.intersectsObject(C))){const Fe=Ne.update(C),fe=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ht.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ht.copy(Fe.boundingSphere.center)),ht.applyMatrix4(C.matrixWorld).applyMatrix4(Tt)),Array.isArray(fe)){const ke=Fe.groups;for(let ze=0,Ke=ke.length;ze<Ke;ze++){const Qe=ke[ze],Ve=fe[Qe.materialIndex];Ve&&Ve.visible&&I.push(C,Fe,Ve,re,ht.z,Qe)}}else fe.visible&&I.push(C,Fe,fe,re,ht.z,null)}}const Te=C.children;for(let Fe=0,fe=Te.length;Fe<fe;Fe++)hi(Te[Fe],$,re,te)}function tr(C,$,re,te){const{opaque:Q,transmissive:Te,transparent:Fe}=C;z.setupLightsView(re),Ge===!0&&Me.setGlobalState(L.clippingPlanes,re),te&&Ie.viewport(Z.copy(te)),Q.length>0&&nr(Q,$,re),Te.length>0&&nr(Te,$,re),Fe.length>0&&nr(Fe,$,re),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function cs(C,$,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[te.id]===void 0){const Ve=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[te.id]=new qn(1,1,{generateMipmaps:!0,type:Ve?ui:Sn,minFilter:$i,samples:Math.max(4,_t.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Te=z.state.transmissionRenderTarget[te.id],Fe=te.viewport||Z;Te.setSize(Fe.z*L.transmissionResolutionScale,Fe.w*L.transmissionResolutionScale);const fe=L.getRenderTarget(),ke=L.getActiveCubeFace(),ze=L.getActiveMipmapLevel();L.setRenderTarget(Te),L.getClearColor(ge),Re=L.getClearAlpha(),Re<1&&L.setClearColor(16777215,.5),L.clear(),et&&Be.render(re);const Ke=L.toneMapping;L.toneMapping=jn;const Qe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),z.setupLightsView(te),Ge===!0&&Me.setGlobalState(L.clippingPlanes,te),nr(C,re,te),G.updateMultisampleRenderTarget(Te),G.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Mt=0,Ut=$.length;Mt<Ut;Mt++){const Lt=$[Mt],{object:wt,geometry:Gt,material:y,group:ot}=Lt;if(y.side===Tn&&wt.layers.test(te.layers)){const mt=y.side;y.side=_n,y.needsUpdate=!0,us(wt,re,te,Gt,y,ot),y.side=mt,y.needsUpdate=!0,Ve=!0}}Ve===!0&&(G.updateMultisampleRenderTarget(Te),G.updateRenderTargetMipmap(Te))}L.setRenderTarget(fe,ke,ze),L.setClearColor(ge,Re),Qe!==void 0&&(te.viewport=Qe),L.toneMapping=Ke}function nr(C,$,re){const te=$.isScene===!0?$.overrideMaterial:null;for(let Q=0,Te=C.length;Q<Te;Q++){const Fe=C[Q],{object:fe,geometry:ke,group:ze}=Fe;let Ke=Fe.material;Ke.allowOverride===!0&&te!==null&&(Ke=te),fe.layers.test(re.layers)&&us(fe,$,re,ke,Ke,ze)}}function us(C,$,re,te,Q,Te){C.onBeforeRender(L,$,re,te,Q,Te),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(L,$,re,te,C,Te),Q.transparent===!0&&Q.side===Tn&&Q.forceSinglePass===!1?(Q.side=_n,Q.needsUpdate=!0,L.renderBufferDirect(re,$,te,Q,C,Te),Q.side=Ai,Q.needsUpdate=!0,L.renderBufferDirect(re,$,te,Q,C,Te),Q.side=Tn):L.renderBufferDirect(re,$,te,Q,C,Te),C.onAfterRender(L,$,re,te,Q,Te)}function Ri(C,$,re){$.isScene!==!0&&($=Et);const te=b.get(C),Q=z.state.lights,Te=z.state.shadowsArray,Fe=Q.state.version,fe=be.getParameters(C,Q.state,Te,$,re),ke=be.getProgramCacheKey(fe);let ze=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,te.fog=$.fog;const Ke=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=ae.get(C.envMap||te.environment,Ke),te.envMapRotation=te.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,ze===void 0&&(C.addEventListener("dispose",st),ze=new Map,te.programs=ze);let Qe=ze.get(ke);if(Qe!==void 0){if(te.currentProgram===Qe&&te.lightsStateVersion===Fe)return fs(C,fe),Qe}else fe.uniforms=be.getUniforms(C),C.onBeforeCompile(fe,L),Qe=be.acquireProgram(fe,ke),ze.set(ke,Qe),te.uniforms=fe.uniforms;const Ve=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Me.uniform),fs(C,fe),te.needsLights=bt(C),te.lightsStateVersion=Fe,te.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=Qe,te.uniformsList=null,Qe}function ds(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=la.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function fs(C,$){const re=b.get(C);re.outputColorSpace=$.outputColorSpace,re.batching=$.batching,re.batchingColor=$.batchingColor,re.instancing=$.instancing,re.instancingColor=$.instancingColor,re.instancingMorph=$.instancingMorph,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function Sa(C,$,re,te,Q){$.isScene!==!0&&($=Et),G.resetTextureUnits();const Te=$.fog,Fe=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?$.environment:null,fe=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ar,ke=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ze=ae.get(te.envMap||Fe,ke),Ke=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Qe=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!re.morphAttributes.position,Mt=!!re.morphAttributes.normal,Ut=!!re.morphAttributes.color;let Lt=jn;te.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Lt=L.toneMapping);const wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Gt=wt!==void 0?wt.length:0,y=b.get(te),ot=z.state.lights;if(Ge===!0&&($e===!0||C!==ne)){const zt=C===ne&&te.id===K;Me.setState(te,C,zt)}let mt=!1;te.version===y.__version?(y.needsLights&&y.lightsStateVersion!==ot.state.version||y.outputColorSpace!==fe||Q.isBatchedMesh&&y.batching===!1||!Q.isBatchedMesh&&y.batching===!0||Q.isBatchedMesh&&y.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&y.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&y.instancing===!1||!Q.isInstancedMesh&&y.instancing===!0||Q.isSkinnedMesh&&y.skinning===!1||!Q.isSkinnedMesh&&y.skinning===!0||Q.isInstancedMesh&&y.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&y.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&y.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&y.instancingMorph===!1&&Q.morphTexture!==null||y.envMap!==ze||te.fog===!0&&y.fog!==Te||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Me.numPlanes||y.numIntersection!==Me.numIntersection)||y.vertexAlphas!==Ke||y.vertexTangents!==Qe||y.morphTargets!==Ve||y.morphNormals!==Mt||y.morphColors!==Ut||y.toneMapping!==Lt||y.morphTargetsCount!==Gt)&&(mt=!0):(mt=!0,y.__version=te.version);let an=y.currentProgram;mt===!0&&(an=Ri(te,$,Q));let Qt=!1,Qn=!1,mi=!1;const At=an.getUniforms(),Wt=y.uniforms;if(Ie.useProgram(an.program)&&(Qt=!0,Qn=!0,mi=!0),te.id!==K&&(K=te.id,Qn=!0),Qt||ne!==C){Ie.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(H,"projectionMatrix",C.projectionMatrix),At.setValue(H,"viewMatrix",C.matrixWorldInverse);const On=At.map.cameraPosition;On!==void 0&&On.setValue(H,ct.setFromMatrixPosition(C.matrixWorld)),_t.logarithmicDepthBuffer&&At.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&At.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),ne!==C&&(ne=C,Qn=!0,mi=!0)}if(y.needsLights&&(ot.state.directionalShadowMap.length>0&&At.setValue(H,"directionalShadowMap",ot.state.directionalShadowMap,G),ot.state.spotShadowMap.length>0&&At.setValue(H,"spotShadowMap",ot.state.spotShadowMap,G),ot.state.pointShadowMap.length>0&&At.setValue(H,"pointShadowMap",ot.state.pointShadowMap,G)),Q.isSkinnedMesh){At.setOptional(H,Q,"bindMatrix"),At.setOptional(H,Q,"bindMatrixInverse");const zt=Q.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),At.setValue(H,"boneTexture",zt.boneTexture,G))}Q.isBatchedMesh&&(At.setOptional(H,Q,"batchingTexture"),At.setValue(H,"batchingTexture",Q._matricesTexture,G),At.setOptional(H,Q,"batchingIdTexture"),At.setValue(H,"batchingIdTexture",Q._indirectTexture,G),At.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&At.setValue(H,"batchingColorTexture",Q._colorsTexture,G));const Nn=re.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&De.update(Q,re,an),(Qn||y.receiveShadow!==Q.receiveShadow)&&(y.receiveShadow=Q.receiveShadow,At.setValue(H,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&$.environment!==null&&(Wt.envMapIntensity.value=$.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=hM()),Qn&&(At.setValue(H,"toneMappingExposure",L.toneMappingExposure),y.needsLights&&ya(Wt,mi),Te&&te.fog===!0&&He.refreshFogUniforms(Wt,Te),He.refreshMaterialUniforms(Wt,te,Ye,Pe,z.state.transmissionRenderTarget[C.id]),la.upload(H,ds(y),Wt,G)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(la.upload(H,ds(y),Wt,G),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&At.setValue(H,"center",Q.center),At.setValue(H,"modelViewMatrix",Q.modelViewMatrix),At.setValue(H,"normalMatrix",Q.normalMatrix),At.setValue(H,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const zt=te.uniformsGroups;for(let On=0,_i=zt.length;On<_i;On++){const Nt=zt[On];Ce.update(Nt,an),Ce.bind(Nt,an)}}return an}function ya(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function bt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,$,re){const te=b.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=$,b.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const re=b.get(C);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0};const Ma=H.createFramebuffer();this.setRenderTarget=function(C,$=0,re=0){J=C,B=$,Y=re;let te=null,Q=!1,Te=!1;if(C){const fe=b.get(C);if(fe.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(H.FRAMEBUFFER,fe.__webglFramebuffer),Z.copy(C.viewport),ie.copy(C.scissor),pe=C.scissorTest,Ie.viewport(Z),Ie.scissor(ie),Ie.setScissorTest(pe),K=-1;return}else if(fe.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(fe.__hasExternalTextures)G.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ke=C.depthTexture;if(fe.__boundDepthTexture!==Ke){if(Ke!==null&&b.has(Ke)&&(C.width!==Ke.image.width||C.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Te=!0);const ze=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[$])?te=ze[$][re]:te=ze[$],Q=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?te=b.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?te=ze[re]:te=ze,Z.copy(C.viewport),ie.copy(C.scissor),pe=C.scissorTest}else Z.copy(le).multiplyScalar(Ye).floor(),ie.copy(Se).multiplyScalar(Ye).floor(),pe=se;if(re!==0&&(te=Ma),Ie.bindFramebuffer(H.FRAMEBUFFER,te)&&Ie.drawBuffers(C,te),Ie.viewport(Z),Ie.scissor(ie),Ie.setScissorTest(pe),Q){const fe=b.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,fe.__webglTexture,re)}else if(Te){const fe=$;for(let ke=0;ke<C.textures.length;ke++){const ze=b.get(C.textures[ke]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ke,ze.__webglTexture,re,fe)}}else if(C!==null&&re!==0){const fe=b.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fe.__webglTexture,re)}K=-1},this.readRenderTargetPixels=function(C,$,re,te,Q,Te,Fe,fe=0){if(!(C&&C.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke){Ie.bindFramebuffer(H.FRAMEBUFFER,ke);try{const ze=C.textures[fe],Ke=ze.format,Qe=ze.type;if(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+fe),!_t.textureFormatReadable(Ke)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Qe)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-te&&re>=0&&re<=C.height-Q&&H.readPixels($,re,te,Q,we.convert(Ke),we.convert(Qe),Te)}finally{const ze=J!==null?b.get(J).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,$,re,te,Q,Te,Fe,fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(ke=ke[Fe]),ke)if($>=0&&$<=C.width-te&&re>=0&&re<=C.height-Q){Ie.bindFramebuffer(H.FRAMEBUFFER,ke);const ze=C.textures[fe],Ke=ze.format,Qe=ze.type;if(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+fe),!_t.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),H.readPixels($,re,te,Q,we.convert(Ke),we.convert(Qe),0);const Mt=J!==null?b.get(J).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,Mt);const Ut=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await bg(H,Ut,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(Ve),H.deleteSync(Ut),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,re=0){const te=Math.pow(2,-re),Q=Math.floor(C.image.width*te),Te=Math.floor(C.image.height*te),Fe=$!==null?$.x:0,fe=$!==null?$.y:0;G.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,Fe,fe,Q,Te),Ie.unbindTexture()};const hs=H.createFramebuffer(),pi=H.createFramebuffer();this.copyTextureToTexture=function(C,$,re=null,te=null,Q=0,Te=0){let Fe,fe,ke,ze,Ke,Qe,Ve,Mt,Ut;const Lt=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(re!==null)Fe=re.max.x-re.min.x,fe=re.max.y-re.min.y,ke=re.isBox3?re.max.z-re.min.z:1,ze=re.min.x,Ke=re.min.y,Qe=re.isBox3?re.min.z:0;else{const Wt=Math.pow(2,-Q);Fe=Math.floor(Lt.width*Wt),fe=Math.floor(Lt.height*Wt),C.isDataArrayTexture?ke=Lt.depth:C.isData3DTexture?ke=Math.floor(Lt.depth*Wt):ke=1,ze=0,Ke=0,Qe=0}te!==null?(Ve=te.x,Mt=te.y,Ut=te.z):(Ve=0,Mt=0,Ut=0);const wt=we.convert($.format),Gt=we.convert($.type);let y;$.isData3DTexture?(G.setTexture3D($,0),y=H.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(G.setTexture2DArray($,0),y=H.TEXTURE_2D_ARRAY):(G.setTexture2D($,0),y=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);const ot=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),an=H.getParameter(H.UNPACK_SKIP_PIXELS),Qt=H.getParameter(H.UNPACK_SKIP_ROWS),Qn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Lt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Lt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ze),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qe);const mi=C.isDataArrayTexture||C.isData3DTexture,At=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const Wt=b.get(C),Nn=b.get($),zt=b.get(Wt.__renderTarget),On=b.get(Nn.__renderTarget);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,zt.__webglFramebuffer),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let _i=0;_i<ke;_i++)mi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,b.get(C).__webglTexture,Q,Qe+_i),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,b.get($).__webglTexture,Te,Ut+_i)),H.blitFramebuffer(ze,Ke,Fe,fe,Ve,Mt,Fe,fe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||b.has(C)){const Wt=b.get(C),Nn=b.get($);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,hs),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,pi);for(let zt=0;zt<ke;zt++)mi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.__webglTexture,Q,Qe+zt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Wt.__webglTexture,Q),At?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nn.__webglTexture,Te,Ut+zt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nn.__webglTexture,Te),Q!==0?H.blitFramebuffer(ze,Ke,Fe,fe,Ve,Mt,Fe,fe,H.COLOR_BUFFER_BIT,H.NEAREST):At?H.copyTexSubImage3D(y,Te,Ve,Mt,Ut+zt,ze,Ke,Fe,fe):H.copyTexSubImage2D(y,Te,Ve,Mt,ze,Ke,Fe,fe);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else At?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(y,Te,Ve,Mt,Ut,Fe,fe,ke,wt,Gt,Lt.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(y,Te,Ve,Mt,Ut,Fe,fe,ke,wt,Lt.data):H.texSubImage3D(y,Te,Ve,Mt,Ut,Fe,fe,ke,wt,Gt,Lt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,Ve,Mt,Fe,fe,wt,Gt,Lt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,Ve,Mt,Lt.width,Lt.height,wt,Lt.data):H.texSubImage2D(H.TEXTURE_2D,Te,Ve,Mt,Fe,fe,wt,Gt,Lt);H.pixelStorei(H.UNPACK_ROW_LENGTH,ot),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,an),H.pixelStorei(H.UNPACK_SKIP_ROWS,Qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Qn),Te===0&&$.generateMipmaps&&H.generateMipmap(y),Ie.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),Ie.unbindTexture()},this.resetState=function(){B=0,Y=0,J=null,Ie.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Ot=Object.freeze({wheelbase:.324,tread:.255,radius:.055,wheelWidth:.041,maxSteer:.4}),yr=1.9,pd=new e0([[-3,-6],[5,-6],[10,-4],[11,1],[8,6],[3,6],[0,2],[-4,1],[-7,5],[-11,4],[-12,-1],[-9,-6]].map(([i,e])=>new q(i,e,0)),!0,"centripetal"),mn=pd.getSpacedPoints(240).slice(0,-1),mM=pd.getLength();function $n(i){const e=mn.length,t=mn[(i+e)%e],n=mn[(i+1+e)%e],s=mn[(i-1+e)%e],o=n.clone().sub(s).normalize();return{p:t,tangent:o,normal:new q(-o.y,o.x,0),yaw:Math.atan2(o.y,o.x)}}const md=[-1,1].flatMap(i=>mn.map((e,t)=>{const n=$n(t),s=$n(t+1),o=n.p.clone().addScaledVector(n.normal,i*(yr/2+.09)),c=s.p.clone().addScaledVector(s.normal,i*(yr/2+.09));return{x:(o.x+c.x)/2,y:(o.y+c.y)/2,z:.13,halfLength:o.distanceTo(c)/2+.012,yaw:Math.atan2(c.y-o.y,c.x-o.x),side:i,index:t}}));function Mo(i){let e=0,t=1/0;for(let n=0;n<mn.length;n++){const s=Math.hypot(i[0]-mn[n].x,i[1]-mn[n].y);s<t&&(t=s,e=n)}return{index:e,distance:t,...$n(e)}}function _M(){const i=$n(0),e=[["fl",1,1],["fr",1,-1],["rl",-1,1],["rr",-1,-1]];return`<mujoco model="RoboRacer browser practice">
  <compiler angle="radian"/>
  <option timestep="0.004" integrator="implicitfast" iterations="30" gravity="0 0 -9.81"/>
  <default><geom friction="1 .005 .0001" condim="4" solref=".01 1" solimp=".95 .99 .001"/><joint damping=".003" armature=".00002"/></default>
  <worldbody>
    <geom name="floor" type="plane" size="22 16 .1"/>
    ${md.map((t,n)=>`<geom name="barrier_${n}" type="box" pos="${t.x} ${t.y} ${t.z}" euler="0 0 ${t.yaw}" size="${t.halfLength} .08 .13"/>`).join("")}
    <body name="chassis" pos="${i.p.x} ${i.p.y} .12" euler="0 0 ${i.yaw}">
      <freejoint name="root"/>
      <geom name="chassis_collision" type="box" size=".245 .105 .035" mass="3.1"/>
      <geom name="camera_collision" type="box" pos=".14 0 .08" size=".025 .06 .022" mass=".05"/>
      ${e.map(([t,n,s])=>`<body name="susp_${t}" pos="${n*Ot.wheelbase/2} ${s*Ot.tread/2} -.04">
        <joint name="spring_${t}" type="slide" axis="0 0 1" range="-.018 .018" stiffness="1500" damping="12"/>
        <inertial pos="0 0 0" mass=".025" diaginertia=".00001 .00001 .00001"/>
        <body name="hub_${t}">
          ${n===1?`<joint name="steer_${t}" type="hinge" axis="0 0 1" range="-.5 .5" damping=".15"/>`:""}
          <inertial pos="0 0 0" mass=".02" diaginertia=".00001 .00001 .00001"/>
          <body name="wheel_${t}">
            <joint name="roll_${t}" type="hinge" axis="0 1 0"/>
            <geom name="tire_${t}" type="cylinder" size="${Ot.radius} ${Ot.wheelWidth/2}" euler="1.57079632679 0 0" mass=".08"/>
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
  </mujoco>`}const Ln=(i,e=-1,t=1)=>Math.max(e,Math.min(t,i));class gM{constructor(e){this.mj=e,this.model=e.MjModel.from_xml_string(_M()),this.data=new e.MjData(this.model),this.mode="manual",this.speedLimit=2,this.events=[],this.samples=[],this.reset()}get position(){return Array.from(this.data.qpos.subarray(0,3))}get quaternion(){return Array.from(this.data.qpos.subarray(3,7))}get yaw(){const[e,t,n,s]=this.quaternion;return Math.atan2(2*(e*s+t*n),1-2*(n*n+s*s))}get speed(){return this.data.qvel[0]*Math.cos(this.yaw)+this.data.qvel[1]*Math.sin(this.yaw)}reset(){this.mj.mj_resetData(this.model,this.data),this.mj.mj_forward(this.model,this.data),this.elapsed=0,this.laps=0,this.lastLap=null,this.bestLap=null,this.lapStart=0,this.hits=0,this.progress=0,this.previousIndex=0,this.targetSpeed=0,this.steering=0,this.lastContact=!1,this.lapValid=!0,this.bestByMode={manual:null,demo:null},this.samples=[],this.events=[{type:"reset",t:0,mode:this.mode}],this.input={steer:0,throttle:0,brake:0,source:"none"}}setMode(e){if(!["manual","demo"].includes(e))throw new Error("Unknown control mode");e!==this.mode&&this.elapsed>.05&&(this.lapValid=!1),this.mode=e,this.bestLap=this.bestByMode[e],this.lastLap=null,this.targetSpeed=0,this.events.push({type:"mode",mode:e,t:this.elapsed})}demonstration(){const e=Mo(this.position),t=.65+Math.abs(this.speed)*.35,n=$n(e.index+Math.ceil(t/(mM/mn.length))).p,s=n.x-this.position[0],o=n.y-this.position[1],c=-Math.sin(this.yaw)*s+Math.cos(this.yaw)*o,d=Math.atan2(2*Ot.wheelbase*c,s*s+o*o),h=Math.min(this.speedLimit,2.3/(1+Math.abs(d)*4));return{steer:Ln(d/Ot.maxSteer),throttle:h/this.speedLimit,brake:0,source:"pure-pursuit"}}step(e={steer:0,throttle:0,brake:0,source:"none"}){const t=this.mode==="demo"?this.demonstration():e;if(![t.steer,t.throttle,t.brake].every(Number.isFinite))throw new Error("Non-finite input");this.input={...t};const n=t.throttle>0?Ln(t.throttle,0,1)*this.speedLimit:-Ln(t.brake,0,1)*.7,s=t.brake>0&&this.speed>.12?0:n,o=t.brake>0?5:2;this.targetSpeed+=Ln(s-this.targetSpeed,-o*.02,o*.02),this.steering+=Ln(Ln(t.steer)*Ot.maxSteer-this.steering,-1.6*.02,1.6*.02);const c=Math.tan(this.steering)/Ot.wheelbase;this.data.ctrl[0]=Math.atan(Ot.wheelbase*c/(1-Ot.tread/2*c)),this.data.ctrl[1]=Math.atan(Ot.wheelbase*c/(1+Ot.tread/2*c)),this.data.ctrl[2]=this.targetSpeed*(1-Ot.tread/2*c)/Ot.radius,this.data.ctrl[3]=this.targetSpeed*(1+Ot.tread/2*c)/Ot.radius;let d=!1;for(let _=0;_<5;_++){this.mj.mj_step(this.model,this.data);const v=this.data.contact;for(let E=0;E<this.data.ncon;E++){const R=v.get(E),M=this.model.geom_bodyid[R.geom1],S=this.model.geom_bodyid[R.geom2];(M===0?R.geom1:S===0?R.geom2:0)>0&&M===0!=(S===0)&&(d=!0),R.delete()}v.delete()}this.mj.mj_forward(this.model,this.data),this.elapsed+=.02,d&&!this.lastContact&&(this.hits++,this.events.push({type:"collision",t:this.elapsed})),this.lastContact=d;const h=Mo(this.position),f=mn.length;let m=h.index-this.previousIndex;m>f/2&&(m-=f),m<-f/2&&(m+=f),h.distance<1.4&&Math.abs(m)<f/8&&(this.progress+=m);const g=this.previousIndex>f-8&&h.index<8&&m>0&&h.distance<1.4;this.previousIndex=h.index,!this.lapValid&&g&&(this.progress=this.laps*f,this.lapStart=this.elapsed,this.lapValid=!0),this.lapValid&&this.progress>=(this.laps+1)*f&&(this.laps++,this.lastLap=this.elapsed-this.lapStart,this.lapStart=this.elapsed,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap),this.bestByMode[this.mode]=this.bestLap,this.events.push({type:"lap",t:this.elapsed,seconds:this.lastLap,lap:this.laps,mode:this.mode})),Math.round(this.elapsed*50)%5===0&&this.samples.length<36e3&&this.samples.push({t:+this.elapsed.toFixed(2),position:this.position,yaw:this.yaw,speed:this.speed,mode:this.mode,input:{...this.input},distanceFromCenter:h.distance,lap:this.laps,hits:this.hits})}recover(){const e=Mo(this.position),t=$n(e.index);this.data.qpos.set([t.p.x,t.p.y,.12,Math.cos(t.yaw/2),0,0,Math.sin(t.yaw/2)],0),this.data.qpos.fill(0,7),this.data.qvel.fill(0),this.data.ctrl.fill(0),this.targetSpeed=0,this.steering=0,this.progress=this.laps*mn.length,this.previousIndex=e.index,this.lapStart=this.elapsed,this.lapValid=!1,this.lastContact=!1,this.events.push({type:"recovery",t:this.elapsed}),this.mj.mj_forward(this.model,this.data)}snapshot(){return{position:this.position,quaternion:this.quaternion,speed:this.speed,elapsed:this.elapsed,mode:this.mode,laps:this.laps,hits:this.hits,lastLap:this.lastLap,bestLap:this.bestLap,input:this.input,steering:this.steering,progress:this.progress}}export(){return{schema:"car-practice-v1",vehicle:"RoboRacer-scale browser approximation",wheelbaseM:Ot.wheelbase,physics:"MuJoCo 3.13.0",calibratedToRealCar:!1,course:"authored practice circuit v1",speedLimitMps:this.speedLimit,sampleLimitReached:this.samples.length>=36e3,samples:this.samples,events:this.events}}dispose(){this.data.delete(),this.model.delete()}}class vM extends os{constructor(e){super(e)}load(e,t,n,s){const o=this,c=new f0(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(d){try{t(o.parse(d))}catch(h){s?s(h):console.error(h),o.manager.itemError(e)}},n,s)}parse(e){function t(f){const m=new DataView(f),g=32/8*3+32/8*3*3+16/8,_=m.getUint32(80,!0);if(80+32/8+_*g===m.byteLength)return!0;const E=[115,111,108,105,100];for(let R=0;R<5;R++)if(n(E,m,R))return!1;return!0}function n(f,m,g){for(let _=0,v=f.length;_<v;_++)if(f[_]!==m.getUint8(g+_))return!1;return!0}function s(f){const m=new DataView(f),g=m.getUint32(80,!0);let _,v,E,R=!1,M,S,D,F,I;for(let B=0;B<70;B++)m.getUint32(B,!1)==1129270351&&m.getUint8(B+4)==82&&m.getUint8(B+5)==61&&(R=!0,M=new Float32Array(g*3*3),S=m.getUint8(B+6)/255,D=m.getUint8(B+7)/255,F=m.getUint8(B+8)/255,I=m.getUint8(B+9)/255);const z=84,P=50,V=new nn,A=new Float32Array(g*3*3),L=new Float32Array(g*3*3),O=new ft;for(let B=0;B<g;B++){const Y=z+B*P,J=m.getFloat32(Y,!0),K=m.getFloat32(Y+4,!0),ne=m.getFloat32(Y+8,!0);if(R){const Z=m.getUint16(Y+48,!0);(Z&32768)===0?(_=(Z&31)/31,v=(Z>>5&31)/31,E=(Z>>10&31)/31):(_=S,v=D,E=F)}for(let Z=1;Z<=3;Z++){const ie=Y+Z*12,pe=B*3*3+(Z-1)*3;A[pe]=m.getFloat32(ie,!0),A[pe+1]=m.getFloat32(ie+4,!0),A[pe+2]=m.getFloat32(ie+8,!0),L[pe]=J,L[pe+1]=K,L[pe+2]=ne,R&&(O.setRGB(_,v,E,en),M[pe]=O.r,M[pe+1]=O.g,M[pe+2]=O.b)}}return V.setAttribute("position",new gn(A,3)),V.setAttribute("normal",new gn(L,3)),R&&(V.setAttribute("color",new gn(M,3)),V.hasColors=!0,V.alpha=I),V}function o(f){const m=new nn,g=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,v=/solid\s(.+)/;let E=0;const R=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,M=new RegExp("vertex"+R+R+R,"g"),S=new RegExp("normal"+R+R+R,"g"),D=[],F=[],I=[],z=new q;let P,V=0,A=0,L=0;for(;(P=g.exec(f))!==null;){A=L;const O=P[0],B=(P=v.exec(O))!==null?P[1]:"";for(I.push(B);(P=_.exec(O))!==null;){let K=0,ne=0;const Z=P[0];for(;(P=S.exec(Z))!==null;)z.x=parseFloat(P[1]),z.y=parseFloat(P[2]),z.z=parseFloat(P[3]),ne++;for(;(P=M.exec(Z))!==null;)D.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),F.push(z.x,z.y,z.z),K++,L++;ne!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),K!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const Y=A,J=L-A;m.userData.groupNames=I,m.addGroup(Y,J,V),V++}return m.setAttribute("position",new sn(D,3)),m.setAttribute("normal",new sn(F,3)),m}function c(f){return typeof f!="string"?new TextDecoder().decode(f):f}function d(f){if(typeof f=="string"){const m=new Uint8Array(f.length);for(let g=0;g<f.length;g++)m[g]=f.charCodeAt(g)&255;return m.buffer||m}else return f}const h=d(e);return t(h)?s(h):o(c(e))}}const pn=(i,e={})=>new a0({color:i,roughness:.87,...e}),Hi=new q(0,0,1);function Cu(i,e,t){const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d"),o=s.createImageData(128,128);let c=718;for(let h=0;h<o.data.length;h+=4){c=c*1664525+1013904223>>>0;const f=i+(c/4294967296-.5)*e;o.data.set([f,f,f,255],h)}s.putImageData(o,0,0);const d=new Pl(n);return d.colorSpace=en,d.wrapS=d.wrapT=ua,d.repeat.set(t,t),d}function qr(i,e="",t="#011f5b",n="#ffffff"){const s=document.createElement("canvas");s.width=1024,s.height=256;const o=s.getContext("2d");o.fillStyle=t,o.fillRect(0,0,s.width,s.height),o.textAlign="center",o.fillStyle=n,o.font="600 74px Arial",o.fillText(i,512,e?119:153),e&&(o.font="32px Arial",o.fillText(e,512,189));const c=new Pl(s);return c.colorSpace=en,c}class xM{constructor(e,t){this.sim=t,this.scene=new zg,this.scene.background=new ft("#dce4e8"),this.scene.fog=new Cl("#dce4e8",32,65),this.mode="chase",this.frames=0,this.renderer=new pM({canvas:e,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fu,this.renderer.toneMapping=gl,this.renderer.toneMappingExposure=1.25,this.renderer.outputColorSpace=en,this.camera=new wn(68,1,.025,100),this.camera.up.copy(Hi);const n=new m0("#f4f7ff","#7c8590",2.5);n.position.set(0,0,10),this.scene.add(n);const s=new v0("#fff4e1",2.8);s.position.set(-6,-10,16),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-17,right:17,top:13,bottom:-13,near:1,far:45}),s.shadow.normalBias=.025,this.scene.add(s),this.materials={navy:pn("#011f5b"),red:pn("#990000"),white:pn("#f5f6f5"),metal:pn("#707c86",{metalness:.5,roughness:.55}),black:pn("#20242a")},this.environment(),this.track(),this.vehicle(),this.snapCamera=!0,this.assetErrors=[],this.assetsReady=!1,this.assetPromise=this.loadAssets().then(()=>this.assetsReady=!0),this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0}box(e,t,n,s=this.scene){const o=new Bt(new Ki(...e),n);return o.position.set(...t),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}board(e,t,n,s,o=0){const c=new Bt(new ai(t,n),new Ei({map:e,side:Tn}));return c.position.set(...s),c.rotation.set(Math.PI/2,s[1]<0?Math.PI:0,o),this.scene.add(c),c}environment(){const e=new Bt(new ai(43,31),pn("#bbc0c1",{map:Cu(220,8,45)}));e.position.z=-.004,e.receiveShadow=!0,this.scene.add(e);const t=pn("#e7ebed"),n=pn("#7f8d9f");for(const s of[-11.8,11.8]){this.box([34,.18,5.2],[0,s,2.6],t),this.box([34,.2,.95],[0,s,.48],n);for(let o=-15;o<=15;o+=5)this.box([.2,.35,5.5],[o,s,2.75],pn("#bcc4c9")),this.box([3.9,.23,1.55],[o+2.4,s,3.5],new Ei({color:"#e8f5fc"}))}for(const s of[-17,17])this.box([.15,23.7,5.2],[s,0,2.6],t);for(let s=-15;s<=15;s+=5){this.box([.22,23.5,.28],[s,0,5.45],pn("#9aa8b4"));for(const o of[-7,0,7])this.box([3,.22,.025],[s+1.5,o,5.23],new Ei({color:"#fafaff"}))}for(let s=-15;s<16;s+=3){const o=new fl(new nn().setFromPoints([new q(s,-11.7,.001),new q(s,11.7,.001)]),new oa({color:"#acb4b7"}));this.scene.add(o)}this.board(qr("AI COACHING","ROBORACER PRACTICE"),7,1.75,[0,11.48,3.95]),this.board(qr("Penn Engineering"),5,1.25,[-8,-11.68,2.7]);for(const s of[-10,-6,-2,2,6,10]){this.box([2,.65,.06],[s,-9.9,.75],pn("#d9dede"));for(const c of[-.8,.8])this.box([.045,.48,.72],[s+c,-9.9,.36],this.materials.metal);const o=this.box([.34,.025,.24],[s,-9.95,.9],this.materials.black);o.rotation.x=-.2,this.box([.55,.4,.3],[s+.65,-9.8,.16],this.materials.navy)}for(const s of[-9,9])for(let o=-14;o<=14;o+=2)this.box([.035,.035,.65],[o,s,.33],this.materials.metal),o<14&&this.box([2,.035,.035],[o+1,s,.63],this.materials.metal);this.box([1.5,1,.16],[13.5,-8,.08],this.materials.navy),this.board(qr("ROBORACER","1/10 PLATFORM"),2,.5,[13.5,-8.7,.6])}track(){const e=[],t=[];for(let g=0;g<mn.length;g++){const _=$n(g),v=$n(g+1),E=(F,I)=>F.p.clone().addScaledVector(F.normal,I*yr/2),R=E(_,1),M=E(_,-1),S=E(v,1),D=E(v,-1);for(const[F,I,z]of[[R,0,g],[M,1,g],[S,0,g+1],[M,1,g],[D,1,g+1],[S,0,g+1]])e.push(F.x,F.y,.006),t.push(I,z/7)}const n=new nn;n.setAttribute("position",new sn(e,3)),n.setAttribute("uv",new sn(t,2)),n.computeVertexNormals();const s=new Bt(n,pn("#737982",{map:Cu(157,12,3),side:Tn}));s.receiveShadow=!0,this.scene.add(s);const o=["#eef0f0","#011f5b"],c=new Ki(1,1,1),d=new qt;for(let g=0;g<2;g++){const _=md.filter(E=>Math.floor(E.index/8)%2===g),v=new jg(c,pn(o[g]),_.length);v.castShadow=!0,v.receiveShadow=!0,_.forEach((E,R)=>{d.position.set(E.x,E.y,E.z),d.rotation.set(0,0,E.yaw),d.scale.set(E.halfLength*2,.16,.26),d.updateMatrix(),v.setMatrixAt(R,d.matrix)}),this.scene.add(v)}for(const g of[-1,1]){const _=mn.map((v,E)=>{const R=$n(E);return R.p.clone().addScaledVector(R.normal,g*(yr/2-.045)).setZ(.012)});_.push(_[0]),this.scene.add(new fl(new nn().setFromPoints(_),new oa({color:"#ffffff"})))}const h=$n(0);for(let g=0;g<2;g++)for(let _=0;_<12;_++){const v=h.p.clone().addScaledVector(h.normal,(_-5.5)*yr/12).addScaledVector(h.tangent,g*.08+.55),E=this.box([.08,yr/12,.003],[v.x,v.y,.012],(g+_)%2?this.materials.white:this.materials.black);E.rotation.z=h.yaw}const f=new qi;f.position.set(h.p.x+.6,h.p.y,0),f.rotation.z=h.yaw,this.scene.add(f);for(const g of[-1,1])this.box([.07,.07,1.3],[0,g*1.14,.65],this.materials.metal,f);this.box([.12,2.35,.22],[0,0,1.3],this.materials.navy,f);const m=new Bt(new ai(2.2,.21),new Ei({map:qr("AI COACHING"),side:Tn}));m.position.set(-.065,0,1.3),m.quaternion.setFromRotationMatrix(new Dt().makeBasis(new q(0,-1,0),Hi,new q(-1,0,0))),f.add(m),this.line=new Zg(new nn().setFromPoints(mn.map(g=>g.clone().setZ(.017))),new oa({color:"#d6b356"})),this.line.visible=!1,this.scene.add(this.line)}vehicle(){this.body=new qi,this.scene.add(this.body),this.box([.49,.21,.045],[0,0,0],this.materials.black,this.body),this.box([.39,.205,.044],[-.02,0,.043],this.materials.navy,this.body),this.box([.18,.19,.008],[-.055,0,.07],this.materials.red,this.body);for(const o of[-.076,.076])this.box([.34,.018,.012],[0,o,.07],this.materials.white,this.body);this.box([.13,.12,.032],[-.01,0,.094],this.materials.metal,this.body),this.box([.04,.13,.045],[.155,0,.09],this.materials.black,this.body);for(const o of[-.04,.04]){const c=new Bt(new Zr(.017,.017,.012,18),pn("#263f53",{metalness:.65,roughness:.2}));c.rotation.z=Math.PI/2,c.position.set(.181,o,.09),this.body.add(c)}for(const o of[-.265,.265])this.box([.03,.23,.035],[o,0,-.012],this.materials.black,this.body);const e=new Bt(new ai(.15,.038),new Ei({map:qr("xLab")}));e.position.set(-.14,0,.072),e.rotation.z=-Math.PI/2,this.body.add(e),this.wheels=[];for(const o of["fl","fr","rl","rr"]){const c=new qi,d=new Bt(new Zr(Ot.radius,Ot.radius,Ot.wheelWidth,24),this.materials.black);c.add(d);for(const f of[-1,1]){const m=new Bt(new Zr(.034,.034,.003,12),this.materials.metal);m.position.y=f*(Ot.wheelWidth/2+.002),c.add(m);for(let g=0;g<5;g++){const _=this.box([.045,.004,.005],[0,f*(Ot.wheelWidth/2+.004),0],this.materials.white,c);_.rotation.y=g*Math.PI/5}}const h=this.sim.model.body(`wheel_${o}`);this.wheels.push({group:c,id:h.id}),h.delete(),this.scene.add(c)}this.body.traverse(o=>o.castShadow=!1);for(const o of this.wheels)o.group.traverse(c=>c.castShadow=!1);const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),s=n.createRadialGradient(64,64,18,64,64,64);s.addColorStop(0,"#00000060"),s.addColorStop(1,"#00000000"),n.fillStyle=s,n.fillRect(0,0,128,128),this.contactShadow=new Bt(new ai(.78,.48),new Ei({map:new Pl(t),transparent:!0,depthWrite:!1})),this.scene.add(this.contactShadow)}async loadAssets(){const e="/car/";try{const t=await new vM().loadAsync(`${e}vehicle/roboracer_max.stl`);t.computeBoundingBox();const n=t.boundingBox.getCenter(new q);t.translate(-n.x,-n.y,-t.boundingBox.min.z);const s=new Bt(t,this.materials.metal);s.scale.setScalar(.5),s.position.set(13.5,-8,.17),s.castShadow=!0,this.scene.add(s),this.labMesh=s}catch(t){this.assetErrors.push(`Vehicle mesh: ${t.message}`)}for(const[t,n,s]of[["xlab",-8,4],["alliance",-2,4],["johns-hopkins",5,5],["jirl",12,3]])try{const o=await new p0().loadAsync(`${e}venue/brands/${t}.png`);o.colorSpace=en;const c=Math.min(1.5,s*o.image.height/o.image.width);this.box([s+.4,.08,c+.35],[n,11.65,1.7],this.materials.white),this.board(o,s,c,[n,11.598,1.7])}catch(o){this.assetErrors.push(`${t}: ${o.message}`)}}setMode(e){this.mode=e,this.snapCamera=!0}resize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}render(e=.016){const t=this.sim.position,n=this.sim.quaternion,s=new Zi(n[1],n[2],n[3],n[0]);this.body.position.set(...t),this.body.quaternion.copy(s);for(const{group:h,id:f}of this.wheels){h.position.fromArray(this.sim.data.xpos,f*3);const m=this.sim.data.xquat;h.quaternion.set(m[f*4+1],m[f*4+2],m[f*4+3],m[f*4])}const o=new q(...t),c=new q,d=new q;this.contactShadow.position.set(t[0],t[1],.018),this.contactShadow.rotation.z=this.sim.yaw,this.mode==="onboard"?(d.set(.192,0,.1).applyQuaternion(s).add(o),c.set(6,0,.14).applyQuaternion(s).add(o),this.camera.up.copy(Hi.clone().applyQuaternion(s)),this.body.visible=!1):this.mode==="circuit"?(d.set(-17,-20,21),c.set(0,0,0),this.camera.up.copy(Hi),this.body.visible=!0):(d.set(-1.65,0,.95).applyAxisAngle(Hi,this.sim.yaw).add(o),c.set(1.05,0,.16).applyAxisAngle(Hi,this.sim.yaw).add(o),this.camera.up.copy(Hi),this.body.visible=!0),this.camera.position.lerp(d,this.snapCamera||this.mode==="onboard"?1:1-Math.exp(-10*e)),this.camera.lookAt(c),this.snapCamera=!1,this.renderer.render(this.scene,this.camera),this.frames++}}function SM(i,e,t={steer:0,throttle:0,brake:0}){const n=(...h)=>h.some(f=>i.has(f));let s=0,o=0,c=0,d="none";if(e?.connected&&e.mapping==="standard"){const h=Number.isFinite(e.axes[0])?e.axes[0]:0;s=Math.abs(h)>.1?-(Math.abs(h)-.1)/.9*Math.sign(h):0,o=Ln(e.buttons[7]?.value||0,0,1),c=Ln(e.buttons[6]?.value||0,0,1),(s||o||c)&&(d="gamepad")}return n("KeyA","ArrowLeft","KeyD","ArrowRight")&&(s=Number(n("KeyA","ArrowLeft"))-Number(n("KeyD","ArrowRight")),d="keyboard"),n("KeyW","ArrowUp")&&(o=1,d="keyboard"),n("KeyS","ArrowDown")&&(c=1,o=0,d="keyboard"),t.steer&&(s=-t.steer,d="touch"),(t.throttle||t.brake)&&(o=t.throttle,c=t.brake,d="touch"),{steer:Ln(s),throttle:Ln(o,0,1),brake:Ln(c,0,1),source:d}}const _d={Gamepad2:N_,Pause:z_,Play:V_,RotateCcw:H_,SlidersHorizontal:G_,Download:U_,Maximize:O_,X:W_,MoveHorizontal:B_,ChevronsUp:I_,OctagonPause:k_},Ze=i=>document.querySelector(i),Qi=i=>Array.from(document.querySelectorAll(i));ml({icons:_d});let Jt,jt,Rr=!0,ca=0,ma=performance.now(),Ru,gd=!1;const ss=new Set,Ti={steer:0,throttle:0,brake:0};let Sr={steer:0,throttle:0,brake:0,source:"none"};const vd=Qi("dialog");function fi(i){Ze("#toast").textContent=i,Ze("#toast").classList.add("show"),clearTimeout(Ru),Ru=setTimeout(()=>Ze("#toast").classList.remove("show"),2400)}function er(){ss.clear(),Ti.steer=Ti.throttle=Ti.brake=0,Ze("#touch-steer").value=0}function Jn(i){Rr=i,ca=0,ma=performance.now(),Ze("#paused").hidden=!i,Ze("#pause").innerHTML=`<i data-lucide="${i?"play":"pause"}"></i>`,ml({icons:_d}),Ze("#pause").title=`${i?"Resume":"Pause"} (Space)`,Ze("#pause").setAttribute("aria-label",i?"Resume":"Pause")}function Fl(i){Jt&&(Jt.setMode(i),er(),Qi("[data-mode]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.mode===i))),Ze("#mode-label").textContent=i==="demo"?"Demo lap":"Manual driving",Jn(!1),fi(i==="demo"?"Demo lap - reference driver":"Manual driving"))}function Il(i){jt?.setMode(i),Qi("[data-view]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.view===i))),fi(`${i[0].toUpperCase()+i.slice(1)} view - C`)}function xd(i){gd=!Rr,Jn(!0),er(),i.showModal()}function Qr(i,e=gd){i.close(),er(),e&&Jn(!1)}Ze("#controls").onclick=()=>xd(Ze("#controls-dialog"));Ze("#settings").onclick=()=>xd(Ze("#settings-dialog"));for(const i of vd)i.querySelector("[data-close]").onclick=()=>Qr(i),i.addEventListener("cancel",e=>{e.preventDefault(),Qr(i)}),i.addEventListener("click",e=>{if(e.target===i){const t=i.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&Qr(i)}});Ze("#start").onclick=()=>{Qr(Ze("#controls-dialog"),!1),Fl("manual")};Ze("#pause").onclick=()=>{Jn(!Rr),fi(`${Rr?"Paused":"Resumed"} - Space`)};Ze("#recover").onclick=()=>{Jt?.recover(),er(),jt&&(jt.snapCamera=!0),fi("Returned to track - R")};Qi("[data-mode]").forEach(i=>i.onclick=()=>Fl(i.dataset.mode));Qi("[data-view]").forEach(i=>i.onclick=()=>Il(i.dataset.view));Ze("#speed-limit").oninput=i=>{const e=+i.target.value;Jt&&(Jt.speedLimit=e,Jt.events.push({type:"speed-limit",t:Jt.elapsed,value:e})),Ze("#limit-label").value=`${e.toFixed(1)} m/s`};Ze("#reference-line").onchange=i=>jt&&(jt.line.visible=i.target.checked);Ze("#reset-session").onclick=()=>{Jt?.reset(),jt&&(jt.snapCamera=!0),Qr(Ze("#settings-dialog"),!1),Jn(!0),fi("New session")};Ze("#export").onclick=()=>{if(!Jt)return;const i=new Blob([JSON.stringify({...Jt.export(),camera:jt.mode},null,2)],{type:"application/json"}),e=URL.createObjectURL(i),t=document.createElement("a");t.href=e,t.download=`driving-session-${new Date().toISOString().replaceAll(":","-")}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),fi("Session downloaded")};Ze("#fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{fi("Fullscreen is unavailable in this browser")}};window.addEventListener("keydown",i=>{if(!(i.target instanceof HTMLInputElement||!["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyR","KeyC","KeyH"].includes(i.code))&&(i.preventDefault(),ss.add(i.code),!i.repeat&&!vd.some(t=>t.open)&&(i.code==="Space"&&Ze("#pause").click(),i.code==="KeyR"&&Ze("#recover").click(),i.code==="KeyH"&&Ze("#controls").click(),i.code==="KeyC"))){const t=["chase","onboard","circuit"];Il(t[(t.indexOf(jt?.mode)+1)%3])}});window.addEventListener("keyup",i=>ss.delete(i.code));window.addEventListener("blur",()=>{er(),Jt&&Jn(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(er(),Jn(!0))});window.addEventListener("gamepaddisconnected",()=>{er(),Jn(!0),fi("Gamepad disconnected - paused")});Ze("#touch-steer").oninput=i=>Ti.steer=+i.target.value;for(const i of["pointerup","pointercancel","lostpointercapture"])Ze("#touch-steer").addEventListener(i,()=>{Ti.steer=0,Ze("#touch-steer").value=0});for(const i of Qi("[data-pedal]")){i.onpointerdown=e=>{i.setPointerCapture(e.pointerId),Ti[i.dataset.pedal]=1,e.preventDefault()};for(const e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,()=>Ti[i.dataset.pedal]=0)}function Pu(i){return i===null?"--":`${Math.floor(i/60)}:${(i%60).toFixed(1).padStart(4,"0")}`}function Sd(){jt?.resize(innerWidth,innerHeight)}window.addEventListener("resize",Sd);function yd(i){const e=Math.min((i-ma)/1e3,.1);ma=i;const t=Array.from(navigator.getGamepads?.()||[]).find(s=>s?.connected);if(Sr=SM(ss,t,Ti),!Rr)for(ca+=e;ca>=.02;)Jt.step(Sr),ca-=.02;jt.render(e);const n=Jt.snapshot();Ze("#speed").textContent=(Math.abs(n.speed)*3.6).toFixed(1),Ze("#laps").textContent=n.laps,Ze("#timer").textContent=Pu(n.elapsed-Jt.lapStart),Ze("#best").textContent=Pu(n.bestLap),Ze("#hits").textContent=n.hits,Ze("#controls-dialog").open&&(Ze("#device").textContent=t?t.mapping==="standard"?t.id:"Unmapped controller - use keyboard":"Keyboard",Ze("#steer-meter").value=Sr.steer,Ze("#throttle-meter").value=Sr.throttle,Ze("#brake-meter").value=Sr.brake,Qi("[data-key]").forEach(s=>s.classList.toggle("active",ss.has(s.dataset.key)))),requestAnimationFrame(yd)}try{const i=await T_({locateFile:e=>e.endsWith(".wasm")?A_:e});Jt=new gM(i),jt=new xM(Ze("#world"),Jt),Sd(),Jn(!0),await jt.assetPromise,Ze("#loading").hidden=!0,jt.assetErrors.length&&fi("Some venue artwork could not load"),window.car={sim:Jt,view:jt,setPaused:Jn,setMode:Fl,camera:Il,snapshot:()=>({...Jt.snapshot(),paused:Rr,view:jt.mode,ready:!0,frames:jt.frames,assetsReady:jt.assetsReady,assetErrors:jt.assetErrors,input:Sr})},ma=performance.now(),requestAnimationFrame(yd)}catch(i){Ze("#loading").textContent=`Could not start the driving simulator. ${i.message}`,console.error(i)}const yM=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
