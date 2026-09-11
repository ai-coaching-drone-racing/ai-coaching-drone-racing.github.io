(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const J0="modulepreload",Z0=function(i){return"/demo/"+i},du={},Q0=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let h=function(f){return Promise.all(f.map(p=>Promise.resolve(p).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=h(t.map(f=>{if(f=Z0(f),f in du)return;du[f]=!0;const p=f.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":J0,p||(m.as="script"),m.crossOrigin="",m.href=f,c&&m.setAttribute("nonce",c),document.head.appendChild(m),p)return new Promise((_,b)=>{m.addEventListener("load",_),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};var ev=(async function(i={}){var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",a=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!n&&!a&&!r;if(a){const{createRequire:s}=await Q0(async()=>{const{createRequire:o}=await Promise.resolve().then(()=>n1);return{createRequire:o}},void 0);var c=s(import.meta.url)}var h="./this.program",f=(s,o)=>{throw o},p=import.meta.url,g="";function m(s){return t.locateFile?t.locateFile(s,g):g+s}var _,b;if(a){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var A=process.versions.node,y=A.split(".").slice(0,3);if(y=y[0]*1e4+y[1]*100+y[2].split("-")[0]*1,y<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+A+")");var x=c("fs");p.startsWith("file:")&&(g=c("path").dirname(c("url").fileURLToPath(p))+"/"),b=o=>{o=k(o)?new URL(o):o;var u=x.readFileSync(o);return R(Buffer.isBuffer(u)),u},_=async(o,u=!0)=>{o=k(o)?new URL(o):o;var d=x.readFileSync(o,u?void 0:"utf8");return R(u?Buffer.isBuffer(d):typeof d=="string"),d},process.argv.length>1&&(h=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(o,u)=>{throw process.exitCode=o,u}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{g=new URL(".",p).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(b=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),_=async s=>{if(k(s))return new Promise((u,d)=>{var v=new XMLHttpRequest;v.open("GET",s,!0),v.responseType="arraybuffer",v.onload=()=>{if(v.status==200||v.status==0&&v.response){u(v.response);return}d(v.status)},v.onerror=d,v.send(null)});var o=await fetch(s,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}else throw new Error("environment detection error");var I=console.log.bind(console),F=console.error.bind(console);R(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var P;typeof WebAssembly!="object"&&F("no native wasm support detected");var N=!1;function R(s,o){s||H("Assertion failed"+(o?": "+o:""))}var k=s=>s.startsWith("file://");function w(){var s=lo();R((s&3)==0),s==0&&(s+=4),Me[s>>2]=34821223,Me[s+4>>2]=2310721022,Me[0]=1668509029}function L(){if(!N){var s=lo();s==0&&(s+=4);var o=Me[s>>2],u=Me[s+4>>2];(o!=34821223||u!=2310721022)&&H(`Stack overflow! Stack cookie has been overwritten at ${Fe(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${Fe(u)} ${Fe(o)}`),Me[0]!=1668509029&&H("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class B extends Error{}class z extends B{}class q extends B{constructor(o){super(o),this.excPtr=o;const u=Jc(o);this.name=u[0],this.message=u[1]}}(()=>{var s=new Int16Array(1),o=new Int8Array(s.buffer);if(s[0]=25459,o[0]!==115||o[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function ee(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){H(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function K(s){return()=>R(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function te(s){Object.getOwnPropertyDescriptor(t,s)&&H(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function Q(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function J(s,o){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){o()}})}function ve(s,o){J(s,()=>{Ue(`\`${s}\` is not longer defined by emscripten. ${o}`)})}ve("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),ve("asm","Please use wasmExports instead");function me(s){J(s,()=>{var o=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,u=s;u.startsWith("_")||(u="$"+s),o+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${u}')`,Q(s)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ue(o)}),De(s)}function De(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var o=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Q(s)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),H(o)}})}var Pe,Re,He,je,Ve,oe,xe,se,Me,Xe,Ye,_t,rt,dt=!1;function Ct(){var s=He.buffer;je=new Int8Array(s),oe=new Int16Array(s),Ve=new Uint8Array(s),xe=new Uint16Array(s),se=new Int32Array(s),Me=new Uint32Array(s),Xe=new Float32Array(s),Ye=new Float64Array(s),_t=new BigInt64Array(s),rt=new BigUint64Array(s)}R(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function at(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Ae(t.preRun.shift());ee("preRun"),ze($)}function Ht(){R(!dt),dt=!0,L(),!t.noFSInit&&!M.initialized&&M.init(),tr.__wasm_call_ctors(),M.ignorePermissions=!1}function V(){if(L(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)ot(t.postRun.shift());ee("postRun"),ze(Ie)}var Ft=0,gt=null,St={},Oe=null;function U(s){Ft++,t.monitorRunDependencies?.(Ft),s?(R(!St[s]),St[s]=1,Oe===null&&typeof setInterval<"u"&&(Oe=setInterval(()=>{if(N){clearInterval(Oe),Oe=null;return}var o=!1;for(var u in St)o||(o=!0,F("still waiting on run dependencies:")),F(`dependency: ${u}`);o&&F("(end of list)")},1e4))):F("warning: run dependency added without ID")}function E(s){if(Ft--,t.monitorRunDependencies?.(Ft),s?(R(St[s]),delete St[s]):F("warning: run dependency removed without ID"),Ft==0&&(Oe!==null&&(clearInterval(Oe),Oe=null),gt)){var o=gt;gt=null,o()}}function H(s){t.onAbort?.(s),s="Aborted("+s+")",F(s),N=!0;var o=new WebAssembly.RuntimeError(s);throw Re?.(o),o}function le(s,o){return(...u)=>{R(dt,`native function \`${s}\` called before runtime initialization`);var d=tr[s];return R(d,`exported native function \`${s}\` not found`),R(u.length<=o,`native function \`${s}\` called with ${u.length} args but expects ${o}`),d(...u)}}var ge;function ce(){return t.locateFile?m("mujoco.wasm"):new URL("/demo/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function ke(s){if(s==ge&&P)return new Uint8Array(P);if(b)return b(s);throw"both async and sync fetching of the wasm failed"}async function Te(s){if(!P)try{var o=await _(s);return new Uint8Array(o)}catch{}return ke(s)}async function qe(s,o){try{var u=await Te(s),d=await WebAssembly.instantiate(u,o);return d}catch(v){F(`failed to asynchronously prepare wasm: ${v}`),k(ge)&&F(`warning: Loading from a file URI (${ge}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),H(v)}}async function Ze(s,o,u){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!k(o)&&!a)try{var d=fetch(o,{credentials:"same-origin"}),v=await WebAssembly.instantiateStreaming(d,u);return v}catch(S){F(`wasm streaming compile failed: ${S}`),F("falling back to ArrayBuffer instantiation")}return qe(o,u)}function be(){return{env:cu,wasi_snapshot_preview1:cu}}async function we(){function s(T,C){return tr=T.exports,He=tr.memory,R(He,"memory not found in wasm exports"),Ct(),Zs=tr.__indirect_function_table,R(Zs,"table not found in wasm exports"),Qp(tr),E("wasm-instantiate"),tr}U("wasm-instantiate");var o=t;function u(T){return R(t===o,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),o=null,s(T.instance)}var d=be();if(t.instantiateWasm)return new Promise((T,C)=>{try{t.instantiateWasm(d,(O,Y)=>{T(s(O,Y))})}catch(O){F(`Module.instantiateWasm callback failed with error: ${O}`),C(O)}});ge??=ce();var v=await Ze(P,ge,d),S=u(v);return S}class Be{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var ze=s=>{for(;s.length>0;)s.shift()(t)},Ie=[],ot=s=>Ie.push(s),$=[],Ae=s=>$.push(s),Ee=!0,Fe=s=>(R(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0")),X=s=>iu(s),G=()=>su(),Ue=s=>{Ue.shown||={},Ue.shown[s]||(Ue.shown[s]=1,a&&(s="warning: "+s),F(s))},tt=typeof TextDecoder<"u"?new TextDecoder:void 0,bt=(s,o=0,u=NaN)=>{for(var d=o+u,v=o;s[v]&&!(v>=d);)++v;if(v-o>16&&s.buffer&&tt)return tt.decode(s.subarray(o,v));for(var S="";o<v;){var T=s[o++];if(!(T&128)){S+=String.fromCharCode(T);continue}var C=s[o++]&63;if((T&224)==192){S+=String.fromCharCode((T&31)<<6|C);continue}var O=s[o++]&63;if((T&240)==224?T=(T&15)<<12|C<<6|O:((T&248)!=240&&Ue("Invalid UTF-8 leading byte "+Fe(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|C<<12|O<<6|s[o++]&63),T<65536)S+=String.fromCharCode(T);else{var Y=T-65536;S+=String.fromCharCode(55296|Y>>10,56320|Y&1023)}}return S},ft=(s,o)=>(R(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?bt(Ve,s,o):""),Gn=(s,o,u,d)=>H(`Assertion failed: ${ft(s)}, at: `+[o?ft(o):"unknown filename",u,d?ft(d):"unknown function"]),Zt=[],Yi=0,Qr=s=>{var o=new Un(s);return o.get_caught()||(o.set_caught(!0),Yi--),o.set_rethrown(!1),Zt.push(o),sa(s),lu(s)},ja=()=>{if(!Zt.length)return 0;var s=Zt[Zt.length-1];return sa(s.excPtr),s.excPtr},In=0,ks=()=>{ye(0,0),R(Zt.length>0);var s=Zt.pop();co(s.excPtr),In=0};class Un{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){Me[this.ptr+4>>2]=o}get_type(){return Me[this.ptr+4>>2]}set_destructor(o){Me[this.ptr+8>>2]=o}get_destructor(){return Me[this.ptr+8>>2]}set_caught(o){o=o?1:0,je[this.ptr+12]=o}get_caught(){return je[this.ptr+12]!=0}set_rethrown(o){o=o?1:0,je[this.ptr+13]=o}get_rethrown(){return je[this.ptr+13]!=0}init(o,u){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(u)}set_adjusted_ptr(o){Me[this.ptr+16>>2]=o}get_adjusted_ptr(){return Me[this.ptr+16>>2]}}var Di=s=>tu(s),xr=s=>{var o=In?.excPtr;if(!o)return Di(0),0;var u=new Un(o);u.set_adjusted_ptr(o);var d=u.get_type();if(!d)return Di(0),o;for(var v of s){if(v===0||v===d)break;var S=u.ptr+16;if(ou(v,d,S))return Di(v),o}return Di(d),o},Bs=()=>xr([]),yr=s=>xr([s]),zs=(s,o)=>xr([s,o]),Ki=()=>{var s=Zt.pop();s||H("no exception to throw");var o=s.excPtr;throw s.get_rethrown()||(Zt.push(s),s.set_rethrown(!0),s.set_caught(!1),Yi++),In=new q(o),In},Gs=s=>{if(s){var o=new Un(s);Zt.push(o),o.set_rethrown(!0),Ki()}},Vs=(s,o,u)=>{var d=new Un(s);throw d.init(o,u),In=new q(s),Yi++,In},qa=()=>Yi,Ya=s=>{throw In||(In=new q(s)),In},Rt={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var u=0,d=s.length-1;d>=0;d--){var v=s[d];v==="."?s.splice(d,1):v===".."?(s.splice(d,1),u++):u&&(s.splice(d,1),u--)}if(o)for(;u;u--)s.unshift("..");return s},normalize:s=>{var o=Rt.isAbs(s),u=s.slice(-1)==="/";return s=Rt.normalizeArray(s.split("/").filter(d=>!!d),!o).join("/"),!s&&!o&&(s="."),s&&u&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=Rt.splitPath(s),u=o[0],d=o[1];return!u&&!d?".":(d&&(d=d.slice(0,-1)),u+d)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>Rt.normalize(s.join("/")),join2:(s,o)=>Rt.normalize(s+"/"+o)},Ka=()=>{if(a){var s=c("crypto");return o=>s.randomFillSync(o)}return o=>crypto.getRandomValues(o)},Hs=s=>{(Hs=Ka())(s)},Li={resolve:(...s)=>{for(var o="",u=!1,d=s.length-1;d>=-1&&!u;d--){var v=d>=0?s[d]:M.cwd();if(typeof v!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!v)return"";o=v+"/"+o,u=Rt.isAbs(v)}return o=Rt.normalizeArray(o.split("/").filter(S=>!!S),!u).join("/"),(u?"/":"")+o||"."},relative:(s,o)=>{s=Li.resolve(s).slice(1),o=Li.resolve(o).slice(1);function u(Y){for(var ie=0;ie<Y.length&&Y[ie]==="";ie++);for(var he=Y.length-1;he>=0&&Y[he]==="";he--);return ie>he?[]:Y.slice(ie,he-ie+1)}for(var d=u(s.split("/")),v=u(o.split("/")),S=Math.min(d.length,v.length),T=S,C=0;C<S;C++)if(d[C]!==v[C]){T=C;break}for(var O=[],C=T;C<d.length;C++)O.push("..");return O=O.concat(v.slice(T)),O.join("/")}},D=[],j=s=>{for(var o=0,u=0;u<s.length;++u){var d=s.charCodeAt(u);d<=127?o++:d<=2047?o+=2:d>=55296&&d<=57343?(o+=4,++u):o+=3}return o},ae=(s,o,u,d)=>{if(R(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(d>0))return 0;for(var v=u,S=u+d-1,T=0;T<s.length;++T){var C=s.codePointAt(T);if(C<=127){if(u>=S)break;o[u++]=C}else if(C<=2047){if(u+1>=S)break;o[u++]=192|C>>6,o[u++]=128|C&63}else if(C<=65535){if(u+2>=S)break;o[u++]=224|C>>12,o[u++]=128|C>>6&63,o[u++]=128|C&63}else{if(u+3>=S)break;C>1114111&&Ue("Invalid Unicode code point "+Fe(C)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),o[u++]=240|C>>18,o[u++]=128|C>>12&63,o[u++]=128|C>>6&63,o[u++]=128|C&63,T++}}return o[u]=0,u-v},re=(s,o,u)=>{var d=j(s)+1,v=new Array(d),S=ae(s,v,0,v.length);return v.length=S,v},ne=()=>{if(!D.length){var s=null;if(a){var o=256,u=Buffer.alloc(o),d=0,v=process.stdin.fd;try{d=x.readSync(v,u,0,o)}catch(S){if(S.toString().includes("EOF"))d=0;else throw S}d>0&&(s=u.slice(0,d).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;D=re(s)}return D.shift()},Ce={ttys:[],init(){},shutdown(){},register(s,o){Ce.ttys[s]={input:[],output:[],ops:o},M.registerDevice(s,Ce.stream_ops)},stream_ops:{open(s){var o=Ce.ttys[s.node.rdev];if(!o)throw new M.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,u,d,v){if(!s.tty||!s.tty.ops.get_char)throw new M.ErrnoError(60);for(var S=0,T=0;T<d;T++){var C;try{C=s.tty.ops.get_char(s.tty)}catch{throw new M.ErrnoError(29)}if(C===void 0&&S===0)throw new M.ErrnoError(6);if(C==null)break;S++,o[u+T]=C}return S&&(s.node.atime=Date.now()),S},write(s,o,u,d,v){if(!s.tty||!s.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var S=0;S<d;S++)s.tty.ops.put_char(s.tty,o[u+S])}catch{throw new M.ErrnoError(29)}return d&&(s.node.mtime=s.node.ctime=Date.now()),S}},default_tty_ops:{get_char(s){return ne()},put_char(s,o){o===null||o===10?(I(bt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(I(bt(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(F(bt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(F(bt(s.output)),s.output=[])}}},Ne=s=>{H("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},pe={ops_table:null,mount(s){return pe.createNode(null,"/",16895,0)},createNode(s,o,u,d){if(M.isBlkdev(u)||M.isFIFO(u))throw new M.ErrnoError(63);pe.ops_table||={dir:{node:{getattr:pe.node_ops.getattr,setattr:pe.node_ops.setattr,lookup:pe.node_ops.lookup,mknod:pe.node_ops.mknod,rename:pe.node_ops.rename,unlink:pe.node_ops.unlink,rmdir:pe.node_ops.rmdir,readdir:pe.node_ops.readdir,symlink:pe.node_ops.symlink},stream:{llseek:pe.stream_ops.llseek}},file:{node:{getattr:pe.node_ops.getattr,setattr:pe.node_ops.setattr},stream:{llseek:pe.stream_ops.llseek,read:pe.stream_ops.read,write:pe.stream_ops.write,mmap:pe.stream_ops.mmap,msync:pe.stream_ops.msync}},link:{node:{getattr:pe.node_ops.getattr,setattr:pe.node_ops.setattr,readlink:pe.node_ops.readlink},stream:{}},chrdev:{node:{getattr:pe.node_ops.getattr,setattr:pe.node_ops.setattr},stream:M.chrdev_stream_ops}};var v=M.createNode(s,o,u,d);return M.isDir(v.mode)?(v.node_ops=pe.ops_table.dir.node,v.stream_ops=pe.ops_table.dir.stream,v.contents={}):M.isFile(v.mode)?(v.node_ops=pe.ops_table.file.node,v.stream_ops=pe.ops_table.file.stream,v.usedBytes=0,v.contents=null):M.isLink(v.mode)?(v.node_ops=pe.ops_table.link.node,v.stream_ops=pe.ops_table.link.stream):M.isChrdev(v.mode)&&(v.node_ops=pe.ops_table.chrdev.node,v.stream_ops=pe.ops_table.chrdev.stream),v.atime=v.mtime=v.ctime=Date.now(),s&&(s.contents[o]=v,s.atime=s.mtime=s.ctime=v.atime),v},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,o){var u=s.contents?s.contents.length:0;if(!(u>=o)){var d=1024*1024;o=Math.max(o,u*(u<d?2:1.125)>>>0),u!=0&&(o=Math.max(o,256));var v=s.contents;s.contents=new Uint8Array(o),s.usedBytes>0&&s.contents.set(v.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,o){if(s.usedBytes!=o)if(o==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(o),u&&s.contents.set(u.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=M.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,M.isDir(s.mode)?o.size=4096:M.isFile(s.mode)?o.size=s.usedBytes:M.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.atime),o.mtime=new Date(s.mtime),o.ctime=new Date(s.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){for(const u of["mode","atime","mtime","ctime"])o[u]!=null&&(s[u]=o[u]);o.size!==void 0&&pe.resizeFileStorage(s,o.size)},lookup(s,o){throw new M.ErrnoError(44)},mknod(s,o,u,d){return pe.createNode(s,o,u,d)},rename(s,o,u){var d;try{d=M.lookupNode(o,u)}catch{}if(d){if(M.isDir(s.mode))for(var v in d.contents)throw new M.ErrnoError(55);M.hashRemoveNode(d)}delete s.parent.contents[s.name],o.contents[u]=s,s.name=u,o.ctime=o.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,o){delete s.contents[o],s.ctime=s.mtime=Date.now()},rmdir(s,o){var u=M.lookupNode(s,o);for(var d in u.contents)throw new M.ErrnoError(55);delete s.contents[o],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,o,u){var d=pe.createNode(s,o,41471,0);return d.link=u,d},readlink(s){if(!M.isLink(s.mode))throw new M.ErrnoError(28);return s.link}},stream_ops:{read(s,o,u,d,v){var S=s.node.contents;if(v>=s.node.usedBytes)return 0;var T=Math.min(s.node.usedBytes-v,d);if(R(T>=0),T>8&&S.subarray)o.set(S.subarray(v,v+T),u);else for(var C=0;C<T;C++)o[u+C]=S[v+C];return T},write(s,o,u,d,v,S){if(R(!(o instanceof ArrayBuffer)),o.buffer===je.buffer&&(S=!1),!d)return 0;var T=s.node;if(T.mtime=T.ctime=Date.now(),o.subarray&&(!T.contents||T.contents.subarray)){if(S)return R(v===0,"canOwn must imply no weird position inside the file"),T.contents=o.subarray(u,u+d),T.usedBytes=d,d;if(T.usedBytes===0&&v===0)return T.contents=o.slice(u,u+d),T.usedBytes=d,d;if(v+d<=T.usedBytes)return T.contents.set(o.subarray(u,u+d),v),d}if(pe.expandFileStorage(T,v+d),T.contents.subarray&&o.subarray)T.contents.set(o.subarray(u,u+d),v);else for(var C=0;C<d;C++)T.contents[v+C]=o[u+C];return T.usedBytes=Math.max(T.usedBytes,v+d),d},llseek(s,o,u){var d=o;if(u===1?d+=s.position:u===2&&M.isFile(s.node.mode)&&(d+=s.node.usedBytes),d<0)throw new M.ErrnoError(28);return d},mmap(s,o,u,d,v){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);var S,T,C=s.node.contents;if(!(v&2)&&C&&C.buffer===je.buffer)T=!1,S=C.byteOffset;else{if(T=!0,S=Ne(),!S)throw new M.ErrnoError(48);C&&((u>0||u+o<C.length)&&(C.subarray?C=C.subarray(u,u+o):C=Array.prototype.slice.call(C,u,u+o)),je.set(C,S))}return{ptr:S,allocated:T}},msync(s,o,u,d,v){return pe.stream_ops.write(s,o,0,d,u,!1),0}}},Ge=async s=>{var o=await _(s);return R(o,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(o)},We=(...s)=>M.createDataFile(...s),it=s=>{for(var o=s;;){if(!St[s])return s;s=o+Math.random()}},st=[],$e=(s,o,u,d)=>{typeof Browser<"u"&&Browser.init();var v=!1;return st.forEach(S=>{v||S.canHandle(o)&&(S.handle(s,o,u,d),v=!0)}),v},Tt=(s,o,u,d,v,S,T,C,O,Y)=>{var ie=o?Li.resolve(Rt.join2(s,o)):s,he=it(`cp ${ie}`);function fe(de){function _e(Je){Y?.(),C||We(s,o,Je,d,v,O),S?.(),E(he)}$e(de,ie,_e,()=>{T?.(),E(he)})||_e(de)}U(he),typeof u=="string"?Ge(u).then(fe,T):fe(u)},Wt=s=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=o[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},kt=(s,o)=>{var u=0;return s&&(u|=365),o&&(u|=146),u},Pt=s=>ft(eu(s)),Qt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(s){super(dt?Pt(s):""),this.errno=s;for(var o in Qt)if(Qt[o]===s){this.code=o;break}}},FSStream:class{shared={};get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(s,o,u,d){s||(s=this),this.parent=s,this.mount=s.mount,this.id=M.nextInode++,this.name=o,this.mode=u,this.rdev=d,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(s,o={}){if(!s)throw new M.ErrnoError(44);o.follow_mount??=!0,Rt.isAbs(s)||(s=M.cwd()+"/"+s);e:for(var u=0;u<40;u++){for(var d=s.split("/").filter(Y=>!!Y),v=M.root,S="/",T=0;T<d.length;T++){var C=T===d.length-1;if(C&&o.parent)break;if(d[T]!=="."){if(d[T]===".."){if(S=Rt.dirname(S),M.isRoot(v)){s=S+"/"+d.slice(T+1).join("/");continue e}else v=v.parent;continue}S=Rt.join2(S,d[T]);try{v=M.lookupNode(v,d[T])}catch(Y){if(Y?.errno===44&&C&&o.noent_okay)return{path:S};throw Y}if(M.isMountpoint(v)&&(!C||o.follow_mount)&&(v=v.mounted.root),M.isLink(v.mode)&&(!C||o.follow)){if(!v.node_ops.readlink)throw new M.ErrnoError(52);var O=v.node_ops.readlink(v);Rt.isAbs(O)||(O=Rt.dirname(S)+"/"+O),s=O+"/"+d.slice(T+1).join("/");continue e}}}return{path:S,node:v}}throw new M.ErrnoError(32)},getPath(s){for(var o;;){if(M.isRoot(s)){var u=s.mount.mountpoint;return o?u[u.length-1]!=="/"?`${u}/${o}`:u+o:u}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var u=0,d=0;d<o.length;d++)u=(u<<5)-u+o.charCodeAt(d)|0;return(s+u>>>0)%M.nameTable.length},hashAddNode(s){var o=M.hashName(s.parent.id,s.name);s.name_next=M.nameTable[o],M.nameTable[o]=s},hashRemoveNode(s){var o=M.hashName(s.parent.id,s.name);if(M.nameTable[o]===s)M.nameTable[o]=s.name_next;else for(var u=M.nameTable[o];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,o){var u=M.mayLookup(s);if(u)throw new M.ErrnoError(u);for(var d=M.hashName(s.id,o),v=M.nameTable[d];v;v=v.name_next){var S=v.name;if(v.parent.id===s.id&&S===o)return v}return M.lookup(s,o)},createNode(s,o,u,d){R(typeof s=="object");var v=new M.FSNode(s,o,u,d);return M.hashAddNode(v),v},destroyNode(s){M.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return M.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!M.isDir(s.mode))return 54;var o=M.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){if(!M.isDir(s.mode))return 54;try{var u=M.lookupNode(s,o);return 20}catch{}return M.nodePermissions(s,"wx")},mayDelete(s,o,u){var d;try{d=M.lookupNode(s,o)}catch(S){return S.errno}var v=M.nodePermissions(s,"wx");if(v)return v;if(u){if(!M.isDir(d.mode))return 54;if(M.isRoot(d)||M.getPath(d)===M.cwd())return 10}else if(M.isDir(d.mode))return 31;return 0},mayOpen(s,o){return s?M.isLink(s.mode)?32:M.isDir(s.mode)&&(M.flagsToPermissionString(o)!=="r"||o&576)?31:M.nodePermissions(s,M.flagsToPermissionString(o)):44},checkOpExists(s,o){if(!s)throw new M.ErrnoError(o);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=M.MAX_OPEN_FDS;s++)if(!M.streams[s])return s;throw new M.ErrnoError(33)},getStreamChecked(s){var o=M.getStream(s);if(!o)throw new M.ErrnoError(8);return o},getStream:s=>M.streams[s],createStream(s,o=-1){return R(o>=-1),s=Object.assign(new M.FSStream,s),o==-1&&(o=M.nextfd()),s.fd=o,M.streams[o]=s,s},closeStream(s){M.streams[s]=null},dupStream(s,o=-1){var u=M.createStream(s,o);return u.stream_ops?.dup?.(u),u},doSetAttr(s,o,u){var d=s?.stream_ops.setattr,v=d?s:o;d??=o.node_ops.setattr,M.checkOpExists(d,63),d(v,u)},chrdev_stream_ops:{open(s){var o=M.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new M.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){M.devices[s]={stream_ops:o}},getDevice:s=>M.devices[s],getMounts(s){for(var o=[],u=[s];u.length;){var d=u.pop();o.push(d),u.push(...d.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),M.syncFSRequests++,M.syncFSRequests>1&&F(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=M.getMounts(M.root.mount),d=0;function v(T){return R(M.syncFSRequests>0),M.syncFSRequests--,o(T)}function S(T){if(T)return S.errored?void 0:(S.errored=!0,v(T));++d>=u.length&&v(null)}u.forEach(T=>{if(!T.type.syncfs)return S(null);T.type.syncfs(T,s,S)})},mount(s,o,u){if(typeof s=="string")throw s;var d=u==="/",v=!u,S;if(d&&M.root)throw new M.ErrnoError(10);if(!d&&!v){var T=M.lookupPath(u,{follow_mount:!1});if(u=T.path,S=T.node,M.isMountpoint(S))throw new M.ErrnoError(10);if(!M.isDir(S.mode))throw new M.ErrnoError(54)}var C={type:s,opts:o,mountpoint:u,mounts:[]},O=s.mount(C);return O.mount=C,C.root=O,d?M.root=O:S&&(S.mounted=C,S.mount&&S.mount.mounts.push(C)),O},unmount(s){var o=M.lookupPath(s,{follow_mount:!1});if(!M.isMountpoint(o.node))throw new M.ErrnoError(28);var u=o.node,d=u.mounted,v=M.getMounts(d);Object.keys(M.nameTable).forEach(T=>{for(var C=M.nameTable[T];C;){var O=C.name_next;v.includes(C.mount)&&M.destroyNode(C),C=O}}),u.mounted=null;var S=u.mount.mounts.indexOf(d);R(S!==-1),u.mount.mounts.splice(S,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,u){var d=M.lookupPath(s,{parent:!0}),v=d.node,S=Rt.basename(s);if(!S)throw new M.ErrnoError(28);if(S==="."||S==="..")throw new M.ErrnoError(20);var T=M.mayCreate(v,S);if(T)throw new M.ErrnoError(T);if(!v.node_ops.mknod)throw new M.ErrnoError(63);return v.node_ops.mknod(v,S,o,u)},statfs(s){return M.statfsNode(M.lookupPath(s,{follow:!0}).node)},statfsStream(s){return M.statfsNode(s.node)},statfsNode(s){var o={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(o,s.node_ops.statfs(s.mount.opts.root)),o},create(s,o=438){return o&=4095,o|=32768,M.mknod(s,o,0)},mkdir(s,o=511){return o&=1023,o|=16384,M.mknod(s,o,0)},mkdirTree(s,o){var u=s.split("/"),d="";for(var v of u)if(v){(d||Rt.isAbs(s))&&(d+="/"),d+=v;try{M.mkdir(d,o)}catch(S){if(S.errno!=20)throw S}}},mkdev(s,o,u){return typeof u>"u"&&(u=o,o=438),o|=8192,M.mknod(s,o,u)},symlink(s,o){if(!Li.resolve(s))throw new M.ErrnoError(44);var u=M.lookupPath(o,{parent:!0}),d=u.node;if(!d)throw new M.ErrnoError(44);var v=Rt.basename(o),S=M.mayCreate(d,v);if(S)throw new M.ErrnoError(S);if(!d.node_ops.symlink)throw new M.ErrnoError(63);return d.node_ops.symlink(d,v,s)},rename(s,o){var u=Rt.dirname(s),d=Rt.dirname(o),v=Rt.basename(s),S=Rt.basename(o),T,C,O;if(T=M.lookupPath(s,{parent:!0}),C=T.node,T=M.lookupPath(o,{parent:!0}),O=T.node,!C||!O)throw new M.ErrnoError(44);if(C.mount!==O.mount)throw new M.ErrnoError(75);var Y=M.lookupNode(C,v),ie=Li.relative(s,d);if(ie.charAt(0)!==".")throw new M.ErrnoError(28);if(ie=Li.relative(o,u),ie.charAt(0)!==".")throw new M.ErrnoError(55);var he;try{he=M.lookupNode(O,S)}catch{}if(Y!==he){var fe=M.isDir(Y.mode),de=M.mayDelete(C,v,fe);if(de)throw new M.ErrnoError(de);if(de=he?M.mayDelete(O,S,fe):M.mayCreate(O,S),de)throw new M.ErrnoError(de);if(!C.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(Y)||he&&M.isMountpoint(he))throw new M.ErrnoError(10);if(O!==C&&(de=M.nodePermissions(C,"w"),de))throw new M.ErrnoError(de);M.hashRemoveNode(Y);try{C.node_ops.rename(Y,O,S),Y.parent=O}catch(_e){throw _e}finally{M.hashAddNode(Y)}}},rmdir(s){var o=M.lookupPath(s,{parent:!0}),u=o.node,d=Rt.basename(s),v=M.lookupNode(u,d),S=M.mayDelete(u,d,!0);if(S)throw new M.ErrnoError(S);if(!u.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(v))throw new M.ErrnoError(10);u.node_ops.rmdir(u,d),M.destroyNode(v)},readdir(s){var o=M.lookupPath(s,{follow:!0}),u=o.node,d=M.checkOpExists(u.node_ops.readdir,54);return d(u)},unlink(s){var o=M.lookupPath(s,{parent:!0}),u=o.node;if(!u)throw new M.ErrnoError(44);var d=Rt.basename(s),v=M.lookupNode(u,d),S=M.mayDelete(u,d,!1);if(S)throw new M.ErrnoError(S);if(!u.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(v))throw new M.ErrnoError(10);u.node_ops.unlink(u,d),M.destroyNode(v)},readlink(s){var o=M.lookupPath(s),u=o.node;if(!u)throw new M.ErrnoError(44);if(!u.node_ops.readlink)throw new M.ErrnoError(28);return u.node_ops.readlink(u)},stat(s,o){var u=M.lookupPath(s,{follow:!o}),d=u.node,v=M.checkOpExists(d.node_ops.getattr,63);return v(d)},fstat(s){var o=M.getStreamChecked(s),u=o.node,d=o.stream_ops.getattr,v=d?o:u;return d??=u.node_ops.getattr,M.checkOpExists(d,63),d(v)},lstat(s){return M.stat(s,!0)},doChmod(s,o,u,d){M.doSetAttr(s,o,{mode:u&4095|o.mode&-4096,ctime:Date.now(),dontFollow:d})},chmod(s,o,u){var d;if(typeof s=="string"){var v=M.lookupPath(s,{follow:!u});d=v.node}else d=s;M.doChmod(null,d,o,u)},lchmod(s,o){M.chmod(s,o,!0)},fchmod(s,o){var u=M.getStreamChecked(s);M.doChmod(u,u.node,o,!1)},doChown(s,o,u){M.doSetAttr(s,o,{timestamp:Date.now(),dontFollow:u})},chown(s,o,u,d){var v;if(typeof s=="string"){var S=M.lookupPath(s,{follow:!d});v=S.node}else v=s;M.doChown(null,v,d)},lchown(s,o,u){M.chown(s,o,u,!0)},fchown(s,o,u){var d=M.getStreamChecked(s);M.doChown(d,d.node,!1)},doTruncate(s,o,u){if(M.isDir(o.mode))throw new M.ErrnoError(31);if(!M.isFile(o.mode))throw new M.ErrnoError(28);var d=M.nodePermissions(o,"w");if(d)throw new M.ErrnoError(d);M.doSetAttr(s,o,{size:u,timestamp:Date.now()})},truncate(s,o){if(o<0)throw new M.ErrnoError(28);var u;if(typeof s=="string"){var d=M.lookupPath(s,{follow:!0});u=d.node}else u=s;M.doTruncate(null,u,o)},ftruncate(s,o){var u=M.getStreamChecked(s);if(o<0||(u.flags&2097155)===0)throw new M.ErrnoError(28);M.doTruncate(u,u.node,o)},utime(s,o,u){var d=M.lookupPath(s,{follow:!0}),v=d.node,S=M.checkOpExists(v.node_ops.setattr,63);S(v,{atime:o,mtime:u})},open(s,o,u=438){if(s==="")throw new M.ErrnoError(44);o=typeof o=="string"?Wt(o):o,o&64?u=u&4095|32768:u=0;var d,v;if(typeof s=="object")d=s;else{v=s.endsWith("/");var S=M.lookupPath(s,{follow:!(o&131072),noent_okay:!0});d=S.node,s=S.path}var T=!1;if(o&64)if(d){if(o&128)throw new M.ErrnoError(20)}else{if(v)throw new M.ErrnoError(31);d=M.mknod(s,u|511,0),T=!0}if(!d)throw new M.ErrnoError(44);if(M.isChrdev(d.mode)&&(o&=-513),o&65536&&!M.isDir(d.mode))throw new M.ErrnoError(54);if(!T){var C=M.mayOpen(d,o);if(C)throw new M.ErrnoError(C)}o&512&&!T&&M.truncate(d,0),o&=-131713;var O=M.createStream({node:d,path:M.getPath(d),flags:o,seekable:!0,position:0,stream_ops:d.stream_ops,ungotten:[],error:!1});return O.stream_ops.open&&O.stream_ops.open(O),T&&M.chmod(d,u&511),t.logReadFiles&&!(o&1)&&(s in M.readFiles||(M.readFiles[s]=1)),O},close(s){if(M.isClosed(s))throw new M.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{M.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,u){if(M.isClosed(s))throw new M.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new M.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new M.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,u),s.ungotten=[],s.position},read(s,o,u,d,v){if(R(u>=0),d<0||v<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.read)throw new M.ErrnoError(28);var S=typeof v<"u";if(!S)v=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var T=s.stream_ops.read(s,o,u,d,v);return S||(s.position+=T),T},write(s,o,u,d,v,S){if(R(u>=0),d<0||v<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.write)throw new M.ErrnoError(28);s.seekable&&s.flags&1024&&M.llseek(s,0,2);var T=typeof v<"u";if(!T)v=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var C=s.stream_ops.write(s,o,u,d,v,S);return T||(s.position+=C),C},mmap(s,o,u,d,v){if((d&2)!==0&&(v&2)===0&&(s.flags&2097155)!==2)throw new M.ErrnoError(2);if((s.flags&2097155)===1)throw new M.ErrnoError(2);if(!s.stream_ops.mmap)throw new M.ErrnoError(43);if(!o)throw new M.ErrnoError(28);return s.stream_ops.mmap(s,o,u,d,v)},msync(s,o,u,d,v){return R(u>=0),s.stream_ops.msync?s.stream_ops.msync(s,o,u,d,v):0},ioctl(s,o,u){if(!s.stream_ops.ioctl)throw new M.ErrnoError(59);return s.stream_ops.ioctl(s,o,u)},readFile(s,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var u=M.open(s,o.flags),d=M.stat(s),v=d.size,S=new Uint8Array(v);return M.read(u,S,0,v,0),o.encoding==="utf8"&&(S=bt(S)),M.close(u),S},writeFile(s,o,u={}){u.flags=u.flags||577;var d=M.open(s,u.flags,u.mode);if(typeof o=="string"&&(o=new Uint8Array(re(o))),ArrayBuffer.isView(o))M.write(d,o,0,o.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");M.close(d)},cwd:()=>M.currentPath,chdir(s){var o=M.lookupPath(s,{follow:!0});if(o.node===null)throw new M.ErrnoError(44);if(!M.isDir(o.node.mode))throw new M.ErrnoError(54);var u=M.nodePermissions(o.node,"x");if(u)throw new M.ErrnoError(u);M.currentPath=o.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(d,v,S,T,C)=>T,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),Ce.register(M.makedev(5,0),Ce.default_tty_ops),Ce.register(M.makedev(6,0),Ce.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var s=new Uint8Array(1024),o=0,u=()=>(o===0&&(Hs(s),o=s.byteLength),s[--o]);M.createDevice("/dev","random",u),M.createDevice("/dev","urandom",u),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var s=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var o=M.createNode(s,"fd",16895,73);return o.stream_ops={llseek:pe.stream_ops.llseek},o.node_ops={lookup(u,d){var v=+d,S=M.getStreamChecked(v),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>S.path},id:v+1};return T.parent=T,T},readdir(){return Array.from(M.streams.entries()).filter(([u,d])=>d).map(([u,d])=>u.toString())}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,u){s?M.createDevice("/dev","stdin",s):M.symlink("/dev/tty","/dev/stdin"),o?M.createDevice("/dev","stdout",null,o):M.symlink("/dev/tty","/dev/stdout"),u?M.createDevice("/dev","stderr",null,u):M.symlink("/dev/tty1","/dev/stderr");var d=M.open("/dev/stdin",0),v=M.open("/dev/stdout",1),S=M.open("/dev/stderr",1);R(d.fd===0,`invalid handle for stdin (${d.fd})`),R(v.fd===1,`invalid handle for stdout (${v.fd})`),R(S.fd===2,`invalid handle for stderr (${S.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(pe,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:pe}},init(s,o,u){R(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,s??=t.stdin,o??=t.stdout,u??=t.stderr,M.createStandardStreams(s,o,u)},quit(){M.initialized=!1,oo(0);for(var s of M.streams)s&&M.close(s)},findObject(s,o){var u=M.analyzePath(s,o);return u.exists?u.object:null},analyzePath(s,o){try{var u=M.lookupPath(s,{follow:!o});s=u.path}catch{}var d={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=M.lookupPath(s,{parent:!0});d.parentExists=!0,d.parentPath=u.path,d.parentObject=u.node,d.name=Rt.basename(s),u=M.lookupPath(s,{follow:!o}),d.exists=!0,d.path=u.path,d.object=u.node,d.name=u.node.name,d.isRoot=u.path==="/"}catch(v){d.error=v.errno}return d},createPath(s,o,u,d){s=typeof s=="string"?s:M.getPath(s);for(var v=o.split("/").reverse();v.length;){var S=v.pop();if(S){var T=Rt.join2(s,S);try{M.mkdir(T)}catch(C){if(C.errno!=20)throw C}s=T}}return T},createFile(s,o,u,d,v){var S=Rt.join2(typeof s=="string"?s:M.getPath(s),o),T=kt(d,v);return M.create(S,T)},createDataFile(s,o,u,d,v,S){var T=o;s&&(s=typeof s=="string"?s:M.getPath(s),T=o?Rt.join2(s,o):s);var C=kt(d,v),O=M.create(T,C);if(u){if(typeof u=="string"){for(var Y=new Array(u.length),ie=0,he=u.length;ie<he;++ie)Y[ie]=u.charCodeAt(ie);u=Y}M.chmod(O,C|146);var fe=M.open(O,577);M.write(fe,u,0,u.length,0,S),M.close(fe),M.chmod(O,C)}},createDevice(s,o,u,d){var v=Rt.join2(typeof s=="string"?s:M.getPath(s),o),S=kt(!!u,!!d);M.createDevice.major??=64;var T=M.makedev(M.createDevice.major++,0);return M.registerDevice(T,{open(C){C.seekable=!1},close(C){d?.buffer?.length&&d(10)},read(C,O,Y,ie,he){for(var fe=0,de=0;de<ie;de++){var _e;try{_e=u()}catch{throw new M.ErrnoError(29)}if(_e===void 0&&fe===0)throw new M.ErrnoError(6);if(_e==null)break;fe++,O[Y+de]=_e}return fe&&(C.node.atime=Date.now()),fe},write(C,O,Y,ie,he){for(var fe=0;fe<ie;fe++)try{d(O[Y+fe])}catch{throw new M.ErrnoError(29)}return ie&&(C.node.mtime=C.node.ctime=Date.now()),fe}}),M.mkdev(v,S,T)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=b(s.url),s.usedBytes=s.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(s,o,u,d,v){class S{lengthKnown=!1;chunks=[];get(de){if(!(de>this.length-1||de<0)){var _e=de%this.chunkSize,Je=de/this.chunkSize|0;return this.getter(Je)[_e]}}setDataGetter(de){this.getter=de}cacheLength(){var de=new XMLHttpRequest;if(de.open("HEAD",u,!1),de.send(null),!(de.status>=200&&de.status<300||de.status===304))throw new Error("Couldn't load "+u+". Status: "+de.status);var _e=Number(de.getResponseHeader("Content-length")),Je,vt=(Je=de.getResponseHeader("Accept-Ranges"))&&Je==="bytes",ut=(Je=de.getResponseHeader("Content-Encoding"))&&Je==="gzip",Bt=1024*1024;vt||(Bt=_e);var Mt=(nn,Sn)=>{if(nn>Sn)throw new Error("invalid range ("+nn+", "+Sn+") or no bytes requested!");if(Sn>_e-1)throw new Error("only "+_e+" bytes available! programmer error!");var It=new XMLHttpRequest;if(It.open("GET",u,!1),_e!==Bt&&It.setRequestHeader("Range","bytes="+nn+"-"+Sn),It.responseType="arraybuffer",It.overrideMimeType&&It.overrideMimeType("text/plain; charset=x-user-defined"),It.send(null),!(It.status>=200&&It.status<300||It.status===304))throw new Error("Couldn't load "+u+". Status: "+It.status);return It.response!==void 0?new Uint8Array(It.response||[]):re(It.responseText||"")},gn=this;gn.setDataGetter(nn=>{var Sn=nn*Bt,It=(nn+1)*Bt-1;if(It=Math.min(It,_e-1),typeof gn.chunks[nn]>"u"&&(gn.chunks[nn]=Mt(Sn,It)),typeof gn.chunks[nn]>"u")throw new Error("doXHR failed!");return gn.chunks[nn]}),(ut||!_e)&&(Bt=_e=1,_e=this.getter(0).length,Bt=_e,I("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=_e,this._chunkSize=Bt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new S,C={isDevice:!1,contents:T}}else var C={isDevice:!1,url:u};var O=M.createFile(s,o,C,d,v);C.contents?O.contents=C.contents:C.url&&(O.contents=null,O.url=C.url),Object.defineProperties(O,{usedBytes:{get:function(){return this.contents.length}}});var Y={},ie=Object.keys(O.stream_ops);ie.forEach(fe=>{var de=O.stream_ops[fe];Y[fe]=(..._e)=>(M.forceLoadFile(O),de(..._e))});function he(fe,de,_e,Je,vt){var ut=fe.node.contents;if(vt>=ut.length)return 0;var Bt=Math.min(ut.length-vt,Je);if(R(Bt>=0),ut.slice)for(var Mt=0;Mt<Bt;Mt++)de[_e+Mt]=ut[vt+Mt];else for(var Mt=0;Mt<Bt;Mt++)de[_e+Mt]=ut.get(vt+Mt);return Bt}return Y.read=(fe,de,_e,Je,vt)=>(M.forceLoadFile(O),he(fe,de,_e,Je,vt)),Y.mmap=(fe,de,_e,Je,vt)=>{M.forceLoadFile(O);var ut=Ne();if(!ut)throw new M.ErrnoError(48);return he(fe,je,ut,de,_e),{ptr:ut,allocated:!0}},O.stream_ops=Y,O},absolutePath(){H("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){H("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){H("FS.createLink has been removed; use FS.symlink instead")},joinPath(){H("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){H("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){H("FS.standardizePath has been removed; use PATH.normalize instead")}},pt={DEFAULT_POLLMASK:5,calculateAt(s,o,u){if(Rt.isAbs(o))return o;var d;if(s===-100)d=M.cwd();else{var v=pt.getStreamFromFD(s);d=v.path}if(o.length==0){if(!u)throw new M.ErrnoError(44);return d}return d+"/"+o},writeStat(s,o){se[s>>2]=o.dev,se[s+4>>2]=o.mode,Me[s+8>>2]=o.nlink,se[s+12>>2]=o.uid,se[s+16>>2]=o.gid,se[s+20>>2]=o.rdev,_t[s+24>>3]=BigInt(o.size),se[s+32>>2]=4096,se[s+36>>2]=o.blocks;var u=o.atime.getTime(),d=o.mtime.getTime(),v=o.ctime.getTime();return _t[s+40>>3]=BigInt(Math.floor(u/1e3)),Me[s+48>>2]=u%1e3*1e3*1e3,_t[s+56>>3]=BigInt(Math.floor(d/1e3)),Me[s+64>>2]=d%1e3*1e3*1e3,_t[s+72>>3]=BigInt(Math.floor(v/1e3)),Me[s+80>>2]=v%1e3*1e3*1e3,_t[s+88>>3]=BigInt(o.ino),0},writeStatFs(s,o){se[s+4>>2]=o.bsize,se[s+40>>2]=o.bsize,se[s+8>>2]=o.blocks,se[s+12>>2]=o.bfree,se[s+16>>2]=o.bavail,se[s+20>>2]=o.files,se[s+24>>2]=o.ffree,se[s+28>>2]=o.fsid,se[s+44>>2]=o.flags,se[s+36>>2]=o.namelen},doMsync(s,o,u,d,v){if(!M.isFile(o.node.mode))throw new M.ErrnoError(43);if(d&2)return 0;var S=Ve.slice(s,s+u);M.msync(o,S,v,u,d)},getStreamFromFD(s){var o=M.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=ft(s);return o}};function yt(s,o,u){try{var d=pt.getStreamFromFD(s);if(R(!u),d.fd===o)return-28;if(o<0||o>=M.MAX_OPEN_FDS)return-8;var v=M.getStream(o);return v&&M.close(v),M.dupStream(d,o).fd}catch(S){if(typeof M>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}var mn=()=>{R(pt.varargs!=null);var s=se[+pt.varargs>>2];return pt.varargs+=4,s},cn=mn;function mi(s,o,u){pt.varargs=u;try{var d=pt.getStreamFromFD(s);switch(o){case 0:{var v=mn();if(v<0)return-28;for(;M.streams[v];)v++;var S;return S=M.dupStream(d,v),S.fd}case 1:case 2:return 0;case 3:return d.flags;case 4:{var v=mn();return d.flags|=v,0}case 12:{var v=cn(),T=0;return oe[v+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Fi(s,o){try{return pt.writeStat(o,M.fstat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Dt(s,o,u){pt.varargs=u;try{var d=pt.getStreamFromFD(s);switch(o){case 21509:return d.tty?0:-59;case 21505:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcgets){var v=d.tty.ops.ioctl_tcgets(d),S=cn();se[S>>2]=v.c_iflag||0,se[S+4>>2]=v.c_oflag||0,se[S+8>>2]=v.c_cflag||0,se[S+12>>2]=v.c_lflag||0;for(var T=0;T<32;T++)je[S+T+17]=v.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return d.tty?0:-59;case 21506:case 21507:case 21508:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcsets){for(var S=cn(),C=se[S>>2],O=se[S+4>>2],Y=se[S+8>>2],ie=se[S+12>>2],he=[],T=0;T<32;T++)he.push(je[S+T+17]);return d.tty.ops.ioctl_tcsets(d.tty,o,{c_iflag:C,c_oflag:O,c_cflag:Y,c_lflag:ie,c_cc:he})}return 0}case 21519:{if(!d.tty)return-59;var S=cn();return se[S>>2]=0,0}case 21520:return d.tty?-28:-59;case 21531:{var S=cn();return M.ioctl(d,o,S)}case 21523:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tiocgwinsz){var fe=d.tty.ops.ioctl_tiocgwinsz(d.tty),S=cn();oe[S>>1]=fe[0],oe[S+2>>1]=fe[1]}return 0}case 21524:return d.tty?0:-59;case 21515:return d.tty?0:-59;default:return-28}}catch(de){if(typeof M>"u"||de.name!=="ErrnoError")throw de;return-de.errno}}function en(s,o){try{return s=pt.getStr(s),pt.writeStat(o,M.lstat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Kn(s,o,u,d){try{o=pt.getStr(o);var v=d&256,S=d&4096;return d=d&-6401,R(!d,`unknown flags in __syscall_newfstatat: ${d}`),o=pt.calculateAt(s,o,S),pt.writeStat(u,v?M.lstat(o):M.stat(o))}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function Yt(s,o,u,d){pt.varargs=d;try{o=pt.getStr(o),o=pt.calculateAt(s,o);var v=d?mn():0;return M.open(o,u,v).fd}catch(S){if(typeof M>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Jn(s,o){try{return s=pt.getStr(s),pt.writeStat(o,M.stat(s))}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}var Ii=()=>H("native code called abort()"),$t=s=>{for(var o="";;){var u=Ve[s++];if(!u)return o;o+=String.fromCharCode(u)}},Sr={},Ji={},Ws={},es=class extends Error{constructor(o){super(o),this.name="BindingError"}},xt=s=>{throw new es(s)};function Kd(s,o,u={}){var d=o.name;if(s||xt(`type "${d}" must have a positive integer typeid pointer`),Ji.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;xt(`Cannot register type '${d}' twice`)}if(Ji[s]=o,delete Ws[s],Sr.hasOwnProperty(s)){var v=Sr[s];delete Sr[s],v.forEach(S=>S())}}function Nn(s,o,u={}){if(o.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return Kd(s,o,u)}var wc=(s,o,u)=>{switch(o){case 1:return u?d=>je[d]:d=>Ve[d];case 2:return u?d=>oe[d>>1]:d=>xe[d>>1];case 4:return u?d=>se[d>>2]:d=>Me[d>>2];case 8:return u?d=>_t[d>>3]:d=>rt[d>>3];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},Zi=s=>{if(s===null)return"null";var o=typeof s;return o==="object"||o==="array"||o==="function"?s.toString():""+s},Tc=(s,o,u,d)=>{if(o<u||o>d)throw new TypeError(`Passing a number "${Zi(o)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${u}, ${d}]!`)},Jd=(s,o,u,d,v)=>{o=$t(o);const S=d===0n;let T=C=>C;if(S){const C=u*8;T=O=>BigInt.asUintN(C,O),v=T(v)}Nn(s,{name:o,fromWireType:T,toWireType:(C,O)=>{if(typeof O=="number")O=BigInt(O);else if(typeof O!="bigint")throw new TypeError(`Cannot convert "${Zi(O)}" to ${this.name}`);return Tc(o,O,d,v),O},argPackAdvance:Zn,readValueFromPointer:wc(o,u,!S),destructorFunction:null})},Zn=8,Zd=(s,o,u,d)=>{o=$t(o),Nn(s,{name:o,fromWireType:function(v){return!!v},toWireType:function(v,S){return S?u:d},argPackAdvance:Zn,readValueFromPointer:function(v){return this.fromWireType(Ve[v])},destructorFunction:null})},Qd=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Ja=s=>{function o(u){return u.$$.ptrType.registeredClass.name}xt(o(s)+" instance already deleted")},Za=!1,Ac=s=>{},ef=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},Cc=s=>{s.count.value-=1;var o=s.count.value===0;o&&ef(s)},Rc=(s,o,u)=>{if(o===u)return s;if(u.baseClass===void 0)return null;var d=Rc(s,o,u.baseClass);return d===null?null:u.downcast(d)},Pc={},tf={},nf=(s,o)=>{for(o===void 0&&xt("ptr should not be undefined");s.baseClass;)o=s.upcast(o),s=s.baseClass;return o},rf=(s,o)=>(o=nf(s,o),tf[o]),sf=class extends Error{constructor(o){super(o),this.name="InternalError"}},$s=s=>{throw new sf(s)},Xs=(s,o)=>{(!o.ptrType||!o.ptr)&&$s("makeClassHandle requires ptr and ptrType");var u=!!o.smartPtrType,d=!!o.smartPtr;return u!==d&&$s("Both smartPtrType and smartPtr must be specified"),o.count={value:1},ts(Object.create(s,{$$:{value:o,writable:!0}}))};function Dc(s){var o=this.getPointee(s);if(!o)return this.destructor(s),null;var u=rf(this.registeredClass,o);if(u!==void 0){if(u.$$.count.value===0)return u.$$.ptr=o,u.$$.smartPtr=s,u.clone();var d=u.clone();return this.destructor(s),d}function v(){return this.isSmartPointer?Xs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:o,smartPtrType:this,smartPtr:s}):Xs(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var S=this.registeredClass.getActualType(o),T=Pc[S];if(!T)return v.call(this);var C;this.isConst?C=T.constPointerType:C=T.pointerType;var O=Rc(o,this.registeredClass,C.registeredClass);return O===null?v.call(this):this.isSmartPointer?Xs(C.registeredClass.instancePrototype,{ptrType:C,ptr:O,smartPtrType:this,smartPtr:s}):Xs(C.registeredClass.instancePrototype,{ptrType:C,ptr:O})}var ts=s=>typeof FinalizationRegistry>"u"?(ts=o=>o,s):(Za=new FinalizationRegistry(o=>{console.warn(o.leakWarning),Cc(o.$$)}),ts=o=>{var u=o.$$,d=!!u.smartPtr;if(d){var v={$$:u},S=u.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${S.name} <${Fe(u.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,Dc),v.leakWarning=T.stack.replace(/^Error: /,""),Za.register(o,v,o)}return o},Ac=o=>Za.unregister(o),ts(s)),af=()=>{let s=js.prototype;Object.assign(s,{isAliasOf(u){if(!(this instanceof js)||!(u instanceof js))return!1;var d=this.$$.ptrType.registeredClass,v=this.$$.ptr;u.$$=u.$$;for(var S=u.$$.ptrType.registeredClass,T=u.$$.ptr;d.baseClass;)v=d.upcast(v),d=d.baseClass;for(;S.baseClass;)T=S.upcast(T),S=S.baseClass;return d===S&&v===T},clone(){if(this.$$.ptr||Ja(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=ts(Object.create(Object.getPrototypeOf(this),{$$:{value:Qd(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||Ja(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&xt("Object already scheduled for deletion"),Ac(this),Cc(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ja(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&xt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const o=Symbol.dispose;o&&(s[o]=s.delete)};function js(){}var qs=(s,o)=>Object.defineProperty(o,"name",{value:s}),Qa=(s,o,u)=>{if(s[o].overloadTable===void 0){var d=s[o];s[o]=function(...v){return s[o].overloadTable.hasOwnProperty(v.length)||xt(`Function '${u}' called with an invalid number of arguments (${v.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[v.length].apply(this,v)},s[o].overloadTable=[],s[o].overloadTable[d.argCount]=d}},eo=(s,o,u)=>{t.hasOwnProperty(s)?((u===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[u]!==void 0)&&xt(`Cannot register public name '${s}' twice`),Qa(t,s,s),t[s].overloadTable.hasOwnProperty(u)&&xt(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),t[s].overloadTable[u]=o):(t[s]=o,t[s].argCount=u)},of=48,lf=57,cf=s=>{R(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var o=s.charCodeAt(0);return o>=of&&o<=lf?`_${s}`:s};function uf(s,o,u,d,v,S,T,C){this.name=s,this.constructor=o,this.instancePrototype=u,this.rawDestructor=d,this.baseClass=v,this.getActualType=S,this.upcast=T,this.downcast=C,this.pureVirtualFunctions=[]}var Ys=(s,o,u)=>{for(;o!==u;)o.upcast||xt(`Expected null or instance of ${u.name}, got an instance of ${o.name}`),s=o.upcast(s),o=o.baseClass;return s};function hf(s,o){if(o===null)return this.isReference&&xt(`null is not a valid ${this.name}`),0;o.$$||xt(`Cannot pass "${Zi(o)}" as a ${this.name}`),o.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`);var u=o.$$.ptrType.registeredClass,d=Ys(o.$$.ptr,u,this.registeredClass);return d}function df(s,o){var u;if(o===null)return this.isReference&&xt(`null is not a valid ${this.name}`),this.isSmartPointer?(u=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,u),u):0;(!o||!o.$$)&&xt(`Cannot pass "${Zi(o)}" as a ${this.name}`),o.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&o.$$.ptrType.isConst&&xt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);var d=o.$$.ptrType.registeredClass;if(u=Ys(o.$$.ptr,d,this.registeredClass),this.isSmartPointer)switch(o.$$.smartPtr===void 0&&xt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:o.$$.smartPtrType===this?u=o.$$.smartPtr:xt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:u=o.$$.smartPtr;break;case 2:if(o.$$.smartPtrType===this)u=o.$$.smartPtr;else{var v=o.clone();u=this.rawShare(u,tn.toHandle(()=>v.delete())),s!==null&&s.push(this.rawDestructor,u)}break;default:xt("Unsupporting sharing policy")}return u}function ff(s,o){if(o===null)return this.isReference&&xt(`null is not a valid ${this.name}`),0;o.$$||xt(`Cannot pass "${Zi(o)}" as a ${this.name}`),o.$$.ptr||xt(`Cannot pass deleted object as a pointer of type ${this.name}`),o.$$.ptrType.isConst&&xt(`Cannot convert argument of type ${o.$$.ptrType.name} to parameter type ${this.name}`);var u=o.$$.ptrType.registeredClass,d=Ys(o.$$.ptr,u,this.registeredClass);return d}function Ks(s){return this.fromWireType(Me[s>>2])}var pf=()=>{Object.assign(Js.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},argPackAdvance:Zn,readValueFromPointer:Ks,fromWireType:Dc})};function Js(s,o,u,d,v,S,T,C,O,Y,ie){this.name=s,this.registeredClass=o,this.isReference=u,this.isConst=d,this.isSmartPointer=v,this.pointeeType=S,this.sharingPolicy=T,this.rawGetPointee=C,this.rawConstructor=O,this.rawShare=Y,this.rawDestructor=ie,!v&&o.baseClass===void 0?d?(this.toWireType=hf,this.destructorFunction=null):(this.toWireType=ff,this.destructorFunction=null):this.toWireType=df}var Lc=(s,o,u)=>{t.hasOwnProperty(s)||$s("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&u!==void 0?t[s].overloadTable[u]=o:(t[s]=o,t[s].argCount=u)},Fc=[],Zs,Se=s=>{var o=Fc[s];return o||(Fc[s]=o=Zs.get(s)),R(Zs.get(s)==o,"JavaScript-side Wasm function table mirror is out of date!"),o},Qn=(s,o,u=!1)=>{R(!u,"Async bindings are only supported with JSPI."),s=$t(s);function d(){var S=Se(o);return S}var v=d();return typeof v!="function"&&xt(`unknown function pointer with signature ${s}: ${o}`),v};class mf extends Error{}var Ic=s=>{var o=Qc(s),u=$t(o);return ti(o),u},Qi=(s,o)=>{var u=[],d={};function v(S){if(!d[S]&&!Ji[S]){if(Ws[S]){Ws[S].forEach(v);return}u.push(S),d[S]=!0}}throw o.forEach(v),new mf(`${s}: `+u.map(Ic).join([", "]))},Vn=(s,o,u)=>{s.forEach(C=>Ws[C]=o);function d(C){var O=u(C);O.length!==s.length&&$s("Mismatched type converter count");for(var Y=0;Y<s.length;++Y)Nn(s[Y],O[Y])}var v=new Array(o.length),S=[],T=0;o.forEach((C,O)=>{Ji.hasOwnProperty(C)?v[O]=Ji[C]:(S.push(C),Sr.hasOwnProperty(C)||(Sr[C]=[]),Sr[C].push(()=>{v[O]=Ji[C],++T,T===S.length&&d(v)}))}),S.length===0&&d(v)},gf=(s,o,u,d,v,S,T,C,O,Y,ie,he,fe)=>{ie=$t(ie),S=Qn(v,S),C&&=Qn(T,C),Y&&=Qn(O,Y),fe=Qn(he,fe);var de=cf(ie);eo(de,function(){Qi(`Cannot construct ${ie} due to unbound types`,[d])}),Vn([s,o,u],d?[d]:[],_e=>{_e=_e[0];var Je,vt;d?(Je=_e.registeredClass,vt=Je.instancePrototype):vt=js.prototype;var ut=qs(ie,function(...It){if(Object.getPrototypeOf(this)!==Bt)throw new es(`Use 'new' to construct ${ie}`);if(Mt.constructor_body===void 0)throw new es(`${ie} has no accessible constructor`);var nr=Mt.constructor_body[It.length];if(nr===void 0)throw new es(`Tried to invoke ctor of ${ie} with invalid number of parameters (${It.length}) - expected (${Object.keys(Mt.constructor_body).toString()}) parameters instead!`);return nr.apply(this,It)}),Bt=Object.create(vt,{constructor:{value:ut}});ut.prototype=Bt;var Mt=new uf(ie,ut,Bt,fe,Je,S,C,Y);Mt.baseClass&&(Mt.baseClass.__derivedClasses??=[],Mt.baseClass.__derivedClasses.push(Mt));var gn=new Js(ie,Mt,!0,!1,!1),nn=new Js(ie+"*",Mt,!1,!1,!1),Sn=new Js(ie+" const*",Mt,!1,!0,!1);return Pc[s]={pointerType:nn,constPointerType:Sn},Lc(de,ut),[gn,nn,Sn]})},to=s=>{for(;s.length;){var o=s.pop(),u=s.pop();u(o)}};function Uc(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function vf(s,o,u,d,v){if(s<o||s>u){var S=o==u?o:`${o} to ${u}`;v(`function ${d} called with ${s} arguments, expected ${S}`)}}function _f(s,o,u,d){var v=Uc(s),S=s.length-2,T=[],C=["fn"];o&&C.push("thisWired");for(var O=0;O<S;++O)T.push(`arg${O}`),C.push(`arg${O}Wired`);T=T.join(","),C=C.join(",");var Y=`return function (${T}) {
`;Y+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,v&&(Y+=`var destructors = [];
`);var ie=v?"destructors":"null",he=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];o&&(Y+=`var thisWired = classParam['toWireType'](${ie}, this);
`);for(var O=0;O<S;++O)Y+=`var arg${O}Wired = argType${O}['toWireType'](${ie}, arg${O});
`,he.push(`argType${O}`);if(Y+=(u||d?"var rv = ":"")+`invoker(${C});
`,v)Y+=`runDestructors(destructors);
`;else for(var O=o?1:2;O<s.length;++O){var fe=O===1?"thisWired":"arg"+(O-2)+"Wired";s[O].destructorFunction!==null&&(Y+=`${fe}_dtor(${fe});
`,he.push(`${fe}_dtor`))}return u&&(Y+=`var ret = retType['fromWireType'](rv);
return ret;
`),Y+=`}
`,he.push("checkArgCount","minArgs","maxArgs"),Y=`if (arguments.length !== ${he.length}){ throw new Error(humanName + "Expected ${he.length} closure arguments " + arguments.length + " given."); }
${Y}`,[he,Y]}function xf(s){for(var o=s.length-2,u=s.length-1;u>=2&&s[u].optional;--u)o--;return o}function Qs(s,o,u,d,v,S){var T=o.length;T<2&&xt("argTypes array size mismatch! Must at least get return value and 'this' types!"),R(!S,"Async bindings are only supported with JSPI.");for(var C=o[1]!==null&&u!==null,O=Uc(o),Y=o[0].name!=="void",ie=T-2,he=xf(o),fe=[s,xt,d,v,to,o[0],o[1]],de=0;de<T-2;++de)fe.push(o[de+2]);if(!O)for(var de=C?1:2;de<o.length;++de)o[de].destructorFunction!==null&&fe.push(o[de].destructorFunction);fe.push(vf,he,ie);let[_e,Je]=_f(o,C,Y,S);var vt=new Function(..._e,Je)(...fe);return qs(s,vt)}var ea=(s,o)=>{for(var u=[],d=0;d<s;d++)u.push(Me[o+d*4>>2]);return u},no=s=>{s=s.trim();const o=s.indexOf("(");return o===-1?s:(R(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,o))},yf=(s,o,u,d,v,S,T,C,O)=>{var Y=ea(u,d);o=$t(o),o=no(o),S=Qn(v,S,C),Vn([],[s],ie=>{ie=ie[0];var he=`${ie.name}.${o}`;function fe(){Qi(`Cannot call ${he} due to unbound types`,Y)}o.startsWith("@@")&&(o=Symbol[o.substring(2)]);var de=ie.registeredClass.constructor;return de[o]===void 0?(fe.argCount=u-1,de[o]=fe):(Qa(de,o,he),de[o].overloadTable[u-1]=fe),Vn([],Y,_e=>{var Je=[_e[0],null].concat(_e.slice(1)),vt=Qs(he,Je,null,S,T,C);if(de[o].overloadTable===void 0?(vt.argCount=u-1,de[o]=vt):de[o].overloadTable[u-1]=vt,ie.registeredClass.__derivedClasses)for(const ut of ie.registeredClass.__derivedClasses)ut.constructor.hasOwnProperty(o)||(ut.constructor[o]=vt);return[]}),[]})},Sf=(s,o,u,d,v,S)=>{R(o>0);var T=ea(o,u);v=Qn(d,v),Vn([],[s],C=>{C=C[0];var O=`constructor ${C.name}`;if(C.registeredClass.constructor_body===void 0&&(C.registeredClass.constructor_body=[]),C.registeredClass.constructor_body[o-1]!==void 0)throw new es(`Cannot register multiple constructors with identical number of parameters (${o-1}) for class '${C.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return C.registeredClass.constructor_body[o-1]=()=>{Qi(`Cannot construct ${C.name} due to unbound types`,T)},Vn([],T,Y=>(Y.splice(1,0,null),C.registeredClass.constructor_body[o-1]=Qs(O,Y,null,v,S),[])),[]})},bf=(s,o,u,d,v,S,T,C,O,Y)=>{var ie=ea(u,d);o=$t(o),o=no(o),S=Qn(v,S,O),Vn([],[s],he=>{he=he[0];var fe=`${he.name}.${o}`;o.startsWith("@@")&&(o=Symbol[o.substring(2)]),C&&he.registeredClass.pureVirtualFunctions.push(o);function de(){Qi(`Cannot call ${fe} due to unbound types`,ie)}var _e=he.registeredClass.instancePrototype,Je=_e[o];return Je===void 0||Je.overloadTable===void 0&&Je.className!==he.name&&Je.argCount===u-2?(de.argCount=u-2,de.className=he.name,_e[o]=de):(Qa(_e,o,fe),_e[o].overloadTable[u-2]=de),Vn([],ie,vt=>{var ut=Qs(fe,vt,he,S,T,O);return _e[o].overloadTable===void 0?(ut.argCount=u-2,_e[o]=ut):_e[o].overloadTable[u-2]=ut,[]}),[]})},Nc=(s,o,u)=>(s instanceof Object||xt(`${u} with invalid "this": ${s}`),s instanceof o.registeredClass.constructor||xt(`${u} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||xt(`cannot call emscripten binding method ${u} on deleted object`),Ys(s.$$.ptr,s.$$.ptrType.registeredClass,o.registeredClass)),Mf=(s,o,u,d,v,S,T,C,O,Y)=>{o=$t(o),v=Qn(d,v),Vn([],[s],ie=>{ie=ie[0];var he=`${ie.name}.${o}`,fe={get(){Qi(`Cannot access ${he} due to unbound types`,[u,T])},enumerable:!0,configurable:!0};return O?fe.set=()=>Qi(`Cannot access ${he} due to unbound types`,[u,T]):fe.set=de=>xt(he+" is a read-only property"),Object.defineProperty(ie.registeredClass.instancePrototype,o,fe),Vn([],O?[u,T]:[u],de=>{var _e=de[0],Je={get(){var ut=Nc(this,ie,he+" getter");return _e.fromWireType(v(S,ut))},enumerable:!0};if(O){O=Qn(C,O);var vt=de[1];Je.set=function(ut){var Bt=Nc(this,ie,he+" setter"),Mt=[];O(Y,Bt,vt.toWireType(Mt,ut)),to(Mt)}}return Object.defineProperty(ie.registeredClass.instancePrototype,o,Je),[]}),[]})},Ef=(s,o,u)=>{s=$t(s),Vn([],[o],d=>(d=d[0],t[s]=d.fromWireType(u),[]))},Oc=[],ei=[0,1,,1,null,1,!0,1,!1,1],io=s=>{s>9&&--ei[s+1]===0&&(R(ei[s]!==void 0,"Decref for unallocated handle."),ei[s]=void 0,Oc.push(s))},tn={toValue:s=>(s||xt(`Cannot use deleted val. handle = ${s}`),R(s===2||ei[s]!==void 0&&s%2===0,`invalid handle: ${s}`),ei[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const o=Oc.pop()||ei.length;return ei[o]=s,ei[o+1]=1,o}}}},kc={name:"emscripten::val",fromWireType:s=>{var o=tn.toValue(s);return io(s),o},toWireType:(s,o)=>tn.toHandle(o),argPackAdvance:Zn,readValueFromPointer:Ks,destructorFunction:null},Bc=s=>Nn(s,kc),wf=(s,o,u)=>{switch(o){case 1:return u?function(d){return this.fromWireType(je[d])}:function(d){return this.fromWireType(Ve[d])};case 2:return u?function(d){return this.fromWireType(oe[d>>1])}:function(d){return this.fromWireType(xe[d>>1])};case 4:return u?function(d){return this.fromWireType(se[d>>2])}:function(d){return this.fromWireType(Me[d>>2])};default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},Tf=(s,o,u,d)=>{o=$t(o);function v(){}v.values={},Nn(s,{name:o,constructor:v,fromWireType:function(S){return this.constructor.values[S]},toWireType:(S,T)=>T.value,argPackAdvance:Zn,readValueFromPointer:wf(o,u,d),destructorFunction:null}),eo(o,v)},ta=(s,o)=>{var u=Ji[s];return u===void 0&&xt(`${o} has unknown type ${Ic(s)}`),u},Af=(s,o,u)=>{var d=ta(s,"enum");o=$t(o);var v=d.constructor,S=Object.create(d.constructor.prototype,{value:{value:u},constructor:{value:qs(`${d.name}_${o}`,function(){})}});v.values[u]=S,v[o]=S},Cf=(s,o)=>{switch(o){case 4:return function(u){return this.fromWireType(Xe[u>>2])};case 8:return function(u){return this.fromWireType(Ye[u>>3])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},Rf=(s,o,u)=>{o=$t(o),Nn(s,{name:o,fromWireType:d=>d,toWireType:(d,v)=>{if(typeof v!="number"&&typeof v!="boolean")throw new TypeError(`Cannot convert ${Zi(v)} to ${this.name}`);return v},argPackAdvance:Zn,readValueFromPointer:Cf(o,u),destructorFunction:null})},Pf=(s,o,u,d,v,S,T,C)=>{var O=ea(o,u);s=$t(s),s=no(s),v=Qn(d,v,T),eo(s,function(){Qi(`Cannot call ${s} due to unbound types`,O)},o-1),Vn([],O,Y=>{var ie=[Y[0],null].concat(Y.slice(1));return Lc(s,Qs(s,ie,null,v,S,T),o-1),[]})},Df=(s,o,u,d,v)=>{o=$t(o);const S=d===0;let T=O=>O;if(S){var C=32-8*u;T=O=>O<<C>>>C,v=T(v)}Nn(s,{name:o,fromWireType:T,toWireType:(O,Y)=>{if(typeof Y!="number"&&typeof Y!="boolean")throw new TypeError(`Cannot convert "${Zi(Y)}" to ${o}`);return Tc(o,Y,d,v),Y},argPackAdvance:Zn,readValueFromPointer:wc(o,u,d!==0),destructorFunction:null})},Lf=(s,o,u)=>{var d=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],v=d[o];function S(T){var C=Me[T>>2],O=Me[T+4>>2];return new v(je.buffer,O,C)}u=$t(u),Nn(s,{name:u,fromWireType:S,argPackAdvance:Zn,readValueFromPointer:S},{ignoreDuplicateRegistrations:!0})},Ff=Object.assign({optional:!0},kc),If=(s,o)=>{Nn(s,Ff)},er=(s,o,u)=>(R(typeof u=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ae(s,Ve,o,u)),Uf=(s,o)=>{o=$t(o),Nn(s,{name:o,fromWireType(u){for(var d=Me[u>>2],v=u+4,S,T,C=v,T=0;T<=d;++T){var O=v+T;if(T==d||Ve[O]==0){var Y=O-C,ie=ft(C,Y);S===void 0?S=ie:(S+="\0",S+=ie),C=O+1}}return ti(u),S},toWireType(u,d){d instanceof ArrayBuffer&&(d=new Uint8Array(d));var v,S=typeof d=="string";S||ArrayBuffer.isView(d)&&d.BYTES_PER_ELEMENT==1||xt("Cannot pass non-string to std::string"),S?v=j(d):v=d.length;var T=ao(4+v+1),C=T+4;return Me[T>>2]=v,S?er(d,C,v+1):Ve.set(d,C),u!==null&&u.push(ti,T),T},argPackAdvance:Zn,readValueFromPointer:Ks,destructorFunction(u){ti(u)}})},zc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Nf=(s,o)=>{R(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var u=s>>1,d=u+o/2,v=u;!(v>=d)&&xe[v];)++v;if(v-u>16&&zc)return zc.decode(xe.subarray(u,v));for(var S="",T=u;!(T>=d);++T){var C=xe[T];if(C==0)break;S+=String.fromCharCode(C)}return S},Of=(s,o,u)=>{if(R(o%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),R(typeof u=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<2)return 0;u-=2;for(var d=o,v=u<s.length*2?u/2:s.length,S=0;S<v;++S){var T=s.charCodeAt(S);oe[o>>1]=T,o+=2}return oe[o>>1]=0,o-d},kf=s=>s.length*2,Bf=(s,o)=>{R(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var u="",d=0;!(d>=o/4);d++){var v=se[s+d*4>>2];if(!v)break;u+=String.fromCodePoint(v)}return u},zf=(s,o,u)=>{if(R(o%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),R(typeof u=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),u??=2147483647,u<4)return 0;for(var d=o,v=d+u-4,S=0;S<s.length;++S){var T=s.codePointAt(S);if(T>65535&&S++,se[o>>2]=T,o+=4,o+4>v)break}return se[o>>2]=0,o-d},Gf=s=>{for(var o=0,u=0;u<s.length;++u){var d=s.codePointAt(u);d>65535&&u++,o+=4}return o},Vf=(s,o,u)=>{u=$t(u);var d,v,S,T;o===2?(d=Nf,v=Of,T=kf,S=C=>xe[C>>1]):o===4&&(d=Bf,v=zf,T=Gf,S=C=>Me[C>>2]),Nn(s,{name:u,fromWireType:C=>{for(var O=Me[C>>2],Y,ie=C+4,he=0;he<=O;++he){var fe=C+4+he*o;if(he==O||S(fe)==0){var de=fe-ie,_e=d(ie,de);Y===void 0?Y=_e:(Y+="\0",Y+=_e),ie=fe+o}}return ti(C),Y},toWireType:(C,O)=>{typeof O!="string"&&xt(`Cannot pass non-string to C++ string type ${u}`);var Y=T(O),ie=ao(4+Y+o);return Me[ie>>2]=Y/o,v(O,ie+4,Y+o),C!==null&&C.push(ti,ie),ie},argPackAdvance:Zn,readValueFromPointer:Ks,destructorFunction(C){ti(C)}})},Hf=(s,o)=>{Bc(s)},Wf=(s,o)=>{o=$t(o),Nn(s,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,d)=>{}})},$f=()=>{throw new z},Gc=(s,o,u)=>{var d=[],v=s.toWireType(d,u);return d.length&&(Me[o>>2]=tn.toHandle(d)),v},Xf=(s,o,u)=>(s=tn.toValue(s),o=ta(o,"emval::as"),Gc(o,u,s)),na=[],jf=(s,o,u,d)=>(s=na[s],o=tn.toValue(o),s(null,o,u,d)),qf={},ro=s=>{var o=qf[s];return o===void 0?$t(s):o},Yf=(s,o,u,d,v)=>(s=na[s],o=tn.toValue(o),u=ro(u),s(o,o[u],d,v)),Vc=()=>globalThis,Kf=s=>s===0?tn.toHandle(Vc()):(s=ro(s),tn.toHandle(Vc()[s])),Jf=s=>{var o=na.length;return na.push(s),o},Zf=(s,o)=>{for(var u=new Array(s),d=0;d<s;++d)u[d]=ta(Me[o+d*4>>2],`parameter ${d}`);return u},Qf=(s,o,u)=>{var d=Zf(s,o),v=d.shift();s--;var S=`return function (obj, func, destructorsRef, args) {
`,T=0,C=[];u===0&&C.push("obj");for(var O=["retType"],Y=[v],ie=0;ie<s;++ie)C.push(`arg${ie}`),O.push(`argType${ie}`),Y.push(d[ie]),S+=`  var arg${ie} = argType${ie}.readValueFromPointer(args${T?"+"+T:""});
`,T+=d[ie].argPackAdvance;var he=u===1?"new func":"func.call";S+=`  var rv = ${he}(${C.join(", ")});
`,v.isVoid||(O.push("emval_returnValue"),Y.push(Gc),S+=`  return emval_returnValue(retType, destructorsRef, rv);
`),S+=`};
`;var fe=new Function(...O,S)(...Y),de=`methodCaller<(${d.map(_e=>_e.name).join(", ")}) => ${v.name}>`;return Jf(qs(de,fe))},ep=(s,o)=>(s=tn.toValue(s),o=tn.toValue(o),tn.toHandle(s[o])),tp=s=>{s>9&&(ei[s+1]+=1)},np=s=>(s=tn.toValue(s),typeof s=="number"),ip=s=>(s=tn.toValue(s),typeof s=="string"),rp=()=>tn.toHandle([]),sp=s=>tn.toHandle(ro(s)),ap=s=>{var o=tn.toValue(s);to(o),io(s)},op=(s,o)=>{s=ta(s,"_emval_take_value");var u=s.readValueFromPointer(o);return tn.toHandle(u)},lp=s=>{throw s=tn.toValue(s),s},cp=s=>s%4===0&&(s%100!==0||s%400===0),up=[0,31,60,91,121,152,182,213,244,274,305,335],hp=[0,31,59,90,120,151,181,212,243,273,304,334],Hc=s=>{var o=cp(s.getFullYear()),u=o?up:hp,d=u[s.getMonth()]+s.getDate()-1;return d},dp=9007199254740992,fp=-9007199254740992,Wc=s=>s<fp||s>dp?NaN:Number(s);function pp(s,o){s=Wc(s);var u=new Date(s*1e3);se[o>>2]=u.getSeconds(),se[o+4>>2]=u.getMinutes(),se[o+8>>2]=u.getHours(),se[o+12>>2]=u.getDate(),se[o+16>>2]=u.getMonth(),se[o+20>>2]=u.getFullYear()-1900,se[o+24>>2]=u.getDay();var d=Hc(u)|0;se[o+28>>2]=d,se[o+36>>2]=-(u.getTimezoneOffset()*60);var v=new Date(u.getFullYear(),0,1),S=new Date(u.getFullYear(),6,1).getTimezoneOffset(),T=v.getTimezoneOffset(),C=(S!=T&&u.getTimezoneOffset()==Math.min(T,S))|0;se[o+32>>2]=C}var mp=function(s){var o=(()=>{var u=new Date(se[s+20>>2]+1900,se[s+16>>2],se[s+12>>2],se[s+8>>2],se[s+4>>2],se[s>>2],0),d=se[s+32>>2],v=u.getTimezoneOffset(),S=new Date(u.getFullYear(),0,1),T=new Date(u.getFullYear(),6,1).getTimezoneOffset(),C=S.getTimezoneOffset(),O=Math.min(C,T);if(d<0)se[s+32>>2]=+(T!=C&&O==v);else if(d>0!=(O==v)){var Y=Math.max(C,T),ie=d>0?O:Y;u.setTime(u.getTime()+(ie-v)*6e4)}se[s+24>>2]=u.getDay();var he=Hc(u)|0;se[s+28>>2]=he,se[s>>2]=u.getSeconds(),se[s+4>>2]=u.getMinutes(),se[s+8>>2]=u.getHours(),se[s+12>>2]=u.getDate(),se[s+16>>2]=u.getMonth(),se[s+20>>2]=u.getYear();var fe=u.getTime();return isNaN(fe)?-1:fe/1e3})();return BigInt(o)},gp=(s,o,u,d)=>{var v=new Date().getFullYear(),S=new Date(v,0,1),T=new Date(v,6,1),C=S.getTimezoneOffset(),O=T.getTimezoneOffset(),Y=Math.max(C,O);Me[s>>2]=Y*60,se[o>>2]=+(C!=O);var ie=de=>{var _e=de>=0?"-":"+",Je=Math.abs(de),vt=String(Math.floor(Je/60)).padStart(2,"0"),ut=String(Je%60).padStart(2,"0");return`UTC${_e}${vt}${ut}`},he=ie(C),fe=ie(O);R(he),R(fe),R(j(he)<=16,`timezone name truncated to fit in TZNAME_MAX (${he})`),R(j(fe)<=16,`timezone name truncated to fit in TZNAME_MAX (${fe})`),O<C?(er(he,u,17),er(fe,d,17)):(er(he,d,17),er(fe,u,17))},$c=()=>performance.now(),Xc=()=>Date.now(),vp=s=>s>=0&&s<=3;function _p(s,o,u){if(!vp(s))return 28;var d;s===0?d=Xc():d=$c();var v=Math.round(d*1e3*1e3);return _t[u>>3]=BigInt(v),0}var ia=[],xp=(s,o)=>{R(Array.isArray(ia)),R(o%16==0),ia.length=0;for(var u;u=Ve[s++];){var d=String.fromCharCode(u),v=["d","f","i","p"];v.push("j"),R(v.includes(d),`Invalid character ${u}("${d}") in readEmAsmArgs! Use only [${v}], and do not specify "v" for void return argument.`);var S=u!=105;S&=u!=112,o+=S&&o%8?4:0,ia.push(u==112?Me[o>>2]:u==106?_t[o>>3]:u==105?se[o>>2]:Ye[o>>3]),o+=S?8:4}return ia},yp=(s,o,u)=>{var d=xp(o,u);return R(Zc.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Zc[s](...d)},Sp=(s,o,u)=>yp(s,o,u),jc=()=>2147483648,bp=()=>jc(),Mp=(s,o)=>(R(o,"alignment argument is required"),Math.ceil(s/o)*o),Ep=s=>{var o=He.buffer,u=(s-o.byteLength+65535)/65536|0;try{return He.grow(u),Ct(),1}catch(d){F(`growMemory: Attempted to grow heap from ${o.byteLength} bytes to ${s} bytes, but got error: ${d}`)}},wp=s=>{var o=Ve.length;s>>>=0,R(s>o);var u=jc();if(s>u)return F(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${u} bytes!`),!1;for(var d=1;d<=4;d*=2){var v=o*(1+.2/d);v=Math.min(v,s+100663296);var S=Math.min(u,Mp(Math.max(s,v),65536)),T=Ep(S);if(T)return!0}return F(`Failed to grow the heap from ${o} bytes to ${S} bytes, not enough memory!`),!1},so={},Tp=()=>h||"./this.program",ns=()=>{if(!ns.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Tp()};for(var u in so)so[u]===void 0?delete o[u]:o[u]=so[u];var d=[];for(var u in o)d.push(`${u}=${o[u]}`);ns.strings=d}return ns.strings},Ap=(s,o)=>{var u=0,d=0;for(var v of ns()){var S=o+u;Me[s+d>>2]=S,u+=er(v,S,1/0)+1,d+=4}return 0},Cp=(s,o)=>{var u=ns();Me[s>>2]=u.length;var d=0;for(var v of u)d+=j(v)+1;return Me[o>>2]=d,0},qc=0,Yc=()=>Ee||qc>0,Rp=s=>{Yc()||(t.onExit?.(s),N=!0),f(s,new Be(s))},Pp=(s,o)=>{if(Gg(),Yc()&&!o){var u=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${qc}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Re?.(u),F(u)}Rp(s)},Dp=Pp;function Lp(s){try{var o=pt.getStreamFromFD(s);return M.close(o),0}catch(u){if(typeof M>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var Fp=(s,o,u,d)=>{for(var v=0,S=0;S<u;S++){var T=Me[o>>2],C=Me[o+4>>2];o+=8;var O=M.read(s,je,T,C,d);if(O<0)return-1;if(v+=O,O<C)break}return v};function Ip(s,o,u,d){try{var v=pt.getStreamFromFD(s),S=Fp(v,o,u);return Me[d>>2]=S,0}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function Up(s,o,u,d){o=Wc(o);try{if(isNaN(o))return 61;var v=pt.getStreamFromFD(s);return M.llseek(v,o,u),_t[d>>3]=BigInt(v.position),v.getdents&&o===0&&u===0&&(v.getdents=null),0}catch(S){if(typeof M>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Np=(s,o,u,d)=>{for(var v=0,S=0;S<u;S++){var T=Me[o>>2],C=Me[o+4>>2];o+=8;var O=M.write(s,je,T,C,d);if(O<0)return-1;if(v+=O,O<C)break}return v};function Op(s,o,u,d){try{var v=pt.getStreamFromFD(s),S=Np(v,o,u);return Me[d>>2]=S,0}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var kp=s=>s,Bp=s=>{var o=t["_"+s];return R(o,"Cannot call unknown function "+s+", make sure it is exported"),o},zp=(s,o)=>{R(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),je.set(s,o)},ra=s=>ru(s),Gp=s=>{var o=j(s)+1,u=ra(o);return er(s,u,o),u},Kc=(s,o,u,d,v)=>{var S={string:_e=>{var Je=0;return _e!=null&&_e!==0&&(Je=Gp(_e)),Je},array:_e=>{var Je=ra(_e.length);return zp(_e,Je),Je}};function T(_e){return o==="string"?ft(_e):o==="boolean"?!!_e:_e}var C=Bp(s),O=[],Y=0;if(R(o!=="array",'Return type should not be "array".'),d)for(var ie=0;ie<d.length;ie++){var he=S[u[ie]];he?(Y===0&&(Y=G()),O[ie]=he(d[ie])):O[ie]=d[ie]}var fe=C(...O);function de(_e){return Y!==0&&X(Y),T(_e)}return fe=de(fe),fe},Vp=(s,o,u,d)=>(...v)=>Kc(s,o,u,v),Hp=(...s)=>M.createPath(...s),Wp=(...s)=>M.unlink(...s),$p=(...s)=>M.createLazyFile(...s),Xp=(...s)=>M.createDevice(...s),jp=s=>sa(s),qp=s=>co(s),Yp=s=>{var o=G(),u=ra(4),d=ra(4);au(s,u,d);var v=Me[u>>2],S=Me[d>>2],T=ft(v);ti(v);var C;return S&&(C=ft(S),ti(S)),X(o),[T,C]},Jc=s=>Yp(s);M.createPreloadedFile=Tt,M.staticInit(),af(),pf(),R(ei.length===10),t.noExitRuntime&&(Ee=t.noExitRuntime),t.preloadPlugins&&(st=t.preloadPlugins),t.print&&(I=t.print),t.printErr&&(F=t.printErr),t.wasmBinary&&(P=t.wasmBinary),Zp(),t.arguments&&t.arguments,t.thisProgram&&(h=t.thisProgram),R(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),R(typeof t.read>"u","Module.read option was removed"),R(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),R(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),R(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),R(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),R(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),R(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),R(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),R(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=E,t.ccall=Kc,t.cwrap=Vp,t.FS_createPreloadedFile=Tt,t.FS_unlink=Wp,t.FS_createPath=Hp,t.FS_createDevice=Xp,t.FS=M,t.FS_createDataFile=We,t.FS_createLazyFile=$p,t.MEMFS=pe;var Kp=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Kp.forEach(me);var Jp=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];Jp.forEach(De),t.incrementExceptionRefcount=jp,t.decrementExceptionRefcount=qp,t.getExceptionMessage=Jc;function Zp(){te("fetchSettings")}var Zc={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(o){},enumerable:!0,configurable:!0})})}},Qc=K("___getTypeName"),ao=K("_malloc"),oo=K("_fflush"),ti=K("_free"),lo=K("_emscripten_stack_get_end"),eu=K("_strerror"),ye=K("_setThrew"),tu=K("__emscripten_tempret_set"),nu=K("_emscripten_stack_init"),iu=K("__emscripten_stack_restore"),ru=K("__emscripten_stack_alloc"),su=K("_emscripten_stack_get_current"),co=K("___cxa_decrement_exception_refcount"),sa=K("___cxa_increment_exception_refcount"),au=K("___get_exception_message"),ou=K("___cxa_can_catch"),lu=K("___cxa_get_exception_ptr");function Qp(s){Qc=le("__getTypeName",1),ao=le("malloc",1),oo=le("fflush",1),ti=le("free",1),lo=s.emscripten_stack_get_end,s.emscripten_stack_get_base,eu=le("strerror",1),ye=le("setThrew",2),tu=le("_emscripten_tempret_set",1),nu=s.emscripten_stack_init,s.emscripten_stack_get_free,iu=s._emscripten_stack_restore,ru=s._emscripten_stack_alloc,su=s.emscripten_stack_get_current,co=le("__cxa_decrement_exception_refcount",1),sa=le("__cxa_increment_exception_refcount",1),au=le("__get_exception_message",3),ou=le("__cxa_can_catch",3),lu=le("__cxa_get_exception_ptr",1)}var cu={__assert_fail:Gn,__cxa_begin_catch:Qr,__cxa_current_primary_exception:ja,__cxa_end_catch:ks,__cxa_find_matching_catch_2:Bs,__cxa_find_matching_catch_3:yr,__cxa_find_matching_catch_4:zs,__cxa_rethrow:Ki,__cxa_rethrow_primary_exception:Gs,__cxa_throw:Vs,__cxa_uncaught_exceptions:qa,__resumeException:Ya,__syscall_dup3:yt,__syscall_fcntl64:mi,__syscall_fstat64:Fi,__syscall_ioctl:Dt,__syscall_lstat64:en,__syscall_newfstatat:Kn,__syscall_openat:Yt,__syscall_stat64:Jn,_abort_js:Ii,_embind_register_bigint:Jd,_embind_register_bool:Zd,_embind_register_class:gf,_embind_register_class_class_function:yf,_embind_register_class_constructor:Sf,_embind_register_class_function:bf,_embind_register_class_property:Mf,_embind_register_constant:Ef,_embind_register_emval:Bc,_embind_register_enum:Tf,_embind_register_enum_value:Af,_embind_register_float:Rf,_embind_register_function:Pf,_embind_register_integer:Df,_embind_register_memory_view:Lf,_embind_register_optional:If,_embind_register_std_string:Uf,_embind_register_std_wstring:Vf,_embind_register_user_type:Hf,_embind_register_void:Wf,_emscripten_throw_longjmp:$f,_emval_as:Xf,_emval_call:jf,_emval_call_method:Yf,_emval_decref:io,_emval_get_global:Kf,_emval_get_method_caller:Qf,_emval_get_property:ep,_emval_incref:tp,_emval_is_number:np,_emval_is_string:ip,_emval_new_array:rp,_emval_new_cstring:sp,_emval_run_destructors:ap,_emval_take_value:op,_emval_throw:lp,_localtime_js:pp,_mktime_js:mp,_tzset_js:gp,clock_time_get:_p,emscripten_asm_const_int:Sp,emscripten_date_now:Xc,emscripten_get_heap_max:bp,emscripten_get_now:$c,emscripten_resize_heap:wp,environ_get:Ap,environ_sizes_get:Cp,exit:Dp,fd_close:Lp,fd_read:Ip,fd_seek:Up,fd_write:Op,invoke_ddd:Tg,invoke_dddi:Hm,invoke_dddidi:Wm,invoke_ddidi:Vm,invoke_di:$m,invoke_dii:Fm,invoke_diii:fm,invoke_diiii:Gm,invoke_diiiidd:Bm,invoke_diiiidi:gm,invoke_diiiii:lm,invoke_diiiiii:bm,invoke_diiiiiii:Xm,invoke_diiiiiiiii:ym,invoke_diiiiiiiiiiii:Sm,invoke_fiii:Og,invoke_i:cm,invoke_id:Sg,invoke_ii:nm,invoke_iid:ng,invoke_iidddd:Dg,invoke_iidiii:Pm,invoke_iidiiid:Cm,invoke_iidiiiiidi:Dm,invoke_iif:Pg,invoke_iii:em,invoke_iiid:Lm,invoke_iiididdddddd:Rm,invoke_iiidiiiiiiii:Am,invoke_iiii:sm,invoke_iiiidddiiiii:qm,invoke_iiiii:dm,invoke_iiiiid:dg,invoke_iiiiii:og,invoke_iiiiiii:rg,invoke_iiiiiiii:tg,invoke_iiiiiiiidd:fg,invoke_iiiiiiiii:km,invoke_iiiiiiiiii:sg,invoke_iiiiiiiiiidddiiiiiiiii:Tm,invoke_iiiiiiiiiii:Ng,invoke_iiiiiiiiiiii:kg,invoke_iiiiiiiiiiiii:yg,invoke_iiij:ag,invoke_iiji:hg,invoke_j:Ig,invoke_ji:xg,invoke_jiiii:lg,invoke_jij:_g,invoke_v:rm,invoke_vi:im,invoke_vid:ig,invoke_viddd:cg,invoke_vidddd:ug,invoke_vidi:zm,invoke_vidiii:Em,invoke_vii:om,invoke_viid:Nm,invoke_viiddi:vg,invoke_viiddidi:gg,invoke_viiddii:jm,invoke_viidi:Um,invoke_viidii:mm,invoke_viidiii:Qm,invoke_viidiiid:Jm,invoke_viidiiiii:wm,invoke_viidiiiiidi:eg,invoke_viidiiiiiiii:Mm,invoke_viii:tm,invoke_viiid:_m,invoke_viiidd:mg,invoke_viiidi:Im,invoke_viiididdddddd:Zm,invoke_viiidiiiiiiii:Km,invoke_viiii:hm,invoke_viiiiddd:pg,invoke_viiiidi:Ag,invoke_viiiifi:Cg,invoke_viiiii:am,invoke_viiiiid:vm,invoke_viiiiii:um,invoke_viiiiiii:pm,invoke_viiiiiiii:Om,invoke_viiiiiiiiii:Eg,invoke_viiiiiiiiiidddiiiiiiiii:Ym,invoke_viiiiiiiiiiid:xm,invoke_viiiiiiiiiiiii:Mg,invoke_viiiiiiiiiiiiiii:Bg,invoke_viiiiiiiiiiiiiiiiii:wg,invoke_viiiij:Lg,invoke_viij:Fg,invoke_viijii:Ug,invoke_vij:Rg,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:bg,llvm_eh_typeid_for:kp},tr=await we();function em(s,o,u){var d=G();try{return Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;ye(1,0)}}function tm(s,o,u,d){var v=G();try{Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function nm(s,o){var u=G();try{return Se(s)(o)}catch(d){if(X(u),!(d instanceof B))throw d;ye(1,0)}}function im(s,o){var u=G();try{Se(s)(o)}catch(d){if(X(u),!(d instanceof B))throw d;ye(1,0)}}function rm(s){var o=G();try{Se(s)()}catch(u){if(X(o),!(u instanceof B))throw u;ye(1,0)}}function sm(s,o,u,d){var v=G();try{return Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function am(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function om(s,o,u){var d=G();try{Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;ye(1,0)}}function lm(s,o,u,d,v,S){var T=G();try{return Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function cm(s){var o=G();try{return Se(s)()}catch(u){if(X(o),!(u instanceof B))throw u;ye(1,0)}}function um(s,o,u,d,v,S,T){var C=G();try{Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function hm(s,o,u,d,v){var S=G();try{Se(s)(o,u,d,v)}catch(T){if(X(S),!(T instanceof B))throw T;ye(1,0)}}function dm(s,o,u,d,v){var S=G();try{return Se(s)(o,u,d,v)}catch(T){if(X(S),!(T instanceof B))throw T;ye(1,0)}}function fm(s,o,u,d){var v=G();try{return Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function pm(s,o,u,d,v,S,T,C){var O=G();try{Se(s)(o,u,d,v,S,T,C)}catch(Y){if(X(O),!(Y instanceof B))throw Y;ye(1,0)}}function mm(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function gm(s,o,u,d,v,S,T){var C=G();try{return Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function vm(s,o,u,d,v,S,T){var C=G();try{Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function _m(s,o,u,d,v){var S=G();try{Se(s)(o,u,d,v)}catch(T){if(X(S),!(T instanceof B))throw T;ye(1,0)}}function xm(s,o,u,d,v,S,T,C,O,Y,ie,he,fe){var de=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe)}catch(_e){if(X(de),!(_e instanceof B))throw _e;ye(1,0)}}function ym(s,o,u,d,v,S,T,C,O,Y){var ie=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y)}catch(he){if(X(ie),!(he instanceof B))throw he;ye(1,0)}}function Sm(s,o,u,d,v,S,T,C,O,Y,ie,he,fe){var de=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe)}catch(_e){if(X(de),!(_e instanceof B))throw _e;ye(1,0)}}function bm(s,o,u,d,v,S,T){var C=G();try{return Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function Mm(s,o,u,d,v,S,T,C,O,Y,ie,he){var fe=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he)}catch(de){if(X(fe),!(de instanceof B))throw de;ye(1,0)}}function Em(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function wm(s,o,u,d,v,S,T,C,O){var Y=G();try{Se(s)(o,u,d,v,S,T,C,O)}catch(ie){if(X(Y),!(ie instanceof B))throw ie;ye(1,0)}}function Tm(s,o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je,vt,ut,Bt,Mt,gn,nn){var Sn=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je,vt,ut,Bt,Mt,gn,nn)}catch(It){if(X(Sn),!(It instanceof B))throw It;ye(1,0)}}function Am(s,o,u,d,v,S,T,C,O,Y,ie,he){var fe=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y,ie,he)}catch(de){if(X(fe),!(de instanceof B))throw de;ye(1,0)}}function Cm(s,o,u,d,v,S,T){var C=G();try{return Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function Rm(s,o,u,d,v,S,T,C,O,Y,ie,he){var fe=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y,ie,he)}catch(de){if(X(fe),!(de instanceof B))throw de;ye(1,0)}}function Pm(s,o,u,d,v,S){var T=G();try{return Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function Dm(s,o,u,d,v,S,T,C,O,Y){var ie=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y)}catch(he){if(X(ie),!(he instanceof B))throw he;ye(1,0)}}function Lm(s,o,u,d){var v=G();try{return Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function Fm(s,o,u){var d=G();try{return Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;ye(1,0)}}function Im(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function Um(s,o,u,d,v){var S=G();try{Se(s)(o,u,d,v)}catch(T){if(X(S),!(T instanceof B))throw T;ye(1,0)}}function Nm(s,o,u,d){var v=G();try{Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function Om(s,o,u,d,v,S,T,C,O){var Y=G();try{Se(s)(o,u,d,v,S,T,C,O)}catch(ie){if(X(Y),!(ie instanceof B))throw ie;ye(1,0)}}function km(s,o,u,d,v,S,T,C,O){var Y=G();try{return Se(s)(o,u,d,v,S,T,C,O)}catch(ie){if(X(Y),!(ie instanceof B))throw ie;ye(1,0)}}function Bm(s,o,u,d,v,S,T){var C=G();try{return Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function zm(s,o,u,d){var v=G();try{Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function Gm(s,o,u,d,v){var S=G();try{return Se(s)(o,u,d,v)}catch(T){if(X(S),!(T instanceof B))throw T;ye(1,0)}}function Vm(s,o,u,d,v){var S=G();try{return Se(s)(o,u,d,v)}catch(T){if(X(S),!(T instanceof B))throw T;ye(1,0)}}function Hm(s,o,u,d){var v=G();try{return Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function Wm(s,o,u,d,v,S){var T=G();try{return Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function $m(s,o){var u=G();try{return Se(s)(o)}catch(d){if(X(u),!(d instanceof B))throw d;ye(1,0)}}function Xm(s,o,u,d,v,S,T,C){var O=G();try{return Se(s)(o,u,d,v,S,T,C)}catch(Y){if(X(O),!(Y instanceof B))throw Y;ye(1,0)}}function jm(s,o,u,d,v,S,T){var C=G();try{Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function qm(s,o,u,d,v,S,T,C,O,Y,ie,he){var fe=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y,ie,he)}catch(de){if(X(fe),!(de instanceof B))throw de;ye(1,0)}}function Ym(s,o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je,vt,ut,Bt,Mt,gn,nn,Sn){var It=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je,vt,ut,Bt,Mt,gn,nn,Sn)}catch(nr){if(X(It),!(nr instanceof B))throw nr;ye(1,0)}}function Km(s,o,u,d,v,S,T,C,O,Y,ie,he,fe){var de=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe)}catch(_e){if(X(de),!(_e instanceof B))throw _e;ye(1,0)}}function Jm(s,o,u,d,v,S,T,C){var O=G();try{Se(s)(o,u,d,v,S,T,C)}catch(Y){if(X(O),!(Y instanceof B))throw Y;ye(1,0)}}function Zm(s,o,u,d,v,S,T,C,O,Y,ie,he,fe){var de=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe)}catch(_e){if(X(de),!(_e instanceof B))throw _e;ye(1,0)}}function Qm(s,o,u,d,v,S,T){var C=G();try{Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function eg(s,o,u,d,v,S,T,C,O,Y,ie){var he=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie)}catch(fe){if(X(he),!(fe instanceof B))throw fe;ye(1,0)}}function tg(s,o,u,d,v,S,T,C){var O=G();try{return Se(s)(o,u,d,v,S,T,C)}catch(Y){if(X(O),!(Y instanceof B))throw Y;ye(1,0)}}function ng(s,o,u){var d=G();try{return Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;ye(1,0)}}function ig(s,o,u){var d=G();try{Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;ye(1,0)}}function rg(s,o,u,d,v,S,T){var C=G();try{return Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function sg(s,o,u,d,v,S,T,C,O,Y){var ie=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y)}catch(he){if(X(ie),!(he instanceof B))throw he;ye(1,0)}}function ag(s,o,u,d){var v=G();try{return Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function og(s,o,u,d,v,S){var T=G();try{return Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function lg(s,o,u,d,v){var S=G();try{return Se(s)(o,u,d,v)}catch(T){if(X(S),!(T instanceof B))throw T;return ye(1,0),0n}}function cg(s,o,u,d,v){var S=G();try{Se(s)(o,u,d,v)}catch(T){if(X(S),!(T instanceof B))throw T;ye(1,0)}}function ug(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function hg(s,o,u,d){var v=G();try{return Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function dg(s,o,u,d,v,S){var T=G();try{return Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function fg(s,o,u,d,v,S,T,C,O,Y){var ie=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y)}catch(he){if(X(ie),!(he instanceof B))throw he;ye(1,0)}}function pg(s,o,u,d,v,S,T,C){var O=G();try{Se(s)(o,u,d,v,S,T,C)}catch(Y){if(X(O),!(Y instanceof B))throw Y;ye(1,0)}}function mg(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function gg(s,o,u,d,v,S,T,C){var O=G();try{Se(s)(o,u,d,v,S,T,C)}catch(Y){if(X(O),!(Y instanceof B))throw Y;ye(1,0)}}function vg(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function _g(s,o,u){var d=G();try{return Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;return ye(1,0),0n}}function xg(s,o){var u=G();try{return Se(s)(o)}catch(d){if(X(u),!(d instanceof B))throw d;return ye(1,0),0n}}function yg(s,o,u,d,v,S,T,C,O,Y,ie,he,fe){var de=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe)}catch(_e){if(X(de),!(_e instanceof B))throw _e;ye(1,0)}}function Sg(s,o){var u=G();try{return Se(s)(o)}catch(d){if(X(u),!(d instanceof B))throw d;ye(1,0)}}function bg(s,o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je,vt,ut,Bt,Mt,gn,nn,Sn,It,nr,Hg,Wg,$g,Xg,jg,qg,Yg,Kg,Jg,Zg,Qg,e0,t0,n0,i0,r0,s0,a0,o0,l0,c0,u0,h0,d0,f0,p0,m0,g0,v0,_0,x0,y0,S0,b0,M0,E0,w0,T0,A0,C0,R0,P0,D0,L0,F0,I0,U0,N0,O0,k0,B0,z0,G0,V0,H0,W0,$0,X0,j0,q0,Y0){var K0=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je,vt,ut,Bt,Mt,gn,nn,Sn,It,nr,Hg,Wg,$g,Xg,jg,qg,Yg,Kg,Jg,Zg,Qg,e0,t0,n0,i0,r0,s0,a0,o0,l0,c0,u0,h0,d0,f0,p0,m0,g0,v0,_0,x0,y0,S0,b0,M0,E0,w0,T0,A0,C0,R0,P0,D0,L0,F0,I0,U0,N0,O0,k0,B0,z0,G0,V0,H0,W0,$0,X0,j0,q0,Y0)}catch(hu){if(X(K0),!(hu instanceof B))throw hu;ye(1,0)}}function Mg(s,o,u,d,v,S,T,C,O,Y,ie,he,fe,de){var _e=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe,de)}catch(Je){if(X(_e),!(Je instanceof B))throw Je;ye(1,0)}}function Eg(s,o,u,d,v,S,T,C,O,Y,ie){var he=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie)}catch(fe){if(X(he),!(fe instanceof B))throw fe;ye(1,0)}}function wg(s,o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je,vt,ut,Bt){var Mt=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je,vt,ut,Bt)}catch(gn){if(X(Mt),!(gn instanceof B))throw gn;ye(1,0)}}function Tg(s,o,u){var d=G();try{return Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;ye(1,0)}}function Ag(s,o,u,d,v,S,T){var C=G();try{Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function Cg(s,o,u,d,v,S,T){var C=G();try{Se(s)(o,u,d,v,S,T)}catch(O){if(X(C),!(O instanceof B))throw O;ye(1,0)}}function Rg(s,o,u){var d=G();try{Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;ye(1,0)}}function Pg(s,o,u){var d=G();try{return Se(s)(o,u)}catch(v){if(X(d),!(v instanceof B))throw v;ye(1,0)}}function Dg(s,o,u,d,v,S){var T=G();try{return Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function Lg(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function Fg(s,o,u,d){var v=G();try{Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function Ig(s){var o=G();try{return Se(s)()}catch(u){if(X(o),!(u instanceof B))throw u;return ye(1,0),0n}}function Ug(s,o,u,d,v,S){var T=G();try{Se(s)(o,u,d,v,S)}catch(C){if(X(T),!(C instanceof B))throw C;ye(1,0)}}function Ng(s,o,u,d,v,S,T,C,O,Y,ie){var he=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y,ie)}catch(fe){if(X(he),!(fe instanceof B))throw fe;ye(1,0)}}function Og(s,o,u,d){var v=G();try{return Se(s)(o,u,d)}catch(S){if(X(v),!(S instanceof B))throw S;ye(1,0)}}function kg(s,o,u,d,v,S,T,C,O,Y,ie,he){var fe=G();try{return Se(s)(o,u,d,v,S,T,C,O,Y,ie,he)}catch(de){if(X(fe),!(de instanceof B))throw de;ye(1,0)}}function Bg(s,o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je){var vt=G();try{Se(s)(o,u,d,v,S,T,C,O,Y,ie,he,fe,de,_e,Je)}catch(ut){if(X(vt),!(ut instanceof B))throw ut;ye(1,0)}}var uu;function zg(){nu(),w()}function uo(){if(Ft>0){gt=uo;return}if(zg(),at(),Ft>0){gt=uo;return}function s(){R(!uu),uu=!0,t.calledRun=!0,!N&&(Ht(),Pe?.(t),t.onRuntimeInitialized?.(),ee("onRuntimeInitialized"),R(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),V())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),L()}function Gg(){var s=I,o=F,u=!1;I=F=d=>{u=!0};try{oo(0),["stdout","stderr"].forEach(d=>{var v=M.analyzePath("/dev/"+d);if(v){var S=v.object,T=S.rdev,C=Ce.ttys[T];C?.output?.length&&(u=!0)}})}catch{}I=s,F=o,u&&Ue("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Vg(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();ee("preInit")}Vg(),uo(),dt?e=t:e=new Promise((s,o)=>{Pe=s,Re=o});for(const s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){H(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const fu="/demo/assets/mujoco-D9UjOFNX.wasm";var qt=Uint8Array,Ln=Uint16Array,Ql=Int32Array,ka=new qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ba=new qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tl=new qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Lh=function(i,e){for(var t=new Ln(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Ql(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)r[a]=a-t[n]<<5|n;return{b:t,r}},Fh=Lh(ka,2),Ih=Fh.b,nl=Fh.r;Ih[28]=258,nl[258]=28;var Uh=Lh(Ba,0),tv=Uh.b,pu=Uh.r,il=new Ln(32768);for(var Gt=0;Gt<32768;++Gt){var Ui=(Gt&43690)>>1|(Gt&21845)<<1;Ui=(Ui&52428)>>2|(Ui&13107)<<2,Ui=(Ui&61680)>>4|(Ui&3855)<<4,il[Gt]=((Ui&65280)>>8|(Ui&255)<<8)>>1}var ci=(function(i,e,t){for(var n=i.length,r=0,a=new Ln(e);r<n;++r)i[r]&&++a[i[r]-1];var l=new Ln(e);for(r=1;r<e;++r)l[r]=l[r-1]+a[r-1]<<1;var c;if(t){c=new Ln(1<<e);var h=15-e;for(r=0;r<n;++r)if(i[r])for(var f=r<<4|i[r],p=e-i[r],g=l[i[r]-1]++<<p,m=g|(1<<p)-1;g<=m;++g)c[il[g]>>h]=f}else for(c=new Ln(n),r=0;r<n;++r)i[r]&&(c[r]=il[l[i[r]-1]++]>>15-i[r]);return c}),Wi=new qt(288);for(var Gt=0;Gt<144;++Gt)Wi[Gt]=8;for(var Gt=144;Gt<256;++Gt)Wi[Gt]=9;for(var Gt=256;Gt<280;++Gt)Wi[Gt]=7;for(var Gt=280;Gt<288;++Gt)Wi[Gt]=8;var Es=new qt(32);for(var Gt=0;Gt<32;++Gt)Es[Gt]=5;var nv=ci(Wi,9,0),iv=ci(Wi,9,1),rv=ci(Es,5,0),sv=ci(Es,5,1),ho=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Hn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},fo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},ec=function(i){return(i+7)/8|0},za=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new qt(i.subarray(e,t))},av=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mn=function(i,e,t){var n=new Error(e||av[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Mn),!t)throw n;return n},ov=function(i,e,t,n){var r=i.length,a=0;if(!r||e.f&&!e.l)return t||new qt(0);var l=!t,c=l||e.i!=2,h=e.i;l&&(t=new qt(r*3));var f=function(Ye){var _t=t.length;if(Ye>_t){var rt=new qt(Math.max(_t*2,Ye));rt.set(t),t=rt}},p=e.f||0,g=e.p||0,m=e.b||0,_=e.l,b=e.d,A=e.m,y=e.n,x=r*8;do{if(!_){p=Hn(i,g,1);var I=Hn(i,g+1,3);if(g+=3,I)if(I==1)_=iv,b=sv,A=9,y=5;else if(I==2){var R=Hn(i,g,31)+257,k=Hn(i,g+10,15)+4,w=R+Hn(i,g+5,31)+1;g+=14;for(var L=new qt(w),B=new qt(19),z=0;z<k;++z)B[tl[z]]=Hn(i,g+z*3,7);g+=k*3;for(var q=ho(B),ee=(1<<q)-1,K=ci(B,q,1),z=0;z<w;){var te=K[Hn(i,g,ee)];g+=te&15;var F=te>>4;if(F<16)L[z++]=F;else{var Q=0,J=0;for(F==16?(J=3+Hn(i,g,3),g+=2,Q=L[z-1]):F==17?(J=3+Hn(i,g,7),g+=3):F==18&&(J=11+Hn(i,g,127),g+=7);J--;)L[z++]=Q}}var ve=L.subarray(0,R),me=L.subarray(R);A=ho(ve),y=ho(me),_=ci(ve,A,1),b=ci(me,y,1)}else Mn(1);else{var F=ec(g)+4,P=i[F-4]|i[F-3]<<8,N=F+P;if(N>r){h&&Mn(0);break}c&&f(m+P),t.set(i.subarray(F,N),m),e.b=m+=P,e.p=g=N*8,e.f=p;continue}if(g>x){h&&Mn(0);break}}c&&f(m+131072);for(var De=(1<<A)-1,Pe=(1<<y)-1,Re=g;;Re=g){var Q=_[fo(i,g)&De],He=Q>>4;if(g+=Q&15,g>x){h&&Mn(0);break}if(Q||Mn(2),He<256)t[m++]=He;else if(He==256){Re=g,_=null;break}else{var je=He-254;if(He>264){var z=He-257,Ve=ka[z];je=Hn(i,g,(1<<Ve)-1)+Ih[z],g+=Ve}var oe=b[fo(i,g)&Pe],xe=oe>>4;oe||Mn(3),g+=oe&15;var me=tv[xe];if(xe>3){var Ve=Ba[xe];me+=fo(i,g)&(1<<Ve)-1,g+=Ve}if(g>x){h&&Mn(0);break}c&&f(m+131072);var se=m+je;if(m<me){var Me=a-me,Xe=Math.min(me,se);for(Me+m<0&&Mn(3);m<Xe;++m)t[m]=n[Me+m]}for(;m<se;++m)t[m]=t[m-me]}}e.l=_,e.p=Re,e.b=m,e.f=p,_&&(p=1,e.m=A,e.d=b,e.n=y)}while(!p);return m!=t.length&&l?za(t,0,m):t.subarray(0,m)},gi=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},is=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},po=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,a=t.slice();if(!r)return{t:Oh,l:0};if(r==1){var l=new qt(t[0].s+1);return l[t[0].s]=1,{t:l,l:1}}t.sort(function(N,R){return N.f-R.f}),t.push({s:-1,f:25001});var c=t[0],h=t[1],f=0,p=1,g=2;for(t[0]={s:-1,f:c.f+h.f,l:c,r:h};p!=r-1;)c=t[t[f].f<t[g].f?f++:g++],h=t[f!=p&&t[f].f<t[g].f?f++:g++],t[p++]={s:-1,f:c.f+h.f,l:c,r:h};for(var m=a[0].s,n=1;n<r;++n)a[n].s>m&&(m=a[n].s);var _=new Ln(m+1),b=rl(t[p-1],_,0);if(b>e){var n=0,A=0,y=b-e,x=1<<y;for(a.sort(function(R,k){return _[k.s]-_[R.s]||R.f-k.f});n<r;++n){var I=a[n].s;if(_[I]>e)A+=x-(1<<b-_[I]),_[I]=e;else break}for(A>>=y;A>0;){var F=a[n].s;_[F]<e?A-=1<<e-_[F]++-1:++n}for(;n>=0&&A;--n){var P=a[n].s;_[P]==e&&(--_[P],++A)}b=e}return{t:new qt(_),l:b}},rl=function(i,e,t){return i.s==-1?Math.max(rl(i.l,e,t+1),rl(i.r,e,t+1)):e[i.s]=t},mu=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new Ln(++e),n=0,r=i[0],a=1,l=function(h){t[n++]=h},c=1;c<=e;++c)if(i[c]==r&&c!=e)++a;else{if(!r&&a>2){for(;a>138;a-=138)l(32754);a>2&&(l(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(l(r),--a;a>6;a-=6)l(8304);a>2&&(l(a-3<<5|8208),a=0)}for(;a--;)l(r);a=1,r=i[c]}return{c:t.subarray(0,n),n:e}},rs=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Nh=function(i,e,t){var n=t.length,r=ec(e+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var a=0;a<n;++a)i[r+a+4]=t[a];return(r+4+n)*8},gu=function(i,e,t,n,r,a,l,c,h,f,p){gi(e,p++,t),++r[256];for(var g=po(r,15),m=g.t,_=g.l,b=po(a,15),A=b.t,y=b.l,x=mu(m),I=x.c,F=x.n,P=mu(A),N=P.c,R=P.n,k=new Ln(19),w=0;w<I.length;++w)++k[I[w]&31];for(var w=0;w<N.length;++w)++k[N[w]&31];for(var L=po(k,7),B=L.t,z=L.l,q=19;q>4&&!B[tl[q-1]];--q);var ee=f+5<<3,K=rs(r,Wi)+rs(a,Es)+l,te=rs(r,m)+rs(a,A)+l+14+3*q+rs(k,B)+2*k[16]+3*k[17]+7*k[18];if(h>=0&&ee<=K&&ee<=te)return Nh(e,p,i.subarray(h,h+f));var Q,J,ve,me;if(gi(e,p,1+(te<K)),p+=2,te<K){Q=ci(m,_,0),J=m,ve=ci(A,y,0),me=A;var De=ci(B,z,0);gi(e,p,F-257),gi(e,p+5,R-1),gi(e,p+10,q-4),p+=14;for(var w=0;w<q;++w)gi(e,p+3*w,B[tl[w]]);p+=3*q;for(var Pe=[I,N],Re=0;Re<2;++Re)for(var He=Pe[Re],w=0;w<He.length;++w){var je=He[w]&31;gi(e,p,De[je]),p+=B[je],je>15&&(gi(e,p,He[w]>>5&127),p+=He[w]>>12)}}else Q=nv,J=Wi,ve=rv,me=Es;for(var w=0;w<c;++w){var Ve=n[w];if(Ve>255){var je=Ve>>18&31;is(e,p,Q[je+257]),p+=J[je+257],je>7&&(gi(e,p,Ve>>23&31),p+=ka[je]);var oe=Ve&31;is(e,p,ve[oe]),p+=me[oe],oe>3&&(is(e,p,Ve>>5&8191),p+=Ba[oe])}else is(e,p,Q[Ve]),p+=J[Ve]}return is(e,p,Q[256]),p+J[256]},lv=new Ql([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Oh=new qt(0),cv=function(i,e,t,n,r,a){var l=a.z||i.length,c=new qt(n+l+5*(1+Math.ceil(l/7e3))+r),h=c.subarray(n,c.length-r),f=a.l,p=(a.r||0)&7;if(e){p&&(h[0]=a.r>>3);for(var g=lv[e-1],m=g>>13,_=g&8191,b=(1<<t)-1,A=a.p||new Ln(32768),y=a.h||new Ln(b+1),x=Math.ceil(t/3),I=2*x,F=function(dt){return(i[dt]^i[dt+1]<<x^i[dt+2]<<I)&b},P=new Ql(25e3),N=new Ln(288),R=new Ln(32),k=0,w=0,L=a.i||0,B=0,z=a.w||0,q=0;L+2<l;++L){var ee=F(L),K=L&32767,te=y[ee];if(A[K]=te,y[ee]=K,z<=L){var Q=l-L;if((k>7e3||B>24576)&&(Q>423||!f)){p=gu(i,h,0,P,N,R,w,B,q,L-q,p),B=k=w=0,q=L;for(var J=0;J<286;++J)N[J]=0;for(var J=0;J<30;++J)R[J]=0}var ve=2,me=0,De=_,Pe=K-te&32767;if(Q>2&&ee==F(L-Pe))for(var Re=Math.min(m,Q)-1,He=Math.min(32767,L),je=Math.min(258,Q);Pe<=He&&--De&&K!=te;){if(i[L+ve]==i[L+ve-Pe]){for(var Ve=0;Ve<je&&i[L+Ve]==i[L+Ve-Pe];++Ve);if(Ve>ve){if(ve=Ve,me=Pe,Ve>Re)break;for(var oe=Math.min(Pe,Ve-2),xe=0,J=0;J<oe;++J){var se=L-Pe+J&32767,Me=A[se],Xe=se-Me&32767;Xe>xe&&(xe=Xe,te=se)}}}K=te,te=A[K],Pe+=K-te&32767}if(me){P[B++]=268435456|nl[ve]<<18|pu[me];var Ye=nl[ve]&31,_t=pu[me]&31;w+=ka[Ye]+Ba[_t],++N[257+Ye],++R[_t],z=L+ve,++k}else P[B++]=i[L],++N[i[L]]}}for(L=Math.max(L,z);L<l;++L)P[B++]=i[L],++N[i[L]];p=gu(i,h,f,P,N,R,w,B,q,L-q,p),f||(a.r=p&7|h[p/8|0]<<3,p-=7,a.h=y,a.p=A,a.i=L,a.w=z)}else{for(var L=a.w||0;L<l+f;L+=65535){var rt=L+65535;rt>=l&&(h[p/8|0]=f,rt=l),p=Nh(h,p+1,i.subarray(L,rt))}a.i=l}return za(c,0,n+ec(p)+r)},uv=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),hv=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=uv[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},dv=function(i,e,t,n,r){if(!r&&(r={l:1},e.dictionary)){var a=e.dictionary.subarray(-32768),l=new qt(a.length+i.length);l.set(a),l.set(i,a.length),i=l,r.w=a.length}return cv(i,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,r)},kh=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},un=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},fv=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Mn(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},pv=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};function mv(i,e){return dv(i,e||{},0,0)}function Bh(i,e){var t=fv(i);return t+8>i.length&&Mn(6,"invalid gzip data"),ov(i.subarray(t,-8),{i:2},new qt(pv(i)),e)}var zh=function(i,e,t,n){for(var r in i){var a=i[r],l=e+r,c=n;Array.isArray(a)&&(c=kh(n,a[1]),a=a[0]),ArrayBuffer.isView(a)?t[l]=[a,c]:(t[l+="/"]=[new qt(0),c],zh(a,l,t,n))}},vu=typeof TextEncoder<"u"&&new TextEncoder,sl=typeof TextDecoder<"u"&&new TextDecoder,gv=0;try{sl.decode(Oh,{stream:!0}),gv=1}catch{}var vv=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:za(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function ur(i,e){var t;if(vu)return vu.encode(i);for(var n=i.length,r=new qt(i.length+(i.length>>1)),a=0,l=function(f){r[a++]=f},t=0;t<n;++t){if(a+5>r.length){var c=new qt(a+8+(n-t<<1));c.set(r),r=c}var h=i.charCodeAt(t);h<128||e?l(h):h<2048?(l(192|h>>6),l(128|h&63)):h>55295&&h<57344?(h=65536+(h&1047552)|i.charCodeAt(++t)&1023,l(240|h>>18),l(128|h>>12&63),l(128|h>>6&63),l(128|h&63)):(l(224|h>>12),l(128|h>>6&63),l(128|h&63))}return za(r,0,a)}function _v(i,e){var t;if(sl)return sl.decode(i);var n=vv(i),r=n.s,t=n.r;return t.length&&Mn(8),r}var al=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Mn(9),e+=n+4}return e},_u=function(i,e,t,n,r,a,l,c){var h=n.length,f=t.extra,p=c&&c.length,g=al(f);un(i,e,l!=null?33639248:67324752),e+=4,l!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(a<0&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var m=new Date(t.mtime==null?Date.now():t.mtime),_=m.getFullYear()-1980;if((_<0||_>119)&&Mn(10),un(i,e,_<<25|m.getMonth()+1<<21|m.getDate()<<16|m.getHours()<<11|m.getMinutes()<<5|m.getSeconds()>>1),e+=4,a!=-1&&(un(i,e,t.crc),un(i,e+4,a<0?-a-2:a),un(i,e+8,t.size)),un(i,e+12,h),un(i,e+14,g),e+=16,l!=null&&(un(i,e,p),un(i,e+6,t.attrs),un(i,e+10,l),e+=14),i.set(n,e),e+=h,g)for(var b in f){var A=f[b],y=A.length;un(i,e,+b),un(i,e+2,y),i.set(A,e+4),e+=4+y}return p&&(i.set(c,e),e+=p),e},xv=function(i,e,t,n,r){un(i,e,101010256),un(i,e+8,t),un(i,e+10,t),un(i,e+12,n),un(i,e+16,r)};function yv(i,e){e||(e={});var t={},n=[];zh(i,"",t,e);var r=0,a=0;for(var l in t){var c=t[l],h=c[0],f=c[1],p=f.level==0?0:8,g=ur(l),m=g.length,_=f.comment,b=_&&ur(_),A=b&&b.length,y=al(f.extra);m>65535&&Mn(11);var x=p?mv(h,f):h,I=x.length,F=hv();F.p(h),n.push(kh(f,{size:h.length,crc:F.d(),c:x,f:g,m:b,u:m!=l.length||b&&_.length!=A,o:r,compression:p})),r+=30+m+y+I,a+=76+2*(m+y)+(A||0)+I}for(var P=new qt(a+22),N=r,R=a-r,k=0;k<n.length;++k){var g=n[k];_u(P,g.o,g,g.f,g.u,g.c.length);var w=30+g.f.length+al(g.extra);P.set(g.c,g.o+w),_u(P,r,g,g.f,g.u,g.c.length,g.o,g.m),r+=16+w+(g.m?g.m.length:0)}return xv(P,r,n.length,R,N),P}const Gh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const Vh=([i,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(e).forEach(r=>{n.setAttribute(r,String(e[r]))}),t?.length&&t.forEach(r=>{const a=Vh(r);n.appendChild(a)}),n},Sv=(i,e={})=>{const n={...Gh,...e};return Vh(["svg",n,i])};const bv=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const Mv=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const Ev=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const wv=i=>{const e=Ev(i);return e.charAt(0).toUpperCase()+e.slice(1)};const Tv=i=>Array.from(i.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),xu=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",yu=(i,{nameAttr:e,icons:t,attrs:n})=>{const r=i.getAttribute(e);if(r==null)return;const a=wv(r),l=t[a];if(!l)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const c=Tv(i),h=bv(c)?{}:{"aria-hidden":"true"},f={...Gh,"data-lucide":r,...h,...n,...c},p=xu(c),g=xu(n),m=Mv("lucide",`lucide-${r}`,...p,...g);m&&Object.assign(f,{class:m});const _=Sv(l,f);return i.parentNode?.replaceChild(_,i)};const Av=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];const Cv=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];const Rv=[["path",{d:"m6 9 6 6 6-6"}]];const Pv=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]];const Dv=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];const Lv=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];const Fv=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];const Iv=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];const Uv=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];const Nv=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const Ov=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];const kv=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const Bv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const zv=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];const Gv=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const Vv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];const Hv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];const Wv=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const Hh=({icons:i={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:r}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(l=>yu(l,{nameAttr:e,icons:i,attrs:t})),r&&Array.from(n.querySelectorAll("template")).forEach(c=>Hh({icons:i,nameAttr:e,attrs:t,root:c.content,inTemplates:r})),e==="data-lucide"){const l=n.querySelectorAll("[icon-name]");l.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(l).forEach(c=>yu(c,{nameAttr:"icon-name",icons:i,attrs:t})))}},$v={eval_every_n_laps:3,blend:[1,1,1,1],al_min:.3,al_max:1},Xv={num_levels:30,t_min:1.5,sigma:1.5,temperature:1,alpha:.8,beta:.15},jv={sigmoid_temperature:2786.9996,sigmoid_offset:-2357.8374},qv={gate_target_s:5,T_p_lb:.5,dL_min:-30,dL_max:10,max_L:95,w1:.5,w2:.5,num_gates_update:6,alpha_fast:4,alpha_slow:1},Yv={min_gate_s:.5},Kv=7,dn={coaching:$v,belief:Xv,l2c:jv,rbf:qv,gate_progress:Yv,gate_timeout:Kv},tc=dn,$i={mia:"MIA",rbf:"RBF",l2c:"AI Coaching"},Or=(i,e,t)=>Math.min(t,Math.max(e,i)),Su=i=>1/(1+Math.exp(-Or((i+dn.l2c.sigmoid_offset)/dn.l2c.sigmoid_temperature,-80,80)));class Jv{constructor(e=12){this.levels=dn.belief.num_levels,this.probabilities=Array.from({length:e},()=>Array.from({length:this.levels},(t,n)=>n===0?.99:.01/(this.levels-1)))}update(e,t){if(!Number.isInteger(e)||!this.probabilities[e]||!Number.isFinite(t)||t<0)throw new Error("Invalid gate observation");const{t_min:n,sigma:r,temperature:a,alpha:l,beta:c}=dn.belief,h=this.probabilities[e],f=h.map((_,b)=>{const A=dn.gate_timeout-(dn.gate_timeout-n)*b/(this.levels-1);return Math.log(Math.max(_,1e-12))-.5*((t-A)/r)**2*a}),p=Math.max(...f),g=f.map(_=>Math.exp(_-p)),m=g.reduce((_,b)=>_+b,0);return this.probabilities[e]=g.map((_,b)=>l*_/m+c*h[b]+(1-l-c)/this.levels),this.probabilities[e]}level(e){const t=this.probabilities[e];return t.indexOf(Math.max(...t))}skill(e){return this.level(e)/(this.levels-1)}}function Zv(i,e,t,n=12){const r=dn.rbf;if(t<r.T_p_lb)return e;if(!Number.isFinite(t)||!Number.isInteger(i)||i<1||e<0||e>1)throw new Error("Invalid fading observation");const a=t-r.gate_target_s*n,l=Or((a<=0?r.alpha_fast:r.alpha_slow)*a,r.dL_min,r.dL_max),c=12+Math.atanh(Or(r.max_L/50-1,-.9999,.9999))/-.165-1,h=i+c,f=50*(Math.tanh(-.165*(h-12))+1),p=Math.max(40*(Math.tanh(-.17*(h-12))+1)-5,0),g=50*(Math.tanh(-.175*(h-14.5))+1);return Or(Or(r.w1*(e*100+l)+r.w2*f,p,g),0,r.max_L)/100}class Qv{constructor(e=12,t=!1){this.gates=e,this.forceAlwaysEval=t,this.active=t,this.recovery=!1,this.recoveryTarget=null,this.coachingLaps=0,this.passed=0}onBoundary(){this.active||(this.coachingLaps++,this.coachingLaps>dn.coaching.eval_every_n_laps&&(this.active=!0,this.passed=0,this.coachingLaps=0))}blend(e){return this.recovery?.95:this.active?dn.coaching.al_min:Or(e,dn.coaching.al_min,dn.coaching.al_max)}onPass(e,t,n){return this.active&&!this.recovery&&t!==null&&t>=dn.gate_progress.min_gate_s&&n.update(e,t),this.recovery&&e===this.recoveryTarget&&(this.recovery=!1,this.recoveryTarget=null),!this.forceAlwaysEval&&this.active&&!this.recovery&&++this.passed>=this.gates?(this.active=!1,this.passed=0,!0):!1}onFailure(e,t){!this.active||this.recovery||(t.update(e,dn.gate_timeout),this.recovery=!0,this.recoveryTarget=e)}}class e_{constructor(e,t=12,n=1){if(!Object.hasOwn($i,e))throw new Error("Invalid HCI method");if(![0,1,2].includes(n))throw new Error("Invalid HCI stage");this.method=e,this.stage=n,this.gates=t,this.belief=new Jv(t),this.evaluation=new Qv(t,n!==1),this.time=0,this.lastPass=null,this.lapStart=null,this.lapNumber=0,this.laps=0,this.lastLap=0,this.passes=0,this.failures=0,this.lapGates=new Set,this.rbfAlpha=dn.rbf.max_L/100,this.rbfUpdates=0,this.beliefUpdates=0}tick(e){this.time+=e}onPass(e){let t=this.lastPass===null?null:this.time-this.lastPass,n=!1;return e!==0&&this.lapStart!==null&&this.lapGates.add(e),e===0&&(this.lapStart===null||this.lapGates.size===this.gates-1)&&(this.lapStart!==null&&(this.lastLap=this.time-this.lapStart,this.laps++,n=!0),this.lapStart=this.time,this.lapGates.clear(),this.lapNumber++,this.evaluation.onBoundary(),t=0),this.evaluation.active&&!this.evaluation.recovery&&t!==null&&t>=dn.gate_progress.min_gate_s&&this.beliefUpdates++,this.evaluation.onPass(e,t,this.belief),this.passes++,this.lastPass=this.time,this.method==="rbf"&&!this.evaluation.active&&this.laps>0&&this.passes>this.gates&&this.passes%dn.rbf.num_gates_update===0&&(this.rbfAlpha=Zv(this.lapNumber,this.rbfAlpha,this.lastLap,this.gates),this.rbfUpdates++),{lapComplete:n,lapSeconds:this.lastLap}}onFailure(e){this.evaluation.active&&!this.evaluation.recovery&&this.beliefUpdates++,this.evaluation.onFailure(e,this.belief),this.failures++,this.lastPass=null}snapshot(e){return{method:this.method,stage:this.stage,phase:this.evaluation.recovery?"recovery":this.evaluation.active?"evaluation":"coaching",time:this.time,lapTime:this.lapStart===null?this.time:this.time-this.lapStart,skillLevel:this.belief.level(e),skill:this.belief.skill(e),beliefUpdates:this.beliefUpdates,rbfAlpha:this.rbfAlpha,rbfUpdates:this.rbfUpdates,laps:this.laps,passes:this.passes,failures:this.failures}}}const kn=(i,e=-1,t=1)=>Math.min(t,Math.max(e,i)),vs=([i,e,t,n])=>[1-2*(t*t+n*n),2*(e*t-i*n),2*(e*n+i*t),2*(e*t+i*n),1-2*(e*e+n*n),2*(t*n-i*e),2*(e*n-i*t),2*(t*n+i*e),1-2*(e*e+t*t)],bu=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]],Mu=(i,e)=>[i[0]*e[0]+i[3]*e[1]+i[6]*e[2],i[1]*e[0]+i[4]*e[1]+i[7]*e[2],i[2]*e[0]+i[5]*e[1]+i[8]*e[2]];class t_{constructor(e){this.source=e,this.metadata=e.metadata}predict(e,t=!0){let n=Float32Array.from(e);if(n.length!==this.source.w0[0].length||!n.every(Number.isFinite))throw new Error("Invalid policy observation");for(let r=0;r<3;r++){const a=this.source[`w${r}`],l=this.source[`b${r}`],c=new Float32Array(a.length);for(let h=0;h<a.length;h++){let f=l[h];for(let p=0;p<n.length;p++)f+=a[h][p]*n[p];c[h]=r<2&&f<0?Math.expm1(f):f}n=c}return Array.from(n,r=>t?kn(r):r)}}class n_{constructor(e,t,n,r){this.mj=e;const a=new e.MjVFS;a.addBuffer("scene.mjb",t),this.model=e.MjModel.from_binary_path("scene.mjb",a),a.delete(),this.data=new e.MjData(this.model),this.contactForce=new e.DoubleBuffer(6);const l=this.model.body("drone");this.bodyId=l.id,l.delete();const c=this.model.geom("drone_collision");this.collisionId=c.id,c.delete(),this.gates=n.gates.map(h=>h.map(Math.fround)),this.policies=Object.fromEntries(Object.entries(r).map(([h,f])=>[h,new t_(f)])),this.weight=this.model.body_mass.reduce((h,f)=>h+f,0)*9.81,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.mode="expert",this.alpha=.8,this.skill=0,this.effectiveAlpha=1,this.coaching=null,this.reset()}get position(){return Array.from(this.data.qpos.subarray(0,3))}get quaternion(){return Array.from(this.data.qpos.subarray(3,7))}setMode(e,t=1){if(Object.hasOwn($i,e)){this.startBaseline(e,t);return}if(!["expert","assisted","manual","coach","tracking"].includes(e))throw new Error("Invalid flight mode");this.mode=e,this.coaching=null}startBaseline(e,t=1){const n=new e_(e,this.gates.length,t);this.mode=e,this.coaching=n,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.effectiveAlpha=e==="rbf"?tc.rbf.max_L/100:1,this.reset(),this.lastAction=this.action()}startFixedAssistance(e){if(!Number.isFinite(e)||e<.3||e>.95)throw new Error("Invalid demonstration blend");this.mode="assisted",this.coaching=null,this.alpha=e,this.effectiveAlpha=e,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.reset(),this.lastAction=this.action()}recover(){this.reset((this.gate+this.gates.length-1)%this.gates.length)}gateCoordinates(e,t=this.gate){const n=this.gates[t],r=e[0]-n[0],a=e[1]-n[1],l=Math.cos(n[5]),c=Math.sin(n[5]);return[l*r+c*a,-c*r+l*a,e[2]-n[2]]}reset(e=0,t=0){const n=this.mj,r=this.data,a=this.gates[e];n.mj_resetData(this.model,r),this.gate=e,r.qpos.set([a[0]+6*Math.cos(a[5]),a[1]+6*Math.sin(a[5]),a[2]],0);let l=a[5]+Math.PI+t;l=((l+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,r.qpos.set([Math.cos(l/2),0,0,Math.sin(l/2)],3),r.qvel.set([200,-200,200,-200],6),this.motors=[0,0,0,0],this.integral=[0,0,0],this.previousOmega=[0,0,0],this.steps=0,this.gatesPassed=0,this.lastGateTime=0,this.crashes=0,this.lapStart=null,n.mj_forward(this.model,r),this.previousPosition=this.position,this.cachedGate=this.gateCoordinates(this.position),this.lastAction=[-1+2/3.15,0,0,0],this.lastHuman=[0,0,0,0]}observation(){const e=this.data.qvel;return Float32Array.from([...e.subarray(3,6),...this.position,...Mu(vs(this.quaternion),e.subarray(0,3)),...this.quaternion,...this.cachedGate,this.gates[this.gate][5]])}controller(e){const t=Array.from(this.data.qvel.subarray(3,6)),n=Mu(vs(this.quaternion),this.data.qvel.subarray(0,3)),r=[250,250,120],a=[500,500,16.7],l=[2.5,2.5,0],c=[33.3,33.3,166.7],h=[16572e-9,16656e-9,29262e-9],f=t.map((P,N)=>{const R=e[N+1]*(N===2?200:100)*Math.PI/180-P;this.integral[N]=kn(this.integral[N]+R/250,-c[N],c[N]);const k=Math.abs(this.previousOmega[N])<1e-4?P:this.previousOmega[N];return h[N]*(r[N]*R+a[N]*this.integral[N]-l[N]*(P-k)*250)});this.previousOmega=t;const p=(e[0]+1)/2*this.weight*3.15,g=.043*Math.sqrt(2)/2,m=78e-11/23e-9,[_,b,A]=[f[0]/g,f[1]/g,f[2]/m],y=[p+_-b+A,p-_-b-A,p-_+b+A,p+_+b-A].map(P=>P/(4*23e-9));for(let P=0;P<4;P++){const N=kn(Math.sign(y[P])*Math.sqrt(Math.abs(y[P])),0,2500);this.motors[P]=kn(this.motors[P]+(N-this.motors[P])*.004/.005,0,2500)}const x=this.motors.map(P=>23e-9*P*P),I=this.motors.reduce((P,N)=>P+N,0),F=n.map((P,N)=>-I*[91785e-11,91785e-11,10311e-10][N]*P);return F[2]+=x.reduce((P,N)=>P+N,0),{force:F,moment:[g*(x[0]-x[1]-x[2]+x[3]),g*(-x[0]-x[1]+x[2]+x[3]),m*(x[0]-x[1]+x[2]-x[3])]}}action(e=[-1+2/3.15,0,0,0]){const t=this.observation(),n=this.policies.expert.predict(t),r=this.lastHuman;if(this.lastHuman=[...e],this.lastController=[...n],this.mode==="expert")return this.effectiveAlpha=1,n;if(this.mode==="manual")return this.effectiveAlpha=0,e.map(l=>kn(l));if(this.mode==="tracking")return this.effectiveAlpha=1,this.policies.tracking.predict([...t,e[1],e[3]]);if(this.coaching){const l=this.mode==="mia"?this.policies.tracking.predict([...t,r[1],r[3]]):n;this.lastController=[...l];let c=this.mode==="rbf"?this.coaching.rbfAlpha:1;return this.mode==="l2c"&&(c=Su(this.policies.coach.predict([...t,this.coaching.belief.skill(this.gate)],!1)[0])),this.effectiveAlpha=this.coaching.evaluation.blend(c),l.map((h,f)=>f===1||f===3?kn(this.effectiveAlpha*h+(1-this.effectiveAlpha)*e[f]):h)}let a=this.alpha;if(this.mode==="coach"){const l=this.policies.coach.predict([...t,this.skill],!1)[0];a=Su(l)}return this.effectiveAlpha=kn(a,.3,1),n.map((l,c)=>c===1||c===3?kn(this.effectiveAlpha*l+(1-this.effectiveAlpha)*e[c]):l)}step(e){if(e.length!==4||!e.every(Number.isFinite))throw new Error("Invalid action");e=Array.from(e,m=>kn(m)),this.lastAction=e;const t=this.data,n=this.mj;for(let m=0;m<5;m++){const{force:_,moment:b}=this.controller(e),A=vs(this.quaternion);t.xfrc_applied.fill(0),t.xfrc_applied.set([...bu(A,_),...bu(A,b)],this.bodyId*6),n.mj_step(this.model,t),n.mj_forward(this.model,t)}this.steps++,this.coaching?.tick(.02);const r=this.steps*.02,a=this.position;this.cachedGate=this.gateCoordinates(a);const l=this.crashes?"Contact":a[2]>6||a[2]<.1&&r>1.5?"Altitude":r-this.lastGateTime>7?"Gate timeout":"",c=this.gateCoordinates(this.previousPosition),h=this.cachedGate,f=h[0]-c[0],p=-c[0]/(f+1e-8),g=f<-1e-6&&Math.hypot(...a.map((m,_)=>m-this.previousPosition[_]))>1e-6&&p>=0&&p<=1&&Math.abs(c[1]+p*(h[1]-c[1]))<=.5&&Math.abs(c[2]+p*(h[2]-c[2]))<=.5;if(g){const m=this.coaching?.onPass(this.gate);this.gate=(this.gate+1)%12,this.totalGates++,this.gatesPassed++,this.lastGateTime=r,m?.lapComplete&&(this.lastLap=m.lapSeconds,this.laps=this.coaching.laps,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap)),!this.coaching&&this.gate===1&&(this.lapStart!==null&&(this.lastLap=r-this.lapStart,this.laps++,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap)),this.lapStart=r)}if(this.previousPosition=a,this.steps>100&&t.ncon){const m=t.contact;for(let _=0;_<t.ncon;_++){const b=m.get(_),A=b.geom1===this.collisionId||b.geom2===this.collisionId;if(b.delete(),A){n.mj_contactForce(this.model,t,_,this.contactForce);const y=this.contactForce.GetView();this.crashes+=Math.hypot(...y.subarray(0,3))>1e-8?1:0;break}}m.delete()}return l&&(this.failures++,this.coaching?.onFailure(this.gate)),{crossed:g,failed:!!l,cause:l}}snapshot(){return{mode:this.mode,steps:this.steps,position:this.position,gates:this.totalGates,target:this.gate,laps:this.laps,failures:this.failures,alpha:this.effectiveAlpha,coaching:this.coaching?.snapshot(this.gate)??null}}dispose(){this.contactForce.delete(),this.data.delete(),this.model.delete()}}const nc="183",i_=0,Eu=1,r_=2,_s=1,s_=2,fs=3,Xi=0,wn=1,Pn=2,Ei=0,Br=1,wu=2,Tu=3,Au=4,a_=5,hr=100,o_=101,l_=102,c_=103,u_=104,h_=200,d_=201,f_=202,p_=203,ol=204,ll=205,m_=206,g_=207,v_=208,__=209,x_=210,y_=211,S_=212,b_=213,M_=214,cl=0,ul=1,hl=2,Hr=3,dl=4,fl=5,pl=6,ml=7,Wh=0,E_=1,w_=2,ui=0,$h=1,Xh=2,jh=3,ic=4,qh=5,Yh=6,Kh=7,Jh=300,_r=301,Wr=302,mo=303,go=304,Ga=306,ws=1e3,bi=1001,gl=1002,fn=1003,T_=1004,aa=1005,xn=1006,vo=1007,pr=1008,Dn=1009,Zh=1010,Qh=1011,Ts=1012,rc=1013,di=1014,si=1015,Ti=1016,sc=1017,ac=1018,As=1020,ed=35902,td=35899,nd=1021,id=1022,qn=1023,Ai=1026,mr=1027,rd=1028,oc=1029,$r=1030,lc=1031,cc=1033,Ra=33776,Pa=33777,Da=33778,La=33779,vl=35840,_l=35841,xl=35842,yl=35843,Sl=36196,bl=37492,Ml=37496,El=37488,wl=37489,Tl=37490,Al=37491,Cl=37808,Rl=37809,Pl=37810,Dl=37811,Ll=37812,Fl=37813,Il=37814,Ul=37815,Nl=37816,Ol=37817,kl=37818,Bl=37819,zl=37820,Gl=37821,Vl=36492,Hl=36494,Wl=36495,$l=36283,Xl=36284,jl=36285,ql=36286,A_=3200,sd=0,C_=1,Vi="",hn="srgb",Xr="srgb-linear",Ia="linear",Lt="srgb",br=7680,Cu=519,R_=512,P_=513,D_=514,uc=515,L_=516,F_=517,hc=518,I_=519,Ru=35044,Pu="300 es",ai=2e3,Cs=2001;function U_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function N_(){const i=Rs("canvas");return i.style.display="block",i}const Du={};function Lu(...i){const e="THREE."+i.shift();console.log(e,...i)}function ad(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=ad(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Et(...i){i=ad(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ua(...i){const e=i.join(" ");e in Du||(Du[e]=!0,nt(...i))}function O_(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const k_={[cl]:ul,[hl]:pl,[dl]:ml,[Hr]:fl,[ul]:cl,[pl]:hl,[ml]:dl,[fl]:Hr};class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,Na=180/Math.PI;function Fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function B_(i,e){return(i%e+e)%e}function xo(i,e,t){return(1-t)*i+t*e}function ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let h=n[r+0],f=n[r+1],p=n[r+2],g=n[r+3],m=a[l+0],_=a[l+1],b=a[l+2],A=a[l+3];if(g!==A||h!==m||f!==_||p!==b){let y=h*m+f*_+p*b+g*A;y<0&&(m=-m,_=-_,b=-b,A=-A,y=-y);let x=1-c;if(y<.9995){const I=Math.acos(y),F=Math.sin(I);x=Math.sin(x*I)/F,c=Math.sin(c*I)/F,h=h*x+m*c,f=f*x+_*c,p=p*x+b*c,g=g*x+A*c}else{h=h*x+m*c,f=f*x+_*c,p=p*x+b*c,g=g*x+A*c;const I=1/Math.sqrt(h*h+f*f+p*p+g*g);h*=I,f*=I,p*=I,g*=I}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],h=n[r+1],f=n[r+2],p=n[r+3],g=a[l],m=a[l+1],_=a[l+2],b=a[l+3];return e[t]=c*b+p*g+h*_-f*m,e[t+1]=h*b+p*m+f*g-c*_,e[t+2]=f*b+p*_+c*m-h*g,e[t+3]=p*b-c*g-h*m-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,h=Math.sin,f=c(n/2),p=c(r/2),g=c(a/2),m=h(n/2),_=h(r/2),b=h(a/2);switch(l){case"XYZ":this._x=m*p*g+f*_*b,this._y=f*_*g-m*p*b,this._z=f*p*b+m*_*g,this._w=f*p*g-m*_*b;break;case"YXZ":this._x=m*p*g+f*_*b,this._y=f*_*g-m*p*b,this._z=f*p*b-m*_*g,this._w=f*p*g+m*_*b;break;case"ZXY":this._x=m*p*g-f*_*b,this._y=f*_*g+m*p*b,this._z=f*p*b+m*_*g,this._w=f*p*g-m*_*b;break;case"ZYX":this._x=m*p*g-f*_*b,this._y=f*_*g+m*p*b,this._z=f*p*b-m*_*g,this._w=f*p*g+m*_*b;break;case"YZX":this._x=m*p*g+f*_*b,this._y=f*_*g+m*p*b,this._z=f*p*b-m*_*g,this._w=f*p*g-m*_*b;break;case"XZY":this._x=m*p*g-f*_*b,this._y=f*_*g-m*p*b,this._z=f*p*b+m*_*g,this._w=f*p*g+m*_*b;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],h=t[9],f=t[2],p=t[6],g=t[10],m=n+c+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-h)*_,this._y=(a-f)*_,this._z=(l-r)*_}else if(n>c&&n>g){const _=2*Math.sqrt(1+n-c-g);this._w=(p-h)/_,this._x=.25*_,this._y=(r+l)/_,this._z=(a+f)/_}else if(c>g){const _=2*Math.sqrt(1+c-n-g);this._w=(a-f)/_,this._x=(r+l)/_,this._y=.25*_,this._z=(h+p)/_}else{const _=2*Math.sqrt(1+g-n-c);this._w=(l-r)/_,this._x=(a+f)/_,this._y=(h+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,h=t._y,f=t._z,p=t._w;return this._x=n*p+l*c+r*f-a*h,this._y=r*p+l*h+a*c-n*f,this._z=a*p+l*f+n*h-r*c,this._w=l*p-n*c-r*h-a*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let h=1-t;if(c<.9995){const f=Math.acos(c),p=Math.sin(f);h=Math.sin(h*f)/p,t=Math.sin(t*f)/p,this._x=this._x*h+n*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+l*t,this._onChangeCallback()}else this._x=this._x*h+n*t,this._y=this._y*h+r*t,this._z=this._z*h+a*t,this._w=this._w*h+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,h=e.w,f=2*(l*r-c*n),p=2*(c*t-a*r),g=2*(a*n-l*t);return this.x=t+h*f+l*g-c*p,this.y=n+h*p+c*f-a*g,this.z=r+h*g+a*p-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,h=t.z;return this.x=r*h-a*c,this.y=a*l-n*h,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new W,Fu=new oi;class lt{constructor(e,t,n,r,a,l,c,h,f){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,h,f)}set(e,t,n,r,a,l,c,h,f){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=h,p[6]=n,p[7]=l,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],h=n[6],f=n[1],p=n[4],g=n[7],m=n[2],_=n[5],b=n[8],A=r[0],y=r[3],x=r[6],I=r[1],F=r[4],P=r[7],N=r[2],R=r[5],k=r[8];return a[0]=l*A+c*I+h*N,a[3]=l*y+c*F+h*R,a[6]=l*x+c*P+h*k,a[1]=f*A+p*I+g*N,a[4]=f*y+p*F+g*R,a[7]=f*x+p*P+g*k,a[2]=m*A+_*I+b*N,a[5]=m*y+_*F+b*R,a[8]=m*x+_*P+b*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],p=e[8];return t*l*p-t*c*f-n*a*p+n*c*h+r*a*f-r*l*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],p=e[8],g=p*l-c*f,m=c*h-p*a,_=f*a-l*h,b=t*g+n*m+r*_;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(r*f-p*n)*A,e[2]=(c*n-r*l)*A,e[3]=m*A,e[4]=(p*t-r*h)*A,e[5]=(r*a-c*t)*A,e[6]=_*A,e[7]=(n*h-f*t)*A,e[8]=(l*t-n*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*l+f*c)+l+e,-r*f,r*h,-r*(-f*l+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new lt,Iu=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uu=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z_(){const i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Lt&&(r.r=wi(r.r),r.g=wi(r.g),r.b=wi(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Lt&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vi?Ia:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:Iu,fromXYZ:Uu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:Iu,fromXYZ:Uu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const wt=z_();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mr;class G_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=Rs("canvas")),Mr.width=e.width,Mr.height=e.height;const r=Mr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=wi(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V_=0;class dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(bo(r[l].image)):a.push(bo(r[l]))}else a=bo(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?G_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let H_=0;const Mo=new W;class pn extends Yr{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=bi,r=bi,a=xn,l=pr,c=qn,h=Dn,f=pn.DEFAULT_ANISOTROPY,p=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Fs(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Jh;pn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const h=e.elements,f=h[0],p=h[4],g=h[8],m=h[1],_=h[5],b=h[9],A=h[2],y=h[6],x=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+A)<.1&&Math.abs(b+y)<.1&&Math.abs(f+_+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(f+1)/2,P=(_+1)/2,N=(x+1)/2,R=(p+m)/4,k=(g+A)/4,w=(b+y)/4;return F>P&&F>N?F<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(F),r=R/n,a=k/n):P>N?P<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(P),n=R/r,a=w/r):N<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(N),n=k/a,r=w/a),this.set(n,r,a,t),this}let I=Math.sqrt((y-b)*(y-b)+(g-A)*(g-A)+(m-p)*(m-p));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(g-A)/I,this.z=(m-p)/I,this.w=Math.acos((f+_+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends Yr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new pn(r),l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends W_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class od extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends pn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nt{constructor(e,t,n,r,a,l,c,h,f,p,g,m,_,b,A,y){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,h,f,p,g,m,_,b,A,y)}set(e,t,n,r,a,l,c,h,f,p,g,m,_,b,A,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=a,x[5]=l,x[9]=c,x[13]=h,x[2]=f,x[6]=p,x[10]=g,x[14]=m,x[3]=_,x[7]=b,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),a=1/Er.setFromMatrixColumn(e,1).length(),l=1/Er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const m=l*p,_=l*g,b=c*p,A=c*g;t[0]=h*p,t[4]=-h*g,t[8]=f,t[1]=_+b*f,t[5]=m-A*f,t[9]=-c*h,t[2]=A-m*f,t[6]=b+_*f,t[10]=l*h}else if(e.order==="YXZ"){const m=h*p,_=h*g,b=f*p,A=f*g;t[0]=m+A*c,t[4]=b*c-_,t[8]=l*f,t[1]=l*g,t[5]=l*p,t[9]=-c,t[2]=_*c-b,t[6]=A+m*c,t[10]=l*h}else if(e.order==="ZXY"){const m=h*p,_=h*g,b=f*p,A=f*g;t[0]=m-A*c,t[4]=-l*g,t[8]=b+_*c,t[1]=_+b*c,t[5]=l*p,t[9]=A-m*c,t[2]=-l*f,t[6]=c,t[10]=l*h}else if(e.order==="ZYX"){const m=l*p,_=l*g,b=c*p,A=c*g;t[0]=h*p,t[4]=b*f-_,t[8]=m*f+A,t[1]=h*g,t[5]=A*f+m,t[9]=_*f-b,t[2]=-f,t[6]=c*h,t[10]=l*h}else if(e.order==="YZX"){const m=l*h,_=l*f,b=c*h,A=c*f;t[0]=h*p,t[4]=A-m*g,t[8]=b*g+_,t[1]=g,t[5]=l*p,t[9]=-c*p,t[2]=-f*p,t[6]=_*g+b,t[10]=m-A*g}else if(e.order==="XZY"){const m=l*h,_=l*f,b=c*h,A=c*f;t[0]=h*p,t[4]=-g,t[8]=f*p,t[1]=m*g+A,t[5]=l*p,t[9]=_*g-b,t[2]=b*g-_,t[6]=c*p,t[10]=A*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X_,e,j_)}lookAt(e,t,n){const r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Ni.crossVectors(n,An),Ni.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ni.crossVectors(n,An)),Ni.normalize(),oa.crossVectors(An,Ni),r[0]=Ni.x,r[4]=oa.x,r[8]=An.x,r[1]=Ni.y,r[5]=oa.y,r[9]=An.y,r[2]=Ni.z,r[6]=oa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],h=n[8],f=n[12],p=n[1],g=n[5],m=n[9],_=n[13],b=n[2],A=n[6],y=n[10],x=n[14],I=n[3],F=n[7],P=n[11],N=n[15],R=r[0],k=r[4],w=r[8],L=r[12],B=r[1],z=r[5],q=r[9],ee=r[13],K=r[2],te=r[6],Q=r[10],J=r[14],ve=r[3],me=r[7],De=r[11],Pe=r[15];return a[0]=l*R+c*B+h*K+f*ve,a[4]=l*k+c*z+h*te+f*me,a[8]=l*w+c*q+h*Q+f*De,a[12]=l*L+c*ee+h*J+f*Pe,a[1]=p*R+g*B+m*K+_*ve,a[5]=p*k+g*z+m*te+_*me,a[9]=p*w+g*q+m*Q+_*De,a[13]=p*L+g*ee+m*J+_*Pe,a[2]=b*R+A*B+y*K+x*ve,a[6]=b*k+A*z+y*te+x*me,a[10]=b*w+A*q+y*Q+x*De,a[14]=b*L+A*ee+y*J+x*Pe,a[3]=I*R+F*B+P*K+N*ve,a[7]=I*k+F*z+P*te+N*me,a[11]=I*w+F*q+P*Q+N*De,a[15]=I*L+F*ee+P*J+N*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],h=e[9],f=e[13],p=e[2],g=e[6],m=e[10],_=e[14],b=e[3],A=e[7],y=e[11],x=e[15],I=h*_-f*m,F=c*_-f*g,P=c*m-h*g,N=l*_-f*p,R=l*m-h*p,k=l*g-c*p;return t*(A*I-y*F+x*P)-n*(b*I-y*N+x*R)+r*(b*F-A*N+x*k)-a*(b*P-A*R+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],h=e[6],f=e[7],p=e[8],g=e[9],m=e[10],_=e[11],b=e[12],A=e[13],y=e[14],x=e[15],I=t*c-n*l,F=t*h-r*l,P=t*f-a*l,N=n*h-r*c,R=n*f-a*c,k=r*f-a*h,w=p*A-g*b,L=p*y-m*b,B=p*x-_*b,z=g*y-m*A,q=g*x-_*A,ee=m*x-_*y,K=I*ee-F*q+P*z+N*B-R*L+k*w;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/K;return e[0]=(c*ee-h*q+f*z)*te,e[1]=(r*q-n*ee-a*z)*te,e[2]=(A*k-y*R+x*N)*te,e[3]=(m*R-g*k-_*N)*te,e[4]=(h*B-l*ee-f*L)*te,e[5]=(t*ee-r*B+a*L)*te,e[6]=(y*P-b*k-x*F)*te,e[7]=(p*k-m*P+_*F)*te,e[8]=(l*q-c*B+f*w)*te,e[9]=(n*B-t*q-a*w)*te,e[10]=(b*R-A*P+x*I)*te,e[11]=(g*P-p*R-_*I)*te,e[12]=(c*L-l*z-h*w)*te,e[13]=(t*z-n*L+r*w)*te,e[14]=(A*F-b*N-y*I)*te,e[15]=(p*N-g*F+m*I)*te,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,h=e.z,f=a*l,p=a*c;return this.set(f*l+n,f*c-r*h,f*h+r*c,0,f*c+r*h,p*c+n,p*h-r*l,0,f*h-r*c,p*h+r*l,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,h=t._w,f=a+a,p=l+l,g=c+c,m=a*f,_=a*p,b=a*g,A=l*p,y=l*g,x=c*g,I=h*f,F=h*p,P=h*g,N=n.x,R=n.y,k=n.z;return r[0]=(1-(A+x))*N,r[1]=(_+P)*N,r[2]=(b-F)*N,r[3]=0,r[4]=(_-P)*R,r[5]=(1-(m+x))*R,r[6]=(y+I)*R,r[7]=0,r[8]=(b+F)*k,r[9]=(y-I)*k,r[10]=(1-(m+A))*k,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let l=Er.set(r[0],r[1],r[2]).length();const c=Er.set(r[4],r[5],r[6]).length(),h=Er.set(r[8],r[9],r[10]).length();a<0&&(l=-l),Wn.copy(this);const f=1/l,p=1/c,g=1/h;return Wn.elements[0]*=f,Wn.elements[1]*=f,Wn.elements[2]*=f,Wn.elements[4]*=p,Wn.elements[5]*=p,Wn.elements[6]*=p,Wn.elements[8]*=g,Wn.elements[9]*=g,Wn.elements[10]*=g,t.setFromRotationMatrix(Wn),n.x=l,n.y=c,n.z=h,this}makePerspective(e,t,n,r,a,l,c=ai,h=!1){const f=this.elements,p=2*a/(t-e),g=2*a/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r);let b,A;if(h)b=a/(l-a),A=l*a/(l-a);else if(c===ai)b=-(l+a)/(l-a),A=-2*l*a/(l-a);else if(c===Cs)b=-l/(l-a),A=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=A,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=ai,h=!1){const f=this.elements,p=2/(t-e),g=2/(n-r),m=-(t+e)/(t-e),_=-(n+r)/(n-r);let b,A;if(h)b=1/(l-a),A=l/(l-a);else if(c===ai)b=-2/(l-a),A=-(l+a)/(l-a);else if(c===Cs)b=-1/(l-a),A=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=_,f[2]=0,f[6]=0,f[10]=b,f[14]=A,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Er=new W,Wn=new Nt,X_=new W(0,0,0),j_=new W(1,1,1),Ni=new W,oa=new W,An=new W,Nu=new Nt,Ou=new oi;class fi{constructor(e=0,t=0,n=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],h=r[1],f=r[5],p=r[9],g=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q_=0;const ku=new W,wr=new oi,vi=new Nt,la=new W,as=new W,Y_=new W,K_=new oi,Bu=new W(1,0,0),zu=new W(0,1,0),Gu=new W(0,0,1),Vu={type:"added"},J_={type:"removed"},Tr={type:"childadded",child:null},Eo={type:"childremoved",child:null};class rn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new W,t=new fi,n=new oi,r=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new lt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Bu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return ku.copy(e).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(as,la,this.up):vi.lookAt(la,as,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(vi),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J_),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const g=h[f];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,f=this.material.length;h<f;h++)c.push(a(e.materials,this.material[h]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];r.animations.push(a(e.animations,h))}}if(t){const c=l(e.geometries),h=l(e.materials),f=l(e.textures),p=l(e.images),g=l(e.shapes),m=l(e.skeletons),_=l(e.animations),b=l(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(c){const h=[];for(const f in c){const p=c[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class li extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z_={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,n),x=this._getHandJoint(f,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),_=.02,b=.005;f.inputState.pinching&&m>_+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=_-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Z_)))}return c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function To(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=wt.workingColorSpace){if(e=B_(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=To(l,a,e+1/3),this.g=To(l,a,e),this.b=To(l,a,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,t=hn){function n(a){a!==void 0&&parseFloat(a)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return wt.workingToColorSpace(_n.copy(this),e),Math.round(mt(_n.r*255,0,255))*65536+Math.round(mt(_n.g*255,0,255))*256+Math.round(mt(_n.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(_n.copy(this),t);const n=_n.r,r=_n.g,a=_n.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let h,f;const p=(c+l)/2;if(c===l)h=0,f=0;else{const g=l-c;switch(f=p<=.5?g/(l+c):g/(2-l-c),l){case n:h=(r-a)/g+(r<a?6:0);break;case r:h=(a-n)/g+2;break;case a:h=(n-r)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=hn){wt.workingToColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,r=_n.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(ca);const n=xo(Oi.h,ca.h,t),r=xo(Oi.s,ca.s,t),a=xo(Oi.l,ca.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new ct;ct.NAMES=ld;class Q_ extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $n=new W,_i=new W,Ao=new W,xi=new W,Ar=new W,Cr=new W,Hu=new W,Co=new W,Ro=new W,Po=new W,Do=new Xt,Lo=new Xt,Fo=new Xt;class jn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$n.subVectors(e,t),r.cross($n);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){$n.subVectors(r,t),_i.subVectors(n,t),Ao.subVectors(e,t);const l=$n.dot($n),c=$n.dot(_i),h=$n.dot(Ao),f=_i.dot(_i),p=_i.dot(Ao),g=l*f-c*c;if(g===0)return a.set(0,0,0),null;const m=1/g,_=(f*h-c*p)*m,b=(l*p-c*h)*m;return a.set(1-_-b,b,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,r,a,l,c,h){return this.getBarycoord(e,t,n,r,xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,xi.x),h.addScaledVector(l,xi.y),h.addScaledVector(c,xi.z),h)}static getInterpolatedAttribute(e,t,n,r,a,l){return Do.setScalar(0),Lo.setScalar(0),Fo.setScalar(0),Do.fromBufferAttribute(e,t),Lo.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(Do,a.x),l.addScaledVector(Lo,a.y),l.addScaledVector(Fo,a.z),l}static isFrontFacing(e,t,n,r){return $n.subVectors(n,t),_i.subVectors(e,t),$n.cross(_i).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),$n.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;Ar.subVectors(r,n),Cr.subVectors(a,n),Co.subVectors(e,n);const h=Ar.dot(Co),f=Cr.dot(Co);if(h<=0&&f<=0)return t.copy(n);Ro.subVectors(e,r);const p=Ar.dot(Ro),g=Cr.dot(Ro);if(p>=0&&g<=p)return t.copy(r);const m=h*g-p*f;if(m<=0&&h>=0&&p<=0)return l=h/(h-p),t.copy(n).addScaledVector(Ar,l);Po.subVectors(e,a);const _=Ar.dot(Po),b=Cr.dot(Po);if(b>=0&&_<=b)return t.copy(a);const A=_*f-h*b;if(A<=0&&f>=0&&b<=0)return c=f/(f-b),t.copy(n).addScaledVector(Cr,c);const y=p*b-_*g;if(y<=0&&g-p>=0&&_-b>=0)return Hu.subVectors(a,r),c=(g-p)/(g-p+(_-b)),t.copy(r).addScaledVector(Hu,c);const x=1/(y+A+m);return l=A*x,c=m*x,t.copy(n).addScaledVector(Ar,l).addScaledVector(Cr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ji{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Xn):Xn.fromBufferAttribute(a,l),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),ha.subVectors(this.max,os),Rr.subVectors(e.a,os),Pr.subVectors(e.b,os),Dr.subVectors(e.c,os),ki.subVectors(Pr,Rr),Bi.subVectors(Dr,Pr),ir.subVectors(Rr,Dr);let t=[0,-ki.z,ki.y,0,-Bi.z,Bi.y,0,-ir.z,ir.y,ki.z,0,-ki.x,Bi.z,0,-Bi.x,ir.z,0,-ir.x,-ki.y,ki.x,0,-Bi.y,Bi.x,0,-ir.y,ir.x,0];return!Io(t,Rr,Pr,Dr,ha)||(t=[1,0,0,0,1,0,0,0,1],!Io(t,Rr,Pr,Dr,ha))?!1:(da.crossVectors(ki,Bi),t=[da.x,da.y,da.z],Io(t,Rr,Pr,Dr,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,ua=new ji,Rr=new W,Pr=new W,Dr=new W,ki=new W,Bi=new W,ir=new W,os=new W,ha=new W,da=new W,rr=new W;function Io(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){rr.fromArray(i,a);const c=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),h=e.dot(rr),f=t.dot(rr),p=n.dot(rr);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>c)return!1}return!0}const Kt=new W,fa=new Qe;let ex=0;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ex++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ru,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),r=En(r,this.array),a=En(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ru&&(e.usage=this.usage),e}}class cd extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ud extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const tx=new ji,ls=new W,Uo=new W;class pc{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tx.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ls,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Uo)),this.expandByPoint(ls.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nx=0;const On=new Nt,No=new rn,Lr=new W,Cn=new ji,cs=new ji,on=new W;class yn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?ud:cd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new lt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Cn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];cs.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(Cn.min,cs.min),Cn.expandByPoint(on),on.addVectors(Cn.max,cs.max),Cn.expandByPoint(on)):(Cn.expandByPoint(cs.min),Cn.expandByPoint(cs.max))}Cn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)on.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(on));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],h=this.morphTargetsRelative;for(let f=0,p=c.count;f<p;f++)on.fromBufferAttribute(c,f),h&&(Lr.fromBufferAttribute(e,f),on.add(Lr)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let w=0;w<n.count;w++)c[w]=new W,h[w]=new W;const f=new W,p=new W,g=new W,m=new Qe,_=new Qe,b=new Qe,A=new W,y=new W;function x(w,L,B){f.fromBufferAttribute(n,w),p.fromBufferAttribute(n,L),g.fromBufferAttribute(n,B),m.fromBufferAttribute(a,w),_.fromBufferAttribute(a,L),b.fromBufferAttribute(a,B),p.sub(f),g.sub(f),_.sub(m),b.sub(m);const z=1/(_.x*b.y-b.x*_.y);isFinite(z)&&(A.copy(p).multiplyScalar(b.y).addScaledVector(g,-_.y).multiplyScalar(z),y.copy(g).multiplyScalar(_.x).addScaledVector(p,-b.x).multiplyScalar(z),c[w].add(A),c[L].add(A),c[B].add(A),h[w].add(y),h[L].add(y),h[B].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let w=0,L=I.length;w<L;++w){const B=I[w],z=B.start,q=B.count;for(let ee=z,K=z+q;ee<K;ee+=3)x(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const F=new W,P=new W,N=new W,R=new W;function k(w){N.fromBufferAttribute(r,w),R.copy(N);const L=c[w];F.copy(L),F.sub(N.multiplyScalar(N.dot(L))).normalize(),P.crossVectors(R,L);const z=P.dot(h[w])<0?-1:1;l.setXYZW(w,F.x,F.y,F.z,z)}for(let w=0,L=I.length;w<L;++w){const B=I[w],z=B.start,q=B.count;for(let ee=z,K=z+q;ee<K;ee+=3)k(e.getX(ee+0)),k(e.getX(ee+1)),k(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new W,a=new W,l=new W,c=new W,h=new W,f=new W,p=new W,g=new W;if(e)for(let m=0,_=e.count;m<_;m+=3){const b=e.getX(m+0),A=e.getX(m+1),y=e.getX(m+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,A),l.fromBufferAttribute(t,y),p.subVectors(l,a),g.subVectors(r,a),p.cross(g),c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,y),c.add(p),h.add(p),f.add(p),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(A,h.x,h.y,h.z),n.setXYZ(y,f.x,f.y,f.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),l.fromBufferAttribute(t,m+2),p.subVectors(l,a),g.subVectors(r,a),p.cross(g),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(c,h){const f=c.array,p=c.itemSize,g=c.normalized,m=new f.constructor(h.length*p);let _=0,b=0;for(let A=0,y=h.length;A<y;A++){c.isInterleavedBufferAttribute?_=h[A]*c.data.stride+c.offset:_=h[A]*p;for(let x=0;x<p;x++)m[b++]=f[_++]}return new Bn(m,p,g)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,n=this.index.array,r=this.attributes;for(const c in r){const h=r[c],f=e(h,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const h=[],f=a[c];for(let p=0,g=f.length;p<g;p++){const m=f[p],_=e(m,n);h.push(_)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const f=l[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const r={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let g=0,m=f.length;g<m;g++){const _=f[g];p.push(_.toJSON(e.data))}p.length>0&&(r[h]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const f in r){const p=r[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],g=a[f];for(let m=0,_=g.length;m<_;m++)p.push(g[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,p=l.length;f<p;f++){const g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ix=0;class Is extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=Br,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ol&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new W,Oo=new W,pa=new W,zi=new W,ko=new W,ma=new W,Bo=new W;class hd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Oo.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Oo);const a=e.distanceTo(t)*.5,l=-this.direction.dot(pa),c=zi.dot(this.direction),h=-zi.dot(pa),f=zi.lengthSq(),p=Math.abs(1-l*l);let g,m,_,b;if(p>0)if(g=l*h-c,m=l*c-h,b=a*p,g>=0)if(m>=-b)if(m<=b){const A=1/p;g*=A,m*=A,_=g*(g+l*m+2*c)+m*(l*g+m+2*h)+f}else m=a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*h)+f;else m=-a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*h)+f;else m<=-b?(g=Math.max(0,-(-l*a+c)),m=g>0?-a:Math.min(Math.max(-a,-h),a),_=-g*g+m*(m+2*h)+f):m<=b?(g=0,m=Math.min(Math.max(-a,-h),a),_=m*(m+2*h)+f):(g=Math.max(0,-(l*a+c)),m=g>0?a:Math.min(Math.max(-a,-h),a),_=-g*g+m*(m+2*h)+f);else m=l>0?-a:a,g=Math.max(0,-(l*m+c)),_=-g*g+m*(m+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Oo).addScaledVector(pa,m),_}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),r=Si.dot(Si)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,h=n+l;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,h;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),p>=0?(a=(e.min.y-m.y)*p,l=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,l=(e.min.y-m.y)*p),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),g>=0?(c=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(c=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),n>h||c>r)||((c>n||n!==n)&&(n=c),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,r,a){ko.subVectors(t,e),ma.subVectors(n,e),Bo.crossVectors(ko,ma);let l=this.direction.dot(Bo),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;zi.subVectors(this.origin,e);const h=c*this.direction.dot(ma.crossVectors(zi,ma));if(h<0)return null;const f=c*this.direction.dot(ko.cross(zi));if(f<0||h+f>l)return null;const p=-c*zi.dot(Bo);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ps extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wu=new Nt,sr=new hd,ga=new pc,$u=new W,va=new W,_a=new W,xa=new W,zo=new W,ya=new W,Xu=new W,Sa=new W;class ln extends rn{constructor(e=new yn,t=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){ya.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const p=c[h],g=a[h];p!==0&&(zo.fromBufferAttribute(g,e),l?ya.addScaledVector(zo,p):ya.addScaledVector(zo.sub(t),p))}t.add(ya)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(a),sr.copy(e.ray).recast(e.near),!(ga.containsPoint(sr.origin)===!1&&(sr.intersectSphere(ga,$u)===null||sr.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(Wu.copy(a).invert(),sr.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,h=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,m=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(l))for(let b=0,A=m.length;b<A;b++){const y=m[b],x=l[y.materialIndex],I=Math.max(y.start,_.start),F=Math.min(c.count,Math.min(y.start+y.count,_.start+_.count));for(let P=I,N=F;P<N;P+=3){const R=c.getX(P),k=c.getX(P+1),w=c.getX(P+2);r=ba(this,x,e,n,f,p,g,R,k,w),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const b=Math.max(0,_.start),A=Math.min(c.count,_.start+_.count);for(let y=b,x=A;y<x;y+=3){const I=c.getX(y),F=c.getX(y+1),P=c.getX(y+2);r=ba(this,l,e,n,f,p,g,I,F,P),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let b=0,A=m.length;b<A;b++){const y=m[b],x=l[y.materialIndex],I=Math.max(y.start,_.start),F=Math.min(h.count,Math.min(y.start+y.count,_.start+_.count));for(let P=I,N=F;P<N;P+=3){const R=P,k=P+1,w=P+2;r=ba(this,x,e,n,f,p,g,R,k,w),r&&(r.faceIndex=Math.floor(P/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const b=Math.max(0,_.start),A=Math.min(h.count,_.start+_.count);for(let y=b,x=A;y<x;y+=3){const I=y,F=y+1,P=y+2;r=ba(this,l,e,n,f,p,g,I,F,P),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function rx(i,e,t,n,r,a,l,c){let h;if(e.side===wn?h=n.intersectTriangle(l,a,r,!0,c):h=n.intersectTriangle(r,a,l,e.side===Xi,c),h===null)return null;Sa.copy(c),Sa.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Sa);return f<t.near||f>t.far?null:{distance:f,point:Sa.clone(),object:i}}function ba(i,e,t,n,r,a,l,c,h,f){i.getVertexPosition(c,va),i.getVertexPosition(h,_a),i.getVertexPosition(f,xa);const p=rx(i,e,t,n,va,_a,xa,Xu);if(p){const g=new W;jn.getBarycoord(Xu,va,_a,xa,g),r&&(p.uv=jn.getInterpolatedAttribute(r,c,h,f,g,new Qe)),a&&(p.uv1=jn.getInterpolatedAttribute(a,c,h,f,g,new Qe)),l&&(p.normal=jn.getInterpolatedAttribute(l,c,h,f,g,new W),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:h,c:f,normal:new W,materialIndex:0};jn.getNormal(va,_a,xa,m.normal),p.face=m,p.barycoord=g}return p}class sx extends pn{constructor(e=null,t=1,n=1,r,a,l,c,h,f=fn,p=fn,g,m){super(null,l,c,h,f,p,r,a,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Go=new W,ax=new W,ox=new lt;class cr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Go.subVectors(n,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Go),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ox.getNormalMatrix(e),r=this.coplanarPoint(Go).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new pc,lx=new Qe(.5,.5),Ma=new W;class mc{constructor(e=new cr,t=new cr,n=new cr,r=new cr,a=new cr,l=new cr){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){const r=this.planes,a=e.elements,l=a[0],c=a[1],h=a[2],f=a[3],p=a[4],g=a[5],m=a[6],_=a[7],b=a[8],A=a[9],y=a[10],x=a[11],I=a[12],F=a[13],P=a[14],N=a[15];if(r[0].setComponents(f-l,_-p,x-b,N-I).normalize(),r[1].setComponents(f+l,_+p,x+b,N+I).normalize(),r[2].setComponents(f+c,_+g,x+A,N+F).normalize(),r[3].setComponents(f-c,_-g,x-A,N-F).normalize(),n)r[4].setComponents(h,m,y,P).normalize(),r[5].setComponents(f-h,_-m,x-y,N-P).normalize();else if(r[4].setComponents(f-h,_-m,x-y,N-P).normalize(),t===ai)r[5].setComponents(f+h,_+m,x+y,N+P).normalize();else if(t===Cs)r[5].setComponents(h,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);const t=lx.distanceTo(e.center);return ar.radius=.7071067811865476+t,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ma.x=r.normal.x>0?e.max.x:e.min.x,Ma.y=r.normal.y>0?e.max.y:e.min.y,Ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dd extends pn{constructor(e=[],t=_r,n,r,a,l,c,h,f,p){super(e,t,n,r,a,l,c,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ju extends pn{constructor(e,t,n,r,a,l,c,h,f){super(e,t,n,r,a,l,c,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ds extends pn{constructor(e,t,n=di,r,a,l,c=fn,h=fn,f,p=Ai,g=1){if(p!==Ai&&p!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,r,a,l,c,h,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cx extends Ds{constructor(e,t=di,n=_r,r,a,l=fn,c=fn,h,f=Ai){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,r,a,l,c,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fd extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ci extends yn{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const h=[],f=[],p=[],g=[];let m=0,_=0;b("z","y","x",-1,-1,n,t,e,l,a,0),b("z","y","x",1,-1,n,t,-e,l,a,1),b("x","z","y",1,1,e,n,t,r,l,2),b("x","z","y",1,-1,e,n,-t,r,l,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(h),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(g,2));function b(A,y,x,I,F,P,N,R,k,w,L){const B=P/k,z=N/w,q=P/2,ee=N/2,K=R/2,te=k+1,Q=w+1;let J=0,ve=0;const me=new W;for(let De=0;De<Q;De++){const Pe=De*z-ee;for(let Re=0;Re<te;Re++){const He=Re*B-q;me[A]=He*I,me[y]=Pe*F,me[x]=K,f.push(me.x,me.y,me.z),me[A]=0,me[y]=0,me[x]=R>0?1:-1,p.push(me.x,me.y,me.z),g.push(Re/k),g.push(1-De/w),J+=1}}for(let De=0;De<w;De++)for(let Pe=0;Pe<k;Pe++){const Re=m+Pe+te*De,He=m+Pe+te*(De+1),je=m+(Pe+1)+te*(De+1),Ve=m+(Pe+1)+te*De;h.push(Re,He,Ve),h.push(He,je,Ve),ve+=6}c.addGroup(_,ve,L),_+=ve,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jr extends yn{constructor(e=1,t=1,n=1,r=32,a=1,l=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:c,thetaLength:h};const f=this;r=Math.floor(r),a=Math.floor(a);const p=[],g=[],m=[],_=[];let b=0;const A=[],y=n/2;let x=0;I(),l===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(p),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(_,2));function I(){const P=new W,N=new W;let R=0;const k=(t-e)/n;for(let w=0;w<=a;w++){const L=[],B=w/a,z=B*(t-e)+e;for(let q=0;q<=r;q++){const ee=q/r,K=ee*h+c,te=Math.sin(K),Q=Math.cos(K);N.x=z*te,N.y=-B*n+y,N.z=z*Q,g.push(N.x,N.y,N.z),P.set(te,k,Q).normalize(),m.push(P.x,P.y,P.z),_.push(ee,1-B),L.push(b++)}A.push(L)}for(let w=0;w<r;w++)for(let L=0;L<a;L++){const B=A[L][w],z=A[L+1][w],q=A[L+1][w+1],ee=A[L][w+1];(e>0||L!==0)&&(p.push(B,z,ee),R+=3),(t>0||L!==a-1)&&(p.push(z,q,ee),R+=3)}f.addGroup(x,R,0),x+=R}function F(P){const N=b,R=new Qe,k=new W;let w=0;const L=P===!0?e:t,B=P===!0?1:-1;for(let q=1;q<=r;q++)g.push(0,y*B,0),m.push(0,B,0),_.push(.5,.5),b++;const z=b;for(let q=0;q<=r;q++){const K=q/r*h+c,te=Math.cos(K),Q=Math.sin(K);k.x=L*Q,k.y=y*B,k.z=L*te,g.push(k.x,k.y,k.z),m.push(0,B,0),R.x=te*.5+.5,R.y=Q*.5*B+.5,_.push(R.x,R.y),b++}for(let q=0;q<r;q++){const ee=N+q,K=z+q;P===!0?p.push(K,K+1,ee):p.push(K+1,K,ee),w+=3}f.addGroup(x,w,P===!0?1:2),x+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const a=n.length;let l;t?l=t:l=e*n[a-1];let c=0,h=a-1,f;for(;c<=h;)if(r=Math.floor(c+(h-c)/2),f=n[r]-l,f<0)c=r+1;else if(f>0)h=r-1;else{h=r;break}if(r=h,n[r]===l)return r/(a-1);const p=n[r],m=n[r+1]-p,_=(l-p)/m;return(r+_)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const l=this.getPoint(r),c=this.getPoint(a),h=t||(l.isVector2?new Qe:new W);return h.copy(c).sub(l).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new W,r=[],a=[],l=[],c=new W,h=new Nt;for(let _=0;_<=e;_++){const b=_/e;r[_]=this.getTangentAt(b,new W)}a[0]=new W,l[0]=new W;let f=Number.MAX_VALUE;const p=Math.abs(r[0].x),g=Math.abs(r[0].y),m=Math.abs(r[0].z);p<=f&&(f=p,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),m<=f&&n.set(0,0,1),c.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],c),l[0].crossVectors(r[0],a[0]);for(let _=1;_<=e;_++){if(a[_]=a[_-1].clone(),l[_]=l[_-1].clone(),c.crossVectors(r[_-1],r[_]),c.length()>Number.EPSILON){c.normalize();const b=Math.acos(mt(r[_-1].dot(r[_]),-1,1));a[_].applyMatrix4(h.makeRotationAxis(c,b))}l[_].crossVectors(r[_],a[_])}if(t===!0){let _=Math.acos(mt(a[0].dot(a[e]),-1,1));_/=e,r[0].dot(c.crossVectors(a[0],a[e]))>0&&(_=-_);for(let b=1;b<=e;b++)a[b].applyMatrix4(h.makeRotationAxis(r[b],_*b)),l[b].crossVectors(r[b],a[b])}return{tangents:r,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pd extends Ri{constructor(e=0,t=0,n=1,r=1,a=0,l=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=l,this.aClockwise=c,this.aRotation=h}getPoint(e,t=new Qe){const n=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const l=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(l?a=0:a=r),this.aClockwise===!0&&!l&&(a===r?a=-r:a=a-r);const c=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(c),f=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),m=h-this.aX,_=f-this.aY;h=m*p-_*g+this.aX,f=m*g+_*p+this.aY}return n.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ux extends pd{constructor(e,t,n,r,a,l){super(e,t,n,n,r,a,l),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let i=0,e=0,t=0,n=0;function r(a,l,c,h){i=a,e=c,t=-3*a+3*l-2*c-h,n=2*a-2*l+c+h}return{initCatmullRom:function(a,l,c,h,f){r(l,c,f*(c-a),f*(h-l))},initNonuniformCatmullRom:function(a,l,c,h,f,p,g){let m=(l-a)/f-(c-a)/(f+p)+(c-l)/p,_=(c-l)/p-(h-l)/(p+g)+(h-c)/g;m*=p,_*=p,r(l,c,m,_)},calc:function(a){const l=a*a,c=l*a;return i+e*a+t*l+n*c}}}const Ea=new W,Vo=new gc,Ho=new gc,Wo=new gc;class md extends Ri{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){const n=t,r=this.points,a=r.length,l=(a-(this.closed?0:1))*e;let c=Math.floor(l),h=l-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/a)+1)*a:h===0&&c===a-1&&(c=a-2,h=1);let f,p;this.closed||c>0?f=r[(c-1)%a]:(Ea.subVectors(r[0],r[1]).add(r[0]),f=Ea);const g=r[c%a],m=r[(c+1)%a];if(this.closed||c+2<a?p=r[(c+2)%a]:(Ea.subVectors(r[a-1],r[a-2]).add(r[a-1]),p=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let b=Math.pow(f.distanceToSquared(g),_),A=Math.pow(g.distanceToSquared(m),_),y=Math.pow(m.distanceToSquared(p),_);A<1e-4&&(A=1),b<1e-4&&(b=A),y<1e-4&&(y=A),Vo.initNonuniformCatmullRom(f.x,g.x,m.x,p.x,b,A,y),Ho.initNonuniformCatmullRom(f.y,g.y,m.y,p.y,b,A,y),Wo.initNonuniformCatmullRom(f.z,g.z,m.z,p.z,b,A,y)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(f.x,g.x,m.x,p.x,this.tension),Ho.initCatmullRom(f.y,g.y,m.y,p.y,this.tension),Wo.initCatmullRom(f.z,g.z,m.z,p.z,this.tension));return n.set(Vo.calc(h),Ho.calc(h),Wo.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qu(i,e,t,n,r){const a=(n-e)*.5,l=(r-t)*.5,c=i*i,h=i*c;return(2*t-2*n+a+l)*h+(-3*t+3*n-2*a-l)*c+a*i+t}function hx(i,e){const t=1-i;return t*t*e}function dx(i,e){return 2*(1-i)*i*e}function fx(i,e){return i*i*e}function xs(i,e,t,n){return hx(i,e)+dx(i,t)+fx(i,n)}function px(i,e){const t=1-i;return t*t*t*e}function mx(i,e){const t=1-i;return 3*t*t*i*e}function gx(i,e){return 3*(1-i)*i*i*e}function vx(i,e){return i*i*i*e}function ys(i,e,t,n,r){return px(i,e)+mx(i,t)+gx(i,n)+vx(i,r)}class _x extends Ri{constructor(e=new Qe,t=new Qe,n=new Qe,r=new Qe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Qe){const n=t,r=this.v0,a=this.v1,l=this.v2,c=this.v3;return n.set(ys(e,r.x,a.x,l.x,c.x),ys(e,r.y,a.y,l.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xx extends Ri{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){const n=t,r=this.v0,a=this.v1,l=this.v2,c=this.v3;return n.set(ys(e,r.x,a.x,l.x,c.x),ys(e,r.y,a.y,l.y,c.y),ys(e,r.z,a.z,l.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yx extends Ri{constructor(e=new Qe,t=new Qe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Qe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Qe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sx extends Ri{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bx extends Ri{constructor(e=new Qe,t=new Qe,n=new Qe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Qe){const n=t,r=this.v0,a=this.v1,l=this.v2;return n.set(xs(e,r.x,a.x,l.x),xs(e,r.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gd extends Ri{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){const n=t,r=this.v0,a=this.v1,l=this.v2;return n.set(xs(e,r.x,a.x,l.x),xs(e,r.y,a.y,l.y),xs(e,r.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mx extends Ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Qe){const n=t,r=this.points,a=(r.length-1)*e,l=Math.floor(a),c=a-l,h=r[l===0?l:l-1],f=r[l],p=r[l>r.length-2?r.length-1:l+1],g=r[l>r.length-3?r.length-1:l+2];return n.set(qu(c,h.x,f.x,p.x,g.x),qu(c,h.y,f.y,p.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Qe().fromArray(r))}return this}}var Ex=Object.freeze({__proto__:null,ArcCurve:ux,CatmullRomCurve3:md,CubicBezierCurve:_x,CubicBezierCurve3:xx,EllipseCurve:pd,LineCurve:yx,LineCurve3:Sx,QuadraticBezierCurve:bx,QuadraticBezierCurve3:gd,SplineCurve:Mx});class Us extends yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),h=Math.floor(r),f=c+1,p=h+1,g=e/c,m=t/h,_=[],b=[],A=[],y=[];for(let x=0;x<p;x++){const I=x*m-l;for(let F=0;F<f;F++){const P=F*g-a;b.push(P,-I,0),A.push(0,0,1),y.push(F/c),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let I=0;I<c;I++){const F=I+f*x,P=I+f*(x+1),N=I+1+f*(x+1),R=I+1+f*x;_.push(F,P,R),_.push(P,N,R)}this.setIndex(_),this.setAttribute("position",new Vt(b,3)),this.setAttribute("normal",new Vt(A,3)),this.setAttribute("uv",new Vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}class vc extends yn{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(l+c,Math.PI);let f=0;const p=[],g=new W,m=new W,_=[],b=[],A=[],y=[];for(let x=0;x<=n;x++){const I=[],F=x/n;let P=0;x===0&&l===0?P=.5/t:x===n&&h===Math.PI&&(P=-.5/t);for(let N=0;N<=t;N++){const R=N/t;g.x=-e*Math.cos(r+R*a)*Math.sin(l+F*c),g.y=e*Math.cos(l+F*c),g.z=e*Math.sin(r+R*a)*Math.sin(l+F*c),b.push(g.x,g.y,g.z),m.copy(g).normalize(),A.push(m.x,m.y,m.z),y.push(R+P,1-F),I.push(f++)}p.push(I)}for(let x=0;x<n;x++)for(let I=0;I<t;I++){const F=p[x][I+1],P=p[x][I],N=p[x+1][I],R=p[x+1][I+1];(x!==0||l>0)&&_.push(F,P,R),(x!==n-1||h<Math.PI)&&_.push(P,N,R)}this.setIndex(_),this.setAttribute("position",new Vt(b,3)),this.setAttribute("normal",new Vt(A,3)),this.setAttribute("uv",new Vt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _c extends yn{constructor(e=new gd(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};const l=e.computeFrenetFrames(t,a);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const c=new W,h=new W,f=new Qe;let p=new W;const g=[],m=[],_=[],b=[];A(),this.setIndex(b),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(_,2));function A(){for(let F=0;F<t;F++)y(F);y(a===!1?t:0),I(),x()}function y(F){p=e.getPointAt(F/t,p);const P=l.normals[F],N=l.binormals[F];for(let R=0;R<=r;R++){const k=R/r*Math.PI*2,w=Math.sin(k),L=-Math.cos(k);h.x=L*P.x+w*N.x,h.y=L*P.y+w*N.y,h.z=L*P.z+w*N.z,h.normalize(),m.push(h.x,h.y,h.z),c.x=p.x+n*h.x,c.y=p.y+n*h.y,c.z=p.z+n*h.z,g.push(c.x,c.y,c.z)}}function x(){for(let F=1;F<=t;F++)for(let P=1;P<=r;P++){const N=(r+1)*(F-1)+(P-1),R=(r+1)*F+(P-1),k=(r+1)*F+P,w=(r+1)*(F-1)+P;b.push(N,R,w),b.push(R,k,w)}}function I(){for(let F=0;F<=t;F++)for(let P=0;P<=r;P++)f.x=F/t,f.y=P/r,_.push(f.x,f.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _c(new Ex[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function qr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bn(i){const e={};for(let t=0;t<i.length;t++){const n=qr(i[t]);for(const r in n)e[r]=n[r]}return e}function wx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const Tx={clone:qr,merge:bn};var Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=wx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rx extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gr extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sd,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Px extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dx extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $o={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Lx{constructor(e,t,n){const r=this;let a=!1,l=0,c=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,a===!1&&r.onStart!==void 0&&r.onStart(p,l,c),a=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){const _=f[g],b=f[g+1];if(_.global&&(_.lastIndex=0),_.test(p))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fx=new Lx;class xc{constructor(e){this.manager=e!==void 0?e:Fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fr=new WeakMap;class Ix extends xc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=$o.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0);else{let g=Fr.get(l);g===void 0&&(g=[],Fr.set(l,g)),g.push({onLoad:t,onError:r})}return l}const c=Rs("img");function h(){p(),t&&t(this);const g=Fr.get(this)||[];for(let m=0;m<g.length;m++){const _=g[m];_.onLoad&&_.onLoad(this)}Fr.delete(this),a.manager.itemEnd(e)}function f(g){p(),r&&r(g),$o.remove(`image:${e}`);const m=Fr.get(this)||[];for(let _=0;_<m.length;_++){const b=m[_];b.onError&&b.onError(g)}Fr.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",h,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),$o.add(`image:${e}`,c),a.manager.itemStart(e),c.src=e,c}}class _d extends xc{constructor(e){super(e)}load(e,t,n,r){const a=new pn,l=new Ix(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Va extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ux extends Va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Xo=new Nt,Ku=new W,Ju=new W;class xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Cs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wa=new W,Ta=new oi,ni=new W;class yd extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Ta,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,ni.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wa,Ta,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new W,Zu=new Qe,Qu=new Qe;class Rn extends yd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Na*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,Qu),t.subVectors(Qu,Zu)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/h,t-=l.offsetY*n/f,r*=l.width/h,n*=l.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Nx extends xd{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Na*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ox extends Va{constructor(e,t,n=0,r=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=r,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new Nx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class yc extends yd{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kx extends xd{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eh extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new kx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Bx extends Va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ir=-90,Ur=1;class zx extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Ir,Ur,e,t);r.layers=this.layers,this.add(r);const a=new Rn(Ir,Ur,e,t);a.layers=this.layers,this.add(a);const l=new Rn(Ir,Ur,e,t);l.layers=this.layers,this.add(l);const c=new Rn(Ir,Ur,e,t);c.layers=this.layers,this.add(c);const h=new Rn(Ir,Ur,e,t);h.layers=this.layers,this.add(h);const f=new Rn(Ir,Ur,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,h]=t;for(const f of t)this.remove(f);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,h,f,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(n,4,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,_),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Gx extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const th=new Nt;class Sd{constructor(e,t,n=0,r=1/0){this.ray=new hd(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(e,t=!0,n=[]){return Yl(e,this,n,t),n.sort(nh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Yl(e[r],this,n,t);return n.sort(nh),n}}function nh(i,e){return i.distance-e.distance}function Yl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let l=0,c=a.length;l<c;l++)Yl(a[l],e,t,!0)}}function ih(i,e,t,n){const r=Vx(n);switch(t){case nd:return i*e;case rd:return i*e/r.components*r.byteLength;case oc:return i*e/r.components*r.byteLength;case $r:return i*e*2/r.components*r.byteLength;case lc:return i*e*2/r.components*r.byteLength;case id:return i*e*3/r.components*r.byteLength;case qn:return i*e*4/r.components*r.byteLength;case cc:return i*e*4/r.components*r.byteLength;case Ra:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:case yl:return Math.max(i,16)*Math.max(e,8)/4;case vl:case xl:return Math.max(i,8)*Math.max(e,8)/2;case Sl:case bl:case El:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ml:case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Hl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $l:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jl:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vx(i){switch(i){case Dn:case Zh:return{byteLength:1,components:1};case Ts:case Qh:case Ti:return{byteLength:2,components:1};case sc:case ac:return{byteLength:2,components:4};case di:case rc:case si:return{byteLength:4,components:1};case ed:case td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);function bd(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Hx(i){const e=new WeakMap;function t(c,h){const f=c.array,p=c.usage,g=f.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,p),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=i.HALF_FLOAT;else if(f instanceof Uint16Array)c.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,h,f){const p=h.array,g=h.updateRanges;if(i.bindBuffer(f,c),g.length===0)i.bufferSubData(f,0,p);else{g.sort((_,b)=>_.start-b.start);let m=0;for(let _=1;_<g.length;_++){const b=g[m],A=g[_];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++m,g[m]=A)}g.length=m+1;for(let _=0,b=g.length;_<b;_++){const A=g[_];i.bufferSubData(f,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(i.deleteBuffer(h.buffer),e.delete(c))}function l(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const f=e.get(c);if(f===void 0)e.set(c,t(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,c,h),f.version=c.version}}return{get:r,remove:a,update:l}}var Wx=`#ifdef USE_ALPHAHASH
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
#endif`,Xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kx=`#ifdef USE_AOMAP
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
#endif`,Zx=`#ifdef USE_BATCHING
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
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fy=`#define PI 3.141592653589793
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
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,my=`vec3 transformedNormal = objectNormal;
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
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
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
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
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
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
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
#endif`,Vy=`uniform sampler2D dfgLUT;
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
}`,Hy=`
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qy=`#if defined( USE_POINTS_UV )
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
#endif`,eS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
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
#endif`,aS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_S=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
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
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,US=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,kS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
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
}`,XS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`#include <common>
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
}`,KS=`#if DEPTH_PACKING == 3200
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
}`,ZS=`#define DISTANCE
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
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
}`,rb=`uniform vec3 diffuse;
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
}`,sb=`#define LAMBERT
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
}`,ab=`#define LAMBERT
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
}`,ob=`#define MATCAP
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
}`,lb=`#define MATCAP
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
}`,cb=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,hb=`#define PHONG
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
}`,db=`#define PHONG
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
}`,fb=`#define STANDARD
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
}`,pb=`#define STANDARD
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
}`,mb=`#define TOON
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
}`,gb=`#define TOON
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
}`,vb=`uniform float size;
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
}`,_b=`uniform vec3 diffuse;
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
}`,xb=`#include <common>
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
}`,yb=`uniform vec3 color;
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
}`,Sb=`uniform float rotation;
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
}`,bb=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Wx,alphahash_pars_fragment:$x,alphamap_fragment:Xx,alphamap_pars_fragment:jx,alphatest_fragment:qx,alphatest_pars_fragment:Yx,aomap_fragment:Kx,aomap_pars_fragment:Jx,batching_pars_vertex:Zx,batching_vertex:Qx,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ry,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:uy,color_pars_vertex:hy,color_vertex:dy,common:fy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:vy,emissivemap_fragment:_y,emissivemap_pars_fragment:xy,colorspace_fragment:yy,colorspace_pars_fragment:Sy,envmap_fragment:by,envmap_common_pars_fragment:My,envmap_pars_fragment:Ey,envmap_pars_vertex:wy,envmap_physical_pars_fragment:Ny,envmap_vertex:Ty,fog_vertex:Ay,fog_pars_vertex:Cy,fog_fragment:Ry,fog_pars_fragment:Py,gradientmap_pars_fragment:Dy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:Iy,lights_pars_begin:Uy,lights_toon_fragment:Oy,lights_toon_pars_fragment:ky,lights_phong_fragment:By,lights_phong_pars_fragment:zy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Hy,lights_fragment_maps:Wy,lights_fragment_end:$y,logdepthbuf_fragment:Xy,logdepthbuf_pars_fragment:jy,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:Yy,map_fragment:Ky,map_pars_fragment:Jy,map_particle_fragment:Zy,map_particle_pars_fragment:Qy,metalnessmap_fragment:eS,metalnessmap_pars_fragment:tS,morphinstance_vertex:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:aS,normal_fragment_begin:oS,normal_fragment_maps:lS,normal_pars_fragment:cS,normal_pars_vertex:uS,normal_vertex:hS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,opaque_fragment:vS,packing:_S,premultiplied_alpha_fragment:xS,project_vertex:yS,dithering_fragment:SS,dithering_pars_fragment:bS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:TS,shadowmap_vertex:AS,shadowmask_pars_fragment:CS,skinbase_vertex:RS,skinning_pars_vertex:PS,skinning_vertex:DS,skinnormal_vertex:LS,specularmap_fragment:FS,specularmap_pars_fragment:IS,tonemapping_fragment:US,tonemapping_pars_fragment:NS,transmission_fragment:OS,transmission_pars_fragment:kS,uv_pars_fragment:BS,uv_pars_vertex:zS,uv_vertex:GS,worldpos_vertex:VS,background_vert:HS,background_frag:WS,backgroundCube_vert:$S,backgroundCube_frag:XS,cube_vert:jS,cube_frag:qS,depth_vert:YS,depth_frag:KS,distance_vert:JS,distance_frag:ZS,equirect_vert:QS,equirect_frag:eb,linedashed_vert:tb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:rb,meshlambert_vert:sb,meshlambert_frag:ab,meshmatcap_vert:ob,meshmatcap_frag:lb,meshnormal_vert:cb,meshnormal_frag:ub,meshphong_vert:hb,meshphong_frag:db,meshphysical_vert:fb,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:gb,points_vert:vb,points_frag:_b,shadow_vert:xb,shadow_frag:yb,sprite_vert:Sb,sprite_frag:bb},Le={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},ri={basic:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:bn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:bn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:bn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:bn([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:bn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:bn([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:bn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:bn([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:bn([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:bn([Le.lights,Le.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};ri.physical={uniforms:bn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Aa={r:0,b:0,g:0},or=new fi,Mb=new Nt;function Eb(i,e,t,n,r,a){const l=new ct(0);let c=r===!0?0:1,h,f,p=null,g=0,m=null;function _(I){let F=I.isScene===!0?I.background:null;if(F&&F.isTexture){const P=I.backgroundBlurriness>0;F=e.get(F,P)}return F}function b(I){let F=!1;const P=_(I);P===null?y(l,c):P&&P.isColor&&(y(P,1),F=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(I,F){const P=_(F);P&&(P.isCubeTexture||P.mapping===Ga)?(f===void 0&&(f=new ln(new Ci(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:qr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,R,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),or.copy(F.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(or)),f.material.toneMapped=wt.getTransfer(P.colorSpace)!==Lt,(p!==P||g!==P.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,p=P,g=P.version,m=i.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new ln(new Us(2,2),new pi({name:"BackgroundMaterial",uniforms:qr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=wt.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(p!==P||g!==P.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=P,g=P.version,m=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function y(I,F){I.getRGB(Aa,vd(i)),t.buffers.color.setClear(Aa.r,Aa.g,Aa.b,F,a)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return l},setClearColor:function(I,F=1){l.set(I),c=F,y(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(I){c=I,y(l,c)},render:b,addToRenderList:A,dispose:x}}function wb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null);let a=r,l=!1;function c(z,q,ee,K,te){let Q=!1;const J=g(z,K,ee,q);a!==J&&(a=J,f(a.object)),Q=_(z,K,ee,te),Q&&b(z,K,ee,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(Q||l)&&(l=!1,P(z,q,ee,K),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function h(){return i.createVertexArray()}function f(z){return i.bindVertexArray(z)}function p(z){return i.deleteVertexArray(z)}function g(z,q,ee,K){const te=K.wireframe===!0;let Q=n[q.id];Q===void 0&&(Q={},n[q.id]=Q);const J=z.isInstancedMesh===!0?z.id:0;let ve=Q[J];ve===void 0&&(ve={},Q[J]=ve);let me=ve[ee.id];me===void 0&&(me={},ve[ee.id]=me);let De=me[te];return De===void 0&&(De=m(h()),me[te]=De),De}function m(z){const q=[],ee=[],K=[];for(let te=0;te<t;te++)q[te]=0,ee[te]=0,K[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ee,attributeDivisors:K,object:z,attributes:{},index:null}}function _(z,q,ee,K){const te=a.attributes,Q=q.attributes;let J=0;const ve=ee.getAttributes();for(const me in ve)if(ve[me].location>=0){const Pe=te[me];let Re=Q[me];if(Re===void 0&&(me==="instanceMatrix"&&z.instanceMatrix&&(Re=z.instanceMatrix),me==="instanceColor"&&z.instanceColor&&(Re=z.instanceColor)),Pe===void 0||Pe.attribute!==Re||Re&&Pe.data!==Re.data)return!0;J++}return a.attributesNum!==J||a.index!==K}function b(z,q,ee,K){const te={},Q=q.attributes;let J=0;const ve=ee.getAttributes();for(const me in ve)if(ve[me].location>=0){let Pe=Q[me];Pe===void 0&&(me==="instanceMatrix"&&z.instanceMatrix&&(Pe=z.instanceMatrix),me==="instanceColor"&&z.instanceColor&&(Pe=z.instanceColor));const Re={};Re.attribute=Pe,Pe&&Pe.data&&(Re.data=Pe.data),te[me]=Re,J++}a.attributes=te,a.attributesNum=J,a.index=K}function A(){const z=a.newAttributes;for(let q=0,ee=z.length;q<ee;q++)z[q]=0}function y(z){x(z,0)}function x(z,q){const ee=a.newAttributes,K=a.enabledAttributes,te=a.attributeDivisors;ee[z]=1,K[z]===0&&(i.enableVertexAttribArray(z),K[z]=1),te[z]!==q&&(i.vertexAttribDivisor(z,q),te[z]=q)}function I(){const z=a.newAttributes,q=a.enabledAttributes;for(let ee=0,K=q.length;ee<K;ee++)q[ee]!==z[ee]&&(i.disableVertexAttribArray(ee),q[ee]=0)}function F(z,q,ee,K,te,Q,J){J===!0?i.vertexAttribIPointer(z,q,ee,te,Q):i.vertexAttribPointer(z,q,ee,K,te,Q)}function P(z,q,ee,K){A();const te=K.attributes,Q=ee.getAttributes(),J=q.defaultAttributeValues;for(const ve in Q){const me=Q[ve];if(me.location>=0){let De=te[ve];if(De===void 0&&(ve==="instanceMatrix"&&z.instanceMatrix&&(De=z.instanceMatrix),ve==="instanceColor"&&z.instanceColor&&(De=z.instanceColor)),De!==void 0){const Pe=De.normalized,Re=De.itemSize,He=e.get(De);if(He===void 0)continue;const je=He.buffer,Ve=He.type,oe=He.bytesPerElement,xe=Ve===i.INT||Ve===i.UNSIGNED_INT||De.gpuType===rc;if(De.isInterleavedBufferAttribute){const se=De.data,Me=se.stride,Xe=De.offset;if(se.isInstancedInterleavedBuffer){for(let Ye=0;Ye<me.locationSize;Ye++)x(me.location+Ye,se.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ye=0;Ye<me.locationSize;Ye++)y(me.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ye=0;Ye<me.locationSize;Ye++)F(me.location+Ye,Re/me.locationSize,Ve,Pe,Me*oe,(Xe+Re/me.locationSize*Ye)*oe,xe)}else{if(De.isInstancedBufferAttribute){for(let se=0;se<me.locationSize;se++)x(me.location+se,De.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let se=0;se<me.locationSize;se++)y(me.location+se);i.bindBuffer(i.ARRAY_BUFFER,je);for(let se=0;se<me.locationSize;se++)F(me.location+se,Re/me.locationSize,Ve,Pe,Re*oe,Re/me.locationSize*se*oe,xe)}}else if(J!==void 0){const Pe=J[ve];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(me.location,Pe);break;case 3:i.vertexAttrib3fv(me.location,Pe);break;case 4:i.vertexAttrib4fv(me.location,Pe);break;default:i.vertexAttrib1fv(me.location,Pe)}}}}I()}function N(){L();for(const z in n){const q=n[z];for(const ee in q){const K=q[ee];for(const te in K){const Q=K[te];for(const J in Q)p(Q[J].object),delete Q[J];delete K[te]}}delete n[z]}}function R(z){if(n[z.id]===void 0)return;const q=n[z.id];for(const ee in q){const K=q[ee];for(const te in K){const Q=K[te];for(const J in Q)p(Q[J].object),delete Q[J];delete K[te]}}delete n[z.id]}function k(z){for(const q in n){const ee=n[q];for(const K in ee){const te=ee[K];if(te[z.id]===void 0)continue;const Q=te[z.id];for(const J in Q)p(Q[J].object),delete Q[J];delete te[z.id]}}}function w(z){for(const q in n){const ee=n[q],K=z.isInstancedMesh===!0?z.id:0,te=ee[K];if(te!==void 0){for(const Q in te){const J=te[Q];for(const ve in J)p(J[ve].object),delete J[ve];delete te[Q]}delete ee[K],Object.keys(ee).length===0&&delete n[q]}}}function L(){B(),l=!0,a!==r&&(a=r,f(a.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:L,resetDefaultState:B,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:y,disableUnusedAttributes:I}}function Tb(i,e,t){let n;function r(f){n=f}function a(f,p){i.drawArrays(n,f,p),t.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawArraysInstanced(n,f,p,g),t.update(p,n,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,p,0,g);let _=0;for(let b=0;b<g;b++)_+=p[b];t.update(_,n,1)}function h(f,p,g,m){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let b=0;b<f.length;b++)l(f[b],p[b],m[b]);else{_.multiDrawArraysInstancedWEBGL(n,f,0,p,0,m,0,g);let b=0;for(let A=0;A<g;A++)b+=p[A]*m[A];t.update(b,n,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Ab(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(k){return!(k!==qn&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(k){const w=k===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Dn&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==si&&!w)}function h(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(nt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:I,maxVaryings:F,maxFragmentUniforms:P,maxSamples:N,samples:R}}function Cb(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new cr,c=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||n!==0||r;return r=m,n=g.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,_){const b=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,x=i.get(g);if(!r||b===null||b.length===0||a&&!y)a?p(null):f();else{const I=a?0:n,F=I*4;let P=x.clippingState||null;h.value=P,P=p(b,m,F,_);for(let N=0;N!==F;++N)P[N]=t[N];x.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,m,_,b){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=h.value,b!==!0||y===null){const x=_+A*4,I=m.matrixWorldInverse;c.getNormalMatrix(I),(y===null||y.length<x)&&(y=new Float32Array(x));for(let F=0,P=_;F!==A;++F,P+=4)l.copy(g[F]).applyMatrix4(I,c),l.normal.toArray(y,P),y[P+3]=l.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const Hi=4,rh=[.125,.215,.35,.446,.526,.582],dr=20,Rb=256,us=new yc,sh=new ct;let jo=null,qo=0,Yo=0,Ko=!1;const Pb=new W;class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:l=256,position:c=Pb}=a;jo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,r,h,c),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jo,qo,Yo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ti,format:qn,colorSpace:Xr,depthBuffer:!1},r=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Db(a)),this._blurMaterial=Fb(a,e,t),this._ggxMaterial=Lb(a,e,t)}return r}_compileMaterial(e){const t=new ln(new yn,e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,n,r,a){const h=new Rn(90,1,t,n),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(sh),g.toneMapping=ui,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new Ci,new Ps({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const I=e.background;I?I.isColor&&(y.color.copy(I),e.background=null,x=!0):(y.color.copy(sh),x=!0);for(let F=0;F<6;F++){const P=F%3;P===0?(h.up.set(0,f[F],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+p[F],a.y,a.z)):P===1?(h.up.set(0,0,f[F]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+p[F],a.z)):(h.up.set(0,f[F],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+p[F]));const N=this._cubeSize;Nr(r,P*N,F>2?N:0,N,N),g.setRenderTarget(r),x&&g.render(A,h),g.render(e,h)}g.toneMapping=_,g.autoClear=m,e.background=I}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_r||e.mapping===Wr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const a=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;Nr(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(l,us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const h=l.uniforms,f=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-p*p),m=0+f*1.25,_=g*m,{_lodMax:b}=this,A=this._sizeLods[n],y=3*A*(n>b-Hi?n-b+Hi:0),x=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=b-t,Nr(a,y,x,3*A,2*A),r.setRenderTarget(a),r.render(c,us),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=b-n,Nr(e,y,x,3*A,2*A),r.setRenderTarget(e),r.render(c,us)}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const h=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[r];g.material=f;const m=f.uniforms,_=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*dr-1),A=a/b,y=isFinite(a)?1+Math.floor(p*A):dr;y>dr&&nt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${dr}`);const x=[];let I=0;for(let k=0;k<dr;++k){const w=k/A,L=Math.exp(-w*w/2);x.push(L),k===0?I+=L:k<y&&(I+=2*L)}for(let k=0;k<x.length;k++)x[k]=x[k]/I;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=x,m.latitudinal.value=l==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:F}=this;m.dTheta.value=b,m.mipInt.value=F-n;const P=this._sizeLods[r],N=3*P*(r>F-Hi?r-F+Hi:0),R=4*(this._cubeSize-P);Nr(t,N,R,3*P,2*P),h.setRenderTarget(t),h.render(g,us)}}function Db(i){const e=[],t=[],n=[];let r=i;const a=i-Hi+1+rh.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);e.push(c);let h=1/c;l>i-Hi?h=rh[l-i+Hi-1]:l===0&&(h=0),t.push(h);const f=1/(c-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],_=6,b=6,A=3,y=2,x=1,I=new Float32Array(A*b*_),F=new Float32Array(y*b*_),P=new Float32Array(x*b*_);for(let R=0;R<_;R++){const k=R%3*2/3-1,w=R>2?0:-1,L=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];I.set(L,A*b*R),F.set(m,y*b*R);const B=[R,R,R,R,R,R];P.set(B,x*b*R)}const N=new yn;N.setAttribute("position",new Bn(I,A)),N.setAttribute("uv",new Bn(F,y)),N.setAttribute("faceIndex",new Bn(P,x)),n.push(new ln(N,null)),r>Hi&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function oh(i,e,t){const n=new hi(i,e,t);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Lb(i,e,t){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Fb(i,e,t){const n=new Float32Array(dr),r=new W(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function lh(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ch(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ha(){return`

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
	`}class Md extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new dd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ci(5,5,5),a=new pi({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Ei});a.uniforms.tEquirect.value=t;const l=new ln(r,a),c=t.minFilter;return t.minFilter===pr&&(t.minFilter=xn),new zx(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}function Ib(i){let e=new WeakMap,t=new WeakMap,n=null;function r(m,_=!1){return m==null?null:_?l(m):a(m)}function a(m){if(m&&m.isTexture){const _=m.mapping;if(_===mo||_===go)if(e.has(m)){const b=e.get(m).texture;return c(b,m.mapping)}else{const b=m.image;if(b&&b.height>0){const A=new Md(b.height);return A.fromEquirectangularTexture(i,m),e.set(m,A),m.addEventListener("dispose",f),c(A.texture,m.mapping)}else return null}}return m}function l(m){if(m&&m.isTexture){const _=m.mapping,b=_===mo||_===go,A=_===_r||_===Wr;if(b||A){let y=t.get(m);const x=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return n===null&&(n=new ah(i)),y=b?n.fromEquirectangular(m,y):n.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const I=m.image;return b&&I&&I.height>0||A&&I&&h(I)?(n===null&&(n=new ah(i)),y=b?n.fromEquirectangular(m):n.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",p),y.texture):null}}}return m}function c(m,_){return _===mo?m.mapping=_r:_===go&&(m.mapping=Wr),m}function h(m){let _=0;const b=6;for(let A=0;A<b;A++)m[A]!==void 0&&_++;return _===b}function f(m){const _=m.target;_.removeEventListener("dispose",f);const b=e.get(_);b!==void 0&&(e.delete(_),b.dispose())}function p(m){const _=m.target;_.removeEventListener("dispose",p);const b=t.get(_);b!==void 0&&(t.delete(_),b.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function Ub(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ua("WebGLRenderer: "+n+" extension not supported."),r}}}function Nb(i,e,t,n){const r={},a=new WeakMap;function l(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const b in m.attributes)e.remove(m.attributes[b]);m.removeEventListener("dispose",l),delete r[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(g,m){return r[m.id]===!0||(m.addEventListener("dispose",l),r[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const _ in m)e.update(m[_],i.ARRAY_BUFFER)}function f(g){const m=[],_=g.index,b=g.attributes.position;let A=0;if(b===void 0)return;if(_!==null){const I=_.array;A=_.version;for(let F=0,P=I.length;F<P;F+=3){const N=I[F+0],R=I[F+1],k=I[F+2];m.push(N,R,R,k,k,N)}}else{const I=b.array;A=b.version;for(let F=0,P=I.length/3-1;F<P;F+=3){const N=F+0,R=F+1,k=F+2;m.push(N,R,R,k,k,N)}}const y=new(b.count>=65535?ud:cd)(m,1);y.version=A;const x=a.get(g);x&&e.remove(x),a.set(g,y)}function p(g){const m=a.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&f(g)}else f(g);return a.get(g)}return{get:c,update:h,getWireframeAttribute:p}}function Ob(i,e,t){let n;function r(m){n=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,_){i.drawElements(n,_,a,m*l),t.update(_,n,1)}function f(m,_,b){b!==0&&(i.drawElementsInstanced(n,_,a,m*l,b),t.update(_,n,b))}function p(m,_,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,m,0,b);let y=0;for(let x=0;x<b;x++)y+=_[x];t.update(y,n,1)}function g(m,_,b,A){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<m.length;x++)f(m[x]/l,_[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(n,_,0,a,m,0,A,0,b);let x=0;for(let I=0;I<b;I++)x+=_[I]*A[I];t.update(x,n,1)}}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function kb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:Et("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Bb(i,e,t){const n=new WeakMap,r=new Xt;function a(l,c,h){const f=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let m=n.get(c);if(m===void 0||m.count!==g){let L=function(){k.dispose(),n.delete(c),c.removeEventListener("dispose",L)};m!==void 0&&m.texture.dispose();const _=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let F=0;_===!0&&(F=1),b===!0&&(F=2),A===!0&&(F=3);let P=c.attributes.position.count*F,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*N*4*g),k=new od(R,P,N,g);k.type=si,k.needsUpdate=!0;const w=F*4;for(let B=0;B<g;B++){const z=y[B],q=x[B],ee=I[B],K=P*N*4*B;for(let te=0;te<z.count;te++){const Q=te*w;_===!0&&(r.fromBufferAttribute(z,te),R[K+Q+0]=r.x,R[K+Q+1]=r.y,R[K+Q+2]=r.z,R[K+Q+3]=0),b===!0&&(r.fromBufferAttribute(q,te),R[K+Q+4]=r.x,R[K+Q+5]=r.y,R[K+Q+6]=r.z,R[K+Q+7]=0),A===!0&&(r.fromBufferAttribute(ee,te),R[K+Q+8]=r.x,R[K+Q+9]=r.y,R[K+Q+10]=r.z,R[K+Q+11]=ee.itemSize===4?r.w:1)}}m={count:g,texture:k,size:new Qe(P,N)},n.set(c,m),c.addEventListener("dispose",L)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let _=0;for(let A=0;A<f.length;A++)_+=f[A];const b=c.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:a}}function zb(i,e,t,n,r){let a=new WeakMap;function l(f){const p=r.render.frame,g=f.geometry,m=e.get(f,g);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),a.get(f)!==p&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,p))),f.isSkinnedMesh){const _=f.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return m}function c(){a=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const Gb={[$h]:"LINEAR_TONE_MAPPING",[Xh]:"REINHARD_TONE_MAPPING",[jh]:"CINEON_TONE_MAPPING",[ic]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[Kh]:"NEUTRAL_TONE_MAPPING",[qh]:"CUSTOM_TONE_MAPPING"};function Vb(i,e,t,n,r){const a=new hi(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),l=new hi(e,t,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),c=new yn;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const h=new Rx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ln(c,h),p=new yc(-1,1,1,-1,0,1);let g=null,m=null,_=!1,b,A=null,y=[],x=!1;this.setSize=function(I,F){a.setSize(I,F),l.setSize(I,F);for(let P=0;P<y.length;P++){const N=y[P];N.setSize&&N.setSize(I,F)}},this.setEffects=function(I){y=I,x=y.length>0&&y[0].isRenderPass===!0;const F=a.width,P=a.height;for(let N=0;N<y.length;N++){const R=y[N];R.setSize&&R.setSize(F,P)}},this.begin=function(I,F){if(_||I.toneMapping===ui&&y.length===0)return!1;if(A=F,F!==null){const P=F.width,N=F.height;(a.width!==P||a.height!==N)&&this.setSize(P,N)}return x===!1&&I.setRenderTarget(a),b=I.toneMapping,I.toneMapping=ui,!0},this.hasRenderPass=function(){return x},this.end=function(I,F){I.toneMapping=b,_=!0;let P=a,N=l;for(let R=0;R<y.length;R++){const k=y[R];if(k.enabled!==!1&&(k.render(I,N,P,F),k.needsSwap!==!1)){const w=P;P=N,N=w}}if(g!==I.outputColorSpace||m!==I.toneMapping){g=I.outputColorSpace,m=I.toneMapping,h.defines={},wt.getTransfer(g)===Lt&&(h.defines.SRGB_TRANSFER="");const R=Gb[m];R&&(h.defines[R]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,I.setRenderTarget(A),I.render(f,p),A=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),l.dispose(),c.dispose(),h.dispose()}}const Ed=new pn,Kl=new Ds(1,1),wd=new od,Td=new $_,Ad=new dd,uh=[],hh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function Kr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=uh[r];if(a===void 0&&(a=new Float32Array(r),uh[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Wa(i,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function $b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Xb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function jb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),an(t,n)}}function qb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),an(t,n)}}function Yb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),an(t,n)}}function Kb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Zb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function Qb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function eM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function nM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function iM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function rM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Kl.compareFunction=t.isReversedDepthBuffer()?hc:uc,a=Kl):a=Ed,t.setTexture2D(e||a,r)}function sM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Td,r)}function aM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ad,r)}function oM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wd,r)}function lM(i){switch(i){case 5126:return Hb;case 35664:return Wb;case 35665:return $b;case 35666:return Xb;case 35674:return jb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return Kb;case 35667:case 35671:return Jb;case 35668:case 35672:return Zb;case 35669:case 35673:return Qb;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}function cM(i,e){i.uniform1fv(this.addr,e)}function uM(i,e){const t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function hM(i,e){const t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function dM(i,e){const t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function fM(i,e){const t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pM(i,e){const t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mM(i,e){const t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gM(i,e){i.uniform1iv(this.addr,e)}function vM(i,e){i.uniform2iv(this.addr,e)}function _M(i,e){i.uniform3iv(this.addr,e)}function xM(i,e){i.uniform4iv(this.addr,e)}function yM(i,e){i.uniform1uiv(this.addr,e)}function SM(i,e){i.uniform2uiv(this.addr,e)}function bM(i,e){i.uniform3uiv(this.addr,e)}function MM(i,e){i.uniform4uiv(this.addr,e)}function EM(i,e,t){const n=this.cache,r=e.length,a=Wa(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),an(n,a));let l;this.type===i.SAMPLER_2D_SHADOW?l=Kl:l=Ed;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||l,a[c])}function wM(i,e,t){const n=this.cache,r=e.length,a=Wa(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),an(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Td,a[l])}function TM(i,e,t){const n=this.cache,r=e.length,a=Wa(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),an(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Ad,a[l])}function AM(i,e,t){const n=this.cache,r=e.length,a=Wa(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),an(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||wd,a[l])}function CM(i){switch(i){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return dM;case 35674:return fM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return gM;case 35667:case 35671:return vM;case 35668:case 35672:return _M;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return SM;case 36295:return bM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}class RM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lM(t.type)}}class PM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CM(t.type)}}class DM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function mh(i,e){i.seq.push(e),i.map[e.id]=e}function LM(i,e,t){const n=i.name,r=n.length;for(Jo.lastIndex=0;;){const a=Jo.exec(n),l=Jo.lastIndex;let c=a[1];const h=a[2]==="]",f=a[3];if(h&&(c=c|0),f===void 0||f==="["&&l+2===r){mh(t,f===void 0?new RM(c,i,e):new PM(c,i,e));break}else{let g=t.map[c];g===void 0&&(g=new DM(c),mh(t,g)),t=g}}}class Fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),h=e.getUniformLocation(t,c.name);LM(c,h,this)}const r=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):a.push(l);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function gh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const FM=37297;let IM=0;function UM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const vh=new lt;function NM(i){wt._getMatrix(vh,wt.workingColorSpace,i);const e=`mat3( ${vh.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Ia:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _h(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+UM(i.getShaderSource(e),c)}else return a}function OM(i,e){const t=NM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const kM={[$h]:"Linear",[Xh]:"Reinhard",[jh]:"Cineon",[ic]:"ACESFilmic",[Yh]:"AgX",[Kh]:"Neutral",[qh]:"Custom"};function BM(i,e){const t=kM[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ca=new W;function zM(){wt.getLuminanceCoefficients(Ca);const i=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function VM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function ps(i){return i!==""}function xh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(WM,XM)}const $M=new Map;function XM(i,e){let t=ht[e];if(t===void 0){const n=$M.get(e);if(n!==void 0)t=ht[n],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(i){return i.replace(jM,qM)}function qM(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function bh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const YM={[_s]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function KM(i){return YM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JM={[_r]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE_UV"};function ZM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":JM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const QM={[Wr]:"ENVMAP_MODE_REFRACTION"};function eE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":QM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tE={[Wh]:"ENVMAP_BLENDING_MULTIPLY",[E_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function nE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tE[i.combine]||"ENVMAP_BLENDING_NONE"}function iE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rE(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const h=KM(t),f=ZM(t),p=eE(t),g=nE(t),m=iE(t),_=GM(t),b=VM(a),A=r.createProgram();let y,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ps).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ps).join(`
`),x.length>0&&(x+=`
`)):(y=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),x=[bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?ht.tonemapping_pars_fragment:"",t.toneMapping!==ui?BM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,OM("linearToOutputTexel",t.outputColorSpace),zM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),l=Jl(l),l=xh(l,t),l=yh(l,t),c=Jl(c),c=xh(c,t),c=yh(c,t),l=Sh(l),c=Sh(c),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=I+y+l,P=I+x+c,N=gh(r,r.VERTEX_SHADER,F),R=gh(r,r.FRAGMENT_SHADER,P);r.attachShader(A,N),r.attachShader(A,R),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function k(z){if(i.debug.checkShaderErrors){const q=r.getProgramInfoLog(A)||"",ee=r.getShaderInfoLog(N)||"",K=r.getShaderInfoLog(R)||"",te=q.trim(),Q=ee.trim(),J=K.trim();let ve=!0,me=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(ve=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,N,R);else{const De=_h(r,N,"vertex"),Pe=_h(r,R,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+te+`
`+De+`
`+Pe)}else te!==""?nt("WebGLProgram: Program Info Log:",te):(Q===""||J==="")&&(me=!1);me&&(z.diagnostics={runnable:ve,programLog:te,vertexShader:{log:Q,prefix:y},fragmentShader:{log:J,prefix:x}})}r.deleteShader(N),r.deleteShader(R),w=new Fa(r,A),L=HM(r,A)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let L;this.getAttributes=function(){return L===void 0&&k(this),L};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(A,FM)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=R,this}let sE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new oE(e),t.set(e,n)),n}}class oE{constructor(e){this.id=sE++,this.code=e,this.usedTimes=0}}function lE(i,e,t,n,r,a){const l=new fc,c=new aE,h=new Set,f=[],p=new Map,g=n.logarithmicDepthBuffer;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return h.add(w),w===0?"uv":`uv${w}`}function A(w,L,B,z,q){const ee=z.fog,K=q.geometry,te=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,J=e.get(w.envMap||te,Q),ve=J&&J.mapping===Ga?J.image.height:null,me=_[w.type];w.precision!==null&&(m=n.getMaxPrecision(w.precision),m!==w.precision&&nt("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const De=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Pe=De!==void 0?De.length:0;let Re=0;K.morphAttributes.position!==void 0&&(Re=1),K.morphAttributes.normal!==void 0&&(Re=2),K.morphAttributes.color!==void 0&&(Re=3);let He,je,Ve,oe;if(me){const ft=ri[me];He=ft.vertexShader,je=ft.fragmentShader}else He=w.vertexShader,je=w.fragmentShader,c.update(w),Ve=c.getVertexShaderID(w),oe=c.getFragmentShaderID(w);const xe=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),Me=q.isInstancedMesh===!0,Xe=q.isBatchedMesh===!0,Ye=!!w.map,_t=!!w.matcap,rt=!!J,dt=!!w.aoMap,Ct=!!w.lightMap,at=!!w.bumpMap,Ht=!!w.normalMap,V=!!w.displacementMap,Ft=!!w.emissiveMap,gt=!!w.metalnessMap,St=!!w.roughnessMap,Oe=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,H=w.iridescence>0,le=w.sheen>0,ge=w.transmission>0,ce=Oe&&!!w.anisotropyMap,ke=U&&!!w.clearcoatMap,Te=U&&!!w.clearcoatNormalMap,qe=U&&!!w.clearcoatRoughnessMap,Ze=H&&!!w.iridescenceMap,be=H&&!!w.iridescenceThicknessMap,we=le&&!!w.sheenColorMap,Be=le&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Ie=!!w.specularColorMap,ot=!!w.specularIntensityMap,$=ge&&!!w.transmissionMap,Ae=ge&&!!w.thicknessMap,Ee=!!w.gradientMap,Fe=!!w.alphaMap,X=w.alphaTest>0,G=!!w.alphaHash,Ue=!!w.extensions;let tt=ui;w.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(tt=i.toneMapping);const bt={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:je,defines:w.defines,customVertexShaderID:Ve,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Xe,batchingColor:Xe&&q._colorsTexture!==null,instancing:Me,instancingColor:Me&&q.instanceColor!==null,instancingMorph:Me&&q.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Xr,alphaToCoverage:!!w.alphaToCoverage,map:Ye,matcap:_t,envMap:rt,envMapMode:rt&&J.mapping,envMapCubeUVHeight:ve,aoMap:dt,lightMap:Ct,bumpMap:at,normalMap:Ht,displacementMap:V,emissiveMap:Ft,normalMapObjectSpace:Ht&&w.normalMapType===C_,normalMapTangentSpace:Ht&&w.normalMapType===sd,metalnessMap:gt,roughnessMap:St,anisotropy:Oe,anisotropyMap:ce,clearcoat:U,clearcoatMap:ke,clearcoatNormalMap:Te,clearcoatRoughnessMap:qe,dispersion:E,iridescence:H,iridescenceMap:Ze,iridescenceThicknessMap:be,sheen:le,sheenColorMap:we,sheenRoughnessMap:Be,specularMap:ze,specularColorMap:Ie,specularIntensityMap:ot,transmission:ge,transmissionMap:$,thicknessMap:Ae,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===Br&&w.alphaToCoverage===!1,alphaMap:Fe,alphaTest:X,alphaHash:G,combine:w.combine,mapUv:Ye&&b(w.map.channel),aoMapUv:dt&&b(w.aoMap.channel),lightMapUv:Ct&&b(w.lightMap.channel),bumpMapUv:at&&b(w.bumpMap.channel),normalMapUv:Ht&&b(w.normalMap.channel),displacementMapUv:V&&b(w.displacementMap.channel),emissiveMapUv:Ft&&b(w.emissiveMap.channel),metalnessMapUv:gt&&b(w.metalnessMap.channel),roughnessMapUv:St&&b(w.roughnessMap.channel),anisotropyMapUv:ce&&b(w.anisotropyMap.channel),clearcoatMapUv:ke&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(w.sheenRoughnessMap.channel),specularMapUv:ze&&b(w.specularMap.channel),specularColorMapUv:Ie&&b(w.specularColorMap.channel),specularIntensityMapUv:ot&&b(w.specularIntensityMap.channel),transmissionMapUv:$&&b(w.transmissionMap.channel),thicknessMapUv:Ae&&b(w.thicknessMap.channel),alphaMapUv:Fe&&b(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ht||Oe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!K.attributes.uv&&(Ye||Fe),fog:!!ee,useFog:w.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||K.attributes.normal===void 0&&Ht===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:se,skinning:q.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Re,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:Ye&&w.map.isVideoTexture===!0&&wt.getTransfer(w.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&wt.getTransfer(w.emissiveMap.colorSpace)===Lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pn,flipSided:w.side===wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return bt.vertexUv1s=h.has(1),bt.vertexUv2s=h.has(2),bt.vertexUv3s=h.has(3),h.clear(),bt}function y(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)L.push(B),L.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(x(L,w),I(L,w),L.push(i.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function x(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function I(w,L){l.disableAll(),L.instancing&&l.enable(0),L.instancingColor&&l.enable(1),L.instancingMorph&&l.enable(2),L.matcap&&l.enable(3),L.envMap&&l.enable(4),L.normalMapObjectSpace&&l.enable(5),L.normalMapTangentSpace&&l.enable(6),L.clearcoat&&l.enable(7),L.iridescence&&l.enable(8),L.alphaTest&&l.enable(9),L.vertexColors&&l.enable(10),L.vertexAlphas&&l.enable(11),L.vertexUv1s&&l.enable(12),L.vertexUv2s&&l.enable(13),L.vertexUv3s&&l.enable(14),L.vertexTangents&&l.enable(15),L.anisotropy&&l.enable(16),L.alphaHash&&l.enable(17),L.batching&&l.enable(18),L.dispersion&&l.enable(19),L.batchingColor&&l.enable(20),L.gradientMap&&l.enable(21),w.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.reversedDepthBuffer&&l.enable(4),L.skinning&&l.enable(5),L.morphTargets&&l.enable(6),L.morphNormals&&l.enable(7),L.morphColors&&l.enable(8),L.premultipliedAlpha&&l.enable(9),L.shadowMapEnabled&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.transmission&&l.enable(15),L.sheen&&l.enable(16),L.opaque&&l.enable(17),L.pointsUvs&&l.enable(18),L.decodeVideoTexture&&l.enable(19),L.decodeVideoTextureEmissive&&l.enable(20),L.alphaToCoverage&&l.enable(21),w.push(l.mask)}function F(w){const L=_[w.type];let B;if(L){const z=ri[L];B=Tx.clone(z.uniforms)}else B=w.uniforms;return B}function P(w,L){let B=p.get(L);return B!==void 0?++B.usedTimes:(B=new rE(i,L,w,r),f.push(B),p.set(L,B)),B}function N(w){if(--w.usedTimes===0){const L=f.indexOf(w);f[L]=f[f.length-1],f.pop(),p.delete(w.cacheKey),w.destroy()}}function R(w){c.remove(w)}function k(){c.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:F,acquireProgram:P,releaseProgram:N,releaseShaderCache:R,programs:f,dispose:k}}function cE(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function r(l,c,h){i.get(l)[c]=h}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function uE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eh(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function c(m,_,b,A,y,x){let I=i[e];return I===void 0?(I={id:m.id,object:m,geometry:_,material:b,materialVariant:l(m),groupOrder:A,renderOrder:m.renderOrder,z:y,group:x},i[e]=I):(I.id=m.id,I.object=m,I.geometry=_,I.material=b,I.materialVariant=l(m),I.groupOrder=A,I.renderOrder=m.renderOrder,I.z=y,I.group=x),e++,I}function h(m,_,b,A,y,x){const I=c(m,_,b,A,y,x);b.transmission>0?n.push(I):b.transparent===!0?r.push(I):t.push(I)}function f(m,_,b,A,y,x){const I=c(m,_,b,A,y,x);b.transmission>0?n.unshift(I):b.transparent===!0?r.unshift(I):t.unshift(I)}function p(m,_){t.length>1&&t.sort(m||uE),n.length>1&&n.sort(_||Mh),r.length>1&&r.sort(_||Mh)}function g(){for(let m=e,_=i.length;m<_;m++){const b=i[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:h,unshift:f,finish:g,sort:p}}function hE(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new Eh,i.set(n,[l])):r>=a.length?(l=new Eh,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function dE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ct};break;case"SpotLight":t={position:new W,direction:new W,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function fE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pE=0;function mE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gE(i){const e=new dE,t=fE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new W);const r=new W,a=new Nt,l=new Nt;function c(f){let p=0,g=0,m=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let _=0,b=0,A=0,y=0,x=0,I=0,F=0,P=0,N=0,R=0,k=0;f.sort(mE);for(let L=0,B=f.length;L<B;L++){const z=f[L],q=z.color,ee=z.intensity,K=z.distance;let te=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===$r?te=z.shadow.map.texture:te=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)p+=q.r*ee,g+=q.g*ee,m+=q.b*ee;else if(z.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(z.sh.coefficients[Q],ee);k++}else if(z.isDirectionalLight){const Q=e.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const J=z.shadow,ve=t.get(z);ve.shadowIntensity=J.intensity,ve.shadowBias=J.bias,ve.shadowNormalBias=J.normalBias,ve.shadowRadius=J.radius,ve.shadowMapSize=J.mapSize,n.directionalShadow[_]=ve,n.directionalShadowMap[_]=te,n.directionalShadowMatrix[_]=z.shadow.matrix,I++}n.directional[_]=Q,_++}else if(z.isSpotLight){const Q=e.get(z);Q.position.setFromMatrixPosition(z.matrixWorld),Q.color.copy(q).multiplyScalar(ee),Q.distance=K,Q.coneCos=Math.cos(z.angle),Q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Q.decay=z.decay,n.spot[A]=Q;const J=z.shadow;if(z.map&&(n.spotLightMap[N]=z.map,N++,J.updateMatrices(z),z.castShadow&&R++),n.spotLightMatrix[A]=J.matrix,z.castShadow){const ve=t.get(z);ve.shadowIntensity=J.intensity,ve.shadowBias=J.bias,ve.shadowNormalBias=J.normalBias,ve.shadowRadius=J.radius,ve.shadowMapSize=J.mapSize,n.spotShadow[A]=ve,n.spotShadowMap[A]=te,P++}A++}else if(z.isRectAreaLight){const Q=e.get(z);Q.color.copy(q).multiplyScalar(ee),Q.halfWidth.set(z.width*.5,0,0),Q.halfHeight.set(0,z.height*.5,0),n.rectArea[y]=Q,y++}else if(z.isPointLight){const Q=e.get(z);if(Q.color.copy(z.color).multiplyScalar(z.intensity),Q.distance=z.distance,Q.decay=z.decay,z.castShadow){const J=z.shadow,ve=t.get(z);ve.shadowIntensity=J.intensity,ve.shadowBias=J.bias,ve.shadowNormalBias=J.normalBias,ve.shadowRadius=J.radius,ve.shadowMapSize=J.mapSize,ve.shadowCameraNear=J.camera.near,ve.shadowCameraFar=J.camera.far,n.pointShadow[b]=ve,n.pointShadowMap[b]=te,n.pointShadowMatrix[b]=z.shadow.matrix,F++}n.point[b]=Q,b++}else if(z.isHemisphereLight){const Q=e.get(z);Q.skyColor.copy(z.color).multiplyScalar(ee),Q.groundColor.copy(z.groundColor).multiplyScalar(ee),n.hemi[x]=Q,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const w=n.hash;(w.directionalLength!==_||w.pointLength!==b||w.spotLength!==A||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==I||w.numPointShadows!==F||w.numSpotShadows!==P||w.numSpotMaps!==N||w.numLightProbes!==k)&&(n.directional.length=_,n.spot.length=A,n.rectArea.length=y,n.point.length=b,n.hemi.length=x,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=F,n.pointShadowMap.length=F,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=F,n.spotLightMatrix.length=P+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=k,w.directionalLength=_,w.pointLength=b,w.spotLength=A,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=I,w.numPointShadows=F,w.numSpotShadows=P,w.numSpotMaps=N,w.numLightProbes=k,n.version=pE++)}function h(f,p){let g=0,m=0,_=0,b=0,A=0;const y=p.matrixWorldInverse;for(let x=0,I=f.length;x<I;x++){const F=f[x];if(F.isDirectionalLight){const P=n.directional[g];P.direction.setFromMatrixPosition(F.matrixWorld),r.setFromMatrixPosition(F.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(y),g++}else if(F.isSpotLight){const P=n.spot[_];P.position.setFromMatrixPosition(F.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(F.matrixWorld),r.setFromMatrixPosition(F.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(y),_++}else if(F.isRectAreaLight){const P=n.rectArea[b];P.position.setFromMatrixPosition(F.matrixWorld),P.position.applyMatrix4(y),l.identity(),a.copy(F.matrixWorld),a.premultiply(y),l.extractRotation(a),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),P.halfWidth.applyMatrix4(l),P.halfHeight.applyMatrix4(l),b++}else if(F.isPointLight){const P=n.point[m];P.position.setFromMatrixPosition(F.matrixWorld),P.position.applyMatrix4(y),m++}else if(F.isHemisphereLight){const P=n.hemi[A];P.direction.setFromMatrixPosition(F.matrixWorld),P.direction.transformDirection(y),A++}}}return{setup:c,setupView:h,state:n}}function wh(i){const e=new gE(i),t=[],n=[];function r(p){f.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function l(p){n.push(p)}function c(){e.setup(t)}function h(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:l}}function vE(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new wh(i),e.set(r,[c])):a>=l.length?(c=new wh(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const _E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xE=`uniform sampler2D shadow_pass;
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
}`,yE=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],SE=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Th=new Nt,hs=new W,Zo=new W;function bE(i,e,t){let n=new mc;const r=new Qe,a=new Qe,l=new Xt,c=new Px,h=new Dx,f={},p=t.maxTextureSize,g={[Xi]:wn,[wn]:Xi,[Pn]:Pn},m=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:_E,fragmentShader:xE}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const b=new yn;b.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ln(b,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let x=this.type;this.render=function(R,k,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||R.length===0)return;this.type===s_&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_s);const L=i.getRenderTarget(),B=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Ei),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ee=x!==this.type;ee&&k.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(te=>te.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,te=R.length;K<te;K++){const Q=R[K],J=Q.shadow;if(J===void 0){nt("WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const ve=J.getFrameExtents();r.multiply(ve),a.copy(J.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/ve.x),r.x=a.x*ve.x,J.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/ve.y),r.y=a.y*ve.y,J.mapSize.y=a.y));const me=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=me,J.map===null||ee===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===fs){if(Q.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new hi(r.x,r.y,{format:$r,type:Ti,minFilter:xn,magFilter:xn,generateMipmaps:!1}),J.map.texture.name=Q.name+".shadowMap",J.map.depthTexture=new Ds(r.x,r.y,si),J.map.depthTexture.name=Q.name+".shadowMapDepth",J.map.depthTexture.format=Ai,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=fn,J.map.depthTexture.magFilter=fn}else Q.isPointLight?(J.map=new Md(r.x),J.map.depthTexture=new cx(r.x,di)):(J.map=new hi(r.x,r.y),J.map.depthTexture=new Ds(r.x,r.y,di)),J.map.depthTexture.name=Q.name+".shadowMap",J.map.depthTexture.format=Ai,this.type===_s?(J.map.depthTexture.compareFunction=me?hc:uc,J.map.depthTexture.minFilter=xn,J.map.depthTexture.magFilter=xn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=fn,J.map.depthTexture.magFilter=fn);J.camera.updateProjectionMatrix()}const De=J.map.isWebGLCubeRenderTarget?6:1;for(let Pe=0;Pe<De;Pe++){if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,Pe),i.clear();else{Pe===0&&(i.setRenderTarget(J.map),i.clear());const Re=J.getViewport(Pe);l.set(a.x*Re.x,a.y*Re.y,a.x*Re.z,a.y*Re.w),q.viewport(l)}if(Q.isPointLight){const Re=J.camera,He=J.matrix,je=Q.distance||Re.far;je!==Re.far&&(Re.far=je,Re.updateProjectionMatrix()),hs.setFromMatrixPosition(Q.matrixWorld),Re.position.copy(hs),Zo.copy(Re.position),Zo.add(yE[Pe]),Re.up.copy(SE[Pe]),Re.lookAt(Zo),Re.updateMatrixWorld(),He.makeTranslation(-hs.x,-hs.y,-hs.z),Th.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Th,Re.coordinateSystem,Re.reversedDepth)}else J.updateMatrices(Q);n=J.getFrustum(),P(k,w,J.camera,Q,this.type)}J.isPointLightShadow!==!0&&this.type===fs&&I(J,w),J.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(L,B,z)};function I(R,k){const w=e.update(A);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,_.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hi(r.x,r.y,{format:$r,type:Ti})),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(k,null,w,m,A,null),_.uniforms.shadow_pass.value=R.mapPass.texture,_.uniforms.resolution.value=R.mapSize,_.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(k,null,w,_,A,null)}function F(R,k,w,L){let B=null;const z=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)B=z;else if(B=w.isPointLight===!0?h:c,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const q=B.uuid,ee=k.uuid;let K=f[q];K===void 0&&(K={},f[q]=K);let te=K[ee];te===void 0&&(te=B.clone(),K[ee]=te,k.addEventListener("dispose",N)),B=te}if(B.visible=k.visible,B.wireframe=k.wireframe,L===fs?B.side=k.shadowSide!==null?k.shadowSide:k.side:B.side=k.shadowSide!==null?k.shadowSide:g[k.side],B.alphaMap=k.alphaMap,B.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,B.map=k.map,B.clipShadows=k.clipShadows,B.clippingPlanes=k.clippingPlanes,B.clipIntersection=k.clipIntersection,B.displacementMap=k.displacementMap,B.displacementScale=k.displacementScale,B.displacementBias=k.displacementBias,B.wireframeLinewidth=k.wireframeLinewidth,B.linewidth=k.linewidth,w.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const q=i.properties.get(B);q.light=w}return B}function P(R,k,w,L,B){if(R.visible===!1)return;if(R.layers.test(k.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===fs)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);const ee=e.update(R),K=R.material;if(Array.isArray(K)){const te=ee.groups;for(let Q=0,J=te.length;Q<J;Q++){const ve=te[Q],me=K[ve.materialIndex];if(me&&me.visible){const De=F(R,me,L,B);R.onBeforeShadow(i,R,k,w,ee,De,ve),i.renderBufferDirect(w,null,ee,De,R,ve),R.onAfterShadow(i,R,k,w,ee,De,ve)}}}else if(K.visible){const te=F(R,K,L,B);R.onBeforeShadow(i,R,k,w,ee,te,null),i.renderBufferDirect(w,null,ee,te,R,null),R.onAfterShadow(i,R,k,w,ee,te,null)}}const q=R.children;for(let ee=0,K=q.length;ee<K;ee++)P(q[ee],k,w,L,B)}function N(R){R.target.removeEventListener("dispose",N);for(const w in f){const L=f[w],B=R.target.uuid;B in L&&(L[B].dispose(),delete L[B])}}}function ME(i,e){function t(){let $=!1;const Ae=new Xt;let Ee=null;const Fe=new Xt(0,0,0,0);return{setMask:function(X){Ee!==X&&!$&&(i.colorMask(X,X,X,X),Ee=X)},setLocked:function(X){$=X},setClear:function(X,G,Ue,tt,bt){bt===!0&&(X*=tt,G*=tt,Ue*=tt),Ae.set(X,G,Ue,tt),Fe.equals(Ae)===!1&&(i.clearColor(X,G,Ue,tt),Fe.copy(Ae))},reset:function(){$=!1,Ee=null,Fe.set(-1,0,0,0)}}}function n(){let $=!1,Ae=!1,Ee=null,Fe=null,X=null;return{setReversed:function(G){if(Ae!==G){const Ue=e.get("EXT_clip_control");G?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ae=G;const tt=X;X=null,this.setClear(tt)}},getReversed:function(){return Ae},setTest:function(G){G?xe(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(G){Ee!==G&&!$&&(i.depthMask(G),Ee=G)},setFunc:function(G){if(Ae&&(G=k_[G]),Fe!==G){switch(G){case cl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case Hr:i.depthFunc(i.LEQUAL);break;case dl:i.depthFunc(i.EQUAL);break;case fl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Fe=G}},setLocked:function(G){$=G},setClear:function(G){X!==G&&(X=G,Ae&&(G=1-G),i.clearDepth(G))},reset:function(){$=!1,Ee=null,Fe=null,X=null,Ae=!1}}}function r(){let $=!1,Ae=null,Ee=null,Fe=null,X=null,G=null,Ue=null,tt=null,bt=null;return{setTest:function(ft){$||(ft?xe(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(ft){Ae!==ft&&!$&&(i.stencilMask(ft),Ae=ft)},setFunc:function(ft,Gn,Zt){(Ee!==ft||Fe!==Gn||X!==Zt)&&(i.stencilFunc(ft,Gn,Zt),Ee=ft,Fe=Gn,X=Zt)},setOp:function(ft,Gn,Zt){(G!==ft||Ue!==Gn||tt!==Zt)&&(i.stencilOp(ft,Gn,Zt),G=ft,Ue=Gn,tt=Zt)},setLocked:function(ft){$=ft},setClear:function(ft){bt!==ft&&(i.clearStencil(ft),bt=ft)},reset:function(){$=!1,Ae=null,Ee=null,Fe=null,X=null,G=null,Ue=null,tt=null,bt=null}}}const a=new t,l=new n,c=new r,h=new WeakMap,f=new WeakMap;let p={},g={},m=new WeakMap,_=[],b=null,A=!1,y=null,x=null,I=null,F=null,P=null,N=null,R=null,k=new ct(0,0,0),w=0,L=!1,B=null,z=null,q=null,ee=null,K=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,J=0;const ve=i.getParameter(i.VERSION);ve.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ve)[1]),Q=J>=1):ve.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),Q=J>=2);let me=null,De={};const Pe=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),He=new Xt().fromArray(Pe),je=new Xt().fromArray(Re);function Ve($,Ae,Ee,Fe){const X=new Uint8Array(4),G=i.createTexture();i.bindTexture($,G),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<Ee;Ue++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(Ae+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return G}const oe={};oe[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(i.DEPTH_TEST),l.setFunc(Hr),at(!1),Ht(Eu),xe(i.CULL_FACE),dt(Ei);function xe($){p[$]!==!0&&(i.enable($),p[$]=!0)}function se($){p[$]!==!1&&(i.disable($),p[$]=!1)}function Me($,Ae){return g[$]!==Ae?(i.bindFramebuffer($,Ae),g[$]=Ae,$===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ae),$===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Xe($,Ae){let Ee=_,Fe=!1;if($){Ee=m.get(Ae),Ee===void 0&&(Ee=[],m.set(Ae,Ee));const X=$.textures;if(Ee.length!==X.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let G=0,Ue=X.length;G<Ue;G++)Ee[G]=i.COLOR_ATTACHMENT0+G;Ee.length=X.length,Fe=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Fe=!0);Fe&&i.drawBuffers(Ee)}function Ye($){return b!==$?(i.useProgram($),b=$,!0):!1}const _t={[hr]:i.FUNC_ADD,[o_]:i.FUNC_SUBTRACT,[l_]:i.FUNC_REVERSE_SUBTRACT};_t[c_]=i.MIN,_t[u_]=i.MAX;const rt={[h_]:i.ZERO,[d_]:i.ONE,[f_]:i.SRC_COLOR,[ol]:i.SRC_ALPHA,[x_]:i.SRC_ALPHA_SATURATE,[v_]:i.DST_COLOR,[m_]:i.DST_ALPHA,[p_]:i.ONE_MINUS_SRC_COLOR,[ll]:i.ONE_MINUS_SRC_ALPHA,[__]:i.ONE_MINUS_DST_COLOR,[g_]:i.ONE_MINUS_DST_ALPHA,[y_]:i.CONSTANT_COLOR,[S_]:i.ONE_MINUS_CONSTANT_COLOR,[b_]:i.CONSTANT_ALPHA,[M_]:i.ONE_MINUS_CONSTANT_ALPHA};function dt($,Ae,Ee,Fe,X,G,Ue,tt,bt,ft){if($===Ei){A===!0&&(se(i.BLEND),A=!1);return}if(A===!1&&(xe(i.BLEND),A=!0),$!==a_){if($!==y||ft!==L){if((x!==hr||P!==hr)&&(i.blendEquation(i.FUNC_ADD),x=hr,P=hr),ft)switch($){case Br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wu:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Et("WebGLState: Invalid blending: ",$);break}else switch($){case Br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tu:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",$);break}I=null,F=null,N=null,R=null,k.set(0,0,0),w=0,y=$,L=ft}return}X=X||Ae,G=G||Ee,Ue=Ue||Fe,(Ae!==x||X!==P)&&(i.blendEquationSeparate(_t[Ae],_t[X]),x=Ae,P=X),(Ee!==I||Fe!==F||G!==N||Ue!==R)&&(i.blendFuncSeparate(rt[Ee],rt[Fe],rt[G],rt[Ue]),I=Ee,F=Fe,N=G,R=Ue),(tt.equals(k)===!1||bt!==w)&&(i.blendColor(tt.r,tt.g,tt.b,bt),k.copy(tt),w=bt),y=$,L=!1}function Ct($,Ae){$.side===Pn?se(i.CULL_FACE):xe(i.CULL_FACE);let Ee=$.side===wn;Ae&&(Ee=!Ee),at(Ee),$.blending===Br&&$.transparent===!1?dt(Ei):dt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),l.setFunc($.depthFunc),l.setTest($.depthTest),l.setMask($.depthWrite),a.setMask($.colorWrite);const Fe=$.stencilWrite;c.setTest(Fe),Fe&&(c.setMask($.stencilWriteMask),c.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),c.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Ft($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function at($){B!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),B=$)}function Ht($){$!==i_?(xe(i.CULL_FACE),$!==z&&($===Eu?i.cullFace(i.BACK):$===r_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),z=$}function V($){$!==q&&(Q&&i.lineWidth($),q=$)}function Ft($,Ae,Ee){$?(xe(i.POLYGON_OFFSET_FILL),(ee!==Ae||K!==Ee)&&(ee=Ae,K=Ee,l.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,Ee))):se(i.POLYGON_OFFSET_FILL)}function gt($){$?xe(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function St($){$===void 0&&($=i.TEXTURE0+te-1),me!==$&&(i.activeTexture($),me=$)}function Oe($,Ae,Ee){Ee===void 0&&(me===null?Ee=i.TEXTURE0+te-1:Ee=me);let Fe=De[Ee];Fe===void 0&&(Fe={type:void 0,texture:void 0},De[Ee]=Fe),(Fe.type!==$||Fe.texture!==Ae)&&(me!==Ee&&(i.activeTexture(Ee),me=Ee),i.bindTexture($,Ae||oe[$]),Fe.type=$,Fe.texture=Ae)}function U(){const $=De[me];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch($){Et("WebGLState:",$)}}function H(){try{i.compressedTexImage3D(...arguments)}catch($){Et("WebGLState:",$)}}function le(){try{i.texSubImage2D(...arguments)}catch($){Et("WebGLState:",$)}}function ge(){try{i.texSubImage3D(...arguments)}catch($){Et("WebGLState:",$)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch($){Et("WebGLState:",$)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch($){Et("WebGLState:",$)}}function Te(){try{i.texStorage2D(...arguments)}catch($){Et("WebGLState:",$)}}function qe(){try{i.texStorage3D(...arguments)}catch($){Et("WebGLState:",$)}}function Ze(){try{i.texImage2D(...arguments)}catch($){Et("WebGLState:",$)}}function be(){try{i.texImage3D(...arguments)}catch($){Et("WebGLState:",$)}}function we($){He.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),He.copy($))}function Be($){je.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),je.copy($))}function ze($,Ae){let Ee=f.get(Ae);Ee===void 0&&(Ee=new WeakMap,f.set(Ae,Ee));let Fe=Ee.get($);Fe===void 0&&(Fe=i.getUniformBlockIndex(Ae,$.name),Ee.set($,Fe))}function Ie($,Ae){const Fe=f.get(Ae).get($);h.get(Ae)!==Fe&&(i.uniformBlockBinding(Ae,Fe,$.__bindingPointIndex),h.set(Ae,Fe))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},me=null,De={},g={},m=new WeakMap,_=[],b=null,A=!1,y=null,x=null,I=null,F=null,P=null,N=null,R=null,k=new ct(0,0,0),w=0,L=!1,B=null,z=null,q=null,ee=null,K=null,He.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xe,disable:se,bindFramebuffer:Me,drawBuffers:Xe,useProgram:Ye,setBlending:dt,setMaterial:Ct,setFlipSided:at,setCullFace:Ht,setLineWidth:V,setPolygonOffset:Ft,setScissorTest:gt,activeTexture:St,bindTexture:Oe,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:Ze,texImage3D:be,updateUBOMapping:ze,uniformBlockBinding:Ie,texStorage2D:Te,texStorage3D:qe,texSubImage2D:le,texSubImage3D:ge,compressedTexSubImage2D:ce,compressedTexSubImage3D:ke,scissor:we,viewport:Be,reset:ot}}function EE(i,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Qe,p=new WeakMap;let g;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return _?new OffscreenCanvas(U,E):Rs("canvas")}function A(U,E,H){let le=1;const ge=Oe(U);if((ge.width>H||ge.height>H)&&(le=H/Math.max(ge.width,ge.height)),le<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ce=Math.floor(le*ge.width),ke=Math.floor(le*ge.height);g===void 0&&(g=b(ce,ke));const Te=E?b(ce,ke):g;return Te.width=ce,Te.height=ke,Te.getContext("2d").drawImage(U,0,0,ce,ke),nt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+ke+")."),Te}else return"data"in U&&nt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){i.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function F(U,E,H,le,ge=!1){if(U!==null){if(i[U]!==void 0)return i[U];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ce=E;if(E===i.RED&&(H===i.FLOAT&&(ce=i.R32F),H===i.HALF_FLOAT&&(ce=i.R16F),H===i.UNSIGNED_BYTE&&(ce=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ce=i.R8UI),H===i.UNSIGNED_SHORT&&(ce=i.R16UI),H===i.UNSIGNED_INT&&(ce=i.R32UI),H===i.BYTE&&(ce=i.R8I),H===i.SHORT&&(ce=i.R16I),H===i.INT&&(ce=i.R32I)),E===i.RG&&(H===i.FLOAT&&(ce=i.RG32F),H===i.HALF_FLOAT&&(ce=i.RG16F),H===i.UNSIGNED_BYTE&&(ce=i.RG8)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ce=i.RG8UI),H===i.UNSIGNED_SHORT&&(ce=i.RG16UI),H===i.UNSIGNED_INT&&(ce=i.RG32UI),H===i.BYTE&&(ce=i.RG8I),H===i.SHORT&&(ce=i.RG16I),H===i.INT&&(ce=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),H===i.UNSIGNED_INT&&(ce=i.RGB32UI),H===i.BYTE&&(ce=i.RGB8I),H===i.SHORT&&(ce=i.RGB16I),H===i.INT&&(ce=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),H===i.UNSIGNED_INT&&(ce=i.RGBA32UI),H===i.BYTE&&(ce=i.RGBA8I),H===i.SHORT&&(ce=i.RGBA16I),H===i.INT&&(ce=i.RGBA32I)),E===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),E===i.RGBA){const ke=ge?Ia:wt.getTransfer(le);H===i.FLOAT&&(ce=i.RGBA32F),H===i.HALF_FLOAT&&(ce=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ce=ke===Lt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(U,E){let H;return U?E===null||E===di||E===As?H=i.DEPTH24_STENCIL8:E===si?H=i.DEPTH32F_STENCIL8:E===Ts&&(H=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===di||E===As?H=i.DEPTH_COMPONENT24:E===si?H=i.DEPTH_COMPONENT32F:E===Ts&&(H=i.DEPTH_COMPONENT16),H}function N(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==fn&&U.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function R(U){const E=U.target;E.removeEventListener("dispose",R),w(E),E.isVideoTexture&&p.delete(E)}function k(U){const E=U.target;E.removeEventListener("dispose",k),B(E)}function w(U){const E=n.get(U);if(E.__webglInit===void 0)return;const H=U.source,le=m.get(H);if(le){const ge=le[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&L(U),Object.keys(le).length===0&&m.delete(H)}n.remove(U)}function L(U){const E=n.get(U);i.deleteTexture(E.__webglTexture);const H=U.source,le=m.get(H);delete le[E.__cacheKey],l.memory.textures--}function B(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let ge=0;ge<E.__webglFramebuffer[le].length;ge++)i.deleteFramebuffer(E.__webglFramebuffer[le][ge]);else i.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)i.deleteFramebuffer(E.__webglFramebuffer[le]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=U.textures;for(let le=0,ge=H.length;le<ge;le++){const ce=n.get(H[le]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),l.memory.textures--),n.remove(H[le])}n.remove(U)}let z=0;function q(){z=0}function ee(){const U=z;return U>=r.maxTextures&&nt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),z+=1,U}function K(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function te(U,E){const H=n.get(U);if(U.isVideoTexture&&gt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&H.__version!==U.version){const le=U.image;if(le===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,U,E);return}}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function Q(U,E){const H=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){oe(H,U,E);return}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function J(U,E){const H=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){oe(H,U,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function ve(U,E){const H=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&H.__version!==U.version){xe(H,U,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const me={[ws]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[gl]:i.MIRRORED_REPEAT},De={[fn]:i.NEAREST,[T_]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[pr]:i.LINEAR_MIPMAP_LINEAR},Pe={[R_]:i.NEVER,[I_]:i.ALWAYS,[P_]:i.LESS,[uc]:i.LEQUAL,[D_]:i.EQUAL,[hc]:i.GEQUAL,[L_]:i.GREATER,[F_]:i.NOTEQUAL};function Re(U,E){if(E.type===si&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xn||E.magFilter===vo||E.magFilter===aa||E.magFilter===pr||E.minFilter===xn||E.minFilter===vo||E.minFilter===aa||E.minFilter===pr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,me[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,me[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,me[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,De[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,De[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fn||E.minFilter!==aa&&E.minFilter!==pr||E.type===si&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(U,E){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",R));const le=E.source;let ge=m.get(le);ge===void 0&&(ge={},m.set(le,ge));const ce=K(E);if(ce!==U.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,H=!0),ge[ce].usedTimes++;const ke=ge[U.__cacheKey];ke!==void 0&&(ge[U.__cacheKey].usedTimes--,ke.usedTimes===0&&L(E)),U.__cacheKey=ce,U.__webglTexture=ge[ce].texture}return H}function je(U,E,H){return Math.floor(Math.floor(U/H)/E)}function Ve(U,E,H,le){const ce=U.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,H,le,E.data);else{ce.sort((be,we)=>be.start-we.start);let ke=0;for(let be=1;be<ce.length;be++){const we=ce[ke],Be=ce[be],ze=we.start+we.count,Ie=je(Be.start,E.width,4),ot=je(we.start,E.width,4);Be.start<=ze+1&&Ie===ot&&je(Be.start+Be.count-1,E.width,4)===Ie?we.count=Math.max(we.count,Be.start+Be.count-we.start):(++ke,ce[ke]=Be)}ce.length=ke+1;const Te=i.getParameter(i.UNPACK_ROW_LENGTH),qe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ze=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let be=0,we=ce.length;be<we;be++){const Be=ce[be],ze=Math.floor(Be.start/4),Ie=Math.ceil(Be.count/4),ot=ze%E.width,$=Math.floor(ze/E.width),Ae=Ie,Ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,$),t.texSubImage2D(i.TEXTURE_2D,0,ot,$,Ae,Ee,H,le,E.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ze)}}function oe(U,E,H){let le=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=i.TEXTURE_3D);const ge=He(U,E),ce=E.source;t.bindTexture(le,U.__webglTexture,i.TEXTURE0+H);const ke=n.get(ce);if(ce.version!==ke.__version||ge===!0){t.activeTexture(i.TEXTURE0+H);const Te=wt.getPrimaries(wt.workingColorSpace),qe=E.colorSpace===Vi?null:wt.getPrimaries(E.colorSpace),Ze=E.colorSpace===Vi||Te===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let be=A(E.image,!1,r.maxTextureSize);be=St(E,be);const we=a.convert(E.format,E.colorSpace),Be=a.convert(E.type);let ze=F(E.internalFormat,we,Be,E.colorSpace,E.isVideoTexture);Re(le,E);let Ie;const ot=E.mipmaps,$=E.isVideoTexture!==!0,Ae=ke.__version===void 0||ge===!0,Ee=ce.dataReady,Fe=N(E,be);if(E.isDepthTexture)ze=P(E.format===mr,E.type),Ae&&($?t.texStorage2D(i.TEXTURE_2D,1,ze,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,ze,be.width,be.height,0,we,Be,null));else if(E.isDataTexture)if(ot.length>0){$&&Ae&&t.texStorage2D(i.TEXTURE_2D,Fe,ze,ot[0].width,ot[0].height);for(let X=0,G=ot.length;X<G;X++)Ie=ot[X],$?Ee&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ie.width,Ie.height,we,Be,Ie.data):t.texImage2D(i.TEXTURE_2D,X,ze,Ie.width,Ie.height,0,we,Be,Ie.data);E.generateMipmaps=!1}else $?(Ae&&t.texStorage2D(i.TEXTURE_2D,Fe,ze,be.width,be.height),Ee&&Ve(E,be,we,Be)):t.texImage2D(i.TEXTURE_2D,0,ze,be.width,be.height,0,we,Be,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,ze,ot[0].width,ot[0].height,be.depth);for(let X=0,G=ot.length;X<G;X++)if(Ie=ot[X],E.format!==qn)if(we!==null)if($){if(Ee)if(E.layerUpdates.size>0){const Ue=ih(Ie.width,Ie.height,E.format,E.type);for(const tt of E.layerUpdates){const bt=Ie.data.subarray(tt*Ue/Ie.data.BYTES_PER_ELEMENT,(tt+1)*Ue/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,tt,Ie.width,Ie.height,1,we,bt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ie.width,Ie.height,be.depth,we,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ze,Ie.width,Ie.height,be.depth,0,Ie.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Ie.width,Ie.height,be.depth,we,Be,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ze,Ie.width,Ie.height,be.depth,0,we,Be,Ie.data)}else{$&&Ae&&t.texStorage2D(i.TEXTURE_2D,Fe,ze,ot[0].width,ot[0].height);for(let X=0,G=ot.length;X<G;X++)Ie=ot[X],E.format!==qn?we!==null?$?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ze,Ie.width,Ie.height,0,Ie.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?Ee&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ie.width,Ie.height,we,Be,Ie.data):t.texImage2D(i.TEXTURE_2D,X,ze,Ie.width,Ie.height,0,we,Be,Ie.data)}else if(E.isDataArrayTexture)if($){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,ze,be.width,be.height,be.depth),Ee)if(E.layerUpdates.size>0){const X=ih(be.width,be.height,E.format,E.type);for(const G of E.layerUpdates){const Ue=be.data.subarray(G*X/be.data.BYTES_PER_ELEMENT,(G+1)*X/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,G,be.width,be.height,1,we,Be,Ue)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,we,Be,be.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,be.width,be.height,be.depth,0,we,Be,be.data);else if(E.isData3DTexture)$?(Ae&&t.texStorage3D(i.TEXTURE_3D,Fe,ze,be.width,be.height,be.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,we,Be,be.data)):t.texImage3D(i.TEXTURE_3D,0,ze,be.width,be.height,be.depth,0,we,Be,be.data);else if(E.isFramebufferTexture){if(Ae)if($)t.texStorage2D(i.TEXTURE_2D,Fe,ze,be.width,be.height);else{let X=be.width,G=be.height;for(let Ue=0;Ue<Fe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,ze,X,G,0,we,Be,null),X>>=1,G>>=1}}else if(ot.length>0){if($&&Ae){const X=Oe(ot[0]);t.texStorage2D(i.TEXTURE_2D,Fe,ze,X.width,X.height)}for(let X=0,G=ot.length;X<G;X++)Ie=ot[X],$?Ee&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,we,Be,Ie):t.texImage2D(i.TEXTURE_2D,X,ze,we,Be,Ie);E.generateMipmaps=!1}else if($){if(Ae){const X=Oe(be);t.texStorage2D(i.TEXTURE_2D,Fe,ze,X.width,X.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Be,be)}else t.texImage2D(i.TEXTURE_2D,0,ze,we,Be,be);y(E)&&x(le),ke.__version=ce.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function xe(U,E,H){if(E.image.length!==6)return;const le=He(U,E),ge=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+H);const ce=n.get(ge);if(ge.version!==ce.__version||le===!0){t.activeTexture(i.TEXTURE0+H);const ke=wt.getPrimaries(wt.workingColorSpace),Te=E.colorSpace===Vi?null:wt.getPrimaries(E.colorSpace),qe=E.colorSpace===Vi||ke===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const Ze=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,we=[];for(let G=0;G<6;G++)!Ze&&!be?we[G]=A(E.image[G],!0,r.maxCubemapSize):we[G]=be?E.image[G].image:E.image[G],we[G]=St(E,we[G]);const Be=we[0],ze=a.convert(E.format,E.colorSpace),Ie=a.convert(E.type),ot=F(E.internalFormat,ze,Ie,E.colorSpace),$=E.isVideoTexture!==!0,Ae=ce.__version===void 0||le===!0,Ee=ge.dataReady;let Fe=N(E,Be);Re(i.TEXTURE_CUBE_MAP,E);let X;if(Ze){$&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,ot,Be.width,Be.height);for(let G=0;G<6;G++){X=we[G].mipmaps;for(let Ue=0;Ue<X.length;Ue++){const tt=X[Ue];E.format!==qn?ze!==null?$?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue,0,0,tt.width,tt.height,ze,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue,ot,tt.width,tt.height,0,tt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue,0,0,tt.width,tt.height,ze,Ie,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue,ot,tt.width,tt.height,0,ze,Ie,tt.data)}}}else{if(X=E.mipmaps,$&&Ae){X.length>0&&Fe++;const G=Oe(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,ot,G.width,G.height)}for(let G=0;G<6;G++)if(be){$?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,we[G].width,we[G].height,ze,Ie,we[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ot,we[G].width,we[G].height,0,ze,Ie,we[G].data);for(let Ue=0;Ue<X.length;Ue++){const bt=X[Ue].image[G].image;$?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue+1,0,0,bt.width,bt.height,ze,Ie,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue+1,ot,bt.width,bt.height,0,ze,Ie,bt.data)}}else{$?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ze,Ie,we[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ot,ze,Ie,we[G]);for(let Ue=0;Ue<X.length;Ue++){const tt=X[Ue];$?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue+1,0,0,ze,Ie,tt.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue+1,ot,ze,Ie,tt.image[G])}}}y(E)&&x(i.TEXTURE_CUBE_MAP),ce.__version=ge.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function se(U,E,H,le,ge,ce){const ke=a.convert(H.format,H.colorSpace),Te=a.convert(H.type),qe=F(H.internalFormat,ke,Te,H.colorSpace),Ze=n.get(E),be=n.get(H);if(be.__renderTarget=E,!Ze.__hasExternalTextures){const we=Math.max(1,E.width>>ce),Be=Math.max(1,E.height>>ce);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,qe,we,Be,E.depth,0,ke,Te,null):t.texImage2D(ge,ce,qe,we,Be,0,ke,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Ft(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ge,be.__webglTexture,0,V(E)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ge,be.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(U,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){const le=E.depthTexture,ge=le&&le.isDepthTexture?le.type:null,ce=P(E.stencilBuffer,ge),ke=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(E),ce,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(E),ce,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ce,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,U)}else{const le=E.textures;for(let ge=0;ge<le.length;ge++){const ce=le[ge],ke=a.convert(ce.format,ce.colorSpace),Te=a.convert(ce.type),qe=F(ce.internalFormat,ke,Te,ce.colorSpace);Ft(E)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(E),qe,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(E),qe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,qe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(U,E,H){const le=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=n.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),ge.__webglTexture===void 0){ge.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),Re(i.TEXTURE_CUBE_MAP,E.depthTexture);const Ze=a.convert(E.depthTexture.format),be=a.convert(E.depthTexture.type);let we;E.depthTexture.format===Ai?we=i.DEPTH_COMPONENT24:E.depthTexture.format===mr&&(we=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,we,E.width,E.height,0,Ze,be,null)}}else te(E.depthTexture,0);const ce=ge.__webglTexture,ke=V(E),Te=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,qe=E.depthTexture.format===mr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ai)Ft(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,qe,Te,ce,0,ke):i.framebufferTexture2D(i.FRAMEBUFFER,qe,Te,ce,0);else if(E.depthTexture.format===mr)Ft(E)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,qe,Te,ce,0,ke):i.framebufferTexture2D(i.FRAMEBUFFER,qe,Te,ce,0);else throw new Error("Unknown depthTexture format")}function Ye(U){const E=n.get(U),H=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const le=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",ge)};le.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=le}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let le=0;le<6;le++)Xe(E.__webglFramebuffer[le],U,le);else{const le=U.texture.mipmaps;le&&le.length>0?Xe(E.__webglFramebuffer[0],U,0):Xe(E.__webglFramebuffer,U,0)}else if(H){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=i.createRenderbuffer(),Me(E.__webglDepthbuffer[le],U,!1);else{const ge=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,ce)}}else{const le=U.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Me(E.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(U,E,H){const le=n.get(U);E!==void 0&&se(le.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ye(U)}function rt(U){const E=U.texture,H=n.get(U),le=n.get(E);U.addEventListener("dispose",k);const ge=U.textures,ce=U.isWebGLCubeRenderTarget===!0,ke=ge.length>1;if(ke||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=E.version,l.memory.textures++),ce){H.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[Te]=[];for(let qe=0;qe<E.mipmaps.length;qe++)H.__webglFramebuffer[Te][qe]=i.createFramebuffer()}else H.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)H.__webglFramebuffer[Te]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Te=0,qe=ge.length;Te<qe;Te++){const Ze=n.get(ge[Te]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),l.memory.textures++)}if(U.samples>0&&Ft(U)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Te=0;Te<ge.length;Te++){const qe=ge[Te];H.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Te]);const Ze=a.convert(qe.format,qe.colorSpace),be=a.convert(qe.type),we=F(qe.internalFormat,Ze,be,qe.colorSpace,U.isXRRenderTarget===!0),Be=V(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,we,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,H.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Re(i.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)se(H.__webglFramebuffer[Te][qe],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe);else se(H.__webglFramebuffer[Te],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);y(E)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Te=0,qe=ge.length;Te<qe;Te++){const Ze=ge[Te],be=n.get(Ze);let we=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,be.__webglTexture),Re(we,Ze),se(H.__webglFramebuffer,U,Ze,i.COLOR_ATTACHMENT0+Te,we,0),y(Ze)&&x(we)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,le.__webglTexture),Re(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)se(H.__webglFramebuffer[qe],U,E,i.COLOR_ATTACHMENT0,Te,qe);else se(H.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,Te,0);y(E)&&x(Te),t.unbindTexture()}U.depthBuffer&&Ye(U)}function dt(U){const E=U.textures;for(let H=0,le=E.length;H<le;H++){const ge=E[H];if(y(ge)){const ce=I(U),ke=n.get(ge).__webglTexture;t.bindTexture(ce,ke),x(ce),t.unbindTexture()}}}const Ct=[],at=[];function Ht(U){if(U.samples>0){if(Ft(U)===!1){const E=U.textures,H=U.width,le=U.height;let ge=i.COLOR_BUFFER_BIT;const ce=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(U),Te=E.length>1;if(Te)for(let Ze=0;Ze<E.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const qe=U.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ze=0;Ze<E.length;Ze++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ze]);const be=n.get(E[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,be,0)}i.blitFramebuffer(0,0,H,le,0,0,H,le,ge,i.NEAREST),h===!0&&(Ct.length=0,at.length=0,Ct.push(i.COLOR_ATTACHMENT0+Ze),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ct.push(ce),at.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,at)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Ze=0;Ze<E.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ze]);const be=n.get(E[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function V(U){return Math.min(r.maxSamples,U.samples)}function Ft(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(U){const E=l.render.frame;p.get(U)!==E&&(p.set(U,E),U.update())}function St(U,E){const H=U.colorSpace,le=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==Xr&&H!==Vi&&(wt.getTransfer(H)===Lt?(le!==qn||ge!==Dn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",H)),E}function Oe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=ee,this.resetTextureUnits=q,this.setTexture2D=te,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=ve,this.rebindTextures=_t,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wE(i,e){function t(n,r=Vi){let a;const l=wt.getTransfer(r);if(n===Dn)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===td)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Ti)return i.HALF_FLOAT;if(n===nd)return i.ALPHA;if(n===id)return i.RGB;if(n===qn)return i.RGBA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===rd)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===$r)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===cc)return i.RGBA_INTEGER;if(n===Ra||n===Pa||n===Da||n===La)if(l===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===_l||n===xl||n===yl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===vl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===bl||n===Ml||n===El||n===wl||n===Tl||n===Al)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Sl||n===bl)return l===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ml)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===El)return a.COMPRESSED_R11_EAC;if(n===wl)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Tl)return a.COMPRESSED_RG11_EAC;if(n===Al)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Fl||n===Il||n===Ul||n===Nl||n===Ol||n===kl||n===Bl||n===zl||n===Gl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Cl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ll)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ul)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return l===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vl||n===Hl||n===Wl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Vl)return l===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Xl||n===jl||n===ql)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===$l)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ql)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
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

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pi({vertexShader:TE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RE extends Yr{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",h=1,f=null,p=null,g=null,m=null,_=null,b=null;const A=typeof XRWebGLBinding<"u",y=new CE,x={},I=t.getContextAttributes();let F=null,P=null;const N=[],R=[],k=new Qe;let w=null;const L=new Rn;L.viewport=new Xt;const B=new Rn;B.viewport=new Xt;const z=[L,B],q=new Gx;let ee=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let xe=N[oe];return xe===void 0&&(xe=new wo,N[oe]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(oe){let xe=N[oe];return xe===void 0&&(xe=new wo,N[oe]=xe),xe.getGripSpace()},this.getHand=function(oe){let xe=N[oe];return xe===void 0&&(xe=new wo,N[oe]=xe),xe.getHandSpace()};function te(oe){const xe=R.indexOf(oe.inputSource);if(xe===-1)return;const se=N[xe];se!==void 0&&(se.update(oe.inputSource,oe.frame,f||l),se.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Q(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",J);for(let oe=0;oe<N.length;oe++){const xe=R[oe];xe!==null&&(R[oe]=null,N[oe].disconnect(xe))}ee=null,K=null,y.reset();for(const oe in x)delete x[oe];e.setRenderTarget(F),_=null,m=null,g=null,r=null,P=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){c=oe,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(oe){f=oe},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(F=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",J),I.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Me=null,Xe=null;I.depth&&(Xe=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=I.stencil?mr:Ai,Me=I.stencil?As:di);const Ye={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:a};g=this.getBinding(),m=g.createProjectionLayer(Ye),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new hi(m.textureWidth,m.textureHeight,{format:qn,type:Dn,depthTexture:new Ds(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const se={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new hi(_.framebufferWidth,_.framebufferHeight,{format:qn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),f=null,l=await r.requestReferenceSpace(c),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(oe){for(let xe=0;xe<oe.removed.length;xe++){const se=oe.removed[xe],Me=R.indexOf(se);Me>=0&&(R[Me]=null,N[Me].disconnect(se))}for(let xe=0;xe<oe.added.length;xe++){const se=oe.added[xe];let Me=R.indexOf(se);if(Me===-1){for(let Ye=0;Ye<N.length;Ye++)if(Ye>=R.length){R.push(se),Me=Ye;break}else if(R[Ye]===null){R[Ye]=se,Me=Ye;break}if(Me===-1)break}const Xe=N[Me];Xe&&Xe.connect(se)}}const ve=new W,me=new W;function De(oe,xe,se){ve.setFromMatrixPosition(xe.matrixWorld),me.setFromMatrixPosition(se.matrixWorld);const Me=ve.distanceTo(me),Xe=xe.projectionMatrix.elements,Ye=se.projectionMatrix.elements,_t=Xe[14]/(Xe[10]-1),rt=Xe[14]/(Xe[10]+1),dt=(Xe[9]+1)/Xe[5],Ct=(Xe[9]-1)/Xe[5],at=(Xe[8]-1)/Xe[0],Ht=(Ye[8]+1)/Ye[0],V=_t*at,Ft=_t*Ht,gt=Me/(-at+Ht),St=gt*-at;if(xe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(St),oe.translateZ(gt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Xe[10]===-1)oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Oe=_t+gt,U=rt+gt,E=V-St,H=Ft+(Me-St),le=dt*rt/U*Oe,ge=Ct*rt/U*Oe;oe.projectionMatrix.makePerspective(E,H,le,ge,Oe,U),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Pe(oe,xe){xe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(xe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let xe=oe.near,se=oe.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(se=y.depthFar)),q.near=B.near=L.near=xe,q.far=B.far=L.far=se,(ee!==q.near||K!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),ee=q.near,K=q.far),q.layers.mask=oe.layers.mask|6,L.layers.mask=q.layers.mask&-5,B.layers.mask=q.layers.mask&-3;const Me=oe.parent,Xe=q.cameras;Pe(q,Me);for(let Ye=0;Ye<Xe.length;Ye++)Pe(Xe[Ye],Me);Xe.length===2?De(q,L,B):q.projectionMatrix.copy(L.projectionMatrix),Re(oe,q,Me)};function Re(oe,xe,se){se===null?oe.matrix.copy(xe.matrixWorld):(oe.matrix.copy(se.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(xe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Na*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&_===null))return h},this.setFoveation=function(oe){h=oe,m!==null&&(m.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(oe){return x[oe]};let He=null;function je(oe,xe){if(p=xe.getViewerPose(f||l),b=xe,p!==null){const se=p.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let Me=!1;se.length!==q.cameras.length&&(q.cameras.length=0,Me=!0);for(let rt=0;rt<se.length;rt++){const dt=se[rt];let Ct=null;if(_!==null)Ct=_.getViewport(dt);else{const Ht=g.getViewSubImage(m,dt);Ct=Ht.viewport,rt===0&&(e.setRenderTargetTextures(P,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(P))}let at=z[rt];at===void 0&&(at=new Rn,at.layers.enable(rt),at.viewport=new Xt,z[rt]=at),at.matrix.fromArray(dt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(dt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),rt===0&&(q.matrix.copy(at.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Me===!0&&q.cameras.push(at)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){g=n.getBinding();const rt=g.getDepthInformation(se[0]);rt&&rt.isValid&&rt.texture&&y.init(rt,r.renderState)}if(Xe&&Xe.includes("camera-access")&&A){e.state.unbindTexture(),g=n.getBinding();for(let rt=0;rt<se.length;rt++){const dt=se[rt].camera;if(dt){let Ct=x[dt];Ct||(Ct=new fd,x[dt]=Ct);const at=g.getCameraImage(dt);Ct.sourceTexture=at}}}}for(let se=0;se<N.length;se++){const Me=R[se],Xe=N[se];Me!==null&&Xe!==void 0&&Xe.update(Me,xe,f||l)}He&&He(oe,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),b=null}const Ve=new bd;Ve.setAnimationLoop(je),this.setAnimationLoop=function(oe){He=oe},this.dispose=function(){}}}const lr=new fi,PE=new Nt;function DE(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,vd(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function r(y,x,I,F,P){x.isMeshBasicMaterial?a(y,x):x.isMeshLambertMaterial?(a(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(a(y,x),g(y,x)):x.isMeshPhongMaterial?(a(y,x),p(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(a(y,x),m(y,x),x.isMeshPhysicalMaterial&&_(y,x,P)):x.isMeshMatcapMaterial?(a(y,x),b(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),A(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(l(y,x),x.isLineDashedMaterial&&c(y,x)):x.isPointsMaterial?h(y,x,I,F):x.isSpriteMaterial?f(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===wn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===wn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const I=e.get(x),F=I.envMap,P=I.envMapRotation;F&&(y.envMap.value=F,lr.copy(P),lr.x*=-1,lr.y*=-1,lr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),y.envMapRotation.value.setFromMatrix4(PE.makeRotationFromEuler(lr)),y.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function l(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function c(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,I,F){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*I,y.scale.value=F*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function m(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function _(y,x,I){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===wn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const I=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function LE(i,e,t,n){let r={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,F){const P=F.program;n.uniformBlockBinding(I,P)}function f(I,F){let P=r[I.id];P===void 0&&(b(I),P=p(I),r[I.id]=P,I.addEventListener("dispose",y));const N=F.program;n.updateUBOMapping(I,N);const R=e.render.frame;a[I.id]!==R&&(m(I),a[I.id]=R)}function p(I){const F=g();I.__bindingPointIndex=F;const P=i.createBuffer(),N=I.__size,R=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,P),P}function g(){for(let I=0;I<c;I++)if(l.indexOf(I)===-1)return l.push(I),I;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(I){const F=r[I.id],P=I.uniforms,N=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let R=0,k=P.length;R<k;R++){const w=Array.isArray(P[R])?P[R]:[P[R]];for(let L=0,B=w.length;L<B;L++){const z=w[L];if(_(z,R,L,N)===!0){const q=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let K=0;for(let te=0;te<ee.length;te++){const Q=ee[te],J=A(Q);typeof Q=="number"||typeof Q=="boolean"?(z.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,q+K,z.__data)):Q.isMatrix3?(z.__data[0]=Q.elements[0],z.__data[1]=Q.elements[1],z.__data[2]=Q.elements[2],z.__data[3]=0,z.__data[4]=Q.elements[3],z.__data[5]=Q.elements[4],z.__data[6]=Q.elements[5],z.__data[7]=0,z.__data[8]=Q.elements[6],z.__data[9]=Q.elements[7],z.__data[10]=Q.elements[8],z.__data[11]=0):(Q.toArray(z.__data,K),K+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(I,F,P,N){const R=I.value,k=F+"_"+P;if(N[k]===void 0)return typeof R=="number"||typeof R=="boolean"?N[k]=R:N[k]=R.clone(),!0;{const w=N[k];if(typeof R=="number"||typeof R=="boolean"){if(w!==R)return N[k]=R,!0}else if(w.equals(R)===!1)return w.copy(R),!0}return!1}function b(I){const F=I.uniforms;let P=0;const N=16;for(let k=0,w=F.length;k<w;k++){const L=Array.isArray(F[k])?F[k]:[F[k]];for(let B=0,z=L.length;B<z;B++){const q=L[B],ee=Array.isArray(q.value)?q.value:[q.value];for(let K=0,te=ee.length;K<te;K++){const Q=ee[K],J=A(Q),ve=P%N,me=ve%J.boundary,De=ve+me;P+=me,De!==0&&N-De<J.storage&&(P+=N-De),q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=J.storage}}}const R=P%N;return R>0&&(P+=N-R),I.__size=P,I.__cache={},this}function A(I){const F={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(F.boundary=4,F.storage=4):I.isVector2?(F.boundary=8,F.storage=8):I.isVector3||I.isColor?(F.boundary=16,F.storage=12):I.isVector4?(F.boundary=16,F.storage=16):I.isMatrix3?(F.boundary=48,F.storage=48):I.isMatrix4?(F.boundary=64,F.storage=64):I.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",I),F}function y(I){const F=I.target;F.removeEventListener("dispose",y);const P=l.indexOf(F.__bindingPointIndex);l.splice(P,1),i.deleteBuffer(r[F.id]),delete r[F.id],delete a[F.id]}function x(){for(const I in r)i.deleteBuffer(r[I]);l=[],r={},a={}}return{bind:h,update:f,dispose:x}}const FE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function IE(){return ii===null&&(ii=new sx(FE,16,16,$r,Ti),ii.name="DFG_LUT",ii.minFilter=xn,ii.magFilter=xn,ii.wrapS=bi,ii.wrapT=bi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class UE{constructor(e={}){const{canvas:t=N_(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:_=Dn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=l;const A=_,y=new Set([cc,lc,oc]),x=new Set([Dn,di,Ts,As,sc,ac]),I=new Uint32Array(4),F=new Int32Array(4);let P=null,N=null;const R=[],k=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let B=!1;this._outputColorSpace=hn;let z=0,q=0,ee=null,K=-1,te=null;const Q=new Xt,J=new Xt;let ve=null;const me=new ct(0);let De=0,Pe=t.width,Re=t.height,He=1,je=null,Ve=null;const oe=new Xt(0,0,Pe,Re),xe=new Xt(0,0,Pe,Re);let se=!1;const Me=new mc;let Xe=!1,Ye=!1;const _t=new Nt,rt=new W,dt=new Xt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Ht(){return ee===null?He:1}let V=n;function Ft(D,j){return t.getContext(D,j)}try{const D={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),V===null){const j="webgl2";if(V=Ft(j,D),V===null)throw Ft(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Et("WebGLRenderer: "+D.message),D}let gt,St,Oe,U,E,H,le,ge,ce,ke,Te,qe,Ze,be,we,Be,ze,Ie,ot,$,Ae,Ee,Fe;function X(){gt=new Ub(V),gt.init(),Ae=new wE(V,gt),St=new Ab(V,gt,e,Ae),Oe=new ME(V,gt),St.reversedDepthBuffer&&m&&Oe.buffers.depth.setReversed(!0),U=new kb(V),E=new cE,H=new EE(V,gt,Oe,E,St,Ae,U),le=new Ib(L),ge=new Hx(V),Ee=new wb(V,ge),ce=new Nb(V,ge,U,Ee),ke=new zb(V,ce,ge,Ee,U),Ie=new Bb(V,St,H),we=new Cb(E),Te=new lE(L,le,gt,St,Ee,we),qe=new DE(L,E),Ze=new hE,be=new vE(gt),ze=new Eb(L,le,Oe,ke,b,h),Be=new bE(L,ke,St),Fe=new LE(V,U,St,Oe),ot=new Tb(V,gt,U),$=new Ob(V,gt,U),U.programs=Te.programs,L.capabilities=St,L.extensions=gt,L.properties=E,L.renderLists=Ze,L.shadowMap=Be,L.state=Oe,L.info=U}X(),A!==Dn&&(w=new Vb(A,t.width,t.height,r,a));const G=new RE(L,V);this.xr=G,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=gt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=gt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(D){D!==void 0&&(He=D,this.setSize(Pe,Re,!1))},this.getSize=function(D){return D.set(Pe,Re)},this.setSize=function(D,j,ae=!0){if(G.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=D,Re=j,t.width=Math.floor(D*He),t.height=Math.floor(j*He),ae===!0&&(t.style.width=D+"px",t.style.height=j+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(Pe*He,Re*He).floor()},this.setDrawingBufferSize=function(D,j,ae){Pe=D,Re=j,He=ae,t.width=Math.floor(D*ae),t.height=Math.floor(j*ae),this.setViewport(0,0,D,j)},this.setEffects=function(D){if(A===Dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let j=0;j<D.length;j++)if(D[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(Q)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,j,ae,re){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,j,ae,re),Oe.viewport(Q.copy(oe).multiplyScalar(He).round())},this.getScissor=function(D){return D.copy(xe)},this.setScissor=function(D,j,ae,re){D.isVector4?xe.set(D.x,D.y,D.z,D.w):xe.set(D,j,ae,re),Oe.scissor(J.copy(xe).multiplyScalar(He).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(D){Oe.setScissorTest(se=D)},this.setOpaqueSort=function(D){je=D},this.setTransparentSort=function(D){Ve=D},this.getClearColor=function(D){return D.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,ae=!0){let re=0;if(D){let ne=!1;if(ee!==null){const Ce=ee.texture.format;ne=y.has(Ce)}if(ne){const Ce=ee.texture.type,Ne=x.has(Ce),pe=ze.getClearColor(),Ge=ze.getClearAlpha(),We=pe.r,it=pe.g,st=pe.b;Ne?(I[0]=We,I[1]=it,I[2]=st,I[3]=Ge,V.clearBufferuiv(V.COLOR,0,I)):(F[0]=We,F[1]=it,F[2]=st,F[3]=Ge,V.clearBufferiv(V.COLOR,0,F))}else re|=V.COLOR_BUFFER_BIT}j&&(re|=V.DEPTH_BUFFER_BIT),ae&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),ze.dispose(),Ze.dispose(),be.dispose(),E.dispose(),le.dispose(),ke.dispose(),Ee.dispose(),Fe.dispose(),Te.dispose(),G.dispose(),G.removeEventListener("sessionstart",In),G.removeEventListener("sessionend",ks),Un.stop()};function Ue(D){D.preventDefault(),Lu("WebGLRenderer: Context Lost."),B=!0}function tt(){Lu("WebGLRenderer: Context Restored."),B=!1;const D=U.autoReset,j=Be.enabled,ae=Be.autoUpdate,re=Be.needsUpdate,ne=Be.type;X(),U.autoReset=D,Be.enabled=j,Be.autoUpdate=ae,Be.needsUpdate=re,Be.type=ne}function bt(D){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ft(D){const j=D.target;j.removeEventListener("dispose",ft),Gn(j)}function Gn(D){Zt(D),E.remove(D)}function Zt(D){const j=E.get(D).programs;j!==void 0&&(j.forEach(function(ae){Te.releaseProgram(ae)}),D.isShaderMaterial&&Te.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,ae,re,ne,Ce){j===null&&(j=Ct);const Ne=ne.isMesh&&ne.matrixWorld.determinant()<0,pe=qa(D,j,ae,re,ne);Oe.setMaterial(re,Ne);let Ge=ae.index,We=1;if(re.wireframe===!0){if(Ge=ce.getWireframeAttribute(ae),Ge===void 0)return;We=2}const it=ae.drawRange,st=ae.attributes.position;let $e=it.start*We,Tt=(it.start+it.count)*We;Ce!==null&&($e=Math.max($e,Ce.start*We),Tt=Math.min(Tt,(Ce.start+Ce.count)*We)),Ge!==null?($e=Math.max($e,0),Tt=Math.min(Tt,Ge.count)):st!=null&&($e=Math.max($e,0),Tt=Math.min(Tt,st.count));const Wt=Tt-$e;if(Wt<0||Wt===1/0)return;Ee.setup(ne,re,pe,ae,Ge);let kt,Pt=ot;if(Ge!==null&&(kt=ge.get(Ge),Pt=$,Pt.setIndex(kt)),ne.isMesh)re.wireframe===!0?(Oe.setLineWidth(re.wireframeLinewidth*Ht()),Pt.setMode(V.LINES)):Pt.setMode(V.TRIANGLES);else if(ne.isLine){let Qt=re.linewidth;Qt===void 0&&(Qt=1),Oe.setLineWidth(Qt*Ht()),ne.isLineSegments?Pt.setMode(V.LINES):ne.isLineLoop?Pt.setMode(V.LINE_LOOP):Pt.setMode(V.LINE_STRIP)}else ne.isPoints?Pt.setMode(V.POINTS):ne.isSprite&&Pt.setMode(V.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)Ua("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Qt=ne._multiDrawStarts,M=ne._multiDrawCounts,pt=ne._multiDrawCount,yt=Ge?ge.get(Ge).bytesPerElement:1,mn=E.get(re).currentProgram.getUniforms();for(let cn=0;cn<pt;cn++)mn.setValue(V,"_gl_DrawID",cn),Pt.render(Qt[cn]/yt,M[cn])}else if(ne.isInstancedMesh)Pt.renderInstances($e,Wt,ne.count);else if(ae.isInstancedBufferGeometry){const Qt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,M=Math.min(ae.instanceCount,Qt);Pt.renderInstances($e,Wt,M)}else Pt.render($e,Wt)};function Yi(D,j,ae){D.transparent===!0&&D.side===Pn&&D.forceSinglePass===!1?(D.side=wn,D.needsUpdate=!0,Ki(D,j,ae),D.side=Xi,D.needsUpdate=!0,Ki(D,j,ae),D.side=Pn):Ki(D,j,ae)}this.compile=function(D,j,ae=null){ae===null&&(ae=D),N=be.get(ae),N.init(j),k.push(N),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),D!==ae&&D.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),N.setupLights();const re=new Set;return D.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ce=ne.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const pe=Ce[Ne];Yi(pe,ae,ne),re.add(pe)}else Yi(Ce,ae,ne),re.add(Ce)}),N=k.pop(),re},this.compileAsync=function(D,j,ae=null){const re=this.compile(D,j,ae);return new Promise(ne=>{function Ce(){if(re.forEach(function(Ne){E.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){ne(D);return}setTimeout(Ce,10)}gt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Qr=null;function ja(D){Qr&&Qr(D)}function In(){Un.stop()}function ks(){Un.start()}const Un=new bd;Un.setAnimationLoop(ja),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(D){Qr=D,G.setAnimationLoop(D),D===null?Un.stop():Un.start()},G.addEventListener("sessionstart",In),G.addEventListener("sessionend",ks),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const ae=G.enabled===!0&&G.isPresenting===!0,re=w!==null&&(ee===null||ae)&&w.begin(L,ee);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(j),j=G.getCamera()),D.isScene===!0&&D.onBeforeRender(L,D,j,ee),N=be.get(D,k.length),N.init(j),k.push(N),_t.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Me.setFromProjectionMatrix(_t,ai,j.reversedDepth),Ye=this.localClippingEnabled,Xe=we.init(this.clippingPlanes,Ye),P=Ze.get(D,R.length),P.init(),R.push(P),G.enabled===!0&&G.isPresenting===!0){const Ne=L.xr.getDepthSensingMesh();Ne!==null&&Di(Ne,j,-1/0,L.sortObjects)}Di(D,j,0,L.sortObjects),P.finish(),L.sortObjects===!0&&P.sort(je,Ve),at=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,at&&ze.addToRenderList(P,D),this.info.render.frame++,Xe===!0&&we.beginShadows();const ne=N.state.shadowsArray;if(Be.render(ne,D,j),Xe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&w.hasRenderPass())===!1){const Ne=P.opaque,pe=P.transmissive;if(N.setupLights(),j.isArrayCamera){const Ge=j.cameras;if(pe.length>0)for(let We=0,it=Ge.length;We<it;We++){const st=Ge[We];Bs(Ne,pe,D,st)}at&&ze.render(D);for(let We=0,it=Ge.length;We<it;We++){const st=Ge[We];xr(P,D,st,st.viewport)}}else pe.length>0&&Bs(Ne,pe,D,j),at&&ze.render(D),xr(P,D,j)}ee!==null&&q===0&&(H.updateMultisampleRenderTarget(ee),H.updateRenderTargetMipmap(ee)),re&&w.end(L),D.isScene===!0&&D.onAfterRender(L,D,j),Ee.resetDefaultState(),K=-1,te=null,k.pop(),k.length>0?(N=k[k.length-1],Xe===!0&&we.setGlobalState(L.clippingPlanes,N.state.camera)):N=null,R.pop(),R.length>0?P=R[R.length-1]:P=null};function Di(D,j,ae,re){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)ae=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)N.pushLight(D),D.castShadow&&N.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Me.intersectsSprite(D)){re&&dt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(_t);const Ne=ke.update(D),pe=D.material;pe.visible&&P.push(D,Ne,pe,ae,dt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Me.intersectsObject(D))){const Ne=ke.update(D),pe=D.material;if(re&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),dt.copy(D.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),dt.copy(Ne.boundingSphere.center)),dt.applyMatrix4(D.matrixWorld).applyMatrix4(_t)),Array.isArray(pe)){const Ge=Ne.groups;for(let We=0,it=Ge.length;We<it;We++){const st=Ge[We],$e=pe[st.materialIndex];$e&&$e.visible&&P.push(D,Ne,$e,ae,dt.z,st)}}else pe.visible&&P.push(D,Ne,pe,ae,dt.z,null)}}const Ce=D.children;for(let Ne=0,pe=Ce.length;Ne<pe;Ne++)Di(Ce[Ne],j,ae,re)}function xr(D,j,ae,re){const{opaque:ne,transmissive:Ce,transparent:Ne}=D;N.setupLightsView(ae),Xe===!0&&we.setGlobalState(L.clippingPlanes,ae),re&&Oe.viewport(Q.copy(re)),ne.length>0&&yr(ne,j,ae),Ce.length>0&&yr(Ce,j,ae),Ne.length>0&&yr(Ne,j,ae),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Bs(D,j,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[re.id]===void 0){const $e=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[re.id]=new hi(1,1,{generateMipmaps:!0,type:$e?Ti:Dn,minFilter:pr,samples:Math.max(4,St.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Ce=N.state.transmissionRenderTarget[re.id],Ne=re.viewport||Q;Ce.setSize(Ne.z*L.transmissionResolutionScale,Ne.w*L.transmissionResolutionScale);const pe=L.getRenderTarget(),Ge=L.getActiveCubeFace(),We=L.getActiveMipmapLevel();L.setRenderTarget(Ce),L.getClearColor(me),De=L.getClearAlpha(),De<1&&L.setClearColor(16777215,.5),L.clear(),at&&ze.render(ae);const it=L.toneMapping;L.toneMapping=ui;const st=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),N.setupLightsView(re),Xe===!0&&we.setGlobalState(L.clippingPlanes,re),yr(D,ae,re),H.updateMultisampleRenderTarget(Ce),H.updateRenderTargetMipmap(Ce),gt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Tt=0,Wt=j.length;Tt<Wt;Tt++){const kt=j[Tt],{object:Pt,geometry:Qt,material:M,group:pt}=kt;if(M.side===Pn&&Pt.layers.test(re.layers)){const yt=M.side;M.side=wn,M.needsUpdate=!0,zs(Pt,ae,re,Qt,M,pt),M.side=yt,M.needsUpdate=!0,$e=!0}}$e===!0&&(H.updateMultisampleRenderTarget(Ce),H.updateRenderTargetMipmap(Ce))}L.setRenderTarget(pe,Ge,We),L.setClearColor(me,De),st!==void 0&&(re.viewport=st),L.toneMapping=it}function yr(D,j,ae){const re=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,Ce=D.length;ne<Ce;ne++){const Ne=D[ne],{object:pe,geometry:Ge,group:We}=Ne;let it=Ne.material;it.allowOverride===!0&&re!==null&&(it=re),pe.layers.test(ae.layers)&&zs(pe,j,ae,Ge,it,We)}}function zs(D,j,ae,re,ne,Ce){D.onBeforeRender(L,j,ae,re,ne,Ce),D.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ne.onBeforeRender(L,j,ae,re,D,Ce),ne.transparent===!0&&ne.side===Pn&&ne.forceSinglePass===!1?(ne.side=wn,ne.needsUpdate=!0,L.renderBufferDirect(ae,j,re,ne,D,Ce),ne.side=Xi,ne.needsUpdate=!0,L.renderBufferDirect(ae,j,re,ne,D,Ce),ne.side=Pn):L.renderBufferDirect(ae,j,re,ne,D,Ce),D.onAfterRender(L,j,ae,re,ne,Ce)}function Ki(D,j,ae){j.isScene!==!0&&(j=Ct);const re=E.get(D),ne=N.state.lights,Ce=N.state.shadowsArray,Ne=ne.state.version,pe=Te.getParameters(D,ne.state,Ce,j,ae),Ge=Te.getProgramCacheKey(pe);let We=re.programs;re.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?j.environment:null,re.fog=j.fog;const it=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;re.envMap=le.get(D.envMap||re.environment,it),re.envMapRotation=re.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,We===void 0&&(D.addEventListener("dispose",ft),We=new Map,re.programs=We);let st=We.get(Ge);if(st!==void 0){if(re.currentProgram===st&&re.lightsStateVersion===Ne)return Vs(D,pe),st}else pe.uniforms=Te.getUniforms(D),D.onBeforeCompile(pe,L),st=Te.acquireProgram(pe,Ge),We.set(Ge,st),re.uniforms=pe.uniforms;const $e=re.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($e.clippingPlanes=we.uniform),Vs(D,pe),re.needsLights=Rt(D),re.lightsStateVersion=Ne,re.needsLights&&($e.ambientLightColor.value=ne.state.ambient,$e.lightProbe.value=ne.state.probe,$e.directionalLights.value=ne.state.directional,$e.directionalLightShadows.value=ne.state.directionalShadow,$e.spotLights.value=ne.state.spot,$e.spotLightShadows.value=ne.state.spotShadow,$e.rectAreaLights.value=ne.state.rectArea,$e.ltc_1.value=ne.state.rectAreaLTC1,$e.ltc_2.value=ne.state.rectAreaLTC2,$e.pointLights.value=ne.state.point,$e.pointLightShadows.value=ne.state.pointShadow,$e.hemisphereLights.value=ne.state.hemi,$e.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,$e.spotLightMatrix.value=ne.state.spotLightMatrix,$e.spotLightMap.value=ne.state.spotLightMap,$e.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=st,re.uniformsList=null,st}function Gs(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=Fa.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function Vs(D,j){const ae=E.get(D);ae.outputColorSpace=j.outputColorSpace,ae.batching=j.batching,ae.batchingColor=j.batchingColor,ae.instancing=j.instancing,ae.instancingColor=j.instancingColor,ae.instancingMorph=j.instancingMorph,ae.skinning=j.skinning,ae.morphTargets=j.morphTargets,ae.morphNormals=j.morphNormals,ae.morphColors=j.morphColors,ae.morphTargetsCount=j.morphTargetsCount,ae.numClippingPlanes=j.numClippingPlanes,ae.numIntersection=j.numClipIntersection,ae.vertexAlphas=j.vertexAlphas,ae.vertexTangents=j.vertexTangents,ae.toneMapping=j.toneMapping}function qa(D,j,ae,re,ne){j.isScene!==!0&&(j=Ct),H.resetTextureUnits();const Ce=j.fog,Ne=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?j.environment:null,pe=ee===null?L.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Xr,Ge=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,We=le.get(re.envMap||Ne,Ge),it=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),$e=!!ae.morphAttributes.position,Tt=!!ae.morphAttributes.normal,Wt=!!ae.morphAttributes.color;let kt=ui;re.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(kt=L.toneMapping);const Pt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Qt=Pt!==void 0?Pt.length:0,M=E.get(re),pt=N.state.lights;if(Xe===!0&&(Ye===!0||D!==te)){const Yt=D===te&&re.id===K;we.setState(re,D,Yt)}let yt=!1;re.version===M.__version?(M.needsLights&&M.lightsStateVersion!==pt.state.version||M.outputColorSpace!==pe||ne.isBatchedMesh&&M.batching===!1||!ne.isBatchedMesh&&M.batching===!0||ne.isBatchedMesh&&M.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&M.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&M.instancing===!1||!ne.isInstancedMesh&&M.instancing===!0||ne.isSkinnedMesh&&M.skinning===!1||!ne.isSkinnedMesh&&M.skinning===!0||ne.isInstancedMesh&&M.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&M.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&M.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&M.instancingMorph===!1&&ne.morphTexture!==null||M.envMap!==We||re.fog===!0&&M.fog!==Ce||M.numClippingPlanes!==void 0&&(M.numClippingPlanes!==we.numPlanes||M.numIntersection!==we.numIntersection)||M.vertexAlphas!==it||M.vertexTangents!==st||M.morphTargets!==$e||M.morphNormals!==Tt||M.morphColors!==Wt||M.toneMapping!==kt||M.morphTargetsCount!==Qt)&&(yt=!0):(yt=!0,M.__version=re.version);let mn=M.currentProgram;yt===!0&&(mn=Ki(re,j,ne));let cn=!1,mi=!1,Fi=!1;const Dt=mn.getUniforms(),en=M.uniforms;if(Oe.useProgram(mn.program)&&(cn=!0,mi=!0,Fi=!0),re.id!==K&&(K=re.id,mi=!0),cn||te!==D){Oe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Dt.setValue(V,"projectionMatrix",D.projectionMatrix),Dt.setValue(V,"viewMatrix",D.matrixWorldInverse);const Jn=Dt.map.cameraPosition;Jn!==void 0&&Jn.setValue(V,rt.setFromMatrixPosition(D.matrixWorld)),St.logarithmicDepthBuffer&&Dt.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Dt.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),te!==D&&(te=D,mi=!0,Fi=!0)}if(M.needsLights&&(pt.state.directionalShadowMap.length>0&&Dt.setValue(V,"directionalShadowMap",pt.state.directionalShadowMap,H),pt.state.spotShadowMap.length>0&&Dt.setValue(V,"spotShadowMap",pt.state.spotShadowMap,H),pt.state.pointShadowMap.length>0&&Dt.setValue(V,"pointShadowMap",pt.state.pointShadowMap,H)),ne.isSkinnedMesh){Dt.setOptional(V,ne,"bindMatrix"),Dt.setOptional(V,ne,"bindMatrixInverse");const Yt=ne.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Dt.setValue(V,"boneTexture",Yt.boneTexture,H))}ne.isBatchedMesh&&(Dt.setOptional(V,ne,"batchingTexture"),Dt.setValue(V,"batchingTexture",ne._matricesTexture,H),Dt.setOptional(V,ne,"batchingIdTexture"),Dt.setValue(V,"batchingIdTexture",ne._indirectTexture,H),Dt.setOptional(V,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Dt.setValue(V,"batchingColorTexture",ne._colorsTexture,H));const Kn=ae.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Ie.update(ne,ae,mn),(mi||M.receiveShadow!==ne.receiveShadow)&&(M.receiveShadow=ne.receiveShadow,Dt.setValue(V,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&j.environment!==null&&(en.envMapIntensity.value=j.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=IE()),mi&&(Dt.setValue(V,"toneMappingExposure",L.toneMappingExposure),M.needsLights&&Ya(en,Fi),Ce&&re.fog===!0&&qe.refreshFogUniforms(en,Ce),qe.refreshMaterialUniforms(en,re,He,Re,N.state.transmissionRenderTarget[D.id]),Fa.upload(V,Gs(M),en,H)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Fa.upload(V,Gs(M),en,H),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Dt.setValue(V,"center",ne.center),Dt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Dt.setValue(V,"normalMatrix",ne.normalMatrix),Dt.setValue(V,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Yt=re.uniformsGroups;for(let Jn=0,Ii=Yt.length;Jn<Ii;Jn++){const $t=Yt[Jn];Fe.update($t,mn),Fe.bind($t,mn)}}return mn}function Ya(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Rt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(D,j,ae){const re=E.get(D);re.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),E.get(D.texture).__webglTexture=j,E.get(D.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){const ae=E.get(D);ae.__webglFramebuffer=j,ae.__useDefaultFramebuffer=j===void 0};const Ka=V.createFramebuffer();this.setRenderTarget=function(D,j=0,ae=0){ee=D,z=j,q=ae;let re=null,ne=!1,Ce=!1;if(D){const pe=E.get(D);if(pe.__useDefaultFramebuffer!==void 0){Oe.bindFramebuffer(V.FRAMEBUFFER,pe.__webglFramebuffer),Q.copy(D.viewport),J.copy(D.scissor),ve=D.scissorTest,Oe.viewport(Q),Oe.scissor(J),Oe.setScissorTest(ve),K=-1;return}else if(pe.__webglFramebuffer===void 0)H.setupRenderTarget(D);else if(pe.__hasExternalTextures)H.rebindTextures(D,E.get(D.texture).__webglTexture,E.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const it=D.depthTexture;if(pe.__boundDepthTexture!==it){if(it!==null&&E.has(it)&&(D.width!==it.image.width||D.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(D)}}const Ge=D.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ce=!0);const We=E.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(We[j])?re=We[j][ae]:re=We[j],ne=!0):D.samples>0&&H.useMultisampledRTT(D)===!1?re=E.get(D).__webglMultisampledFramebuffer:Array.isArray(We)?re=We[ae]:re=We,Q.copy(D.viewport),J.copy(D.scissor),ve=D.scissorTest}else Q.copy(oe).multiplyScalar(He).floor(),J.copy(xe).multiplyScalar(He).floor(),ve=se;if(ae!==0&&(re=Ka),Oe.bindFramebuffer(V.FRAMEBUFFER,re)&&Oe.drawBuffers(D,re),Oe.viewport(Q),Oe.scissor(J),Oe.setScissorTest(ve),ne){const pe=E.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe.__webglTexture,ae)}else if(Ce){const pe=j;for(let Ge=0;Ge<D.textures.length;Ge++){const We=E.get(D.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,We.__webglTexture,ae,pe)}}else if(D!==null&&ae!==0){const pe=E.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pe.__webglTexture,ae)}K=-1},this.readRenderTargetPixels=function(D,j,ae,re,ne,Ce,Ne,pe=0){if(!(D&&D.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){Oe.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const We=D.textures[pe],it=We.format,st=We.type;if(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+pe),!St.textureFormatReadable(it)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(st)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-re&&ae>=0&&ae<=D.height-ne&&V.readPixels(j,ae,re,ne,Ae.convert(it),Ae.convert(st),Ce)}finally{const We=ee!==null?E.get(ee).__webglFramebuffer:null;Oe.bindFramebuffer(V.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(D,j,ae,re,ne,Ce,Ne,pe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge)if(j>=0&&j<=D.width-re&&ae>=0&&ae<=D.height-ne){Oe.bindFramebuffer(V.FRAMEBUFFER,Ge);const We=D.textures[pe],it=We.format,st=We.type;if(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+pe),!St.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(j,ae,re,ne,Ae.convert(it),Ae.convert(st),0);const Tt=ee!==null?E.get(ee).__webglFramebuffer:null;Oe.bindFramebuffer(V.FRAMEBUFFER,Tt);const Wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await O_(V,Wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer($e),V.deleteSync(Wt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,ae=0){const re=Math.pow(2,-ae),ne=Math.floor(D.image.width*re),Ce=Math.floor(D.image.height*re),Ne=j!==null?j.x:0,pe=j!==null?j.y:0;H.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Ne,pe,ne,Ce),Oe.unbindTexture()};const Hs=V.createFramebuffer(),Li=V.createFramebuffer();this.copyTextureToTexture=function(D,j,ae=null,re=null,ne=0,Ce=0){let Ne,pe,Ge,We,it,st,$e,Tt,Wt;const kt=D.isCompressedTexture?D.mipmaps[Ce]:D.image;if(ae!==null)Ne=ae.max.x-ae.min.x,pe=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,We=ae.min.x,it=ae.min.y,st=ae.isBox3?ae.min.z:0;else{const en=Math.pow(2,-ne);Ne=Math.floor(kt.width*en),pe=Math.floor(kt.height*en),D.isDataArrayTexture?Ge=kt.depth:D.isData3DTexture?Ge=Math.floor(kt.depth*en):Ge=1,We=0,it=0,st=0}re!==null?($e=re.x,Tt=re.y,Wt=re.z):($e=0,Tt=0,Wt=0);const Pt=Ae.convert(j.format),Qt=Ae.convert(j.type);let M;j.isData3DTexture?(H.setTexture3D(j,0),M=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(H.setTexture2DArray(j,0),M=V.TEXTURE_2D_ARRAY):(H.setTexture2D(j,0),M=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const pt=V.getParameter(V.UNPACK_ROW_LENGTH),yt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),mn=V.getParameter(V.UNPACK_SKIP_PIXELS),cn=V.getParameter(V.UNPACK_SKIP_ROWS),mi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,kt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,We),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,st);const Fi=D.isDataArrayTexture||D.isData3DTexture,Dt=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){const en=E.get(D),Kn=E.get(j),Yt=E.get(en.__renderTarget),Jn=E.get(Kn.__renderTarget);Oe.bindFramebuffer(V.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Ii=0;Ii<Ge;Ii++)Fi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(D).__webglTexture,ne,st+Ii),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Ce,Wt+Ii)),V.blitFramebuffer(We,it,Ne,pe,$e,Tt,Ne,pe,V.DEPTH_BUFFER_BIT,V.NEAREST);Oe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ne!==0||D.isRenderTargetTexture||E.has(D)){const en=E.get(D),Kn=E.get(j);Oe.bindFramebuffer(V.READ_FRAMEBUFFER,Hs),Oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Li);for(let Yt=0;Yt<Ge;Yt++)Fi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,en.__webglTexture,ne,st+Yt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,en.__webglTexture,ne),Dt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Kn.__webglTexture,Ce,Wt+Yt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Kn.__webglTexture,Ce),ne!==0?V.blitFramebuffer(We,it,Ne,pe,$e,Tt,Ne,pe,V.COLOR_BUFFER_BIT,V.NEAREST):Dt?V.copyTexSubImage3D(M,Ce,$e,Tt,Wt+Yt,We,it,Ne,pe):V.copyTexSubImage2D(M,Ce,$e,Tt,We,it,Ne,pe);Oe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Dt?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(M,Ce,$e,Tt,Wt,Ne,pe,Ge,Pt,Qt,kt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(M,Ce,$e,Tt,Wt,Ne,pe,Ge,Pt,kt.data):V.texSubImage3D(M,Ce,$e,Tt,Wt,Ne,pe,Ge,Pt,Qt,kt):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,$e,Tt,Ne,pe,Pt,Qt,kt.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,$e,Tt,kt.width,kt.height,Pt,kt.data):V.texSubImage2D(V.TEXTURE_2D,Ce,$e,Tt,Ne,pe,Pt,Qt,kt);V.pixelStorei(V.UNPACK_ROW_LENGTH,pt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,mn),V.pixelStorei(V.UNPACK_SKIP_ROWS,cn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,mi),Ce===0&&j.generateMipmaps&&V.generateMipmap(M),Oe.unbindTexture()},this.initRenderTarget=function(D){E.get(D).__webglFramebuffer===void 0&&H.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?H.setTextureCube(D,0):D.isData3DTexture?H.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?H.setTexture2DArray(D,0):H.setTexture2D(D,0),Oe.unbindTexture()},this.resetState=function(){z=0,q=0,ee=null,Oe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function Cd(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),a={},l={},c=i[0].morphTargetsRelative,h=new yn;let f=0;for(let p=0;p<i.length;++p){const g=i[p];let m=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in g.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(g.attributes[_]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(c!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in g.morphAttributes){if(!r.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;l[_]===void 0&&(l[_]=[]),l[_].push(g.morphAttributes[_])}if(e){let _;if(t)_=g.index.count;else if(g.attributes.position!==void 0)_=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;h.addGroup(f,_,p),f+=_}}if(t){let p=0;const g=[];for(let m=0;m<i.length;++m){const _=i[m].index;for(let b=0;b<_.count;++b)g.push(_.getX(b)+p);p+=i[m].attributes.position.count}h.setIndex(g)}for(const p in a){const g=Ah(a[p]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;h.setAttribute(p,g)}for(const p in l){const g=l[p][0].length;if(g===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[p]=[];for(let m=0;m<g;++m){const _=[];for(let A=0;A<l[p].length;++A)_.push(l[p][A][m]);const b=Ah(_);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;h.morphAttributes[p].push(b)}}return h}function Ah(i){let e,t,n,r=-1,a=0;for(let f=0;f<i.length;++f){const p=i[f];if(e===void 0&&(e=p.array.constructor),e!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=p.itemSize),t!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=p.normalized),n!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=p.gpuType),r!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=p.count*t}const l=new e(a),c=new Bn(l,t,n);let h=0;for(let f=0;f<i.length;++f){const p=i[f];if(p.isInterleavedBufferAttribute){const g=h/t;for(let m=0,_=p.count;m<_;m++)for(let b=0;b<t;b++){const A=p.getComponent(m,b);c.setComponent(m+g,b,A)}}else l.set(p.array,h);h+=p.count*t}return r!==void 0&&(c.gpuType=r),c}const ds=[{id:"penn",name:"Penn",file:"penn-logo.png"},{id:"xlab",name:"xLab",file:"brands/xlab.png"},{id:"alliance",name:"Alliance",file:"brands/alliance.png"},{id:"jhu",name:"Johns Hopkins",file:"brands/johns-hopkins.png"},{id:"jirl",name:"JIRL",file:"brands/jirl.png"}];class NE{constructor(e,t,n){this.venue=t,this.walls=n,this.boards=[],this.flags=[],this.pennants=0,this.loaded=!1,this.group=new li,this.group.name="venue-branding",e.add(this.group),this.ready=this.load()}async load(){const e=await Promise.all(ds.map(n=>new Promise((r,a)=>{const l=new Image;l.onload=()=>r(l),l.onerror=()=>a(new Error(`${n.name} logo could not be loaded`)),l.src=`/demo/venue/${n.file}`})));this.images=Object.fromEntries(ds.map((n,r)=>[n.id,e[r]]));const t=this.venue.textTexture(4096,640,(n,r,a)=>{n.fillStyle="#ffffff",n.fillRect(0,0,r,a),n.fillStyle="#011f5b",n.fillRect(0,a-24,r*.78,24),n.fillStyle="#990000",n.fillRect(r*.78,a-24,r*.22,24);const l=[["penn",.04,.17],["xlab",.225,.11],["alliance",.36,.2],["jhu",.59,.225],["jirl",.845,.125]];for(const[c,h,f]of l)this.drawLogo(n,c,h*r,90,f*r,a-200)});this.wallBoard(t,17,2.65625,[-3,-4,4.55],[1,0,0],"east-brand-wall"),this.wallBoard(t,17,2.65625,[-3,-5,4.55],[-1,0,0],"west-brand-wall"),this.addPennants([-3,-4,6.8],[1,0,0]),this.addPennants([-3,-5,6.8],[-1,0,0]);for(const[n,r,a,l]of[["alliance",-20,-8,1.25],["jirl",-20,-14,1.5],["xlab",4.5,-.5,-Math.PI/2],["jhu",4.5,9,-Math.PI/2]])this.addFlag(n,r,a,l);this.loaded=!0,this.images=null}drawLogo(e,t,n,r,a,l,c=!1){const h=this.images[t];e.save(),e.translate(n+a/2,r+l/2),c&&(e.rotate(-Math.PI/2),[a,l]=[l,a]);const f=Math.min(a/h.naturalWidth,l/h.naturalHeight);e.drawImage(h,-h.naturalWidth*f/2,-h.naturalHeight*f/2,h.naturalWidth*f,h.naturalHeight*f),e.restore()}material(e){const t=new Gr({color:e,roughness:.93,metalness:0});return this.venue.materials.push(t),t}mesh(e,t,n,r){this.venue.geometries.push(e);const a=new ln(e,t);return a.position.set(...r),n.add(a),a}wallMount(e,t){for(const f of this.walls)f.updateMatrixWorld(!0);const n=new W(...t),r=new Sd(new W(...e),n).intersectObjects(this.walls,!1)[0];if(!r)throw new Error("Branding must attach to an existing wall");const a=new W(n.y,-n.x,0),l=new W(0,0,1),c=n.clone().negate(),h=new li;return h.position.copy(r.point).addScaledVector(c,.07),h.quaternion.setFromRotationMatrix(new Nt().makeBasis(a,l,c)),this.group.add(h),h}wallBoard(e,t,n,r,a,l){const c=this.wallMount(r,a);c.name=l,this.mesh(new Ci(t+.06,n+.06,.045),this.material("#85909b"),c,[0,0,-.035]);const h=this.venue.decal(e,t,n,[0,0,0],[1,0,0],[0,1,0],c);h.material.transparent=!1,h.material.depthWrite=!0,h.material.polygonOffset=!0,h.material.polygonOffsetFactor=-2,h.material.polygonOffsetUnits=-2;const f=this.material("#707983");for(const p of[-t/2+.07,t/2-.07])for(const g of[-n/2+.07,n/2-.07])this.mesh(new vc(.018,6,4),f,c,[p,g,.018]);c.userData={logos:ds.map(p=>p.name),width:t,height:n},this.boards.push(c)}addPennants(e,t){const n=this.wallMount(e,t);n.name="wall-pennants";const r=["#011f5b","#990000","#e7ebef"].map(c=>this.material(c)),a=Array.from({length:29},(c,h)=>{const f=-8.5+h*17/28;return new W(f,-Math.sin(Math.max(0,Math.min(1,(f+7.7)/15.4))*Math.PI)*.17,.02)});this.mesh(new _c(new md(a),28,.008,4,!1),this.material("#747f89"),n,[0,0,0]);const l=[[],[],[]];for(let c=0;c<15;c++){const h=-7.7+c*1.1,f=Math.sin(c/14*Math.PI)*.17;l[c%3].push(h-.26,-f,.03,h,-.64-f,.055,h+.26,-f,.03),this.pennants++}for(let c=0;c<3;c++){const h=new yn;h.setAttribute("position",new Vt(l[c],3)),h.computeVertexNormals(),this.mesh(h,r[c],n,[0,0,0])}}addFlag(e,t,n,r){const a=new li;a.name=`flag-${e}`,a.position.set(t,n,this.venue.floorBounds.max.z),a.rotation.z=r,this.group.add(a);const l=this.material("#71808b"),c=this.material("#394751");this.mesh(new Ci(.54,.44,.04),c,a,[0,0,.02]);const h=this.mesh(new jr(.014,.018,3.12,8),l,a,[0,0,1.6]);h.rotation.x=Math.PI/2;const f=this.mesh(new jr(.012,.012,1.06,8),l,a,[.5,0,3.13]);f.rotation.z=Math.PI/2;const p=this.venue.textTexture(512,1280,(g,m,_)=>{g.fillStyle="#ffffff",g.fillRect(0,0,m,_),g.fillStyle="#011f5b",g.fillRect(0,0,m,65),g.fillRect(0,_-125,m,125),g.fillStyle="#990000",g.fillRect(0,_-125,m,15),this.drawLogo(g,e,50,140,m-100,_-400,e==="alliance"||e==="jhu"),g.fillStyle="#ffffff",g.font="600 28px Arial",g.textAlign="center",g.fillText("AI Coaching",m/2,_-50)});for(const g of[-1,1]){const m=this.venue.decal(p,1,2.5,[.52,-g*.008,1.855],[g,0,0],[0,0,1],a);m.material.transparent=!1,m.material.depthWrite=!0}a.userData.logo=ds.find(g=>g.id===e).name,this.flags.push(a)}setStyle(e){this.group.visible=e!=="original"}snapshot(){return{loaded:this.loaded,visible:this.group.visible,logos:ds.map(e=>e.name),boards:this.boards.map(e=>({name:e.name,position:e.position.toArray(),normal:new W(0,0,1).applyQuaternion(e.quaternion).toArray(),...e.userData})),flags:this.flags.map(e=>({name:e.name,position:e.position.toArray(),logo:e.userData.logo})),pennants:this.pennants}}dispose(){this.group.removeFromParent()}}const Ss={studio:{name:"Daylight Workshop",floor:"#989e9d",seam:"#858c8b",wall:"#d1d3d5",upper:"#dadcde",ceiling:"#b8bcc1",trim:"#68737e",fixture:"#8b939b",stripe:"#697d94"},arena:{name:"Graphite Hangar",floor:"#68757b",seam:"#5c6b70",wall:"#b9c5c8",upper:"#cbd2d4",ceiling:"#89989f",trim:"#5e737e",stripe:"#647993"},gallery:{name:"Soft Sage Workshop",floor:"#8c9d90",seam:"#7a8c7f",wall:"#c9d1c7",upper:"#d1d7cc",ceiling:"#a7b3a8",trim:"#7f9689",stripe:"#768499"}};function OE(i,e){if(i.texture==="81d7488f559b.png")return"floor";if(i.texture==="11dbfc4c0f3f.png")return"wall";if(i.texture==="b11888927f3c.png"){e.computeBoundingBox();const t=e.boundingBox;return t.max.z-t.min.z<.01&&t.min.z>8?"ceiling":"upper"}return i.texture==="c19d0105b81b.png"?"trim":i.texture==="f05ece705e83.png"?"fixture":!i.texture&&i.position[2]>5?"light":"trim"}function kE(i,e){const t=i.getAttribute("position"),n=new Float32Array(t.count*2);i.computeBoundingBox();const r=i.boundingBox,a=e==="floor"||e==="ceiling",l=r.max.x-r.min.x>r.max.y-r.min.y;for(let c=0;c<t.count;c++)n[c*2]=(a||l?t.getX(c):t.getY(c))/6,n[c*2+1]=a?t.getY(c)/6:t.getZ(c)/3;return new Bn(n,2)}class BE{constructor(e){this.textures=[],this.materials=[],this.geometries=[],this.gateLabels=[],this.gateSupports=[],this.wallSigns=[],this.floorBounds=new ji,this.wallBounds=new ji,this.roles={},this.style="studio";for(const r of["floor","wall","upper","ceiling","trim","fixture","light"]){const a=r==="light"?new Ps({color:"#f2f4f6",side:Pn}):new Gr({color:"#ffffff",side:Pn,roughness:.92,metalness:0});if(this.roles[r]=a,this.materials.push(a),["floor","wall","upper","ceiling"].includes(r)){const l=document.createElement("canvas");l.width=l.height=1024;const c=new ju(l);c.colorSpace=hn,c.wrapS=c.wrapT=ws,c.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),a.map=c,this.textures.push(c)}}this.setStyle("studio");const t=new Promise((r,a)=>{const l=new Image;l.onload=()=>{this.grain=l,this.setStyle(this.style),r()},l.onerror=()=>a(new Error("Venue floor texture could not be loaded")),l.src="/demo/venue/matte-floor.png"}),n=new Promise((r,a)=>{this.pennTexture=new _d().load("/demo/venue/penn-logo.png",r,void 0,()=>a(new Error("Penn wall logo could not be loaded"))),this.pennTexture.colorSpace=hn,this.pennTexture.anisotropy=4,this.textures.push(this.pennTexture)});this.ready=Promise.all([t,n])}setStyle(e){if(e!=="original"&&!Ss[e])throw new Error("Unknown venue style");this.style=e;const t=Ss[e]||Ss.studio;for(const n of["trim","fixture"])this.roles[n].color.set(t[n]||t.trim);for(const n of["floor","wall","upper","ceiling"]){const r=this.roles[n],a=r.map.image,l=a.getContext("2d"),c=a.width;if(l.fillStyle=t[n],l.fillRect(0,0,c,c),this.grain&&(l.globalCompositeOperation="multiply",l.globalAlpha=n==="floor"?.48:.16,l.drawImage(this.grain,0,0,c,c),l.globalAlpha=1,l.globalCompositeOperation="source-over"),n==="floor"){l.strokeStyle=t.seam,l.lineWidth=1;for(const h of[0,c/2,c])l.beginPath(),l.moveTo(h,0),l.lineTo(h,c),l.moveTo(0,h),l.lineTo(c,h),l.stroke();r.roughness=.96}else if(n==="wall")l.fillStyle=t.stripe,l.fillRect(0,c*.55,c,c*.45),l.fillStyle=t.trim,l.fillRect(0,c-48,c,48),l.strokeStyle="rgba(70,80,75,.08)",l.lineWidth=1,l.beginPath(),l.moveTo(0,0),l.lineTo(0,c),l.stroke(),r.roughness=.94;else if(n==="upper"){l.strokeStyle="rgba(50,65,60,.1)",l.lineWidth=2;for(let h=0;h<c;h+=c/3)l.beginPath(),l.moveTo(h,0),l.lineTo(h,c),l.stroke();r.roughness=.94}else{l.strokeStyle="rgba(40,60,55,.12)",l.lineWidth=2;for(let h=0;h<c;h+=c/12)l.beginPath(),l.moveTo(h,0),l.lineTo(h,c),l.stroke();l.strokeStyle=t.trim,l.lineWidth=3,l.beginPath(),l.moveTo(0,0),l.lineTo(c,0),l.stroke(),r.roughness=.93}r.map.needsUpdate=!0}for(const n of this.wallSigns)n.visible=e!=="original";for(const n of this.gateLabels)n.visible=e!=="original";for(const n of this.gateSupports)n.visible=e!=="original";this.branding?.setStyle(e)}textTexture(e,t,n){const r=document.createElement("canvas");r.width=e,r.height=t,n(r.getContext("2d"),e,t);const a=new ju(r);return a.colorSpace=hn,a.anisotropy=4,this.textures.push(a),a}decal(e,t,n,r,a,l,c){const h=new Us(t,n),f=new Ps({map:e,transparent:!0,alphaTest:.02,depthWrite:!1,toneMapped:!1}),p=new ln(h,f),g=new W(...a),m=new W(...l),_=new W().crossVectors(g,m);return p.position.set(...r),p.quaternion.setFromRotationMatrix(new Nt().makeBasis(g,m,_)),c.add(p),this.geometries.push(h),this.materials.push(f),p}brandGate(e,t){const n=this.textTexture(1024,1024,(r,a,l)=>{r.fillStyle="#f4f6fa",r.font="700 52px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("AI Coaching",a/2,70,580),r.font="600 42px Arial",r.fillText(String(t+1).padStart(2,"0"),a/2,l-70);for(const c of[38,a-110]){r.save(),r.beginPath(),r.rect(c,185,72,654),r.clip();for(const h of[222,268,712,758])r.beginPath(),r.moveTo(c,h),r.lineTo(c+72,h+36),r.lineTo(c+72,h+59),r.lineTo(c,h+23),r.closePath(),r.fill();r.restore()}});for(const r of[-1,1])this.gateLabels.push(this.decal(n,1.4,1.4,[r*.021,0,0],[0,r,0],[0,0,1],e))}addGateSupports(e){const t=new jr(.011,.011,1,8).rotateX(Math.PI/2),n=new Ci(.38,.16,.026),r=new Gr({color:"#7d8991",roughness:.8,metalness:.25}),a=new Gr({color:"#525c65",roughness:.95,metalness:0});this.geometries.push(t,n),this.materials.push(r,a);const l=this.floorBounds.max.z;for(const[c,h]of e){h.geometry.computeBoundingBox();const f=h.geometry.boundingBox,p=new W().setFromMatrixPosition(h.matrix),g=new W(p.x,p.y,l).applyMatrix4(h.matrix.clone().invert()).z,m=g+.026,_=f.min.z+.035,b=_-m;if(b<=0)continue;const A=new li;A.name=`gate-support-${c}`,h.add(A);for(const y of[f.min.y+.1,f.max.y-.1]){const x=new ln(t,r);x.scale.z=b,x.position.set(0,y,(_+m)/2);const I=new ln(n,a);I.position.set(0,y,g+.013);for(const F of[x,I])F.castShadow=!0,F.receiveShadow=!0,A.add(F)}A.userData={index:c,floorZ:l,poleDiameter:.022,poleHeight:b,baseCount:2},this.gateSupports.push(A)}}addWallSigns(e,t){const n=t.reduce((l,c)=>l+c[0],0)/t.length,r=this.textTexture(2048,384,(l,c)=>{l.fillStyle="#011f5b",l.font="700 190px Arial",l.textAlign="center",l.fillText("AI Coaching",c/2,235),l.fillStyle="#011f5b",l.fillRect(702,290,430,9),l.fillStyle="#990000",l.fillRect(1140,290,206,9)});e.updateMatrixWorld(!0);const a=new W(n,4,4.2);for(const l of[[0,-1,0],[0,1,0]]){const c=new W(...l),h=new Sd(a,c).intersectObjects(e.children,!1)[0];if(!h)continue;const f=h.point.clone().addScaledVector(c,-.025),p=l[1]<0,g=this.decal(p?this.pennTexture:r,p?5:7,p?3:1.3125,f.toArray(),[c.y,-c.x,0],[0,0,1],e);g.userData.logo=p?"Penn":"AI Coaching",this.wallSigns.push(g)}}addBranding(e,t){return this.branding=new NE(e,this,t),this.branding.ready}snapshot(){return{style:this.style,gateLabels:this.gateLabels.length,gateSupports:this.gateSupports.length,supportsVisible:this.gateSupports.filter(e=>e.visible&&e.parent.visible).length,supportDimensions:this.gateSupports.map(e=>e.userData),wallSigns:this.wallSigns.length,pennSigns:this.wallSigns.filter(e=>e.userData.logo==="Penn").length,pennLogoLoaded:!!this.pennTexture.image?.complete,floorBounds:{min:this.floorBounds.min.toArray(),max:this.floorBounds.max.toArray()},branding:this.branding?.snapshot()}}dispose(){this.branding?.dispose();for(const e of this.textures)e.dispose();for(const e of this.materials)e.dispose();for(const e of this.geometries)e.dispose()}}class zE{constructor(e,t){this.group=new li,this.group.name="trackside-event",e.add(this.group),this.materials=[],this.geometries=[],this.textures=[],this.people=[],this.props=[],this.floorZ=t,this.enabled=new URLSearchParams(location.search).get("event")!=="off",this.style="studio",this.loaded=!1,this.colors={navy:this.material("#122c52"),white:this.material("#e2e5e7"),steel:this.material("#747d85",.68,.25),black:this.material("#262d33"),rubber:this.material("#151a20"),wood:this.material("#b3aaa0"),red:this.material("#990000"),screen:this.material("#40566c")},this.addFurniture(),this.setVisible(),this.ready=this.loadPeople()}material(e,t=.9,n=0){const r=new Gr({color:e,roughness:t,metalness:n});return this.materials.push(r),r}mesh(e,t,n,r){this.geometries.push(e);const a=new ln(e,t);return a.position.set(...r),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}box(e,t,n,r){return this.mesh(new Ci(...n),r,e,t)}rod(e,t,n,r,a){const l=new W(...t),c=new W(...n),h=c.clone().sub(l),f=this.mesh(new jr(r,r,h.length(),8),a,e,l.add(c).multiplyScalar(.5).toArray());return f.quaternion.setFromUnitVectors(new W(0,1,0),h.normalize()),f}prop(e,t,n,r=0){const a=new li;return a.name=e,a.position.set(t,n,this.floorZ),a.rotation.z=r,this.group.add(a),this.props.push(a),a}barrier(e,t,n){const r=this.prop("spectator-rail",e,t),a=this.colors;for(const l of[-1,1]){const c=l*n/2;this.rod(r,[0,c,.05],[0,c,1.02],.021,a.steel),this.box(r,[0,c,.025],[.6,.16,.05],a.rubber)}this.rod(r,[0,-n/2,1.02],[0,n/2,1.02],.024,a.steel),this.box(r,[0,0,.69],[.025,n-.12,.45],a.navy),this.box(r,[.015,0,.52],[.006,n-.12,.035],a.white)}camera(e,t){const n=this.prop("tripod-camera",e,t,-.7),r=this.colors;for(let a=0;a<3;a++){const l=a*Math.PI*2/3,c=[Math.cos(l)*.48,Math.sin(l)*.48,.03];this.rod(n,c,[0,0,1.34],.018,r.steel),this.box(n,c,[.075,.075,.045],r.rubber),this.rod(n,[c[0]*.5,c[1]*.5,.66],[0,0,.57],.009,r.black)}this.rod(n,[0,0,1.22],[0,0,1.6],.029,r.black),this.box(n,[0,0,1.67],[.29,.32,.21],r.black),this.rod(n,[0,-.12,1.67],[0,-.33,1.67],.087,r.rubber),this.rod(n,[0,-.325,1.67],[0,-.34,1.67],.062,r.screen),this.box(n,[-.2,.06,1.71],[.1,.02,.13],r.screen),this.rod(n,[.1,.1,1.54],[.22,.4,1.44],.012,r.black)}addFurniture(){const e=this.colors;this.barrier(-12.7,-8.9,3.5),this.barrier(3.55,-4.2,2.3);const t=this.prop("equipment-table",-14.35,-13.2);this.box(t,[0,0,.79],[1,2.5,.065],e.wood);for(const r of[-.39,.39])for(const a of[-1.05,1.05])this.rod(t,[r,a,0],[r,a,.76],.025,e.steel);this.box(t,[-.03,-.65,.843],[.36,.52,.025],e.black);const n=this.box(t,[-.2,-.65,1.01],[.025,.52,.31],e.black);n.rotation.y=-.15,this.box(t,[-.18,-.65,1.01],[.012,.46,.255],e.screen),this.box(t,[.02,.1,.87],[.22,.32,.095],e.black);for(const r of[.015,.18])this.rod(t,[.04,r,.91],[.04,r,.97],.012,e.steel);this.box(t,[.05,.8,.88],[.19,.31,.13],e.white),this.rod(t,[.03,.67,.93],[.03,.67,1.1],.007,e.black);for(const[r,a]of[[-.65,.66],[.35,.85]]){this.box(t,[.03,r,.16],[.57,a,.3],e.black);for(const l of[-1,1])this.box(t,[.32,r+l*a*.32,.2],[.018,.055,.05],e.steel)}this.camera(4.35,-6.8),this.camera(-14,12)}async loadPeople(){const e="/demo/venue/event/",t=await fetch(`${e}spectators.json.gz`);if(!t.ok)throw new Error("Spectator geometry could not be loaded");const n=new Uint8Array(await t.arrayBuffer()),r=JSON.parse(_v(n[0]===31&&n[1]===139?Bh(n):n)),a=r.poses.map(g=>{const m=new yn;for(const _ of["position","normal"])m.setAttribute(_,new Vt(g[_],3));return g.index&&m.setIndex(g.index),m.computeBoundingBox(),this.geometries.push(m),m}),l=this.material("#ffffff");l.vertexColors=!0;const c=["#334c6a","#8b8d8c","#656b64","#a9a59c","#733d41","#414951"],h=["#bb896b","#97664e","#cfa58b","#785340"],f=["#40352d","#57473a","#2b2725","#6b5946"],p=[[-13.65,-7.9,Math.PI/2],[-13.6,-9.2,Math.PI/2+.2],[-14.25,-10.2,Math.PI/2-.25],[4.4,-3.6,-Math.PI/2],[4.45,-4.8,-Math.PI/2-.2],[4.72,-6.05,-Math.PI/2]];for(let g=0;g<2;g++)for(let m=0;m<6;m++)p.push([-15.1-g*1.5-m%2*.2,-6.7-m*1.14-g*.37,Math.PI/2+(m%3-1)*.23]);p.push([-18.4,-8.2,1.4],[-18.8,-9.4,1.8],[-18.2,-10.8,1.2],[-17.7,-12.2,1.6],[-16,-14.8,1.2],[-13.4,-15,2.1]),p.forEach(([g,m,_],b)=>{const A=b%3,y=A*3+(b%11===2?2:b%2),x=a[y].clone(),I=r.poses[y].role,F=[new ct(h[b%4]),new ct(h[b%4]).multiplyScalar(.82),new ct(f[b%4]),new ct("#242628"),new ct(c[b*5%6]),new ct(b%3===0?"#414c58":"#343b43"),new ct(b%4===0?"#b6b8b8":"#36383a")],P=new Float32Array(I.length*3);I.forEach((k,w)=>F[k].toArray(P,w*3)),x.setAttribute("color",new Vt(P,3)),this.geometries.push(x);const N=new ln(x,l);N.name=b===5?"camera-operator":`spectator-${b+1}`;const R=[.96,1.025,1,.985,1.04,.95][b%6];N.position.set(g,m,this.floorZ),N.rotation.z=_,N.scale.setScalar(R),N.castShadow=!0,N.receiveShadow=!0,this.group.add(N),this.people.push(N)}),this.batchStaticDetails(),this.loaded=!0}batchStaticDetails(){this.group.updateMatrixWorld(!0);const e=[];this.group.traverse(a=>{if(!a.isMesh)return;const l=a.geometry.clone().applyMatrix4(a.matrixWorld),c=l.getAttribute("position").count;for(const h of Object.keys(l.attributes))["position","normal","color"].includes(h)||l.deleteAttribute(h);if(!l.getAttribute("color")){const h=new Float32Array(c*3);for(let f=0;f<c;f++)a.material.color.toArray(h,f*3);l.setAttribute("color",new Vt(h,3))}e.push(l)});const t=Cd(e);for(const a of e)a.dispose();const n=this.material("#ffffff");n.vertexColors=!0;const r=new ln(t,n);r.name="batched-trackside-details",r.castShadow=!0,r.receiveShadow=!0,this.geometries.push(t),this.group.clear(),this.group.add(r)}setVisible(e=this.style,t=this.enabled){this.style=e,this.enabled=t,this.group.visible=t&&e!=="original"}snapshot(){return{enabled:this.enabled,visible:this.group.visible,loaded:this.loaded,people:this.people.length,props:this.props.length,positions:[...this.people,...this.props].map(e=>{const t=new ji().setFromObject(e);return{name:e.name,position:e.position.toArray(),bounds:{min:t.min.toArray(),max:t.max.toArray()}}})}}dispose(){for(const e of this.textures)e.dispose();for(const e of this.materials)e.dispose();for(const e of this.geometries)e.dispose();this.group.removeFromParent()}}class GE{constructor(e,t,n){this.sim=t,this.source=n,this.mode="follow",this.lastStep=-1,this.smooth=null,this.renderer=new UE({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=hn,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_s,this.renderer.toneMapping=ic,this.renderer.toneMappingExposure=1.35,e.append(this.renderer.domElement),this.scene=new Q_,this.scene.background=new ct("#d4e5ed");const r=new Bx(16777215,1.7);this.scene.add(r);const a=new Ux(15136255,12102032,1.8);a.up.set(0,0,1),this.scene.add(a);const l=new eh(16775144,2.2);l.position.set(1,15,18),this.scene.add(l);const c=new eh(14019071,.9);c.position.set(-18,-15,6),this.scene.add(c),this.lights=[r,a,l,c],l.castShadow=!0,l.shadow.mapSize.set(1024,1024),Object.assign(l.shadow.camera,{left:-25,right:25,top:35,bottom:-35,near:.1,far:90}),l.shadow.bias=-3e-4,l.shadow.normalBias=.035,l.shadow.radius=3.5,l.shadow.intensity=.4,l.target.position.set(-7,2,0),this.scene.add(l.target),this.ceilingLights=[[-7,-16,7.5],[-1,2,7.5],[-7,20,7.5]].map(A=>{const y=new Ox(16775663,30,35,1.05,.85,2);return y.position.set(...A),y.target.position.set(A[0],A[1],0),this.scene.add(y,y.target),y}),this.venue=new BE(this.renderer),this.staticSurfaces=[],this.camera=new Rn(82,1,.008,250),this.camera.up.set(0,0,1),this.fov=n.cameras.fpv.fovy,this.dynamic=[],this.gateMeshes=new Map,this.materials=[],this.geometries=[],this.textures=[];const h=getComputedStyle(e);this.gateColors={current:h.getPropertyValue("--gate-current").trim(),idle:h.getPropertyValue("--gate-idle").trim()};const f=new _d,p=new Map,g=new Map,m=new Map;this.textureReady=[this.venue.ready];const _=n.meshes.map(A=>{const y=new yn;return y.setAttribute("position",new Vt(A.position.flat(),3)),y.setAttribute("normal",new Vt(A.normal.flat(),3)),A.uv&&y.setAttribute("uv",new Vt(A.uv.flat(),2)),this.geometries.push(y),y});for(const A of n.geoms){if(A.mesh<0)continue;const y=A.bodyName?.startsWith("gate"),x=A.body>0&&!y,I=this.matrix(A.matrix,A.position),F=!x&&!y?_[A.mesh].clone().applyMatrix4(I):null,P=F?OE(A,F):null,N=JSON.stringify([A.rgba,A.texture,y,P]);let R=g.get(N);if(!R){if(R=new Gr({color:new ct().setRGB(...A.rgba.slice(0,3)),roughness:.9,metalness:.02,side:Pn,emissive:2434341,emissiveIntensity:.16}),A.texture){if(!p.has(A.texture)){let k,w;this.textureReady.push(new Promise((B,z)=>{k=B,w=z}));const L=f.load(`/demo/sim/textures/${A.texture}`,k,void 0,w);L.colorSpace=hn,L.wrapS=L.wrapT=ws,L.anisotropy=4,p.set(A.texture,L),this.textures.push(L)}R.map=p.get(A.texture)}g.set(N,R),this.materials.push(R)}if(!x&&!y){const k=F;this.geometries.push(k),R.userData.venueRole=P,k.setAttribute("venueUv",kE(k,P)),P==="floor"&&this.venue.floorBounds.union(k.boundingBox),P==="wall"&&this.venue.wallBounds.union(k.boundingBox),m.has(R)||m.set(R,[]),m.get(R).push(k)}else{y?(R=new Ps({color:this.gateColors.idle,side:Pn,toneMapped:!1}),this.materials.push(R)):(R=R.clone(),R.emissive.set(0),R.roughness=.65,R.metalness=.08,A.bodyName.endsWith("_prop")&&R.color.set("#e6e9ed"),this.materials.push(R));const k=new ln(_[A.mesh],R);if(k.matrixAutoUpdate=!1,k.matrix.copy(I),this.scene.add(k),k.castShadow=!0,k.receiveShadow=!y,y){const w=Number(A.bodyName.slice(4));this.gateMeshes.set(w,k),this.venue.brandGate(k,w)}else this.dynamic.push({mesh:k,id:A.id})}}for(const[A,y]of m)for(const x of[!0,!1]){const I=y.filter(N=>!!N.attributes.uv===x);if(!I.length)continue;const F=Cd(I),P=new ln(F,A);this.geometries.push(F),this.scene.add(P),P.receiveShadow=!0,P.castShadow=A.userData.venueRole==="fixture",this.staticSurfaces.push({mesh:P,original:A,originalUv:F.getAttribute("uv"),venueUv:F.getAttribute("venueUv"),role:A.userData.venueRole})}this.venue.addWallSigns(this.scene,n.gates),this.venue.addGateSupports(this.gateMeshes),this.textureReady.push(this.venue.addBranding(this.scene,this.staticSurfaces.filter(A=>A.role==="wall"||A.role==="upper").map(A=>A.mesh))),this.event=new zE(this.scene,this.venue.floorBounds.max.z),this.textureReady.push(this.event.ready);const b=new URLSearchParams(location.search).get("venue");this.setVenue(b==="original"||Ss[b]?b:"studio"),this.observer=new ResizeObserver(()=>this.resize(e)),this.observer.observe(e),this.resize(e)}setVenue(e){this.lastRenderKey=null,this.venue.setStyle(e);const t=e==="original";this.event.setVisible(e);for(const r of this.staticSurfaces){r.mesh.material=t?r.original:this.venue.roles[r.role];const a=t?r.originalUv:r.venueUv;a?r.mesh.geometry.setAttribute("uv",a):r.mesh.geometry.deleteAttribute("uv")}const n=t?[1.7,1.8,2.2,.9]:[.3,.85,1.45,.3];this.lights.forEach((r,a)=>r.intensity=n[a]),this.lights[1].color.set(t?15136255:15660025),this.lights[1].groundColor.set(t?12102032:11449533),this.lights[2].color.set(t?16775144:16775666),this.lights[3].color.set(t?14019071:15134198),this.lights[1].position.set(...t?[0,1,0]:[0,0,1]),this.ceilingLights.forEach(r=>r.visible=!t),this.renderer.shadowMap.enabled=!t,this.lights[2].position.set(...t?[1,15,18]:[-9,8,8]),this.lights[2].target.position.set(...t?[0,0,0]:[-7,2,0])}matrix(e,t){return new Nt().set(e[0],e[1],e[2],t[0],e[3],e[4],e[5],t[1],e[6],e[7],e[8],t[2],0,0,0,1)}resize(e){const{width:t,height:n}=e.getBoundingClientRect();this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.lastRenderKey=null}render(){const e=this.sim,t=e.data,n=new W(...e.position),r=new oi(e.quaternion[1],e.quaternion[2],e.quaternion[3],e.quaternion[0]),a=[e.steps,e.gate,...e.position,...e.quaternion,this.mode,this.renderer.toneMappingExposure].join(",");if(a!==this.lastRenderKey){this.lastRenderKey=a;for(const{mesh:l,id:c}of this.dynamic)l.matrix.copy(this.matrix(t.geom_xmat.subarray(c*9,c*9+9),t.geom_xpos.subarray(c*3,c*3+3))),l.matrixWorldNeedsUpdate=!0;for(const[l,c]of this.gateMeshes)c.visible=l!==(e.gate===6?0:6),c.material.color.set(l===e.gate?this.gateColors.current:this.gateColors.idle);if(this.mode==="fpv"){this.camera.fov=this.fov,this.camera.position.copy(n).add(new W(...this.source.cameras.fpv.position).applyQuaternion(r));const l=this.source.cameras.fpv.quaternion,c=new oi(l[1],l[2],l[3],l[0]),h=vs(e.quaternion),f=Math.atan2(h[3],h[0]),p=r.clone().multiply(c),g=new oi().setFromAxisAngle(new W(0,0,1),f).multiply(c),m=new oi(p.x*.9+g.x*.1,p.y*.9+g.y*.1,p.z*.9+g.z*.1,p.w*.9+g.w*.1).normalize();!this.smooth||e.steps<this.lastStep?this.smooth=m:e.steps!==this.lastStep&&(this.smooth.dot(m)<0&&m.set(-m.x,-m.y,-m.z,-m.w),this.smooth.set(this.smooth.x*.6+m.x*.4,this.smooth.y*.6+m.y*.4,this.smooth.z*.6+m.z*.4,this.smooth.w*.6+m.w*.4).normalize()),this.camera.quaternion.copy(this.smooth)}else if(this.mode==="follow"){this.camera.fov=62;const l=vs(e.quaternion),c=Math.atan2(l[3],l[0]);this.camera.position.copy(n).add(new W(-1.15*Math.cos(c),-1.15*Math.sin(c),.38)),this.camera.lookAt(n.clone().add(new W(.7*Math.cos(c),.7*Math.sin(c),.12)))}else this.camera.fov=58,this.camera.position.set(3,26,7.5),this.camera.lookAt(-3,0,1.5);this.lastStep=e.steps,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}}setEvent(e){this.event.setVisible(this.venue.style,e),this.lastRenderKey=null,this.render()}dispose(){this.observer.disconnect(),this.event.dispose(),this.venue.dispose(),this.renderer.dispose();for(const e of new Set(this.geometries))e.dispose();for(const e of this.materials)e.dispose();for(const e of this.textures)e.dispose()}}const Ch=-1+2/3.15,Rd=[{name:"Roll",index:1,keys:[["KeyA","A"],["KeyD","D"]]},{name:"Yaw",index:3,keys:[["KeyQ","Q"],["KeyE","E"]]},{name:"Pitch",index:2,keys:[["KeyW","W"],["KeyS","S"]]},{name:"Thrust",index:0,keys:[["ArrowDown","Down"],["ArrowUp","Up"]]}],VE=[["Space","Space","Pause / resume"],["KeyR","R","Reset flight"],["KeyC","C","Camera"],["KeyH","H","Tutorial"]],Oa=i=>Number.isFinite(i)?Math.max(-1,Math.min(1,i)):0,Qo=(i,e,t=1)=>Math.abs(i)<e?0:t*Math.sign(i)*Math.sqrt(Math.abs(i));function HE(i,e,t,n={left:[0,0],right:[0,0]}){const r=[Ch+.5*(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown"))),.8*(Number(i.has("KeyD"))-Number(i.has("KeyA"))),.8*(Number(i.has("KeyS"))-Number(i.has("KeyW"))),.8*(Number(i.has("KeyE"))-Number(i.has("KeyQ")))],a=Rd.filter(c=>c.keys.some(([h])=>i.has(h))).map(c=>c.index);let l=r.slice();if(e?.connected){const c=h=>Oa(e.axes[h]);l=[-Math.sign(c(1))*Math.pow(Math.abs(c(1)),1.5),Qo(c(t.rollAxis),t.deadzone,t.invertRoll?-1:1),Qo(-c(3),t.deadzone),Qo(c(t.yawAxis),t.deadzone,t.invertYaw?-1:1)];for(const h of a)l[h]=r[h]}return n.left.some(c=>c!==0)&&(l[0]=Ch-n.left[1]*.5,l[3]=n.left[0]),n.right.some(c=>c!==0)&&(l[1]=n.right[0],l[2]=n.right[1]),{human:l.map(Oa),keyboardAxes:a}}const Rh=(i,e)=>`<kbd data-key="${i}">${e}</kbd>`;class WE{constructor({onClose:e,onPoll:t}){this.dialog=document.createElement("dialog"),this.dialog.id="tutorial",this.dialog.setAttribute("aria-labelledby","tutorial-title"),this.dialog.innerHTML=`
      <header class="tutorial-header"><h2 id="tutorial-title">Controls</h2><span class="tutorial-state"><i data-lucide="pause"></i>Paused</span><button id="close-tutorial" class="icon-button" aria-label="Close tutorial" title="Close (Esc)"><i data-lucide="x"></i></button></header>
      <div class="tutorial-body">
        <section class="keyboard-monitor"><h3><i data-lucide="keyboard"></i>Keyboard</h3>
          <div class="key-groups">${Rd.map(n=>`<div class="key-group"><span>${n.name}</span><div>${n.keys.map(([r,a])=>Rh(r,a)).join("")}</div></div>`).join("")}</div>
          <div class="shortcut-list">${VE.filter(([n])=>n!=="KeyH").map(([n,r,a])=>`<div><span>${a}</span>${Rh(n,r)}</div>`).join("")}</div>
        </section>
        <section class="gamepad-monitor"><h3><i data-lucide="gamepad-2"></i>Controller <span id="pad-status" role="status">Scanning...</span></h3>
          <p id="pad-hint">Press any controller button to connect.</p>
          <p id="pad-name" hidden></p>
          <div class="stick-monitors disconnected">${["Left","Right"].map((n,r)=>`<div><div class="stick-monitor" aria-label="${n} stick"><span id="pad-stick-${r}"></span></div><span>${n} stick</span></div>`).join("")}</div>
          <div id="pad-buttons" class="pad-buttons" aria-label="Controller buttons" hidden></div>
        </section>
      </div>`,document.body.append(this.dialog),this.dialog.querySelector("#close-tutorial").onclick=e,this.dialog.addEventListener("cancel",n=>{n.preventDefault(),e()}),this.padSignature="",this.input=null,this.pollTimer=null,this.onPoll=t;for(const n of["focus","pageshow","gamepadconnected","gamepaddisconnected"])window.addEventListener(n,()=>this.startPolling());document.addEventListener("visibilitychange",()=>document.hidden?this.stopPolling():this.startPolling()),window.addEventListener("pagehide",()=>this.stopPolling()),this.dialog.addEventListener("close",()=>{this.open||this.stopPolling()})}get open(){return this.dialog.open}show(){this.dialog.showModal(),this.dialog.querySelector("#close-tutorial").focus(),this.dialog.querySelector(".tutorial-body").scrollTop=0,this.startPolling()}close(){this.stopPolling(),this.dialog.close(),this.input=null}startPolling(){this.stopPolling(),!(!this.open||document.hidden)&&(this.onPoll(),this.pollTimer=setInterval(()=>this.onPoll(),100))}stopPolling(){clearInterval(this.pollTimer),this.pollTimer=null}update(e,t,n){if(!this.open)return;this.input=[...n];for(const p of this.dialog.querySelectorAll("[data-key]"))p.classList.toggle("pressed",e.has(p.dataset.key));const r=this.dialog.querySelector("#pad-status"),a=t?"Connected":"Scanning...";r.textContent!==a&&(r.textContent=a),r.classList.toggle("connected",!!t),this.dialog.querySelector("#pad-hint").hidden=!!t;const l=this.dialog.querySelector("#pad-name");l.hidden=!t,l.textContent=t?.id||"",l.title=t?.id||"",this.dialog.querySelector(".stick-monitors").classList.toggle("disconnected",!t);const c=Math.min(t?.axes.length||0,32),h=Math.min(t?.buttons.length||0,64),f=`${t?.index}:${t?.id}:${c}:${h}`;if(f!==this.padSignature){this.padSignature=f;const p=this.dialog.querySelector("#pad-buttons");p.hidden=!h,p.innerHTML=Array.from({length:h},(g,m)=>`<span data-pad-button="${m}" title="Button ${m}">B${m}</span>`).join("");for(const g of["roll-axis","yaw-axis"]){const m=document.getElementById(g);for(let _=0;_<c;_++)Array.from(m.options).some(b=>b.value===String(_))||m.add(new Option(`Axis ${_}`,_))}}for(let p=0;p<2;p++)this.dialog.querySelector(`#pad-stick-${p}`).style.transform=`translate(${Oa(t?.axes[p*2])*26}px,${Oa(t?.axes[p*2+1])*26}px)`;for(let p=0;p<h;p++){const g=t.buttons[p],m=typeof g=="number"?g:g.value;this.dialog.querySelector(`[data-pad-button="${p}"]`).classList.toggle("pressed",!!g.pressed||m>.1)}}}const $E=[{file:"music/hci-bgm-1.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - 40,000 Feet over the Prairies",seconds:372.976327,sourceSha256:"360d74febf7c697624fb37d966ae2f5c992299008d9338e66c4d81cc71572d47",sha256:"15aff80fc55041c49f9e8e8faaaa5060a37d94e304f980de7c82ab67f30a014a"},{file:"music/hci-bgm-2.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Bandit at 6 O_clock",seconds:291.866122,sourceSha256:"5a08259cf3a9c80a77523c9914f494bc3abcf2eb70bb87adb0969255285a0709",sha256:"10c3b598d6f0eef0e38b091d683d5b87a1d3f42f2028363d95e2e8e14fed646f"},{file:"music/hci-bgm-3.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Frontal Attack",seconds:344.555102,sourceSha256:"97c854b8e39b936444127445b2c0b7d6b372bfff4941deb93dff376c80605771",sha256:"23f1b9b46a3269602034cce4a0150d4193f83e1c9ea6e254653c331505f87d4c"},{file:"music/hci-bgm-4.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Interdiction",seconds:276.27102,sourceSha256:"88631643e5c6a846ab4eacc807eebc3b21b0c0a119b17aadd5e95aecf669933c",sha256:"e03f48a536228271efa478645612d9c2c9a7374f91c7c05892d936872a67c33e"},{file:"music/hci-bgm-5.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Through the Clouds",seconds:264.907755,sourceSha256:"259a1188cbb78b1151e2a4a5c2cc8bf689424b9b58425fd934fc5f27633e3704",sha256:"6629a3274664402d01d89fb28782b5621ecc1644b3838a6b4ae43ee5321fd0d0"},{file:"music/hci-bgm-6.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Waltz of the Tornado",seconds:293.616327,sourceSha256:"2e91044ca725c4f486b9ad2f878ef147bc310f5d0e7fa16c468deb1d2bb1652f",sha256:"89627d8e12c11acf05155b87e0a6e1c44c4cbb8433caef462c48d1b2119f6e3b"}],Ph={encourage:5,eval_start:3,eval_end:3,autopilot_on:1,takeover:1,roll_left_light:2,roll_left_hard:2,roll_right_light:2,roll_right_hard:2,yaw_left_light:2,yaw_left_hard:2,yaw_right_light:2,yaw_right_hard:2},XE=(i,e=0)=>`${i}${["autopilot_on","takeover"].includes(i)?"":`_${e}`}.wav`;function jE(i,e){for(const[t,n,r,a]of[["yaw",3,.05,.2],["roll",1,.3,.6]]){const l=Math.abs(i[n]-e[n])/2;if(l<r)continue;const c=e[n]>i[n];return`${t}_${t==="yaw"?c?"left":"right":c?"right":"left"}_${l>=a?"hard":"light"}`}return null}class qE{constructor({baseUrl:e,onCue:t=()=>{},onError:n=()=>{},random:r=Math.random}={}){this.baseUrl=e,this.onCue=t,this.onError=n,this.random=r,this.enabled=!0;try{this.enabled=localStorage.getItem("drone-audio")!=="muted"}catch{}this.musicEnabled=!0;try{this.musicEnabled=localStorage.getItem("drone-music")!=="muted"}catch{}this.context=null,this.paused=!1,this.buffers=new Map,this.voice=null,this.generation=0,this.music=null,this.musicQueue=[],this.musicTrack=null,this.lastPlay=-1/0,this.lastCorrection=-1/0,this.lastCue=null,this.playCount=0,this.error=null}async unlock(){if(this.enabled)try{this.context||(this.context=new(window.AudioContext||window.webkitAudioContext),this.master=this.context.createGain(),this.master.gain.value=1,this.master.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master),this.rotorGain=this.context.createGain(),this.rotorGain.gain.value=0,this.rotorGain.connect(this.master),this.rotor=this.context.createOscillator(),this.rotor.type="sawtooth",this.rotor.frequency.value=90,this.rotor.connect(this.rotorGain),this.rotor.start()),this.paused||await this.context.resume(),this.startMusic()}catch(e){this.fail(e)}}fail(e){this.error=String(e.message||e),this.onError(this.error)}async buffer(e){if(!this.buffers.has(e)){const t=fetch(`${this.baseUrl}${e}`).then(async n=>{if(!n.ok)throw new Error(`Audio HTTP ${n.status}: ${e}`);return this.context.decodeAudioData(await n.arrayBuffer())});this.buffers.set(e,t),t.catch(()=>this.buffers.delete(e))}return this.buffers.get(e)}updateMusicGain(){this.musicGain&&this.musicGain.gain.setTargetAtTime(this.enabled&&this.musicEnabled?this.voice?.035:.12:0,this.context.currentTime,.12)}nextMusicTrack(){if(!this.musicQueue.length){this.musicQueue=[...$E];for(let e=this.musicQueue.length-1;e>0;e--){const t=Math.floor(this.random()*(e+1));[this.musicQueue[e],this.musicQueue[t]]=[this.musicQueue[t],this.musicQueue[e]]}}this.musicTrack=this.musicQueue.pop(),this.music.src=`${this.baseUrl}${this.musicTrack.file}`}async startMusic(){if(!(!this.enabled||!this.musicEnabled||!this.context||this.paused)&&(this.music||(this.music=new Audio,this.music.preload="metadata",this.musicNode=this.context.createMediaElementSource(this.music),this.musicNode.connect(this.musicGain),this.music.addEventListener("ended",()=>{this.nextMusicTrack(),this.startMusic()}),this.nextMusicTrack()),!!this.music.paused)){this.updateMusicGain();try{await this.music.play()}catch(e){e.name!=="AbortError"&&this.enabled&&this.musicEnabled&&!this.paused&&this.fail(e)}}}stopMusic(){this.music?.pause(),this.updateMusicGain()}setMusicEnabled(e){this.musicEnabled=!!e;try{localStorage.setItem("drone-music",this.musicEnabled?"enabled":"muted")}catch{}this.musicEnabled?this.unlock():this.stopMusic()}stopVoice(){if(this.generation++,this.voice){try{this.voice.stop()}catch{}this.voice=null}this.updateMusicGain(),Number.isFinite(this.lastPlay)||(this.lastPlay=this.lastCorrection=this.context?.currentTime??0)}async play(e){if(!this.enabled||!this.context||!Object.hasOwn(Ph,e))return;this.stopVoice();const t=this.generation;this.lastPlay=this.lastCorrection=1/0;const n=XE(e,Math.floor(this.random()*Ph[e]));try{const r=await this.buffer(n);if(t!==this.generation||!this.enabled)return;const a=this.context.createBufferSource();a.buffer=r,a.connect(this.master),this.voice=a,a.onended=()=>{this.voice===a&&(this.voice=null,this.updateMusicGain())},a.start(),this.updateMusicGain();const l=this.context.currentTime;["eval_start","eval_end","autopilot_on","takeover"].includes(e)?this.lastPlay=this.lastCorrection=l+r.duration:(this.lastPlay=l,this.lastCorrection=e==="encourage"?l-2.5:l),this.lastCue=e,this.playCount++,this.onCue({name:e,filename:n,duration:r.duration})}catch(r){t===this.generation&&(this.lastPlay=this.lastCorrection=this.context.currentTime,this.fail(r))}}setEnabled(e){this.enabled=!!e;try{localStorage.setItem("drone-audio",this.enabled?"enabled":"muted")}catch{}this.master&&(this.master.gain.value=this.enabled?1:0),this.stopVoice(),this.enabled||this.stopMusic(),this.lastPlay=this.lastCorrection=this.context?.currentTime??0,this.enabled&&this.unlock()}setPaused(e){if(this.paused=!!e,this.paused&&this.music?.pause(),!this.context)return;(this.paused?this.context.suspend():this.context.resume()).then(()=>{this.paused||this.startMusic()}).catch(n=>this.fail(n))}tick(e,t,n,r=!1){if(!this.context||this.paused||!this.enabled||(this.rotor.frequency.setTargetAtTime(90+e.reduce((l,c)=>l+c,0)/35,this.context.currentTime,.08),this.rotorGain.gain.setTargetAtTime(this.voice?.003:.012,this.context.currentTime,.04),!t||!n||r||this.voice))return;const a=this.context.currentTime;if(a-this.lastCorrection>=5){const l=jE(t,n);if(l){this.play(l);return}}a-this.lastPlay>=5&&(this.lastPlay=a,this.random()<.5&&this.play("encourage"))}snapshot(){return{enabled:this.enabled,state:this.context?.state??"locked",paused:this.paused,lastCue:this.lastCue,playCount:this.playCount,error:this.error,music:{enabled:this.musicEnabled,playing:!!this.music&&!this.music.paused&&this.music.readyState>=2&&this.enabled&&!this.paused&&this.context?.state==="running",gain:this.musicGain?.gain.value??0,ducked:this.enabled&&this.musicEnabled&&!!this.voice&&!!this.music,track:this.musicTrack?.file??null,time:this.music?.currentTime??0}}}}const gr=["Pre-test","Coaching","Post-test"];class YE{constructor({id:e,participant:t="",method:n,now:r=()=>new Date().toISOString()}){if(!Object.hasOwn($i,n))throw new Error("Invalid study method");this.now=r,this.meta={id:e,participant:t,method:n,createdAt:r(),physics:"MuJoCo 3.13 WASM",hciConfig:tc,controlHz:50,recordHz:50,stageEnd:"operator",sharedControl:!0,testRollYawBlend:.3,recoveryRollYawBlend:.95,aiAxes:["thrust","pitch"],source:"HCI teleop; browser adaptation",simulationEquivalenceVerified:!1},this.stages=[],this.status="ready",this.active=null}start(){if(!["ready","between"].includes(this.status)||this.stages.length>=3)throw new Error("No stage ready to start");const e=this.stages.length;return this.active={meta:{stage:e,name:gr[e],method:this.meta.method,startedAt:this.now()},rows:[],events:[],summary:null},this.stages.push(this.active),this.status="running",e}event(e,t,n={}){this.active&&this.active.events.push({event:e,time:t,at:this.now(),...structuredClone(n)})}record(e){this.active&&this.active.rows.push(structuredClone(e))}finish(e,{aborted:t=!1,bestLap:n=null,lastLap:r=0,beliefs:a=null}={}){if(!this.active)throw new Error("No running stage");this.active.summary={endedAt:this.now(),aborted:t,durationSim:e.coaching.time,durationWall:(Date.parse(this.now())-Date.parse(this.active.meta.startedAt))/1e3,steps:this.active.rows.length,laps:e.laps,failures:e.failures,gates:e.gates,bestLap:n,lastLap:r,finalState:structuredClone(e),beliefs:structuredClone(a)},this.active=null,this.status=t?"aborted":this.stages.length===3?"complete":"between"}snapshot(){return{id:this.meta.id,status:this.status,method:this.meta.method,stage:this.active?.meta.stage??null,stages:this.stages.map(e=>({meta:e.meta,summary:e.summary,rows:e.rows.length,events:e.events.length}))}}export(){return{schema:"ai-coaching-session/v1",meta:this.meta,status:this.status,stages:this.stages}}}const kr=[.9,.6,.3],ms=45;class KE{constructor(){this.rounds=[],this.status="ready",this.current=null}get active(){return this.status==="running"}start(){if(!["ready","between"].includes(this.status)||this.rounds.length>=kr.length)throw new Error("No comparison round available");return this.current={alpha:kr[this.rounds.length],seconds:0,simulationSeconds:0,rows:[],events:[],summary:null},this.rounds.push(this.current),this.status="running",this.current.alpha}advance(e){if(!Number.isFinite(e)||e<0)throw new Error("Invalid comparison time");return this.active?(this.current.seconds=Math.min(ms,this.current.seconds+e),this.current.seconds>=ms):!1}record(e){this.active&&(this.current.simulationSeconds+=.02,this.current.rows.push(structuredClone(e)))}event(e,t={}){this.active&&this.current.events.push({event:e,time:this.current.seconds,...structuredClone(t)})}finish(e,t="timer"){if(!this.active)throw new Error("No comparison round is running");this.current.summary={reason:t,gates:e.gates,failures:e.failures,laps:e.laps,activeSeconds:this.current.seconds,simulationSeconds:this.current.simulationSeconds},this.current=null,this.status=this.rounds.length===kr.length?"complete":"between"}snapshot(){return{status:this.status,round:this.rounds.length,alpha:this.current?.alpha??null,remaining:this.current?Math.max(0,ms-this.current.seconds):0,rounds:this.rounds.map(e=>({alpha:e.alpha,seconds:e.seconds,simulationSeconds:e.simulationSeconds,rows:e.rows.length,summary:e.summary}))}}export(){return{schema:"assistance-comparison/v1",purpose:"Fixed-blend demonstration, not a learning evaluation",levels:kr,roundSeconds:ms,clock:"active wall time; pauses excluded",aiAxes:["thrust","pitch"],humanAxes:["roll","yaw"],status:this.status,rounds:this.rounds}}}const zt=i=>`<i data-lucide="${i}"></i>`,Sc=document.querySelector("#app");Sc.classList.add("booting");Sc.innerHTML=`
<div id="viewport" aria-label="Interactive MuJoCo drone racing scene"></div>
<header class="brand"><span class="brand-mark">${zt("plane")}</span><div><h1>AI Coaching</h1><span>Drone Racing</span></div></header>
<button id="open-tutorial" class="tutorial-entry" title="Tutorial & input check (H)" aria-haspopup="dialog" aria-controls="tutorial">${zt("book-open")}<span>Tutorial</span><kbd>H</kbd></button>
<button id="open-session" class="session-entry" title="Coaching and test session" aria-haspopup="dialog" aria-controls="session-dialog">${zt("clipboard-list")}<span>Session</span></button>
<div class="baseline-selector"><div class="experience-tabs segmented" role="tablist" aria-label="Flight experience"><button id="tab-demo" role="tab" aria-controls="demo-panel" aria-selected="true">Demo</button><button id="tab-hci" role="tab" aria-controls="hci-panel" aria-selected="false">HCI methods</button></div>
<section id="demo-panel" role="tabpanel" aria-labelledby="tab-demo"><label for="demo-alpha">Fixed steering blend <output id="demo-alpha-value">90%</output></label><input id="demo-alpha" type="range" min="30" max="95" step="5" value="90" list="blend-ticks"><datalist id="blend-ticks"><option value="30"></option><option value="60"></option><option value="90"></option></datalist><div class="blend-scale"><span>30%</span><span>60%</span><span>90%</span></div><button id="compare-levels" class="export">${zt("play")}<span>Compare 3 levels</span></button><div id="comparison-clock" hidden><span id="comparison-round"></span><strong id="comparison-remaining"></strong></div><span class="axis-contract">AI thrust & pitch</span></section>
<section id="hci-panel" role="tabpanel" aria-labelledby="tab-hci" hidden><label for="baseline">Coaching method</label><select id="baseline"><option value="l2c">L2C · AI Coaching</option><option value="mia">MIA · Minimal intervention</option><option value="rbf">RBF · Rule-based fading</option></select><span id="baseline-detail"></span></section>
<div id="steering-feedback" hidden><div class="blend-live"><span>Live roll/yaw blend</span><strong id="live-blend"></strong></div><div class="command-legend"><span class="human-key">${zt("gamepad-2")} Input</span><span class="applied-key">${zt("plane")} Applied</span></div>${["roll","yaw"].map(i=>`<div class="command-row"><span>${i==="roll"?"Roll":"Yaw"}</span><div class="command-track" aria-label="${i} input and applied action"><b data-command="${i}-human"></b><b data-command="${i}-applied"></b></div></div>`).join("")}</div></div>
<div class="telemetry"><div><span>LAP</span><strong id="lap">00</strong></div><div><span>TIME</span><strong id="timer">00:00.00</strong></div><div><span>GATE</span><strong id="gate">01 <small>/ 12</small></strong></div></div>
<aside id="settings" class="settings" hidden aria-label="Flight settings"><div class="panel-title"><h2>Flight settings</h2><button class="icon-button" id="close-settings" title="Close settings" aria-label="Close settings">${zt("x")}</button></div>
<label>Control mode<select id="mode"><option value="expert">Expert autopilot</option><optgroup label="HCI methods"><option value="l2c">L2C · AI Coaching</option><option value="mia">MIA · Minimal intervention</option><option value="rbf">RBF · Rule-based fading</option></optgroup><optgroup label="Debug controls"><option value="assisted">Fixed assistance</option><option value="manual">Manual flight</option><option value="coach">Coach · fixed skill</option><option value="tracking">Tracking actor only</option></optgroup></select></label>
<label id="alpha-row" hidden>AI assistance <output id="alpha-label">80%</output><input id="alpha" type="range" min="30" max="100" value="80"></label>
<label id="skill-row" hidden>Fixed skill <output id="skill-label">0.00</output><input id="skill" type="range" min="0" max="100" value="0"></label>
<label>Brightness <output id="exposure-label">135%</output><input id="exposure" type="range" min="60" max="220" value="135"></label>
<label>Venue style<select id="venue">${Object.entries(Ss).map(([i,e])=>`<option value="${i}">${e.name}</option>`).join("")}<option value="original">Original warehouse</option></select></label>
<div class="checks"><label><input id="event-details" type="checkbox" checked>Trackside details</label></div>
<div class="checks"><label><input id="music" type="checkbox" checked>Background music</label></div>
<div class="input-heading">${zt("gamepad-2")}<strong id="device">Keyboard</strong></div>
<label>Roll axis<select id="roll-axis"><option value="2">Right stick X · axis 2</option><option value="0">Axis 0</option><option value="1">Axis 1</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<label>Yaw axis<select id="yaw-axis"><option value="0">Left stick X · axis 0</option><option value="1">Axis 1</option><option value="2">Axis 2</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<div class="checks"><label><input id="invert-roll" type="checkbox">Invert roll</label><label><input id="invert-yaw" type="checkbox" checked>Invert yaw</label></div>
<label>Stick deadzone <output id="deadzone-label">5%</output><input id="deadzone" type="range" min="0" max="30" value="5"></label>
<button id="export" class="export">${zt("download")} Export flight log</button><div class="engine">MuJoCo 3.13 <span>Browser physics</span></div></aside>
<div class="flight-data"><span id="speed">0.0 <small>m/s</small></span><span id="altitude">2.0 <small>m AGL</small></span><span id="status">AUTOPILOT</span></div>
<div class="gate-strip" id="gate-strip" aria-label="Gate progress">${Array.from({length:12},(i,e)=>`<span data-gate="${e}">${e+1}</span>`).join("")}</div>
<div class="joystick left-stick" aria-label="Touch yaw and thrust" role="application"><span></span></div><div class="joystick right-stick" aria-label="Touch roll and pitch" role="application"><span></span></div>
<nav class="toolbar" aria-label="Flight controls">
<div class="segmented" role="group" aria-label="Camera view"><button data-view="fpv" aria-pressed="false">FPV</button><button data-view="follow" class="selected" aria-pressed="true">Chase</button><button data-view="overview" aria-pressed="false">Track</button></div><span class="divider"></span>
<button id="pause" class="icon-button" title="Pause (Space)" aria-label="Pause">${zt("pause")}</button><button id="reset" class="icon-button" title="Reset flight (R)" aria-label="Reset flight">${zt("rotate-ccw")}</button><button id="sound" class="icon-button" title="Mute audio" aria-label="Mute audio">${zt("volume-2")}</button><button id="settings-toggle" class="icon-button" title="Flight settings" aria-label="Flight settings" aria-expanded="false">${zt("settings-2")}</button><button id="fullscreen" class="icon-button" title="Full screen" aria-label="Full screen">${zt("maximize")}</button>
<div class="control-switch"><div class="mode-status" role="status" aria-live="polite" aria-atomic="true"><span>Current mode</span><strong id="current-mode">Autopilot</strong></div><button id="take-control" class="primary" title="Start a new trial using the selected coaching method">${zt("gamepad-2")}<span>Start flying</span></button></div></nav>
<dialog id="session-dialog" aria-labelledby="session-title"><div class="session-header"><h2 id="session-title">Coaching session</h2><button id="close-session" class="icon-button" title="Close session panel" aria-label="Close session panel">${zt("x")}</button></div>
<div class="session-body"><ol class="session-stages">${gr.map((i,e)=>`<li data-stage="${e}"><span>${e+1}</span>${i}</li>`).join("")}</ol>
<div id="session-setup"><label>Participant ID <span>(optional)</span><input id="participant" maxlength="64" autocomplete="off" placeholder="P01"></label><label>Method<select id="session-method"><option value="l2c">L2C · AI Coaching</option><option value="mia">MIA · Minimal intervention</option><option value="rbf">RBF · Rule-based fading</option></select></label></div>
<p id="session-condition">Tests: 30% roll/yaw AI blend. Thrust and pitch stay AI-controlled.</p><div id="session-state" role="status">Ready for pre-test</div>
<div class="session-results" hidden><table><thead><tr><th>Stage</th><th>Time</th><th>Laps</th><th>Failures</th><th>Best lap</th></tr></thead><tbody id="session-results"></tbody></table></div>
<div class="session-actions"><button id="session-start" class="primary">${zt("play")}<span>Start pre-test</span></button><button id="session-resume" class="primary" hidden>${zt("play")}<span>Resume</span></button><button id="session-finish" class="export" hidden>Finish stage</button><button id="session-download" class="export" hidden>${zt("download")}<span>Download session</span></button></div>
<div class="session-secondary"><button id="session-abort" hidden>End session early</button><span>Local recording · Manual stage end</span></div></div></dialog>
<dialog id="comparison-dialog" aria-labelledby="comparison-title"><div class="session-header"><h2 id="comparison-title">Assistance comparison</h2><button id="comparison-close" class="icon-button" title="Close comparison" aria-label="Close comparison">${zt("x")}</button></div><div class="session-body"><div class="session-results"><table><thead><tr><th>AI blend</th><th>Active time</th><th>Gates</th><th>Resets</th></tr></thead><tbody id="comparison-results"></tbody></table></div><p class="comparison-note">Fixed assistance · Not a learning test</p><div class="session-actions"><button id="comparison-next" class="primary">${zt("play")}<span>Next level</span></button><button id="comparison-download" class="export">${zt("download")}<span>Download</span></button></div></div></dialog>
<div id="notice" role="status" hidden></div><div class="loading" id="loading" aria-busy="true"><span class="spinner"></span><strong>Preparing flight</strong><span id="loading-status" role="status">Loading MuJoCo</span><progress id="loading-progress" max="6" value="0" aria-label="Loading stages"></progress><div class="loading-summary"><span id="loading-stage">0 / 6</span><span id="loading-detail"></span></div><button id="retry" hidden>Retry</button></div>`;const JE={Play:kv,Pause:Nv,RotateCcw:Bv,Settings2:zv,Maximize:Iv,Minimize:Uv,Gamepad2:Lv,Camera:Cv,Download:Dv,Volume2:Vv,VolumeX:Hv,X:Wv,Sun:Gv,Plane:Ov,ChevronDown:Rv,BookOpen:Av,Keyboard:Fv,ClipboardList:Pv},Jr=()=>Hh({icons:JE});Jr();const Z=i=>document.getElementById(i),Pd=document.querySelectorAll("#open-tutorial,#open-session,.baseline-selector button,.baseline-selector input,#baseline,.toolbar button,.settings button,.settings input,.settings select");Pd.forEach(i=>i.disabled=!0);let ue,At,Jt=!1,Yn=!1,gs=0,Vr=0,Dd=0,Dh,Ke=null,Zr=!1,et=null,qi=new URLSearchParams(location.search).get("experience")==="hci"?"hci":"demo";const Ld=[],Ut=new qE({baseUrl:"/demo/audio/",onCue:i=>{Ke?.event("audio",ue.coaching?.time??0,i),et?.event("audio",i)},onError:()=>Ot("Audio could not play. Use the sound button to retry.")}),Ns=new Set,Mi={left:[0,0],right:[0,0]},vr=[],Fd=[];let Ls="Keyboard",bs=0;const Fn=new WE({onClose:ZE,onPoll:()=>{const{human:i,pad:e}=Xd();Fn.update(Ns,e,i)}});Jr();function Ot(i,e){if(Z("notice").textContent=i,e){const t=document.createElement("kbd");t.textContent=e,Z("notice").append(t)}Z("notice").hidden=!1,clearTimeout(Dh),Dh=setTimeout(()=>Z("notice").hidden=!0,3e3)}function jt(i){const e=Jt;Jt=Fn.open||Z("session-dialog").open||Z("comparison-dialog").open||!!i,Vr=0,gs=performance.now(),Ut.setPaused(Jt),e!==Jt&&(Ke?.event(Jt?"pause":"resume",ue?.coaching?.time??0),et?.event(Jt?"pause":"resume")),Z("pause").innerHTML=zt(Jt?"play":"pause"),Z("pause").setAttribute("aria-label",Jt?"Resume":"Pause"),Z("pause").title=`${Jt?"Resume":"Pause"} (Space)`,Jr(),ue&&Pi()}function Id(){jt(!Jt),Ot(Jt?"Flight paused":"Flight resumed","Space")}function zn(i,e=1,t=!1){const n={expert:"Autopilot",assisted:"AI-assisted",manual:"Manual",coach:"Coach (fixed)",tracking:"Tracking",...$i};if(!ue||!Object.hasOwn(n,i))throw new Error("Invalid flight mode");if(et?.active){Z("mode").value=ue.mode,Ot("Finish this comparison round before changing mode.");return}if(Ke?.active&&!t){Z("mode").value=ue.mode,Ot("Finish the current session stage before changing mode.");return}ue.coaching&&Fd.push({id:bs,endedAt:new Date().toISOString(),state:ue.snapshot(),beliefs:ue.coaching.belief.probabilities}),Ut.stopVoice(),ue.setMode(i,e),Z("mode").value=i,Z("skill-row").hidden=i!=="coach",Z("alpha-row").hidden=i!=="assisted",Object.hasOwn($i,i)&&(Xa("hci"),bs++,Z("baseline").value=i,At.smooth=null,Vr=0,vr.push({event:"trial_start",trialId:bs,method:i,at:new Date().toISOString()})),Z("current-mode").textContent=n[i];const r=Z("take-control");r.innerHTML=`${zt(i==="expert"?"gamepad-2":"plane")}<span>${i==="expert"?"Start flying":"Use autopilot"}</span>`,r.title=i==="expert"?"Start a new trial using the selected coaching method":"Switch to expert autopilot",Jr(),Pi()}function bc(){if(!(!ue||Fn.open||Z("session-dialog").open||Z("comparison-dialog").open)){if(et?.active)et.event("manual_reset",{gate:ue.gate}),ue.failures++,ue.recover();else if(Ke?.active){Ke.event("manual_reset",ue.coaching.time,{gate:ue.gate});const i=ue.coaching.evaluation.recovery;ue.failures++,ue.coaching.onFailure(ue.gate),ue.recover(),!i&&ue.coaching.evaluation.recovery&&Ut.play("autopilot_on")}else ue.coaching?zn(ue.mode):qi==="demo"&&ue.mode==="assisted"?ue.startFixedAssistance(Number(Z("demo-alpha").value)/100):ue.reset();At.smooth=null,Vr=0,Ot("Flight reset","R")}}function Zl(i){if(!["fpv","follow","overview"].includes(i))throw new Error("Invalid camera");At&&(At.mode=i),document.querySelectorAll("[data-view]").forEach(e=>{const t=e.dataset.view===i;e.classList.toggle("selected",t),e.setAttribute("aria-pressed",String(t))})}function Ud(i){Zl(i),Ot(`Camera: ${{fpv:"FPV",follow:"Chase",overview:"Track"}[i]}`,"C")}function Os(i){Z("settings").hidden=!i,Z("settings-toggle").setAttribute("aria-expanded",String(i))}function Tn(){Ns.clear(),Mi.left=[0,0],Mi.right=[0,0],document.querySelectorAll(".joystick>span").forEach(i=>i.style.transform="")}function Nd(){!Yn||Fn.open||(Tn(),Os(!1),jt(!0),Z("notice").hidden=!0,Fn.show())}function ZE(i=!0){Fn.close(),Tn(),jt(!0),Z("open-tutorial").focus(),i&&Ot("Flight paused","Space")}function $a(){const i=!!(Ke?.active||et?.active);for(const e of["baseline","mode","take-control","tab-demo","tab-hci","demo-alpha"])Z(e).disabled=i;Z("open-session").disabled=!!et?.active,Z("compare-levels").disabled=!!Ke?.active,Z("alpha").disabled=!!et?.active}function Mc(){const i=Ke?.status??"ready",e=i==="running",t=["complete","aborted"].includes(i),n=Ke?.active?.meta.stage??(t?null:Ke?.stages.length??0);Z("session-setup").hidden=!!Ke&&!t,Z("session-condition").textContent="Tests: 30% roll/yaw AI blend. Thrust and pitch stay AI-controlled.",Z("session-state").textContent=e?`${gr[n]} · ${Ms(ue.coaching.time)} · Paused`:t?`Session ${i}`:`Ready for ${gr[n].toLowerCase()}`,document.querySelectorAll("[data-stage]").forEach(a=>{const l=Number(a.dataset.stage);a.classList.toggle("active",l===n),a.classList.toggle("done",!!(Ke?.stages[l]?.summary&&!Ke.stages[l].summary.aborted)),l===n?a.setAttribute("aria-current","step"):a.removeAttribute("aria-current")}),Z("session-start").hidden=e,Z("session-start").querySelector("span").textContent=t?"New session":`Start ${gr[n].toLowerCase()}`,Z("session-resume").hidden=!e,Z("session-finish").hidden=!e,Z("session-abort").hidden=!Ke||t,Z("session-download").hidden=!Ke;const r=Ke?.stages.filter(a=>a.summary)??[];Z("session-results").parentElement.parentElement.hidden=!r.length,Z("session-results").replaceChildren(...r.map(a=>{const l=document.createElement("tr");for(const c of[a.meta.name+(a.summary.aborted?" (partial)":""),Ms(a.summary.durationSim),a.summary.laps,a.summary.failures,a.summary.bestLap===null?"--":Ms(a.summary.bestLap)]){const h=document.createElement("td");h.textContent=c,l.append(h)}return l})),$a()}function QE(){!Yn||et?.active||(Tn(),Os(!1),Fn.open&&Fn.close(),jt(!0),Z("session-method").value=Ke?.meta.method??Z("baseline").value,Mc(),Z("session-dialog").showModal())}function Od(){Z("session-dialog").close(),Tn(),jt(!0),Z("open-session").focus()}function e1(){Xa("hci"),Ke||(Ke=new YE({id:crypto.randomUUID(),participant:Z("participant").value.trim(),method:Z("session-method").value}));const i=Ke.start();Zr=!0,zn(Ke.meta.method,i,!0),Tn(),At.smooth=null,Ke.meta.policy=ue.policies.expert.metadata,Ke.event("stage_start",0,{stage:i,method:ue.mode,audio:Ut.enabled,music:Ut.musicEnabled,camera:At.mode,input:Ls,inputSettings:{rollAxis:Number(Z("roll-axis").value),yawAxis:Number(Z("yaw-axis").value),invertRoll:Z("invert-roll").checked,invertYaw:Z("invert-yaw").checked,deadzone:Number(Z("deadzone").value)/100}}),Z("session-dialog").close(),jt(!1),$a(),Ut.unlock(),i!==1&&Ut.play("eval_start"),Ot(`${gr[i]} started`)}function kd(i=!1){Ke?.active?(Ke.event("stage_end",ue.coaching.time,{aborted:i}),Ke.finish(ue.snapshot(),{aborted:i,bestLap:ue.bestLap,lastLap:ue.lastLap,beliefs:ue.coaching.belief.probabilities})):i&&Ke&&(Ke.status="aborted"),Zr=!0,Ut.stopVoice(),zn("expert"),jt(!0),Mc()}function Ec(i,e,t){const n=new Blob([i],{type:e}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function Bd(){if(!Ke)return;const i=Ke.export(),e={"session.json":ur(JSON.stringify({schema:i.schema,meta:i.meta,status:i.status}))};for(const t of i.stages){const n=`stage-${t.meta.stage}/`;e[n+"session_meta.json"]=ur(JSON.stringify({...i.meta,...t.meta},null,2)),e[n+"steps.jsonl"]=ur(t.rows.map(r=>JSON.stringify(r)).join(`
`)),e[n+"events.jsonl"]=ur(t.events.map(r=>JSON.stringify(r)).join(`
`)),e[n+"summary.json"]=ur(JSON.stringify(t.summary??{inProgress:!0,state:ue.snapshot()},null,2))}Ec(yv(e),"application/zip",`ai-coaching-session-${Ke.meta.id}.zip`),Zr=!1,Ot("Session downloaded")}Z("open-session").onclick=QE;Z("close-session").onclick=Od;Z("session-dialog").addEventListener("cancel",i=>{i.preventDefault(),Od()});Z("session-start").onclick=()=>{if(Ke&&["complete","aborted"].includes(Ke.status)){Zr&&Bd(),Ke=null,Mc();return}e1()};Z("session-resume").onclick=()=>{Z("session-dialog").close(),jt(!1),Tn()};Z("session-finish").onclick=()=>kd();Z("session-abort").onclick=()=>{confirm("End this session early? The partial recording will remain available to download.")&&kd(!0)};Z("session-download").onclick=Bd;window.addEventListener("beforeunload",i=>{Zr&&(i.preventDefault(),i.returnValue="")});function Xa(i){qi=i,Z("demo-panel").hidden=i!=="demo",Z("hci-panel").hidden=i!=="hci";for(const e of["demo","hci"])Z(`tab-${e}`).setAttribute("aria-selected",String(i===e)),Z(`tab-${e}`).classList.toggle("selected",i===e),Z(`tab-${e}`).tabIndex=i===e?0:-1}Xa(qi);for(const i of["demo","hci"])Z(`tab-${i}`).onclick=()=>{Ke?.active||et?.active||(Tn(),jt(!0),zn("expert"),Xa(i),Pi())};document.querySelector(".experience-tabs").addEventListener("keydown",i=>{if(["ArrowLeft","ArrowRight"].includes(i.key)){i.preventDefault();const e=Z(`tab-${qi==="demo"?"hci":"demo"}`);e.disabled||(e.click(),e.focus())}});function zd(i){if(et?.active)return;const e=Number(i)/100;!Number.isFinite(e)||e<.3||e>.95||(Z("demo-alpha").value=String(i),Z("demo-alpha-value").value=`${i}%`,Z("alpha").value=String(i),Z("alpha-label").value=`${i}%`,ue&&qi==="demo"&&ue.mode==="assisted"&&(ue.alpha=e,ue.action(ue.lastHuman),Z("current-mode").textContent=`${i}% assistance`,vr.push({event:"demo_blend",value:e,time:ue.data.time}),Pi()))}Z("demo-alpha").oninput=i=>zd(i.target.value);function Gd(i){zn("assisted"),ue.startFixedAssistance(i),At.smooth=null,Tn(),Z("demo-alpha").value=String(Math.round(i*100)),Z("demo-alpha-value").value=`${Math.round(i*100)}%`,Z("alpha").value=String(Math.round(i*100)),Z("alpha-label").value=`${Math.round(i*100)}%`,Z("current-mode").textContent=`${Math.round(i*100)}% assistance`,vr.push({event:"fixed_demo_start",alpha:i,at:new Date().toISOString()}),jt(!1),Ut.unlock(),Pi()}function Vd(){if(Ke?.active||!et||!["ready","between"].includes(et.status))return;const i=kr[et.rounds.length];Z("comparison-dialog").close(),Gd(i),et.start(),et.event("round_start",{alpha:i,audio:Ut.enabled,music:Ut.musicEnabled}),$a(),Pi(),Ot(`Round ${et.rounds.length}/3 · ${Math.round(i*100)}% assistance`)}function Hd(i="timer"){et?.active&&(et.finish(ue.snapshot(),i),Ut.stopVoice(),jt(!0),$a(),Wd())}function Wd(){jt(!0);const i=et.rounds.filter(e=>e.summary);Z("comparison-results").replaceChildren(...i.map(e=>{const t=document.createElement("tr");for(const n of[`${Math.round(e.alpha*100)}%`,Ms(e.seconds),e.summary.gates,e.summary.failures]){const r=document.createElement("td");r.textContent=n,t.append(r)}return t})),Z("comparison-next").hidden=et.status==="complete",Z("comparison-next").querySelector("span").textContent=`Start ${Math.round((kr[et.rounds.length]??0)*100)}%`,Z("comparison-dialog").showModal(),Pi()}Z("compare-levels").onclick=()=>{if(!Ke?.active){if(et?.active){Hd("operator");return}if(et?.status==="between"){Wd();return}et&&Ld.push(et.export()),et=new KE,Vd()}};Z("comparison-next").onclick=Vd;function $d(){Z("comparison-dialog").close(),jt(!0),Z("compare-levels").focus()}Z("comparison-close").onclick=$d;Z("comparison-dialog").addEventListener("cancel",i=>{i.preventDefault(),$d()});Z("comparison-download").onclick=()=>Ec(JSON.stringify(et.export(),null,2),"application/json",`assistance-comparison-${Date.now()}.json`);function Xd(){let i=[];try{i=Array.from(navigator.getGamepads?.()??[])}catch{}const e=i.find(a=>a?.connected),t={rollAxis:Number(Z("roll-axis").value),yawAxis:Number(Z("yaw-axis").value),invertRoll:Z("invert-roll").checked,invertYaw:Z("invert-yaw").checked,deadzone:Number(Z("deadzone").value)/100},{human:n,keyboardAxes:r}=HE(Ns,e,t,Mi);return Ls=e?`${r.length?"Keyboard + ":""}${e.id}`:"Keyboard",(Mi.left.some(a=>a!==0)||Mi.right.some(a=>a!==0))&&(Ls="Touch controls"),{human:n,pad:e}}for(const i of["left","right"]){let e=function(r){const a=t.getBoundingClientRect();Mi[i]=[kn((r.clientX-a.left-a.width/2)/(a.width*.35)),kn((r.clientY-a.top-a.height/2)/(a.height*.35))],t.firstElementChild.style.transform=`translate(${Mi[i][0]*28}px,${Mi[i][1]*28}px)`};const t=document.querySelector(`.${i}-stick`);let n=null;t.addEventListener("pointerdown",r=>{n=r.pointerId,t.setPointerCapture(n),e(r)}),t.addEventListener("pointermove",r=>{r.pointerId===n&&e(r)});for(const r of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(r,()=>{n=null,Mi[i]=[0,0],t.firstElementChild.style.transform=""})}Z("pause").onclick=Id;Z("reset").onclick=bc;Z("open-tutorial").onclick=Nd;Z("settings-toggle").onclick=()=>{Os(Z("settings").hidden),Ot(Z("settings").hidden?"Settings closed":"Flight settings")};Z("close-settings").onclick=()=>{Os(!1),Ot("Settings closed")};Z("take-control").onclick=()=>{!Yn||Ke?.active||et?.active||(Tn(),ue.mode==="expert"?qi==="demo"?(Gd(Number(Z("demo-alpha").value)/100),Ot("Fixed assistance started")):(zn(Z("baseline").value),jt(!1),Ot(`${$i[ue.mode]} started`)):(zn("expert"),Ot(Jt?"Autopilot selected. Flight paused.":"Autopilot active")))};Z("baseline").onchange=()=>{Yn&&(jt(!0),Tn(),zn("expert"),Ot(`${$i[Z("baseline").value]} selected. Flight paused.`))};Z("mode").onchange=i=>{const e=i.target.value;Object.hasOwn($i,e)&&(jt(!0),Tn()),zn(e),Ot(`${Z("mode").selectedOptions[0].textContent}${Jt?" · Paused":""}`)};document.querySelectorAll("[data-view]").forEach(i=>{i.title=`${i.textContent} camera (C to cycle)`,i.onclick=()=>Ud(i.dataset.view)});Z("alpha").oninput=i=>{if(qi==="demo"){zd(Math.min(95,Number(i.target.value)));return}ue&&(ue.alpha=Number(i.target.value)/100),Z("alpha-label").value=i.target.value+"%"};Z("skill").oninput=i=>{ue&&(ue.skill=Number(i.target.value)/100),Z("skill-label").value=(Number(i.target.value)/100).toFixed(2)};Z("exposure").oninput=i=>{At&&(At.renderer.toneMappingExposure=Number(i.target.value)/100),Z("exposure-label").value=i.target.value+"%"};Z("venue").onchange=i=>{At&&(At.setVenue(i.target.value),Ot(Z("venue").selectedOptions[0].textContent))};Z("event-details").onchange=i=>{At&&At.setEvent(i.target.checked)};Z("deadzone").oninput=i=>Z("deadzone-label").value=i.target.value+"%";Z("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Ot("Full screen is unavailable in this browser")}};document.addEventListener("fullscreenchange",()=>{const i=!!document.fullscreenElement;Z("fullscreen").innerHTML=zt(i?"minimize":"maximize"),Z("fullscreen").title=i?"Exit full screen":"Full screen",Z("fullscreen").setAttribute("aria-label",Z("fullscreen").title),Jr(),Ot(i?"Full screen enabled":"Full screen closed")});function jd(){Z("sound").innerHTML=zt(Ut.enabled?"volume-2":"volume-x"),Z("sound").setAttribute("aria-label",Ut.enabled?"Mute audio":"Enable audio"),Z("sound").title=Z("sound").getAttribute("aria-label"),Z("sound").setAttribute("aria-pressed",String(Ut.enabled)),Jr()}Z("sound").onclick=()=>{Ut.setEnabled(!Ut.enabled),Ke?.event("audio_enabled",ue?.coaching?.time??0,{enabled:Ut.enabled}),et?.event("audio_enabled",{enabled:Ut.enabled}),jd(),Ot(Ut.enabled?"Audio enabled":"Audio muted")};Z("music").checked=Ut.musicEnabled;Z("music").onchange=i=>{Ut.setMusicEnabled(i.target.checked),Ke?.event("music_enabled",ue?.coaching?.time??0,{enabled:Ut.musicEnabled}),et?.event("music_enabled",{enabled:Ut.musicEnabled})};jd();for(const i of["pointerdown","keydown"])document.addEventListener(i,()=>{Yn&&Ut.unlock()},{capture:!0});Z("export").onclick=()=>{ue&&(Ec(JSON.stringify({manifest:ue.policies.expert.metadata,physics:"MuJoCo 3.13 WASM",hciConfig:tc,state:ue.snapshot(),currentTrial:bs,beliefs:ue.coaching?.belief.probabilities??null,trials:Fd,rows:vr,comparisons:[...Ld,...et?[et.export()]:[]]},null,2),"application/json",`ai-coaching-drone-racing-${Date.now()}.json`),Ot("Flight log exported"))};window.addEventListener("keydown",i=>{!Yn||["INPUT","SELECT","TEXTAREA"].includes(i.target.tagName)||Z("session-dialog").open||Z("comparison-dialog").open||(Ns.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!(Fn.open||Z("session-dialog").open||i.repeat)&&(i.code==="Space"&&Id(),i.code==="KeyR"&&bc(),i.code==="KeyC"&&At&&Ud(["fpv","follow","overview"][(["fpv","follow","overview"].indexOf(At.mode)+1)%3]),i.code==="KeyH"&&Nd(),i.code==="Escape"&&Os(!1)))});window.addEventListener("keyup",i=>Ns.delete(i.code));window.addEventListener("blur",()=>{Tn(),Yn&&jt(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(Tn(),Yn&&jt(!0))});window.addEventListener("gamepadconnected",i=>Ot(`Controller connected: ${i.gamepad.id}`));window.addEventListener("gamepaddisconnected",()=>{if(Yn){if(Ke?.active||et?.active){Tn(),jt(!0),Ke?.event("controller_disconnected",ue.coaching?.time??0),et?.event("controller_disconnected"),Ot("Controller disconnected. Flight paused.");return}zn("expert"),Ot(Jt?"Controller disconnected. Autopilot selected; flight paused.":"Controller disconnected. Autopilot active.")}});const Ms=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${(i%60).toFixed(2).padStart(5,"0")}`;function Pi(){const i=ue.coaching?.snapshot(ue.gate);Z("lap").textContent=String(ue.laps).padStart(2,"0"),Z("timer").textContent=Ms(i?i.lapTime:ue.lapStart===null?ue.steps*.02:ue.steps*.02-ue.lapStart),Z("gate").innerHTML=`${String(ue.gate+1).padStart(2,"0")} <small>/ 12</small>`,Z("speed").innerHTML=`${Math.hypot(...ue.data.qvel.subarray(0,3)).toFixed(1)} <small>m/s</small>`,Z("altitude").innerHTML=`${ue.position[2].toFixed(1)} <small>m AGL</small>`,Z("status").textContent=Jt?"PAUSED":ue.mode==="expert"?"AUTOPILOT":ue.mode==="manual"?"MANUAL":`${ue.mode.toUpperCase()} · ${Math.round(ue.effectiveAlpha*100)}% AI`;const e=i?{coaching:"Coaching",evaluation:"Evaluation",recovery:"Recovery"}[i.phase]:"";Z("baseline-detail").textContent=i?`${Ke?.active?`${gr[Ke.active.meta.stage]} · `:""}${Jt?"Paused":e} · ${Math.round(ue.effectiveAlpha*100)}% blend${ue.mode==="l2c"?` · Level ${i.skillLevel}`:""}`:"",Z("device").textContent=Ls,Z("steering-feedback").hidden=ue.mode==="expert",Z("live-blend").textContent=`${Math.round(ue.effectiveAlpha*100)}%`;for(const[t,n]of[["roll",1],["yaw",3]])for(const[r,a]of[["human",ue.lastHuman],["applied",ue.lastAction]])document.querySelector(`[data-command="${t}-${r}"]`).style.left=`${50+kn(a?.[n]??0)*50}%`;Z("comparison-clock").hidden=!et?.active,Z("comparison-round").textContent=et?.active?`Round ${et.rounds.length} / 3`:"",Z("comparison-remaining").textContent=et?.active?`${Math.ceil(ms-et.current.seconds)}s`:"",Z("compare-levels").querySelector("span").textContent=et?.active?"Finish round":et?.status==="between"?"View comparison":"Compare 3 levels",document.querySelectorAll("[data-gate]").forEach(t=>{t.classList.toggle("current",Number(t.dataset.gate)===ue.gate),t.classList.toggle("passed",Number(t.dataset.gate)<ue.gate)})}function qd(i){try{const e=gs?Math.max(0,(i-gs)/1e3):0;gs&&(Vr+=Jt?0:Math.min(e,.1)),gs=i;const{human:t}=Xd();for(;Vr>=.02&&!Jt;){const n=ue.coaching?.snapshot(ue.gate),r=ue.gate,a=ue.action(t),l=ue.step(a);Vr-=.02;const c=ue.coaching?.snapshot(ue.gate);et?.active&&(et.record({human:t,action:a,blend:ue.effectiveAlpha,position:ue.position,gate:r,failed:l.failed}),l.failed&&et.event("failure",{gate:ue.gate,cause:l.cause})),c&&(n.phase!==c.phase&&(Ke?.event("phase",c.time,{from:n.phase,to:c.phase}),Ut.play(c.phase==="recovery"?"autopilot_on":n.phase==="recovery"?"takeover":c.phase==="evaluation"?"eval_start":"eval_end")),l.crossed&&Ke?.event("gate_pass",c.time,{gate:r,phase:n.phase,beliefs:ue.coaching.belief.probabilities}),l.failed&&Ke?.event("failure",c.time,{gate:ue.gate,cause:l.cause,phase:n.phase}),Ke?.active&&(Zr=!0,Ke.record({time:c.time,step:Ke.active.rows.length+1,stage:Ke.active.meta.stage,mode:ue.mode,position:ue.position,quaternion:ue.quaternion,velocity:Array.from(ue.data.qvel.subarray(0,6)),human:[...t],controller:ue.lastController,action:a,blend:ue.effectiveAlpha,gate:r,nextGate:ue.gate,phase:n.phase,nextPhase:c.phase,laps:ue.laps,failures:ue.failures,input:Ls}))),ue.steps%5===0&&(vr.push({time:ue.coaching?.time??ue.data.time,trialId:ue.coaching?bs:null,mode:ue.mode,position:ue.position,action:a,human:t,gate:ue.gate,alpha:ue.effectiveAlpha,coaching:ue.coaching?.snapshot(ue.gate)??null}),vr.length>36e3&&vr.shift()),l.failed&&(Ot(`${l.cause}. Resetting flight.`),ue.recover(),At.smooth=null)}!Jt&&et?.advance(e)&&Hd(),At.render(),Dd++%3===0&&Pi(),Ut.tick(ue.motors,ue.coaching||ue.mode==="assisted"?t:null,ue.lastController,ue.coaching?.evaluation.recovery)}catch(e){console.error(e),jt(!0),Ot("Flight paused due to a simulation error.")}requestAnimationFrame(qd)}function fr(i,e,t="",n=0){Z("loading-status").textContent=e,Z("loading-progress").value=Math.min(6,i+n),Z("loading-stage").textContent=`${i} / 6`,Z("loading-detail").textContent=t,Z("loading-progress").setAttribute("aria-valuetext",`${i} of 6 stages complete. ${e}. ${t}`)}async function Yd(i,e,t){fr(e,t);const n=await fetch(i);if(!n.ok)throw new Error(`${t} failed (${n.status})`);const r=n.headers.get("content-encoding"),a=r&&r!=="identity"?0:Number(n.headers.get("content-length"));if(!n.body)return new Uint8Array(await n.arrayBuffer());const l=n.body.getReader(),c=[];let h=0;try{for(;;){const{done:g,value:m}=await l.read();if(g)break;c.push(m),h+=m.length;const _=b=>`${(b/1048576).toFixed(1)} MB`;fr(e,t,a?`${_(h)} / ${_(a)}`:_(h),a?Math.min(.9,.9*h/a):0)}}finally{l.releaseLock()}const f=new Uint8Array(h);let p=0;for(const g of c)f.set(g,p),p+=g.length;return f}async function el(i,e,t){const n=await Yd(`/demo/sim/${i}`,e,t);return n[0]===31&&n[1]===139?Bh(n):n}async function t1(){try{const i=await Yd(fu,0,"Loading physics engine");fr(0,"Starting physics engine","",.95);const e=await ev({wasmBinary:i,locateFile:h=>h.endsWith(".wasm")?fu:h}),t=await el("physics.mjb.gz",1,"Loading flight model"),n=JSON.parse(new TextDecoder().decode(await el("scene.json.gz",2,"Loading warehouse"))),r=JSON.parse(new TextDecoder().decode(await el("policies.json.gz",3,"Loading control policies")));fr(4,"Preparing graphics"),ue=new n_(e,t,n,r),At=new GE(Z("viewport"),ue,n),Zl(At.mode),zn(ue.mode),Z("venue").value=At.venue.style;let a=0;const l=At.textureReady.length;fr(5,"Loading visual assets",`0 / ${l}`),await Promise.all(At.textureReady.map(async h=>{await h,a++,fr(5,"Loading visual assets",`${a} / ${l}`,.95*a/l)})),Z("event-details").checked=At.event.enabled,At.render(),fr(6,"Ready"),Yn=!0,Pd.forEach(h=>h.disabled=!1),Z("loading").setAttribute("aria-busy","false"),Z("loading").hidden=!0,Sc.classList.remove("booting"),requestAnimationFrame(qd),window.flight={snapshot:()=>({...ue.snapshot(),paused:Jt,experience:qi,comparison:et?.snapshot()??null,tutorialOpen:Fn.open,sessionOpen:Z("session-dialog").open,session:Ke?.snapshot()??null,audio:Ut.snapshot(),inputPreview:Fn.open?Fn.input:null,view:At.mode,venue:At.venue.style,frames:Dd,ready:Yn,action:ue.lastAction,human:ue.lastHuman}),visuals:()=>({...At.venue.snapshot(),event:At.event.snapshot()}),setVenue:h=>{At.setVenue(h),Z("venue").value=h,At.render()},setPaused:jt,setMode:zn,setCamera:Zl,reset:bc,step:h=>{if(Fn.open)throw new Error("Close the tutorial before advancing physics");if(Z("session-dialog").open||Ke?.active||Z("comparison-dialog").open||et?.active)throw new Error("Close the session panel and finish the session before scripted physics");if(!Number.isInteger(h)||h<0||h>1e4)throw new Error("Invalid steps");for(let f=0;f<h&&!ue.step(ue.action()).failed;f++);return At.render(),Pi(),ue.snapshot()}};const c=document.modelContext;if(c?.registerTool){const h=new AbortController;for(const f of[{name:"get_flight_state",description:"Read current flight state",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>window.flight.snapshot()},{name:"set_flight_paused",description:"Pause or resume the flight",inputSchema:{type:"object",properties:{paused:{type:"boolean"}},required:["paused"],additionalProperties:!1},execute:p=>{if(typeof p.paused!="boolean")throw new Error("paused must be boolean");return jt(p.paused),window.flight.snapshot()}}])Promise.resolve(c.registerTool(f,{signal:h.signal})).catch(()=>{});window.addEventListener("pagehide",()=>h.abort(),{once:!0})}}catch(i){console.error(i),Z("loading-status").textContent=i.message,Z("loading").setAttribute("aria-busy","false"),Z("loading").classList.add("error"),Z("retry").hidden=!1,Z("retry").onclick=()=>location.reload()}}t1();const n1=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
