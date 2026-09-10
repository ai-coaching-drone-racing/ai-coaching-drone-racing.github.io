(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Og="modulepreload",Bg=function(i){return"/demo/"+i},Tc={},kg=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let h=function(f){return Promise.all(f.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");s=h(t.map(f=>{if(f=Bg(f),f in Tc)return;Tc[f]=!0;const g=f.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${_}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":Og,g||(m.as="script"),m.crossOrigin="",m.href=f,u&&m.setAttribute("nonce",u),document.head.appendChild(m),g)return new Promise((x,E)=>{m.addEventListener("load",x),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return s.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};var zg=(async function(i={}){var e,t=i,n=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!n&&!o&&!s;if(o){const{createRequire:r}=await kg(async()=>{const{createRequire:a}=await Promise.resolve().then(()=>vE);return{createRequire:a}},void 0);var u=r(import.meta.url)}var h="./this.program",f=(r,a)=>{throw a},g=import.meta.url,_="";function m(r){return t.locateFile?t.locateFile(r,_):_+r}var x,E;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var R=process.versions.node,M=R.split(".").slice(0,3);if(M=M[0]*1e4+M[1]*100+M[2].split("-")[0]*1,M<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+R+")");var S=u("fs");g.startsWith("file:")&&(_=u("path").dirname(u("url").fileURLToPath(g))+"/"),E=a=>{a=G(a)?new URL(a):a;var c=S.readFileSync(a);return P(Buffer.isBuffer(c)),c},x=async(a,c=!0)=>{a=G(a)?new URL(a):a;var d=S.readFileSync(a,c?void 0:"utf8");return P(c?Buffer.isBuffer(d):typeof d=="string"),d},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(a,c)=>{throw process.exitCode=a,c}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||s){try{_=new URL(".",g).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");s&&(E=r=>{var a=new XMLHttpRequest;return a.open("GET",r,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),x=async r=>{if(G(r))return new Promise((c,d)=>{var p=new XMLHttpRequest;p.open("GET",r,!0),p.responseType="arraybuffer",p.onload=()=>{if(p.status==200||p.status==0&&p.response){c(p.response);return}d(p.status)},p.onerror=d,p.send(null)});var a=await fetch(r,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var L=console.log.bind(console),I=console.error.bind(console);P(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var D;typeof WebAssembly!="object"&&I("no native wasm support detected");var O=!1;function P(r,a){r||H("Assertion failed"+(a?": "+a:""))}var G=r=>r.startsWith("file://");function A(){var r=Oa();P((r&3)==0),r==0&&(r+=4),ye[r>>2]=34821223,ye[r+4>>2]=2310721022,ye[0]=1668509029}function F(){if(!O){var r=Oa();r==0&&(r+=4);var a=ye[r>>2],c=ye[r+4>>2];(a!=34821223||c!=2310721022)&&H(`Stack overflow! Stack cookie has been overwritten at ${De(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${De(c)} ${De(a)}`),ye[0]!=1668509029&&H("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class B extends Error{}class k extends B{}class q extends B{constructor(a){super(a),this.excPtr=a;const c=dc(a);this.name=c[0],this.message=c[1]}}(()=>{var r=new Int16Array(1),a=new Int8Array(r.buffer);if(r[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function J(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){H(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Y(r){return()=>P(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function ie(r){Object.getOwnPropertyDescriptor(t,r)&&H(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function Z(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function ne(r,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){a()}})}function Se(r,a){ne(r,()=>{Le(`\`${r}\` is not longer defined by emscripten. ${a}`)})}Se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Se("asm","Please use wasmExports instead");function pe(r){ne(r,()=>{var a=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=r;c.startsWith("_")||(c="$"+r),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,Z(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Le(a)}),Re(r)}function Re(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var a=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Z(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),H(a)}})}var Ue,Ae,Xe,Ze,Je,oe,ve,re,ye,$e,je,Mt,ot,ft=!1;function wt(){var r=Xe.buffer;Ze=new Int8Array(r),oe=new Int16Array(r),Je=new Uint8Array(r),ve=new Uint16Array(r),re=new Int32Array(r),ye=new Uint32Array(r),$e=new Float32Array(r),je=new Float64Array(r),Mt=new BigInt64Array(r),ot=new BigUint64Array(r)}P(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function nt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)we(t.preRun.shift());J("preRun"),ke(W)}function Nt(){P(!ft),ft=!0,F(),!t.noFSInit&&!y.initialized&&y.init(),zi.__wasm_call_ctors(),y.ignorePermissions=!1}function V(){if(F(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)it(t.postRun.shift());J("postRun"),ke(Fe)}var Pt=0,ut=null,_t={},Ne=null;function U(r){Pt++,t.monitorRunDependencies?.(Pt),r?(P(!_t[r]),_t[r]=1,Ne===null&&typeof setInterval<"u"&&(Ne=setInterval(()=>{if(O){clearInterval(Ne),Ne=null;return}var a=!1;for(var c in _t)a||(a=!0,I("still waiting on run dependencies:")),I(`dependency: ${c}`);a&&I("(end of list)")},1e4))):I("warning: run dependency added without ID")}function b(r){if(Pt--,t.monitorRunDependencies?.(Pt),r?(P(_t[r]),delete _t[r]):I("warning: run dependency removed without ID"),Pt==0&&(Ne!==null&&(clearInterval(Ne),Ne=null),ut)){var a=ut;ut=null,a()}}function H(r){t.onAbort?.(r),r="Aborted("+r+")",I(r),O=!0;var a=new WebAssembly.RuntimeError(r);throw Ae?.(a),a}function ae(r,a){return(...c)=>{P(ft,`native function \`${r}\` called before runtime initialization`);var d=zi[r];return P(d,`exported native function \`${r}\` not found`),P(c.length<=a,`native function \`${r}\` called with ${c.length} args but expects ${a}`),d(...c)}}var he;function le(){return t.locateFile?m("mujoco.wasm"):new URL("/demo/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Oe(r){if(r==he&&D)return new Uint8Array(D);if(E)return E(r);throw"both async and sync fetching of the wasm failed"}async function be(r){if(!D)try{var a=await x(r);return new Uint8Array(a)}catch{}return Oe(r)}async function We(r,a){try{var c=await be(r),d=await WebAssembly.instantiate(c,a);return d}catch(p){I(`failed to asynchronously prepare wasm: ${p}`),G(he)&&I(`warning: Loading from a file URI (${he}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),H(p)}}async function Ye(r,a,c){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!G(a)&&!o)try{var d=fetch(a,{credentials:"same-origin"}),p=await WebAssembly.instantiateStreaming(d,c);return p}catch(v){I(`wasm streaming compile failed: ${v}`),I("falling back to ArrayBuffer instantiation")}return We(a,c)}function xe(){return{env:Ec,wasi_snapshot_preview1:Ec}}async function Ee(){function r(w,T){return zi=w.exports,Xe=zi.memory,P(Xe,"memory not found in wasm exports"),wt(),Ps=zi.__indirect_function_table,P(Ps,"table not found in wasm exports"),kh(zi),b("wasm-instantiate"),zi}U("wasm-instantiate");var a=t;function c(w){return P(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,r(w.instance)}var d=xe();if(t.instantiateWasm)return new Promise((w,T)=>{try{t.instantiateWasm(d,(N,j)=>{w(r(N,j))})}catch(N){I(`Module.instantiateWasm callback failed with error: ${N}`),T(N)}});he??=le();var p=await Ye(D,he,d),v=c(p);return v}class Be{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`,this.status=a}}var ke=r=>{for(;r.length>0;)r.shift()(t)},Fe=[],it=r=>Fe.push(r),W=[],we=r=>W.push(r),Me=!0,De=r=>(P(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),$=r=>_c(r),z=()=>xc(),Le=r=>{Le.shown||={},Le.shown[r]||(Le.shown[r]=1,o&&(r="warning: "+r),I(r))},Ke=typeof TextDecoder<"u"?new TextDecoder:void 0,vt=(r,a=0,c=NaN)=>{for(var d=a+c,p=a;r[p]&&!(p>=d);)++p;if(p-a>16&&r.buffer&&Ke)return Ke.decode(r.subarray(a,p));for(var v="";a<p;){var w=r[a++];if(!(w&128)){v+=String.fromCharCode(w);continue}var T=r[a++]&63;if((w&224)==192){v+=String.fromCharCode((w&31)<<6|T);continue}var N=r[a++]&63;if((w&240)==224?w=(w&15)<<12|T<<6|N:((w&248)!=240&&Le("Invalid UTF-8 leading byte "+De(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|T<<12|N<<6|r[a++]&63),w<65536)v+=String.fromCharCode(w);else{var j=w-65536;v+=String.fromCharCode(55296|j>>10,56320|j&1023)}}return v},lt=(r,a)=>(P(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?vt(Je,r,a):""),Pn=(r,a,c,d)=>H(`Assertion failed: ${lt(r)}, at: `+[a?lt(a):"unknown filename",c,d?lt(d):"unknown function"]),Wt=[],Ii=0,Nr=r=>{var a=new wn(r);return a.get_caught()||(a.set_caught(!0),Ii--),a.set_rethrown(!1),Wt.push(a),Os(r),Mc(r)},Ma=()=>{if(!Wt.length)return 0;var r=Wt[Wt.length-1];return Os(r.excPtr),r.excPtr},bn=0,gs=()=>{ge(0,0),P(Wt.length>0);var r=Wt.pop();Ba(r.excPtr),bn=0};class wn{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){ye[this.ptr+4>>2]=a}get_type(){return ye[this.ptr+4>>2]}set_destructor(a){ye[this.ptr+8>>2]=a}get_destructor(){return ye[this.ptr+8>>2]}set_caught(a){a=a?1:0,Ze[this.ptr+12]=a}get_caught(){return Ze[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,Ze[this.ptr+13]=a}get_rethrown(){return Ze[this.ptr+13]!=0}init(a,c){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(c)}set_adjusted_ptr(a){ye[this.ptr+16>>2]=a}get_adjusted_ptr(){return ye[this.ptr+16>>2]}}var xi=r=>mc(r),ir=r=>{var a=bn?.excPtr;if(!a)return xi(0),0;var c=new wn(a);c.set_adjusted_ptr(a);var d=c.get_type();if(!d)return xi(0),a;for(var p of r){if(p===0||p===d)break;var v=c.ptr+16;if(yc(p,d,v))return xi(p),a}return xi(d),a},_s=()=>ir([]),rr=r=>ir([r]),vs=(r,a)=>ir([r,a]),Ui=()=>{var r=Wt.pop();r||H("no exception to throw");var a=r.excPtr;throw r.get_rethrown()||(Wt.push(r),r.set_rethrown(!0),r.set_caught(!1),Ii++),bn=new q(a),bn},xs=r=>{if(r){var a=new wn(r);Wt.push(a),a.set_rethrown(!0),Ui()}},Ss=(r,a,c)=>{var d=new wn(r);throw d.init(a,c),bn=new q(r),Ii++,bn},Ea=()=>Ii,ba=r=>{throw bn||(bn=new q(r)),bn},Tt={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(r).slice(1)},normalizeArray:(r,a)=>{for(var c=0,d=r.length-1;d>=0;d--){var p=r[d];p==="."?r.splice(d,1):p===".."?(r.splice(d,1),c++):c&&(r.splice(d,1),c--)}if(a)for(;c;c--)r.unshift("..");return r},normalize:r=>{var a=Tt.isAbs(r),c=r.slice(-1)==="/";return r=Tt.normalizeArray(r.split("/").filter(d=>!!d),!a).join("/"),!r&&!a&&(r="."),r&&c&&(r+="/"),(a?"/":"")+r},dirname:r=>{var a=Tt.splitPath(r),c=a[0],d=a[1];return!c&&!d?".":(d&&(d=d.slice(0,-1)),c+d)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>Tt.normalize(r.join("/")),join2:(r,a)=>Tt.normalize(r+"/"+a)},wa=()=>{if(o){var r=u("crypto");return a=>r.randomFillSync(a)}return a=>crypto.getRandomValues(a)},ys=r=>{(ys=wa())(r)},Si={resolve:(...r)=>{for(var a="",c=!1,d=r.length-1;d>=-1&&!c;d--){var p=d>=0?r[d]:y.cwd();if(typeof p!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!p)return"";a=p+"/"+a,c=Tt.isAbs(p)}return a=Tt.normalizeArray(a.split("/").filter(v=>!!v),!c).join("/"),(c?"/":"")+a||"."},relative:(r,a)=>{r=Si.resolve(r).slice(1),a=Si.resolve(a).slice(1);function c(j){for(var ee=0;ee<j.length&&j[ee]==="";ee++);for(var ce=j.length-1;ce>=0&&j[ce]==="";ce--);return ee>ce?[]:j.slice(ee,ce-ee+1)}for(var d=c(r.split("/")),p=c(a.split("/")),v=Math.min(d.length,p.length),w=v,T=0;T<v;T++)if(d[T]!==p[T]){w=T;break}for(var N=[],T=w;T<d.length;T++)N.push("..");return N=N.concat(p.slice(w)),N.join("/")}},C=[],X=r=>{for(var a=0,c=0;c<r.length;++c){var d=r.charCodeAt(c);d<=127?a++:d<=2047?a+=2:d>=55296&&d<=57343?(a+=4,++c):a+=3}return a},se=(r,a,c,d)=>{if(P(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(d>0))return 0;for(var p=c,v=c+d-1,w=0;w<r.length;++w){var T=r.codePointAt(w);if(T<=127){if(c>=v)break;a[c++]=T}else if(T<=2047){if(c+1>=v)break;a[c++]=192|T>>6,a[c++]=128|T&63}else if(T<=65535){if(c+2>=v)break;a[c++]=224|T>>12,a[c++]=128|T>>6&63,a[c++]=128|T&63}else{if(c+3>=v)break;T>1114111&&Le("Invalid Unicode code point "+De(T)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[c++]=240|T>>18,a[c++]=128|T>>12&63,a[c++]=128|T>>6&63,a[c++]=128|T&63,w++}}return a[c]=0,c-p},te=(r,a,c)=>{var d=X(r)+1,p=new Array(d),v=se(r,p,0,p.length);return p.length=v,p},Q=()=>{if(!C.length){var r=null;if(o){var a=256,c=Buffer.alloc(a),d=0,p=process.stdin.fd;try{d=S.readSync(p,c,0,a)}catch(v){if(v.toString().includes("EOF"))d=0;else throw v}d>0&&(r=c.slice(0,d).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;C=te(r)}return C.shift()},Te={ttys:[],init(){},shutdown(){},register(r,a){Te.ttys[r]={input:[],output:[],ops:a},y.registerDevice(r,Te.stream_ops)},stream_ops:{open(r){var a=Te.ttys[r.node.rdev];if(!a)throw new y.ErrnoError(43);r.tty=a,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,a,c,d,p){if(!r.tty||!r.tty.ops.get_char)throw new y.ErrnoError(60);for(var v=0,w=0;w<d;w++){var T;try{T=r.tty.ops.get_char(r.tty)}catch{throw new y.ErrnoError(29)}if(T===void 0&&v===0)throw new y.ErrnoError(6);if(T==null)break;v++,a[c+w]=T}return v&&(r.node.atime=Date.now()),v},write(r,a,c,d,p){if(!r.tty||!r.tty.ops.put_char)throw new y.ErrnoError(60);try{for(var v=0;v<d;v++)r.tty.ops.put_char(r.tty,a[c+v])}catch{throw new y.ErrnoError(29)}return d&&(r.node.mtime=r.node.ctime=Date.now()),v}},default_tty_ops:{get_char(r){return Q()},put_char(r,a){a===null||a===10?(L(vt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(L(vt(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,a,c){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,a){a===null||a===10?(I(vt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(I(vt(r.output)),r.output=[])}}},Ie=r=>{H("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},fe={ops_table:null,mount(r){return fe.createNode(null,"/",16895,0)},createNode(r,a,c,d){if(y.isBlkdev(c)||y.isFIFO(c))throw new y.ErrnoError(63);fe.ops_table||={dir:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr,lookup:fe.node_ops.lookup,mknod:fe.node_ops.mknod,rename:fe.node_ops.rename,unlink:fe.node_ops.unlink,rmdir:fe.node_ops.rmdir,readdir:fe.node_ops.readdir,symlink:fe.node_ops.symlink},stream:{llseek:fe.stream_ops.llseek}},file:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr},stream:{llseek:fe.stream_ops.llseek,read:fe.stream_ops.read,write:fe.stream_ops.write,mmap:fe.stream_ops.mmap,msync:fe.stream_ops.msync}},link:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr,readlink:fe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:fe.node_ops.getattr,setattr:fe.node_ops.setattr},stream:y.chrdev_stream_ops}};var p=y.createNode(r,a,c,d);return y.isDir(p.mode)?(p.node_ops=fe.ops_table.dir.node,p.stream_ops=fe.ops_table.dir.stream,p.contents={}):y.isFile(p.mode)?(p.node_ops=fe.ops_table.file.node,p.stream_ops=fe.ops_table.file.stream,p.usedBytes=0,p.contents=null):y.isLink(p.mode)?(p.node_ops=fe.ops_table.link.node,p.stream_ops=fe.ops_table.link.stream):y.isChrdev(p.mode)&&(p.node_ops=fe.ops_table.chrdev.node,p.stream_ops=fe.ops_table.chrdev.stream),p.atime=p.mtime=p.ctime=Date.now(),r&&(r.contents[a]=p,r.atime=r.mtime=r.ctime=p.atime),p},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,a){var c=r.contents?r.contents.length:0;if(!(c>=a)){var d=1024*1024;a=Math.max(a,c*(c<d?2:1.125)>>>0),c!=0&&(a=Math.max(a,256));var p=r.contents;r.contents=new Uint8Array(a),r.usedBytes>0&&r.contents.set(p.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,a){if(r.usedBytes!=a)if(a==0)r.contents=null,r.usedBytes=0;else{var c=r.contents;r.contents=new Uint8Array(a),c&&r.contents.set(c.subarray(0,Math.min(a,r.usedBytes))),r.usedBytes=a}},node_ops:{getattr(r){var a={};return a.dev=y.isChrdev(r.mode)?r.id:1,a.ino=r.id,a.mode=r.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=r.rdev,y.isDir(r.mode)?a.size=4096:y.isFile(r.mode)?a.size=r.usedBytes:y.isLink(r.mode)?a.size=r.link.length:a.size=0,a.atime=new Date(r.atime),a.mtime=new Date(r.mtime),a.ctime=new Date(r.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(r,a){for(const c of["mode","atime","mtime","ctime"])a[c]!=null&&(r[c]=a[c]);a.size!==void 0&&fe.resizeFileStorage(r,a.size)},lookup(r,a){throw new y.ErrnoError(44)},mknod(r,a,c,d){return fe.createNode(r,a,c,d)},rename(r,a,c){var d;try{d=y.lookupNode(a,c)}catch{}if(d){if(y.isDir(r.mode))for(var p in d.contents)throw new y.ErrnoError(55);y.hashRemoveNode(d)}delete r.parent.contents[r.name],a.contents[c]=r,r.name=c,a.ctime=a.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,a){delete r.contents[a],r.ctime=r.mtime=Date.now()},rmdir(r,a){var c=y.lookupNode(r,a);for(var d in c.contents)throw new y.ErrnoError(55);delete r.contents[a],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,a,c){var d=fe.createNode(r,a,41471,0);return d.link=c,d},readlink(r){if(!y.isLink(r.mode))throw new y.ErrnoError(28);return r.link}},stream_ops:{read(r,a,c,d,p){var v=r.node.contents;if(p>=r.node.usedBytes)return 0;var w=Math.min(r.node.usedBytes-p,d);if(P(w>=0),w>8&&v.subarray)a.set(v.subarray(p,p+w),c);else for(var T=0;T<w;T++)a[c+T]=v[p+T];return w},write(r,a,c,d,p,v){if(P(!(a instanceof ArrayBuffer)),a.buffer===Ze.buffer&&(v=!1),!d)return 0;var w=r.node;if(w.mtime=w.ctime=Date.now(),a.subarray&&(!w.contents||w.contents.subarray)){if(v)return P(p===0,"canOwn must imply no weird position inside the file"),w.contents=a.subarray(c,c+d),w.usedBytes=d,d;if(w.usedBytes===0&&p===0)return w.contents=a.slice(c,c+d),w.usedBytes=d,d;if(p+d<=w.usedBytes)return w.contents.set(a.subarray(c,c+d),p),d}if(fe.expandFileStorage(w,p+d),w.contents.subarray&&a.subarray)w.contents.set(a.subarray(c,c+d),p);else for(var T=0;T<d;T++)w.contents[p+T]=a[c+T];return w.usedBytes=Math.max(w.usedBytes,p+d),d},llseek(r,a,c){var d=a;if(c===1?d+=r.position:c===2&&y.isFile(r.node.mode)&&(d+=r.node.usedBytes),d<0)throw new y.ErrnoError(28);return d},mmap(r,a,c,d,p){if(!y.isFile(r.node.mode))throw new y.ErrnoError(43);var v,w,T=r.node.contents;if(!(p&2)&&T&&T.buffer===Ze.buffer)w=!1,v=T.byteOffset;else{if(w=!0,v=Ie(),!v)throw new y.ErrnoError(48);T&&((c>0||c+a<T.length)&&(T.subarray?T=T.subarray(c,c+a):T=Array.prototype.slice.call(T,c,c+a)),Ze.set(T,v))}return{ptr:v,allocated:w}},msync(r,a,c,d,p){return fe.stream_ops.write(r,a,0,d,c,!1),0}}},ze=async r=>{var a=await x(r);return P(a,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(a)},Ve=(...r)=>y.createDataFile(...r),Qe=r=>{for(var a=r;;){if(!_t[r])return r;r=a+Math.random()}},tt=[],He=(r,a,c,d)=>{typeof Browser<"u"&&Browser.init();var p=!1;return tt.forEach(v=>{p||v.canHandle(a)&&(v.handle(r,a,c,d),p=!0)}),p},bt=(r,a,c,d,p,v,w,T,N,j)=>{var ee=a?Si.resolve(Tt.join2(r,a)):r,ce=Qe(`cp ${ee}`);function de(ue){function me(qe){j?.(),T||Ve(r,a,qe,d,p,N),v?.(),b(ce)}He(ue,ee,me,()=>{w?.(),b(ce)})||me(ue)}U(ce),typeof c=="string"?ze(c).then(de,w):de(c)},Ot=r=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=a[r];if(typeof c>"u")throw new Error(`Unknown file open mode: ${r}`);return c},Ft=(r,a)=>{var c=0;return r&&(c|=365),a&&(c|=146),c},At=r=>lt(pc(r)),$t={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},y={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(r){super(ft?At(r):""),this.errno=r;for(var a in $t)if($t[a]===r){this.code=a;break}}},FSStream:class{shared={};get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(r,a,c,d){r||(r=this),this.parent=r,this.mount=r.mount,this.id=y.nextInode++,this.name=a,this.mode=c,this.rdev=d,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return y.isDir(this.mode)}get isDevice(){return y.isChrdev(this.mode)}},lookupPath(r,a={}){if(!r)throw new y.ErrnoError(44);a.follow_mount??=!0,Tt.isAbs(r)||(r=y.cwd()+"/"+r);e:for(var c=0;c<40;c++){for(var d=r.split("/").filter(j=>!!j),p=y.root,v="/",w=0;w<d.length;w++){var T=w===d.length-1;if(T&&a.parent)break;if(d[w]!=="."){if(d[w]===".."){if(v=Tt.dirname(v),y.isRoot(p)){r=v+"/"+d.slice(w+1).join("/");continue e}else p=p.parent;continue}v=Tt.join2(v,d[w]);try{p=y.lookupNode(p,d[w])}catch(j){if(j?.errno===44&&T&&a.noent_okay)return{path:v};throw j}if(y.isMountpoint(p)&&(!T||a.follow_mount)&&(p=p.mounted.root),y.isLink(p.mode)&&(!T||a.follow)){if(!p.node_ops.readlink)throw new y.ErrnoError(52);var N=p.node_ops.readlink(p);Tt.isAbs(N)||(N=Tt.dirname(v)+"/"+N),r=N+"/"+d.slice(w+1).join("/");continue e}}}return{path:v,node:p}}throw new y.ErrnoError(32)},getPath(r){for(var a;;){if(y.isRoot(r)){var c=r.mount.mountpoint;return a?c[c.length-1]!=="/"?`${c}/${a}`:c+a:c}a=a?`${r.name}/${a}`:r.name,r=r.parent}},hashName(r,a){for(var c=0,d=0;d<a.length;d++)c=(c<<5)-c+a.charCodeAt(d)|0;return(r+c>>>0)%y.nameTable.length},hashAddNode(r){var a=y.hashName(r.parent.id,r.name);r.name_next=y.nameTable[a],y.nameTable[a]=r},hashRemoveNode(r){var a=y.hashName(r.parent.id,r.name);if(y.nameTable[a]===r)y.nameTable[a]=r.name_next;else for(var c=y.nameTable[a];c;){if(c.name_next===r){c.name_next=r.name_next;break}c=c.name_next}},lookupNode(r,a){var c=y.mayLookup(r);if(c)throw new y.ErrnoError(c);for(var d=y.hashName(r.id,a),p=y.nameTable[d];p;p=p.name_next){var v=p.name;if(p.parent.id===r.id&&v===a)return p}return y.lookup(r,a)},createNode(r,a,c,d){P(typeof r=="object");var p=new y.FSNode(r,a,c,d);return y.hashAddNode(p),p},destroyNode(r){y.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var a=["r","w","rw"][r&3];return r&512&&(a+="w"),a},nodePermissions(r,a){return y.ignorePermissions?0:a.includes("r")&&!(r.mode&292)||a.includes("w")&&!(r.mode&146)||a.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!y.isDir(r.mode))return 54;var a=y.nodePermissions(r,"x");return a||(r.node_ops.lookup?0:2)},mayCreate(r,a){if(!y.isDir(r.mode))return 54;try{var c=y.lookupNode(r,a);return 20}catch{}return y.nodePermissions(r,"wx")},mayDelete(r,a,c){var d;try{d=y.lookupNode(r,a)}catch(v){return v.errno}var p=y.nodePermissions(r,"wx");if(p)return p;if(c){if(!y.isDir(d.mode))return 54;if(y.isRoot(d)||y.getPath(d)===y.cwd())return 10}else if(y.isDir(d.mode))return 31;return 0},mayOpen(r,a){return r?y.isLink(r.mode)?32:y.isDir(r.mode)&&(y.flagsToPermissionString(a)!=="r"||a&576)?31:y.nodePermissions(r,y.flagsToPermissionString(a)):44},checkOpExists(r,a){if(!r)throw new y.ErrnoError(a);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=y.MAX_OPEN_FDS;r++)if(!y.streams[r])return r;throw new y.ErrnoError(33)},getStreamChecked(r){var a=y.getStream(r);if(!a)throw new y.ErrnoError(8);return a},getStream:r=>y.streams[r],createStream(r,a=-1){return P(a>=-1),r=Object.assign(new y.FSStream,r),a==-1&&(a=y.nextfd()),r.fd=a,y.streams[a]=r,r},closeStream(r){y.streams[r]=null},dupStream(r,a=-1){var c=y.createStream(r,a);return c.stream_ops?.dup?.(c),c},doSetAttr(r,a,c){var d=r?.stream_ops.setattr,p=d?r:a;d??=a.node_ops.setattr,y.checkOpExists(d,63),d(p,c)},chrdev_stream_ops:{open(r){var a=y.getDevice(r.node.rdev);r.stream_ops=a.stream_ops,r.stream_ops.open?.(r)},llseek(){throw new y.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,a)=>r<<8|a,registerDevice(r,a){y.devices[r]={stream_ops:a}},getDevice:r=>y.devices[r],getMounts(r){for(var a=[],c=[r];c.length;){var d=c.pop();a.push(d),c.push(...d.mounts)}return a},syncfs(r,a){typeof r=="function"&&(a=r,r=!1),y.syncFSRequests++,y.syncFSRequests>1&&I(`warning: ${y.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=y.getMounts(y.root.mount),d=0;function p(w){return P(y.syncFSRequests>0),y.syncFSRequests--,a(w)}function v(w){if(w)return v.errored?void 0:(v.errored=!0,p(w));++d>=c.length&&p(null)}c.forEach(w=>{if(!w.type.syncfs)return v(null);w.type.syncfs(w,r,v)})},mount(r,a,c){if(typeof r=="string")throw r;var d=c==="/",p=!c,v;if(d&&y.root)throw new y.ErrnoError(10);if(!d&&!p){var w=y.lookupPath(c,{follow_mount:!1});if(c=w.path,v=w.node,y.isMountpoint(v))throw new y.ErrnoError(10);if(!y.isDir(v.mode))throw new y.ErrnoError(54)}var T={type:r,opts:a,mountpoint:c,mounts:[]},N=r.mount(T);return N.mount=T,T.root=N,d?y.root=N:v&&(v.mounted=T,v.mount&&v.mount.mounts.push(T)),N},unmount(r){var a=y.lookupPath(r,{follow_mount:!1});if(!y.isMountpoint(a.node))throw new y.ErrnoError(28);var c=a.node,d=c.mounted,p=y.getMounts(d);Object.keys(y.nameTable).forEach(w=>{for(var T=y.nameTable[w];T;){var N=T.name_next;p.includes(T.mount)&&y.destroyNode(T),T=N}}),c.mounted=null;var v=c.mount.mounts.indexOf(d);P(v!==-1),c.mount.mounts.splice(v,1)},lookup(r,a){return r.node_ops.lookup(r,a)},mknod(r,a,c){var d=y.lookupPath(r,{parent:!0}),p=d.node,v=Tt.basename(r);if(!v)throw new y.ErrnoError(28);if(v==="."||v==="..")throw new y.ErrnoError(20);var w=y.mayCreate(p,v);if(w)throw new y.ErrnoError(w);if(!p.node_ops.mknod)throw new y.ErrnoError(63);return p.node_ops.mknod(p,v,a,c)},statfs(r){return y.statfsNode(y.lookupPath(r,{follow:!0}).node)},statfsStream(r){return y.statfsNode(r.node)},statfsNode(r){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:y.nextInode,ffree:y.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(a,r.node_ops.statfs(r.mount.opts.root)),a},create(r,a=438){return a&=4095,a|=32768,y.mknod(r,a,0)},mkdir(r,a=511){return a&=1023,a|=16384,y.mknod(r,a,0)},mkdirTree(r,a){var c=r.split("/"),d="";for(var p of c)if(p){(d||Tt.isAbs(r))&&(d+="/"),d+=p;try{y.mkdir(d,a)}catch(v){if(v.errno!=20)throw v}}},mkdev(r,a,c){return typeof c>"u"&&(c=a,a=438),a|=8192,y.mknod(r,a,c)},symlink(r,a){if(!Si.resolve(r))throw new y.ErrnoError(44);var c=y.lookupPath(a,{parent:!0}),d=c.node;if(!d)throw new y.ErrnoError(44);var p=Tt.basename(a),v=y.mayCreate(d,p);if(v)throw new y.ErrnoError(v);if(!d.node_ops.symlink)throw new y.ErrnoError(63);return d.node_ops.symlink(d,p,r)},rename(r,a){var c=Tt.dirname(r),d=Tt.dirname(a),p=Tt.basename(r),v=Tt.basename(a),w,T,N;if(w=y.lookupPath(r,{parent:!0}),T=w.node,w=y.lookupPath(a,{parent:!0}),N=w.node,!T||!N)throw new y.ErrnoError(44);if(T.mount!==N.mount)throw new y.ErrnoError(75);var j=y.lookupNode(T,p),ee=Si.relative(r,d);if(ee.charAt(0)!==".")throw new y.ErrnoError(28);if(ee=Si.relative(a,c),ee.charAt(0)!==".")throw new y.ErrnoError(55);var ce;try{ce=y.lookupNode(N,v)}catch{}if(j!==ce){var de=y.isDir(j.mode),ue=y.mayDelete(T,p,de);if(ue)throw new y.ErrnoError(ue);if(ue=ce?y.mayDelete(N,v,de):y.mayCreate(N,v),ue)throw new y.ErrnoError(ue);if(!T.node_ops.rename)throw new y.ErrnoError(63);if(y.isMountpoint(j)||ce&&y.isMountpoint(ce))throw new y.ErrnoError(10);if(N!==T&&(ue=y.nodePermissions(T,"w"),ue))throw new y.ErrnoError(ue);y.hashRemoveNode(j);try{T.node_ops.rename(j,N,v),j.parent=N}catch(me){throw me}finally{y.hashAddNode(j)}}},rmdir(r){var a=y.lookupPath(r,{parent:!0}),c=a.node,d=Tt.basename(r),p=y.lookupNode(c,d),v=y.mayDelete(c,d,!0);if(v)throw new y.ErrnoError(v);if(!c.node_ops.rmdir)throw new y.ErrnoError(63);if(y.isMountpoint(p))throw new y.ErrnoError(10);c.node_ops.rmdir(c,d),y.destroyNode(p)},readdir(r){var a=y.lookupPath(r,{follow:!0}),c=a.node,d=y.checkOpExists(c.node_ops.readdir,54);return d(c)},unlink(r){var a=y.lookupPath(r,{parent:!0}),c=a.node;if(!c)throw new y.ErrnoError(44);var d=Tt.basename(r),p=y.lookupNode(c,d),v=y.mayDelete(c,d,!1);if(v)throw new y.ErrnoError(v);if(!c.node_ops.unlink)throw new y.ErrnoError(63);if(y.isMountpoint(p))throw new y.ErrnoError(10);c.node_ops.unlink(c,d),y.destroyNode(p)},readlink(r){var a=y.lookupPath(r),c=a.node;if(!c)throw new y.ErrnoError(44);if(!c.node_ops.readlink)throw new y.ErrnoError(28);return c.node_ops.readlink(c)},stat(r,a){var c=y.lookupPath(r,{follow:!a}),d=c.node,p=y.checkOpExists(d.node_ops.getattr,63);return p(d)},fstat(r){var a=y.getStreamChecked(r),c=a.node,d=a.stream_ops.getattr,p=d?a:c;return d??=c.node_ops.getattr,y.checkOpExists(d,63),d(p)},lstat(r){return y.stat(r,!0)},doChmod(r,a,c,d){y.doSetAttr(r,a,{mode:c&4095|a.mode&-4096,ctime:Date.now(),dontFollow:d})},chmod(r,a,c){var d;if(typeof r=="string"){var p=y.lookupPath(r,{follow:!c});d=p.node}else d=r;y.doChmod(null,d,a,c)},lchmod(r,a){y.chmod(r,a,!0)},fchmod(r,a){var c=y.getStreamChecked(r);y.doChmod(c,c.node,a,!1)},doChown(r,a,c){y.doSetAttr(r,a,{timestamp:Date.now(),dontFollow:c})},chown(r,a,c,d){var p;if(typeof r=="string"){var v=y.lookupPath(r,{follow:!d});p=v.node}else p=r;y.doChown(null,p,d)},lchown(r,a,c){y.chown(r,a,c,!0)},fchown(r,a,c){var d=y.getStreamChecked(r);y.doChown(d,d.node,!1)},doTruncate(r,a,c){if(y.isDir(a.mode))throw new y.ErrnoError(31);if(!y.isFile(a.mode))throw new y.ErrnoError(28);var d=y.nodePermissions(a,"w");if(d)throw new y.ErrnoError(d);y.doSetAttr(r,a,{size:c,timestamp:Date.now()})},truncate(r,a){if(a<0)throw new y.ErrnoError(28);var c;if(typeof r=="string"){var d=y.lookupPath(r,{follow:!0});c=d.node}else c=r;y.doTruncate(null,c,a)},ftruncate(r,a){var c=y.getStreamChecked(r);if(a<0||(c.flags&2097155)===0)throw new y.ErrnoError(28);y.doTruncate(c,c.node,a)},utime(r,a,c){var d=y.lookupPath(r,{follow:!0}),p=d.node,v=y.checkOpExists(p.node_ops.setattr,63);v(p,{atime:a,mtime:c})},open(r,a,c=438){if(r==="")throw new y.ErrnoError(44);a=typeof a=="string"?Ot(a):a,a&64?c=c&4095|32768:c=0;var d,p;if(typeof r=="object")d=r;else{p=r.endsWith("/");var v=y.lookupPath(r,{follow:!(a&131072),noent_okay:!0});d=v.node,r=v.path}var w=!1;if(a&64)if(d){if(a&128)throw new y.ErrnoError(20)}else{if(p)throw new y.ErrnoError(31);d=y.mknod(r,c|511,0),w=!0}if(!d)throw new y.ErrnoError(44);if(y.isChrdev(d.mode)&&(a&=-513),a&65536&&!y.isDir(d.mode))throw new y.ErrnoError(54);if(!w){var T=y.mayOpen(d,a);if(T)throw new y.ErrnoError(T)}a&512&&!w&&y.truncate(d,0),a&=-131713;var N=y.createStream({node:d,path:y.getPath(d),flags:a,seekable:!0,position:0,stream_ops:d.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),w&&y.chmod(d,c&511),t.logReadFiles&&!(a&1)&&(r in y.readFiles||(y.readFiles[r]=1)),N},close(r){if(y.isClosed(r))throw new y.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(a){throw a}finally{y.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,a,c){if(y.isClosed(r))throw new y.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new y.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new y.ErrnoError(28);return r.position=r.stream_ops.llseek(r,a,c),r.ungotten=[],r.position},read(r,a,c,d,p){if(P(c>=0),d<0||p<0)throw new y.ErrnoError(28);if(y.isClosed(r))throw new y.ErrnoError(8);if((r.flags&2097155)===1)throw new y.ErrnoError(8);if(y.isDir(r.node.mode))throw new y.ErrnoError(31);if(!r.stream_ops.read)throw new y.ErrnoError(28);var v=typeof p<"u";if(!v)p=r.position;else if(!r.seekable)throw new y.ErrnoError(70);var w=r.stream_ops.read(r,a,c,d,p);return v||(r.position+=w),w},write(r,a,c,d,p,v){if(P(c>=0),d<0||p<0)throw new y.ErrnoError(28);if(y.isClosed(r))throw new y.ErrnoError(8);if((r.flags&2097155)===0)throw new y.ErrnoError(8);if(y.isDir(r.node.mode))throw new y.ErrnoError(31);if(!r.stream_ops.write)throw new y.ErrnoError(28);r.seekable&&r.flags&1024&&y.llseek(r,0,2);var w=typeof p<"u";if(!w)p=r.position;else if(!r.seekable)throw new y.ErrnoError(70);var T=r.stream_ops.write(r,a,c,d,p,v);return w||(r.position+=T),T},mmap(r,a,c,d,p){if((d&2)!==0&&(p&2)===0&&(r.flags&2097155)!==2)throw new y.ErrnoError(2);if((r.flags&2097155)===1)throw new y.ErrnoError(2);if(!r.stream_ops.mmap)throw new y.ErrnoError(43);if(!a)throw new y.ErrnoError(28);return r.stream_ops.mmap(r,a,c,d,p)},msync(r,a,c,d,p){return P(c>=0),r.stream_ops.msync?r.stream_ops.msync(r,a,c,d,p):0},ioctl(r,a,c){if(!r.stream_ops.ioctl)throw new y.ErrnoError(59);return r.stream_ops.ioctl(r,a,c)},readFile(r,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var c=y.open(r,a.flags),d=y.stat(r),p=d.size,v=new Uint8Array(p);return y.read(c,v,0,p,0),a.encoding==="utf8"&&(v=vt(v)),y.close(c),v},writeFile(r,a,c={}){c.flags=c.flags||577;var d=y.open(r,c.flags,c.mode);if(typeof a=="string"&&(a=new Uint8Array(te(a))),ArrayBuffer.isView(a))y.write(d,a,0,a.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");y.close(d)},cwd:()=>y.currentPath,chdir(r){var a=y.lookupPath(r,{follow:!0});if(a.node===null)throw new y.ErrnoError(44);if(!y.isDir(a.node.mode))throw new y.ErrnoError(54);var c=y.nodePermissions(a.node,"x");if(c)throw new y.ErrnoError(c);y.currentPath=a.path},createDefaultDirectories(){y.mkdir("/tmp"),y.mkdir("/home"),y.mkdir("/home/web_user")},createDefaultDevices(){y.mkdir("/dev"),y.registerDevice(y.makedev(1,3),{read:()=>0,write:(d,p,v,w,T)=>w,llseek:()=>0}),y.mkdev("/dev/null",y.makedev(1,3)),Te.register(y.makedev(5,0),Te.default_tty_ops),Te.register(y.makedev(6,0),Te.default_tty1_ops),y.mkdev("/dev/tty",y.makedev(5,0)),y.mkdev("/dev/tty1",y.makedev(6,0));var r=new Uint8Array(1024),a=0,c=()=>(a===0&&(ys(r),a=r.byteLength),r[--a]);y.createDevice("/dev","random",c),y.createDevice("/dev","urandom",c),y.mkdir("/dev/shm"),y.mkdir("/dev/shm/tmp")},createSpecialDirectories(){y.mkdir("/proc");var r=y.mkdir("/proc/self");y.mkdir("/proc/self/fd"),y.mount({mount(){var a=y.createNode(r,"fd",16895,73);return a.stream_ops={llseek:fe.stream_ops.llseek},a.node_ops={lookup(c,d){var p=+d,v=y.getStreamChecked(p),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>v.path},id:p+1};return w.parent=w,w},readdir(){return Array.from(y.streams.entries()).filter(([c,d])=>d).map(([c,d])=>c.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(r,a,c){r?y.createDevice("/dev","stdin",r):y.symlink("/dev/tty","/dev/stdin"),a?y.createDevice("/dev","stdout",null,a):y.symlink("/dev/tty","/dev/stdout"),c?y.createDevice("/dev","stderr",null,c):y.symlink("/dev/tty1","/dev/stderr");var d=y.open("/dev/stdin",0),p=y.open("/dev/stdout",1),v=y.open("/dev/stderr",1);P(d.fd===0,`invalid handle for stdin (${d.fd})`),P(p.fd===1,`invalid handle for stdout (${p.fd})`),P(v.fd===2,`invalid handle for stderr (${v.fd})`)},staticInit(){y.nameTable=new Array(4096),y.mount(fe,{},"/"),y.createDefaultDirectories(),y.createDefaultDevices(),y.createSpecialDirectories(),y.filesystems={MEMFS:fe}},init(r,a,c){P(!y.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),y.initialized=!0,r??=t.stdin,a??=t.stdout,c??=t.stderr,y.createStandardStreams(r,a,c)},quit(){y.initialized=!1,Na(0);for(var r of y.streams)r&&y.close(r)},findObject(r,a){var c=y.analyzePath(r,a);return c.exists?c.object:null},analyzePath(r,a){try{var c=y.lookupPath(r,{follow:!a});r=c.path}catch{}var d={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=y.lookupPath(r,{parent:!0});d.parentExists=!0,d.parentPath=c.path,d.parentObject=c.node,d.name=Tt.basename(r),c=y.lookupPath(r,{follow:!a}),d.exists=!0,d.path=c.path,d.object=c.node,d.name=c.node.name,d.isRoot=c.path==="/"}catch(p){d.error=p.errno}return d},createPath(r,a,c,d){r=typeof r=="string"?r:y.getPath(r);for(var p=a.split("/").reverse();p.length;){var v=p.pop();if(v){var w=Tt.join2(r,v);try{y.mkdir(w)}catch(T){if(T.errno!=20)throw T}r=w}}return w},createFile(r,a,c,d,p){var v=Tt.join2(typeof r=="string"?r:y.getPath(r),a),w=Ft(d,p);return y.create(v,w)},createDataFile(r,a,c,d,p,v){var w=a;r&&(r=typeof r=="string"?r:y.getPath(r),w=a?Tt.join2(r,a):r);var T=Ft(d,p),N=y.create(w,T);if(c){if(typeof c=="string"){for(var j=new Array(c.length),ee=0,ce=c.length;ee<ce;++ee)j[ee]=c.charCodeAt(ee);c=j}y.chmod(N,T|146);var de=y.open(N,577);y.write(de,c,0,c.length,0,v),y.close(de),y.chmod(N,T)}},createDevice(r,a,c,d){var p=Tt.join2(typeof r=="string"?r:y.getPath(r),a),v=Ft(!!c,!!d);y.createDevice.major??=64;var w=y.makedev(y.createDevice.major++,0);return y.registerDevice(w,{open(T){T.seekable=!1},close(T){d?.buffer?.length&&d(10)},read(T,N,j,ee,ce){for(var de=0,ue=0;ue<ee;ue++){var me;try{me=c()}catch{throw new y.ErrnoError(29)}if(me===void 0&&de===0)throw new y.ErrnoError(6);if(me==null)break;de++,N[j+ue]=me}return de&&(T.node.atime=Date.now()),de},write(T,N,j,ee,ce){for(var de=0;de<ee;de++)try{d(N[j+de])}catch{throw new y.ErrnoError(29)}return ee&&(T.node.mtime=T.node.ctime=Date.now()),de}}),y.mkdev(p,v,w)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=E(r.url),r.usedBytes=r.contents.length}catch{throw new y.ErrnoError(29)}},createLazyFile(r,a,c,d,p){class v{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var me=ue%this.chunkSize,qe=ue/this.chunkSize|0;return this.getter(qe)[me]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",c,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+c+". Status: "+ue.status);var me=Number(ue.getResponseHeader("Content-length")),qe,dt=(qe=ue.getResponseHeader("Accept-Ranges"))&&qe==="bytes",st=(qe=ue.getResponseHeader("Content-Encoding"))&&qe==="gzip",Lt=1024*1024;dt||(Lt=me);var xt=(qt,un)=>{if(qt>un)throw new Error("invalid range ("+qt+", "+un+") or no bytes requested!");if(un>me-1)throw new Error("only "+me+" bytes available! programmer error!");var Dt=new XMLHttpRequest;if(Dt.open("GET",c,!1),me!==Lt&&Dt.setRequestHeader("Range","bytes="+qt+"-"+un),Dt.responseType="arraybuffer",Dt.overrideMimeType&&Dt.overrideMimeType("text/plain; charset=x-user-defined"),Dt.send(null),!(Dt.status>=200&&Dt.status<300||Dt.status===304))throw new Error("Couldn't load "+c+". Status: "+Dt.status);return Dt.response!==void 0?new Uint8Array(Dt.response||[]):te(Dt.responseText||"")},an=this;an.setDataGetter(qt=>{var un=qt*Lt,Dt=(qt+1)*Lt-1;if(Dt=Math.min(Dt,me-1),typeof an.chunks[qt]>"u"&&(an.chunks[qt]=xt(un,Dt)),typeof an.chunks[qt]>"u")throw new Error("doXHR failed!");return an.chunks[qt]}),(st||!me)&&(Lt=me=1,me=this.getter(0).length,Lt=me,L("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Lt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!s)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new v,T={isDevice:!1,contents:w}}else var T={isDevice:!1,url:c};var N=y.createFile(r,a,T,d,p);T.contents?N.contents=T.contents:T.url&&(N.contents=null,N.url=T.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var j={},ee=Object.keys(N.stream_ops);ee.forEach(de=>{var ue=N.stream_ops[de];j[de]=(...me)=>(y.forceLoadFile(N),ue(...me))});function ce(de,ue,me,qe,dt){var st=de.node.contents;if(dt>=st.length)return 0;var Lt=Math.min(st.length-dt,qe);if(P(Lt>=0),st.slice)for(var xt=0;xt<Lt;xt++)ue[me+xt]=st[dt+xt];else for(var xt=0;xt<Lt;xt++)ue[me+xt]=st.get(dt+xt);return Lt}return j.read=(de,ue,me,qe,dt)=>(y.forceLoadFile(N),ce(de,ue,me,qe,dt)),j.mmap=(de,ue,me,qe,dt)=>{y.forceLoadFile(N);var st=Ie();if(!st)throw new y.ErrnoError(48);return ce(de,Ze,st,ue,me),{ptr:st,allocated:!0}},N.stream_ops=j,N},absolutePath(){H("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){H("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){H("FS.createLink has been removed; use FS.symlink instead")},joinPath(){H("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){H("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){H("FS.standardizePath has been removed; use PATH.normalize instead")}},ct={DEFAULT_POLLMASK:5,calculateAt(r,a,c){if(Tt.isAbs(a))return a;var d;if(r===-100)d=y.cwd();else{var p=ct.getStreamFromFD(r);d=p.path}if(a.length==0){if(!c)throw new y.ErrnoError(44);return d}return d+"/"+a},writeStat(r,a){re[r>>2]=a.dev,re[r+4>>2]=a.mode,ye[r+8>>2]=a.nlink,re[r+12>>2]=a.uid,re[r+16>>2]=a.gid,re[r+20>>2]=a.rdev,Mt[r+24>>3]=BigInt(a.size),re[r+32>>2]=4096,re[r+36>>2]=a.blocks;var c=a.atime.getTime(),d=a.mtime.getTime(),p=a.ctime.getTime();return Mt[r+40>>3]=BigInt(Math.floor(c/1e3)),ye[r+48>>2]=c%1e3*1e3*1e3,Mt[r+56>>3]=BigInt(Math.floor(d/1e3)),ye[r+64>>2]=d%1e3*1e3*1e3,Mt[r+72>>3]=BigInt(Math.floor(p/1e3)),ye[r+80>>2]=p%1e3*1e3*1e3,Mt[r+88>>3]=BigInt(a.ino),0},writeStatFs(r,a){re[r+4>>2]=a.bsize,re[r+40>>2]=a.bsize,re[r+8>>2]=a.blocks,re[r+12>>2]=a.bfree,re[r+16>>2]=a.bavail,re[r+20>>2]=a.files,re[r+24>>2]=a.ffree,re[r+28>>2]=a.fsid,re[r+44>>2]=a.flags,re[r+36>>2]=a.namelen},doMsync(r,a,c,d,p){if(!y.isFile(a.node.mode))throw new y.ErrnoError(43);if(d&2)return 0;var v=Je.slice(r,r+c);y.msync(a,v,p,c,d)},getStreamFromFD(r){var a=y.getStreamChecked(r);return a},varargs:void 0,getStr(r){var a=lt(r);return a}};function mt(r,a,c){try{var d=ct.getStreamFromFD(r);if(P(!c),d.fd===a)return-28;if(a<0||a>=y.MAX_OPEN_FDS)return-8;var p=y.getStream(a);return p&&y.close(p),y.dupStream(d,a).fd}catch(v){if(typeof y>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}var sn=()=>{P(ct.varargs!=null);var r=re[+ct.varargs>>2];return ct.varargs+=4,r},Qt=sn;function si(r,a,c){ct.varargs=c;try{var d=ct.getStreamFromFD(r);switch(a){case 0:{var p=sn();if(p<0)return-28;for(;y.streams[p];)p++;var v;return v=y.dupStream(d,p),v.fd}case 1:case 2:return 0;case 3:return d.flags;case 4:{var p=sn();return d.flags|=p,0}case 12:{var p=Qt(),w=0;return oe[p+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(T){if(typeof y>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function yi(r,a){try{return ct.writeStat(a,y.fstat(r))}catch(c){if(typeof y>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Ct(r,a,c){ct.varargs=c;try{var d=ct.getStreamFromFD(r);switch(a){case 21509:return d.tty?0:-59;case 21505:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcgets){var p=d.tty.ops.ioctl_tcgets(d),v=Qt();re[v>>2]=p.c_iflag||0,re[v+4>>2]=p.c_oflag||0,re[v+8>>2]=p.c_cflag||0,re[v+12>>2]=p.c_lflag||0;for(var w=0;w<32;w++)Ze[v+w+17]=p.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return d.tty?0:-59;case 21506:case 21507:case 21508:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcsets){for(var v=Qt(),T=re[v>>2],N=re[v+4>>2],j=re[v+8>>2],ee=re[v+12>>2],ce=[],w=0;w<32;w++)ce.push(Ze[v+w+17]);return d.tty.ops.ioctl_tcsets(d.tty,a,{c_iflag:T,c_oflag:N,c_cflag:j,c_lflag:ee,c_cc:ce})}return 0}case 21519:{if(!d.tty)return-59;var v=Qt();return re[v>>2]=0,0}case 21520:return d.tty?-28:-59;case 21531:{var v=Qt();return y.ioctl(d,a,v)}case 21523:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tiocgwinsz){var de=d.tty.ops.ioctl_tiocgwinsz(d.tty),v=Qt();oe[v>>1]=de[0],oe[v+2>>1]=de[1]}return 0}case 21524:return d.tty?0:-59;case 21515:return d.tty?0:-59;default:return-28}}catch(ue){if(typeof y>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function Xt(r,a){try{return r=ct.getStr(r),ct.writeStat(a,y.lstat(r))}catch(c){if(typeof y>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Vn(r,a,c,d){try{a=ct.getStr(a);var p=d&256,v=d&4096;return d=d&-6401,P(!d,`unknown flags in __syscall_newfstatat: ${d}`),a=ct.calculateAt(r,a,v),ct.writeStat(c,p?y.lstat(a):y.stat(a))}catch(w){if(typeof y>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Gt(r,a,c,d){ct.varargs=d;try{a=ct.getStr(a),a=ct.calculateAt(r,a);var p=d?sn():0;return y.open(a,c,p).fd}catch(v){if(typeof y>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}function Hn(r,a){try{return r=ct.getStr(r),ct.writeStat(a,y.stat(r))}catch(c){if(typeof y>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var Mi=()=>H("native code called abort()"),kt=r=>{for(var a="";;){var c=Je[r++];if(!c)return a;a+=String.fromCharCode(c)}},sr={},Ni={},Ms={},Or=class extends Error{constructor(a){super(a),this.name="BindingError"}},ht=r=>{throw new Or(r)};function Nd(r,a,c={}){var d=a.name;if(r||ht(`type "${d}" must have a positive integer typeid pointer`),Ni.hasOwnProperty(r)){if(c.ignoreDuplicateRegistrations)return;ht(`Cannot register type '${d}' twice`)}if(Ni[r]=a,delete Ms[r],sr.hasOwnProperty(r)){var p=sr[r];delete sr[r],p.forEach(v=>v())}}function Tn(r,a,c={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Nd(r,a,c)}var kl=(r,a,c)=>{switch(a){case 1:return c?d=>Ze[d]:d=>Je[d];case 2:return c?d=>oe[d>>1]:d=>ve[d>>1];case 4:return c?d=>re[d>>2]:d=>ye[d>>2];case 8:return c?d=>Mt[d>>3]:d=>ot[d>>3];default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},Oi=r=>{if(r===null)return"null";var a=typeof r;return a==="object"||a==="array"||a==="function"?r.toString():""+r},zl=(r,a,c,d)=>{if(a<c||a>d)throw new TypeError(`Passing a number "${Oi(a)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${c}, ${d}]!`)},Od=(r,a,c,d,p)=>{a=kt(a);const v=d===0n;let w=T=>T;if(v){const T=c*8;w=N=>BigInt.asUintN(T,N),p=w(p)}Tn(r,{name:a,fromWireType:w,toWireType:(T,N)=>{if(typeof N=="number")N=BigInt(N);else if(typeof N!="bigint")throw new TypeError(`Cannot convert "${Oi(N)}" to ${this.name}`);return zl(a,N,d,p),N},argPackAdvance:Wn,readValueFromPointer:kl(a,c,!v),destructorFunction:null})},Wn=8,Bd=(r,a,c,d)=>{a=kt(a),Tn(r,{name:a,fromWireType:function(p){return!!p},toWireType:function(p,v){return v?c:d},argPackAdvance:Wn,readValueFromPointer:function(p){return this.fromWireType(Je[p])},destructorFunction:null})},kd=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),Ta=r=>{function a(c){return c.$$.ptrType.registeredClass.name}ht(a(r)+" instance already deleted")},Aa=!1,Gl=r=>{},zd=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},Vl=r=>{r.count.value-=1;var a=r.count.value===0;a&&zd(r)},Hl=(r,a,c)=>{if(a===c)return r;if(c.baseClass===void 0)return null;var d=Hl(r,a,c.baseClass);return d===null?null:c.downcast(d)},Wl={},Gd={},Vd=(r,a)=>{for(a===void 0&&ht("ptr should not be undefined");r.baseClass;)a=r.upcast(a),r=r.baseClass;return a},Hd=(r,a)=>(a=Vd(r,a),Gd[a]),Wd=class extends Error{constructor(a){super(a),this.name="InternalError"}},Es=r=>{throw new Wd(r)},bs=(r,a)=>{(!a.ptrType||!a.ptr)&&Es("makeClassHandle requires ptr and ptrType");var c=!!a.smartPtrType,d=!!a.smartPtr;return c!==d&&Es("Both smartPtrType and smartPtr must be specified"),a.count={value:1},Br(Object.create(r,{$$:{value:a,writable:!0}}))};function $l(r){var a=this.getPointee(r);if(!a)return this.destructor(r),null;var c=Hd(this.registeredClass,a);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=a,c.$$.smartPtr=r,c.clone();var d=c.clone();return this.destructor(r),d}function p(){return this.isSmartPointer?bs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:r}):bs(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var v=this.registeredClass.getActualType(a),w=Wl[v];if(!w)return p.call(this);var T;this.isConst?T=w.constPointerType:T=w.pointerType;var N=Hl(a,this.registeredClass,T.registeredClass);return N===null?p.call(this):this.isSmartPointer?bs(T.registeredClass.instancePrototype,{ptrType:T,ptr:N,smartPtrType:this,smartPtr:r}):bs(T.registeredClass.instancePrototype,{ptrType:T,ptr:N})}var Br=r=>typeof FinalizationRegistry>"u"?(Br=a=>a,r):(Aa=new FinalizationRegistry(a=>{console.warn(a.leakWarning),Vl(a.$$)}),Br=a=>{var c=a.$$,d=!!c.smartPtr;if(d){var p={$$:c},v=c.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${v.name} <${De(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,$l),p.leakWarning=w.stack.replace(/^Error: /,""),Aa.register(a,p,a)}return a},Gl=a=>Aa.unregister(a),Br(r)),$d=()=>{let r=ws.prototype;Object.assign(r,{isAliasOf(c){if(!(this instanceof ws)||!(c instanceof ws))return!1;var d=this.$$.ptrType.registeredClass,p=this.$$.ptr;c.$$=c.$$;for(var v=c.$$.ptrType.registeredClass,w=c.$$.ptr;d.baseClass;)p=d.upcast(p),d=d.baseClass;for(;v.baseClass;)w=v.upcast(w),v=v.baseClass;return d===v&&p===w},clone(){if(this.$$.ptr||Ta(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=Br(Object.create(Object.getPrototypeOf(this),{$$:{value:kd(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||Ta(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),Gl(this),Vl(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ta(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ht("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(r[a]=r.delete)};function ws(){}var Ts=(r,a)=>Object.defineProperty(a,"name",{value:r}),Ca=(r,a,c)=>{if(r[a].overloadTable===void 0){var d=r[a];r[a]=function(...p){return r[a].overloadTable.hasOwnProperty(p.length)||ht(`Function '${c}' called with an invalid number of arguments (${p.length}) - expects one of (${r[a].overloadTable})!`),r[a].overloadTable[p.length].apply(this,p)},r[a].overloadTable=[],r[a].overloadTable[d.argCount]=d}},Ra=(r,a,c)=>{t.hasOwnProperty(r)?((c===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[c]!==void 0)&&ht(`Cannot register public name '${r}' twice`),Ca(t,r,r),t[r].overloadTable.hasOwnProperty(c)&&ht(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[r].overloadTable[c]=a):(t[r]=a,t[r].argCount=c)},Xd=48,jd=57,qd=r=>{P(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var a=r.charCodeAt(0);return a>=Xd&&a<=jd?`_${r}`:r};function Yd(r,a,c,d,p,v,w,T){this.name=r,this.constructor=a,this.instancePrototype=c,this.rawDestructor=d,this.baseClass=p,this.getActualType=v,this.upcast=w,this.downcast=T,this.pureVirtualFunctions=[]}var As=(r,a,c)=>{for(;a!==c;)a.upcast||ht(`Expected null or instance of ${c.name}, got an instance of ${a.name}`),r=a.upcast(r),a=a.baseClass;return r};function Kd(r,a){if(a===null)return this.isReference&&ht(`null is not a valid ${this.name}`),0;a.$$||ht(`Cannot pass "${Oi(a)}" as a ${this.name}`),a.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=a.$$.ptrType.registeredClass,d=As(a.$$.ptr,c,this.registeredClass);return d}function Zd(r,a){var c;if(a===null)return this.isReference&&ht(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,c),c):0;(!a||!a.$$)&&ht(`Cannot pass "${Oi(a)}" as a ${this.name}`),a.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&ht(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var d=a.$$.ptrType.registeredClass;if(c=As(a.$$.ptr,d,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&ht("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?c=a.$$.smartPtr:ht(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)c=a.$$.smartPtr;else{var p=a.clone();c=this.rawShare(c,jt.toHandle(()=>p.delete())),r!==null&&r.push(this.rawDestructor,c)}break;default:ht("Unsupporting sharing policy")}return c}function Jd(r,a){if(a===null)return this.isReference&&ht(`null is not a valid ${this.name}`),0;a.$$||ht(`Cannot pass "${Oi(a)}" as a ${this.name}`),a.$$.ptr||ht(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&ht(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var c=a.$$.ptrType.registeredClass,d=As(a.$$.ptr,c,this.registeredClass);return d}function Cs(r){return this.fromWireType(ye[r>>2])}var Qd=()=>{Object.assign(Rs.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:Wn,readValueFromPointer:Cs,fromWireType:$l})};function Rs(r,a,c,d,p,v,w,T,N,j,ee){this.name=r,this.registeredClass=a,this.isReference=c,this.isConst=d,this.isSmartPointer=p,this.pointeeType=v,this.sharingPolicy=w,this.rawGetPointee=T,this.rawConstructor=N,this.rawShare=j,this.rawDestructor=ee,!p&&a.baseClass===void 0?d?(this.toWireType=Kd,this.destructorFunction=null):(this.toWireType=Jd,this.destructorFunction=null):this.toWireType=Zd}var Xl=(r,a,c)=>{t.hasOwnProperty(r)||Es("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&c!==void 0?t[r].overloadTable[c]=a:(t[r]=a,t[r].argCount=c)},jl=[],Ps,_e=r=>{var a=jl[r];return a||(jl[r]=a=Ps.get(r)),P(Ps.get(r)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},$n=(r,a,c=!1)=>{P(!c,"Async bindings are only supported with JSPI."),r=kt(r);function d(){var v=_e(a);return v}var p=d();return typeof p!="function"&&ht(`unknown function pointer with signature ${r}: ${a}`),p};class ef extends Error{}var ql=r=>{var a=hc(r),c=kt(a);return jn(a),c},Bi=(r,a)=>{var c=[],d={};function p(v){if(!d[v]&&!Ni[v]){if(Ms[v]){Ms[v].forEach(p);return}c.push(v),d[v]=!0}}throw a.forEach(p),new ef(`${r}: `+c.map(ql).join([", "]))},Dn=(r,a,c)=>{r.forEach(T=>Ms[T]=a);function d(T){var N=c(T);N.length!==r.length&&Es("Mismatched type converter count");for(var j=0;j<r.length;++j)Tn(r[j],N[j])}var p=new Array(a.length),v=[],w=0;a.forEach((T,N)=>{Ni.hasOwnProperty(T)?p[N]=Ni[T]:(v.push(T),sr.hasOwnProperty(T)||(sr[T]=[]),sr[T].push(()=>{p[N]=Ni[T],++w,w===v.length&&d(p)}))}),v.length===0&&d(p)},tf=(r,a,c,d,p,v,w,T,N,j,ee,ce,de)=>{ee=kt(ee),v=$n(p,v),T&&=$n(w,T),j&&=$n(N,j),de=$n(ce,de);var ue=qd(ee);Ra(ue,function(){Bi(`Cannot construct ${ee} due to unbound types`,[d])}),Dn([r,a,c],d?[d]:[],me=>{me=me[0];var qe,dt;d?(qe=me.registeredClass,dt=qe.instancePrototype):dt=ws.prototype;var st=Ts(ee,function(...Dt){if(Object.getPrototypeOf(this)!==Lt)throw new Or(`Use 'new' to construct ${ee}`);if(xt.constructor_body===void 0)throw new Or(`${ee} has no accessible constructor`);var Gi=xt.constructor_body[Dt.length];if(Gi===void 0)throw new Or(`Tried to invoke ctor of ${ee} with invalid number of parameters (${Dt.length}) - expected (${Object.keys(xt.constructor_body).toString()}) parameters instead!`);return Gi.apply(this,Dt)}),Lt=Object.create(dt,{constructor:{value:st}});st.prototype=Lt;var xt=new Yd(ee,st,Lt,de,qe,v,T,j);xt.baseClass&&(xt.baseClass.__derivedClasses??=[],xt.baseClass.__derivedClasses.push(xt));var an=new Rs(ee,xt,!0,!1,!1),qt=new Rs(ee+"*",xt,!1,!1,!1),un=new Rs(ee+" const*",xt,!1,!0,!1);return Wl[r]={pointerType:qt,constPointerType:un},Xl(ue,st),[an,qt,un]})},Pa=r=>{for(;r.length;){var a=r.pop(),c=r.pop();c(a)}};function Yl(r){for(var a=1;a<r.length;++a)if(r[a]!==null&&r[a].destructorFunction===void 0)return!0;return!1}function nf(r,a,c,d,p){if(r<a||r>c){var v=a==c?a:`${a} to ${c}`;p(`function ${d} called with ${r} arguments, expected ${v}`)}}function rf(r,a,c,d){var p=Yl(r),v=r.length-2,w=[],T=["fn"];a&&T.push("thisWired");for(var N=0;N<v;++N)w.push(`arg${N}`),T.push(`arg${N}Wired`);w=w.join(","),T=T.join(",");var j=`return function (${w}) {
`;j+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,p&&(j+=`var destructors = [];
`);var ee=p?"destructors":"null",ce=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(j+=`var thisWired = classParam['toWireType'](${ee}, this);
`);for(var N=0;N<v;++N)j+=`var arg${N}Wired = argType${N}['toWireType'](${ee}, arg${N});
`,ce.push(`argType${N}`);if(j+=(c||d?"var rv = ":"")+`invoker(${T});
`,p)j+=`runDestructors(destructors);
`;else for(var N=a?1:2;N<r.length;++N){var de=N===1?"thisWired":"arg"+(N-2)+"Wired";r[N].destructorFunction!==null&&(j+=`${de}_dtor(${de});
`,ce.push(`${de}_dtor`))}return c&&(j+=`var ret = retType['fromWireType'](rv);
return ret;
`),j+=`}
`,ce.push("checkArgCount","minArgs","maxArgs"),j=`if (arguments.length !== ${ce.length}){ throw new Error(humanName + "Expected ${ce.length} closure arguments " + arguments.length + " given."); }
${j}`,[ce,j]}function sf(r){for(var a=r.length-2,c=r.length-1;c>=2&&r[c].optional;--c)a--;return a}function Ds(r,a,c,d,p,v){var w=a.length;w<2&&ht("argTypes array size mismatch! Must at least get return value and 'this' types!"),P(!v,"Async bindings are only supported with JSPI.");for(var T=a[1]!==null&&c!==null,N=Yl(a),j=a[0].name!=="void",ee=w-2,ce=sf(a),de=[r,ht,d,p,Pa,a[0],a[1]],ue=0;ue<w-2;++ue)de.push(a[ue+2]);if(!N)for(var ue=T?1:2;ue<a.length;++ue)a[ue].destructorFunction!==null&&de.push(a[ue].destructorFunction);de.push(nf,ce,ee);let[me,qe]=rf(a,T,j,v);var dt=new Function(...me,qe)(...de);return Ts(r,dt)}var Fs=(r,a)=>{for(var c=[],d=0;d<r;d++)c.push(ye[a+d*4>>2]);return c},Da=r=>{r=r.trim();const a=r.indexOf("(");return a===-1?r:(P(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,a))},af=(r,a,c,d,p,v,w,T,N)=>{var j=Fs(c,d);a=kt(a),a=Da(a),v=$n(p,v,T),Dn([],[r],ee=>{ee=ee[0];var ce=`${ee.name}.${a}`;function de(){Bi(`Cannot call ${ce} due to unbound types`,j)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ue=ee.registeredClass.constructor;return ue[a]===void 0?(de.argCount=c-1,ue[a]=de):(Ca(ue,a,ce),ue[a].overloadTable[c-1]=de),Dn([],j,me=>{var qe=[me[0],null].concat(me.slice(1)),dt=Ds(ce,qe,null,v,w,T);if(ue[a].overloadTable===void 0?(dt.argCount=c-1,ue[a]=dt):ue[a].overloadTable[c-1]=dt,ee.registeredClass.__derivedClasses)for(const st of ee.registeredClass.__derivedClasses)st.constructor.hasOwnProperty(a)||(st.constructor[a]=dt);return[]}),[]})},of=(r,a,c,d,p,v)=>{P(a>0);var w=Fs(a,c);p=$n(d,p),Dn([],[r],T=>{T=T[0];var N=`constructor ${T.name}`;if(T.registeredClass.constructor_body===void 0&&(T.registeredClass.constructor_body=[]),T.registeredClass.constructor_body[a-1]!==void 0)throw new Or(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${T.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return T.registeredClass.constructor_body[a-1]=()=>{Bi(`Cannot construct ${T.name} due to unbound types`,w)},Dn([],w,j=>(j.splice(1,0,null),T.registeredClass.constructor_body[a-1]=Ds(N,j,null,p,v),[])),[]})},lf=(r,a,c,d,p,v,w,T,N,j)=>{var ee=Fs(c,d);a=kt(a),a=Da(a),v=$n(p,v,N),Dn([],[r],ce=>{ce=ce[0];var de=`${ce.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),T&&ce.registeredClass.pureVirtualFunctions.push(a);function ue(){Bi(`Cannot call ${de} due to unbound types`,ee)}var me=ce.registeredClass.instancePrototype,qe=me[a];return qe===void 0||qe.overloadTable===void 0&&qe.className!==ce.name&&qe.argCount===c-2?(ue.argCount=c-2,ue.className=ce.name,me[a]=ue):(Ca(me,a,de),me[a].overloadTable[c-2]=ue),Dn([],ee,dt=>{var st=Ds(de,dt,ce,v,w,N);return me[a].overloadTable===void 0?(st.argCount=c-2,me[a]=st):me[a].overloadTable[c-2]=st,[]}),[]})},Kl=(r,a,c)=>(r instanceof Object||ht(`${c} with invalid "this": ${r}`),r instanceof a.registeredClass.constructor||ht(`${c} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||ht(`cannot call emscripten binding method ${c} on deleted object`),As(r.$$.ptr,r.$$.ptrType.registeredClass,a.registeredClass)),cf=(r,a,c,d,p,v,w,T,N,j)=>{a=kt(a),p=$n(d,p),Dn([],[r],ee=>{ee=ee[0];var ce=`${ee.name}.${a}`,de={get(){Bi(`Cannot access ${ce} due to unbound types`,[c,w])},enumerable:!0,configurable:!0};return N?de.set=()=>Bi(`Cannot access ${ce} due to unbound types`,[c,w]):de.set=ue=>ht(ce+" is a read-only property"),Object.defineProperty(ee.registeredClass.instancePrototype,a,de),Dn([],N?[c,w]:[c],ue=>{var me=ue[0],qe={get(){var st=Kl(this,ee,ce+" getter");return me.fromWireType(p(v,st))},enumerable:!0};if(N){N=$n(T,N);var dt=ue[1];qe.set=function(st){var Lt=Kl(this,ee,ce+" setter"),xt=[];N(j,Lt,dt.toWireType(xt,st)),Pa(xt)}}return Object.defineProperty(ee.registeredClass.instancePrototype,a,qe),[]}),[]})},uf=(r,a,c)=>{r=kt(r),Dn([],[a],d=>(d=d[0],t[r]=d.fromWireType(c),[]))},Zl=[],Xn=[0,1,,1,null,1,!0,1,!1,1],Fa=r=>{r>9&&--Xn[r+1]===0&&(P(Xn[r]!==void 0,"Decref for unallocated handle."),Xn[r]=void 0,Zl.push(r))},jt={toValue:r=>(r||ht(`Cannot use deleted val. handle = ${r}`),P(r===2||Xn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Xn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=Zl.pop()||Xn.length;return Xn[a]=r,Xn[a+1]=1,a}}}},Jl={name:"emscripten::val",fromWireType:r=>{var a=jt.toValue(r);return Fa(r),a},toWireType:(r,a)=>jt.toHandle(a),argPackAdvance:Wn,readValueFromPointer:Cs,destructorFunction:null},Ql=r=>Tn(r,Jl),df=(r,a,c)=>{switch(a){case 1:return c?function(d){return this.fromWireType(Ze[d])}:function(d){return this.fromWireType(Je[d])};case 2:return c?function(d){return this.fromWireType(oe[d>>1])}:function(d){return this.fromWireType(ve[d>>1])};case 4:return c?function(d){return this.fromWireType(re[d>>2])}:function(d){return this.fromWireType(ye[d>>2])};default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},ff=(r,a,c,d)=>{a=kt(a);function p(){}p.values={},Tn(r,{name:a,constructor:p,fromWireType:function(v){return this.constructor.values[v]},toWireType:(v,w)=>w.value,argPackAdvance:Wn,readValueFromPointer:df(a,c,d),destructorFunction:null}),Ra(a,p)},Ls=(r,a)=>{var c=Ni[r];return c===void 0&&ht(`${a} has unknown type ${ql(r)}`),c},hf=(r,a,c)=>{var d=Ls(r,"enum");a=kt(a);var p=d.constructor,v=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Ts(`${d.name}_${a}`,function(){})}});p.values[c]=v,p[a]=v},pf=(r,a)=>{switch(a){case 4:return function(c){return this.fromWireType($e[c>>2])};case 8:return function(c){return this.fromWireType(je[c>>3])};default:throw new TypeError(`invalid float width (${a}): ${r}`)}},mf=(r,a,c)=>{a=kt(a),Tn(r,{name:a,fromWireType:d=>d,toWireType:(d,p)=>{if(typeof p!="number"&&typeof p!="boolean")throw new TypeError(`Cannot convert ${Oi(p)} to ${this.name}`);return p},argPackAdvance:Wn,readValueFromPointer:pf(a,c),destructorFunction:null})},gf=(r,a,c,d,p,v,w,T)=>{var N=Fs(a,c);r=kt(r),r=Da(r),p=$n(d,p,w),Ra(r,function(){Bi(`Cannot call ${r} due to unbound types`,N)},a-1),Dn([],N,j=>{var ee=[j[0],null].concat(j.slice(1));return Xl(r,Ds(r,ee,null,p,v,w),a-1),[]})},_f=(r,a,c,d,p)=>{a=kt(a);const v=d===0;let w=N=>N;if(v){var T=32-8*c;w=N=>N<<T>>>T,p=w(p)}Tn(r,{name:a,fromWireType:w,toWireType:(N,j)=>{if(typeof j!="number"&&typeof j!="boolean")throw new TypeError(`Cannot convert "${Oi(j)}" to ${a}`);return zl(a,j,d,p),j},argPackAdvance:Wn,readValueFromPointer:kl(a,c,d!==0),destructorFunction:null})},vf=(r,a,c)=>{var d=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],p=d[a];function v(w){var T=ye[w>>2],N=ye[w+4>>2];return new p(Ze.buffer,N,T)}c=kt(c),Tn(r,{name:c,fromWireType:v,argPackAdvance:Wn,readValueFromPointer:v},{ignoreDuplicateRegistrations:!0})},xf=Object.assign({optional:!0},Jl),Sf=(r,a)=>{Tn(r,xf)},ki=(r,a,c)=>(P(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),se(r,Je,a,c)),yf=(r,a)=>{a=kt(a),Tn(r,{name:a,fromWireType(c){for(var d=ye[c>>2],p=c+4,v,w,T=p,w=0;w<=d;++w){var N=p+w;if(w==d||Je[N]==0){var j=N-T,ee=lt(T,j);v===void 0?v=ee:(v+="\0",v+=ee),T=N+1}}return jn(c),v},toWireType(c,d){d instanceof ArrayBuffer&&(d=new Uint8Array(d));var p,v=typeof d=="string";v||ArrayBuffer.isView(d)&&d.BYTES_PER_ELEMENT==1||ht("Cannot pass non-string to std::string"),v?p=X(d):p=d.length;var w=Ua(4+p+1),T=w+4;return ye[w>>2]=p,v?ki(d,T,p+1):Je.set(d,T),c!==null&&c.push(jn,w),w},argPackAdvance:Wn,readValueFromPointer:Cs,destructorFunction(c){jn(c)}})},ec=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Mf=(r,a)=>{P(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=r>>1,d=c+a/2,p=c;!(p>=d)&&ve[p];)++p;if(p-c>16&&ec)return ec.decode(ve.subarray(c,p));for(var v="",w=c;!(w>=d);++w){var T=ve[w];if(T==0)break;v+=String.fromCharCode(T)}return v},Ef=(r,a,c)=>{if(P(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),P(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<2)return 0;c-=2;for(var d=a,p=c<r.length*2?c/2:r.length,v=0;v<p;++v){var w=r.charCodeAt(v);oe[a>>1]=w,a+=2}return oe[a>>1]=0,a-d},bf=r=>r.length*2,wf=(r,a)=>{P(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",d=0;!(d>=a/4);d++){var p=re[r+d*4>>2];if(!p)break;c+=String.fromCodePoint(p)}return c},Tf=(r,a,c)=>{if(P(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),P(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<4)return 0;for(var d=a,p=d+c-4,v=0;v<r.length;++v){var w=r.codePointAt(v);if(w>65535&&v++,re[a>>2]=w,a+=4,a+4>p)break}return re[a>>2]=0,a-d},Af=r=>{for(var a=0,c=0;c<r.length;++c){var d=r.codePointAt(c);d>65535&&c++,a+=4}return a},Cf=(r,a,c)=>{c=kt(c);var d,p,v,w;a===2?(d=Mf,p=Ef,w=bf,v=T=>ve[T>>1]):a===4&&(d=wf,p=Tf,w=Af,v=T=>ye[T>>2]),Tn(r,{name:c,fromWireType:T=>{for(var N=ye[T>>2],j,ee=T+4,ce=0;ce<=N;++ce){var de=T+4+ce*a;if(ce==N||v(de)==0){var ue=de-ee,me=d(ee,ue);j===void 0?j=me:(j+="\0",j+=me),ee=de+a}}return jn(T),j},toWireType:(T,N)=>{typeof N!="string"&&ht(`Cannot pass non-string to C++ string type ${c}`);var j=w(N),ee=Ua(4+j+a);return ye[ee>>2]=j/a,p(N,ee+4,j+a),T!==null&&T.push(jn,ee),ee},argPackAdvance:Wn,readValueFromPointer:Cs,destructorFunction(T){jn(T)}})},Rf=(r,a)=>{Ql(r)},Pf=(r,a)=>{a=kt(a),Tn(r,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,d)=>{}})},Df=()=>{throw new k},tc=(r,a,c)=>{var d=[],p=r.toWireType(d,c);return d.length&&(ye[a>>2]=jt.toHandle(d)),p},Ff=(r,a,c)=>(r=jt.toValue(r),a=Ls(a,"emval::as"),tc(a,c,r)),Is=[],Lf=(r,a,c,d)=>(r=Is[r],a=jt.toValue(a),r(null,a,c,d)),If={},La=r=>{var a=If[r];return a===void 0?kt(r):a},Uf=(r,a,c,d,p)=>(r=Is[r],a=jt.toValue(a),c=La(c),r(a,a[c],d,p)),nc=()=>globalThis,Nf=r=>r===0?jt.toHandle(nc()):(r=La(r),jt.toHandle(nc()[r])),Of=r=>{var a=Is.length;return Is.push(r),a},Bf=(r,a)=>{for(var c=new Array(r),d=0;d<r;++d)c[d]=Ls(ye[a+d*4>>2],`parameter ${d}`);return c},kf=(r,a,c)=>{var d=Bf(r,a),p=d.shift();r--;var v=`return function (obj, func, destructorsRef, args) {
`,w=0,T=[];c===0&&T.push("obj");for(var N=["retType"],j=[p],ee=0;ee<r;++ee)T.push(`arg${ee}`),N.push(`argType${ee}`),j.push(d[ee]),v+=`  var arg${ee} = argType${ee}.readValueFromPointer(args${w?"+"+w:""});
`,w+=d[ee].argPackAdvance;var ce=c===1?"new func":"func.call";v+=`  var rv = ${ce}(${T.join(", ")});
`,p.isVoid||(N.push("emval_returnValue"),j.push(tc),v+=`  return emval_returnValue(retType, destructorsRef, rv);
`),v+=`};
`;var de=new Function(...N,v)(...j),ue=`methodCaller<(${d.map(me=>me.name).join(", ")}) => ${p.name}>`;return Of(Ts(ue,de))},zf=(r,a)=>(r=jt.toValue(r),a=jt.toValue(a),jt.toHandle(r[a])),Gf=r=>{r>9&&(Xn[r+1]+=1)},Vf=r=>(r=jt.toValue(r),typeof r=="number"),Hf=r=>(r=jt.toValue(r),typeof r=="string"),Wf=()=>jt.toHandle([]),$f=r=>jt.toHandle(La(r)),Xf=r=>{var a=jt.toValue(r);Pa(a),Fa(r)},jf=(r,a)=>{r=Ls(r,"_emval_take_value");var c=r.readValueFromPointer(a);return jt.toHandle(c)},qf=r=>{throw r=jt.toValue(r),r},Yf=r=>r%4===0&&(r%100!==0||r%400===0),Kf=[0,31,60,91,121,152,182,213,244,274,305,335],Zf=[0,31,59,90,120,151,181,212,243,273,304,334],ic=r=>{var a=Yf(r.getFullYear()),c=a?Kf:Zf,d=c[r.getMonth()]+r.getDate()-1;return d},Jf=9007199254740992,Qf=-9007199254740992,rc=r=>r<Qf||r>Jf?NaN:Number(r);function eh(r,a){r=rc(r);var c=new Date(r*1e3);re[a>>2]=c.getSeconds(),re[a+4>>2]=c.getMinutes(),re[a+8>>2]=c.getHours(),re[a+12>>2]=c.getDate(),re[a+16>>2]=c.getMonth(),re[a+20>>2]=c.getFullYear()-1900,re[a+24>>2]=c.getDay();var d=ic(c)|0;re[a+28>>2]=d,re[a+36>>2]=-(c.getTimezoneOffset()*60);var p=new Date(c.getFullYear(),0,1),v=new Date(c.getFullYear(),6,1).getTimezoneOffset(),w=p.getTimezoneOffset(),T=(v!=w&&c.getTimezoneOffset()==Math.min(w,v))|0;re[a+32>>2]=T}var th=function(r){var a=(()=>{var c=new Date(re[r+20>>2]+1900,re[r+16>>2],re[r+12>>2],re[r+8>>2],re[r+4>>2],re[r>>2],0),d=re[r+32>>2],p=c.getTimezoneOffset(),v=new Date(c.getFullYear(),0,1),w=new Date(c.getFullYear(),6,1).getTimezoneOffset(),T=v.getTimezoneOffset(),N=Math.min(T,w);if(d<0)re[r+32>>2]=+(w!=T&&N==p);else if(d>0!=(N==p)){var j=Math.max(T,w),ee=d>0?N:j;c.setTime(c.getTime()+(ee-p)*6e4)}re[r+24>>2]=c.getDay();var ce=ic(c)|0;re[r+28>>2]=ce,re[r>>2]=c.getSeconds(),re[r+4>>2]=c.getMinutes(),re[r+8>>2]=c.getHours(),re[r+12>>2]=c.getDate(),re[r+16>>2]=c.getMonth(),re[r+20>>2]=c.getYear();var de=c.getTime();return isNaN(de)?-1:de/1e3})();return BigInt(a)},nh=(r,a,c,d)=>{var p=new Date().getFullYear(),v=new Date(p,0,1),w=new Date(p,6,1),T=v.getTimezoneOffset(),N=w.getTimezoneOffset(),j=Math.max(T,N);ye[r>>2]=j*60,re[a>>2]=+(T!=N);var ee=ue=>{var me=ue>=0?"-":"+",qe=Math.abs(ue),dt=String(Math.floor(qe/60)).padStart(2,"0"),st=String(qe%60).padStart(2,"0");return`UTC${me}${dt}${st}`},ce=ee(T),de=ee(N);P(ce),P(de),P(X(ce)<=16,`timezone name truncated to fit in TZNAME_MAX (${ce})`),P(X(de)<=16,`timezone name truncated to fit in TZNAME_MAX (${de})`),N<T?(ki(ce,c,17),ki(de,d,17)):(ki(ce,d,17),ki(de,c,17))},sc=()=>performance.now(),ac=()=>Date.now(),ih=r=>r>=0&&r<=3;function rh(r,a,c){if(!ih(r))return 28;var d;r===0?d=ac():d=sc();var p=Math.round(d*1e3*1e3);return Mt[c>>3]=BigInt(p),0}var Us=[],sh=(r,a)=>{P(Array.isArray(Us)),P(a%16==0),Us.length=0;for(var c;c=Je[r++];){var d=String.fromCharCode(c),p=["d","f","i","p"];p.push("j"),P(p.includes(d),`Invalid character ${c}("${d}") in readEmAsmArgs! Use only [${p}], and do not specify "v" for void return argument.`);var v=c!=105;v&=c!=112,a+=v&&a%8?4:0,Us.push(c==112?ye[a>>2]:c==106?Mt[a>>3]:c==105?re[a>>2]:je[a>>3]),a+=v?8:4}return Us},ah=(r,a,c)=>{var d=sh(a,c);return P(fc.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),fc[r](...d)},oh=(r,a,c)=>ah(r,a,c),oc=()=>2147483648,lh=()=>oc(),ch=(r,a)=>(P(a,"alignment argument is required"),Math.ceil(r/a)*a),uh=r=>{var a=Xe.buffer,c=(r-a.byteLength+65535)/65536|0;try{return Xe.grow(c),wt(),1}catch(d){I(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${r} bytes, but got error: ${d}`)}},dh=r=>{var a=Je.length;r>>>=0,P(r>a);var c=oc();if(r>c)return I(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${c} bytes!`),!1;for(var d=1;d<=4;d*=2){var p=a*(1+.2/d);p=Math.min(p,r+100663296);var v=Math.min(c,ch(Math.max(r,p),65536)),w=uh(v);if(w)return!0}return I(`Failed to grow the heap from ${a} bytes to ${v} bytes, not enough memory!`),!1},Ia={},fh=()=>h||"./this.program",kr=()=>{if(!kr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:fh()};for(var c in Ia)Ia[c]===void 0?delete a[c]:a[c]=Ia[c];var d=[];for(var c in a)d.push(`${c}=${a[c]}`);kr.strings=d}return kr.strings},hh=(r,a)=>{var c=0,d=0;for(var p of kr()){var v=a+c;ye[r+d>>2]=v,c+=ki(p,v,1/0)+1,d+=4}return 0},ph=(r,a)=>{var c=kr();ye[r>>2]=c.length;var d=0;for(var p of c)d+=X(p)+1;return ye[a>>2]=d,0},lc=0,cc=()=>Me||lc>0,mh=r=>{cc()||(t.onExit?.(r),O=!0),f(r,new Be(r))},gh=(r,a)=>{if(Am(),cc()&&!a){var c=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${lc}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ae?.(c),I(c)}mh(r)},_h=gh;function vh(r){try{var a=ct.getStreamFromFD(r);return y.close(a),0}catch(c){if(typeof y>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var xh=(r,a,c,d)=>{for(var p=0,v=0;v<c;v++){var w=ye[a>>2],T=ye[a+4>>2];a+=8;var N=y.read(r,Ze,w,T,d);if(N<0)return-1;if(p+=N,N<T)break}return p};function Sh(r,a,c,d){try{var p=ct.getStreamFromFD(r),v=xh(p,a,c);return ye[d>>2]=v,0}catch(w){if(typeof y>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function yh(r,a,c,d){a=rc(a);try{if(isNaN(a))return 61;var p=ct.getStreamFromFD(r);return y.llseek(p,a,c),Mt[d>>3]=BigInt(p.position),p.getdents&&a===0&&c===0&&(p.getdents=null),0}catch(v){if(typeof y>"u"||v.name!=="ErrnoError")throw v;return v.errno}}var Mh=(r,a,c,d)=>{for(var p=0,v=0;v<c;v++){var w=ye[a>>2],T=ye[a+4>>2];a+=8;var N=y.write(r,Ze,w,T,d);if(N<0)return-1;if(p+=N,N<T)break}return p};function Eh(r,a,c,d){try{var p=ct.getStreamFromFD(r),v=Mh(p,a,c);return ye[d>>2]=v,0}catch(w){if(typeof y>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var bh=r=>r,wh=r=>{var a=t["_"+r];return P(a,"Cannot call unknown function "+r+", make sure it is exported"),a},Th=(r,a)=>{P(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ze.set(r,a)},Ns=r=>vc(r),Ah=r=>{var a=X(r)+1,c=Ns(a);return ki(r,c,a),c},uc=(r,a,c,d,p)=>{var v={string:me=>{var qe=0;return me!=null&&me!==0&&(qe=Ah(me)),qe},array:me=>{var qe=Ns(me.length);return Th(me,qe),qe}};function w(me){return a==="string"?lt(me):a==="boolean"?!!me:me}var T=wh(r),N=[],j=0;if(P(a!=="array",'Return type should not be "array".'),d)for(var ee=0;ee<d.length;ee++){var ce=v[c[ee]];ce?(j===0&&(j=z()),N[ee]=ce(d[ee])):N[ee]=d[ee]}var de=T(...N);function ue(me){return j!==0&&$(j),w(me)}return de=ue(de),de},Ch=(r,a,c,d)=>(...p)=>uc(r,a,c,p),Rh=(...r)=>y.createPath(...r),Ph=(...r)=>y.unlink(...r),Dh=(...r)=>y.createLazyFile(...r),Fh=(...r)=>y.createDevice(...r),Lh=r=>Os(r),Ih=r=>Ba(r),Uh=r=>{var a=z(),c=Ns(4),d=Ns(4);Sc(r,c,d);var p=ye[c>>2],v=ye[d>>2],w=lt(p);jn(p);var T;return v&&(T=lt(v),jn(v)),$(a),[w,T]},dc=r=>Uh(r);y.createPreloadedFile=bt,y.staticInit(),$d(),Qd(),P(Xn.length===10),t.noExitRuntime&&(Me=t.noExitRuntime),t.preloadPlugins&&(tt=t.preloadPlugins),t.print&&(L=t.print),t.printErr&&(I=t.printErr),t.wasmBinary&&(D=t.wasmBinary),Bh(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),P(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),P(typeof t.read>"u","Module.read option was removed"),P(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),P(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),P(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),P(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),P(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),P(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),P(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),P(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=b,t.ccall=uc,t.cwrap=Ch,t.FS_createPreloadedFile=bt,t.FS_unlink=Ph,t.FS_createPath=Rh,t.FS_createDevice=Fh,t.FS=y,t.FS_createDataFile=Ve,t.FS_createLazyFile=Dh,t.MEMFS=fe;var Nh=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Nh.forEach(pe);var Oh=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Oh.forEach(Re),t.incrementExceptionRefcount=Lh,t.decrementExceptionRefcount=Ih,t.getExceptionMessage=dc;function Bh(){ie("fetchSettings")}var fc={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(a){},enumerable:!0,configurable:!0})})}},hc=Y("___getTypeName"),Ua=Y("_malloc"),Na=Y("_fflush"),jn=Y("_free"),Oa=Y("_emscripten_stack_get_end"),pc=Y("_strerror"),ge=Y("_setThrew"),mc=Y("__emscripten_tempret_set"),gc=Y("_emscripten_stack_init"),_c=Y("__emscripten_stack_restore"),vc=Y("__emscripten_stack_alloc"),xc=Y("_emscripten_stack_get_current"),Ba=Y("___cxa_decrement_exception_refcount"),Os=Y("___cxa_increment_exception_refcount"),Sc=Y("___get_exception_message"),yc=Y("___cxa_can_catch"),Mc=Y("___cxa_get_exception_ptr");function kh(r){hc=ae("__getTypeName",1),Ua=ae("malloc",1),Na=ae("fflush",1),jn=ae("free",1),Oa=r.emscripten_stack_get_end,r.emscripten_stack_get_base,pc=ae("strerror",1),ge=ae("setThrew",2),mc=ae("_emscripten_tempret_set",1),gc=r.emscripten_stack_init,r.emscripten_stack_get_free,_c=r._emscripten_stack_restore,vc=r._emscripten_stack_alloc,xc=r.emscripten_stack_get_current,Ba=ae("__cxa_decrement_exception_refcount",1),Os=ae("__cxa_increment_exception_refcount",1),Sc=ae("__get_exception_message",3),yc=ae("__cxa_can_catch",3),Mc=ae("__cxa_get_exception_ptr",1)}var Ec={__assert_fail:Pn,__cxa_begin_catch:Nr,__cxa_current_primary_exception:Ma,__cxa_end_catch:gs,__cxa_find_matching_catch_2:_s,__cxa_find_matching_catch_3:rr,__cxa_find_matching_catch_4:vs,__cxa_rethrow:Ui,__cxa_rethrow_primary_exception:xs,__cxa_throw:Ss,__cxa_uncaught_exceptions:Ea,__resumeException:ba,__syscall_dup3:mt,__syscall_fcntl64:si,__syscall_fstat64:yi,__syscall_ioctl:Ct,__syscall_lstat64:Xt,__syscall_newfstatat:Vn,__syscall_openat:Gt,__syscall_stat64:Hn,_abort_js:Mi,_embind_register_bigint:Od,_embind_register_bool:Bd,_embind_register_class:tf,_embind_register_class_class_function:af,_embind_register_class_constructor:of,_embind_register_class_function:lf,_embind_register_class_property:cf,_embind_register_constant:uf,_embind_register_emval:Ql,_embind_register_enum:ff,_embind_register_enum_value:hf,_embind_register_float:mf,_embind_register_function:gf,_embind_register_integer:_f,_embind_register_memory_view:vf,_embind_register_optional:Sf,_embind_register_std_string:yf,_embind_register_std_wstring:Cf,_embind_register_user_type:Rf,_embind_register_void:Pf,_emscripten_throw_longjmp:Df,_emval_as:Ff,_emval_call:Lf,_emval_call_method:Uf,_emval_decref:Fa,_emval_get_global:Nf,_emval_get_method_caller:kf,_emval_get_property:zf,_emval_incref:Gf,_emval_is_number:Vf,_emval_is_string:Hf,_emval_new_array:Wf,_emval_new_cstring:$f,_emval_run_destructors:Xf,_emval_take_value:jf,_emval_throw:qf,_localtime_js:eh,_mktime_js:th,_tzset_js:nh,clock_time_get:rh,emscripten_asm_const_int:oh,emscripten_date_now:ac,emscripten_get_heap_max:lh,emscripten_get_now:sc,emscripten_resize_heap:dh,environ_get:hh,environ_sizes_get:ph,exit:_h,fd_close:vh,fd_read:Sh,fd_seek:yh,fd_write:Eh,invoke_ddd:fm,invoke_dddi:Rp,invoke_dddidi:Pp,invoke_ddidi:Cp,invoke_di:Dp,invoke_dii:xp,invoke_diii:Qh,invoke_diiii:Ap,invoke_diiiidd:wp,invoke_diiiidi:np,invoke_diiiii:qh,invoke_diiiiii:lp,invoke_diiiiiii:Fp,invoke_diiiiiiiii:ap,invoke_diiiiiiiiiiii:op,invoke_fiii:Em,invoke_i:Yh,invoke_id:om,invoke_ii:Vh,invoke_iid:Vp,invoke_iidddd:_m,invoke_iidiii:gp,invoke_iidiiid:pp,invoke_iidiiiiidi:_p,invoke_iif:gm,invoke_iii:zh,invoke_iiid:vp,invoke_iiididdddddd:mp,invoke_iiidiiiiiiii:hp,invoke_iiii:$h,invoke_iiiidddiiiii:Ip,invoke_iiiii:Jh,invoke_iiiiid:Jp,invoke_iiiiii:jp,invoke_iiiiiii:Wp,invoke_iiiiiiii:Gp,invoke_iiiiiiiidd:Qp,invoke_iiiiiiiii:bp,invoke_iiiiiiiiii:$p,invoke_iiiiiiiiiidddiiiiiiiii:fp,invoke_iiiiiiiiiii:Mm,invoke_iiiiiiiiiiii:bm,invoke_iiiiiiiiiiiii:am,invoke_iiij:Xp,invoke_iiji:Zp,invoke_j:Sm,invoke_ji:sm,invoke_jiiii:qp,invoke_jij:rm,invoke_v:Wh,invoke_vi:Hh,invoke_vid:Hp,invoke_viddd:Yp,invoke_vidddd:Kp,invoke_vidi:Tp,invoke_vidiii:up,invoke_vii:jh,invoke_viid:Mp,invoke_viiddi:im,invoke_viiddidi:nm,invoke_viiddii:Lp,invoke_viidi:yp,invoke_viidii:tp,invoke_viidiii:kp,invoke_viidiiid:Op,invoke_viidiiiii:dp,invoke_viidiiiiidi:zp,invoke_viidiiiiiiii:cp,invoke_viii:Gh,invoke_viiid:rp,invoke_viiidd:tm,invoke_viiidi:Sp,invoke_viiididdddddd:Bp,invoke_viiidiiiiiiii:Np,invoke_viiii:Zh,invoke_viiiiddd:em,invoke_viiiidi:hm,invoke_viiiifi:pm,invoke_viiiii:Xh,invoke_viiiiid:ip,invoke_viiiiii:Kh,invoke_viiiiiii:ep,invoke_viiiiiiii:Ep,invoke_viiiiiiiiii:um,invoke_viiiiiiiiiidddiiiiiiiii:Up,invoke_viiiiiiiiiiid:sp,invoke_viiiiiiiiiiiii:cm,invoke_viiiiiiiiiiiiiii:wm,invoke_viiiiiiiiiiiiiiiiii:dm,invoke_viiiij:vm,invoke_viij:xm,invoke_viijii:ym,invoke_vij:mm,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:lm,llvm_eh_typeid_for:bh},zi=await Ee();function zh(r,a,c){var d=z();try{return _e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;ge(1,0)}}function Gh(r,a,c,d){var p=z();try{_e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function Vh(r,a){var c=z();try{return _e(r)(a)}catch(d){if($(c),!(d instanceof B))throw d;ge(1,0)}}function Hh(r,a){var c=z();try{_e(r)(a)}catch(d){if($(c),!(d instanceof B))throw d;ge(1,0)}}function Wh(r){var a=z();try{_e(r)()}catch(c){if($(a),!(c instanceof B))throw c;ge(1,0)}}function $h(r,a,c,d){var p=z();try{return _e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function Xh(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function jh(r,a,c){var d=z();try{_e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;ge(1,0)}}function qh(r,a,c,d,p,v){var w=z();try{return _e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function Yh(r){var a=z();try{return _e(r)()}catch(c){if($(a),!(c instanceof B))throw c;ge(1,0)}}function Kh(r,a,c,d,p,v,w){var T=z();try{_e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function Zh(r,a,c,d,p){var v=z();try{_e(r)(a,c,d,p)}catch(w){if($(v),!(w instanceof B))throw w;ge(1,0)}}function Jh(r,a,c,d,p){var v=z();try{return _e(r)(a,c,d,p)}catch(w){if($(v),!(w instanceof B))throw w;ge(1,0)}}function Qh(r,a,c,d){var p=z();try{return _e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function ep(r,a,c,d,p,v,w,T){var N=z();try{_e(r)(a,c,d,p,v,w,T)}catch(j){if($(N),!(j instanceof B))throw j;ge(1,0)}}function tp(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function np(r,a,c,d,p,v,w){var T=z();try{return _e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function ip(r,a,c,d,p,v,w){var T=z();try{_e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function rp(r,a,c,d,p){var v=z();try{_e(r)(a,c,d,p)}catch(w){if($(v),!(w instanceof B))throw w;ge(1,0)}}function sp(r,a,c,d,p,v,w,T,N,j,ee,ce,de){var ue=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de)}catch(me){if($(ue),!(me instanceof B))throw me;ge(1,0)}}function ap(r,a,c,d,p,v,w,T,N,j){var ee=z();try{return _e(r)(a,c,d,p,v,w,T,N,j)}catch(ce){if($(ee),!(ce instanceof B))throw ce;ge(1,0)}}function op(r,a,c,d,p,v,w,T,N,j,ee,ce,de){var ue=z();try{return _e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de)}catch(me){if($(ue),!(me instanceof B))throw me;ge(1,0)}}function lp(r,a,c,d,p,v,w){var T=z();try{return _e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function cp(r,a,c,d,p,v,w,T,N,j,ee,ce){var de=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce)}catch(ue){if($(de),!(ue instanceof B))throw ue;ge(1,0)}}function up(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function dp(r,a,c,d,p,v,w,T,N){var j=z();try{_e(r)(a,c,d,p,v,w,T,N)}catch(ee){if($(j),!(ee instanceof B))throw ee;ge(1,0)}}function fp(r,a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe,dt,st,Lt,xt,an,qt){var un=z();try{return _e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe,dt,st,Lt,xt,an,qt)}catch(Dt){if($(un),!(Dt instanceof B))throw Dt;ge(1,0)}}function hp(r,a,c,d,p,v,w,T,N,j,ee,ce){var de=z();try{return _e(r)(a,c,d,p,v,w,T,N,j,ee,ce)}catch(ue){if($(de),!(ue instanceof B))throw ue;ge(1,0)}}function pp(r,a,c,d,p,v,w){var T=z();try{return _e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function mp(r,a,c,d,p,v,w,T,N,j,ee,ce){var de=z();try{return _e(r)(a,c,d,p,v,w,T,N,j,ee,ce)}catch(ue){if($(de),!(ue instanceof B))throw ue;ge(1,0)}}function gp(r,a,c,d,p,v){var w=z();try{return _e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function _p(r,a,c,d,p,v,w,T,N,j){var ee=z();try{return _e(r)(a,c,d,p,v,w,T,N,j)}catch(ce){if($(ee),!(ce instanceof B))throw ce;ge(1,0)}}function vp(r,a,c,d){var p=z();try{return _e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function xp(r,a,c){var d=z();try{return _e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;ge(1,0)}}function Sp(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function yp(r,a,c,d,p){var v=z();try{_e(r)(a,c,d,p)}catch(w){if($(v),!(w instanceof B))throw w;ge(1,0)}}function Mp(r,a,c,d){var p=z();try{_e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function Ep(r,a,c,d,p,v,w,T,N){var j=z();try{_e(r)(a,c,d,p,v,w,T,N)}catch(ee){if($(j),!(ee instanceof B))throw ee;ge(1,0)}}function bp(r,a,c,d,p,v,w,T,N){var j=z();try{return _e(r)(a,c,d,p,v,w,T,N)}catch(ee){if($(j),!(ee instanceof B))throw ee;ge(1,0)}}function wp(r,a,c,d,p,v,w){var T=z();try{return _e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function Tp(r,a,c,d){var p=z();try{_e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function Ap(r,a,c,d,p){var v=z();try{return _e(r)(a,c,d,p)}catch(w){if($(v),!(w instanceof B))throw w;ge(1,0)}}function Cp(r,a,c,d,p){var v=z();try{return _e(r)(a,c,d,p)}catch(w){if($(v),!(w instanceof B))throw w;ge(1,0)}}function Rp(r,a,c,d){var p=z();try{return _e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function Pp(r,a,c,d,p,v){var w=z();try{return _e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function Dp(r,a){var c=z();try{return _e(r)(a)}catch(d){if($(c),!(d instanceof B))throw d;ge(1,0)}}function Fp(r,a,c,d,p,v,w,T){var N=z();try{return _e(r)(a,c,d,p,v,w,T)}catch(j){if($(N),!(j instanceof B))throw j;ge(1,0)}}function Lp(r,a,c,d,p,v,w){var T=z();try{_e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function Ip(r,a,c,d,p,v,w,T,N,j,ee,ce){var de=z();try{return _e(r)(a,c,d,p,v,w,T,N,j,ee,ce)}catch(ue){if($(de),!(ue instanceof B))throw ue;ge(1,0)}}function Up(r,a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe,dt,st,Lt,xt,an,qt,un){var Dt=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe,dt,st,Lt,xt,an,qt,un)}catch(Gi){if($(Dt),!(Gi instanceof B))throw Gi;ge(1,0)}}function Np(r,a,c,d,p,v,w,T,N,j,ee,ce,de){var ue=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de)}catch(me){if($(ue),!(me instanceof B))throw me;ge(1,0)}}function Op(r,a,c,d,p,v,w,T){var N=z();try{_e(r)(a,c,d,p,v,w,T)}catch(j){if($(N),!(j instanceof B))throw j;ge(1,0)}}function Bp(r,a,c,d,p,v,w,T,N,j,ee,ce,de){var ue=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de)}catch(me){if($(ue),!(me instanceof B))throw me;ge(1,0)}}function kp(r,a,c,d,p,v,w){var T=z();try{_e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function zp(r,a,c,d,p,v,w,T,N,j,ee){var ce=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee)}catch(de){if($(ce),!(de instanceof B))throw de;ge(1,0)}}function Gp(r,a,c,d,p,v,w,T){var N=z();try{return _e(r)(a,c,d,p,v,w,T)}catch(j){if($(N),!(j instanceof B))throw j;ge(1,0)}}function Vp(r,a,c){var d=z();try{return _e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;ge(1,0)}}function Hp(r,a,c){var d=z();try{_e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;ge(1,0)}}function Wp(r,a,c,d,p,v,w){var T=z();try{return _e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function $p(r,a,c,d,p,v,w,T,N,j){var ee=z();try{return _e(r)(a,c,d,p,v,w,T,N,j)}catch(ce){if($(ee),!(ce instanceof B))throw ce;ge(1,0)}}function Xp(r,a,c,d){var p=z();try{return _e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function jp(r,a,c,d,p,v){var w=z();try{return _e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function qp(r,a,c,d,p){var v=z();try{return _e(r)(a,c,d,p)}catch(w){if($(v),!(w instanceof B))throw w;return ge(1,0),0n}}function Yp(r,a,c,d,p){var v=z();try{_e(r)(a,c,d,p)}catch(w){if($(v),!(w instanceof B))throw w;ge(1,0)}}function Kp(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function Zp(r,a,c,d){var p=z();try{return _e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function Jp(r,a,c,d,p,v){var w=z();try{return _e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function Qp(r,a,c,d,p,v,w,T,N,j){var ee=z();try{return _e(r)(a,c,d,p,v,w,T,N,j)}catch(ce){if($(ee),!(ce instanceof B))throw ce;ge(1,0)}}function em(r,a,c,d,p,v,w,T){var N=z();try{_e(r)(a,c,d,p,v,w,T)}catch(j){if($(N),!(j instanceof B))throw j;ge(1,0)}}function tm(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function nm(r,a,c,d,p,v,w,T){var N=z();try{_e(r)(a,c,d,p,v,w,T)}catch(j){if($(N),!(j instanceof B))throw j;ge(1,0)}}function im(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function rm(r,a,c){var d=z();try{return _e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;return ge(1,0),0n}}function sm(r,a){var c=z();try{return _e(r)(a)}catch(d){if($(c),!(d instanceof B))throw d;return ge(1,0),0n}}function am(r,a,c,d,p,v,w,T,N,j,ee,ce,de){var ue=z();try{return _e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de)}catch(me){if($(ue),!(me instanceof B))throw me;ge(1,0)}}function om(r,a){var c=z();try{return _e(r)(a)}catch(d){if($(c),!(d instanceof B))throw d;ge(1,0)}}function lm(r,a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe,dt,st,Lt,xt,an,qt,un,Dt,Gi,Rm,Pm,Dm,Fm,Lm,Im,Um,Nm,Om,Bm,km,zm,Gm,Vm,Hm,Wm,$m,Xm,jm,qm,Ym,Km,Zm,Jm,Qm,eg,tg,ng,ig,rg,sg,ag,og,lg,cg,ug,dg,fg,hg,pg,mg,gg,_g,vg,xg,Sg,yg,Mg,Eg,bg,wg,Tg,Ag,Cg,Rg,Pg,Dg,Fg,Lg,Ig,Ug){var Ng=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe,dt,st,Lt,xt,an,qt,un,Dt,Gi,Rm,Pm,Dm,Fm,Lm,Im,Um,Nm,Om,Bm,km,zm,Gm,Vm,Hm,Wm,$m,Xm,jm,qm,Ym,Km,Zm,Jm,Qm,eg,tg,ng,ig,rg,sg,ag,og,lg,cg,ug,dg,fg,hg,pg,mg,gg,_g,vg,xg,Sg,yg,Mg,Eg,bg,wg,Tg,Ag,Cg,Rg,Pg,Dg,Fg,Lg,Ig,Ug)}catch(wc){if($(Ng),!(wc instanceof B))throw wc;ge(1,0)}}function cm(r,a,c,d,p,v,w,T,N,j,ee,ce,de,ue){var me=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de,ue)}catch(qe){if($(me),!(qe instanceof B))throw qe;ge(1,0)}}function um(r,a,c,d,p,v,w,T,N,j,ee){var ce=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee)}catch(de){if($(ce),!(de instanceof B))throw de;ge(1,0)}}function dm(r,a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe,dt,st,Lt){var xt=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe,dt,st,Lt)}catch(an){if($(xt),!(an instanceof B))throw an;ge(1,0)}}function fm(r,a,c){var d=z();try{return _e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;ge(1,0)}}function hm(r,a,c,d,p,v,w){var T=z();try{_e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function pm(r,a,c,d,p,v,w){var T=z();try{_e(r)(a,c,d,p,v,w)}catch(N){if($(T),!(N instanceof B))throw N;ge(1,0)}}function mm(r,a,c){var d=z();try{_e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;ge(1,0)}}function gm(r,a,c){var d=z();try{return _e(r)(a,c)}catch(p){if($(d),!(p instanceof B))throw p;ge(1,0)}}function _m(r,a,c,d,p,v){var w=z();try{return _e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function vm(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function xm(r,a,c,d){var p=z();try{_e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function Sm(r){var a=z();try{return _e(r)()}catch(c){if($(a),!(c instanceof B))throw c;return ge(1,0),0n}}function ym(r,a,c,d,p,v){var w=z();try{_e(r)(a,c,d,p,v)}catch(T){if($(w),!(T instanceof B))throw T;ge(1,0)}}function Mm(r,a,c,d,p,v,w,T,N,j,ee){var ce=z();try{return _e(r)(a,c,d,p,v,w,T,N,j,ee)}catch(de){if($(ce),!(de instanceof B))throw de;ge(1,0)}}function Em(r,a,c,d){var p=z();try{return _e(r)(a,c,d)}catch(v){if($(p),!(v instanceof B))throw v;ge(1,0)}}function bm(r,a,c,d,p,v,w,T,N,j,ee,ce){var de=z();try{return _e(r)(a,c,d,p,v,w,T,N,j,ee,ce)}catch(ue){if($(de),!(ue instanceof B))throw ue;ge(1,0)}}function wm(r,a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe){var dt=z();try{_e(r)(a,c,d,p,v,w,T,N,j,ee,ce,de,ue,me,qe)}catch(st){if($(dt),!(st instanceof B))throw st;ge(1,0)}}var bc;function Tm(){gc(),A()}function ka(){if(Pt>0){ut=ka;return}if(Tm(),nt(),Pt>0){ut=ka;return}function r(){P(!bc),bc=!0,t.calledRun=!0,!O&&(Nt(),Ue?.(t),t.onRuntimeInitialized?.(),J("onRuntimeInitialized"),P(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),V())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),F()}function Am(){var r=L,a=I,c=!1;L=I=d=>{c=!0};try{Na(0),["stdout","stderr"].forEach(d=>{var p=y.analyzePath("/dev/"+d);if(p){var v=p.object,w=v.rdev,T=Te.ttys[w];T?.output?.length&&(c=!0)}})}catch{}L=r,I=a,c&&Le("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Cm(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();J("preInit")}Cm(),ka(),ft?e=t:e=new Promise((r,a)=>{Ue=r,Ae=a});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){H(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const Gg="/demo/assets/mujoco-D9UjOFNX.wasm";var yn=Uint8Array,Mr=Uint16Array,Vg=Int32Array,Bu=new yn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ku=new yn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Hg=new yn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zu=function(i,e){for(var t=new Mr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Vg(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)s[o]=o-t[n]<<5|n;return{b:t,r:s}},Gu=zu(Bu,2),Vu=Gu.b,Wg=Gu.r;Vu[28]=258,Wg[258]=28;var $g=zu(ku,0),Xg=$g.b,Ao=new Mr(32768);for(var It=0;It<32768;++It){var Ei=(It&43690)>>1|(It&21845)<<1;Ei=(Ei&52428)>>2|(Ei&13107)<<2,Ei=(Ei&61680)>>4|(Ei&3855)<<4,Ao[It]=((Ei&65280)>>8|(Ei&255)<<8)>>1}var Jr=(function(i,e,t){for(var n=i.length,s=0,o=new Mr(e);s<n;++s)i[s]&&++o[i[s]-1];var l=new Mr(e);for(s=1;s<e;++s)l[s]=l[s-1]+o[s-1]<<1;var u;if(t){u=new Mr(1<<e);var h=15-e;for(s=0;s<n;++s)if(i[s])for(var f=s<<4|i[s],g=e-i[s],_=l[i[s]-1]++<<g,m=_|(1<<g)-1;_<=m;++_)u[Ao[_]>>h]=f}else for(u=new Mr(n),s=0;s<n;++s)i[s]&&(u[s]=Ao[l[i[s]-1]++]>>15-i[s]);return u}),ds=new yn(288);for(var It=0;It<144;++It)ds[It]=8;for(var It=144;It<256;++It)ds[It]=9;for(var It=256;It<280;++It)ds[It]=7;for(var It=280;It<288;++It)ds[It]=8;var Hu=new yn(32);for(var It=0;It<32;++It)Hu[It]=5;var jg=Jr(ds,9,1),qg=Jr(Hu,5,1),za=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Fn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Ga=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},Yg=function(i){return(i+7)/8|0},Kg=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new yn(i.subarray(e,t))},Zg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Nn=function(i,e,t){var n=new Error(e||Zg[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Nn),!t)throw n;return n},Jg=function(i,e,t,n){var s=i.length,o=0;if(!s||e.f&&!e.l)return t||new yn(0);var l=!t,u=l||e.i!=2,h=e.i;l&&(t=new yn(s*3));var f=function(je){var Mt=t.length;if(je>Mt){var ot=new yn(Math.max(Mt*2,je));ot.set(t),t=ot}},g=e.f||0,_=e.p||0,m=e.b||0,x=e.l,E=e.d,R=e.m,M=e.n,S=s*8;do{if(!x){g=Fn(i,_,1);var L=Fn(i,_+1,3);if(_+=3,L)if(L==1)x=jg,E=qg,R=9,M=5;else if(L==2){var P=Fn(i,_,31)+257,G=Fn(i,_+10,15)+4,A=P+Fn(i,_+5,31)+1;_+=14;for(var F=new yn(A),B=new yn(19),k=0;k<G;++k)B[Hg[k]]=Fn(i,_+k*3,7);_+=G*3;for(var q=za(B),J=(1<<q)-1,Y=Jr(B,q,1),k=0;k<A;){var ie=Y[Fn(i,_,J)];_+=ie&15;var I=ie>>4;if(I<16)F[k++]=I;else{var Z=0,ne=0;for(I==16?(ne=3+Fn(i,_,3),_+=2,Z=F[k-1]):I==17?(ne=3+Fn(i,_,7),_+=3):I==18&&(ne=11+Fn(i,_,127),_+=7);ne--;)F[k++]=Z}}var Se=F.subarray(0,P),pe=F.subarray(P);R=za(Se),M=za(pe),x=Jr(Se,R,1),E=Jr(pe,M,1)}else Nn(1);else{var I=Yg(_)+4,D=i[I-4]|i[I-3]<<8,O=I+D;if(O>s){h&&Nn(0);break}u&&f(m+D),t.set(i.subarray(I,O),m),e.b=m+=D,e.p=_=O*8,e.f=g;continue}if(_>S){h&&Nn(0);break}}u&&f(m+131072);for(var Re=(1<<R)-1,Ue=(1<<M)-1,Ae=_;;Ae=_){var Z=x[Ga(i,_)&Re],Xe=Z>>4;if(_+=Z&15,_>S){h&&Nn(0);break}if(Z||Nn(2),Xe<256)t[m++]=Xe;else if(Xe==256){Ae=_,x=null;break}else{var Ze=Xe-254;if(Xe>264){var k=Xe-257,Je=Bu[k];Ze=Fn(i,_,(1<<Je)-1)+Vu[k],_+=Je}var oe=E[Ga(i,_)&Ue],ve=oe>>4;oe||Nn(3),_+=oe&15;var pe=Xg[ve];if(ve>3){var Je=ku[ve];pe+=Ga(i,_)&(1<<Je)-1,_+=Je}if(_>S){h&&Nn(0);break}u&&f(m+131072);var re=m+Ze;if(m<pe){var ye=o-pe,$e=Math.min(pe,re);for(ye+m<0&&Nn(3);m<$e;++m)t[m]=n[ye+m]}for(;m<re;++m)t[m]=t[m-pe]}}e.l=x,e.p=Ae,e.b=m,e.f=g,x&&(g=1,e.m=R,e.d=E,e.n=M)}while(!g);return m!=t.length&&l?Kg(t,0,m):t.subarray(0,m)},Qg=new yn(0),e_=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Nn(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},t_=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};function n_(i,e){var t=e_(i);return t+8>i.length&&Nn(6,"invalid gzip data"),Jg(i.subarray(t,-8),{i:2},new yn(t_(i)),e)}var i_=typeof TextDecoder<"u"&&new TextDecoder,r_=0;try{i_.decode(Qg,{stream:!0}),r_=1}catch{}const Wu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const $u=([i,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(e).forEach(s=>{n.setAttribute(s,String(e[s]))}),t?.length&&t.forEach(s=>{const o=$u(s);n.appendChild(o)}),n},s_=(i,e={})=>{const n={...Wu,...e};return $u(["svg",n,i])};const a_=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const o_=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const l_=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const c_=i=>{const e=l_(i);return e.charAt(0).toUpperCase()+e.slice(1)};const u_=i=>Array.from(i.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),Ac=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",Cc=(i,{nameAttr:e,icons:t,attrs:n})=>{const s=i.getAttribute(e);if(s==null)return;const o=c_(s),l=t[o];if(!l)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const u=u_(i),h=a_(u)?{}:{"aria-hidden":"true"},f={...Wu,"data-lucide":s,...h,...n,...u},g=Ac(u),_=Ac(n),m=o_("lucide",`lucide-${s}`,...g,..._);m&&Object.assign(f,{class:m});const x=s_(l,f);return i.parentNode?.replaceChild(x,i)};const d_=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];const f_=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];const h_=[["path",{d:"m6 9 6 6 6-6"}]];const p_=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];const m_=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];const g_=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];const __=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];const v_=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];const x_=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const S_=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];const y_=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const M_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const E_=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];const b_=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const w_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];const T_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];const A_=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const Xu=({icons:i={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:s}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(l=>Cc(l,{nameAttr:e,icons:i,attrs:t})),s&&Array.from(n.querySelectorAll("template")).forEach(u=>Xu({icons:i,nameAttr:e,attrs:t,root:u.content,inTemplates:s})),e==="data-lucide"){const l=n.querySelectorAll("[icon-name]");l.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(l).forEach(u=>Cc(u,{nameAttr:"icon-name",icons:i,attrs:t})))}},C_={eval_every_n_laps:3,blend:[1,1,1,1],al_min:.3,al_max:1},R_={num_levels:30,t_min:1.5,sigma:1.5,temperature:1,alpha:.8,beta:.15},P_={sigmoid_temperature:2786.9996,sigmoid_offset:-2357.8374},D_={gate_target_s:5,T_p_lb:.5,dL_min:-30,dL_max:10,max_L:95,w1:.5,w2:.5,num_gates_update:6,alpha_fast:4,alpha_slow:1},F_={min_gate_s:.5},L_=7,tn={coaching:C_,belief:R_,l2c:P_,rbf:D_,gate_progress:F_,gate_timeout:L_},ju=tn,Qi={mia:"MIA",rbf:"RBF",l2c:"AI Coaching"},Er=(i,e,t)=>Math.min(t,Math.max(e,i)),Rc=i=>1/(1+Math.exp(-Er((i+tn.l2c.sigmoid_offset)/tn.l2c.sigmoid_temperature,-80,80)));class I_{constructor(e=12){this.levels=tn.belief.num_levels,this.probabilities=Array.from({length:e},()=>Array.from({length:this.levels},(t,n)=>n===0?.99:.01/(this.levels-1)))}update(e,t){if(!Number.isInteger(e)||!this.probabilities[e]||!Number.isFinite(t)||t<0)throw new Error("Invalid gate observation");const{t_min:n,sigma:s,temperature:o,alpha:l,beta:u}=tn.belief,h=this.probabilities[e],f=h.map((x,E)=>{const R=tn.gate_timeout-(tn.gate_timeout-n)*E/(this.levels-1);return Math.log(Math.max(x,1e-12))-.5*((t-R)/s)**2*o}),g=Math.max(...f),_=f.map(x=>Math.exp(x-g)),m=_.reduce((x,E)=>x+E,0);return this.probabilities[e]=_.map((x,E)=>l*x/m+u*h[E]+(1-l-u)/this.levels),this.probabilities[e]}level(e){const t=this.probabilities[e];return t.indexOf(Math.max(...t))}skill(e){return this.level(e)/(this.levels-1)}}function U_(i,e,t,n=12){const s=tn.rbf;if(t<s.T_p_lb)return e;if(!Number.isFinite(t)||!Number.isInteger(i)||i<1||e<0||e>1)throw new Error("Invalid fading observation");const o=t-s.gate_target_s*n,l=Er((o<=0?s.alpha_fast:s.alpha_slow)*o,s.dL_min,s.dL_max),u=12+Math.atanh(Er(s.max_L/50-1,-.9999,.9999))/-.165-1,h=i+u,f=50*(Math.tanh(-.165*(h-12))+1),g=Math.max(40*(Math.tanh(-.17*(h-12))+1)-5,0),_=50*(Math.tanh(-.175*(h-14.5))+1);return Er(Er(s.w1*(e*100+l)+s.w2*f,g,_),0,s.max_L)/100}class N_{constructor(e=12){this.gates=e,this.active=!1,this.recovery=!1,this.recoveryTarget=null,this.coachingLaps=0,this.passed=0}onBoundary(){this.active||(this.coachingLaps++,this.coachingLaps>tn.coaching.eval_every_n_laps&&(this.active=!0,this.passed=0,this.coachingLaps=0))}blend(e){return this.recovery?.95:this.active?tn.coaching.al_min:Er(e,tn.coaching.al_min,tn.coaching.al_max)}onPass(e,t,n){return this.active&&!this.recovery&&t!==null&&t>=tn.gate_progress.min_gate_s&&n.update(e,t),this.recovery&&e===this.recoveryTarget&&(this.recovery=!1,this.recoveryTarget=null),this.active&&!this.recovery&&++this.passed>=this.gates?(this.active=!1,this.passed=0,!0):!1}onFailure(e,t){!this.active||this.recovery||(t.update(e,tn.gate_timeout),this.recovery=!0,this.recoveryTarget=e)}}class O_{constructor(e,t=12){if(!Object.hasOwn(Qi,e))throw new Error("Invalid HCI method");this.method=e,this.gates=t,this.belief=new I_(t),this.evaluation=new N_(t),this.time=0,this.lastPass=null,this.lapStart=null,this.lapNumber=0,this.laps=0,this.lastLap=0,this.passes=0,this.failures=0,this.lapGates=new Set,this.rbfAlpha=tn.rbf.max_L/100,this.rbfUpdates=0,this.beliefUpdates=0}tick(e){this.time+=e}onPass(e){let t=this.lastPass===null?null:this.time-this.lastPass,n=!1;return e!==0&&this.lapStart!==null&&this.lapGates.add(e),e===0&&(this.lapStart===null||this.lapGates.size===this.gates-1)&&(this.lapStart!==null&&(this.lastLap=this.time-this.lapStart,this.laps++,n=!0),this.lapStart=this.time,this.lapGates.clear(),this.lapNumber++,this.evaluation.onBoundary(),t=0),this.evaluation.active&&!this.evaluation.recovery&&t!==null&&t>=tn.gate_progress.min_gate_s&&this.beliefUpdates++,this.evaluation.onPass(e,t,this.belief),this.passes++,this.lastPass=this.time,this.method==="rbf"&&!this.evaluation.active&&this.laps>0&&this.passes>this.gates&&this.passes%tn.rbf.num_gates_update===0&&(this.rbfAlpha=U_(this.lapNumber,this.rbfAlpha,this.lastLap,this.gates),this.rbfUpdates++),{lapComplete:n,lapSeconds:this.lastLap}}onFailure(e){this.evaluation.active&&!this.evaluation.recovery&&this.beliefUpdates++,this.evaluation.onFailure(e,this.belief),this.failures++,this.lastPass=null}snapshot(e){return{method:this.method,phase:this.evaluation.recovery?"recovery":this.evaluation.active?"evaluation":"coaching",time:this.time,lapTime:this.lapStart===null?this.time:this.time-this.lapStart,skillLevel:this.belief.level(e),skill:this.belief.skill(e),beliefUpdates:this.beliefUpdates,rbfAlpha:this.rbfAlpha,rbfUpdates:this.rbfUpdates,laps:this.laps,passes:this.passes,failures:this.failures}}}const On=(i,e=-1,t=1)=>Math.min(t,Math.max(e,i)),Qr=([i,e,t,n])=>[1-2*(t*t+n*n),2*(e*t-i*n),2*(e*n+i*t),2*(e*t+i*n),1-2*(e*e+n*n),2*(t*n-i*e),2*(e*n-i*t),2*(t*n+i*e),1-2*(e*e+t*t)],Pc=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]],Dc=(i,e)=>[i[0]*e[0]+i[3]*e[1]+i[6]*e[2],i[1]*e[0]+i[4]*e[1]+i[7]*e[2],i[2]*e[0]+i[5]*e[1]+i[8]*e[2]];class B_{constructor(e){this.source=e,this.metadata=e.metadata}predict(e,t=!0){let n=Float32Array.from(e);if(n.length!==this.source.w0[0].length||!n.every(Number.isFinite))throw new Error("Invalid policy observation");for(let s=0;s<3;s++){const o=this.source[`w${s}`],l=this.source[`b${s}`],u=new Float32Array(o.length);for(let h=0;h<o.length;h++){let f=l[h];for(let g=0;g<n.length;g++)f+=o[h][g]*n[g];u[h]=s<2&&f<0?Math.expm1(f):f}n=u}return Array.from(n,s=>t?On(s):s)}}class k_{constructor(e,t,n,s){this.mj=e;const o=new e.MjVFS;o.addBuffer("scene.mjb",t),this.model=e.MjModel.from_binary_path("scene.mjb",o),o.delete(),this.data=new e.MjData(this.model),this.contactForce=new e.DoubleBuffer(6);const l=this.model.body("drone");this.bodyId=l.id,l.delete();const u=this.model.geom("drone_collision");this.collisionId=u.id,u.delete(),this.gates=n.gates.map(h=>h.map(Math.fround)),this.policies=Object.fromEntries(Object.entries(s).map(([h,f])=>[h,new B_(f)])),this.weight=this.model.body_mass.reduce((h,f)=>h+f,0)*9.81,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.mode="expert",this.alpha=.8,this.skill=0,this.effectiveAlpha=1,this.coaching=null,this.reset()}get position(){return Array.from(this.data.qpos.subarray(0,3))}get quaternion(){return Array.from(this.data.qpos.subarray(3,7))}setMode(e){if(Object.hasOwn(Qi,e)){this.startBaseline(e);return}if(!["expert","assisted","manual","coach","tracking"].includes(e))throw new Error("Invalid flight mode");this.mode=e,this.coaching=null}startBaseline(e){const t=new O_(e,this.gates.length);this.mode=e,this.coaching=t,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.effectiveAlpha=e==="rbf"?ju.rbf.max_L/100:1,this.reset(),this.lastAction=this.action()}recover(){this.reset((this.gate+this.gates.length-1)%this.gates.length)}gateCoordinates(e,t=this.gate){const n=this.gates[t],s=e[0]-n[0],o=e[1]-n[1],l=Math.cos(n[5]),u=Math.sin(n[5]);return[l*s+u*o,-u*s+l*o,e[2]-n[2]]}reset(e=0,t=0){const n=this.mj,s=this.data,o=this.gates[e];n.mj_resetData(this.model,s),this.gate=e,s.qpos.set([o[0]+6*Math.cos(o[5]),o[1]+6*Math.sin(o[5]),o[2]],0);let l=o[5]+Math.PI+t;l=((l+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,s.qpos.set([Math.cos(l/2),0,0,Math.sin(l/2)],3),s.qvel.set([200,-200,200,-200],6),this.motors=[0,0,0,0],this.integral=[0,0,0],this.previousOmega=[0,0,0],this.steps=0,this.gatesPassed=0,this.lastGateTime=0,this.crashes=0,this.lapStart=null,n.mj_forward(this.model,s),this.previousPosition=this.position,this.cachedGate=this.gateCoordinates(this.position),this.lastAction=[-1+2/3.15,0,0,0],this.lastHuman=[0,0,0,0]}observation(){const e=this.data.qvel;return Float32Array.from([...e.subarray(3,6),...this.position,...Dc(Qr(this.quaternion),e.subarray(0,3)),...this.quaternion,...this.cachedGate,this.gates[this.gate][5]])}controller(e){const t=Array.from(this.data.qvel.subarray(3,6)),n=Dc(Qr(this.quaternion),this.data.qvel.subarray(0,3)),s=[250,250,120],o=[500,500,16.7],l=[2.5,2.5,0],u=[33.3,33.3,166.7],h=[16572e-9,16656e-9,29262e-9],f=t.map((D,O)=>{const P=e[O+1]*(O===2?200:100)*Math.PI/180-D;this.integral[O]=On(this.integral[O]+P/250,-u[O],u[O]);const G=Math.abs(this.previousOmega[O])<1e-4?D:this.previousOmega[O];return h[O]*(s[O]*P+o[O]*this.integral[O]-l[O]*(D-G)*250)});this.previousOmega=t;const g=(e[0]+1)/2*this.weight*3.15,_=.043*Math.sqrt(2)/2,m=78e-11/23e-9,[x,E,R]=[f[0]/_,f[1]/_,f[2]/m],M=[g+x-E+R,g-x-E-R,g-x+E+R,g+x+E-R].map(D=>D/(4*23e-9));for(let D=0;D<4;D++){const O=On(Math.sign(M[D])*Math.sqrt(Math.abs(M[D])),0,2500);this.motors[D]=On(this.motors[D]+(O-this.motors[D])*.004/.005,0,2500)}const S=this.motors.map(D=>23e-9*D*D),L=this.motors.reduce((D,O)=>D+O,0),I=n.map((D,O)=>-L*[91785e-11,91785e-11,10311e-10][O]*D);return I[2]+=S.reduce((D,O)=>D+O,0),{force:I,moment:[_*(S[0]-S[1]-S[2]+S[3]),_*(-S[0]-S[1]+S[2]+S[3]),m*(S[0]-S[1]+S[2]-S[3])]}}action(e=[-1+2/3.15,0,0,0]){const t=this.observation(),n=this.policies.expert.predict(t),s=this.lastHuman;if(this.lastHuman=[...e],this.mode==="expert")return this.effectiveAlpha=1,n;if(this.mode==="manual")return this.effectiveAlpha=0,e.map(l=>On(l));if(this.mode==="tracking")return this.effectiveAlpha=1,this.policies.tracking.predict([...t,e[1],e[3]]);if(this.coaching){const l=this.mode==="mia"?this.policies.tracking.predict([...t,s[1],s[3]]):n;let u=this.mode==="rbf"?this.coaching.rbfAlpha:1;return this.mode==="l2c"&&(u=Rc(this.policies.coach.predict([...t,this.coaching.belief.skill(this.gate)],!1)[0])),this.effectiveAlpha=this.coaching.evaluation.blend(u),l.map((h,f)=>f===1||f===3?On(this.effectiveAlpha*h+(1-this.effectiveAlpha)*e[f]):h)}let o=this.alpha;if(this.mode==="coach"){const l=this.policies.coach.predict([...t,this.skill],!1)[0];o=Rc(l)}return this.effectiveAlpha=On(o,.3,1),n.map((l,u)=>u===1||u===3?On(this.effectiveAlpha*l+(1-this.effectiveAlpha)*e[u]):l)}step(e){if(e.length!==4||!e.every(Number.isFinite))throw new Error("Invalid action");e=Array.from(e,m=>On(m)),this.lastAction=e;const t=this.data,n=this.mj;for(let m=0;m<5;m++){const{force:x,moment:E}=this.controller(e),R=Qr(this.quaternion);t.xfrc_applied.fill(0),t.xfrc_applied.set([...Pc(R,x),...Pc(R,E)],this.bodyId*6),n.mj_step(this.model,t),n.mj_forward(this.model,t)}this.steps++,this.coaching?.tick(.02);const s=this.steps*.02,o=this.position;this.cachedGate=this.gateCoordinates(o);const l=this.crashes?"Contact":o[2]>6||o[2]<.1&&s>1.5?"Altitude":s-this.lastGateTime>7?"Gate timeout":"",u=this.gateCoordinates(this.previousPosition),h=this.cachedGate,f=h[0]-u[0],g=-u[0]/(f+1e-8),_=f<-1e-6&&Math.hypot(...o.map((m,x)=>m-this.previousPosition[x]))>1e-6&&g>=0&&g<=1&&Math.abs(u[1]+g*(h[1]-u[1]))<=.5&&Math.abs(u[2]+g*(h[2]-u[2]))<=.5;if(_){const m=this.coaching?.onPass(this.gate);this.gate=(this.gate+1)%12,this.totalGates++,this.gatesPassed++,this.lastGateTime=s,m?.lapComplete&&(this.lastLap=m.lapSeconds,this.laps=this.coaching.laps,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap)),!this.coaching&&this.gate===1&&(this.lapStart!==null&&(this.lastLap=s-this.lapStart,this.laps++,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap)),this.lapStart=s)}if(this.previousPosition=o,this.steps>100&&t.ncon){const m=t.contact;for(let x=0;x<t.ncon;x++){const E=m.get(x),R=E.geom1===this.collisionId||E.geom2===this.collisionId;if(E.delete(),R){n.mj_contactForce(this.model,t,x,this.contactForce);const M=this.contactForce.GetView();this.crashes+=Math.hypot(...M.subarray(0,3))>1e-8?1:0;break}}m.delete()}return l&&(this.failures++,this.coaching?.onFailure(this.gate)),{crossed:_,failed:!!l,cause:l}}snapshot(){return{mode:this.mode,steps:this.steps,position:this.position,gates:this.totalGates,target:this.gate,laps:this.laps,failures:this.failures,alpha:this.effectiveAlpha,coaching:this.coaching?.snapshot(this.gate)??null}}dispose(){this.contactForce.delete(),this.data.delete(),this.model.delete()}}const yl="183",z_=0,Fc=1,G_=2,es=1,V_=2,jr=3,Fi=0,gn=1,Mn=2,pi=0,br=1,Lc=2,Ic=3,Uc=4,H_=5,Yi=100,W_=101,$_=102,X_=103,j_=104,q_=200,Y_=201,K_=202,Z_=203,Co=204,Ro=205,J_=206,Q_=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,av=214,Po=0,Do=1,Fo=2,Ar=3,Lo=4,Io=5,Uo=6,No=7,qu=0,ov=1,lv=2,ei=0,Yu=1,Ku=2,Zu=3,Ml=4,Ju=5,Qu=6,ed=7,td=300,er=301,Cr=302,Va=303,Ha=304,ga=306,rs=1e3,fi=1001,Oo=1002,nn=1003,cv=1004,Bs=1005,cn=1006,Wa=1007,Zi=1008,En=1009,nd=1010,id=1011,ss=1012,El=1013,ni=1014,Zn=1015,gi=1016,bl=1017,wl=1018,as=1020,rd=35902,sd=35899,ad=1021,od=1022,kn=1023,_i=1026,Ji=1027,ld=1028,Tl=1029,Rr=1030,Al=1031,Cl=1033,aa=33776,oa=33777,la=33778,ca=33779,Bo=35840,ko=35841,zo=35842,Go=35843,Vo=36196,Ho=37492,Wo=37496,$o=37488,Xo=37489,jo=37490,qo=37491,Yo=37808,Ko=37809,Zo=37810,Jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,rl=37817,sl=37818,al=37819,ol=37820,ll=37821,cl=36492,ul=36494,dl=36495,fl=36283,hl=36284,pl=36285,ml=36286,uv=3200,cd=0,dv=1,Pi="",en="srgb",Pr="srgb-linear",fa="linear",Rt="srgb",ar=7680,Nc=519,fv=512,hv=513,pv=514,Rl=515,mv=516,gv=517,Pl=518,_v=519,Oc=35044,Bc="300 es",Jn=2e3,os=2001;function vv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xv(){const i=ls("canvas");return i.style.display="block",i}const kc={};function zc(...i){const e="THREE."+i.shift();console.log(e,...i)}function ud(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=ud(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function St(...i){i=ud(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ha(...i){const e=i.join(" ");e in kc||(kc[e]=!0,et(...i))}function Sv(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const yv={[Po]:Do,[Fo]:Uo,[Lo]:No,[Ar]:Io,[Do]:Po,[Uo]:Fo,[No]:Lo,[Io]:Ar};class Fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,pa=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Mv(i,e){return(i%e+e)%e}function Xa(i,e,t){return(1-t)*i+t*e}function zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,u){let h=n[s+0],f=n[s+1],g=n[s+2],_=n[s+3],m=o[l+0],x=o[l+1],E=o[l+2],R=o[l+3];if(_!==R||h!==m||f!==x||g!==E){let M=h*m+f*x+g*E+_*R;M<0&&(m=-m,x=-x,E=-E,R=-R,M=-M);let S=1-u;if(M<.9995){const L=Math.acos(M),I=Math.sin(L);S=Math.sin(S*L)/I,u=Math.sin(u*L)/I,h=h*S+m*u,f=f*S+x*u,g=g*S+E*u,_=_*S+R*u}else{h=h*S+m*u,f=f*S+x*u,g=g*S+E*u,_=_*S+R*u;const L=1/Math.sqrt(h*h+f*f+g*g+_*_);h*=L,f*=L,g*=L,_*=L}}e[t]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,o,l){const u=n[s],h=n[s+1],f=n[s+2],g=n[s+3],_=o[l],m=o[l+1],x=o[l+2],E=o[l+3];return e[t]=u*E+g*_+h*x-f*m,e[t+1]=h*E+g*m+f*_-u*x,e[t+2]=f*E+g*x+u*m-h*_,e[t+3]=g*E-u*_-h*m-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,h=Math.sin,f=u(n/2),g=u(s/2),_=u(o/2),m=h(n/2),x=h(s/2),E=h(o/2);switch(l){case"XYZ":this._x=m*g*_+f*x*E,this._y=f*x*_-m*g*E,this._z=f*g*E+m*x*_,this._w=f*g*_-m*x*E;break;case"YXZ":this._x=m*g*_+f*x*E,this._y=f*x*_-m*g*E,this._z=f*g*E-m*x*_,this._w=f*g*_+m*x*E;break;case"ZXY":this._x=m*g*_-f*x*E,this._y=f*x*_+m*g*E,this._z=f*g*E+m*x*_,this._w=f*g*_-m*x*E;break;case"ZYX":this._x=m*g*_-f*x*E,this._y=f*x*_+m*g*E,this._z=f*g*E-m*x*_,this._w=f*g*_+m*x*E;break;case"YZX":this._x=m*g*_+f*x*E,this._y=f*x*_+m*g*E,this._z=f*g*E-m*x*_,this._w=f*g*_-m*x*E;break;case"XZY":this._x=m*g*_-f*x*E,this._y=f*x*_-m*g*E,this._z=f*g*E+m*x*_,this._w=f*g*_+m*x*E;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],u=t[5],h=t[9],f=t[2],g=t[6],_=t[10],m=n+u+_;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(g-h)*x,this._y=(o-f)*x,this._z=(l-s)*x}else if(n>u&&n>_){const x=2*Math.sqrt(1+n-u-_);this._w=(g-h)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(o+f)/x}else if(u>_){const x=2*Math.sqrt(1+u-n-_);this._w=(o-f)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+_-n-u);this._w=(l-s)/x,this._x=(o+f)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,u=t._x,h=t._y,f=t._z,g=t._w;return this._x=n*g+l*u+s*f-o*h,this._y=s*g+l*h+o*u-n*f,this._z=o*g+l*f+n*h-s*u,this._w=l*g-n*u-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,o=e._z,l=e._w,u=this.dot(e);u<0&&(n=-n,s=-s,o=-o,l=-l,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),g=Math.sin(f);h=Math.sin(h*f)/g,t=Math.sin(t*f)/g,this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+l*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,u=e.z,h=e.w,f=2*(l*s-u*n),g=2*(u*t-o*s),_=2*(o*n-l*t);return this.x=t+h*f+l*_-u*g,this.y=n+h*g+u*f-o*_,this.z=s+h*_+o*g-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*l-n*h,this.z=n*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new K,Gc=new Qn;class rt{constructor(e,t,n,s,o,l,u,h,f){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,h,f)}set(e,t,n,s,o,l,u,h,f){const g=this.elements;return g[0]=e,g[1]=s,g[2]=u,g[3]=t,g[4]=o,g[5]=h,g[6]=n,g[7]=l,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[3],h=n[6],f=n[1],g=n[4],_=n[7],m=n[2],x=n[5],E=n[8],R=s[0],M=s[3],S=s[6],L=s[1],I=s[4],D=s[7],O=s[2],P=s[5],G=s[8];return o[0]=l*R+u*L+h*O,o[3]=l*M+u*I+h*P,o[6]=l*S+u*D+h*G,o[1]=f*R+g*L+_*O,o[4]=f*M+g*I+_*P,o[7]=f*S+g*D+_*G,o[2]=m*R+x*L+E*O,o[5]=m*M+x*I+E*P,o[8]=m*S+x*D+E*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],h=e[6],f=e[7],g=e[8];return t*l*g-t*u*f-n*o*g+n*u*h+s*o*f-s*l*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],h=e[6],f=e[7],g=e[8],_=g*l-u*f,m=u*h-g*o,x=f*o-l*h,E=t*_+n*m+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=_*R,e[1]=(s*f-g*n)*R,e[2]=(u*n-s*l)*R,e[3]=m*R,e[4]=(g*t-s*h)*R,e[5]=(s*o-u*t)*R,e[6]=x*R,e[7]=(n*h-f*t)*R,e[8]=(l*t-n*o)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,u){const h=Math.cos(o),f=Math.sin(o);return this.set(n*h,n*f,-n*(h*l+f*u)+l+e,-s*f,s*h,-s*(-f*l+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(qa.makeScale(e,t)),this}rotate(e){return this.premultiply(qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new rt,Vc=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ev(){const i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(s,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Rt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Rt&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,l){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ha("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ha("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:e,whitePoint:n,transfer:fa,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}const yt=Ev();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let or;class bv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=ls("canvas")),or.width=e.width,or.height=e.height;const s=or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=mi(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wv=0;class Dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(Ya(s[l].image)):o.push(Ya(s[l]))}else o=Ya(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let Tv=0;const Ka=new K;class rn extends Fr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=fi,s=fi,o=cn,l=Zi,u=kn,h=En,f=rn.DEFAULT_ANISOTROPY,g=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=fs(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==td)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=td;rn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,s=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const h=e.elements,f=h[0],g=h[4],_=h[8],m=h[1],x=h[5],E=h[9],R=h[2],M=h[6],S=h[10];if(Math.abs(g-m)<.01&&Math.abs(_-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+m)<.1&&Math.abs(_+R)<.1&&Math.abs(E+M)<.1&&Math.abs(f+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(f+1)/2,D=(x+1)/2,O=(S+1)/2,P=(g+m)/4,G=(_+R)/4,A=(E+M)/4;return I>D&&I>O?I<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(I),s=P/n,o=G/n):D>O?D<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(D),n=P/s,o=A/s):O<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(O),n=G/o,s=A/o),this.set(n,s,o,t),this}let L=Math.sqrt((M-E)*(M-E)+(_-R)*(_-R)+(m-g)*(m-g));return Math.abs(L)<.001&&(L=1),this.x=(M-E)/L,this.y=(_-R)/L,this.z=(m-g)/L,this.w=Math.acos((f+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Av extends Fr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},o=new rn(s),l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Av{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dd extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cv extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ut{constructor(e,t,n,s,o,l,u,h,f,g,_,m,x,E,R,M){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,h,f,g,_,m,x,E,R,M)}set(e,t,n,s,o,l,u,h,f,g,_,m,x,E,R,M){const S=this.elements;return S[0]=e,S[4]=t,S[8]=n,S[12]=s,S[1]=o,S[5]=l,S[9]=u,S[13]=h,S[2]=f,S[6]=g,S[10]=_,S[14]=m,S[3]=x,S[7]=E,S[11]=R,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),o=1/lr.setFromMatrixColumn(e,1).length(),l=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),h=Math.cos(s),f=Math.sin(s),g=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const m=l*g,x=l*_,E=u*g,R=u*_;t[0]=h*g,t[4]=-h*_,t[8]=f,t[1]=x+E*f,t[5]=m-R*f,t[9]=-u*h,t[2]=R-m*f,t[6]=E+x*f,t[10]=l*h}else if(e.order==="YXZ"){const m=h*g,x=h*_,E=f*g,R=f*_;t[0]=m+R*u,t[4]=E*u-x,t[8]=l*f,t[1]=l*_,t[5]=l*g,t[9]=-u,t[2]=x*u-E,t[6]=R+m*u,t[10]=l*h}else if(e.order==="ZXY"){const m=h*g,x=h*_,E=f*g,R=f*_;t[0]=m-R*u,t[4]=-l*_,t[8]=E+x*u,t[1]=x+E*u,t[5]=l*g,t[9]=R-m*u,t[2]=-l*f,t[6]=u,t[10]=l*h}else if(e.order==="ZYX"){const m=l*g,x=l*_,E=u*g,R=u*_;t[0]=h*g,t[4]=E*f-x,t[8]=m*f+R,t[1]=h*_,t[5]=R*f+m,t[9]=x*f-E,t[2]=-f,t[6]=u*h,t[10]=l*h}else if(e.order==="YZX"){const m=l*h,x=l*f,E=u*h,R=u*f;t[0]=h*g,t[4]=R-m*_,t[8]=E*_+x,t[1]=_,t[5]=l*g,t[9]=-u*g,t[2]=-f*g,t[6]=x*_+E,t[10]=m-R*_}else if(e.order==="XZY"){const m=l*h,x=l*f,E=u*h,R=u*f;t[0]=h*g,t[4]=-_,t[8]=f*g,t[1]=m*_+R,t[5]=l*g,t[9]=x*_-E,t[2]=E*_-x,t[6]=u*g,t[10]=R*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rv,e,Pv)}lookAt(e,t,n){const s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),bi.crossVectors(n,vn),bi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),bi.crossVectors(n,vn)),bi.normalize(),ks.crossVectors(vn,bi),s[0]=bi.x,s[4]=ks.x,s[8]=vn.x,s[1]=bi.y,s[5]=ks.y,s[9]=vn.y,s[2]=bi.z,s[6]=ks.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[4],h=n[8],f=n[12],g=n[1],_=n[5],m=n[9],x=n[13],E=n[2],R=n[6],M=n[10],S=n[14],L=n[3],I=n[7],D=n[11],O=n[15],P=s[0],G=s[4],A=s[8],F=s[12],B=s[1],k=s[5],q=s[9],J=s[13],Y=s[2],ie=s[6],Z=s[10],ne=s[14],Se=s[3],pe=s[7],Re=s[11],Ue=s[15];return o[0]=l*P+u*B+h*Y+f*Se,o[4]=l*G+u*k+h*ie+f*pe,o[8]=l*A+u*q+h*Z+f*Re,o[12]=l*F+u*J+h*ne+f*Ue,o[1]=g*P+_*B+m*Y+x*Se,o[5]=g*G+_*k+m*ie+x*pe,o[9]=g*A+_*q+m*Z+x*Re,o[13]=g*F+_*J+m*ne+x*Ue,o[2]=E*P+R*B+M*Y+S*Se,o[6]=E*G+R*k+M*ie+S*pe,o[10]=E*A+R*q+M*Z+S*Re,o[14]=E*F+R*J+M*ne+S*Ue,o[3]=L*P+I*B+D*Y+O*Se,o[7]=L*G+I*k+D*ie+O*pe,o[11]=L*A+I*q+D*Z+O*Re,o[15]=L*F+I*J+D*ne+O*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],u=e[5],h=e[9],f=e[13],g=e[2],_=e[6],m=e[10],x=e[14],E=e[3],R=e[7],M=e[11],S=e[15],L=h*x-f*m,I=u*x-f*_,D=u*m-h*_,O=l*x-f*g,P=l*m-h*g,G=l*_-u*g;return t*(R*L-M*I+S*D)-n*(E*L-M*O+S*P)+s*(E*I-R*O+S*G)-o*(E*D-R*P+M*G)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],h=e[6],f=e[7],g=e[8],_=e[9],m=e[10],x=e[11],E=e[12],R=e[13],M=e[14],S=e[15],L=t*u-n*l,I=t*h-s*l,D=t*f-o*l,O=n*h-s*u,P=n*f-o*u,G=s*f-o*h,A=g*R-_*E,F=g*M-m*E,B=g*S-x*E,k=_*M-m*R,q=_*S-x*R,J=m*S-x*M,Y=L*J-I*q+D*k+O*B-P*F+G*A;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/Y;return e[0]=(u*J-h*q+f*k)*ie,e[1]=(s*q-n*J-o*k)*ie,e[2]=(R*G-M*P+S*O)*ie,e[3]=(m*P-_*G-x*O)*ie,e[4]=(h*B-l*J-f*F)*ie,e[5]=(t*J-s*B+o*F)*ie,e[6]=(M*D-E*G-S*I)*ie,e[7]=(g*G-m*D+x*I)*ie,e[8]=(l*q-u*B+f*A)*ie,e[9]=(n*B-t*q-o*A)*ie,e[10]=(E*P-R*D+S*L)*ie,e[11]=(_*D-g*P-x*L)*ie,e[12]=(u*F-l*k-h*A)*ie,e[13]=(t*k-n*F+s*A)*ie,e[14]=(R*I-E*O-M*L)*ie,e[15]=(g*O-_*I+m*L)*ie,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,u=e.y,h=e.z,f=o*l,g=o*u;return this.set(f*l+n,f*u-s*h,f*h+s*u,0,f*u+s*h,g*u+n,g*h-s*l,0,f*h-s*u,g*h+s*l,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,u=t._z,h=t._w,f=o+o,g=l+l,_=u+u,m=o*f,x=o*g,E=o*_,R=l*g,M=l*_,S=u*_,L=h*f,I=h*g,D=h*_,O=n.x,P=n.y,G=n.z;return s[0]=(1-(R+S))*O,s[1]=(x+D)*O,s[2]=(E-I)*O,s[3]=0,s[4]=(x-D)*P,s[5]=(1-(m+S))*P,s[6]=(M+L)*P,s[7]=0,s[8]=(E+I)*G,s[9]=(M-L)*G,s[10]=(1-(m+R))*G,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return n.set(1,1,1),t.identity(),this;let l=lr.set(s[0],s[1],s[2]).length();const u=lr.set(s[4],s[5],s[6]).length(),h=lr.set(s[8],s[9],s[10]).length();o<0&&(l=-l),Ln.copy(this);const f=1/l,g=1/u,_=1/h;return Ln.elements[0]*=f,Ln.elements[1]*=f,Ln.elements[2]*=f,Ln.elements[4]*=g,Ln.elements[5]*=g,Ln.elements[6]*=g,Ln.elements[8]*=_,Ln.elements[9]*=_,Ln.elements[10]*=_,t.setFromRotationMatrix(Ln),n.x=l,n.y=u,n.z=h,this}makePerspective(e,t,n,s,o,l,u=Jn,h=!1){const f=this.elements,g=2*o/(t-e),_=2*o/(n-s),m=(t+e)/(t-e),x=(n+s)/(n-s);let E,R;if(h)E=o/(l-o),R=l*o/(l-o);else if(u===Jn)E=-(l+o)/(l-o),R=-2*l*o/(l-o);else if(u===os)E=-l/(l-o),R=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=g,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=_,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=E,f[14]=R,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,o,l,u=Jn,h=!1){const f=this.elements,g=2/(t-e),_=2/(n-s),m=-(t+e)/(t-e),x=-(n+s)/(n-s);let E,R;if(h)E=1/(l-o),R=l/(l-o);else if(u===Jn)E=-2/(l-o),R=-(l+o)/(l-o);else if(u===os)E=-1/(l-o),R=-o/(l-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=g,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=_,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=E,f[14]=R,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const lr=new K,Ln=new Ut,Rv=new K(0,0,0),Pv=new K(1,1,1),bi=new K,ks=new K,vn=new K,Wc=new Ut,$c=new Qn;class ii{constructor(e=0,t=0,n=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],h=s[1],f=s[5],g=s[9],_=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-pt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-g,x),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $c.setFromEuler(this),this.setFromQuaternion($c,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dv=0;const Xc=new K,cr=new Qn,ai=new Ut,zs=new K,Gr=new K,Fv=new K,Lv=new Qn,jc=new K(1,0,0),qc=new K(0,1,0),Yc=new K(0,0,1),Kc={type:"added"},Iv={type:"removed"},ur={type:"childadded",child:null},Za={type:"childremoved",child:null};class Yt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new K,t=new ii,n=new Qn,s=new K(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new rt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(Yc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(Yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Gr,zs,this.up):ai.lookAt(zs,Gr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(ai),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kc),ur.child=e,this.dispatchEvent(ur),ur.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iv),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kc),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Fv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*s,o[13]+=n-o[1]*t-o[5]*n-o[9]*s,o[14]+=s-o[2]*t-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,g=h.length;f<g;f++){const _=h[f];o(e.shapes,_)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=l(e.geometries),h=l(e.materials),f=l(e.textures),g=l(e.images),_=l(e.shapes),m=l(e.skeletons),x=l(e.animations),E=l(e.nodes);u.length>0&&(n.geometries=u),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),g.length>0&&(n.images=g),_.length>0&&(n.shapes=_),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),E.length>0&&(n.nodes=E)}return n.object=s,n;function l(u){const h=[];for(const f in u){const g=u[f];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new K(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qr extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const R of e.hand.values()){const M=t.getJointPose(R,n),S=this._getHandJoint(f,R);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],m=g.position.distanceTo(_.position),x=.02,E=.005;f.inputState.pinching&&m>x+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=x-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=Mv(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=Qa(l,o,e+1/3),this.g=Qa(l,o,e),this.b=Qa(l,o,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(o){o!==void 0&&parseFloat(o)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return yt.workingToColorSpace(ln.copy(this),e),Math.round(pt(ln.r*255,0,255))*65536+Math.round(pt(ln.g*255,0,255))*256+Math.round(pt(ln.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(ln.copy(this),t);const n=ln.r,s=ln.g,o=ln.b,l=Math.max(n,s,o),u=Math.min(n,s,o);let h,f;const g=(u+l)/2;if(u===l)h=0,f=0;else{const _=l-u;switch(f=g<=.5?_/(l+u):_/(2-l-u),l){case n:h=(s-o)/_+(s<o?6:0);break;case s:h=(o-n)/_+2;break;case o:h=(n-s)/_+4;break}h/=6}return e.h=h,e.s=f,e.l=g,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=en){yt.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,s=ln.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Gs);const n=Xa(wi.h,Gs.h,t),s=Xa(wi.s,Gs.s,t),o=Xa(wi.l,Gs.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new gt;gt.NAMES=fd;class Nv extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const In=new K,oi=new K,eo=new K,li=new K,dr=new K,fr=new K,Zc=new K,to=new K,no=new K,io=new K,ro=new zt,so=new zt,ao=new zt;class Bn{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),In.subVectors(e,t),s.cross(In);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){In.subVectors(s,t),oi.subVectors(n,t),eo.subVectors(e,t);const l=In.dot(In),u=In.dot(oi),h=In.dot(eo),f=oi.dot(oi),g=oi.dot(eo),_=l*f-u*u;if(_===0)return o.set(0,0,0),null;const m=1/_,x=(f*h-u*g)*m,E=(l*g-u*h)*m;return o.set(1-x-E,E,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,s,o,l,u,h){return this.getBarycoord(e,t,n,s,li)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,li.x),h.addScaledVector(l,li.y),h.addScaledVector(u,li.z),h)}static getInterpolatedAttribute(e,t,n,s,o,l){return ro.setScalar(0),so.setScalar(0),ao.setScalar(0),ro.fromBufferAttribute(e,t),so.fromBufferAttribute(e,n),ao.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(ro,o.x),l.addScaledVector(so,o.y),l.addScaledVector(ao,o.z),l}static isFrontFacing(e,t,n,s){return In.subVectors(n,t),oi.subVectors(e,t),In.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),In.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,u;dr.subVectors(s,n),fr.subVectors(o,n),to.subVectors(e,n);const h=dr.dot(to),f=fr.dot(to);if(h<=0&&f<=0)return t.copy(n);no.subVectors(e,s);const g=dr.dot(no),_=fr.dot(no);if(g>=0&&_<=g)return t.copy(s);const m=h*_-g*f;if(m<=0&&h>=0&&g<=0)return l=h/(h-g),t.copy(n).addScaledVector(dr,l);io.subVectors(e,o);const x=dr.dot(io),E=fr.dot(io);if(E>=0&&x<=E)return t.copy(o);const R=x*f-h*E;if(R<=0&&f>=0&&E<=0)return u=f/(f-E),t.copy(n).addScaledVector(fr,u);const M=g*E-x*_;if(M<=0&&_-g>=0&&x-E>=0)return Zc.subVectors(o,s),u=(_-g)/(_-g+(x-E)),t.copy(s).addScaledVector(Zc,u);const S=1/(M+R+m);return l=R*S,u=m*S,t.copy(n).addScaledVector(dr,l).addScaledVector(fr,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class tr{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Un):Un.fromBufferAttribute(o,l),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Hs.subVectors(this.max,Vr),hr.subVectors(e.a,Vr),pr.subVectors(e.b,Vr),mr.subVectors(e.c,Vr),Ti.subVectors(pr,hr),Ai.subVectors(mr,pr),Vi.subVectors(hr,mr);let t=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Vi.z,Vi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Vi.z,0,-Vi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Vi.y,Vi.x,0];return!oo(t,hr,pr,mr,Hs)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,hr,pr,mr,Hs))?!1:(Ws.crossVectors(Ti,Ai),t=[Ws.x,Ws.y,Ws.z],oo(t,hr,pr,mr,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new K,new K,new K,new K,new K,new K,new K,new K],Un=new K,Vs=new tr,hr=new K,pr=new K,mr=new K,Ti=new K,Ai=new K,Vi=new K,Vr=new K,Hs=new K,Ws=new K,Hi=new K;function oo(i,e,t,n,s){for(let o=0,l=i.length-3;o<=l;o+=3){Hi.fromArray(i,o);const u=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),h=e.dot(Hi),f=t.dot(Hi),g=n.dot(Hi);if(Math.max(-Math.max(h,f,g),Math.min(h,f,g))>u)return!1}return!0}const Vt=new K,$s=new Et;let Ov=0;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ov++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),s=mn(s,this.array),o=mn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class hd extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pd extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bv=new tr,Hr=new K,lo=new K;class Ll{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bv.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(lo)),this.expandByPoint(Hr.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kv=0;const An=new Ut,co=new Yt,gr=new K,xn=new tr,Wr=new tr,Jt=new K;class Rn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vv(e)?pd:hd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new rt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new pn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];xn.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Wr.setFromBufferAttribute(u),this.morphTargetsRelative?(Jt.addVectors(xn.min,Wr.min),xn.expandByPoint(Jt),Jt.addVectors(xn.max,Wr.max),xn.expandByPoint(Jt)):(xn.expandByPoint(Wr.min),xn.expandByPoint(Wr.max))}xn.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)Jt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],h=this.morphTargetsRelative;for(let f=0,g=u.count;f<g;f++)Jt.fromBufferAttribute(u,f),h&&(gr.fromBufferAttribute(e,f),Jt.add(gr)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],h=[];for(let A=0;A<n.count;A++)u[A]=new K,h[A]=new K;const f=new K,g=new K,_=new K,m=new Et,x=new Et,E=new Et,R=new K,M=new K;function S(A,F,B){f.fromBufferAttribute(n,A),g.fromBufferAttribute(n,F),_.fromBufferAttribute(n,B),m.fromBufferAttribute(o,A),x.fromBufferAttribute(o,F),E.fromBufferAttribute(o,B),g.sub(f),_.sub(f),x.sub(m),E.sub(m);const k=1/(x.x*E.y-E.x*x.y);isFinite(k)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(k),M.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(k),u[A].add(R),u[F].add(R),u[B].add(R),h[A].add(M),h[F].add(M),h[B].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let A=0,F=L.length;A<F;++A){const B=L[A],k=B.start,q=B.count;for(let J=k,Y=k+q;J<Y;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const I=new K,D=new K,O=new K,P=new K;function G(A){O.fromBufferAttribute(s,A),P.copy(O);const F=u[A];I.copy(F),I.sub(O.multiplyScalar(O.dot(F))).normalize(),D.crossVectors(P,F);const k=D.dot(h[A])<0?-1:1;l.setXYZW(A,I.x,I.y,I.z,k)}for(let A=0,F=L.length;A<F;++A){const B=L[A],k=B.start,q=B.count;for(let J=k,Y=k+q;J<Y;J+=3)G(e.getX(J+0)),G(e.getX(J+1)),G(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);const s=new K,o=new K,l=new K,u=new K,h=new K,f=new K,g=new K,_=new K;if(e)for(let m=0,x=e.count;m<x;m+=3){const E=e.getX(m+0),R=e.getX(m+1),M=e.getX(m+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,R),l.fromBufferAttribute(t,M),g.subVectors(l,o),_.subVectors(s,o),g.cross(_),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,R),f.fromBufferAttribute(n,M),u.add(g),h.add(g),f.add(g),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(R,h.x,h.y,h.z),n.setXYZ(M,f.x,f.y,f.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),g.subVectors(l,o),_.subVectors(s,o),g.cross(_),n.setXYZ(m+0,g.x,g.y,g.z),n.setXYZ(m+1,g.x,g.y,g.z),n.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(u,h){const f=u.array,g=u.itemSize,_=u.normalized,m=new f.constructor(h.length*g);let x=0,E=0;for(let R=0,M=h.length;R<M;R++){u.isInterleavedBufferAttribute?x=h[R]*u.data.stride+u.offset:x=h[R]*g;for(let S=0;S<g;S++)m[E++]=f[x++]}return new Cn(m,g,_)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=e(h,n);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const h=[],f=o[u];for(let g=0,_=f.length;g<_;g++){const m=f[g],x=e(m,n);h.push(x)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,h=l.length;u<h;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],g=[];for(let _=0,m=f.length;_<m;_++){const x=f[_];g.push(x.toJSON(e.data))}g.length>0&&(s[h]=g,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const f in s){const g=s[f];this.setAttribute(f,g.clone(t))}const o=e.morphAttributes;for(const f in o){const g=[],_=o[f];for(let m=0,x=_.length;m<x;m++)g.push(_[m].clone(t));this.morphAttributes[f]=g}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,g=l.length;f<g;f++){const _=l[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zv=0;class hs extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=br,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Ro,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ui=new K,uo=new K,Xs=new K,Ci=new K,fo=new K,js=new K,ho=new K;class md{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uo.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(uo);const o=e.distanceTo(t)*.5,l=-this.direction.dot(Xs),u=Ci.dot(this.direction),h=-Ci.dot(Xs),f=Ci.lengthSq(),g=Math.abs(1-l*l);let _,m,x,E;if(g>0)if(_=l*h-u,m=l*u-h,E=o*g,_>=0)if(m>=-E)if(m<=E){const R=1/g;_*=R,m*=R,x=_*(_+l*m+2*u)+m*(l*_+m+2*h)+f}else m=o,_=Math.max(0,-(l*m+u)),x=-_*_+m*(m+2*h)+f;else m=-o,_=Math.max(0,-(l*m+u)),x=-_*_+m*(m+2*h)+f;else m<=-E?(_=Math.max(0,-(-l*o+u)),m=_>0?-o:Math.min(Math.max(-o,-h),o),x=-_*_+m*(m+2*h)+f):m<=E?(_=0,m=Math.min(Math.max(-o,-h),o),x=m*(m+2*h)+f):(_=Math.max(0,-(l*o+u)),m=_>0?o:Math.min(Math.max(-o,-h),o),x=-_*_+m*(m+2*h)+f);else m=l>0?-o:o,_=Math.max(0,-(l*m+u)),x=-_*_+m*(m+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(uo).addScaledVector(Xs,m),x}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=n-l,h=n+l;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,u,h;const f=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),g>=0?(o=(e.min.y-m.y)*g,l=(e.max.y-m.y)*g):(o=(e.max.y-m.y)*g,l=(e.min.y-m.y)*g),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),_>=0?(u=(e.min.z-m.z)*_,h=(e.max.z-m.z)*_):(u=(e.max.z-m.z)*_,h=(e.min.z-m.z)*_),n>h||u>s)||((u>n||n!==n)&&(n=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,s,o){fo.subVectors(t,e),js.subVectors(n,e),ho.crossVectors(fo,js);let l=this.direction.dot(ho),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;Ci.subVectors(this.origin,e);const h=u*this.direction.dot(js.crossVectors(Ci,js));if(h<0)return null;const f=u*this.direction.dot(fo.cross(Ci));if(f<0||h+f>l)return null;const g=-u*Ci.dot(ho);return g<0?null:this.at(g/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cs extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jc=new Ut,Wi=new md,qs=new Ll,Qc=new K,Ys=new K,Ks=new K,Zs=new K,po=new K,Js=new K,eu=new K,Qs=new K;class _n extends Yt{constructor(e=new Rn,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){Js.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const g=u[h],_=o[h];g!==0&&(po.fromBufferAttribute(_,e),l?Js.addScaledVector(po,g):Js.addScaledVector(po.sub(t),g))}t.add(Js)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(o),Wi.copy(e.ray).recast(e.near),!(qs.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(qs,Qc)===null||Wi.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&(Jc.copy(o).invert(),Wi.copy(e.ray).applyMatrix4(Jc),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s;const o=this.geometry,l=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,g=o.attributes.uv1,_=o.attributes.normal,m=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,R=m.length;E<R;E++){const M=m[E],S=l[M.materialIndex],L=Math.max(M.start,x.start),I=Math.min(u.count,Math.min(M.start+M.count,x.start+x.count));for(let D=L,O=I;D<O;D+=3){const P=u.getX(D),G=u.getX(D+1),A=u.getX(D+2);s=ea(this,S,e,n,f,g,_,P,G,A),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),R=Math.min(u.count,x.start+x.count);for(let M=E,S=R;M<S;M+=3){const L=u.getX(M),I=u.getX(M+1),D=u.getX(M+2);s=ea(this,l,e,n,f,g,_,L,I,D),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let E=0,R=m.length;E<R;E++){const M=m[E],S=l[M.materialIndex],L=Math.max(M.start,x.start),I=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let D=L,O=I;D<O;D+=3){const P=D,G=D+1,A=D+2;s=ea(this,S,e,n,f,g,_,P,G,A),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const E=Math.max(0,x.start),R=Math.min(h.count,x.start+x.count);for(let M=E,S=R;M<S;M+=3){const L=M,I=M+1,D=M+2;s=ea(this,l,e,n,f,g,_,L,I,D),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}}}function Gv(i,e,t,n,s,o,l,u){let h;if(e.side===gn?h=n.intersectTriangle(l,o,s,!0,u):h=n.intersectTriangle(s,o,l,e.side===Fi,u),h===null)return null;Qs.copy(u),Qs.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Qs);return f<t.near||f>t.far?null:{distance:f,point:Qs.clone(),object:i}}function ea(i,e,t,n,s,o,l,u,h,f){i.getVertexPosition(u,Ys),i.getVertexPosition(h,Ks),i.getVertexPosition(f,Zs);const g=Gv(i,e,t,n,Ys,Ks,Zs,eu);if(g){const _=new K;Bn.getBarycoord(eu,Ys,Ks,Zs,_),s&&(g.uv=Bn.getInterpolatedAttribute(s,u,h,f,_,new Et)),o&&(g.uv1=Bn.getInterpolatedAttribute(o,u,h,f,_,new Et)),l&&(g.normal=Bn.getInterpolatedAttribute(l,u,h,f,_,new K),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const m={a:u,b:h,c:f,normal:new K,materialIndex:0};Bn.getNormal(Ys,Ks,Zs,m.normal),g.face=m,g.barycoord=_}return g}class Vv extends rn{constructor(e=null,t=1,n=1,s,o,l,u,h,f=nn,g=nn,_,m){super(null,l,u,h,f,g,s,o,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mo=new K,Hv=new K,Wv=new rt;class qi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=mo.subVectors(n,t).cross(Hv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wv.getNormalMatrix(e),s=this.coplanarPoint(mo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Ll,$v=new Et(.5,.5),ta=new K;class Il{constructor(e=new qi,t=new qi,n=new qi,s=new qi,o=new qi,l=new qi){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){const s=this.planes,o=e.elements,l=o[0],u=o[1],h=o[2],f=o[3],g=o[4],_=o[5],m=o[6],x=o[7],E=o[8],R=o[9],M=o[10],S=o[11],L=o[12],I=o[13],D=o[14],O=o[15];if(s[0].setComponents(f-l,x-g,S-E,O-L).normalize(),s[1].setComponents(f+l,x+g,S+E,O+L).normalize(),s[2].setComponents(f+u,x+_,S+R,O+I).normalize(),s[3].setComponents(f-u,x-_,S-R,O-I).normalize(),n)s[4].setComponents(h,m,M,D).normalize(),s[5].setComponents(f-h,x-m,S-M,O-D).normalize();else if(s[4].setComponents(f-h,x-m,S-M,O-D).normalize(),t===Jn)s[5].setComponents(f+h,x+m,S+M,O+D).normalize();else if(t===os)s[5].setComponents(h,m,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const t=$v.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gd extends rn{constructor(e=[],t=er,n,s,o,l,u,h,f,g){super(e,t,n,s,o,l,u,h,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tu extends rn{constructor(e,t,n,s,o,l,u,h,f){super(e,t,n,s,o,l,u,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class us extends rn{constructor(e,t,n=ni,s,o,l,u=nn,h=nn,f,g=_i,_=1){if(g!==_i&&g!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,s,o,l,u,h,g,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xv extends us{constructor(e,t=ni,n=er,s,o,l=nn,u=nn,h,f=_i){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,n,s,o,l,u,h,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _d extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lr extends Rn{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const h=[],f=[],g=[],_=[];let m=0,x=0;E("z","y","x",-1,-1,n,t,e,l,o,0),E("z","y","x",1,-1,n,t,-e,l,o,1),E("x","z","y",1,1,e,n,t,s,l,2),E("x","z","y",1,-1,e,n,-t,s,l,3),E("x","y","z",1,-1,e,t,n,s,o,4),E("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(h),this.setAttribute("position",new pn(f,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(_,2));function E(R,M,S,L,I,D,O,P,G,A,F){const B=D/G,k=O/A,q=D/2,J=O/2,Y=P/2,ie=G+1,Z=A+1;let ne=0,Se=0;const pe=new K;for(let Re=0;Re<Z;Re++){const Ue=Re*k-J;for(let Ae=0;Ae<ie;Ae++){const Xe=Ae*B-q;pe[R]=Xe*L,pe[M]=Ue*I,pe[S]=Y,f.push(pe.x,pe.y,pe.z),pe[R]=0,pe[M]=0,pe[S]=P>0?1:-1,g.push(pe.x,pe.y,pe.z),_.push(Ae/G),_.push(1-Re/A),ne+=1}}for(let Re=0;Re<A;Re++)for(let Ue=0;Ue<G;Ue++){const Ae=m+Ue+ie*Re,Xe=m+Ue+ie*(Re+1),Ze=m+(Ue+1)+ie*(Re+1),Je=m+(Ue+1)+ie*Re;h.push(Ae,Xe,Je),h.push(Xe,Ze,Je),Se+=6}u.addGroup(x,Se,F),x+=Se,m+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ul extends Rn{constructor(e=1,t=1,n=1,s=32,o=1,l=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h};const f=this;s=Math.floor(s),o=Math.floor(o);const g=[],_=[],m=[],x=[];let E=0;const R=[],M=n/2;let S=0;L(),l===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(g),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(m,3)),this.setAttribute("uv",new pn(x,2));function L(){const D=new K,O=new K;let P=0;const G=(t-e)/n;for(let A=0;A<=o;A++){const F=[],B=A/o,k=B*(t-e)+e;for(let q=0;q<=s;q++){const J=q/s,Y=J*h+u,ie=Math.sin(Y),Z=Math.cos(Y);O.x=k*ie,O.y=-B*n+M,O.z=k*Z,_.push(O.x,O.y,O.z),D.set(ie,G,Z).normalize(),m.push(D.x,D.y,D.z),x.push(J,1-B),F.push(E++)}R.push(F)}for(let A=0;A<s;A++)for(let F=0;F<o;F++){const B=R[F][A],k=R[F+1][A],q=R[F+1][A+1],J=R[F][A+1];(e>0||F!==0)&&(g.push(B,k,J),P+=3),(t>0||F!==o-1)&&(g.push(k,q,J),P+=3)}f.addGroup(S,P,0),S+=P}function I(D){const O=E,P=new Et,G=new K;let A=0;const F=D===!0?e:t,B=D===!0?1:-1;for(let q=1;q<=s;q++)_.push(0,M*B,0),m.push(0,B,0),x.push(.5,.5),E++;const k=E;for(let q=0;q<=s;q++){const Y=q/s*h+u,ie=Math.cos(Y),Z=Math.sin(Y);G.x=F*Z,G.y=M*B,G.z=F*ie,_.push(G.x,G.y,G.z),m.push(0,B,0),P.x=ie*.5+.5,P.y=Z*.5*B+.5,x.push(P.x,P.y),E++}for(let q=0;q<s;q++){const J=O+q,Y=k+q;D===!0?g.push(Y,Y+1,J):g.push(Y+1,Y,J),A+=3}f.addGroup(S,A,D===!0?1:2),S+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ps extends Rn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,u=Math.floor(n),h=Math.floor(s),f=u+1,g=h+1,_=e/u,m=t/h,x=[],E=[],R=[],M=[];for(let S=0;S<g;S++){const L=S*m-l;for(let I=0;I<f;I++){const D=I*_-o;E.push(D,-L,0),R.push(0,0,1),M.push(I/u),M.push(1-S/h)}}for(let S=0;S<h;S++)for(let L=0;L<u;L++){const I=L+f*S,D=L+f*(S+1),O=L+1+f*(S+1),P=L+1+f*S;x.push(I,D,P),x.push(D,O,P)}this.setIndex(x),this.setAttribute("position",new pn(E,3)),this.setAttribute("normal",new pn(R,3)),this.setAttribute("uv",new pn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.widthSegments,e.heightSegments)}}function Dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=Dr(i[t]);for(const s in n)e[s]=n[s]}return e}function jv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const qv={clone:Dr,merge:dn};var Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zv extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ua extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jv extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const go={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(nu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!nu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class e0{constructor(e,t,n){const s=this;let o=!1,l=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(g){u++,o===!1&&s.onStart!==void 0&&s.onStart(g,l,u),o=!0},this.itemEnd=function(g){l++,s.onProgress!==void 0&&s.onProgress(g,l,u),l===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,_){return f.push(g,_),this},this.removeHandler=function(g){const _=f.indexOf(g);return _!==-1&&f.splice(_,2),this},this.getHandler=function(g){for(let _=0,m=f.length;_<m;_+=2){const x=f[_],E=f[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const t0=new e0;class Nl{constructor(e){this.manager=e!==void 0?e:t0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Nl.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r=new WeakMap;class n0 extends Nl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=go.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0);else{let _=_r.get(l);_===void 0&&(_=[],_r.set(l,_)),_.push({onLoad:t,onError:s})}return l}const u=ls("img");function h(){g(),t&&t(this);const _=_r.get(this)||[];for(let m=0;m<_.length;m++){const x=_[m];x.onLoad&&x.onLoad(this)}_r.delete(this),o.manager.itemEnd(e)}function f(_){g(),s&&s(_),go.remove(`image:${e}`);const m=_r.get(this)||[];for(let x=0;x<m.length;x++){const E=m[x];E.onError&&E.onError(_)}_r.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function g(){u.removeEventListener("load",h,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),go.add(`image:${e}`,u),o.manager.itemStart(e),u.src=e,u}}class xd extends Nl{constructor(e){super(e)}load(e,t,n,s){const o=new rn,l=new n0(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class _a extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class i0 extends _a{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _o=new Ut,iu=new K,ru=new K;class Sd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(iu),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===os||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const na=new K,ia=new Qn,qn=new K;class yd extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(na,ia,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ia,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(na,ia,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(na,ia,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new K,su=new Et,au=new Et;class Sn extends yd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,su,au),t.subVectors(au,su)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/h,t-=l.offsetY*n/f,s*=l.width/h,n*=l.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class r0 extends Sd{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=pa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class s0 extends _a{constructor(e,t,n=0,s=Math.PI/3,o=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=s,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new r0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ol extends yd{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,u-=g*this.view.offsetY,h=u-g*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class a0 extends Sd{constructor(){super(new Ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ou extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new a0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class o0 extends _a{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const vr=-90,xr=1;class l0 extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(vr,xr,e,t);s.layers=this.layers,this.add(s);const o=new Sn(vr,xr,e,t);o.layers=this.layers,this.add(o);const l=new Sn(vr,xr,e,t);l.layers=this.layers,this.add(l);const u=new Sn(vr,xr,e,t);u.layers=this.layers,this.add(u);const h=new Sn(vr,xr,e,t);h.layers=this.layers,this.add(h);const f=new Sn(vr,xr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,l,u,h]=t;for(const f of t)this.remove(f);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,h,f,g]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,3,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,s),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,m,x),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class c0 extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lu=new Ut;class u0{constructor(e,t,n=0,s=1/0){this.ray=new md(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):St("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(e,t=!0,n=[]){return gl(e,this,n,t),n.sort(cu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)gl(e[s],this,n,t);return n.sort(cu),n}}function cu(i,e){return i.distance-e.distance}function gl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let l=0,u=o.length;l<u;l++)gl(o[l],e,t,!0)}}function uu(i,e,t,n){const s=d0(n);switch(t){case ad:return i*e;case ld:return i*e/s.components*s.byteLength;case Tl:return i*e/s.components*s.byteLength;case Rr:return i*e*2/s.components*s.byteLength;case Al:return i*e*2/s.components*s.byteLength;case od:return i*e*3/s.components*s.byteLength;case kn:return i*e*4/s.components*s.byteLength;case Cl:return i*e*4/s.components*s.byteLength;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ko:case Go:return Math.max(i,16)*Math.max(e,8)/4;case Bo:case zo:return Math.max(i,8)*Math.max(e,8)/2;case Vo:case Ho:case $o:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wo:case jo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cl:case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fl:case hl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d0(i){switch(i){case En:case nd:return{byteLength:1,components:1};case ss:case id:case gi:return{byteLength:2,components:1};case bl:case wl:return{byteLength:2,components:4};case ni:case El:case Zn:return{byteLength:4,components:1};case rd:case sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);function Md(){let i=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function f0(i){const e=new WeakMap;function t(u,h){const f=u.array,g=u.usage,_=f.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,g),u.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=i.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function n(u,h,f){const g=h.array,_=h.updateRanges;if(i.bindBuffer(f,u),_.length===0)i.bufferSubData(f,0,g);else{_.sort((x,E)=>x.start-E.start);let m=0;for(let x=1;x<_.length;x++){const E=_[m],R=_[x];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++m,_[m]=R)}_.length=m+1;for(let x=0,E=_.length;x<E;x++){const R=_[x];i.bufferSubData(f,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(i.deleteBuffer(h.buffer),e.delete(u))}function l(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=e.get(u);(!g||g.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,h),f.version=u.version}}return{get:s,remove:o,update:l}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
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
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,S0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,U0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,N0=`#define PI 3.141592653589793
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B0=`vec3 transformedNormal = objectNormal;
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
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,dx=`uniform sampler2D dfgLUT;
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
}`,fx=`
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hS=`uniform sampler2D t2D;
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
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
}`,xS=`#if DEPTH_PACKING == 3200
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
}`,SS=`#define DISTANCE
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
}`,yS=`#define DISTANCE
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ES=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
}`,wS=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,AS=`uniform vec3 diffuse;
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
}`,CS=`#define LAMBERT
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
}`,RS=`#define LAMBERT
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
}`,PS=`#define MATCAP
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
}`,DS=`#define MATCAP
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
}`,FS=`#define NORMAL
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
}`,LS=`#define NORMAL
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
}`,IS=`#define PHONG
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
}`,US=`#define PHONG
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
}`,NS=`#define STANDARD
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
}`,OS=`#define STANDARD
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
}`,BS=`#define TOON
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
}`,kS=`#define TOON
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
}`,zS=`uniform float size;
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
}`,GS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,WS=`uniform float rotation;
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
}`,$S=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:h0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:x0,aomap_pars_fragment:S0,batching_pars_vertex:y0,batching_vertex:M0,begin_vertex:E0,beginnormal_vertex:b0,bsdfs:w0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:D0,color_fragment:F0,color_pars_fragment:L0,color_pars_vertex:I0,color_vertex:U0,common:N0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:B0,displacementmap_pars_vertex:k0,displacementmap_vertex:z0,emissivemap_fragment:G0,emissivemap_pars_fragment:V0,colorspace_fragment:H0,colorspace_pars_fragment:W0,envmap_fragment:$0,envmap_common_pars_fragment:X0,envmap_pars_fragment:j0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:sx,envmap_vertex:Y0,fog_vertex:K0,fog_pars_vertex:Z0,fog_fragment:J0,fog_pars_fragment:Q0,gradientmap_pars_fragment:ex,lightmap_pars_fragment:tx,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:ox,lights_phong_fragment:lx,lights_phong_pars_fragment:cx,lights_physical_fragment:ux,lights_physical_pars_fragment:dx,lights_fragment_begin:fx,lights_fragment_maps:hx,lights_fragment_end:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:vx,map_fragment:xx,map_pars_fragment:Sx,map_particle_fragment:yx,map_particle_pars_fragment:Mx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:bx,morphinstance_vertex:wx,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Cx,morphtarget_vertex:Rx,normal_fragment_begin:Px,normal_fragment_maps:Dx,normal_pars_fragment:Fx,normal_pars_vertex:Lx,normal_vertex:Ix,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:kx,opaque_fragment:zx,packing:Gx,premultiplied_alpha_fragment:Vx,project_vertex:Hx,dithering_fragment:Wx,dithering_pars_fragment:$x,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:Yx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:aS,transmission_pars_fragment:oS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:dS,background_vert:fS,background_frag:hS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:_S,depth_vert:vS,depth_frag:xS,distance_vert:SS,distance_frag:yS,equirect_vert:MS,equirect_frag:ES,linedashed_vert:bS,linedashed_frag:wS,meshbasic_vert:TS,meshbasic_frag:AS,meshlambert_vert:CS,meshlambert_frag:RS,meshmatcap_vert:PS,meshmatcap_frag:DS,meshnormal_vert:FS,meshnormal_frag:LS,meshphong_vert:IS,meshphong_frag:US,meshphysical_vert:NS,meshphysical_frag:OS,meshtoon_vert:BS,meshtoon_frag:kS,points_vert:zS,points_frag:GS,shadow_vert:VS,shadow_frag:HS,sprite_vert:WS,sprite_frag:$S},Ce={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Kn={basic:{uniforms:dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:dn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:dn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new gt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:dn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:dn([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:dn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:dn([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:dn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:dn([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:dn([Ce.common,Ce.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:dn([Ce.lights,Ce.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Kn.physical={uniforms:dn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ra={r:0,b:0,g:0},Xi=new ii,XS=new Ut;function jS(i,e,t,n,s,o){const l=new gt(0);let u=s===!0?0:1,h,f,g=null,_=0,m=null;function x(L){let I=L.isScene===!0?L.background:null;if(I&&I.isTexture){const D=L.backgroundBlurriness>0;I=e.get(I,D)}return I}function E(L){let I=!1;const D=x(L);D===null?M(l,u):D&&D.isColor&&(M(D,1),I=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(i.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(L,I){const D=x(I);D&&(D.isCubeTexture||D.mapping===ga)?(f===void 0&&(f=new _n(new Lr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Dr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(O,P,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),Xi.copy(I.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),f.material.uniforms.envMap.value=D,f.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(XS.makeRotationFromEuler(Xi)),f.material.toneMapped=yt.getTransfer(D.colorSpace)!==Rt,(g!==D||_!==D.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,g=D,_=D.version,m=i.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new _n(new ps(2,2),new ri({name:"BackgroundMaterial",uniforms:Dr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.toneMapped=yt.getTransfer(D.colorSpace)!==Rt,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||_!==D.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,g=D,_=D.version,m=i.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function M(L,I){L.getRGB(ra,vd(i)),t.buffers.color.setClear(ra.r,ra.g,ra.b,I,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(L,I=1){l.set(L),u=I,M(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(L){u=L,M(l,u)},render:E,addToRenderList:R,dispose:S}}function qS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let o=s,l=!1;function u(k,q,J,Y,ie){let Z=!1;const ne=_(k,Y,J,q);o!==ne&&(o=ne,f(o.object)),Z=x(k,Y,J,ie),Z&&E(k,Y,J,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(Z||l)&&(l=!1,D(k,q,J,Y),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return i.createVertexArray()}function f(k){return i.bindVertexArray(k)}function g(k){return i.deleteVertexArray(k)}function _(k,q,J,Y){const ie=Y.wireframe===!0;let Z=n[q.id];Z===void 0&&(Z={},n[q.id]=Z);const ne=k.isInstancedMesh===!0?k.id:0;let Se=Z[ne];Se===void 0&&(Se={},Z[ne]=Se);let pe=Se[J.id];pe===void 0&&(pe={},Se[J.id]=pe);let Re=pe[ie];return Re===void 0&&(Re=m(h()),pe[ie]=Re),Re}function m(k){const q=[],J=[],Y=[];for(let ie=0;ie<t;ie++)q[ie]=0,J[ie]=0,Y[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:J,attributeDivisors:Y,object:k,attributes:{},index:null}}function x(k,q,J,Y){const ie=o.attributes,Z=q.attributes;let ne=0;const Se=J.getAttributes();for(const pe in Se)if(Se[pe].location>=0){const Ue=ie[pe];let Ae=Z[pe];if(Ae===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(Ae=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(Ae=k.instanceColor)),Ue===void 0||Ue.attribute!==Ae||Ae&&Ue.data!==Ae.data)return!0;ne++}return o.attributesNum!==ne||o.index!==Y}function E(k,q,J,Y){const ie={},Z=q.attributes;let ne=0;const Se=J.getAttributes();for(const pe in Se)if(Se[pe].location>=0){let Ue=Z[pe];Ue===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(Ue=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(Ue=k.instanceColor));const Ae={};Ae.attribute=Ue,Ue&&Ue.data&&(Ae.data=Ue.data),ie[pe]=Ae,ne++}o.attributes=ie,o.attributesNum=ne,o.index=Y}function R(){const k=o.newAttributes;for(let q=0,J=k.length;q<J;q++)k[q]=0}function M(k){S(k,0)}function S(k,q){const J=o.newAttributes,Y=o.enabledAttributes,ie=o.attributeDivisors;J[k]=1,Y[k]===0&&(i.enableVertexAttribArray(k),Y[k]=1),ie[k]!==q&&(i.vertexAttribDivisor(k,q),ie[k]=q)}function L(){const k=o.newAttributes,q=o.enabledAttributes;for(let J=0,Y=q.length;J<Y;J++)q[J]!==k[J]&&(i.disableVertexAttribArray(J),q[J]=0)}function I(k,q,J,Y,ie,Z,ne){ne===!0?i.vertexAttribIPointer(k,q,J,ie,Z):i.vertexAttribPointer(k,q,J,Y,ie,Z)}function D(k,q,J,Y){R();const ie=Y.attributes,Z=J.getAttributes(),ne=q.defaultAttributeValues;for(const Se in Z){const pe=Z[Se];if(pe.location>=0){let Re=ie[Se];if(Re===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(Re=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(Re=k.instanceColor)),Re!==void 0){const Ue=Re.normalized,Ae=Re.itemSize,Xe=e.get(Re);if(Xe===void 0)continue;const Ze=Xe.buffer,Je=Xe.type,oe=Xe.bytesPerElement,ve=Je===i.INT||Je===i.UNSIGNED_INT||Re.gpuType===El;if(Re.isInterleavedBufferAttribute){const re=Re.data,ye=re.stride,$e=Re.offset;if(re.isInstancedInterleavedBuffer){for(let je=0;je<pe.locationSize;je++)S(pe.location+je,re.meshPerAttribute);k.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let je=0;je<pe.locationSize;je++)M(pe.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let je=0;je<pe.locationSize;je++)I(pe.location+je,Ae/pe.locationSize,Je,Ue,ye*oe,($e+Ae/pe.locationSize*je)*oe,ve)}else{if(Re.isInstancedBufferAttribute){for(let re=0;re<pe.locationSize;re++)S(pe.location+re,Re.meshPerAttribute);k.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let re=0;re<pe.locationSize;re++)M(pe.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let re=0;re<pe.locationSize;re++)I(pe.location+re,Ae/pe.locationSize,Je,Ue,Ae*oe,Ae/pe.locationSize*re*oe,ve)}}else if(ne!==void 0){const Ue=ne[Se];if(Ue!==void 0)switch(Ue.length){case 2:i.vertexAttrib2fv(pe.location,Ue);break;case 3:i.vertexAttrib3fv(pe.location,Ue);break;case 4:i.vertexAttrib4fv(pe.location,Ue);break;default:i.vertexAttrib1fv(pe.location,Ue)}}}}L()}function O(){F();for(const k in n){const q=n[k];for(const J in q){const Y=q[J];for(const ie in Y){const Z=Y[ie];for(const ne in Z)g(Z[ne].object),delete Z[ne];delete Y[ie]}}delete n[k]}}function P(k){if(n[k.id]===void 0)return;const q=n[k.id];for(const J in q){const Y=q[J];for(const ie in Y){const Z=Y[ie];for(const ne in Z)g(Z[ne].object),delete Z[ne];delete Y[ie]}}delete n[k.id]}function G(k){for(const q in n){const J=n[q];for(const Y in J){const ie=J[Y];if(ie[k.id]===void 0)continue;const Z=ie[k.id];for(const ne in Z)g(Z[ne].object),delete Z[ne];delete ie[k.id]}}}function A(k){for(const q in n){const J=n[q],Y=k.isInstancedMesh===!0?k.id:0,ie=J[Y];if(ie!==void 0){for(const Z in ie){const ne=ie[Z];for(const Se in ne)g(ne[Se].object),delete ne[Se];delete ie[Z]}delete J[Y],Object.keys(J).length===0&&delete n[q]}}}function F(){B(),l=!0,o!==s&&(o=s,f(o.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:B,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:G,initAttributes:R,enableAttribute:M,disableUnusedAttributes:L}}function YS(i,e,t){let n;function s(f){n=f}function o(f,g){i.drawArrays(n,f,g),t.update(g,n,1)}function l(f,g,_){_!==0&&(i.drawArraysInstanced(n,f,g,_),t.update(g,n,_))}function u(f,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];t.update(x,n,1)}function h(f,g,_,m){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<f.length;E++)l(f[E],g[E],m[E]);else{x.multiDrawArraysInstancedWEBGL(n,f,0,g,0,m,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*m[R];t.update(E,n,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function KS(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(G){return!(G!==kn&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(G){const A=G===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==En&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==Zn&&!A)}function h(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const g=h(f);g!==f&&(et("WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:D,maxSamples:O,samples:P}}function ZS(i){const e=this;let t=null,n=0,s=!1,o=!1;const l=new qi,u=new rt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const x=_.length!==0||m||n!==0||s;return s=m,n=_.length,x},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,m){t=g(_,m,0)},this.setState=function(_,m,x){const E=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,S=i.get(_);if(!s||E===null||E.length===0||o&&!M)o?g(null):f();else{const L=o?0:n,I=L*4;let D=S.clippingState||null;h.value=D,D=g(E,m,I,x);for(let O=0;O!==I;++O)D[O]=t[O];S.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(_,m,x,E){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=h.value,E!==!0||M===null){const S=x+R*4,L=m.matrixWorldInverse;u.getNormalMatrix(L),(M===null||M.length<S)&&(M=new Float32Array(S));for(let I=0,D=x;I!==R;++I,D+=4)l.copy(_[I]).applyMatrix4(L,u),l.normal.toArray(M,D),M[D+3]=l.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}const Di=4,du=[.125,.215,.35,.446,.526,.582],Ki=20,JS=256,$r=new Ol,fu=new gt;let vo=null,xo=0,So=0,yo=!1;const QS=new K;class hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:l=256,position:u=QS}=o;vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,xo,So),this._renderer.xr.enabled=yo,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:gi,format:kn,colorSpace:Pr,depthBuffer:!1},s=pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,n);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ey(o)),this._blurMaterial=ny(o,e,t),this._ggxMaterial=ty(o,e,t)}return s}_compileMaterial(e){const t=new _n(new Rn,e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,n,s,o){const h=new Sn(90,1,t,n),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,x=_.toneMapping;_.getClearColor(fu),_.toneMapping=ei,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new Lr,new cs({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let S=!1;const L=e.background;L?L.isColor&&(M.color.copy(L),e.background=null,S=!0):(M.color.copy(fu),S=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(h.up.set(0,f[I],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+g[I],o.y,o.z)):D===1?(h.up.set(0,0,f[I]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+g[I],o.z)):(h.up.set(0,f[I],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+g[I]));const O=this._cubeSize;Sr(s,D*O,I>2?O:0,O,O),_.setRenderTarget(s),S&&_.render(R,h),_.render(e,h)}_.toneMapping=x,_.autoClear=m,e.background=L}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===er||e.mapping===Cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const o=s?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;Sr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,$r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,o=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[n];u.material=l;const h=l.uniforms,f=n/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(f*f-g*g),m=0+f*1.25,x=_*m,{_lodMax:E}=this,R=this._sizeLods[n],M=3*R*(n>E-Di?n-E+Di:0),S=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=E-t,Sr(o,M,S,3*R,2*R),s.setRenderTarget(o),s.render(u,$r),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=E-n,Sr(e,M,S,3*R,2*R),s.setRenderTarget(e),s.render(u,$r)}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,u){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&St("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[s];_.material=f;const m=f.uniforms,x=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ki-1),R=o/E,M=isFinite(o)?1+Math.floor(g*R):Ki;M>Ki&&et(`sigmaRadians, ${o}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ki}`);const S=[];let L=0;for(let G=0;G<Ki;++G){const A=G/R,F=Math.exp(-A*A/2);S.push(F),G===0?L+=F:G<M&&(L+=2*F)}for(let G=0;G<S.length;G++)S[G]=S[G]/L;m.envMap.value=e.texture,m.samples.value=M,m.weights.value=S,m.latitudinal.value=l==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:I}=this;m.dTheta.value=E,m.mipInt.value=I-n;const D=this._sizeLods[s],O=3*D*(s>I-Di?s-I+Di:0),P=4*(this._cubeSize-D);Sr(t,O,P,3*D,2*D),h.setRenderTarget(t),h.render(_,$r)}}function ey(i){const e=[],t=[],n=[];let s=i;const o=i-Di+1+du.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);let h=1/u;l>i-Di?h=du[l-i+Di-1]:l===0&&(h=0),t.push(h);const f=1/(u-2),g=-f,_=1+f,m=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,R=3,M=2,S=1,L=new Float32Array(R*E*x),I=new Float32Array(M*E*x),D=new Float32Array(S*E*x);for(let P=0;P<x;P++){const G=P%3*2/3-1,A=P>2?0:-1,F=[G,A,0,G+2/3,A,0,G+2/3,A+1,0,G,A,0,G+2/3,A+1,0,G,A+1,0];L.set(F,R*E*P),I.set(m,M*E*P);const B=[P,P,P,P,P,P];D.set(B,S*E*P)}const O=new Rn;O.setAttribute("position",new Cn(L,R)),O.setAttribute("uv",new Cn(I,M)),O.setAttribute("faceIndex",new Cn(D,S)),n.push(new _n(O,null)),s>Di&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function pu(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ty(i,e,t){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ny(i,e,t){const n=new Float32Array(Ki),s=new K(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:va(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function mu(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function gu(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}class Ed extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lr(5,5,5),o=new ri({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:pi});o.uniforms.tEquirect.value=t;const l=new _n(s,o),u=t.minFilter;return t.minFilter===Zi&&(t.minFilter=cn),new l0(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}function iy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?l(m):o(m)}function o(m){if(m&&m.isTexture){const x=m.mapping;if(x===Va||x===Ha)if(e.has(m)){const E=e.get(m).texture;return u(E,m.mapping)}else{const E=m.image;if(E&&E.height>0){const R=new Ed(E.height);return R.fromEquirectangularTexture(i,m),e.set(m,R),m.addEventListener("dispose",f),u(R.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){const x=m.mapping,E=x===Va||x===Ha,R=x===er||x===Cr;if(E||R){let M=t.get(m);const S=M!==void 0?M.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return n===null&&(n=new hu(i)),M=E?n.fromEquirectangular(m,M):n.fromCubemap(m,M),M.texture.pmremVersion=m.pmremVersion,t.set(m,M),M.texture;if(M!==void 0)return M.texture;{const L=m.image;return E&&L&&L.height>0||R&&L&&h(L)?(n===null&&(n=new hu(i)),M=E?n.fromEquirectangular(m):n.fromCubemap(m),M.texture.pmremVersion=m.pmremVersion,t.set(m,M),m.addEventListener("dispose",g),M.texture):null}}}return m}function u(m,x){return x===Va?m.mapping=er:x===Ha&&(m.mapping=Cr),m}function h(m){let x=0;const E=6;for(let R=0;R<E;R++)m[R]!==void 0&&x++;return x===E}function f(m){const x=m.target;x.removeEventListener("dispose",f);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function g(m){const x=m.target;x.removeEventListener("dispose",g);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function ry(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ha("WebGLRenderer: "+n+" extension not supported."),s}}}function sy(i,e,t,n){const s={},o=new WeakMap;function l(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const E in m.attributes)e.remove(m.attributes[E]);m.removeEventListener("dispose",l),delete s[m.id];const x=o.get(m);x&&(e.remove(x),o.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(_,m){return s[m.id]===!0||(m.addEventListener("dispose",l),s[m.id]=!0,t.memory.geometries++),m}function h(_){const m=_.attributes;for(const x in m)e.update(m[x],i.ARRAY_BUFFER)}function f(_){const m=[],x=_.index,E=_.attributes.position;let R=0;if(E===void 0)return;if(x!==null){const L=x.array;R=x.version;for(let I=0,D=L.length;I<D;I+=3){const O=L[I+0],P=L[I+1],G=L[I+2];m.push(O,P,P,G,G,O)}}else{const L=E.array;R=E.version;for(let I=0,D=L.length/3-1;I<D;I+=3){const O=I+0,P=I+1,G=I+2;m.push(O,P,P,G,G,O)}}const M=new(E.count>=65535?pd:hd)(m,1);M.version=R;const S=o.get(_);S&&e.remove(S),o.set(_,M)}function g(_){const m=o.get(_);if(m){const x=_.index;x!==null&&m.version<x.version&&f(_)}else f(_);return o.get(_)}return{get:u,update:h,getWireframeAttribute:g}}function ay(i,e,t){let n;function s(m){n=m}let o,l;function u(m){o=m.type,l=m.bytesPerElement}function h(m,x){i.drawElements(n,x,o,m*l),t.update(x,n,1)}function f(m,x,E){E!==0&&(i.drawElementsInstanced(n,x,o,m*l,E),t.update(x,n,E))}function g(m,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,o,m,0,E);let M=0;for(let S=0;S<E;S++)M+=x[S];t.update(M,n,1)}function _(m,x,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<m.length;S++)f(m[S]/l,x[S],R[S]);else{M.multiDrawElementsInstancedWEBGL(n,x,0,o,m,0,R,0,E);let S=0;for(let L=0;L<E;L++)S+=x[L]*R[L];t.update(S,n,1)}}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function oy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(o/3);break;case i.LINES:t.lines+=u*(o/2);break;case i.LINE_STRIP:t.lines+=u*(o-1);break;case i.LINE_LOOP:t.lines+=u*o;break;case i.POINTS:t.points+=u*o;break;default:St("WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ly(i,e,t){const n=new WeakMap,s=new zt;function o(l,u,h){const f=l.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=n.get(u);if(m===void 0||m.count!==_){let F=function(){G.dispose(),n.delete(u),u.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let I=0;x===!0&&(I=1),E===!0&&(I=2),R===!0&&(I=3);let D=u.attributes.position.count*I,O=1;D>e.maxTextureSize&&(O=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const P=new Float32Array(D*O*4*_),G=new dd(P,D,O,_);G.type=Zn,G.needsUpdate=!0;const A=I*4;for(let B=0;B<_;B++){const k=M[B],q=S[B],J=L[B],Y=D*O*4*B;for(let ie=0;ie<k.count;ie++){const Z=ie*A;x===!0&&(s.fromBufferAttribute(k,ie),P[Y+Z+0]=s.x,P[Y+Z+1]=s.y,P[Y+Z+2]=s.z,P[Y+Z+3]=0),E===!0&&(s.fromBufferAttribute(q,ie),P[Y+Z+4]=s.x,P[Y+Z+5]=s.y,P[Y+Z+6]=s.z,P[Y+Z+7]=0),R===!0&&(s.fromBufferAttribute(J,ie),P[Y+Z+8]=s.x,P[Y+Z+9]=s.y,P[Y+Z+10]=s.z,P[Y+Z+11]=J.itemSize===4?s.w:1)}}m={count:_,texture:G,size:new Et(D,O)},n.set(u,m),u.addEventListener("dispose",F)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let x=0;for(let R=0;R<f.length;R++)x+=f[R];const E=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function cy(i,e,t,n,s){let o=new WeakMap;function l(f){const g=s.render.frame,_=f.geometry,m=e.get(f,_);if(o.get(m)!==g&&(e.update(m),o.set(m,g)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==g&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),o.set(f,g))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==g&&(x.update(),o.set(x,g))}return m}function u(){o=new WeakMap}function h(f){const g=f.target;g.removeEventListener("dispose",h),n.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:l,dispose:u}}const uy={[Yu]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[Ml]:"ACES_FILMIC_TONE_MAPPING",[Qu]:"AGX_TONE_MAPPING",[ed]:"NEUTRAL_TONE_MAPPING",[Ju]:"CUSTOM_TONE_MAPPING"};function dy(i,e,t,n,s){const o=new ti(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),l=new ti(e,t,{type:gi,depthBuffer:!1,stencilBuffer:!1}),u=new Rn;u.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pn([0,2,0,0,2,0],2));const h=new Zv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _n(u,h),g=new Ol(-1,1,1,-1,0,1);let _=null,m=null,x=!1,E,R=null,M=[],S=!1;this.setSize=function(L,I){o.setSize(L,I),l.setSize(L,I);for(let D=0;D<M.length;D++){const O=M[D];O.setSize&&O.setSize(L,I)}},this.setEffects=function(L){M=L,S=M.length>0&&M[0].isRenderPass===!0;const I=o.width,D=o.height;for(let O=0;O<M.length;O++){const P=M[O];P.setSize&&P.setSize(I,D)}},this.begin=function(L,I){if(x||L.toneMapping===ei&&M.length===0)return!1;if(R=I,I!==null){const D=I.width,O=I.height;(o.width!==D||o.height!==O)&&this.setSize(D,O)}return S===!1&&L.setRenderTarget(o),E=L.toneMapping,L.toneMapping=ei,!0},this.hasRenderPass=function(){return S},this.end=function(L,I){L.toneMapping=E,x=!0;let D=o,O=l;for(let P=0;P<M.length;P++){const G=M[P];if(G.enabled!==!1&&(G.render(L,O,D,I),G.needsSwap!==!1)){const A=D;D=O,O=A}}if(_!==L.outputColorSpace||m!==L.toneMapping){_=L.outputColorSpace,m=L.toneMapping,h.defines={},yt.getTransfer(_)===Rt&&(h.defines.SRGB_TRANSFER="");const P=uy[m];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(R),L.render(f,g),R=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),l.dispose(),u.dispose(),h.dispose()}}const bd=new rn,_l=new us(1,1),wd=new dd,Td=new Cv,Ad=new gd,_u=[],vu=[],xu=new Float32Array(16),Su=new Float32Array(9),yu=new Float32Array(4);function Ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=_u[s];if(o===void 0&&(o=new Float32Array(s),_u[s]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(o,u)}return o}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xa(i,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function my(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function gy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Zt(t,n)}}function _y(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Su.set(n),i.uniformMatrix3fv(this.addr,!1,Su),Zt(t,n)}}function vy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;xu.set(n),i.uniformMatrix4fv(this.addr,!1,xu),Zt(t,n)}}function xy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function My(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function Ey(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function Ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Ay(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(_l.compareFunction=t.isReversedDepthBuffer()?Pl:Rl,o=_l):o=bd,t.setTexture2D(e||o,s)}function Cy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Td,s)}function Ry(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ad,s)}function Py(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wd,s)}function Dy(i){switch(i){case 5126:return fy;case 35664:return hy;case 35665:return py;case 35666:return my;case 35674:return gy;case 35675:return _y;case 35676:return vy;case 5124:case 35670:return xy;case 35667:case 35671:return Sy;case 35668:case 35672:return yy;case 35669:case 35673:return My;case 5125:return Ey;case 36294:return by;case 36295:return wy;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ay;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Py}}function Fy(i,e){i.uniform1fv(this.addr,e)}function Ly(i,e){const t=Ir(e,this.size,2);i.uniform2fv(this.addr,t)}function Iy(i,e){const t=Ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Uy(i,e){const t=Ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Ny(i,e){const t=Ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Oy(i,e){const t=Ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function By(i,e){const t=Ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ky(i,e){i.uniform1iv(this.addr,e)}function zy(i,e){i.uniform2iv(this.addr,e)}function Gy(i,e){i.uniform3iv(this.addr,e)}function Vy(i,e){i.uniform4iv(this.addr,e)}function Hy(i,e){i.uniform1uiv(this.addr,e)}function Wy(i,e){i.uniform2uiv(this.addr,e)}function $y(i,e){i.uniform3uiv(this.addr,e)}function Xy(i,e){i.uniform4uiv(this.addr,e)}function jy(i,e,t){const n=this.cache,s=e.length,o=xa(t,s);Kt(n,o)||(i.uniform1iv(this.addr,o),Zt(n,o));let l;this.type===i.SAMPLER_2D_SHADOW?l=_l:l=bd;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||l,o[u])}function qy(i,e,t){const n=this.cache,s=e.length,o=xa(t,s);Kt(n,o)||(i.uniform1iv(this.addr,o),Zt(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Td,o[l])}function Yy(i,e,t){const n=this.cache,s=e.length,o=xa(t,s);Kt(n,o)||(i.uniform1iv(this.addr,o),Zt(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||Ad,o[l])}function Ky(i,e,t){const n=this.cache,s=e.length,o=xa(t,s);Kt(n,o)||(i.uniform1iv(this.addr,o),Zt(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||wd,o[l])}function Zy(i){switch(i){case 5126:return Fy;case 35664:return Ly;case 35665:return Iy;case 35666:return Uy;case 35674:return Ny;case 35675:return Oy;case 35676:return By;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Hy;case 36294:return Wy;case 36295:return $y;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Ky}}class Jy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dy(t.type)}}class Qy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zy(t.type)}}class eM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,t[u.id],n)}}}const Mo=/(\w+)(\])?(\[|\.)?/g;function Mu(i,e){i.seq.push(e),i.map[e.id]=e}function tM(i,e,t){const n=i.name,s=n.length;for(Mo.lastIndex=0;;){const o=Mo.exec(n),l=Mo.lastIndex;let u=o[1];const h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&l+2===s){Mu(t,f===void 0?new Jy(u,i,e):new Qy(u,i,e));break}else{let _=t.map[u];_===void 0&&(_=new eM(u),Mu(t,_)),t=_}}}class da{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const u=e.getActiveUniform(t,l),h=e.getUniformLocation(t,u.name);tM(u,h,this)}const s=[],o=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(l):o.push(l);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const u=t[o],h=n[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function Eu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const nM=37297;let iM=0;function rM(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const bu=new rt;function sM(i){yt._getMatrix(bu,yt.workingColorSpace,i);const e=`mat3( ${bu.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case fa:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+rM(i.getShaderSource(e),u)}else return o}function aM(i,e){const t=sM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oM={[Yu]:"Linear",[Ku]:"Reinhard",[Zu]:"Cineon",[Ml]:"ACESFilmic",[Qu]:"AgX",[ed]:"Neutral",[Ju]:"Custom"};function lM(i,e){const t=oM[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new K;function cM(){yt.getLuminanceCoefficients(sa);const i=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function dM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),l=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function Yr(i){return i!==""}function Tu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(hM,mM)}const pM=new Map;function mM(i,e){let t=at[e];if(t===void 0){const n=pM.get(e);if(n!==void 0)t=at[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(i){return i.replace(gM,_M)}function _M(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ru(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const vM={[es]:"SHADOWMAP_TYPE_PCF",[jr]:"SHADOWMAP_TYPE_VSM"};function xM(i){return vM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SM={[er]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE_UV"};function yM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":SM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const MM={[Cr]:"ENVMAP_MODE_REFRACTION"};function EM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bM={[qu]:"ENVMAP_BLENDING_MULTIPLY",[ov]:"ENVMAP_BLENDING_MIX",[lv]:"ENVMAP_BLENDING_ADD"};function wM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bM[i.combine]||"ENVMAP_BLENDING_NONE"}function TM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function AM(i,e,t,n){const s=i.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const h=xM(t),f=yM(t),g=EM(t),_=wM(t),m=TM(t),x=uM(t),E=dM(o),R=s.createProgram();let M,S,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Yr).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Yr).join(`
`),S.length>0&&(S+=`
`)):(M=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),S=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?at.tonemapping_pars_fragment:"",t.toneMapping!==ei?lM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,aM("linearToOutputTexel",t.outputColorSpace),cM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),l=vl(l),l=Tu(l,t),l=Au(l,t),u=vl(u),u=Tu(u,t),u=Au(u,t),l=Cu(l),u=Cu(u),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=L+M+l,D=L+S+u,O=Eu(s,s.VERTEX_SHADER,I),P=Eu(s,s.FRAGMENT_SHADER,D);s.attachShader(R,O),s.attachShader(R,P),t.index0AttributeName!==void 0?s.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(R,0,"position"),s.linkProgram(R);function G(k){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(R)||"",J=s.getShaderInfoLog(O)||"",Y=s.getShaderInfoLog(P)||"",ie=q.trim(),Z=J.trim(),ne=Y.trim();let Se=!0,pe=!0;if(s.getProgramParameter(R,s.LINK_STATUS)===!1)if(Se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,R,O,P);else{const Re=wu(s,O,"vertex"),Ue=wu(s,P,"fragment");St("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(R,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+Re+`
`+Ue)}else ie!==""?et("WebGLProgram: Program Info Log:",ie):(Z===""||ne==="")&&(pe=!1);pe&&(k.diagnostics={runnable:Se,programLog:ie,vertexShader:{log:Z,prefix:M},fragmentShader:{log:ne,prefix:S}})}s.deleteShader(O),s.deleteShader(P),A=new da(s,R),F=fM(s,R)}let A;this.getUniforms=function(){return A===void 0&&G(this),A};let F;this.getAttributes=function(){return F===void 0&&G(this),F};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(R,nM)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=O,this.fragmentShader=P,this}let CM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new PM(e),t.set(e,n)),n}}class PM{constructor(e){this.id=CM++,this.code=e,this.usedTimes=0}}function DM(i,e,t,n,s,o){const l=new Fl,u=new RM,h=new Set,f=[],g=new Map,_=n.logarithmicDepthBuffer;let m=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return h.add(A),A===0?"uv":`uv${A}`}function R(A,F,B,k,q){const J=k.fog,Y=q.geometry,ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,Z=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ne=e.get(A.envMap||ie,Z),Se=ne&&ne.mapping===ga?ne.image.height:null,pe=x[A.type];A.precision!==null&&(m=n.getMaxPrecision(A.precision),m!==A.precision&&et("WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const Re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ue=Re!==void 0?Re.length:0;let Ae=0;Y.morphAttributes.position!==void 0&&(Ae=1),Y.morphAttributes.normal!==void 0&&(Ae=2),Y.morphAttributes.color!==void 0&&(Ae=3);let Xe,Ze,Je,oe;if(pe){const lt=Kn[pe];Xe=lt.vertexShader,Ze=lt.fragmentShader}else Xe=A.vertexShader,Ze=A.fragmentShader,u.update(A),Je=u.getVertexShaderID(A),oe=u.getFragmentShaderID(A);const ve=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),ye=q.isInstancedMesh===!0,$e=q.isBatchedMesh===!0,je=!!A.map,Mt=!!A.matcap,ot=!!ne,ft=!!A.aoMap,wt=!!A.lightMap,nt=!!A.bumpMap,Nt=!!A.normalMap,V=!!A.displacementMap,Pt=!!A.emissiveMap,ut=!!A.metalnessMap,_t=!!A.roughnessMap,Ne=A.anisotropy>0,U=A.clearcoat>0,b=A.dispersion>0,H=A.iridescence>0,ae=A.sheen>0,he=A.transmission>0,le=Ne&&!!A.anisotropyMap,Oe=U&&!!A.clearcoatMap,be=U&&!!A.clearcoatNormalMap,We=U&&!!A.clearcoatRoughnessMap,Ye=H&&!!A.iridescenceMap,xe=H&&!!A.iridescenceThicknessMap,Ee=ae&&!!A.sheenColorMap,Be=ae&&!!A.sheenRoughnessMap,ke=!!A.specularMap,Fe=!!A.specularColorMap,it=!!A.specularIntensityMap,W=he&&!!A.transmissionMap,we=he&&!!A.thicknessMap,Me=!!A.gradientMap,De=!!A.alphaMap,$=A.alphaTest>0,z=!!A.alphaHash,Le=!!A.extensions;let Ke=ei;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const vt={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:Xe,fragmentShader:Ze,defines:A.defines,customVertexShaderID:Je,customFragmentShaderID:oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:$e,batchingColor:$e&&q._colorsTexture!==null,instancing:ye,instancingColor:ye&&q.instanceColor!==null,instancingMorph:ye&&q.morphTexture!==null,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Pr,alphaToCoverage:!!A.alphaToCoverage,map:je,matcap:Mt,envMap:ot,envMapMode:ot&&ne.mapping,envMapCubeUVHeight:Se,aoMap:ft,lightMap:wt,bumpMap:nt,normalMap:Nt,displacementMap:V,emissiveMap:Pt,normalMapObjectSpace:Nt&&A.normalMapType===dv,normalMapTangentSpace:Nt&&A.normalMapType===cd,metalnessMap:ut,roughnessMap:_t,anisotropy:Ne,anisotropyMap:le,clearcoat:U,clearcoatMap:Oe,clearcoatNormalMap:be,clearcoatRoughnessMap:We,dispersion:b,iridescence:H,iridescenceMap:Ye,iridescenceThicknessMap:xe,sheen:ae,sheenColorMap:Ee,sheenRoughnessMap:Be,specularMap:ke,specularColorMap:Fe,specularIntensityMap:it,transmission:he,transmissionMap:W,thicknessMap:we,gradientMap:Me,opaque:A.transparent===!1&&A.blending===br&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:$,alphaHash:z,combine:A.combine,mapUv:je&&E(A.map.channel),aoMapUv:ft&&E(A.aoMap.channel),lightMapUv:wt&&E(A.lightMap.channel),bumpMapUv:nt&&E(A.bumpMap.channel),normalMapUv:Nt&&E(A.normalMap.channel),displacementMapUv:V&&E(A.displacementMap.channel),emissiveMapUv:Pt&&E(A.emissiveMap.channel),metalnessMapUv:ut&&E(A.metalnessMap.channel),roughnessMapUv:_t&&E(A.roughnessMap.channel),anisotropyMapUv:le&&E(A.anisotropyMap.channel),clearcoatMapUv:Oe&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(A.sheenRoughnessMap.channel),specularMapUv:ke&&E(A.specularMap.channel),specularColorMapUv:Fe&&E(A.specularColorMap.channel),specularIntensityMapUv:it&&E(A.specularIntensityMap.channel),transmissionMapUv:W&&E(A.transmissionMap.channel),thicknessMapUv:we&&E(A.thicknessMap.channel),alphaMapUv:De&&E(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Nt||Ne),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(je||De),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||Y.attributes.normal===void 0&&Nt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:re,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ae,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:je&&A.map.isVideoTexture===!0&&yt.getTransfer(A.map.colorSpace)===Rt,decodeVideoTextureEmissive:Pt&&A.emissiveMap.isVideoTexture===!0&&yt.getTransfer(A.emissiveMap.colorSpace)===Rt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Mn,flipSided:A.side===gn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Le&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&A.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return vt.vertexUv1s=h.has(1),vt.vertexUv2s=h.has(2),vt.vertexUv3s=h.has(3),h.clear(),vt}function M(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const B in A.defines)F.push(B),F.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(S(F,A),L(F,A),F.push(i.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function S(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function L(A,F){l.disableAll(),F.instancing&&l.enable(0),F.instancingColor&&l.enable(1),F.instancingMorph&&l.enable(2),F.matcap&&l.enable(3),F.envMap&&l.enable(4),F.normalMapObjectSpace&&l.enable(5),F.normalMapTangentSpace&&l.enable(6),F.clearcoat&&l.enable(7),F.iridescence&&l.enable(8),F.alphaTest&&l.enable(9),F.vertexColors&&l.enable(10),F.vertexAlphas&&l.enable(11),F.vertexUv1s&&l.enable(12),F.vertexUv2s&&l.enable(13),F.vertexUv3s&&l.enable(14),F.vertexTangents&&l.enable(15),F.anisotropy&&l.enable(16),F.alphaHash&&l.enable(17),F.batching&&l.enable(18),F.dispersion&&l.enable(19),F.batchingColor&&l.enable(20),F.gradientMap&&l.enable(21),A.push(l.mask),l.disableAll(),F.fog&&l.enable(0),F.useFog&&l.enable(1),F.flatShading&&l.enable(2),F.logarithmicDepthBuffer&&l.enable(3),F.reversedDepthBuffer&&l.enable(4),F.skinning&&l.enable(5),F.morphTargets&&l.enable(6),F.morphNormals&&l.enable(7),F.morphColors&&l.enable(8),F.premultipliedAlpha&&l.enable(9),F.shadowMapEnabled&&l.enable(10),F.doubleSided&&l.enable(11),F.flipSided&&l.enable(12),F.useDepthPacking&&l.enable(13),F.dithering&&l.enable(14),F.transmission&&l.enable(15),F.sheen&&l.enable(16),F.opaque&&l.enable(17),F.pointsUvs&&l.enable(18),F.decodeVideoTexture&&l.enable(19),F.decodeVideoTextureEmissive&&l.enable(20),F.alphaToCoverage&&l.enable(21),A.push(l.mask)}function I(A){const F=x[A.type];let B;if(F){const k=Kn[F];B=qv.clone(k.uniforms)}else B=A.uniforms;return B}function D(A,F){let B=g.get(F);return B!==void 0?++B.usedTimes:(B=new AM(i,F,A,s),f.push(B),g.set(F,B)),B}function O(A){if(--A.usedTimes===0){const F=f.indexOf(A);f[F]=f[f.length-1],f.pop(),g.delete(A.cacheKey),A.destroy()}}function P(A){u.remove(A)}function G(){u.dispose()}return{getParameters:R,getProgramCacheKey:M,getUniforms:I,acquireProgram:D,releaseProgram:O,releaseShaderCache:P,programs:f,dispose:G}}function FM(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function n(l){i.delete(l)}function s(l,u,h){i.get(l)[u]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function LM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Pu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Du(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function u(m,x,E,R,M,S){let L=i[e];return L===void 0?(L={id:m.id,object:m,geometry:x,material:E,materialVariant:l(m),groupOrder:R,renderOrder:m.renderOrder,z:M,group:S},i[e]=L):(L.id=m.id,L.object=m,L.geometry=x,L.material=E,L.materialVariant=l(m),L.groupOrder=R,L.renderOrder=m.renderOrder,L.z=M,L.group=S),e++,L}function h(m,x,E,R,M,S){const L=u(m,x,E,R,M,S);E.transmission>0?n.push(L):E.transparent===!0?s.push(L):t.push(L)}function f(m,x,E,R,M,S){const L=u(m,x,E,R,M,S);E.transmission>0?n.unshift(L):E.transparent===!0?s.unshift(L):t.unshift(L)}function g(m,x){t.length>1&&t.sort(m||LM),n.length>1&&n.sort(x||Pu),s.length>1&&s.sort(x||Pu)}function _(){for(let m=e,x=i.length;m<x;m++){const E=i[m];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:h,unshift:f,finish:_,sort:g}}function IM(){let i=new WeakMap;function e(n,s){const o=i.get(n);let l;return o===void 0?(l=new Du,i.set(n,[l])):s>=o.length?(l=new Du,o.push(l)):l=o[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function UM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new gt};break;case"SpotLight":t={position:new K,direction:new K,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function NM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let OM=0;function BM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kM(i){const e=new UM,t=NM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new K);const s=new K,o=new Ut,l=new Ut;function u(f){let g=0,_=0,m=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let x=0,E=0,R=0,M=0,S=0,L=0,I=0,D=0,O=0,P=0,G=0;f.sort(BM);for(let F=0,B=f.length;F<B;F++){const k=f[F],q=k.color,J=k.intensity,Y=k.distance;let ie=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Rr?ie=k.shadow.map.texture:ie=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=q.r*J,_+=q.g*J,m+=q.b*J;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(k.sh.coefficients[Z],J);G++}else if(k.isDirectionalLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ne=k.shadow,Se=t.get(k);Se.shadowIntensity=ne.intensity,Se.shadowBias=ne.bias,Se.shadowNormalBias=ne.normalBias,Se.shadowRadius=ne.radius,Se.shadowMapSize=ne.mapSize,n.directionalShadow[x]=Se,n.directionalShadowMap[x]=ie,n.directionalShadowMatrix[x]=k.shadow.matrix,L++}n.directional[x]=Z,x++}else if(k.isSpotLight){const Z=e.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(q).multiplyScalar(J),Z.distance=Y,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,n.spot[R]=Z;const ne=k.shadow;if(k.map&&(n.spotLightMap[O]=k.map,O++,ne.updateMatrices(k),k.castShadow&&P++),n.spotLightMatrix[R]=ne.matrix,k.castShadow){const Se=t.get(k);Se.shadowIntensity=ne.intensity,Se.shadowBias=ne.bias,Se.shadowNormalBias=ne.normalBias,Se.shadowRadius=ne.radius,Se.shadowMapSize=ne.mapSize,n.spotShadow[R]=Se,n.spotShadowMap[R]=ie,D++}R++}else if(k.isRectAreaLight){const Z=e.get(k);Z.color.copy(q).multiplyScalar(J),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),n.rectArea[M]=Z,M++}else if(k.isPointLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const ne=k.shadow,Se=t.get(k);Se.shadowIntensity=ne.intensity,Se.shadowBias=ne.bias,Se.shadowNormalBias=ne.normalBias,Se.shadowRadius=ne.radius,Se.shadowMapSize=ne.mapSize,Se.shadowCameraNear=ne.camera.near,Se.shadowCameraFar=ne.camera.far,n.pointShadow[E]=Se,n.pointShadowMap[E]=ie,n.pointShadowMatrix[E]=k.shadow.matrix,I++}n.point[E]=Z,E++}else if(k.isHemisphereLight){const Z=e.get(k);Z.skyColor.copy(k.color).multiplyScalar(J),Z.groundColor.copy(k.groundColor).multiplyScalar(J),n.hemi[S]=Z,S++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=_,n.ambient[2]=m;const A=n.hash;(A.directionalLength!==x||A.pointLength!==E||A.spotLength!==R||A.rectAreaLength!==M||A.hemiLength!==S||A.numDirectionalShadows!==L||A.numPointShadows!==I||A.numSpotShadows!==D||A.numSpotMaps!==O||A.numLightProbes!==G)&&(n.directional.length=x,n.spot.length=R,n.rectArea.length=M,n.point.length=E,n.hemi.length=S,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=L,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=D+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=G,A.directionalLength=x,A.pointLength=E,A.spotLength=R,A.rectAreaLength=M,A.hemiLength=S,A.numDirectionalShadows=L,A.numPointShadows=I,A.numSpotShadows=D,A.numSpotMaps=O,A.numLightProbes=G,n.version=OM++)}function h(f,g){let _=0,m=0,x=0,E=0,R=0;const M=g.matrixWorldInverse;for(let S=0,L=f.length;S<L;S++){const I=f[S];if(I.isDirectionalLight){const D=n.directional[_];D.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(M),_++}else if(I.isSpotLight){const D=n.spot[x];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(M),x++}else if(I.isRectAreaLight){const D=n.rectArea[E];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(M),l.identity(),o.copy(I.matrixWorld),o.premultiply(M),l.extractRotation(o),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(l),D.halfHeight.applyMatrix4(l),E++}else if(I.isPointLight){const D=n.point[m];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(M),m++}else if(I.isHemisphereLight){const D=n.hemi[R];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:u,setupView:h,state:n}}function Fu(i){const e=new kM(i),t=[],n=[];function s(g){f.camera=g,t.length=0,n.length=0}function o(g){t.push(g)}function l(g){n.push(g)}function u(){e.setup(t)}function h(g){e.setupView(t,g)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l}}function zM(i){let e=new WeakMap;function t(s,o=0){const l=e.get(s);let u;return l===void 0?(u=new Fu(i),e.set(s,[u])):o>=l.length?(u=new Fu(i),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
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
}`,HM=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],WM=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Lu=new Ut,Xr=new K,Eo=new K;function $M(i,e,t){let n=new Il;const s=new Et,o=new Et,l=new zt,u=new Jv,h=new Qv,f={},g=t.maxTextureSize,_={[Fi]:gn,[gn]:Fi,[Mn]:Mn},m=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:GM,fragmentShader:VM}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const E=new Rn;E.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new _n(E,m),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=es;let S=this.type;this.render=function(P,G,A){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===V_&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=es);const F=i.getRenderTarget(),B=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),q=i.state;q.setBlending(pi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const J=S!==this.type;J&&G.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(ie=>ie.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,ie=P.length;Y<ie;Y++){const Z=P[Y],ne=Z.shadow;if(ne===void 0){et("WebGLShadowMap:",Z,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const Se=ne.getFrameExtents();s.multiply(Se),o.copy(ne.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(o.x=Math.floor(g/Se.x),s.x=o.x*Se.x,ne.mapSize.x=o.x),s.y>g&&(o.y=Math.floor(g/Se.y),s.y=o.y*Se.y,ne.mapSize.y=o.y));const pe=i.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=pe,ne.map===null||J===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===jr){if(Z.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new ti(s.x,s.y,{format:Rr,type:gi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),ne.map.texture.name=Z.name+".shadowMap",ne.map.depthTexture=new us(s.x,s.y,Zn),ne.map.depthTexture.name=Z.name+".shadowMapDepth",ne.map.depthTexture.format=_i,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=nn,ne.map.depthTexture.magFilter=nn}else Z.isPointLight?(ne.map=new Ed(s.x),ne.map.depthTexture=new Xv(s.x,ni)):(ne.map=new ti(s.x,s.y),ne.map.depthTexture=new us(s.x,s.y,ni)),ne.map.depthTexture.name=Z.name+".shadowMap",ne.map.depthTexture.format=_i,this.type===es?(ne.map.depthTexture.compareFunction=pe?Pl:Rl,ne.map.depthTexture.minFilter=cn,ne.map.depthTexture.magFilter=cn):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=nn,ne.map.depthTexture.magFilter=nn);ne.camera.updateProjectionMatrix()}const Re=ne.map.isWebGLCubeRenderTarget?6:1;for(let Ue=0;Ue<Re;Ue++){if(ne.map.isWebGLCubeRenderTarget)i.setRenderTarget(ne.map,Ue),i.clear();else{Ue===0&&(i.setRenderTarget(ne.map),i.clear());const Ae=ne.getViewport(Ue);l.set(o.x*Ae.x,o.y*Ae.y,o.x*Ae.z,o.y*Ae.w),q.viewport(l)}if(Z.isPointLight){const Ae=ne.camera,Xe=ne.matrix,Ze=Z.distance||Ae.far;Ze!==Ae.far&&(Ae.far=Ze,Ae.updateProjectionMatrix()),Xr.setFromMatrixPosition(Z.matrixWorld),Ae.position.copy(Xr),Eo.copy(Ae.position),Eo.add(HM[Ue]),Ae.up.copy(WM[Ue]),Ae.lookAt(Eo),Ae.updateMatrixWorld(),Xe.makeTranslation(-Xr.x,-Xr.y,-Xr.z),Lu.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(Lu,Ae.coordinateSystem,Ae.reversedDepth)}else ne.updateMatrices(Z);n=ne.getFrustum(),D(G,A,ne.camera,Z,this.type)}ne.isPointLightShadow!==!0&&this.type===jr&&L(ne,A),ne.needsUpdate=!1}S=this.type,M.needsUpdate=!1,i.setRenderTarget(F,B,k)};function L(P,G){const A=e.update(R);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ti(s.x,s.y,{format:Rr,type:gi})),m.uniforms.shadow_pass.value=P.map.depthTexture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(G,null,A,m,R,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(G,null,A,x,R,null)}function I(P,G,A,F){let B=null;const k=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)B=k;else if(B=A.isPointLight===!0?h:u,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const q=B.uuid,J=G.uuid;let Y=f[q];Y===void 0&&(Y={},f[q]=Y);let ie=Y[J];ie===void 0&&(ie=B.clone(),Y[J]=ie,G.addEventListener("dispose",O)),B=ie}if(B.visible=G.visible,B.wireframe=G.wireframe,F===jr?B.side=G.shadowSide!==null?G.shadowSide:G.side:B.side=G.shadowSide!==null?G.shadowSide:_[G.side],B.alphaMap=G.alphaMap,B.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,B.map=G.map,B.clipShadows=G.clipShadows,B.clippingPlanes=G.clippingPlanes,B.clipIntersection=G.clipIntersection,B.displacementMap=G.displacementMap,B.displacementScale=G.displacementScale,B.displacementBias=G.displacementBias,B.wireframeLinewidth=G.wireframeLinewidth,B.linewidth=G.linewidth,A.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const q=i.properties.get(B);q.light=A}return B}function D(P,G,A,F,B){if(P.visible===!1)return;if(P.layers.test(G.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===jr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const J=e.update(P),Y=P.material;if(Array.isArray(Y)){const ie=J.groups;for(let Z=0,ne=ie.length;Z<ne;Z++){const Se=ie[Z],pe=Y[Se.materialIndex];if(pe&&pe.visible){const Re=I(P,pe,F,B);P.onBeforeShadow(i,P,G,A,J,Re,Se),i.renderBufferDirect(A,null,J,Re,P,Se),P.onAfterShadow(i,P,G,A,J,Re,Se)}}}else if(Y.visible){const ie=I(P,Y,F,B);P.onBeforeShadow(i,P,G,A,J,ie,null),i.renderBufferDirect(A,null,J,ie,P,null),P.onAfterShadow(i,P,G,A,J,ie,null)}}const q=P.children;for(let J=0,Y=q.length;J<Y;J++)D(q[J],G,A,F,B)}function O(P){P.target.removeEventListener("dispose",O);for(const A in f){const F=f[A],B=P.target.uuid;B in F&&(F[B].dispose(),delete F[B])}}}function XM(i,e){function t(){let W=!1;const we=new zt;let Me=null;const De=new zt(0,0,0,0);return{setMask:function($){Me!==$&&!W&&(i.colorMask($,$,$,$),Me=$)},setLocked:function($){W=$},setClear:function($,z,Le,Ke,vt){vt===!0&&($*=Ke,z*=Ke,Le*=Ke),we.set($,z,Le,Ke),De.equals(we)===!1&&(i.clearColor($,z,Le,Ke),De.copy(we))},reset:function(){W=!1,Me=null,De.set(-1,0,0,0)}}}function n(){let W=!1,we=!1,Me=null,De=null,$=null;return{setReversed:function(z){if(we!==z){const Le=e.get("EXT_clip_control");z?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),we=z;const Ke=$;$=null,this.setClear(Ke)}},getReversed:function(){return we},setTest:function(z){z?ve(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(z){Me!==z&&!W&&(i.depthMask(z),Me=z)},setFunc:function(z){if(we&&(z=yv[z]),De!==z){switch(z){case Po:i.depthFunc(i.NEVER);break;case Do:i.depthFunc(i.ALWAYS);break;case Fo:i.depthFunc(i.LESS);break;case Ar:i.depthFunc(i.LEQUAL);break;case Lo:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case Uo:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=z}},setLocked:function(z){W=z},setClear:function(z){$!==z&&($=z,we&&(z=1-z),i.clearDepth(z))},reset:function(){W=!1,Me=null,De=null,$=null,we=!1}}}function s(){let W=!1,we=null,Me=null,De=null,$=null,z=null,Le=null,Ke=null,vt=null;return{setTest:function(lt){W||(lt?ve(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(lt){we!==lt&&!W&&(i.stencilMask(lt),we=lt)},setFunc:function(lt,Pn,Wt){(Me!==lt||De!==Pn||$!==Wt)&&(i.stencilFunc(lt,Pn,Wt),Me=lt,De=Pn,$=Wt)},setOp:function(lt,Pn,Wt){(z!==lt||Le!==Pn||Ke!==Wt)&&(i.stencilOp(lt,Pn,Wt),z=lt,Le=Pn,Ke=Wt)},setLocked:function(lt){W=lt},setClear:function(lt){vt!==lt&&(i.clearStencil(lt),vt=lt)},reset:function(){W=!1,we=null,Me=null,De=null,$=null,z=null,Le=null,Ke=null,vt=null}}}const o=new t,l=new n,u=new s,h=new WeakMap,f=new WeakMap;let g={},_={},m=new WeakMap,x=[],E=null,R=!1,M=null,S=null,L=null,I=null,D=null,O=null,P=null,G=new gt(0,0,0),A=0,F=!1,B=null,k=null,q=null,J=null,Y=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ne=0;const Se=i.getParameter(i.VERSION);Se.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Se)[1]),Z=ne>=1):Se.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),Z=ne>=2);let pe=null,Re={};const Ue=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Xe=new zt().fromArray(Ue),Ze=new zt().fromArray(Ae);function Je(W,we,Me,De){const $=new Uint8Array(4),z=i.createTexture();i.bindTexture(W,z),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Me;Le++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(we+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return z}const oe={};oe[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(i.DEPTH_TEST),l.setFunc(Ar),nt(!1),Nt(Fc),ve(i.CULL_FACE),ft(pi);function ve(W){g[W]!==!0&&(i.enable(W),g[W]=!0)}function re(W){g[W]!==!1&&(i.disable(W),g[W]=!1)}function ye(W,we){return _[W]!==we?(i.bindFramebuffer(W,we),_[W]=we,W===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=we),W===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=we),!0):!1}function $e(W,we){let Me=x,De=!1;if(W){Me=m.get(we),Me===void 0&&(Me=[],m.set(we,Me));const $=W.textures;if(Me.length!==$.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let z=0,Le=$.length;z<Le;z++)Me[z]=i.COLOR_ATTACHMENT0+z;Me.length=$.length,De=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,De=!0);De&&i.drawBuffers(Me)}function je(W){return E!==W?(i.useProgram(W),E=W,!0):!1}const Mt={[Yi]:i.FUNC_ADD,[W_]:i.FUNC_SUBTRACT,[$_]:i.FUNC_REVERSE_SUBTRACT};Mt[X_]=i.MIN,Mt[j_]=i.MAX;const ot={[q_]:i.ZERO,[Y_]:i.ONE,[K_]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[nv]:i.SRC_ALPHA_SATURATE,[ev]:i.DST_COLOR,[J_]:i.DST_ALPHA,[Z_]:i.ONE_MINUS_SRC_COLOR,[Ro]:i.ONE_MINUS_SRC_ALPHA,[tv]:i.ONE_MINUS_DST_COLOR,[Q_]:i.ONE_MINUS_DST_ALPHA,[iv]:i.CONSTANT_COLOR,[rv]:i.ONE_MINUS_CONSTANT_COLOR,[sv]:i.CONSTANT_ALPHA,[av]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(W,we,Me,De,$,z,Le,Ke,vt,lt){if(W===pi){R===!0&&(re(i.BLEND),R=!1);return}if(R===!1&&(ve(i.BLEND),R=!0),W!==H_){if(W!==M||lt!==F){if((S!==Yi||D!==Yi)&&(i.blendEquation(i.FUNC_ADD),S=Yi,D=Yi),lt)switch(W){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:St("WebGLState: Invalid blending: ",W);break}else switch(W){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",W);break}L=null,I=null,O=null,P=null,G.set(0,0,0),A=0,M=W,F=lt}return}$=$||we,z=z||Me,Le=Le||De,(we!==S||$!==D)&&(i.blendEquationSeparate(Mt[we],Mt[$]),S=we,D=$),(Me!==L||De!==I||z!==O||Le!==P)&&(i.blendFuncSeparate(ot[Me],ot[De],ot[z],ot[Le]),L=Me,I=De,O=z,P=Le),(Ke.equals(G)===!1||vt!==A)&&(i.blendColor(Ke.r,Ke.g,Ke.b,vt),G.copy(Ke),A=vt),M=W,F=!1}function wt(W,we){W.side===Mn?re(i.CULL_FACE):ve(i.CULL_FACE);let Me=W.side===gn;we&&(Me=!Me),nt(Me),W.blending===br&&W.transparent===!1?ft(pi):ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),o.setMask(W.colorWrite);const De=W.stencilWrite;u.setTest(De),De&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Pt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(W){B!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),B=W)}function Nt(W){W!==z_?(ve(i.CULL_FACE),W!==k&&(W===Fc?i.cullFace(i.BACK):W===G_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),k=W}function V(W){W!==q&&(Z&&i.lineWidth(W),q=W)}function Pt(W,we,Me){W?(ve(i.POLYGON_OFFSET_FILL),(J!==we||Y!==Me)&&(J=we,Y=Me,l.getReversed()&&(we=-we),i.polygonOffset(we,Me))):re(i.POLYGON_OFFSET_FILL)}function ut(W){W?ve(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function _t(W){W===void 0&&(W=i.TEXTURE0+ie-1),pe!==W&&(i.activeTexture(W),pe=W)}function Ne(W,we,Me){Me===void 0&&(pe===null?Me=i.TEXTURE0+ie-1:Me=pe);let De=Re[Me];De===void 0&&(De={type:void 0,texture:void 0},Re[Me]=De),(De.type!==W||De.texture!==we)&&(pe!==Me&&(i.activeTexture(Me),pe=Me),i.bindTexture(W,we||oe[W]),De.type=W,De.texture=we)}function U(){const W=Re[pe];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(W){St("WebGLState:",W)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(W){St("WebGLState:",W)}}function ae(){try{i.texSubImage2D(...arguments)}catch(W){St("WebGLState:",W)}}function he(){try{i.texSubImage3D(...arguments)}catch(W){St("WebGLState:",W)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(W){St("WebGLState:",W)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(W){St("WebGLState:",W)}}function be(){try{i.texStorage2D(...arguments)}catch(W){St("WebGLState:",W)}}function We(){try{i.texStorage3D(...arguments)}catch(W){St("WebGLState:",W)}}function Ye(){try{i.texImage2D(...arguments)}catch(W){St("WebGLState:",W)}}function xe(){try{i.texImage3D(...arguments)}catch(W){St("WebGLState:",W)}}function Ee(W){Xe.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Xe.copy(W))}function Be(W){Ze.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ze.copy(W))}function ke(W,we){let Me=f.get(we);Me===void 0&&(Me=new WeakMap,f.set(we,Me));let De=Me.get(W);De===void 0&&(De=i.getUniformBlockIndex(we,W.name),Me.set(W,De))}function Fe(W,we){const De=f.get(we).get(W);h.get(we)!==De&&(i.uniformBlockBinding(we,De,W.__bindingPointIndex),h.set(we,De))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},pe=null,Re={},_={},m=new WeakMap,x=[],E=null,R=!1,M=null,S=null,L=null,I=null,D=null,O=null,P=null,G=new gt(0,0,0),A=0,F=!1,B=null,k=null,q=null,J=null,Y=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ve,disable:re,bindFramebuffer:ye,drawBuffers:$e,useProgram:je,setBlending:ft,setMaterial:wt,setFlipSided:nt,setCullFace:Nt,setLineWidth:V,setPolygonOffset:Pt,setScissorTest:ut,activeTexture:_t,bindTexture:Ne,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:H,texImage2D:Ye,texImage3D:xe,updateUBOMapping:ke,uniformBlockBinding:Fe,texStorage2D:be,texStorage3D:We,texSubImage2D:ae,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:Oe,scissor:Ee,viewport:Be,reset:it}}function jM(i,e,t,n,s,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Et,g=new WeakMap;let _;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return x?new OffscreenCanvas(U,b):ls("canvas")}function R(U,b,H){let ae=1;const he=Ne(U);if((he.width>H||he.height>H)&&(ae=H/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const le=Math.floor(ae*he.width),Oe=Math.floor(ae*he.height);_===void 0&&(_=E(le,Oe));const be=b?E(le,Oe):_;return be.width=le,be.height=Oe,be.getContext("2d").drawImage(U,0,0,le,Oe),et("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+le+"x"+Oe+")."),be}else return"data"in U&&et("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){i.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(U,b,H,ae,he=!1){if(U!==null){if(i[U]!==void 0)return i[U];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let le=b;if(b===i.RED&&(H===i.FLOAT&&(le=i.R32F),H===i.HALF_FLOAT&&(le=i.R16F),H===i.UNSIGNED_BYTE&&(le=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.R8UI),H===i.UNSIGNED_SHORT&&(le=i.R16UI),H===i.UNSIGNED_INT&&(le=i.R32UI),H===i.BYTE&&(le=i.R8I),H===i.SHORT&&(le=i.R16I),H===i.INT&&(le=i.R32I)),b===i.RG&&(H===i.FLOAT&&(le=i.RG32F),H===i.HALF_FLOAT&&(le=i.RG16F),H===i.UNSIGNED_BYTE&&(le=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.RG8UI),H===i.UNSIGNED_SHORT&&(le=i.RG16UI),H===i.UNSIGNED_INT&&(le=i.RG32UI),H===i.BYTE&&(le=i.RG8I),H===i.SHORT&&(le=i.RG16I),H===i.INT&&(le=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.RGB8UI),H===i.UNSIGNED_SHORT&&(le=i.RGB16UI),H===i.UNSIGNED_INT&&(le=i.RGB32UI),H===i.BYTE&&(le=i.RGB8I),H===i.SHORT&&(le=i.RGB16I),H===i.INT&&(le=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),H===i.UNSIGNED_INT&&(le=i.RGBA32UI),H===i.BYTE&&(le=i.RGBA8I),H===i.SHORT&&(le=i.RGBA16I),H===i.INT&&(le=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),b===i.RGBA){const Oe=he?fa:yt.getTransfer(ae);H===i.FLOAT&&(le=i.RGBA32F),H===i.HALF_FLOAT&&(le=i.RGBA16F),H===i.UNSIGNED_BYTE&&(le=Oe===Rt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function D(U,b){let H;return U?b===null||b===ni||b===as?H=i.DEPTH24_STENCIL8:b===Zn?H=i.DEPTH32F_STENCIL8:b===ss&&(H=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ni||b===as?H=i.DEPTH_COMPONENT24:b===Zn?H=i.DEPTH_COMPONENT32F:b===ss&&(H=i.DEPTH_COMPONENT16),H}function O(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==nn&&U.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function P(U){const b=U.target;b.removeEventListener("dispose",P),A(b),b.isVideoTexture&&g.delete(b)}function G(U){const b=U.target;b.removeEventListener("dispose",G),B(b)}function A(U){const b=n.get(U);if(b.__webglInit===void 0)return;const H=U.source,ae=m.get(H);if(ae){const he=ae[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&F(U),Object.keys(ae).length===0&&m.delete(H)}n.remove(U)}function F(U){const b=n.get(U);i.deleteTexture(b.__webglTexture);const H=U.source,ae=m.get(H);delete ae[b.__cacheKey],l.memory.textures--}function B(U){const b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(b.__webglFramebuffer[ae]))for(let he=0;he<b.__webglFramebuffer[ae].length;he++)i.deleteFramebuffer(b.__webglFramebuffer[ae][he]);else i.deleteFramebuffer(b.__webglFramebuffer[ae]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ae])}else{if(Array.isArray(b.__webglFramebuffer))for(let ae=0;ae<b.__webglFramebuffer.length;ae++)i.deleteFramebuffer(b.__webglFramebuffer[ae]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ae=0;ae<b.__webglColorRenderbuffer.length;ae++)b.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ae]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=U.textures;for(let ae=0,he=H.length;ae<he;ae++){const le=n.get(H[ae]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),l.memory.textures--),n.remove(H[ae])}n.remove(U)}let k=0;function q(){k=0}function J(){const U=k;return U>=s.maxTextures&&et("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),k+=1,U}function Y(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ie(U,b){const H=n.get(U);if(U.isVideoTexture&&ut(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&H.__version!==U.version){const ae=U.image;if(ae===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,U,b);return}}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function Z(U,b){const H=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){oe(H,U,b);return}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function ne(U,b){const H=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){oe(H,U,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function Se(U,b){const H=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&H.__version!==U.version){ve(H,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const pe={[rs]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Oo]:i.MIRRORED_REPEAT},Re={[nn]:i.NEAREST,[cv]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Wa]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},Ue={[fv]:i.NEVER,[_v]:i.ALWAYS,[hv]:i.LESS,[Rl]:i.LEQUAL,[pv]:i.EQUAL,[Pl]:i.GEQUAL,[mv]:i.GREATER,[gv]:i.NOTEQUAL};function Ae(U,b){if(b.type===Zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===Wa||b.magFilter===Bs||b.magFilter===Zi||b.minFilter===cn||b.minFilter===Wa||b.minFilter===Bs||b.minFilter===Zi)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,pe[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,pe[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,pe[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Re[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Re[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==Bs&&b.minFilter!==Zi||b.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Xe(U,b){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",P));const ae=b.source;let he=m.get(ae);he===void 0&&(he={},m.set(ae,he));const le=Y(b);if(le!==U.__cacheKey){he[le]===void 0&&(he[le]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,H=!0),he[le].usedTimes++;const Oe=he[U.__cacheKey];Oe!==void 0&&(he[U.__cacheKey].usedTimes--,Oe.usedTimes===0&&F(b)),U.__cacheKey=le,U.__webglTexture=he[le].texture}return H}function Ze(U,b,H){return Math.floor(Math.floor(U/H)/b)}function Je(U,b,H,ae){const le=U.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,ae,b.data);else{le.sort((xe,Ee)=>xe.start-Ee.start);let Oe=0;for(let xe=1;xe<le.length;xe++){const Ee=le[Oe],Be=le[xe],ke=Ee.start+Ee.count,Fe=Ze(Be.start,b.width,4),it=Ze(Ee.start,b.width,4);Be.start<=ke+1&&Fe===it&&Ze(Be.start+Be.count-1,b.width,4)===Fe?Ee.count=Math.max(Ee.count,Be.start+Be.count-Ee.start):(++Oe,le[Oe]=Be)}le.length=Oe+1;const be=i.getParameter(i.UNPACK_ROW_LENGTH),We=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let xe=0,Ee=le.length;xe<Ee;xe++){const Be=le[xe],ke=Math.floor(Be.start/4),Fe=Math.ceil(Be.count/4),it=ke%b.width,W=Math.floor(ke/b.width),we=Fe,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,it),i.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,it,W,we,Me,H,ae,b.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function oe(U,b,H){let ae=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=i.TEXTURE_3D);const he=Xe(U,b),le=b.source;t.bindTexture(ae,U.__webglTexture,i.TEXTURE0+H);const Oe=n.get(le);if(le.version!==Oe.__version||he===!0){t.activeTexture(i.TEXTURE0+H);const be=yt.getPrimaries(yt.workingColorSpace),We=b.colorSpace===Pi?null:yt.getPrimaries(b.colorSpace),Ye=b.colorSpace===Pi||be===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let xe=R(b.image,!1,s.maxTextureSize);xe=_t(b,xe);const Ee=o.convert(b.format,b.colorSpace),Be=o.convert(b.type);let ke=I(b.internalFormat,Ee,Be,b.colorSpace,b.isVideoTexture);Ae(ae,b);let Fe;const it=b.mipmaps,W=b.isVideoTexture!==!0,we=Oe.__version===void 0||he===!0,Me=le.dataReady,De=O(b,xe);if(b.isDepthTexture)ke=D(b.format===Ji,b.type),we&&(W?t.texStorage2D(i.TEXTURE_2D,1,ke,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,ke,xe.width,xe.height,0,Ee,Be,null));else if(b.isDataTexture)if(it.length>0){W&&we&&t.texStorage2D(i.TEXTURE_2D,De,ke,it[0].width,it[0].height);for(let $=0,z=it.length;$<z;$++)Fe=it[$],W?Me&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Fe.width,Fe.height,Ee,Be,Fe.data):t.texImage2D(i.TEXTURE_2D,$,ke,Fe.width,Fe.height,0,Ee,Be,Fe.data);b.generateMipmaps=!1}else W?(we&&t.texStorage2D(i.TEXTURE_2D,De,ke,xe.width,xe.height),Me&&Je(b,xe,Ee,Be)):t.texImage2D(i.TEXTURE_2D,0,ke,xe.width,xe.height,0,Ee,Be,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,ke,it[0].width,it[0].height,xe.depth);for(let $=0,z=it.length;$<z;$++)if(Fe=it[$],b.format!==kn)if(Ee!==null)if(W){if(Me)if(b.layerUpdates.size>0){const Le=uu(Fe.width,Fe.height,b.format,b.type);for(const Ke of b.layerUpdates){const vt=Fe.data.subarray(Ke*Le/Fe.data.BYTES_PER_ELEMENT,(Ke+1)*Le/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Ke,Fe.width,Fe.height,1,Ee,vt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Fe.width,Fe.height,xe.depth,Ee,Fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ke,Fe.width,Fe.height,xe.depth,0,Fe.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Fe.width,Fe.height,xe.depth,Ee,Be,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,ke,Fe.width,Fe.height,xe.depth,0,Ee,Be,Fe.data)}else{W&&we&&t.texStorage2D(i.TEXTURE_2D,De,ke,it[0].width,it[0].height);for(let $=0,z=it.length;$<z;$++)Fe=it[$],b.format!==kn?Ee!==null?W?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Fe.width,Fe.height,Ee,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,ke,Fe.width,Fe.height,0,Fe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Me&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Fe.width,Fe.height,Ee,Be,Fe.data):t.texImage2D(i.TEXTURE_2D,$,ke,Fe.width,Fe.height,0,Ee,Be,Fe.data)}else if(b.isDataArrayTexture)if(W){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,ke,xe.width,xe.height,xe.depth),Me)if(b.layerUpdates.size>0){const $=uu(xe.width,xe.height,b.format,b.type);for(const z of b.layerUpdates){const Le=xe.data.subarray(z*$/xe.data.BYTES_PER_ELEMENT,(z+1)*$/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,z,xe.width,xe.height,1,Ee,Be,Le)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ee,Be,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,xe.width,xe.height,xe.depth,0,Ee,Be,xe.data);else if(b.isData3DTexture)W?(we&&t.texStorage3D(i.TEXTURE_3D,De,ke,xe.width,xe.height,xe.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ee,Be,xe.data)):t.texImage3D(i.TEXTURE_3D,0,ke,xe.width,xe.height,xe.depth,0,Ee,Be,xe.data);else if(b.isFramebufferTexture){if(we)if(W)t.texStorage2D(i.TEXTURE_2D,De,ke,xe.width,xe.height);else{let $=xe.width,z=xe.height;for(let Le=0;Le<De;Le++)t.texImage2D(i.TEXTURE_2D,Le,ke,$,z,0,Ee,Be,null),$>>=1,z>>=1}}else if(it.length>0){if(W&&we){const $=Ne(it[0]);t.texStorage2D(i.TEXTURE_2D,De,ke,$.width,$.height)}for(let $=0,z=it.length;$<z;$++)Fe=it[$],W?Me&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee,Be,Fe):t.texImage2D(i.TEXTURE_2D,$,ke,Ee,Be,Fe);b.generateMipmaps=!1}else if(W){if(we){const $=Ne(xe);t.texStorage2D(i.TEXTURE_2D,De,ke,$.width,$.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Be,xe)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ee,Be,xe);M(b)&&S(ae),Oe.__version=le.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ve(U,b,H){if(b.image.length!==6)return;const ae=Xe(U,b),he=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+H);const le=n.get(he);if(he.version!==le.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);const Oe=yt.getPrimaries(yt.workingColorSpace),be=b.colorSpace===Pi?null:yt.getPrimaries(b.colorSpace),We=b.colorSpace===Pi||Oe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,xe=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let z=0;z<6;z++)!Ye&&!xe?Ee[z]=R(b.image[z],!0,s.maxCubemapSize):Ee[z]=xe?b.image[z].image:b.image[z],Ee[z]=_t(b,Ee[z]);const Be=Ee[0],ke=o.convert(b.format,b.colorSpace),Fe=o.convert(b.type),it=I(b.internalFormat,ke,Fe,b.colorSpace),W=b.isVideoTexture!==!0,we=le.__version===void 0||ae===!0,Me=he.dataReady;let De=O(b,Be);Ae(i.TEXTURE_CUBE_MAP,b);let $;if(Ye){W&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,it,Be.width,Be.height);for(let z=0;z<6;z++){$=Ee[z].mipmaps;for(let Le=0;Le<$.length;Le++){const Ke=$[Le];b.format!==kn?ke!==null?W?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le,0,0,Ke.width,Ke.height,ke,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le,it,Ke.width,Ke.height,0,Ke.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le,0,0,Ke.width,Ke.height,ke,Fe,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le,it,Ke.width,Ke.height,0,ke,Fe,Ke.data)}}}else{if($=b.mipmaps,W&&we){$.length>0&&De++;const z=Ne(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,it,z.width,z.height)}for(let z=0;z<6;z++)if(xe){W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Ee[z].width,Ee[z].height,ke,Fe,Ee[z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,it,Ee[z].width,Ee[z].height,0,ke,Fe,Ee[z].data);for(let Le=0;Le<$.length;Le++){const vt=$[Le].image[z].image;W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le+1,0,0,vt.width,vt.height,ke,Fe,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le+1,it,vt.width,vt.height,0,ke,Fe,vt.data)}}else{W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ke,Fe,Ee[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,it,ke,Fe,Ee[z]);for(let Le=0;Le<$.length;Le++){const Ke=$[Le];W?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le+1,0,0,ke,Fe,Ke.image[z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le+1,it,ke,Fe,Ke.image[z])}}}M(b)&&S(i.TEXTURE_CUBE_MAP),le.__version=he.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function re(U,b,H,ae,he,le){const Oe=o.convert(H.format,H.colorSpace),be=o.convert(H.type),We=I(H.internalFormat,Oe,be,H.colorSpace),Ye=n.get(b),xe=n.get(H);if(xe.__renderTarget=b,!Ye.__hasExternalTextures){const Ee=Math.max(1,b.width>>le),Be=Math.max(1,b.height>>le);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,le,We,Ee,Be,b.depth,0,Oe,be,null):t.texImage2D(he,le,We,Ee,Be,0,Oe,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Pt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,he,xe.__webglTexture,0,V(b)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,he,xe.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(U,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){const ae=b.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,le=D(b.stencilBuffer,he),Oe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(b),le,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(b),le,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,le,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,U)}else{const ae=b.textures;for(let he=0;he<ae.length;he++){const le=ae[he],Oe=o.convert(le.format,le.colorSpace),be=o.convert(le.type),We=I(le.internalFormat,Oe,be,le.colorSpace);Pt(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(b),We,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(b),We,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,We,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(U,b,H){const ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,b.depthTexture);const Ye=o.convert(b.depthTexture.format),xe=o.convert(b.depthTexture.type);let Ee;b.depthTexture.format===_i?Ee=i.DEPTH_COMPONENT24:b.depthTexture.format===Ji&&(Ee=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ee,b.width,b.height,0,Ye,xe,null)}}else ie(b.depthTexture,0);const le=he.__webglTexture,Oe=V(b),be=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,We=b.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===_i)Pt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,We,be,le,0,Oe):i.framebufferTexture2D(i.FRAMEBUFFER,We,be,le,0);else if(b.depthTexture.format===Ji)Pt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,We,be,le,0,Oe):i.framebufferTexture2D(i.FRAMEBUFFER,We,be,le,0);else throw new Error("Unknown depthTexture format")}function je(U){const b=n.get(U),H=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=ae}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let ae=0;ae<6;ae++)$e(b.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?$e(b.__webglFramebuffer[0],U,0):$e(b.__webglFramebuffer,U,0)}else if(H){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=i.createRenderbuffer(),ye(b.__webglDepthbuffer[ae],U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,le)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ye(b.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(U,b,H){const ae=n.get(U);b!==void 0&&re(ae.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&je(U)}function ot(U){const b=U.texture,H=n.get(U),ae=n.get(b);U.addEventListener("dispose",G);const he=U.textures,le=U.isWebGLCubeRenderTarget===!0,Oe=he.length>1;if(Oe||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=b.version,l.memory.textures++),le){H.__webglFramebuffer=[];for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[be]=[];for(let We=0;We<b.mipmaps.length;We++)H.__webglFramebuffer[be][We]=i.createFramebuffer()}else H.__webglFramebuffer[be]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let be=0;be<b.mipmaps.length;be++)H.__webglFramebuffer[be]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let be=0,We=he.length;be<We;be++){const Ye=n.get(he[be]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),l.memory.textures++)}if(U.samples>0&&Pt(U)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){const We=he[be];H.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[be]);const Ye=o.convert(We.format,We.colorSpace),xe=o.convert(We.type),Ee=I(We.internalFormat,Ye,xe,We.colorSpace,U.isXRRenderTarget===!0),Be=V(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ee,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,H.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(H.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,b);for(let be=0;be<6;be++)if(b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)re(H.__webglFramebuffer[be][We],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,We);else re(H.__webglFramebuffer[be],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);M(b)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,We=he.length;be<We;be++){const Ye=he[be],xe=n.get(Ye);let Ee=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ee=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,xe.__webglTexture),Ae(Ee,Ye),re(H.__webglFramebuffer,U,Ye,i.COLOR_ATTACHMENT0+be,Ee,0),M(Ye)&&S(Ee)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),Ae(be,b),b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)re(H.__webglFramebuffer[We],U,b,i.COLOR_ATTACHMENT0,be,We);else re(H.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,be,0);M(b)&&S(be),t.unbindTexture()}U.depthBuffer&&je(U)}function ft(U){const b=U.textures;for(let H=0,ae=b.length;H<ae;H++){const he=b[H];if(M(he)){const le=L(U),Oe=n.get(he).__webglTexture;t.bindTexture(le,Oe),S(le),t.unbindTexture()}}}const wt=[],nt=[];function Nt(U){if(U.samples>0){if(Pt(U)===!1){const b=U.textures,H=U.width,ae=U.height;let he=i.COLOR_BUFFER_BIT;const le=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(U),be=b.length>1;if(be)for(let Ye=0;Ye<b.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const We=U.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ye=0;Ye<b.length;Ye++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ye]);const xe=n.get(b[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xe,0)}i.blitFramebuffer(0,0,H,ae,0,0,H,ae,he,i.NEAREST),h===!0&&(wt.length=0,nt.length=0,wt.push(i.COLOR_ATTACHMENT0+Ye),U.depthBuffer&&U.resolveDepthBuffer===!1&&(wt.push(le),nt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ye=0;Ye<b.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ye]);const xe=n.get(b[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function V(U){return Math.min(s.maxSamples,U.samples)}function Pt(U){const b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(U){const b=l.render.frame;g.get(U)!==b&&(g.set(U,b),U.update())}function _t(U,b){const H=U.colorSpace,ae=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==Pr&&H!==Pi&&(yt.getTransfer(H)===Rt?(ae!==kn||he!==En)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",H)),b}function Ne(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=q,this.setTexture2D=ie,this.setTexture2DArray=Z,this.setTexture3D=ne,this.setTextureCube=Se,this.rebindTextures=Mt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qM(i,e){function t(n,s=Pi){let o;const l=yt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nd)return i.BYTE;if(n===id)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===El)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===ad)return i.ALPHA;if(n===od)return i.RGB;if(n===kn)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===ld)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===Rr)return i.RG;if(n===Al)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(l===Rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===ko||n===zo||n===Go)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Bo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Ho||n===Wo||n===$o||n===Xo||n===jo||n===qo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Vo||n===Ho)return l===Rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Wo)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===$o)return o.COMPRESSED_R11_EAC;if(n===Xo)return o.COMPRESSED_SIGNED_R11_EAC;if(n===jo)return o.COMPRESSED_RG11_EAC;if(n===qo)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yo||n===Ko||n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Yo)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nl)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===il)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===ul||n===dl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===cl)return l===Rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===hl||n===pl||n===ml)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
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

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _d(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:YM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends Fr{constructor(e,t){super();const n=this;let s=null,o=1,l=null,u="local-floor",h=1,f=null,g=null,_=null,m=null,x=null,E=null;const R=typeof XRWebGLBinding<"u",M=new ZM,S={},L=t.getContextAttributes();let I=null,D=null;const O=[],P=[],G=new Et;let A=null;const F=new Sn;F.viewport=new zt;const B=new Sn;B.viewport=new zt;const k=[F,B],q=new c0;let J=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ja,O[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ja,O[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=O[oe];return ve===void 0&&(ve=new Ja,O[oe]=ve),ve.getHandSpace()};function ie(oe){const ve=P.indexOf(oe.inputSource);if(ve===-1)return;const re=O[ve];re!==void 0&&(re.update(oe.inputSource,oe.frame,f||l),re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Z(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ne);for(let oe=0;oe<O.length;oe++){const ve=P[oe];ve!==null&&(P[oe]=null,O[oe].disconnect(ve))}J=null,Y=null,M.reset();for(const oe in S)delete S[oe];e.setRenderTarget(I),x=null,m=null,_=null,s=null,D=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(oe){f=oe},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ne),L.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(G),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ye=null,$e=null;L.depth&&($e=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=L.stencil?Ji:_i,ye=L.stencil?as:ni);const je={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:o};_=this.getBinding(),m=_.createProjectionLayer(je),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),D=new ti(m.textureWidth,m.textureHeight,{format:kn,type:En,depthTexture:new us(m.textureWidth,m.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const re={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ti(x.framebufferWidth,x.framebufferHeight,{format:kn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await s.requestReferenceSpace(u),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ne(oe){for(let ve=0;ve<oe.removed.length;ve++){const re=oe.removed[ve],ye=P.indexOf(re);ye>=0&&(P[ye]=null,O[ye].disconnect(re))}for(let ve=0;ve<oe.added.length;ve++){const re=oe.added[ve];let ye=P.indexOf(re);if(ye===-1){for(let je=0;je<O.length;je++)if(je>=P.length){P.push(re),ye=je;break}else if(P[je]===null){P[je]=re,ye=je;break}if(ye===-1)break}const $e=O[ye];$e&&$e.connect(re)}}const Se=new K,pe=new K;function Re(oe,ve,re){Se.setFromMatrixPosition(ve.matrixWorld),pe.setFromMatrixPosition(re.matrixWorld);const ye=Se.distanceTo(pe),$e=ve.projectionMatrix.elements,je=re.projectionMatrix.elements,Mt=$e[14]/($e[10]-1),ot=$e[14]/($e[10]+1),ft=($e[9]+1)/$e[5],wt=($e[9]-1)/$e[5],nt=($e[8]-1)/$e[0],Nt=(je[8]+1)/je[0],V=Mt*nt,Pt=Mt*Nt,ut=ye/(-nt+Nt),_t=ut*-nt;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(_t),oe.translateZ(ut),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),$e[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Ne=Mt+ut,U=ot+ut,b=V-_t,H=Pt+(ye-_t),ae=ft*ot/U*Ne,he=wt*ot/U*Ne;oe.projectionMatrix.makePerspective(b,H,ae,he,Ne,U),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ue(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let ve=oe.near,re=oe.far;M.texture!==null&&(M.depthNear>0&&(ve=M.depthNear),M.depthFar>0&&(re=M.depthFar)),q.near=B.near=F.near=ve,q.far=B.far=F.far=re,(J!==q.near||Y!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),J=q.near,Y=q.far),q.layers.mask=oe.layers.mask|6,F.layers.mask=q.layers.mask&-5,B.layers.mask=q.layers.mask&-3;const ye=oe.parent,$e=q.cameras;Ue(q,ye);for(let je=0;je<$e.length;je++)Ue($e[je],ye);$e.length===2?Re(q,F,B):q.projectionMatrix.copy(F.projectionMatrix),Ae(oe,q,ye)};function Ae(oe,ve,re){re===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=pa*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&x===null))return h},this.setFoveation=function(oe){h=oe,m!==null&&(m.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(oe){return S[oe]};let Xe=null;function Ze(oe,ve){if(g=ve.getViewerPose(f||l),E=ve,g!==null){const re=g.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let ye=!1;re.length!==q.cameras.length&&(q.cameras.length=0,ye=!0);for(let ot=0;ot<re.length;ot++){const ft=re[ot];let wt=null;if(x!==null)wt=x.getViewport(ft);else{const Nt=_.getViewSubImage(m,ft);wt=Nt.viewport,ot===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(D))}let nt=k[ot];nt===void 0&&(nt=new Sn,nt.layers.enable(ot),nt.viewport=new zt,k[ot]=nt),nt.matrix.fromArray(ft.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(ft.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(wt.x,wt.y,wt.width,wt.height),ot===0&&(q.matrix.copy(nt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ye===!0&&q.cameras.push(nt)}const $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){_=n.getBinding();const ot=_.getDepthInformation(re[0]);ot&&ot.isValid&&ot.texture&&M.init(ot,s.renderState)}if($e&&$e.includes("camera-access")&&R){e.state.unbindTexture(),_=n.getBinding();for(let ot=0;ot<re.length;ot++){const ft=re[ot].camera;if(ft){let wt=S[ft];wt||(wt=new _d,S[ft]=wt);const nt=_.getCameraImage(ft);wt.sourceTexture=nt}}}}for(let re=0;re<O.length;re++){const ye=P[re],$e=O[re];ye!==null&&$e!==void 0&&$e.update(ye,ve,f||l)}Xe&&Xe(oe,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),E=null}const Je=new Md;Je.setAnimationLoop(Ze),this.setAnimationLoop=function(oe){Xe=oe},this.dispose=function(){}}}const ji=new ii,QM=new Ut;function eE(i,e){function t(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function n(M,S){S.color.getRGB(M.fogColor.value,vd(i)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function s(M,S,L,I,D){S.isMeshBasicMaterial?o(M,S):S.isMeshLambertMaterial?(o(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(M,S),_(M,S)):S.isMeshPhongMaterial?(o(M,S),g(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(M,S),m(M,S),S.isMeshPhysicalMaterial&&x(M,S,D)):S.isMeshMatcapMaterial?(o(M,S),E(M,S)):S.isMeshDepthMaterial?o(M,S):S.isMeshDistanceMaterial?(o(M,S),R(M,S)):S.isMeshNormalMaterial?o(M,S):S.isLineBasicMaterial?(l(M,S),S.isLineDashedMaterial&&u(M,S)):S.isPointsMaterial?h(M,S,L,I):S.isSpriteMaterial?f(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,t(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,t(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,t(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===gn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,t(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===gn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,t(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,t(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const L=e.get(S),I=L.envMap,D=L.envMapRotation;I&&(M.envMap.value=I,ji.copy(D),ji.x*=-1,ji.y*=-1,ji.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),M.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(ji)),M.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,M.aoMapTransform))}function l(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,t(S.map,M.mapTransform))}function u(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function h(M,S,L,I){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*L,M.scale.value=I*.5,S.map&&(M.map.value=S.map,t(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,t(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,t(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,t(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function m(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,L){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===gn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function R(M,S){const L=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tE(i,e,t,n){let s={},o={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,I){const D=I.program;n.uniformBlockBinding(L,D)}function f(L,I){let D=s[L.id];D===void 0&&(E(L),D=g(L),s[L.id]=D,L.addEventListener("dispose",M));const O=I.program;n.updateUBOMapping(L,O);const P=e.render.frame;o[L.id]!==P&&(m(L),o[L.id]=P)}function g(L){const I=_();L.__bindingPointIndex=I;const D=i.createBuffer(),O=L.__size,P=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,O,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,D),D}function _(){for(let L=0;L<u;L++)if(l.indexOf(L)===-1)return l.push(L),L;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(L){const I=s[L.id],D=L.uniforms,O=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let P=0,G=D.length;P<G;P++){const A=Array.isArray(D[P])?D[P]:[D[P]];for(let F=0,B=A.length;F<B;F++){const k=A[F];if(x(k,P,F,O)===!0){const q=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let Y=0;for(let ie=0;ie<J.length;ie++){const Z=J[ie],ne=R(Z);typeof Z=="number"||typeof Z=="boolean"?(k.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,q+Y,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=0,k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=0,k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=0):(Z.toArray(k.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(L,I,D,O){const P=L.value,G=I+"_"+D;if(O[G]===void 0)return typeof P=="number"||typeof P=="boolean"?O[G]=P:O[G]=P.clone(),!0;{const A=O[G];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return O[G]=P,!0}else if(A.equals(P)===!1)return A.copy(P),!0}return!1}function E(L){const I=L.uniforms;let D=0;const O=16;for(let G=0,A=I.length;G<A;G++){const F=Array.isArray(I[G])?I[G]:[I[G]];for(let B=0,k=F.length;B<k;B++){const q=F[B],J=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,ie=J.length;Y<ie;Y++){const Z=J[Y],ne=R(Z),Se=D%O,pe=Se%ne.boundary,Re=Se+pe;D+=pe,Re!==0&&O-Re<ne.storage&&(D+=O-Re),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=ne.storage}}}const P=D%O;return P>0&&(D+=O-P),L.__size=D,L.__cache={},this}function R(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",L),I}function M(L){const I=L.target;I.removeEventListener("dispose",M);const D=l.indexOf(I.__bindingPointIndex);l.splice(D,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete o[I.id]}function S(){for(const L in s)i.deleteBuffer(s[L]);l=[],s={},o={}}return{bind:h,update:f,dispose:S}}const nE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function iE(){return Yn===null&&(Yn=new Vv(nE,16,16,Rr,gi),Yn.name="DFG_LUT",Yn.minFilter=cn,Yn.magFilter=cn,Yn.wrapS=fi,Yn.wrapT=fi,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class rE{constructor(e={}){const{canvas:t=xv(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:x=En}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=l;const R=x,M=new Set([Cl,Al,Tl]),S=new Set([En,ni,ss,as,bl,wl]),L=new Uint32Array(4),I=new Int32Array(4);let D=null,O=null;const P=[],G=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let B=!1;this._outputColorSpace=en;let k=0,q=0,J=null,Y=-1,ie=null;const Z=new zt,ne=new zt;let Se=null;const pe=new gt(0);let Re=0,Ue=t.width,Ae=t.height,Xe=1,Ze=null,Je=null;const oe=new zt(0,0,Ue,Ae),ve=new zt(0,0,Ue,Ae);let re=!1;const ye=new Il;let $e=!1,je=!1;const Mt=new Ut,ot=new K,ft=new zt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Nt(){return J===null?Xe:1}let V=n;function Pt(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",vt,!1),V===null){const X="webgl2";if(V=Pt(X,C),V===null)throw Pt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw St("WebGLRenderer: "+C.message),C}let ut,_t,Ne,U,b,H,ae,he,le,Oe,be,We,Ye,xe,Ee,Be,ke,Fe,it,W,we,Me,De;function $(){ut=new ry(V),ut.init(),we=new qM(V,ut),_t=new KS(V,ut,e,we),Ne=new XM(V,ut),_t.reversedDepthBuffer&&m&&Ne.buffers.depth.setReversed(!0),U=new oy(V),b=new FM,H=new jM(V,ut,Ne,b,_t,we,U),ae=new iy(F),he=new f0(V),Me=new qS(V,he),le=new sy(V,he,U,Me),Oe=new cy(V,le,he,Me,U),Fe=new ly(V,_t,H),Ee=new ZS(b),be=new DM(F,ae,ut,_t,Me,Ee),We=new eE(F,b),Ye=new IM,xe=new zM(ut),ke=new jS(F,ae,Ne,Oe,E,h),Be=new $M(F,Oe,_t),De=new tE(V,U,_t,Ne),it=new YS(V,ut,U),W=new ay(V,ut,U),U.programs=be.programs,F.capabilities=_t,F.extensions=ut,F.properties=b,F.renderLists=Ye,F.shadowMap=Be,F.state=Ne,F.info=U}$(),R!==En&&(A=new dy(R,t.width,t.height,s,o));const z=new JM(F,V);this.xr=z,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Xe},this.setPixelRatio=function(C){C!==void 0&&(Xe=C,this.setSize(Ue,Ae,!1))},this.getSize=function(C){return C.set(Ue,Ae)},this.setSize=function(C,X,se=!0){if(z.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=C,Ae=X,t.width=Math.floor(C*Xe),t.height=Math.floor(X*Xe),se===!0&&(t.style.width=C+"px",t.style.height=X+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(Ue*Xe,Ae*Xe).floor()},this.setDrawingBufferSize=function(C,X,se){Ue=C,Ae=X,Xe=se,t.width=Math.floor(C*se),t.height=Math.floor(X*se),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(R===En){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,X,se,te){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,X,se,te),Ne.viewport(Z.copy(oe).multiplyScalar(Xe).round())},this.getScissor=function(C){return C.copy(ve)},this.setScissor=function(C,X,se,te){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,X,se,te),Ne.scissor(ne.copy(ve).multiplyScalar(Xe).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){Ne.setScissorTest(re=C)},this.setOpaqueSort=function(C){Ze=C},this.setTransparentSort=function(C){Je=C},this.getClearColor=function(C){return C.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,se=!0){let te=0;if(C){let Q=!1;if(J!==null){const Te=J.texture.format;Q=M.has(Te)}if(Q){const Te=J.texture.type,Ie=S.has(Te),fe=ke.getClearColor(),ze=ke.getClearAlpha(),Ve=fe.r,Qe=fe.g,tt=fe.b;Ie?(L[0]=Ve,L[1]=Qe,L[2]=tt,L[3]=ze,V.clearBufferuiv(V.COLOR,0,L)):(I[0]=Ve,I[1]=Qe,I[2]=tt,I[3]=ze,V.clearBufferiv(V.COLOR,0,I))}else te|=V.COLOR_BUFFER_BIT}X&&(te|=V.DEPTH_BUFFER_BIT),se&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),ke.dispose(),Ye.dispose(),xe.dispose(),b.dispose(),ae.dispose(),Oe.dispose(),Me.dispose(),De.dispose(),be.dispose(),z.dispose(),z.removeEventListener("sessionstart",bn),z.removeEventListener("sessionend",gs),wn.stop()};function Le(C){C.preventDefault(),zc("WebGLRenderer: Context Lost."),B=!0}function Ke(){zc("WebGLRenderer: Context Restored."),B=!1;const C=U.autoReset,X=Be.enabled,se=Be.autoUpdate,te=Be.needsUpdate,Q=Be.type;$(),U.autoReset=C,Be.enabled=X,Be.autoUpdate=se,Be.needsUpdate=te,Be.type=Q}function vt(C){St("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function lt(C){const X=C.target;X.removeEventListener("dispose",lt),Pn(X)}function Pn(C){Wt(C),b.remove(C)}function Wt(C){const X=b.get(C).programs;X!==void 0&&(X.forEach(function(se){be.releaseProgram(se)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,se,te,Q,Te){X===null&&(X=wt);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,fe=Ea(C,X,se,te,Q);Ne.setMaterial(te,Ie);let ze=se.index,Ve=1;if(te.wireframe===!0){if(ze=le.getWireframeAttribute(se),ze===void 0)return;Ve=2}const Qe=se.drawRange,tt=se.attributes.position;let He=Qe.start*Ve,bt=(Qe.start+Qe.count)*Ve;Te!==null&&(He=Math.max(He,Te.start*Ve),bt=Math.min(bt,(Te.start+Te.count)*Ve)),ze!==null?(He=Math.max(He,0),bt=Math.min(bt,ze.count)):tt!=null&&(He=Math.max(He,0),bt=Math.min(bt,tt.count));const Ot=bt-He;if(Ot<0||Ot===1/0)return;Me.setup(Q,te,fe,se,ze);let Ft,At=it;if(ze!==null&&(Ft=he.get(ze),At=W,At.setIndex(Ft)),Q.isMesh)te.wireframe===!0?(Ne.setLineWidth(te.wireframeLinewidth*Nt()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(Q.isLine){let $t=te.linewidth;$t===void 0&&($t=1),Ne.setLineWidth($t*Nt()),Q.isLineSegments?At.setMode(V.LINES):Q.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else Q.isPoints?At.setMode(V.POINTS):Q.isSprite&&At.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ha("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))At.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $t=Q._multiDrawStarts,y=Q._multiDrawCounts,ct=Q._multiDrawCount,mt=ze?he.get(ze).bytesPerElement:1,sn=b.get(te).currentProgram.getUniforms();for(let Qt=0;Qt<ct;Qt++)sn.setValue(V,"_gl_DrawID",Qt),At.render($t[Qt]/mt,y[Qt])}else if(Q.isInstancedMesh)At.renderInstances(He,Ot,Q.count);else if(se.isInstancedBufferGeometry){const $t=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,y=Math.min(se.instanceCount,$t);At.renderInstances(He,Ot,y)}else At.render(He,Ot)};function Ii(C,X,se){C.transparent===!0&&C.side===Mn&&C.forceSinglePass===!1?(C.side=gn,C.needsUpdate=!0,Ui(C,X,se),C.side=Fi,C.needsUpdate=!0,Ui(C,X,se),C.side=Mn):Ui(C,X,se)}this.compile=function(C,X,se=null){se===null&&(se=C),O=xe.get(se),O.init(X),G.push(O),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),C!==se&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),O.setupLights();const te=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Te=Q.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const fe=Te[Ie];Ii(fe,se,Q),te.add(fe)}else Ii(Te,se,Q),te.add(Te)}),O=G.pop(),te},this.compileAsync=function(C,X,se=null){const te=this.compile(C,X,se);return new Promise(Q=>{function Te(){if(te.forEach(function(Ie){b.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){Q(C);return}setTimeout(Te,10)}ut.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Nr=null;function Ma(C){Nr&&Nr(C)}function bn(){wn.stop()}function gs(){wn.start()}const wn=new Md;wn.setAnimationLoop(Ma),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(C){Nr=C,z.setAnimationLoop(C),C===null?wn.stop():wn.start()},z.addEventListener("sessionstart",bn),z.addEventListener("sessionend",gs),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const se=z.enabled===!0&&z.isPresenting===!0,te=A!==null&&(J===null||se)&&A.begin(F,J);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(X),X=z.getCamera()),C.isScene===!0&&C.onBeforeRender(F,C,X,J),O=xe.get(C,G.length),O.init(X),G.push(O),Mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ye.setFromProjectionMatrix(Mt,Jn,X.reversedDepth),je=this.localClippingEnabled,$e=Ee.init(this.clippingPlanes,je),D=Ye.get(C,P.length),D.init(),P.push(D),z.enabled===!0&&z.isPresenting===!0){const Ie=F.xr.getDepthSensingMesh();Ie!==null&&xi(Ie,X,-1/0,F.sortObjects)}xi(C,X,0,F.sortObjects),D.finish(),F.sortObjects===!0&&D.sort(Ze,Je),nt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,nt&&ke.addToRenderList(D,C),this.info.render.frame++,$e===!0&&Ee.beginShadows();const Q=O.state.shadowsArray;if(Be.render(Q,C,X),$e===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&A.hasRenderPass())===!1){const Ie=D.opaque,fe=D.transmissive;if(O.setupLights(),X.isArrayCamera){const ze=X.cameras;if(fe.length>0)for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const tt=ze[Ve];_s(Ie,fe,C,tt)}nt&&ke.render(C);for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const tt=ze[Ve];ir(D,C,tt,tt.viewport)}}else fe.length>0&&_s(Ie,fe,C,X),nt&&ke.render(C),ir(D,C,X)}J!==null&&q===0&&(H.updateMultisampleRenderTarget(J),H.updateRenderTargetMipmap(J)),te&&A.end(F),C.isScene===!0&&C.onAfterRender(F,C,X),Me.resetDefaultState(),Y=-1,ie=null,G.pop(),G.length>0?(O=G[G.length-1],$e===!0&&Ee.setGlobalState(F.clippingPlanes,O.state.camera)):O=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function xi(C,X,se,te){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ye.intersectsSprite(C)){te&&ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const Ie=Oe.update(C),fe=C.material;fe.visible&&D.push(C,Ie,fe,se,ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ye.intersectsObject(C))){const Ie=Oe.update(C),fe=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ft.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ft.copy(Ie.boundingSphere.center)),ft.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(fe)){const ze=Ie.groups;for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const tt=ze[Ve],He=fe[tt.materialIndex];He&&He.visible&&D.push(C,Ie,He,se,ft.z,tt)}}else fe.visible&&D.push(C,Ie,fe,se,ft.z,null)}}const Te=C.children;for(let Ie=0,fe=Te.length;Ie<fe;Ie++)xi(Te[Ie],X,se,te)}function ir(C,X,se,te){const{opaque:Q,transmissive:Te,transparent:Ie}=C;O.setupLightsView(se),$e===!0&&Ee.setGlobalState(F.clippingPlanes,se),te&&Ne.viewport(Z.copy(te)),Q.length>0&&rr(Q,X,se),Te.length>0&&rr(Te,X,se),Ie.length>0&&rr(Ie,X,se),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function _s(C,X,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[te.id]===void 0){const He=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[te.id]=new ti(1,1,{generateMipmaps:!0,type:He?gi:En,minFilter:Zi,samples:Math.max(4,_t.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Te=O.state.transmissionRenderTarget[te.id],Ie=te.viewport||Z;Te.setSize(Ie.z*F.transmissionResolutionScale,Ie.w*F.transmissionResolutionScale);const fe=F.getRenderTarget(),ze=F.getActiveCubeFace(),Ve=F.getActiveMipmapLevel();F.setRenderTarget(Te),F.getClearColor(pe),Re=F.getClearAlpha(),Re<1&&F.setClearColor(16777215,.5),F.clear(),nt&&ke.render(se);const Qe=F.toneMapping;F.toneMapping=ei;const tt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),O.setupLightsView(te),$e===!0&&Ee.setGlobalState(F.clippingPlanes,te),rr(C,se,te),H.updateMultisampleRenderTarget(Te),H.updateRenderTargetMipmap(Te),ut.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let bt=0,Ot=X.length;bt<Ot;bt++){const Ft=X[bt],{object:At,geometry:$t,material:y,group:ct}=Ft;if(y.side===Mn&&At.layers.test(te.layers)){const mt=y.side;y.side=gn,y.needsUpdate=!0,vs(At,se,te,$t,y,ct),y.side=mt,y.needsUpdate=!0,He=!0}}He===!0&&(H.updateMultisampleRenderTarget(Te),H.updateRenderTargetMipmap(Te))}F.setRenderTarget(fe,ze,Ve),F.setClearColor(pe,Re),tt!==void 0&&(te.viewport=tt),F.toneMapping=Qe}function rr(C,X,se){const te=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Te=C.length;Q<Te;Q++){const Ie=C[Q],{object:fe,geometry:ze,group:Ve}=Ie;let Qe=Ie.material;Qe.allowOverride===!0&&te!==null&&(Qe=te),fe.layers.test(se.layers)&&vs(fe,X,se,ze,Qe,Ve)}}function vs(C,X,se,te,Q,Te){C.onBeforeRender(F,X,se,te,Q,Te),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(F,X,se,te,C,Te),Q.transparent===!0&&Q.side===Mn&&Q.forceSinglePass===!1?(Q.side=gn,Q.needsUpdate=!0,F.renderBufferDirect(se,X,te,Q,C,Te),Q.side=Fi,Q.needsUpdate=!0,F.renderBufferDirect(se,X,te,Q,C,Te),Q.side=Mn):F.renderBufferDirect(se,X,te,Q,C,Te),C.onAfterRender(F,X,se,te,Q,Te)}function Ui(C,X,se){X.isScene!==!0&&(X=wt);const te=b.get(C),Q=O.state.lights,Te=O.state.shadowsArray,Ie=Q.state.version,fe=be.getParameters(C,Q.state,Te,X,se),ze=be.getProgramCacheKey(fe);let Ve=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const Qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=ae.get(C.envMap||te.environment,Qe),te.envMapRotation=te.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",lt),Ve=new Map,te.programs=Ve);let tt=Ve.get(ze);if(tt!==void 0){if(te.currentProgram===tt&&te.lightsStateVersion===Ie)return Ss(C,fe),tt}else fe.uniforms=be.getUniforms(C),C.onBeforeCompile(fe,F),tt=be.acquireProgram(fe,ze),Ve.set(ze,tt),te.uniforms=fe.uniforms;const He=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Ee.uniform),Ss(C,fe),te.needsLights=Tt(C),te.lightsStateVersion=Ie,te.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=tt,te.uniformsList=null,tt}function xs(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=da.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Ss(C,X){const se=b.get(C);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Ea(C,X,se,te,Q){X.isScene!==!0&&(X=wt),H.resetTextureUnits();const Te=X.fog,Ie=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,fe=J===null?F.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Pr,ze=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ve=ae.get(te.envMap||Ie,ze),Qe=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,Ot=!!se.morphAttributes.color;let Ft=ei;te.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=F.toneMapping);const At=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,$t=At!==void 0?At.length:0,y=b.get(te),ct=O.state.lights;if($e===!0&&(je===!0||C!==ie)){const Gt=C===ie&&te.id===Y;Ee.setState(te,C,Gt)}let mt=!1;te.version===y.__version?(y.needsLights&&y.lightsStateVersion!==ct.state.version||y.outputColorSpace!==fe||Q.isBatchedMesh&&y.batching===!1||!Q.isBatchedMesh&&y.batching===!0||Q.isBatchedMesh&&y.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&y.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&y.instancing===!1||!Q.isInstancedMesh&&y.instancing===!0||Q.isSkinnedMesh&&y.skinning===!1||!Q.isSkinnedMesh&&y.skinning===!0||Q.isInstancedMesh&&y.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&y.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&y.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&y.instancingMorph===!1&&Q.morphTexture!==null||y.envMap!==Ve||te.fog===!0&&y.fog!==Te||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Ee.numPlanes||y.numIntersection!==Ee.numIntersection)||y.vertexAlphas!==Qe||y.vertexTangents!==tt||y.morphTargets!==He||y.morphNormals!==bt||y.morphColors!==Ot||y.toneMapping!==Ft||y.morphTargetsCount!==$t)&&(mt=!0):(mt=!0,y.__version=te.version);let sn=y.currentProgram;mt===!0&&(sn=Ui(te,X,Q));let Qt=!1,si=!1,yi=!1;const Ct=sn.getUniforms(),Xt=y.uniforms;if(Ne.useProgram(sn.program)&&(Qt=!0,si=!0,yi=!0),te.id!==Y&&(Y=te.id,si=!0),Qt||ie!==C){Ne.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ct.setValue(V,"projectionMatrix",C.projectionMatrix),Ct.setValue(V,"viewMatrix",C.matrixWorldInverse);const Hn=Ct.map.cameraPosition;Hn!==void 0&&Hn.setValue(V,ot.setFromMatrixPosition(C.matrixWorld)),_t.logarithmicDepthBuffer&&Ct.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ct.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),ie!==C&&(ie=C,si=!0,yi=!0)}if(y.needsLights&&(ct.state.directionalShadowMap.length>0&&Ct.setValue(V,"directionalShadowMap",ct.state.directionalShadowMap,H),ct.state.spotShadowMap.length>0&&Ct.setValue(V,"spotShadowMap",ct.state.spotShadowMap,H),ct.state.pointShadowMap.length>0&&Ct.setValue(V,"pointShadowMap",ct.state.pointShadowMap,H)),Q.isSkinnedMesh){Ct.setOptional(V,Q,"bindMatrix"),Ct.setOptional(V,Q,"bindMatrixInverse");const Gt=Q.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ct.setValue(V,"boneTexture",Gt.boneTexture,H))}Q.isBatchedMesh&&(Ct.setOptional(V,Q,"batchingTexture"),Ct.setValue(V,"batchingTexture",Q._matricesTexture,H),Ct.setOptional(V,Q,"batchingIdTexture"),Ct.setValue(V,"batchingIdTexture",Q._indirectTexture,H),Ct.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ct.setValue(V,"batchingColorTexture",Q._colorsTexture,H));const Vn=se.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&Fe.update(Q,se,sn),(si||y.receiveShadow!==Q.receiveShadow)&&(y.receiveShadow=Q.receiveShadow,Ct.setValue(V,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(Xt.envMapIntensity.value=X.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=iE()),si&&(Ct.setValue(V,"toneMappingExposure",F.toneMappingExposure),y.needsLights&&ba(Xt,yi),Te&&te.fog===!0&&We.refreshFogUniforms(Xt,Te),We.refreshMaterialUniforms(Xt,te,Xe,Ae,O.state.transmissionRenderTarget[C.id]),da.upload(V,xs(y),Xt,H)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(da.upload(V,xs(y),Xt,H),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ct.setValue(V,"center",Q.center),Ct.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ct.setValue(V,"normalMatrix",Q.normalMatrix),Ct.setValue(V,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Gt=te.uniformsGroups;for(let Hn=0,Mi=Gt.length;Hn<Mi;Hn++){const kt=Gt[Hn];De.update(kt,sn),De.bind(kt,sn)}}return sn}function ba(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Tt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(C,X,se){const te=b.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=X,b.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const se=b.get(C);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0};const wa=V.createFramebuffer();this.setRenderTarget=function(C,X=0,se=0){J=C,k=X,q=se;let te=null,Q=!1,Te=!1;if(C){const fe=b.get(C);if(fe.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(V.FRAMEBUFFER,fe.__webglFramebuffer),Z.copy(C.viewport),ne.copy(C.scissor),Se=C.scissorTest,Ne.viewport(Z),Ne.scissor(ne),Ne.setScissorTest(Se),Y=-1;return}else if(fe.__webglFramebuffer===void 0)H.setupRenderTarget(C);else if(fe.__hasExternalTextures)H.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qe=C.depthTexture;if(fe.__boundDepthTexture!==Qe){if(Qe!==null&&b.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(C)}}const ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Te=!0);const Ve=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?te=Ve[X][se]:te=Ve[X],Q=!0):C.samples>0&&H.useMultisampledRTT(C)===!1?te=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?te=Ve[se]:te=Ve,Z.copy(C.viewport),ne.copy(C.scissor),Se=C.scissorTest}else Z.copy(oe).multiplyScalar(Xe).floor(),ne.copy(ve).multiplyScalar(Xe).floor(),Se=re;if(se!==0&&(te=wa),Ne.bindFramebuffer(V.FRAMEBUFFER,te)&&Ne.drawBuffers(C,te),Ne.viewport(Z),Ne.scissor(ne),Ne.setScissorTest(Se),Q){const fe=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,fe.__webglTexture,se)}else if(Te){const fe=X;for(let ze=0;ze<C.textures.length;ze++){const Ve=b.get(C.textures[ze]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,se,fe)}}else if(C!==null&&se!==0){const fe=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,fe.__webglTexture,se)}Y=-1},this.readRenderTargetPixels=function(C,X,se,te,Q,Te,Ie,fe=0){if(!(C&&C.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){Ne.bindFramebuffer(V.FRAMEBUFFER,ze);try{const Ve=C.textures[fe],Qe=Ve.format,tt=Ve.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+fe),!_t.textureFormatReadable(Qe)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(tt)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-te&&se>=0&&se<=C.height-Q&&V.readPixels(X,se,te,Q,we.convert(Qe),we.convert(tt),Te)}finally{const Ve=J!==null?b.get(J).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,X,se,te,Q,Te,Ie,fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze)if(X>=0&&X<=C.width-te&&se>=0&&se<=C.height-Q){Ne.bindFramebuffer(V.FRAMEBUFFER,ze);const Ve=C.textures[fe],Qe=Ve.format,tt=Ve.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+fe),!_t.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.bufferData(V.PIXEL_PACK_BUFFER,Te.byteLength,V.STREAM_READ),V.readPixels(X,se,te,Q,we.convert(Qe),we.convert(tt),0);const bt=J!==null?b.get(J).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,bt);const Ot=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Sv(V,Ot,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Te),V.deleteBuffer(He),V.deleteSync(Ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,se=0){const te=Math.pow(2,-se),Q=Math.floor(C.image.width*te),Te=Math.floor(C.image.height*te),Ie=X!==null?X.x:0,fe=X!==null?X.y:0;H.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,Ie,fe,Q,Te),Ne.unbindTexture()};const ys=V.createFramebuffer(),Si=V.createFramebuffer();this.copyTextureToTexture=function(C,X,se=null,te=null,Q=0,Te=0){let Ie,fe,ze,Ve,Qe,tt,He,bt,Ot;const Ft=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(se!==null)Ie=se.max.x-se.min.x,fe=se.max.y-se.min.y,ze=se.isBox3?se.max.z-se.min.z:1,Ve=se.min.x,Qe=se.min.y,tt=se.isBox3?se.min.z:0;else{const Xt=Math.pow(2,-Q);Ie=Math.floor(Ft.width*Xt),fe=Math.floor(Ft.height*Xt),C.isDataArrayTexture?ze=Ft.depth:C.isData3DTexture?ze=Math.floor(Ft.depth*Xt):ze=1,Ve=0,Qe=0,tt=0}te!==null?(He=te.x,bt=te.y,Ot=te.z):(He=0,bt=0,Ot=0);const At=we.convert(X.format),$t=we.convert(X.type);let y;X.isData3DTexture?(H.setTexture3D(X,0),y=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(H.setTexture2DArray(X,0),y=V.TEXTURE_2D_ARRAY):(H.setTexture2D(X,0),y=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const ct=V.getParameter(V.UNPACK_ROW_LENGTH),mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),sn=V.getParameter(V.UNPACK_SKIP_PIXELS),Qt=V.getParameter(V.UNPACK_SKIP_ROWS),si=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ve),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,tt);const yi=C.isDataArrayTexture||C.isData3DTexture,Ct=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Xt=b.get(C),Vn=b.get(X),Gt=b.get(Xt.__renderTarget),Hn=b.get(Vn.__renderTarget);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Mi=0;Mi<ze;Mi++)yi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,Q,tt+Mi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(X).__webglTexture,Te,Ot+Mi)),V.blitFramebuffer(Ve,Qe,Ie,fe,He,bt,Ie,fe,V.DEPTH_BUFFER_BIT,V.NEAREST);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||b.has(C)){const Xt=b.get(C),Vn=b.get(X);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,ys),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,Si);for(let Gt=0;Gt<ze;Gt++)yi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xt.__webglTexture,Q,tt+Gt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Xt.__webglTexture,Q),Ct?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vn.__webglTexture,Te,Ot+Gt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Vn.__webglTexture,Te),Q!==0?V.blitFramebuffer(Ve,Qe,Ie,fe,He,bt,Ie,fe,V.COLOR_BUFFER_BIT,V.NEAREST):Ct?V.copyTexSubImage3D(y,Te,He,bt,Ot+Gt,Ve,Qe,Ie,fe):V.copyTexSubImage2D(y,Te,He,bt,Ve,Qe,Ie,fe);Ne.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(y,Te,He,bt,Ot,Ie,fe,ze,At,$t,Ft.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(y,Te,He,bt,Ot,Ie,fe,ze,At,Ft.data):V.texSubImage3D(y,Te,He,bt,Ot,Ie,fe,ze,At,$t,Ft):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Te,He,bt,Ie,fe,At,$t,Ft.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Te,He,bt,Ft.width,Ft.height,At,Ft.data):V.texSubImage2D(V.TEXTURE_2D,Te,He,bt,Ie,fe,At,$t,Ft);V.pixelStorei(V.UNPACK_ROW_LENGTH,ct),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,sn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,si),Te===0&&X.generateMipmaps&&V.generateMipmap(y),Ne.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&H.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?H.setTextureCube(C,0):C.isData3DTexture?H.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?H.setTexture2DArray(C,0):H.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){k=0,q=0,J=null,Ne.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}function sE(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},l={},u=i[0].morphTargetsRelative,h=new Rn;let f=0;for(let g=0;g<i.length;++g){const _=i[g];let m=0;if(t!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in _.attributes){if(!n.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;o[x]===void 0&&(o[x]=[]),o[x].push(_.attributes[x]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(u!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in _.morphAttributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;l[x]===void 0&&(l[x]=[]),l[x].push(_.morphAttributes[x])}if(e){let x;if(t)x=_.index.count;else if(_.attributes.position!==void 0)x=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;h.addGroup(f,x,g),f+=x}}if(t){let g=0;const _=[];for(let m=0;m<i.length;++m){const x=i[m].index;for(let E=0;E<x.count;++E)_.push(x.getX(E)+g);g+=i[m].attributes.position.count}h.setIndex(_)}for(const g in o){const _=Iu(o[g]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;h.setAttribute(g,_)}for(const g in l){const _=l[g][0].length;if(_===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[g]=[];for(let m=0;m<_;++m){const x=[];for(let R=0;R<l[g].length;++R)x.push(l[g][R][m]);const E=Iu(x);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;h.morphAttributes[g].push(E)}}return h}function Iu(i){let e,t,n,s=-1,o=0;for(let f=0;f<i.length;++f){const g=i[f];if(e===void 0&&(e=g.array.constructor),e!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=g.itemSize),t!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=g.normalized),n!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=g.gpuType),s!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=g.count*t}const l=new e(o),u=new Cn(l,t,n);let h=0;for(let f=0;f<i.length;++f){const g=i[f];if(g.isInterleavedBufferAttribute){const _=h/t;for(let m=0,x=g.count;m<x;m++)for(let E=0;E<t;E++){const R=g.getComponent(m,E);u.setComponent(m+_,E,R)}}else l.set(g.array,h);h+=g.count*t}return s!==void 0&&(u.gpuType=s),u}const ts={studio:{name:"Daylight Workshop",floor:"#989e9d",seam:"#858c8b",wall:"#d1d3d5",upper:"#dadcde",ceiling:"#b8bcc1",trim:"#68737e",fixture:"#8b939b",stripe:"#697d94"},arena:{name:"Graphite Hangar",floor:"#68757b",seam:"#5c6b70",wall:"#b9c5c8",upper:"#cbd2d4",ceiling:"#89989f",trim:"#5e737e",stripe:"#647993"},gallery:{name:"Soft Sage Workshop",floor:"#8c9d90",seam:"#7a8c7f",wall:"#c9d1c7",upper:"#d1d7cc",ceiling:"#a7b3a8",trim:"#7f9689",stripe:"#768499"}};function aE(i,e){if(i.texture==="81d7488f559b.png")return"floor";if(i.texture==="11dbfc4c0f3f.png")return"wall";if(i.texture==="b11888927f3c.png"){e.computeBoundingBox();const t=e.boundingBox;return t.max.z-t.min.z<.01&&t.min.z>8?"ceiling":"upper"}return i.texture==="c19d0105b81b.png"?"trim":i.texture==="f05ece705e83.png"?"fixture":!i.texture&&i.position[2]>5?"light":"trim"}function oE(i,e){const t=i.getAttribute("position"),n=new Float32Array(t.count*2);i.computeBoundingBox();const s=i.boundingBox,o=e==="floor"||e==="ceiling",l=s.max.x-s.min.x>s.max.y-s.min.y;for(let u=0;u<t.count;u++)n[u*2]=(o||l?t.getX(u):t.getY(u))/6,n[u*2+1]=o?t.getY(u)/6:t.getZ(u)/3;return new Cn(n,2)}class lE{constructor(e){this.textures=[],this.materials=[],this.geometries=[],this.gateLabels=[],this.gateSupports=[],this.wallSigns=[],this.floorBounds=new tr,this.wallBounds=new tr,this.roles={},this.style="studio";for(const s of["floor","wall","upper","ceiling","trim","fixture","light"]){const o=s==="light"?new cs({color:"#f2f4f6",side:Mn}):new ua({color:"#ffffff",side:Mn,roughness:.92,metalness:0});if(this.roles[s]=o,this.materials.push(o),["floor","wall","upper","ceiling"].includes(s)){const l=document.createElement("canvas");l.width=l.height=1024;const u=new tu(l);u.colorSpace=en,u.wrapS=u.wrapT=rs,u.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),o.map=u,this.textures.push(u)}}this.setStyle("studio");const t=new Promise((s,o)=>{const l=new Image;l.onload=()=>{this.grain=l,this.setStyle(this.style),s()},l.onerror=()=>o(new Error("Venue floor texture could not be loaded")),l.src="/demo/venue/matte-floor.png"}),n=new Promise((s,o)=>{this.pennTexture=new xd().load("/demo/venue/penn-logo.png",s,void 0,()=>o(new Error("Penn wall logo could not be loaded"))),this.pennTexture.colorSpace=en,this.pennTexture.anisotropy=4,this.textures.push(this.pennTexture)});this.ready=Promise.all([t,n])}setStyle(e){if(e!=="original"&&!ts[e])throw new Error("Unknown venue style");this.style=e;const t=ts[e]||ts.studio;for(const n of["trim","fixture"])this.roles[n].color.set(t[n]||t.trim);for(const n of["floor","wall","upper","ceiling"]){const s=this.roles[n],o=s.map.image,l=o.getContext("2d"),u=o.width;if(l.fillStyle=t[n],l.fillRect(0,0,u,u),this.grain&&(l.globalCompositeOperation="multiply",l.globalAlpha=n==="floor"?.48:.16,l.drawImage(this.grain,0,0,u,u),l.globalAlpha=1,l.globalCompositeOperation="source-over"),n==="floor"){l.strokeStyle=t.seam,l.lineWidth=1;for(const h of[0,u/2,u])l.beginPath(),l.moveTo(h,0),l.lineTo(h,u),l.moveTo(0,h),l.lineTo(u,h),l.stroke();s.roughness=.96}else if(n==="wall")l.fillStyle=t.stripe,l.fillRect(0,u*.55,u,u*.45),l.fillStyle=t.trim,l.fillRect(0,u-48,u,48),l.strokeStyle="rgba(70,80,75,.08)",l.lineWidth=1,l.beginPath(),l.moveTo(0,0),l.lineTo(0,u),l.stroke(),s.roughness=.94;else if(n==="upper"){l.strokeStyle="rgba(50,65,60,.1)",l.lineWidth=2;for(let h=0;h<u;h+=u/3)l.beginPath(),l.moveTo(h,0),l.lineTo(h,u),l.stroke();s.roughness=.94}else{l.strokeStyle="rgba(40,60,55,.12)",l.lineWidth=2;for(let h=0;h<u;h+=u/12)l.beginPath(),l.moveTo(h,0),l.lineTo(h,u),l.stroke();l.strokeStyle=t.trim,l.lineWidth=3,l.beginPath(),l.moveTo(0,0),l.lineTo(u,0),l.stroke(),s.roughness=.93}s.map.needsUpdate=!0}for(const n of this.wallSigns)n.visible=e!=="original";for(const n of this.gateLabels)n.visible=e!=="original";for(const n of this.gateSupports)n.visible=e!=="original"}textTexture(e,t,n){const s=document.createElement("canvas");s.width=e,s.height=t,n(s.getContext("2d"),e,t);const o=new tu(s);return o.colorSpace=en,o.anisotropy=4,this.textures.push(o),o}decal(e,t,n,s,o,l,u){const h=new ps(t,n),f=new cs({map:e,transparent:!0,alphaTest:.02,depthWrite:!1,toneMapped:!1}),g=new _n(h,f),_=new K(...o),m=new K(...l),x=new K().crossVectors(_,m);return g.position.set(...s),g.quaternion.setFromRotationMatrix(new Ut().makeBasis(_,m,x)),u.add(g),this.geometries.push(h),this.materials.push(f),g}brandGate(e,t){const n=this.textTexture(1024,1024,(s,o,l)=>{s.fillStyle="#f4f6fa",s.font="700 52px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("AI Coaching",o/2,70,580),s.font="600 42px Arial",s.fillText(String(t+1).padStart(2,"0"),o/2,l-70);for(const u of[38,o-110]){s.save(),s.beginPath(),s.rect(u,185,72,654),s.clip();for(const h of[222,268,712,758])s.beginPath(),s.moveTo(u,h),s.lineTo(u+72,h+36),s.lineTo(u+72,h+59),s.lineTo(u,h+23),s.closePath(),s.fill();s.restore()}});for(const s of[-1,1])this.gateLabels.push(this.decal(n,1.4,1.4,[s*.021,0,0],[0,s,0],[0,0,1],e))}addGateSupports(e){const t=new Ul(.011,.011,1,8).rotateX(Math.PI/2),n=new Lr(.38,.16,.026),s=new ua({color:"#7d8991",roughness:.8,metalness:.25}),o=new ua({color:"#525c65",roughness:.95,metalness:0});this.geometries.push(t,n),this.materials.push(s,o);const l=this.floorBounds.max.z;for(const[u,h]of e){h.geometry.computeBoundingBox();const f=h.geometry.boundingBox,g=new K().setFromMatrixPosition(h.matrix),_=new K(g.x,g.y,l).applyMatrix4(h.matrix.clone().invert()).z,m=_+.026,x=f.min.z+.035,E=x-m;if(E<=0)continue;const R=new qr;R.name=`gate-support-${u}`,h.add(R);for(const M of[f.min.y+.1,f.max.y-.1]){const S=new _n(t,s);S.scale.z=E,S.position.set(0,M,(x+m)/2);const L=new _n(n,o);L.position.set(0,M,_+.013);for(const I of[S,L])I.castShadow=!0,I.receiveShadow=!0,R.add(I)}R.userData={index:u,floorZ:l,poleDiameter:.022,poleHeight:E,baseCount:2},this.gateSupports.push(R)}}addWallSigns(e,t){const n=t.reduce((l,u)=>l+u[0],0)/t.length,s=this.textTexture(2048,384,(l,u)=>{l.fillStyle="#011f5b",l.font="700 190px Arial",l.textAlign="center",l.fillText("AI Coaching",u/2,235),l.fillStyle="#011f5b",l.fillRect(702,290,430,9),l.fillStyle="#990000",l.fillRect(1140,290,206,9)});e.updateMatrixWorld(!0);const o=new K(n,4,4.2);for(const l of[[0,-1,0],[0,1,0]]){const u=new K(...l),h=new u0(o,u).intersectObjects(e.children,!1)[0];if(!h)continue;const f=h.point.clone().addScaledVector(u,-.025),g=l[1]<0,_=this.decal(g?this.pennTexture:s,g?5:7,g?3:1.3125,f.toArray(),[u.y,-u.x,0],[0,0,1],e);_.userData.logo=g?"Penn":"AI Coaching",this.wallSigns.push(_)}}snapshot(){return{style:this.style,gateLabels:this.gateLabels.length,gateSupports:this.gateSupports.length,supportsVisible:this.gateSupports.filter(e=>e.visible&&e.parent.visible).length,supportDimensions:this.gateSupports.map(e=>e.userData),wallSigns:this.wallSigns.length,pennSigns:this.wallSigns.filter(e=>e.userData.logo==="Penn").length,pennLogoLoaded:!!this.pennTexture.image?.complete,floorBounds:{min:this.floorBounds.min.toArray(),max:this.floorBounds.max.toArray()}}}dispose(){for(const e of this.textures)e.dispose();for(const e of this.materials)e.dispose();for(const e of this.geometries)e.dispose()}}class cE{constructor(e,t,n){this.sim=t,this.source=n,this.mode="follow",this.lastStep=-1,this.smooth=null,this.renderer=new rE({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=en,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=es,this.renderer.toneMapping=Ml,this.renderer.toneMappingExposure=1.35,e.append(this.renderer.domElement),this.scene=new Nv,this.scene.background=new gt("#d4e5ed");const s=new o0(16777215,1.7);this.scene.add(s);const o=new i0(15136255,12102032,1.8);o.up.set(0,0,1),this.scene.add(o);const l=new ou(16775144,2.2);l.position.set(1,15,18),this.scene.add(l);const u=new ou(14019071,.9);u.position.set(-18,-15,6),this.scene.add(u),this.lights=[s,o,l,u],l.castShadow=!0,l.shadow.mapSize.set(1024,1024),Object.assign(l.shadow.camera,{left:-25,right:25,top:35,bottom:-35,near:.1,far:90}),l.shadow.bias=-3e-4,l.shadow.normalBias=.035,l.shadow.radius=3.5,l.shadow.intensity=.4,l.target.position.set(-7,2,0),this.scene.add(l.target),this.ceilingLights=[[-7,-16,7.5],[-1,2,7.5],[-7,20,7.5]].map(R=>{const M=new s0(16775663,30,35,1.05,.85,2);return M.position.set(...R),M.target.position.set(R[0],R[1],0),this.scene.add(M,M.target),M}),this.venue=new lE(this.renderer),this.staticSurfaces=[],this.camera=new Sn(82,1,.008,250),this.camera.up.set(0,0,1),this.fov=n.cameras.fpv.fovy,this.dynamic=[],this.gateMeshes=new Map,this.materials=[],this.geometries=[],this.textures=[];const h=getComputedStyle(e);this.gateColors={current:h.getPropertyValue("--gate-current").trim(),idle:h.getPropertyValue("--gate-idle").trim()};const f=new xd,g=new Map,_=new Map,m=new Map;this.textureReady=[this.venue.ready];const x=n.meshes.map(R=>{const M=new Rn;return M.setAttribute("position",new pn(R.position.flat(),3)),M.setAttribute("normal",new pn(R.normal.flat(),3)),R.uv&&M.setAttribute("uv",new pn(R.uv.flat(),2)),this.geometries.push(M),M});for(const R of n.geoms){if(R.mesh<0)continue;const M=R.bodyName?.startsWith("gate"),S=R.body>0&&!M,L=this.matrix(R.matrix,R.position),I=!S&&!M?x[R.mesh].clone().applyMatrix4(L):null,D=I?aE(R,I):null,O=JSON.stringify([R.rgba,R.texture,M,D]);let P=_.get(O);if(!P){if(P=new ua({color:new gt().setRGB(...R.rgba.slice(0,3)),roughness:.9,metalness:.02,side:Mn,emissive:2434341,emissiveIntensity:.16}),R.texture){if(!g.has(R.texture)){let G,A;this.textureReady.push(new Promise((B,k)=>{G=B,A=k}));const F=f.load(`/demo/sim/textures/${R.texture}`,G,void 0,A);F.colorSpace=en,F.wrapS=F.wrapT=rs,F.anisotropy=4,g.set(R.texture,F),this.textures.push(F)}P.map=g.get(R.texture)}_.set(O,P),this.materials.push(P)}if(!S&&!M){const G=I;this.geometries.push(G),P.userData.venueRole=D,G.setAttribute("venueUv",oE(G,D)),D==="floor"&&this.venue.floorBounds.union(G.boundingBox),D==="wall"&&this.venue.wallBounds.union(G.boundingBox),m.has(P)||m.set(P,[]),m.get(P).push(G)}else{M?(P=new cs({color:this.gateColors.idle,side:Mn,toneMapped:!1}),this.materials.push(P)):(P=P.clone(),P.emissive.set(0),P.roughness=.65,P.metalness=.08,R.bodyName.endsWith("_prop")&&P.color.set("#e6e9ed"),this.materials.push(P));const G=new _n(x[R.mesh],P);if(G.matrixAutoUpdate=!1,G.matrix.copy(L),this.scene.add(G),G.castShadow=!0,G.receiveShadow=!M,M){const A=Number(R.bodyName.slice(4));this.gateMeshes.set(A,G),this.venue.brandGate(G,A)}else this.dynamic.push({mesh:G,id:R.id})}}for(const[R,M]of m)for(const S of[!0,!1]){const L=M.filter(O=>!!O.attributes.uv===S);if(!L.length)continue;const I=sE(L),D=new _n(I,R);this.geometries.push(I),this.scene.add(D),D.receiveShadow=!0,D.castShadow=R.userData.venueRole==="fixture",this.staticSurfaces.push({mesh:D,original:R,originalUv:I.getAttribute("uv"),venueUv:I.getAttribute("venueUv"),role:R.userData.venueRole})}this.venue.addWallSigns(this.scene,n.gates),this.venue.addGateSupports(this.gateMeshes);const E=new URLSearchParams(location.search).get("venue");this.setVenue(E==="original"||ts[E]?E:"studio"),this.observer=new ResizeObserver(()=>this.resize(e)),this.observer.observe(e),this.resize(e)}setVenue(e){this.lastRenderKey=null,this.venue.setStyle(e);const t=e==="original";for(const s of this.staticSurfaces){s.mesh.material=t?s.original:this.venue.roles[s.role];const o=t?s.originalUv:s.venueUv;o?s.mesh.geometry.setAttribute("uv",o):s.mesh.geometry.deleteAttribute("uv")}const n=t?[1.7,1.8,2.2,.9]:[.3,.85,1.45,.3];this.lights.forEach((s,o)=>s.intensity=n[o]),this.lights[1].color.set(t?15136255:15660025),this.lights[1].groundColor.set(t?12102032:11449533),this.lights[2].color.set(t?16775144:16775666),this.lights[3].color.set(t?14019071:15134198),this.lights[1].position.set(...t?[0,1,0]:[0,0,1]),this.ceilingLights.forEach(s=>s.visible=!t),this.renderer.shadowMap.enabled=!t,this.lights[2].position.set(...t?[1,15,18]:[-9,8,8]),this.lights[2].target.position.set(...t?[0,0,0]:[-7,2,0])}matrix(e,t){return new Ut().set(e[0],e[1],e[2],t[0],e[3],e[4],e[5],t[1],e[6],e[7],e[8],t[2],0,0,0,1)}resize(e){const{width:t,height:n}=e.getBoundingClientRect();this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.lastRenderKey=null}render(){const e=this.sim,t=e.data,n=new K(...e.position),s=new Qn(e.quaternion[1],e.quaternion[2],e.quaternion[3],e.quaternion[0]),o=[e.steps,e.gate,...e.position,...e.quaternion,this.mode,this.renderer.toneMappingExposure].join(",");if(o!==this.lastRenderKey){this.lastRenderKey=o;for(const{mesh:l,id:u}of this.dynamic)l.matrix.copy(this.matrix(t.geom_xmat.subarray(u*9,u*9+9),t.geom_xpos.subarray(u*3,u*3+3))),l.matrixWorldNeedsUpdate=!0;for(const[l,u]of this.gateMeshes)u.visible=l!==(e.gate===6?0:6),u.material.color.set(l===e.gate?this.gateColors.current:this.gateColors.idle);if(this.mode==="fpv"){this.camera.fov=this.fov,this.camera.position.copy(n).add(new K(...this.source.cameras.fpv.position).applyQuaternion(s));const l=this.source.cameras.fpv.quaternion,u=new Qn(l[1],l[2],l[3],l[0]),h=Qr(e.quaternion),f=Math.atan2(h[3],h[0]),g=s.clone().multiply(u),_=new Qn().setFromAxisAngle(new K(0,0,1),f).multiply(u),m=new Qn(g.x*.9+_.x*.1,g.y*.9+_.y*.1,g.z*.9+_.z*.1,g.w*.9+_.w*.1).normalize();!this.smooth||e.steps<this.lastStep?this.smooth=m:e.steps!==this.lastStep&&(this.smooth.dot(m)<0&&m.set(-m.x,-m.y,-m.z,-m.w),this.smooth.set(this.smooth.x*.6+m.x*.4,this.smooth.y*.6+m.y*.4,this.smooth.z*.6+m.z*.4,this.smooth.w*.6+m.w*.4).normalize()),this.camera.quaternion.copy(this.smooth)}else if(this.mode==="follow"){this.camera.fov=62;const l=Qr(e.quaternion),u=Math.atan2(l[3],l[0]);this.camera.position.copy(n).add(new K(-1.15*Math.cos(u),-1.15*Math.sin(u),.38)),this.camera.lookAt(n.clone().add(new K(.7*Math.cos(u),.7*Math.sin(u),.12)))}else this.camera.fov=58,this.camera.position.set(3,26,7.5),this.camera.lookAt(-3,0,1.5);this.lastStep=e.steps,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}}dispose(){this.observer.disconnect(),this.venue.dispose(),this.renderer.dispose();for(const e of new Set(this.geometries))e.dispose();for(const e of this.materials)e.dispose();for(const e of this.textures)e.dispose()}}const Uu=-1+2/3.15,Cd=[{name:"Roll",index:1,keys:[["KeyA","A"],["KeyD","D"]]},{name:"Yaw",index:3,keys:[["KeyQ","Q"],["KeyE","E"]]},{name:"Pitch",index:2,keys:[["KeyW","W"],["KeyS","S"]]},{name:"Thrust",index:0,keys:[["ArrowDown","Down"],["ArrowUp","Up"]]}],uE=[["Space","Space","Pause / resume"],["KeyR","R","Reset flight"],["KeyC","C","Camera"],["KeyH","H","Tutorial"]],ma=i=>Number.isFinite(i)?Math.max(-1,Math.min(1,i)):0,bo=(i,e,t=1)=>Math.abs(i)<e?0:t*Math.sign(i)*Math.sqrt(Math.abs(i));function dE(i,e,t,n={left:[0,0],right:[0,0]}){const s=[Uu+.5*(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown"))),.8*(Number(i.has("KeyD"))-Number(i.has("KeyA"))),.8*(Number(i.has("KeyS"))-Number(i.has("KeyW"))),.8*(Number(i.has("KeyE"))-Number(i.has("KeyQ")))],o=Cd.filter(u=>u.keys.some(([h])=>i.has(h))).map(u=>u.index);let l=s.slice();if(e?.connected){const u=h=>ma(e.axes[h]);l=[-Math.sign(u(1))*Math.pow(Math.abs(u(1)),1.5),bo(u(t.rollAxis),t.deadzone,t.invertRoll?-1:1),bo(-u(3),t.deadzone),bo(u(t.yawAxis),t.deadzone,t.invertYaw?-1:1)];for(const h of o)l[h]=s[h]}return n.left.some(u=>u!==0)&&(l[0]=Uu-n.left[1]*.5,l[3]=n.left[0]),n.right.some(u=>u!==0)&&(l[1]=n.right[0],l[2]=n.right[1]),{human:l.map(ma),keyboardAxes:o}}const Nu=(i,e)=>`<kbd data-key="${i}">${e}</kbd>`;class fE{constructor({onClose:e}){this.dialog=document.createElement("dialog"),this.dialog.id="tutorial",this.dialog.setAttribute("aria-labelledby","tutorial-title"),this.dialog.innerHTML=`
      <header class="tutorial-header"><h2 id="tutorial-title">Controls</h2><span class="tutorial-state"><i data-lucide="pause"></i>Paused</span><button id="close-tutorial" class="icon-button" aria-label="Close tutorial" title="Close (Esc)"><i data-lucide="x"></i></button></header>
      <div class="tutorial-body">
        <section class="keyboard-monitor"><h3><i data-lucide="keyboard"></i>Keyboard</h3>
          <div class="key-groups">${Cd.map(t=>`<div class="key-group"><span>${t.name}</span><div>${t.keys.map(([n,s])=>Nu(n,s)).join("")}</div></div>`).join("")}</div>
          <div class="shortcut-list">${uE.filter(([t])=>t!=="KeyH").map(([t,n,s])=>`<div><span>${s}</span>${Nu(t,n)}</div>`).join("")}</div>
        </section>
        <section class="gamepad-monitor"><h3><i data-lucide="gamepad-2"></i>Controller <span id="pad-status">Not connected</span></h3>
          <p id="pad-name" hidden></p>
          <div class="stick-monitors disconnected">${["Left","Right"].map((t,n)=>`<div><div class="stick-monitor" aria-label="${t} stick"><span id="pad-stick-${n}"></span></div><span>${t} stick</span></div>`).join("")}</div>
          <div id="pad-buttons" class="pad-buttons" aria-label="Controller buttons" hidden></div>
        </section>
      </div>`,document.body.append(this.dialog),this.dialog.querySelector("#close-tutorial").onclick=e,this.dialog.addEventListener("cancel",t=>{t.preventDefault(),e()}),this.padSignature="",this.input=null}get open(){return this.dialog.open}show(){this.dialog.showModal(),this.dialog.querySelector("#close-tutorial").focus(),this.dialog.querySelector(".tutorial-body").scrollTop=0}close(){this.dialog.close(),this.input=null}update(e,t,n){if(!this.open)return;this.input=[...n];for(const f of this.dialog.querySelectorAll("[data-key]"))f.classList.toggle("pressed",e.has(f.dataset.key));const s=this.dialog.querySelector("#pad-status");s.textContent=t?"Connected":"Not connected",s.classList.toggle("connected",!!t);const o=this.dialog.querySelector("#pad-name");o.hidden=!t,o.textContent=t?.id||"",o.title=t?.id||"",this.dialog.querySelector(".stick-monitors").classList.toggle("disconnected",!t);const l=Math.min(t?.axes.length||0,32),u=Math.min(t?.buttons.length||0,64),h=`${t?.index}:${t?.id}:${l}:${u}`;if(h!==this.padSignature){this.padSignature=h;const f=this.dialog.querySelector("#pad-buttons");f.hidden=!u,f.innerHTML=Array.from({length:u},(g,_)=>`<span data-pad-button="${_}" title="Button ${_}">B${_}</span>`).join("");for(const g of["roll-axis","yaw-axis"]){const _=document.getElementById(g);for(let m=0;m<l;m++)Array.from(_.options).some(x=>x.value===String(m))||_.add(new Option(`Axis ${m}`,m))}}for(let f=0;f<2;f++)this.dialog.querySelector(`#pad-stick-${f}`).style.transform=`translate(${ma(t?.axes[f*2])*26}px,${ma(t?.axes[f*2+1])*26}px)`;for(let f=0;f<u;f++){const g=t.buttons[f],_=typeof g=="number"?g:g.value;this.dialog.querySelector(`[data-pad-button="${f}"]`).classList.toggle("pressed",!!g.pressed||_>.1)}}}const fn=i=>`<i data-lucide="${i}"></i>`;document.querySelector("#app").innerHTML=`
<div id="viewport" aria-label="Interactive MuJoCo drone racing scene"></div>
<header class="brand"><span class="brand-mark">${fn("plane")}</span><div><h1>AI Coaching</h1><span>Drone Racing</span></div></header>
<button id="open-tutorial" class="tutorial-entry" title="Tutorial & input check (H)" aria-haspopup="dialog" aria-controls="tutorial">${fn("book-open")}<span>Tutorial</span><kbd>H</kbd></button>
<div class="baseline-selector"><label for="baseline">Coaching method</label><select id="baseline"><option value="l2c">L2C · AI Coaching</option><option value="mia">MIA · Minimal intervention</option><option value="rbf">RBF · Rule-based fading</option></select><span id="baseline-detail"></span></div>
<div class="telemetry"><div><span>LAP</span><strong id="lap">00</strong></div><div><span>TIME</span><strong id="timer">00:00.00</strong></div><div><span>GATE</span><strong id="gate">01 <small>/ 12</small></strong></div></div>
<aside id="settings" class="settings" hidden aria-label="Flight settings"><div class="panel-title"><h2>Flight settings</h2><button class="icon-button" id="close-settings" title="Close settings" aria-label="Close settings">${fn("x")}</button></div>
<label>Control mode<select id="mode"><option value="expert">Expert autopilot</option><optgroup label="HCI methods"><option value="l2c">L2C · AI Coaching</option><option value="mia">MIA · Minimal intervention</option><option value="rbf">RBF · Rule-based fading</option></optgroup><optgroup label="Debug controls"><option value="assisted">Fixed assistance</option><option value="manual">Manual flight</option><option value="coach">Coach · fixed skill</option><option value="tracking">Tracking actor only</option></optgroup></select></label>
<label id="alpha-row" hidden>AI assistance <output id="alpha-label">80%</output><input id="alpha" type="range" min="30" max="100" value="80"></label>
<label id="skill-row" hidden>Fixed skill <output id="skill-label">0.00</output><input id="skill" type="range" min="0" max="100" value="0"></label>
<label>Brightness <output id="exposure-label">135%</output><input id="exposure" type="range" min="60" max="220" value="135"></label>
<label>Venue style<select id="venue">${Object.entries(ts).map(([i,e])=>`<option value="${i}">${e.name}</option>`).join("")}<option value="original">Original warehouse</option></select></label>
<div class="input-heading">${fn("gamepad-2")}<strong id="device">Keyboard</strong></div>
<label>Roll axis<select id="roll-axis"><option value="2">Right stick X · axis 2</option><option value="0">Axis 0</option><option value="1">Axis 1</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<label>Yaw axis<select id="yaw-axis"><option value="0">Left stick X · axis 0</option><option value="1">Axis 1</option><option value="2">Axis 2</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<div class="checks"><label><input id="invert-roll" type="checkbox">Invert roll</label><label><input id="invert-yaw" type="checkbox" checked>Invert yaw</label></div>
<label>Stick deadzone <output id="deadzone-label">5%</output><input id="deadzone" type="range" min="0" max="30" value="5"></label>
<button id="export" class="export">${fn("download")} Export flight log</button><div class="engine">MuJoCo 3.13 <span>Browser physics</span></div></aside>
<div class="flight-data"><span id="speed">0.0 <small>m/s</small></span><span id="altitude">2.0 <small>m AGL</small></span><span id="status">AUTOPILOT</span></div>
<div class="gate-strip" id="gate-strip" aria-label="Gate progress">${Array.from({length:12},(i,e)=>`<span data-gate="${e}">${e+1}</span>`).join("")}</div>
<div class="joystick left-stick" aria-label="Touch yaw and thrust" role="application"><span></span></div><div class="joystick right-stick" aria-label="Touch roll and pitch" role="application"><span></span></div>
<nav class="toolbar" aria-label="Flight controls">
<div class="segmented" role="group" aria-label="Camera view"><button data-view="fpv" aria-pressed="false">FPV</button><button data-view="follow" class="selected" aria-pressed="true">Chase</button><button data-view="overview" aria-pressed="false">Track</button></div><span class="divider"></span>
<button id="pause" class="icon-button" title="Pause (Space)" aria-label="Pause">${fn("pause")}</button><button id="reset" class="icon-button" title="Reset flight (R)" aria-label="Reset flight">${fn("rotate-ccw")}</button><button id="sound" class="icon-button" title="Enable rotor audio" aria-label="Enable rotor audio">${fn("volume-x")}</button><button id="settings-toggle" class="icon-button" title="Flight settings" aria-label="Flight settings" aria-expanded="false">${fn("settings-2")}</button><button id="fullscreen" class="icon-button" title="Full screen" aria-label="Full screen">${fn("maximize")}</button>
<div class="control-switch"><div class="mode-status" role="status" aria-live="polite" aria-atomic="true"><span>Current mode</span><strong id="current-mode">Autopilot</strong></div><button id="take-control" class="primary" title="Start a new trial using the selected coaching method">${fn("gamepad-2")}<span>Start flying</span></button></div></nav>
<div id="notice" role="status" hidden></div><div class="loading" id="loading"><span class="spinner"></span><strong>Preparing flight</strong><span id="loading-status">Loading MuJoCo</span><button id="retry" hidden>Retry</button></div>`;const hE={Play:y_,Pause:x_,RotateCcw:M_,Settings2:E_,Maximize:__,Minimize:v_,Gamepad2:m_,Camera:f_,Download:p_,Volume2:w_,VolumeX:T_,X:A_,Sun:b_,Plane:S_,ChevronDown:h_,BookOpen:d_,Keyboard:g_},Ur=()=>Xu({icons:hE});Ur();const Pe=i=>document.getElementById(i),Rd=document.querySelectorAll("#open-tutorial,#baseline,.toolbar button,.settings button,.settings input,.settings select");Rd.forEach(i=>i.disabled=!0);let Ge,Bt,hn=!1,vi=!1,wo=0,Tr=0,Pd=0,Ou,di,Kr,Zr,yr=!1;const ms=new Set,hi={left:[0,0],right:[0,0]},ns=[],Dd=[];let xl="Keyboard",is=0;const zn=new fE({onClose:pE});Ur();function Ht(i,e){if(Pe("notice").textContent=i,e){const t=document.createElement("kbd");t.textContent=e,Pe("notice").append(t)}Pe("notice").hidden=!1,clearTimeout(Ou),Ou=setTimeout(()=>Pe("notice").hidden=!0,3e3)}function Gn(i){hn=zn.open||!!i,Tr=0,Pe("pause").innerHTML=fn(hn?"play":"pause"),Pe("pause").setAttribute("aria-label",hn?"Resume":"Pause"),Pe("pause").title=`${hn?"Resume":"Pause"} (Space)`,Ur(),Ge&&ya()}function Fd(){Gn(!hn),Ht(hn?"Flight paused":"Flight resumed","Space")}function Li(i){const e={expert:"Autopilot",assisted:"AI-assisted",manual:"Manual",coach:"Coach (fixed)",tracking:"Tracking",...Qi};if(!Ge||!Object.hasOwn(e,i))throw new Error("Invalid flight mode");Ge.coaching&&Dd.push({id:is,endedAt:new Date().toISOString(),state:Ge.snapshot(),beliefs:Ge.coaching.belief.probabilities}),Ge.setMode(i),Pe("mode").value=i,Pe("skill-row").hidden=i!=="coach",Pe("alpha-row").hidden=i!=="assisted",Object.hasOwn(Qi,i)&&(is++,Pe("baseline").value=i,Bt.smooth=null,Tr=0,ns.push({event:"trial_start",trialId:is,method:i,at:new Date().toISOString()})),Pe("current-mode").textContent=e[i];const t=Pe("take-control");t.innerHTML=`${fn(i==="expert"?"gamepad-2":"plane")}<span>${i==="expert"?"Start flying":"Use autopilot"}</span>`,t.title=i==="expert"?"Start a new trial using the selected coaching method":"Switch to expert autopilot",Ur(),ya()}function Bl(){!Ge||zn.open||(Ge.coaching?Li(Ge.mode):Ge.reset(),Bt.smooth=null,Tr=0,Ht("Flight reset","R"))}function Sl(i){if(!["fpv","follow","overview"].includes(i))throw new Error("Invalid camera");Bt&&(Bt.mode=i),document.querySelectorAll("[data-view]").forEach(e=>{const t=e.dataset.view===i;e.classList.toggle("selected",t),e.setAttribute("aria-pressed",String(t))})}function Ld(i){Sl(i),Ht(`Camera: ${{fpv:"FPV",follow:"Chase",overview:"Track"}[i]}`,"C")}function Sa(i){Pe("settings").hidden=!i,Pe("settings-toggle").setAttribute("aria-expanded",String(i))}function nr(){ms.clear(),hi.left=[0,0],hi.right=[0,0],document.querySelectorAll(".joystick>span").forEach(i=>i.style.transform="")}function Id(){!vi||zn.open||(nr(),Sa(!1),Gn(!0),Pe("notice").hidden=!0,zn.show())}function pE(i=!0){zn.close(),nr(),Gn(!0),Pe("open-tutorial").focus(),i&&Ht("Flight paused","Space")}function mE(){let i=[];try{i=Array.from(navigator.getGamepads?.()??[])}catch{}const e=i.find(o=>o?.connected),t={rollAxis:Number(Pe("roll-axis").value),yawAxis:Number(Pe("yaw-axis").value),invertRoll:Pe("invert-roll").checked,invertYaw:Pe("invert-yaw").checked,deadzone:Number(Pe("deadzone").value)/100},{human:n,keyboardAxes:s}=dE(ms,e,t,hi);return xl=e?`${s.length?"Keyboard + ":""}${e.id}`:"Keyboard",(hi.left.some(o=>o!==0)||hi.right.some(o=>o!==0))&&(xl="Touch controls"),{human:n,pad:e}}for(const i of["left","right"]){let e=function(s){const o=t.getBoundingClientRect();hi[i]=[On((s.clientX-o.left-o.width/2)/(o.width*.35)),On((s.clientY-o.top-o.height/2)/(o.height*.35))],t.firstElementChild.style.transform=`translate(${hi[i][0]*28}px,${hi[i][1]*28}px)`};const t=document.querySelector(`.${i}-stick`);let n=null;t.addEventListener("pointerdown",s=>{n=s.pointerId,t.setPointerCapture(n),e(s)}),t.addEventListener("pointermove",s=>{s.pointerId===n&&e(s)});for(const s of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(s,()=>{n=null,hi[i]=[0,0],t.firstElementChild.style.transform=""})}Pe("pause").onclick=Fd;Pe("reset").onclick=Bl;Pe("open-tutorial").onclick=Id;Pe("settings-toggle").onclick=()=>{Sa(Pe("settings").hidden),Ht(Pe("settings").hidden?"Settings closed":"Flight settings")};Pe("close-settings").onclick=()=>{Sa(!1),Ht("Settings closed")};Pe("take-control").onclick=()=>{vi&&(nr(),Ge.mode==="expert"?(Li(Pe("baseline").value),Gn(!1),Ht(`${Qi[Ge.mode]} started`)):(Li("expert"),Ht(hn?"Autopilot selected. Flight paused.":"Autopilot active")))};Pe("baseline").onchange=()=>{vi&&(Gn(!0),nr(),Li("expert"),Ht(`${Qi[Pe("baseline").value]} selected. Flight paused.`))};Pe("mode").onchange=i=>{const e=i.target.value;Object.hasOwn(Qi,e)&&(Gn(!0),nr()),Li(e),Ht(`${Pe("mode").selectedOptions[0].textContent}${hn?" · Paused":""}`)};document.querySelectorAll("[data-view]").forEach(i=>{i.title=`${i.textContent} camera (C to cycle)`,i.onclick=()=>Ld(i.dataset.view)});Pe("alpha").oninput=i=>{Ge&&(Ge.alpha=Number(i.target.value)/100),Pe("alpha-label").value=i.target.value+"%"};Pe("skill").oninput=i=>{Ge&&(Ge.skill=Number(i.target.value)/100),Pe("skill-label").value=(Number(i.target.value)/100).toFixed(2)};Pe("exposure").oninput=i=>{Bt&&(Bt.renderer.toneMappingExposure=Number(i.target.value)/100),Pe("exposure-label").value=i.target.value+"%"};Pe("venue").onchange=i=>{Bt&&(Bt.setVenue(i.target.value),Ht(Pe("venue").selectedOptions[0].textContent))};Pe("deadzone").oninput=i=>Pe("deadzone-label").value=i.target.value+"%";Pe("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Ht("Full screen is unavailable in this browser")}};document.addEventListener("fullscreenchange",()=>{const i=!!document.fullscreenElement;Pe("fullscreen").innerHTML=fn(i?"minimize":"maximize"),Pe("fullscreen").title=i?"Exit full screen":"Full screen",Pe("fullscreen").setAttribute("aria-label",Pe("fullscreen").title),Ur(),Ht(i?"Full screen enabled":"Full screen closed")});Pe("sound").onclick=async()=>{try{di||(di=new(window.AudioContext||window.webkitAudioContext),Kr=di.createOscillator(),Kr.type="sawtooth",Zr=di.createGain(),Zr.gain.value=0,Kr.connect(Zr),Zr.connect(di.destination),Kr.start()),await di.resume(),yr=!yr,Pe("sound").innerHTML=fn(yr?"volume-2":"volume-x"),Pe("sound").setAttribute("aria-label",yr?"Mute rotor audio":"Enable rotor audio"),Pe("sound").title=Pe("sound").getAttribute("aria-label"),Ur(),Ht(yr?"Rotor audio enabled":"Rotor audio muted")}catch{Ht("Audio is unavailable")}};Pe("export").onclick=()=>{if(!Ge)return;const i=new Blob([JSON.stringify({manifest:Ge.policies.expert.metadata,physics:"MuJoCo 3.13 WASM",hciConfig:ju,state:Ge.snapshot(),currentTrial:is,beliefs:Ge.coaching?.belief.probabilities??null,trials:Dd,rows:ns},null,2)],{type:"application/json"}),e=URL.createObjectURL(i),t=document.createElement("a");t.href=e,t.download=`ai-coaching-drone-racing-${Date.now()}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),Ht("Flight log exported")};window.addEventListener("keydown",i=>{!vi||["INPUT","SELECT","TEXTAREA"].includes(i.target.tagName)||(ms.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!(zn.open||i.repeat)&&(i.code==="Space"&&Fd(),i.code==="KeyR"&&Bl(),i.code==="KeyC"&&Bt&&Ld(["fpv","follow","overview"][(["fpv","follow","overview"].indexOf(Bt.mode)+1)%3]),i.code==="KeyH"&&Id(),i.code==="Escape"&&Sa(!1)))});window.addEventListener("keyup",i=>ms.delete(i.code));window.addEventListener("blur",()=>{nr(),vi&&Gn(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(nr(),vi&&Gn(!0))});window.addEventListener("gamepadconnected",i=>Ht(`Controller connected: ${i.gamepad.id}`));window.addEventListener("gamepaddisconnected",()=>{vi&&(Li("expert"),Ht(hn?"Controller disconnected. Autopilot selected; flight paused.":"Controller disconnected. Autopilot active."))});const gE=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${(i%60).toFixed(2).padStart(5,"0")}`;function ya(){const i=Ge.coaching?.snapshot(Ge.gate);Pe("lap").textContent=String(Ge.laps).padStart(2,"0"),Pe("timer").textContent=gE(i?i.lapTime:Ge.lapStart===null?Ge.steps*.02:Ge.steps*.02-Ge.lapStart),Pe("gate").innerHTML=`${String(Ge.gate+1).padStart(2,"0")} <small>/ 12</small>`,Pe("speed").innerHTML=`${Math.hypot(...Ge.data.qvel.subarray(0,3)).toFixed(1)} <small>m/s</small>`,Pe("altitude").innerHTML=`${Ge.position[2].toFixed(1)} <small>m AGL</small>`,Pe("status").textContent=hn?"PAUSED":Ge.mode==="expert"?"AUTOPILOT":Ge.mode==="manual"?"MANUAL":`${Ge.mode.toUpperCase()} · ${Math.round(Ge.effectiveAlpha*100)}% AI`;const e=i?{coaching:"Coaching",evaluation:"Evaluation",recovery:"Recovery"}[i.phase]:"";Pe("baseline-detail").textContent=i?`${hn?"Paused":e} · ${Math.round(Ge.effectiveAlpha*100)}% blend${Ge.mode==="l2c"?` · Level ${i.skillLevel}`:""}`:"",Pe("device").textContent=xl,document.querySelectorAll("[data-gate]").forEach(t=>{t.classList.toggle("current",Number(t.dataset.gate)===Ge.gate),t.classList.toggle("passed",Number(t.dataset.gate)<Ge.gate)})}function Ud(i){try{wo&&(Tr+=hn?0:Math.min((i-wo)/1e3,.1)),wo=i;const{human:e,pad:t}=mE();for(zn.update(ms,t,e);Tr>=.02&&!hn;){const n=Ge.action(e),s=Ge.step(n);Tr-=.02,Ge.steps%5===0&&(ns.push({time:Ge.coaching?.time??Ge.data.time,trialId:Ge.coaching?is:null,mode:Ge.mode,position:Ge.position,action:n,human:e,gate:Ge.gate,alpha:Ge.effectiveAlpha,coaching:Ge.coaching?.snapshot(Ge.gate)??null}),ns.length>36e3&&ns.shift()),s.failed&&(Ht(`${s.cause}. Resetting flight.`),Ge.recover(),Bt.smooth=null)}Bt.render(),Pd++%3===0&&ya(),di&&(Kr.frequency.setTargetAtTime(90+Ge.motors.reduce((n,s)=>n+s,0)/35,di.currentTime,.08),Zr.gain.setTargetAtTime(yr&&!hn?.012:0,di.currentTime,.04))}catch(e){console.error(e),Gn(!0),Ht("Flight paused due to a simulation error.")}requestAnimationFrame(Ud)}async function To(i){const e=await fetch(`/demo/sim/${i}`);if(!e.ok)throw new Error(`Could not load ${i} (${e.status})`);const t=new Uint8Array(await e.arrayBuffer());return t[0]===31&&t[1]===139?n_(t):t}async function _E(){try{const i=await zg({locateFile:o=>o.endsWith(".wasm")?Gg:o});Pe("loading-status").textContent="Loading warehouse and expert";const e=await To("physics.mjb.gz"),t=JSON.parse(new TextDecoder().decode(await To("scene.json.gz"))),n=JSON.parse(new TextDecoder().decode(await To("policies.json.gz")));Ge=new k_(i,e,t,n),Bt=new cE(Pe("viewport"),Ge,t),Sl(Bt.mode),Li(Ge.mode),Pe("venue").value=Bt.venue.style,await Promise.all(Bt.textureReady),Bt.render(),vi=!0,Rd.forEach(o=>o.disabled=!1),Pe("loading").hidden=!0,requestAnimationFrame(Ud),window.flight={snapshot:()=>({...Ge.snapshot(),paused:hn,tutorialOpen:zn.open,inputPreview:zn.open?zn.input:null,view:Bt.mode,venue:Bt.venue.style,frames:Pd,ready:vi,action:Ge.lastAction,human:Ge.lastHuman}),visuals:()=>Bt.venue.snapshot(),setVenue:o=>{Bt.setVenue(o),Pe("venue").value=o,Bt.render()},setPaused:Gn,setMode:Li,setCamera:Sl,reset:Bl,step:o=>{if(zn.open)throw new Error("Close the tutorial before advancing physics");if(!Number.isInteger(o)||o<0||o>1e4)throw new Error("Invalid steps");for(let l=0;l<o&&!Ge.step(Ge.action()).failed;l++);return Bt.render(),ya(),Ge.snapshot()}};const s=document.modelContext;if(s?.registerTool){const o=new AbortController;for(const l of[{name:"get_flight_state",description:"Read current flight state",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>window.flight.snapshot()},{name:"set_flight_paused",description:"Pause or resume the flight",inputSchema:{type:"object",properties:{paused:{type:"boolean"}},required:["paused"],additionalProperties:!1},execute:u=>{if(typeof u.paused!="boolean")throw new Error("paused must be boolean");return Gn(u.paused),window.flight.snapshot()}}])Promise.resolve(s.registerTool(l,{signal:o.signal})).catch(()=>{});window.addEventListener("pagehide",()=>o.abort(),{once:!0})}}catch(i){console.error(i),Pe("loading-status").textContent=i.message,Pe("loading").classList.add("error"),Pe("retry").hidden=!1,Pe("retry").onclick=()=>location.reload()}}_E();const vE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
