(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const N0="modulepreload",U0=function(r){return"/car/"+r},Hu={},O0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=u(t.map(h=>{if(h=U0(h),h in Hu)return;Hu[h]=!0;const f=h.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":N0,f||(p.as="script"),p.crossOrigin="",p.href=h,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise((_,S)=>{p.addEventListener("load",_),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};var k0=(async function(r={}){var e,t=r,n=typeof window=="object",i=typeof WorkerGlobalScope<"u",s=typeof process=="object"&&process.versions?.node&&process.type!="renderer",o=!n&&!s&&!i;if(s){const{createRequire:a}=await O0(async()=>{const{createRequire:c}=await Promise.resolve().then(()=>Bw);return{createRequire:c}},void 0);var l=a(import.meta.url)}var u="./this.program",h=(a,c)=>{throw c},f=import.meta.url,g="";function p(a){return t.locateFile?t.locateFile(a,g):g+a}var _,S;if(s){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var b=process.versions.node,x=b.split(".").slice(0,3);if(x=x[0]*1e4+x[1]*100+x[2].split("-")[0]*1,x<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+b+")");var y=l("fs");f.startsWith("file:")&&(g=l("path").dirname(l("url").fileURLToPath(f))+"/"),S=c=>{c=z(c)?new URL(c):c;var d=y.readFileSync(c);return P(Buffer.isBuffer(d)),d},_=async(c,d=!0)=>{c=z(c)?new URL(c):c;var m=y.readFileSync(c,d?void 0:"utf8");return P(d?Buffer.isBuffer(m):typeof m=="string"),m},process.argv.length>1&&(u=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),h=(c,d)=>{throw process.exitCode=c,d}}else if(o){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||i){try{g=new URL(".",f).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");i&&(S=a=>{var c=new XMLHttpRequest;return c.open("GET",a,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),_=async a=>{if(z(a))return new Promise((d,m)=>{var v=new XMLHttpRequest;v.open("GET",a,!0),v.responseType="arraybuffer",v.onload=()=>{if(v.status==200||v.status==0&&v.response){d(v.response);return}m(v.status)},v.onerror=m,v.send(null)});var c=await fetch(a,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw new Error(c.status+" : "+c.url)}}else throw new Error("environment detection error");var C=console.log.bind(console),L=console.error.bind(console);P(!o,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var D;typeof WebAssembly!="object"&&L("no native wasm support detected");var O=!1;function P(a,c){a||W("Assertion failed"+(c?": "+c:""))}var z=a=>a.startsWith("file://");function A(){var a=Io();P((a&3)==0),a==0&&(a+=4),Ee[a>>2]=34821223,Ee[a+4>>2]=2310721022,Ee[0]=1668509029}function F(){if(!O){var a=Io();a==0&&(a+=4);var c=Ee[a>>2],d=Ee[a+4>>2];(c!=34821223||d!=2310721022)&&W(`Stack overflow! Stack cookie has been overwritten at ${Ce(a)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Ce(d)} ${Ce(c)}`),Ee[0]!=1668509029&&W("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class k extends Error{}class B extends k{}class Y extends k{constructor(c){super(c),this.excPtr=c;const d=Au(c);this.name=d[0],this.message=d[1]}}(()=>{var a=new Int16Array(1),c=new Int8Array(a.buffer);if(a[0]=25459,c[0]!==115||c[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function Z(a){Object.getOwnPropertyDescriptor(t,a)||Object.defineProperty(t,a,{configurable:!0,set(){W(`Attempt to set \`Module.${a}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function K(a){return()=>P(!1,`call to '${a}' via reference taken before Wasm module initialization`)}function ie(a){Object.getOwnPropertyDescriptor(t,a)&&W(`\`Module.${a}\` was supplied but \`${a}\` not included in INCOMING_MODULE_JS_API`)}function J(a){return a==="FS_createPath"||a==="FS_createDataFile"||a==="FS_createPreloadedFile"||a==="FS_unlink"||a==="addRunDependency"||a==="FS_createLazyFile"||a==="FS_createDevice"||a==="removeRunDependency"}function te(a,c){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,a)&&Object.defineProperty(globalThis,a,{configurable:!0,get(){c()}})}function pe(a,c){te(a,()=>{De(`\`${a}\` is not longer defined by emscripten. ${c}`)})}pe("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),pe("asm","Please use wasmExports instead");function _e(a){te(a,()=>{var c=`\`${a}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,d=a;d.startsWith("_")||(d="$"+a),c+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${d}')`,J(a)&&(c+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),De(c)}),Pe(a)}function Pe(a){Object.getOwnPropertyDescriptor(t,a)||Object.defineProperty(t,a,{configurable:!0,get(){var c=`'${a}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;J(a)&&(c+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),W(c)}})}var Ue,Le,et,nt,dt,ce,ye,se,Ee,$e,Ke,Ct,mt,vt=!1;function wt(){var a=et.buffer;nt=new Int8Array(a),ce=new Int16Array(a),dt=new Uint8Array(a),ye=new Uint16Array(a),se=new Int32Array(a),Ee=new Uint32Array(a),$e=new Float32Array(a),Ke=new Float64Array(a),Ct=new BigInt64Array(a),mt=new BigUint64Array(a)}P(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function rt(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Te(t.preRun.shift());Z("preRun"),Be(X)}function Gt(){P(!vt),vt=!0,F(),!t.noFSInit&&!E.initialized&&E.init(),sr.__wasm_call_ctors(),E.ignorePermissions=!1}function G(){if(F(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)st(t.postRun.shift());Z("postRun"),Be(Ie)}var Ft=0,gt=null,Mt={},Ne=null;function N(a){Ft++,t.monitorRunDependencies?.(Ft),a?(P(!Mt[a]),Mt[a]=1,Ne===null&&typeof setInterval<"u"&&(Ne=setInterval(()=>{if(O){clearInterval(Ne),Ne=null;return}var c=!1;for(var d in Mt)c||(c=!0,L("still waiting on run dependencies:")),L(`dependency: ${d}`);c&&L("(end of list)")},1e4))):L("warning: run dependency added without ID")}function T(a){if(Ft--,t.monitorRunDependencies?.(Ft),a?(P(Mt[a]),delete Mt[a]):L("warning: run dependency removed without ID"),Ft==0&&(Ne!==null&&(clearInterval(Ne),Ne=null),gt)){var c=gt;gt=null,c()}}function W(a){t.onAbort?.(a),a="Aborted("+a+")",L(a),O=!0;var c=new WebAssembly.RuntimeError(a);throw Le?.(c),c}function ae(a,c){return(...d)=>{P(vt,`native function \`${a}\` called before runtime initialization`);var m=sr[a];return P(m,`exported native function \`${a}\` not found`),P(d.length<=c,`native function \`${a}\` called with ${d.length} args but expects ${c}`),m(...d)}}var fe;function oe(){return t.locateFile?p("mujoco.wasm"):new URL("/car/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function Oe(a){if(a==fe&&D)return new Uint8Array(D);if(S)return S(a);throw"both async and sync fetching of the wasm failed"}async function be(a){if(!D)try{var c=await _(a);return new Uint8Array(c)}catch{}return Oe(a)}async function We(a,c){try{var d=await be(a),m=await WebAssembly.instantiate(d,c);return m}catch(v){L(`failed to asynchronously prepare wasm: ${v}`),z(fe)&&L(`warning: Loading from a file URI (${fe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),W(v)}}async function Ye(a,c,d){if(!a&&typeof WebAssembly.instantiateStreaming=="function"&&!z(c)&&!s)try{var m=fetch(c,{credentials:"same-origin"}),v=await WebAssembly.instantiateStreaming(m,d);return v}catch(M){L(`wasm streaming compile failed: ${M}`),L("falling back to ArrayBuffer instantiation")}return We(c,d)}function xe(){return{env:Bu,wasi_snapshot_preview1:Bu}}async function Me(){function a(w,R){return sr=w.exports,et=sr.memory,P(et,"memory not found in wasm exports"),wt(),oa=sr.__indirect_function_table,P(oa,"table not found in wasm exports"),Om(sr),T("wasm-instantiate"),sr}N("wasm-instantiate");var c=t;function d(w){return P(t===c,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),c=null,a(w.instance)}var m=xe();if(t.instantiateWasm)return new Promise((w,R)=>{try{t.instantiateWasm(m,(U,q)=>{w(a(U,q))})}catch(U){L(`Module.instantiateWasm callback failed with error: ${U}`),R(U)}});fe??=oe();var v=await Ye(D,fe,m),M=d(v);return M}class ke{name="ExitStatus";constructor(c){this.message=`Program terminated with exit(${c})`,this.status=c}}var Be=a=>{for(;a.length>0;)a.shift()(t)},Ie=[],st=a=>Ie.push(a),X=[],Te=a=>X.push(a),Se=!0,Ce=a=>(P(typeof a=="number"),a>>>=0,"0x"+a.toString(16).padStart(8,"0")),$=a=>Du(a),V=()=>Nu(),De=a=>{De.shown||={},De.shown[a]||(De.shown[a]=1,s&&(a="warning: "+a),L(a))},Ze=typeof TextDecoder<"u"?new TextDecoder:void 0,Et=(a,c=0,d=NaN)=>{for(var m=c+d,v=c;a[v]&&!(v>=m);)++v;if(v-c>16&&a.buffer&&Ze)return Ze.decode(a.subarray(c,v));for(var M="";c<v;){var w=a[c++];if(!(w&128)){M+=String.fromCharCode(w);continue}var R=a[c++]&63;if((w&224)==192){M+=String.fromCharCode((w&31)<<6|R);continue}var U=a[c++]&63;if((w&240)==224?w=(w&15)<<12|R<<6|U:((w&248)!=240&&De("Invalid UTF-8 leading byte "+Ce(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|R<<12|U<<6|a[c++]&63),w<65536)M+=String.fromCharCode(w);else{var q=w-65536;M+=String.fromCharCode(55296|q>>10,56320|q&1023)}}return M},ut=(a,c)=>(P(typeof a=="number",`UTF8ToString expects a number (got ${typeof a})`),a?Et(dt,a,c):""),Vn=(a,c,d,m)=>W(`Assertion failed: ${ut(a)}, at: `+[c?ut(c):"unknown filename",d,m?ut(m):"unknown function"]),Zt=[],Qi=0,ls=a=>{var c=new In(a);return c.get_caught()||(c.set_caught(!0),Qi--),c.set_rethrown(!1),Zt.push(c),pa(a),ku(a)},_o=()=>{if(!Zt.length)return 0;var a=Zt[Zt.length-1];return pa(a.excPtr),a.excPtr},Ln=0,js=()=>{ge(0,0),P(Zt.length>0);var a=Zt.pop();Do(a.excPtr),Ln=0};class In{constructor(c){this.excPtr=c,this.ptr=c-24}set_type(c){Ee[this.ptr+4>>2]=c}get_type(){return Ee[this.ptr+4>>2]}set_destructor(c){Ee[this.ptr+8>>2]=c}get_destructor(){return Ee[this.ptr+8>>2]}set_caught(c){c=c?1:0,nt[this.ptr+12]=c}get_caught(){return nt[this.ptr+12]!=0}set_rethrown(c){c=c?1:0,nt[this.ptr+13]=c}get_rethrown(){return nt[this.ptr+13]!=0}init(c,d){this.set_adjusted_ptr(0),this.set_type(c),this.set_destructor(d)}set_adjusted_ptr(c){Ee[this.ptr+16>>2]=c}get_adjusted_ptr(){return Ee[this.ptr+16>>2]}}var Ui=a=>Lu(a),wr=a=>{var c=Ln?.excPtr;if(!c)return Ui(0),0;var d=new In(c);d.set_adjusted_ptr(c);var m=d.get_type();if(!m)return Ui(0),c;for(var v of a){if(v===0||v===m)break;var M=d.ptr+16;if(Ou(v,m,M))return Ui(v),c}return Ui(m),c},qs=()=>wr([]),Ar=a=>wr([a]),Ys=(a,c)=>wr([a,c]),er=()=>{var a=Zt.pop();a||W("no exception to throw");var c=a.excPtr;throw a.get_rethrown()||(Zt.push(a),a.set_rethrown(!0),a.set_caught(!1),Qi++),Ln=new Y(c),Ln},Ks=a=>{if(a){var c=new In(a);Zt.push(c),c.set_rethrown(!0),er()}},Js=(a,c,d)=>{var m=new In(a);throw m.init(c,d),Ln=new Y(a),Qi++,Ln},vo=()=>Qi,xo=a=>{throw Ln||(Ln=new Y(a)),Ln},At={isAbs:a=>a.charAt(0)==="/",splitPath:a=>{var c=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return c.exec(a).slice(1)},normalizeArray:(a,c)=>{for(var d=0,m=a.length-1;m>=0;m--){var v=a[m];v==="."?a.splice(m,1):v===".."?(a.splice(m,1),d++):d&&(a.splice(m,1),d--)}if(c)for(;d;d--)a.unshift("..");return a},normalize:a=>{var c=At.isAbs(a),d=a.slice(-1)==="/";return a=At.normalizeArray(a.split("/").filter(m=>!!m),!c).join("/"),!a&&!c&&(a="."),a&&d&&(a+="/"),(c?"/":"")+a},dirname:a=>{var c=At.splitPath(a),d=c[0],m=c[1];return!d&&!m?".":(m&&(m=m.slice(0,-1)),d+m)},basename:a=>a&&a.match(/([^\/]+|\/)\/*$/)[1],join:(...a)=>At.normalize(a.join("/")),join2:(a,c)=>At.normalize(a+"/"+c)},yo=()=>{if(s){var a=l("crypto");return c=>a.randomFillSync(c)}return c=>crypto.getRandomValues(c)},Zs=a=>{(Zs=yo())(a)},Oi={resolve:(...a)=>{for(var c="",d=!1,m=a.length-1;m>=-1&&!d;m--){var v=m>=0?a[m]:E.cwd();if(typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";c=v+"/"+c,d=At.isAbs(v)}return c=At.normalizeArray(c.split("/").filter(M=>!!M),!d).join("/"),(d?"/":"")+c||"."},relative:(a,c)=>{a=Oi.resolve(a).slice(1),c=Oi.resolve(c).slice(1);function d(q){for(var ee=0;ee<q.length&&q[ee]==="";ee++);for(var le=q.length-1;le>=0&&q[le]==="";le--);return ee>le?[]:q.slice(ee,le-ee+1)}for(var m=d(a.split("/")),v=d(c.split("/")),M=Math.min(m.length,v.length),w=M,R=0;R<M;R++)if(m[R]!==v[R]){w=R;break}for(var U=[],R=w;R<m.length;R++)U.push("..");return U=U.concat(v.slice(w)),U.join("/")}},I=[],j=a=>{for(var c=0,d=0;d<a.length;++d){var m=a.charCodeAt(d);m<=127?c++:m<=2047?c+=2:m>=55296&&m<=57343?(c+=4,++d):c+=3}return c},re=(a,c,d,m)=>{if(P(typeof a=="string",`stringToUTF8Array expects a string (got ${typeof a})`),!(m>0))return 0;for(var v=d,M=d+m-1,w=0;w<a.length;++w){var R=a.codePointAt(w);if(R<=127){if(d>=M)break;c[d++]=R}else if(R<=2047){if(d+1>=M)break;c[d++]=192|R>>6,c[d++]=128|R&63}else if(R<=65535){if(d+2>=M)break;c[d++]=224|R>>12,c[d++]=128|R>>6&63,c[d++]=128|R&63}else{if(d+3>=M)break;R>1114111&&De("Invalid Unicode code point "+Ce(R)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),c[d++]=240|R>>18,c[d++]=128|R>>12&63,c[d++]=128|R>>6&63,c[d++]=128|R&63,w++}}return c[d]=0,d-v},ne=(a,c,d)=>{var m=j(a)+1,v=new Array(m),M=re(a,v,0,v.length);return v.length=M,v},Q=()=>{if(!I.length){var a=null;if(s){var c=256,d=Buffer.alloc(c),m=0,v=process.stdin.fd;try{m=y.readSync(v,d,0,c)}catch(M){if(M.toString().includes("EOF"))m=0;else throw M}m>0&&(a=d.slice(0,m).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(a=window.prompt("Input: "),a!==null&&(a+=`
`));if(!a)return null;I=ne(a)}return I.shift()},we={ttys:[],init(){},shutdown(){},register(a,c){we.ttys[a]={input:[],output:[],ops:c},E.registerDevice(a,we.stream_ops)},stream_ops:{open(a){var c=we.ttys[a.node.rdev];if(!c)throw new E.ErrnoError(43);a.tty=c,a.seekable=!1},close(a){a.tty.ops.fsync(a.tty)},fsync(a){a.tty.ops.fsync(a.tty)},read(a,c,d,m,v){if(!a.tty||!a.tty.ops.get_char)throw new E.ErrnoError(60);for(var M=0,w=0;w<m;w++){var R;try{R=a.tty.ops.get_char(a.tty)}catch{throw new E.ErrnoError(29)}if(R===void 0&&M===0)throw new E.ErrnoError(6);if(R==null)break;M++,c[d+w]=R}return M&&(a.node.atime=Date.now()),M},write(a,c,d,m,v){if(!a.tty||!a.tty.ops.put_char)throw new E.ErrnoError(60);try{for(var M=0;M<m;M++)a.tty.ops.put_char(a.tty,c[d+M])}catch{throw new E.ErrnoError(29)}return m&&(a.node.mtime=a.node.ctime=Date.now()),M}},default_tty_ops:{get_char(a){return Q()},put_char(a,c){c===null||c===10?(C(Et(a.output)),a.output=[]):c!=0&&a.output.push(c)},fsync(a){a.output?.length>0&&(C(Et(a.output)),a.output=[])},ioctl_tcgets(a){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(a,c,d){return 0},ioctl_tiocgwinsz(a){return[24,80]}},default_tty1_ops:{put_char(a,c){c===null||c===10?(L(Et(a.output)),a.output=[]):c!=0&&a.output.push(c)},fsync(a){a.output?.length>0&&(L(Et(a.output)),a.output=[])}}},Fe=a=>{W("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},de={ops_table:null,mount(a){return de.createNode(null,"/",16895,0)},createNode(a,c,d,m){if(E.isBlkdev(d)||E.isFIFO(d))throw new E.ErrnoError(63);de.ops_table||={dir:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,lookup:de.node_ops.lookup,mknod:de.node_ops.mknod,rename:de.node_ops.rename,unlink:de.node_ops.unlink,rmdir:de.node_ops.rmdir,readdir:de.node_ops.readdir,symlink:de.node_ops.symlink},stream:{llseek:de.stream_ops.llseek}},file:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:{llseek:de.stream_ops.llseek,read:de.stream_ops.read,write:de.stream_ops.write,mmap:de.stream_ops.mmap,msync:de.stream_ops.msync}},link:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,readlink:de.node_ops.readlink},stream:{}},chrdev:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:E.chrdev_stream_ops}};var v=E.createNode(a,c,d,m);return E.isDir(v.mode)?(v.node_ops=de.ops_table.dir.node,v.stream_ops=de.ops_table.dir.stream,v.contents={}):E.isFile(v.mode)?(v.node_ops=de.ops_table.file.node,v.stream_ops=de.ops_table.file.stream,v.usedBytes=0,v.contents=null):E.isLink(v.mode)?(v.node_ops=de.ops_table.link.node,v.stream_ops=de.ops_table.link.stream):E.isChrdev(v.mode)&&(v.node_ops=de.ops_table.chrdev.node,v.stream_ops=de.ops_table.chrdev.stream),v.atime=v.mtime=v.ctime=Date.now(),a&&(a.contents[c]=v,a.atime=a.mtime=a.ctime=v.atime),v},getFileDataAsTypedArray(a){return a.contents?a.contents.subarray?a.contents.subarray(0,a.usedBytes):new Uint8Array(a.contents):new Uint8Array(0)},expandFileStorage(a,c){var d=a.contents?a.contents.length:0;if(!(d>=c)){var m=1024*1024;c=Math.max(c,d*(d<m?2:1.125)>>>0),d!=0&&(c=Math.max(c,256));var v=a.contents;a.contents=new Uint8Array(c),a.usedBytes>0&&a.contents.set(v.subarray(0,a.usedBytes),0)}},resizeFileStorage(a,c){if(a.usedBytes!=c)if(c==0)a.contents=null,a.usedBytes=0;else{var d=a.contents;a.contents=new Uint8Array(c),d&&a.contents.set(d.subarray(0,Math.min(c,a.usedBytes))),a.usedBytes=c}},node_ops:{getattr(a){var c={};return c.dev=E.isChrdev(a.mode)?a.id:1,c.ino=a.id,c.mode=a.mode,c.nlink=1,c.uid=0,c.gid=0,c.rdev=a.rdev,E.isDir(a.mode)?c.size=4096:E.isFile(a.mode)?c.size=a.usedBytes:E.isLink(a.mode)?c.size=a.link.length:c.size=0,c.atime=new Date(a.atime),c.mtime=new Date(a.mtime),c.ctime=new Date(a.ctime),c.blksize=4096,c.blocks=Math.ceil(c.size/c.blksize),c},setattr(a,c){for(const d of["mode","atime","mtime","ctime"])c[d]!=null&&(a[d]=c[d]);c.size!==void 0&&de.resizeFileStorage(a,c.size)},lookup(a,c){throw new E.ErrnoError(44)},mknod(a,c,d,m){return de.createNode(a,c,d,m)},rename(a,c,d){var m;try{m=E.lookupNode(c,d)}catch{}if(m){if(E.isDir(a.mode))for(var v in m.contents)throw new E.ErrnoError(55);E.hashRemoveNode(m)}delete a.parent.contents[a.name],c.contents[d]=a,a.name=d,c.ctime=c.mtime=a.parent.ctime=a.parent.mtime=Date.now()},unlink(a,c){delete a.contents[c],a.ctime=a.mtime=Date.now()},rmdir(a,c){var d=E.lookupNode(a,c);for(var m in d.contents)throw new E.ErrnoError(55);delete a.contents[c],a.ctime=a.mtime=Date.now()},readdir(a){return[".","..",...Object.keys(a.contents)]},symlink(a,c,d){var m=de.createNode(a,c,41471,0);return m.link=d,m},readlink(a){if(!E.isLink(a.mode))throw new E.ErrnoError(28);return a.link}},stream_ops:{read(a,c,d,m,v){var M=a.node.contents;if(v>=a.node.usedBytes)return 0;var w=Math.min(a.node.usedBytes-v,m);if(P(w>=0),w>8&&M.subarray)c.set(M.subarray(v,v+w),d);else for(var R=0;R<w;R++)c[d+R]=M[v+R];return w},write(a,c,d,m,v,M){if(P(!(c instanceof ArrayBuffer)),c.buffer===nt.buffer&&(M=!1),!m)return 0;var w=a.node;if(w.mtime=w.ctime=Date.now(),c.subarray&&(!w.contents||w.contents.subarray)){if(M)return P(v===0,"canOwn must imply no weird position inside the file"),w.contents=c.subarray(d,d+m),w.usedBytes=m,m;if(w.usedBytes===0&&v===0)return w.contents=c.slice(d,d+m),w.usedBytes=m,m;if(v+m<=w.usedBytes)return w.contents.set(c.subarray(d,d+m),v),m}if(de.expandFileStorage(w,v+m),w.contents.subarray&&c.subarray)w.contents.set(c.subarray(d,d+m),v);else for(var R=0;R<m;R++)w.contents[v+R]=c[d+R];return w.usedBytes=Math.max(w.usedBytes,v+m),m},llseek(a,c,d){var m=c;if(d===1?m+=a.position:d===2&&E.isFile(a.node.mode)&&(m+=a.node.usedBytes),m<0)throw new E.ErrnoError(28);return m},mmap(a,c,d,m,v){if(!E.isFile(a.node.mode))throw new E.ErrnoError(43);var M,w,R=a.node.contents;if(!(v&2)&&R&&R.buffer===nt.buffer)w=!1,M=R.byteOffset;else{if(w=!0,M=Fe(),!M)throw new E.ErrnoError(48);R&&((d>0||d+c<R.length)&&(R.subarray?R=R.subarray(d,d+c):R=Array.prototype.slice.call(R,d,d+c)),nt.set(R,M))}return{ptr:M,allocated:w}},msync(a,c,d,m,v){return de.stream_ops.write(a,c,0,m,d,!1),0}}},ze=async a=>{var c=await _(a);return P(c,`Loading data file "${a}" failed (no arrayBuffer).`),new Uint8Array(c)},Ve=(...a)=>E.createDataFile(...a),tt=a=>{for(var c=a;;){if(!Mt[a])return a;a=c+Math.random()}},it=[],He=(a,c,d,m)=>{typeof Browser<"u"&&Browser.init();var v=!1;return it.forEach(M=>{v||M.canHandle(c)&&(M.handle(a,c,d,m),v=!0)}),v},Tt=(a,c,d,m,v,M,w,R,U,q)=>{var ee=c?Oi.resolve(At.join2(a,c)):a,le=tt(`cp ${ee}`);function he(ue){function me(je){q?.(),R||Ve(a,c,je,m,v,U),M?.(),T(le)}He(ue,ee,me,()=>{w?.(),T(le)})||me(ue)}N(le),typeof d=="string"?ze(d).then(he,w):he(d)},Wt=a=>{var c={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},d=c[a];if(typeof d>"u")throw new Error(`Unknown file open mode: ${a}`);return d},Ut=(a,c)=>{var d=0;return a&&(d|=365),c&&(d|=146),d},Rt=a=>ut(Pu(a)),Qt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},E={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(a){super(vt?Rt(a):""),this.errno=a;for(var c in Qt)if(Qt[c]===a){this.code=c;break}}},FSStream:class{shared={};get object(){return this.node}set object(a){this.node=a}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(a){this.shared.flags=a}get position(){return this.shared.position}set position(a){this.shared.position=a}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(a,c,d,m){a||(a=this),this.parent=a,this.mount=a.mount,this.id=E.nextInode++,this.name=c,this.mode=d,this.rdev=m,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(a){a?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(a){a?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return E.isDir(this.mode)}get isDevice(){return E.isChrdev(this.mode)}},lookupPath(a,c={}){if(!a)throw new E.ErrnoError(44);c.follow_mount??=!0,At.isAbs(a)||(a=E.cwd()+"/"+a);e:for(var d=0;d<40;d++){for(var m=a.split("/").filter(q=>!!q),v=E.root,M="/",w=0;w<m.length;w++){var R=w===m.length-1;if(R&&c.parent)break;if(m[w]!=="."){if(m[w]===".."){if(M=At.dirname(M),E.isRoot(v)){a=M+"/"+m.slice(w+1).join("/");continue e}else v=v.parent;continue}M=At.join2(M,m[w]);try{v=E.lookupNode(v,m[w])}catch(q){if(q?.errno===44&&R&&c.noent_okay)return{path:M};throw q}if(E.isMountpoint(v)&&(!R||c.follow_mount)&&(v=v.mounted.root),E.isLink(v.mode)&&(!R||c.follow)){if(!v.node_ops.readlink)throw new E.ErrnoError(52);var U=v.node_ops.readlink(v);At.isAbs(U)||(U=At.dirname(M)+"/"+U),a=U+"/"+m.slice(w+1).join("/");continue e}}}return{path:M,node:v}}throw new E.ErrnoError(32)},getPath(a){for(var c;;){if(E.isRoot(a)){var d=a.mount.mountpoint;return c?d[d.length-1]!=="/"?`${d}/${c}`:d+c:d}c=c?`${a.name}/${c}`:a.name,a=a.parent}},hashName(a,c){for(var d=0,m=0;m<c.length;m++)d=(d<<5)-d+c.charCodeAt(m)|0;return(a+d>>>0)%E.nameTable.length},hashAddNode(a){var c=E.hashName(a.parent.id,a.name);a.name_next=E.nameTable[c],E.nameTable[c]=a},hashRemoveNode(a){var c=E.hashName(a.parent.id,a.name);if(E.nameTable[c]===a)E.nameTable[c]=a.name_next;else for(var d=E.nameTable[c];d;){if(d.name_next===a){d.name_next=a.name_next;break}d=d.name_next}},lookupNode(a,c){var d=E.mayLookup(a);if(d)throw new E.ErrnoError(d);for(var m=E.hashName(a.id,c),v=E.nameTable[m];v;v=v.name_next){var M=v.name;if(v.parent.id===a.id&&M===c)return v}return E.lookup(a,c)},createNode(a,c,d,m){P(typeof a=="object");var v=new E.FSNode(a,c,d,m);return E.hashAddNode(v),v},destroyNode(a){E.hashRemoveNode(a)},isRoot(a){return a===a.parent},isMountpoint(a){return!!a.mounted},isFile(a){return(a&61440)===32768},isDir(a){return(a&61440)===16384},isLink(a){return(a&61440)===40960},isChrdev(a){return(a&61440)===8192},isBlkdev(a){return(a&61440)===24576},isFIFO(a){return(a&61440)===4096},isSocket(a){return(a&49152)===49152},flagsToPermissionString(a){var c=["r","w","rw"][a&3];return a&512&&(c+="w"),c},nodePermissions(a,c){return E.ignorePermissions?0:c.includes("r")&&!(a.mode&292)||c.includes("w")&&!(a.mode&146)||c.includes("x")&&!(a.mode&73)?2:0},mayLookup(a){if(!E.isDir(a.mode))return 54;var c=E.nodePermissions(a,"x");return c||(a.node_ops.lookup?0:2)},mayCreate(a,c){if(!E.isDir(a.mode))return 54;try{var d=E.lookupNode(a,c);return 20}catch{}return E.nodePermissions(a,"wx")},mayDelete(a,c,d){var m;try{m=E.lookupNode(a,c)}catch(M){return M.errno}var v=E.nodePermissions(a,"wx");if(v)return v;if(d){if(!E.isDir(m.mode))return 54;if(E.isRoot(m)||E.getPath(m)===E.cwd())return 10}else if(E.isDir(m.mode))return 31;return 0},mayOpen(a,c){return a?E.isLink(a.mode)?32:E.isDir(a.mode)&&(E.flagsToPermissionString(c)!=="r"||c&576)?31:E.nodePermissions(a,E.flagsToPermissionString(c)):44},checkOpExists(a,c){if(!a)throw new E.ErrnoError(c);return a},MAX_OPEN_FDS:4096,nextfd(){for(var a=0;a<=E.MAX_OPEN_FDS;a++)if(!E.streams[a])return a;throw new E.ErrnoError(33)},getStreamChecked(a){var c=E.getStream(a);if(!c)throw new E.ErrnoError(8);return c},getStream:a=>E.streams[a],createStream(a,c=-1){return P(c>=-1),a=Object.assign(new E.FSStream,a),c==-1&&(c=E.nextfd()),a.fd=c,E.streams[c]=a,a},closeStream(a){E.streams[a]=null},dupStream(a,c=-1){var d=E.createStream(a,c);return d.stream_ops?.dup?.(d),d},doSetAttr(a,c,d){var m=a?.stream_ops.setattr,v=m?a:c;m??=c.node_ops.setattr,E.checkOpExists(m,63),m(v,d)},chrdev_stream_ops:{open(a){var c=E.getDevice(a.node.rdev);a.stream_ops=c.stream_ops,a.stream_ops.open?.(a)},llseek(){throw new E.ErrnoError(70)}},major:a=>a>>8,minor:a=>a&255,makedev:(a,c)=>a<<8|c,registerDevice(a,c){E.devices[a]={stream_ops:c}},getDevice:a=>E.devices[a],getMounts(a){for(var c=[],d=[a];d.length;){var m=d.pop();c.push(m),d.push(...m.mounts)}return c},syncfs(a,c){typeof a=="function"&&(c=a,a=!1),E.syncFSRequests++,E.syncFSRequests>1&&L(`warning: ${E.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var d=E.getMounts(E.root.mount),m=0;function v(w){return P(E.syncFSRequests>0),E.syncFSRequests--,c(w)}function M(w){if(w)return M.errored?void 0:(M.errored=!0,v(w));++m>=d.length&&v(null)}d.forEach(w=>{if(!w.type.syncfs)return M(null);w.type.syncfs(w,a,M)})},mount(a,c,d){if(typeof a=="string")throw a;var m=d==="/",v=!d,M;if(m&&E.root)throw new E.ErrnoError(10);if(!m&&!v){var w=E.lookupPath(d,{follow_mount:!1});if(d=w.path,M=w.node,E.isMountpoint(M))throw new E.ErrnoError(10);if(!E.isDir(M.mode))throw new E.ErrnoError(54)}var R={type:a,opts:c,mountpoint:d,mounts:[]},U=a.mount(R);return U.mount=R,R.root=U,m?E.root=U:M&&(M.mounted=R,M.mount&&M.mount.mounts.push(R)),U},unmount(a){var c=E.lookupPath(a,{follow_mount:!1});if(!E.isMountpoint(c.node))throw new E.ErrnoError(28);var d=c.node,m=d.mounted,v=E.getMounts(m);Object.keys(E.nameTable).forEach(w=>{for(var R=E.nameTable[w];R;){var U=R.name_next;v.includes(R.mount)&&E.destroyNode(R),R=U}}),d.mounted=null;var M=d.mount.mounts.indexOf(m);P(M!==-1),d.mount.mounts.splice(M,1)},lookup(a,c){return a.node_ops.lookup(a,c)},mknod(a,c,d){var m=E.lookupPath(a,{parent:!0}),v=m.node,M=At.basename(a);if(!M)throw new E.ErrnoError(28);if(M==="."||M==="..")throw new E.ErrnoError(20);var w=E.mayCreate(v,M);if(w)throw new E.ErrnoError(w);if(!v.node_ops.mknod)throw new E.ErrnoError(63);return v.node_ops.mknod(v,M,c,d)},statfs(a){return E.statfsNode(E.lookupPath(a,{follow:!0}).node)},statfsStream(a){return E.statfsNode(a.node)},statfsNode(a){var c={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:E.nextInode,ffree:E.nextInode-1,fsid:42,flags:2,namelen:255};return a.node_ops.statfs&&Object.assign(c,a.node_ops.statfs(a.mount.opts.root)),c},create(a,c=438){return c&=4095,c|=32768,E.mknod(a,c,0)},mkdir(a,c=511){return c&=1023,c|=16384,E.mknod(a,c,0)},mkdirTree(a,c){var d=a.split("/"),m="";for(var v of d)if(v){(m||At.isAbs(a))&&(m+="/"),m+=v;try{E.mkdir(m,c)}catch(M){if(M.errno!=20)throw M}}},mkdev(a,c,d){return typeof d>"u"&&(d=c,c=438),c|=8192,E.mknod(a,c,d)},symlink(a,c){if(!Oi.resolve(a))throw new E.ErrnoError(44);var d=E.lookupPath(c,{parent:!0}),m=d.node;if(!m)throw new E.ErrnoError(44);var v=At.basename(c),M=E.mayCreate(m,v);if(M)throw new E.ErrnoError(M);if(!m.node_ops.symlink)throw new E.ErrnoError(63);return m.node_ops.symlink(m,v,a)},rename(a,c){var d=At.dirname(a),m=At.dirname(c),v=At.basename(a),M=At.basename(c),w,R,U;if(w=E.lookupPath(a,{parent:!0}),R=w.node,w=E.lookupPath(c,{parent:!0}),U=w.node,!R||!U)throw new E.ErrnoError(44);if(R.mount!==U.mount)throw new E.ErrnoError(75);var q=E.lookupNode(R,v),ee=Oi.relative(a,m);if(ee.charAt(0)!==".")throw new E.ErrnoError(28);if(ee=Oi.relative(c,d),ee.charAt(0)!==".")throw new E.ErrnoError(55);var le;try{le=E.lookupNode(U,M)}catch{}if(q!==le){var he=E.isDir(q.mode),ue=E.mayDelete(R,v,he);if(ue)throw new E.ErrnoError(ue);if(ue=le?E.mayDelete(U,M,he):E.mayCreate(U,M),ue)throw new E.ErrnoError(ue);if(!R.node_ops.rename)throw new E.ErrnoError(63);if(E.isMountpoint(q)||le&&E.isMountpoint(le))throw new E.ErrnoError(10);if(U!==R&&(ue=E.nodePermissions(R,"w"),ue))throw new E.ErrnoError(ue);E.hashRemoveNode(q);try{R.node_ops.rename(q,U,M),q.parent=U}catch(me){throw me}finally{E.hashAddNode(q)}}},rmdir(a){var c=E.lookupPath(a,{parent:!0}),d=c.node,m=At.basename(a),v=E.lookupNode(d,m),M=E.mayDelete(d,m,!0);if(M)throw new E.ErrnoError(M);if(!d.node_ops.rmdir)throw new E.ErrnoError(63);if(E.isMountpoint(v))throw new E.ErrnoError(10);d.node_ops.rmdir(d,m),E.destroyNode(v)},readdir(a){var c=E.lookupPath(a,{follow:!0}),d=c.node,m=E.checkOpExists(d.node_ops.readdir,54);return m(d)},unlink(a){var c=E.lookupPath(a,{parent:!0}),d=c.node;if(!d)throw new E.ErrnoError(44);var m=At.basename(a),v=E.lookupNode(d,m),M=E.mayDelete(d,m,!1);if(M)throw new E.ErrnoError(M);if(!d.node_ops.unlink)throw new E.ErrnoError(63);if(E.isMountpoint(v))throw new E.ErrnoError(10);d.node_ops.unlink(d,m),E.destroyNode(v)},readlink(a){var c=E.lookupPath(a),d=c.node;if(!d)throw new E.ErrnoError(44);if(!d.node_ops.readlink)throw new E.ErrnoError(28);return d.node_ops.readlink(d)},stat(a,c){var d=E.lookupPath(a,{follow:!c}),m=d.node,v=E.checkOpExists(m.node_ops.getattr,63);return v(m)},fstat(a){var c=E.getStreamChecked(a),d=c.node,m=c.stream_ops.getattr,v=m?c:d;return m??=d.node_ops.getattr,E.checkOpExists(m,63),m(v)},lstat(a){return E.stat(a,!0)},doChmod(a,c,d,m){E.doSetAttr(a,c,{mode:d&4095|c.mode&-4096,ctime:Date.now(),dontFollow:m})},chmod(a,c,d){var m;if(typeof a=="string"){var v=E.lookupPath(a,{follow:!d});m=v.node}else m=a;E.doChmod(null,m,c,d)},lchmod(a,c){E.chmod(a,c,!0)},fchmod(a,c){var d=E.getStreamChecked(a);E.doChmod(d,d.node,c,!1)},doChown(a,c,d){E.doSetAttr(a,c,{timestamp:Date.now(),dontFollow:d})},chown(a,c,d,m){var v;if(typeof a=="string"){var M=E.lookupPath(a,{follow:!m});v=M.node}else v=a;E.doChown(null,v,m)},lchown(a,c,d){E.chown(a,c,d,!0)},fchown(a,c,d){var m=E.getStreamChecked(a);E.doChown(m,m.node,!1)},doTruncate(a,c,d){if(E.isDir(c.mode))throw new E.ErrnoError(31);if(!E.isFile(c.mode))throw new E.ErrnoError(28);var m=E.nodePermissions(c,"w");if(m)throw new E.ErrnoError(m);E.doSetAttr(a,c,{size:d,timestamp:Date.now()})},truncate(a,c){if(c<0)throw new E.ErrnoError(28);var d;if(typeof a=="string"){var m=E.lookupPath(a,{follow:!0});d=m.node}else d=a;E.doTruncate(null,d,c)},ftruncate(a,c){var d=E.getStreamChecked(a);if(c<0||(d.flags&2097155)===0)throw new E.ErrnoError(28);E.doTruncate(d,d.node,c)},utime(a,c,d){var m=E.lookupPath(a,{follow:!0}),v=m.node,M=E.checkOpExists(v.node_ops.setattr,63);M(v,{atime:c,mtime:d})},open(a,c,d=438){if(a==="")throw new E.ErrnoError(44);c=typeof c=="string"?Wt(c):c,c&64?d=d&4095|32768:d=0;var m,v;if(typeof a=="object")m=a;else{v=a.endsWith("/");var M=E.lookupPath(a,{follow:!(c&131072),noent_okay:!0});m=M.node,a=M.path}var w=!1;if(c&64)if(m){if(c&128)throw new E.ErrnoError(20)}else{if(v)throw new E.ErrnoError(31);m=E.mknod(a,d|511,0),w=!0}if(!m)throw new E.ErrnoError(44);if(E.isChrdev(m.mode)&&(c&=-513),c&65536&&!E.isDir(m.mode))throw new E.ErrnoError(54);if(!w){var R=E.mayOpen(m,c);if(R)throw new E.ErrnoError(R)}c&512&&!w&&E.truncate(m,0),c&=-131713;var U=E.createStream({node:m,path:E.getPath(m),flags:c,seekable:!0,position:0,stream_ops:m.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),w&&E.chmod(m,d&511),t.logReadFiles&&!(c&1)&&(a in E.readFiles||(E.readFiles[a]=1)),U},close(a){if(E.isClosed(a))throw new E.ErrnoError(8);a.getdents&&(a.getdents=null);try{a.stream_ops.close&&a.stream_ops.close(a)}catch(c){throw c}finally{E.closeStream(a.fd)}a.fd=null},isClosed(a){return a.fd===null},llseek(a,c,d){if(E.isClosed(a))throw new E.ErrnoError(8);if(!a.seekable||!a.stream_ops.llseek)throw new E.ErrnoError(70);if(d!=0&&d!=1&&d!=2)throw new E.ErrnoError(28);return a.position=a.stream_ops.llseek(a,c,d),a.ungotten=[],a.position},read(a,c,d,m,v){if(P(d>=0),m<0||v<0)throw new E.ErrnoError(28);if(E.isClosed(a))throw new E.ErrnoError(8);if((a.flags&2097155)===1)throw new E.ErrnoError(8);if(E.isDir(a.node.mode))throw new E.ErrnoError(31);if(!a.stream_ops.read)throw new E.ErrnoError(28);var M=typeof v<"u";if(!M)v=a.position;else if(!a.seekable)throw new E.ErrnoError(70);var w=a.stream_ops.read(a,c,d,m,v);return M||(a.position+=w),w},write(a,c,d,m,v,M){if(P(d>=0),m<0||v<0)throw new E.ErrnoError(28);if(E.isClosed(a))throw new E.ErrnoError(8);if((a.flags&2097155)===0)throw new E.ErrnoError(8);if(E.isDir(a.node.mode))throw new E.ErrnoError(31);if(!a.stream_ops.write)throw new E.ErrnoError(28);a.seekable&&a.flags&1024&&E.llseek(a,0,2);var w=typeof v<"u";if(!w)v=a.position;else if(!a.seekable)throw new E.ErrnoError(70);var R=a.stream_ops.write(a,c,d,m,v,M);return w||(a.position+=R),R},mmap(a,c,d,m,v){if((m&2)!==0&&(v&2)===0&&(a.flags&2097155)!==2)throw new E.ErrnoError(2);if((a.flags&2097155)===1)throw new E.ErrnoError(2);if(!a.stream_ops.mmap)throw new E.ErrnoError(43);if(!c)throw new E.ErrnoError(28);return a.stream_ops.mmap(a,c,d,m,v)},msync(a,c,d,m,v){return P(d>=0),a.stream_ops.msync?a.stream_ops.msync(a,c,d,m,v):0},ioctl(a,c,d){if(!a.stream_ops.ioctl)throw new E.ErrnoError(59);return a.stream_ops.ioctl(a,c,d)},readFile(a,c={}){if(c.flags=c.flags||0,c.encoding=c.encoding||"binary",c.encoding!=="utf8"&&c.encoding!=="binary")throw new Error(`Invalid encoding type "${c.encoding}"`);var d=E.open(a,c.flags),m=E.stat(a),v=m.size,M=new Uint8Array(v);return E.read(d,M,0,v,0),c.encoding==="utf8"&&(M=Et(M)),E.close(d),M},writeFile(a,c,d={}){d.flags=d.flags||577;var m=E.open(a,d.flags,d.mode);if(typeof c=="string"&&(c=new Uint8Array(ne(c))),ArrayBuffer.isView(c))E.write(m,c,0,c.byteLength,void 0,d.canOwn);else throw new Error("Unsupported data type");E.close(m)},cwd:()=>E.currentPath,chdir(a){var c=E.lookupPath(a,{follow:!0});if(c.node===null)throw new E.ErrnoError(44);if(!E.isDir(c.node.mode))throw new E.ErrnoError(54);var d=E.nodePermissions(c.node,"x");if(d)throw new E.ErrnoError(d);E.currentPath=c.path},createDefaultDirectories(){E.mkdir("/tmp"),E.mkdir("/home"),E.mkdir("/home/web_user")},createDefaultDevices(){E.mkdir("/dev"),E.registerDevice(E.makedev(1,3),{read:()=>0,write:(m,v,M,w,R)=>w,llseek:()=>0}),E.mkdev("/dev/null",E.makedev(1,3)),we.register(E.makedev(5,0),we.default_tty_ops),we.register(E.makedev(6,0),we.default_tty1_ops),E.mkdev("/dev/tty",E.makedev(5,0)),E.mkdev("/dev/tty1",E.makedev(6,0));var a=new Uint8Array(1024),c=0,d=()=>(c===0&&(Zs(a),c=a.byteLength),a[--c]);E.createDevice("/dev","random",d),E.createDevice("/dev","urandom",d),E.mkdir("/dev/shm"),E.mkdir("/dev/shm/tmp")},createSpecialDirectories(){E.mkdir("/proc");var a=E.mkdir("/proc/self");E.mkdir("/proc/self/fd"),E.mount({mount(){var c=E.createNode(a,"fd",16895,73);return c.stream_ops={llseek:de.stream_ops.llseek},c.node_ops={lookup(d,m){var v=+m,M=E.getStreamChecked(v),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>M.path},id:v+1};return w.parent=w,w},readdir(){return Array.from(E.streams.entries()).filter(([d,m])=>m).map(([d,m])=>d.toString())}},c}},{},"/proc/self/fd")},createStandardStreams(a,c,d){a?E.createDevice("/dev","stdin",a):E.symlink("/dev/tty","/dev/stdin"),c?E.createDevice("/dev","stdout",null,c):E.symlink("/dev/tty","/dev/stdout"),d?E.createDevice("/dev","stderr",null,d):E.symlink("/dev/tty1","/dev/stderr");var m=E.open("/dev/stdin",0),v=E.open("/dev/stdout",1),M=E.open("/dev/stderr",1);P(m.fd===0,`invalid handle for stdin (${m.fd})`),P(v.fd===1,`invalid handle for stdout (${v.fd})`),P(M.fd===2,`invalid handle for stderr (${M.fd})`)},staticInit(){E.nameTable=new Array(4096),E.mount(de,{},"/"),E.createDefaultDirectories(),E.createDefaultDevices(),E.createSpecialDirectories(),E.filesystems={MEMFS:de}},init(a,c,d){P(!E.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),E.initialized=!0,a??=t.stdin,c??=t.stdout,d??=t.stderr,E.createStandardStreams(a,c,d)},quit(){E.initialized=!1,Lo(0);for(var a of E.streams)a&&E.close(a)},findObject(a,c){var d=E.analyzePath(a,c);return d.exists?d.object:null},analyzePath(a,c){try{var d=E.lookupPath(a,{follow:!c});a=d.path}catch{}var m={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var d=E.lookupPath(a,{parent:!0});m.parentExists=!0,m.parentPath=d.path,m.parentObject=d.node,m.name=At.basename(a),d=E.lookupPath(a,{follow:!c}),m.exists=!0,m.path=d.path,m.object=d.node,m.name=d.node.name,m.isRoot=d.path==="/"}catch(v){m.error=v.errno}return m},createPath(a,c,d,m){a=typeof a=="string"?a:E.getPath(a);for(var v=c.split("/").reverse();v.length;){var M=v.pop();if(M){var w=At.join2(a,M);try{E.mkdir(w)}catch(R){if(R.errno!=20)throw R}a=w}}return w},createFile(a,c,d,m,v){var M=At.join2(typeof a=="string"?a:E.getPath(a),c),w=Ut(m,v);return E.create(M,w)},createDataFile(a,c,d,m,v,M){var w=c;a&&(a=typeof a=="string"?a:E.getPath(a),w=c?At.join2(a,c):a);var R=Ut(m,v),U=E.create(w,R);if(d){if(typeof d=="string"){for(var q=new Array(d.length),ee=0,le=d.length;ee<le;++ee)q[ee]=d.charCodeAt(ee);d=q}E.chmod(U,R|146);var he=E.open(U,577);E.write(he,d,0,d.length,0,M),E.close(he),E.chmod(U,R)}},createDevice(a,c,d,m){var v=At.join2(typeof a=="string"?a:E.getPath(a),c),M=Ut(!!d,!!m);E.createDevice.major??=64;var w=E.makedev(E.createDevice.major++,0);return E.registerDevice(w,{open(R){R.seekable=!1},close(R){m?.buffer?.length&&m(10)},read(R,U,q,ee,le){for(var he=0,ue=0;ue<ee;ue++){var me;try{me=d()}catch{throw new E.ErrnoError(29)}if(me===void 0&&he===0)throw new E.ErrnoError(6);if(me==null)break;he++,U[q+ue]=me}return he&&(R.node.atime=Date.now()),he},write(R,U,q,ee,le){for(var he=0;he<ee;he++)try{m(U[q+he])}catch{throw new E.ErrnoError(29)}return ee&&(R.node.mtime=R.node.ctime=Date.now()),he}}),E.mkdev(v,M,w)},forceLoadFile(a){if(a.isDevice||a.isFolder||a.link||a.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{a.contents=S(a.url),a.usedBytes=a.contents.length}catch{throw new E.ErrnoError(29)}},createLazyFile(a,c,d,m,v){class M{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var me=ue%this.chunkSize,je=ue/this.chunkSize|0;return this.getter(je)[me]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",d,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+d+". Status: "+ue.status);var me=Number(ue.getResponseHeader("Content-length")),je,_t=(je=ue.getResponseHeader("Accept-Ranges"))&&je==="bytes",ct=(je=ue.getResponseHeader("Content-Encoding"))&&je==="gzip",Ot=1024*1024;_t||(Ot=me);var bt=(nn,vn)=>{if(nn>vn)throw new Error("invalid range ("+nn+", "+vn+") or no bytes requested!");if(vn>me-1)throw new Error("only "+me+" bytes available! programmer error!");var Nt=new XMLHttpRequest;if(Nt.open("GET",d,!1),me!==Ot&&Nt.setRequestHeader("Range","bytes="+nn+"-"+vn),Nt.responseType="arraybuffer",Nt.overrideMimeType&&Nt.overrideMimeType("text/plain; charset=x-user-defined"),Nt.send(null),!(Nt.status>=200&&Nt.status<300||Nt.status===304))throw new Error("Couldn't load "+d+". Status: "+Nt.status);return Nt.response!==void 0?new Uint8Array(Nt.response||[]):ne(Nt.responseText||"")},mn=this;mn.setDataGetter(nn=>{var vn=nn*Ot,Nt=(nn+1)*Ot-1;if(Nt=Math.min(Nt,me-1),typeof mn.chunks[nn]>"u"&&(mn.chunks[nn]=bt(vn,Nt)),typeof mn.chunks[nn]>"u")throw new Error("doXHR failed!");return mn.chunks[nn]}),(ct||!me)&&(Ot=me=1,me=this.getter(0).length,Ot=me,C("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Ot,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!i)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new M,R={isDevice:!1,contents:w}}else var R={isDevice:!1,url:d};var U=E.createFile(a,c,R,m,v);R.contents?U.contents=R.contents:R.url&&(U.contents=null,U.url=R.url),Object.defineProperties(U,{usedBytes:{get:function(){return this.contents.length}}});var q={},ee=Object.keys(U.stream_ops);ee.forEach(he=>{var ue=U.stream_ops[he];q[he]=(...me)=>(E.forceLoadFile(U),ue(...me))});function le(he,ue,me,je,_t){var ct=he.node.contents;if(_t>=ct.length)return 0;var Ot=Math.min(ct.length-_t,je);if(P(Ot>=0),ct.slice)for(var bt=0;bt<Ot;bt++)ue[me+bt]=ct[_t+bt];else for(var bt=0;bt<Ot;bt++)ue[me+bt]=ct.get(_t+bt);return Ot}return q.read=(he,ue,me,je,_t)=>(E.forceLoadFile(U),le(he,ue,me,je,_t)),q.mmap=(he,ue,me,je,_t)=>{E.forceLoadFile(U);var ct=Fe();if(!ct)throw new E.ErrnoError(48);return le(he,nt,ct,ue,me),{ptr:ct,allocated:!0}},U.stream_ops=q,U},absolutePath(){W("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){W("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){W("FS.createLink has been removed; use FS.symlink instead")},joinPath(){W("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){W("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){W("FS.standardizePath has been removed; use PATH.normalize instead")}},ft={DEFAULT_POLLMASK:5,calculateAt(a,c,d){if(At.isAbs(c))return c;var m;if(a===-100)m=E.cwd();else{var v=ft.getStreamFromFD(a);m=v.path}if(c.length==0){if(!d)throw new E.ErrnoError(44);return m}return m+"/"+c},writeStat(a,c){se[a>>2]=c.dev,se[a+4>>2]=c.mode,Ee[a+8>>2]=c.nlink,se[a+12>>2]=c.uid,se[a+16>>2]=c.gid,se[a+20>>2]=c.rdev,Ct[a+24>>3]=BigInt(c.size),se[a+32>>2]=4096,se[a+36>>2]=c.blocks;var d=c.atime.getTime(),m=c.mtime.getTime(),v=c.ctime.getTime();return Ct[a+40>>3]=BigInt(Math.floor(d/1e3)),Ee[a+48>>2]=d%1e3*1e3*1e3,Ct[a+56>>3]=BigInt(Math.floor(m/1e3)),Ee[a+64>>2]=m%1e3*1e3*1e3,Ct[a+72>>3]=BigInt(Math.floor(v/1e3)),Ee[a+80>>2]=v%1e3*1e3*1e3,Ct[a+88>>3]=BigInt(c.ino),0},writeStatFs(a,c){se[a+4>>2]=c.bsize,se[a+40>>2]=c.bsize,se[a+8>>2]=c.blocks,se[a+12>>2]=c.bfree,se[a+16>>2]=c.bavail,se[a+20>>2]=c.files,se[a+24>>2]=c.ffree,se[a+28>>2]=c.fsid,se[a+44>>2]=c.flags,se[a+36>>2]=c.namelen},doMsync(a,c,d,m,v){if(!E.isFile(c.node.mode))throw new E.ErrnoError(43);if(m&2)return 0;var M=dt.slice(a,a+d);E.msync(c,M,v,d,m)},getStreamFromFD(a){var c=E.getStreamChecked(a);return c},varargs:void 0,getStr(a){var c=ut(a);return c}};function St(a,c,d){try{var m=ft.getStreamFromFD(a);if(P(!d),m.fd===c)return-28;if(c<0||c>=E.MAX_OPEN_FDS)return-8;var v=E.getStream(c);return v&&E.close(v),E.dupStream(m,c).fd}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}var pn=()=>{P(ft.varargs!=null);var a=se[+ft.varargs>>2];return ft.varargs+=4,a},dn=pn;function vi(a,c,d){ft.varargs=d;try{var m=ft.getStreamFromFD(a);switch(c){case 0:{var v=pn();if(v<0)return-28;for(;E.streams[v];)v++;var M;return M=E.dupStream(m,v),M.fd}case 1:case 2:return 0;case 3:return m.flags;case 4:{var v=pn();return m.flags|=v,0}case 12:{var v=dn(),w=0;return ce[v+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(R){if(typeof E>"u"||R.name!=="ErrnoError")throw R;return-R.errno}}function ki(a,c){try{return ft.writeStat(c,E.fstat(a))}catch(d){if(typeof E>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function Pt(a,c,d){ft.varargs=d;try{var m=ft.getStreamFromFD(a);switch(c){case 21509:return m.tty?0:-59;case 21505:{if(!m.tty)return-59;if(m.tty.ops.ioctl_tcgets){var v=m.tty.ops.ioctl_tcgets(m),M=dn();se[M>>2]=v.c_iflag||0,se[M+4>>2]=v.c_oflag||0,se[M+8>>2]=v.c_cflag||0,se[M+12>>2]=v.c_lflag||0;for(var w=0;w<32;w++)nt[M+w+17]=v.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return m.tty?0:-59;case 21506:case 21507:case 21508:{if(!m.tty)return-59;if(m.tty.ops.ioctl_tcsets){for(var M=dn(),R=se[M>>2],U=se[M+4>>2],q=se[M+8>>2],ee=se[M+12>>2],le=[],w=0;w<32;w++)le.push(nt[M+w+17]);return m.tty.ops.ioctl_tcsets(m.tty,c,{c_iflag:R,c_oflag:U,c_cflag:q,c_lflag:ee,c_cc:le})}return 0}case 21519:{if(!m.tty)return-59;var M=dn();return se[M>>2]=0,0}case 21520:return m.tty?-28:-59;case 21531:{var M=dn();return E.ioctl(m,c,M)}case 21523:{if(!m.tty)return-59;if(m.tty.ops.ioctl_tiocgwinsz){var he=m.tty.ops.ioctl_tiocgwinsz(m.tty),M=dn();ce[M>>1]=he[0],ce[M+2>>1]=he[1]}return 0}case 21524:return m.tty?0:-59;case 21515:return m.tty?0:-59;default:return-28}}catch(ue){if(typeof E>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function en(a,c){try{return a=ft.getStr(a),ft.writeStat(c,E.lstat(a))}catch(d){if(typeof E>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function Jn(a,c,d,m){try{c=ft.getStr(c);var v=m&256,M=m&4096;return m=m&-6401,P(!m,`unknown flags in __syscall_newfstatat: ${m}`),c=ft.calculateAt(a,c,M),ft.writeStat(d,v?E.lstat(c):E.stat(c))}catch(w){if(typeof E>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Kt(a,c,d,m){ft.varargs=m;try{c=ft.getStr(c),c=ft.calculateAt(a,c);var v=m?pn():0;return E.open(c,d,v).fd}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return-M.errno}}function Zn(a,c){try{return a=ft.getStr(a),ft.writeStat(c,E.stat(a))}catch(d){if(typeof E>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}var Bi=()=>W("native code called abort()"),Xt=a=>{for(var c="";;){var d=dt[a++];if(!d)return c;c+=String.fromCharCode(d)}},Rr={},tr={},Qs={},us=class extends Error{constructor(c){super(c),this.name="BindingError"}},xt=a=>{throw new us(a)};function Nf(a,c,d={}){var m=c.name;if(a||xt(`type "${m}" must have a positive integer typeid pointer`),tr.hasOwnProperty(a)){if(d.ignoreDuplicateRegistrations)return;xt(`Cannot register type '${m}' twice`)}if(tr[a]=c,delete Qs[a],Rr.hasOwnProperty(a)){var v=Rr[a];delete Rr[a],v.forEach(M=>M())}}function Dn(a,c,d={}){if(c.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Nf(a,c,d)}var tu=(a,c,d)=>{switch(c){case 1:return d?m=>nt[m]:m=>dt[m];case 2:return d?m=>ce[m>>1]:m=>ye[m>>1];case 4:return d?m=>se[m>>2]:m=>Ee[m>>2];case 8:return d?m=>Ct[m>>3]:m=>mt[m>>3];default:throw new TypeError(`invalid integer width (${c}): ${a}`)}},nr=a=>{if(a===null)return"null";var c=typeof a;return c==="object"||c==="array"||c==="function"?a.toString():""+a},nu=(a,c,d,m)=>{if(c<d||c>m)throw new TypeError(`Passing a number "${nr(c)}" from JS side to C/C++ side to an argument of type "${a}", which is outside the valid range [${d}, ${m}]!`)},Uf=(a,c,d,m,v)=>{c=Xt(c);const M=m===0n;let w=R=>R;if(M){const R=d*8;w=U=>BigInt.asUintN(R,U),v=w(v)}Dn(a,{name:c,fromWireType:w,toWireType:(R,U)=>{if(typeof U=="number")U=BigInt(U);else if(typeof U!="bigint")throw new TypeError(`Cannot convert "${nr(U)}" to ${this.name}`);return nu(c,U,m,v),U},argPackAdvance:Qn,readValueFromPointer:tu(c,d,!M),destructorFunction:null})},Qn=8,Of=(a,c,d,m)=>{c=Xt(c),Dn(a,{name:c,fromWireType:function(v){return!!v},toWireType:function(v,M){return M?d:m},argPackAdvance:Qn,readValueFromPointer:function(v){return this.fromWireType(dt[v])},destructorFunction:null})},kf=a=>({count:a.count,deleteScheduled:a.deleteScheduled,preservePointerOnDelete:a.preservePointerOnDelete,ptr:a.ptr,ptrType:a.ptrType,smartPtr:a.smartPtr,smartPtrType:a.smartPtrType}),So=a=>{function c(d){return d.$$.ptrType.registeredClass.name}xt(c(a)+" instance already deleted")},Mo=!1,iu=a=>{},Bf=a=>{a.smartPtr?a.smartPtrType.rawDestructor(a.smartPtr):a.ptrType.registeredClass.rawDestructor(a.ptr)},ru=a=>{a.count.value-=1;var c=a.count.value===0;c&&Bf(a)},su=(a,c,d)=>{if(c===d)return a;if(d.baseClass===void 0)return null;var m=su(a,c,d.baseClass);return m===null?null:d.downcast(m)},au={},zf={},Vf=(a,c)=>{for(c===void 0&&xt("ptr should not be undefined");a.baseClass;)c=a.upcast(c),a=a.baseClass;return c},Hf=(a,c)=>(c=Vf(a,c),zf[c]),Gf=class extends Error{constructor(c){super(c),this.name="InternalError"}},ea=a=>{throw new Gf(a)},ta=(a,c)=>{(!c.ptrType||!c.ptr)&&ea("makeClassHandle requires ptr and ptrType");var d=!!c.smartPtrType,m=!!c.smartPtr;return d!==m&&ea("Both smartPtrType and smartPtr must be specified"),c.count={value:1},hs(Object.create(a,{$$:{value:c,writable:!0}}))};function ou(a){var c=this.getPointee(a);if(!c)return this.destructor(a),null;var d=Hf(this.registeredClass,c);if(d!==void 0){if(d.$$.count.value===0)return d.$$.ptr=c,d.$$.smartPtr=a,d.clone();var m=d.clone();return this.destructor(a),m}function v(){return this.isSmartPointer?ta(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:c,smartPtrType:this,smartPtr:a}):ta(this.registeredClass.instancePrototype,{ptrType:this,ptr:a})}var M=this.registeredClass.getActualType(c),w=au[M];if(!w)return v.call(this);var R;this.isConst?R=w.constPointerType:R=w.pointerType;var U=su(c,this.registeredClass,R.registeredClass);return U===null?v.call(this):this.isSmartPointer?ta(R.registeredClass.instancePrototype,{ptrType:R,ptr:U,smartPtrType:this,smartPtr:a}):ta(R.registeredClass.instancePrototype,{ptrType:R,ptr:U})}var hs=a=>typeof FinalizationRegistry>"u"?(hs=c=>c,a):(Mo=new FinalizationRegistry(c=>{console.warn(c.leakWarning),ru(c.$$)}),hs=c=>{var d=c.$$,m=!!d.smartPtr;if(m){var v={$$:d},M=d.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${M.name} <${Ce(d.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,ou),v.leakWarning=w.stack.replace(/^Error: /,""),Mo.register(c,v,c)}return c},iu=c=>Mo.unregister(c),hs(a)),Wf=()=>{let a=na.prototype;Object.assign(a,{isAliasOf(d){if(!(this instanceof na)||!(d instanceof na))return!1;var m=this.$$.ptrType.registeredClass,v=this.$$.ptr;d.$$=d.$$;for(var M=d.$$.ptrType.registeredClass,w=d.$$.ptr;m.baseClass;)v=m.upcast(v),m=m.baseClass;for(;M.baseClass;)w=M.upcast(w),M=M.baseClass;return m===M&&v===w},clone(){if(this.$$.ptr||So(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var d=hs(Object.create(Object.getPrototypeOf(this),{$$:{value:kf(this.$$)}}));return d.$$.count.value+=1,d.$$.deleteScheduled=!1,d},delete(){this.$$.ptr||So(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&xt("Object already scheduled for deletion"),iu(this),ru(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||So(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&xt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const c=Symbol.dispose;c&&(a[c]=a.delete)};function na(){}var ia=(a,c)=>Object.defineProperty(c,"name",{value:a}),Eo=(a,c,d)=>{if(a[c].overloadTable===void 0){var m=a[c];a[c]=function(...v){return a[c].overloadTable.hasOwnProperty(v.length)||xt(`Function '${d}' called with an invalid number of arguments (${v.length}) - expects one of (${a[c].overloadTable})!`),a[c].overloadTable[v.length].apply(this,v)},a[c].overloadTable=[],a[c].overloadTable[m.argCount]=m}},bo=(a,c,d)=>{t.hasOwnProperty(a)?((d===void 0||t[a].overloadTable!==void 0&&t[a].overloadTable[d]!==void 0)&&xt(`Cannot register public name '${a}' twice`),Eo(t,a,a),t[a].overloadTable.hasOwnProperty(d)&&xt(`Cannot register multiple overloads of a function with the same number of arguments (${d})!`),t[a].overloadTable[d]=c):(t[a]=c,t[a].argCount=d)},Xf=48,$f=57,jf=a=>{P(typeof a=="string"),a=a.replace(/[^a-zA-Z0-9_]/g,"$");var c=a.charCodeAt(0);return c>=Xf&&c<=$f?`_${a}`:a};function qf(a,c,d,m,v,M,w,R){this.name=a,this.constructor=c,this.instancePrototype=d,this.rawDestructor=m,this.baseClass=v,this.getActualType=M,this.upcast=w,this.downcast=R,this.pureVirtualFunctions=[]}var ra=(a,c,d)=>{for(;c!==d;)c.upcast||xt(`Expected null or instance of ${d.name}, got an instance of ${c.name}`),a=c.upcast(a),c=c.baseClass;return a};function Yf(a,c){if(c===null)return this.isReference&&xt(`null is not a valid ${this.name}`),0;c.$$||xt(`Cannot pass "${nr(c)}" as a ${this.name}`),c.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`);var d=c.$$.ptrType.registeredClass,m=ra(c.$$.ptr,d,this.registeredClass);return m}function Kf(a,c){var d;if(c===null)return this.isReference&&xt(`null is not a valid ${this.name}`),this.isSmartPointer?(d=this.rawConstructor(),a!==null&&a.push(this.rawDestructor,d),d):0;(!c||!c.$$)&&xt(`Cannot pass "${nr(c)}" as a ${this.name}`),c.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&c.$$.ptrType.isConst&&xt(`Cannot convert argument of type ${c.$$.smartPtrType?c.$$.smartPtrType.name:c.$$.ptrType.name} to parameter type ${this.name}`);var m=c.$$.ptrType.registeredClass;if(d=ra(c.$$.ptr,m,this.registeredClass),this.isSmartPointer)switch(c.$$.smartPtr===void 0&&xt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:c.$$.smartPtrType===this?d=c.$$.smartPtr:xt(`Cannot convert argument of type ${c.$$.smartPtrType?c.$$.smartPtrType.name:c.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:d=c.$$.smartPtr;break;case 2:if(c.$$.smartPtrType===this)d=c.$$.smartPtr;else{var v=c.clone();d=this.rawShare(d,tn.toHandle(()=>v.delete())),a!==null&&a.push(this.rawDestructor,d)}break;default:xt("Unsupporting sharing policy")}return d}function Jf(a,c){if(c===null)return this.isReference&&xt(`null is not a valid ${this.name}`),0;c.$$||xt(`Cannot pass "${nr(c)}" as a ${this.name}`),c.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`),c.$$.ptrType.isConst&&xt(`Cannot convert argument of type ${c.$$.ptrType.name} to parameter type ${this.name}`);var d=c.$$.ptrType.registeredClass,m=ra(c.$$.ptr,d,this.registeredClass);return m}function sa(a){return this.fromWireType(Ee[a>>2])}var Zf=()=>{Object.assign(aa.prototype,{getPointee(a){return this.rawGetPointee&&(a=this.rawGetPointee(a)),a},destructor(a){this.rawDestructor?.(a)},argPackAdvance:Qn,readValueFromPointer:sa,fromWireType:ou})};function aa(a,c,d,m,v,M,w,R,U,q,ee){this.name=a,this.registeredClass=c,this.isReference=d,this.isConst=m,this.isSmartPointer=v,this.pointeeType=M,this.sharingPolicy=w,this.rawGetPointee=R,this.rawConstructor=U,this.rawShare=q,this.rawDestructor=ee,!v&&c.baseClass===void 0?m?(this.toWireType=Yf,this.destructorFunction=null):(this.toWireType=Jf,this.destructorFunction=null):this.toWireType=Kf}var cu=(a,c,d)=>{t.hasOwnProperty(a)||ea("Replacing nonexistent public symbol"),t[a].overloadTable!==void 0&&d!==void 0?t[a].overloadTable[d]=c:(t[a]=c,t[a].argCount=d)},lu=[],oa,ve=a=>{var c=lu[a];return c||(lu[a]=c=oa.get(a)),P(oa.get(a)==c,"JavaScript-side Wasm function table mirror is out of date!"),c},ei=(a,c,d=!1)=>{P(!d,"Async bindings are only supported with JSPI."),a=Xt(a);function m(){var M=ve(c);return M}var v=m();return typeof v!="function"&&xt(`unknown function pointer with signature ${a}: ${c}`),v};class Qf extends Error{}var uu=a=>{var c=Cu(a),d=Xt(c);return ni(c),d},ir=(a,c)=>{var d=[],m={};function v(M){if(!m[M]&&!tr[M]){if(Qs[M]){Qs[M].forEach(v);return}d.push(M),m[M]=!0}}throw c.forEach(v),new Qf(`${a}: `+d.map(uu).join([", "]))},Hn=(a,c,d)=>{a.forEach(R=>Qs[R]=c);function m(R){var U=d(R);U.length!==a.length&&ea("Mismatched type converter count");for(var q=0;q<a.length;++q)Dn(a[q],U[q])}var v=new Array(c.length),M=[],w=0;c.forEach((R,U)=>{tr.hasOwnProperty(R)?v[U]=tr[R]:(M.push(R),Rr.hasOwnProperty(R)||(Rr[R]=[]),Rr[R].push(()=>{v[U]=tr[R],++w,w===M.length&&m(v)}))}),M.length===0&&m(v)},ep=(a,c,d,m,v,M,w,R,U,q,ee,le,he)=>{ee=Xt(ee),M=ei(v,M),R&&=ei(w,R),q&&=ei(U,q),he=ei(le,he);var ue=jf(ee);bo(ue,function(){ir(`Cannot construct ${ee} due to unbound types`,[m])}),Hn([a,c,d],m?[m]:[],me=>{me=me[0];var je,_t;m?(je=me.registeredClass,_t=je.instancePrototype):_t=na.prototype;var ct=ia(ee,function(...Nt){if(Object.getPrototypeOf(this)!==Ot)throw new us(`Use 'new' to construct ${ee}`);if(bt.constructor_body===void 0)throw new us(`${ee} has no accessible constructor`);var ar=bt.constructor_body[Nt.length];if(ar===void 0)throw new us(`Tried to invoke ctor of ${ee} with invalid number of parameters (${Nt.length}) - expected (${Object.keys(bt.constructor_body).toString()}) parameters instead!`);return ar.apply(this,Nt)}),Ot=Object.create(_t,{constructor:{value:ct}});ct.prototype=Ot;var bt=new qf(ee,ct,Ot,he,je,M,R,q);bt.baseClass&&(bt.baseClass.__derivedClasses??=[],bt.baseClass.__derivedClasses.push(bt));var mn=new aa(ee,bt,!0,!1,!1),nn=new aa(ee+"*",bt,!1,!1,!1),vn=new aa(ee+" const*",bt,!1,!0,!1);return au[a]={pointerType:nn,constPointerType:vn},cu(ue,ct),[mn,nn,vn]})},To=a=>{for(;a.length;){var c=a.pop(),d=a.pop();d(c)}};function hu(a){for(var c=1;c<a.length;++c)if(a[c]!==null&&a[c].destructorFunction===void 0)return!0;return!1}function tp(a,c,d,m,v){if(a<c||a>d){var M=c==d?c:`${c} to ${d}`;v(`function ${m} called with ${a} arguments, expected ${M}`)}}function np(a,c,d,m){var v=hu(a),M=a.length-2,w=[],R=["fn"];c&&R.push("thisWired");for(var U=0;U<M;++U)w.push(`arg${U}`),R.push(`arg${U}Wired`);w=w.join(","),R=R.join(",");var q=`return function (${w}) {
`;q+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,v&&(q+=`var destructors = [];
`);var ee=v?"destructors":"null",le=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];c&&(q+=`var thisWired = classParam['toWireType'](${ee}, this);
`);for(var U=0;U<M;++U)q+=`var arg${U}Wired = argType${U}['toWireType'](${ee}, arg${U});
`,le.push(`argType${U}`);if(q+=(d||m?"var rv = ":"")+`invoker(${R});
`,v)q+=`runDestructors(destructors);
`;else for(var U=c?1:2;U<a.length;++U){var he=U===1?"thisWired":"arg"+(U-2)+"Wired";a[U].destructorFunction!==null&&(q+=`${he}_dtor(${he});
`,le.push(`${he}_dtor`))}return d&&(q+=`var ret = retType['fromWireType'](rv);
return ret;
`),q+=`}
`,le.push("checkArgCount","minArgs","maxArgs"),q=`if (arguments.length !== ${le.length}){ throw new Error(humanName + "Expected ${le.length} closure arguments " + arguments.length + " given."); }
${q}`,[le,q]}function ip(a){for(var c=a.length-2,d=a.length-1;d>=2&&a[d].optional;--d)c--;return c}function ca(a,c,d,m,v,M){var w=c.length;w<2&&xt("argTypes array size mismatch! Must at least get return value and 'this' types!"),P(!M,"Async bindings are only supported with JSPI.");for(var R=c[1]!==null&&d!==null,U=hu(c),q=c[0].name!=="void",ee=w-2,le=ip(c),he=[a,xt,m,v,To,c[0],c[1]],ue=0;ue<w-2;++ue)he.push(c[ue+2]);if(!U)for(var ue=R?1:2;ue<c.length;++ue)c[ue].destructorFunction!==null&&he.push(c[ue].destructorFunction);he.push(tp,le,ee);let[me,je]=np(c,R,q,M);var _t=new Function(...me,je)(...he);return ia(a,_t)}var la=(a,c)=>{for(var d=[],m=0;m<a;m++)d.push(Ee[c+m*4>>2]);return d},wo=a=>{a=a.trim();const c=a.indexOf("(");return c===-1?a:(P(a.endsWith(")"),"Parentheses for argument names should match."),a.slice(0,c))},rp=(a,c,d,m,v,M,w,R,U)=>{var q=la(d,m);c=Xt(c),c=wo(c),M=ei(v,M,R),Hn([],[a],ee=>{ee=ee[0];var le=`${ee.name}.${c}`;function he(){ir(`Cannot call ${le} due to unbound types`,q)}c.startsWith("@@")&&(c=Symbol[c.substring(2)]);var ue=ee.registeredClass.constructor;return ue[c]===void 0?(he.argCount=d-1,ue[c]=he):(Eo(ue,c,le),ue[c].overloadTable[d-1]=he),Hn([],q,me=>{var je=[me[0],null].concat(me.slice(1)),_t=ca(le,je,null,M,w,R);if(ue[c].overloadTable===void 0?(_t.argCount=d-1,ue[c]=_t):ue[c].overloadTable[d-1]=_t,ee.registeredClass.__derivedClasses)for(const ct of ee.registeredClass.__derivedClasses)ct.constructor.hasOwnProperty(c)||(ct.constructor[c]=_t);return[]}),[]})},sp=(a,c,d,m,v,M)=>{P(c>0);var w=la(c,d);v=ei(m,v),Hn([],[a],R=>{R=R[0];var U=`constructor ${R.name}`;if(R.registeredClass.constructor_body===void 0&&(R.registeredClass.constructor_body=[]),R.registeredClass.constructor_body[c-1]!==void 0)throw new us(`Cannot register multiple constructors with identical number of parameters (${c-1}) for class '${R.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return R.registeredClass.constructor_body[c-1]=()=>{ir(`Cannot construct ${R.name} due to unbound types`,w)},Hn([],w,q=>(q.splice(1,0,null),R.registeredClass.constructor_body[c-1]=ca(U,q,null,v,M),[])),[]})},ap=(a,c,d,m,v,M,w,R,U,q)=>{var ee=la(d,m);c=Xt(c),c=wo(c),M=ei(v,M,U),Hn([],[a],le=>{le=le[0];var he=`${le.name}.${c}`;c.startsWith("@@")&&(c=Symbol[c.substring(2)]),R&&le.registeredClass.pureVirtualFunctions.push(c);function ue(){ir(`Cannot call ${he} due to unbound types`,ee)}var me=le.registeredClass.instancePrototype,je=me[c];return je===void 0||je.overloadTable===void 0&&je.className!==le.name&&je.argCount===d-2?(ue.argCount=d-2,ue.className=le.name,me[c]=ue):(Eo(me,c,he),me[c].overloadTable[d-2]=ue),Hn([],ee,_t=>{var ct=ca(he,_t,le,M,w,U);return me[c].overloadTable===void 0?(ct.argCount=d-2,me[c]=ct):me[c].overloadTable[d-2]=ct,[]}),[]})},du=(a,c,d)=>(a instanceof Object||xt(`${d} with invalid "this": ${a}`),a instanceof c.registeredClass.constructor||xt(`${d} incompatible with "this" of type ${a.constructor.name}`),a.$$.ptr||xt(`cannot call emscripten binding method ${d} on deleted object`),ra(a.$$.ptr,a.$$.ptrType.registeredClass,c.registeredClass)),op=(a,c,d,m,v,M,w,R,U,q)=>{c=Xt(c),v=ei(m,v),Hn([],[a],ee=>{ee=ee[0];var le=`${ee.name}.${c}`,he={get(){ir(`Cannot access ${le} due to unbound types`,[d,w])},enumerable:!0,configurable:!0};return U?he.set=()=>ir(`Cannot access ${le} due to unbound types`,[d,w]):he.set=ue=>xt(le+" is a read-only property"),Object.defineProperty(ee.registeredClass.instancePrototype,c,he),Hn([],U?[d,w]:[d],ue=>{var me=ue[0],je={get(){var ct=du(this,ee,le+" getter");return me.fromWireType(v(M,ct))},enumerable:!0};if(U){U=ei(R,U);var _t=ue[1];je.set=function(ct){var Ot=du(this,ee,le+" setter"),bt=[];U(q,Ot,_t.toWireType(bt,ct)),To(bt)}}return Object.defineProperty(ee.registeredClass.instancePrototype,c,je),[]}),[]})},cp=(a,c,d)=>{a=Xt(a),Hn([],[c],m=>(m=m[0],t[a]=m.fromWireType(d),[]))},fu=[],ti=[0,1,,1,null,1,!0,1,!1,1],Ao=a=>{a>9&&--ti[a+1]===0&&(P(ti[a]!==void 0,"Decref for unallocated handle."),ti[a]=void 0,fu.push(a))},tn={toValue:a=>(a||xt(`Cannot use deleted val. handle = ${a}`),P(a===2||ti[a]!==void 0&&a%2===0,`invalid handle: ${a}`),ti[a]),toHandle:a=>{switch(a){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const c=fu.pop()||ti.length;return ti[c]=a,ti[c+1]=1,c}}}},pu={name:"emscripten::val",fromWireType:a=>{var c=tn.toValue(a);return Ao(a),c},toWireType:(a,c)=>tn.toHandle(c),argPackAdvance:Qn,readValueFromPointer:sa,destructorFunction:null},mu=a=>Dn(a,pu),lp=(a,c,d)=>{switch(c){case 1:return d?function(m){return this.fromWireType(nt[m])}:function(m){return this.fromWireType(dt[m])};case 2:return d?function(m){return this.fromWireType(ce[m>>1])}:function(m){return this.fromWireType(ye[m>>1])};case 4:return d?function(m){return this.fromWireType(se[m>>2])}:function(m){return this.fromWireType(Ee[m>>2])};default:throw new TypeError(`invalid integer width (${c}): ${a}`)}},up=(a,c,d,m)=>{c=Xt(c);function v(){}v.values={},Dn(a,{name:c,constructor:v,fromWireType:function(M){return this.constructor.values[M]},toWireType:(M,w)=>w.value,argPackAdvance:Qn,readValueFromPointer:lp(c,d,m),destructorFunction:null}),bo(c,v)},ua=(a,c)=>{var d=tr[a];return d===void 0&&xt(`${c} has unknown type ${uu(a)}`),d},hp=(a,c,d)=>{var m=ua(a,"enum");c=Xt(c);var v=m.constructor,M=Object.create(m.constructor.prototype,{value:{value:d},constructor:{value:ia(`${m.name}_${c}`,function(){})}});v.values[d]=M,v[c]=M},dp=(a,c)=>{switch(c){case 4:return function(d){return this.fromWireType($e[d>>2])};case 8:return function(d){return this.fromWireType(Ke[d>>3])};default:throw new TypeError(`invalid float width (${c}): ${a}`)}},fp=(a,c,d)=>{c=Xt(c),Dn(a,{name:c,fromWireType:m=>m,toWireType:(m,v)=>{if(typeof v!="number"&&typeof v!="boolean")throw new TypeError(`Cannot convert ${nr(v)} to ${this.name}`);return v},argPackAdvance:Qn,readValueFromPointer:dp(c,d),destructorFunction:null})},pp=(a,c,d,m,v,M,w,R)=>{var U=la(c,d);a=Xt(a),a=wo(a),v=ei(m,v,w),bo(a,function(){ir(`Cannot call ${a} due to unbound types`,U)},c-1),Hn([],U,q=>{var ee=[q[0],null].concat(q.slice(1));return cu(a,ca(a,ee,null,v,M,w),c-1),[]})},mp=(a,c,d,m,v)=>{c=Xt(c);const M=m===0;let w=U=>U;if(M){var R=32-8*d;w=U=>U<<R>>>R,v=w(v)}Dn(a,{name:c,fromWireType:w,toWireType:(U,q)=>{if(typeof q!="number"&&typeof q!="boolean")throw new TypeError(`Cannot convert "${nr(q)}" to ${c}`);return nu(c,q,m,v),q},argPackAdvance:Qn,readValueFromPointer:tu(c,d,m!==0),destructorFunction:null})},gp=(a,c,d)=>{var m=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],v=m[c];function M(w){var R=Ee[w>>2],U=Ee[w+4>>2];return new v(nt.buffer,U,R)}d=Xt(d),Dn(a,{name:d,fromWireType:M,argPackAdvance:Qn,readValueFromPointer:M},{ignoreDuplicateRegistrations:!0})},_p=Object.assign({optional:!0},pu),vp=(a,c)=>{Dn(a,_p)},rr=(a,c,d)=>(P(typeof d=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),re(a,dt,c,d)),xp=(a,c)=>{c=Xt(c),Dn(a,{name:c,fromWireType(d){for(var m=Ee[d>>2],v=d+4,M,w,R=v,w=0;w<=m;++w){var U=v+w;if(w==m||dt[U]==0){var q=U-R,ee=ut(R,q);M===void 0?M=ee:(M+="\0",M+=ee),R=U+1}}return ni(d),M},toWireType(d,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var v,M=typeof m=="string";M||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1||xt("Cannot pass non-string to std::string"),M?v=j(m):v=m.length;var w=Po(4+v+1),R=w+4;return Ee[w>>2]=v,M?rr(m,R,v+1):dt.set(m,R),d!==null&&d.push(ni,w),w},argPackAdvance:Qn,readValueFromPointer:sa,destructorFunction(d){ni(d)}})},gu=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,yp=(a,c)=>{P(a%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var d=a>>1,m=d+c/2,v=d;!(v>=m)&&ye[v];)++v;if(v-d>16&&gu)return gu.decode(ye.subarray(d,v));for(var M="",w=d;!(w>=m);++w){var R=ye[w];if(R==0)break;M+=String.fromCharCode(R)}return M},Sp=(a,c,d)=>{if(P(c%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),P(typeof d=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),d??=2147483647,d<2)return 0;d-=2;for(var m=c,v=d<a.length*2?d/2:a.length,M=0;M<v;++M){var w=a.charCodeAt(M);ce[c>>1]=w,c+=2}return ce[c>>1]=0,c-m},Mp=a=>a.length*2,Ep=(a,c)=>{P(a%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var d="",m=0;!(m>=c/4);m++){var v=se[a+m*4>>2];if(!v)break;d+=String.fromCodePoint(v)}return d},bp=(a,c,d)=>{if(P(c%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),P(typeof d=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),d??=2147483647,d<4)return 0;for(var m=c,v=m+d-4,M=0;M<a.length;++M){var w=a.codePointAt(M);if(w>65535&&M++,se[c>>2]=w,c+=4,c+4>v)break}return se[c>>2]=0,c-m},Tp=a=>{for(var c=0,d=0;d<a.length;++d){var m=a.codePointAt(d);m>65535&&d++,c+=4}return c},wp=(a,c,d)=>{d=Xt(d);var m,v,M,w;c===2?(m=yp,v=Sp,w=Mp,M=R=>ye[R>>1]):c===4&&(m=Ep,v=bp,w=Tp,M=R=>Ee[R>>2]),Dn(a,{name:d,fromWireType:R=>{for(var U=Ee[R>>2],q,ee=R+4,le=0;le<=U;++le){var he=R+4+le*c;if(le==U||M(he)==0){var ue=he-ee,me=m(ee,ue);q===void 0?q=me:(q+="\0",q+=me),ee=he+c}}return ni(R),q},toWireType:(R,U)=>{typeof U!="string"&&xt(`Cannot pass non-string to C++ string type ${d}`);var q=w(U),ee=Po(4+q+c);return Ee[ee>>2]=q/c,v(U,ee+4,q+c),R!==null&&R.push(ni,ee),ee},argPackAdvance:Qn,readValueFromPointer:sa,destructorFunction(R){ni(R)}})},Ap=(a,c)=>{mu(a)},Rp=(a,c)=>{c=Xt(c),Dn(a,{isVoid:!0,name:c,argPackAdvance:0,fromWireType:()=>{},toWireType:(d,m)=>{}})},Cp=()=>{throw new B},_u=(a,c,d)=>{var m=[],v=a.toWireType(m,d);return m.length&&(Ee[c>>2]=tn.toHandle(m)),v},Pp=(a,c,d)=>(a=tn.toValue(a),c=ua(c,"emval::as"),_u(c,d,a)),ha=[],Lp=(a,c,d,m)=>(a=ha[a],c=tn.toValue(c),a(null,c,d,m)),Ip={},Ro=a=>{var c=Ip[a];return c===void 0?Xt(a):c},Dp=(a,c,d,m,v)=>(a=ha[a],c=tn.toValue(c),d=Ro(d),a(c,c[d],m,v)),vu=()=>globalThis,Fp=a=>a===0?tn.toHandle(vu()):(a=Ro(a),tn.toHandle(vu()[a])),Np=a=>{var c=ha.length;return ha.push(a),c},Up=(a,c)=>{for(var d=new Array(a),m=0;m<a;++m)d[m]=ua(Ee[c+m*4>>2],`parameter ${m}`);return d},Op=(a,c,d)=>{var m=Up(a,c),v=m.shift();a--;var M=`return function (obj, func, destructorsRef, args) {
`,w=0,R=[];d===0&&R.push("obj");for(var U=["retType"],q=[v],ee=0;ee<a;++ee)R.push(`arg${ee}`),U.push(`argType${ee}`),q.push(m[ee]),M+=`  var arg${ee} = argType${ee}.readValueFromPointer(args${w?"+"+w:""});
`,w+=m[ee].argPackAdvance;var le=d===1?"new func":"func.call";M+=`  var rv = ${le}(${R.join(", ")});
`,v.isVoid||(U.push("emval_returnValue"),q.push(_u),M+=`  return emval_returnValue(retType, destructorsRef, rv);
`),M+=`};
`;var he=new Function(...U,M)(...q),ue=`methodCaller<(${m.map(me=>me.name).join(", ")}) => ${v.name}>`;return Np(ia(ue,he))},kp=(a,c)=>(a=tn.toValue(a),c=tn.toValue(c),tn.toHandle(a[c])),Bp=a=>{a>9&&(ti[a+1]+=1)},zp=a=>(a=tn.toValue(a),typeof a=="number"),Vp=a=>(a=tn.toValue(a),typeof a=="string"),Hp=()=>tn.toHandle([]),Gp=a=>tn.toHandle(Ro(a)),Wp=a=>{var c=tn.toValue(a);To(c),Ao(a)},Xp=(a,c)=>{a=ua(a,"_emval_take_value");var d=a.readValueFromPointer(c);return tn.toHandle(d)},$p=a=>{throw a=tn.toValue(a),a},jp=a=>a%4===0&&(a%100!==0||a%400===0),qp=[0,31,60,91,121,152,182,213,244,274,305,335],Yp=[0,31,59,90,120,151,181,212,243,273,304,334],xu=a=>{var c=jp(a.getFullYear()),d=c?qp:Yp,m=d[a.getMonth()]+a.getDate()-1;return m},Kp=9007199254740992,Jp=-9007199254740992,yu=a=>a<Jp||a>Kp?NaN:Number(a);function Zp(a,c){a=yu(a);var d=new Date(a*1e3);se[c>>2]=d.getSeconds(),se[c+4>>2]=d.getMinutes(),se[c+8>>2]=d.getHours(),se[c+12>>2]=d.getDate(),se[c+16>>2]=d.getMonth(),se[c+20>>2]=d.getFullYear()-1900,se[c+24>>2]=d.getDay();var m=xu(d)|0;se[c+28>>2]=m,se[c+36>>2]=-(d.getTimezoneOffset()*60);var v=new Date(d.getFullYear(),0,1),M=new Date(d.getFullYear(),6,1).getTimezoneOffset(),w=v.getTimezoneOffset(),R=(M!=w&&d.getTimezoneOffset()==Math.min(w,M))|0;se[c+32>>2]=R}var Qp=function(a){var c=(()=>{var d=new Date(se[a+20>>2]+1900,se[a+16>>2],se[a+12>>2],se[a+8>>2],se[a+4>>2],se[a>>2],0),m=se[a+32>>2],v=d.getTimezoneOffset(),M=new Date(d.getFullYear(),0,1),w=new Date(d.getFullYear(),6,1).getTimezoneOffset(),R=M.getTimezoneOffset(),U=Math.min(R,w);if(m<0)se[a+32>>2]=+(w!=R&&U==v);else if(m>0!=(U==v)){var q=Math.max(R,w),ee=m>0?U:q;d.setTime(d.getTime()+(ee-v)*6e4)}se[a+24>>2]=d.getDay();var le=xu(d)|0;se[a+28>>2]=le,se[a>>2]=d.getSeconds(),se[a+4>>2]=d.getMinutes(),se[a+8>>2]=d.getHours(),se[a+12>>2]=d.getDate(),se[a+16>>2]=d.getMonth(),se[a+20>>2]=d.getYear();var he=d.getTime();return isNaN(he)?-1:he/1e3})();return BigInt(c)},em=(a,c,d,m)=>{var v=new Date().getFullYear(),M=new Date(v,0,1),w=new Date(v,6,1),R=M.getTimezoneOffset(),U=w.getTimezoneOffset(),q=Math.max(R,U);Ee[a>>2]=q*60,se[c>>2]=+(R!=U);var ee=ue=>{var me=ue>=0?"-":"+",je=Math.abs(ue),_t=String(Math.floor(je/60)).padStart(2,"0"),ct=String(je%60).padStart(2,"0");return`UTC${me}${_t}${ct}`},le=ee(R),he=ee(U);P(le),P(he),P(j(le)<=16,`timezone name truncated to fit in TZNAME_MAX (${le})`),P(j(he)<=16,`timezone name truncated to fit in TZNAME_MAX (${he})`),U<R?(rr(le,d,17),rr(he,m,17)):(rr(le,m,17),rr(he,d,17))},Su=()=>performance.now(),Mu=()=>Date.now(),tm=a=>a>=0&&a<=3;function nm(a,c,d){if(!tm(a))return 28;var m;a===0?m=Mu():m=Su();var v=Math.round(m*1e3*1e3);return Ct[d>>3]=BigInt(v),0}var da=[],im=(a,c)=>{P(Array.isArray(da)),P(c%16==0),da.length=0;for(var d;d=dt[a++];){var m=String.fromCharCode(d),v=["d","f","i","p"];v.push("j"),P(v.includes(m),`Invalid character ${d}("${m}") in readEmAsmArgs! Use only [${v}], and do not specify "v" for void return argument.`);var M=d!=105;M&=d!=112,c+=M&&c%8?4:0,da.push(d==112?Ee[c>>2]:d==106?Ct[c>>3]:d==105?se[c>>2]:Ke[c>>3]),c+=M?8:4}return da},rm=(a,c,d)=>{var m=im(c,d);return P(Ru.hasOwnProperty(a),`No EM_ASM constant found at address ${a}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Ru[a](...m)},sm=(a,c,d)=>rm(a,c,d),Eu=()=>2147483648,am=()=>Eu(),om=(a,c)=>(P(c,"alignment argument is required"),Math.ceil(a/c)*c),cm=a=>{var c=et.buffer,d=(a-c.byteLength+65535)/65536|0;try{return et.grow(d),wt(),1}catch(m){L(`growMemory: Attempted to grow heap from ${c.byteLength} bytes to ${a} bytes, but got error: ${m}`)}},lm=a=>{var c=dt.length;a>>>=0,P(a>c);var d=Eu();if(a>d)return L(`Cannot enlarge memory, requested ${a} bytes, but the limit is ${d} bytes!`),!1;for(var m=1;m<=4;m*=2){var v=c*(1+.2/m);v=Math.min(v,a+100663296);var M=Math.min(d,om(Math.max(a,v),65536)),w=cm(M);if(w)return!0}return L(`Failed to grow the heap from ${c} bytes to ${M} bytes, not enough memory!`),!1},Co={},um=()=>u||"./this.program",ds=()=>{if(!ds.strings){var a=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:a,_:um()};for(var d in Co)Co[d]===void 0?delete c[d]:c[d]=Co[d];var m=[];for(var d in c)m.push(`${d}=${c[d]}`);ds.strings=m}return ds.strings},hm=(a,c)=>{var d=0,m=0;for(var v of ds()){var M=c+d;Ee[a+m>>2]=M,d+=rr(v,M,1/0)+1,m+=4}return 0},dm=(a,c)=>{var d=ds();Ee[a>>2]=d.length;var m=0;for(var v of d)m+=j(v)+1;return Ee[c>>2]=m,0},bu=0,Tu=()=>Se||bu>0,fm=a=>{Tu()||(t.onExit?.(a),O=!0),h(a,new ke(a))},pm=(a,c)=>{if(T_(),Tu()&&!c){var d=`program exited (with status: ${a}), but keepRuntimeAlive() is set (counter=${bu}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Le?.(d),L(d)}fm(a)},mm=pm;function gm(a){try{var c=ft.getStreamFromFD(a);return E.close(c),0}catch(d){if(typeof E>"u"||d.name!=="ErrnoError")throw d;return d.errno}}var _m=(a,c,d,m)=>{for(var v=0,M=0;M<d;M++){var w=Ee[c>>2],R=Ee[c+4>>2];c+=8;var U=E.read(a,nt,w,R,m);if(U<0)return-1;if(v+=U,U<R)break}return v};function vm(a,c,d,m){try{var v=ft.getStreamFromFD(a),M=_m(v,c,d);return Ee[m>>2]=M,0}catch(w){if(typeof E>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function xm(a,c,d,m){c=yu(c);try{if(isNaN(c))return 61;var v=ft.getStreamFromFD(a);return E.llseek(v,c,d),Ct[m>>3]=BigInt(v.position),v.getdents&&c===0&&d===0&&(v.getdents=null),0}catch(M){if(typeof E>"u"||M.name!=="ErrnoError")throw M;return M.errno}}var ym=(a,c,d,m)=>{for(var v=0,M=0;M<d;M++){var w=Ee[c>>2],R=Ee[c+4>>2];c+=8;var U=E.write(a,nt,w,R,m);if(U<0)return-1;if(v+=U,U<R)break}return v};function Sm(a,c,d,m){try{var v=ft.getStreamFromFD(a),M=ym(v,c,d);return Ee[m>>2]=M,0}catch(w){if(typeof E>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var Mm=a=>a,Em=a=>{var c=t["_"+a];return P(c,"Cannot call unknown function "+a+", make sure it is exported"),c},bm=(a,c)=>{P(a.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),nt.set(a,c)},fa=a=>Fu(a),Tm=a=>{var c=j(a)+1,d=fa(c);return rr(a,d,c),d},wu=(a,c,d,m,v)=>{var M={string:me=>{var je=0;return me!=null&&me!==0&&(je=Tm(me)),je},array:me=>{var je=fa(me.length);return bm(me,je),je}};function w(me){return c==="string"?ut(me):c==="boolean"?!!me:me}var R=Em(a),U=[],q=0;if(P(c!=="array",'Return type should not be "array".'),m)for(var ee=0;ee<m.length;ee++){var le=M[d[ee]];le?(q===0&&(q=V()),U[ee]=le(m[ee])):U[ee]=m[ee]}var he=R(...U);function ue(me){return q!==0&&$(q),w(me)}return he=ue(he),he},wm=(a,c,d,m)=>(...v)=>wu(a,c,d,v),Am=(...a)=>E.createPath(...a),Rm=(...a)=>E.unlink(...a),Cm=(...a)=>E.createLazyFile(...a),Pm=(...a)=>E.createDevice(...a),Lm=a=>pa(a),Im=a=>Do(a),Dm=a=>{var c=V(),d=fa(4),m=fa(4);Uu(a,d,m);var v=Ee[d>>2],M=Ee[m>>2],w=ut(v);ni(v);var R;return M&&(R=ut(M),ni(M)),$(c),[w,R]},Au=a=>Dm(a);E.createPreloadedFile=Tt,E.staticInit(),Wf(),Zf(),P(ti.length===10),t.noExitRuntime&&(Se=t.noExitRuntime),t.preloadPlugins&&(it=t.preloadPlugins),t.print&&(C=t.print),t.printErr&&(L=t.printErr),t.wasmBinary&&(D=t.wasmBinary),Um(),t.arguments&&t.arguments,t.thisProgram&&(u=t.thisProgram),P(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),P(typeof t.read>"u","Module.read option was removed"),P(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),P(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),P(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),P(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),P(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),P(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),P(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),P(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=N,t.removeRunDependency=T,t.ccall=wu,t.cwrap=wm,t.FS_createPreloadedFile=Tt,t.FS_unlink=Rm,t.FS_createPath=Am,t.FS_createDevice=Pm,t.FS=E,t.FS_createDataFile=Ve,t.FS_createLazyFile=Cm,t.MEMFS=de;var Fm=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Fm.forEach(_e);var Nm=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Nm.forEach(Pe),t.incrementExceptionRefcount=Lm,t.decrementExceptionRefcount=Im,t.getExceptionMessage=Au;function Um(){ie("fetchSettings")}var Ru={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(a){Object.defineProperty(t,a,{get:function(){return t["get_"+a]()},set:function(c){},enumerable:!0,configurable:!0})})}},Cu=K("___getTypeName"),Po=K("_malloc"),Lo=K("_fflush"),ni=K("_free"),Io=K("_emscripten_stack_get_end"),Pu=K("_strerror"),ge=K("_setThrew"),Lu=K("__emscripten_tempret_set"),Iu=K("_emscripten_stack_init"),Du=K("__emscripten_stack_restore"),Fu=K("__emscripten_stack_alloc"),Nu=K("_emscripten_stack_get_current"),Do=K("___cxa_decrement_exception_refcount"),pa=K("___cxa_increment_exception_refcount"),Uu=K("___get_exception_message"),Ou=K("___cxa_can_catch"),ku=K("___cxa_get_exception_ptr");function Om(a){Cu=ae("__getTypeName",1),Po=ae("malloc",1),Lo=ae("fflush",1),ni=ae("free",1),Io=a.emscripten_stack_get_end,a.emscripten_stack_get_base,Pu=ae("strerror",1),ge=ae("setThrew",2),Lu=ae("_emscripten_tempret_set",1),Iu=a.emscripten_stack_init,a.emscripten_stack_get_free,Du=a._emscripten_stack_restore,Fu=a._emscripten_stack_alloc,Nu=a.emscripten_stack_get_current,Do=ae("__cxa_decrement_exception_refcount",1),pa=ae("__cxa_increment_exception_refcount",1),Uu=ae("__get_exception_message",3),Ou=ae("__cxa_can_catch",3),ku=ae("__cxa_get_exception_ptr",1)}var Bu={__assert_fail:Vn,__cxa_begin_catch:ls,__cxa_current_primary_exception:_o,__cxa_end_catch:js,__cxa_find_matching_catch_2:qs,__cxa_find_matching_catch_3:Ar,__cxa_find_matching_catch_4:Ys,__cxa_rethrow:er,__cxa_rethrow_primary_exception:Ks,__cxa_throw:Js,__cxa_uncaught_exceptions:vo,__resumeException:xo,__syscall_dup3:St,__syscall_fcntl64:vi,__syscall_fstat64:ki,__syscall_ioctl:Pt,__syscall_lstat64:en,__syscall_newfstatat:Jn,__syscall_openat:Kt,__syscall_stat64:Zn,_abort_js:Bi,_embind_register_bigint:Uf,_embind_register_bool:Of,_embind_register_class:ep,_embind_register_class_class_function:rp,_embind_register_class_constructor:sp,_embind_register_class_function:ap,_embind_register_class_property:op,_embind_register_constant:cp,_embind_register_emval:mu,_embind_register_enum:up,_embind_register_enum_value:hp,_embind_register_float:fp,_embind_register_function:pp,_embind_register_integer:mp,_embind_register_memory_view:gp,_embind_register_optional:vp,_embind_register_std_string:xp,_embind_register_std_wstring:wp,_embind_register_user_type:Ap,_embind_register_void:Rp,_emscripten_throw_longjmp:Cp,_emval_as:Pp,_emval_call:Lp,_emval_call_method:Dp,_emval_decref:Ao,_emval_get_global:Fp,_emval_get_method_caller:Op,_emval_get_property:kp,_emval_incref:Bp,_emval_is_number:zp,_emval_is_string:Vp,_emval_new_array:Hp,_emval_new_cstring:Gp,_emval_run_destructors:Wp,_emval_take_value:Xp,_emval_throw:$p,_localtime_js:Zp,_mktime_js:Qp,_tzset_js:em,clock_time_get:nm,emscripten_asm_const_int:sm,emscripten_date_now:Mu,emscripten_get_heap_max:am,emscripten_get_now:Su,emscripten_resize_heap:lm,environ_get:hm,environ_sizes_get:dm,exit:mm,fd_close:gm,fd_read:vm,fd_seek:xm,fd_write:Sm,invoke_ddd:u_,invoke_dddi:Ag,invoke_dddidi:Rg,invoke_ddidi:wg,invoke_di:Cg,invoke_dii:_g,invoke_diii:Jm,invoke_diiii:Tg,invoke_diiiidd:Eg,invoke_diiiidi:eg,invoke_diiiii:$m,invoke_diiiiii:ag,invoke_diiiiiii:Pg,invoke_diiiiiiiii:rg,invoke_diiiiiiiiiiii:sg,invoke_fiii:S_,invoke_i:jm,invoke_id:s_,invoke_ii:zm,invoke_iid:zg,invoke_iidddd:m_,invoke_iidiii:pg,invoke_iidiiid:dg,invoke_iidiiiiidi:mg,invoke_iif:p_,invoke_iii:km,invoke_iiid:gg,invoke_iiididdddddd:fg,invoke_iiidiiiiiiii:hg,invoke_iiii:Gm,invoke_iiiidddiiiii:Ig,invoke_iiiii:Km,invoke_iiiiid:Kg,invoke_iiiiii:Xg,invoke_iiiiiii:Hg,invoke_iiiiiiii:Bg,invoke_iiiiiiiidd:Jg,invoke_iiiiiiiii:Mg,invoke_iiiiiiiiii:Gg,invoke_iiiiiiiiiidddiiiiiiiii:ug,invoke_iiiiiiiiiii:y_,invoke_iiiiiiiiiiii:M_,invoke_iiiiiiiiiiiii:r_,invoke_iiij:Wg,invoke_iiji:Yg,invoke_j:v_,invoke_ji:i_,invoke_jiiii:$g,invoke_jij:n_,invoke_v:Hm,invoke_vi:Vm,invoke_vid:Vg,invoke_viddd:jg,invoke_vidddd:qg,invoke_vidi:bg,invoke_vidiii:cg,invoke_vii:Xm,invoke_viid:yg,invoke_viiddi:t_,invoke_viiddidi:e_,invoke_viiddii:Lg,invoke_viidi:xg,invoke_viidii:Qm,invoke_viidiii:Og,invoke_viidiiid:Ng,invoke_viidiiiii:lg,invoke_viidiiiiidi:kg,invoke_viidiiiiiiii:og,invoke_viii:Bm,invoke_viiid:ng,invoke_viiidd:Qg,invoke_viiidi:vg,invoke_viiididdddddd:Ug,invoke_viiidiiiiiiii:Fg,invoke_viiii:Ym,invoke_viiiiddd:Zg,invoke_viiiidi:h_,invoke_viiiifi:d_,invoke_viiiii:Wm,invoke_viiiiid:tg,invoke_viiiiii:qm,invoke_viiiiiii:Zm,invoke_viiiiiiii:Sg,invoke_viiiiiiiiii:c_,invoke_viiiiiiiiiidddiiiiiiiii:Dg,invoke_viiiiiiiiiiid:ig,invoke_viiiiiiiiiiiii:o_,invoke_viiiiiiiiiiiiiii:E_,invoke_viiiiiiiiiiiiiiiiii:l_,invoke_viiiij:g_,invoke_viij:__,invoke_viijii:x_,invoke_vij:f_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:a_,llvm_eh_typeid_for:Mm},sr=await Me();function km(a,c,d){var m=V();try{return ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;ge(1,0)}}function Bm(a,c,d,m){var v=V();try{ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function zm(a,c){var d=V();try{return ve(a)(c)}catch(m){if($(d),!(m instanceof k))throw m;ge(1,0)}}function Vm(a,c){var d=V();try{ve(a)(c)}catch(m){if($(d),!(m instanceof k))throw m;ge(1,0)}}function Hm(a){var c=V();try{ve(a)()}catch(d){if($(c),!(d instanceof k))throw d;ge(1,0)}}function Gm(a,c,d,m){var v=V();try{return ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Wm(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function Xm(a,c,d){var m=V();try{ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;ge(1,0)}}function $m(a,c,d,m,v,M){var w=V();try{return ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function jm(a){var c=V();try{return ve(a)()}catch(d){if($(c),!(d instanceof k))throw d;ge(1,0)}}function qm(a,c,d,m,v,M,w){var R=V();try{ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function Ym(a,c,d,m,v){var M=V();try{ve(a)(c,d,m,v)}catch(w){if($(M),!(w instanceof k))throw w;ge(1,0)}}function Km(a,c,d,m,v){var M=V();try{return ve(a)(c,d,m,v)}catch(w){if($(M),!(w instanceof k))throw w;ge(1,0)}}function Jm(a,c,d,m){var v=V();try{return ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Zm(a,c,d,m,v,M,w,R){var U=V();try{ve(a)(c,d,m,v,M,w,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function Qm(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function eg(a,c,d,m,v,M,w){var R=V();try{return ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function tg(a,c,d,m,v,M,w){var R=V();try{ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function ng(a,c,d,m,v){var M=V();try{ve(a)(c,d,m,v)}catch(w){if($(M),!(w instanceof k))throw w;ge(1,0)}}function ig(a,c,d,m,v,M,w,R,U,q,ee,le,he){var ue=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function rg(a,c,d,m,v,M,w,R,U,q){var ee=V();try{return ve(a)(c,d,m,v,M,w,R,U,q)}catch(le){if($(ee),!(le instanceof k))throw le;ge(1,0)}}function sg(a,c,d,m,v,M,w,R,U,q,ee,le,he){var ue=V();try{return ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function ag(a,c,d,m,v,M,w){var R=V();try{return ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function og(a,c,d,m,v,M,w,R,U,q,ee,le){var he=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function cg(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function lg(a,c,d,m,v,M,w,R,U){var q=V();try{ve(a)(c,d,m,v,M,w,R,U)}catch(ee){if($(q),!(ee instanceof k))throw ee;ge(1,0)}}function ug(a,c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je,_t,ct,Ot,bt,mn,nn){var vn=V();try{return ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je,_t,ct,Ot,bt,mn,nn)}catch(Nt){if($(vn),!(Nt instanceof k))throw Nt;ge(1,0)}}function hg(a,c,d,m,v,M,w,R,U,q,ee,le){var he=V();try{return ve(a)(c,d,m,v,M,w,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function dg(a,c,d,m,v,M,w){var R=V();try{return ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function fg(a,c,d,m,v,M,w,R,U,q,ee,le){var he=V();try{return ve(a)(c,d,m,v,M,w,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function pg(a,c,d,m,v,M){var w=V();try{return ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function mg(a,c,d,m,v,M,w,R,U,q){var ee=V();try{return ve(a)(c,d,m,v,M,w,R,U,q)}catch(le){if($(ee),!(le instanceof k))throw le;ge(1,0)}}function gg(a,c,d,m){var v=V();try{return ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function _g(a,c,d){var m=V();try{return ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;ge(1,0)}}function vg(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function xg(a,c,d,m,v){var M=V();try{ve(a)(c,d,m,v)}catch(w){if($(M),!(w instanceof k))throw w;ge(1,0)}}function yg(a,c,d,m){var v=V();try{ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Sg(a,c,d,m,v,M,w,R,U){var q=V();try{ve(a)(c,d,m,v,M,w,R,U)}catch(ee){if($(q),!(ee instanceof k))throw ee;ge(1,0)}}function Mg(a,c,d,m,v,M,w,R,U){var q=V();try{return ve(a)(c,d,m,v,M,w,R,U)}catch(ee){if($(q),!(ee instanceof k))throw ee;ge(1,0)}}function Eg(a,c,d,m,v,M,w){var R=V();try{return ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function bg(a,c,d,m){var v=V();try{ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Tg(a,c,d,m,v){var M=V();try{return ve(a)(c,d,m,v)}catch(w){if($(M),!(w instanceof k))throw w;ge(1,0)}}function wg(a,c,d,m,v){var M=V();try{return ve(a)(c,d,m,v)}catch(w){if($(M),!(w instanceof k))throw w;ge(1,0)}}function Ag(a,c,d,m){var v=V();try{return ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Rg(a,c,d,m,v,M){var w=V();try{return ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function Cg(a,c){var d=V();try{return ve(a)(c)}catch(m){if($(d),!(m instanceof k))throw m;ge(1,0)}}function Pg(a,c,d,m,v,M,w,R){var U=V();try{return ve(a)(c,d,m,v,M,w,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function Lg(a,c,d,m,v,M,w){var R=V();try{ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function Ig(a,c,d,m,v,M,w,R,U,q,ee,le){var he=V();try{return ve(a)(c,d,m,v,M,w,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function Dg(a,c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je,_t,ct,Ot,bt,mn,nn,vn){var Nt=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je,_t,ct,Ot,bt,mn,nn,vn)}catch(ar){if($(Nt),!(ar instanceof k))throw ar;ge(1,0)}}function Fg(a,c,d,m,v,M,w,R,U,q,ee,le,he){var ue=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function Ng(a,c,d,m,v,M,w,R){var U=V();try{ve(a)(c,d,m,v,M,w,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function Ug(a,c,d,m,v,M,w,R,U,q,ee,le,he){var ue=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function Og(a,c,d,m,v,M,w){var R=V();try{ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function kg(a,c,d,m,v,M,w,R,U,q,ee){var le=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee)}catch(he){if($(le),!(he instanceof k))throw he;ge(1,0)}}function Bg(a,c,d,m,v,M,w,R){var U=V();try{return ve(a)(c,d,m,v,M,w,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function zg(a,c,d){var m=V();try{return ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;ge(1,0)}}function Vg(a,c,d){var m=V();try{ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;ge(1,0)}}function Hg(a,c,d,m,v,M,w){var R=V();try{return ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function Gg(a,c,d,m,v,M,w,R,U,q){var ee=V();try{return ve(a)(c,d,m,v,M,w,R,U,q)}catch(le){if($(ee),!(le instanceof k))throw le;ge(1,0)}}function Wg(a,c,d,m){var v=V();try{return ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Xg(a,c,d,m,v,M){var w=V();try{return ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function $g(a,c,d,m,v){var M=V();try{return ve(a)(c,d,m,v)}catch(w){if($(M),!(w instanceof k))throw w;return ge(1,0),0n}}function jg(a,c,d,m,v){var M=V();try{ve(a)(c,d,m,v)}catch(w){if($(M),!(w instanceof k))throw w;ge(1,0)}}function qg(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function Yg(a,c,d,m){var v=V();try{return ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function Kg(a,c,d,m,v,M){var w=V();try{return ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function Jg(a,c,d,m,v,M,w,R,U,q){var ee=V();try{return ve(a)(c,d,m,v,M,w,R,U,q)}catch(le){if($(ee),!(le instanceof k))throw le;ge(1,0)}}function Zg(a,c,d,m,v,M,w,R){var U=V();try{ve(a)(c,d,m,v,M,w,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function Qg(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function e_(a,c,d,m,v,M,w,R){var U=V();try{ve(a)(c,d,m,v,M,w,R)}catch(q){if($(U),!(q instanceof k))throw q;ge(1,0)}}function t_(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function n_(a,c,d){var m=V();try{return ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;return ge(1,0),0n}}function i_(a,c){var d=V();try{return ve(a)(c)}catch(m){if($(d),!(m instanceof k))throw m;return ge(1,0),0n}}function r_(a,c,d,m,v,M,w,R,U,q,ee,le,he){var ue=V();try{return ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he)}catch(me){if($(ue),!(me instanceof k))throw me;ge(1,0)}}function s_(a,c){var d=V();try{return ve(a)(c)}catch(m){if($(d),!(m instanceof k))throw m;ge(1,0)}}function a_(a,c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je,_t,ct,Ot,bt,mn,nn,vn,Nt,ar,A_,R_,C_,P_,L_,I_,D_,F_,N_,U_,O_,k_,B_,z_,V_,H_,G_,W_,X_,$_,j_,q_,Y_,K_,J_,Z_,Q_,e0,t0,n0,i0,r0,s0,a0,o0,c0,l0,u0,h0,d0,f0,p0,m0,g0,_0,v0,x0,y0,S0,M0,E0,b0,T0,w0,A0,R0,C0,P0,L0,I0,D0){var F0=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je,_t,ct,Ot,bt,mn,nn,vn,Nt,ar,A_,R_,C_,P_,L_,I_,D_,F_,N_,U_,O_,k_,B_,z_,V_,H_,G_,W_,X_,$_,j_,q_,Y_,K_,J_,Z_,Q_,e0,t0,n0,i0,r0,s0,a0,o0,c0,l0,u0,h0,d0,f0,p0,m0,g0,_0,v0,x0,y0,S0,M0,E0,b0,T0,w0,A0,R0,C0,P0,L0,I0,D0)}catch(Vu){if($(F0),!(Vu instanceof k))throw Vu;ge(1,0)}}function o_(a,c,d,m,v,M,w,R,U,q,ee,le,he,ue){var me=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he,ue)}catch(je){if($(me),!(je instanceof k))throw je;ge(1,0)}}function c_(a,c,d,m,v,M,w,R,U,q,ee){var le=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee)}catch(he){if($(le),!(he instanceof k))throw he;ge(1,0)}}function l_(a,c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je,_t,ct,Ot){var bt=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je,_t,ct,Ot)}catch(mn){if($(bt),!(mn instanceof k))throw mn;ge(1,0)}}function u_(a,c,d){var m=V();try{return ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;ge(1,0)}}function h_(a,c,d,m,v,M,w){var R=V();try{ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function d_(a,c,d,m,v,M,w){var R=V();try{ve(a)(c,d,m,v,M,w)}catch(U){if($(R),!(U instanceof k))throw U;ge(1,0)}}function f_(a,c,d){var m=V();try{ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;ge(1,0)}}function p_(a,c,d){var m=V();try{return ve(a)(c,d)}catch(v){if($(m),!(v instanceof k))throw v;ge(1,0)}}function m_(a,c,d,m,v,M){var w=V();try{return ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function g_(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function __(a,c,d,m){var v=V();try{ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function v_(a){var c=V();try{return ve(a)()}catch(d){if($(c),!(d instanceof k))throw d;return ge(1,0),0n}}function x_(a,c,d,m,v,M){var w=V();try{ve(a)(c,d,m,v,M)}catch(R){if($(w),!(R instanceof k))throw R;ge(1,0)}}function y_(a,c,d,m,v,M,w,R,U,q,ee){var le=V();try{return ve(a)(c,d,m,v,M,w,R,U,q,ee)}catch(he){if($(le),!(he instanceof k))throw he;ge(1,0)}}function S_(a,c,d,m){var v=V();try{return ve(a)(c,d,m)}catch(M){if($(v),!(M instanceof k))throw M;ge(1,0)}}function M_(a,c,d,m,v,M,w,R,U,q,ee,le){var he=V();try{return ve(a)(c,d,m,v,M,w,R,U,q,ee,le)}catch(ue){if($(he),!(ue instanceof k))throw ue;ge(1,0)}}function E_(a,c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je){var _t=V();try{ve(a)(c,d,m,v,M,w,R,U,q,ee,le,he,ue,me,je)}catch(ct){if($(_t),!(ct instanceof k))throw ct;ge(1,0)}}var zu;function b_(){Iu(),A()}function Fo(){if(Ft>0){gt=Fo;return}if(b_(),rt(),Ft>0){gt=Fo;return}function a(){P(!zu),zu=!0,t.calledRun=!0,!O&&(Gt(),Ue?.(t),t.onRuntimeInitialized?.(),Z("onRuntimeInitialized"),P(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),G())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),a()},1)):a(),F()}function T_(){var a=C,c=L,d=!1;C=L=m=>{d=!0};try{Lo(0),["stdout","stderr"].forEach(m=>{var v=E.analyzePath("/dev/"+m);if(v){var M=v.object,w=M.rdev,R=we.ttys[w];R?.output?.length&&(d=!0)}})}catch{}C=a,L=c,d&&De("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function w_(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();Z("preInit")}w_(),Fo(),vt?e=t:e=new Promise((a,c)=>{Ue=a,Le=c});for(const a of Object.keys(t))a in r||Object.defineProperty(r,a,{configurable:!0,get(){W(`Access to module property ('${a}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const B0="/car/assets/mujoco-D9UjOFNX.wasm";const bd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Td=([r,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(e).forEach(i=>{n.setAttribute(i,String(e[i]))}),t?.length&&t.forEach(i=>{const s=Td(i);n.appendChild(s)}),n},z0=(r,e={})=>{const n={...bd,...e};return Td(["svg",n,r])};const V0=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const H0=(...r)=>r.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const G0=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const W0=r=>{const e=G0(r);return e.charAt(0).toUpperCase()+e.slice(1)};const X0=r=>Array.from(r.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),Gu=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",Wu=(r,{nameAttr:e,icons:t,attrs:n})=>{const i=r.getAttribute(e);if(i==null)return;const s=W0(i),o=t[s];if(!o)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);const l=X0(r),u=V0(l)?{}:{"aria-hidden":"true"},h={...bd,"data-lucide":i,...u,...n,...l},f=Gu(l),g=Gu(n),p=H0("lucide",`lucide-${i}`,...f,...g);p&&Object.assign(h,{class:p});const _=z0(o,h);return r.parentNode?.replaceChild(_,r)};const $0=[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]];const j0=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];const q0=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];const Y0=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]];const K0=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];const J0=[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"M2 12h20"}],["path",{d:"m6 8-4 4 4 4"}]];const Z0=[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]];const Q0=[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152"}],["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];const ev=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const tv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const nv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const iv=[["path",{d:"M10 5H3"}],["path",{d:"M12 19H3"}],["path",{d:"M14 3v4"}],["path",{d:"M16 17v4"}],["path",{d:"M21 12h-9"}],["path",{d:"M21 19h-5"}],["path",{d:"M21 5h-7"}],["path",{d:"M8 10v4"}],["path",{d:"M8 12H3"}]];const rv=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];const sv=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]];const av=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const Sl=({icons:r={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:i}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(o=>Wu(o,{nameAttr:e,icons:r,attrs:t})),i&&Array.from(n.querySelectorAll("template")).forEach(l=>Sl({icons:r,nameAttr:e,attrs:t,root:l.content,inTemplates:i})),e==="data-lucide"){const o=n.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(l=>Wu(l,{nameAttr:"icon-name",icons:r,attrs:t})))}};const Ml="183",ov=0,Xu=1,cv=2,Xa=1,wd=2,Es=3,Ci=0,En=1,On=2,Ai=0,$r=1,$u=2,ju=3,qu=4,lv=5,mr=100,uv=101,hv=102,dv=103,fv=104,pv=200,mv=201,gv=202,_v=203,bc=204,Tc=205,vv=206,xv=207,yv=208,Sv=209,Mv=210,Ev=211,bv=212,Tv=213,wv=214,wc=0,Ac=1,Rc=2,Yr=3,Cc=4,Pc=5,Lc=6,Ic=7,Ad=0,Av=1,Rv=2,ui=0,Rd=1,Cd=2,Pd=3,El=4,Ld=5,Id=6,Dd=7,Yu="attached",Cv="detached",Fd=300,Mr=301,Kr=302,No=303,Uo=304,co=306,Er=1e3,oi=1001,Za=1002,sn=1003,Nd=1004,bs=1005,an=1006,$a=1007,Ti=1008,wn=1009,Ud=1010,Od=1011,Ns=1012,bl=1013,fi=1014,kn=1015,Pi=1016,Tl=1017,wl=1018,Us=1020,kd=35902,Bd=35899,zd=1021,Vd=1022,Bn=1023,Li=1026,vr=1027,Al=1028,Rl=1029,Jr=1030,Cl=1031,Pl=1033,ja=33776,qa=33777,Ya=33778,Ka=33779,Dc=35840,Fc=35841,Nc=35842,Uc=35843,Oc=36196,kc=37492,Bc=37496,zc=37488,Vc=37489,Hc=37490,Gc=37491,Wc=37808,Xc=37809,$c=37810,jc=37811,qc=37812,Yc=37813,Kc=37814,Jc=37815,Zc=37816,Qc=37817,el=37818,tl=37819,nl=37820,il=37821,rl=36492,sl=36494,al=36495,ol=36283,cl=36284,ll=36285,ul=36286,Os=2300,ks=2301,Oo=2302,Ku=2303,Ju=2400,Zu=2401,Qu=2402,Pv=2500,Lv=0,Hd=1,hl=2,Iv=3200,Gd=0,Dv=1,ji="",jt="srgb",Mn="srgb-linear",Qa="linear",Lt="srgb",Cr=7680,eh=519,Fv=512,Nv=513,Uv=514,Ll=515,Ov=516,kv=517,Il=518,Bv=519,dl=35044,th="300 es",ci=2e3,Bs=2001;function zv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hv(){const r=zs("canvas");return r.style.display="block",r}const nh={};function eo(...r){const e="THREE."+r.shift();console.log(e,...r)}function Wd(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ge(...r){r=Wd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Je(...r){r=Wd(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function to(...r){const e=r.join(" ");e in nh||(nh[e]=!0,Ge(...r))}function Gv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Wv={[wc]:Ac,[Rc]:Lc,[Cc]:Ic,[Yr]:Pc,[Ac]:wc,[Lc]:Rc,[Ic]:Cc,[Pc]:Yr};class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const As=Math.PI/180,Zr=180/Math.PI;function qn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function Dl(r,e){return(r%e+e)%e}function Xv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function $v(r,e,t){return r!==e?(t-r)/(e-r):0}function Rs(r,e,t){return(1-t)*r+t*e}function jv(r,e,t,n){return Rs(r,e,1-Math.exp(-t*n))}function qv(r,e=1){return e-Math.abs(Dl(r,e*2)-e)}function Yv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Kv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Jv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Zv(r,e){return r+Math.random()*(e-r)}function Qv(r){return r*(.5-Math.random())}function ex(r){r!==void 0&&(ih=r);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tx(r){return r*As}function nx(r){return r*Zr}function ix(r){return(r&r-1)===0&&r!==0}function rx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ax(r,e,t,n,i){const s=Math.cos,o=Math.sin,l=s(t/2),u=o(t/2),h=s((e+n)/2),f=o((e+n)/2),g=s((e-n)/2),p=o((e-n)/2),_=s((n-e)/2),S=o((n-e)/2);switch(i){case"XYX":r.set(l*f,u*g,u*p,l*h);break;case"YZY":r.set(u*p,l*f,u*g,l*h);break;case"ZXZ":r.set(u*g,u*p,l*f,l*h);break;case"XZX":r.set(l*f,u*S,u*_,l*h);break;case"YXY":r.set(u*_,l*f,u*S,l*h);break;case"ZYZ":r.set(u*S,u*_,l*f,l*h);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $n(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function It(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ox={DEG2RAD:As,RAD2DEG:Zr,generateUUID:qn,clamp:ht,euclideanModulo:Dl,mapLinear:Xv,inverseLerp:$v,lerp:Rs,damp:jv,pingpong:qv,smoothstep:Yv,smootherstep:Kv,randInt:Jv,randFloat:Zv,randFloatSpread:Qv,seededRandom:ex,degToRad:tx,radToDeg:nx,isPowerOfTwo:ix,ceilPowerOfTwo:rx,floorPowerOfTwo:sx,setQuaternionFromProperEuler:ax,normalize:It,denormalize:$n};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let u=n[i+0],h=n[i+1],f=n[i+2],g=n[i+3],p=s[o+0],_=s[o+1],S=s[o+2],b=s[o+3];if(g!==b||u!==p||h!==_||f!==S){let x=u*p+h*_+f*S+g*b;x<0&&(p=-p,_=-_,S=-S,b=-b,x=-x);let y=1-l;if(x<.9995){const C=Math.acos(x),L=Math.sin(C);y=Math.sin(y*C)/L,l=Math.sin(l*C)/L,u=u*y+p*l,h=h*y+_*l,f=f*y+S*l,g=g*y+b*l}else{u=u*y+p*l,h=h*y+_*l,f=f*y+S*l,g=g*y+b*l;const C=1/Math.sqrt(u*u+h*h+f*f+g*g);u*=C,h*=C,f*=C,g*=C}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],u=n[i+1],h=n[i+2],f=n[i+3],g=s[o],p=s[o+1],_=s[o+2],S=s[o+3];return e[t]=l*S+f*g+u*_-h*p,e[t+1]=u*S+f*p+h*g-l*_,e[t+2]=h*S+f*_+l*p-u*g,e[t+3]=f*S-l*g-u*p-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,h=l(n/2),f=l(i/2),g=l(s/2),p=u(n/2),_=u(i/2),S=u(s/2);switch(o){case"XYZ":this._x=p*f*g+h*_*S,this._y=h*_*g-p*f*S,this._z=h*f*S+p*_*g,this._w=h*f*g-p*_*S;break;case"YXZ":this._x=p*f*g+h*_*S,this._y=h*_*g-p*f*S,this._z=h*f*S-p*_*g,this._w=h*f*g+p*_*S;break;case"ZXY":this._x=p*f*g-h*_*S,this._y=h*_*g+p*f*S,this._z=h*f*S+p*_*g,this._w=h*f*g-p*_*S;break;case"ZYX":this._x=p*f*g-h*_*S,this._y=h*_*g+p*f*S,this._z=h*f*S-p*_*g,this._w=h*f*g+p*_*S;break;case"YZX":this._x=p*f*g+h*_*S,this._y=h*_*g+p*f*S,this._z=h*f*S-p*_*g,this._w=h*f*g-p*_*S;break;case"XZY":this._x=p*f*g-h*_*S,this._y=h*_*g-p*f*S,this._z=h*f*S+p*_*g,this._w=h*f*g+p*_*S;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],u=t[9],h=t[2],f=t[6],g=t[10],p=n+l+g;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(f-u)*_,this._y=(s-h)*_,this._z=(o-i)*_}else if(n>l&&n>g){const _=2*Math.sqrt(1+n-l-g);this._w=(f-u)/_,this._x=.25*_,this._y=(i+o)/_,this._z=(s+h)/_}else if(l>g){const _=2*Math.sqrt(1+l-n-g);this._w=(s-h)/_,this._x=(i+o)/_,this._y=.25*_,this._z=(u+f)/_}else{const _=2*Math.sqrt(1+g-n-l);this._w=(o-i)/_,this._x=(s+h)/_,this._y=(u+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+o*l+i*h-s*u,this._y=i*f+o*u+s*l-n*h,this._z=s*f+o*h+n*u-i*l,this._w=o*f-n*l-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,i=-i,s=-s,o=-o,l=-l);let u=1-t;if(l<.9995){const h=Math.acos(l),f=Math.sin(h);u=Math.sin(u*h)/f,t=Math.sin(t*h)/f,this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+i*t,this._z=this._z*u+s*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,u=e.w,h=2*(o*i-l*n),f=2*(l*t-s*i),g=2*(s*n-o*t);return this.x=t+u*h+o*g-l*f,this.y=n+u*f+l*h-s*g,this.z=i+u*g+s*f-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=i*u-s*l,this.y=s*o-n*u,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new H,rh=new Yn;class at{constructor(e,t,n,i,s,o,l,u,h){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,u,h)}set(e,t,n,i,s,o,l,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=l,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],u=n[6],h=n[1],f=n[4],g=n[7],p=n[2],_=n[5],S=n[8],b=i[0],x=i[3],y=i[6],C=i[1],L=i[4],D=i[7],O=i[2],P=i[5],z=i[8];return s[0]=o*b+l*C+u*O,s[3]=o*x+l*L+u*P,s[6]=o*y+l*D+u*z,s[1]=h*b+f*C+g*O,s[4]=h*x+f*L+g*P,s[7]=h*y+f*D+g*z,s[2]=p*b+_*C+S*O,s[5]=p*x+_*L+S*P,s[8]=p*y+_*D+S*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*l*h-n*s*f+n*l*u+i*s*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8],g=f*o-l*h,p=l*u-f*s,_=h*s-o*u,S=t*g+n*p+i*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=g*b,e[1]=(i*h-f*n)*b,e[2]=(l*n-i*o)*b,e[3]=p*b,e[4]=(f*t-i*u)*b,e[5]=(i*s-l*t)*b,e[6]=_*b,e[7]=(n*u-h*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*l)+o+e,-i*h,i*u,-i*(-h*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new at,sh=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cx(){const r={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Lt&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(i.r=jr(i.r),i.g=jr(i.g),i.b=jr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?Qa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return to("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return to("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Mn]:{primaries:e,whitePoint:n,transfer:Qa,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),r}const yt=cx();function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Pr;class lx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=zs("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class Fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(zo(i[o].image)):s.push(zo(i[o]))}else s=zo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let hx=0;const Vo=new H;class on extends is{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=oi,i=oi,s=an,o=Ti,l=Bn,u=wn,h=on.DEFAULT_ANISOTROPY,f=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=qn(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Er:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Er:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Fd;on.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],g=u[8],p=u[1],_=u[5],S=u[9],b=u[2],x=u[6],y=u[10];if(Math.abs(f-p)<.01&&Math.abs(g-b)<.01&&Math.abs(S-x)<.01){if(Math.abs(f+p)<.1&&Math.abs(g+b)<.1&&Math.abs(S+x)<.1&&Math.abs(h+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,D=(_+1)/2,O=(y+1)/2,P=(f+p)/4,z=(g+b)/4,A=(S+x)/4;return L>D&&L>O?L<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(L),i=P/n,s=z/n):D>O?D<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(D),n=P/i,s=A/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=z/s,i=A/s),this.set(n,i,s,t),this}let C=Math.sqrt((x-S)*(x-S)+(g-b)*(g-b)+(p-f)*(p-f));return Math.abs(C)<.001&&(C=1),this.x=(x-S)/C,this.y=(g-b)/C,this.z=(p-f)/C,this.w=Math.acos((h+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dx extends is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new on(i),o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Fl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends dx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xd extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fx extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ot{constructor(e,t,n,i,s,o,l,u,h,f,g,p,_,S,b,x){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,u,h,f,g,p,_,S,b,x)}set(e,t,n,i,s,o,l,u,h,f,g,p,_,S,b,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=o,y[9]=l,y[13]=u,y[2]=h,y[6]=f,y[10]=g,y[14]=p,y[3]=_,y[7]=S,y[11]=b,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const p=o*f,_=o*g,S=l*f,b=l*g;t[0]=u*f,t[4]=-u*g,t[8]=h,t[1]=_+S*h,t[5]=p-b*h,t[9]=-l*u,t[2]=b-p*h,t[6]=S+_*h,t[10]=o*u}else if(e.order==="YXZ"){const p=u*f,_=u*g,S=h*f,b=h*g;t[0]=p+b*l,t[4]=S*l-_,t[8]=o*h,t[1]=o*g,t[5]=o*f,t[9]=-l,t[2]=_*l-S,t[6]=b+p*l,t[10]=o*u}else if(e.order==="ZXY"){const p=u*f,_=u*g,S=h*f,b=h*g;t[0]=p-b*l,t[4]=-o*g,t[8]=S+_*l,t[1]=_+S*l,t[5]=o*f,t[9]=b-p*l,t[2]=-o*h,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const p=o*f,_=o*g,S=l*f,b=l*g;t[0]=u*f,t[4]=S*h-_,t[8]=p*h+b,t[1]=u*g,t[5]=b*h+p,t[9]=_*h-S,t[2]=-h,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const p=o*u,_=o*h,S=l*u,b=l*h;t[0]=u*f,t[4]=b-p*g,t[8]=S*g+_,t[1]=g,t[5]=o*f,t[9]=-l*f,t[2]=-h*f,t[6]=_*g+S,t[10]=p-b*g}else if(e.order==="XZY"){const p=o*u,_=o*h,S=l*u,b=l*h;t[0]=u*f,t[4]=-g,t[8]=h*f,t[1]=p*g+b,t[5]=o*f,t[9]=_*g-S,t[2]=S*g-_,t[6]=l*f,t[10]=b*g+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,n){const i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),zi.crossVectors(n,bn),zi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),zi.crossVectors(n,bn)),zi.normalize(),ma.crossVectors(bn,zi),i[0]=zi.x,i[4]=ma.x,i[8]=bn.x,i[1]=zi.y,i[5]=ma.y,i[9]=bn.y,i[2]=zi.z,i[6]=ma.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],u=n[8],h=n[12],f=n[1],g=n[5],p=n[9],_=n[13],S=n[2],b=n[6],x=n[10],y=n[14],C=n[3],L=n[7],D=n[11],O=n[15],P=i[0],z=i[4],A=i[8],F=i[12],k=i[1],B=i[5],Y=i[9],Z=i[13],K=i[2],ie=i[6],J=i[10],te=i[14],pe=i[3],_e=i[7],Pe=i[11],Ue=i[15];return s[0]=o*P+l*k+u*K+h*pe,s[4]=o*z+l*B+u*ie+h*_e,s[8]=o*A+l*Y+u*J+h*Pe,s[12]=o*F+l*Z+u*te+h*Ue,s[1]=f*P+g*k+p*K+_*pe,s[5]=f*z+g*B+p*ie+_*_e,s[9]=f*A+g*Y+p*J+_*Pe,s[13]=f*F+g*Z+p*te+_*Ue,s[2]=S*P+b*k+x*K+y*pe,s[6]=S*z+b*B+x*ie+y*_e,s[10]=S*A+b*Y+x*J+y*Pe,s[14]=S*F+b*Z+x*te+y*Ue,s[3]=C*P+L*k+D*K+O*pe,s[7]=C*z+L*B+D*ie+O*_e,s[11]=C*A+L*Y+D*J+O*Pe,s[15]=C*F+L*Z+D*te+O*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],u=e[9],h=e[13],f=e[2],g=e[6],p=e[10],_=e[14],S=e[3],b=e[7],x=e[11],y=e[15],C=u*_-h*p,L=l*_-h*g,D=l*p-u*g,O=o*_-h*f,P=o*p-u*f,z=o*g-l*f;return t*(b*C-x*L+y*D)-n*(S*C-x*O+y*P)+i*(S*L-b*O+y*z)-s*(S*D-b*P+x*z)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8],g=e[9],p=e[10],_=e[11],S=e[12],b=e[13],x=e[14],y=e[15],C=t*l-n*o,L=t*u-i*o,D=t*h-s*o,O=n*u-i*l,P=n*h-s*l,z=i*h-s*u,A=f*b-g*S,F=f*x-p*S,k=f*y-_*S,B=g*x-p*b,Y=g*y-_*b,Z=p*y-_*x,K=C*Z-L*Y+D*B+O*k-P*F+z*A;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/K;return e[0]=(l*Z-u*Y+h*B)*ie,e[1]=(i*Y-n*Z-s*B)*ie,e[2]=(b*z-x*P+y*O)*ie,e[3]=(p*P-g*z-_*O)*ie,e[4]=(u*k-o*Z-h*F)*ie,e[5]=(t*Z-i*k+s*F)*ie,e[6]=(x*D-S*z-y*L)*ie,e[7]=(f*z-p*D+_*L)*ie,e[8]=(o*Y-l*k+h*A)*ie,e[9]=(n*k-t*Y-s*A)*ie,e[10]=(S*P-b*D+y*C)*ie,e[11]=(g*D-f*P-_*C)*ie,e[12]=(l*F-o*B-u*A)*ie,e[13]=(t*B-n*F+i*A)*ie,e[14]=(b*L-S*O-x*C)*ie,e[15]=(f*O-g*L+p*C)*ie,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,u=e.z,h=s*o,f=s*l;return this.set(h*o+n,h*l-i*u,h*u+i*l,0,h*l+i*u,f*l+n,f*u-i*o,0,h*u-i*l,f*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,h=s+s,f=o+o,g=l+l,p=s*h,_=s*f,S=s*g,b=o*f,x=o*g,y=l*g,C=u*h,L=u*f,D=u*g,O=n.x,P=n.y,z=n.z;return i[0]=(1-(b+y))*O,i[1]=(_+D)*O,i[2]=(S-L)*O,i[3]=0,i[4]=(_-D)*P,i[5]=(1-(p+y))*P,i[6]=(x+C)*P,i[7]=0,i[8]=(S+L)*z,i[9]=(x-C)*z,i[10]=(1-(p+b))*z,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Lr.set(i[0],i[1],i[2]).length();const l=Lr.set(i[4],i[5],i[6]).length(),u=Lr.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Gn.copy(this);const h=1/o,f=1/l,g=1/u;return Gn.elements[0]*=h,Gn.elements[1]*=h,Gn.elements[2]*=h,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=g,Gn.elements[9]*=g,Gn.elements[10]*=g,t.setFromRotationMatrix(Gn),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,i,s,o,l=ci,u=!1){const h=this.elements,f=2*s/(t-e),g=2*s/(n-i),p=(t+e)/(t-e),_=(n+i)/(n-i);let S,b;if(u)S=s/(o-s),b=o*s/(o-s);else if(l===ci)S=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(l===Bs)S=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,o,l=ci,u=!1){const h=this.elements,f=2/(t-e),g=2/(n-i),p=-(t+e)/(t-e),_=-(n+i)/(n-i);let S,b;if(u)S=1/(o-s),b=o/(o-s);else if(l===ci)S=-2/(o-s),b=-(o+s)/(o-s);else if(l===Bs)S=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=g,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new H,Gn=new ot,px=new H(0,0,0),mx=new H(1,1,1),zi=new H,ma=new H,bn=new H,oh=new ot,ch=new Yn;class pi{constructor(e=0,t=0,n=0,i=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],u=i[1],h=i[5],f=i[9],g=i[2],p=i[6],_=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-ht(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class $d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const lh=new H,Ir=new Yn,xi=new ot,ga=new H,fs=new H,_x=new H,vx=new Yn,uh=new H(1,0,0),hh=new H(0,1,0),dh=new H(0,0,1),fh={type:"added"},xx={type:"removed"},Dr={type:"childadded",child:null},Ho={type:"childremoved",child:null};class zt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new H,t=new pi,n=new Yn,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new at}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(fs,ga,this.up):xi.lookAt(ga,fs,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Ir.setFromRotationMatrix(xi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const g=u[h];s(e.shapes,g)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(e.materials,this.material[u]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(s(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),g=o(e.shapes),p=o(e.skeletons),_=o(e.animations),S=o(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),p.length>0&&(n.skeletons=p),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=i,n;function o(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new H(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class An extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,n),y=this._getHandJoint(h,b);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const f=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],p=f.position.distanceTo(g.position),_=.02,S=.005;h.inputState.pinching&&p>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Wo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=Dl(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Wo(o,s,e+1/3),this.g=Wo(o,s,e),this.b=Wo(o,s,e-1/3)}return yt.colorSpaceToWorking(this,i),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return yt.workingToColorSpace(_n.copy(this),e),Math.round(ht(_n.r*255,0,255))*65536+Math.round(ht(_n.g*255,0,255))*256+Math.round(ht(_n.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,s=_n.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let u,h;const f=(l+o)/2;if(l===o)u=0,h=0;else{const g=o-l;switch(h=f<=.5?g/(o+l):g/(2-o-l),o){case n:u=(i-s)/g+(i<s?6:0);break;case i:u=(s-n)/g+2;break;case s:u=(n-i)/g+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=jt){yt.workingToColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(_a);const n=Rs(Vi.h,_a.h,t),i=Rs(Vi.s,_a.s,t),s=Rs(Vi.l,_a.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Qe;Qe.NAMES=jd;class Nl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new Nl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sx extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wn=new H,yi=new H,Xo=new H,Si=new H,Fr=new H,Nr=new H,ph=new H,$o=new H,jo=new H,qo=new H,Yo=new Bt,Ko=new Bt,Jo=new Bt;class jn{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wn.subVectors(i,t),yi.subVectors(n,t),Xo.subVectors(e,t);const o=Wn.dot(Wn),l=Wn.dot(yi),u=Wn.dot(Xo),h=yi.dot(yi),f=yi.dot(Xo),g=o*h-l*l;if(g===0)return s.set(0,0,0),null;const p=1/g,_=(h*u-l*f)*p,S=(o*f-l*u)*p;return s.set(1-_-S,S,_)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,i,s,o,l,u){return this.getBarycoord(e,t,n,i,Si)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Si.x),u.addScaledVector(o,Si.y),u.addScaledVector(l,Si.z),u)}static getInterpolatedAttribute(e,t,n,i,s,o){return Yo.setScalar(0),Ko.setScalar(0),Jo.setScalar(0),Yo.fromBufferAttribute(e,t),Ko.fromBufferAttribute(e,n),Jo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Yo,s.x),o.addScaledVector(Ko,s.y),o.addScaledVector(Jo,s.z),o}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),yi.subVectors(e,t),Wn.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Wn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;Fr.subVectors(i,n),Nr.subVectors(s,n),$o.subVectors(e,n);const u=Fr.dot($o),h=Nr.dot($o);if(u<=0&&h<=0)return t.copy(n);jo.subVectors(e,i);const f=Fr.dot(jo),g=Nr.dot(jo);if(f>=0&&g<=f)return t.copy(i);const p=u*g-f*h;if(p<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(n).addScaledVector(Fr,o);qo.subVectors(e,s);const _=Fr.dot(qo),S=Nr.dot(qo);if(S>=0&&_<=S)return t.copy(s);const b=_*h-u*S;if(b<=0&&h>=0&&S<=0)return l=h/(h-S),t.copy(n).addScaledVector(Nr,l);const x=f*S-_*g;if(x<=0&&g-f>=0&&_-S>=0)return ph.subVectors(s,i),l=(g-f)/(g-f+(_-S)),t.copy(i).addScaledVector(ph,l);const y=1/(x+b+p);return o=b*y,l=p*y,t.copy(n).addScaledVector(Fr,o).addScaledVector(Nr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Di{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),va.copy(n.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),xa.subVectors(this.max,ps),Ur.subVectors(e.a,ps),Or.subVectors(e.b,ps),kr.subVectors(e.c,ps),Hi.subVectors(Or,Ur),Gi.subVectors(kr,Or),or.subVectors(Ur,kr);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-or.z,or.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,or.z,0,-or.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-or.y,or.x,0];return!Zo(t,Ur,Or,kr,xa)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,Ur,Or,kr,xa))?!1:(ya.crossVectors(Hi,Gi),t=[ya.x,ya.y,ya.z],Zo(t,Ur,Or,kr,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new H,new H,new H,new H,new H,new H,new H,new H],Xn=new H,va=new Di,Ur=new H,Or=new H,kr=new H,Hi=new H,Gi=new H,or=new H,ps=new H,xa=new H,ya=new H,cr=new H;function Zo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){cr.fromArray(r,s);const l=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),u=e.dot(cr),h=t.dot(cr),f=n.dot(cr);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>l)return!1}return!0}const Jt=new H,Sa=new Xe;let Mx=0;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dl,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dl&&(e.usage=this.usage),e}}class qd extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yd extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ex=new Di,ms=new H,Qo=new H;class gi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ex.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Qo)),this.expandByPoint(ms.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bx=0;const Fn=new ot,ec=new zt,Br=new H,Tn=new Di,gs=new Di,un=new H;class qt extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?Yd:qd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];gs.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(Tn.min,gs.min),Tn.expandByPoint(un),un.addVectors(Tn.max,gs.max),Tn.expandByPoint(un)):(Tn.expandByPoint(gs.min),Tn.expandByPoint(gs.max))}Tn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],u=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)un.fromBufferAttribute(l,h),u&&(Br.fromBufferAttribute(e,h),un.add(Br)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let A=0;A<n.count;A++)l[A]=new H,u[A]=new H;const h=new H,f=new H,g=new H,p=new Xe,_=new Xe,S=new Xe,b=new H,x=new H;function y(A,F,k){h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,F),g.fromBufferAttribute(n,k),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,F),S.fromBufferAttribute(s,k),f.sub(h),g.sub(h),_.sub(p),S.sub(p);const B=1/(_.x*S.y-S.x*_.y);isFinite(B)&&(b.copy(f).multiplyScalar(S.y).addScaledVector(g,-_.y).multiplyScalar(B),x.copy(g).multiplyScalar(_.x).addScaledVector(f,-S.x).multiplyScalar(B),l[A].add(b),l[F].add(b),l[k].add(b),u[A].add(x),u[F].add(x),u[k].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let A=0,F=C.length;A<F;++A){const k=C[A],B=k.start,Y=k.count;for(let Z=B,K=B+Y;Z<K;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new H,D=new H,O=new H,P=new H;function z(A){O.fromBufferAttribute(i,A),P.copy(O);const F=l[A];L.copy(F),L.sub(O.multiplyScalar(O.dot(F))).normalize(),D.crossVectors(P,F);const B=D.dot(u[A])<0?-1:1;o.setXYZW(A,L.x,L.y,L.z,B)}for(let A=0,F=C.length;A<F;++A){const k=C[A],B=k.start,Y=k.count;for(let Z=B,K=B+Y;Z<K;Z+=3)z(e.getX(Z+0)),z(e.getX(Z+1)),z(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,_=n.count;p<_;p++)n.setXYZ(p,0,0,0);const i=new H,s=new H,o=new H,l=new H,u=new H,h=new H,f=new H,g=new H;if(e)for(let p=0,_=e.count;p<_;p+=3){const S=e.getX(p+0),b=e.getX(p+1),x=e.getX(p+2);i.fromBufferAttribute(t,S),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,x),f.subVectors(o,s),g.subVectors(i,s),f.cross(g),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,x),l.add(f),u.add(f),h.add(f),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(b,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let p=0,_=t.count;p<_;p+=3)i.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),f.subVectors(o,s),g.subVectors(i,s),f.cross(g),n.setXYZ(p+0,f.x,f.y,f.z),n.setXYZ(p+1,f.x,f.y,f.z),n.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(l,u){const h=l.array,f=l.itemSize,g=l.normalized,p=new h.constructor(u.length*f);let _=0,S=0;for(let b=0,x=u.length;b<x;b++){l.isInterleavedBufferAttribute?_=u[b]*l.data.stride+l.offset:_=u[b]*f;for(let y=0;y<f;y++)p[S++]=h[_++]}return new hn(p,f,g)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],h=e(u,n);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,g=h.length;f<g;f++){const p=h[f],_=e(p,n);u.push(_)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let g=0,p=h.length;g<p;g++){const _=h[g];f.push(_.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],g=s[h];for(let p=0,_=g.length;p<_;p++)f.push(g[p].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dl,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new H;class Ul{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let wx=0;class di extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=$r,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Tc,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ei=new H,tc=new H,Ma=new H,Wi=new H,nc=new H,Ea=new H,ic=new H;class lo{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tc.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(tc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ma),l=Wi.dot(this.direction),u=-Wi.dot(Ma),h=Wi.lengthSq(),f=Math.abs(1-o*o);let g,p,_,S;if(f>0)if(g=o*u-l,p=o*l-u,S=s*f,g>=0)if(p>=-S)if(p<=S){const b=1/f;g*=b,p*=b,_=g*(g+o*p+2*l)+p*(o*g+p+2*u)+h}else p=s,g=Math.max(0,-(o*p+l)),_=-g*g+p*(p+2*u)+h;else p=-s,g=Math.max(0,-(o*p+l)),_=-g*g+p*(p+2*u)+h;else p<=-S?(g=Math.max(0,-(-o*s+l)),p=g>0?-s:Math.min(Math.max(-s,-u),s),_=-g*g+p*(p+2*u)+h):p<=S?(g=0,p=Math.min(Math.max(-s,-u),s),_=p*(p+2*u)+h):(g=Math.max(0,-(o*s+l)),p=g>0?s:Math.min(Math.max(-s,-u),s),_=-g*g+p*(p+2*u)+h);else p=o>0?-s:s,g=Math.max(0,-(o*p+l)),_=-g*g+p*(p+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),i&&i.copy(tc).addScaledVector(Ma,p),_}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,u;const h=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,i=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,i=(e.min.x-p.x)*h),f>=0?(s=(e.min.y-p.y)*f,o=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,o=(e.min.y-p.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),g>=0?(l=(e.min.z-p.z)*g,u=(e.max.z-p.z)*g):(l=(e.max.z-p.z)*g,u=(e.min.z-p.z)*g),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,i,s){nc.subVectors(t,e),Ea.subVectors(n,e),ic.crossVectors(nc,Ea);let o=this.direction.dot(ic),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const u=l*this.direction.dot(Ea.crossVectors(Wi,Ea));if(u<0)return null;const h=l*this.direction.dot(nc.cross(Wi));if(h<0||u+h>o)return null;const f=-l*Wi.dot(ic);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class li extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mh=new ot,lr=new lo,ba=new gi,gh=new H,Ta=new H,wa=new H,Aa=new H,rc=new H,Ra=new H,_h=new H,Ca=new H;class $t extends zt{constructor(e=new qt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){Ra.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=l[u],g=s[u];f!==0&&(rc.fromBufferAttribute(g,e),o?Ra.addScaledVector(rc,f):Ra.addScaledVector(rc.sub(t),f))}t.add(Ra)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(ba.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ba,gh)===null||lr.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(s).invert(),lr.copy(e.ray).applyMatrix4(mh),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,l=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,g=s.attributes.normal,p=s.groups,_=s.drawRange;if(l!==null)if(Array.isArray(o))for(let S=0,b=p.length;S<b;S++){const x=p[S],y=o[x.materialIndex],C=Math.max(x.start,_.start),L=Math.min(l.count,Math.min(x.start+x.count,_.start+_.count));for(let D=C,O=L;D<O;D+=3){const P=l.getX(D),z=l.getX(D+1),A=l.getX(D+2);i=Pa(this,y,e,n,h,f,g,P,z,A),i&&(i.faceIndex=Math.floor(D/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const S=Math.max(0,_.start),b=Math.min(l.count,_.start+_.count);for(let x=S,y=b;x<y;x+=3){const C=l.getX(x),L=l.getX(x+1),D=l.getX(x+2);i=Pa(this,o,e,n,h,f,g,C,L,D),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,b=p.length;S<b;S++){const x=p[S],y=o[x.materialIndex],C=Math.max(x.start,_.start),L=Math.min(u.count,Math.min(x.start+x.count,_.start+_.count));for(let D=C,O=L;D<O;D+=3){const P=D,z=D+1,A=D+2;i=Pa(this,y,e,n,h,f,g,P,z,A),i&&(i.faceIndex=Math.floor(D/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const S=Math.max(0,_.start),b=Math.min(u.count,_.start+_.count);for(let x=S,y=b;x<y;x+=3){const C=x,L=x+1,D=x+2;i=Pa(this,o,e,n,h,f,g,C,L,D),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Ax(r,e,t,n,i,s,o,l){let u;if(e.side===En?u=n.intersectTriangle(o,s,i,!0,l):u=n.intersectTriangle(i,s,o,e.side===Ci,l),u===null)return null;Ca.copy(l),Ca.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Ca);return h<t.near||h>t.far?null:{distance:h,point:Ca.clone(),object:r}}function Pa(r,e,t,n,i,s,o,l,u,h){r.getVertexPosition(l,Ta),r.getVertexPosition(u,wa),r.getVertexPosition(h,Aa);const f=Ax(r,e,t,n,Ta,wa,Aa,_h);if(f){const g=new H;jn.getBarycoord(_h,Ta,wa,Aa,g),i&&(f.uv=jn.getInterpolatedAttribute(i,l,u,h,g,new Xe)),s&&(f.uv1=jn.getInterpolatedAttribute(s,l,u,h,g,new Xe)),o&&(f.normal=jn.getInterpolatedAttribute(o,l,u,h,g,new H),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:l,b:u,c:h,normal:new H,materialIndex:0};jn.getNormal(Ta,wa,Aa,p.normal),f.face=p,f.barycoord=g}return f}const vh=new H,xh=new Bt,yh=new Bt,Rx=new H,Sh=new ot,La=new H,sc=new gi,Mh=new ot,ac=new lo;class Cx extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yu,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(i),e.ray.intersectsSphere(sc)!==!1&&(Mh.copy(i).invert(),ac.copy(e.ray).applyMatrix4(Mh),!(this.boundingBox!==null&&ac.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ac)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ge("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xh.fromBufferAttribute(i.attributes.skinIndex,e),yh.fromBufferAttribute(i.attributes.skinWeight,e),vh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=yh.getComponent(s);if(o!==0){const l=xh.getComponent(s);Sh.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Rx.copy(vh).applyMatrix4(Sh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kd extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ol extends on{constructor(e=null,t=1,n=1,i,s,o,l,u,h=sn,f=sn,g,p){super(null,o,l,u,h,f,i,s,g,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new ot,Px=new ot;class kl{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ge("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const l=e[s]?e[s].matrixWorld:Px;Eh.multiplyMatrices(l,t[s]),Eh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new kl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ol(t,e,e,Bn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Ge("Skeleton: No bone found with UUID:",s),o=new Kd),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class fl extends hn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zr=new ot,bh=new ot,Ia=[],Th=new Di,Lx=new ot,_s=new $t,vs=new gi;class Jd extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fl(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Th.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),vs.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let l=0;l<n.length;l++)n[l]=i[o+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),e.ray.intersectsSphere(vs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,zr),bh.multiplyMatrices(n,zr),_s.matrixWorld=bh,_s.raycast(e,Ia);for(let o=0,l=Ia.length;o<l;o++){const u=Ia[o];u.instanceId=s,u.object=this,t.push(u)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ol(new Float32Array(i*this.count),i,this.count,Al,kn));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const l=this.geometry.morphTargetsRelative?1:1-o,u=i*e;s[u]=l,s.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oc=new H,Ix=new H,Dx=new at;class pr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oc.subVectors(n,t).cross(Ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dx.getNormalMatrix(e),i=this.coplanarPoint(oc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new gi,Fx=new Xe(.5,.5),Da=new H;class Bl{constructor(e=new pr,t=new pr,n=new pr,i=new pr,s=new pr,o=new pr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){const i=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],h=s[3],f=s[4],g=s[5],p=s[6],_=s[7],S=s[8],b=s[9],x=s[10],y=s[11],C=s[12],L=s[13],D=s[14],O=s[15];if(i[0].setComponents(h-o,_-f,y-S,O-C).normalize(),i[1].setComponents(h+o,_+f,y+S,O+C).normalize(),i[2].setComponents(h+l,_+g,y+b,O+L).normalize(),i[3].setComponents(h-l,_-g,y-b,O-L).normalize(),n)i[4].setComponents(u,p,x,D).normalize(),i[5].setComponents(h-u,_-p,y-x,O-D).normalize();else if(i[4].setComponents(h-u,_-p,y-x,O-D).normalize(),t===ci)i[5].setComponents(h+u,_+p,y+x,O+D).normalize();else if(t===Bs)i[5].setComponents(u,p,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);const t=Fx.distanceTo(e.center);return ur.radius=.7071067811865476+t,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Da.x=i.normal.x>0?e.max.x:e.min.x,Da.y=i.normal.y>0?e.max.y:e.min.y,Da.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class no extends di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const io=new H,ro=new H,wh=new ot,xs=new lo,Fa=new gi,cc=new H,Ah=new H;class Vs extends zt{constructor(e=new qt,t=new no){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)io.fromBufferAttribute(t,i-1),ro.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=io.distanceTo(ro);e.setAttribute("lineDistance",new Ht(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(i),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;wh.copy(i).invert(),xs.copy(e.ray).applyMatrix4(wh);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,f=n.index,p=n.attributes.position;if(f!==null){const _=Math.max(0,o.start),S=Math.min(f.count,o.start+o.count);for(let b=_,x=S-1;b<x;b+=h){const y=f.getX(b),C=f.getX(b+1),L=Na(this,e,xs,u,y,C,b);L&&t.push(L)}if(this.isLineLoop){const b=f.getX(S-1),x=f.getX(_),y=Na(this,e,xs,u,b,x,S-1);y&&t.push(y)}}else{const _=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let b=_,x=S-1;b<x;b+=h){const y=Na(this,e,xs,u,b,b+1,b);y&&t.push(y)}if(this.isLineLoop){const b=Na(this,e,xs,u,S-1,_,S-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Na(r,e,t,n,i,s,o){const l=r.geometry.attributes.position;if(io.fromBufferAttribute(l,i),ro.fromBufferAttribute(l,s),t.distanceSqToSegment(io,ro,cc,Ah)>n)return;cc.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(cc);if(!(h<e.near||h>e.far))return{distance:h,point:Ah.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Rh=new H,Ch=new H;class Nx extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rh.distanceTo(Ch);e.setAttribute("lineDistance",new Ht(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zd extends Vs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qd extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ph=new ot,pl=new lo,Ua=new gi,Oa=new H;class Ux extends zt{constructor(e=new qt,t=new Qd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;Ph.copy(i).invert(),pl.copy(e.ray).applyMatrix4(Ph);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,g=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let S=p,b=_;S<b;S++){const x=h.getX(S);Oa.fromBufferAttribute(g,x),Lh(Oa,x,u,i,e,t,this)}}else{const p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let S=p,b=_;S<b;S++)Oa.fromBufferAttribute(g,S),Lh(Oa,S,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Lh(r,e,t,n,i,s,o){const l=pl.distanceSqToPoint(r);if(l<t){const u=new H;pl.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ef extends on{constructor(e=[],t=Mr,n,i,s,o,l,u,h,f){super(e,t,n,i,s,o,l,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zl extends on{constructor(e,t,n,i,s,o,l,u,h){super(e,t,n,i,s,o,l,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hs extends on{constructor(e,t,n=fi,i,s,o,l=sn,u=sn,h,f=Li,g=1){if(f!==Li&&f!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:g};super(p,i,s,o,l,u,f,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ox extends Hs{constructor(e,t=fi,n=Mr,i,s,o=sn,l=sn,u,h=Li){const f={width:e,height:e,depth:1},g=[f,f,f,f,f,f];super(e,e,t,n,i,s,o,l,u,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tf extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rs extends qt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],g=[];let p=0,_=0;S("z","y","x",-1,-1,n,t,e,o,s,0),S("z","y","x",1,-1,n,t,-e,o,s,1),S("x","z","y",1,1,e,n,t,i,o,2),S("x","z","y",1,-1,e,n,-t,i,o,3),S("x","y","z",1,-1,e,t,n,i,s,4),S("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(g,2));function S(b,x,y,C,L,D,O,P,z,A,F){const k=D/z,B=O/A,Y=D/2,Z=O/2,K=P/2,ie=z+1,J=A+1;let te=0,pe=0;const _e=new H;for(let Pe=0;Pe<J;Pe++){const Ue=Pe*B-Z;for(let Le=0;Le<ie;Le++){const et=Le*k-Y;_e[b]=et*C,_e[x]=Ue*L,_e[y]=K,h.push(_e.x,_e.y,_e.z),_e[b]=0,_e[x]=0,_e[y]=P>0?1:-1,f.push(_e.x,_e.y,_e.z),g.push(Le/z),g.push(1-Pe/A),te+=1}}for(let Pe=0;Pe<A;Pe++)for(let Ue=0;Ue<z;Ue++){const Le=p+Ue+ie*Pe,et=p+Ue+ie*(Pe+1),nt=p+(Ue+1)+ie*(Pe+1),dt=p+(Ue+1)+ie*Pe;u.push(Le,et,dt),u.push(et,nt,dt),pe+=6}l.addGroup(_,pe,F),_+=pe,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class so extends qt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],g=[],p=[],_=[];let S=0;const b=[],x=n/2;let y=0;C(),o===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(p,3)),this.setAttribute("uv",new Ht(_,2));function C(){const D=new H,O=new H;let P=0;const z=(t-e)/n;for(let A=0;A<=s;A++){const F=[],k=A/s,B=k*(t-e)+e;for(let Y=0;Y<=i;Y++){const Z=Y/i,K=Z*u+l,ie=Math.sin(K),J=Math.cos(K);O.x=B*ie,O.y=-k*n+x,O.z=B*J,g.push(O.x,O.y,O.z),D.set(ie,z,J).normalize(),p.push(D.x,D.y,D.z),_.push(Z,1-k),F.push(S++)}b.push(F)}for(let A=0;A<i;A++)for(let F=0;F<s;F++){const k=b[F][A],B=b[F+1][A],Y=b[F+1][A+1],Z=b[F][A+1];(e>0||F!==0)&&(f.push(k,B,Z),P+=3),(t>0||F!==s-1)&&(f.push(B,Y,Z),P+=3)}h.addGroup(y,P,0),y+=P}function L(D){const O=S,P=new Xe,z=new H;let A=0;const F=D===!0?e:t,k=D===!0?1:-1;for(let Y=1;Y<=i;Y++)g.push(0,x*k,0),p.push(0,k,0),_.push(.5,.5),S++;const B=S;for(let Y=0;Y<=i;Y++){const K=Y/i*u+l,ie=Math.cos(K),J=Math.sin(K);z.x=F*J,z.y=x*k,z.z=F*ie,g.push(z.x,z.y,z.z),p.push(0,k,0),P.x=ie*.5+.5,P.y=J*.5*k+.5,_.push(P.x,P.y),S++}for(let Y=0;Y<i;Y++){const Z=O+Y,K=B+Y;D===!0?f.push(K,K+1,Z):f.push(K+1,K,Z),A+=3}h.addGroup(y,A,D===!0?1:2),y+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let l=0,u=s-1,h;for(;l<=u;)if(i=Math.floor(l+(u-l)/2),h=n[i]-o,h<0)l=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===o)return i/(s-1);const f=n[i],p=n[i+1]-f,_=(o-f)/p;return(i+_)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),l=this.getPoint(s),u=t||(o.isVector2?new Xe:new H);return u.copy(l).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new H,i=[],s=[],o=[],l=new H,u=new ot;for(let _=0;_<=e;_++){const S=_/e;i[_]=this.getTangentAt(S,new H)}s[0]=new H,o[0]=new H;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),g=Math.abs(i[0].y),p=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),g<=h&&(h=g,n.set(0,1,0)),p<=h&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],l),o[0].crossVectors(i[0],s[0]);for(let _=1;_<=e;_++){if(s[_]=s[_-1].clone(),o[_]=o[_-1].clone(),l.crossVectors(i[_-1],i[_]),l.length()>Number.EPSILON){l.normalize();const S=Math.acos(ht(i[_-1].dot(i[_]),-1,1));s[_].applyMatrix4(u.makeRotationAxis(l,S))}o[_].crossVectors(i[_],s[_])}if(t===!0){let _=Math.acos(ht(s[0].dot(s[e]),-1,1));_/=e,i[0].dot(l.crossVectors(s[0],s[e]))>0&&(_=-_);for(let S=1;S<=e;S++)s[S].applyMatrix4(u.makeRotationAxis(i[S],_*S)),o[S].crossVectors(i[S],s[S])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nf extends Fi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=l,this.aRotation=u}getPoint(e,t=new Xe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const l=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),g=Math.sin(this.aRotation),p=u-this.aX,_=h-this.aY;u=p*f-_*g+this.aX,h=p*g+_*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kx extends nf{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vl(){let r=0,e=0,t=0,n=0;function i(s,o,l,u){r=s,e=l,t=-3*s+3*o-2*l-u,n=2*s-2*o+l+u}return{initCatmullRom:function(s,o,l,u,h){i(o,l,h*(l-s),h*(u-o))},initNonuniformCatmullRom:function(s,o,l,u,h,f,g){let p=(o-s)/h-(l-s)/(h+f)+(l-o)/f,_=(l-o)/f-(u-o)/(f+g)+(u-l)/g;p*=f,_*=f,i(o,l,p,_)},calc:function(s){const o=s*s,l=o*s;return r+e*s+t*o+n*l}}}const ka=new H,lc=new Vl,uc=new Vl,hc=new Vl;class Hl extends Fi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new H){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let l=Math.floor(o),u=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:u===0&&l===s-1&&(l=s-2,u=1);let h,f;this.closed||l>0?h=i[(l-1)%s]:(ka.subVectors(i[0],i[1]).add(i[0]),h=ka);const g=i[l%s],p=i[(l+1)%s];if(this.closed||l+2<s?f=i[(l+2)%s]:(ka.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=ka),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(g),_),b=Math.pow(g.distanceToSquared(p),_),x=Math.pow(p.distanceToSquared(f),_);b<1e-4&&(b=1),S<1e-4&&(S=b),x<1e-4&&(x=b),lc.initNonuniformCatmullRom(h.x,g.x,p.x,f.x,S,b,x),uc.initNonuniformCatmullRom(h.y,g.y,p.y,f.y,S,b,x),hc.initNonuniformCatmullRom(h.z,g.z,p.z,f.z,S,b,x)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(h.x,g.x,p.x,f.x,this.tension),uc.initCatmullRom(h.y,g.y,p.y,f.y,this.tension),hc.initCatmullRom(h.z,g.z,p.z,f.z,this.tension));return n.set(lc.calc(u),uc.calc(u),hc.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new H().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ih(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,l=r*r,u=r*l;return(2*t-2*n+s+o)*u+(-3*t+3*n-2*s-o)*l+s*r+t}function Bx(r,e){const t=1-r;return t*t*e}function zx(r,e){return 2*(1-r)*r*e}function Vx(r,e){return r*r*e}function Cs(r,e,t,n){return Bx(r,e)+zx(r,t)+Vx(r,n)}function Hx(r,e){const t=1-r;return t*t*t*e}function Gx(r,e){const t=1-r;return 3*t*t*r*e}function Wx(r,e){return 3*(1-r)*r*r*e}function Xx(r,e){return r*r*r*e}function Ps(r,e,t,n,i){return Hx(r,e)+Gx(r,t)+Wx(r,n)+Xx(r,i)}class $x extends Fi{constructor(e=new Xe,t=new Xe,n=new Xe,i=new Xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Xe){const n=t,i=this.v0,s=this.v1,o=this.v2,l=this.v3;return n.set(Ps(e,i.x,s.x,o.x,l.x),Ps(e,i.y,s.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jx extends Fi{constructor(e=new H,t=new H,n=new H,i=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new H){const n=t,i=this.v0,s=this.v1,o=this.v2,l=this.v3;return n.set(Ps(e,i.x,s.x,o.x,l.x),Ps(e,i.y,s.y,o.y,l.y),Ps(e,i.z,s.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qx extends Fi{constructor(e=new Xe,t=new Xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Xe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yx extends Fi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kx extends Fi{constructor(e=new Xe,t=new Xe,n=new Xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Xe){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Cs(e,i.x,s.x,o.x),Cs(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rf extends Fi{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Cs(e,i.x,s.x,o.x),Cs(e,i.y,s.y,o.y),Cs(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jx extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Xe){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),l=s-o,u=i[o===0?o:o-1],h=i[o],f=i[o>i.length-2?i.length-1:o+1],g=i[o>i.length-3?i.length-1:o+2];return n.set(Ih(l,u.x,h.x,f.x,g.x),Ih(l,u.y,h.y,f.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Xe().fromArray(i))}return this}}var Zx=Object.freeze({__proto__:null,ArcCurve:kx,CatmullRomCurve3:Hl,CubicBezierCurve:$x,CubicBezierCurve3:jx,EllipseCurve:nf,LineCurve:qx,LineCurve3:Yx,QuadraticBezierCurve:Kx,QuadraticBezierCurve3:rf,SplineCurve:Jx});class xr extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),u=Math.floor(i),h=l+1,f=u+1,g=e/l,p=t/u,_=[],S=[],b=[],x=[];for(let y=0;y<f;y++){const C=y*p-o;for(let L=0;L<h;L++){const D=L*g-s;S.push(D,-C,0),b.push(0,0,1),x.push(L/l),x.push(1-y/u)}}for(let y=0;y<u;y++)for(let C=0;C<l;C++){const L=C+h*y,D=C+h*(y+1),O=C+1+h*(y+1),P=C+1+h*y;_.push(L,D,P),_.push(D,O,P)}this.setIndex(_),this.setAttribute("position",new Ht(S,3)),this.setAttribute("normal",new Ht(b,3)),this.setAttribute("uv",new Ht(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gl extends qt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:l},n=Math.floor(n),i=Math.floor(i);const u=[],h=[],f=[],g=[],p=new H,_=new H,S=new H;for(let b=0;b<=n;b++){const x=o+b/n*l;for(let y=0;y<=i;y++){const C=y/i*s;_.x=(e+t*Math.cos(x))*Math.cos(C),_.y=(e+t*Math.cos(x))*Math.sin(C),_.z=t*Math.sin(x),h.push(_.x,_.y,_.z),p.x=e*Math.cos(C),p.y=e*Math.sin(C),S.subVectors(_,p).normalize(),f.push(S.x,S.y,S.z),g.push(y/i),g.push(b/n)}}for(let b=1;b<=n;b++)for(let x=1;x<=i;x++){const y=(i+1)*b+x-1,C=(i+1)*(b-1)+x-1,L=(i+1)*(b-1)+x,D=(i+1)*b+x;u.push(y,C,D),u.push(C,L,D)}this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wl extends qt{constructor(e=new rf(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const l=new H,u=new H,h=new Xe;let f=new H;const g=[],p=[],_=[],S=[];b(),this.setIndex(S),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(p,3)),this.setAttribute("uv",new Ht(_,2));function b(){for(let L=0;L<t;L++)x(L);x(s===!1?t:0),C(),y()}function x(L){f=e.getPointAt(L/t,f);const D=o.normals[L],O=o.binormals[L];for(let P=0;P<=i;P++){const z=P/i*Math.PI*2,A=Math.sin(z),F=-Math.cos(z);u.x=F*D.x+A*O.x,u.y=F*D.y+A*O.y,u.z=F*D.z+A*O.z,u.normalize(),p.push(u.x,u.y,u.z),l.x=f.x+n*u.x,l.y=f.y+n*u.y,l.z=f.z+n*u.z,g.push(l.x,l.y,l.z)}}function y(){for(let L=1;L<=t;L++)for(let D=1;D<=i;D++){const O=(i+1)*(L-1)+(D-1),P=(i+1)*L+(D-1),z=(i+1)*L+D,A=(i+1)*(L-1)+D;S.push(O,P,A),S.push(P,z,A)}}function C(){for(let L=0;L<=t;L++)for(let D=0;D<=i;D++)h.x=L/t,h.y=D/i,_.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wl(new Zx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Qr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const n=Qr(r[t]);for(const i in n)e[i]=n[i]}return e}function Qx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const ey={clone:Qr,merge:yn};var ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ty,this.fragmentShader=ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=Qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class iy extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uo extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gd,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _i extends uo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ry extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sy extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ba(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ay(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Dh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const l=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[l+u]}return i}function af(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ss{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const l=n+o>>>1;e<t[l]?o=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class oy extends ss{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,l=i[s],u=i[o];if(l===void 0)switch(this.getSettings_().endingStart){case Zu:s=e,l=2*t-n;break;case Qu:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Zu:o=e,u=2*n-t;break;case Qu:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,f=this._offsetPrev,g=this._offsetNext,p=this._weightPrev,_=this._weightNext,S=(n-t)/(i-t),b=S*S,x=b*S,y=-p*x+2*p*b-p*S,C=(1+p)*x+(-1.5-2*p)*b+(-.5+p)*S+1,L=(-1-_)*x+(1.5+_)*b+.5*S,D=_*x-_*b;for(let O=0;O!==l;++O)s[O]=y*o[f+O]+C*o[h+O]+L*o[u+O]+D*o[g+O];return s}}class cy extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,f=(n-t)/(i-t),g=1-f;for(let p=0;p!==l;++p)s[p]=o[h+p]*g+o[u+p]*f;return s}}class ly extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class uy extends ss{interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,f=this.settings||this.DefaultSettings_,g=f.inTangents,p=f.outTangents;if(!g||!p){const b=(n-t)/(i-t),x=1-b;for(let y=0;y!==l;++y)s[y]=o[h+y]*x+o[u+y]*b;return s}const _=l*2,S=e-1;for(let b=0;b!==l;++b){const x=o[h+b],y=o[u+b],C=S*_+b*2,L=p[C],D=p[C+1],O=e*_+b*2,P=g[O],z=g[O+1];let A=(n-t)/(i-t),F,k,B,Y,Z;for(let K=0;K<8;K++){F=A*A,k=F*A,B=1-A,Y=B*B,Z=Y*B;const J=Z*t+3*Y*A*L+3*B*F*P+k*i-n;if(Math.abs(J)<1e-10)break;const te=3*Y*(L-t)+6*B*A*(P-L)+3*F*(i-P);if(Math.abs(te)<1e-10)break;A=A-J/te,A=Math.max(0,Math.min(1,A))}s[b]=Z*x+3*Y*A*D+3*B*F*z+k*y}return s}}class Kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ly(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new uy(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break;case Ku:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return Ku}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const l=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*l,o*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let l=0;l!==s;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){Je("KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(o!==null&&o>u){Je("KeyframeTrack: Out of order keys.",this,l,u,o),e=!1;break}o=u}if(i!==void 0&&Vv(i))for(let l=0,u=i.length;l!==u;++l){const h=i[l];if(isNaN(h)){Je("KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oo,s=e.length-1;let o=1;for(let l=1;l<s;++l){let u=!1;const h=e[l],f=e[l+1];if(h!==f&&(l!==1||h!==e[0]))if(i)u=!0;else{const g=l*n,p=g-n,_=g+n;for(let S=0;S!==n;++S){const b=t[g+S];if(b!==t[p+S]||b!==t[_+S]){u=!0;break}}}if(u){if(l!==o){e[o]=e[l];const g=l*n,p=o*n;for(let _=0;_!==n;++_)t[p+_]=t[g+_]}++o}}if(s>0){e[o]=e[s];for(let l=s*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[l+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=ks;class as extends Kn{constructor(e,t,n){super(e,t,n)}}as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Os;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;class of extends Kn{constructor(e,t,n,i){super(e,t,n,i)}}of.prototype.ValueTypeName="color";class es extends Kn{constructor(e,t,n,i){super(e,t,n,i)}}es.prototype.ValueTypeName="number";class hy extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(n-t)/(i-t);let h=e*l;for(let f=h+l;h!==f;h+=4)Yn.slerpFlat(s,0,o,h-l,o,h,u);return s}}class ts extends Kn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new hy(this.times,this.values,this.getValueSize(),e)}}ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends Kn{constructor(e,t,n){super(e,t,n)}}os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Os;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends Kn{constructor(e,t,n,i){super(e,t,n,i)}}ns.prototype.ValueTypeName="vector";class dy{constructor(e="",t=-1,n=[],i=Pv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,l=n.length;o!==l;++o)t.push(py(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let l=0;l<s;l++){let u=[],h=[];u.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);const f=ay(u);u=Dh(u,1,f),h=Dh(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),o.push(new es(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],f=h.name.match(s);if(f&&f.length>1){const g=f[1];let p=i[g];p||(i[g]=p=[]),p.push(h)}}const o=[];for(const l in i)o.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return o}static parseAnimation(e,t){if(Ge("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Je("AnimationClip: No animation in JSONLoader data."),null;const n=function(g,p,_,S,b){if(_.length!==0){const x=[],y=[];af(_,x,y,S),x.length!==0&&b.push(new g(p,x,y))}},i=[],s=e.name||"default",o=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const p=h[g].keys;if(!(!p||p.length===0))if(p[0].morphTargets){const _={};let S;for(S=0;S<p.length;S++)if(p[S].morphTargets)for(let b=0;b<p[S].morphTargets.length;b++)_[p[S].morphTargets[b]]=-1;for(const b in _){const x=[],y=[];for(let C=0;C!==p[S].morphTargets.length;++C){const L=p[S];x.push(L.time),y.push(L.morphTarget===b?1:0)}i.push(new es(".morphTargetInfluence["+b+"]",x,y))}u=_.length*o}else{const _=".bones["+t[g].name+"]";n(ns,_+".position",p,"pos",i),n(ts,_+".quaternion",p,"rot",i),n(ns,_+".scale",p,"scl",i)}}return i.length===0?null:new this(s,u,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function fy(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return of;case"quaternion":return ts;case"bool":case"boolean":return as;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function py(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fy(r.type);if(r.times===void 0){const t=[],n=[];af(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const wi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Fh(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Fh(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Fh(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class my{constructor(e,t,n){const i=this;let s=!1,o=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,l),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,l),o===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,g){return h.push(f,g),this},this.removeHandler=function(f){const g=h.indexOf(f);return g!==-1&&h.splice(g,2),this},this.getHandler=function(f){for(let g=0,p=h.length;g<p;g+=2){const _=h[g],S=h[g+1];if(_.global&&(_.lastIndex=0),_.test(f))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const gy=new my;class Tr{constructor(e){this.manager=e!==void 0?e:gy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class _y extends Error{constructor(e,t){super(e),this.response=t}}class Xl extends Tr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),l=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Ge("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=bi[e],g=h.body.getReader(),p=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),_=p?parseInt(p):0,S=_!==0;let b=0;const x=new ReadableStream({start(y){C();function C(){g.read().then(({done:L,value:D})=>{if(L)y.close();else{b+=D.byteLength;const O=new ProgressEvent("progress",{lengthComputable:S,loaded:b,total:_});for(let P=0,z=f.length;P<z;P++){const A=f[P];A.onProgress&&A.onProgress(O)}y.enqueue(D),C()}},L=>{y.error(L)})}}});return new Response(x)}else throw new _y(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,l));case"json":return h.json();default:if(l==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(l),p=g&&g[1]?g[1].toLowerCase():void 0,_=new TextDecoder(p);return h.arrayBuffer().then(S=>_.decode(S))}}}).then(h=>{wi.add(`file:${e}`,h);const f=bi[e];delete bi[e];for(let g=0,p=f.length;g<p;g++){const _=f[g];_.onLoad&&_.onLoad(h)}}).catch(h=>{const f=bi[e];if(f===void 0)throw this.manager.itemError(e),h;delete bi[e];for(let g=0,p=f.length;g<p;g++){const _=f[g];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vr=new WeakMap;class vy extends Tr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let g=Vr.get(o);g===void 0&&(g=[],Vr.set(o,g)),g.push({onLoad:t,onError:i})}return o}const l=zs("img");function u(){f(),t&&t(this);const g=Vr.get(this)||[];for(let p=0;p<g.length;p++){const _=g[p];_.onLoad&&_.onLoad(this)}Vr.delete(this),s.manager.itemEnd(e)}function h(g){f(),i&&i(g),wi.remove(`image:${e}`);const p=Vr.get(this)||[];for(let _=0;_<p.length;_++){const S=p[_];S.onError&&S.onError(g)}Vr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,l),s.manager.itemStart(e),l.src=e,l}}class cf extends Tr{constructor(e){super(e)}load(e,t,n,i){const s=new on,o=new vy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ho extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class xy extends ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const dc=new ot,Nh=new H,Uh=new H;class $l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Bs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const za=new H,Va=new Yn,ii=new H;class lf extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(za,Va,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(za,Va,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Va,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new H,Oh=new Xe,kh=new Xe;class Sn extends lf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Oh,kh),t.subVectors(kh,Oh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class yy extends $l{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sy extends ho{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new yy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class My extends $l{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ey extends ho{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new My}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fo extends lf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=f*this.view.offsetY,u=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class by extends $l{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uf extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new by}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ls{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const fc=new WeakMap;class Ty extends Tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ge("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ge("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{if(fc.has(o)===!0)i&&i(fc.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(h),s.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,l.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const u=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return wi.add(`image-bitmap:${e}`,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),fc.set(u,h),wi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,u),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Hr=-90,Gr=1;class wy extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Sn(Hr,Gr,e,t);i.layers=this.layers,this.add(i);const s=new Sn(Hr,Gr,e,t);s.layers=this.layers,this.add(s);const o=new Sn(Hr,Gr,e,t);o.layers=this.layers,this.add(o);const l=new Sn(Hr,Gr,e,t);l.layers=this.layers,this.add(l);const u=new Sn(Hr,Gr,e,t);u.layers=this.layers,this.add(u);const h=new Sn(Hr,Gr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,l,u]=t;for(const h of t)this.remove(h);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,h,f]=this.children,g=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(g,p,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Ay extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jl="\\[\\]\\.:\\/",Ry=new RegExp("["+jl+"]","g"),ql="[^"+jl+"]",Cy="[^"+jl.replace("\\.","")+"]",Py=/((?:WC+[\/:])*)/.source.replace("WC",ql),Ly=/(WCOD+)?/.source.replace("WCOD",Cy),Iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),Dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),Fy=new RegExp("^"+Py+Ly+Iy+Dy+"$"),Ny=["material","materials","bones","map"];class Uy{constructor(e,t,n){const i=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Dt{constructor(e,t,n){this.path=t,this.parsedPath=n||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,n):new Dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ry,"")}static parseTrackName(e){const t=Fy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Ny.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const l=s[o];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=Uy;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Bh(r,e,t,n){const i=Oy(n);switch(t){case zd:return r*e;case Al:return r*e/i.components*i.byteLength;case Rl:return r*e/i.components*i.byteLength;case Jr:return r*e*2/i.components*i.byteLength;case Cl:return r*e*2/i.components*i.byteLength;case Vd:return r*e*3/i.components*i.byteLength;case Bn:return r*e*4/i.components*i.byteLength;case Pl:return r*e*4/i.components*i.byteLength;case ja:case qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Ka:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Uc:return Math.max(r,16)*Math.max(e,8)/4;case Dc:case Nc:return Math.max(r,8)*Math.max(e,8)/2;case Oc:case kc:case zc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case $c:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rl:case sl:case al:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ol:case cl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ll:case ul:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Oy(r){switch(r){case wn:case Ud:return{byteLength:1,components:1};case Ns:case Od:case Pi:return{byteLength:2,components:1};case Tl:case wl:return{byteLength:2,components:4};case fi:case bl:case kn:return{byteLength:4,components:1};case kd:case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);function hf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ky(r){const e=new WeakMap;function t(l,u){const h=l.array,f=l.usage,g=h.byteLength,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=r.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,u,h){const f=u.array,g=u.updateRanges;if(r.bindBuffer(h,l),g.length===0)r.bufferSubData(h,0,f);else{g.sort((_,S)=>_.start-S.start);let p=0;for(let _=1;_<g.length;_++){const S=g[p],b=g[_];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++p,g[p]=b)}g.length=p+1;for(let _=0,S=g.length;_<S;_++){const b=g[_];r.bufferSubData(h,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(r.deleteBuffer(u.buffer),e.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:i,remove:s,update:o}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zy=`#ifdef USE_ALPHAHASH
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
#endif`,Vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
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
#endif`,$y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
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
#endif`,qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zy=`#ifdef USE_IRIDESCENCE
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
#endif`,Qy=`#ifdef USE_BUMPMAP
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cS=`#define PI 3.141592653589793
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
} // validated`,lS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uS=`vec3 transformedNormal = objectNormal;
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
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",gS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_S=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wS=`#ifdef USE_GRADIENTMAP
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
}`,AS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PS=`uniform bool receiveShadow;
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
#endif`,LS=`#ifdef USE_ENVMAP
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
#endif`,IS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,US=`PhysicalMaterial material;
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
#endif`,OS=`uniform sampler2D dfgLUT;
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
}`,kS=`
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
#endif`,BS=`#if defined( RE_IndirectDiffuse )
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
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qS=`#if defined( USE_POINTS_UV )
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
#endif`,YS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eM=`#ifdef USE_MORPHTARGETS
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
#endif`,tM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oM=`#ifdef USE_NORMALMAP
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
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EM=`float getShadowMask() {
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
}`,bM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TM=`#ifdef USE_SKINNING
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
#endif`,wM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AM=`#ifdef USE_SKINNING
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
#endif`,RM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IM=`#ifdef USE_TRANSMISSION
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
#endif`,DM=`#ifdef USE_TRANSMISSION
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BM=`uniform sampler2D t2D;
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`#include <common>
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
}`,XM=`#if DEPTH_PACKING == 3200
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
}`,$M=`#define DISTANCE
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
}`,jM=`#define DISTANCE
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`uniform float scale;
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
}`,JM=`uniform vec3 diffuse;
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
}`,ZM=`#include <common>
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
}`,QM=`uniform vec3 diffuse;
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
}`,eE=`#define LAMBERT
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
}`,tE=`#define LAMBERT
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
}`,nE=`#define MATCAP
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
}`,iE=`#define MATCAP
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
}`,rE=`#define NORMAL
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
}`,sE=`#define NORMAL
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
}`,aE=`#define PHONG
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
}`,oE=`#define PHONG
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
}`,cE=`#define STANDARD
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
}`,lE=`#define STANDARD
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
}`,uE=`#define TOON
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
}`,hE=`#define TOON
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
}`,dE=`uniform float size;
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
}`,fE=`uniform vec3 diffuse;
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
}`,pE=`#include <common>
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
}`,mE=`uniform vec3 color;
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
}`,gE=`uniform float rotation;
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
}`,_E=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:By,alphahash_pars_fragment:zy,alphamap_fragment:Vy,alphamap_pars_fragment:Hy,alphatest_fragment:Gy,alphatest_pars_fragment:Wy,aomap_fragment:Xy,aomap_pars_fragment:$y,batching_pars_vertex:jy,batching_vertex:qy,begin_vertex:Yy,beginnormal_vertex:Ky,bsdfs:Jy,iridescence_fragment:Zy,bumpmap_pars_fragment:Qy,clipping_planes_fragment:eS,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:rS,color_pars_fragment:sS,color_pars_vertex:aS,color_vertex:oS,common:cS,cube_uv_reflection_fragment:lS,defaultnormal_vertex:uS,displacementmap_pars_vertex:hS,displacementmap_vertex:dS,emissivemap_fragment:fS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:gS,envmap_fragment:_S,envmap_common_pars_fragment:vS,envmap_pars_fragment:xS,envmap_pars_vertex:yS,envmap_physical_pars_fragment:LS,envmap_vertex:SS,fog_vertex:MS,fog_pars_vertex:ES,fog_fragment:bS,fog_pars_fragment:TS,gradientmap_pars_fragment:wS,lightmap_pars_fragment:AS,lights_lambert_fragment:RS,lights_lambert_pars_fragment:CS,lights_pars_begin:PS,lights_toon_fragment:IS,lights_toon_pars_fragment:DS,lights_phong_fragment:FS,lights_phong_pars_fragment:NS,lights_physical_fragment:US,lights_physical_pars_fragment:OS,lights_fragment_begin:kS,lights_fragment_maps:BS,lights_fragment_end:zS,logdepthbuf_fragment:VS,logdepthbuf_pars_fragment:HS,logdepthbuf_pars_vertex:GS,logdepthbuf_vertex:WS,map_fragment:XS,map_pars_fragment:$S,map_particle_fragment:jS,map_particle_pars_fragment:qS,metalnessmap_fragment:YS,metalnessmap_pars_fragment:KS,morphinstance_vertex:JS,morphcolor_vertex:ZS,morphnormal_vertex:QS,morphtarget_pars_vertex:eM,morphtarget_vertex:tM,normal_fragment_begin:nM,normal_fragment_maps:iM,normal_pars_fragment:rM,normal_pars_vertex:sM,normal_vertex:aM,normalmap_pars_fragment:oM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:lM,clearcoat_pars_fragment:uM,iridescence_pars_fragment:hM,opaque_fragment:dM,packing:fM,premultiplied_alpha_fragment:pM,project_vertex:mM,dithering_fragment:gM,dithering_pars_fragment:_M,roughnessmap_fragment:vM,roughnessmap_pars_fragment:xM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:SM,shadowmap_vertex:MM,shadowmask_pars_fragment:EM,skinbase_vertex:bM,skinning_pars_vertex:TM,skinning_vertex:wM,skinnormal_vertex:AM,specularmap_fragment:RM,specularmap_pars_fragment:CM,tonemapping_fragment:PM,tonemapping_pars_fragment:LM,transmission_fragment:IM,transmission_pars_fragment:DM,uv_pars_fragment:FM,uv_pars_vertex:NM,uv_vertex:UM,worldpos_vertex:OM,background_vert:kM,background_frag:BM,backgroundCube_vert:zM,backgroundCube_frag:VM,cube_vert:HM,cube_frag:GM,depth_vert:WM,depth_frag:XM,distance_vert:$M,distance_frag:jM,equirect_vert:qM,equirect_frag:YM,linedashed_vert:KM,linedashed_frag:JM,meshbasic_vert:ZM,meshbasic_frag:QM,meshlambert_vert:eE,meshlambert_frag:tE,meshmatcap_vert:nE,meshmatcap_frag:iE,meshnormal_vert:rE,meshnormal_frag:sE,meshphong_vert:aE,meshphong_frag:oE,meshphysical_vert:cE,meshphysical_frag:lE,meshtoon_vert:uE,meshtoon_frag:hE,points_vert:dE,points_frag:fE,shadow_vert:pE,shadow_frag:mE,sprite_vert:gE,sprite_frag:_E},Re={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ai={basic:{uniforms:yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:yn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:yn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:yn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Qe(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:yn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:yn([Re.points,Re.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:yn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:yn([Re.common,Re.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:yn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:yn([Re.sprite,Re.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:yn([Re.common,Re.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:yn([Re.lights,Re.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};ai.physical={uniforms:yn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Ha={r:0,b:0,g:0},hr=new pi,vE=new ot;function xE(r,e,t,n,i,s){const o=new Qe(0);let l=i===!0?0:1,u,h,f=null,g=0,p=null;function _(C){let L=C.isScene===!0?C.background:null;if(L&&L.isTexture){const D=C.backgroundBlurriness>0;L=e.get(L,D)}return L}function S(C){let L=!1;const D=_(C);D===null?x(o,l):D&&D.isColor&&(x(D,1),L=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,s):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(C,L){const D=_(L);D&&(D.isCubeTexture||D.mapping===co)?(h===void 0&&(h=new $t(new rs(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Qr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),hr.copy(L.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vE.makeRotationFromEuler(hr)),h.material.toneMapped=yt.getTransfer(D.colorSpace)!==Lt,(f!==D||g!==D.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,f=D,g=D.version,p=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new $t(new xr(2,2),new mi({name:"BackgroundMaterial",uniforms:Qr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,u.material.toneMapped=yt.getTransfer(D.colorSpace)!==Lt,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||g!==D.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=D,g=D.version,p=r.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function x(C,L){C.getRGB(Ha,sf(r)),t.buffers.color.setClear(Ha.r,Ha.g,Ha.b,L,s)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,L=1){o.set(C),l=L,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,x(o,l)},render:S,addToRenderList:b,dispose:y}}function yE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null);let s=i,o=!1;function l(B,Y,Z,K,ie){let J=!1;const te=g(B,K,Z,Y);s!==te&&(s=te,h(s.object)),J=_(B,K,Z,ie),J&&S(B,K,Z,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,D(B,Y,Z,K),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function u(){return r.createVertexArray()}function h(B){return r.bindVertexArray(B)}function f(B){return r.deleteVertexArray(B)}function g(B,Y,Z,K){const ie=K.wireframe===!0;let J=n[Y.id];J===void 0&&(J={},n[Y.id]=J);const te=B.isInstancedMesh===!0?B.id:0;let pe=J[te];pe===void 0&&(pe={},J[te]=pe);let _e=pe[Z.id];_e===void 0&&(_e={},pe[Z.id]=_e);let Pe=_e[ie];return Pe===void 0&&(Pe=p(u()),_e[ie]=Pe),Pe}function p(B){const Y=[],Z=[],K=[];for(let ie=0;ie<t;ie++)Y[ie]=0,Z[ie]=0,K[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Z,attributeDivisors:K,object:B,attributes:{},index:null}}function _(B,Y,Z,K){const ie=s.attributes,J=Y.attributes;let te=0;const pe=Z.getAttributes();for(const _e in pe)if(pe[_e].location>=0){const Ue=ie[_e];let Le=J[_e];if(Le===void 0&&(_e==="instanceMatrix"&&B.instanceMatrix&&(Le=B.instanceMatrix),_e==="instanceColor"&&B.instanceColor&&(Le=B.instanceColor)),Ue===void 0||Ue.attribute!==Le||Le&&Ue.data!==Le.data)return!0;te++}return s.attributesNum!==te||s.index!==K}function S(B,Y,Z,K){const ie={},J=Y.attributes;let te=0;const pe=Z.getAttributes();for(const _e in pe)if(pe[_e].location>=0){let Ue=J[_e];Ue===void 0&&(_e==="instanceMatrix"&&B.instanceMatrix&&(Ue=B.instanceMatrix),_e==="instanceColor"&&B.instanceColor&&(Ue=B.instanceColor));const Le={};Le.attribute=Ue,Ue&&Ue.data&&(Le.data=Ue.data),ie[_e]=Le,te++}s.attributes=ie,s.attributesNum=te,s.index=K}function b(){const B=s.newAttributes;for(let Y=0,Z=B.length;Y<Z;Y++)B[Y]=0}function x(B){y(B,0)}function y(B,Y){const Z=s.newAttributes,K=s.enabledAttributes,ie=s.attributeDivisors;Z[B]=1,K[B]===0&&(r.enableVertexAttribArray(B),K[B]=1),ie[B]!==Y&&(r.vertexAttribDivisor(B,Y),ie[B]=Y)}function C(){const B=s.newAttributes,Y=s.enabledAttributes;for(let Z=0,K=Y.length;Z<K;Z++)Y[Z]!==B[Z]&&(r.disableVertexAttribArray(Z),Y[Z]=0)}function L(B,Y,Z,K,ie,J,te){te===!0?r.vertexAttribIPointer(B,Y,Z,ie,J):r.vertexAttribPointer(B,Y,Z,K,ie,J)}function D(B,Y,Z,K){b();const ie=K.attributes,J=Z.getAttributes(),te=Y.defaultAttributeValues;for(const pe in J){const _e=J[pe];if(_e.location>=0){let Pe=ie[pe];if(Pe===void 0&&(pe==="instanceMatrix"&&B.instanceMatrix&&(Pe=B.instanceMatrix),pe==="instanceColor"&&B.instanceColor&&(Pe=B.instanceColor)),Pe!==void 0){const Ue=Pe.normalized,Le=Pe.itemSize,et=e.get(Pe);if(et===void 0)continue;const nt=et.buffer,dt=et.type,ce=et.bytesPerElement,ye=dt===r.INT||dt===r.UNSIGNED_INT||Pe.gpuType===bl;if(Pe.isInterleavedBufferAttribute){const se=Pe.data,Ee=se.stride,$e=Pe.offset;if(se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<_e.locationSize;Ke++)y(_e.location+Ke,se.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ke=0;Ke<_e.locationSize;Ke++)x(_e.location+Ke);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let Ke=0;Ke<_e.locationSize;Ke++)L(_e.location+Ke,Le/_e.locationSize,dt,Ue,Ee*ce,($e+Le/_e.locationSize*Ke)*ce,ye)}else{if(Pe.isInstancedBufferAttribute){for(let se=0;se<_e.locationSize;se++)y(_e.location+se,Pe.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let se=0;se<_e.locationSize;se++)x(_e.location+se);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let se=0;se<_e.locationSize;se++)L(_e.location+se,Le/_e.locationSize,dt,Ue,Le*ce,Le/_e.locationSize*se*ce,ye)}}else if(te!==void 0){const Ue=te[pe];if(Ue!==void 0)switch(Ue.length){case 2:r.vertexAttrib2fv(_e.location,Ue);break;case 3:r.vertexAttrib3fv(_e.location,Ue);break;case 4:r.vertexAttrib4fv(_e.location,Ue);break;default:r.vertexAttrib1fv(_e.location,Ue)}}}}C()}function O(){F();for(const B in n){const Y=n[B];for(const Z in Y){const K=Y[Z];for(const ie in K){const J=K[ie];for(const te in J)f(J[te].object),delete J[te];delete K[ie]}}delete n[B]}}function P(B){if(n[B.id]===void 0)return;const Y=n[B.id];for(const Z in Y){const K=Y[Z];for(const ie in K){const J=K[ie];for(const te in J)f(J[te].object),delete J[te];delete K[ie]}}delete n[B.id]}function z(B){for(const Y in n){const Z=n[Y];for(const K in Z){const ie=Z[K];if(ie[B.id]===void 0)continue;const J=ie[B.id];for(const te in J)f(J[te].object),delete J[te];delete ie[B.id]}}}function A(B){for(const Y in n){const Z=n[Y],K=B.isInstancedMesh===!0?B.id:0,ie=Z[K];if(ie!==void 0){for(const J in ie){const te=ie[J];for(const pe in te)f(te[pe].object),delete te[pe];delete ie[J]}delete Z[K],Object.keys(Z).length===0&&delete n[Y]}}}function F(){k(),o=!0,s!==i&&(s=i,h(s.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:F,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:x,disableUnusedAttributes:C}}function SE(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function o(h,f,g){g!==0&&(r.drawArraysInstanced(n,h,f,g),t.update(f,n,g))}function l(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,g);let _=0;for(let S=0;S<g;S++)_+=f[S];t.update(_,n,1)}function u(h,f,g,p){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<h.length;S++)o(h[S],f[S],p[S]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,f,0,p,0,g);let S=0;for(let b=0;b<g;b++)S+=f[b]*p[b];t.update(S,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function ME(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(z){return!(z!==Bn&&n.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(z){const A=z===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==wn&&n.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==kn&&!A)}function u(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(Ge("WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const g=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:_,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:D,maxSamples:O,samples:P}}function EE(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new pr,l=new at,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){const _=g.length!==0||p||n!==0||i;return i=p,n=g.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,p){t=f(g,p,0)},this.setState=function(g,p,_){const S=g.clippingPlanes,b=g.clipIntersection,x=g.clipShadows,y=r.get(g);if(!i||S===null||S.length===0||s&&!x)s?f(null):h();else{const C=s?0:n,L=C*4;let D=y.clippingState||null;u.value=D,D=f(S,p,L,_);for(let O=0;O!==L;++O)D[O]=t[O];y.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(g,p,_,S){const b=g!==null?g.length:0;let x=null;if(b!==0){if(x=u.value,S!==!0||x===null){const y=_+b*4,C=p.matrixWorldInverse;l.getNormalMatrix(C),(x===null||x.length<y)&&(x=new Float32Array(y));for(let L=0,D=_;L!==b;++L,D+=4)o.copy(g[L]).applyMatrix4(C,l),o.normal.toArray(x,D),x[D+3]=o.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const qi=4,zh=[.125,.215,.35,.446,.526,.582],gr=20,bE=256,ys=new fo,Vh=new Qe;let pc=null,mc=0,gc=0,_c=!1;const TE=new H;class Hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:l=TE}=s;pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,i,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=_c,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Pi,format:Bn,colorSpace:Mn,depthBuffer:!1},i=Gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wE(s)),this._blurMaterial=RE(s,e,t),this._ggxMaterial=AE(s,e,t)}return i}_compileMaterial(e){const t=new $t(new qt,e);this._renderer.compile(t,ys)}_sceneToCubeUV(e,t,n,i,s){const u=new Sn(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,_=g.toneMapping;g.getClearColor(Vh),g.toneMapping=ui,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(i),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $t(new rs,new li({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let y=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,y=!0):(x.color.copy(Vh),y=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(u.up.set(0,h[L],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[L],s.y,s.z)):D===1?(u.up.set(0,0,h[L]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[L],s.z)):(u.up.set(0,h[L],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[L]));const O=this._cubeSize;Wr(i,D*O,L>2?O:0,O,O),g.setRenderTarget(i),y&&g.render(b,u),g.render(e,u)}g.toneMapping=_,g.autoClear=p,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Mr||e.mapping===Kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;Wr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;const u=o.uniforms,h=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-f*f),p=0+h*1.25,_=g*p,{_lodMax:S}=this,b=this._sizeLods[n],x=3*b*(n>S-qi?n-S+qi:0),y=4*(this._cubeSize-b);u.envMap.value=e.texture,u.roughness.value=_,u.mipInt.value=S-t,Wr(s,x,y,3*b,2*b),i.setRenderTarget(s),i.render(l,ys),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=S-n,Wr(e,x,y,3*b,2*b),i.setRenderTarget(e),i.render(l,ys)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const f=3,g=this._lodMeshes[i];g.material=h;const p=h.uniforms,_=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*gr-1),b=s/S,x=isFinite(s)?1+Math.floor(f*b):gr;x>gr&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${gr}`);const y=[];let C=0;for(let z=0;z<gr;++z){const A=z/b,F=Math.exp(-A*A/2);y.push(F),z===0?C+=F:z<x&&(C+=2*F)}for(let z=0;z<y.length;z++)y[z]=y[z]/C;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=y,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:L}=this;p.dTheta.value=S,p.mipInt.value=L-n;const D=this._sizeLods[i],O=3*D*(i>L-qi?i-L+qi:0),P=4*(this._cubeSize-D);Wr(t,O,P,3*D,2*D),u.setRenderTarget(t),u.render(g,ys)}}function wE(r){const e=[],t=[],n=[];let i=r;const s=r-qi+1+zh.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);e.push(l);let u=1/l;o>r-qi?u=zh[o-r+qi-1]:o===0&&(u=0),t.push(u);const h=1/(l-2),f=-h,g=1+h,p=[f,f,g,f,g,g,f,f,g,g,f,g],_=6,S=6,b=3,x=2,y=1,C=new Float32Array(b*S*_),L=new Float32Array(x*S*_),D=new Float32Array(y*S*_);for(let P=0;P<_;P++){const z=P%3*2/3-1,A=P>2?0:-1,F=[z,A,0,z+2/3,A,0,z+2/3,A+1,0,z,A,0,z+2/3,A+1,0,z,A+1,0];C.set(F,b*S*P),L.set(p,x*S*P);const k=[P,P,P,P,P,P];D.set(k,y*S*P)}const O=new qt;O.setAttribute("position",new hn(C,b)),O.setAttribute("uv",new hn(L,x)),O.setAttribute("faceIndex",new hn(D,y)),n.push(new $t(O,null)),i>qi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Gh(r,e,t){const n=new hi(r,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function AE(r,e,t){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:po(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function RE(r,e,t){const n=new Float32Array(gr),i=new H(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:po(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Wh(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:po(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Xh(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function po(){return`

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
	`}class df extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ef(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rs(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Ai});s.uniforms.tEquirect.value=t;const o=new $t(i,s),l=t.minFilter;return t.minFilter===Ti&&(t.minFilter=an),new wy(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}function CE(r){let e=new WeakMap,t=new WeakMap,n=null;function i(p,_=!1){return p==null?null:_?o(p):s(p)}function s(p){if(p&&p.isTexture){const _=p.mapping;if(_===No||_===Uo)if(e.has(p)){const S=e.get(p).texture;return l(S,p.mapping)}else{const S=p.image;if(S&&S.height>0){const b=new df(S.height);return b.fromEquirectangularTexture(r,p),e.set(p,b),p.addEventListener("dispose",h),l(b.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){const _=p.mapping,S=_===No||_===Uo,b=_===Mr||_===Kr;if(S||b){let x=t.get(p);const y=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==y)return n===null&&(n=new Hh(r)),x=S?n.fromEquirectangular(p,x):n.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),x.texture;if(x!==void 0)return x.texture;{const C=p.image;return S&&C&&C.height>0||b&&C&&u(C)?(n===null&&(n=new Hh(r)),x=S?n.fromEquirectangular(p):n.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),p.addEventListener("dispose",f),x.texture):null}}}return p}function l(p,_){return _===No?p.mapping=Mr:_===Uo&&(p.mapping=Kr),p}function u(p){let _=0;const S=6;for(let b=0;b<S;b++)p[b]!==void 0&&_++;return _===S}function h(p){const _=p.target;_.removeEventListener("dispose",h);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function f(p){const _=p.target;_.removeEventListener("dispose",f);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:g}}function PE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&to("WebGLRenderer: "+n+" extension not supported."),i}}}function LE(r,e,t,n){const i={},s=new WeakMap;function o(g){const p=g.target;p.index!==null&&e.remove(p.index);for(const S in p.attributes)e.remove(p.attributes[S]);p.removeEventListener("dispose",o),delete i[p.id];const _=s.get(p);_&&(e.remove(_),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(g,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,t.memory.geometries++),p}function u(g){const p=g.attributes;for(const _ in p)e.update(p[_],r.ARRAY_BUFFER)}function h(g){const p=[],_=g.index,S=g.attributes.position;let b=0;if(S===void 0)return;if(_!==null){const C=_.array;b=_.version;for(let L=0,D=C.length;L<D;L+=3){const O=C[L+0],P=C[L+1],z=C[L+2];p.push(O,P,P,z,z,O)}}else{const C=S.array;b=S.version;for(let L=0,D=C.length/3-1;L<D;L+=3){const O=L+0,P=L+1,z=L+2;p.push(O,P,P,z,z,O)}}const x=new(S.count>=65535?Yd:qd)(p,1);x.version=b;const y=s.get(g);y&&e.remove(y),s.set(g,x)}function f(g){const p=s.get(g);if(p){const _=g.index;_!==null&&p.version<_.version&&h(g)}else h(g);return s.get(g)}return{get:l,update:u,getWireframeAttribute:f}}function IE(r,e,t){let n;function i(p){n=p}let s,o;function l(p){s=p.type,o=p.bytesPerElement}function u(p,_){r.drawElements(n,_,s,p*o),t.update(_,n,1)}function h(p,_,S){S!==0&&(r.drawElementsInstanced(n,_,s,p*o,S),t.update(_,n,S))}function f(p,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,p,0,S);let x=0;for(let y=0;y<S;y++)x+=_[y];t.update(x,n,1)}function g(p,_,S,b){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p.length;y++)h(p[y]/o,_[y],b[y]);else{x.multiDrawElementsInstancedWEBGL(n,_,0,s,p,0,b,0,S);let y=0;for(let C=0;C<S;C++)y+=_[C]*b[C];t.update(y,n,1)}}this.setMode=i,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=g}function DE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function FE(r,e,t){const n=new WeakMap,i=new Bt;function s(o,l,u){const h=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=f!==void 0?f.length:0;let p=n.get(l);if(p===void 0||p.count!==g){let F=function(){z.dispose(),n.delete(l),l.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();const _=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],C=l.morphAttributes.color||[];let L=0;_===!0&&(L=1),S===!0&&(L=2),b===!0&&(L=3);let D=l.attributes.position.count*L,O=1;D>e.maxTextureSize&&(O=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const P=new Float32Array(D*O*4*g),z=new Xd(P,D,O,g);z.type=kn,z.needsUpdate=!0;const A=L*4;for(let k=0;k<g;k++){const B=x[k],Y=y[k],Z=C[k],K=D*O*4*k;for(let ie=0;ie<B.count;ie++){const J=ie*A;_===!0&&(i.fromBufferAttribute(B,ie),P[K+J+0]=i.x,P[K+J+1]=i.y,P[K+J+2]=i.z,P[K+J+3]=0),S===!0&&(i.fromBufferAttribute(Y,ie),P[K+J+4]=i.x,P[K+J+5]=i.y,P[K+J+6]=i.z,P[K+J+7]=0),b===!0&&(i.fromBufferAttribute(Z,ie),P[K+J+8]=i.x,P[K+J+9]=i.y,P[K+J+10]=i.z,P[K+J+11]=Z.itemSize===4?i.w:1)}}p={count:g,texture:z,size:new Xe(D,O)},n.set(l,p),l.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let b=0;b<h.length;b++)_+=h[b];const S=l.morphTargetsRelative?1:1-_;u.getUniforms().setValue(r,"morphTargetBaseInfluence",S),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function NE(r,e,t,n,i){let s=new WeakMap;function o(h){const f=i.render.frame,g=h.geometry,p=e.get(h,g);if(s.get(p)!==f&&(e.update(p),s.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return p}function l(){s=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:l}}const UE={[Rd]:"LINEAR_TONE_MAPPING",[Cd]:"REINHARD_TONE_MAPPING",[Pd]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[Id]:"AGX_TONE_MAPPING",[Dd]:"NEUTRAL_TONE_MAPPING",[Ld]:"CUSTOM_TONE_MAPPING"};function OE(r,e,t,n,i){const s=new hi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new hi(e,t,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new qt;l.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ht([0,2,0,0,2,0],2));const u=new iy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new $t(l,u),f=new fo(-1,1,1,-1,0,1);let g=null,p=null,_=!1,S,b=null,x=[],y=!1;this.setSize=function(C,L){s.setSize(C,L),o.setSize(C,L);for(let D=0;D<x.length;D++){const O=x[D];O.setSize&&O.setSize(C,L)}},this.setEffects=function(C){x=C,y=x.length>0&&x[0].isRenderPass===!0;const L=s.width,D=s.height;for(let O=0;O<x.length;O++){const P=x[O];P.setSize&&P.setSize(L,D)}},this.begin=function(C,L){if(_||C.toneMapping===ui&&x.length===0)return!1;if(b=L,L!==null){const D=L.width,O=L.height;(s.width!==D||s.height!==O)&&this.setSize(D,O)}return y===!1&&C.setRenderTarget(s),S=C.toneMapping,C.toneMapping=ui,!0},this.hasRenderPass=function(){return y},this.end=function(C,L){C.toneMapping=S,_=!0;let D=s,O=o;for(let P=0;P<x.length;P++){const z=x[P];if(z.enabled!==!1&&(z.render(C,O,D,L),z.needsSwap!==!1)){const A=D;D=O,O=A}}if(g!==C.outputColorSpace||p!==C.toneMapping){g=C.outputColorSpace,p=C.toneMapping,u.defines={},yt.getTransfer(g)===Lt&&(u.defines.SRGB_TRANSFER="");const P=UE[p];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(b),C.render(h,f),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o.dispose(),l.dispose(),u.dispose()}}const ff=new on,ml=new Hs(1,1),pf=new Xd,mf=new fx,gf=new ef,$h=[],jh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Kh=new Float32Array(4);function cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=$h[i];if(s===void 0&&(s=new Float32Array(i),$h[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function cn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function mo(r,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function kE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function BE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function zE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function VE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function HE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Kh.set(n),r.uniformMatrix2fv(this.addr,!1,Kh),ln(t,n)}}function GE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Yh.set(n),r.uniformMatrix3fv(this.addr,!1,Yh),ln(t,n)}}function WE(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;qh.set(n),r.uniformMatrix4fv(this.addr,!1,qh),ln(t,n)}}function XE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $E(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function jE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function qE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function YE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function KE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function JE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function ZE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function QE(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ml.compareFunction=t.isReversedDepthBuffer()?Il:Ll,s=ml):s=ff,t.setTexture2D(e||s,i)}function eb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mf,i)}function tb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gf,i)}function nb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pf,i)}function ib(r){switch(r){case 5126:return kE;case 35664:return BE;case 35665:return zE;case 35666:return VE;case 35674:return HE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return $E;case 35668:case 35672:return jE;case 35669:case 35673:return qE;case 5125:return YE;case 36294:return KE;case 36295:return JE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(r,e){r.uniform1fv(this.addr,e)}function sb(r,e){const t=cs(e,this.size,2);r.uniform2fv(this.addr,t)}function ab(r,e){const t=cs(e,this.size,3);r.uniform3fv(this.addr,t)}function ob(r,e){const t=cs(e,this.size,4);r.uniform4fv(this.addr,t)}function cb(r,e){const t=cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lb(r,e){const t=cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ub(r,e){const t=cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hb(r,e){r.uniform1iv(this.addr,e)}function db(r,e){r.uniform2iv(this.addr,e)}function fb(r,e){r.uniform3iv(this.addr,e)}function pb(r,e){r.uniform4iv(this.addr,e)}function mb(r,e){r.uniform1uiv(this.addr,e)}function gb(r,e){r.uniform2uiv(this.addr,e)}function _b(r,e){r.uniform3uiv(this.addr,e)}function vb(r,e){r.uniform4uiv(this.addr,e)}function xb(r,e,t){const n=this.cache,i=e.length,s=mo(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=ml:o=ff;for(let l=0;l!==i;++l)t.setTexture2D(e[l]||o,s[l])}function yb(r,e,t){const n=this.cache,i=e.length,s=mo(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mf,s[o])}function Sb(r,e,t){const n=this.cache,i=e.length,s=mo(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||gf,s[o])}function Mb(r,e,t){const n=this.cache,i=e.length,s=mo(t,i);cn(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||pf,s[o])}function Eb(r){switch(r){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return cb;case 35675:return lb;case 35676:return ub;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Mb}}class bb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}}class Tb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eb(t.type)}}class wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const vc=/(\w+)(\])?(\[|\.)?/g;function Jh(r,e){r.seq.push(e),r.map[e.id]=e}function Ab(r,e,t){const n=r.name,i=n.length;for(vc.lastIndex=0;;){const s=vc.exec(n),o=vc.lastIndex;let l=s[1];const u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&o+2===i){Jh(t,h===void 0?new bb(l,r,e):new Tb(l,r,e));break}else{let g=t.map[l];g===void 0&&(g=new wb(l),Jh(t,g)),t=g}}}class Ja{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);Ab(l,u,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Rb=37297;let Cb=0;function Pb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const Qh=new at;function Lb(r){yt._getMatrix(Qh,yt.workingColorSpace,r);const e=`mat3( ${Qh.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(r)){case Qa:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ed(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Pb(r.getShaderSource(e),l)}else return s}function Ib(r,e){const t=Lb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Db={[Rd]:"Linear",[Cd]:"Reinhard",[Pd]:"Cineon",[El]:"ACESFilmic",[Id]:"AgX",[Dd]:"Neutral",[Ld]:"Custom"};function Fb(r,e){const t=Db[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ga=new H;function Nb(){yt.getLuminanceCoefficients(Ga);const r=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Ob(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function Ts(r){return r!==""}function td(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(r){return r.replace(Bb,Vb)}const zb=new Map;function Vb(r,e){let t=lt[e];if(t===void 0){const n=zb.get(e);if(n!==void 0)t=lt[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(r){return r.replace(Hb,Gb)}function Gb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const Wb={[Xa]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function Xb(r){return Wb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $b={[Mr]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function jb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":$b[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const qb={[Kr]:"ENVMAP_MODE_REFRACTION"};function Yb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":qb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kb={[Ad]:"ENVMAP_BLENDING_MULTIPLY",[Av]:"ENVMAP_BLENDING_MIX",[Rv]:"ENVMAP_BLENDING_ADD"};function Jb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Kb[r.combine]||"ENVMAP_BLENDING_NONE"}function Zb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=Xb(t),h=jb(t),f=Yb(t),g=Jb(t),p=Zb(t),_=Ub(t),S=Ob(s),b=i.createProgram();let x,y,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ts).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ts).join(`
`),y.length>0&&(y+=`
`)):(x=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),y=[rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?lt.tonemapping_pars_fragment:"",t.toneMapping!==ui?Fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Ib("linearToOutputTexel",t.outputColorSpace),Nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=gl(o),o=td(o,t),o=nd(o,t),l=gl(l),l=td(l,t),l=nd(l,t),o=id(o),l=id(l),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=C+x+o,D=C+y+l,O=Zh(i,i.VERTEX_SHADER,L),P=Zh(i,i.FRAGMENT_SHADER,D);i.attachShader(b,O),i.attachShader(b,P),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function z(B){if(r.debug.checkShaderErrors){const Y=i.getProgramInfoLog(b)||"",Z=i.getShaderInfoLog(O)||"",K=i.getShaderInfoLog(P)||"",ie=Y.trim(),J=Z.trim(),te=K.trim();let pe=!0,_e=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,O,P);else{const Pe=ed(i,O,"vertex"),Ue=ed(i,P,"fragment");Je("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ie+`
`+Pe+`
`+Ue)}else ie!==""?Ge("WebGLProgram: Program Info Log:",ie):(J===""||te==="")&&(_e=!1);_e&&(B.diagnostics={runnable:pe,programLog:ie,vertexShader:{log:J,prefix:x},fragmentShader:{log:te,prefix:y}})}i.deleteShader(O),i.deleteShader(P),A=new Ja(i,b),F=kb(i,b)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let F;this.getAttributes=function(){return F===void 0&&z(this),F};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(b,Rb)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=O,this.fragmentShader=P,this}let eT=0;class tT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nT(e),t.set(e,n)),n}}class nT{constructor(e){this.id=eT++,this.code=e,this.usedTimes=0}}function iT(r,e,t,n,i,s){const o=new $d,l=new tT,u=new Set,h=[],f=new Map,g=n.logarithmicDepthBuffer;let p=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return u.add(A),A===0?"uv":`uv${A}`}function b(A,F,k,B,Y){const Z=B.fog,K=Y.geometry,ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,te=e.get(A.envMap||ie,J),pe=te&&te.mapping===co?te.image.height:null,_e=_[A.type];A.precision!==null&&(p=n.getMaxPrecision(A.precision),p!==A.precision&&Ge("WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const Pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ue=Pe!==void 0?Pe.length:0;let Le=0;K.morphAttributes.position!==void 0&&(Le=1),K.morphAttributes.normal!==void 0&&(Le=2),K.morphAttributes.color!==void 0&&(Le=3);let et,nt,dt,ce;if(_e){const ut=ai[_e];et=ut.vertexShader,nt=ut.fragmentShader}else et=A.vertexShader,nt=A.fragmentShader,l.update(A),dt=l.getVertexShaderID(A),ce=l.getFragmentShaderID(A);const ye=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),Ee=Y.isInstancedMesh===!0,$e=Y.isBatchedMesh===!0,Ke=!!A.map,Ct=!!A.matcap,mt=!!te,vt=!!A.aoMap,wt=!!A.lightMap,rt=!!A.bumpMap,Gt=!!A.normalMap,G=!!A.displacementMap,Ft=!!A.emissiveMap,gt=!!A.metalnessMap,Mt=!!A.roughnessMap,Ne=A.anisotropy>0,N=A.clearcoat>0,T=A.dispersion>0,W=A.iridescence>0,ae=A.sheen>0,fe=A.transmission>0,oe=Ne&&!!A.anisotropyMap,Oe=N&&!!A.clearcoatMap,be=N&&!!A.clearcoatNormalMap,We=N&&!!A.clearcoatRoughnessMap,Ye=W&&!!A.iridescenceMap,xe=W&&!!A.iridescenceThicknessMap,Me=ae&&!!A.sheenColorMap,ke=ae&&!!A.sheenRoughnessMap,Be=!!A.specularMap,Ie=!!A.specularColorMap,st=!!A.specularIntensityMap,X=fe&&!!A.transmissionMap,Te=fe&&!!A.thicknessMap,Se=!!A.gradientMap,Ce=!!A.alphaMap,$=A.alphaTest>0,V=!!A.alphaHash,De=!!A.extensions;let Ze=ui;A.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ze=r.toneMapping);const Et={shaderID:_e,shaderType:A.type,shaderName:A.name,vertexShader:et,fragmentShader:nt,defines:A.defines,customVertexShaderID:dt,customFragmentShaderID:ce,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:$e,batchingColor:$e&&Y._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Y.instanceColor!==null,instancingMorph:Ee&&Y.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Mn,alphaToCoverage:!!A.alphaToCoverage,map:Ke,matcap:Ct,envMap:mt,envMapMode:mt&&te.mapping,envMapCubeUVHeight:pe,aoMap:vt,lightMap:wt,bumpMap:rt,normalMap:Gt,displacementMap:G,emissiveMap:Ft,normalMapObjectSpace:Gt&&A.normalMapType===Dv,normalMapTangentSpace:Gt&&A.normalMapType===Gd,metalnessMap:gt,roughnessMap:Mt,anisotropy:Ne,anisotropyMap:oe,clearcoat:N,clearcoatMap:Oe,clearcoatNormalMap:be,clearcoatRoughnessMap:We,dispersion:T,iridescence:W,iridescenceMap:Ye,iridescenceThicknessMap:xe,sheen:ae,sheenColorMap:Me,sheenRoughnessMap:ke,specularMap:Be,specularColorMap:Ie,specularIntensityMap:st,transmission:fe,transmissionMap:X,thicknessMap:Te,gradientMap:Se,opaque:A.transparent===!1&&A.blending===$r&&A.alphaToCoverage===!1,alphaMap:Ce,alphaTest:$,alphaHash:V,combine:A.combine,mapUv:Ke&&S(A.map.channel),aoMapUv:vt&&S(A.aoMap.channel),lightMapUv:wt&&S(A.lightMap.channel),bumpMapUv:rt&&S(A.bumpMap.channel),normalMapUv:Gt&&S(A.normalMap.channel),displacementMapUv:G&&S(A.displacementMap.channel),emissiveMapUv:Ft&&S(A.emissiveMap.channel),metalnessMapUv:gt&&S(A.metalnessMap.channel),roughnessMapUv:Mt&&S(A.roughnessMap.channel),anisotropyMapUv:oe&&S(A.anisotropyMap.channel),clearcoatMapUv:Oe&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:ke&&S(A.sheenRoughnessMap.channel),specularMapUv:Be&&S(A.specularMap.channel),specularColorMapUv:Ie&&S(A.specularColorMap.channel),specularIntensityMapUv:st&&S(A.specularIntensityMap.channel),transmissionMapUv:X&&S(A.transmissionMap.channel),thicknessMapUv:Te&&S(A.thicknessMap.channel),alphaMapUv:Ce&&S(A.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Gt||Ne),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!K.attributes.uv&&(Ke||Ce),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||K.attributes.normal===void 0&&Gt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:se,skinning:Y.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Le,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ke&&A.map.isVideoTexture===!0&&yt.getTransfer(A.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ft&&A.emissiveMap.isVideoTexture===!0&&yt.getTransfer(A.emissiveMap.colorSpace)===Lt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===On,flipSided:A.side===En,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:De&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&A.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function x(A){const F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)F.push(k),F.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(y(F,A),C(F,A),F.push(r.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function y(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function C(A,F){o.disableAll(),F.instancing&&o.enable(0),F.instancingColor&&o.enable(1),F.instancingMorph&&o.enable(2),F.matcap&&o.enable(3),F.envMap&&o.enable(4),F.normalMapObjectSpace&&o.enable(5),F.normalMapTangentSpace&&o.enable(6),F.clearcoat&&o.enable(7),F.iridescence&&o.enable(8),F.alphaTest&&o.enable(9),F.vertexColors&&o.enable(10),F.vertexAlphas&&o.enable(11),F.vertexUv1s&&o.enable(12),F.vertexUv2s&&o.enable(13),F.vertexUv3s&&o.enable(14),F.vertexTangents&&o.enable(15),F.anisotropy&&o.enable(16),F.alphaHash&&o.enable(17),F.batching&&o.enable(18),F.dispersion&&o.enable(19),F.batchingColor&&o.enable(20),F.gradientMap&&o.enable(21),A.push(o.mask),o.disableAll(),F.fog&&o.enable(0),F.useFog&&o.enable(1),F.flatShading&&o.enable(2),F.logarithmicDepthBuffer&&o.enable(3),F.reversedDepthBuffer&&o.enable(4),F.skinning&&o.enable(5),F.morphTargets&&o.enable(6),F.morphNormals&&o.enable(7),F.morphColors&&o.enable(8),F.premultipliedAlpha&&o.enable(9),F.shadowMapEnabled&&o.enable(10),F.doubleSided&&o.enable(11),F.flipSided&&o.enable(12),F.useDepthPacking&&o.enable(13),F.dithering&&o.enable(14),F.transmission&&o.enable(15),F.sheen&&o.enable(16),F.opaque&&o.enable(17),F.pointsUvs&&o.enable(18),F.decodeVideoTexture&&o.enable(19),F.decodeVideoTextureEmissive&&o.enable(20),F.alphaToCoverage&&o.enable(21),A.push(o.mask)}function L(A){const F=_[A.type];let k;if(F){const B=ai[F];k=ey.clone(B.uniforms)}else k=A.uniforms;return k}function D(A,F){let k=f.get(F);return k!==void 0?++k.usedTimes:(k=new Qb(r,F,A,i),h.push(k),f.set(F,k)),k}function O(A){if(--A.usedTimes===0){const F=h.indexOf(A);h[F]=h[h.length-1],h.pop(),f.delete(A.cacheKey),A.destroy()}}function P(A){l.remove(A)}function z(){l.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:L,acquireProgram:D,releaseProgram:O,releaseShaderCache:P,programs:h,dispose:z}}function rT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function n(o){r.delete(o)}function i(o,l,u){r.get(o)[l]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function sT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function sd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ad(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(p){let _=0;return p.isInstancedMesh&&(_+=2),p.isSkinnedMesh&&(_+=1),_}function l(p,_,S,b,x,y){let C=r[e];return C===void 0?(C={id:p.id,object:p,geometry:_,material:S,materialVariant:o(p),groupOrder:b,renderOrder:p.renderOrder,z:x,group:y},r[e]=C):(C.id=p.id,C.object=p,C.geometry=_,C.material=S,C.materialVariant=o(p),C.groupOrder=b,C.renderOrder=p.renderOrder,C.z=x,C.group=y),e++,C}function u(p,_,S,b,x,y){const C=l(p,_,S,b,x,y);S.transmission>0?n.push(C):S.transparent===!0?i.push(C):t.push(C)}function h(p,_,S,b,x,y){const C=l(p,_,S,b,x,y);S.transmission>0?n.unshift(C):S.transparent===!0?i.unshift(C):t.unshift(C)}function f(p,_){t.length>1&&t.sort(p||sT),n.length>1&&n.sort(_||sd),i.length>1&&i.sort(_||sd)}function g(){for(let p=e,_=r.length;p<_;p++){const S=r[p];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:u,unshift:h,finish:g,sort:f}}function aT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ad,r.set(n,[o])):i>=s.length?(o=new ad,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function oT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Qe};break;case"SpotLight":t={position:new H,direction:new H,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function cT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let lT=0;function uT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hT(r){const e=new oT,t=cT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new H);const i=new H,s=new ot,o=new ot;function l(h){let f=0,g=0,p=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let _=0,S=0,b=0,x=0,y=0,C=0,L=0,D=0,O=0,P=0,z=0;h.sort(uT);for(let F=0,k=h.length;F<k;F++){const B=h[F],Y=B.color,Z=B.intensity,K=B.distance;let ie=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Jr?ie=B.shadow.map.texture:ie=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)f+=Y.r*Z,g+=Y.g*Z,p+=Y.b*Z;else if(B.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(B.sh.coefficients[J],Z);z++}else if(B.isDirectionalLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const te=B.shadow,pe=t.get(B);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,n.directionalShadow[_]=pe,n.directionalShadowMap[_]=ie,n.directionalShadowMatrix[_]=B.shadow.matrix,C++}n.directional[_]=J,_++}else if(B.isSpotLight){const J=e.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(Y).multiplyScalar(Z),J.distance=K,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,n.spot[b]=J;const te=B.shadow;if(B.map&&(n.spotLightMap[O]=B.map,O++,te.updateMatrices(B),B.castShadow&&P++),n.spotLightMatrix[b]=te.matrix,B.castShadow){const pe=t.get(B);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,n.spotShadow[b]=pe,n.spotShadowMap[b]=ie,D++}b++}else if(B.isRectAreaLight){const J=e.get(B);J.color.copy(Y).multiplyScalar(Z),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),n.rectArea[x]=J,x++}else if(B.isPointLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),J.distance=B.distance,J.decay=B.decay,B.castShadow){const te=B.shadow,pe=t.get(B);pe.shadowIntensity=te.intensity,pe.shadowBias=te.bias,pe.shadowNormalBias=te.normalBias,pe.shadowRadius=te.radius,pe.shadowMapSize=te.mapSize,pe.shadowCameraNear=te.camera.near,pe.shadowCameraFar=te.camera.far,n.pointShadow[S]=pe,n.pointShadowMap[S]=ie,n.pointShadowMatrix[S]=B.shadow.matrix,L++}n.point[S]=J,S++}else if(B.isHemisphereLight){const J=e.get(B);J.skyColor.copy(B.color).multiplyScalar(Z),J.groundColor.copy(B.groundColor).multiplyScalar(Z),n.hemi[y]=J,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=p;const A=n.hash;(A.directionalLength!==_||A.pointLength!==S||A.spotLength!==b||A.rectAreaLength!==x||A.hemiLength!==y||A.numDirectionalShadows!==C||A.numPointShadows!==L||A.numSpotShadows!==D||A.numSpotMaps!==O||A.numLightProbes!==z)&&(n.directional.length=_,n.spot.length=b,n.rectArea.length=x,n.point.length=S,n.hemi.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=D+O-P,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=z,A.directionalLength=_,A.pointLength=S,A.spotLength=b,A.rectAreaLength=x,A.hemiLength=y,A.numDirectionalShadows=C,A.numPointShadows=L,A.numSpotShadows=D,A.numSpotMaps=O,A.numLightProbes=z,n.version=lT++)}function u(h,f){let g=0,p=0,_=0,S=0,b=0;const x=f.matrixWorldInverse;for(let y=0,C=h.length;y<C;y++){const L=h[y];if(L.isDirectionalLight){const D=n.directional[g];D.direction.setFromMatrixPosition(L.matrixWorld),i.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(x),g++}else if(L.isSpotLight){const D=n.spot[_];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(L.matrixWorld),i.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(i),D.direction.transformDirection(x),_++}else if(L.isRectAreaLight){const D=n.rectArea[S];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),o.identity(),s.copy(L.matrixWorld),s.premultiply(x),o.extractRotation(s),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),S++}else if(L.isPointLight){const D=n.point[p];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),p++}else if(L.isHemisphereLight){const D=n.hemi[b];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(x),b++}}}return{setup:l,setupView:u,state:n}}function od(r){const e=new hT(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function dT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let l;return o===void 0?(l=new od(r),e.set(i,[l])):s>=o.length?(l=new od(r),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
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
}`,mT=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],gT=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],cd=new ot,Ss=new H,xc=new H;function _T(r,e,t){let n=new Bl;const i=new Xe,s=new Xe,o=new Bt,l=new ry,u=new sy,h={},f=t.maxTextureSize,g={[Ci]:En,[En]:Ci,[On]:On},p=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:fT,fragmentShader:pT}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const S=new qt;S.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new $t(S,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let y=this.type;this.render=function(P,z,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;this.type===wd&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xa);const F=r.getRenderTarget(),k=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Ai),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=y!==this.type;Z&&z.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(ie=>ie.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,ie=P.length;K<ie;K++){const J=P[K],te=J.shadow;if(te===void 0){Ge("WebGLShadowMap:",J,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);const pe=te.getFrameExtents();i.multiply(pe),s.copy(te.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/pe.x),i.x=s.x*pe.x,te.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/pe.y),i.y=s.y*pe.y,te.mapSize.y=s.y));const _e=r.state.buffers.depth.getReversed();if(te.camera._reversedDepth=_e,te.map===null||Z===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===Es){if(J.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new hi(i.x,i.y,{format:Jr,type:Pi,minFilter:an,magFilter:an,generateMipmaps:!1}),te.map.texture.name=J.name+".shadowMap",te.map.depthTexture=new Hs(i.x,i.y,kn),te.map.depthTexture.name=J.name+".shadowMapDepth",te.map.depthTexture.format=Li,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=sn,te.map.depthTexture.magFilter=sn}else J.isPointLight?(te.map=new df(i.x),te.map.depthTexture=new Ox(i.x,fi)):(te.map=new hi(i.x,i.y),te.map.depthTexture=new Hs(i.x,i.y,fi)),te.map.depthTexture.name=J.name+".shadowMap",te.map.depthTexture.format=Li,this.type===Xa?(te.map.depthTexture.compareFunction=_e?Il:Ll,te.map.depthTexture.minFilter=an,te.map.depthTexture.magFilter=an):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=sn,te.map.depthTexture.magFilter=sn);te.camera.updateProjectionMatrix()}const Pe=te.map.isWebGLCubeRenderTarget?6:1;for(let Ue=0;Ue<Pe;Ue++){if(te.map.isWebGLCubeRenderTarget)r.setRenderTarget(te.map,Ue),r.clear();else{Ue===0&&(r.setRenderTarget(te.map),r.clear());const Le=te.getViewport(Ue);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),Y.viewport(o)}if(J.isPointLight){const Le=te.camera,et=te.matrix,nt=J.distance||Le.far;nt!==Le.far&&(Le.far=nt,Le.updateProjectionMatrix()),Ss.setFromMatrixPosition(J.matrixWorld),Le.position.copy(Ss),xc.copy(Le.position),xc.add(mT[Ue]),Le.up.copy(gT[Ue]),Le.lookAt(xc),Le.updateMatrixWorld(),et.makeTranslation(-Ss.x,-Ss.y,-Ss.z),cd.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),te._frustum.setFromProjectionMatrix(cd,Le.coordinateSystem,Le.reversedDepth)}else te.updateMatrices(J);n=te.getFrustum(),D(z,A,te.camera,J,this.type)}te.isPointLightShadow!==!0&&this.type===Es&&C(te,A),te.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(F,k,B)};function C(P,z){const A=e.update(b);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new hi(i.x,i.y,{format:Jr,type:Pi})),p.uniforms.shadow_pass.value=P.map.depthTexture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(z,null,A,p,b,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(z,null,A,_,b,null)}function L(P,z,A,F){let k=null;const B=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)k=B;else if(k=A.isPointLight===!0?u:l,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=k.uuid,Z=z.uuid;let K=h[Y];K===void 0&&(K={},h[Y]=K);let ie=K[Z];ie===void 0&&(ie=k.clone(),K[Z]=ie,z.addEventListener("dispose",O)),k=ie}if(k.visible=z.visible,k.wireframe=z.wireframe,F===Es?k.side=z.shadowSide!==null?z.shadowSide:z.side:k.side=z.shadowSide!==null?z.shadowSide:g[z.side],k.alphaMap=z.alphaMap,k.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,k.map=z.map,k.clipShadows=z.clipShadows,k.clippingPlanes=z.clippingPlanes,k.clipIntersection=z.clipIntersection,k.displacementMap=z.displacementMap,k.displacementScale=z.displacementScale,k.displacementBias=z.displacementBias,k.wireframeLinewidth=z.wireframeLinewidth,k.linewidth=z.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=r.properties.get(k);Y.light=A}return k}function D(P,z,A,F,k){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===Es)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const Z=e.update(P),K=P.material;if(Array.isArray(K)){const ie=Z.groups;for(let J=0,te=ie.length;J<te;J++){const pe=ie[J],_e=K[pe.materialIndex];if(_e&&_e.visible){const Pe=L(P,_e,F,k);P.onBeforeShadow(r,P,z,A,Z,Pe,pe),r.renderBufferDirect(A,null,Z,Pe,P,pe),P.onAfterShadow(r,P,z,A,Z,Pe,pe)}}}else if(K.visible){const ie=L(P,K,F,k);P.onBeforeShadow(r,P,z,A,Z,ie,null),r.renderBufferDirect(A,null,Z,ie,P,null),P.onAfterShadow(r,P,z,A,Z,ie,null)}}const Y=P.children;for(let Z=0,K=Y.length;Z<K;Z++)D(Y[Z],z,A,F,k)}function O(P){P.target.removeEventListener("dispose",O);for(const A in h){const F=h[A],k=P.target.uuid;k in F&&(F[k].dispose(),delete F[k])}}}function vT(r,e){function t(){let X=!1;const Te=new Bt;let Se=null;const Ce=new Bt(0,0,0,0);return{setMask:function($){Se!==$&&!X&&(r.colorMask($,$,$,$),Se=$)},setLocked:function($){X=$},setClear:function($,V,De,Ze,Et){Et===!0&&($*=Ze,V*=Ze,De*=Ze),Te.set($,V,De,Ze),Ce.equals(Te)===!1&&(r.clearColor($,V,De,Ze),Ce.copy(Te))},reset:function(){X=!1,Se=null,Ce.set(-1,0,0,0)}}}function n(){let X=!1,Te=!1,Se=null,Ce=null,$=null;return{setReversed:function(V){if(Te!==V){const De=e.get("EXT_clip_control");V?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Te=V;const Ze=$;$=null,this.setClear(Ze)}},getReversed:function(){return Te},setTest:function(V){V?ye(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(V){Se!==V&&!X&&(r.depthMask(V),Se=V)},setFunc:function(V){if(Te&&(V=Wv[V]),Ce!==V){switch(V){case wc:r.depthFunc(r.NEVER);break;case Ac:r.depthFunc(r.ALWAYS);break;case Rc:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case Cc:r.depthFunc(r.EQUAL);break;case Pc:r.depthFunc(r.GEQUAL);break;case Lc:r.depthFunc(r.GREATER);break;case Ic:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=V}},setLocked:function(V){X=V},setClear:function(V){$!==V&&($=V,Te&&(V=1-V),r.clearDepth(V))},reset:function(){X=!1,Se=null,Ce=null,$=null,Te=!1}}}function i(){let X=!1,Te=null,Se=null,Ce=null,$=null,V=null,De=null,Ze=null,Et=null;return{setTest:function(ut){X||(ut?ye(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(ut){Te!==ut&&!X&&(r.stencilMask(ut),Te=ut)},setFunc:function(ut,Vn,Zt){(Se!==ut||Ce!==Vn||$!==Zt)&&(r.stencilFunc(ut,Vn,Zt),Se=ut,Ce=Vn,$=Zt)},setOp:function(ut,Vn,Zt){(V!==ut||De!==Vn||Ze!==Zt)&&(r.stencilOp(ut,Vn,Zt),V=ut,De=Vn,Ze=Zt)},setLocked:function(ut){X=ut},setClear:function(ut){Et!==ut&&(r.clearStencil(ut),Et=ut)},reset:function(){X=!1,Te=null,Se=null,Ce=null,$=null,V=null,De=null,Ze=null,Et=null}}}const s=new t,o=new n,l=new i,u=new WeakMap,h=new WeakMap;let f={},g={},p=new WeakMap,_=[],S=null,b=!1,x=null,y=null,C=null,L=null,D=null,O=null,P=null,z=new Qe(0,0,0),A=0,F=!1,k=null,B=null,Y=null,Z=null,K=null;const ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,te=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(pe)[1]),J=te>=1):pe.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),J=te>=2);let _e=null,Pe={};const Ue=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),et=new Bt().fromArray(Ue),nt=new Bt().fromArray(Le);function dt(X,Te,Se,Ce){const $=new Uint8Array(4),V=r.createTexture();r.bindTexture(X,V),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<Se;De++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(Te+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return V}const ce={};ce[r.TEXTURE_2D]=dt(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[r.TEXTURE_2D_ARRAY]=dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ye(r.DEPTH_TEST),o.setFunc(Yr),rt(!1),Gt(Xu),ye(r.CULL_FACE),vt(Ai);function ye(X){f[X]!==!0&&(r.enable(X),f[X]=!0)}function se(X){f[X]!==!1&&(r.disable(X),f[X]=!1)}function Ee(X,Te){return g[X]!==Te?(r.bindFramebuffer(X,Te),g[X]=Te,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function $e(X,Te){let Se=_,Ce=!1;if(X){Se=p.get(Te),Se===void 0&&(Se=[],p.set(Te,Se));const $=X.textures;if(Se.length!==$.length||Se[0]!==r.COLOR_ATTACHMENT0){for(let V=0,De=$.length;V<De;V++)Se[V]=r.COLOR_ATTACHMENT0+V;Se.length=$.length,Ce=!0}}else Se[0]!==r.BACK&&(Se[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(Se)}function Ke(X){return S!==X?(r.useProgram(X),S=X,!0):!1}const Ct={[mr]:r.FUNC_ADD,[uv]:r.FUNC_SUBTRACT,[hv]:r.FUNC_REVERSE_SUBTRACT};Ct[dv]=r.MIN,Ct[fv]=r.MAX;const mt={[pv]:r.ZERO,[mv]:r.ONE,[gv]:r.SRC_COLOR,[bc]:r.SRC_ALPHA,[Mv]:r.SRC_ALPHA_SATURATE,[yv]:r.DST_COLOR,[vv]:r.DST_ALPHA,[_v]:r.ONE_MINUS_SRC_COLOR,[Tc]:r.ONE_MINUS_SRC_ALPHA,[Sv]:r.ONE_MINUS_DST_COLOR,[xv]:r.ONE_MINUS_DST_ALPHA,[Ev]:r.CONSTANT_COLOR,[bv]:r.ONE_MINUS_CONSTANT_COLOR,[Tv]:r.CONSTANT_ALPHA,[wv]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(X,Te,Se,Ce,$,V,De,Ze,Et,ut){if(X===Ai){b===!0&&(se(r.BLEND),b=!1);return}if(b===!1&&(ye(r.BLEND),b=!0),X!==lv){if(X!==x||ut!==F){if((y!==mr||D!==mr)&&(r.blendEquation(r.FUNC_ADD),y=mr,D=mr),ut)switch(X){case $r:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $u:r.blendFunc(r.ONE,r.ONE);break;case ju:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case qu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Je("WebGLState: Invalid blending: ",X);break}else switch(X){case $r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $u:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ju:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qu:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",X);break}C=null,L=null,O=null,P=null,z.set(0,0,0),A=0,x=X,F=ut}return}$=$||Te,V=V||Se,De=De||Ce,(Te!==y||$!==D)&&(r.blendEquationSeparate(Ct[Te],Ct[$]),y=Te,D=$),(Se!==C||Ce!==L||V!==O||De!==P)&&(r.blendFuncSeparate(mt[Se],mt[Ce],mt[V],mt[De]),C=Se,L=Ce,O=V,P=De),(Ze.equals(z)===!1||Et!==A)&&(r.blendColor(Ze.r,Ze.g,Ze.b,Et),z.copy(Ze),A=Et),x=X,F=!1}function wt(X,Te){X.side===On?se(r.CULL_FACE):ye(r.CULL_FACE);let Se=X.side===En;Te&&(Se=!Se),rt(Se),X.blending===$r&&X.transparent===!1?vt(Ai):vt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);const Ce=X.stencilWrite;l.setTest(Ce),Ce&&(l.setMask(X.stencilWriteMask),l.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),l.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ft(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(X){k!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),k=X)}function Gt(X){X!==ov?(ye(r.CULL_FACE),X!==B&&(X===Xu?r.cullFace(r.BACK):X===cv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),B=X}function G(X){X!==Y&&(J&&r.lineWidth(X),Y=X)}function Ft(X,Te,Se){X?(ye(r.POLYGON_OFFSET_FILL),(Z!==Te||K!==Se)&&(Z=Te,K=Se,o.getReversed()&&(Te=-Te),r.polygonOffset(Te,Se))):se(r.POLYGON_OFFSET_FILL)}function gt(X){X?ye(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function Mt(X){X===void 0&&(X=r.TEXTURE0+ie-1),_e!==X&&(r.activeTexture(X),_e=X)}function Ne(X,Te,Se){Se===void 0&&(_e===null?Se=r.TEXTURE0+ie-1:Se=_e);let Ce=Pe[Se];Ce===void 0&&(Ce={type:void 0,texture:void 0},Pe[Se]=Ce),(Ce.type!==X||Ce.texture!==Te)&&(_e!==Se&&(r.activeTexture(Se),_e=Se),r.bindTexture(X,Te||ce[X]),Ce.type=X,Ce.texture=Te)}function N(){const X=Pe[_e];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(X){Je("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){Je("WebGLState:",X)}}function ae(){try{r.texSubImage2D(...arguments)}catch(X){Je("WebGLState:",X)}}function fe(){try{r.texSubImage3D(...arguments)}catch(X){Je("WebGLState:",X)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Je("WebGLState:",X)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Je("WebGLState:",X)}}function be(){try{r.texStorage2D(...arguments)}catch(X){Je("WebGLState:",X)}}function We(){try{r.texStorage3D(...arguments)}catch(X){Je("WebGLState:",X)}}function Ye(){try{r.texImage2D(...arguments)}catch(X){Je("WebGLState:",X)}}function xe(){try{r.texImage3D(...arguments)}catch(X){Je("WebGLState:",X)}}function Me(X){et.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),et.copy(X))}function ke(X){nt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),nt.copy(X))}function Be(X,Te){let Se=h.get(Te);Se===void 0&&(Se=new WeakMap,h.set(Te,Se));let Ce=Se.get(X);Ce===void 0&&(Ce=r.getUniformBlockIndex(Te,X.name),Se.set(X,Ce))}function Ie(X,Te){const Ce=h.get(Te).get(X);u.get(Te)!==Ce&&(r.uniformBlockBinding(Te,Ce,X.__bindingPointIndex),u.set(Te,Ce))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},_e=null,Pe={},g={},p=new WeakMap,_=[],S=null,b=!1,x=null,y=null,C=null,L=null,D=null,O=null,P=null,z=new Qe(0,0,0),A=0,F=!1,k=null,B=null,Y=null,Z=null,K=null,et.set(0,0,r.canvas.width,r.canvas.height),nt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:ye,disable:se,bindFramebuffer:Ee,drawBuffers:$e,useProgram:Ke,setBlending:vt,setMaterial:wt,setFlipSided:rt,setCullFace:Gt,setLineWidth:G,setPolygonOffset:Ft,setScissorTest:gt,activeTexture:Mt,bindTexture:Ne,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:Ye,texImage3D:xe,updateUBOMapping:Be,uniformBlockBinding:Ie,texStorage2D:be,texStorage3D:We,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Oe,scissor:Me,viewport:ke,reset:st}}function xT(r,e,t,n,i,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xe,f=new WeakMap;let g;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(N,T){return _?new OffscreenCanvas(N,T):zs("canvas")}function b(N,T,W){let ae=1;const fe=Ne(N);if((fe.width>W||fe.height>W)&&(ae=W/Math.max(fe.width,fe.height)),ae<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(ae*fe.width),Oe=Math.floor(ae*fe.height);g===void 0&&(g=S(oe,Oe));const be=T?S(oe,Oe):g;return be.width=oe,be.height=Oe,be.getContext("2d").drawImage(N,0,0,oe,Oe),Ge("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+oe+"x"+Oe+")."),be}else return"data"in N&&Ge("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function x(N){return N.generateMipmaps}function y(N){r.generateMipmap(N)}function C(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,T,W,ae,fe=!1){if(N!==null){if(r[N]!==void 0)return r[N];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let oe=T;if(T===r.RED&&(W===r.FLOAT&&(oe=r.R32F),W===r.HALF_FLOAT&&(oe=r.R16F),W===r.UNSIGNED_BYTE&&(oe=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(oe=r.R8UI),W===r.UNSIGNED_SHORT&&(oe=r.R16UI),W===r.UNSIGNED_INT&&(oe=r.R32UI),W===r.BYTE&&(oe=r.R8I),W===r.SHORT&&(oe=r.R16I),W===r.INT&&(oe=r.R32I)),T===r.RG&&(W===r.FLOAT&&(oe=r.RG32F),W===r.HALF_FLOAT&&(oe=r.RG16F),W===r.UNSIGNED_BYTE&&(oe=r.RG8)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(oe=r.RG8UI),W===r.UNSIGNED_SHORT&&(oe=r.RG16UI),W===r.UNSIGNED_INT&&(oe=r.RG32UI),W===r.BYTE&&(oe=r.RG8I),W===r.SHORT&&(oe=r.RG16I),W===r.INT&&(oe=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),W===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),W===r.UNSIGNED_INT&&(oe=r.RGB32UI),W===r.BYTE&&(oe=r.RGB8I),W===r.SHORT&&(oe=r.RGB16I),W===r.INT&&(oe=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),W===r.UNSIGNED_INT&&(oe=r.RGBA32UI),W===r.BYTE&&(oe=r.RGBA8I),W===r.SHORT&&(oe=r.RGBA16I),W===r.INT&&(oe=r.RGBA32I)),T===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),T===r.RGBA){const Oe=fe?Qa:yt.getTransfer(ae);W===r.FLOAT&&(oe=r.RGBA32F),W===r.HALF_FLOAT&&(oe=r.RGBA16F),W===r.UNSIGNED_BYTE&&(oe=Oe===Lt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function D(N,T){let W;return N?T===null||T===fi||T===Us?W=r.DEPTH24_STENCIL8:T===kn?W=r.DEPTH32F_STENCIL8:T===Ns&&(W=r.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===fi||T===Us?W=r.DEPTH_COMPONENT24:T===kn?W=r.DEPTH_COMPONENT32F:T===Ns&&(W=r.DEPTH_COMPONENT16),W}function O(N,T){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==sn&&N.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function P(N){const T=N.target;T.removeEventListener("dispose",P),A(T),T.isVideoTexture&&f.delete(T)}function z(N){const T=N.target;T.removeEventListener("dispose",z),k(T)}function A(N){const T=n.get(N);if(T.__webglInit===void 0)return;const W=N.source,ae=p.get(W);if(ae){const fe=ae[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&F(N),Object.keys(ae).length===0&&p.delete(W)}n.remove(N)}function F(N){const T=n.get(N);r.deleteTexture(T.__webglTexture);const W=N.source,ae=p.get(W);delete ae[T.__cacheKey],o.memory.textures--}function k(N){const T=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let fe=0;fe<T.__webglFramebuffer[ae].length;fe++)r.deleteFramebuffer(T.__webglFramebuffer[ae][fe]);else r.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)r.deleteFramebuffer(T.__webglFramebuffer[ae]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=N.textures;for(let ae=0,fe=W.length;ae<fe;ae++){const oe=n.get(W[ae]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(W[ae])}n.remove(N)}let B=0;function Y(){B=0}function Z(){const N=B;return N>=i.maxTextures&&Ge("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),B+=1,N}function K(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ie(N,T){const W=n.get(N);if(N.isVideoTexture&&gt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const ae=N.image;if(ae===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(W,N,T);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function J(N,T){const W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ce(W,N,T);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function te(N,T){const W=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){ce(W,N,T);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function pe(N,T){const W=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ye(W,N,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}const _e={[Er]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Za]:r.MIRRORED_REPEAT},Pe={[sn]:r.NEAREST,[Nd]:r.NEAREST_MIPMAP_NEAREST,[bs]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[$a]:r.LINEAR_MIPMAP_NEAREST,[Ti]:r.LINEAR_MIPMAP_LINEAR},Ue={[Fv]:r.NEVER,[Bv]:r.ALWAYS,[Nv]:r.LESS,[Ll]:r.LEQUAL,[Uv]:r.EQUAL,[Il]:r.GEQUAL,[Ov]:r.GREATER,[kv]:r.NOTEQUAL};function Le(N,T){if(T.type===kn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===an||T.magFilter===$a||T.magFilter===bs||T.magFilter===Ti||T.minFilter===an||T.minFilter===$a||T.minFilter===bs||T.minFilter===Ti)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,_e[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,_e[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,_e[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Pe[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Pe[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,Ue[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===sn||T.minFilter!==bs&&T.minFilter!==Ti||T.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function et(N,T){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",P));const ae=T.source;let fe=p.get(ae);fe===void 0&&(fe={},p.set(ae,fe));const oe=K(T);if(oe!==N.__cacheKey){fe[oe]===void 0&&(fe[oe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),fe[oe].usedTimes++;const Oe=fe[N.__cacheKey];Oe!==void 0&&(fe[N.__cacheKey].usedTimes--,Oe.usedTimes===0&&F(T)),N.__cacheKey=oe,N.__webglTexture=fe[oe].texture}return W}function nt(N,T,W){return Math.floor(Math.floor(N/W)/T)}function dt(N,T,W,ae){const oe=N.updateRanges;if(oe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,W,ae,T.data);else{oe.sort((xe,Me)=>xe.start-Me.start);let Oe=0;for(let xe=1;xe<oe.length;xe++){const Me=oe[Oe],ke=oe[xe],Be=Me.start+Me.count,Ie=nt(ke.start,T.width,4),st=nt(Me.start,T.width,4);ke.start<=Be+1&&Ie===st&&nt(ke.start+ke.count-1,T.width,4)===Ie?Me.count=Math.max(Me.count,ke.start+ke.count-Me.start):(++Oe,oe[Oe]=ke)}oe.length=Oe+1;const be=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),Ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let xe=0,Me=oe.length;xe<Me;xe++){const ke=oe[xe],Be=Math.floor(ke.start/4),Ie=Math.ceil(ke.count/4),st=Be%T.width,X=Math.floor(Be/T.width),Te=Ie,Se=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,st),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),t.texSubImage2D(r.TEXTURE_2D,0,st,X,Te,Se,W,ae,T.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ye)}}function ce(N,T,W){let ae=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=r.TEXTURE_3D);const fe=et(N,T),oe=T.source;t.bindTexture(ae,N.__webglTexture,r.TEXTURE0+W);const Oe=n.get(oe);if(oe.version!==Oe.__version||fe===!0){t.activeTexture(r.TEXTURE0+W);const be=yt.getPrimaries(yt.workingColorSpace),We=T.colorSpace===ji?null:yt.getPrimaries(T.colorSpace),Ye=T.colorSpace===ji||be===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let xe=b(T.image,!1,i.maxTextureSize);xe=Mt(T,xe);const Me=s.convert(T.format,T.colorSpace),ke=s.convert(T.type);let Be=L(T.internalFormat,Me,ke,T.colorSpace,T.isVideoTexture);Le(ae,T);let Ie;const st=T.mipmaps,X=T.isVideoTexture!==!0,Te=Oe.__version===void 0||fe===!0,Se=oe.dataReady,Ce=O(T,xe);if(T.isDepthTexture)Be=D(T.format===vr,T.type),Te&&(X?t.texStorage2D(r.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Be,xe.width,xe.height,0,Me,ke,null));else if(T.isDataTexture)if(st.length>0){X&&Te&&t.texStorage2D(r.TEXTURE_2D,Ce,Be,st[0].width,st[0].height);for(let $=0,V=st.length;$<V;$++)Ie=st[$],X?Se&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Me,ke,Ie.data):t.texImage2D(r.TEXTURE_2D,$,Be,Ie.width,Ie.height,0,Me,ke,Ie.data);T.generateMipmaps=!1}else X?(Te&&t.texStorage2D(r.TEXTURE_2D,Ce,Be,xe.width,xe.height),Se&&dt(T,xe,Me,ke)):t.texImage2D(r.TEXTURE_2D,0,Be,xe.width,xe.height,0,Me,ke,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Be,st[0].width,st[0].height,xe.depth);for(let $=0,V=st.length;$<V;$++)if(Ie=st[$],T.format!==Bn)if(Me!==null)if(X){if(Se)if(T.layerUpdates.size>0){const De=Bh(Ie.width,Ie.height,T.format,T.type);for(const Ze of T.layerUpdates){const Et=Ie.data.subarray(Ze*De/Ie.data.BYTES_PER_ELEMENT,(Ze+1)*De/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,Ze,Ie.width,Ie.height,1,Me,Et)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ie.width,Ie.height,xe.depth,Me,Ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,$,Be,Ie.width,Ie.height,xe.depth,0,Ie.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,$,0,0,0,Ie.width,Ie.height,xe.depth,Me,ke,Ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,$,Be,Ie.width,Ie.height,xe.depth,0,Me,ke,Ie.data)}else{X&&Te&&t.texStorage2D(r.TEXTURE_2D,Ce,Be,st[0].width,st[0].height);for(let $=0,V=st.length;$<V;$++)Ie=st[$],T.format!==Bn?Me!==null?X?Se&&t.compressedTexSubImage2D(r.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Me,Ie.data):t.compressedTexImage2D(r.TEXTURE_2D,$,Be,Ie.width,Ie.height,0,Ie.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Se&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Ie.width,Ie.height,Me,ke,Ie.data):t.texImage2D(r.TEXTURE_2D,$,Be,Ie.width,Ie.height,0,Me,ke,Ie.data)}else if(T.isDataArrayTexture)if(X){if(Te&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Be,xe.width,xe.height,xe.depth),Se)if(T.layerUpdates.size>0){const $=Bh(xe.width,xe.height,T.format,T.type);for(const V of T.layerUpdates){const De=xe.data.subarray(V*$/xe.data.BYTES_PER_ELEMENT,(V+1)*$/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,V,xe.width,xe.height,1,Me,ke,De)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Me,ke,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,Me,ke,xe.data);else if(T.isData3DTexture)X?(Te&&t.texStorage3D(r.TEXTURE_3D,Ce,Be,xe.width,xe.height,xe.depth),Se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Me,ke,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,Me,ke,xe.data);else if(T.isFramebufferTexture){if(Te)if(X)t.texStorage2D(r.TEXTURE_2D,Ce,Be,xe.width,xe.height);else{let $=xe.width,V=xe.height;for(let De=0;De<Ce;De++)t.texImage2D(r.TEXTURE_2D,De,Be,$,V,0,Me,ke,null),$>>=1,V>>=1}}else if(st.length>0){if(X&&Te){const $=Ne(st[0]);t.texStorage2D(r.TEXTURE_2D,Ce,Be,$.width,$.height)}for(let $=0,V=st.length;$<V;$++)Ie=st[$],X?Se&&t.texSubImage2D(r.TEXTURE_2D,$,0,0,Me,ke,Ie):t.texImage2D(r.TEXTURE_2D,$,Be,Me,ke,Ie);T.generateMipmaps=!1}else if(X){if(Te){const $=Ne(xe);t.texStorage2D(r.TEXTURE_2D,Ce,Be,$.width,$.height)}Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,ke,xe)}else t.texImage2D(r.TEXTURE_2D,0,Be,Me,ke,xe);x(T)&&y(ae),Oe.__version=oe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ye(N,T,W){if(T.image.length!==6)return;const ae=et(N,T),fe=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const oe=n.get(fe);if(fe.version!==oe.__version||ae===!0){t.activeTexture(r.TEXTURE0+W);const Oe=yt.getPrimaries(yt.workingColorSpace),be=T.colorSpace===ji?null:yt.getPrimaries(T.colorSpace),We=T.colorSpace===ji||Oe===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,xe=T.image[0]&&T.image[0].isDataTexture,Me=[];for(let V=0;V<6;V++)!Ye&&!xe?Me[V]=b(T.image[V],!0,i.maxCubemapSize):Me[V]=xe?T.image[V].image:T.image[V],Me[V]=Mt(T,Me[V]);const ke=Me[0],Be=s.convert(T.format,T.colorSpace),Ie=s.convert(T.type),st=L(T.internalFormat,Be,Ie,T.colorSpace),X=T.isVideoTexture!==!0,Te=oe.__version===void 0||ae===!0,Se=fe.dataReady;let Ce=O(T,ke);Le(r.TEXTURE_CUBE_MAP,T);let $;if(Ye){X&&Te&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,st,ke.width,ke.height);for(let V=0;V<6;V++){$=Me[V].mipmaps;for(let De=0;De<$.length;De++){const Ze=$[De];T.format!==Bn?Be!==null?X?Se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,De,0,0,Ze.width,Ze.height,Be,Ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,De,st,Ze.width,Ze.height,0,Ze.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,De,0,0,Ze.width,Ze.height,Be,Ie,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,De,st,Ze.width,Ze.height,0,Be,Ie,Ze.data)}}}else{if($=T.mipmaps,X&&Te){$.length>0&&Ce++;const V=Ne(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,st,V.width,V.height)}for(let V=0;V<6;V++)if(xe){X?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Me[V].width,Me[V].height,Be,Ie,Me[V].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,st,Me[V].width,Me[V].height,0,Be,Ie,Me[V].data);for(let De=0;De<$.length;De++){const Et=$[De].image[V].image;X?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,De+1,0,0,Et.width,Et.height,Be,Ie,Et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,De+1,st,Et.width,Et.height,0,Be,Ie,Et.data)}}else{X?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Be,Ie,Me[V]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,st,Be,Ie,Me[V]);for(let De=0;De<$.length;De++){const Ze=$[De];X?Se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,De+1,0,0,Be,Ie,Ze.image[V]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,De+1,st,Be,Ie,Ze.image[V])}}}x(T)&&y(r.TEXTURE_CUBE_MAP),oe.__version=fe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function se(N,T,W,ae,fe,oe){const Oe=s.convert(W.format,W.colorSpace),be=s.convert(W.type),We=L(W.internalFormat,Oe,be,W.colorSpace),Ye=n.get(T),xe=n.get(W);if(xe.__renderTarget=T,!Ye.__hasExternalTextures){const Me=Math.max(1,T.width>>oe),ke=Math.max(1,T.height>>oe);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,oe,We,Me,ke,T.depth,0,Oe,be,null):t.texImage2D(fe,oe,We,Me,ke,0,Oe,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),Ft(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,fe,xe.__webglTexture,0,G(T)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,fe,xe.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(N,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const ae=T.depthTexture,fe=ae&&ae.isDepthTexture?ae.type:null,oe=D(T.stencilBuffer,fe),Oe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ft(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(T),oe,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(T),oe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,oe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,N)}else{const ae=T.textures;for(let fe=0;fe<ae.length;fe++){const oe=ae[fe],Oe=s.convert(oe.format,oe.colorSpace),be=s.convert(oe.type),We=L(oe.internalFormat,Oe,be,oe.colorSpace);Ft(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(T),We,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(T),We,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,We,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $e(N,T,W){const ae=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(T.depthTexture);if(fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,T.depthTexture.addEventListener("dispose",P)),fe.__webglTexture===void 0){fe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,fe.__webglTexture),Le(r.TEXTURE_CUBE_MAP,T.depthTexture);const Ye=s.convert(T.depthTexture.format),xe=s.convert(T.depthTexture.type);let Me;T.depthTexture.format===Li?Me=r.DEPTH_COMPONENT24:T.depthTexture.format===vr&&(Me=r.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Me,T.width,T.height,0,Ye,xe,null)}}else ie(T.depthTexture,0);const oe=fe.__webglTexture,Oe=G(T),be=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,We=T.depthTexture.format===vr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Li)Ft(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,be,oe,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,We,be,oe,0);else if(T.depthTexture.format===vr)Ft(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,be,oe,0,Oe):r.framebufferTexture2D(r.FRAMEBUFFER,We,be,oe,0);else throw new Error("Unknown depthTexture format")}function Ke(N){const T=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ae=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){const fe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",fe)};ae.addEventListener("dispose",fe),T.__depthDisposeCallback=fe}T.__boundDepthTexture=ae}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let ae=0;ae<6;ae++)$e(T.__webglFramebuffer[ae],N,ae);else{const ae=N.texture.mipmaps;ae&&ae.length>0?$e(T.__webglFramebuffer[0],N,0):$e(T.__webglFramebuffer,N,0)}else if(W){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=r.createRenderbuffer(),Ee(T.__webglDepthbuffer[ae],N,!1);else{const fe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,oe)}}else{const ae=N.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ee(T.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,oe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(N,T,W){const ae=n.get(N);T!==void 0&&se(ae.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Ke(N)}function mt(N){const T=N.texture,W=n.get(N),ae=n.get(T);N.addEventListener("dispose",z);const fe=N.textures,oe=N.isWebGLCubeRenderTarget===!0,Oe=fe.length>1;if(Oe||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=T.version,o.memory.textures++),oe){W.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[be]=[];for(let We=0;We<T.mipmaps.length;We++)W.__webglFramebuffer[be][We]=r.createFramebuffer()}else W.__webglFramebuffer[be]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)W.__webglFramebuffer[be]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let be=0,We=fe.length;be<We;be++){const Ye=n.get(fe[be]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(N.samples>0&&Ft(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let be=0;be<fe.length;be++){const We=fe[be];W.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[be]);const Ye=s.convert(We.format,We.colorSpace),xe=s.convert(We.type),Me=L(We.internalFormat,Ye,xe,We.colorSpace,N.isXRRenderTarget===!0),ke=G(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,Me,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,W.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Le(r.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)se(W.__webglFramebuffer[be][We],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,We);else se(W.__webglFramebuffer[be],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(T)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,We=fe.length;be<We;be++){const Ye=fe[be],xe=n.get(Ye);let Me=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Me=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,xe.__webglTexture),Le(Me,Ye),se(W.__webglFramebuffer,N,Ye,r.COLOR_ATTACHMENT0+be,Me,0),x(Ye)&&y(Me)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),Le(be,T),T.mipmaps&&T.mipmaps.length>0)for(let We=0;We<T.mipmaps.length;We++)se(W.__webglFramebuffer[We],N,T,r.COLOR_ATTACHMENT0,be,We);else se(W.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,be,0);x(T)&&y(be),t.unbindTexture()}N.depthBuffer&&Ke(N)}function vt(N){const T=N.textures;for(let W=0,ae=T.length;W<ae;W++){const fe=T[W];if(x(fe)){const oe=C(N),Oe=n.get(fe).__webglTexture;t.bindTexture(oe,Oe),y(oe),t.unbindTexture()}}}const wt=[],rt=[];function Gt(N){if(N.samples>0){if(Ft(N)===!1){const T=N.textures,W=N.width,ae=N.height;let fe=r.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=n.get(N),be=T.length>1;if(be)for(let Ye=0;Ye<T.length;Ye++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const We=N.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ye]);const xe=n.get(T[Ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,W,ae,0,0,W,ae,fe,r.NEAREST),u===!0&&(wt.length=0,rt.length=0,wt.push(r.COLOR_ATTACHMENT0+Ye),N.depthBuffer&&N.resolveDepthBuffer===!1&&(wt.push(oe),rt.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Ye=0;Ye<T.length;Ye++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ye]);const xe=n.get(T[Ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function G(N){return Math.min(i.maxSamples,N.samples)}function Ft(N){const T=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function gt(N){const T=o.render.frame;f.get(N)!==T&&(f.set(N,T),N.update())}function Mt(N,T){const W=N.colorSpace,ae=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Mn&&W!==ji&&(yt.getTransfer(W)===Lt?(ae!==Bn||fe!==wn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",W)),T}function Ne(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=pe,this.rebindTextures=Ct,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yT(r,e){function t(n,i=ji){let s;const o=yt.getTransfer(i);if(n===wn)return r.UNSIGNED_BYTE;if(n===Tl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===kd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ud)return r.BYTE;if(n===Od)return r.SHORT;if(n===Ns)return r.UNSIGNED_SHORT;if(n===bl)return r.INT;if(n===fi)return r.UNSIGNED_INT;if(n===kn)return r.FLOAT;if(n===Pi)return r.HALF_FLOAT;if(n===zd)return r.ALPHA;if(n===Vd)return r.RGB;if(n===Bn)return r.RGBA;if(n===Li)return r.DEPTH_COMPONENT;if(n===vr)return r.DEPTH_STENCIL;if(n===Al)return r.RED;if(n===Rl)return r.RED_INTEGER;if(n===Jr)return r.RG;if(n===Cl)return r.RG_INTEGER;if(n===Pl)return r.RGBA_INTEGER;if(n===ja||n===qa||n===Ya||n===Ka)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Fc||n===Nc||n===Uc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===kc||n===Bc||n===zc||n===Vc||n===Hc||n===Gc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oc||n===kc)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===zc)return s.COMPRESSED_R11_EAC;if(n===Vc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Hc)return s.COMPRESSED_RG11_EAC;if(n===Gc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wc||n===Xc||n===$c||n===jc||n===qc||n===Yc||n===Kc||n===Jc||n===Zc||n===Qc||n===el||n===tl||n===nl||n===il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$c)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===sl||n===al)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===rl)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===cl||n===ll||n===ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ol)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const ST=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`;class ET{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mi({vertexShader:ST,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends is{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",u=1,h=null,f=null,g=null,p=null,_=null,S=null;const b=typeof XRWebGLBinding<"u",x=new ET,y={},C=t.getContextAttributes();let L=null,D=null;const O=[],P=[],z=new Xe;let A=null;const F=new Sn;F.viewport=new Bt;const k=new Sn;k.viewport=new Bt;const B=[F,k],Y=new Ay;let Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ye=O[ce];return ye===void 0&&(ye=new Go,O[ce]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ce){let ye=O[ce];return ye===void 0&&(ye=new Go,O[ce]=ye),ye.getGripSpace()},this.getHand=function(ce){let ye=O[ce];return ye===void 0&&(ye=new Go,O[ce]=ye),ye.getHandSpace()};function ie(ce){const ye=P.indexOf(ce.inputSource);if(ye===-1)return;const se=O[ye];se!==void 0&&(se.update(ce.inputSource,ce.frame,h||o),se.dispatchEvent({type:ce.type,data:ce.inputSource}))}function J(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",te);for(let ce=0;ce<O.length;ce++){const ye=P[ce];ye!==null&&(P[ce]=null,O[ce].disconnect(ye))}Z=null,K=null,x.reset();for(const ce in y)delete y[ce];e.setRenderTarget(L),_=null,p=null,g=null,i=null,D=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){s=ce,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){l=ce,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(i,t)),g},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(ce){if(i=ce,i!==null){if(L=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",J),i.addEventListener("inputsourceschange",te),C.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ee=null,$e=null;C.depth&&($e=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=C.stencil?vr:Li,Ee=C.stencil?Us:fi);const Ke={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:s};g=this.getBinding(),p=g.createProjectionLayer(Ke),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),D=new hi(p.textureWidth,p.textureHeight,{format:Bn,type:wn,depthTexture:new Hs(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const se={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),D=new hi(_.framebufferWidth,_.framebufferHeight,{format:Bn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(l),dt.setContext(i),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(ce){for(let ye=0;ye<ce.removed.length;ye++){const se=ce.removed[ye],Ee=P.indexOf(se);Ee>=0&&(P[Ee]=null,O[Ee].disconnect(se))}for(let ye=0;ye<ce.added.length;ye++){const se=ce.added[ye];let Ee=P.indexOf(se);if(Ee===-1){for(let Ke=0;Ke<O.length;Ke++)if(Ke>=P.length){P.push(se),Ee=Ke;break}else if(P[Ke]===null){P[Ke]=se,Ee=Ke;break}if(Ee===-1)break}const $e=O[Ee];$e&&$e.connect(se)}}const pe=new H,_e=new H;function Pe(ce,ye,se){pe.setFromMatrixPosition(ye.matrixWorld),_e.setFromMatrixPosition(se.matrixWorld);const Ee=pe.distanceTo(_e),$e=ye.projectionMatrix.elements,Ke=se.projectionMatrix.elements,Ct=$e[14]/($e[10]-1),mt=$e[14]/($e[10]+1),vt=($e[9]+1)/$e[5],wt=($e[9]-1)/$e[5],rt=($e[8]-1)/$e[0],Gt=(Ke[8]+1)/Ke[0],G=Ct*rt,Ft=Ct*Gt,gt=Ee/(-rt+Gt),Mt=gt*-rt;if(ye.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Mt),ce.translateZ(gt),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),$e[10]===-1)ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const Ne=Ct+gt,N=mt+gt,T=G-Mt,W=Ft+(Ee-Mt),ae=vt*mt/N*Ne,fe=wt*mt/N*Ne;ce.projectionMatrix.makePerspective(T,W,ae,fe,Ne,N),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Ue(ce,ye){ye===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ye.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(i===null)return;let ye=ce.near,se=ce.far;x.texture!==null&&(x.depthNear>0&&(ye=x.depthNear),x.depthFar>0&&(se=x.depthFar)),Y.near=k.near=F.near=ye,Y.far=k.far=F.far=se,(Z!==Y.near||K!==Y.far)&&(i.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Z=Y.near,K=Y.far),Y.layers.mask=ce.layers.mask|6,F.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;const Ee=ce.parent,$e=Y.cameras;Ue(Y,Ee);for(let Ke=0;Ke<$e.length;Ke++)Ue($e[Ke],Ee);$e.length===2?Pe(Y,F,k):Y.projectionMatrix.copy(F.projectionMatrix),Le(ce,Y,Ee)};function Le(ce,ye,se){se===null?ce.matrix.copy(ye.matrixWorld):(ce.matrix.copy(se.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ye.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Zr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(p===null&&_===null))return u},this.setFoveation=function(ce){u=ce,p!==null&&(p.fixedFoveation=ce),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ce)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Y)},this.getCameraTexture=function(ce){return y[ce]};let et=null;function nt(ce,ye){if(f=ye.getViewerPose(h||o),S=ye,f!==null){const se=f.views;_!==null&&(e.setRenderTargetFramebuffer(D,_.framebuffer),e.setRenderTarget(D));let Ee=!1;se.length!==Y.cameras.length&&(Y.cameras.length=0,Ee=!0);for(let mt=0;mt<se.length;mt++){const vt=se[mt];let wt=null;if(_!==null)wt=_.getViewport(vt);else{const Gt=g.getViewSubImage(p,vt);wt=Gt.viewport,mt===0&&(e.setRenderTargetTextures(D,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(D))}let rt=B[mt];rt===void 0&&(rt=new Sn,rt.layers.enable(mt),rt.viewport=new Bt,B[mt]=rt),rt.matrix.fromArray(vt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(vt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(wt.x,wt.y,wt.width,wt.height),mt===0&&(Y.matrix.copy(rt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ee===!0&&Y.cameras.push(rt)}const $e=i.enabledFeatures;if($e&&$e.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){g=n.getBinding();const mt=g.getDepthInformation(se[0]);mt&&mt.isValid&&mt.texture&&x.init(mt,i.renderState)}if($e&&$e.includes("camera-access")&&b){e.state.unbindTexture(),g=n.getBinding();for(let mt=0;mt<se.length;mt++){const vt=se[mt].camera;if(vt){let wt=y[vt];wt||(wt=new tf,y[vt]=wt);const rt=g.getCameraImage(vt);wt.sourceTexture=rt}}}}for(let se=0;se<O.length;se++){const Ee=P[se],$e=O[se];Ee!==null&&$e!==void 0&&$e.update(Ee,ye,h||o)}et&&et(ce,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),S=null}const dt=new hf;dt.setAnimationLoop(nt),this.setAnimationLoop=function(ce){et=ce},this.dispose=function(){}}}const dr=new pi,TT=new ot;function wT(r,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,sf(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function i(x,y,C,L,D){y.isMeshBasicMaterial?s(x,y):y.isMeshLambertMaterial?(s(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(s(x,y),g(x,y)):y.isMeshPhongMaterial?(s(x,y),f(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(s(x,y),p(x,y),y.isMeshPhysicalMaterial&&_(x,y,D)):y.isMeshMatcapMaterial?(s(x,y),S(x,y)):y.isMeshDepthMaterial?s(x,y):y.isMeshDistanceMaterial?(s(x,y),b(x,y)):y.isMeshNormalMaterial?s(x,y):y.isLineBasicMaterial?(o(x,y),y.isLineDashedMaterial&&l(x,y)):y.isPointsMaterial?u(x,y,C,L):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function s(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===En&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===En&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const C=e.get(y),L=C.envMap,D=C.envMapRotation;L&&(x.envMap.value=L,dr.copy(D),dr.x*=-1,dr.y*=-1,dr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),x.envMapRotation.value.setFromMatrix4(TT.makeRotationFromEuler(dr)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function o(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function l(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function u(x,y,C,L){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*C,x.scale.value=L*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function f(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function p(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function _(x,y,C){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===En&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,y){y.matcap&&(x.matcap.value=y.matcap)}function b(x,y){const C=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AT(r,e,t,n){let i={},s={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(C,L){const D=L.program;n.uniformBlockBinding(C,D)}function h(C,L){let D=i[C.id];D===void 0&&(S(C),D=f(C),i[C.id]=D,C.addEventListener("dispose",x));const O=L.program;n.updateUBOMapping(C,O);const P=e.render.frame;s[C.id]!==P&&(p(C),s[C.id]=P)}function f(C){const L=g();C.__bindingPointIndex=L;const D=r.createBuffer(),O=C.__size,P=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,O,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function g(){for(let C=0;C<l;C++)if(o.indexOf(C)===-1)return o.push(C),C;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const L=i[C.id],D=C.uniforms,O=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let P=0,z=D.length;P<z;P++){const A=Array.isArray(D[P])?D[P]:[D[P]];for(let F=0,k=A.length;F<k;F++){const B=A[F];if(_(B,P,F,O)===!0){const Y=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let K=0;for(let ie=0;ie<Z.length;ie++){const J=Z[ie],te=b(J);typeof J=="number"||typeof J=="boolean"?(B.__data[0]=J,r.bufferSubData(r.UNIFORM_BUFFER,Y+K,B.__data)):J.isMatrix3?(B.__data[0]=J.elements[0],B.__data[1]=J.elements[1],B.__data[2]=J.elements[2],B.__data[3]=0,B.__data[4]=J.elements[3],B.__data[5]=J.elements[4],B.__data[6]=J.elements[5],B.__data[7]=0,B.__data[8]=J.elements[6],B.__data[9]=J.elements[7],B.__data[10]=J.elements[8],B.__data[11]=0):(J.toArray(B.__data,K),K+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(C,L,D,O){const P=C.value,z=L+"_"+D;if(O[z]===void 0)return typeof P=="number"||typeof P=="boolean"?O[z]=P:O[z]=P.clone(),!0;{const A=O[z];if(typeof P=="number"||typeof P=="boolean"){if(A!==P)return O[z]=P,!0}else if(A.equals(P)===!1)return A.copy(P),!0}return!1}function S(C){const L=C.uniforms;let D=0;const O=16;for(let z=0,A=L.length;z<A;z++){const F=Array.isArray(L[z])?L[z]:[L[z]];for(let k=0,B=F.length;k<B;k++){const Y=F[k],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,ie=Z.length;K<ie;K++){const J=Z[K],te=b(J),pe=D%O,_e=pe%te.boundary,Pe=pe+_e;D+=_e,Pe!==0&&O-Pe<te.storage&&(D+=O-Pe),Y.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=te.storage}}}const P=D%O;return P>0&&(D+=O-P),C.__size=D,C.__cache={},this}function b(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",C),L}function x(C){const L=C.target;L.removeEventListener("dispose",x);const D=o.indexOf(L.__bindingPointIndex);o.splice(D,1),r.deleteBuffer(i[L.id]),delete i[L.id],delete s[L.id]}function y(){for(const C in i)r.deleteBuffer(i[C]);o=[],i={},s={}}return{bind:u,update:h,dispose:y}}const RT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function CT(){return ri===null&&(ri=new Ol(RT,16,16,Jr,Pi),ri.name="DFG_LUT",ri.minFilter=an,ri.magFilter=an,ri.wrapS=oi,ri.wrapT=oi,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class PT{constructor(e={}){const{canvas:t=Hv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:_=wn}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=o;const b=_,x=new Set([Pl,Cl,Rl]),y=new Set([wn,fi,Ns,Us,Tl,wl]),C=new Uint32Array(4),L=new Int32Array(4);let D=null,O=null;const P=[],z=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let k=!1;this._outputColorSpace=jt;let B=0,Y=0,Z=null,K=-1,ie=null;const J=new Bt,te=new Bt;let pe=null;const _e=new Qe(0);let Pe=0,Ue=t.width,Le=t.height,et=1,nt=null,dt=null;const ce=new Bt(0,0,Ue,Le),ye=new Bt(0,0,Ue,Le);let se=!1;const Ee=new Bl;let $e=!1,Ke=!1;const Ct=new ot,mt=new H,vt=new Bt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Gt(){return Z===null?et:1}let G=n;function Ft(I,j){return t.getContext(I,j)}try{const I={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",Et,!1),G===null){const j="webgl2";if(G=Ft(j,I),G===null)throw Ft(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw Je("WebGLRenderer: "+I.message),I}let gt,Mt,Ne,N,T,W,ae,fe,oe,Oe,be,We,Ye,xe,Me,ke,Be,Ie,st,X,Te,Se,Ce;function $(){gt=new PE(G),gt.init(),Te=new yT(G,gt),Mt=new ME(G,gt,e,Te),Ne=new vT(G,gt),Mt.reversedDepthBuffer&&p&&Ne.buffers.depth.setReversed(!0),N=new DE(G),T=new rT,W=new xT(G,gt,Ne,T,Mt,Te,N),ae=new CE(F),fe=new ky(G),Se=new yE(G,fe),oe=new LE(G,fe,N,Se),Oe=new NE(G,oe,fe,Se,N),Ie=new FE(G,Mt,W),Me=new EE(T),be=new iT(F,ae,gt,Mt,Se,Me),We=new wT(F,T),Ye=new aT,xe=new dT(gt),Be=new xE(F,ae,Ne,Oe,S,u),ke=new _T(F,Oe,Mt),Ce=new AT(G,N,Mt,Ne),st=new SE(G,gt,N),X=new IE(G,gt,N),N.programs=be.programs,F.capabilities=Mt,F.extensions=gt,F.properties=T,F.renderLists=Ye,F.shadowMap=ke,F.state=Ne,F.info=N}$(),b!==wn&&(A=new OE(b,t.width,t.height,i,s));const V=new bT(F,G);this.xr=V,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const I=gt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=gt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(I){I!==void 0&&(et=I,this.setSize(Ue,Le,!1))},this.getSize=function(I){return I.set(Ue,Le)},this.setSize=function(I,j,re=!0){if(V.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=I,Le=j,t.width=Math.floor(I*et),t.height=Math.floor(j*et),re===!0&&(t.style.width=I+"px",t.style.height=j+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,I,j)},this.getDrawingBufferSize=function(I){return I.set(Ue*et,Le*et).floor()},this.setDrawingBufferSize=function(I,j,re){Ue=I,Le=j,et=re,t.width=Math.floor(I*re),t.height=Math.floor(j*re),this.setViewport(0,0,I,j)},this.setEffects=function(I){if(b===wn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let j=0;j<I.length;j++)if(I[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(J)},this.getViewport=function(I){return I.copy(ce)},this.setViewport=function(I,j,re,ne){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,j,re,ne),Ne.viewport(J.copy(ce).multiplyScalar(et).round())},this.getScissor=function(I){return I.copy(ye)},this.setScissor=function(I,j,re,ne){I.isVector4?ye.set(I.x,I.y,I.z,I.w):ye.set(I,j,re,ne),Ne.scissor(te.copy(ye).multiplyScalar(et).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(I){Ne.setScissorTest(se=I)},this.setOpaqueSort=function(I){nt=I},this.setTransparentSort=function(I){dt=I},this.getClearColor=function(I){return I.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(I=!0,j=!0,re=!0){let ne=0;if(I){let Q=!1;if(Z!==null){const we=Z.texture.format;Q=x.has(we)}if(Q){const we=Z.texture.type,Fe=y.has(we),de=Be.getClearColor(),ze=Be.getClearAlpha(),Ve=de.r,tt=de.g,it=de.b;Fe?(C[0]=Ve,C[1]=tt,C[2]=it,C[3]=ze,G.clearBufferuiv(G.COLOR,0,C)):(L[0]=Ve,L[1]=tt,L[2]=it,L[3]=ze,G.clearBufferiv(G.COLOR,0,L))}else ne|=G.COLOR_BUFFER_BIT}j&&(ne|=G.DEPTH_BUFFER_BIT),re&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Be.dispose(),Ye.dispose(),xe.dispose(),T.dispose(),ae.dispose(),Oe.dispose(),Se.dispose(),Ce.dispose(),be.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ln),V.removeEventListener("sessionend",js),In.stop()};function De(I){I.preventDefault(),eo("WebGLRenderer: Context Lost."),k=!0}function Ze(){eo("WebGLRenderer: Context Restored."),k=!1;const I=N.autoReset,j=ke.enabled,re=ke.autoUpdate,ne=ke.needsUpdate,Q=ke.type;$(),N.autoReset=I,ke.enabled=j,ke.autoUpdate=re,ke.needsUpdate=ne,ke.type=Q}function Et(I){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ut(I){const j=I.target;j.removeEventListener("dispose",ut),Vn(j)}function Vn(I){Zt(I),T.remove(I)}function Zt(I){const j=T.get(I).programs;j!==void 0&&(j.forEach(function(re){be.releaseProgram(re)}),I.isShaderMaterial&&be.releaseShaderCache(I))}this.renderBufferDirect=function(I,j,re,ne,Q,we){j===null&&(j=wt);const Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,de=vo(I,j,re,ne,Q);Ne.setMaterial(ne,Fe);let ze=re.index,Ve=1;if(ne.wireframe===!0){if(ze=oe.getWireframeAttribute(re),ze===void 0)return;Ve=2}const tt=re.drawRange,it=re.attributes.position;let He=tt.start*Ve,Tt=(tt.start+tt.count)*Ve;we!==null&&(He=Math.max(He,we.start*Ve),Tt=Math.min(Tt,(we.start+we.count)*Ve)),ze!==null?(He=Math.max(He,0),Tt=Math.min(Tt,ze.count)):it!=null&&(He=Math.max(He,0),Tt=Math.min(Tt,it.count));const Wt=Tt-He;if(Wt<0||Wt===1/0)return;Se.setup(Q,ne,de,re,ze);let Ut,Rt=st;if(ze!==null&&(Ut=fe.get(ze),Rt=X,Rt.setIndex(Ut)),Q.isMesh)ne.wireframe===!0?(Ne.setLineWidth(ne.wireframeLinewidth*Gt()),Rt.setMode(G.LINES)):Rt.setMode(G.TRIANGLES);else if(Q.isLine){let Qt=ne.linewidth;Qt===void 0&&(Qt=1),Ne.setLineWidth(Qt*Gt()),Q.isLineSegments?Rt.setMode(G.LINES):Q.isLineLoop?Rt.setMode(G.LINE_LOOP):Rt.setMode(G.LINE_STRIP)}else Q.isPoints?Rt.setMode(G.POINTS):Q.isSprite&&Rt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)to("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qt=Q._multiDrawStarts,E=Q._multiDrawCounts,ft=Q._multiDrawCount,St=ze?fe.get(ze).bytesPerElement:1,pn=T.get(ne).currentProgram.getUniforms();for(let dn=0;dn<ft;dn++)pn.setValue(G,"_gl_DrawID",dn),Rt.render(Qt[dn]/St,E[dn])}else if(Q.isInstancedMesh)Rt.renderInstances(He,Wt,Q.count);else if(re.isInstancedBufferGeometry){const Qt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,E=Math.min(re.instanceCount,Qt);Rt.renderInstances(He,Wt,E)}else Rt.render(He,Wt)};function Qi(I,j,re){I.transparent===!0&&I.side===On&&I.forceSinglePass===!1?(I.side=En,I.needsUpdate=!0,er(I,j,re),I.side=Ci,I.needsUpdate=!0,er(I,j,re),I.side=On):er(I,j,re)}this.compile=function(I,j,re=null){re===null&&(re=I),O=xe.get(re),O.init(j),z.push(O),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),I!==re&&I.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),O.setupLights();const ne=new Set;return I.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const we=Q.material;if(we)if(Array.isArray(we))for(let Fe=0;Fe<we.length;Fe++){const de=we[Fe];Qi(de,re,Q),ne.add(de)}else Qi(we,re,Q),ne.add(we)}),O=z.pop(),ne},this.compileAsync=function(I,j,re=null){const ne=this.compile(I,j,re);return new Promise(Q=>{function we(){if(ne.forEach(function(Fe){T.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){Q(I);return}setTimeout(we,10)}gt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ls=null;function _o(I){ls&&ls(I)}function Ln(){In.stop()}function js(){In.start()}const In=new hf;In.setAnimationLoop(_o),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(I){ls=I,V.setAnimationLoop(I),I===null?In.stop():In.start()},V.addEventListener("sessionstart",Ln),V.addEventListener("sessionend",js),this.render=function(I,j){if(j!==void 0&&j.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const re=V.enabled===!0&&V.isPresenting===!0,ne=A!==null&&(Z===null||re)&&A.begin(F,Z);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(V.cameraAutoUpdate===!0&&V.updateCamera(j),j=V.getCamera()),I.isScene===!0&&I.onBeforeRender(F,I,j,Z),O=xe.get(I,z.length),O.init(j),z.push(O),Ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ee.setFromProjectionMatrix(Ct,ci,j.reversedDepth),Ke=this.localClippingEnabled,$e=Me.init(this.clippingPlanes,Ke),D=Ye.get(I,P.length),D.init(),P.push(D),V.enabled===!0&&V.isPresenting===!0){const Fe=F.xr.getDepthSensingMesh();Fe!==null&&Ui(Fe,j,-1/0,F.sortObjects)}Ui(I,j,0,F.sortObjects),D.finish(),F.sortObjects===!0&&D.sort(nt,dt),rt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,rt&&Be.addToRenderList(D,I),this.info.render.frame++,$e===!0&&Me.beginShadows();const Q=O.state.shadowsArray;if(ke.render(Q,I,j),$e===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&A.hasRenderPass())===!1){const Fe=D.opaque,de=D.transmissive;if(O.setupLights(),j.isArrayCamera){const ze=j.cameras;if(de.length>0)for(let Ve=0,tt=ze.length;Ve<tt;Ve++){const it=ze[Ve];qs(Fe,de,I,it)}rt&&Be.render(I);for(let Ve=0,tt=ze.length;Ve<tt;Ve++){const it=ze[Ve];wr(D,I,it,it.viewport)}}else de.length>0&&qs(Fe,de,I,j),rt&&Be.render(I),wr(D,I,j)}Z!==null&&Y===0&&(W.updateMultisampleRenderTarget(Z),W.updateRenderTargetMipmap(Z)),ne&&A.end(F),I.isScene===!0&&I.onAfterRender(F,I,j),Se.resetDefaultState(),K=-1,ie=null,z.pop(),z.length>0?(O=z[z.length-1],$e===!0&&Me.setGlobalState(F.clippingPlanes,O.state.camera)):O=null,P.pop(),P.length>0?D=P[P.length-1]:D=null};function Ui(I,j,re,ne){if(I.visible===!1)return;if(I.layers.test(j.layers)){if(I.isGroup)re=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(j);else if(I.isLight)O.pushLight(I),I.castShadow&&O.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ee.intersectsSprite(I)){ne&&vt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Ct);const Fe=Oe.update(I),de=I.material;de.visible&&D.push(I,Fe,de,re,vt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ee.intersectsObject(I))){const Fe=Oe.update(I),de=I.material;if(ne&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),vt.copy(I.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),vt.copy(Fe.boundingSphere.center)),vt.applyMatrix4(I.matrixWorld).applyMatrix4(Ct)),Array.isArray(de)){const ze=Fe.groups;for(let Ve=0,tt=ze.length;Ve<tt;Ve++){const it=ze[Ve],He=de[it.materialIndex];He&&He.visible&&D.push(I,Fe,He,re,vt.z,it)}}else de.visible&&D.push(I,Fe,de,re,vt.z,null)}}const we=I.children;for(let Fe=0,de=we.length;Fe<de;Fe++)Ui(we[Fe],j,re,ne)}function wr(I,j,re,ne){const{opaque:Q,transmissive:we,transparent:Fe}=I;O.setupLightsView(re),$e===!0&&Me.setGlobalState(F.clippingPlanes,re),ne&&Ne.viewport(J.copy(ne)),Q.length>0&&Ar(Q,j,re),we.length>0&&Ar(we,j,re),Fe.length>0&&Ar(Fe,j,re),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function qs(I,j,re,ne){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ne.id]===void 0){const He=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ne.id]=new hi(1,1,{generateMipmaps:!0,type:He?Pi:wn,minFilter:Ti,samples:Math.max(4,Mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const we=O.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||J;we.setSize(Fe.z*F.transmissionResolutionScale,Fe.w*F.transmissionResolutionScale);const de=F.getRenderTarget(),ze=F.getActiveCubeFace(),Ve=F.getActiveMipmapLevel();F.setRenderTarget(we),F.getClearColor(_e),Pe=F.getClearAlpha(),Pe<1&&F.setClearColor(16777215,.5),F.clear(),rt&&Be.render(re);const tt=F.toneMapping;F.toneMapping=ui;const it=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),O.setupLightsView(ne),$e===!0&&Me.setGlobalState(F.clippingPlanes,ne),Ar(I,re,ne),W.updateMultisampleRenderTarget(we),W.updateRenderTargetMipmap(we),gt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Tt=0,Wt=j.length;Tt<Wt;Tt++){const Ut=j[Tt],{object:Rt,geometry:Qt,material:E,group:ft}=Ut;if(E.side===On&&Rt.layers.test(ne.layers)){const St=E.side;E.side=En,E.needsUpdate=!0,Ys(Rt,re,ne,Qt,E,ft),E.side=St,E.needsUpdate=!0,He=!0}}He===!0&&(W.updateMultisampleRenderTarget(we),W.updateRenderTargetMipmap(we))}F.setRenderTarget(de,ze,Ve),F.setClearColor(_e,Pe),it!==void 0&&(ne.viewport=it),F.toneMapping=tt}function Ar(I,j,re){const ne=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,we=I.length;Q<we;Q++){const Fe=I[Q],{object:de,geometry:ze,group:Ve}=Fe;let tt=Fe.material;tt.allowOverride===!0&&ne!==null&&(tt=ne),de.layers.test(re.layers)&&Ys(de,j,re,ze,tt,Ve)}}function Ys(I,j,re,ne,Q,we){I.onBeforeRender(F,j,re,ne,Q,we),I.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Q.onBeforeRender(F,j,re,ne,I,we),Q.transparent===!0&&Q.side===On&&Q.forceSinglePass===!1?(Q.side=En,Q.needsUpdate=!0,F.renderBufferDirect(re,j,ne,Q,I,we),Q.side=Ci,Q.needsUpdate=!0,F.renderBufferDirect(re,j,ne,Q,I,we),Q.side=On):F.renderBufferDirect(re,j,ne,Q,I,we),I.onAfterRender(F,j,re,ne,Q,we)}function er(I,j,re){j.isScene!==!0&&(j=wt);const ne=T.get(I),Q=O.state.lights,we=O.state.shadowsArray,Fe=Q.state.version,de=be.getParameters(I,Q.state,we,j,re),ze=be.getProgramCacheKey(de);let Ve=ne.programs;ne.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?j.environment:null,ne.fog=j.fog;const tt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ne.envMap=ae.get(I.envMap||ne.environment,tt),ne.envMapRotation=ne.environment!==null&&I.envMap===null?j.environmentRotation:I.envMapRotation,Ve===void 0&&(I.addEventListener("dispose",ut),Ve=new Map,ne.programs=Ve);let it=Ve.get(ze);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===Fe)return Js(I,de),it}else de.uniforms=be.getUniforms(I),I.onBeforeCompile(de,F),it=be.acquireProgram(de,ze),Ve.set(ze,it),ne.uniforms=de.uniforms;const He=ne.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(He.clippingPlanes=Me.uniform),Js(I,de),ne.needsLights=At(I),ne.lightsStateVersion=Fe,ne.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=it,ne.uniformsList=null,it}function Ks(I){if(I.uniformsList===null){const j=I.currentProgram.getUniforms();I.uniformsList=Ja.seqWithValue(j.seq,I.uniforms)}return I.uniformsList}function Js(I,j){const re=T.get(I);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function vo(I,j,re,ne,Q){j.isScene!==!0&&(j=wt),W.resetTextureUnits();const we=j.fog,Fe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?j.environment:null,de=Z===null?F.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Mn,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ve=ae.get(ne.envMap||Fe,ze),tt=ne.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,it=!!re.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),He=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,Wt=!!re.morphAttributes.color;let Ut=ui;ne.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ut=F.toneMapping);const Rt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Qt=Rt!==void 0?Rt.length:0,E=T.get(ne),ft=O.state.lights;if($e===!0&&(Ke===!0||I!==ie)){const Kt=I===ie&&ne.id===K;Me.setState(ne,I,Kt)}let St=!1;ne.version===E.__version?(E.needsLights&&E.lightsStateVersion!==ft.state.version||E.outputColorSpace!==de||Q.isBatchedMesh&&E.batching===!1||!Q.isBatchedMesh&&E.batching===!0||Q.isBatchedMesh&&E.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&E.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&E.instancing===!1||!Q.isInstancedMesh&&E.instancing===!0||Q.isSkinnedMesh&&E.skinning===!1||!Q.isSkinnedMesh&&E.skinning===!0||Q.isInstancedMesh&&E.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&E.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&E.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&E.instancingMorph===!1&&Q.morphTexture!==null||E.envMap!==Ve||ne.fog===!0&&E.fog!==we||E.numClippingPlanes!==void 0&&(E.numClippingPlanes!==Me.numPlanes||E.numIntersection!==Me.numIntersection)||E.vertexAlphas!==tt||E.vertexTangents!==it||E.morphTargets!==He||E.morphNormals!==Tt||E.morphColors!==Wt||E.toneMapping!==Ut||E.morphTargetsCount!==Qt)&&(St=!0):(St=!0,E.__version=ne.version);let pn=E.currentProgram;St===!0&&(pn=er(ne,j,Q));let dn=!1,vi=!1,ki=!1;const Pt=pn.getUniforms(),en=E.uniforms;if(Ne.useProgram(pn.program)&&(dn=!0,vi=!0,ki=!0),ne.id!==K&&(K=ne.id,vi=!0),dn||ie!==I){Ne.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Pt.setValue(G,"projectionMatrix",I.projectionMatrix),Pt.setValue(G,"viewMatrix",I.matrixWorldInverse);const Zn=Pt.map.cameraPosition;Zn!==void 0&&Zn.setValue(G,mt.setFromMatrixPosition(I.matrixWorld)),Mt.logarithmicDepthBuffer&&Pt.setValue(G,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue(G,"isOrthographic",I.isOrthographicCamera===!0),ie!==I&&(ie=I,vi=!0,ki=!0)}if(E.needsLights&&(ft.state.directionalShadowMap.length>0&&Pt.setValue(G,"directionalShadowMap",ft.state.directionalShadowMap,W),ft.state.spotShadowMap.length>0&&Pt.setValue(G,"spotShadowMap",ft.state.spotShadowMap,W),ft.state.pointShadowMap.length>0&&Pt.setValue(G,"pointShadowMap",ft.state.pointShadowMap,W)),Q.isSkinnedMesh){Pt.setOptional(G,Q,"bindMatrix"),Pt.setOptional(G,Q,"bindMatrixInverse");const Kt=Q.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Pt.setValue(G,"boneTexture",Kt.boneTexture,W))}Q.isBatchedMesh&&(Pt.setOptional(G,Q,"batchingTexture"),Pt.setValue(G,"batchingTexture",Q._matricesTexture,W),Pt.setOptional(G,Q,"batchingIdTexture"),Pt.setValue(G,"batchingIdTexture",Q._indirectTexture,W),Pt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Pt.setValue(G,"batchingColorTexture",Q._colorsTexture,W));const Jn=re.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&Ie.update(Q,re,pn),(vi||E.receiveShadow!==Q.receiveShadow)&&(E.receiveShadow=Q.receiveShadow,Pt.setValue(G,"receiveShadow",Q.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&j.environment!==null&&(en.envMapIntensity.value=j.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=CT()),vi&&(Pt.setValue(G,"toneMappingExposure",F.toneMappingExposure),E.needsLights&&xo(en,ki),we&&ne.fog===!0&&We.refreshFogUniforms(en,we),We.refreshMaterialUniforms(en,ne,et,Le,O.state.transmissionRenderTarget[I.id]),Ja.upload(G,Ks(E),en,W)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ja.upload(G,Ks(E),en,W),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue(G,"center",Q.center),Pt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Pt.setValue(G,"normalMatrix",Q.normalMatrix),Pt.setValue(G,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Kt=ne.uniformsGroups;for(let Zn=0,Bi=Kt.length;Zn<Bi;Zn++){const Xt=Kt[Zn];Ce.update(Xt,pn),Ce.bind(Xt,pn)}}return pn}function xo(I,j){I.ambientLightColor.needsUpdate=j,I.lightProbe.needsUpdate=j,I.directionalLights.needsUpdate=j,I.directionalLightShadows.needsUpdate=j,I.pointLights.needsUpdate=j,I.pointLightShadows.needsUpdate=j,I.spotLights.needsUpdate=j,I.spotLightShadows.needsUpdate=j,I.rectAreaLights.needsUpdate=j,I.hemisphereLights.needsUpdate=j}function At(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(I,j,re){const ne=T.get(I);ne.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),T.get(I.texture).__webglTexture=j,T.get(I.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:re,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,j){const re=T.get(I);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const yo=G.createFramebuffer();this.setRenderTarget=function(I,j=0,re=0){Z=I,B=j,Y=re;let ne=null,Q=!1,we=!1;if(I){const de=T.get(I);if(de.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(G.FRAMEBUFFER,de.__webglFramebuffer),J.copy(I.viewport),te.copy(I.scissor),pe=I.scissorTest,Ne.viewport(J),Ne.scissor(te),Ne.setScissorTest(pe),K=-1;return}else if(de.__webglFramebuffer===void 0)W.setupRenderTarget(I);else if(de.__hasExternalTextures)W.rebindTextures(I,T.get(I.texture).__webglTexture,T.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const tt=I.depthTexture;if(de.__boundDepthTexture!==tt){if(tt!==null&&T.has(tt)&&(I.width!==tt.image.width||I.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(I)}}const ze=I.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(we=!0);const Ve=T.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ve[j])?ne=Ve[j][re]:ne=Ve[j],Q=!0):I.samples>0&&W.useMultisampledRTT(I)===!1?ne=T.get(I).__webglMultisampledFramebuffer:Array.isArray(Ve)?ne=Ve[re]:ne=Ve,J.copy(I.viewport),te.copy(I.scissor),pe=I.scissorTest}else J.copy(ce).multiplyScalar(et).floor(),te.copy(ye).multiplyScalar(et).floor(),pe=se;if(re!==0&&(ne=yo),Ne.bindFramebuffer(G.FRAMEBUFFER,ne)&&Ne.drawBuffers(I,ne),Ne.viewport(J),Ne.scissor(te),Ne.setScissorTest(pe),Q){const de=T.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,de.__webglTexture,re)}else if(we){const de=j;for(let ze=0;ze<I.textures.length;ze++){const Ve=T.get(I.textures[ze]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,re,de)}}else if(I!==null&&re!==0){const de=T.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,de.__webglTexture,re)}K=-1},this.readRenderTargetPixels=function(I,j,re,ne,Q,we,Fe,de=0){if(!(I&&I.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){Ne.bindFramebuffer(G.FRAMEBUFFER,ze);try{const Ve=I.textures[de],tt=Ve.format,it=Ve.type;if(I.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+de),!Mt.textureFormatReadable(tt)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(it)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=I.width-ne&&re>=0&&re<=I.height-Q&&G.readPixels(j,re,ne,Q,Te.convert(tt),Te.convert(it),we)}finally{const Ve=Z!==null?T.get(Z).__webglFramebuffer:null;Ne.bindFramebuffer(G.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(I,j,re,ne,Q,we,Fe,de=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze)if(j>=0&&j<=I.width-ne&&re>=0&&re<=I.height-Q){Ne.bindFramebuffer(G.FRAMEBUFFER,ze);const Ve=I.textures[de],tt=Ve.format,it=Ve.type;if(I.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+de),!Mt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,He),G.bufferData(G.PIXEL_PACK_BUFFER,we.byteLength,G.STREAM_READ),G.readPixels(j,re,ne,Q,Te.convert(tt),Te.convert(it),0);const Tt=Z!==null?T.get(Z).__webglFramebuffer:null;Ne.bindFramebuffer(G.FRAMEBUFFER,Tt);const Wt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Gv(G,Wt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,He),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,we),G.deleteBuffer(He),G.deleteSync(Wt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,j=null,re=0){const ne=Math.pow(2,-re),Q=Math.floor(I.image.width*ne),we=Math.floor(I.image.height*ne),Fe=j!==null?j.x:0,de=j!==null?j.y:0;W.setTexture2D(I,0),G.copyTexSubImage2D(G.TEXTURE_2D,re,0,0,Fe,de,Q,we),Ne.unbindTexture()};const Zs=G.createFramebuffer(),Oi=G.createFramebuffer();this.copyTextureToTexture=function(I,j,re=null,ne=null,Q=0,we=0){let Fe,de,ze,Ve,tt,it,He,Tt,Wt;const Ut=I.isCompressedTexture?I.mipmaps[we]:I.image;if(re!==null)Fe=re.max.x-re.min.x,de=re.max.y-re.min.y,ze=re.isBox3?re.max.z-re.min.z:1,Ve=re.min.x,tt=re.min.y,it=re.isBox3?re.min.z:0;else{const en=Math.pow(2,-Q);Fe=Math.floor(Ut.width*en),de=Math.floor(Ut.height*en),I.isDataArrayTexture?ze=Ut.depth:I.isData3DTexture?ze=Math.floor(Ut.depth*en):ze=1,Ve=0,tt=0,it=0}ne!==null?(He=ne.x,Tt=ne.y,Wt=ne.z):(He=0,Tt=0,Wt=0);const Rt=Te.convert(j.format),Qt=Te.convert(j.type);let E;j.isData3DTexture?(W.setTexture3D(j,0),E=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(W.setTexture2DArray(j,0),E=G.TEXTURE_2D_ARRAY):(W.setTexture2D(j,0),E=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const ft=G.getParameter(G.UNPACK_ROW_LENGTH),St=G.getParameter(G.UNPACK_IMAGE_HEIGHT),pn=G.getParameter(G.UNPACK_SKIP_PIXELS),dn=G.getParameter(G.UNPACK_SKIP_ROWS),vi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ut.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ut.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ve),G.pixelStorei(G.UNPACK_SKIP_ROWS,tt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,it);const ki=I.isDataArrayTexture||I.isData3DTexture,Pt=j.isDataArrayTexture||j.isData3DTexture;if(I.isDepthTexture){const en=T.get(I),Jn=T.get(j),Kt=T.get(en.__renderTarget),Zn=T.get(Jn.__renderTarget);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Bi=0;Bi<ze;Bi++)ki&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(I).__webglTexture,Q,it+Bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,T.get(j).__webglTexture,we,Wt+Bi)),G.blitFramebuffer(Ve,tt,Fe,de,He,Tt,Fe,de,G.DEPTH_BUFFER_BIT,G.NEAREST);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||I.isRenderTargetTexture||T.has(I)){const en=T.get(I),Jn=T.get(j);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,Zs),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,Oi);for(let Kt=0;Kt<ze;Kt++)ki?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,en.__webglTexture,Q,it+Kt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,en.__webglTexture,Q),Pt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Jn.__webglTexture,we,Wt+Kt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Jn.__webglTexture,we),Q!==0?G.blitFramebuffer(Ve,tt,Fe,de,He,Tt,Fe,de,G.COLOR_BUFFER_BIT,G.NEAREST):Pt?G.copyTexSubImage3D(E,we,He,Tt,Wt+Kt,Ve,tt,Fe,de):G.copyTexSubImage2D(E,we,He,Tt,Ve,tt,Fe,de);Ne.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Pt?I.isDataTexture||I.isData3DTexture?G.texSubImage3D(E,we,He,Tt,Wt,Fe,de,ze,Rt,Qt,Ut.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(E,we,He,Tt,Wt,Fe,de,ze,Rt,Ut.data):G.texSubImage3D(E,we,He,Tt,Wt,Fe,de,ze,Rt,Qt,Ut):I.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,we,He,Tt,Fe,de,Rt,Qt,Ut.data):I.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,we,He,Tt,Ut.width,Ut.height,Rt,Ut.data):G.texSubImage2D(G.TEXTURE_2D,we,He,Tt,Fe,de,Rt,Qt,Ut);G.pixelStorei(G.UNPACK_ROW_LENGTH,ft),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,St),G.pixelStorei(G.UNPACK_SKIP_PIXELS,pn),G.pixelStorei(G.UNPACK_SKIP_ROWS,dn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,vi),we===0&&j.generateMipmaps&&G.generateMipmap(E),Ne.unbindTexture()},this.initRenderTarget=function(I){T.get(I).__webglFramebuffer===void 0&&W.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?W.setTextureCube(I,0):I.isData3DTexture?W.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?W.setTexture2DArray(I,0):W.setTexture2D(I,0),Ne.unbindTexture()},this.resetState=function(){B=0,Y=0,Z=null,Ne.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const LT="xlab-roboracer-offroad-1-10",IT="f11738ed35a995c0bc046666e3cb9eb0f7bda053",DT={wheel_radius:.055,wheel_width:.041,wheel_base:.324,wheel_tread:.255,max_steer_angle:.4},FT={body_frame_xyz_m:[.25083,0,.13677]},Is={id:LT,source_commit:IT,geometry:DT,camera:FT},_r=Is.geometry,fn=Object.freeze({wheelbase:_r.wheel_base,tread:_r.wheel_tread,radius:_r.wheel_radius,wheelWidth:_r.wheel_width,maxSteer:_r.max_steer_angle}),ld=Is,Xr=Object.freeze([Is.camera.body_frame_xyz_m[0]-_r.wheel_base/2,Is.camera.body_frame_xyz_m[1],Is.camera.body_frame_xyz_m[2]-_r.wheel_radius-.04]),Ds=1.9,_f=new Hl([[-3,-6],[5,-6],[10,-4],[11,1],[8,6],[3,6],[0,2],[-4,1],[-7,5],[-11,4],[-12,-1],[-9,-6]].map(([r,e])=>new H(r,e,0)),!0,"centripetal"),kt=_f.getSpacedPoints(240).slice(0,-1),Gs=_f.getLength();function Rn(r){const e=kt.length,t=kt[(r+e)%e],n=kt[(r+1+e)%e],i=kt[(r-1+e)%e],s=n.clone().sub(i).normalize();return{p:t,tangent:s,normal:new H(-s.y,s.x,0),yaw:Math.atan2(s.y,s.x)}}const NT=[-1,1].flatMap(r=>kt.map((e,t)=>{const n=Rn(t),i=Rn(t+1),s=n.p.clone().addScaledVector(n.normal,r*(Ds/2+.09)),o=i.p.clone().addScaledVector(i.normal,r*(Ds/2+.09));return{x:(s.x+o.x)/2,y:(s.y+o.y)/2,z:.13,halfLength:s.distanceTo(o)/2+.012,yaw:Math.atan2(o.y-s.y,o.x-s.x),side:r,index:t}}));function Fs(r){let e=0,t=1/0;for(let n=0;n<kt.length;n++){const i=Math.hypot(r[0]-kt[n].x,r[1]-kt[n].y);i<t&&(t=i,e=n)}return{index:e,distance:t,...Rn(e)}}function UT(){const r=Rn(0),e=[["fl",1,1],["fr",1,-1],["rl",-1,1],["rr",-1,-1]];return`<mujoco model="RoboRacer browser practice">
  <compiler angle="radian"/>
  <option timestep="0.004" integrator="implicitfast" iterations="30" gravity="0 0 -9.81"/>
  <default><geom friction="1 .005 .0001" condim="4" solref=".01 1" solimp=".95 .99 .001"/><joint damping=".003" armature=".00002"/></default>
  <worldbody>
    <geom name="floor" type="plane" size="22 16 .1"/>
    ${NT.map((t,n)=>`<geom name="barrier_${n}" type="box" pos="${t.x} ${t.y} ${t.z}" euler="0 0 ${t.yaw}" size="${t.halfLength} .08 .13"/>`).join("")}
    <body name="chassis" pos="${r.p.x} ${r.p.y} .12" euler="0 0 ${r.yaw}">
      <freejoint name="root"/>
      <geom name="chassis_collision" type="box" size=".245 .105 .035" mass="3.1"/>
      <geom name="camera_collision" type="box" pos="${Xr.join(" ")}" size=".014 .045 .0125" mass=".05"/>
      ${e.map(([t,n,i])=>`<body name="susp_${t}" pos="${n*fn.wheelbase/2} ${i*fn.tread/2} -.04">
        <joint name="spring_${t}" type="slide" axis="0 0 1" range="-.018 .018" stiffness="1500" damping="12"/>
        <inertial pos="0 0 0" mass=".025" diaginertia=".00001 .00001 .00001"/>
        <body name="hub_${t}">
          ${n===1?`<joint name="steer_${t}" type="hinge" axis="0 0 1" range="-.5 .5" damping=".6"/>`:""}
          <inertial pos="0 0 0" mass=".02" diaginertia=".00001 .00001 .00001"/>
          <body name="wheel_${t}">
            <joint name="roll_${t}" type="hinge" axis="0 1 0"/>
            <geom name="tire_${t}" type="cylinder" size="${fn.radius} ${fn.wheelWidth/2}" euler="1.57079632679 0 0" mass=".08"/>
          </body>
        </body>
      </body>`).join("")}
    </body>
  </worldbody>
  <contact>
    <!-- The coarse chassis hull is not a wheel-well collision surface. -->
    ${e.map(([t])=>`<exclude name="chassis_wheel_${t}" body1="chassis" body2="wheel_${t}"/>`).join("")}
  </contact>
  <actuator>
    <position name="steer_left" joint="steer_fl" kp="15" kv=".6" ctrlrange="-.5 .5" forcerange="-3 3"/>
    <position name="steer_right" joint="steer_fr" kp="15" kv=".6" ctrlrange="-.5 .5" forcerange="-3 3"/>
    <velocity name="drive_left" joint="roll_rl" kv=".15" ctrlrange="-140 140" forcerange="-1.2 1.2"/>
    <velocity name="drive_right" joint="roll_rr" kv=".15" ctrlrange="-140 140" forcerange="-1.2 1.2"/>
  </actuator>
  </mujoco>`}const _l=(r,e=-1,t=1)=>Math.max(e,Math.min(t,r)),OT=[0,.25,.5,.75,1],vf="car-mujoco-policy-v1";function xf(r){const e=r.position,t=Fs(e),n=r.yaw,i=t.yaw-n,s=(e[0]-t.p.x)*t.normal.x+(e[1]-t.p.y)*t.normal.y,o=[r.speed/3,s,Math.sin(i),Math.cos(i),r.steering,r.targetSpeed/3,r.speedLimit/3];for(const l of[.5,1,2,3,5]){const u=Rn(t.index+Math.round(l/(Gs/kt.length))).p,h=u.x-e[0],f=u.y-e[1];o.push((Math.cos(n)*h+Math.sin(n)*f)/5,(-Math.sin(n)*h+Math.cos(n)*f)/5)}return o}function yf(r,e){if(e.length!==r.mean.length||e.some(n=>!Number.isFinite(n)))throw new Error("Invalid policy observation");let t=e.map((n,i)=>(n-r.mean[i])/r.std[i]);for(let n=0;n<r.layers.length;n++){const i=r.layers[n],s=new Array(i.bias.length);for(let o=0;o<s.length;o++){const l=i.weight[o];let u=i.bias[o];for(let h=0;h<t.length;h++)u+=l[h]*t[h];s[o]=n<r.layers.length-1?Math.tanh(u):u}t=s}return t}function Sf(r,e){const[t,n]=yf(r,xf(e));return{steer:_l(t),throttle:_l(n,0,1),brake:0,source:"learned-il"}}class kT{constructor(){this.reset()}reset(){this.error=0,this.variation=0,this.previous=0,this.seconds=0}update(e,t,n=.02){if(e.throttle<=.02||e.brake>.02)return;const i=1-Math.exp(-n/3);this.error+=(Math.abs(e.steer-t.steer)-this.error)*i,this.variation+=(Math.abs(e.steer-this.previous)-this.variation)*i,this.previous=e.steer,this.seconds+=n}observation(){return[this.error,this.variation,Math.min(this.seconds/5,1)]}}function BT(r,e,t,n){return[...xf(r),e.steer,e.throttle,e.brake,t.steer,t.throttle,...n.observation()]}function zT(r,e,t,n,i){const s=yf(r,BT(e,t,n,i));return OT[s.indexOf(Math.min(...s))]}function VT(r,e,t){const n=_l(t,0,1);return r.brake>.02||r.throttle<=.02?{...r}:{steer:(1-n)*r.steer+n*e.steer,throttle:(1-n)*r.throttle+n*Math.min(r.throttle,e.throttle),brake:r.brake,source:n>0?"assisted":r.source}}function Mf(r,e,t,n){if(!r||r.mean.length!==t||r.std.length!==t||!r.std.every(s=>Number.isFinite(s)&&s>0))throw new Error(`Invalid ${e} normalization`);let i=t;for(const s of r.layers){if(s.weight.length!==s.bias.length||!s.weight.every(o=>o.length===i&&o.every(Number.isFinite))||!s.bias.every(Number.isFinite))throw new Error(`Invalid ${e} weights`);i=s.bias.length}if(i!==n)throw new Error(`Invalid ${e} output`)}function HT(r){if(r.schema!==vf)throw new Error("Unsupported driving policy");Mf(r.driver,"driver",17,2);const e=r.envelope?.maxSpeedLimitMps;if(!Number.isFinite(e)||e<.8||e>7||!r.training?.driver?.model_xml_sha256)throw new Error("Invalid Auto operating envelope");return r}function GT(r){if(r.schema!==vf)throw new Error("Unsupported driving policy");for(const[e,t,n]of[["driver",17,2],["coach",25,5]])Mf(r[e],e,t,n);return r}const Un=(r,e=-1,t=1)=>Math.max(e,Math.min(t,r)),ud=Gs/kt.length;function Ef(r,e){const t=kt.map((n,i)=>{const s=Rn(i-2).yaw,o=Rn(i+2).yaw,l=Math.abs(Math.atan2(Math.sin(o-s),Math.cos(o-s)))/(4*ud);return Math.min(7,Math.sqrt(r/Math.max(l,.001)))});for(let n=0;n<3;n++)for(let i=kt.length-1;i>=0;i--)t[i]=Math.min(t[i],Math.sqrt(t[(i+1)%kt.length]**2+2*e*ud));return t}const WT=Ef(1,1.7),yc=new Map;class XT{constructor(e){this.mj=e,this.model=e.MjModel.from_xml_string(UT()),this.data=new e.MjData(this.model),this.mode="manual",this.speedLimit=2,this.fixedAssistance=.85,this.policies=null,this.autoPolicy=null,this.history=new kT,this.events=[],this.samples=[],this.reset()}get position(){return Array.from(this.data.qpos.subarray(0,3))}get quaternion(){return Array.from(this.data.qpos.subarray(3,7))}get yaw(){const[e,t,n,i]=this.quaternion;return Math.atan2(2*(e*i+t*n),1-2*(n*n+i*i))}get speed(){return this.data.qvel[0]*Math.cos(this.yaw)+this.data.qvel[1]*Math.sin(this.yaw)}reset(){this.mj.mj_resetData(this.model,this.data),this.mj.mj_forward(this.model,this.data),this.elapsed=0,this.laps=0,this.lastLap=null,this.bestLap=null,this.lapStart=0,this.hits=0,this.progress=0,this.previousIndex=0,this.targetSpeed=0,this.steering=0,this.lastContact=!1,this.lapValid=!0,this.bestByMode={manual:null,demo:null,fixed:null,coach:null,expert:null},this.assistance=0,this.requestedAssistance=0,this.policyTicks=0,this.history.reset(),this.samples=[],this.events=[{type:"reset",t:0,mode:this.mode}],this.input={steer:0,throttle:0,brake:0,source:"none"},this.expertInput=null}setMode(e){if(!["manual","demo","fixed","coach","expert"].includes(e))throw new Error("Unknown control mode");if(["fixed","coach","expert"].includes(e)&&!this.policies)throw new Error("Learned policies are not loaded");e!==this.mode&&this.elapsed>.05&&(this.lapValid=!1),this.mode=e,this.bestLap=this.bestByMode[e],this.lastLap=null,this.targetSpeed=0,this.assistance=0,this.requestedAssistance=0,this.expertInput=null,this.policyTicks=0,this.events.push({type:"mode",mode:e,t:this.elapsed})}setPolicies(e){this.policies=GT(e)}setAutoPolicy(e){if(HT(e),!this.policies||e.training.driver.model_xml_sha256!==this.policies.training.driver.model_xml_sha256)throw new Error("Auto and assistance require the same physical model");this.autoPolicy=e}get autoSpeedLimit(){return this.autoPolicy?.envelope.maxSpeedLimitMps??2}expertAction(){return Sf((this.mode==="expert"&&this.autoPolicy?this.autoPolicy:this.policies).driver,this)}demonstration(){const e=this.racingProfile,t=Fs(this.position),n=(e?.lookBase??.65)+Math.abs(this.speed)*(e?.lookGain??.35),i=Rn(t.index+Math.ceil(n/(Gs/kt.length))).p,s=i.x-this.position[0],o=i.y-this.position[1],l=-Math.sin(this.yaw)*s+Math.cos(this.yaw)*o,u=Math.atan2(2*fn.wheelbase*l,s*s+o*o);let h=WT;if(e){const g=`${e.lateralAcceleration}/${e.brakingAcceleration}`;yc.has(g)||yc.set(g,Ef(e.lateralAcceleration,e.brakingAcceleration)),h=yc.get(g)}const f=!e&&this.speedLimit<=2?Math.min(this.speedLimit,2.3/(1+Math.abs(u)*4)):Math.min(this.speedLimit,h[t.index],(e?.speedFloor??1.2)+(7-(e?.speedFloor??1.2))*Math.exp(-(e?.steeringFalloff??25)*Math.abs(u)));return{steer:Un(u/fn.maxSteer),throttle:f/this.speedLimit,brake:0,source:"pure-pursuit"}}step(e={steer:0,throttle:0,brake:0,source:"none"}){if(![e.steer,e.throttle,e.brake].every(Number.isFinite))throw new Error("Non-finite human input");this.humanInput={...e};let t=e;if(this.mode==="demo")t=this.demonstration();else if(this.policies){const b=this.expertAction();if(this.expertInput={...b},this.mode==="expert")t=b,this.assistance=1;else{this.history.update(e,b),this.mode==="fixed"?this.requestedAssistance=this.fixedAssistance:this.mode==="coach"&&this.policyTicks%10===0?this.requestedAssistance=zT(this.policies.coach,this,e,b,this.history):this.mode==="manual"&&(this.requestedAssistance=0);const x=this.mode==="manual"||this.mode==="fixed"&&this.fixedAssistance===0;this.assistance=x?0:this.assistance+Un(this.requestedAssistance-this.assistance,-.025,.025),(e.throttle<=.02||e.brake>.02)&&(this.assistance=0),t=VT(e,b,this.assistance)}this.policyTicks++}if(![t.steer,t.throttle,t.brake].every(Number.isFinite))throw new Error("Non-finite input");this.input={...t};const n=t.brake>0?t.throttle>0?0:-Un(t.brake,0,1)*.7:Un(t.throttle,0,1)*this.speedLimit,i=t.brake>0&&this.speed>.12?0:n,s=t.brake>0?5:2;this.targetSpeed+=Un(i-this.targetSpeed,-s*.02,s*.02);const o=Math.min(1,(2/Math.max(2,Math.abs(this.speed)))**2),l=fn.maxSteer*o,u=1.6*Math.sqrt(o);this.steering+=Un(Un(t.steer)*l-this.steering,-u*.02,u*.02);const h=Math.tan(this.steering)/fn.wheelbase;this.data.ctrl[0]=Math.atan(fn.wheelbase*h/(1-fn.tread/2*h)),this.data.ctrl[1]=Math.atan(fn.wheelbase*h/(1+fn.tread/2*h)),this.data.ctrl[2]=this.targetSpeed*(1-fn.tread/2*h)/fn.radius,this.data.ctrl[3]=this.targetSpeed*(1+fn.tread/2*h)/fn.radius;let f=!1;for(let b=0;b<5;b++){this.mj.mj_step(this.model,this.data);const x=this.data.contact;for(let y=0;y<this.data.ncon;y++){const C=x.get(y),L=this.model.geom_bodyid[C.geom1],D=this.model.geom_bodyid[C.geom2];(L===0?C.geom1:D===0?C.geom2:0)>0&&L===0!=(D===0)&&(f=!0),C.delete()}x.delete()}this.mj.mj_forward(this.model,this.data),this.elapsed+=.02,f&&!this.lastContact&&(this.hits++,this.events.push({type:"collision",t:this.elapsed})),this.lastContact=f;const g=Fs(this.position),p=kt.length;let _=g.index-this.previousIndex;_>p/2&&(_-=p),_<-p/2&&(_+=p),g.distance<1.4&&Math.abs(_)<p/8&&(this.progress+=_);const S=this.previousIndex>p-8&&g.index<8&&_>0&&g.distance<1.4;this.previousIndex=g.index,!this.lapValid&&S&&(this.progress=this.laps*p,this.lapStart=this.elapsed,this.lapValid=!0),this.lapValid&&this.progress>=(this.laps+1)*p&&(this.laps++,this.lastLap=this.elapsed-this.lapStart,this.lapStart=this.elapsed,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap),this.bestByMode[this.mode]=this.bestLap,this.events.push({type:"lap",t:this.elapsed,seconds:this.lastLap,lap:this.laps,mode:this.mode})),Math.round(this.elapsed*50)%5===0&&this.samples.length<36e3&&this.samples.push({t:+this.elapsed.toFixed(2),position:this.position,yaw:this.yaw,speed:this.speed,mode:this.mode,input:{...this.input},humanInput:{...e},assistance:this.assistance,history:this.history.observation(),distanceFromCenter:g.distance,lap:this.laps,hits:this.hits})}recover(){const e=Fs(this.position),t=Rn(e.index);this.data.qpos.set([t.p.x,t.p.y,.12,Math.cos(t.yaw/2),0,0,Math.sin(t.yaw/2)],0),this.data.qpos.fill(0,7),this.data.qvel.fill(0),this.data.ctrl.fill(0),this.targetSpeed=0,this.steering=0,this.progress=this.laps*kt.length,this.previousIndex=e.index,this.lapStart=this.elapsed,this.lapValid=!1,this.lastContact=!1,this.events.push({type:"recovery",t:this.elapsed}),this.mj.mj_forward(this.model,this.data)}snapshot(){return{position:this.position,quaternion:this.quaternion,speed:this.speed,elapsed:this.elapsed,mode:this.mode,laps:this.laps,hits:this.hits,lastLap:this.lastLap,bestLap:this.bestLap,input:this.input,steering:this.steering,progress:this.progress,assistance:this.assistance,history:this.history.observation(),policiesReady:!!this.policies}}export(){return{schema:"car-practice-v2",vehicle:"AutoDRIVE F1TENTH visual / xLab RoboRacer geometry",hardwareProfile:ld.id,hardwareSourceCommit:ld.source_commit,wheelbaseM:fn.wheelbase,physics:"MuJoCo 3.13.0",nativeAutoDrivePhysics:!1,calibratedToRealCar:!1,course:"authored practice circuit v1",speedLimitMps:this.speedLimit,fixedAssistance:this.fixedAssistance,policyTraining:this.policies?.training??null,autoPolicyTraining:this.autoPolicy?.training??null,autoPolicyEnvelope:this.autoPolicy?.envelope??null,policyClaim:this.policies?.claim??null,sampleLimitReached:this.samples.length>=36e3,samples:this.samples,events:this.events}}dispose(){this.data.delete(),this.model.delete()}}class $T extends Tr{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Xl(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(s.parse(l))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){function t(h){const f=new DataView(h),g=32/8*3+32/8*3*3+16/8,p=f.getUint32(80,!0);if(80+32/8+p*g===f.byteLength)return!0;const S=[115,111,108,105,100];for(let b=0;b<5;b++)if(n(S,f,b))return!1;return!0}function n(h,f,g){for(let p=0,_=h.length;p<_;p++)if(h[p]!==f.getUint8(g+p))return!1;return!0}function i(h){const f=new DataView(h),g=f.getUint32(80,!0);let p,_,S,b=!1,x,y,C,L,D;for(let B=0;B<70;B++)f.getUint32(B,!1)==1129270351&&f.getUint8(B+4)==82&&f.getUint8(B+5)==61&&(b=!0,x=new Float32Array(g*3*3),y=f.getUint8(B+6)/255,C=f.getUint8(B+7)/255,L=f.getUint8(B+8)/255,D=f.getUint8(B+9)/255);const O=84,P=50,z=new qt,A=new Float32Array(g*3*3),F=new Float32Array(g*3*3),k=new Qe;for(let B=0;B<g;B++){const Y=O+B*P,Z=f.getFloat32(Y,!0),K=f.getFloat32(Y+4,!0),ie=f.getFloat32(Y+8,!0);if(b){const J=f.getUint16(Y+48,!0);(J&32768)===0?(p=(J&31)/31,_=(J>>5&31)/31,S=(J>>10&31)/31):(p=y,_=C,S=L)}for(let J=1;J<=3;J++){const te=Y+J*12,pe=B*3*3+(J-1)*3;A[pe]=f.getFloat32(te,!0),A[pe+1]=f.getFloat32(te+4,!0),A[pe+2]=f.getFloat32(te+8,!0),F[pe]=Z,F[pe+1]=K,F[pe+2]=ie,b&&(k.setRGB(p,_,S,jt),x[pe]=k.r,x[pe+1]=k.g,x[pe+2]=k.b)}}return z.setAttribute("position",new hn(A,3)),z.setAttribute("normal",new hn(F,3)),b&&(z.setAttribute("color",new hn(x,3)),z.hasColors=!0,z.alpha=D),z}function s(h){const f=new qt,g=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,_=/solid\s(.+)/;let S=0;const b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+b+b+b,"g"),y=new RegExp("normal"+b+b+b,"g"),C=[],L=[],D=[],O=new H;let P,z=0,A=0,F=0;for(;(P=g.exec(h))!==null;){A=F;const k=P[0],B=(P=_.exec(k))!==null?P[1]:"";for(D.push(B);(P=p.exec(k))!==null;){let K=0,ie=0;const J=P[0];for(;(P=y.exec(J))!==null;)O.x=parseFloat(P[1]),O.y=parseFloat(P[2]),O.z=parseFloat(P[3]),ie++;for(;(P=x.exec(J))!==null;)C.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),L.push(O.x,O.y,O.z),K++,F++;ie!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+S),K!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+S),S++}const Y=A,Z=F-A;f.userData.groupNames=D,f.addGroup(Y,Z,z),z++}return f.setAttribute("position",new Ht(C,3)),f.setAttribute("normal",new Ht(L,3)),f}function o(h){return typeof h!="string"?new TextDecoder().decode(h):h}function l(h){if(typeof h=="string"){const f=new Uint8Array(h.length);for(let g=0;g<h.length;g++)f[g]=h.charCodeAt(g)&255;return f.buffer||f}else return h}const u=l(e);return t(u)?i(u):s(o(e))}}function hd(r,e){if(e===Lv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===hl||e===Hd){let t=r.getIndex();if(t===null){const o=[],l=r.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)o.push(u);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===hl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function jT(r){const e=new Map,t=new Map,n=r.clone();return bf(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),l=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=l.map(function(u){return t.get(u)}),s.bind(s.skeleton,s.bindMatrix)}),n}function bf(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)bf(r.children[n],e.children[n],t)}class qT extends Tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new QT(t)}),this.register(function(t){return new ew(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new nw(t)}),this.register(function(t){return new iw(t)}),this.register(function(t){return new rw(t)}),this.register(function(t){return new sw(t)}),this.register(function(t){return new ZT(t)}),this.register(function(t){return new aw(t)}),this.register(function(t){return new tw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new ow(t)}),this.register(function(t){return new KT(t)}),this.register(function(t){return new dd(t,pt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new dd(t,pt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new dw(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=Ls.extractUrlBase(e);o=Ls.resolveURL(h,this.path)}else o=Ls.extractUrlBase(e);this.manager.itemStart(e);const l=function(h){i?i(h):console.error(h),s.manager.itemError(e),s.manager.itemEnd(e)},u=new Xl(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{s.parse(h,o,function(f){t(f),s.manager.itemEnd(e)},l)}catch(f){l(f)}},n,l)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},l={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===Tf){try{o[pt.KHR_BINARY_GLTF]=new fw(e)}catch(g){i&&i(g);return}s=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new ww(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const g=this.pluginCallbacks[f](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[g.name]=g,o[g.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const g=s.extensionsUsed[f],p=s.extensionsRequired||[];switch(g){case pt.KHR_MATERIALS_UNLIT:o[g]=new JT;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[g]=new pw(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[g]=new mw;break;case pt.KHR_MESH_QUANTIZATION:o[g]=new gw;break;default:p.indexOf(g)>=0&&l[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(o),h.setPlugins(l),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function YT(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Yt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class KT{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let h;const f=new Qe(16777215);u.color!==void 0&&f.setRGB(u.color[0],u.color[1],u.color[2],Mn);const g=u.range!==void 0?u.range:0;switch(u.type){case"directional":h=new uf(f),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Ey(f),h.distance=g;break;case"spot":h=new Sy(f),h.distance=g,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,h.angle=u.spot.outerConeAngle,h.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return h.position.set(0,0,0),si(h,u),u.intensity!==void 0&&(h.intensity=u.intensity),h.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],l=(s.extensions&&s.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(t.cache,l,u)})}}class JT{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,jt))}return Promise.all(i)}}class ZT{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class QT{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(s,s)}return Promise.all(i)}}class ew{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class tw{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class nw{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,jt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class iw{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class rw{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Qe().setRGB(s[0],s[1],s[2],Mn),Promise.all(i)}}class sw{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5),Promise.resolve()}}class aw{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Qe().setRGB(s[0],s[1],s[2],Mn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,jt)),Promise.all(i)}}class ow{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class cw{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?_i:null}extendMaterialParams(e,t){const n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class lw{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class uw{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return n.loadTextureImage(e,o.source,u)}}class hw{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],l=i.images[o.source];let u=n.textureLoader;if(l.uri){const h=n.options.manager.getHandler(l.uri);h!==null&&(u=h)}return n.loadTextureImage(e,o.source,u)}}class dd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(l){const u=i.byteOffset||0,h=i.byteLength||0,f=i.count,g=i.byteStride,p=new Uint8Array(l,u,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,g,p,i.mode,i.filter).then(function(_){return _.buffer}):o.ready.then(function(){const _=new ArrayBuffer(f*g);return o.decodeGltfBuffer(new Uint8Array(_),f,g,p,i.mode,i.filter),_})})}else return null}}class dw{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Nn.TRIANGLES&&h.mode!==Nn.TRIANGLE_STRIP&&h.mode!==Nn.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],u={};for(const h in o)l.push(this.parser.getDependency("accessor",o[h]).then(f=>(u[h]=f,u[h])));return l.length<1?null:(l.push(this.parser.createNodeMesh(e)),Promise.all(l).then(h=>{const f=h.pop(),g=f.isGroup?f.children:[f],p=h[0].count,_=[];for(const S of g){const b=new ot,x=new H,y=new Yn,C=new H(1,1,1),L=new Jd(S.geometry,S.material,p);for(let D=0;D<p;D++)u.TRANSLATION&&x.fromBufferAttribute(u.TRANSLATION,D),u.ROTATION&&y.fromBufferAttribute(u.ROTATION,D),u.SCALE&&C.fromBufferAttribute(u.SCALE,D),L.setMatrixAt(D,b.compose(x,y,C));for(const D in u)if(D==="_COLOR_0"){const O=u[D];L.instanceColor=new fl(O.array,O.itemSize,O.normalized)}else D!=="TRANSLATION"&&D!=="ROTATION"&&D!=="SCALE"&&S.geometry.setAttribute(D,u[D]);zt.prototype.copy.call(L,S),this.parser.assignFinalMaterial(L),_.push(L)}return f.isGroup?(f.clear(),f.add(..._),f):_[0]}))}}const Tf="glTF",Ms=12,fd={JSON:1313821514,BIN:5130562};class fw{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ms,s=new DataView(e,Ms);let o=0;for(;o<i;){const l=s.getUint32(o,!0);o+=4;const u=s.getUint32(o,!0);if(o+=4,u===fd.JSON){const h=new Uint8Array(e,Ms+o,l);this.content=n.decode(h)}else if(u===fd.BIN){const h=Ms+o;this.body=e.slice(h,h+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,l={},u={},h={};for(const f in o){const g=vl[f]||f.toLowerCase();l[g]=o[f]}for(const f in e.attributes){const g=vl[f]||f.toLowerCase();if(o[f]!==void 0){const p=n.accessors[e.attributes[f]],_=qr[p.componentType];h[g]=_.name,u[g]=p.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(g,p){i.decodeDracoFile(f,function(_){for(const S in _.attributes){const b=_.attributes[S],x=u[S];x!==void 0&&(b.normalized=x)}g(_)},l,h,Mn,p)})})}}class mw{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gw{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class wf extends ss{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=l*2,h=l*3,f=i-t,g=(n-t)/f,p=g*g,_=p*g,S=e*h,b=S-h,x=-2*_+3*p,y=_-p,C=1-x,L=y-p+g;for(let D=0;D!==l;D++){const O=o[b+D+l],P=o[b+D+u]*f,z=o[S+D+l],A=o[S+D]*f;s[D]=C*O+L*P+x*z+y*A}return s}}const _w=new Yn;class vw extends wf{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return _w.fromArray(s).normalize().toArray(s),s}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pd={9728:sn,9729:an,9984:Nd,9985:$a,9986:bs,9987:Ti},md={33071:oi,33648:Za,10497:Er},Sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$i={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xw={CUBICSPLINE:void 0,LINEAR:ks,STEP:Os},Mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yw(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new uo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),r.DefaultMaterial}function fr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sw(r,e,t){let n=!1,i=!1,s=!1;for(let h=0,f=e.length;h<f;h++){const g=e[h];if(g.POSITION!==void 0&&(n=!0),g.NORMAL!==void 0&&(i=!0),g.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],l=[],u=[];for(let h=0,f=e.length;h<f;h++){const g=e[h];if(n){const p=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):r.attributes.position;o.push(p)}if(i){const p=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):r.attributes.normal;l.push(p)}if(s){const p=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):r.attributes.color;u.push(p)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],g=h[1],p=h[2];return n&&(r.morphAttributes.position=f),i&&(r.morphAttributes.normal=g),s&&(r.morphAttributes.color=p),r.morphTargetsRelative=!0,r})}function Mw(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ew(r){let e;const t=r.extensions&&r.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ec(t.attributes):e=r.indices+":"+Ec(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ec(r.targets[n]);return e}function Ec(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function xl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Tw=new ot;class ww{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new YT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const u=l.match(/Version\/(\d+)/);i=n&&u?parseInt(u[1],10):-1,s=l.indexOf("Firefox")>-1,o=s?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new cf(this.options.manager):this.textureLoader=new Ty(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fr(s,l,i),si(l,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){for(const u of l.scenes)u.updateMatrixWorld();e(l)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let l=0,u=o.length;l<u;l++)e[o[l]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,l)=>{const u=this.associations.get(o);u!=null&&this.associations.set(l,u);for(const[h,f]of o.children.entries())s(f,l.children[h])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ls.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Sc[i.type],l=qr[i.componentType],u=i.normalized===!0,h=new l(i.count*o);return Promise.resolve(new hn(h,o,u))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const l=o[0],u=Sc[i.type],h=qr[i.componentType],f=h.BYTES_PER_ELEMENT,g=f*u,p=i.byteOffset||0,_=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,S=i.normalized===!0;let b,x;if(_&&_!==g){const y=Math.floor(p/_),C="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+y+":"+i.count;let L=t.cache.get(C);L||(b=new h(l,y*_,i.count*_/f),L=new Tx(b,_/f),t.cache.add(C,L)),x=new Ul(L,u,p%_/f,S)}else l===null?b=new h(i.count*u):b=new h(l,p,i.count*u),x=new hn(b,u,S);if(i.sparse!==void 0){const y=Sc.SCALAR,C=qr[i.sparse.indices.componentType],L=i.sparse.indices.byteOffset||0,D=i.sparse.values.byteOffset||0,O=new C(o[1],L,i.sparse.count*y),P=new h(o[2],D,i.sparse.count*u);l!==null&&(x=new hn(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let z=0,A=O.length;z<A;z++){const F=O[z];if(x.setX(F,P[z*u]),u>=2&&x.setY(F,P[z*u+1]),u>=3&&x.setZ(F,P[z*u+2]),u>=4&&x.setW(F,P[z*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=S}return x})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let l=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(l=u)}return this.loadTextureImage(e,s,l)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],l=s.images[t],u=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const h=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=o.name||l.name||"",f.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(f.name=l.uri);const p=(s.samplers||{})[o.sampler]||{};return f.magFilter=pd[p.magFilter]||an,f.minFilter=pd[p.minFilter]||Ti,f.wrapS=md[p.wrapS]||Er,f.wrapT=md[p.wrapT]||Er,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==sn&&f.minFilter!==an,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[u]=h,h}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const o=i.images[e],l=self.URL||self.webkitURL;let u=o.uri||"",h=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(g){h=!0;const p=new Blob([g],{type:o.mimeType});return u=l.createObjectURL(p),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(u).then(function(g){return new Promise(function(p,_){let S=p;t.isImageBitmapLoader===!0&&(S=function(b){const x=new on(b);x.needsUpdate=!0,p(x)}),t.load(Ls.resolveURL(g,s.path),S,void 0,_)})}).then(function(g){return h===!0&&l.revokeObjectURL(u),si(g,o),g.userData.mimeType=o.mimeType||bw(o.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),g});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=s.associations.get(o);o=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),s.associations.set(o,u)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new Qd,di.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(e.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new no,di.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(i||s||o){let l="ClonedMaterial:"+n.uuid+":";i&&(l+="derivative-tangents:"),s&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),s&&(u.vertexColors=!0),o&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return uo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const l={},u=s.extensions||{},h=[];if(u[pt.KHR_MATERIALS_UNLIT]){const g=i[pt.KHR_MATERIALS_UNLIT];o=g.getMaterialType(),h.push(g.extendParams(l,s,t))}else{const g=s.pbrMetallicRoughness||{};if(l.color=new Qe(1,1,1),l.opacity=1,Array.isArray(g.baseColorFactor)){const p=g.baseColorFactor;l.color.setRGB(p[0],p[1],p[2],Mn),l.opacity=p[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(l,"map",g.baseColorTexture,jt)),l.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,l.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(l,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(l,"roughnessMap",g.metallicRoughnessTexture))),o=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,l)})))}s.doubleSided===!0&&(l.side=On);const f=s.alphaMode||Mc.OPAQUE;if(f===Mc.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,f===Mc.MASK&&(l.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==li&&(h.push(t.assignTexture(l,"normalMap",s.normalTexture)),l.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){const g=s.normalTexture.scale;l.normalScale.set(g,g)}if(s.occlusionTexture!==void 0&&o!==li&&(h.push(t.assignTexture(l,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==li){const g=s.emissiveFactor;l.emissive=new Qe().setRGB(g[0],g[1],g[2],Mn)}return s.emissiveTexture!==void 0&&o!==li&&h.push(t.assignTexture(l,"emissiveMap",s.emissiveTexture,jt)),Promise.all(h).then(function(){const g=new o(l);return s.name&&(g.name=s.name),si(g,s),t.associations.set(g,{materials:e}),s.extensions&&fr(i,g,s),g})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(l){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,t).then(function(u){return gd(u,l,t)})}const o=[];for(let l=0,u=e.length;l<u;l++){const h=e[l],f=Ew(h),g=i[f];if(g)o.push(g.promise);else{let p;h.extensions&&h.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?p=s(h):p=gd(new qt,h,t),i[f]={primitive:h,promise:p},o.push(p)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,l=[];for(let u=0,h=o.length;u<h;u++){const f=o[u].material===void 0?yw(this.cache):this.getDependency("material",o[u].material);l.push(f)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(u){const h=u.slice(0,u.length-1),f=u[u.length-1],g=[];for(let _=0,S=f.length;_<S;_++){const b=f[_],x=o[_];let y;const C=h[_];if(x.mode===Nn.TRIANGLES||x.mode===Nn.TRIANGLE_STRIP||x.mode===Nn.TRIANGLE_FAN||x.mode===void 0)y=s.isSkinnedMesh===!0?new Cx(b,C):new $t(b,C),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),x.mode===Nn.TRIANGLE_STRIP?y.geometry=hd(y.geometry,Hd):x.mode===Nn.TRIANGLE_FAN&&(y.geometry=hd(y.geometry,hl));else if(x.mode===Nn.LINES)y=new Nx(b,C);else if(x.mode===Nn.LINE_STRIP)y=new Vs(b,C);else if(x.mode===Nn.LINE_LOOP)y=new Zd(b,C);else if(x.mode===Nn.POINTS)y=new Ux(b,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(y.geometry.morphAttributes).length>0&&Mw(y,s),y.name=t.createUniqueName(s.name||"mesh_"+e),si(y,s),x.extensions&&fr(i,y,x),t.assignFinalMaterial(y),g.push(y)}for(let _=0,S=g.length;_<S;_++)t.associations.set(g[_],{meshes:e,primitives:_});if(g.length===1)return s.extensions&&fr(i,g[0],s),g[0];const p=new An;s.extensions&&fr(i,p,s),t.associations.set(p,{meshes:e});for(let _=0,S=g.length;_<S;_++)p.add(g[_]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Sn(ox.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,l=[],u=[];for(let h=0,f=o.length;h<f;h++){const g=o[h];if(g){l.push(g);const p=new ot;s!==null&&p.fromArray(s.array,h*16),u.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new kl(l,u)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],l=[],u=[],h=[],f=[];for(let g=0,p=i.channels.length;g<p;g++){const _=i.channels[g],S=i.samplers[_.sampler],b=_.target,x=b.node,y=i.parameters!==void 0?i.parameters[S.input]:S.input,C=i.parameters!==void 0?i.parameters[S.output]:S.output;b.node!==void 0&&(o.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",y)),u.push(this.getDependency("accessor",C)),h.push(S),f.push(b))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(h),Promise.all(f)]).then(function(g){const p=g[0],_=g[1],S=g[2],b=g[3],x=g[4],y=[];for(let L=0,D=p.length;L<D;L++){const O=p[L],P=_[L],z=S[L],A=b[L],F=x[L];if(O===void 0)continue;O.updateMatrix&&O.updateMatrix();const k=n._createAnimationTracks(O,P,z,A,F);if(k)for(let B=0;B<k.length;B++)y.push(k[B])}const C=new dy(s,void 0,y);return si(C,i),C})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let u=0,h=i.weights.length;u<h;u++)l.morphTargetInfluences[u]=i.weights[u]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],l=i.children||[];for(let h=0,f=l.length;h<f;h++)o.push(n.getDependency("node",l[h]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),u]).then(function(h){const f=h[0],g=h[1],p=h[2];p!==null&&f.traverse(function(_){_.isSkinnedMesh&&_.bind(p,Tw)});for(let _=0,S=g.length;_<S;_++)f.add(g[_]);if(f.userData.pivot!==void 0&&g.length>0){const _=f.userData.pivot,S=g[0];f.pivot=new H().fromArray(_),f.position.x-=_[0],f.position.y-=_[1],f.position.z-=_[2],S.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",l=[],u=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return u&&l.push(u),s.camera!==void 0&&l.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){l.push(h)}),this.nodeCache[e]=Promise.all(l).then(function(h){let f;if(s.isBone===!0?f=new Kd:h.length>1?f=new An:h.length===1?f=h[0]:f=new zt,f!==h[0])for(let g=0,p=h.length;g<p;g++)f.add(h[g]);if(s.name&&(f.userData.name=s.name,f.name=o),si(f,s),s.extensions&&fr(n,f,s),s.matrix!==void 0){const g=new ot;g.fromArray(s.matrix),f.applyMatrix4(g)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);if(!i.associations.has(f))i.associations.set(f,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const g=i.associations.get(f);i.associations.set(f,{...g})}return i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new An;n.name&&(s.name=i.createUniqueName(n.name)),si(s,n),n.extensions&&fr(t,s,n);const o=n.nodes||[],l=[];for(let u=0,h=o.length;u<h;u++)l.push(i.getDependency("node",o[u]));return Promise.all(l).then(function(u){for(let f=0,g=u.length;f<g;f++){const p=u[f];p.parent!==null?s.add(jT(p)):s.add(p)}const h=f=>{const g=new Map;for(const[p,_]of i.associations)(p instanceof di||p instanceof on)&&g.set(p,_);return f.traverse(p=>{const _=i.associations.get(p);_!=null&&g.set(p,_)}),g};return i.associations=h(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],l=e.name?e.name:e.uuid,u=[];$i[s.path]===$i.weights?e.traverse(function(p){p.morphTargetInfluences&&u.push(p.name?p.name:p.uuid)}):u.push(l);let h;switch($i[s.path]){case $i.weights:h=es;break;case $i.rotation:h=ts;break;case $i.translation:case $i.scale:h=ns;break;default:n.itemSize===1?h=es:h=ns;break}const f=i.interpolation!==void 0?xw[i.interpolation]:ks,g=this._getArrayFromAccessor(n);for(let p=0,_=u.length;p<_;p++){const S=new h(u[p]+"."+$i[s.path],t.array,g,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(S),o.push(S)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xl(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ts?vw:wf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Aw(r,e,t){const n=e.attributes,i=new Di;if(n.POSITION!==void 0){const l=t.json.accessors[n.POSITION],u=l.min,h=l.max;if(u!==void 0&&h!==void 0){if(i.set(new H(u[0],u[1],u[2]),new H(h[0],h[1],h[2])),l.normalized){const f=xl(qr[l.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const l=new H,u=new H;for(let h=0,f=s.length;h<f;h++){const g=s[h];if(g.POSITION!==void 0){const p=t.json.accessors[g.POSITION],_=p.min,S=p.max;if(_!==void 0&&S!==void 0){if(u.setX(Math.max(Math.abs(_[0]),Math.abs(S[0]))),u.setY(Math.max(Math.abs(_[1]),Math.abs(S[1]))),u.setZ(Math.max(Math.abs(_[2]),Math.abs(S[2]))),p.normalized){const b=xl(qr[p.componentType]);u.multiplyScalar(b)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(l)}r.boundingBox=i;const o=new gi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function gd(r,e,t){const n=e.attributes,i=[];function s(o,l){return t.getDependency("accessor",o).then(function(u){r.setAttribute(l,u)})}for(const o in n){const l=vl[o]||o.toLowerCase();l in r.attributes||i.push(s(n[o],l))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(l){r.setIndex(l)});i.push(o)}return yt.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),si(r,e),Aw(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Sw(r,e.targets,t):r})}const Rw={fl:{axis_before:[-.05843501247835998,.997489791029035,.03999332581201836],tilt_degrees:4.060536869612389,quaternion_xyzw:[-.020009223681715083,0,-.029235859028556955,.9993722507226811],position_xyz:[47937088308976084e-21,-.00012567651013026607,-22581003913963588e-21],axis_after:[17328174708057406e-35,1.0000000000000002,6898893033924115e-33]},fr:{axis_before:[.0006157180863712478,.9990278119874834,-.04408006087495364],tilt_degrees:2.526666673233848,quaternion_xyzw:[.022045389154532868,0,.000307933894693214,.9997569234537672],position_xyz:[9198796542844029e-21,.00011029865301081035,-2763986166600188e-20],axis_after:[13068391212993345e-36,1,6424167062371083e-33]},rl:{axis_before:[.0019192985947502977,.9999815715328626,.0057595909203381895],tilt_degrees:.3478427079930972,quaternion_xyzw:[-.0028798087278147843,0,.000959653718622088,.999995392872603],position_xyz:[-7866247374165025e-21,-588830964095427e-20,13195201593946965e-21],axis_after:[15355631745038572e-36,.9999999999999996,-860335323972293e-33]},rr:{axis_before:[.00030831915881701833,.9999831837566084,-.005791126254312511],tilt_degrees:.3322788747778532,quaternion_xyzw:[.0028955753003565973,0,.00015416022750884832,.999995795930315],position_xyz:[-34353499873580884e-22,906765214058955e-20,-8145364574448088e-21],axis_after:[-11195933787609463e-35,.9999999999999998,31003993009949234e-34]}},Cw={wheels:Rw};function Pw(r,e){const t=Cw.wheels[e];if(!t)throw new Error(`Missing wheel alignment: ${e}`);const n=new An;return n.name=`aligned-visual-${e}`,n.quaternion.fromArray(t.quaternion_xyzw),n.position.fromArray(t.position_xyz),n.add(r),n}function _d(r,e){return{position:new H(...r),quaternion:new Yn(e[1],e[2],e[3],e[0])}}class Lw{constructor(e,t){this.sim=e,this.wheels=t,this.reset()}read(){const{sim:e}=this;return[_d(e.position,e.quaternion),...this.wheels.map(({id:t})=>_d(e.data.xpos.subarray(t*3,t*3+3),e.data.xquat.subarray(t*4,t*4+4)))]}reset(){this.current=this.read(),this.previous=this.current}capture(){this.previous=this.current,this.current=this.read()}sample(e){const t=Math.max(0,Math.min(1,e));return this.current.map((n,i)=>({position:this.previous[i].position.clone().lerp(n.position,t),quaternion:this.previous[i].quaternion.clone().slerp(n.quaternion,t)}))}}function Iw(r,e,t=!1){const{x:n,y:i,z:s,w:o}=e,l=Math.atan2(2*(o*s+n*i),1-2*(i*i+s*s)),u=new Yn().setFromAxisAngle(new H(0,0,1),l);return{position:new H(t?-1.48:-1.3,0,t?.8:.72).applyQuaternion(u).add(r),target:new H(t?.62:.95,0,.16).applyQuaternion(u).add(r),yaw:l}}const rn=(r,e={})=>new uo({color:r,roughness:.87,...e}),Wa=new H(0,0,1);function vd(r,e,t){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d"),s=i.createImageData(128,128);let o=718;for(let u=0;u<s.data.length;u+=4){o=o*1664525+1013904223>>>0;const h=r+(o/4294967296-.5)*e;s.data.set([h,h,h,255],u)}i.putImageData(s,0,0);const l=new zl(n);return l.colorSpace=jt,l.wrapS=l.wrapT=Er,l.repeat.set(t,t),l}function xd(r,e="",t="#011f5b",n="#ffffff"){const i=document.createElement("canvas");i.width=1024,i.height=256;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,i.width,i.height),s.textAlign="center",s.fillStyle=n,s.font="600 74px Arial",s.fillText(r,512,e?119:153),e&&(s.font="32px Arial",s.fillText(e,512,189));const o=new zl(i);return o.colorSpace=jt,o}class Dw{constructor(e,t){this.sim=t,this.scene=new Sx,this.scene.background=new Qe("#dfded9"),this.scene.fog=new Nl("#d5d4d0",45,95),this.mode="chase",this.frames=0,this.renderer=new PT({canvas:e,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wd,this.renderer.toneMapping=El,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=jt,this.camera=new Sn(68,1,.025,100),this.camera.up.copy(Wa);const n=new xy("#f9f9f7","#93928d",1.8);n.position.set(0,0,10),this.scene.add(n);const i=new uf("#fff9ee",1.9);i.position.set(-6,-10,16),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-17,right:17,top:13,bottom:-13,near:1,far:45}),i.shadow.normalBias=.025,this.scene.add(i),this.materials={navy:rn("#011f5b"),red:rn("#990000"),white:rn("#f5f6f5"),metal:rn("#707c86",{metalness:.5,roughness:.55}),black:rn("#20242a")},this.environment(),this.track(),this.vehicle(),this.snapCamera=!0,this.motion=new Lw(t,this.wheels),this.cameraTarget=new H,this.assetErrors=[],this.assetsReady=!1,this.assetPromise=this.loadAssets().then(()=>this.assetsReady=!0),this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0}box(e,t,n,i=this.scene){const s=new $t(new rs(...e),n);return s.position.set(...t),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}board(e,t,n,i,s=0){const o=new $t(new xr(t,n),new li({map:e,side:On}));return o.position.set(...i),o.rotation.set(Math.PI/2,i[1]<0?Math.PI:0,s),this.scene.add(o),o}environment(){const e=rn("#aaa9a5",{map:vd(220,14,25),roughness:.62}),t=new $t(new xr(64,46),e);t.position.z=-.004,t.receiveShadow=!0,this.scene.add(t);const n=new no({color:"#858782",transparent:!0,opacity:.3});for(let p=-28;p<=28;p+=4)this.scene.add(new Vs(new qt().setFromPoints([new H(p,-21,.002),new H(p,21,.002)]),n));for(let p=-20;p<=20;p+=4)this.scene.add(new Vs(new qt().setFromPoints([new H(-29,p,.002),new H(29,p,.002)]),n));const i=rn("#d8d8d5"),s=rn("#929591",{metalness:.45,roughness:.46});for(const p of[-20,20]){this.box([60,.18,9.2],[0,p,4.6],i),this.box([60,.25,.65],[0,p,2.05],rn("#aaa9a4"));for(let _=-28;_<=28;_+=4)this.box([.09,.27,8.6],[_,p,4.35],s),this.box([3.87,.29,.035],[_+1.94,p,4.35],s);this.box([60,.46,.56],[0,p,7.55],s)}for(const p of[-30,30]){this.box([.18,40,9.2],[p,0,4.6],i);for(let _=-18;_<=18;_+=4)this.box([.28,.11,8.6],[p,_,4.3],s);for(const _ of[2.5,4.5,6.5])this.box([.29,40,.05],[p,0,_],s)}this.ceilingGroup=new An,this.scene.add(this.ceilingGroup),this.box([60,42,.16],[0,0,9.3],rn("#e9e9e6"),this.ceilingGroup).castShadow=!1;for(let p=-27;p<=27;p+=4.5){this.box([.16,42,.25],[p,0,9.12],s,this.ceilingGroup);for(const _ of[-12,-4,4,12])this.box([3.5,.13,.04],[p+1.8,_,8.98],new li({color:"#fffefa"}),this.ceilingGroup)}const o=rn("#b4b6b2",{metalness:.65,roughness:.4});for(const p of[-13,0,13]){const _=new $t(new so(.27,.27,58,12),o);_.rotation.z=Math.PI/2,_.position.set(0,p,8.55),this.ceilingGroup.add(_);for(let S=-27;S<=27;S+=6)this.box([.17,.67,.09],[S,p,8.57],s,this.ceilingGroup)}const l=rn("#35373a"),u=rn("#ececea");for(let p=-25;p<=25;p+=5)this.box([4.1,.18,2.7],[p,17.2,1.35],l),this.box([4.35,.42,.36],[p,16.98,2.75],p%2?u:this.materials.navy),this.box([2.7,.07,1.2],[p,16.91,1.46],u),this.box([1.4,.08,.75],[p,16.81,.95],this.materials.black);for(const p of[-27,27])for(let _=-15;_<=15;_+=6)this.box([.18,4.8,2.7],[p,_,1.35],l),this.box([.25,5,.37],[p,_,2.88],_%2?u:this.materials.navy),this.box([.28,3.3,1.2],[p,_,1.4],u),this.box([.3,1.1,.72],[p,_,.96],this.materials.black);const h=xd("AI COACHING","ROBORACER COMPETITION");for(const[p,_]of[["north",19.78],["south",-19.78]]){const S=this.board(h,7,1.75,[0,_,5.1]);S.name=`ai-coaching-wall-${p}`,S.userData={brand:"AI Coaching",width:7,height:1.75}}const f=rn("#a99479",{roughness:.75});for(const p of[-10,-6,-2,2,6,10]){this.box([2,.68,.06],[p,-12.8,.75],f);for(const S of[-.8,.8])this.box([.045,.48,.72],[p+S,-12.8,.36],this.materials.metal);const _=this.box([.34,.025,.24],[p,-12.8,.9],this.materials.black);_.rotation.x=-.2,this.box([.55,.4,.3],[p+.65,-12.7,.16],this.materials.navy)}const g=(p,_,S)=>{const b=new An;b.position.set(p,_,0),b.rotation.z=S,this.scene.add(b),this.box([.4,.42,.055],[0,0,.46],this.materials.black,b),this.box([.4,.05,.38],[0,.2,.66],this.materials.black,b);for(const x of[-.16,.16])for(const y of[-.16,.16])this.box([.025,.025,.44],[x,y,.22],this.materials.metal,b)};for(const[p,_,S]of[[-12,-11,0],[-8,-11,.2],[-4,-11,-.1],[1,-11,0],[6,-11,.2],[-10,10,-.2],[-5,11,.3],[2,10,0],[8,11,.2],[14,9,-.3]])g(p,_,S);this.box([1.5,1,.16],[13.5,-8,.08],this.materials.navy),this.board(xd("ROBORACER","1/10 PLATFORM"),2,.5,[13.5,-8.7,.6])}track(){const e=[],t=[];for(let f=0;f<kt.length;f++){const g=Rn(f),p=Rn(f+1),_=(C,L)=>C.p.clone().addScaledVector(C.normal,L*Ds/2),S=_(g,1),b=_(g,-1),x=_(p,1),y=_(p,-1);for(const[C,L,D]of[[S,0,f],[b,1,f],[x,0,f+1],[b,1,f],[y,1,f+1],[x,0,f+1]])e.push(C.x,C.y,.006),t.push(L,D/7)}const n=new qt;n.setAttribute("position",new Ht(e,3)),n.setAttribute("uv",new Ht(t,2)),n.computeVertexNormals();const i=new $t(n,rn("#aaa9a5",{map:vd(220,14,25),roughness:.62,side:On}));i.receiveShadow=!0,this.scene.add(i),this.tubes=[];const s=new Gl(.11,.007,5,12),o=new H(0,0,1),l=new zt;for(const[f,g,p]of[[-1,"#de6931","#88412d"],[1,"#e7bc27","#967323"]]){const _=kt.map((C,L)=>{const D=Rn(L);return D.p.clone().addScaledVector(D.normal,f*(Ds/2+.09)).setZ(.13)}),S=new Hl(_,!0,"centripetal"),b=new $t(new Wl(S,kt.length*3,.11,10,!0),rn(g,{roughness:.91}));b.name=f<0?"competition-tube-orange":"competition-tube-yellow",b.userData={side:f,centerlinePoints:kt.length,visualOnly:!0},b.castShadow=!0,b.receiveShadow=!0,this.scene.add(b),this.tubes.push(b);const x=kt.length*4,y=new Jd(s,rn(p,{roughness:.95}),x);for(let C=0;C<x;C++){const L=(C+.5)/x;l.position.copy(S.getPointAt(L)),l.quaternion.setFromUnitVectors(o,S.getTangentAt(L)),l.scale.setScalar(1),l.updateMatrix(),y.setMatrixAt(C,l.matrix)}y.name=`${b.name}-ribs`,y.instanceMatrix.needsUpdate=!0,this.scene.add(y)}const u=Rn(0),h=this.box([.08,Ds,.003],[u.p.x,u.p.y,.012],rn("#e4e3de"));h.rotation.z=u.yaw,this.line=new Zd(new qt().setFromPoints(kt.map(f=>f.clone().setZ(.017))),new no({color:"#d6b356"})),this.line.visible=!1,this.scene.add(this.line)}vehicle(){this.body=new An,this.scene.add(this.body),this.vehicleModelReady=!1,this.wheels=[];for(const i of["fl","fr","rl","rr"]){const s=new An;s.name=`wheel-visual-${i}`;const o=this.sim.model.body(`wheel_${i}`);this.wheels.push({name:i,group:s,id:o.id}),o.delete(),this.scene.add(s)}this.body.traverse(i=>i.castShadow=!1);for(const i of this.wheels)i.group.traverse(s=>s.castShadow=!1);const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,18,64,64,64);n.addColorStop(0,"#00000060"),n.addColorStop(1,"#00000000"),t.fillStyle=n,t.fillRect(0,0,128,128),this.contactShadow=new $t(new xr(.78,.48),new li({map:new zl(e),transparent:!0,depthWrite:!1})),this.scene.add(this.contactShadow)}async loadAssets(){const e="/car/";try{const{scene:t}=await new qT().loadAsync(`${e}vehicle/autodrive/f1tenth.glb`),n=t.getObjectByName("chassis"),i=this.wheels.map(o=>({target:o.group,source:t.getObjectByName(o.name)}));if(!n||i.some(o=>!o.source))throw new Error("Vehicle asset is missing chassis or wheel groups");this.body.add(n);for(const o of i)o.target.add(Pw(o.source,o.source.name));const s=new An;s.position.set(...Xr),this.body.add(s),this.box([.028,.09,.025],[0,0,0],this.materials.black,s);for(const o of[-.03,.03]){const l=new $t(new so(.009,.009,.003,16),rn("#263f53",{metalness:.3,roughness:.4}));l.rotation.z=Math.PI/2,l.position.set(.015,o,0),s.add(l)}this.vehicleModelReady=!0}catch(t){this.assetErrors.push(`AutoDRIVE vehicle: ${t.message}`)}try{const t=await new $T().loadAsync(`${e}vehicle/roboracer_max.stl`);t.computeBoundingBox();const n=t.boundingBox.getCenter(new H);t.translate(-n.x,-n.y,-t.boundingBox.min.z);const i=new $t(t,this.materials.metal);i.scale.setScalar(.5),i.position.set(13.5,-8,.17),i.castShadow=!0,this.scene.add(i),this.labMesh=i}catch(t){this.assetErrors.push(`Vehicle mesh: ${t.message}`)}for(const[t,n,i]of[["xlab",-8,4],["alliance",-2,4],["johns-hopkins",5,5],["jirl",12,3]])try{const s=await new cf().loadAsync(`${e}venue/brands/${t}.png`);s.colorSpace=jt;const o=Math.min(1.5,i*s.image.height/s.image.width);this.box([i+.4,.08,o+.35],[n,19.86,3],this.materials.white),this.board(s,i,o,[n,19.798,3])}catch(s){this.assetErrors.push(`${t}: ${s.message}`)}}setMode(e){this.mode=e,this.ceilingGroup.visible=e!=="circuit",this.renderer.shadowMap.needsUpdate=!0,this.snapCamera=!0}resize(e,t){this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}resetMotion(){this.motion.reset()}captureStep(){this.motion.capture()}render(e=.016,t){(t===void 0||this.snapCamera)&&this.resetMotion();const n=this.motion.sample(t??1),{position:i,quaternion:s}=n[0];this.body.position.copy(i),this.body.quaternion.copy(s),this.wheels.forEach(({group:f},g)=>{f.position.copy(n[g+1].position),f.quaternion.copy(n[g+1].quaternion)});const o=new H,l=new H,u=Iw(i,s,this.camera.aspect<.7);this.contactShadow.position.set(i.x,i.y,.018),this.contactShadow.rotation.z=u.yaw,this.mode==="onboard"?(l.set(...Xr).applyQuaternion(s).add(i),o.set(Xr[0]+6,Xr[1],Xr[2]).applyQuaternion(s).add(i),this.camera.up.copy(Wa.clone().applyQuaternion(s)),this.body.visible=!1):this.mode==="circuit"?(l.set(-17,-20,21),o.set(0,0,0),this.camera.up.copy(Wa),this.body.visible=!0):(l.copy(u.position),o.copy(u.target),this.camera.up.copy(Wa),this.body.visible=!0),this.camera.position.copy(l),this.cameraTarget.copy(o);const h=68;Math.abs(this.camera.fov-h)>.01&&(this.camera.fov=h,this.camera.updateProjectionMatrix()),this.camera.lookAt(this.cameraTarget),this.snapCamera=!1,this.renderer.render(this.scene,this.camera),this.frames++}}function Fw(r,e,t={steer:0,throttle:0,brake:0},n={active:!1,steer:0}){const i=(...f)=>f.some(g=>r.has(g));let s=0,o=0,l=0,u="none";if(e?.connected&&e.mapping==="standard"){const f=Number.isFinite(e.axes[0])?e.axes[0]:0;s=Math.abs(f)>.1?-(Math.abs(f)-.1)/.9*Math.sign(f):0,o=Un(e.buttons[7]?.value||0,0,1),l=Un(e.buttons[6]?.value||0,0,1),(s||o||l)&&(u="gamepad")}const h=[...r].filter(f=>["KeyA","ArrowLeft","KeyD","ArrowRight"].includes(f)).at(-1);return h&&(s=["KeyA","ArrowLeft"].includes(h)?1:-1,u="keyboard"),i("KeyW","ArrowUp")&&(o=1,u="keyboard"),i("KeyS","ArrowDown")&&(l=1,o=0,u="keyboard"),t.steer&&(s=-t.steer,u="touch"),(t.throttle||t.brake)&&(o=t.throttle,l=t.brake,u="touch"),n.active&&(s=-n.steer,u="mouse"),{steer:Un(s),throttle:Un(o,0,1),brake:Un(l,0,1),source:u}}class Nw{constructor(e){this.sim=e,this.active=!1,this.phase=null,this.results=[]}begin(e){if(!["manual","fixed","coach"].includes(e))throw new Error("Choose a human driving mode");this.practiceMode=e,this.speedLimitMps=this.sim.speedLimit,this.results=[],this.sim.history.reset(),this.startPhase(0),this.active=!0}startPhase(e){this.index=e,this.phase=["Solo test: before","Coached practice","Solo test: after"][e],e===1&&this.practiceMode==="manual"&&(this.phase="Unaided practice"),this.duration=[20,60,20][e],this.startTime=this.sim.elapsed;const t=this.sim;t.setMode(e===1?this.practiceMode:"manual"),t.mj.mj_resetData(t.model,t.data),t.mj.mj_forward(t.model,t.data),t.targetSpeed=0,t.steering=0,t.progress=t.laps*kt.length,t.previousIndex=0,t.lapStart=t.elapsed,t.lapValid=!0,t.lastContact=!1,this.startHits=t.hits,this.startProgress=t.progress,this.distanceSum=0,this.samples=0,this.assistanceSum=0,t.events.push({type:"phase",phase:this.phase,t:t.elapsed})}tick(e){return!this.active||(this.distanceSum+=e,this.assistanceSum+=this.sim.assistance,this.samples++,this.sim.elapsed-this.startTime<this.duration-1e-6)?null:(this.results.push({phase:this.phase,mode:this.sim.mode,seconds:this.duration,contacts:this.sim.hits-this.startHits,progressPoints:this.sim.progress-this.startProgress,meanDistance:this.distanceSum/this.samples,meanAssistance:this.assistanceSum/this.samples}),this.index<2?(this.startPhase(this.index+1),"phase"):(this.active=!1,this.phase="Completed",this.sim.events.push({type:"practice-complete",t:this.sim.elapsed,results:this.results}),"complete"))}cancel(){this.active&&this.sim.events.push({type:"practice-cancelled",t:this.sim.elapsed,phase:this.phase}),this.active=!1,this.phase=null}snapshot(){return{active:this.active,phase:this.phase,remaining:this.active?Math.max(0,this.duration-this.sim.elapsed+this.startTime):0,results:this.results,practiceMode:this.practiceMode,speedLimitMps:this.speedLimitMps}}}function Uw(r,e){const t=r.lapValid,n=t?(r.progress-r.laps*e)/e:r.previousIndex/e;return{fraction:Math.max(0,Math.min(1,n)),valid:t,label:t?"LAP PROGRESS":"LAP INVALID"}}function Ow(r,e=!1){const t=Math.max(e?-1:0,Math.min(1,Number.isFinite(r)?r:0));return e?50-t*50:t*100}const Af={Gamepad2:q0,Pause:ev,Play:tv,RotateCcw:nv,SlidersHorizontal:iv,Download:j0,Maximize:K0,X:av,MoveHorizontal:J0,ChevronsUp:$0,OctagonPause:Z0,Timer:rv,Orbit:Q0,Video:sv,Map:Y0},Ae=r=>document.querySelector(r),Zi=r=>Array.from(document.querySelectorAll(r));Sl({icons:Af});let qe,Vt,Cn,Yi=!0,ws=0,ao=performance.now(),yd,Rf=!1;const Cf={manual:"No Coach",fixed:"Fixed Assist",coach:"Adaptive Coach",expert:"IL driver",demo:"Reference driver"},Yl=2;let Ji=+Ae("#speed-limit").value;const Ws=new Set,Ki={steer:0,throttle:0,brake:0},Ii={active:!1,steer:0};let yr={steer:0,throttle:0,brake:0,source:"none"};const Kl=Zi("dialog");let yl=null,Sd=new Set;function Pf(){let r=[];try{r=Array.from(navigator.getGamepads?.()||[])}catch{}const e=r.find(i=>i?.connected);yr=Fw(Ws,e,Ki,Ii);const t=new Set;if(e?.mapping==="standard")for(const i of[0,9])(e.buttons[i]?.pressed||e.buttons[i]?.value>.5)&&t.add(i);const n=i=>t.has(i)&&!Sd.has(i);return(n(0)||n(9))&&Ae("#controls-dialog").open?Ae("#start").click():n(9)&&!Kl.some(i=>i.open)&&qe&&Ae("#pause").click(),Sd=t,e}function Md(){if(!Ae("#controls-dialog").open)return;const r=Pf(),e=r?r.mapping==="standard"?r.id:"Unmapped controller - use keyboard":"Scanning for controller...";Ae("#device").textContent!==e&&(Ae("#device").textContent=e),Ae("#pad-hint").hidden=!!r,Ae("#steer-meter").value=yr.steer,Ae("#throttle-meter").value=yr.throttle,Ae("#brake-meter").value=yr.brake,Zi("[data-key]").forEach(t=>t.classList.toggle("active",Ws.has(t.dataset.key)))}function Xs(){clearInterval(yl),yl=null}function Jl(){Xs(),!(!Ae("#controls-dialog").open||document.hidden)&&(Md(),yl=setInterval(Md,100))}for(const r of["focus","pageshow","gamepadconnected","gamepaddisconnected"])window.addEventListener(r,Jl);document.addEventListener("visibilitychange",()=>document.hidden?Xs():Jl());window.addEventListener("pagehide",Xs);Ae("#controls-dialog").addEventListener("close",()=>{Ae("#controls-dialog").open||Xs()});function zn(r){Ae("#toast").textContent=r,Ae("#toast").classList.add("show"),clearTimeout(yd),yd=setTimeout(()=>Ae("#toast").classList.remove("show"),2400)}function Ni(){Ws.clear(),Ki.steer=Ki.throttle=Ki.brake=0,Ii.active=!1,Ii.steer=0,Ae("#touch-steer").value=0,Ae("#mouse-steer").value=0}function Pn(r){Yi=r,ws=0,ao=performance.now(),Ae("#paused").hidden=!r,Vt?.resetMotion(),Ae("#pause").innerHTML=`<i data-lucide="${r?"play":"pause"}"></i>`,Sl({icons:Af}),Ae("#pause").title=`${r?"Resume":"Pause"} (Space)`,Ae("#pause").setAttribute("aria-label",r?"Resume":"Pause")}function go(r){qe&&(Cn?.cancel(),["expert","fixed","coach"].includes(r)&&Math.abs(qe.speed)>oo(r)+.3&&(qe.recover(),Vt.snapCamera=!0),qe.setMode(r),$s(oo(r),r),Ni(),Zl(),Pn(!1),zn(r==="expert"?`IL driver - ${qe.speedLimit.toFixed(1)} m/s limit`:Cf[r]))}function oo(r){return r==="manual"?Ji:Math.min(Ji,r==="expert"?qe.autoSpeedLimit:Yl)}function $s(r,e){!qe||qe.speedLimit===r||(qe.speedLimit=r,qe.events.push({type:"speed-limit",t:qe.elapsed,value:r,reason:e}))}function Zl(){const r=qe.mode;Zi("[data-mode]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.mode===r))),Ae("#mode-label").textContent=Cf[r]}function Ql(r){Vt?.setMode(r),Zi("[data-view]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.view===r))),zn(`${r[0].toUpperCase()+r.slice(1)} view - C`)}function eu(r){Rf=!Yi,Pn(!0),Ni(),r.showModal(),r.id==="controls-dialog"&&Jl()}function Sr(r,e=Rf){r.id==="controls-dialog"&&Xs(),r.close(),Ni(),e&&Pn(!1)}Ae("#controls").onclick=()=>eu(Ae("#controls-dialog"));Ae("#settings").onclick=()=>eu(Ae("#settings-dialog"));for(const r of Kl)r.querySelector("[data-close]").onclick=()=>Sr(r),r.addEventListener("cancel",e=>{e.preventDefault(),Sr(r)}),r.addEventListener("click",e=>{if(e.target===r){const t=r.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&Sr(r)}});Ae("#start").onclick=()=>{Sr(Ae("#controls-dialog"),!1),go("manual")};Ae("#pause").onclick=()=>{Pn(!Yi),zn(`${Yi?"Paused":"Resumed"} - Space`)};Ae("#recover").onclick=()=>{qe?.recover(),Ni(),Vt&&(Vt.snapCamera=!0),zn("Returned to track - R")};Zi("[data-mode]").forEach(r=>r.onclick=()=>go(r.dataset.mode));Zi("[data-view]").forEach(r=>r.onclick=()=>Ql(r.dataset.view));Ae("#speed-limit").oninput=r=>{Ji=+r.target.value,qe&&(Cn.cancel(),$s(oo(qe.mode),"settings")),Ae("#limit-label").value=`${Ji.toFixed(1)} m/s`};Ae("#fixed-assistance").oninput=r=>{const e=+r.target.value;qe&&(Cn.cancel(),qe.fixedAssistance=e,qe.events.push({type:"fixed-assistance",t:qe.elapsed,value:e})),Ae("#assist-label").value=`${Math.round(e*100)}%`};Ae("#il-drive").onclick=()=>{Sr(Ae("#settings-dialog"),!1),go("expert")};Ae("#practice-session").onclick=()=>{const r=["manual","fixed","coach"].includes(qe.mode)?qe.mode:"manual";Sr(Ae("#settings-dialog"),!1),$s(Math.min(Ji,Yl),"practice"),Cn.begin(r),Ni(),Zl(),Pn(!1),zn("Solo test - 20 seconds")};Ae("#reference-line").onchange=r=>Vt&&(Vt.line.visible=r.target.checked);Ae("#expert-cues").onchange=r=>Ae("#expert-actions").hidden=!r.target.checked;Ae("#reset-session").onclick=()=>{Cn?.cancel(),qe?.reset(),$s(oo(qe.mode),"reset"),Vt&&(Vt.snapCamera=!0),Sr(Ae("#settings-dialog"),!1),Pn(!0),zn("New session")};Ae("#export").onclick=()=>{if(!qe)return;const r=new Blob([JSON.stringify({...qe.export(),manualSpeedLimitMps:Ji,camera:Vt.mode,practiceSession:Cn.snapshot()},null,2)],{type:"application/json"}),e=URL.createObjectURL(r),t=document.createElement("a");t.href=e,t.download=`driving-session-${new Date().toISOString().replaceAll(":","-")}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3),zn("Session downloaded")};Ae("#fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{zn("Fullscreen is unavailable in this browser")}};window.addEventListener("keydown",r=>{if(!(r.target instanceof HTMLInputElement&&r.target.id!=="mouse-steer"||!["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyR","KeyC","KeyH"].includes(r.code))&&(r.preventDefault(),Ws.add(r.code),!r.repeat&&!Kl.some(t=>t.open)&&(r.code==="Space"&&Ae("#pause").click(),r.code==="KeyR"&&Ae("#recover").click(),r.code==="KeyH"&&Ae("#controls").click(),r.code==="KeyC"))){const t=["chase","onboard","circuit"];Ql(t[(t.indexOf(Vt?.mode)+1)%3])}});window.addEventListener("keyup",r=>Ws.delete(r.code));window.addEventListener("blur",()=>{Ni(),qe&&Pn(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(Ni(),Pn(!0))});window.addEventListener("gamepaddisconnected",()=>{Ni(),Pn(!0),zn("Gamepad disconnected - paused")});Ae("#touch-steer").oninput=r=>Ki.steer=+r.target.value;for(const r of["pointerup","pointercancel","lostpointercapture"])Ae("#touch-steer").addEventListener(r,()=>{Ki.steer=0,Ae("#touch-steer").value=0});const br=Ae("#mouse-steer");function Lf(r){const e=br.getBoundingClientRect();Ii.steer=Math.max(-1,Math.min(1,(r.clientX-e.left-e.width/2)/(e.width/2))),br.value=Ii.steer}function If(){Ii.active=!1,Ii.steer=0,br.value=0}br.addEventListener("pointerdown",r=>{r.pointerType!=="mouse"||r.button!==0||(Ii.active=!0,br.setPointerCapture(r.pointerId),Lf(r),r.preventDefault())});br.addEventListener("pointermove",r=>{Ii.active&&Lf(r)});for(const r of["pointerup","pointercancel","lostpointercapture"])br.addEventListener(r,If);window.addEventListener("pointerup",If);for(const r of Zi("[data-pedal]")){r.onpointerdown=e=>{r.setPointerCapture(e.pointerId),Ki[r.dataset.pedal]=1,e.preventDefault()};for(const e of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(e,()=>Ki[r.dataset.pedal]=0)}function Ed(r){return r===null?"--":`${Math.floor(r/60)}:${(r%60).toFixed(1).padStart(4,"0")}`}function Df(){Vt?.resize(innerWidth,innerHeight)}window.addEventListener("resize",Df);function kw(r){Ae("#speed").textContent=Math.abs(r.speed).toFixed(1),Ae("#laps").textContent=r.laps,Ae("#timer").textContent=Ed(r.elapsed-qe.lapStart),Ae("#best").textContent=Ed(r.bestLap),Ae("#hits").textContent=r.hits,Ae("#assistance").textContent=`${Math.round(r.assistance*100)}%`;const e=Uw(qe,kt.length);if(Ae("#lap-progress").value=e.fraction,Ae("#lap-percent").textContent=`${(e.fraction*100).toFixed(1)}%`,Ae("#lap-progress-label").textContent=e.label,Ae("#lap-progress").setAttribute("aria-label",e.valid?"Lap progress":"Track position; lap invalid until start line"),!Ae("#expert-actions").hidden){const t=qe.mode==="manual"&&qe.autoPolicy?Sf(qe.autoPolicy.driver,qe):qe.expertInput??(qe.policies?qe.expertAction():null);Ae("#expert-actions").dataset.available=String(!!t);const n=["manual","expert"].includes(qe.mode)?qe.autoSpeedLimit:Yl;Ae("#expert-actions").title=qe.speedLimit>n?`Expert guidance is outside its validated ${n} m/s range`:"";for(const i of["steer","throttle","brake"])for(const[s,o]of[["human",yr],["expert",t]]){const l=Ae(`[data-command="${i}-${s}"]`),u=o?.[i]??0;l.style.left=`${Ow(u,i==="steer")}%`,l.setAttribute("aria-label",`${s==="human"?"Your":"Expert"} ${i}: ${u.toFixed(2)}`)}}}function Ff(r){const e=Math.min((r-ao)/1e3,.1);if(ao=r,Pf(),!Yi)for(ws+=e;ws>=.02&&!Yi;){qe.step(yr),ws-=.02;const i=Cn.tick(Fs(qe.position).distance);if(Vt.captureStep(),i)if(Ni(),Zl(),Vt.snapCamera=!0,i==="complete"){$s(Ji,"practice-complete");const[s,,o]=Cn.results,l=[["Contacts",s.contacts,o.contacts],["Progress (m)",(s.progressPoints*Gs/kt.length).toFixed(1),(o.progressPoints*Gs/kt.length).toFixed(1)],["Mean offset (m)",s.meanDistance.toFixed(2),o.meanDistance.toFixed(2)]];Ae("#session-results").innerHTML=l.map(u=>`<tr>${u.map((h,f)=>`<${f?"td":"th"}>${h}</${f?"td":"th"}>`).join("")}</tr>`).join(""),Pn(!0),eu(Ae("#results-dialog"))}else Pn(!0),zn(`${Cn.phase} - Space to resume`)}Vt.render(e,Yi?1:ws/.02);const t=qe.snapshot();kw(t);const n=Cn.snapshot();Ae("#phase-label").textContent=n.active?`${n.phase} - ${Math.ceil(n.remaining)}s`:"Simulation prototype",requestAnimationFrame(Ff)}try{const r=await k0({locateFile:e=>e.endsWith(".wasm")?B0:e});qe=new XT(r),qe.speedLimit=Ji,Cn=new Nw(qe),Vt=new Dw(Ae("#world"),qe),Df(),Pn(!0);try{const e=await fetch("/car/policies/driving-coach.json");if(!e.ok)throw new Error("Policy download failed");qe.setPolicies(await e.json());try{const t=await fetch("/car/policies/fast-driver.json");if(!t.ok)throw new Error("Fast driver download failed");qe.setAutoPolicy(await t.json()),Ae('[data-mode="expert"]').title=`Autonomous IL driver (${qe.autoSpeedLimit} m/s ceiling; slows for corners)`,Ae(".speed-note").textContent=`Auto up to ${qe.autoSpeedLimit.toFixed(1)} m/s; assistance and practice tests are limited to 2.0 m/s.`}catch(t){console.warn("Fast Auto unavailable; keeping validated 2 m/s driver",t)}Zi('[data-mode="fixed"],[data-mode="coach"],[data-mode="expert"],#il-drive,#practice-session').forEach(t=>t.disabled=!1)}catch(e){zn("Learned assistance unavailable - manual driving is ready"),console.warn(e)}if(await Vt.assetPromise,Ae("#loading").hidden=!0,!Vt.vehicleModelReady)throw new Error("AutoDRIVE vehicle asset could not load. Please reload.");Vt.assetErrors.length&&zn("Some venue artwork could not load"),window.car={sim:qe,view:Vt,session:Cn,setPaused:Pn,setMode:go,camera:Ql,snapshot:()=>({...qe.snapshot(),session:Cn.snapshot(),paused:Yi,view:Vt.mode,ready:!0,frames:Vt.frames,assetsReady:Vt.assetsReady,assetErrors:Vt.assetErrors,input:yr})},ao=performance.now(),requestAnimationFrame(Ff)}catch(r){Ae("#loading").hidden=!1,Ae("#loading").textContent=`Could not start the driving simulator. ${r.message}`,console.error(r)}const Bw=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
