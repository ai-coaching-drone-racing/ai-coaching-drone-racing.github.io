(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const m0="modulepreload",g0=function(i){return"/demo/"+i},Wc={},_0=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let d=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");r=d(t.map(f=>{if(f=g0(f),f in Wc)return;Wc[f]=!0;const m=f.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":m0,m||(p.as="script"),p.crossOrigin="",p.href=f,u&&p.setAttribute("nonce",u),document.head.appendChild(p),m)return new Promise((v,b)=>{p.addEventListener("load",v),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return r.then(l=>{for(const u of l||[])u.status==="rejected"&&a(u.reason);return e().catch(a)})};var v0=(async function(i={}){var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",a=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!n&&!a&&!r;if(a){const{createRequire:s}=await _0(async()=>{const{createRequire:o}=await Promise.resolve().then(()=>mE);return{createRequire:o}},void 0);var u=s(import.meta.url)}var d="./this.program",f=(s,o)=>{throw o},m=import.meta.url,g="";function p(s){return t.locateFile?t.locateFile(s,g):g+s}var v,b;if(a){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var C=process.versions.node,S=C.split(".").slice(0,3);if(S=S[0]*1e4+S[1]*100+S[2].split("-")[0]*1,S<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+C+")");var x=u("fs");m.startsWith("file:")&&(g=u("path").dirname(u("url").fileURLToPath(m))+"/"),b=o=>{o=B(o)?new URL(o):o;var c=x.readFileSync(o);return R(Buffer.isBuffer(c)),c},v=async(o,c=!0)=>{o=B(o)?new URL(o):o;var h=x.readFileSync(o,c?void 0:"utf8");return R(c?Buffer.isBuffer(h):typeof h=="string"),h},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(o,c)=>{throw process.exitCode=o,c}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{g=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(b=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),v=async s=>{if(B(s))return new Promise((c,h)=>{var _=new XMLHttpRequest;_.open("GET",s,!0),_.responseType="arraybuffer",_.onload=()=>{if(_.status==200||_.status==0&&_.response){c(_.response);return}h(_.status)},_.onerror=h,_.send(null)});var o=await fetch(s,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}else throw new Error("environment detection error");var F=console.log.bind(console),D=console.error.bind(console);R(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var L;typeof WebAssembly!="object"&&D("no native wasm support detected");var O=!1;function R(s,o){s||H("Assertion failed"+(o?": "+o:""))}var B=s=>s.startsWith("file://");function A(){var s=ja();R((s&3)==0),s==0&&(s+=4),Me[s>>2]=34821223,Me[s+4>>2]=2310721022,Me[0]=1668509029}function I(){if(!O){var s=ja();s==0&&(s+=4);var o=Me[s>>2],c=Me[s+4>>2];(o!=34821223||c!=2310721022)&&H(`Stack overflow! Stack cookie has been overwritten at ${De(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${De(c)} ${De(o)}`),Me[0]!=1668509029&&H("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class k extends Error{}class z extends k{}class Y extends k{constructor(o){super(o),this.excPtr=o;const c=Rc(o);this.name=c[0],this.message=c[1]}}(()=>{var s=new Int16Array(1),o=new Int8Array(s.buffer);if(s[0]=25459,o[0]!==115||o[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function Z(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){H(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function K(s){return()=>R(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function ie(s){Object.getOwnPropertyDescriptor(t,s)&&H(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function J(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function ne(s,o){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){o()}})}function Se(s,o){ne(s,()=>{Ie(`\`${s}\` is not longer defined by emscripten. ${o}`)})}Se("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Se("asm","Please use wasmExports instead");function pe(s){ne(s,()=>{var o=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=s;c.startsWith("_")||(c="$"+s),o+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,J(s)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ie(o)}),Le(s)}function Le(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var o=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;J(s)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),H(o)}})}var Ne,Re,Xe,Ze,et,oe,xe,re,Me,$e,qe,bt,ct,mt=!1;function Tt(){var s=Xe.buffer;Ze=new Int8Array(s),oe=new Int16Array(s),et=new Uint8Array(s),xe=new Uint16Array(s),re=new Int32Array(s),Me=new Uint32Array(s),$e=new Float32Array(s),qe=new Float64Array(s),bt=new BigInt64Array(s),ct=new BigUint64Array(s)}R(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function it(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Ae(t.preRun.shift());Z("preRun"),ze($)}function kt(){R(!mt),mt=!0,I(),!t.noFSInit&&!M.initialized&&M.init(),Xi.__wasm_call_ctors(),M.ignorePermissions=!1}function V(){if(I(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)rt(t.postRun.shift());Z("postRun"),ze(Fe)}var Lt=0,ft=null,vt={},Oe=null;function U(s){Lt++,t.monitorRunDependencies?.(Lt),s?(R(!vt[s]),vt[s]=1,Oe===null&&typeof setInterval<"u"&&(Oe=setInterval(()=>{if(O){clearInterval(Oe),Oe=null;return}var o=!1;for(var c in vt)o||(o=!0,D("still waiting on run dependencies:")),D(`dependency: ${c}`);o&&D("(end of list)")},1e4))):D("warning: run dependency added without ID")}function E(s){if(Lt--,t.monitorRunDependencies?.(Lt),s?(R(vt[s]),delete vt[s]):D("warning: run dependency removed without ID"),Lt==0&&(Oe!==null&&(clearInterval(Oe),Oe=null),ft)){var o=ft;ft=null,o()}}function H(s){t.onAbort?.(s),s="Aborted("+s+")",D(s),O=!0;var o=new WebAssembly.RuntimeError(s);throw Re?.(o),o}function ae(s,o){return(...c)=>{R(mt,`native function \`${s}\` called before runtime initialization`);var h=Xi[s];return R(h,`exported native function \`${s}\` not found`),R(c.length<=o,`native function \`${s}\` called with ${c.length} args but expects ${o}`),h(...c)}}var fe;function le(){return t.locateFile?p("mujoco.wasm"):new URL("/demo/assets/mujoco-D9UjOFNX.wasm",import.meta.url).href}function ke(s){if(s==fe&&L)return new Uint8Array(L);if(b)return b(s);throw"both async and sync fetching of the wasm failed"}async function Te(s){if(!L)try{var o=await v(s);return new Uint8Array(o)}catch{}return ke(s)}async function We(s,o){try{var c=await Te(s),h=await WebAssembly.instantiate(c,o);return h}catch(_){D(`failed to asynchronously prepare wasm: ${_}`),B(fe)&&D(`warning: Loading from a file URI (${fe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),H(_)}}async function Ye(s,o,c){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!B(o)&&!a)try{var h=fetch(o,{credentials:"same-origin"}),_=await WebAssembly.instantiateStreaming(h,c);return _}catch(y){D(`wasm streaming compile failed: ${y}`),D("falling back to ArrayBuffer instantiation")}return We(o,c)}function ye(){return{env:Gc,wasi_snapshot_preview1:Gc}}async function Ee(){function s(w,T){return Xi=w.exports,Xe=Xi.memory,R(Xe,"memory not found in wasm exports"),Tt(),Bs=Xi.__indirect_function_table,R(Bs,"table not found in wasm exports"),_p(Xi),E("wasm-instantiate"),Xi}U("wasm-instantiate");var o=t;function c(w){return R(t===o,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),o=null,s(w.instance)}var h=ye();if(t.instantiateWasm)return new Promise((w,T)=>{try{t.instantiateWasm(h,(N,j)=>{w(s(N,j))})}catch(N){D(`Module.instantiateWasm callback failed with error: ${N}`),T(N)}});fe??=le();var _=await Ye(L,fe,h),y=c(_);return y}class Be{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var ze=s=>{for(;s.length>0;)s.shift()(t)},Fe=[],rt=s=>Fe.push(s),$=[],Ae=s=>$.push(s),be=!0,De=s=>(R(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0")),X=s=>Uc(s),G=()=>Oc(),Ie=s=>{Ie.shown||={},Ie.shown[s]||(Ie.shown[s]=1,a&&(s="warning: "+s),D(s))},Je=typeof TextDecoder<"u"?new TextDecoder:void 0,xt=(s,o=0,c=NaN)=>{for(var h=o+c,_=o;s[_]&&!(_>=h);)++_;if(_-o>16&&s.buffer&&Je)return Je.decode(s.subarray(o,_));for(var y="";o<_;){var w=s[o++];if(!(w&128)){y+=String.fromCharCode(w);continue}var T=s[o++]&63;if((w&224)==192){y+=String.fromCharCode((w&31)<<6|T);continue}var N=s[o++]&63;if((w&240)==224?w=(w&15)<<12|T<<6|N:((w&248)!=240&&Ie("Invalid UTF-8 leading byte "+De(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|T<<12|N<<6|s[o++]&63),w<65536)y+=String.fromCharCode(w);else{var j=w-65536;y+=String.fromCharCode(55296|j>>10,56320|j&1023)}}return y},ut=(s,o)=>(R(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?xt(et,s,o):""),In=(s,o,c,h)=>H(`Assertion failed: ${ut(s)}, at: `+[o?ut(o):"unknown filename",c,h?ut(h):"unknown function"]),$t=[],zi=0,$r=s=>{var o=new Cn(s);return o.get_caught()||(o.set_caught(!0),zi--),o.set_rethrown(!1),$t.push(o),Xs(s),zc(s)},Fa=()=>{if(!$t.length)return 0;var s=$t[$t.length-1];return Xs(s.excPtr),s.excPtr},An=0,ws=()=>{_e(0,0),R($t.length>0);var s=$t.pop();Ya(s.excPtr),An=0};class Cn{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){Me[this.ptr+4>>2]=o}get_type(){return Me[this.ptr+4>>2]}set_destructor(o){Me[this.ptr+8>>2]=o}get_destructor(){return Me[this.ptr+8>>2]}set_caught(o){o=o?1:0,Ze[this.ptr+12]=o}get_caught(){return Ze[this.ptr+12]!=0}set_rethrown(o){o=o?1:0,Ze[this.ptr+13]=o}get_rethrown(){return Ze[this.ptr+13]!=0}init(o,c){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(c)}set_adjusted_ptr(o){Me[this.ptr+16>>2]=o}get_adjusted_ptr(){return Me[this.ptr+16>>2]}}var Mi=s=>Fc(s),ur=s=>{var o=An?.excPtr;if(!o)return Mi(0),0;var c=new Cn(o);c.set_adjusted_ptr(o);var h=c.get_type();if(!h)return Mi(0),o;for(var _ of s){if(_===0||_===h)break;var y=c.ptr+16;if(Bc(_,h,y))return Mi(_),o}return Mi(h),o},Ts=()=>ur([]),hr=s=>ur([s]),As=(s,o)=>ur([s,o]),Gi=()=>{var s=$t.pop();s||H("no exception to throw");var o=s.excPtr;throw s.get_rethrown()||($t.push(s),s.set_rethrown(!0),s.set_caught(!1),zi++),An=new Y(o),An},Cs=s=>{if(s){var o=new Cn(s);$t.push(o),o.set_rethrown(!0),Gi()}},Rs=(s,o,c)=>{var h=new Cn(s);throw h.init(o,c),An=new Y(s),zi++,An},Ia=()=>zi,Ua=s=>{throw An||(An=new Y(s)),An},At={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var c=0,h=s.length-1;h>=0;h--){var _=s[h];_==="."?s.splice(h,1):_===".."?(s.splice(h,1),c++):c&&(s.splice(h,1),c--)}if(o)for(;c;c--)s.unshift("..");return s},normalize:s=>{var o=At.isAbs(s),c=s.slice(-1)==="/";return s=At.normalizeArray(s.split("/").filter(h=>!!h),!o).join("/"),!s&&!o&&(s="."),s&&c&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=At.splitPath(s),c=o[0],h=o[1];return!c&&!h?".":(h&&(h=h.slice(0,-1)),c+h)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>At.normalize(s.join("/")),join2:(s,o)=>At.normalize(s+"/"+o)},Na=()=>{if(a){var s=u("crypto");return o=>s.randomFillSync(o)}return o=>crypto.getRandomValues(o)},Ps=s=>{(Ps=Na())(s)},bi={resolve:(...s)=>{for(var o="",c=!1,h=s.length-1;h>=-1&&!c;h--){var _=h>=0?s[h]:M.cwd();if(typeof _!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!_)return"";o=_+"/"+o,c=At.isAbs(_)}return o=At.normalizeArray(o.split("/").filter(y=>!!y),!c).join("/"),(c?"/":"")+o||"."},relative:(s,o)=>{s=bi.resolve(s).slice(1),o=bi.resolve(o).slice(1);function c(j){for(var ee=0;ee<j.length&&j[ee]==="";ee++);for(var ce=j.length-1;ce>=0&&j[ce]==="";ce--);return ee>ce?[]:j.slice(ee,ce-ee+1)}for(var h=c(s.split("/")),_=c(o.split("/")),y=Math.min(h.length,_.length),w=y,T=0;T<y;T++)if(h[T]!==_[T]){w=T;break}for(var N=[],T=w;T<h.length;T++)N.push("..");return N=N.concat(_.slice(w)),N.join("/")}},P=[],q=s=>{for(var o=0,c=0;c<s.length;++c){var h=s.charCodeAt(c);h<=127?o++:h<=2047?o+=2:h>=55296&&h<=57343?(o+=4,++c):o+=3}return o},se=(s,o,c,h)=>{if(R(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(h>0))return 0;for(var _=c,y=c+h-1,w=0;w<s.length;++w){var T=s.codePointAt(w);if(T<=127){if(c>=y)break;o[c++]=T}else if(T<=2047){if(c+1>=y)break;o[c++]=192|T>>6,o[c++]=128|T&63}else if(T<=65535){if(c+2>=y)break;o[c++]=224|T>>12,o[c++]=128|T>>6&63,o[c++]=128|T&63}else{if(c+3>=y)break;T>1114111&&Ie("Invalid Unicode code point "+De(T)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),o[c++]=240|T>>18,o[c++]=128|T>>12&63,o[c++]=128|T>>6&63,o[c++]=128|T&63,w++}}return o[c]=0,c-_},te=(s,o,c)=>{var h=q(s)+1,_=new Array(h),y=se(s,_,0,_.length);return _.length=y,_},Q=()=>{if(!P.length){var s=null;if(a){var o=256,c=Buffer.alloc(o),h=0,_=process.stdin.fd;try{h=x.readSync(_,c,0,o)}catch(y){if(y.toString().includes("EOF"))h=0;else throw y}h>0&&(s=c.slice(0,h).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;P=te(s)}return P.shift()},Ce={ttys:[],init(){},shutdown(){},register(s,o){Ce.ttys[s]={input:[],output:[],ops:o},M.registerDevice(s,Ce.stream_ops)},stream_ops:{open(s){var o=Ce.ttys[s.node.rdev];if(!o)throw new M.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,c,h,_){if(!s.tty||!s.tty.ops.get_char)throw new M.ErrnoError(60);for(var y=0,w=0;w<h;w++){var T;try{T=s.tty.ops.get_char(s.tty)}catch{throw new M.ErrnoError(29)}if(T===void 0&&y===0)throw new M.ErrnoError(6);if(T==null)break;y++,o[c+w]=T}return y&&(s.node.atime=Date.now()),y},write(s,o,c,h,_){if(!s.tty||!s.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var y=0;y<h;y++)s.tty.ops.put_char(s.tty,o[c+y])}catch{throw new M.ErrnoError(29)}return h&&(s.node.mtime=s.node.ctime=Date.now()),y}},default_tty_ops:{get_char(s){return Q()},put_char(s,o){o===null||o===10?(F(xt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(F(xt(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,c){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(D(xt(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(D(xt(s.output)),s.output=[])}}},Ue=s=>{H("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},de={ops_table:null,mount(s){return de.createNode(null,"/",16895,0)},createNode(s,o,c,h){if(M.isBlkdev(c)||M.isFIFO(c))throw new M.ErrnoError(63);de.ops_table||={dir:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,lookup:de.node_ops.lookup,mknod:de.node_ops.mknod,rename:de.node_ops.rename,unlink:de.node_ops.unlink,rmdir:de.node_ops.rmdir,readdir:de.node_ops.readdir,symlink:de.node_ops.symlink},stream:{llseek:de.stream_ops.llseek}},file:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:{llseek:de.stream_ops.llseek,read:de.stream_ops.read,write:de.stream_ops.write,mmap:de.stream_ops.mmap,msync:de.stream_ops.msync}},link:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,readlink:de.node_ops.readlink},stream:{}},chrdev:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:M.chrdev_stream_ops}};var _=M.createNode(s,o,c,h);return M.isDir(_.mode)?(_.node_ops=de.ops_table.dir.node,_.stream_ops=de.ops_table.dir.stream,_.contents={}):M.isFile(_.mode)?(_.node_ops=de.ops_table.file.node,_.stream_ops=de.ops_table.file.stream,_.usedBytes=0,_.contents=null):M.isLink(_.mode)?(_.node_ops=de.ops_table.link.node,_.stream_ops=de.ops_table.link.stream):M.isChrdev(_.mode)&&(_.node_ops=de.ops_table.chrdev.node,_.stream_ops=de.ops_table.chrdev.stream),_.atime=_.mtime=_.ctime=Date.now(),s&&(s.contents[o]=_,s.atime=s.mtime=s.ctime=_.atime),_},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,o){var c=s.contents?s.contents.length:0;if(!(c>=o)){var h=1024*1024;o=Math.max(o,c*(c<h?2:1.125)>>>0),c!=0&&(o=Math.max(o,256));var _=s.contents;s.contents=new Uint8Array(o),s.usedBytes>0&&s.contents.set(_.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,o){if(s.usedBytes!=o)if(o==0)s.contents=null,s.usedBytes=0;else{var c=s.contents;s.contents=new Uint8Array(o),c&&s.contents.set(c.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=M.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,M.isDir(s.mode)?o.size=4096:M.isFile(s.mode)?o.size=s.usedBytes:M.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.atime),o.mtime=new Date(s.mtime),o.ctime=new Date(s.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){for(const c of["mode","atime","mtime","ctime"])o[c]!=null&&(s[c]=o[c]);o.size!==void 0&&de.resizeFileStorage(s,o.size)},lookup(s,o){throw new M.ErrnoError(44)},mknod(s,o,c,h){return de.createNode(s,o,c,h)},rename(s,o,c){var h;try{h=M.lookupNode(o,c)}catch{}if(h){if(M.isDir(s.mode))for(var _ in h.contents)throw new M.ErrnoError(55);M.hashRemoveNode(h)}delete s.parent.contents[s.name],o.contents[c]=s,s.name=c,o.ctime=o.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,o){delete s.contents[o],s.ctime=s.mtime=Date.now()},rmdir(s,o){var c=M.lookupNode(s,o);for(var h in c.contents)throw new M.ErrnoError(55);delete s.contents[o],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,o,c){var h=de.createNode(s,o,41471,0);return h.link=c,h},readlink(s){if(!M.isLink(s.mode))throw new M.ErrnoError(28);return s.link}},stream_ops:{read(s,o,c,h,_){var y=s.node.contents;if(_>=s.node.usedBytes)return 0;var w=Math.min(s.node.usedBytes-_,h);if(R(w>=0),w>8&&y.subarray)o.set(y.subarray(_,_+w),c);else for(var T=0;T<w;T++)o[c+T]=y[_+T];return w},write(s,o,c,h,_,y){if(R(!(o instanceof ArrayBuffer)),o.buffer===Ze.buffer&&(y=!1),!h)return 0;var w=s.node;if(w.mtime=w.ctime=Date.now(),o.subarray&&(!w.contents||w.contents.subarray)){if(y)return R(_===0,"canOwn must imply no weird position inside the file"),w.contents=o.subarray(c,c+h),w.usedBytes=h,h;if(w.usedBytes===0&&_===0)return w.contents=o.slice(c,c+h),w.usedBytes=h,h;if(_+h<=w.usedBytes)return w.contents.set(o.subarray(c,c+h),_),h}if(de.expandFileStorage(w,_+h),w.contents.subarray&&o.subarray)w.contents.set(o.subarray(c,c+h),_);else for(var T=0;T<h;T++)w.contents[_+T]=o[c+T];return w.usedBytes=Math.max(w.usedBytes,_+h),h},llseek(s,o,c){var h=o;if(c===1?h+=s.position:c===2&&M.isFile(s.node.mode)&&(h+=s.node.usedBytes),h<0)throw new M.ErrnoError(28);return h},mmap(s,o,c,h,_){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);var y,w,T=s.node.contents;if(!(_&2)&&T&&T.buffer===Ze.buffer)w=!1,y=T.byteOffset;else{if(w=!0,y=Ue(),!y)throw new M.ErrnoError(48);T&&((c>0||c+o<T.length)&&(T.subarray?T=T.subarray(c,c+o):T=Array.prototype.slice.call(T,c,c+o)),Ze.set(T,y))}return{ptr:y,allocated:w}},msync(s,o,c,h,_){return de.stream_ops.write(s,o,0,h,c,!1),0}}},Ge=async s=>{var o=await v(s);return R(o,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(o)},Ve=(...s)=>M.createDataFile(...s),tt=s=>{for(var o=s;;){if(!vt[s])return s;s=o+Math.random()}},nt=[],He=(s,o,c,h)=>{typeof Browser<"u"&&Browser.init();var _=!1;return nt.forEach(y=>{_||y.canHandle(o)&&(y.handle(s,o,c,h),_=!0)}),_},wt=(s,o,c,h,_,y,w,T,N,j)=>{var ee=o?bi.resolve(At.join2(s,o)):s,ce=tt(`cp ${ee}`);function he(ue){function me(je){j?.(),T||Ve(s,o,je,h,_,N),y?.(),E(ce)}He(ue,ee,me,()=>{w?.(),E(ce)})||me(ue)}U(ce),typeof c=="string"?Ge(c).then(he,w):he(c)},Bt=s=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=o[s];if(typeof c>"u")throw new Error(`Unknown file open mode: ${s}`);return c},It=(s,o)=>{var c=0;return s&&(c|=365),o&&(c|=146),c},Ct=s=>ut(Dc(s)),Xt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(s){super(mt?Ct(s):""),this.errno=s;for(var o in Xt)if(Xt[o]===s){this.code=o;break}}},FSStream:class{shared={};get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(s,o,c,h){s||(s=this),this.parent=s,this.mount=s.mount,this.id=M.nextInode++,this.name=o,this.mode=c,this.rdev=h,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(s,o={}){if(!s)throw new M.ErrnoError(44);o.follow_mount??=!0,At.isAbs(s)||(s=M.cwd()+"/"+s);e:for(var c=0;c<40;c++){for(var h=s.split("/").filter(j=>!!j),_=M.root,y="/",w=0;w<h.length;w++){var T=w===h.length-1;if(T&&o.parent)break;if(h[w]!=="."){if(h[w]===".."){if(y=At.dirname(y),M.isRoot(_)){s=y+"/"+h.slice(w+1).join("/");continue e}else _=_.parent;continue}y=At.join2(y,h[w]);try{_=M.lookupNode(_,h[w])}catch(j){if(j?.errno===44&&T&&o.noent_okay)return{path:y};throw j}if(M.isMountpoint(_)&&(!T||o.follow_mount)&&(_=_.mounted.root),M.isLink(_.mode)&&(!T||o.follow)){if(!_.node_ops.readlink)throw new M.ErrnoError(52);var N=_.node_ops.readlink(_);At.isAbs(N)||(N=At.dirname(y)+"/"+N),s=N+"/"+h.slice(w+1).join("/");continue e}}}return{path:y,node:_}}throw new M.ErrnoError(32)},getPath(s){for(var o;;){if(M.isRoot(s)){var c=s.mount.mountpoint;return o?c[c.length-1]!=="/"?`${c}/${o}`:c+o:c}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var c=0,h=0;h<o.length;h++)c=(c<<5)-c+o.charCodeAt(h)|0;return(s+c>>>0)%M.nameTable.length},hashAddNode(s){var o=M.hashName(s.parent.id,s.name);s.name_next=M.nameTable[o],M.nameTable[o]=s},hashRemoveNode(s){var o=M.hashName(s.parent.id,s.name);if(M.nameTable[o]===s)M.nameTable[o]=s.name_next;else for(var c=M.nameTable[o];c;){if(c.name_next===s){c.name_next=s.name_next;break}c=c.name_next}},lookupNode(s,o){var c=M.mayLookup(s);if(c)throw new M.ErrnoError(c);for(var h=M.hashName(s.id,o),_=M.nameTable[h];_;_=_.name_next){var y=_.name;if(_.parent.id===s.id&&y===o)return _}return M.lookup(s,o)},createNode(s,o,c,h){R(typeof s=="object");var _=new M.FSNode(s,o,c,h);return M.hashAddNode(_),_},destroyNode(s){M.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return M.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!M.isDir(s.mode))return 54;var o=M.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){if(!M.isDir(s.mode))return 54;try{var c=M.lookupNode(s,o);return 20}catch{}return M.nodePermissions(s,"wx")},mayDelete(s,o,c){var h;try{h=M.lookupNode(s,o)}catch(y){return y.errno}var _=M.nodePermissions(s,"wx");if(_)return _;if(c){if(!M.isDir(h.mode))return 54;if(M.isRoot(h)||M.getPath(h)===M.cwd())return 10}else if(M.isDir(h.mode))return 31;return 0},mayOpen(s,o){return s?M.isLink(s.mode)?32:M.isDir(s.mode)&&(M.flagsToPermissionString(o)!=="r"||o&576)?31:M.nodePermissions(s,M.flagsToPermissionString(o)):44},checkOpExists(s,o){if(!s)throw new M.ErrnoError(o);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=M.MAX_OPEN_FDS;s++)if(!M.streams[s])return s;throw new M.ErrnoError(33)},getStreamChecked(s){var o=M.getStream(s);if(!o)throw new M.ErrnoError(8);return o},getStream:s=>M.streams[s],createStream(s,o=-1){return R(o>=-1),s=Object.assign(new M.FSStream,s),o==-1&&(o=M.nextfd()),s.fd=o,M.streams[o]=s,s},closeStream(s){M.streams[s]=null},dupStream(s,o=-1){var c=M.createStream(s,o);return c.stream_ops?.dup?.(c),c},doSetAttr(s,o,c){var h=s?.stream_ops.setattr,_=h?s:o;h??=o.node_ops.setattr,M.checkOpExists(h,63),h(_,c)},chrdev_stream_ops:{open(s){var o=M.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new M.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){M.devices[s]={stream_ops:o}},getDevice:s=>M.devices[s],getMounts(s){for(var o=[],c=[s];c.length;){var h=c.pop();o.push(h),c.push(...h.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),M.syncFSRequests++,M.syncFSRequests>1&&D(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=M.getMounts(M.root.mount),h=0;function _(w){return R(M.syncFSRequests>0),M.syncFSRequests--,o(w)}function y(w){if(w)return y.errored?void 0:(y.errored=!0,_(w));++h>=c.length&&_(null)}c.forEach(w=>{if(!w.type.syncfs)return y(null);w.type.syncfs(w,s,y)})},mount(s,o,c){if(typeof s=="string")throw s;var h=c==="/",_=!c,y;if(h&&M.root)throw new M.ErrnoError(10);if(!h&&!_){var w=M.lookupPath(c,{follow_mount:!1});if(c=w.path,y=w.node,M.isMountpoint(y))throw new M.ErrnoError(10);if(!M.isDir(y.mode))throw new M.ErrnoError(54)}var T={type:s,opts:o,mountpoint:c,mounts:[]},N=s.mount(T);return N.mount=T,T.root=N,h?M.root=N:y&&(y.mounted=T,y.mount&&y.mount.mounts.push(T)),N},unmount(s){var o=M.lookupPath(s,{follow_mount:!1});if(!M.isMountpoint(o.node))throw new M.ErrnoError(28);var c=o.node,h=c.mounted,_=M.getMounts(h);Object.keys(M.nameTable).forEach(w=>{for(var T=M.nameTable[w];T;){var N=T.name_next;_.includes(T.mount)&&M.destroyNode(T),T=N}}),c.mounted=null;var y=c.mount.mounts.indexOf(h);R(y!==-1),c.mount.mounts.splice(y,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,c){var h=M.lookupPath(s,{parent:!0}),_=h.node,y=At.basename(s);if(!y)throw new M.ErrnoError(28);if(y==="."||y==="..")throw new M.ErrnoError(20);var w=M.mayCreate(_,y);if(w)throw new M.ErrnoError(w);if(!_.node_ops.mknod)throw new M.ErrnoError(63);return _.node_ops.mknod(_,y,o,c)},statfs(s){return M.statfsNode(M.lookupPath(s,{follow:!0}).node)},statfsStream(s){return M.statfsNode(s.node)},statfsNode(s){var o={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(o,s.node_ops.statfs(s.mount.opts.root)),o},create(s,o=438){return o&=4095,o|=32768,M.mknod(s,o,0)},mkdir(s,o=511){return o&=1023,o|=16384,M.mknod(s,o,0)},mkdirTree(s,o){var c=s.split("/"),h="";for(var _ of c)if(_){(h||At.isAbs(s))&&(h+="/"),h+=_;try{M.mkdir(h,o)}catch(y){if(y.errno!=20)throw y}}},mkdev(s,o,c){return typeof c>"u"&&(c=o,o=438),o|=8192,M.mknod(s,o,c)},symlink(s,o){if(!bi.resolve(s))throw new M.ErrnoError(44);var c=M.lookupPath(o,{parent:!0}),h=c.node;if(!h)throw new M.ErrnoError(44);var _=At.basename(o),y=M.mayCreate(h,_);if(y)throw new M.ErrnoError(y);if(!h.node_ops.symlink)throw new M.ErrnoError(63);return h.node_ops.symlink(h,_,s)},rename(s,o){var c=At.dirname(s),h=At.dirname(o),_=At.basename(s),y=At.basename(o),w,T,N;if(w=M.lookupPath(s,{parent:!0}),T=w.node,w=M.lookupPath(o,{parent:!0}),N=w.node,!T||!N)throw new M.ErrnoError(44);if(T.mount!==N.mount)throw new M.ErrnoError(75);var j=M.lookupNode(T,_),ee=bi.relative(s,h);if(ee.charAt(0)!==".")throw new M.ErrnoError(28);if(ee=bi.relative(o,c),ee.charAt(0)!==".")throw new M.ErrnoError(55);var ce;try{ce=M.lookupNode(N,y)}catch{}if(j!==ce){var he=M.isDir(j.mode),ue=M.mayDelete(T,_,he);if(ue)throw new M.ErrnoError(ue);if(ue=ce?M.mayDelete(N,y,he):M.mayCreate(N,y),ue)throw new M.ErrnoError(ue);if(!T.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(j)||ce&&M.isMountpoint(ce))throw new M.ErrnoError(10);if(N!==T&&(ue=M.nodePermissions(T,"w"),ue))throw new M.ErrnoError(ue);M.hashRemoveNode(j);try{T.node_ops.rename(j,N,y),j.parent=N}catch(me){throw me}finally{M.hashAddNode(j)}}},rmdir(s){var o=M.lookupPath(s,{parent:!0}),c=o.node,h=At.basename(s),_=M.lookupNode(c,h),y=M.mayDelete(c,h,!0);if(y)throw new M.ErrnoError(y);if(!c.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(_))throw new M.ErrnoError(10);c.node_ops.rmdir(c,h),M.destroyNode(_)},readdir(s){var o=M.lookupPath(s,{follow:!0}),c=o.node,h=M.checkOpExists(c.node_ops.readdir,54);return h(c)},unlink(s){var o=M.lookupPath(s,{parent:!0}),c=o.node;if(!c)throw new M.ErrnoError(44);var h=At.basename(s),_=M.lookupNode(c,h),y=M.mayDelete(c,h,!1);if(y)throw new M.ErrnoError(y);if(!c.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(_))throw new M.ErrnoError(10);c.node_ops.unlink(c,h),M.destroyNode(_)},readlink(s){var o=M.lookupPath(s),c=o.node;if(!c)throw new M.ErrnoError(44);if(!c.node_ops.readlink)throw new M.ErrnoError(28);return c.node_ops.readlink(c)},stat(s,o){var c=M.lookupPath(s,{follow:!o}),h=c.node,_=M.checkOpExists(h.node_ops.getattr,63);return _(h)},fstat(s){var o=M.getStreamChecked(s),c=o.node,h=o.stream_ops.getattr,_=h?o:c;return h??=c.node_ops.getattr,M.checkOpExists(h,63),h(_)},lstat(s){return M.stat(s,!0)},doChmod(s,o,c,h){M.doSetAttr(s,o,{mode:c&4095|o.mode&-4096,ctime:Date.now(),dontFollow:h})},chmod(s,o,c){var h;if(typeof s=="string"){var _=M.lookupPath(s,{follow:!c});h=_.node}else h=s;M.doChmod(null,h,o,c)},lchmod(s,o){M.chmod(s,o,!0)},fchmod(s,o){var c=M.getStreamChecked(s);M.doChmod(c,c.node,o,!1)},doChown(s,o,c){M.doSetAttr(s,o,{timestamp:Date.now(),dontFollow:c})},chown(s,o,c,h){var _;if(typeof s=="string"){var y=M.lookupPath(s,{follow:!h});_=y.node}else _=s;M.doChown(null,_,h)},lchown(s,o,c){M.chown(s,o,c,!0)},fchown(s,o,c){var h=M.getStreamChecked(s);M.doChown(h,h.node,!1)},doTruncate(s,o,c){if(M.isDir(o.mode))throw new M.ErrnoError(31);if(!M.isFile(o.mode))throw new M.ErrnoError(28);var h=M.nodePermissions(o,"w");if(h)throw new M.ErrnoError(h);M.doSetAttr(s,o,{size:c,timestamp:Date.now()})},truncate(s,o){if(o<0)throw new M.ErrnoError(28);var c;if(typeof s=="string"){var h=M.lookupPath(s,{follow:!0});c=h.node}else c=s;M.doTruncate(null,c,o)},ftruncate(s,o){var c=M.getStreamChecked(s);if(o<0||(c.flags&2097155)===0)throw new M.ErrnoError(28);M.doTruncate(c,c.node,o)},utime(s,o,c){var h=M.lookupPath(s,{follow:!0}),_=h.node,y=M.checkOpExists(_.node_ops.setattr,63);y(_,{atime:o,mtime:c})},open(s,o,c=438){if(s==="")throw new M.ErrnoError(44);o=typeof o=="string"?Bt(o):o,o&64?c=c&4095|32768:c=0;var h,_;if(typeof s=="object")h=s;else{_=s.endsWith("/");var y=M.lookupPath(s,{follow:!(o&131072),noent_okay:!0});h=y.node,s=y.path}var w=!1;if(o&64)if(h){if(o&128)throw new M.ErrnoError(20)}else{if(_)throw new M.ErrnoError(31);h=M.mknod(s,c|511,0),w=!0}if(!h)throw new M.ErrnoError(44);if(M.isChrdev(h.mode)&&(o&=-513),o&65536&&!M.isDir(h.mode))throw new M.ErrnoError(54);if(!w){var T=M.mayOpen(h,o);if(T)throw new M.ErrnoError(T)}o&512&&!w&&M.truncate(h,0),o&=-131713;var N=M.createStream({node:h,path:M.getPath(h),flags:o,seekable:!0,position:0,stream_ops:h.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),w&&M.chmod(h,c&511),t.logReadFiles&&!(o&1)&&(s in M.readFiles||(M.readFiles[s]=1)),N},close(s){if(M.isClosed(s))throw new M.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{M.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,c){if(M.isClosed(s))throw new M.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new M.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new M.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,c),s.ungotten=[],s.position},read(s,o,c,h,_){if(R(c>=0),h<0||_<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.read)throw new M.ErrnoError(28);var y=typeof _<"u";if(!y)_=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var w=s.stream_ops.read(s,o,c,h,_);return y||(s.position+=w),w},write(s,o,c,h,_,y){if(R(c>=0),h<0||_<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.write)throw new M.ErrnoError(28);s.seekable&&s.flags&1024&&M.llseek(s,0,2);var w=typeof _<"u";if(!w)_=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var T=s.stream_ops.write(s,o,c,h,_,y);return w||(s.position+=T),T},mmap(s,o,c,h,_){if((h&2)!==0&&(_&2)===0&&(s.flags&2097155)!==2)throw new M.ErrnoError(2);if((s.flags&2097155)===1)throw new M.ErrnoError(2);if(!s.stream_ops.mmap)throw new M.ErrnoError(43);if(!o)throw new M.ErrnoError(28);return s.stream_ops.mmap(s,o,c,h,_)},msync(s,o,c,h,_){return R(c>=0),s.stream_ops.msync?s.stream_ops.msync(s,o,c,h,_):0},ioctl(s,o,c){if(!s.stream_ops.ioctl)throw new M.ErrnoError(59);return s.stream_ops.ioctl(s,o,c)},readFile(s,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var c=M.open(s,o.flags),h=M.stat(s),_=h.size,y=new Uint8Array(_);return M.read(c,y,0,_,0),o.encoding==="utf8"&&(y=xt(y)),M.close(c),y},writeFile(s,o,c={}){c.flags=c.flags||577;var h=M.open(s,c.flags,c.mode);if(typeof o=="string"&&(o=new Uint8Array(te(o))),ArrayBuffer.isView(o))M.write(h,o,0,o.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");M.close(h)},cwd:()=>M.currentPath,chdir(s){var o=M.lookupPath(s,{follow:!0});if(o.node===null)throw new M.ErrnoError(44);if(!M.isDir(o.node.mode))throw new M.ErrnoError(54);var c=M.nodePermissions(o.node,"x");if(c)throw new M.ErrnoError(c);M.currentPath=o.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(h,_,y,w,T)=>w,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),Ce.register(M.makedev(5,0),Ce.default_tty_ops),Ce.register(M.makedev(6,0),Ce.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var s=new Uint8Array(1024),o=0,c=()=>(o===0&&(Ps(s),o=s.byteLength),s[--o]);M.createDevice("/dev","random",c),M.createDevice("/dev","urandom",c),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var s=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var o=M.createNode(s,"fd",16895,73);return o.stream_ops={llseek:de.stream_ops.llseek},o.node_ops={lookup(c,h){var _=+h,y=M.getStreamChecked(_),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>y.path},id:_+1};return w.parent=w,w},readdir(){return Array.from(M.streams.entries()).filter(([c,h])=>h).map(([c,h])=>c.toString())}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,c){s?M.createDevice("/dev","stdin",s):M.symlink("/dev/tty","/dev/stdin"),o?M.createDevice("/dev","stdout",null,o):M.symlink("/dev/tty","/dev/stdout"),c?M.createDevice("/dev","stderr",null,c):M.symlink("/dev/tty1","/dev/stderr");var h=M.open("/dev/stdin",0),_=M.open("/dev/stdout",1),y=M.open("/dev/stderr",1);R(h.fd===0,`invalid handle for stdin (${h.fd})`),R(_.fd===1,`invalid handle for stdout (${_.fd})`),R(y.fd===2,`invalid handle for stderr (${y.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(de,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:de}},init(s,o,c){R(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,s??=t.stdin,o??=t.stdout,c??=t.stderr,M.createStandardStreams(s,o,c)},quit(){M.initialized=!1,qa(0);for(var s of M.streams)s&&M.close(s)},findObject(s,o){var c=M.analyzePath(s,o);return c.exists?c.object:null},analyzePath(s,o){try{var c=M.lookupPath(s,{follow:!o});s=c.path}catch{}var h={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=M.lookupPath(s,{parent:!0});h.parentExists=!0,h.parentPath=c.path,h.parentObject=c.node,h.name=At.basename(s),c=M.lookupPath(s,{follow:!o}),h.exists=!0,h.path=c.path,h.object=c.node,h.name=c.node.name,h.isRoot=c.path==="/"}catch(_){h.error=_.errno}return h},createPath(s,o,c,h){s=typeof s=="string"?s:M.getPath(s);for(var _=o.split("/").reverse();_.length;){var y=_.pop();if(y){var w=At.join2(s,y);try{M.mkdir(w)}catch(T){if(T.errno!=20)throw T}s=w}}return w},createFile(s,o,c,h,_){var y=At.join2(typeof s=="string"?s:M.getPath(s),o),w=It(h,_);return M.create(y,w)},createDataFile(s,o,c,h,_,y){var w=o;s&&(s=typeof s=="string"?s:M.getPath(s),w=o?At.join2(s,o):s);var T=It(h,_),N=M.create(w,T);if(c){if(typeof c=="string"){for(var j=new Array(c.length),ee=0,ce=c.length;ee<ce;++ee)j[ee]=c.charCodeAt(ee);c=j}M.chmod(N,T|146);var he=M.open(N,577);M.write(he,c,0,c.length,0,y),M.close(he),M.chmod(N,T)}},createDevice(s,o,c,h){var _=At.join2(typeof s=="string"?s:M.getPath(s),o),y=It(!!c,!!h);M.createDevice.major??=64;var w=M.makedev(M.createDevice.major++,0);return M.registerDevice(w,{open(T){T.seekable=!1},close(T){h?.buffer?.length&&h(10)},read(T,N,j,ee,ce){for(var he=0,ue=0;ue<ee;ue++){var me;try{me=c()}catch{throw new M.ErrnoError(29)}if(me===void 0&&he===0)throw new M.ErrnoError(6);if(me==null)break;he++,N[j+ue]=me}return he&&(T.node.atime=Date.now()),he},write(T,N,j,ee,ce){for(var he=0;he<ee;he++)try{h(N[j+he])}catch{throw new M.ErrnoError(29)}return ee&&(T.node.mtime=T.node.ctime=Date.now()),he}}),M.mkdev(_,y,w)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=b(s.url),s.usedBytes=s.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(s,o,c,h,_){class y{lengthKnown=!1;chunks=[];get(ue){if(!(ue>this.length-1||ue<0)){var me=ue%this.chunkSize,je=ue/this.chunkSize|0;return this.getter(je)[me]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",c,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+c+". Status: "+ue.status);var me=Number(ue.getResponseHeader("Content-length")),je,pt=(je=ue.getResponseHeader("Accept-Ranges"))&&je==="bytes",ot=(je=ue.getResponseHeader("Content-Encoding"))&&je==="gzip",Ut=1024*1024;pt||(Ut=me);var yt=(Yt,pn)=>{if(Yt>pn)throw new Error("invalid range ("+Yt+", "+pn+") or no bytes requested!");if(pn>me-1)throw new Error("only "+me+" bytes available! programmer error!");var Dt=new XMLHttpRequest;if(Dt.open("GET",c,!1),me!==Ut&&Dt.setRequestHeader("Range","bytes="+Yt+"-"+pn),Dt.responseType="arraybuffer",Dt.overrideMimeType&&Dt.overrideMimeType("text/plain; charset=x-user-defined"),Dt.send(null),!(Dt.status>=200&&Dt.status<300||Dt.status===304))throw new Error("Couldn't load "+c+". Status: "+Dt.status);return Dt.response!==void 0?new Uint8Array(Dt.response||[]):te(Dt.responseText||"")},cn=this;cn.setDataGetter(Yt=>{var pn=Yt*Ut,Dt=(Yt+1)*Ut-1;if(Dt=Math.min(Dt,me-1),typeof cn.chunks[Yt]>"u"&&(cn.chunks[Yt]=yt(pn,Dt)),typeof cn.chunks[Yt]>"u")throw new Error("doXHR failed!");return cn.chunks[Yt]}),(ot||!me)&&(Ut=me=1,me=this.getter(0).length,Ut=me,F("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=Ut,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new y,T={isDevice:!1,contents:w}}else var T={isDevice:!1,url:c};var N=M.createFile(s,o,T,h,_);T.contents?N.contents=T.contents:T.url&&(N.contents=null,N.url=T.url),Object.defineProperties(N,{usedBytes:{get:function(){return this.contents.length}}});var j={},ee=Object.keys(N.stream_ops);ee.forEach(he=>{var ue=N.stream_ops[he];j[he]=(...me)=>(M.forceLoadFile(N),ue(...me))});function ce(he,ue,me,je,pt){var ot=he.node.contents;if(pt>=ot.length)return 0;var Ut=Math.min(ot.length-pt,je);if(R(Ut>=0),ot.slice)for(var yt=0;yt<Ut;yt++)ue[me+yt]=ot[pt+yt];else for(var yt=0;yt<Ut;yt++)ue[me+yt]=ot.get(pt+yt);return Ut}return j.read=(he,ue,me,je,pt)=>(M.forceLoadFile(N),ce(he,ue,me,je,pt)),j.mmap=(he,ue,me,je,pt)=>{M.forceLoadFile(N);var ot=Ue();if(!ot)throw new M.ErrnoError(48);return ce(he,Ze,ot,ue,me),{ptr:ot,allocated:!0}},N.stream_ops=j,N},absolutePath(){H("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){H("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){H("FS.createLink has been removed; use FS.symlink instead")},joinPath(){H("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){H("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){H("FS.standardizePath has been removed; use PATH.normalize instead")}},ht={DEFAULT_POLLMASK:5,calculateAt(s,o,c){if(At.isAbs(o))return o;var h;if(s===-100)h=M.cwd();else{var _=ht.getStreamFromFD(s);h=_.path}if(o.length==0){if(!c)throw new M.ErrnoError(44);return h}return h+"/"+o},writeStat(s,o){re[s>>2]=o.dev,re[s+4>>2]=o.mode,Me[s+8>>2]=o.nlink,re[s+12>>2]=o.uid,re[s+16>>2]=o.gid,re[s+20>>2]=o.rdev,bt[s+24>>3]=BigInt(o.size),re[s+32>>2]=4096,re[s+36>>2]=o.blocks;var c=o.atime.getTime(),h=o.mtime.getTime(),_=o.ctime.getTime();return bt[s+40>>3]=BigInt(Math.floor(c/1e3)),Me[s+48>>2]=c%1e3*1e3*1e3,bt[s+56>>3]=BigInt(Math.floor(h/1e3)),Me[s+64>>2]=h%1e3*1e3*1e3,bt[s+72>>3]=BigInt(Math.floor(_/1e3)),Me[s+80>>2]=_%1e3*1e3*1e3,bt[s+88>>3]=BigInt(o.ino),0},writeStatFs(s,o){re[s+4>>2]=o.bsize,re[s+40>>2]=o.bsize,re[s+8>>2]=o.blocks,re[s+12>>2]=o.bfree,re[s+16>>2]=o.bavail,re[s+20>>2]=o.files,re[s+24>>2]=o.ffree,re[s+28>>2]=o.fsid,re[s+44>>2]=o.flags,re[s+36>>2]=o.namelen},doMsync(s,o,c,h,_){if(!M.isFile(o.node.mode))throw new M.ErrnoError(43);if(h&2)return 0;var y=et.slice(s,s+c);M.msync(o,y,_,c,h)},getStreamFromFD(s){var o=M.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=ut(s);return o}};function _t(s,o,c){try{var h=ht.getStreamFromFD(s);if(R(!c),h.fd===o)return-28;if(o<0||o>=M.MAX_OPEN_FDS)return-8;var _=M.getStream(o);return _&&M.close(_),M.dupStream(h,o).fd}catch(y){if(typeof M>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}var ln=()=>{R(ht.varargs!=null);var s=re[+ht.varargs>>2];return ht.varargs+=4,s},tn=ln;function li(s,o,c){ht.varargs=c;try{var h=ht.getStreamFromFD(s);switch(o){case 0:{var _=ln();if(_<0)return-28;for(;M.streams[_];)_++;var y;return y=M.dupStream(h,_),y.fd}case 1:case 2:return 0;case 3:return h.flags;case 4:{var _=ln();return h.flags|=_,0}case 12:{var _=tn(),w=0;return oe[_+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function Ei(s,o){try{return ht.writeStat(o,M.fstat(s))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Rt(s,o,c){ht.varargs=c;try{var h=ht.getStreamFromFD(s);switch(o){case 21509:return h.tty?0:-59;case 21505:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tcgets){var _=h.tty.ops.ioctl_tcgets(h),y=tn();re[y>>2]=_.c_iflag||0,re[y+4>>2]=_.c_oflag||0,re[y+8>>2]=_.c_cflag||0,re[y+12>>2]=_.c_lflag||0;for(var w=0;w<32;w++)Ze[y+w+17]=_.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return h.tty?0:-59;case 21506:case 21507:case 21508:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tcsets){for(var y=tn(),T=re[y>>2],N=re[y+4>>2],j=re[y+8>>2],ee=re[y+12>>2],ce=[],w=0;w<32;w++)ce.push(Ze[y+w+17]);return h.tty.ops.ioctl_tcsets(h.tty,o,{c_iflag:T,c_oflag:N,c_cflag:j,c_lflag:ee,c_cc:ce})}return 0}case 21519:{if(!h.tty)return-59;var y=tn();return re[y>>2]=0,0}case 21520:return h.tty?-28:-59;case 21531:{var y=tn();return M.ioctl(h,o,y)}case 21523:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tiocgwinsz){var he=h.tty.ops.ioctl_tiocgwinsz(h.tty),y=tn();oe[y>>1]=he[0],oe[y+2>>1]=he[1]}return 0}case 21524:return h.tty?0:-59;case 21515:return h.tty?0:-59;default:return-28}}catch(ue){if(typeof M>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function qt(s,o){try{return s=ht.getStr(s),ht.writeStat(o,M.lstat(s))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Wn(s,o,c,h){try{o=ht.getStr(o);var _=h&256,y=h&4096;return h=h&-6401,R(!h,`unknown flags in __syscall_newfstatat: ${h}`),o=ht.calculateAt(s,o,y),ht.writeStat(c,_?M.lstat(o):M.stat(o))}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Vt(s,o,c,h){ht.varargs=h;try{o=ht.getStr(o),o=ht.calculateAt(s,o);var _=h?ln():0;return M.open(o,c,_).fd}catch(y){if(typeof M>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function $n(s,o){try{return s=ht.getStr(s),ht.writeStat(o,M.stat(s))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var wi=()=>H("native code called abort()"),zt=s=>{for(var o="";;){var c=et[s++];if(!c)return o;o+=String.fromCharCode(c)}},dr={},Vi={},Ls={},Xr=class extends Error{constructor(o){super(o),this.name="BindingError"}},gt=s=>{throw new Xr(s)};function pd(s,o,c={}){var h=o.name;if(s||gt(`type "${h}" must have a positive integer typeid pointer`),Vi.hasOwnProperty(s)){if(c.ignoreDuplicateRegistrations)return;gt(`Cannot register type '${h}' twice`)}if(Vi[s]=o,delete Ls[s],dr.hasOwnProperty(s)){var _=dr[s];delete dr[s],_.forEach(y=>y())}}function Rn(s,o,c={}){if(o.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return pd(s,o,c)}var ic=(s,o,c)=>{switch(o){case 1:return c?h=>Ze[h]:h=>et[h];case 2:return c?h=>oe[h>>1]:h=>xe[h>>1];case 4:return c?h=>re[h>>2]:h=>Me[h>>2];case 8:return c?h=>bt[h>>3]:h=>ct[h>>3];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},Hi=s=>{if(s===null)return"null";var o=typeof s;return o==="object"||o==="array"||o==="function"?s.toString():""+s},rc=(s,o,c,h)=>{if(o<c||o>h)throw new TypeError(`Passing a number "${Hi(o)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${c}, ${h}]!`)},md=(s,o,c,h,_)=>{o=zt(o);const y=h===0n;let w=T=>T;if(y){const T=c*8;w=N=>BigInt.asUintN(T,N),_=w(_)}Rn(s,{name:o,fromWireType:w,toWireType:(T,N)=>{if(typeof N=="number")N=BigInt(N);else if(typeof N!="bigint")throw new TypeError(`Cannot convert "${Hi(N)}" to ${this.name}`);return rc(o,N,h,_),N},argPackAdvance:Xn,readValueFromPointer:ic(o,c,!y),destructorFunction:null})},Xn=8,gd=(s,o,c,h)=>{o=zt(o),Rn(s,{name:o,fromWireType:function(_){return!!_},toWireType:function(_,y){return y?c:h},argPackAdvance:Xn,readValueFromPointer:function(_){return this.fromWireType(et[_])},destructorFunction:null})},_d=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Oa=s=>{function o(c){return c.$$.ptrType.registeredClass.name}gt(o(s)+" instance already deleted")},ka=!1,sc=s=>{},vd=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},ac=s=>{s.count.value-=1;var o=s.count.value===0;o&&vd(s)},oc=(s,o,c)=>{if(o===c)return s;if(c.baseClass===void 0)return null;var h=oc(s,o,c.baseClass);return h===null?null:c.downcast(h)},lc={},xd={},yd=(s,o)=>{for(o===void 0&&gt("ptr should not be undefined");s.baseClass;)o=s.upcast(o),s=s.baseClass;return o},Sd=(s,o)=>(o=yd(s,o),xd[o]),Md=class extends Error{constructor(o){super(o),this.name="InternalError"}},Ds=s=>{throw new Md(s)},Fs=(s,o)=>{(!o.ptrType||!o.ptr)&&Ds("makeClassHandle requires ptr and ptrType");var c=!!o.smartPtrType,h=!!o.smartPtr;return c!==h&&Ds("Both smartPtrType and smartPtr must be specified"),o.count={value:1},qr(Object.create(s,{$$:{value:o,writable:!0}}))};function cc(s){var o=this.getPointee(s);if(!o)return this.destructor(s),null;var c=Sd(this.registeredClass,o);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=o,c.$$.smartPtr=s,c.clone();var h=c.clone();return this.destructor(s),h}function _(){return this.isSmartPointer?Fs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:o,smartPtrType:this,smartPtr:s}):Fs(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var y=this.registeredClass.getActualType(o),w=lc[y];if(!w)return _.call(this);var T;this.isConst?T=w.constPointerType:T=w.pointerType;var N=oc(o,this.registeredClass,T.registeredClass);return N===null?_.call(this):this.isSmartPointer?Fs(T.registeredClass.instancePrototype,{ptrType:T,ptr:N,smartPtrType:this,smartPtr:s}):Fs(T.registeredClass.instancePrototype,{ptrType:T,ptr:N})}var qr=s=>typeof FinalizationRegistry>"u"?(qr=o=>o,s):(ka=new FinalizationRegistry(o=>{console.warn(o.leakWarning),ac(o.$$)}),qr=o=>{var c=o.$$,h=!!c.smartPtr;if(h){var _={$$:c},y=c.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${y.name} <${De(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,cc),_.leakWarning=w.stack.replace(/^Error: /,""),ka.register(o,_,o)}return o},sc=o=>ka.unregister(o),qr(s)),bd=()=>{let s=Is.prototype;Object.assign(s,{isAliasOf(c){if(!(this instanceof Is)||!(c instanceof Is))return!1;var h=this.$$.ptrType.registeredClass,_=this.$$.ptr;c.$$=c.$$;for(var y=c.$$.ptrType.registeredClass,w=c.$$.ptr;h.baseClass;)_=h.upcast(_),h=h.baseClass;for(;y.baseClass;)w=y.upcast(w),y=y.baseClass;return h===y&&_===w},clone(){if(this.$$.ptr||Oa(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=qr(Object.create(Object.getPrototypeOf(this),{$$:{value:_d(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||Oa(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&gt("Object already scheduled for deletion"),sc(this),ac(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Oa(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&gt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const o=Symbol.dispose;o&&(s[o]=s.delete)};function Is(){}var Us=(s,o)=>Object.defineProperty(o,"name",{value:s}),Ba=(s,o,c)=>{if(s[o].overloadTable===void 0){var h=s[o];s[o]=function(..._){return s[o].overloadTable.hasOwnProperty(_.length)||gt(`Function '${c}' called with an invalid number of arguments (${_.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[_.length].apply(this,_)},s[o].overloadTable=[],s[o].overloadTable[h.argCount]=h}},za=(s,o,c)=>{t.hasOwnProperty(s)?((c===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[c]!==void 0)&&gt(`Cannot register public name '${s}' twice`),Ba(t,s,s),t[s].overloadTable.hasOwnProperty(c)&&gt(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[s].overloadTable[c]=o):(t[s]=o,t[s].argCount=c)},Ed=48,wd=57,Td=s=>{R(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var o=s.charCodeAt(0);return o>=Ed&&o<=wd?`_${s}`:s};function Ad(s,o,c,h,_,y,w,T){this.name=s,this.constructor=o,this.instancePrototype=c,this.rawDestructor=h,this.baseClass=_,this.getActualType=y,this.upcast=w,this.downcast=T,this.pureVirtualFunctions=[]}var Ns=(s,o,c)=>{for(;o!==c;)o.upcast||gt(`Expected null or instance of ${c.name}, got an instance of ${o.name}`),s=o.upcast(s),o=o.baseClass;return s};function Cd(s,o){if(o===null)return this.isReference&&gt(`null is not a valid ${this.name}`),0;o.$$||gt(`Cannot pass "${Hi(o)}" as a ${this.name}`),o.$$.ptr||gt(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=o.$$.ptrType.registeredClass,h=Ns(o.$$.ptr,c,this.registeredClass);return h}function Rd(s,o){var c;if(o===null)return this.isReference&&gt(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,c),c):0;(!o||!o.$$)&&gt(`Cannot pass "${Hi(o)}" as a ${this.name}`),o.$$.ptr||gt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&o.$$.ptrType.isConst&&gt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);var h=o.$$.ptrType.registeredClass;if(c=Ns(o.$$.ptr,h,this.registeredClass),this.isSmartPointer)switch(o.$$.smartPtr===void 0&&gt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:o.$$.smartPtrType===this?c=o.$$.smartPtr:gt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=o.$$.smartPtr;break;case 2:if(o.$$.smartPtrType===this)c=o.$$.smartPtr;else{var _=o.clone();c=this.rawShare(c,jt.toHandle(()=>_.delete())),s!==null&&s.push(this.rawDestructor,c)}break;default:gt("Unsupporting sharing policy")}return c}function Pd(s,o){if(o===null)return this.isReference&&gt(`null is not a valid ${this.name}`),0;o.$$||gt(`Cannot pass "${Hi(o)}" as a ${this.name}`),o.$$.ptr||gt(`Cannot pass deleted object as a pointer of type ${this.name}`),o.$$.ptrType.isConst&&gt(`Cannot convert argument of type ${o.$$.ptrType.name} to parameter type ${this.name}`);var c=o.$$.ptrType.registeredClass,h=Ns(o.$$.ptr,c,this.registeredClass);return h}function Os(s){return this.fromWireType(Me[s>>2])}var Ld=()=>{Object.assign(ks.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},argPackAdvance:Xn,readValueFromPointer:Os,fromWireType:cc})};function ks(s,o,c,h,_,y,w,T,N,j,ee){this.name=s,this.registeredClass=o,this.isReference=c,this.isConst=h,this.isSmartPointer=_,this.pointeeType=y,this.sharingPolicy=w,this.rawGetPointee=T,this.rawConstructor=N,this.rawShare=j,this.rawDestructor=ee,!_&&o.baseClass===void 0?h?(this.toWireType=Cd,this.destructorFunction=null):(this.toWireType=Pd,this.destructorFunction=null):this.toWireType=Rd}var uc=(s,o,c)=>{t.hasOwnProperty(s)||Ds("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&c!==void 0?t[s].overloadTable[c]=o:(t[s]=o,t[s].argCount=c)},hc=[],Bs,ve=s=>{var o=hc[s];return o||(hc[s]=o=Bs.get(s)),R(Bs.get(s)==o,"JavaScript-side Wasm function table mirror is out of date!"),o},qn=(s,o,c=!1)=>{R(!c,"Async bindings are only supported with JSPI."),s=zt(s);function h(){var y=ve(o);return y}var _=h();return typeof _!="function"&&gt(`unknown function pointer with signature ${s}: ${o}`),_};class Dd extends Error{}var dc=s=>{var o=Lc(s),c=zt(o);return Yn(o),c},Wi=(s,o)=>{var c=[],h={};function _(y){if(!h[y]&&!Vi[y]){if(Ls[y]){Ls[y].forEach(_);return}c.push(y),h[y]=!0}}throw o.forEach(_),new Dd(`${s}: `+c.map(dc).join([", "]))},Un=(s,o,c)=>{s.forEach(T=>Ls[T]=o);function h(T){var N=c(T);N.length!==s.length&&Ds("Mismatched type converter count");for(var j=0;j<s.length;++j)Rn(s[j],N[j])}var _=new Array(o.length),y=[],w=0;o.forEach((T,N)=>{Vi.hasOwnProperty(T)?_[N]=Vi[T]:(y.push(T),dr.hasOwnProperty(T)||(dr[T]=[]),dr[T].push(()=>{_[N]=Vi[T],++w,w===y.length&&h(_)}))}),y.length===0&&h(_)},Fd=(s,o,c,h,_,y,w,T,N,j,ee,ce,he)=>{ee=zt(ee),y=qn(_,y),T&&=qn(w,T),j&&=qn(N,j),he=qn(ce,he);var ue=Td(ee);za(ue,function(){Wi(`Cannot construct ${ee} due to unbound types`,[h])}),Un([s,o,c],h?[h]:[],me=>{me=me[0];var je,pt;h?(je=me.registeredClass,pt=je.instancePrototype):pt=Is.prototype;var ot=Us(ee,function(...Dt){if(Object.getPrototypeOf(this)!==Ut)throw new Xr(`Use 'new' to construct ${ee}`);if(yt.constructor_body===void 0)throw new Xr(`${ee} has no accessible constructor`);var qi=yt.constructor_body[Dt.length];if(qi===void 0)throw new Xr(`Tried to invoke ctor of ${ee} with invalid number of parameters (${Dt.length}) - expected (${Object.keys(yt.constructor_body).toString()}) parameters instead!`);return qi.apply(this,Dt)}),Ut=Object.create(pt,{constructor:{value:ot}});ot.prototype=Ut;var yt=new Ad(ee,ot,Ut,he,je,y,T,j);yt.baseClass&&(yt.baseClass.__derivedClasses??=[],yt.baseClass.__derivedClasses.push(yt));var cn=new ks(ee,yt,!0,!1,!1),Yt=new ks(ee+"*",yt,!1,!1,!1),pn=new ks(ee+" const*",yt,!1,!0,!1);return lc[s]={pointerType:Yt,constPointerType:pn},uc(ue,ot),[cn,Yt,pn]})},Ga=s=>{for(;s.length;){var o=s.pop(),c=s.pop();c(o)}};function fc(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function Id(s,o,c,h,_){if(s<o||s>c){var y=o==c?o:`${o} to ${c}`;_(`function ${h} called with ${s} arguments, expected ${y}`)}}function Ud(s,o,c,h){var _=fc(s),y=s.length-2,w=[],T=["fn"];o&&T.push("thisWired");for(var N=0;N<y;++N)w.push(`arg${N}`),T.push(`arg${N}Wired`);w=w.join(","),T=T.join(",");var j=`return function (${w}) {
`;j+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,_&&(j+=`var destructors = [];
`);var ee=_?"destructors":"null",ce=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];o&&(j+=`var thisWired = classParam['toWireType'](${ee}, this);
`);for(var N=0;N<y;++N)j+=`var arg${N}Wired = argType${N}['toWireType'](${ee}, arg${N});
`,ce.push(`argType${N}`);if(j+=(c||h?"var rv = ":"")+`invoker(${T});
`,_)j+=`runDestructors(destructors);
`;else for(var N=o?1:2;N<s.length;++N){var he=N===1?"thisWired":"arg"+(N-2)+"Wired";s[N].destructorFunction!==null&&(j+=`${he}_dtor(${he});
`,ce.push(`${he}_dtor`))}return c&&(j+=`var ret = retType['fromWireType'](rv);
return ret;
`),j+=`}
`,ce.push("checkArgCount","minArgs","maxArgs"),j=`if (arguments.length !== ${ce.length}){ throw new Error(humanName + "Expected ${ce.length} closure arguments " + arguments.length + " given."); }
${j}`,[ce,j]}function Nd(s){for(var o=s.length-2,c=s.length-1;c>=2&&s[c].optional;--c)o--;return o}function zs(s,o,c,h,_,y){var w=o.length;w<2&&gt("argTypes array size mismatch! Must at least get return value and 'this' types!"),R(!y,"Async bindings are only supported with JSPI.");for(var T=o[1]!==null&&c!==null,N=fc(o),j=o[0].name!=="void",ee=w-2,ce=Nd(o),he=[s,gt,h,_,Ga,o[0],o[1]],ue=0;ue<w-2;++ue)he.push(o[ue+2]);if(!N)for(var ue=T?1:2;ue<o.length;++ue)o[ue].destructorFunction!==null&&he.push(o[ue].destructorFunction);he.push(Id,ce,ee);let[me,je]=Ud(o,T,j,y);var pt=new Function(...me,je)(...he);return Us(s,pt)}var Gs=(s,o)=>{for(var c=[],h=0;h<s;h++)c.push(Me[o+h*4>>2]);return c},Va=s=>{s=s.trim();const o=s.indexOf("(");return o===-1?s:(R(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,o))},Od=(s,o,c,h,_,y,w,T,N)=>{var j=Gs(c,h);o=zt(o),o=Va(o),y=qn(_,y,T),Un([],[s],ee=>{ee=ee[0];var ce=`${ee.name}.${o}`;function he(){Wi(`Cannot call ${ce} due to unbound types`,j)}o.startsWith("@@")&&(o=Symbol[o.substring(2)]);var ue=ee.registeredClass.constructor;return ue[o]===void 0?(he.argCount=c-1,ue[o]=he):(Ba(ue,o,ce),ue[o].overloadTable[c-1]=he),Un([],j,me=>{var je=[me[0],null].concat(me.slice(1)),pt=zs(ce,je,null,y,w,T);if(ue[o].overloadTable===void 0?(pt.argCount=c-1,ue[o]=pt):ue[o].overloadTable[c-1]=pt,ee.registeredClass.__derivedClasses)for(const ot of ee.registeredClass.__derivedClasses)ot.constructor.hasOwnProperty(o)||(ot.constructor[o]=pt);return[]}),[]})},kd=(s,o,c,h,_,y)=>{R(o>0);var w=Gs(o,c);_=qn(h,_),Un([],[s],T=>{T=T[0];var N=`constructor ${T.name}`;if(T.registeredClass.constructor_body===void 0&&(T.registeredClass.constructor_body=[]),T.registeredClass.constructor_body[o-1]!==void 0)throw new Xr(`Cannot register multiple constructors with identical number of parameters (${o-1}) for class '${T.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return T.registeredClass.constructor_body[o-1]=()=>{Wi(`Cannot construct ${T.name} due to unbound types`,w)},Un([],w,j=>(j.splice(1,0,null),T.registeredClass.constructor_body[o-1]=zs(N,j,null,_,y),[])),[]})},Bd=(s,o,c,h,_,y,w,T,N,j)=>{var ee=Gs(c,h);o=zt(o),o=Va(o),y=qn(_,y,N),Un([],[s],ce=>{ce=ce[0];var he=`${ce.name}.${o}`;o.startsWith("@@")&&(o=Symbol[o.substring(2)]),T&&ce.registeredClass.pureVirtualFunctions.push(o);function ue(){Wi(`Cannot call ${he} due to unbound types`,ee)}var me=ce.registeredClass.instancePrototype,je=me[o];return je===void 0||je.overloadTable===void 0&&je.className!==ce.name&&je.argCount===c-2?(ue.argCount=c-2,ue.className=ce.name,me[o]=ue):(Ba(me,o,he),me[o].overloadTable[c-2]=ue),Un([],ee,pt=>{var ot=zs(he,pt,ce,y,w,N);return me[o].overloadTable===void 0?(ot.argCount=c-2,me[o]=ot):me[o].overloadTable[c-2]=ot,[]}),[]})},pc=(s,o,c)=>(s instanceof Object||gt(`${c} with invalid "this": ${s}`),s instanceof o.registeredClass.constructor||gt(`${c} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||gt(`cannot call emscripten binding method ${c} on deleted object`),Ns(s.$$.ptr,s.$$.ptrType.registeredClass,o.registeredClass)),zd=(s,o,c,h,_,y,w,T,N,j)=>{o=zt(o),_=qn(h,_),Un([],[s],ee=>{ee=ee[0];var ce=`${ee.name}.${o}`,he={get(){Wi(`Cannot access ${ce} due to unbound types`,[c,w])},enumerable:!0,configurable:!0};return N?he.set=()=>Wi(`Cannot access ${ce} due to unbound types`,[c,w]):he.set=ue=>gt(ce+" is a read-only property"),Object.defineProperty(ee.registeredClass.instancePrototype,o,he),Un([],N?[c,w]:[c],ue=>{var me=ue[0],je={get(){var ot=pc(this,ee,ce+" getter");return me.fromWireType(_(y,ot))},enumerable:!0};if(N){N=qn(T,N);var pt=ue[1];je.set=function(ot){var Ut=pc(this,ee,ce+" setter"),yt=[];N(j,Ut,pt.toWireType(yt,ot)),Ga(yt)}}return Object.defineProperty(ee.registeredClass.instancePrototype,o,je),[]}),[]})},Gd=(s,o,c)=>{s=zt(s),Un([],[o],h=>(h=h[0],t[s]=h.fromWireType(c),[]))},mc=[],jn=[0,1,,1,null,1,!0,1,!1,1],Ha=s=>{s>9&&--jn[s+1]===0&&(R(jn[s]!==void 0,"Decref for unallocated handle."),jn[s]=void 0,mc.push(s))},jt={toValue:s=>(s||gt(`Cannot use deleted val. handle = ${s}`),R(s===2||jn[s]!==void 0&&s%2===0,`invalid handle: ${s}`),jn[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const o=mc.pop()||jn.length;return jn[o]=s,jn[o+1]=1,o}}}},gc={name:"emscripten::val",fromWireType:s=>{var o=jt.toValue(s);return Ha(s),o},toWireType:(s,o)=>jt.toHandle(o),argPackAdvance:Xn,readValueFromPointer:Os,destructorFunction:null},_c=s=>Rn(s,gc),Vd=(s,o,c)=>{switch(o){case 1:return c?function(h){return this.fromWireType(Ze[h])}:function(h){return this.fromWireType(et[h])};case 2:return c?function(h){return this.fromWireType(oe[h>>1])}:function(h){return this.fromWireType(xe[h>>1])};case 4:return c?function(h){return this.fromWireType(re[h>>2])}:function(h){return this.fromWireType(Me[h>>2])};default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},Hd=(s,o,c,h)=>{o=zt(o);function _(){}_.values={},Rn(s,{name:o,constructor:_,fromWireType:function(y){return this.constructor.values[y]},toWireType:(y,w)=>w.value,argPackAdvance:Xn,readValueFromPointer:Vd(o,c,h),destructorFunction:null}),za(o,_)},Vs=(s,o)=>{var c=Vi[s];return c===void 0&&gt(`${o} has unknown type ${dc(s)}`),c},Wd=(s,o,c)=>{var h=Vs(s,"enum");o=zt(o);var _=h.constructor,y=Object.create(h.constructor.prototype,{value:{value:c},constructor:{value:Us(`${h.name}_${o}`,function(){})}});_.values[c]=y,_[o]=y},$d=(s,o)=>{switch(o){case 4:return function(c){return this.fromWireType($e[c>>2])};case 8:return function(c){return this.fromWireType(qe[c>>3])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},Xd=(s,o,c)=>{o=zt(o),Rn(s,{name:o,fromWireType:h=>h,toWireType:(h,_)=>{if(typeof _!="number"&&typeof _!="boolean")throw new TypeError(`Cannot convert ${Hi(_)} to ${this.name}`);return _},argPackAdvance:Xn,readValueFromPointer:$d(o,c),destructorFunction:null})},qd=(s,o,c,h,_,y,w,T)=>{var N=Gs(o,c);s=zt(s),s=Va(s),_=qn(h,_,w),za(s,function(){Wi(`Cannot call ${s} due to unbound types`,N)},o-1),Un([],N,j=>{var ee=[j[0],null].concat(j.slice(1));return uc(s,zs(s,ee,null,_,y,w),o-1),[]})},jd=(s,o,c,h,_)=>{o=zt(o);const y=h===0;let w=N=>N;if(y){var T=32-8*c;w=N=>N<<T>>>T,_=w(_)}Rn(s,{name:o,fromWireType:w,toWireType:(N,j)=>{if(typeof j!="number"&&typeof j!="boolean")throw new TypeError(`Cannot convert "${Hi(j)}" to ${o}`);return rc(o,j,h,_),j},argPackAdvance:Xn,readValueFromPointer:ic(o,c,h!==0),destructorFunction:null})},Yd=(s,o,c)=>{var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],_=h[o];function y(w){var T=Me[w>>2],N=Me[w+4>>2];return new _(Ze.buffer,N,T)}c=zt(c),Rn(s,{name:c,fromWireType:y,argPackAdvance:Xn,readValueFromPointer:y},{ignoreDuplicateRegistrations:!0})},Kd=Object.assign({optional:!0},gc),Jd=(s,o)=>{Rn(s,Kd)},$i=(s,o,c)=>(R(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),se(s,et,o,c)),Zd=(s,o)=>{o=zt(o),Rn(s,{name:o,fromWireType(c){for(var h=Me[c>>2],_=c+4,y,w,T=_,w=0;w<=h;++w){var N=_+w;if(w==h||et[N]==0){var j=N-T,ee=ut(T,j);y===void 0?y=ee:(y+="\0",y+=ee),T=N+1}}return Yn(c),y},toWireType(c,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var _,y=typeof h=="string";y||ArrayBuffer.isView(h)&&h.BYTES_PER_ELEMENT==1||gt("Cannot pass non-string to std::string"),y?_=q(h):_=h.length;var w=Xa(4+_+1),T=w+4;return Me[w>>2]=_,y?$i(h,T,_+1):et.set(h,T),c!==null&&c.push(Yn,w),w},argPackAdvance:Xn,readValueFromPointer:Os,destructorFunction(c){Yn(c)}})},vc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Qd=(s,o)=>{R(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=s>>1,h=c+o/2,_=c;!(_>=h)&&xe[_];)++_;if(_-c>16&&vc)return vc.decode(xe.subarray(c,_));for(var y="",w=c;!(w>=h);++w){var T=xe[w];if(T==0)break;y+=String.fromCharCode(T)}return y},ef=(s,o,c)=>{if(R(o%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),R(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<2)return 0;c-=2;for(var h=o,_=c<s.length*2?c/2:s.length,y=0;y<_;++y){var w=s.charCodeAt(y);oe[o>>1]=w,o+=2}return oe[o>>1]=0,o-h},tf=s=>s.length*2,nf=(s,o)=>{R(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",h=0;!(h>=o/4);h++){var _=re[s+h*4>>2];if(!_)break;c+=String.fromCodePoint(_)}return c},rf=(s,o,c)=>{if(R(o%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),R(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<4)return 0;for(var h=o,_=h+c-4,y=0;y<s.length;++y){var w=s.codePointAt(y);if(w>65535&&y++,re[o>>2]=w,o+=4,o+4>_)break}return re[o>>2]=0,o-h},sf=s=>{for(var o=0,c=0;c<s.length;++c){var h=s.codePointAt(c);h>65535&&c++,o+=4}return o},af=(s,o,c)=>{c=zt(c);var h,_,y,w;o===2?(h=Qd,_=ef,w=tf,y=T=>xe[T>>1]):o===4&&(h=nf,_=rf,w=sf,y=T=>Me[T>>2]),Rn(s,{name:c,fromWireType:T=>{for(var N=Me[T>>2],j,ee=T+4,ce=0;ce<=N;++ce){var he=T+4+ce*o;if(ce==N||y(he)==0){var ue=he-ee,me=h(ee,ue);j===void 0?j=me:(j+="\0",j+=me),ee=he+o}}return Yn(T),j},toWireType:(T,N)=>{typeof N!="string"&&gt(`Cannot pass non-string to C++ string type ${c}`);var j=w(N),ee=Xa(4+j+o);return Me[ee>>2]=j/o,_(N,ee+4,j+o),T!==null&&T.push(Yn,ee),ee},argPackAdvance:Xn,readValueFromPointer:Os,destructorFunction(T){Yn(T)}})},of=(s,o)=>{_c(s)},lf=(s,o)=>{o=zt(o),Rn(s,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,h)=>{}})},cf=()=>{throw new z},xc=(s,o,c)=>{var h=[],_=s.toWireType(h,c);return h.length&&(Me[o>>2]=jt.toHandle(h)),_},uf=(s,o,c)=>(s=jt.toValue(s),o=Vs(o,"emval::as"),xc(o,c,s)),Hs=[],hf=(s,o,c,h)=>(s=Hs[s],o=jt.toValue(o),s(null,o,c,h)),df={},Wa=s=>{var o=df[s];return o===void 0?zt(s):o},ff=(s,o,c,h,_)=>(s=Hs[s],o=jt.toValue(o),c=Wa(c),s(o,o[c],h,_)),yc=()=>globalThis,pf=s=>s===0?jt.toHandle(yc()):(s=Wa(s),jt.toHandle(yc()[s])),mf=s=>{var o=Hs.length;return Hs.push(s),o},gf=(s,o)=>{for(var c=new Array(s),h=0;h<s;++h)c[h]=Vs(Me[o+h*4>>2],`parameter ${h}`);return c},_f=(s,o,c)=>{var h=gf(s,o),_=h.shift();s--;var y=`return function (obj, func, destructorsRef, args) {
`,w=0,T=[];c===0&&T.push("obj");for(var N=["retType"],j=[_],ee=0;ee<s;++ee)T.push(`arg${ee}`),N.push(`argType${ee}`),j.push(h[ee]),y+=`  var arg${ee} = argType${ee}.readValueFromPointer(args${w?"+"+w:""});
`,w+=h[ee].argPackAdvance;var ce=c===1?"new func":"func.call";y+=`  var rv = ${ce}(${T.join(", ")});
`,_.isVoid||(N.push("emval_returnValue"),j.push(xc),y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),y+=`};
`;var he=new Function(...N,y)(...j),ue=`methodCaller<(${h.map(me=>me.name).join(", ")}) => ${_.name}>`;return mf(Us(ue,he))},vf=(s,o)=>(s=jt.toValue(s),o=jt.toValue(o),jt.toHandle(s[o])),xf=s=>{s>9&&(jn[s+1]+=1)},yf=s=>(s=jt.toValue(s),typeof s=="number"),Sf=s=>(s=jt.toValue(s),typeof s=="string"),Mf=()=>jt.toHandle([]),bf=s=>jt.toHandle(Wa(s)),Ef=s=>{var o=jt.toValue(s);Ga(o),Ha(s)},wf=(s,o)=>{s=Vs(s,"_emval_take_value");var c=s.readValueFromPointer(o);return jt.toHandle(c)},Tf=s=>{throw s=jt.toValue(s),s},Af=s=>s%4===0&&(s%100!==0||s%400===0),Cf=[0,31,60,91,121,152,182,213,244,274,305,335],Rf=[0,31,59,90,120,151,181,212,243,273,304,334],Sc=s=>{var o=Af(s.getFullYear()),c=o?Cf:Rf,h=c[s.getMonth()]+s.getDate()-1;return h},Pf=9007199254740992,Lf=-9007199254740992,Mc=s=>s<Lf||s>Pf?NaN:Number(s);function Df(s,o){s=Mc(s);var c=new Date(s*1e3);re[o>>2]=c.getSeconds(),re[o+4>>2]=c.getMinutes(),re[o+8>>2]=c.getHours(),re[o+12>>2]=c.getDate(),re[o+16>>2]=c.getMonth(),re[o+20>>2]=c.getFullYear()-1900,re[o+24>>2]=c.getDay();var h=Sc(c)|0;re[o+28>>2]=h,re[o+36>>2]=-(c.getTimezoneOffset()*60);var _=new Date(c.getFullYear(),0,1),y=new Date(c.getFullYear(),6,1).getTimezoneOffset(),w=_.getTimezoneOffset(),T=(y!=w&&c.getTimezoneOffset()==Math.min(w,y))|0;re[o+32>>2]=T}var Ff=function(s){var o=(()=>{var c=new Date(re[s+20>>2]+1900,re[s+16>>2],re[s+12>>2],re[s+8>>2],re[s+4>>2],re[s>>2],0),h=re[s+32>>2],_=c.getTimezoneOffset(),y=new Date(c.getFullYear(),0,1),w=new Date(c.getFullYear(),6,1).getTimezoneOffset(),T=y.getTimezoneOffset(),N=Math.min(T,w);if(h<0)re[s+32>>2]=+(w!=T&&N==_);else if(h>0!=(N==_)){var j=Math.max(T,w),ee=h>0?N:j;c.setTime(c.getTime()+(ee-_)*6e4)}re[s+24>>2]=c.getDay();var ce=Sc(c)|0;re[s+28>>2]=ce,re[s>>2]=c.getSeconds(),re[s+4>>2]=c.getMinutes(),re[s+8>>2]=c.getHours(),re[s+12>>2]=c.getDate(),re[s+16>>2]=c.getMonth(),re[s+20>>2]=c.getYear();var he=c.getTime();return isNaN(he)?-1:he/1e3})();return BigInt(o)},If=(s,o,c,h)=>{var _=new Date().getFullYear(),y=new Date(_,0,1),w=new Date(_,6,1),T=y.getTimezoneOffset(),N=w.getTimezoneOffset(),j=Math.max(T,N);Me[s>>2]=j*60,re[o>>2]=+(T!=N);var ee=ue=>{var me=ue>=0?"-":"+",je=Math.abs(ue),pt=String(Math.floor(je/60)).padStart(2,"0"),ot=String(je%60).padStart(2,"0");return`UTC${me}${pt}${ot}`},ce=ee(T),he=ee(N);R(ce),R(he),R(q(ce)<=16,`timezone name truncated to fit in TZNAME_MAX (${ce})`),R(q(he)<=16,`timezone name truncated to fit in TZNAME_MAX (${he})`),N<T?($i(ce,c,17),$i(he,h,17)):($i(ce,h,17),$i(he,c,17))},bc=()=>performance.now(),Ec=()=>Date.now(),Uf=s=>s>=0&&s<=3;function Nf(s,o,c){if(!Uf(s))return 28;var h;s===0?h=Ec():h=bc();var _=Math.round(h*1e3*1e3);return bt[c>>3]=BigInt(_),0}var Ws=[],Of=(s,o)=>{R(Array.isArray(Ws)),R(o%16==0),Ws.length=0;for(var c;c=et[s++];){var h=String.fromCharCode(c),_=["d","f","i","p"];_.push("j"),R(_.includes(h),`Invalid character ${c}("${h}") in readEmAsmArgs! Use only [${_}], and do not specify "v" for void return argument.`);var y=c!=105;y&=c!=112,o+=y&&o%8?4:0,Ws.push(c==112?Me[o>>2]:c==106?bt[o>>3]:c==105?re[o>>2]:qe[o>>3]),o+=y?8:4}return Ws},kf=(s,o,c)=>{var h=Of(o,c);return R(Pc.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Pc[s](...h)},Bf=(s,o,c)=>kf(s,o,c),wc=()=>2147483648,zf=()=>wc(),Gf=(s,o)=>(R(o,"alignment argument is required"),Math.ceil(s/o)*o),Vf=s=>{var o=Xe.buffer,c=(s-o.byteLength+65535)/65536|0;try{return Xe.grow(c),Tt(),1}catch(h){D(`growMemory: Attempted to grow heap from ${o.byteLength} bytes to ${s} bytes, but got error: ${h}`)}},Hf=s=>{var o=et.length;s>>>=0,R(s>o);var c=wc();if(s>c)return D(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${c} bytes!`),!1;for(var h=1;h<=4;h*=2){var _=o*(1+.2/h);_=Math.min(_,s+100663296);var y=Math.min(c,Gf(Math.max(s,_),65536)),w=Vf(y);if(w)return!0}return D(`Failed to grow the heap from ${o} bytes to ${y} bytes, not enough memory!`),!1},$a={},Wf=()=>d||"./this.program",jr=()=>{if(!jr.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Wf()};for(var c in $a)$a[c]===void 0?delete o[c]:o[c]=$a[c];var h=[];for(var c in o)h.push(`${c}=${o[c]}`);jr.strings=h}return jr.strings},$f=(s,o)=>{var c=0,h=0;for(var _ of jr()){var y=o+c;Me[s+h>>2]=y,c+=$i(_,y,1/0)+1,h+=4}return 0},Xf=(s,o)=>{var c=jr();Me[s>>2]=c.length;var h=0;for(var _ of c)h+=q(_)+1;return Me[o>>2]=h,0},Tc=0,Ac=()=>be||Tc>0,qf=s=>{Ac()||(t.onExit?.(s),O=!0),f(s,new Be(s))},jf=(s,o)=>{if(sg(),Ac()&&!o){var c=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${Tc}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Re?.(c),D(c)}qf(s)},Yf=jf;function Kf(s){try{var o=ht.getStreamFromFD(s);return M.close(o),0}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var Jf=(s,o,c,h)=>{for(var _=0,y=0;y<c;y++){var w=Me[o>>2],T=Me[o+4>>2];o+=8;var N=M.read(s,Ze,w,T,h);if(N<0)return-1;if(_+=N,N<T)break}return _};function Zf(s,o,c,h){try{var _=ht.getStreamFromFD(s),y=Jf(_,o,c);return Me[h>>2]=y,0}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function Qf(s,o,c,h){o=Mc(o);try{if(isNaN(o))return 61;var _=ht.getStreamFromFD(s);return M.llseek(_,o,c),bt[h>>3]=BigInt(_.position),_.getdents&&o===0&&c===0&&(_.getdents=null),0}catch(y){if(typeof M>"u"||y.name!=="ErrnoError")throw y;return y.errno}}var ep=(s,o,c,h)=>{for(var _=0,y=0;y<c;y++){var w=Me[o>>2],T=Me[o+4>>2];o+=8;var N=M.write(s,Ze,w,T,h);if(N<0)return-1;if(_+=N,N<T)break}return _};function tp(s,o,c,h){try{var _=ht.getStreamFromFD(s),y=ep(_,o,c);return Me[h>>2]=y,0}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var np=s=>s,ip=s=>{var o=t["_"+s];return R(o,"Cannot call unknown function "+s+", make sure it is exported"),o},rp=(s,o)=>{R(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Ze.set(s,o)},$s=s=>Nc(s),sp=s=>{var o=q(s)+1,c=$s(o);return $i(s,c,o),c},Cc=(s,o,c,h,_)=>{var y={string:me=>{var je=0;return me!=null&&me!==0&&(je=sp(me)),je},array:me=>{var je=$s(me.length);return rp(me,je),je}};function w(me){return o==="string"?ut(me):o==="boolean"?!!me:me}var T=ip(s),N=[],j=0;if(R(o!=="array",'Return type should not be "array".'),h)for(var ee=0;ee<h.length;ee++){var ce=y[c[ee]];ce?(j===0&&(j=G()),N[ee]=ce(h[ee])):N[ee]=h[ee]}var he=T(...N);function ue(me){return j!==0&&X(j),w(me)}return he=ue(he),he},ap=(s,o,c,h)=>(..._)=>Cc(s,o,c,_),op=(...s)=>M.createPath(...s),lp=(...s)=>M.unlink(...s),cp=(...s)=>M.createLazyFile(...s),up=(...s)=>M.createDevice(...s),hp=s=>Xs(s),dp=s=>Ya(s),fp=s=>{var o=G(),c=$s(4),h=$s(4);kc(s,c,h);var _=Me[c>>2],y=Me[h>>2],w=ut(_);Yn(_);var T;return y&&(T=ut(y),Yn(y)),X(o),[w,T]},Rc=s=>fp(s);M.createPreloadedFile=wt,M.staticInit(),bd(),Ld(),R(jn.length===10),t.noExitRuntime&&(be=t.noExitRuntime),t.preloadPlugins&&(nt=t.preloadPlugins),t.print&&(F=t.print),t.printErr&&(D=t.printErr),t.wasmBinary&&(L=t.wasmBinary),gp(),t.arguments&&t.arguments,t.thisProgram&&(d=t.thisProgram),R(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),R(typeof t.read>"u","Module.read option was removed"),R(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),R(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),R(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),R(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),R(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),R(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),R(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),R(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=U,t.removeRunDependency=E,t.ccall=Cc,t.cwrap=ap,t.FS_createPreloadedFile=wt,t.FS_unlink=lp,t.FS_createPath=op,t.FS_createDevice=up,t.FS=M,t.FS_createDataFile=Ve,t.FS_createLazyFile=cp,t.MEMFS=de;var pp=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];pp.forEach(pe);var mp=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];mp.forEach(Le),t.incrementExceptionRefcount=hp,t.decrementExceptionRefcount=dp,t.getExceptionMessage=Rc;function gp(){ie("fetchSettings")}var Pc={667668:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(o){},enumerable:!0,configurable:!0})})}},Lc=K("___getTypeName"),Xa=K("_malloc"),qa=K("_fflush"),Yn=K("_free"),ja=K("_emscripten_stack_get_end"),Dc=K("_strerror"),_e=K("_setThrew"),Fc=K("__emscripten_tempret_set"),Ic=K("_emscripten_stack_init"),Uc=K("__emscripten_stack_restore"),Nc=K("__emscripten_stack_alloc"),Oc=K("_emscripten_stack_get_current"),Ya=K("___cxa_decrement_exception_refcount"),Xs=K("___cxa_increment_exception_refcount"),kc=K("___get_exception_message"),Bc=K("___cxa_can_catch"),zc=K("___cxa_get_exception_ptr");function _p(s){Lc=ae("__getTypeName",1),Xa=ae("malloc",1),qa=ae("fflush",1),Yn=ae("free",1),ja=s.emscripten_stack_get_end,s.emscripten_stack_get_base,Dc=ae("strerror",1),_e=ae("setThrew",2),Fc=ae("_emscripten_tempret_set",1),Ic=s.emscripten_stack_init,s.emscripten_stack_get_free,Uc=s._emscripten_stack_restore,Nc=s._emscripten_stack_alloc,Oc=s.emscripten_stack_get_current,Ya=ae("__cxa_decrement_exception_refcount",1),Xs=ae("__cxa_increment_exception_refcount",1),kc=ae("__get_exception_message",3),Bc=ae("__cxa_can_catch",3),zc=ae("__cxa_get_exception_ptr",1)}var Gc={__assert_fail:In,__cxa_begin_catch:$r,__cxa_current_primary_exception:Fa,__cxa_end_catch:ws,__cxa_find_matching_catch_2:Ts,__cxa_find_matching_catch_3:hr,__cxa_find_matching_catch_4:As,__cxa_rethrow:Gi,__cxa_rethrow_primary_exception:Cs,__cxa_throw:Rs,__cxa_uncaught_exceptions:Ia,__resumeException:Ua,__syscall_dup3:_t,__syscall_fcntl64:li,__syscall_fstat64:Ei,__syscall_ioctl:Rt,__syscall_lstat64:qt,__syscall_newfstatat:Wn,__syscall_openat:Vt,__syscall_stat64:$n,_abort_js:wi,_embind_register_bigint:md,_embind_register_bool:gd,_embind_register_class:Fd,_embind_register_class_class_function:Od,_embind_register_class_constructor:kd,_embind_register_class_function:Bd,_embind_register_class_property:zd,_embind_register_constant:Gd,_embind_register_emval:_c,_embind_register_enum:Hd,_embind_register_enum_value:Wd,_embind_register_float:Xd,_embind_register_function:qd,_embind_register_integer:jd,_embind_register_memory_view:Yd,_embind_register_optional:Jd,_embind_register_std_string:Zd,_embind_register_std_wstring:af,_embind_register_user_type:of,_embind_register_void:lf,_emscripten_throw_longjmp:cf,_emval_as:uf,_emval_call:hf,_emval_call_method:ff,_emval_decref:Ha,_emval_get_global:pf,_emval_get_method_caller:_f,_emval_get_property:vf,_emval_incref:xf,_emval_is_number:yf,_emval_is_string:Sf,_emval_new_array:Mf,_emval_new_cstring:bf,_emval_run_destructors:Ef,_emval_take_value:wf,_emval_throw:Tf,_localtime_js:Df,_mktime_js:Ff,_tzset_js:If,clock_time_get:Nf,emscripten_asm_const_int:Bf,emscripten_date_now:Ec,emscripten_get_heap_max:zf,emscripten_get_now:bc,emscripten_resize_heap:Hf,environ_get:$f,environ_sizes_get:Xf,exit:Yf,fd_close:Kf,fd_read:Zf,fd_seek:Qf,fd_write:tp,invoke_ddd:Wm,invoke_dddi:om,invoke_dddidi:lm,invoke_ddidi:am,invoke_di:cm,invoke_dii:Jp,invoke_diii:Lp,invoke_diiii:sm,invoke_diiiidd:im,invoke_diiiidi:Ip,invoke_diiiii:Tp,invoke_diiiiii:zp,invoke_diiiiiii:um,invoke_diiiiiiiii:kp,invoke_diiiiiiiiiiii:Bp,invoke_fiii:tg,invoke_i:Ap,invoke_id:Bm,invoke_ii:yp,invoke_iid:ym,invoke_iidddd:Ym,invoke_iidiii:jp,invoke_iidiiid:Xp,invoke_iidiiiiidi:Yp,invoke_iif:jm,invoke_iii:vp,invoke_iiid:Kp,invoke_iiididdddddd:qp,invoke_iiidiiiiiiii:$p,invoke_iiii:bp,invoke_iiiidddiiiii:dm,invoke_iiiii:Pp,invoke_iiiiid:Pm,invoke_iiiiii:wm,invoke_iiiiiii:Mm,invoke_iiiiiiii:xm,invoke_iiiiiiiidd:Lm,invoke_iiiiiiiii:nm,invoke_iiiiiiiiii:bm,invoke_iiiiiiiiiidddiiiiiiiii:Wp,invoke_iiiiiiiiiii:eg,invoke_iiiiiiiiiiii:ng,invoke_iiiiiiiiiiiii:km,invoke_iiij:Em,invoke_iiji:Rm,invoke_j:Zm,invoke_ji:Om,invoke_jiiii:Tm,invoke_jij:Nm,invoke_v:Mp,invoke_vi:Sp,invoke_vid:Sm,invoke_viddd:Am,invoke_vidddd:Cm,invoke_vidi:rm,invoke_vidiii:Vp,invoke_vii:wp,invoke_viid:em,invoke_viiddi:Um,invoke_viiddidi:Im,invoke_viiddii:hm,invoke_viidi:Qp,invoke_viidii:Fp,invoke_viidiii:_m,invoke_viidiiid:mm,invoke_viidiiiii:Hp,invoke_viidiiiiidi:vm,invoke_viidiiiiiiii:Gp,invoke_viii:xp,invoke_viiid:Np,invoke_viiidd:Fm,invoke_viiidi:Zp,invoke_viiididdddddd:gm,invoke_viiidiiiiiiii:pm,invoke_viiii:Rp,invoke_viiiiddd:Dm,invoke_viiiidi:$m,invoke_viiiifi:Xm,invoke_viiiii:Ep,invoke_viiiiid:Up,invoke_viiiiii:Cp,invoke_viiiiiii:Dp,invoke_viiiiiiii:tm,invoke_viiiiiiiiii:Vm,invoke_viiiiiiiiiidddiiiiiiiii:fm,invoke_viiiiiiiiiiid:Op,invoke_viiiiiiiiiiiii:Gm,invoke_viiiiiiiiiiiiiii:ig,invoke_viiiiiiiiiiiiiiiiii:Hm,invoke_viiiij:Km,invoke_viij:Jm,invoke_viijii:Qm,invoke_vij:qm,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:zm,llvm_eh_typeid_for:np},Xi=await Ee();function vp(s,o,c){var h=G();try{return ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;_e(1,0)}}function xp(s,o,c,h){var _=G();try{ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function yp(s,o){var c=G();try{return ve(s)(o)}catch(h){if(X(c),!(h instanceof k))throw h;_e(1,0)}}function Sp(s,o){var c=G();try{ve(s)(o)}catch(h){if(X(c),!(h instanceof k))throw h;_e(1,0)}}function Mp(s){var o=G();try{ve(s)()}catch(c){if(X(o),!(c instanceof k))throw c;_e(1,0)}}function bp(s,o,c,h){var _=G();try{return ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function Ep(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function wp(s,o,c){var h=G();try{ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;_e(1,0)}}function Tp(s,o,c,h,_,y){var w=G();try{return ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Ap(s){var o=G();try{return ve(s)()}catch(c){if(X(o),!(c instanceof k))throw c;_e(1,0)}}function Cp(s,o,c,h,_,y,w){var T=G();try{ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function Rp(s,o,c,h,_){var y=G();try{ve(s)(o,c,h,_)}catch(w){if(X(y),!(w instanceof k))throw w;_e(1,0)}}function Pp(s,o,c,h,_){var y=G();try{return ve(s)(o,c,h,_)}catch(w){if(X(y),!(w instanceof k))throw w;_e(1,0)}}function Lp(s,o,c,h){var _=G();try{return ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function Dp(s,o,c,h,_,y,w,T){var N=G();try{ve(s)(o,c,h,_,y,w,T)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function Fp(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Ip(s,o,c,h,_,y,w){var T=G();try{return ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function Up(s,o,c,h,_,y,w){var T=G();try{ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function Np(s,o,c,h,_){var y=G();try{ve(s)(o,c,h,_)}catch(w){if(X(y),!(w instanceof k))throw w;_e(1,0)}}function Op(s,o,c,h,_,y,w,T,N,j,ee,ce,he){var ue=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function kp(s,o,c,h,_,y,w,T,N,j){var ee=G();try{return ve(s)(o,c,h,_,y,w,T,N,j)}catch(ce){if(X(ee),!(ce instanceof k))throw ce;_e(1,0)}}function Bp(s,o,c,h,_,y,w,T,N,j,ee,ce,he){var ue=G();try{return ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function zp(s,o,c,h,_,y,w){var T=G();try{return ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function Gp(s,o,c,h,_,y,w,T,N,j,ee,ce){var he=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce)}catch(ue){if(X(he),!(ue instanceof k))throw ue;_e(1,0)}}function Vp(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Hp(s,o,c,h,_,y,w,T,N){var j=G();try{ve(s)(o,c,h,_,y,w,T,N)}catch(ee){if(X(j),!(ee instanceof k))throw ee;_e(1,0)}}function Wp(s,o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je,pt,ot,Ut,yt,cn,Yt){var pn=G();try{return ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je,pt,ot,Ut,yt,cn,Yt)}catch(Dt){if(X(pn),!(Dt instanceof k))throw Dt;_e(1,0)}}function $p(s,o,c,h,_,y,w,T,N,j,ee,ce){var he=G();try{return ve(s)(o,c,h,_,y,w,T,N,j,ee,ce)}catch(ue){if(X(he),!(ue instanceof k))throw ue;_e(1,0)}}function Xp(s,o,c,h,_,y,w){var T=G();try{return ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function qp(s,o,c,h,_,y,w,T,N,j,ee,ce){var he=G();try{return ve(s)(o,c,h,_,y,w,T,N,j,ee,ce)}catch(ue){if(X(he),!(ue instanceof k))throw ue;_e(1,0)}}function jp(s,o,c,h,_,y){var w=G();try{return ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Yp(s,o,c,h,_,y,w,T,N,j){var ee=G();try{return ve(s)(o,c,h,_,y,w,T,N,j)}catch(ce){if(X(ee),!(ce instanceof k))throw ce;_e(1,0)}}function Kp(s,o,c,h){var _=G();try{return ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function Jp(s,o,c){var h=G();try{return ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;_e(1,0)}}function Zp(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Qp(s,o,c,h,_){var y=G();try{ve(s)(o,c,h,_)}catch(w){if(X(y),!(w instanceof k))throw w;_e(1,0)}}function em(s,o,c,h){var _=G();try{ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function tm(s,o,c,h,_,y,w,T,N){var j=G();try{ve(s)(o,c,h,_,y,w,T,N)}catch(ee){if(X(j),!(ee instanceof k))throw ee;_e(1,0)}}function nm(s,o,c,h,_,y,w,T,N){var j=G();try{return ve(s)(o,c,h,_,y,w,T,N)}catch(ee){if(X(j),!(ee instanceof k))throw ee;_e(1,0)}}function im(s,o,c,h,_,y,w){var T=G();try{return ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function rm(s,o,c,h){var _=G();try{ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function sm(s,o,c,h,_){var y=G();try{return ve(s)(o,c,h,_)}catch(w){if(X(y),!(w instanceof k))throw w;_e(1,0)}}function am(s,o,c,h,_){var y=G();try{return ve(s)(o,c,h,_)}catch(w){if(X(y),!(w instanceof k))throw w;_e(1,0)}}function om(s,o,c,h){var _=G();try{return ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function lm(s,o,c,h,_,y){var w=G();try{return ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function cm(s,o){var c=G();try{return ve(s)(o)}catch(h){if(X(c),!(h instanceof k))throw h;_e(1,0)}}function um(s,o,c,h,_,y,w,T){var N=G();try{return ve(s)(o,c,h,_,y,w,T)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function hm(s,o,c,h,_,y,w){var T=G();try{ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function dm(s,o,c,h,_,y,w,T,N,j,ee,ce){var he=G();try{return ve(s)(o,c,h,_,y,w,T,N,j,ee,ce)}catch(ue){if(X(he),!(ue instanceof k))throw ue;_e(1,0)}}function fm(s,o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je,pt,ot,Ut,yt,cn,Yt,pn){var Dt=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je,pt,ot,Ut,yt,cn,Yt,pn)}catch(qi){if(X(Dt),!(qi instanceof k))throw qi;_e(1,0)}}function pm(s,o,c,h,_,y,w,T,N,j,ee,ce,he){var ue=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function mm(s,o,c,h,_,y,w,T){var N=G();try{ve(s)(o,c,h,_,y,w,T)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function gm(s,o,c,h,_,y,w,T,N,j,ee,ce,he){var ue=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function _m(s,o,c,h,_,y,w){var T=G();try{ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function vm(s,o,c,h,_,y,w,T,N,j,ee){var ce=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee)}catch(he){if(X(ce),!(he instanceof k))throw he;_e(1,0)}}function xm(s,o,c,h,_,y,w,T){var N=G();try{return ve(s)(o,c,h,_,y,w,T)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function ym(s,o,c){var h=G();try{return ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;_e(1,0)}}function Sm(s,o,c){var h=G();try{ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;_e(1,0)}}function Mm(s,o,c,h,_,y,w){var T=G();try{return ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function bm(s,o,c,h,_,y,w,T,N,j){var ee=G();try{return ve(s)(o,c,h,_,y,w,T,N,j)}catch(ce){if(X(ee),!(ce instanceof k))throw ce;_e(1,0)}}function Em(s,o,c,h){var _=G();try{return ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function wm(s,o,c,h,_,y){var w=G();try{return ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Tm(s,o,c,h,_){var y=G();try{return ve(s)(o,c,h,_)}catch(w){if(X(y),!(w instanceof k))throw w;return _e(1,0),0n}}function Am(s,o,c,h,_){var y=G();try{ve(s)(o,c,h,_)}catch(w){if(X(y),!(w instanceof k))throw w;_e(1,0)}}function Cm(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Rm(s,o,c,h){var _=G();try{return ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function Pm(s,o,c,h,_,y){var w=G();try{return ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Lm(s,o,c,h,_,y,w,T,N,j){var ee=G();try{return ve(s)(o,c,h,_,y,w,T,N,j)}catch(ce){if(X(ee),!(ce instanceof k))throw ce;_e(1,0)}}function Dm(s,o,c,h,_,y,w,T){var N=G();try{ve(s)(o,c,h,_,y,w,T)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function Fm(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Im(s,o,c,h,_,y,w,T){var N=G();try{ve(s)(o,c,h,_,y,w,T)}catch(j){if(X(N),!(j instanceof k))throw j;_e(1,0)}}function Um(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Nm(s,o,c){var h=G();try{return ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;return _e(1,0),0n}}function Om(s,o){var c=G();try{return ve(s)(o)}catch(h){if(X(c),!(h instanceof k))throw h;return _e(1,0),0n}}function km(s,o,c,h,_,y,w,T,N,j,ee,ce,he){var ue=G();try{return ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he)}catch(me){if(X(ue),!(me instanceof k))throw me;_e(1,0)}}function Bm(s,o){var c=G();try{return ve(s)(o)}catch(h){if(X(c),!(h instanceof k))throw h;_e(1,0)}}function zm(s,o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je,pt,ot,Ut,yt,cn,Yt,pn,Dt,qi,og,lg,cg,ug,hg,dg,fg,pg,mg,gg,_g,vg,xg,yg,Sg,Mg,bg,Eg,wg,Tg,Ag,Cg,Rg,Pg,Lg,Dg,Fg,Ig,Ug,Ng,Og,kg,Bg,zg,Gg,Vg,Hg,Wg,$g,Xg,qg,jg,Yg,Kg,Jg,Zg,Qg,e0,t0,n0,i0,r0,s0,a0,o0,l0,c0,u0,h0,d0,f0){var p0=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je,pt,ot,Ut,yt,cn,Yt,pn,Dt,qi,og,lg,cg,ug,hg,dg,fg,pg,mg,gg,_g,vg,xg,yg,Sg,Mg,bg,Eg,wg,Tg,Ag,Cg,Rg,Pg,Lg,Dg,Fg,Ig,Ug,Ng,Og,kg,Bg,zg,Gg,Vg,Hg,Wg,$g,Xg,qg,jg,Yg,Kg,Jg,Zg,Qg,e0,t0,n0,i0,r0,s0,a0,o0,l0,c0,u0,h0,d0,f0)}catch(Hc){if(X(p0),!(Hc instanceof k))throw Hc;_e(1,0)}}function Gm(s,o,c,h,_,y,w,T,N,j,ee,ce,he,ue){var me=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he,ue)}catch(je){if(X(me),!(je instanceof k))throw je;_e(1,0)}}function Vm(s,o,c,h,_,y,w,T,N,j,ee){var ce=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee)}catch(he){if(X(ce),!(he instanceof k))throw he;_e(1,0)}}function Hm(s,o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je,pt,ot,Ut){var yt=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je,pt,ot,Ut)}catch(cn){if(X(yt),!(cn instanceof k))throw cn;_e(1,0)}}function Wm(s,o,c){var h=G();try{return ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;_e(1,0)}}function $m(s,o,c,h,_,y,w){var T=G();try{ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function Xm(s,o,c,h,_,y,w){var T=G();try{ve(s)(o,c,h,_,y,w)}catch(N){if(X(T),!(N instanceof k))throw N;_e(1,0)}}function qm(s,o,c){var h=G();try{ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;_e(1,0)}}function jm(s,o,c){var h=G();try{return ve(s)(o,c)}catch(_){if(X(h),!(_ instanceof k))throw _;_e(1,0)}}function Ym(s,o,c,h,_,y){var w=G();try{return ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Km(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function Jm(s,o,c,h){var _=G();try{ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function Zm(s){var o=G();try{return ve(s)()}catch(c){if(X(o),!(c instanceof k))throw c;return _e(1,0),0n}}function Qm(s,o,c,h,_,y){var w=G();try{ve(s)(o,c,h,_,y)}catch(T){if(X(w),!(T instanceof k))throw T;_e(1,0)}}function eg(s,o,c,h,_,y,w,T,N,j,ee){var ce=G();try{return ve(s)(o,c,h,_,y,w,T,N,j,ee)}catch(he){if(X(ce),!(he instanceof k))throw he;_e(1,0)}}function tg(s,o,c,h){var _=G();try{return ve(s)(o,c,h)}catch(y){if(X(_),!(y instanceof k))throw y;_e(1,0)}}function ng(s,o,c,h,_,y,w,T,N,j,ee,ce){var he=G();try{return ve(s)(o,c,h,_,y,w,T,N,j,ee,ce)}catch(ue){if(X(he),!(ue instanceof k))throw ue;_e(1,0)}}function ig(s,o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je){var pt=G();try{ve(s)(o,c,h,_,y,w,T,N,j,ee,ce,he,ue,me,je)}catch(ot){if(X(pt),!(ot instanceof k))throw ot;_e(1,0)}}var Vc;function rg(){Ic(),A()}function Ka(){if(Lt>0){ft=Ka;return}if(rg(),it(),Lt>0){ft=Ka;return}function s(){R(!Vc),Vc=!0,t.calledRun=!0,!O&&(kt(),Ne?.(t),t.onRuntimeInitialized?.(),Z("onRuntimeInitialized"),R(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),V())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),I()}function sg(){var s=F,o=D,c=!1;F=D=h=>{c=!0};try{qa(0),["stdout","stderr"].forEach(h=>{var _=M.analyzePath("/dev/"+h);if(_){var y=_.object,w=y.rdev,T=Ce.ttys[w];T?.output?.length&&(c=!0)}})}catch{}F=s,D=o,c&&Ie("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function ag(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();Z("preInit")}ag(),Ka(),mt?e=t:e=new Promise((s,o)=>{Ne=s,Re=o});for(const s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){H(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const $c="/demo/assets/mujoco-D9UjOFNX.wasm";var En=Uint8Array,Cr=Uint16Array,x0=Int32Array,sh=new En([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ah=new En([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),y0=new En([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),oh=function(i,e){for(var t=new Cr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new x0(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)r[a]=a-t[n]<<5|n;return{b:t,r}},lh=oh(sh,2),ch=lh.b,S0=lh.r;ch[28]=258,S0[258]=28;var M0=oh(ah,0),b0=M0.b,zo=new Cr(32768);for(var Nt=0;Nt<32768;++Nt){var Ti=(Nt&43690)>>1|(Nt&21845)<<1;Ti=(Ti&52428)>>2|(Ti&13107)<<2,Ti=(Ti&61680)>>4|(Ti&3855)<<4,zo[Nt]=((Ti&65280)>>8|(Ti&255)<<8)>>1}var ss=(function(i,e,t){for(var n=i.length,r=0,a=new Cr(e);r<n;++r)i[r]&&++a[i[r]-1];var l=new Cr(e);for(r=1;r<e;++r)l[r]=l[r-1]+a[r-1]<<1;var u;if(t){u=new Cr(1<<e);var d=15-e;for(r=0;r<n;++r)if(i[r])for(var f=r<<4|i[r],m=e-i[r],g=l[i[r]-1]++<<m,p=g|(1<<m)-1;g<=p;++g)u[zo[g]>>d]=f}else for(u=new Cr(n),r=0;r<n;++r)i[r]&&(u[r]=zo[l[i[r]-1]++]>>15-i[r]);return u}),xs=new En(288);for(var Nt=0;Nt<144;++Nt)xs[Nt]=8;for(var Nt=144;Nt<256;++Nt)xs[Nt]=9;for(var Nt=256;Nt<280;++Nt)xs[Nt]=7;for(var Nt=280;Nt<288;++Nt)xs[Nt]=8;var uh=new En(32);for(var Nt=0;Nt<32;++Nt)uh[Nt]=5;var E0=ss(xs,9,1),w0=ss(uh,5,1),Ja=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Nn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Za=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},T0=function(i){return(i+7)/8|0},hh=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new En(i.subarray(e,t))},A0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ln=function(i,e,t){var n=new Error(e||A0[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Ln),!t)throw n;return n},C0=function(i,e,t,n){var r=i.length,a=0;if(!r||e.f&&!e.l)return t||new En(0);var l=!t,u=l||e.i!=2,d=e.i;l&&(t=new En(r*3));var f=function(qe){var bt=t.length;if(qe>bt){var ct=new En(Math.max(bt*2,qe));ct.set(t),t=ct}},m=e.f||0,g=e.p||0,p=e.b||0,v=e.l,b=e.d,C=e.m,S=e.n,x=r*8;do{if(!v){m=Nn(i,g,1);var F=Nn(i,g+1,3);if(g+=3,F)if(F==1)v=E0,b=w0,C=9,S=5;else if(F==2){var R=Nn(i,g,31)+257,B=Nn(i,g+10,15)+4,A=R+Nn(i,g+5,31)+1;g+=14;for(var I=new En(A),k=new En(19),z=0;z<B;++z)k[y0[z]]=Nn(i,g+z*3,7);g+=B*3;for(var Y=Ja(k),Z=(1<<Y)-1,K=ss(k,Y,1),z=0;z<A;){var ie=K[Nn(i,g,Z)];g+=ie&15;var D=ie>>4;if(D<16)I[z++]=D;else{var J=0,ne=0;for(D==16?(ne=3+Nn(i,g,3),g+=2,J=I[z-1]):D==17?(ne=3+Nn(i,g,7),g+=3):D==18&&(ne=11+Nn(i,g,127),g+=7);ne--;)I[z++]=J}}var Se=I.subarray(0,R),pe=I.subarray(R);C=Ja(Se),S=Ja(pe),v=ss(Se,C,1),b=ss(pe,S,1)}else Ln(1);else{var D=T0(g)+4,L=i[D-4]|i[D-3]<<8,O=D+L;if(O>r){d&&Ln(0);break}u&&f(p+L),t.set(i.subarray(D,O),p),e.b=p+=L,e.p=g=O*8,e.f=m;continue}if(g>x){d&&Ln(0);break}}u&&f(p+131072);for(var Le=(1<<C)-1,Ne=(1<<S)-1,Re=g;;Re=g){var J=v[Za(i,g)&Le],Xe=J>>4;if(g+=J&15,g>x){d&&Ln(0);break}if(J||Ln(2),Xe<256)t[p++]=Xe;else if(Xe==256){Re=g,v=null;break}else{var Ze=Xe-254;if(Xe>264){var z=Xe-257,et=sh[z];Ze=Nn(i,g,(1<<et)-1)+ch[z],g+=et}var oe=b[Za(i,g)&Ne],xe=oe>>4;oe||Ln(3),g+=oe&15;var pe=b0[xe];if(xe>3){var et=ah[xe];pe+=Za(i,g)&(1<<et)-1,g+=et}if(g>x){d&&Ln(0);break}u&&f(p+131072);var re=p+Ze;if(p<pe){var Me=a-pe,$e=Math.min(pe,re);for(Me+p<0&&Ln(3);p<$e;++p)t[p]=n[Me+p]}for(;p<re;++p)t[p]=t[p-pe]}}e.l=v,e.p=Re,e.b=p,e.f=m,v&&(m=1,e.m=C,e.d=b,e.n=S)}while(!m);return p!=t.length&&l?hh(t,0,p):t.subarray(0,p)},R0=new En(0),P0=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&Ln(6,"invalid gzip data");var e=i[3],t=10;e&4&&(t+=(i[10]|i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},L0=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};function dh(i,e){var t=P0(i);return t+8>i.length&&Ln(6,"invalid gzip data"),C0(i.subarray(t,-8),{i:2},new En(L0(i)),e)}var Go=typeof TextDecoder<"u"&&new TextDecoder,D0=0;try{Go.decode(R0,{stream:!0}),D0=1}catch{}var F0=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return{s:e,r:hh(i,t-1)};r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function I0(i,e){var t;if(Go)return Go.decode(i);var n=F0(i),r=n.s,t=n.r;return t.length&&Ln(8),r}const fh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const ph=([i,e,t])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",i);return Object.keys(e).forEach(r=>{n.setAttribute(r,String(e[r]))}),t?.length&&t.forEach(r=>{const a=ph(r);n.appendChild(a)}),n},U0=(i,e={})=>{const n={...fh,...e};return ph(["svg",n,i])};const N0=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const O0=(...i)=>i.filter((e,t,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===t).join(" ").trim();const k0=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase());const B0=i=>{const e=k0(i);return e.charAt(0).toUpperCase()+e.slice(1)};const z0=i=>Array.from(i.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),Xc=i=>typeof i=="string"?i:!i||!i.class?"":i.class&&typeof i.class=="string"?i.class.split(" "):i.class&&Array.isArray(i.class)?i.class:"",qc=(i,{nameAttr:e,icons:t,attrs:n})=>{const r=i.getAttribute(e);if(r==null)return;const a=B0(r),l=t[a];if(!l)return console.warn(`${i.outerHTML} icon name was not found in the provided icons object.`);const u=z0(i),d=N0(u)?{}:{"aria-hidden":"true"},f={...fh,"data-lucide":r,...d,...n,...u},m=Xc(u),g=Xc(n),p=O0("lucide",`lucide-${r}`,...m,...g);p&&Object.assign(f,{class:p});const v=U0(l,f);return i.parentNode?.replaceChild(v,i)};const G0=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];const V0=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"}],["circle",{cx:"12",cy:"13",r:"3"}]];const H0=[["path",{d:"m6 9 6 6 6-6"}]];const W0=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];const $0=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];const X0=[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]];const q0=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]];const j0=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]];const Y0=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];const K0=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]];const J0=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];const Z0=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];const Q0=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];const e_=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];const t_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]];const n_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]];const i_=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];const mh=({icons:i={},nameAttr:e="data-lucide",attrs:t={},root:n=document,inTemplates:r}={})=>{if(!Object.values(i).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof n>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(n.querySelectorAll(`[${e}]`)).forEach(l=>qc(l,{nameAttr:e,icons:i,attrs:t})),r&&Array.from(n.querySelectorAll("template")).forEach(u=>mh({icons:i,nameAttr:e,attrs:t,root:u.content,inTemplates:r})),e==="data-lucide"){const l=n.querySelectorAll("[icon-name]");l.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(l).forEach(u=>qc(u,{nameAttr:"icon-name",icons:i,attrs:t})))}},r_={eval_every_n_laps:3,blend:[1,1,1,1],al_min:.3,al_max:1},s_={num_levels:30,t_min:1.5,sigma:1.5,temperature:1,alpha:.8,beta:.15},a_={sigmoid_temperature:2786.9996,sigmoid_offset:-2357.8374},o_={gate_target_s:5,T_p_lb:.5,dL_min:-30,dL_max:10,max_L:95,w1:.5,w2:.5,num_gates_update:6,alpha_fast:4,alpha_slow:1},l_={min_gate_s:.5},c_=7,sn={coaching:r_,belief:s_,l2c:a_,rbf:o_,gate_progress:l_,gate_timeout:c_},gh=sn,Ur={mia:"MIA",rbf:"RBF",l2c:"AI Coaching"},Rr=(i,e,t)=>Math.min(t,Math.max(e,i)),jc=i=>1/(1+Math.exp(-Rr((i+sn.l2c.sigmoid_offset)/sn.l2c.sigmoid_temperature,-80,80)));class u_{constructor(e=12){this.levels=sn.belief.num_levels,this.probabilities=Array.from({length:e},()=>Array.from({length:this.levels},(t,n)=>n===0?.99:.01/(this.levels-1)))}update(e,t){if(!Number.isInteger(e)||!this.probabilities[e]||!Number.isFinite(t)||t<0)throw new Error("Invalid gate observation");const{t_min:n,sigma:r,temperature:a,alpha:l,beta:u}=sn.belief,d=this.probabilities[e],f=d.map((v,b)=>{const C=sn.gate_timeout-(sn.gate_timeout-n)*b/(this.levels-1);return Math.log(Math.max(v,1e-12))-.5*((t-C)/r)**2*a}),m=Math.max(...f),g=f.map(v=>Math.exp(v-m)),p=g.reduce((v,b)=>v+b,0);return this.probabilities[e]=g.map((v,b)=>l*v/p+u*d[b]+(1-l-u)/this.levels),this.probabilities[e]}level(e){const t=this.probabilities[e];return t.indexOf(Math.max(...t))}skill(e){return this.level(e)/(this.levels-1)}}function h_(i,e,t,n=12){const r=sn.rbf;if(t<r.T_p_lb)return e;if(!Number.isFinite(t)||!Number.isInteger(i)||i<1||e<0||e>1)throw new Error("Invalid fading observation");const a=t-r.gate_target_s*n,l=Rr((a<=0?r.alpha_fast:r.alpha_slow)*a,r.dL_min,r.dL_max),u=12+Math.atanh(Rr(r.max_L/50-1,-.9999,.9999))/-.165-1,d=i+u,f=50*(Math.tanh(-.165*(d-12))+1),m=Math.max(40*(Math.tanh(-.17*(d-12))+1)-5,0),g=50*(Math.tanh(-.175*(d-14.5))+1);return Rr(Rr(r.w1*(e*100+l)+r.w2*f,m,g),0,r.max_L)/100}class d_{constructor(e=12,t=!1){this.gates=e,this.forceAlwaysEval=t,this.active=t,this.recovery=!1,this.recoveryTarget=null,this.coachingLaps=0,this.passed=0}onBoundary(){this.active||(this.coachingLaps++,this.coachingLaps>sn.coaching.eval_every_n_laps&&(this.active=!0,this.passed=0,this.coachingLaps=0))}blend(e){return this.recovery?.95:this.active?sn.coaching.al_min:Rr(e,sn.coaching.al_min,sn.coaching.al_max)}onPass(e,t,n){return this.active&&!this.recovery&&t!==null&&t>=sn.gate_progress.min_gate_s&&n.update(e,t),this.recovery&&e===this.recoveryTarget&&(this.recovery=!1,this.recoveryTarget=null),!this.forceAlwaysEval&&this.active&&!this.recovery&&++this.passed>=this.gates?(this.active=!1,this.passed=0,!0):!1}onFailure(e,t){!this.active||this.recovery||(t.update(e,sn.gate_timeout),this.recovery=!0,this.recoveryTarget=e)}}class f_{constructor(e,t=12,n=1){if(!Object.hasOwn(Ur,e))throw new Error("Invalid HCI method");if(![0,1,2].includes(n))throw new Error("Invalid HCI stage");this.method=e,this.stage=n,this.gates=t,this.belief=new u_(t),this.evaluation=new d_(t,n!==1),this.time=0,this.lastPass=null,this.lapStart=null,this.lapNumber=0,this.laps=0,this.lastLap=0,this.passes=0,this.failures=0,this.lapGates=new Set,this.rbfAlpha=sn.rbf.max_L/100,this.rbfUpdates=0,this.beliefUpdates=0}tick(e){this.time+=e}onPass(e){let t=this.lastPass===null?null:this.time-this.lastPass,n=!1;return e!==0&&this.lapStart!==null&&this.lapGates.add(e),e===0&&(this.lapStart===null||this.lapGates.size===this.gates-1)&&(this.lapStart!==null&&(this.lastLap=this.time-this.lapStart,this.laps++,n=!0),this.lapStart=this.time,this.lapGates.clear(),this.lapNumber++,this.evaluation.onBoundary(),t=0),this.evaluation.active&&!this.evaluation.recovery&&t!==null&&t>=sn.gate_progress.min_gate_s&&this.beliefUpdates++,this.evaluation.onPass(e,t,this.belief),this.passes++,this.lastPass=this.time,this.method==="rbf"&&!this.evaluation.active&&this.laps>0&&this.passes>this.gates&&this.passes%sn.rbf.num_gates_update===0&&(this.rbfAlpha=h_(this.lapNumber,this.rbfAlpha,this.lastLap,this.gates),this.rbfUpdates++),{lapComplete:n,lapSeconds:this.lastLap}}onFailure(e){this.evaluation.active&&!this.evaluation.recovery&&this.beliefUpdates++,this.evaluation.onFailure(e,this.belief),this.failures++,this.lastPass=null}snapshot(e){return{method:this.method,stage:this.stage,phase:this.evaluation.recovery?"recovery":this.evaluation.active?"evaluation":"coaching",time:this.time,lapTime:this.lapStart===null?this.time:this.time-this.lapStart,skillLevel:this.belief.level(e),skill:this.belief.skill(e),beliefUpdates:this.beliefUpdates,rbfAlpha:this.rbfAlpha,rbfUpdates:this.rbfUpdates,laps:this.laps,passes:this.passes,failures:this.failures}}}const Mn=(i,e=-1,t=1)=>Math.min(t,Math.max(e,i)),as=([i,e,t,n])=>[1-2*(t*t+n*n),2*(e*t-i*n),2*(e*n+i*t),2*(e*t+i*n),1-2*(e*e+n*n),2*(t*n-i*e),2*(e*n-i*t),2*(t*n+i*e),1-2*(e*e+t*t)],Yc=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]],Kc=(i,e)=>[i[0]*e[0]+i[3]*e[1]+i[6]*e[2],i[1]*e[0]+i[4]*e[1]+i[7]*e[2],i[2]*e[0]+i[5]*e[1]+i[8]*e[2]];class p_{constructor(e){this.source=e,this.metadata=e.metadata}predict(e,t=!0){let n=Float32Array.from(e);if(n.length!==this.source.w0[0].length||!n.every(Number.isFinite))throw new Error("Invalid policy observation");for(let r=0;r<3;r++){const a=this.source[`w${r}`],l=this.source[`b${r}`],u=new Float32Array(a.length);for(let d=0;d<a.length;d++){let f=l[d];for(let m=0;m<n.length;m++)f+=a[d][m]*n[m];u[d]=r<2&&f<0?Math.expm1(f):f}n=u}return Array.from(n,r=>t?Mn(r):r)}}class m_{constructor(e,t,n,r){this.mj=e;const a=new e.MjVFS;a.addBuffer("scene.mjb",t),this.model=e.MjModel.from_binary_path("scene.mjb",a),a.delete(),this.data=new e.MjData(this.model),this.contactForce=new e.DoubleBuffer(6);const l=this.model.body("drone");this.bodyId=l.id,l.delete();const u=this.model.geom("drone_collision");this.collisionId=u.id,u.delete(),this.gates=n.gates.map(d=>d.map(Math.fround)),this.policies=Object.fromEntries(Object.entries(r).map(([d,f])=>[d,new p_(f)])),this.weight=this.model.body_mass.reduce((d,f)=>d+f,0)*9.81,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.mode="expert",this.alpha=.8,this.skill=0,this.effectiveAlpha=1,this.coaching=null,this.reset()}get position(){return Array.from(this.data.qpos.subarray(0,3))}get quaternion(){return Array.from(this.data.qpos.subarray(3,7))}setMode(e,t=1){if(Object.hasOwn(Ur,e)){this.startBaseline(e,t);return}if(e==="uncoached"){this.startNoCoach();return}if(!["expert","assisted","manual","coach","tracking"].includes(e))throw new Error("Invalid flight mode");this.mode=e,this.coaching=null}startBaseline(e,t=1){const n=new f_(e,this.gates.length,t);this.mode=e,this.coaching=n,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.effectiveAlpha=e==="rbf"?gh.rbf.max_L/100:1,this.reset(),this.lastAction=this.action()}startFixedAssistance(e){if(!Number.isFinite(e)||e<0||e>1)throw new Error("Invalid demonstration blend");this.mode="assisted",this.coaching=null,this.alpha=e,this.effectiveAlpha=e,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.reset(),this.lastAction=this.action()}startNoCoach(){this.mode="uncoached",this.coaching=null,this.effectiveAlpha=0,this.totalGates=0,this.failures=0,this.laps=0,this.lastLap=0,this.bestLap=null,this.reset(),this.lastAction=this.action()}recover(){this.reset((this.gate+this.gates.length-1)%this.gates.length)}gateCoordinates(e,t=this.gate){const n=this.gates[t],r=e[0]-n[0],a=e[1]-n[1],l=Math.cos(n[5]),u=Math.sin(n[5]);return[l*r+u*a,-u*r+l*a,e[2]-n[2]]}reset(e=0,t=0){const n=this.mj,r=this.data,a=this.gates[e];n.mj_resetData(this.model,r),this.gate=e,r.qpos.set([a[0]+6*Math.cos(a[5]),a[1]+6*Math.sin(a[5]),a[2]],0);let l=a[5]+Math.PI+t;l=((l+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,r.qpos.set([Math.cos(l/2),0,0,Math.sin(l/2)],3),r.qvel.set([200,-200,200,-200],6),this.motors=[0,0,0,0],this.integral=[0,0,0],this.previousOmega=[0,0,0],this.steps=0,this.gatesPassed=0,this.lastGateTime=0,this.crashes=0,this.lapStart=null,n.mj_forward(this.model,r),this.previousPosition=this.position,this.cachedGate=this.gateCoordinates(this.position),this.lastAction=[-1+2/3.15,0,0,0],this.lastHuman=[0,0,0,0]}observation(){const e=this.data.qvel;return Float32Array.from([...e.subarray(3,6),...this.position,...Kc(as(this.quaternion),e.subarray(0,3)),...this.quaternion,...this.cachedGate,this.gates[this.gate][5]])}controller(e){const t=Array.from(this.data.qvel.subarray(3,6)),n=Kc(as(this.quaternion),this.data.qvel.subarray(0,3)),r=[250,250,120],a=[500,500,16.7],l=[2.5,2.5,0],u=[33.3,33.3,166.7],d=[16572e-9,16656e-9,29262e-9],f=t.map((L,O)=>{const R=e[O+1]*(O===2?200:100)*Math.PI/180-L;this.integral[O]=Mn(this.integral[O]+R/250,-u[O],u[O]);const B=Math.abs(this.previousOmega[O])<1e-4?L:this.previousOmega[O];return d[O]*(r[O]*R+a[O]*this.integral[O]-l[O]*(L-B)*250)});this.previousOmega=t;const m=(e[0]+1)/2*this.weight*3.15,g=.043*Math.sqrt(2)/2,p=78e-11/23e-9,[v,b,C]=[f[0]/g,f[1]/g,f[2]/p],S=[m+v-b+C,m-v-b-C,m-v+b+C,m+v+b-C].map(L=>L/(4*23e-9));for(let L=0;L<4;L++){const O=Mn(Math.sign(S[L])*Math.sqrt(Math.abs(S[L])),0,2500);this.motors[L]=Mn(this.motors[L]+(O-this.motors[L])*.004/.005,0,2500)}const x=this.motors.map(L=>23e-9*L*L),F=this.motors.reduce((L,O)=>L+O,0),D=n.map((L,O)=>-F*[91785e-11,91785e-11,10311e-10][O]*L);return D[2]+=x.reduce((L,O)=>L+O,0),{force:D,moment:[g*(x[0]-x[1]-x[2]+x[3]),g*(-x[0]-x[1]+x[2]+x[3]),p*(x[0]-x[1]+x[2]-x[3])]}}action(e=[-1+2/3.15,0,0,0]){const t=this.observation(),n=this.policies.expert.predict(t),r=this.lastHuman;if(this.lastHuman=[...e],this.lastController=[...n],this.mode==="expert")return this.effectiveAlpha=1,n;if(this.mode==="uncoached")return this.effectiveAlpha=0,n.map((l,u)=>u===1||u===3?Mn(e[u]):l);if(this.mode==="manual")return this.effectiveAlpha=0,e.map(l=>Mn(l));if(this.mode==="tracking")return this.effectiveAlpha=1,this.policies.tracking.predict([...t,e[1],e[3]]);if(this.coaching){const l=this.mode==="mia"?this.policies.tracking.predict([...t,r[1],r[3]]):n;this.lastController=[...l];let u=this.mode==="rbf"?this.coaching.rbfAlpha:1;return this.mode==="l2c"&&(u=jc(this.policies.coach.predict([...t,this.coaching.belief.skill(this.gate)],!1)[0])),this.effectiveAlpha=this.coaching.evaluation.blend(u),l.map((d,f)=>f===1||f===3?Mn(this.effectiveAlpha*d+(1-this.effectiveAlpha)*e[f]):d)}let a=this.alpha;if(this.mode==="coach"){const l=this.policies.coach.predict([...t,this.skill],!1)[0];a=jc(l)}return this.effectiveAlpha=Mn(a,this.mode==="assisted"?0:.3,1),n.map((l,u)=>u===1||u===3?Mn(this.effectiveAlpha*l+(1-this.effectiveAlpha)*e[u]):l)}step(e){if(e.length!==4||!e.every(Number.isFinite))throw new Error("Invalid action");e=Array.from(e,p=>Mn(p)),this.lastAction=e;const t=this.data,n=this.mj;for(let p=0;p<5;p++){const{force:v,moment:b}=this.controller(e),C=as(this.quaternion);t.xfrc_applied.fill(0),t.xfrc_applied.set([...Yc(C,v),...Yc(C,b)],this.bodyId*6),n.mj_step(this.model,t),n.mj_forward(this.model,t)}this.steps++,this.coaching?.tick(.02);const r=this.steps*.02,a=this.position;this.cachedGate=this.gateCoordinates(a);const l=this.crashes?"Contact":a[2]>6||a[2]<.1&&r>1.5?"Altitude":r-this.lastGateTime>7?"Gate timeout":"",u=this.gateCoordinates(this.previousPosition),d=this.cachedGate,f=d[0]-u[0],m=-u[0]/(f+1e-8),g=f<-1e-6&&Math.hypot(...a.map((p,v)=>p-this.previousPosition[v]))>1e-6&&m>=0&&m<=1&&Math.abs(u[1]+m*(d[1]-u[1]))<=.5&&Math.abs(u[2]+m*(d[2]-u[2]))<=.5;if(g){const p=this.coaching?.onPass(this.gate);this.gate=(this.gate+1)%12,this.totalGates++,this.gatesPassed++,this.lastGateTime=r,p?.lapComplete&&(this.lastLap=p.lapSeconds,this.laps=this.coaching.laps,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap)),!this.coaching&&this.gate===1&&(this.lapStart!==null&&(this.lastLap=r-this.lapStart,this.laps++,this.bestLap=Math.min(this.bestLap??1/0,this.lastLap)),this.lapStart=r)}if(this.previousPosition=a,this.steps>100&&t.ncon){const p=t.contact;for(let v=0;v<t.ncon;v++){const b=p.get(v),C=b.geom1===this.collisionId||b.geom2===this.collisionId;if(b.delete(),C){n.mj_contactForce(this.model,t,v,this.contactForce);const S=this.contactForce.GetView();this.crashes+=Math.hypot(...S.subarray(0,3))>1e-8?1:0;break}}p.delete()}return l&&(this.failures++,this.coaching?.onFailure(this.gate)),{crossed:g,failed:!!l,cause:l}}snapshot(){return{mode:this.mode,steps:this.steps,position:this.position,gates:this.totalGates,target:this.gate,laps:this.laps,failures:this.failures,alpha:this.effectiveAlpha,coaching:this.coaching?.snapshot(this.gate)??null}}dispose(){this.contactForce.delete(),this.data.delete(),this.model.delete()}}const Ul="183",g_=0,Jc=1,__=2,os=1,v_=2,is=3,Ni=0,xn=1,wn=2,gi=0,Lr=1,Zc=2,Qc=3,eu=4,x_=5,tr=100,y_=101,S_=102,M_=103,b_=104,E_=200,w_=201,T_=202,A_=203,Vo=204,Ho=205,C_=206,R_=207,P_=208,L_=209,D_=210,F_=211,I_=212,U_=213,N_=214,Wo=0,$o=1,Xo=2,Nr=3,qo=4,jo=5,Yo=6,Ko=7,_h=0,O_=1,k_=2,ii=0,vh=1,xh=2,yh=3,Nl=4,Sh=5,Mh=6,bh=7,Eh=300,or=301,Or=302,Qa=303,eo=304,wa=306,hs=1e3,pi=1001,Jo=1002,an=1003,B_=1004,qs=1005,dn=1006,to=1007,rr=1008,Tn=1009,wh=1010,Th=1011,ds=1012,Ol=1013,si=1014,Qn=1015,vi=1016,kl=1017,Bl=1018,fs=1020,Ah=35902,Ch=35899,Rh=1021,Ph=1022,Gn=1023,xi=1026,sr=1027,Lh=1028,zl=1029,kr=1030,Gl=1031,Vl=1033,ga=33776,_a=33777,va=33778,xa=33779,Zo=35840,Qo=35841,el=35842,tl=35843,nl=36196,il=37492,rl=37496,sl=37488,al=37489,ol=37490,ll=37491,cl=37808,ul=37809,hl=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,vl=37817,xl=37818,yl=37819,Sl=37820,Ml=37821,bl=36492,El=36494,wl=36495,Tl=36283,Al=36284,Cl=36285,Rl=36286,z_=3200,Dh=0,G_=1,Fi="",rn="srgb",Br="srgb-linear",Sa="linear",Pt="srgb",fr=7680,tu=519,V_=512,H_=513,W_=514,Hl=515,$_=516,X_=517,Wl=518,q_=519,nu=35044,iu="300 es",ei=2e3,ps=2001;function j_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Y_(){const i=ms("canvas");return i.style.display="block",i}const ru={};function su(...i){const e="THREE."+i.shift();console.log(e,...i)}function Fh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=Fh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function St(...i){i=Fh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ma(...i){const e=i.join(" ");e in ru||(ru[e]=!0,Qe(...i))}function K_(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const J_={[Wo]:$o,[Xo]:Yo,[qo]:Ko,[Nr]:jo,[$o]:Wo,[Yo]:Xo,[Ko]:qo,[jo]:Nr};class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,ba=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Z_(i,e){return(i%e+e)%e}function io(i,e,t){return(1-t)*i+t*e}function Yr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ti{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,u){let d=n[r+0],f=n[r+1],m=n[r+2],g=n[r+3],p=a[l+0],v=a[l+1],b=a[l+2],C=a[l+3];if(g!==C||d!==p||f!==v||m!==b){let S=d*p+f*v+m*b+g*C;S<0&&(p=-p,v=-v,b=-b,C=-C,S=-S);let x=1-u;if(S<.9995){const F=Math.acos(S),D=Math.sin(F);x=Math.sin(x*F)/D,u=Math.sin(u*F)/D,d=d*x+p*u,f=f*x+v*u,m=m*x+b*u,g=g*x+C*u}else{d=d*x+p*u,f=f*x+v*u,m=m*x+b*u,g=g*x+C*u;const F=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=F,f*=F,m*=F,g*=F}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,l){const u=n[r],d=n[r+1],f=n[r+2],m=n[r+3],g=a[l],p=a[l+1],v=a[l+2],b=a[l+3];return e[t]=u*b+m*g+d*v-f*p,e[t+1]=d*b+m*p+f*g-u*v,e[t+2]=f*b+m*v+u*p-d*g,e[t+3]=m*b-u*g-d*p-f*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,u=Math.cos,d=Math.sin,f=u(n/2),m=u(r/2),g=u(a/2),p=d(n/2),v=d(r/2),b=d(a/2);switch(l){case"XYZ":this._x=p*m*g+f*v*b,this._y=f*v*g-p*m*b,this._z=f*m*b+p*v*g,this._w=f*m*g-p*v*b;break;case"YXZ":this._x=p*m*g+f*v*b,this._y=f*v*g-p*m*b,this._z=f*m*b-p*v*g,this._w=f*m*g+p*v*b;break;case"ZXY":this._x=p*m*g-f*v*b,this._y=f*v*g+p*m*b,this._z=f*m*b+p*v*g,this._w=f*m*g-p*v*b;break;case"ZYX":this._x=p*m*g-f*v*b,this._y=f*v*g+p*m*b,this._z=f*m*b-p*v*g,this._w=f*m*g+p*v*b;break;case"YZX":this._x=p*m*g+f*v*b,this._y=f*v*g+p*m*b,this._z=f*m*b-p*v*g,this._w=f*m*g-p*v*b;break;case"XZY":this._x=p*m*g-f*v*b,this._y=f*v*g-p*m*b,this._z=f*m*b+p*v*g,this._w=f*m*g+p*v*b;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],u=t[5],d=t[9],f=t[2],m=t[6],g=t[10],p=n+u+g;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(m-d)*v,this._y=(a-f)*v,this._z=(l-r)*v}else if(n>u&&n>g){const v=2*Math.sqrt(1+n-u-g);this._w=(m-d)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+f)/v}else if(u>g){const v=2*Math.sqrt(1+u-n-g);this._w=(a-f)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(d+m)/v}else{const v=2*Math.sqrt(1+g-n-u);this._w=(l-r)/v,this._x=(a+f)/v,this._y=(d+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,u=t._x,d=t._y,f=t._z,m=t._w;return this._x=n*m+l*u+r*f-a*d,this._y=r*m+l*d+a*u-n*f,this._z=a*m+l*f+n*d-r*u,this._w=l*m-n*u-r*d-a*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,u=this.dot(e);u<0&&(n=-n,r=-r,a=-a,l=-l,u=-u);let d=1-t;if(u<.9995){const f=Math.acos(u),m=Math.sin(f);d=Math.sin(d*f)/m,t=Math.sin(t*f)/m,this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+l*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,u=e.z,d=e.w,f=2*(l*r-u*n),m=2*(u*t-a*r),g=2*(a*n-l*t);return this.x=t+d*f+l*g-u*m,this.y=n+d*m+u*f-a*g,this.z=r+d*g+a*m-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,u=t.y,d=t.z;return this.x=r*d-a*u,this.y=a*l-n*d,this.z=n*u-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new W,au=new ti;class st{constructor(e,t,n,r,a,l,u,d,f){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,u,d,f)}set(e,t,n,r,a,l,u,d,f){const m=this.elements;return m[0]=e,m[1]=r,m[2]=u,m[3]=t,m[4]=a,m[5]=d,m[6]=n,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],u=n[3],d=n[6],f=n[1],m=n[4],g=n[7],p=n[2],v=n[5],b=n[8],C=r[0],S=r[3],x=r[6],F=r[1],D=r[4],L=r[7],O=r[2],R=r[5],B=r[8];return a[0]=l*C+u*F+d*O,a[3]=l*S+u*D+d*R,a[6]=l*x+u*L+d*B,a[1]=f*C+m*F+g*O,a[4]=f*S+m*D+g*R,a[7]=f*x+m*L+g*B,a[2]=p*C+v*F+b*O,a[5]=p*S+v*D+b*R,a[8]=p*x+v*L+b*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8];return t*l*m-t*u*f-n*a*m+n*u*d+r*a*f-r*l*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=m*l-u*f,p=u*d-m*a,v=f*a-l*d,b=t*g+n*p+r*v;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=g*C,e[1]=(r*f-m*n)*C,e[2]=(u*n-r*l)*C,e[3]=p*C,e[4]=(m*t-r*d)*C,e[5]=(r*a-u*t)*C,e[6]=v*C,e[7]=(n*d-f*t)*C,e[8]=(l*t-n*a)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,u){const d=Math.cos(a),f=Math.sin(a);return this.set(n*d,n*f,-n*(d*l+f*u)+l+e,-r*f,r*d,-r*(-f*l+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new st,ou=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q_(){const i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Pt&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Pt&&(r.r=Dr(r.r),r.g=Dr(r.g),r.b=Dr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?Sa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:e,whitePoint:n,transfer:Sa,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const Mt=Q_();function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pr;class ev{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pr===void 0&&(pr=ms("canvas")),pr.width=e.width,pr.height=e.height;const r=pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=_i(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tv=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?a.push(ao(r[l].image)):a.push(ao(r[l]))}else a=ao(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ev.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let nv=0;const oo=new W;class on extends Vr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=pi,r=pi,a=dn,l=rr,u=Gn,d=Tn,f=on.DEFAULT_ANISOTROPY,m=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=ys(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oo).x}get height(){return this.source.getSize(oo).y}get depth(){return this.source.getSize(oo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Eh;on.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,n=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,f=d[0],m=d[4],g=d[8],p=d[1],v=d[5],b=d[9],C=d[2],S=d[6],x=d[10];if(Math.abs(m-p)<.01&&Math.abs(g-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(m+p)<.1&&Math.abs(g+C)<.1&&Math.abs(b+S)<.1&&Math.abs(f+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(f+1)/2,L=(v+1)/2,O=(x+1)/2,R=(m+p)/4,B=(g+C)/4,A=(b+S)/4;return D>L&&D>O?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=R/n,a=B/n):L>O?L<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(L),n=R/r,a=A/r):O<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(O),n=B/a,r=A/a),this.set(n,r,a,t),this}let F=Math.sqrt((S-b)*(S-b)+(g-C)*(g-C)+(p-m)*(p-m));return Math.abs(F)<.001&&(F=1),this.x=(S-b)/F,this.y=(g-C)/F,this.z=(p-m)/F,this.w=Math.acos((f+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iv extends Vr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new on(r),l=n.count;for(let u=0;u<l;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $l(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends iv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ih extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rv extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e,t,n,r,a,l,u,d,f,m,g,p,v,b,C,S){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,u,d,f,m,g,p,v,b,C,S)}set(e,t,n,r,a,l,u,d,f,m,g,p,v,b,C,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=a,x[5]=l,x[9]=u,x[13]=d,x[2]=f,x[6]=m,x[10]=g,x[14]=p,x[3]=v,x[7]=b,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),a=1/mr.setFromMatrixColumn(e,1).length(),l=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(r),f=Math.sin(r),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const p=l*m,v=l*g,b=u*m,C=u*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=v+b*f,t[5]=p-C*f,t[9]=-u*d,t[2]=C-p*f,t[6]=b+v*f,t[10]=l*d}else if(e.order==="YXZ"){const p=d*m,v=d*g,b=f*m,C=f*g;t[0]=p+C*u,t[4]=b*u-v,t[8]=l*f,t[1]=l*g,t[5]=l*m,t[9]=-u,t[2]=v*u-b,t[6]=C+p*u,t[10]=l*d}else if(e.order==="ZXY"){const p=d*m,v=d*g,b=f*m,C=f*g;t[0]=p-C*u,t[4]=-l*g,t[8]=b+v*u,t[1]=v+b*u,t[5]=l*m,t[9]=C-p*u,t[2]=-l*f,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const p=l*m,v=l*g,b=u*m,C=u*g;t[0]=d*m,t[4]=b*f-v,t[8]=p*f+C,t[1]=d*g,t[5]=C*f+p,t[9]=v*f-b,t[2]=-f,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const p=l*d,v=l*f,b=u*d,C=u*f;t[0]=d*m,t[4]=C-p*g,t[8]=b*g+v,t[1]=g,t[5]=l*m,t[9]=-u*m,t[2]=-f*m,t[6]=v*g+b,t[10]=p-C*g}else if(e.order==="XZY"){const p=l*d,v=l*f,b=u*d,C=u*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=p*g+C,t[5]=l*m,t[9]=v*g-b,t[2]=b*g-v,t[6]=u*m,t[10]=C*g+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sv,e,av)}lookAt(e,t,n){const r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ai.crossVectors(n,yn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ai.crossVectors(n,yn)),Ai.normalize(),js.crossVectors(yn,Ai),r[0]=Ai.x,r[4]=js.x,r[8]=yn.x,r[1]=Ai.y,r[5]=js.y,r[9]=yn.y,r[2]=Ai.z,r[6]=js.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],u=n[4],d=n[8],f=n[12],m=n[1],g=n[5],p=n[9],v=n[13],b=n[2],C=n[6],S=n[10],x=n[14],F=n[3],D=n[7],L=n[11],O=n[15],R=r[0],B=r[4],A=r[8],I=r[12],k=r[1],z=r[5],Y=r[9],Z=r[13],K=r[2],ie=r[6],J=r[10],ne=r[14],Se=r[3],pe=r[7],Le=r[11],Ne=r[15];return a[0]=l*R+u*k+d*K+f*Se,a[4]=l*B+u*z+d*ie+f*pe,a[8]=l*A+u*Y+d*J+f*Le,a[12]=l*I+u*Z+d*ne+f*Ne,a[1]=m*R+g*k+p*K+v*Se,a[5]=m*B+g*z+p*ie+v*pe,a[9]=m*A+g*Y+p*J+v*Le,a[13]=m*I+g*Z+p*ne+v*Ne,a[2]=b*R+C*k+S*K+x*Se,a[6]=b*B+C*z+S*ie+x*pe,a[10]=b*A+C*Y+S*J+x*Le,a[14]=b*I+C*Z+S*ne+x*Ne,a[3]=F*R+D*k+L*K+O*Se,a[7]=F*B+D*z+L*ie+O*pe,a[11]=F*A+D*Y+L*J+O*Le,a[15]=F*I+D*Z+L*ne+O*Ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],u=e[5],d=e[9],f=e[13],m=e[2],g=e[6],p=e[10],v=e[14],b=e[3],C=e[7],S=e[11],x=e[15],F=d*v-f*p,D=u*v-f*g,L=u*p-d*g,O=l*v-f*m,R=l*p-d*m,B=l*g-u*m;return t*(C*F-S*D+x*L)-n*(b*F-S*O+x*R)+r*(b*D-C*O+x*B)-a*(b*L-C*R+S*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=e[9],p=e[10],v=e[11],b=e[12],C=e[13],S=e[14],x=e[15],F=t*u-n*l,D=t*d-r*l,L=t*f-a*l,O=n*d-r*u,R=n*f-a*u,B=r*f-a*d,A=m*C-g*b,I=m*S-p*b,k=m*x-v*b,z=g*S-p*C,Y=g*x-v*C,Z=p*x-v*S,K=F*Z-D*Y+L*z+O*k-R*I+B*A;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/K;return e[0]=(u*Z-d*Y+f*z)*ie,e[1]=(r*Y-n*Z-a*z)*ie,e[2]=(C*B-S*R+x*O)*ie,e[3]=(p*R-g*B-v*O)*ie,e[4]=(d*k-l*Z-f*I)*ie,e[5]=(t*Z-r*k+a*I)*ie,e[6]=(S*L-b*B-x*D)*ie,e[7]=(m*B-p*L+v*D)*ie,e[8]=(l*Y-u*k+f*A)*ie,e[9]=(n*k-t*Y-a*A)*ie,e[10]=(b*R-C*L+x*F)*ie,e[11]=(g*L-m*R-v*F)*ie,e[12]=(u*I-l*z-d*A)*ie,e[13]=(t*z-n*I+r*A)*ie,e[14]=(C*D-b*O-S*F)*ie,e[15]=(m*O-g*D+p*F)*ie,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,u=e.y,d=e.z,f=a*l,m=a*u;return this.set(f*l+n,f*u-r*d,f*d+r*u,0,f*u+r*d,m*u+n,m*d-r*l,0,f*d-r*u,m*d+r*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,u=t._z,d=t._w,f=a+a,m=l+l,g=u+u,p=a*f,v=a*m,b=a*g,C=l*m,S=l*g,x=u*g,F=d*f,D=d*m,L=d*g,O=n.x,R=n.y,B=n.z;return r[0]=(1-(C+x))*O,r[1]=(v+L)*O,r[2]=(b-D)*O,r[3]=0,r[4]=(v-L)*R,r[5]=(1-(p+x))*R,r[6]=(S+F)*R,r[7]=0,r[8]=(b+D)*B,r[9]=(S-F)*B,r[10]=(1-(p+C))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let l=mr.set(r[0],r[1],r[2]).length();const u=mr.set(r[4],r[5],r[6]).length(),d=mr.set(r[8],r[9],r[10]).length();a<0&&(l=-l),On.copy(this);const f=1/l,m=1/u,g=1/d;return On.elements[0]*=f,On.elements[1]*=f,On.elements[2]*=f,On.elements[4]*=m,On.elements[5]*=m,On.elements[6]*=m,On.elements[8]*=g,On.elements[9]*=g,On.elements[10]*=g,t.setFromRotationMatrix(On),n.x=l,n.y=u,n.z=d,this}makePerspective(e,t,n,r,a,l,u=ei,d=!1){const f=this.elements,m=2*a/(t-e),g=2*a/(n-r),p=(t+e)/(t-e),v=(n+r)/(n-r);let b,C;if(d)b=a/(l-a),C=l*a/(l-a);else if(u===ei)b=-(l+a)/(l-a),C=-2*l*a/(l-a);else if(u===ps)b=-l/(l-a),C=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=m,f[4]=0,f[8]=p,f[12]=0,f[1]=0,f[5]=g,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=C,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,a,l,u=ei,d=!1){const f=this.elements,m=2/(t-e),g=2/(n-r),p=-(t+e)/(t-e),v=-(n+r)/(n-r);let b,C;if(d)b=1/(l-a),C=l/(l-a);else if(u===ei)b=-2/(l-a),C=-(l+a)/(l-a);else if(u===ps)b=-1/(l-a),C=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=m,f[4]=0,f[8]=0,f[12]=p,f[1]=0,f[5]=g,f[9]=0,f[13]=v,f[2]=0,f[6]=0,f[10]=b,f[14]=C,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mr=new W,On=new Ft,sv=new W(0,0,0),av=new W(1,1,1),Ai=new W,js=new W,yn=new W,cu=new Ft,uu=new ti;class ai{constructor(e=0,t=0,n=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],u=r[8],d=r[1],f=r[5],m=r[9],g=r[2],p=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,v),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ov=0;const hu=new W,gr=new ti,ci=new Ft,Ys=new W,Kr=new W,lv=new W,cv=new ti,du=new W(1,0,0),fu=new W(0,1,0),pu=new W(0,0,1),mu={type:"added"},uv={type:"removed"},_r={type:"childadded",child:null},lo={type:"childremoved",child:null};class Kt extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new W,t=new ai,n=new ti,r=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new st}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Kr,Ys,this.up):ci.lookAt(Ys,Kr,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(ci),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),_r.child=e,this.dispatchEvent(_r),_r.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uv),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,cv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(u=>({...u})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));r.material=u}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];r.animations.push(a(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),f=l(e.textures),m=l(e.images),g=l(e.shapes),p=l(e.skeletons),v=l(e.animations),b=l(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),p.length>0&&(n.skeletons=p),v.length>0&&(n.animations=v),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(u){const d=[];for(const f in u){const m=u[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new W(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ni extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hv={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,n),x=this._getHandJoint(f,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],p=m.position.distanceTo(g.position),v=.02,b=.005;f.inputState.pinching&&p>v+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&p<=v-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return u!==null&&(u.visible=r!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Mt.workingColorSpace){if(e=Z_(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=uo(l,a,e+1/3),this.g=uo(l,a,e),this.b=uo(l,a,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function n(a){a!==void 0&&parseFloat(a)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=Uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Mt.workingToColorSpace(hn.copy(this),e),Math.round(dt(hn.r*255,0,255))*65536+Math.round(dt(hn.g*255,0,255))*256+Math.round(dt(hn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(hn.copy(this),t);const n=hn.r,r=hn.g,a=hn.b,l=Math.max(n,r,a),u=Math.min(n,r,a);let d,f;const m=(u+l)/2;if(u===l)d=0,f=0;else{const g=l-u;switch(f=m<=.5?g/(l+u):g/(2-l-u),l){case n:d=(r-a)/g+(r<a?6:0);break;case r:d=(a-n)/g+2;break;case a:d=(n-r)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=rn){Mt.workingToColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,r=hn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Ks);const n=io(Ci.h,Ks.h,t),r=io(Ci.s,Ks.s,t),a=io(Ci.l,Ks.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new at;at.NAMES=Uh;class dv extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kn=new W,ui=new W,ho=new W,hi=new W,vr=new W,xr=new W,gu=new W,fo=new W,po=new W,mo=new W,go=new Gt,_o=new Gt,vo=new Gt;class zn{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kn.subVectors(e,t),r.cross(kn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){kn.subVectors(r,t),ui.subVectors(n,t),ho.subVectors(e,t);const l=kn.dot(kn),u=kn.dot(ui),d=kn.dot(ho),f=ui.dot(ui),m=ui.dot(ho),g=l*f-u*u;if(g===0)return a.set(0,0,0),null;const p=1/g,v=(f*d-u*m)*p,b=(l*m-u*d)*p;return a.set(1-v-b,b,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,r,a,l,u,d){return this.getBarycoord(e,t,n,r,hi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,hi.x),d.addScaledVector(l,hi.y),d.addScaledVector(u,hi.z),d)}static getInterpolatedAttribute(e,t,n,r,a,l){return go.setScalar(0),_o.setScalar(0),vo.setScalar(0),go.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),vo.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(go,a.x),l.addScaledVector(_o,a.y),l.addScaledVector(vo,a.z),l}static isFrontFacing(e,t,n,r){return kn.subVectors(n,t),ui.subVectors(e,t),kn.cross(ui).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),kn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,u;vr.subVectors(r,n),xr.subVectors(a,n),fo.subVectors(e,n);const d=vr.dot(fo),f=xr.dot(fo);if(d<=0&&f<=0)return t.copy(n);po.subVectors(e,r);const m=vr.dot(po),g=xr.dot(po);if(m>=0&&g<=m)return t.copy(r);const p=d*g-m*f;if(p<=0&&d>=0&&m<=0)return l=d/(d-m),t.copy(n).addScaledVector(vr,l);mo.subVectors(e,a);const v=vr.dot(mo),b=xr.dot(mo);if(b>=0&&v<=b)return t.copy(a);const C=v*f-d*b;if(C<=0&&f>=0&&b<=0)return u=f/(f-b),t.copy(n).addScaledVector(xr,u);const S=m*b-v*g;if(S<=0&&g-m>=0&&v-b>=0)return gu.subVectors(a,r),u=(g-m)/(g-m+(v-b)),t.copy(r).addScaledVector(gu,u);const x=1/(S+C+p);return l=C*x,u=p*x,t.copy(n).addScaledVector(vr,l).addScaledVector(xr,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Oi{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=a.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,Bn):Bn.fromBufferAttribute(a,l),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jr),Zs.subVectors(this.max,Jr),yr.subVectors(e.a,Jr),Sr.subVectors(e.b,Jr),Mr.subVectors(e.c,Jr),Ri.subVectors(Sr,yr),Pi.subVectors(Mr,Sr),ji.subVectors(yr,Mr);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-ji.z,ji.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,ji.z,0,-ji.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-ji.y,ji.x,0];return!xo(t,yr,Sr,Mr,Zs)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,yr,Sr,Mr,Zs))?!1:(Qs.crossVectors(Ri,Pi),t=[Qs.x,Qs.y,Qs.z],xo(t,yr,Sr,Mr,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new W,new W,new W,new W,new W,new W,new W,new W],Bn=new W,Js=new Oi,yr=new W,Sr=new W,Mr=new W,Ri=new W,Pi=new W,ji=new W,Jr=new W,Zs=new W,Qs=new W,Yi=new W;function xo(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){Yi.fromArray(i,a);const u=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),d=e.dot(Yi),f=t.dot(Yi),m=n.dot(Yi);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>u)return!1}return!0}const Ht=new W,ea=new Ke;let fv=0;class Dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array),a=_n(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class Nh extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oh extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const pv=new Oi,Zr=new W,yo=new W;class ql{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pv.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(yo)),this.expandByPoint(Zr.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mv=0;const Pn=new Ft,So=new Kt,br=new W,Sn=new Oi,Qr=new Oi,Qt=new W;class fn extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j_(e)?Oh:Nh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new st().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Sn.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const u=t[a];Qr.setFromBufferAttribute(u),this.morphTargetsRelative?(Qt.addVectors(Sn.min,Qr.min),Sn.expandByPoint(Qt),Qt.addVectors(Sn.max,Qr.max),Sn.expandByPoint(Qt)):(Sn.expandByPoint(Qr.min),Sn.expandByPoint(Qr.max))}Sn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)Qt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Qt));if(t)for(let a=0,l=t.length;a<l;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)Qt.fromBufferAttribute(u,f),d&&(br.fromBufferAttribute(e,f),Qt.add(br)),r=Math.max(r,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],d=[];for(let A=0;A<n.count;A++)u[A]=new W,d[A]=new W;const f=new W,m=new W,g=new W,p=new Ke,v=new Ke,b=new Ke,C=new W,S=new W;function x(A,I,k){f.fromBufferAttribute(n,A),m.fromBufferAttribute(n,I),g.fromBufferAttribute(n,k),p.fromBufferAttribute(a,A),v.fromBufferAttribute(a,I),b.fromBufferAttribute(a,k),m.sub(f),g.sub(f),v.sub(p),b.sub(p);const z=1/(v.x*b.y-b.x*v.y);isFinite(z)&&(C.copy(m).multiplyScalar(b.y).addScaledVector(g,-v.y).multiplyScalar(z),S.copy(g).multiplyScalar(v.x).addScaledVector(m,-b.x).multiplyScalar(z),u[A].add(C),u[I].add(C),u[k].add(C),d[A].add(S),d[I].add(S),d[k].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let A=0,I=F.length;A<I;++A){const k=F[A],z=k.start,Y=k.count;for(let Z=z,K=z+Y;Z<K;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const D=new W,L=new W,O=new W,R=new W;function B(A){O.fromBufferAttribute(r,A),R.copy(O);const I=u[A];D.copy(I),D.sub(O.multiplyScalar(O.dot(I))).normalize(),L.crossVectors(R,I);const z=L.dot(d[A])<0?-1:1;l.setXYZW(A,D.x,D.y,D.z,z)}for(let A=0,I=F.length;A<I;++A){const k=F[A],z=k.start,Y=k.count;for(let Z=z,K=z+Y;Z<K;Z+=3)B(e.getX(Z+0)),B(e.getX(Z+1)),B(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,v=n.count;p<v;p++)n.setXYZ(p,0,0,0);const r=new W,a=new W,l=new W,u=new W,d=new W,f=new W,m=new W,g=new W;if(e)for(let p=0,v=e.count;p<v;p+=3){const b=e.getX(p+0),C=e.getX(p+1),S=e.getX(p+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,C),l.fromBufferAttribute(t,S),m.subVectors(l,a),g.subVectors(r,a),m.cross(g),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,S),u.add(m),d.add(m),f.add(m),n.setXYZ(b,u.x,u.y,u.z),n.setXYZ(C,d.x,d.y,d.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let p=0,v=t.count;p<v;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),l.fromBufferAttribute(t,p+2),m.subVectors(l,a),g.subVectors(r,a),m.cross(g),n.setXYZ(p+0,m.x,m.y,m.z),n.setXYZ(p+1,m.x,m.y,m.z),n.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(u,d){const f=u.array,m=u.itemSize,g=u.normalized,p=new f.constructor(d.length*m);let v=0,b=0;for(let C=0,S=d.length;C<S;C++){u.isInterleavedBufferAttribute?v=d[C]*u.data.stride+u.offset:v=d[C]*m;for(let x=0;x<m;x++)p[b++]=f[v++]}return new Dn(p,m,g)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,r=this.attributes;for(const u in r){const d=r[u],f=e(d,n);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let m=0,g=f.length;m<g;m++){const p=f[m],v=e(p,n);d.push(v)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let g=0,p=f.length;g<p;g++){const v=f[g];m.push(v.toJSON(e.data))}m.length>0&&(r[d]=m,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const f in r){const m=r[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],g=a[f];for(let p=0,v=g.length;p<v;p++)m.push(g[p].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,m=l.length;f<m;f++){const g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let gv=0;class Ss extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Lr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Ho,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fi=new W,Mo=new W,ta=new W,Li=new W,bo=new W,na=new W,Eo=new W;class kh{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Mo.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Mo);const a=e.distanceTo(t)*.5,l=-this.direction.dot(ta),u=Li.dot(this.direction),d=-Li.dot(ta),f=Li.lengthSq(),m=Math.abs(1-l*l);let g,p,v,b;if(m>0)if(g=l*d-u,p=l*u-d,b=a*m,g>=0)if(p>=-b)if(p<=b){const C=1/m;g*=C,p*=C,v=g*(g+l*p+2*u)+p*(l*g+p+2*d)+f}else p=a,g=Math.max(0,-(l*p+u)),v=-g*g+p*(p+2*d)+f;else p=-a,g=Math.max(0,-(l*p+u)),v=-g*g+p*(p+2*d)+f;else p<=-b?(g=Math.max(0,-(-l*a+u)),p=g>0?-a:Math.min(Math.max(-a,-d),a),v=-g*g+p*(p+2*d)+f):p<=b?(g=0,p=Math.min(Math.max(-a,-d),a),v=p*(p+2*d)+f):(g=Math.max(0,-(l*a+u)),p=g>0?a:Math.min(Math.max(-a,-d),a),v=-g*g+p*(p+2*d)+f);else p=l>0?-a:a,g=Math.max(0,-(l*p+u)),v=-g*g+p*(p+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Mo).addScaledVector(ta,p),v}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),r=fi.dot(fi)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,u,d;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,p=this.origin;return f>=0?(n=(e.min.x-p.x)*f,r=(e.max.x-p.x)*f):(n=(e.max.x-p.x)*f,r=(e.min.x-p.x)*f),m>=0?(a=(e.min.y-p.y)*m,l=(e.max.y-p.y)*m):(a=(e.max.y-p.y)*m,l=(e.min.y-p.y)*m),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),g>=0?(u=(e.min.z-p.z)*g,d=(e.max.z-p.z)*g):(u=(e.max.z-p.z)*g,d=(e.min.z-p.z)*g),n>d||u>r)||((u>n||n!==n)&&(n=u),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,r,a){bo.subVectors(t,e),na.subVectors(n,e),Eo.crossVectors(bo,na);let l=this.direction.dot(Eo),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;Li.subVectors(this.origin,e);const d=u*this.direction.dot(na.crossVectors(Li,na));if(d<0)return null;const f=u*this.direction.dot(bo.cross(Li));if(f<0||d+f>l)return null;const m=-u*Li.dot(Eo);return m<0?null:this.at(m/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gs extends Ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _u=new Ft,Ki=new kh,ia=new ql,vu=new W,ra=new W,sa=new W,aa=new W,wo=new W,oa=new W,xu=new W,la=new W;class en extends Kt{constructor(e=new fn,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(a&&u){oa.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const m=u[d],g=a[d];m!==0&&(wo.fromBufferAttribute(g,e),l?oa.addScaledVector(wo,m):oa.addScaledVector(wo.sub(t),m))}t.add(oa)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(a),Ki.copy(e.ray).recast(e.near),!(ia.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ia,vu)===null||Ki.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(_u.copy(a).invert(),Ki.copy(e.ray).applyMatrix4(_u),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,p=a.groups,v=a.drawRange;if(u!==null)if(Array.isArray(l))for(let b=0,C=p.length;b<C;b++){const S=p[b],x=l[S.materialIndex],F=Math.max(S.start,v.start),D=Math.min(u.count,Math.min(S.start+S.count,v.start+v.count));for(let L=F,O=D;L<O;L+=3){const R=u.getX(L),B=u.getX(L+1),A=u.getX(L+2);r=ca(this,x,e,n,f,m,g,R,B,A),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),C=Math.min(u.count,v.start+v.count);for(let S=b,x=C;S<x;S+=3){const F=u.getX(S),D=u.getX(S+1),L=u.getX(S+2);r=ca(this,l,e,n,f,m,g,F,D,L),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let b=0,C=p.length;b<C;b++){const S=p[b],x=l[S.materialIndex],F=Math.max(S.start,v.start),D=Math.min(d.count,Math.min(S.start+S.count,v.start+v.count));for(let L=F,O=D;L<O;L+=3){const R=L,B=L+1,A=L+2;r=ca(this,x,e,n,f,m,g,R,B,A),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{const b=Math.max(0,v.start),C=Math.min(d.count,v.start+v.count);for(let S=b,x=C;S<x;S+=3){const F=S,D=S+1,L=S+2;r=ca(this,l,e,n,f,m,g,F,D,L),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}}function _v(i,e,t,n,r,a,l,u){let d;if(e.side===xn?d=n.intersectTriangle(l,a,r,!0,u):d=n.intersectTriangle(r,a,l,e.side===Ni,u),d===null)return null;la.copy(u),la.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(la);return f<t.near||f>t.far?null:{distance:f,point:la.clone(),object:i}}function ca(i,e,t,n,r,a,l,u,d,f){i.getVertexPosition(u,ra),i.getVertexPosition(d,sa),i.getVertexPosition(f,aa);const m=_v(i,e,t,n,ra,sa,aa,xu);if(m){const g=new W;zn.getBarycoord(xu,ra,sa,aa,g),r&&(m.uv=zn.getInterpolatedAttribute(r,u,d,f,g,new Ke)),a&&(m.uv1=zn.getInterpolatedAttribute(a,u,d,f,g,new Ke)),l&&(m.normal=zn.getInterpolatedAttribute(l,u,d,f,g,new W),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const p={a:u,b:d,c:f,normal:new W,materialIndex:0};zn.getNormal(ra,sa,aa,p.normal),m.face=p,m.barycoord=g}return m}class vv extends on{constructor(e=null,t=1,n=1,r,a,l,u,d,f=an,m=an,g,p){super(null,l,u,d,f,m,r,a,g,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const To=new W,xv=new W,yv=new st;class er{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=To.subVectors(n,t).cross(xv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(To),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yv.getNormalMatrix(e),r=this.coplanarPoint(To).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new ql,Sv=new Ke(.5,.5),ua=new W;class jl{constructor(e=new er,t=new er,n=new er,r=new er,a=new er,l=new er){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(a),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){const r=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],f=a[3],m=a[4],g=a[5],p=a[6],v=a[7],b=a[8],C=a[9],S=a[10],x=a[11],F=a[12],D=a[13],L=a[14],O=a[15];if(r[0].setComponents(f-l,v-m,x-b,O-F).normalize(),r[1].setComponents(f+l,v+m,x+b,O+F).normalize(),r[2].setComponents(f+u,v+g,x+C,O+D).normalize(),r[3].setComponents(f-u,v-g,x-C,O-D).normalize(),n)r[4].setComponents(d,p,S,L).normalize(),r[5].setComponents(f-d,v-p,x-S,O-L).normalize();else if(r[4].setComponents(f-d,v-p,x-S,O-L).normalize(),t===ei)r[5].setComponents(f+d,v+p,x+S,O+L).normalize();else if(t===ps)r[5].setComponents(d,p,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const t=Sv.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ua.x=r.normal.x>0?e.max.x:e.min.x,ua.y=r.normal.y>0?e.max.y:e.min.y,ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ua)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends on{constructor(e=[],t=or,n,r,a,l,u,d,f,m){super(e,t,n,r,a,l,u,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yu extends on{constructor(e,t,n,r,a,l,u,d,f){super(e,t,n,r,a,l,u,d,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _s extends on{constructor(e,t,n=si,r,a,l,u=an,d=an,f,m=xi,g=1){if(m!==xi&&m!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:g};super(p,r,a,l,u,d,m,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mv extends _s{constructor(e,t=si,n=or,r,a,l=an,u=an,d,f=xi){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,n,r,a,l,u,d,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zh extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yi extends fn{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const u=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const d=[],f=[],m=[],g=[];let p=0,v=0;b("z","y","x",-1,-1,n,t,e,l,a,0),b("z","y","x",1,-1,n,t,-e,l,a,1),b("x","z","y",1,1,e,n,t,r,l,2),b("x","z","y",1,-1,e,n,-t,r,l,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(m,3)),this.setAttribute("uv",new Ot(g,2));function b(C,S,x,F,D,L,O,R,B,A,I){const k=L/B,z=O/A,Y=L/2,Z=O/2,K=R/2,ie=B+1,J=A+1;let ne=0,Se=0;const pe=new W;for(let Le=0;Le<J;Le++){const Ne=Le*z-Z;for(let Re=0;Re<ie;Re++){const Xe=Re*k-Y;pe[C]=Xe*F,pe[S]=Ne*D,pe[x]=K,f.push(pe.x,pe.y,pe.z),pe[C]=0,pe[S]=0,pe[x]=R>0?1:-1,m.push(pe.x,pe.y,pe.z),g.push(Re/B),g.push(1-Le/A),ne+=1}}for(let Le=0;Le<A;Le++)for(let Ne=0;Ne<B;Ne++){const Re=p+Ne+ie*Le,Xe=p+Ne+ie*(Le+1),Ze=p+(Ne+1)+ie*(Le+1),et=p+(Ne+1)+ie*Le;d.push(Re,Xe,et),d.push(Xe,Ze,et),Se+=6}u.addGroup(v,Se,I),v+=Se,p+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zr extends fn{constructor(e=1,t=1,n=1,r=32,a=1,l=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:d};const f=this;r=Math.floor(r),a=Math.floor(a);const m=[],g=[],p=[],v=[];let b=0;const C=[],S=n/2;let x=0;F(),l===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(m),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(v,2));function F(){const L=new W,O=new W;let R=0;const B=(t-e)/n;for(let A=0;A<=a;A++){const I=[],k=A/a,z=k*(t-e)+e;for(let Y=0;Y<=r;Y++){const Z=Y/r,K=Z*d+u,ie=Math.sin(K),J=Math.cos(K);O.x=z*ie,O.y=-k*n+S,O.z=z*J,g.push(O.x,O.y,O.z),L.set(ie,B,J).normalize(),p.push(L.x,L.y,L.z),v.push(Z,1-k),I.push(b++)}C.push(I)}for(let A=0;A<r;A++)for(let I=0;I<a;I++){const k=C[I][A],z=C[I+1][A],Y=C[I+1][A+1],Z=C[I][A+1];(e>0||I!==0)&&(m.push(k,z,Z),R+=3),(t>0||I!==a-1)&&(m.push(z,Y,Z),R+=3)}f.addGroup(x,R,0),x+=R}function D(L){const O=b,R=new Ke,B=new W;let A=0;const I=L===!0?e:t,k=L===!0?1:-1;for(let Y=1;Y<=r;Y++)g.push(0,S*k,0),p.push(0,k,0),v.push(.5,.5),b++;const z=b;for(let Y=0;Y<=r;Y++){const K=Y/r*d+u,ie=Math.cos(K),J=Math.sin(K);B.x=I*J,B.y=S*k,B.z=I*ie,g.push(B.x,B.y,B.z),p.push(0,k,0),R.x=ie*.5+.5,R.y=J*.5*k+.5,v.push(R.x,R.y),b++}for(let Y=0;Y<r;Y++){const Z=O+Y,K=z+Y;L===!0?m.push(K,K+1,Z):m.push(K+1,K,Z),A+=3}f.addGroup(x,A,L===!0?1:2),x+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const a=n.length;let l;t?l=t:l=e*n[a-1];let u=0,d=a-1,f;for(;u<=d;)if(r=Math.floor(u+(d-u)/2),f=n[r]-l,f<0)u=r+1;else if(f>0)d=r-1;else{d=r;break}if(r=d,n[r]===l)return r/(a-1);const m=n[r],p=n[r+1]-m,v=(l-m)/p;return(r+v)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const l=this.getPoint(r),u=this.getPoint(a),d=t||(l.isVector2?new Ke:new W);return d.copy(u).sub(l).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new W,r=[],a=[],l=[],u=new W,d=new Ft;for(let v=0;v<=e;v++){const b=v/e;r[v]=this.getTangentAt(b,new W)}a[0]=new W,l[0]=new W;let f=Number.MAX_VALUE;const m=Math.abs(r[0].x),g=Math.abs(r[0].y),p=Math.abs(r[0].z);m<=f&&(f=m,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),p<=f&&n.set(0,0,1),u.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],u),l[0].crossVectors(r[0],a[0]);for(let v=1;v<=e;v++){if(a[v]=a[v-1].clone(),l[v]=l[v-1].clone(),u.crossVectors(r[v-1],r[v]),u.length()>Number.EPSILON){u.normalize();const b=Math.acos(dt(r[v-1].dot(r[v]),-1,1));a[v].applyMatrix4(d.makeRotationAxis(u,b))}l[v].crossVectors(r[v],a[v])}if(t===!0){let v=Math.acos(dt(a[0].dot(a[e]),-1,1));v/=e,r[0].dot(u.crossVectors(a[0],a[e]))>0&&(v=-v);for(let b=1;b<=e;b++)a[b].applyMatrix4(d.makeRotationAxis(r[b],v*b)),l[b].crossVectors(r[b],a[b])}return{tangents:r,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gh extends Si{constructor(e=0,t=0,n=1,r=1,a=0,l=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=l,this.aClockwise=u,this.aRotation=d}getPoint(e,t=new Ke){const n=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const l=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(l?a=0:a=r),this.aClockwise===!0&&!l&&(a===r?a=-r:a=a-r);const u=this.aStartAngle+e*a;let d=this.aX+this.xRadius*Math.cos(u),f=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),p=d-this.aX,v=f-this.aY;d=p*m-v*g+this.aX,f=p*g+v*m+this.aY}return n.set(d,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bv extends Gh{constructor(e,t,n,r,a,l){super(e,t,n,n,r,a,l),this.isArcCurve=!0,this.type="ArcCurve"}}function Yl(){let i=0,e=0,t=0,n=0;function r(a,l,u,d){i=a,e=u,t=-3*a+3*l-2*u-d,n=2*a-2*l+u+d}return{initCatmullRom:function(a,l,u,d,f){r(l,u,f*(u-a),f*(d-l))},initNonuniformCatmullRom:function(a,l,u,d,f,m,g){let p=(l-a)/f-(u-a)/(f+m)+(u-l)/m,v=(u-l)/m-(d-l)/(m+g)+(d-u)/g;p*=m,v*=m,r(l,u,p,v)},calc:function(a){const l=a*a,u=l*a;return i+e*a+t*l+n*u}}}const ha=new W,Ao=new Yl,Co=new Yl,Ro=new Yl;class Vh extends Si{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){const n=t,r=this.points,a=r.length,l=(a-(this.closed?0:1))*e;let u=Math.floor(l),d=l-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:d===0&&u===a-1&&(u=a-2,d=1);let f,m;this.closed||u>0?f=r[(u-1)%a]:(ha.subVectors(r[0],r[1]).add(r[0]),f=ha);const g=r[u%a],p=r[(u+1)%a];if(this.closed||u+2<a?m=r[(u+2)%a]:(ha.subVectors(r[a-1],r[a-2]).add(r[a-1]),m=ha),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let b=Math.pow(f.distanceToSquared(g),v),C=Math.pow(g.distanceToSquared(p),v),S=Math.pow(p.distanceToSquared(m),v);C<1e-4&&(C=1),b<1e-4&&(b=C),S<1e-4&&(S=C),Ao.initNonuniformCatmullRom(f.x,g.x,p.x,m.x,b,C,S),Co.initNonuniformCatmullRom(f.y,g.y,p.y,m.y,b,C,S),Ro.initNonuniformCatmullRom(f.z,g.z,p.z,m.z,b,C,S)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(f.x,g.x,p.x,m.x,this.tension),Co.initCatmullRom(f.y,g.y,p.y,m.y,this.tension),Ro.initCatmullRom(f.z,g.z,p.z,m.z,this.tension));return n.set(Ao.calc(d),Co.calc(d),Ro.calc(d)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Su(i,e,t,n,r){const a=(n-e)*.5,l=(r-t)*.5,u=i*i,d=i*u;return(2*t-2*n+a+l)*d+(-3*t+3*n-2*a-l)*u+a*i+t}function Ev(i,e){const t=1-i;return t*t*e}function wv(i,e){return 2*(1-i)*i*e}function Tv(i,e){return i*i*e}function ls(i,e,t,n){return Ev(i,e)+wv(i,t)+Tv(i,n)}function Av(i,e){const t=1-i;return t*t*t*e}function Cv(i,e){const t=1-i;return 3*t*t*i*e}function Rv(i,e){return 3*(1-i)*i*i*e}function Pv(i,e){return i*i*i*e}function cs(i,e,t,n,r){return Av(i,e)+Cv(i,t)+Rv(i,n)+Pv(i,r)}class Lv extends Si{constructor(e=new Ke,t=new Ke,n=new Ke,r=new Ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Ke){const n=t,r=this.v0,a=this.v1,l=this.v2,u=this.v3;return n.set(cs(e,r.x,a.x,l.x,u.x),cs(e,r.y,a.y,l.y,u.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dv extends Si{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){const n=t,r=this.v0,a=this.v1,l=this.v2,u=this.v3;return n.set(cs(e,r.x,a.x,l.x,u.x),cs(e,r.y,a.y,l.y,u.y),cs(e,r.z,a.z,l.z,u.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fv extends Si{constructor(e=new Ke,t=new Ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ke){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iv extends Si{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uv extends Si{constructor(e=new Ke,t=new Ke,n=new Ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ke){const n=t,r=this.v0,a=this.v1,l=this.v2;return n.set(ls(e,r.x,a.x,l.x),ls(e,r.y,a.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends Si{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){const n=t,r=this.v0,a=this.v1,l=this.v2;return n.set(ls(e,r.x,a.x,l.x),ls(e,r.y,a.y,l.y),ls(e,r.z,a.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nv extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ke){const n=t,r=this.points,a=(r.length-1)*e,l=Math.floor(a),u=a-l,d=r[l===0?l:l-1],f=r[l],m=r[l>r.length-2?r.length-1:l+1],g=r[l>r.length-3?r.length-1:l+2];return n.set(Su(u,d.x,f.x,m.x,g.x),Su(u,d.y,f.y,m.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new Ke().fromArray(r))}return this}}var Ov=Object.freeze({__proto__:null,ArcCurve:bv,CatmullRomCurve3:Vh,CubicBezierCurve:Lv,CubicBezierCurve3:Dv,EllipseCurve:Gh,LineCurve:Fv,LineCurve3:Iv,QuadraticBezierCurve:Uv,QuadraticBezierCurve3:Hh,SplineCurve:Nv});class Ms extends fn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,u=Math.floor(n),d=Math.floor(r),f=u+1,m=d+1,g=e/u,p=t/d,v=[],b=[],C=[],S=[];for(let x=0;x<m;x++){const F=x*p-l;for(let D=0;D<f;D++){const L=D*g-a;b.push(L,-F,0),C.push(0,0,1),S.push(D/u),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let F=0;F<u;F++){const D=F+f*x,L=F+f*(x+1),O=F+1+f*(x+1),R=F+1+f*x;v.push(D,L,R),v.push(L,O,R)}this.setIndex(v),this.setAttribute("position",new Ot(b,3)),this.setAttribute("normal",new Ot(C,3)),this.setAttribute("uv",new Ot(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kl extends fn{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+u,Math.PI);let f=0;const m=[],g=new W,p=new W,v=[],b=[],C=[],S=[];for(let x=0;x<=n;x++){const F=[],D=x/n;let L=0;x===0&&l===0?L=.5/t:x===n&&d===Math.PI&&(L=-.5/t);for(let O=0;O<=t;O++){const R=O/t;g.x=-e*Math.cos(r+R*a)*Math.sin(l+D*u),g.y=e*Math.cos(l+D*u),g.z=e*Math.sin(r+R*a)*Math.sin(l+D*u),b.push(g.x,g.y,g.z),p.copy(g).normalize(),C.push(p.x,p.y,p.z),S.push(R+L,1-D),F.push(f++)}m.push(F)}for(let x=0;x<n;x++)for(let F=0;F<t;F++){const D=m[x][F+1],L=m[x][F],O=m[x+1][F],R=m[x+1][F+1];(x!==0||l>0)&&v.push(D,L,R),(x!==n-1||d<Math.PI)&&v.push(L,O,R)}this.setIndex(v),this.setAttribute("position",new Ot(b,3)),this.setAttribute("normal",new Ot(C,3)),this.setAttribute("uv",new Ot(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jl extends fn{constructor(e=new Hh(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};const l=e.computeFrenetFrames(t,a);this.tangents=l.tangents,this.normals=l.normals,this.binormals=l.binormals;const u=new W,d=new W,f=new Ke;let m=new W;const g=[],p=[],v=[],b=[];C(),this.setIndex(b),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(v,2));function C(){for(let D=0;D<t;D++)S(D);S(a===!1?t:0),F(),x()}function S(D){m=e.getPointAt(D/t,m);const L=l.normals[D],O=l.binormals[D];for(let R=0;R<=r;R++){const B=R/r*Math.PI*2,A=Math.sin(B),I=-Math.cos(B);d.x=I*L.x+A*O.x,d.y=I*L.y+A*O.y,d.z=I*L.z+A*O.z,d.normalize(),p.push(d.x,d.y,d.z),u.x=m.x+n*d.x,u.y=m.y+n*d.y,u.z=m.z+n*d.z,g.push(u.x,u.y,u.z)}}function x(){for(let D=1;D<=t;D++)for(let L=1;L<=r;L++){const O=(r+1)*(D-1)+(L-1),R=(r+1)*D+(L-1),B=(r+1)*D+L,A=(r+1)*(D-1)+L;b.push(O,R,A),b.push(R,B,A)}}function F(){for(let D=0;D<=t;D++)for(let L=0;L<=r;L++)f.x=D/t,f.y=L/r,v.push(f.x,f.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Jl(new Ov[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Gr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=Gr(i[t]);for(const r in n)e[r]=n[r]}return e}function kv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Bv={clone:Gr,merge:mn};var zv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zv,this.fragmentShader=Gv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=kv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vv extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fr extends Ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hv extends Ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wv extends Ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Po={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Mu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Mu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $v{constructor(e,t,n){const r=this;let a=!1,l=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){u++,a===!1&&r.onStart!==void 0&&r.onStart(m,l,u),a=!0},this.itemEnd=function(m){l++,r.onProgress!==void 0&&r.onProgress(m,l,u),l===u&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){const g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,p=f.length;g<p;g+=2){const v=f[g],b=f[g+1];if(v.global&&(v.lastIndex=0),v.test(m))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Xv=new $v;class Zl{constructor(e){this.manager=e!==void 0?e:Xv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Er=new WeakMap;class qv extends Zl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=Po.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0);else{let g=Er.get(l);g===void 0&&(g=[],Er.set(l,g)),g.push({onLoad:t,onError:r})}return l}const u=ms("img");function d(){m(),t&&t(this);const g=Er.get(this)||[];for(let p=0;p<g.length;p++){const v=g[p];v.onLoad&&v.onLoad(this)}Er.delete(this),a.manager.itemEnd(e)}function f(g){m(),r&&r(g),Po.remove(`image:${e}`);const p=Er.get(this)||[];for(let v=0;v<p.length;v++){const b=p[v];b.onError&&b.onError(g)}Er.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),Po.add(`image:${e}`,u),a.manager.itemStart(e),u.src=e,u}}class $h extends Zl{constructor(e){super(e)}load(e,t,n,r){const a=new on,l=new qv(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Ta extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class jv extends Ta{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Lo=new Ft,bu=new W,Eu=new W;class Xh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ps||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const da=new W,fa=new ti,Kn=new W;class qh extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(da,fa,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(da,fa,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,fa,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new W,wu=new Ke,Tu=new Ke;class bn extends qh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Tu),t.subVectors(Tu,wu)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/d,t-=l.offsetY*n/f,r*=l.width/d,n*=l.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yv extends Xh{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ba*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kv extends Ta{constructor(e,t,n=0,r=Math.PI/3,a=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=r,this.penumbra=a,this.decay=l,this.map=null,this.shadow=new Yv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ql extends qh{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,u=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jv extends Xh{constructor(){super(new Ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Au extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Jv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Zv extends Ta{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const wr=-90,Tr=1;class Qv extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(wr,Tr,e,t);r.layers=this.layers,this.add(r);const a=new bn(wr,Tr,e,t);a.layers=this.layers,this.add(a);const l=new bn(wr,Tr,e,t);l.layers=this.layers,this.add(l);const u=new bn(wr,Tr,e,t);u.layers=this.layers,this.add(u);const d=new bn(wr,Tr,e,t);d.layers=this.layers,this.add(d);const f=new bn(wr,Tr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,u,d]=t;for(const f of t)this.remove(f);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,u,d,f,m]=this.children,g=e.getRenderTarget(),p=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,3,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,p,v),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class ex extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cu=new Ft;class jh{constructor(e,t,n=0,r=1/0){this.ray=new kh(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):St("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(e,t=!0,n=[]){return Pl(e,this,n,t),n.sort(Ru),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Pl(e[r],this,n,t);return n.sort(Ru),n}}function Ru(i,e){return i.distance-e.distance}function Pl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let l=0,u=a.length;l<u;l++)Pl(a[l],e,t,!0)}}function Pu(i,e,t,n){const r=tx(n);switch(t){case Rh:return i*e;case Lh:return i*e/r.components*r.byteLength;case zl:return i*e/r.components*r.byteLength;case kr:return i*e*2/r.components*r.byteLength;case Gl:return i*e*2/r.components*r.byteLength;case Ph:return i*e*3/r.components*r.byteLength;case Gn:return i*e*4/r.components*r.byteLength;case Vl:return i*e*4/r.components*r.byteLength;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qo:case tl:return Math.max(i,16)*Math.max(e,8)/4;case Zo:case el:return Math.max(i,8)*Math.max(e,8)/2;case nl:case il:case sl:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rl:case ol:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case El:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tx(i){switch(i){case Tn:case wh:return{byteLength:1,components:1};case ds:case Th:case vi:return{byteLength:2,components:1};case kl:case Bl:return{byteLength:2,components:4};case si:case Ol:case Qn:return{byteLength:4,components:1};case Ah:case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);function Yh(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function nx(i){const e=new WeakMap;function t(u,d){const f=u.array,m=u.usage,g=f.byteLength,p=i.createBuffer();i.bindBuffer(d,p),i.bufferData(d,f,m),u.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)v=i.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,d,f){const m=d.array,g=d.updateRanges;if(i.bindBuffer(f,u),g.length===0)i.bufferSubData(f,0,m);else{g.sort((v,b)=>v.start-b.start);let p=0;for(let v=1;v<g.length;v++){const b=g[p],C=g[v];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++p,g[p]=C)}g.length=p+1;for(let v=0,b=g.length;v<b;v++){const C=g[v];i.bufferSubData(f,C.start*m.BYTES_PER_ELEMENT,m,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(i.deleteBuffer(d.buffer),e.delete(u))}function l(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:r,remove:a,update:l}}var ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
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
#endif`,sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cx=`#ifdef USE_AOMAP
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
#endif`,ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hx=`#ifdef USE_BATCHING
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
#endif`,dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gx=`#ifdef USE_IRIDESCENCE
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
#endif`,_x=`#ifdef USE_BUMPMAP
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tx=`#define PI 3.141592653589793
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
} // validated`,Ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cx=`vec3 transformedNormal = objectNormal;
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
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
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
#endif`,ty=`uniform sampler2D dfgLUT;
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
}`,ny=`
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dy=`#if defined( USE_POINTS_UV )
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
#endif`,fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,my=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,My=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wy=`#ifdef USE_NORMALMAP
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
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Wy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Xy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iS=`uniform sampler2D t2D;
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
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
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
}`,cS=`#if DEPTH_PACKING == 3200
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
}`,uS=`#define DISTANCE
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
}`,hS=`#define DISTANCE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`uniform float scale;
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
}`,mS=`uniform vec3 diffuse;
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
}`,gS=`#include <common>
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
}`,_S=`uniform vec3 diffuse;
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
}`,vS=`#define LAMBERT
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
}`,xS=`#define LAMBERT
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
}`,yS=`#define MATCAP
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
}`,SS=`#define MATCAP
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
}`,MS=`#define NORMAL
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
}`,bS=`#define NORMAL
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
}`,ES=`#define PHONG
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
}`,wS=`#define PHONG
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
}`,TS=`#define STANDARD
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
}`,AS=`#define STANDARD
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
}`,CS=`#define TOON
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
}`,RS=`#define TOON
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
}`,PS=`uniform float size;
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
}`,LS=`uniform vec3 diffuse;
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
}`,DS=`#include <common>
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
}`,FS=`uniform vec3 color;
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
}`,IS=`uniform float rotation;
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
}`,US=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:ix,alphahash_pars_fragment:rx,alphamap_fragment:sx,alphamap_pars_fragment:ax,alphatest_fragment:ox,alphatest_pars_fragment:lx,aomap_fragment:cx,aomap_pars_fragment:ux,batching_pars_vertex:hx,batching_vertex:dx,begin_vertex:fx,beginnormal_vertex:px,bsdfs:mx,iridescence_fragment:gx,bumpmap_pars_fragment:_x,clipping_planes_fragment:vx,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:yx,clipping_planes_vertex:Sx,color_fragment:Mx,color_pars_fragment:bx,color_pars_vertex:Ex,color_vertex:wx,common:Tx,cube_uv_reflection_fragment:Ax,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Rx,displacementmap_vertex:Px,emissivemap_fragment:Lx,emissivemap_pars_fragment:Dx,colorspace_fragment:Fx,colorspace_pars_fragment:Ix,envmap_fragment:Ux,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Ox,envmap_pars_vertex:kx,envmap_physical_pars_fragment:Yx,envmap_vertex:Bx,fog_vertex:zx,fog_pars_vertex:Gx,fog_fragment:Vx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Wx,lightmap_pars_fragment:$x,lights_lambert_fragment:Xx,lights_lambert_pars_fragment:qx,lights_pars_begin:jx,lights_toon_fragment:Kx,lights_toon_pars_fragment:Jx,lights_phong_fragment:Zx,lights_phong_pars_fragment:Qx,lights_physical_fragment:ey,lights_physical_pars_fragment:ty,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:ry,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ly,map_fragment:cy,map_pars_fragment:uy,map_particle_fragment:hy,map_particle_pars_fragment:dy,metalnessmap_fragment:fy,metalnessmap_pars_fragment:py,morphinstance_vertex:my,morphcolor_vertex:gy,morphnormal_vertex:_y,morphtarget_pars_vertex:vy,morphtarget_vertex:xy,normal_fragment_begin:yy,normal_fragment_maps:Sy,normal_pars_fragment:My,normal_pars_vertex:by,normal_vertex:Ey,normalmap_pars_fragment:wy,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:Ay,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Ry,opaque_fragment:Py,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Fy,dithering_fragment:Iy,dithering_pars_fragment:Uy,roughnessmap_fragment:Ny,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:By,shadowmap_vertex:zy,shadowmask_pars_fragment:Gy,skinbase_vertex:Vy,skinning_pars_vertex:Hy,skinning_vertex:Wy,skinnormal_vertex:$y,specularmap_fragment:Xy,specularmap_pars_fragment:qy,tonemapping_fragment:jy,tonemapping_pars_fragment:Yy,transmission_fragment:Ky,transmission_pars_fragment:Jy,uv_pars_fragment:Zy,uv_pars_vertex:Qy,uv_vertex:eS,worldpos_vertex:tS,background_vert:nS,background_frag:iS,backgroundCube_vert:rS,backgroundCube_frag:sS,cube_vert:aS,cube_frag:oS,depth_vert:lS,depth_frag:cS,distance_vert:uS,distance_frag:hS,equirect_vert:dS,equirect_frag:fS,linedashed_vert:pS,linedashed_frag:mS,meshbasic_vert:gS,meshbasic_frag:_S,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:yS,meshmatcap_frag:SS,meshnormal_vert:MS,meshnormal_frag:bS,meshphong_vert:ES,meshphong_frag:wS,meshphysical_vert:TS,meshphysical_frag:AS,meshtoon_vert:CS,meshtoon_frag:RS,points_vert:PS,points_frag:LS,shadow_vert:DS,shadow_frag:FS,sprite_vert:IS,sprite_frag:US},Pe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Zn={basic:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new at(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:mn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:mn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:mn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:mn([Pe.lights,Pe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Zn.physical={uniforms:mn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const pa={r:0,b:0,g:0},Zi=new ai,NS=new Ft;function OS(i,e,t,n,r,a){const l=new at(0);let u=r===!0?0:1,d,f,m=null,g=0,p=null;function v(F){let D=F.isScene===!0?F.background:null;if(D&&D.isTexture){const L=F.backgroundBlurriness>0;D=e.get(D,L)}return D}function b(F){let D=!1;const L=v(F);L===null?S(l,u):L&&L.isColor&&(S(L,1),D=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function C(F,D){const L=v(D);L&&(L.isCubeTexture||L.mapping===wa)?(f===void 0&&(f=new en(new yi(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Gr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(O,R,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),Zi.copy(D.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(Zi)),f.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Pt,(m!==L||g!==L.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,m=L,g=L.version,p=i.toneMapping),f.layers.enableAll(),F.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new en(new Ms(2,2),new oi({name:"BackgroundMaterial",uniforms:Gr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Pt,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(m!==L||g!==L.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,m=L,g=L.version,p=i.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null))}function S(F,D){F.getRGB(pa,Wh(i)),t.buffers.color.setClear(pa.r,pa.g,pa.b,D,a)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(F,D=1){l.set(F),u=D,S(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(F){u=F,S(l,u)},render:b,addToRenderList:C,dispose:x}}function kS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let a=r,l=!1;function u(z,Y,Z,K,ie){let J=!1;const ne=g(z,K,Z,Y);a!==ne&&(a=ne,f(a.object)),J=v(z,K,Z,ie),J&&b(z,K,Z,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(J||l)&&(l=!1,L(z,Y,Z,K),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function d(){return i.createVertexArray()}function f(z){return i.bindVertexArray(z)}function m(z){return i.deleteVertexArray(z)}function g(z,Y,Z,K){const ie=K.wireframe===!0;let J=n[Y.id];J===void 0&&(J={},n[Y.id]=J);const ne=z.isInstancedMesh===!0?z.id:0;let Se=J[ne];Se===void 0&&(Se={},J[ne]=Se);let pe=Se[Z.id];pe===void 0&&(pe={},Se[Z.id]=pe);let Le=pe[ie];return Le===void 0&&(Le=p(d()),pe[ie]=Le),Le}function p(z){const Y=[],Z=[],K=[];for(let ie=0;ie<t;ie++)Y[ie]=0,Z[ie]=0,K[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Z,attributeDivisors:K,object:z,attributes:{},index:null}}function v(z,Y,Z,K){const ie=a.attributes,J=Y.attributes;let ne=0;const Se=Z.getAttributes();for(const pe in Se)if(Se[pe].location>=0){const Ne=ie[pe];let Re=J[pe];if(Re===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(Re=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(Re=z.instanceColor)),Ne===void 0||Ne.attribute!==Re||Re&&Ne.data!==Re.data)return!0;ne++}return a.attributesNum!==ne||a.index!==K}function b(z,Y,Z,K){const ie={},J=Y.attributes;let ne=0;const Se=Z.getAttributes();for(const pe in Se)if(Se[pe].location>=0){let Ne=J[pe];Ne===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(Ne=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(Ne=z.instanceColor));const Re={};Re.attribute=Ne,Ne&&Ne.data&&(Re.data=Ne.data),ie[pe]=Re,ne++}a.attributes=ie,a.attributesNum=ne,a.index=K}function C(){const z=a.newAttributes;for(let Y=0,Z=z.length;Y<Z;Y++)z[Y]=0}function S(z){x(z,0)}function x(z,Y){const Z=a.newAttributes,K=a.enabledAttributes,ie=a.attributeDivisors;Z[z]=1,K[z]===0&&(i.enableVertexAttribArray(z),K[z]=1),ie[z]!==Y&&(i.vertexAttribDivisor(z,Y),ie[z]=Y)}function F(){const z=a.newAttributes,Y=a.enabledAttributes;for(let Z=0,K=Y.length;Z<K;Z++)Y[Z]!==z[Z]&&(i.disableVertexAttribArray(Z),Y[Z]=0)}function D(z,Y,Z,K,ie,J,ne){ne===!0?i.vertexAttribIPointer(z,Y,Z,ie,J):i.vertexAttribPointer(z,Y,Z,K,ie,J)}function L(z,Y,Z,K){C();const ie=K.attributes,J=Z.getAttributes(),ne=Y.defaultAttributeValues;for(const Se in J){const pe=J[Se];if(pe.location>=0){let Le=ie[Se];if(Le===void 0&&(Se==="instanceMatrix"&&z.instanceMatrix&&(Le=z.instanceMatrix),Se==="instanceColor"&&z.instanceColor&&(Le=z.instanceColor)),Le!==void 0){const Ne=Le.normalized,Re=Le.itemSize,Xe=e.get(Le);if(Xe===void 0)continue;const Ze=Xe.buffer,et=Xe.type,oe=Xe.bytesPerElement,xe=et===i.INT||et===i.UNSIGNED_INT||Le.gpuType===Ol;if(Le.isInterleavedBufferAttribute){const re=Le.data,Me=re.stride,$e=Le.offset;if(re.isInstancedInterleavedBuffer){for(let qe=0;qe<pe.locationSize;qe++)x(pe.location+qe,re.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let qe=0;qe<pe.locationSize;qe++)S(pe.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let qe=0;qe<pe.locationSize;qe++)D(pe.location+qe,Re/pe.locationSize,et,Ne,Me*oe,($e+Re/pe.locationSize*qe)*oe,xe)}else{if(Le.isInstancedBufferAttribute){for(let re=0;re<pe.locationSize;re++)x(pe.location+re,Le.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let re=0;re<pe.locationSize;re++)S(pe.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let re=0;re<pe.locationSize;re++)D(pe.location+re,Re/pe.locationSize,et,Ne,Re*oe,Re/pe.locationSize*re*oe,xe)}}else if(ne!==void 0){const Ne=ne[Se];if(Ne!==void 0)switch(Ne.length){case 2:i.vertexAttrib2fv(pe.location,Ne);break;case 3:i.vertexAttrib3fv(pe.location,Ne);break;case 4:i.vertexAttrib4fv(pe.location,Ne);break;default:i.vertexAttrib1fv(pe.location,Ne)}}}}F()}function O(){I();for(const z in n){const Y=n[z];for(const Z in Y){const K=Y[Z];for(const ie in K){const J=K[ie];for(const ne in J)m(J[ne].object),delete J[ne];delete K[ie]}}delete n[z]}}function R(z){if(n[z.id]===void 0)return;const Y=n[z.id];for(const Z in Y){const K=Y[Z];for(const ie in K){const J=K[ie];for(const ne in J)m(J[ne].object),delete J[ne];delete K[ie]}}delete n[z.id]}function B(z){for(const Y in n){const Z=n[Y];for(const K in Z){const ie=Z[K];if(ie[z.id]===void 0)continue;const J=ie[z.id];for(const ne in J)m(J[ne].object),delete J[ne];delete ie[z.id]}}}function A(z){for(const Y in n){const Z=n[Y],K=z.isInstancedMesh===!0?z.id:0,ie=Z[K];if(ie!==void 0){for(const J in ie){const ne=ie[J];for(const Se in ne)m(ne[Se].object),delete ne[Se];delete ie[J]}delete Z[K],Object.keys(Z).length===0&&delete n[Y]}}}function I(){k(),l=!0,a!==r&&(a=r,f(a.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:I,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfObject:A,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:S,disableUnusedAttributes:F}}function BS(i,e,t){let n;function r(f){n=f}function a(f,m){i.drawArrays(n,f,m),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let v=0;for(let b=0;b<g;b++)v+=m[b];t.update(v,n,1)}function d(f,m,g,p){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let b=0;b<f.length;b++)l(f[b],m[b],p[b]);else{v.multiDrawArraysInstancedWEBGL(n,f,0,m,0,p,0,g);let b=0;for(let C=0;C<g;C++)b+=m[C]*p[C];t.update(b,n,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function zS(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(B){return!(B!==Gn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(B){const A=B===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Tn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Qn&&!A)}function d(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=d(f);m!==f&&(Qe("WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),F=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:v,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:F,maxVaryings:D,maxFragmentUniforms:L,maxSamples:O,samples:R}}function GS(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new er,u=new st,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){const v=g.length!==0||p||n!==0||r;return r=p,n=g.length,v},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,p){t=m(g,p,0)},this.setState=function(g,p,v){const b=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,x=i.get(g);if(!r||b===null||b.length===0||a&&!S)a?m(null):f();else{const F=a?0:n,D=F*4;let L=x.clippingState||null;d.value=L,L=m(b,p,D,v);for(let O=0;O!==D;++O)L[O]=t[O];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,p,v,b){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=d.value,b!==!0||S===null){const x=v+C*4,F=p.matrixWorldInverse;u.getNormalMatrix(F),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,L=v;D!==C;++D,L+=4)l.copy(g[D]).applyMatrix4(F,u),l.normal.toArray(S,L),S[L+3]=l.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const Ii=4,Lu=[.125,.215,.35,.446,.526,.582],nr=20,VS=256,es=new Ql,Du=new at;let Do=null,Fo=0,Io=0,Uo=!1;const HS=new W;class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:l=256,position:u=HS}=a;Do=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,r,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Fo,Io),this._renderer.xr.enabled=Uo,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:vi,format:Gn,colorSpace:Br,depthBuffer:!1},r=Iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WS(a)),this._blurMaterial=XS(a,e,t),this._ggxMaterial=$S(a,e,t)}return r}_compileMaterial(e){const t=new en(new fn,e);this._renderer.compile(t,es)}_sceneToCubeUV(e,t,n,r,a){const d=new bn(90,1,t,n),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,v=g.toneMapping;g.getClearColor(Du),g.toneMapping=ii,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new yi,new gs({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let x=!1;const F=e.background;F?F.isColor&&(S.color.copy(F),e.background=null,x=!0):(S.color.copy(Du),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(d.up.set(0,f[D],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[D],a.y,a.z)):L===1?(d.up.set(0,0,f[D]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[D],a.z)):(d.up.set(0,f[D],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[D]));const O=this._cubeSize;Ar(r,L*O,D>2?O:0,O,O),g.setRenderTarget(r),x&&g.render(C,d),g.render(e,d)}g.toneMapping=v,g.autoClear=p,e.background=F}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===or||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const a=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Ar(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,es)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,u=this._lodMeshes[n];u.material=l;const d=l.uniforms,f=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-m*m),p=0+f*1.25,v=g*p,{_lodMax:b}=this,C=this._sizeLods[n],S=3*C*(n>b-Ii?n-b+Ii:0),x=4*(this._cubeSize-C);d.envMap.value=e.texture,d.roughness.value=v,d.mipInt.value=b-t,Ar(a,S,x,3*C,2*C),r.setRenderTarget(a),r.render(u,es),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=b-n,Ar(e,S,x,3*C,2*C),r.setRenderTarget(e),r.render(u,es)}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,u){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&St("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[r];g.material=f;const p=f.uniforms,v=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*nr-1),C=a/b,S=isFinite(a)?1+Math.floor(m*C):nr;S>nr&&Qe(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${nr}`);const x=[];let F=0;for(let B=0;B<nr;++B){const A=B/C,I=Math.exp(-A*A/2);x.push(I),B===0?F+=I:B<S&&(F+=2*I)}for(let B=0;B<x.length;B++)x[B]=x[B]/F;p.envMap.value=e.texture,p.samples.value=S,p.weights.value=x,p.latitudinal.value=l==="latitudinal",u&&(p.poleAxis.value=u);const{_lodMax:D}=this;p.dTheta.value=b,p.mipInt.value=D-n;const L=this._sizeLods[r],O=3*L*(r>D-Ii?r-D+Ii:0),R=4*(this._cubeSize-L);Ar(t,O,R,3*L,2*L),d.setRenderTarget(t),d.render(g,es)}}function WS(i){const e=[],t=[],n=[];let r=i;const a=i-Ii+1+Lu.length;for(let l=0;l<a;l++){const u=Math.pow(2,r);e.push(u);let d=1/u;l>i-Ii?d=Lu[l-i+Ii-1]:l===0&&(d=0),t.push(d);const f=1/(u-2),m=-f,g=1+f,p=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,b=6,C=3,S=2,x=1,F=new Float32Array(C*b*v),D=new Float32Array(S*b*v),L=new Float32Array(x*b*v);for(let R=0;R<v;R++){const B=R%3*2/3-1,A=R>2?0:-1,I=[B,A,0,B+2/3,A,0,B+2/3,A+1,0,B,A,0,B+2/3,A+1,0,B,A+1,0];F.set(I,C*b*R),D.set(p,S*b*R);const k=[R,R,R,R,R,R];L.set(k,x*b*R)}const O=new fn;O.setAttribute("position",new Dn(F,C)),O.setAttribute("uv",new Dn(D,S)),O.setAttribute("faceIndex",new Dn(L,x)),n.push(new en(O,null)),r>Ii&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Iu(i,e,t){const n=new ri(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $S(i,e,t){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function XS(i,e,t){const n=new Float32Array(nr),r=new W(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Uu(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Nu(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}class Kh extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yi(5,5,5),a=new oi({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:gi});a.uniforms.tEquirect.value=t;const l=new en(r,a),u=t.minFilter;return t.minFilter===rr&&(t.minFilter=dn),new Qv(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}function qS(i){let e=new WeakMap,t=new WeakMap,n=null;function r(p,v=!1){return p==null?null:v?l(p):a(p)}function a(p){if(p&&p.isTexture){const v=p.mapping;if(v===Qa||v===eo)if(e.has(p)){const b=e.get(p).texture;return u(b,p.mapping)}else{const b=p.image;if(b&&b.height>0){const C=new Kh(b.height);return C.fromEquirectangularTexture(i,p),e.set(p,C),p.addEventListener("dispose",f),u(C.texture,p.mapping)}else return null}}return p}function l(p){if(p&&p.isTexture){const v=p.mapping,b=v===Qa||v===eo,C=v===or||v===Or;if(b||C){let S=t.get(p);const x=S!==void 0?S.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==x)return n===null&&(n=new Fu(i)),S=b?n.fromEquirectangular(p,S):n.fromCubemap(p,S),S.texture.pmremVersion=p.pmremVersion,t.set(p,S),S.texture;if(S!==void 0)return S.texture;{const F=p.image;return b&&F&&F.height>0||C&&F&&d(F)?(n===null&&(n=new Fu(i)),S=b?n.fromEquirectangular(p):n.fromCubemap(p),S.texture.pmremVersion=p.pmremVersion,t.set(p,S),p.addEventListener("dispose",m),S.texture):null}}}return p}function u(p,v){return v===Qa?p.mapping=or:v===eo&&(p.mapping=Or),p}function d(p){let v=0;const b=6;for(let C=0;C<b;C++)p[C]!==void 0&&v++;return v===b}function f(p){const v=p.target;v.removeEventListener("dispose",f);const b=e.get(v);b!==void 0&&(e.delete(v),b.dispose())}function m(p){const v=p.target;v.removeEventListener("dispose",m);const b=t.get(v);b!==void 0&&(t.delete(v),b.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function jS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ma("WebGLRenderer: "+n+" extension not supported."),r}}}function YS(i,e,t,n){const r={},a=new WeakMap;function l(g){const p=g.target;p.index!==null&&e.remove(p.index);for(const b in p.attributes)e.remove(p.attributes[b]);p.removeEventListener("dispose",l),delete r[p.id];const v=a.get(p);v&&(e.remove(v),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(g,p){return r[p.id]===!0||(p.addEventListener("dispose",l),r[p.id]=!0,t.memory.geometries++),p}function d(g){const p=g.attributes;for(const v in p)e.update(p[v],i.ARRAY_BUFFER)}function f(g){const p=[],v=g.index,b=g.attributes.position;let C=0;if(b===void 0)return;if(v!==null){const F=v.array;C=v.version;for(let D=0,L=F.length;D<L;D+=3){const O=F[D+0],R=F[D+1],B=F[D+2];p.push(O,R,R,B,B,O)}}else{const F=b.array;C=b.version;for(let D=0,L=F.length/3-1;D<L;D+=3){const O=D+0,R=D+1,B=D+2;p.push(O,R,R,B,B,O)}}const S=new(b.count>=65535?Oh:Nh)(p,1);S.version=C;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function m(g){const p=a.get(g);if(p){const v=g.index;v!==null&&p.version<v.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function KS(i,e,t){let n;function r(p){n=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function d(p,v){i.drawElements(n,v,a,p*l),t.update(v,n,1)}function f(p,v,b){b!==0&&(i.drawElementsInstanced(n,v,a,p*l,b),t.update(v,n,b))}function m(p,v,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,p,0,b);let S=0;for(let x=0;x<b;x++)S+=v[x];t.update(S,n,1)}function g(p,v,b,C){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<p.length;x++)f(p[x]/l,v[x],C[x]);else{S.multiDrawElementsInstancedWEBGL(n,v,0,a,p,0,C,0,b);let x=0;for(let F=0;F<b;F++)x+=v[F]*C[F];t.update(x,n,1)}}this.setMode=r,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function JS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(a/3);break;case i.LINES:t.lines+=u*(a/2);break;case i.LINE_STRIP:t.lines+=u*(a-1);break;case i.LINE_LOOP:t.lines+=u*a;break;case i.POINTS:t.points+=u*a;break;default:St("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ZS(i,e,t){const n=new WeakMap,r=new Gt;function a(l,u,d){const f=l.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let p=n.get(u);if(p===void 0||p.count!==g){let I=function(){B.dispose(),n.delete(u),u.removeEventListener("dispose",I)};p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let D=0;v===!0&&(D=1),b===!0&&(D=2),C===!0&&(D=3);let L=u.attributes.position.count*D,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*O*4*g),B=new Ih(R,L,O,g);B.type=Qn,B.needsUpdate=!0;const A=D*4;for(let k=0;k<g;k++){const z=S[k],Y=x[k],Z=F[k],K=L*O*4*k;for(let ie=0;ie<z.count;ie++){const J=ie*A;v===!0&&(r.fromBufferAttribute(z,ie),R[K+J+0]=r.x,R[K+J+1]=r.y,R[K+J+2]=r.z,R[K+J+3]=0),b===!0&&(r.fromBufferAttribute(Y,ie),R[K+J+4]=r.x,R[K+J+5]=r.y,R[K+J+6]=r.z,R[K+J+7]=0),C===!0&&(r.fromBufferAttribute(Z,ie),R[K+J+8]=r.x,R[K+J+9]=r.y,R[K+J+10]=r.z,R[K+J+11]=Z.itemSize===4?r.w:1)}}p={count:g,texture:B,size:new Ke(L,O)},n.set(u,p),u.addEventListener("dispose",I)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let v=0;for(let C=0;C<f.length;C++)v+=f[C];const b=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function QS(i,e,t,n,r){let a=new WeakMap;function l(f){const m=r.render.frame,g=f.geometry,p=e.get(f,g);if(a.get(p)!==m&&(e.update(p),a.set(p,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),a.get(f)!==m&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,m))),f.isSkinnedMesh){const v=f.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return p}function u(){a=new WeakMap}function d(f){const m=f.target;m.removeEventListener("dispose",d),n.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}const eM={[vh]:"LINEAR_TONE_MAPPING",[xh]:"REINHARD_TONE_MAPPING",[yh]:"CINEON_TONE_MAPPING",[Nl]:"ACES_FILMIC_TONE_MAPPING",[Mh]:"AGX_TONE_MAPPING",[bh]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function tM(i,e,t,n,r){const a=new ri(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),l=new ri(e,t,{type:vi,depthBuffer:!1,stencilBuffer:!1}),u=new fn;u.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const d=new Vv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new en(u,d),m=new Ql(-1,1,1,-1,0,1);let g=null,p=null,v=!1,b,C=null,S=[],x=!1;this.setSize=function(F,D){a.setSize(F,D),l.setSize(F,D);for(let L=0;L<S.length;L++){const O=S[L];O.setSize&&O.setSize(F,D)}},this.setEffects=function(F){S=F,x=S.length>0&&S[0].isRenderPass===!0;const D=a.width,L=a.height;for(let O=0;O<S.length;O++){const R=S[O];R.setSize&&R.setSize(D,L)}},this.begin=function(F,D){if(v||F.toneMapping===ii&&S.length===0)return!1;if(C=D,D!==null){const L=D.width,O=D.height;(a.width!==L||a.height!==O)&&this.setSize(L,O)}return x===!1&&F.setRenderTarget(a),b=F.toneMapping,F.toneMapping=ii,!0},this.hasRenderPass=function(){return x},this.end=function(F,D){F.toneMapping=b,v=!0;let L=a,O=l;for(let R=0;R<S.length;R++){const B=S[R];if(B.enabled!==!1&&(B.render(F,O,L,D),B.needsSwap!==!1)){const A=L;L=O,O=A}}if(g!==F.outputColorSpace||p!==F.toneMapping){g=F.outputColorSpace,p=F.toneMapping,d.defines={},Mt.getTransfer(g)===Pt&&(d.defines.SRGB_TRANSFER="");const R=eM[p];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=L.texture,F.setRenderTarget(C),F.render(f,m),C=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),l.dispose(),u.dispose(),d.dispose()}}const Jh=new on,Ll=new _s(1,1),Zh=new Ih,Qh=new rv,ed=new Bh,Ou=[],ku=[],Bu=new Float32Array(16),zu=new Float32Array(9),Gu=new Float32Array(4);function Hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ou[r];if(a===void 0&&(a=new Float32Array(r),Ou[r]=a),e!==0){n.toArray(a,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(a,u)}return a}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ca(i,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function rM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function sM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function aM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),Zt(t,n)}}function oM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;zu.set(n),i.uniformMatrix3fv(this.addr,!1,zu),Zt(t,n)}}function lM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Bu.set(n),i.uniformMatrix4fv(this.addr,!1,Bu),Zt(t,n)}}function cM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function hM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function dM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function fM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function mM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function gM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function _M(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Ll.compareFunction=t.isReversedDepthBuffer()?Wl:Hl,a=Ll):a=Jh,t.setTexture2D(e||a,r)}function vM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Qh,r)}function xM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ed,r)}function yM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zh,r)}function SM(i){switch(i){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return aM;case 35675:return oM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return uM;case 35668:case 35672:return hM;case 35669:case 35673:return dM;case 5125:return fM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}function MM(i,e){i.uniform1fv(this.addr,e)}function bM(i,e){const t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function EM(i,e){const t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function wM(i,e){const t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function TM(i,e){const t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function AM(i,e){const t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CM(i,e){const t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function RM(i,e){i.uniform1iv(this.addr,e)}function PM(i,e){i.uniform2iv(this.addr,e)}function LM(i,e){i.uniform3iv(this.addr,e)}function DM(i,e){i.uniform4iv(this.addr,e)}function FM(i,e){i.uniform1uiv(this.addr,e)}function IM(i,e){i.uniform2uiv(this.addr,e)}function UM(i,e){i.uniform3uiv(this.addr,e)}function NM(i,e){i.uniform4uiv(this.addr,e)}function OM(i,e,t){const n=this.cache,r=e.length,a=Ca(t,r);Jt(n,a)||(i.uniform1iv(this.addr,a),Zt(n,a));let l;this.type===i.SAMPLER_2D_SHADOW?l=Ll:l=Jh;for(let u=0;u!==r;++u)t.setTexture2D(e[u]||l,a[u])}function kM(i,e,t){const n=this.cache,r=e.length,a=Ca(t,r);Jt(n,a)||(i.uniform1iv(this.addr,a),Zt(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Qh,a[l])}function BM(i,e,t){const n=this.cache,r=e.length,a=Ca(t,r);Jt(n,a)||(i.uniform1iv(this.addr,a),Zt(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||ed,a[l])}function zM(i,e,t){const n=this.cache,r=e.length,a=Ca(t,r);Jt(n,a)||(i.uniform1iv(this.addr,a),Zt(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Zh,a[l])}function GM(i){switch(i){case 5126:return MM;case 35664:return bM;case 35665:return EM;case 35666:return wM;case 35674:return TM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return PM;case 35668:case 35672:return LM;case 35669:case 35673:return DM;case 5125:return FM;case 36294:return IM;case 36295:return UM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}class VM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=SM(t.type)}}class HM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}}class WM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const u=r[a];u.setValue(e,t[u.id],n)}}}const No=/(\w+)(\])?(\[|\.)?/g;function Vu(i,e){i.seq.push(e),i.map[e.id]=e}function $M(i,e,t){const n=i.name,r=n.length;for(No.lastIndex=0;;){const a=No.exec(n),l=No.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&l+2===r){Vu(t,f===void 0?new VM(u,i,e):new HM(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new WM(u),Vu(t,g)),t=g}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const u=e.getActiveUniform(t,l),d=e.getUniformLocation(t,u.name);$M(u,d,this)}const r=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):a.push(l);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const u=t[a],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Hu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const XM=37297;let qM=0;function jM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const Wu=new st;function YM(i){Mt._getMatrix(Wu,Mt.workingColorSpace,i);const e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case Sa:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $u(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+jM(i.getShaderSource(e),u)}else return a}function KM(i,e){const t=YM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JM={[vh]:"Linear",[xh]:"Reinhard",[yh]:"Cineon",[Nl]:"ACESFilmic",[Mh]:"AgX",[bh]:"Neutral",[Sh]:"Custom"};function ZM(i,e){const t=JM[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ma=new W;function QM(){Mt.getLuminanceCoefficients(ma);const i=ma.x.toFixed(4),e=ma.y.toFixed(4),t=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function tb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let u=1;a.type===i.FLOAT_MAT2&&(u=2),a.type===i.FLOAT_MAT3&&(u=3),a.type===i.FLOAT_MAT4&&(u=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function rs(i){return i!==""}function Xu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(i){return i.replace(ib,sb)}const rb=new Map;function sb(i,e){let t=lt[e];if(t===void 0){const n=rb.get(e);if(n!==void 0)t=lt[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(ab,ob)}function ob(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Yu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const lb={[os]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function cb(i){return lb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ub={[or]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE",[wa]:"ENVMAP_TYPE_CUBE_UV"};function hb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ub[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const db={[Or]:"ENVMAP_MODE_REFRACTION"};function fb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":db[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pb={[_h]:"ENVMAP_BLENDING_MULTIPLY",[O_]:"ENVMAP_BLENDING_MIX",[k_]:"ENVMAP_BLENDING_ADD"};function mb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pb[i.combine]||"ENVMAP_BLENDING_NONE"}function gb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _b(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=cb(t),f=hb(t),m=fb(t),g=mb(t),p=gb(t),v=eb(t),b=tb(a),C=r.createProgram();let S,x,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(rs).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(rs).join(`
`),x.length>0&&(x+=`
`)):(S=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),x=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?lt.tonemapping_pars_fragment:"",t.toneMapping!==ii?ZM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,KM("linearToOutputTexel",t.outputColorSpace),QM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),l=Dl(l),l=Xu(l,t),l=qu(l,t),u=Dl(u),u=Xu(u,t),u=qu(u,t),l=ju(l),u=ju(u),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=F+S+l,L=F+x+u,O=Hu(r,r.VERTEX_SHADER,D),R=Hu(r,r.FRAGMENT_SHADER,L);r.attachShader(C,O),r.attachShader(C,R),t.index0AttributeName!==void 0?r.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(C,0,"position"),r.linkProgram(C);function B(z){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(C)||"",Z=r.getShaderInfoLog(O)||"",K=r.getShaderInfoLog(R)||"",ie=Y.trim(),J=Z.trim(),ne=K.trim();let Se=!0,pe=!0;if(r.getProgramParameter(C,r.LINK_STATUS)===!1)if(Se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,C,O,R);else{const Le=$u(r,O,"vertex"),Ne=$u(r,R,"fragment");St("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(C,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ie+`
`+Le+`
`+Ne)}else ie!==""?Qe("WebGLProgram: Program Info Log:",ie):(J===""||ne==="")&&(pe=!1);pe&&(z.diagnostics={runnable:Se,programLog:ie,vertexShader:{log:J,prefix:S},fragmentShader:{log:ne,prefix:x}})}r.deleteShader(O),r.deleteShader(R),A=new ya(r,C),I=nb(r,C)}let A;this.getUniforms=function(){return A===void 0&&B(this),A};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(C,XM)),k},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=R,this}let vb=0;class xb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yb(e),t.set(e,n)),n}}class yb{constructor(e){this.id=vb++,this.code=e,this.usedTimes=0}}function Sb(i,e,t,n,r,a){const l=new Xl,u=new xb,d=new Set,f=[],m=new Map,g=n.logarithmicDepthBuffer;let p=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return d.add(A),A===0?"uv":`uv${A}`}function C(A,I,k,z,Y){const Z=z.fog,K=Y.geometry,ie=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,J=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,ne=e.get(A.envMap||ie,J),Se=ne&&ne.mapping===wa?ne.image.height:null,pe=v[A.type];A.precision!==null&&(p=n.getMaxPrecision(A.precision),p!==A.precision&&Qe("WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const Le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ne=Le!==void 0?Le.length:0;let Re=0;K.morphAttributes.position!==void 0&&(Re=1),K.morphAttributes.normal!==void 0&&(Re=2),K.morphAttributes.color!==void 0&&(Re=3);let Xe,Ze,et,oe;if(pe){const ut=Zn[pe];Xe=ut.vertexShader,Ze=ut.fragmentShader}else Xe=A.vertexShader,Ze=A.fragmentShader,u.update(A),et=u.getVertexShaderID(A),oe=u.getFragmentShaderID(A);const xe=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),Me=Y.isInstancedMesh===!0,$e=Y.isBatchedMesh===!0,qe=!!A.map,bt=!!A.matcap,ct=!!ne,mt=!!A.aoMap,Tt=!!A.lightMap,it=!!A.bumpMap,kt=!!A.normalMap,V=!!A.displacementMap,Lt=!!A.emissiveMap,ft=!!A.metalnessMap,vt=!!A.roughnessMap,Oe=A.anisotropy>0,U=A.clearcoat>0,E=A.dispersion>0,H=A.iridescence>0,ae=A.sheen>0,fe=A.transmission>0,le=Oe&&!!A.anisotropyMap,ke=U&&!!A.clearcoatMap,Te=U&&!!A.clearcoatNormalMap,We=U&&!!A.clearcoatRoughnessMap,Ye=H&&!!A.iridescenceMap,ye=H&&!!A.iridescenceThicknessMap,Ee=ae&&!!A.sheenColorMap,Be=ae&&!!A.sheenRoughnessMap,ze=!!A.specularMap,Fe=!!A.specularColorMap,rt=!!A.specularIntensityMap,$=fe&&!!A.transmissionMap,Ae=fe&&!!A.thicknessMap,be=!!A.gradientMap,De=!!A.alphaMap,X=A.alphaTest>0,G=!!A.alphaHash,Ie=!!A.extensions;let Je=ii;A.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Je=i.toneMapping);const xt={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:Xe,fragmentShader:Ze,defines:A.defines,customVertexShaderID:et,customFragmentShaderID:oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:$e,batchingColor:$e&&Y._colorsTexture!==null,instancing:Me,instancingColor:Me&&Y.instanceColor!==null,instancingMorph:Me&&Y.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Br,alphaToCoverage:!!A.alphaToCoverage,map:qe,matcap:bt,envMap:ct,envMapMode:ct&&ne.mapping,envMapCubeUVHeight:Se,aoMap:mt,lightMap:Tt,bumpMap:it,normalMap:kt,displacementMap:V,emissiveMap:Lt,normalMapObjectSpace:kt&&A.normalMapType===G_,normalMapTangentSpace:kt&&A.normalMapType===Dh,metalnessMap:ft,roughnessMap:vt,anisotropy:Oe,anisotropyMap:le,clearcoat:U,clearcoatMap:ke,clearcoatNormalMap:Te,clearcoatRoughnessMap:We,dispersion:E,iridescence:H,iridescenceMap:Ye,iridescenceThicknessMap:ye,sheen:ae,sheenColorMap:Ee,sheenRoughnessMap:Be,specularMap:ze,specularColorMap:Fe,specularIntensityMap:rt,transmission:fe,transmissionMap:$,thicknessMap:Ae,gradientMap:be,opaque:A.transparent===!1&&A.blending===Lr&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:X,alphaHash:G,combine:A.combine,mapUv:qe&&b(A.map.channel),aoMapUv:mt&&b(A.aoMap.channel),lightMapUv:Tt&&b(A.lightMap.channel),bumpMapUv:it&&b(A.bumpMap.channel),normalMapUv:kt&&b(A.normalMap.channel),displacementMapUv:V&&b(A.displacementMap.channel),emissiveMapUv:Lt&&b(A.emissiveMap.channel),metalnessMapUv:ft&&b(A.metalnessMap.channel),roughnessMapUv:vt&&b(A.roughnessMap.channel),anisotropyMapUv:le&&b(A.anisotropyMap.channel),clearcoatMapUv:ke&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Te&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(A.sheenRoughnessMap.channel),specularMapUv:ze&&b(A.specularMap.channel),specularColorMapUv:Fe&&b(A.specularColorMap.channel),specularIntensityMapUv:rt&&b(A.specularIntensityMap.channel),transmissionMapUv:$&&b(A.transmissionMap.channel),thicknessMapUv:Ae&&b(A.thicknessMap.channel),alphaMapUv:De&&b(A.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(kt||Oe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!K.attributes.uv&&(qe||De),fog:!!Z,useFog:A.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||K.attributes.normal===void 0&&kt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:re,skinning:Y.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Re,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:qe&&A.map.isVideoTexture===!0&&Mt.getTransfer(A.map.colorSpace)===Pt,decodeVideoTextureEmissive:Lt&&A.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(A.emissiveMap.colorSpace)===Pt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===wn,flipSided:A.side===xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ie&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&A.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return xt.vertexUv1s=d.has(1),xt.vertexUv2s=d.has(2),xt.vertexUv3s=d.has(3),d.clear(),xt}function S(A){const I=[];if(A.shaderID?I.push(A.shaderID):(I.push(A.customVertexShaderID),I.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)I.push(k),I.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(x(I,A),F(I,A),I.push(i.outputColorSpace)),I.push(A.customProgramCacheKey),I.join()}function x(A,I){A.push(I.precision),A.push(I.outputColorSpace),A.push(I.envMapMode),A.push(I.envMapCubeUVHeight),A.push(I.mapUv),A.push(I.alphaMapUv),A.push(I.lightMapUv),A.push(I.aoMapUv),A.push(I.bumpMapUv),A.push(I.normalMapUv),A.push(I.displacementMapUv),A.push(I.emissiveMapUv),A.push(I.metalnessMapUv),A.push(I.roughnessMapUv),A.push(I.anisotropyMapUv),A.push(I.clearcoatMapUv),A.push(I.clearcoatNormalMapUv),A.push(I.clearcoatRoughnessMapUv),A.push(I.iridescenceMapUv),A.push(I.iridescenceThicknessMapUv),A.push(I.sheenColorMapUv),A.push(I.sheenRoughnessMapUv),A.push(I.specularMapUv),A.push(I.specularColorMapUv),A.push(I.specularIntensityMapUv),A.push(I.transmissionMapUv),A.push(I.thicknessMapUv),A.push(I.combine),A.push(I.fogExp2),A.push(I.sizeAttenuation),A.push(I.morphTargetsCount),A.push(I.morphAttributeCount),A.push(I.numDirLights),A.push(I.numPointLights),A.push(I.numSpotLights),A.push(I.numSpotLightMaps),A.push(I.numHemiLights),A.push(I.numRectAreaLights),A.push(I.numDirLightShadows),A.push(I.numPointLightShadows),A.push(I.numSpotLightShadows),A.push(I.numSpotLightShadowsWithMaps),A.push(I.numLightProbes),A.push(I.shadowMapType),A.push(I.toneMapping),A.push(I.numClippingPlanes),A.push(I.numClipIntersection),A.push(I.depthPacking)}function F(A,I){l.disableAll(),I.instancing&&l.enable(0),I.instancingColor&&l.enable(1),I.instancingMorph&&l.enable(2),I.matcap&&l.enable(3),I.envMap&&l.enable(4),I.normalMapObjectSpace&&l.enable(5),I.normalMapTangentSpace&&l.enable(6),I.clearcoat&&l.enable(7),I.iridescence&&l.enable(8),I.alphaTest&&l.enable(9),I.vertexColors&&l.enable(10),I.vertexAlphas&&l.enable(11),I.vertexUv1s&&l.enable(12),I.vertexUv2s&&l.enable(13),I.vertexUv3s&&l.enable(14),I.vertexTangents&&l.enable(15),I.anisotropy&&l.enable(16),I.alphaHash&&l.enable(17),I.batching&&l.enable(18),I.dispersion&&l.enable(19),I.batchingColor&&l.enable(20),I.gradientMap&&l.enable(21),A.push(l.mask),l.disableAll(),I.fog&&l.enable(0),I.useFog&&l.enable(1),I.flatShading&&l.enable(2),I.logarithmicDepthBuffer&&l.enable(3),I.reversedDepthBuffer&&l.enable(4),I.skinning&&l.enable(5),I.morphTargets&&l.enable(6),I.morphNormals&&l.enable(7),I.morphColors&&l.enable(8),I.premultipliedAlpha&&l.enable(9),I.shadowMapEnabled&&l.enable(10),I.doubleSided&&l.enable(11),I.flipSided&&l.enable(12),I.useDepthPacking&&l.enable(13),I.dithering&&l.enable(14),I.transmission&&l.enable(15),I.sheen&&l.enable(16),I.opaque&&l.enable(17),I.pointsUvs&&l.enable(18),I.decodeVideoTexture&&l.enable(19),I.decodeVideoTextureEmissive&&l.enable(20),I.alphaToCoverage&&l.enable(21),A.push(l.mask)}function D(A){const I=v[A.type];let k;if(I){const z=Zn[I];k=Bv.clone(z.uniforms)}else k=A.uniforms;return k}function L(A,I){let k=m.get(I);return k!==void 0?++k.usedTimes:(k=new _b(i,I,A,r),f.push(k),m.set(I,k)),k}function O(A){if(--A.usedTimes===0){const I=f.indexOf(A);f[I]=f[f.length-1],f.pop(),m.delete(A.cacheKey),A.destroy()}}function R(A){u.remove(A)}function B(){u.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:D,acquireProgram:L,releaseProgram:O,releaseShaderCache:R,programs:f,dispose:B}}function Mb(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function n(l){i.delete(l)}function r(l,u,d){i.get(l)[u]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function bb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ku(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ju(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(p){let v=0;return p.isInstancedMesh&&(v+=2),p.isSkinnedMesh&&(v+=1),v}function u(p,v,b,C,S,x){let F=i[e];return F===void 0?(F={id:p.id,object:p,geometry:v,material:b,materialVariant:l(p),groupOrder:C,renderOrder:p.renderOrder,z:S,group:x},i[e]=F):(F.id=p.id,F.object=p,F.geometry=v,F.material=b,F.materialVariant=l(p),F.groupOrder=C,F.renderOrder=p.renderOrder,F.z=S,F.group=x),e++,F}function d(p,v,b,C,S,x){const F=u(p,v,b,C,S,x);b.transmission>0?n.push(F):b.transparent===!0?r.push(F):t.push(F)}function f(p,v,b,C,S,x){const F=u(p,v,b,C,S,x);b.transmission>0?n.unshift(F):b.transparent===!0?r.unshift(F):t.unshift(F)}function m(p,v){t.length>1&&t.sort(p||bb),n.length>1&&n.sort(v||Ku),r.length>1&&r.sort(v||Ku)}function g(){for(let p=e,v=i.length;p<v;p++){const b=i[p];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:d,unshift:f,finish:g,sort:m}}function Eb(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new Ju,i.set(n,[l])):r>=a.length?(l=new Ju,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function wb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new at};break;case"SpotLight":t={position:new W,direction:new W,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Tb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ab=0;function Cb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rb(i){const e=new wb,t=Tb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new W);const r=new W,a=new Ft,l=new Ft;function u(f){let m=0,g=0,p=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let v=0,b=0,C=0,S=0,x=0,F=0,D=0,L=0,O=0,R=0,B=0;f.sort(Cb);for(let I=0,k=f.length;I<k;I++){const z=f[I],Y=z.color,Z=z.intensity,K=z.distance;let ie=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===kr?ie=z.shadow.map.texture:ie=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=Y.r*Z,g+=Y.g*Z,p+=Y.b*Z;else if(z.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(z.sh.coefficients[J],Z);B++}else if(z.isDirectionalLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ne=z.shadow,Se=t.get(z);Se.shadowIntensity=ne.intensity,Se.shadowBias=ne.bias,Se.shadowNormalBias=ne.normalBias,Se.shadowRadius=ne.radius,Se.shadowMapSize=ne.mapSize,n.directionalShadow[v]=Se,n.directionalShadowMap[v]=ie,n.directionalShadowMatrix[v]=z.shadow.matrix,F++}n.directional[v]=J,v++}else if(z.isSpotLight){const J=e.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy(Y).multiplyScalar(Z),J.distance=K,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,n.spot[C]=J;const ne=z.shadow;if(z.map&&(n.spotLightMap[O]=z.map,O++,ne.updateMatrices(z),z.castShadow&&R++),n.spotLightMatrix[C]=ne.matrix,z.castShadow){const Se=t.get(z);Se.shadowIntensity=ne.intensity,Se.shadowBias=ne.bias,Se.shadowNormalBias=ne.normalBias,Se.shadowRadius=ne.radius,Se.shadowMapSize=ne.mapSize,n.spotShadow[C]=Se,n.spotShadowMap[C]=ie,L++}C++}else if(z.isRectAreaLight){const J=e.get(z);J.color.copy(Y).multiplyScalar(Z),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=J,S++}else if(z.isPointLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),J.distance=z.distance,J.decay=z.decay,z.castShadow){const ne=z.shadow,Se=t.get(z);Se.shadowIntensity=ne.intensity,Se.shadowBias=ne.bias,Se.shadowNormalBias=ne.normalBias,Se.shadowRadius=ne.radius,Se.shadowMapSize=ne.mapSize,Se.shadowCameraNear=ne.camera.near,Se.shadowCameraFar=ne.camera.far,n.pointShadow[b]=Se,n.pointShadowMap[b]=ie,n.pointShadowMatrix[b]=z.shadow.matrix,D++}n.point[b]=J,b++}else if(z.isHemisphereLight){const J=e.get(z);J.skyColor.copy(z.color).multiplyScalar(Z),J.groundColor.copy(z.groundColor).multiplyScalar(Z),n.hemi[x]=J,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=p;const A=n.hash;(A.directionalLength!==v||A.pointLength!==b||A.spotLength!==C||A.rectAreaLength!==S||A.hemiLength!==x||A.numDirectionalShadows!==F||A.numPointShadows!==D||A.numSpotShadows!==L||A.numSpotMaps!==O||A.numLightProbes!==B)&&(n.directional.length=v,n.spot.length=C,n.rectArea.length=S,n.point.length=b,n.hemi.length=x,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=F,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=L+O-R,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=B,A.directionalLength=v,A.pointLength=b,A.spotLength=C,A.rectAreaLength=S,A.hemiLength=x,A.numDirectionalShadows=F,A.numPointShadows=D,A.numSpotShadows=L,A.numSpotMaps=O,A.numLightProbes=B,n.version=Ab++)}function d(f,m){let g=0,p=0,v=0,b=0,C=0;const S=m.matrixWorldInverse;for(let x=0,F=f.length;x<F;x++){const D=f[x];if(D.isDirectionalLight){const L=n.directional[g];L.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(S),g++}else if(D.isSpotLight){const L=n.spot[v];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(S),v++}else if(D.isRectAreaLight){const L=n.rectArea[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),l.identity(),a.copy(D.matrixWorld),a.premultiply(S),l.extractRotation(a),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(l),L.halfHeight.applyMatrix4(l),b++}else if(D.isPointLight){const L=n.point[p];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),p++}else if(D.isHemisphereLight){const L=n.hemi[C];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(S),C++}}}return{setup:u,setupView:d,state:n}}function Zu(i){const e=new Rb(i),t=[],n=[];function r(m){f.camera=m,t.length=0,n.length=0}function a(m){t.push(m)}function l(m){n.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l}}function Pb(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let u;return l===void 0?(u=new Zu(i),e.set(r,[u])):a>=l.length?(u=new Zu(i),l.push(u)):u=l[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Db=`uniform sampler2D shadow_pass;
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
}`,Fb=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Ib=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Qu=new Ft,ts=new W,Oo=new W;function Ub(i,e,t){let n=new jl;const r=new Ke,a=new Ke,l=new Gt,u=new Hv,d=new Wv,f={},m=t.maxTextureSize,g={[Ni]:xn,[xn]:Ni,[wn]:wn},p=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Lb,fragmentShader:Db}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const b=new fn;b.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new en(b,p),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=os;let x=this.type;this.render=function(R,B,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||R.length===0)return;this.type===v_&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=os);const I=i.getRenderTarget(),k=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(gi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=x!==this.type;Z&&B.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(ie=>ie.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,ie=R.length;K<ie;K++){const J=R[K],ne=J.shadow;if(ne===void 0){Qe("WebGLShadowMap:",J,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;r.copy(ne.mapSize);const Se=ne.getFrameExtents();r.multiply(Se),a.copy(ne.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(a.x=Math.floor(m/Se.x),r.x=a.x*Se.x,ne.mapSize.x=a.x),r.y>m&&(a.y=Math.floor(m/Se.y),r.y=a.y*Se.y,ne.mapSize.y=a.y));const pe=i.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=pe,ne.map===null||Z===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===is){if(J.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new ri(r.x,r.y,{format:kr,type:vi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),ne.map.texture.name=J.name+".shadowMap",ne.map.depthTexture=new _s(r.x,r.y,Qn),ne.map.depthTexture.name=J.name+".shadowMapDepth",ne.map.depthTexture.format=xi,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=an,ne.map.depthTexture.magFilter=an}else J.isPointLight?(ne.map=new Kh(r.x),ne.map.depthTexture=new Mv(r.x,si)):(ne.map=new ri(r.x,r.y),ne.map.depthTexture=new _s(r.x,r.y,si)),ne.map.depthTexture.name=J.name+".shadowMap",ne.map.depthTexture.format=xi,this.type===os?(ne.map.depthTexture.compareFunction=pe?Wl:Hl,ne.map.depthTexture.minFilter=dn,ne.map.depthTexture.magFilter=dn):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=an,ne.map.depthTexture.magFilter=an);ne.camera.updateProjectionMatrix()}const Le=ne.map.isWebGLCubeRenderTarget?6:1;for(let Ne=0;Ne<Le;Ne++){if(ne.map.isWebGLCubeRenderTarget)i.setRenderTarget(ne.map,Ne),i.clear();else{Ne===0&&(i.setRenderTarget(ne.map),i.clear());const Re=ne.getViewport(Ne);l.set(a.x*Re.x,a.y*Re.y,a.x*Re.z,a.y*Re.w),Y.viewport(l)}if(J.isPointLight){const Re=ne.camera,Xe=ne.matrix,Ze=J.distance||Re.far;Ze!==Re.far&&(Re.far=Ze,Re.updateProjectionMatrix()),ts.setFromMatrixPosition(J.matrixWorld),Re.position.copy(ts),Oo.copy(Re.position),Oo.add(Fb[Ne]),Re.up.copy(Ib[Ne]),Re.lookAt(Oo),Re.updateMatrixWorld(),Xe.makeTranslation(-ts.x,-ts.y,-ts.z),Qu.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(Qu,Re.coordinateSystem,Re.reversedDepth)}else ne.updateMatrices(J);n=ne.getFrustum(),L(B,A,ne.camera,J,this.type)}ne.isPointLightShadow!==!0&&this.type===is&&F(ne,A),ne.needsUpdate=!1}x=this.type,S.needsUpdate=!1,i.setRenderTarget(I,k,z)};function F(R,B){const A=e.update(C);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ri(r.x,r.y,{format:kr,type:vi})),p.uniforms.shadow_pass.value=R.map.depthTexture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(B,null,A,p,C,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(B,null,A,v,C,null)}function D(R,B,A,I){let k=null;const z=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)k=z;else if(k=A.isPointLight===!0?d:u,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=k.uuid,Z=B.uuid;let K=f[Y];K===void 0&&(K={},f[Y]=K);let ie=K[Z];ie===void 0&&(ie=k.clone(),K[Z]=ie,B.addEventListener("dispose",O)),k=ie}if(k.visible=B.visible,k.wireframe=B.wireframe,I===is?k.side=B.shadowSide!==null?B.shadowSide:B.side:k.side=B.shadowSide!==null?B.shadowSide:g[B.side],k.alphaMap=B.alphaMap,k.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,k.map=B.map,k.clipShadows=B.clipShadows,k.clippingPlanes=B.clippingPlanes,k.clipIntersection=B.clipIntersection,k.displacementMap=B.displacementMap,k.displacementScale=B.displacementScale,k.displacementBias=B.displacementBias,k.wireframeLinewidth=B.wireframeLinewidth,k.linewidth=B.linewidth,A.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=i.properties.get(k);Y.light=A}return k}function L(R,B,A,I,k){if(R.visible===!1)return;if(R.layers.test(B.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===is)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),K=R.material;if(Array.isArray(K)){const ie=Z.groups;for(let J=0,ne=ie.length;J<ne;J++){const Se=ie[J],pe=K[Se.materialIndex];if(pe&&pe.visible){const Le=D(R,pe,I,k);R.onBeforeShadow(i,R,B,A,Z,Le,Se),i.renderBufferDirect(A,null,Z,Le,R,Se),R.onAfterShadow(i,R,B,A,Z,Le,Se)}}}else if(K.visible){const ie=D(R,K,I,k);R.onBeforeShadow(i,R,B,A,Z,ie,null),i.renderBufferDirect(A,null,Z,ie,R,null),R.onAfterShadow(i,R,B,A,Z,ie,null)}}const Y=R.children;for(let Z=0,K=Y.length;Z<K;Z++)L(Y[Z],B,A,I,k)}function O(R){R.target.removeEventListener("dispose",O);for(const A in f){const I=f[A],k=R.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function Nb(i,e){function t(){let $=!1;const Ae=new Gt;let be=null;const De=new Gt(0,0,0,0);return{setMask:function(X){be!==X&&!$&&(i.colorMask(X,X,X,X),be=X)},setLocked:function(X){$=X},setClear:function(X,G,Ie,Je,xt){xt===!0&&(X*=Je,G*=Je,Ie*=Je),Ae.set(X,G,Ie,Je),De.equals(Ae)===!1&&(i.clearColor(X,G,Ie,Je),De.copy(Ae))},reset:function(){$=!1,be=null,De.set(-1,0,0,0)}}}function n(){let $=!1,Ae=!1,be=null,De=null,X=null;return{setReversed:function(G){if(Ae!==G){const Ie=e.get("EXT_clip_control");G?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Ae=G;const Je=X;X=null,this.setClear(Je)}},getReversed:function(){return Ae},setTest:function(G){G?xe(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(G){be!==G&&!$&&(i.depthMask(G),be=G)},setFunc:function(G){if(Ae&&(G=J_[G]),De!==G){switch(G){case Wo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Nr:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=G}},setLocked:function(G){$=G},setClear:function(G){X!==G&&(X=G,Ae&&(G=1-G),i.clearDepth(G))},reset:function(){$=!1,be=null,De=null,X=null,Ae=!1}}}function r(){let $=!1,Ae=null,be=null,De=null,X=null,G=null,Ie=null,Je=null,xt=null;return{setTest:function(ut){$||(ut?xe(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(ut){Ae!==ut&&!$&&(i.stencilMask(ut),Ae=ut)},setFunc:function(ut,In,$t){(be!==ut||De!==In||X!==$t)&&(i.stencilFunc(ut,In,$t),be=ut,De=In,X=$t)},setOp:function(ut,In,$t){(G!==ut||Ie!==In||Je!==$t)&&(i.stencilOp(ut,In,$t),G=ut,Ie=In,Je=$t)},setLocked:function(ut){$=ut},setClear:function(ut){xt!==ut&&(i.clearStencil(ut),xt=ut)},reset:function(){$=!1,Ae=null,be=null,De=null,X=null,G=null,Ie=null,Je=null,xt=null}}}const a=new t,l=new n,u=new r,d=new WeakMap,f=new WeakMap;let m={},g={},p=new WeakMap,v=[],b=null,C=!1,S=null,x=null,F=null,D=null,L=null,O=null,R=null,B=new at(0,0,0),A=0,I=!1,k=null,z=null,Y=null,Z=null,K=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ne=0;const Se=i.getParameter(i.VERSION);Se.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(Se)[1]),J=ne>=1):Se.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(Se)[1]),J=ne>=2);let pe=null,Le={};const Ne=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Xe=new Gt().fromArray(Ne),Ze=new Gt().fromArray(Re);function et($,Ae,be,De){const X=new Uint8Array(4),G=i.createTexture();i.bindTexture($,G),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<be;Ie++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,X):i.texImage2D(Ae+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,X);return G}const oe={};oe[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(i.DEPTH_TEST),l.setFunc(Nr),it(!1),kt(Jc),xe(i.CULL_FACE),mt(gi);function xe($){m[$]!==!0&&(i.enable($),m[$]=!0)}function re($){m[$]!==!1&&(i.disable($),m[$]=!1)}function Me($,Ae){return g[$]!==Ae?(i.bindFramebuffer($,Ae),g[$]=Ae,$===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ae),$===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function $e($,Ae){let be=v,De=!1;if($){be=p.get(Ae),be===void 0&&(be=[],p.set(Ae,be));const X=$.textures;if(be.length!==X.length||be[0]!==i.COLOR_ATTACHMENT0){for(let G=0,Ie=X.length;G<Ie;G++)be[G]=i.COLOR_ATTACHMENT0+G;be.length=X.length,De=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,De=!0);De&&i.drawBuffers(be)}function qe($){return b!==$?(i.useProgram($),b=$,!0):!1}const bt={[tr]:i.FUNC_ADD,[y_]:i.FUNC_SUBTRACT,[S_]:i.FUNC_REVERSE_SUBTRACT};bt[M_]=i.MIN,bt[b_]=i.MAX;const ct={[E_]:i.ZERO,[w_]:i.ONE,[T_]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[D_]:i.SRC_ALPHA_SATURATE,[P_]:i.DST_COLOR,[C_]:i.DST_ALPHA,[A_]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[L_]:i.ONE_MINUS_DST_COLOR,[R_]:i.ONE_MINUS_DST_ALPHA,[F_]:i.CONSTANT_COLOR,[I_]:i.ONE_MINUS_CONSTANT_COLOR,[U_]:i.CONSTANT_ALPHA,[N_]:i.ONE_MINUS_CONSTANT_ALPHA};function mt($,Ae,be,De,X,G,Ie,Je,xt,ut){if($===gi){C===!0&&(re(i.BLEND),C=!1);return}if(C===!1&&(xe(i.BLEND),C=!0),$!==x_){if($!==S||ut!==I){if((x!==tr||L!==tr)&&(i.blendEquation(i.FUNC_ADD),x=tr,L=tr),ut)switch($){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zc:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:St("WebGLState: Invalid blending: ",$);break}else switch($){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qc:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",$);break}F=null,D=null,O=null,R=null,B.set(0,0,0),A=0,S=$,I=ut}return}X=X||Ae,G=G||be,Ie=Ie||De,(Ae!==x||X!==L)&&(i.blendEquationSeparate(bt[Ae],bt[X]),x=Ae,L=X),(be!==F||De!==D||G!==O||Ie!==R)&&(i.blendFuncSeparate(ct[be],ct[De],ct[G],ct[Ie]),F=be,D=De,O=G,R=Ie),(Je.equals(B)===!1||xt!==A)&&(i.blendColor(Je.r,Je.g,Je.b,xt),B.copy(Je),A=xt),S=$,I=!1}function Tt($,Ae){$.side===wn?re(i.CULL_FACE):xe(i.CULL_FACE);let be=$.side===xn;Ae&&(be=!be),it(be),$.blending===Lr&&$.transparent===!1?mt(gi):mt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),l.setFunc($.depthFunc),l.setTest($.depthTest),l.setMask($.depthWrite),a.setMask($.colorWrite);const De=$.stencilWrite;u.setTest(De),De&&(u.setMask($.stencilWriteMask),u.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),u.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Lt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function it($){k!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),k=$)}function kt($){$!==g_?(xe(i.CULL_FACE),$!==z&&($===Jc?i.cullFace(i.BACK):$===__?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),z=$}function V($){$!==Y&&(J&&i.lineWidth($),Y=$)}function Lt($,Ae,be){$?(xe(i.POLYGON_OFFSET_FILL),(Z!==Ae||K!==be)&&(Z=Ae,K=be,l.getReversed()&&(Ae=-Ae),i.polygonOffset(Ae,be))):re(i.POLYGON_OFFSET_FILL)}function ft($){$?xe(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function vt($){$===void 0&&($=i.TEXTURE0+ie-1),pe!==$&&(i.activeTexture($),pe=$)}function Oe($,Ae,be){be===void 0&&(pe===null?be=i.TEXTURE0+ie-1:be=pe);let De=Le[be];De===void 0&&(De={type:void 0,texture:void 0},Le[be]=De),(De.type!==$||De.texture!==Ae)&&(pe!==be&&(i.activeTexture(be),pe=be),i.bindTexture($,Ae||oe[$]),De.type=$,De.texture=Ae)}function U(){const $=Le[pe];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch($){St("WebGLState:",$)}}function H(){try{i.compressedTexImage3D(...arguments)}catch($){St("WebGLState:",$)}}function ae(){try{i.texSubImage2D(...arguments)}catch($){St("WebGLState:",$)}}function fe(){try{i.texSubImage3D(...arguments)}catch($){St("WebGLState:",$)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch($){St("WebGLState:",$)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch($){St("WebGLState:",$)}}function Te(){try{i.texStorage2D(...arguments)}catch($){St("WebGLState:",$)}}function We(){try{i.texStorage3D(...arguments)}catch($){St("WebGLState:",$)}}function Ye(){try{i.texImage2D(...arguments)}catch($){St("WebGLState:",$)}}function ye(){try{i.texImage3D(...arguments)}catch($){St("WebGLState:",$)}}function Ee($){Xe.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Xe.copy($))}function Be($){Ze.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),Ze.copy($))}function ze($,Ae){let be=f.get(Ae);be===void 0&&(be=new WeakMap,f.set(Ae,be));let De=be.get($);De===void 0&&(De=i.getUniformBlockIndex(Ae,$.name),be.set($,De))}function Fe($,Ae){const De=f.get(Ae).get($);d.get(Ae)!==De&&(i.uniformBlockBinding(Ae,De,$.__bindingPointIndex),d.set(Ae,De))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},pe=null,Le={},g={},p=new WeakMap,v=[],b=null,C=!1,S=null,x=null,F=null,D=null,L=null,O=null,R=null,B=new at(0,0,0),A=0,I=!1,k=null,z=null,Y=null,Z=null,K=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:xe,disable:re,bindFramebuffer:Me,drawBuffers:$e,useProgram:qe,setBlending:mt,setMaterial:Tt,setFlipSided:it,setCullFace:kt,setLineWidth:V,setPolygonOffset:Lt,setScissorTest:ft,activeTexture:vt,bindTexture:Oe,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:Ye,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:Fe,texStorage2D:Te,texStorage3D:We,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:ke,scissor:Ee,viewport:Be,reset:rt}}function Ob(i,e,t,n,r,a,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ke,m=new WeakMap;let g;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return v?new OffscreenCanvas(U,E):ms("canvas")}function C(U,E,H){let ae=1;const fe=Oe(U);if((fe.width>H||fe.height>H)&&(ae=H/Math.max(fe.width,fe.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const le=Math.floor(ae*fe.width),ke=Math.floor(ae*fe.height);g===void 0&&(g=b(le,ke));const Te=E?b(le,ke):g;return Te.width=le,Te.height=ke,Te.getContext("2d").drawImage(U,0,0,le,ke),Qe("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+le+"x"+ke+")."),Te}else return"data"in U&&Qe("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){i.generateMipmap(U)}function F(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(U,E,H,ae,fe=!1){if(U!==null){if(i[U]!==void 0)return i[U];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let le=E;if(E===i.RED&&(H===i.FLOAT&&(le=i.R32F),H===i.HALF_FLOAT&&(le=i.R16F),H===i.UNSIGNED_BYTE&&(le=i.R8)),E===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.R8UI),H===i.UNSIGNED_SHORT&&(le=i.R16UI),H===i.UNSIGNED_INT&&(le=i.R32UI),H===i.BYTE&&(le=i.R8I),H===i.SHORT&&(le=i.R16I),H===i.INT&&(le=i.R32I)),E===i.RG&&(H===i.FLOAT&&(le=i.RG32F),H===i.HALF_FLOAT&&(le=i.RG16F),H===i.UNSIGNED_BYTE&&(le=i.RG8)),E===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.RG8UI),H===i.UNSIGNED_SHORT&&(le=i.RG16UI),H===i.UNSIGNED_INT&&(le=i.RG32UI),H===i.BYTE&&(le=i.RG8I),H===i.SHORT&&(le=i.RG16I),H===i.INT&&(le=i.RG32I)),E===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.RGB8UI),H===i.UNSIGNED_SHORT&&(le=i.RGB16UI),H===i.UNSIGNED_INT&&(le=i.RGB32UI),H===i.BYTE&&(le=i.RGB8I),H===i.SHORT&&(le=i.RGB16I),H===i.INT&&(le=i.RGB32I)),E===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),H===i.UNSIGNED_INT&&(le=i.RGBA32UI),H===i.BYTE&&(le=i.RGBA8I),H===i.SHORT&&(le=i.RGBA16I),H===i.INT&&(le=i.RGBA32I)),E===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),E===i.RGBA){const ke=fe?Sa:Mt.getTransfer(ae);H===i.FLOAT&&(le=i.RGBA32F),H===i.HALF_FLOAT&&(le=i.RGBA16F),H===i.UNSIGNED_BYTE&&(le=ke===Pt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function L(U,E){let H;return U?E===null||E===si||E===fs?H=i.DEPTH24_STENCIL8:E===Qn?H=i.DEPTH32F_STENCIL8:E===ds&&(H=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===si||E===fs?H=i.DEPTH_COMPONENT24:E===Qn?H=i.DEPTH_COMPONENT32F:E===ds&&(H=i.DEPTH_COMPONENT16),H}function O(U,E){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==an&&U.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function R(U){const E=U.target;E.removeEventListener("dispose",R),A(E),E.isVideoTexture&&m.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),k(E)}function A(U){const E=n.get(U);if(E.__webglInit===void 0)return;const H=U.source,ae=p.get(H);if(ae){const fe=ae[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(U),Object.keys(ae).length===0&&p.delete(H)}n.remove(U)}function I(U){const E=n.get(U);i.deleteTexture(E.__webglTexture);const H=U.source,ae=p.get(H);delete ae[E.__cacheKey],l.memory.textures--}function k(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let fe=0;fe<E.__webglFramebuffer[ae].length;fe++)i.deleteFramebuffer(E.__webglFramebuffer[ae][fe]);else i.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)i.deleteFramebuffer(E.__webglFramebuffer[ae]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=U.textures;for(let ae=0,fe=H.length;ae<fe;ae++){const le=n.get(H[ae]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),l.memory.textures--),n.remove(H[ae])}n.remove(U)}let z=0;function Y(){z=0}function Z(){const U=z;return U>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),z+=1,U}function K(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ie(U,E){const H=n.get(U);if(U.isVideoTexture&&ft(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&H.__version!==U.version){const ae=U.image;if(ae===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(H,U,E);return}}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+E)}function J(U,E){const H=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){oe(H,U,E);return}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+E)}function ne(U,E){const H=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){oe(H,U,E);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+E)}function Se(U,E){const H=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&H.__version!==U.version){xe(H,U,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+E)}const pe={[hs]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},Le={[an]:i.NEAREST,[B_]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[rr]:i.LINEAR_MIPMAP_LINEAR},Ne={[V_]:i.NEVER,[q_]:i.ALWAYS,[H_]:i.LESS,[Hl]:i.LEQUAL,[W_]:i.EQUAL,[Wl]:i.GEQUAL,[$_]:i.GREATER,[X_]:i.NOTEQUAL};function Re(U,E){if(E.type===Qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===to||E.magFilter===qs||E.magFilter===rr||E.minFilter===dn||E.minFilter===to||E.minFilter===qs||E.minFilter===rr)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,pe[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,pe[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,pe[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Le[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Le[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===an||E.minFilter!==qs&&E.minFilter!==rr||E.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Xe(U,E){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",R));const ae=E.source;let fe=p.get(ae);fe===void 0&&(fe={},p.set(ae,fe));const le=K(E);if(le!==U.__cacheKey){fe[le]===void 0&&(fe[le]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,H=!0),fe[le].usedTimes++;const ke=fe[U.__cacheKey];ke!==void 0&&(fe[U.__cacheKey].usedTimes--,ke.usedTimes===0&&I(E)),U.__cacheKey=le,U.__webglTexture=fe[le].texture}return H}function Ze(U,E,H){return Math.floor(Math.floor(U/H)/E)}function et(U,E,H,ae){const le=U.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,H,ae,E.data);else{le.sort((ye,Ee)=>ye.start-Ee.start);let ke=0;for(let ye=1;ye<le.length;ye++){const Ee=le[ke],Be=le[ye],ze=Ee.start+Ee.count,Fe=Ze(Be.start,E.width,4),rt=Ze(Ee.start,E.width,4);Be.start<=ze+1&&Fe===rt&&Ze(Be.start+Be.count-1,E.width,4)===Fe?Ee.count=Math.max(Ee.count,Be.start+Be.count-Ee.start):(++ke,le[ke]=Be)}le.length=ke+1;const Te=i.getParameter(i.UNPACK_ROW_LENGTH),We=i.getParameter(i.UNPACK_SKIP_PIXELS),Ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let ye=0,Ee=le.length;ye<Ee;ye++){const Be=le[ye],ze=Math.floor(Be.start/4),Fe=Math.ceil(Be.count/4),rt=ze%E.width,$=Math.floor(ze/E.width),Ae=Fe,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,$),t.texSubImage2D(i.TEXTURE_2D,0,rt,$,Ae,be,H,ae,E.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ye)}}function oe(U,E,H){let ae=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=i.TEXTURE_3D);const fe=Xe(U,E),le=E.source;t.bindTexture(ae,U.__webglTexture,i.TEXTURE0+H);const ke=n.get(le);if(le.version!==ke.__version||fe===!0){t.activeTexture(i.TEXTURE0+H);const Te=Mt.getPrimaries(Mt.workingColorSpace),We=E.colorSpace===Fi?null:Mt.getPrimaries(E.colorSpace),Ye=E.colorSpace===Fi||Te===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ye=C(E.image,!1,r.maxTextureSize);ye=vt(E,ye);const Ee=a.convert(E.format,E.colorSpace),Be=a.convert(E.type);let ze=D(E.internalFormat,Ee,Be,E.colorSpace,E.isVideoTexture);Re(ae,E);let Fe;const rt=E.mipmaps,$=E.isVideoTexture!==!0,Ae=ke.__version===void 0||fe===!0,be=le.dataReady,De=O(E,ye);if(E.isDepthTexture)ze=L(E.format===sr,E.type),Ae&&($?t.texStorage2D(i.TEXTURE_2D,1,ze,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,ze,ye.width,ye.height,0,Ee,Be,null));else if(E.isDataTexture)if(rt.length>0){$&&Ae&&t.texStorage2D(i.TEXTURE_2D,De,ze,rt[0].width,rt[0].height);for(let X=0,G=rt.length;X<G;X++)Fe=rt[X],$?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Fe.width,Fe.height,Ee,Be,Fe.data):t.texImage2D(i.TEXTURE_2D,X,ze,Fe.width,Fe.height,0,Ee,Be,Fe.data);E.generateMipmaps=!1}else $?(Ae&&t.texStorage2D(i.TEXTURE_2D,De,ze,ye.width,ye.height),be&&et(E,ye,Ee,Be)):t.texImage2D(i.TEXTURE_2D,0,ze,ye.width,ye.height,0,Ee,Be,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,ze,rt[0].width,rt[0].height,ye.depth);for(let X=0,G=rt.length;X<G;X++)if(Fe=rt[X],E.format!==Gn)if(Ee!==null)if($){if(be)if(E.layerUpdates.size>0){const Ie=Pu(Fe.width,Fe.height,E.format,E.type);for(const Je of E.layerUpdates){const xt=Fe.data.subarray(Je*Ie/Fe.data.BYTES_PER_ELEMENT,(Je+1)*Ie/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,Je,Fe.width,Fe.height,1,Ee,xt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Fe.width,Fe.height,ye.depth,Ee,Fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,ze,Fe.width,Fe.height,ye.depth,0,Fe.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Fe.width,Fe.height,ye.depth,Ee,Be,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,ze,Fe.width,Fe.height,ye.depth,0,Ee,Be,Fe.data)}else{$&&Ae&&t.texStorage2D(i.TEXTURE_2D,De,ze,rt[0].width,rt[0].height);for(let X=0,G=rt.length;X<G;X++)Fe=rt[X],E.format!==Gn?Ee!==null?$?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Fe.width,Fe.height,Ee,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,X,ze,Fe.width,Fe.height,0,Fe.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Fe.width,Fe.height,Ee,Be,Fe.data):t.texImage2D(i.TEXTURE_2D,X,ze,Fe.width,Fe.height,0,Ee,Be,Fe.data)}else if(E.isDataArrayTexture)if($){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,ze,ye.width,ye.height,ye.depth),be)if(E.layerUpdates.size>0){const X=Pu(ye.width,ye.height,E.format,E.type);for(const G of E.layerUpdates){const Ie=ye.data.subarray(G*X/ye.data.BYTES_PER_ELEMENT,(G+1)*X/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,G,ye.width,ye.height,1,Ee,Be,Ie)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ee,Be,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,ye.width,ye.height,ye.depth,0,Ee,Be,ye.data);else if(E.isData3DTexture)$?(Ae&&t.texStorage3D(i.TEXTURE_3D,De,ze,ye.width,ye.height,ye.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ee,Be,ye.data)):t.texImage3D(i.TEXTURE_3D,0,ze,ye.width,ye.height,ye.depth,0,Ee,Be,ye.data);else if(E.isFramebufferTexture){if(Ae)if($)t.texStorage2D(i.TEXTURE_2D,De,ze,ye.width,ye.height);else{let X=ye.width,G=ye.height;for(let Ie=0;Ie<De;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,ze,X,G,0,Ee,Be,null),X>>=1,G>>=1}}else if(rt.length>0){if($&&Ae){const X=Oe(rt[0]);t.texStorage2D(i.TEXTURE_2D,De,ze,X.width,X.height)}for(let X=0,G=rt.length;X<G;X++)Fe=rt[X],$?be&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ee,Be,Fe):t.texImage2D(i.TEXTURE_2D,X,ze,Ee,Be,Fe);E.generateMipmaps=!1}else if($){if(Ae){const X=Oe(ye);t.texStorage2D(i.TEXTURE_2D,De,ze,X.width,X.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Be,ye)}else t.texImage2D(i.TEXTURE_2D,0,ze,Ee,Be,ye);S(E)&&x(ae),ke.__version=le.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function xe(U,E,H){if(E.image.length!==6)return;const ae=Xe(U,E),fe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+H);const le=n.get(fe);if(fe.version!==le.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);const ke=Mt.getPrimaries(Mt.workingColorSpace),Te=E.colorSpace===Fi?null:Mt.getPrimaries(E.colorSpace),We=E.colorSpace===Fi||ke===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let G=0;G<6;G++)!Ye&&!ye?Ee[G]=C(E.image[G],!0,r.maxCubemapSize):Ee[G]=ye?E.image[G].image:E.image[G],Ee[G]=vt(E,Ee[G]);const Be=Ee[0],ze=a.convert(E.format,E.colorSpace),Fe=a.convert(E.type),rt=D(E.internalFormat,ze,Fe,E.colorSpace),$=E.isVideoTexture!==!0,Ae=le.__version===void 0||ae===!0,be=fe.dataReady;let De=O(E,Be);Re(i.TEXTURE_CUBE_MAP,E);let X;if(Ye){$&&Ae&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,rt,Be.width,Be.height);for(let G=0;G<6;G++){X=Ee[G].mipmaps;for(let Ie=0;Ie<X.length;Ie++){const Je=X[Ie];E.format!==Gn?ze!==null?$?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie,0,0,Je.width,Je.height,ze,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie,rt,Je.width,Je.height,0,Je.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie,0,0,Je.width,Je.height,ze,Fe,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie,rt,Je.width,Je.height,0,ze,Fe,Je.data)}}}else{if(X=E.mipmaps,$&&Ae){X.length>0&&De++;const G=Oe(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,rt,G.width,G.height)}for(let G=0;G<6;G++)if(ye){$?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ee[G].width,Ee[G].height,ze,Fe,Ee[G].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,rt,Ee[G].width,Ee[G].height,0,ze,Fe,Ee[G].data);for(let Ie=0;Ie<X.length;Ie++){const xt=X[Ie].image[G].image;$?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie+1,0,0,xt.width,xt.height,ze,Fe,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie+1,rt,xt.width,xt.height,0,ze,Fe,xt.data)}}else{$?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ze,Fe,Ee[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,rt,ze,Fe,Ee[G]);for(let Ie=0;Ie<X.length;Ie++){const Je=X[Ie];$?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie+1,0,0,ze,Fe,Je.image[G]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie+1,rt,ze,Fe,Je.image[G])}}}S(E)&&x(i.TEXTURE_CUBE_MAP),le.__version=fe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function re(U,E,H,ae,fe,le){const ke=a.convert(H.format,H.colorSpace),Te=a.convert(H.type),We=D(H.internalFormat,ke,Te,H.colorSpace),Ye=n.get(E),ye=n.get(H);if(ye.__renderTarget=E,!Ye.__hasExternalTextures){const Ee=Math.max(1,E.width>>le),Be=Math.max(1,E.height>>le);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,le,We,Ee,Be,E.depth,0,ke,Te,null):t.texImage2D(fe,le,We,Ee,Be,0,ke,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Lt(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,fe,ye.__webglTexture,0,V(E)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,fe,ye.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(U,E,H){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){const ae=E.depthTexture,fe=ae&&ae.isDepthTexture?ae.type:null,le=L(E.stencilBuffer,fe),ke=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Lt(E)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(E),le,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(E),le,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,le,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ke,i.RENDERBUFFER,U)}else{const ae=E.textures;for(let fe=0;fe<ae.length;fe++){const le=ae[fe],ke=a.convert(le.format,le.colorSpace),Te=a.convert(le.type),We=D(le.internalFormat,ke,Te,le.colorSpace);Lt(E)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(E),We,E.width,E.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(E),We,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,We,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(U,E,H){const ae=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(E.depthTexture);if(fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),fe.__webglTexture===void 0){fe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),Re(i.TEXTURE_CUBE_MAP,E.depthTexture);const Ye=a.convert(E.depthTexture.format),ye=a.convert(E.depthTexture.type);let Ee;E.depthTexture.format===xi?Ee=i.DEPTH_COMPONENT24:E.depthTexture.format===sr&&(Ee=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ee,E.width,E.height,0,Ye,ye,null)}}else ie(E.depthTexture,0);const le=fe.__webglTexture,ke=V(E),Te=ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,We=E.depthTexture.format===sr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===xi)Lt(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,We,Te,le,0,ke):i.framebufferTexture2D(i.FRAMEBUFFER,We,Te,le,0);else if(E.depthTexture.format===sr)Lt(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,We,Te,le,0,ke):i.framebufferTexture2D(i.FRAMEBUFFER,We,Te,le,0);else throw new Error("Unknown depthTexture format")}function qe(U){const E=n.get(U),H=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",fe)};ae.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=ae}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let ae=0;ae<6;ae++)$e(E.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?$e(E.__webglFramebuffer[0],U,0):$e(E.__webglFramebuffer,U,0)}else if(H){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=i.createRenderbuffer(),Me(E.__webglDepthbuffer[ae],U,!1);else{const fe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,le)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Me(E.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(U,E,H){const ae=n.get(U);E!==void 0&&re(ae.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&qe(U)}function ct(U){const E=U.texture,H=n.get(U),ae=n.get(E);U.addEventListener("dispose",B);const fe=U.textures,le=U.isWebGLCubeRenderTarget===!0,ke=fe.length>1;if(ke||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=E.version,l.memory.textures++),le){H.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[Te]=[];for(let We=0;We<E.mipmaps.length;We++)H.__webglFramebuffer[Te][We]=i.createFramebuffer()}else H.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)H.__webglFramebuffer[Te]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ke)for(let Te=0,We=fe.length;Te<We;Te++){const Ye=n.get(fe[Te]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),l.memory.textures++)}if(U.samples>0&&Lt(U)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Te=0;Te<fe.length;Te++){const We=fe[Te];H.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Te]);const Ye=a.convert(We.format,We.colorSpace),ye=a.convert(We.type),Ee=D(We.internalFormat,Ye,ye,We.colorSpace,U.isXRRenderTarget===!0),Be=V(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ee,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,H.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(H.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Re(i.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)re(H.__webglFramebuffer[Te][We],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,We);else re(H.__webglFramebuffer[Te],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(E)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Te=0,We=fe.length;Te<We;Te++){const Ye=fe[Te],ye=n.get(Ye);let Ee=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ee=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,ye.__webglTexture),Re(Ee,Ye),re(H.__webglFramebuffer,U,Ye,i.COLOR_ATTACHMENT0+Te,Ee,0),S(Ye)&&x(Ee)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ae.__webglTexture),Re(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)re(H.__webglFramebuffer[We],U,E,i.COLOR_ATTACHMENT0,Te,We);else re(H.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,Te,0);S(E)&&x(Te),t.unbindTexture()}U.depthBuffer&&qe(U)}function mt(U){const E=U.textures;for(let H=0,ae=E.length;H<ae;H++){const fe=E[H];if(S(fe)){const le=F(U),ke=n.get(fe).__webglTexture;t.bindTexture(le,ke),x(le),t.unbindTexture()}}}const Tt=[],it=[];function kt(U){if(U.samples>0){if(Lt(U)===!1){const E=U.textures,H=U.width,ae=U.height;let fe=i.COLOR_BUFFER_BIT;const le=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ke=n.get(U),Te=E.length>1;if(Te)for(let Ye=0;Ye<E.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const We=U.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ye=0;Ye<E.length;Ye++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ye]);const ye=n.get(E[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,H,ae,0,0,H,ae,fe,i.NEAREST),d===!0&&(Tt.length=0,it.length=0,Tt.push(i.COLOR_ATTACHMENT0+Ye),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Tt.push(le),it.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,it)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Ye=0;Ye<E.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,ke.__webglColorRenderbuffer[Ye]);const ye=n.get(E[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ke.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function V(U){return Math.min(r.maxSamples,U.samples)}function Lt(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ft(U){const E=l.render.frame;m.get(U)!==E&&(m.set(U,E),U.update())}function vt(U,E){const H=U.colorSpace,ae=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==Br&&H!==Fi&&(Mt.getTransfer(H)===Pt?(ae!==Gn||fe!==Tn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",H)),E}function Oe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=ie,this.setTexture2DArray=J,this.setTexture3D=ne,this.setTextureCube=Se,this.rebindTextures=bt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function kb(i,e){function t(n,r=Fi){let a;const l=Mt.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Th)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===Ol)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===vi)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ph)return i.RGB;if(n===Gn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===Lh)return i.RED;if(n===zl)return i.RED_INTEGER;if(n===kr)return i.RG;if(n===Gl)return i.RG_INTEGER;if(n===Vl)return i.RGBA_INTEGER;if(n===ga||n===_a||n===va||n===xa)if(l===Pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===va)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Qo||n===el||n===tl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Zo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===nl||n===il)return l===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return a.COMPRESSED_R11_EAC;if(n===al)return a.COMPRESSED_SIGNED_R11_EAC;if(n===ol)return a.COMPRESSED_RG11_EAC;if(n===ll)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cl||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Sl||n===Ml)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===cl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return l===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===El||n===wl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===bl)return l===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===Al||n===Cl||n===Rl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Tl)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
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

}`;class Gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new oi({vertexShader:Bb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vb extends Vr{constructor(e,t){super();const n=this;let r=null,a=1,l=null,u="local-floor",d=1,f=null,m=null,g=null,p=null,v=null,b=null;const C=typeof XRWebGLBinding<"u",S=new Gb,x={},F=t.getContextAttributes();let D=null,L=null;const O=[],R=[],B=new Ke;let A=null;const I=new bn;I.viewport=new Gt;const k=new bn;k.viewport=new Gt;const z=[I,k],Y=new ex;let Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let xe=O[oe];return xe===void 0&&(xe=new co,O[oe]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(oe){let xe=O[oe];return xe===void 0&&(xe=new co,O[oe]=xe),xe.getGripSpace()},this.getHand=function(oe){let xe=O[oe];return xe===void 0&&(xe=new co,O[oe]=xe),xe.getHandSpace()};function ie(oe){const xe=R.indexOf(oe.inputSource);if(xe===-1)return;const re=O[xe];re!==void 0&&(re.update(oe.inputSource,oe.frame,f||l),re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function J(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ne);for(let oe=0;oe<O.length;oe++){const xe=R[oe];xe!==null&&(R[oe]=null,O[oe].disconnect(xe))}Z=null,K=null,S.reset();for(const oe in x)delete x[oe];e.setRenderTarget(D),v=null,p=null,g=null,r=null,L=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(oe){f=oe},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ne),F.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Me=null,$e=null;F.depth&&($e=F.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=F.stencil?sr:xi,Me=F.stencil?fs:si);const qe={colorFormat:t.RGBA8,depthFormat:$e,scaleFactor:a};g=this.getBinding(),p=g.createProjectionLayer(qe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),L=new ri(p.textureWidth,p.textureHeight,{format:Gn,type:Tn,depthTexture:new _s(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const re={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new ri(v.framebufferWidth,v.framebufferHeight,{format:Gn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await r.requestReferenceSpace(u),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ne(oe){for(let xe=0;xe<oe.removed.length;xe++){const re=oe.removed[xe],Me=R.indexOf(re);Me>=0&&(R[Me]=null,O[Me].disconnect(re))}for(let xe=0;xe<oe.added.length;xe++){const re=oe.added[xe];let Me=R.indexOf(re);if(Me===-1){for(let qe=0;qe<O.length;qe++)if(qe>=R.length){R.push(re),Me=qe;break}else if(R[qe]===null){R[qe]=re,Me=qe;break}if(Me===-1)break}const $e=O[Me];$e&&$e.connect(re)}}const Se=new W,pe=new W;function Le(oe,xe,re){Se.setFromMatrixPosition(xe.matrixWorld),pe.setFromMatrixPosition(re.matrixWorld);const Me=Se.distanceTo(pe),$e=xe.projectionMatrix.elements,qe=re.projectionMatrix.elements,bt=$e[14]/($e[10]-1),ct=$e[14]/($e[10]+1),mt=($e[9]+1)/$e[5],Tt=($e[9]-1)/$e[5],it=($e[8]-1)/$e[0],kt=(qe[8]+1)/qe[0],V=bt*it,Lt=bt*kt,ft=Me/(-it+kt),vt=ft*-it;if(xe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(vt),oe.translateZ(ft),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),$e[10]===-1)oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Oe=bt+ft,U=ct+ft,E=V-vt,H=Lt+(Me-vt),ae=mt*ct/U*Oe,fe=Tt*ct/U*Oe;oe.projectionMatrix.makePerspective(E,H,ae,fe,Oe,U),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ne(oe,xe){xe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(xe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let xe=oe.near,re=oe.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(re=S.depthFar)),Y.near=k.near=I.near=xe,Y.far=k.far=I.far=re,(Z!==Y.near||K!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Z=Y.near,K=Y.far),Y.layers.mask=oe.layers.mask|6,I.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;const Me=oe.parent,$e=Y.cameras;Ne(Y,Me);for(let qe=0;qe<$e.length;qe++)Ne($e[qe],Me);$e.length===2?Le(Y,I,k):Y.projectionMatrix.copy(I.projectionMatrix),Re(oe,Y,Me)};function Re(oe,xe,re){re===null?oe.matrix.copy(xe.matrixWorld):(oe.matrix.copy(re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(xe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=ba*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(p===null&&v===null))return d},this.setFoveation=function(oe){d=oe,p!==null&&(p.fixedFoveation=oe),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(oe){return x[oe]};let Xe=null;function Ze(oe,xe){if(m=xe.getViewerPose(f||l),b=xe,m!==null){const re=m.views;v!==null&&(e.setRenderTargetFramebuffer(L,v.framebuffer),e.setRenderTarget(L));let Me=!1;re.length!==Y.cameras.length&&(Y.cameras.length=0,Me=!0);for(let ct=0;ct<re.length;ct++){const mt=re[ct];let Tt=null;if(v!==null)Tt=v.getViewport(mt);else{const kt=g.getViewSubImage(p,mt);Tt=kt.viewport,ct===0&&(e.setRenderTargetTextures(L,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(L))}let it=z[ct];it===void 0&&(it=new bn,it.layers.enable(ct),it.viewport=new Gt,z[ct]=it),it.matrix.fromArray(mt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(mt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ct===0&&(Y.matrix.copy(it.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Me===!0&&Y.cameras.push(it)}const $e=r.enabledFeatures;if($e&&$e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&C){g=n.getBinding();const ct=g.getDepthInformation(re[0]);ct&&ct.isValid&&ct.texture&&S.init(ct,r.renderState)}if($e&&$e.includes("camera-access")&&C){e.state.unbindTexture(),g=n.getBinding();for(let ct=0;ct<re.length;ct++){const mt=re[ct].camera;if(mt){let Tt=x[mt];Tt||(Tt=new zh,x[mt]=Tt);const it=g.getCameraImage(mt);Tt.sourceTexture=it}}}}for(let re=0;re<O.length;re++){const Me=R[re],$e=O[re];Me!==null&&$e!==void 0&&$e.update(Me,xe,f||l)}Xe&&Xe(oe,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),b=null}const et=new Yh;et.setAnimationLoop(Ze),this.setAnimationLoop=function(oe){Xe=oe},this.dispose=function(){}}}const Qi=new ai,Hb=new Ft;function Wb(i,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function n(S,x){x.color.getRGB(S.fogColor.value,Wh(i)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function r(S,x,F,D,L){x.isMeshBasicMaterial?a(S,x):x.isMeshLambertMaterial?(a(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),m(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(a(S,x),p(S,x),x.isMeshPhysicalMaterial&&v(S,x,L)):x.isMeshMatcapMaterial?(a(S,x),b(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),C(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(l(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?d(S,x,F,D):x.isSpriteMaterial?f(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===xn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===xn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const F=e.get(x),D=F.envMap,L=F.envMapRotation;D&&(S.envMap.value=D,Qi.copy(L),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),S.envMapRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(Qi)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function l(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,F,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*F,S.scale.value=D*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function p(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function v(S,x,F){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===xn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const F=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function $b(i,e,t,n){let r={},a={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(F,D){const L=D.program;n.uniformBlockBinding(F,L)}function f(F,D){let L=r[F.id];L===void 0&&(b(F),L=m(F),r[F.id]=L,F.addEventListener("dispose",S));const O=D.program;n.updateUBOMapping(F,O);const R=e.render.frame;a[F.id]!==R&&(p(F),a[F.id]=R)}function m(F){const D=g();F.__bindingPointIndex=D;const L=i.createBuffer(),O=F.__size,R=F.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,O,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,L),L}function g(){for(let F=0;F<u;F++)if(l.indexOf(F)===-1)return l.push(F),F;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(F){const D=r[F.id],L=F.uniforms,O=F.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let R=0,B=L.length;R<B;R++){const A=Array.isArray(L[R])?L[R]:[L[R]];for(let I=0,k=A.length;I<k;I++){const z=A[I];if(v(z,R,I,O)===!0){const Y=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let K=0;for(let ie=0;ie<Z.length;ie++){const J=Z[ie],ne=C(J);typeof J=="number"||typeof J=="boolean"?(z.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,Y+K,z.__data)):J.isMatrix3?(z.__data[0]=J.elements[0],z.__data[1]=J.elements[1],z.__data[2]=J.elements[2],z.__data[3]=0,z.__data[4]=J.elements[3],z.__data[5]=J.elements[4],z.__data[6]=J.elements[5],z.__data[7]=0,z.__data[8]=J.elements[6],z.__data[9]=J.elements[7],z.__data[10]=J.elements[8],z.__data[11]=0):(J.toArray(z.__data,K),K+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(F,D,L,O){const R=F.value,B=D+"_"+L;if(O[B]===void 0)return typeof R=="number"||typeof R=="boolean"?O[B]=R:O[B]=R.clone(),!0;{const A=O[B];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return O[B]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function b(F){const D=F.uniforms;let L=0;const O=16;for(let B=0,A=D.length;B<A;B++){const I=Array.isArray(D[B])?D[B]:[D[B]];for(let k=0,z=I.length;k<z;k++){const Y=I[k],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let K=0,ie=Z.length;K<ie;K++){const J=Z[K],ne=C(J),Se=L%O,pe=Se%ne.boundary,Le=Se+pe;L+=pe,Le!==0&&O-Le<ne.storage&&(L+=O-Le),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=ne.storage}}}const R=L%O;return R>0&&(L+=O-R),F.__size=L,F.__cache={},this}function C(F){const D={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(D.boundary=4,D.storage=4):F.isVector2?(D.boundary=8,D.storage=8):F.isVector3||F.isColor?(D.boundary=16,D.storage=12):F.isVector4?(D.boundary=16,D.storage=16):F.isMatrix3?(D.boundary=48,D.storage=48):F.isMatrix4?(D.boundary=64,D.storage=64):F.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Qe("WebGLRenderer: Unsupported uniform value type.",F),D}function S(F){const D=F.target;D.removeEventListener("dispose",S);const L=l.indexOf(D.__bindingPointIndex);l.splice(L,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function x(){for(const F in r)i.deleteBuffer(r[F]);l=[],r={},a={}}return{bind:d,update:f,dispose:x}}const Xb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function qb(){return Jn===null&&(Jn=new vv(Xb,16,16,kr,vi),Jn.name="DFG_LUT",Jn.minFilter=dn,Jn.magFilter=dn,Jn.wrapS=pi,Jn.wrapT=pi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class jb{constructor(e={}){const{canvas:t=Y_(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:v=Tn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=l;const C=v,S=new Set([Vl,Gl,zl]),x=new Set([Tn,si,ds,fs,kl,Bl]),F=new Uint32Array(4),D=new Int32Array(4);let L=null,O=null;const R=[],B=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let k=!1;this._outputColorSpace=rn;let z=0,Y=0,Z=null,K=-1,ie=null;const J=new Gt,ne=new Gt;let Se=null;const pe=new at(0);let Le=0,Ne=t.width,Re=t.height,Xe=1,Ze=null,et=null;const oe=new Gt(0,0,Ne,Re),xe=new Gt(0,0,Ne,Re);let re=!1;const Me=new jl;let $e=!1,qe=!1;const bt=new Ft,ct=new W,mt=new Gt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function kt(){return Z===null?Xe:1}let V=n;function Lt(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",xt,!1),V===null){const q="webgl2";if(V=Lt(q,P),V===null)throw Lt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw St("WebGLRenderer: "+P.message),P}let ft,vt,Oe,U,E,H,ae,fe,le,ke,Te,We,Ye,ye,Ee,Be,ze,Fe,rt,$,Ae,be,De;function X(){ft=new jS(V),ft.init(),Ae=new kb(V,ft),vt=new zS(V,ft,e,Ae),Oe=new Nb(V,ft),vt.reversedDepthBuffer&&p&&Oe.buffers.depth.setReversed(!0),U=new JS(V),E=new Mb,H=new Ob(V,ft,Oe,E,vt,Ae,U),ae=new qS(I),fe=new nx(V),be=new kS(V,fe),le=new YS(V,fe,U,be),ke=new QS(V,le,fe,be,U),Fe=new ZS(V,vt,H),Ee=new GS(E),Te=new Sb(I,ae,ft,vt,be,Ee),We=new Wb(I,E),Ye=new Eb,ye=new Pb(ft),ze=new OS(I,ae,Oe,ke,b,d),Be=new Ub(I,ke,vt),De=new $b(V,U,vt,Oe),rt=new BS(V,ft,U),$=new KS(V,ft,U),U.programs=Te.programs,I.capabilities=vt,I.extensions=ft,I.properties=E,I.renderLists=Ye,I.shadowMap=Be,I.state=Oe,I.info=U}X(),C!==Tn&&(A=new tM(C,t.width,t.height,r,a));const G=new Vb(I,V);this.xr=G,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=ft.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ft.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Xe},this.setPixelRatio=function(P){P!==void 0&&(Xe=P,this.setSize(Ne,Re,!1))},this.getSize=function(P){return P.set(Ne,Re)},this.setSize=function(P,q,se=!0){if(G.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=P,Re=q,t.width=Math.floor(P*Xe),t.height=Math.floor(q*Xe),se===!0&&(t.style.width=P+"px",t.style.height=q+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(Ne*Xe,Re*Xe).floor()},this.setDrawingBufferSize=function(P,q,se){Ne=P,Re=q,Xe=se,t.width=Math.floor(P*se),t.height=Math.floor(q*se),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(C===Tn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(J)},this.getViewport=function(P){return P.copy(oe)},this.setViewport=function(P,q,se,te){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,q,se,te),Oe.viewport(J.copy(oe).multiplyScalar(Xe).round())},this.getScissor=function(P){return P.copy(xe)},this.setScissor=function(P,q,se,te){P.isVector4?xe.set(P.x,P.y,P.z,P.w):xe.set(P,q,se,te),Oe.scissor(ne.copy(xe).multiplyScalar(Xe).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(P){Oe.setScissorTest(re=P)},this.setOpaqueSort=function(P){Ze=P},this.setTransparentSort=function(P){et=P},this.getClearColor=function(P){return P.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,se=!0){let te=0;if(P){let Q=!1;if(Z!==null){const Ce=Z.texture.format;Q=S.has(Ce)}if(Q){const Ce=Z.texture.type,Ue=x.has(Ce),de=ze.getClearColor(),Ge=ze.getClearAlpha(),Ve=de.r,tt=de.g,nt=de.b;Ue?(F[0]=Ve,F[1]=tt,F[2]=nt,F[3]=Ge,V.clearBufferuiv(V.COLOR,0,F)):(D[0]=Ve,D[1]=tt,D[2]=nt,D[3]=Ge,V.clearBufferiv(V.COLOR,0,D))}else te|=V.COLOR_BUFFER_BIT}q&&(te|=V.DEPTH_BUFFER_BIT),se&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),ze.dispose(),Ye.dispose(),ye.dispose(),E.dispose(),ae.dispose(),ke.dispose(),be.dispose(),De.dispose(),Te.dispose(),G.dispose(),G.removeEventListener("sessionstart",An),G.removeEventListener("sessionend",ws),Cn.stop()};function Ie(P){P.preventDefault(),su("WebGLRenderer: Context Lost."),k=!0}function Je(){su("WebGLRenderer: Context Restored."),k=!1;const P=U.autoReset,q=Be.enabled,se=Be.autoUpdate,te=Be.needsUpdate,Q=Be.type;X(),U.autoReset=P,Be.enabled=q,Be.autoUpdate=se,Be.needsUpdate=te,Be.type=Q}function xt(P){St("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ut(P){const q=P.target;q.removeEventListener("dispose",ut),In(q)}function In(P){$t(P),E.remove(P)}function $t(P){const q=E.get(P).programs;q!==void 0&&(q.forEach(function(se){Te.releaseProgram(se)}),P.isShaderMaterial&&Te.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,se,te,Q,Ce){q===null&&(q=Tt);const Ue=Q.isMesh&&Q.matrixWorld.determinant()<0,de=Ia(P,q,se,te,Q);Oe.setMaterial(te,Ue);let Ge=se.index,Ve=1;if(te.wireframe===!0){if(Ge=le.getWireframeAttribute(se),Ge===void 0)return;Ve=2}const tt=se.drawRange,nt=se.attributes.position;let He=tt.start*Ve,wt=(tt.start+tt.count)*Ve;Ce!==null&&(He=Math.max(He,Ce.start*Ve),wt=Math.min(wt,(Ce.start+Ce.count)*Ve)),Ge!==null?(He=Math.max(He,0),wt=Math.min(wt,Ge.count)):nt!=null&&(He=Math.max(He,0),wt=Math.min(wt,nt.count));const Bt=wt-He;if(Bt<0||Bt===1/0)return;be.setup(Q,te,de,se,Ge);let It,Ct=rt;if(Ge!==null&&(It=fe.get(Ge),Ct=$,Ct.setIndex(It)),Q.isMesh)te.wireframe===!0?(Oe.setLineWidth(te.wireframeLinewidth*kt()),Ct.setMode(V.LINES)):Ct.setMode(V.TRIANGLES);else if(Q.isLine){let Xt=te.linewidth;Xt===void 0&&(Xt=1),Oe.setLineWidth(Xt*kt()),Q.isLineSegments?Ct.setMode(V.LINES):Q.isLineLoop?Ct.setMode(V.LINE_LOOP):Ct.setMode(V.LINE_STRIP)}else Q.isPoints?Ct.setMode(V.POINTS):Q.isSprite&&Ct.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ma("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Xt=Q._multiDrawStarts,M=Q._multiDrawCounts,ht=Q._multiDrawCount,_t=Ge?fe.get(Ge).bytesPerElement:1,ln=E.get(te).currentProgram.getUniforms();for(let tn=0;tn<ht;tn++)ln.setValue(V,"_gl_DrawID",tn),Ct.render(Xt[tn]/_t,M[tn])}else if(Q.isInstancedMesh)Ct.renderInstances(He,Bt,Q.count);else if(se.isInstancedBufferGeometry){const Xt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,M=Math.min(se.instanceCount,Xt);Ct.renderInstances(He,Bt,M)}else Ct.render(He,Bt)};function zi(P,q,se){P.transparent===!0&&P.side===wn&&P.forceSinglePass===!1?(P.side=xn,P.needsUpdate=!0,Gi(P,q,se),P.side=Ni,P.needsUpdate=!0,Gi(P,q,se),P.side=wn):Gi(P,q,se)}this.compile=function(P,q,se=null){se===null&&(se=P),O=ye.get(se),O.init(q),B.push(O),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),P!==se&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),O.setupLights();const te=new Set;return P.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const de=Ce[Ue];zi(de,se,Q),te.add(de)}else zi(Ce,se,Q),te.add(Ce)}),O=B.pop(),te},this.compileAsync=function(P,q,se=null){const te=this.compile(P,q,se);return new Promise(Q=>{function Ce(){if(te.forEach(function(Ue){E.get(Ue).currentProgram.isReady()&&te.delete(Ue)}),te.size===0){Q(P);return}setTimeout(Ce,10)}ft.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let $r=null;function Fa(P){$r&&$r(P)}function An(){Cn.stop()}function ws(){Cn.start()}const Cn=new Yh;Cn.setAnimationLoop(Fa),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(P){$r=P,G.setAnimationLoop(P),P===null?Cn.stop():Cn.start()},G.addEventListener("sessionstart",An),G.addEventListener("sessionend",ws),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const se=G.enabled===!0&&G.isPresenting===!0,te=A!==null&&(Z===null||se)&&A.begin(I,Z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(G.cameraAutoUpdate===!0&&G.updateCamera(q),q=G.getCamera()),P.isScene===!0&&P.onBeforeRender(I,P,q,Z),O=ye.get(P,B.length),O.init(q),B.push(O),bt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Me.setFromProjectionMatrix(bt,ei,q.reversedDepth),qe=this.localClippingEnabled,$e=Ee.init(this.clippingPlanes,qe),L=Ye.get(P,R.length),L.init(),R.push(L),G.enabled===!0&&G.isPresenting===!0){const Ue=I.xr.getDepthSensingMesh();Ue!==null&&Mi(Ue,q,-1/0,I.sortObjects)}Mi(P,q,0,I.sortObjects),L.finish(),I.sortObjects===!0&&L.sort(Ze,et),it=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,it&&ze.addToRenderList(L,P),this.info.render.frame++,$e===!0&&Ee.beginShadows();const Q=O.state.shadowsArray;if(Be.render(Q,P,q),$e===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&A.hasRenderPass())===!1){const Ue=L.opaque,de=L.transmissive;if(O.setupLights(),q.isArrayCamera){const Ge=q.cameras;if(de.length>0)for(let Ve=0,tt=Ge.length;Ve<tt;Ve++){const nt=Ge[Ve];Ts(Ue,de,P,nt)}it&&ze.render(P);for(let Ve=0,tt=Ge.length;Ve<tt;Ve++){const nt=Ge[Ve];ur(L,P,nt,nt.viewport)}}else de.length>0&&Ts(Ue,de,P,q),it&&ze.render(P),ur(L,P,q)}Z!==null&&Y===0&&(H.updateMultisampleRenderTarget(Z),H.updateRenderTargetMipmap(Z)),te&&A.end(I),P.isScene===!0&&P.onAfterRender(I,P,q),be.resetDefaultState(),K=-1,ie=null,B.pop(),B.length>0?(O=B[B.length-1],$e===!0&&Ee.setGlobalState(I.clippingPlanes,O.state.camera)):O=null,R.pop(),R.length>0?L=R[R.length-1]:L=null};function Mi(P,q,se,te){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)se=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)O.pushLight(P),P.castShadow&&O.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Me.intersectsSprite(P)){te&&mt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(bt);const Ue=ke.update(P),de=P.material;de.visible&&L.push(P,Ue,de,se,mt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Me.intersectsObject(P))){const Ue=ke.update(P),de=P.material;if(te&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),mt.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),mt.copy(Ue.boundingSphere.center)),mt.applyMatrix4(P.matrixWorld).applyMatrix4(bt)),Array.isArray(de)){const Ge=Ue.groups;for(let Ve=0,tt=Ge.length;Ve<tt;Ve++){const nt=Ge[Ve],He=de[nt.materialIndex];He&&He.visible&&L.push(P,Ue,He,se,mt.z,nt)}}else de.visible&&L.push(P,Ue,de,se,mt.z,null)}}const Ce=P.children;for(let Ue=0,de=Ce.length;Ue<de;Ue++)Mi(Ce[Ue],q,se,te)}function ur(P,q,se,te){const{opaque:Q,transmissive:Ce,transparent:Ue}=P;O.setupLightsView(se),$e===!0&&Ee.setGlobalState(I.clippingPlanes,se),te&&Oe.viewport(J.copy(te)),Q.length>0&&hr(Q,q,se),Ce.length>0&&hr(Ce,q,se),Ue.length>0&&hr(Ue,q,se),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Ts(P,q,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[te.id]===void 0){const He=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[te.id]=new ri(1,1,{generateMipmaps:!0,type:He?vi:Tn,minFilter:rr,samples:Math.max(4,vt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ce=O.state.transmissionRenderTarget[te.id],Ue=te.viewport||J;Ce.setSize(Ue.z*I.transmissionResolutionScale,Ue.w*I.transmissionResolutionScale);const de=I.getRenderTarget(),Ge=I.getActiveCubeFace(),Ve=I.getActiveMipmapLevel();I.setRenderTarget(Ce),I.getClearColor(pe),Le=I.getClearAlpha(),Le<1&&I.setClearColor(16777215,.5),I.clear(),it&&ze.render(se);const tt=I.toneMapping;I.toneMapping=ii;const nt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),O.setupLightsView(te),$e===!0&&Ee.setGlobalState(I.clippingPlanes,te),hr(P,se,te),H.updateMultisampleRenderTarget(Ce),H.updateRenderTargetMipmap(Ce),ft.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let wt=0,Bt=q.length;wt<Bt;wt++){const It=q[wt],{object:Ct,geometry:Xt,material:M,group:ht}=It;if(M.side===wn&&Ct.layers.test(te.layers)){const _t=M.side;M.side=xn,M.needsUpdate=!0,As(Ct,se,te,Xt,M,ht),M.side=_t,M.needsUpdate=!0,He=!0}}He===!0&&(H.updateMultisampleRenderTarget(Ce),H.updateRenderTargetMipmap(Ce))}I.setRenderTarget(de,Ge,Ve),I.setClearColor(pe,Le),nt!==void 0&&(te.viewport=nt),I.toneMapping=tt}function hr(P,q,se){const te=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ce=P.length;Q<Ce;Q++){const Ue=P[Q],{object:de,geometry:Ge,group:Ve}=Ue;let tt=Ue.material;tt.allowOverride===!0&&te!==null&&(tt=te),de.layers.test(se.layers)&&As(de,q,se,Ge,tt,Ve)}}function As(P,q,se,te,Q,Ce){P.onBeforeRender(I,q,se,te,Q,Ce),P.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(I,q,se,te,P,Ce),Q.transparent===!0&&Q.side===wn&&Q.forceSinglePass===!1?(Q.side=xn,Q.needsUpdate=!0,I.renderBufferDirect(se,q,te,Q,P,Ce),Q.side=Ni,Q.needsUpdate=!0,I.renderBufferDirect(se,q,te,Q,P,Ce),Q.side=wn):I.renderBufferDirect(se,q,te,Q,P,Ce),P.onAfterRender(I,q,se,te,Q,Ce)}function Gi(P,q,se){q.isScene!==!0&&(q=Tt);const te=E.get(P),Q=O.state.lights,Ce=O.state.shadowsArray,Ue=Q.state.version,de=Te.getParameters(P,Q.state,Ce,q,se),Ge=Te.getProgramCacheKey(de);let Ve=te.programs;te.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const tt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;te.envMap=ae.get(P.envMap||te.environment,tt),te.envMapRotation=te.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Ve===void 0&&(P.addEventListener("dispose",ut),Ve=new Map,te.programs=Ve);let nt=Ve.get(Ge);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Ue)return Rs(P,de),nt}else de.uniforms=Te.getUniforms(P),P.onBeforeCompile(de,I),nt=Te.acquireProgram(de,Ge),Ve.set(Ge,nt),te.uniforms=de.uniforms;const He=te.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(He.clippingPlanes=Ee.uniform),Rs(P,de),te.needsLights=At(P),te.lightsStateVersion=Ue,te.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function Cs(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=ya.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function Rs(P,q){const se=E.get(P);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function Ia(P,q,se,te,Q){q.isScene!==!0&&(q=Tt),H.resetTextureUnits();const Ce=q.fog,Ue=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,de=Z===null?I.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Br,Ge=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ve=ae.get(te.envMap||Ue,Ge),tt=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,nt=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,Bt=!!se.morphAttributes.color;let It=ii;te.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(It=I.toneMapping);const Ct=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Xt=Ct!==void 0?Ct.length:0,M=E.get(te),ht=O.state.lights;if($e===!0&&(qe===!0||P!==ie)){const Vt=P===ie&&te.id===K;Ee.setState(te,P,Vt)}let _t=!1;te.version===M.__version?(M.needsLights&&M.lightsStateVersion!==ht.state.version||M.outputColorSpace!==de||Q.isBatchedMesh&&M.batching===!1||!Q.isBatchedMesh&&M.batching===!0||Q.isBatchedMesh&&M.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&M.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&M.instancing===!1||!Q.isInstancedMesh&&M.instancing===!0||Q.isSkinnedMesh&&M.skinning===!1||!Q.isSkinnedMesh&&M.skinning===!0||Q.isInstancedMesh&&M.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&M.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&M.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&M.instancingMorph===!1&&Q.morphTexture!==null||M.envMap!==Ve||te.fog===!0&&M.fog!==Ce||M.numClippingPlanes!==void 0&&(M.numClippingPlanes!==Ee.numPlanes||M.numIntersection!==Ee.numIntersection)||M.vertexAlphas!==tt||M.vertexTangents!==nt||M.morphTargets!==He||M.morphNormals!==wt||M.morphColors!==Bt||M.toneMapping!==It||M.morphTargetsCount!==Xt)&&(_t=!0):(_t=!0,M.__version=te.version);let ln=M.currentProgram;_t===!0&&(ln=Gi(te,q,Q));let tn=!1,li=!1,Ei=!1;const Rt=ln.getUniforms(),qt=M.uniforms;if(Oe.useProgram(ln.program)&&(tn=!0,li=!0,Ei=!0),te.id!==K&&(K=te.id,li=!0),tn||ie!==P){Oe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Rt.setValue(V,"projectionMatrix",P.projectionMatrix),Rt.setValue(V,"viewMatrix",P.matrixWorldInverse);const $n=Rt.map.cameraPosition;$n!==void 0&&$n.setValue(V,ct.setFromMatrixPosition(P.matrixWorld)),vt.logarithmicDepthBuffer&&Rt.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),ie!==P&&(ie=P,li=!0,Ei=!0)}if(M.needsLights&&(ht.state.directionalShadowMap.length>0&&Rt.setValue(V,"directionalShadowMap",ht.state.directionalShadowMap,H),ht.state.spotShadowMap.length>0&&Rt.setValue(V,"spotShadowMap",ht.state.spotShadowMap,H),ht.state.pointShadowMap.length>0&&Rt.setValue(V,"pointShadowMap",ht.state.pointShadowMap,H)),Q.isSkinnedMesh){Rt.setOptional(V,Q,"bindMatrix"),Rt.setOptional(V,Q,"bindMatrixInverse");const Vt=Q.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Rt.setValue(V,"boneTexture",Vt.boneTexture,H))}Q.isBatchedMesh&&(Rt.setOptional(V,Q,"batchingTexture"),Rt.setValue(V,"batchingTexture",Q._matricesTexture,H),Rt.setOptional(V,Q,"batchingIdTexture"),Rt.setValue(V,"batchingIdTexture",Q._indirectTexture,H),Rt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Rt.setValue(V,"batchingColorTexture",Q._colorsTexture,H));const Wn=se.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&Fe.update(Q,se,ln),(li||M.receiveShadow!==Q.receiveShadow)&&(M.receiveShadow=Q.receiveShadow,Rt.setValue(V,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(qt.envMapIntensity.value=q.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=qb()),li&&(Rt.setValue(V,"toneMappingExposure",I.toneMappingExposure),M.needsLights&&Ua(qt,Ei),Ce&&te.fog===!0&&We.refreshFogUniforms(qt,Ce),We.refreshMaterialUniforms(qt,te,Xe,Re,O.state.transmissionRenderTarget[P.id]),ya.upload(V,Cs(M),qt,H)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ya.upload(V,Cs(M),qt,H),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(V,"center",Q.center),Rt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Rt.setValue(V,"normalMatrix",Q.normalMatrix),Rt.setValue(V,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Vt=te.uniformsGroups;for(let $n=0,wi=Vt.length;$n<wi;$n++){const zt=Vt[$n];De.update(zt,ln),De.bind(zt,ln)}}return ln}function Ua(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function At(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(P,q,se){const te=E.get(P);te.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),E.get(P.texture).__webglTexture=q,E.get(P.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){const se=E.get(P);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const Na=V.createFramebuffer();this.setRenderTarget=function(P,q=0,se=0){Z=P,z=q,Y=se;let te=null,Q=!1,Ce=!1;if(P){const de=E.get(P);if(de.__useDefaultFramebuffer!==void 0){Oe.bindFramebuffer(V.FRAMEBUFFER,de.__webglFramebuffer),J.copy(P.viewport),ne.copy(P.scissor),Se=P.scissorTest,Oe.viewport(J),Oe.scissor(ne),Oe.setScissorTest(Se),K=-1;return}else if(de.__webglFramebuffer===void 0)H.setupRenderTarget(P);else if(de.__hasExternalTextures)H.rebindTextures(P,E.get(P.texture).__webglTexture,E.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const tt=P.depthTexture;if(de.__boundDepthTexture!==tt){if(tt!==null&&E.has(tt)&&(P.width!==tt.image.width||P.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(P)}}const Ge=P.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ce=!0);const Ve=E.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ve[q])?te=Ve[q][se]:te=Ve[q],Q=!0):P.samples>0&&H.useMultisampledRTT(P)===!1?te=E.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?te=Ve[se]:te=Ve,J.copy(P.viewport),ne.copy(P.scissor),Se=P.scissorTest}else J.copy(oe).multiplyScalar(Xe).floor(),ne.copy(xe).multiplyScalar(Xe).floor(),Se=re;if(se!==0&&(te=Na),Oe.bindFramebuffer(V.FRAMEBUFFER,te)&&Oe.drawBuffers(P,te),Oe.viewport(J),Oe.scissor(ne),Oe.setScissorTest(Se),Q){const de=E.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,de.__webglTexture,se)}else if(Ce){const de=q;for(let Ge=0;Ge<P.textures.length;Ge++){const Ve=E.get(P.textures[Ge]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ge,Ve.__webglTexture,se,de)}}else if(P!==null&&se!==0){const de=E.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,de.__webglTexture,se)}K=-1},this.readRenderTargetPixels=function(P,q,se,te,Q,Ce,Ue,de=0){if(!(P&&P.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){Oe.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const Ve=P.textures[de],tt=Ve.format,nt=Ve.type;if(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!vt.textureFormatReadable(tt)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(nt)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-te&&se>=0&&se<=P.height-Q&&V.readPixels(q,se,te,Q,Ae.convert(tt),Ae.convert(nt),Ce)}finally{const Ve=Z!==null?E.get(Z).__webglFramebuffer:null;Oe.bindFramebuffer(V.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(P,q,se,te,Q,Ce,Ue,de=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge)if(q>=0&&q<=P.width-te&&se>=0&&se<=P.height-Q){Oe.bindFramebuffer(V.FRAMEBUFFER,Ge);const Ve=P.textures[de],tt=Ve.format,nt=Ve.type;if(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+de),!vt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(q,se,te,Q,Ae.convert(tt),Ae.convert(nt),0);const wt=Z!==null?E.get(Z).__webglFramebuffer:null;Oe.bindFramebuffer(V.FRAMEBUFFER,wt);const Bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await K_(V,Bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(He),V.deleteSync(Bt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,se=0){const te=Math.pow(2,-se),Q=Math.floor(P.image.width*te),Ce=Math.floor(P.image.height*te),Ue=q!==null?q.x:0,de=q!==null?q.y:0;H.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,se,0,0,Ue,de,Q,Ce),Oe.unbindTexture()};const Ps=V.createFramebuffer(),bi=V.createFramebuffer();this.copyTextureToTexture=function(P,q,se=null,te=null,Q=0,Ce=0){let Ue,de,Ge,Ve,tt,nt,He,wt,Bt;const It=P.isCompressedTexture?P.mipmaps[Ce]:P.image;if(se!==null)Ue=se.max.x-se.min.x,de=se.max.y-se.min.y,Ge=se.isBox3?se.max.z-se.min.z:1,Ve=se.min.x,tt=se.min.y,nt=se.isBox3?se.min.z:0;else{const qt=Math.pow(2,-Q);Ue=Math.floor(It.width*qt),de=Math.floor(It.height*qt),P.isDataArrayTexture?Ge=It.depth:P.isData3DTexture?Ge=Math.floor(It.depth*qt):Ge=1,Ve=0,tt=0,nt=0}te!==null?(He=te.x,wt=te.y,Bt=te.z):(He=0,wt=0,Bt=0);const Ct=Ae.convert(q.format),Xt=Ae.convert(q.type);let M;q.isData3DTexture?(H.setTexture3D(q,0),M=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(H.setTexture2DArray(q,0),M=V.TEXTURE_2D_ARRAY):(H.setTexture2D(q,0),M=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const ht=V.getParameter(V.UNPACK_ROW_LENGTH),_t=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ln=V.getParameter(V.UNPACK_SKIP_PIXELS),tn=V.getParameter(V.UNPACK_SKIP_ROWS),li=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,It.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,It.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ve),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,nt);const Ei=P.isDataArrayTexture||P.isData3DTexture,Rt=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const qt=E.get(P),Wn=E.get(q),Vt=E.get(qt.__renderTarget),$n=E.get(Wn.__renderTarget);Oe.bindFramebuffer(V.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let wi=0;wi<Ge;wi++)Ei&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(P).__webglTexture,Q,nt+wi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ce,Bt+wi)),V.blitFramebuffer(Ve,tt,Ue,de,He,wt,Ue,de,V.DEPTH_BUFFER_BIT,V.NEAREST);Oe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||P.isRenderTargetTexture||E.has(P)){const qt=E.get(P),Wn=E.get(q);Oe.bindFramebuffer(V.READ_FRAMEBUFFER,Ps),Oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,bi);for(let Vt=0;Vt<Ge;Vt++)Ei?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qt.__webglTexture,Q,nt+Vt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,qt.__webglTexture,Q),Rt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wn.__webglTexture,Ce,Bt+Vt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Wn.__webglTexture,Ce),Q!==0?V.blitFramebuffer(Ve,tt,Ue,de,He,wt,Ue,de,V.COLOR_BUFFER_BIT,V.NEAREST):Rt?V.copyTexSubImage3D(M,Ce,He,wt,Bt+Vt,Ve,tt,Ue,de):V.copyTexSubImage2D(M,Ce,He,wt,Ve,tt,Ue,de);Oe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rt?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(M,Ce,He,wt,Bt,Ue,de,Ge,Ct,Xt,It.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(M,Ce,He,wt,Bt,Ue,de,Ge,Ct,It.data):V.texSubImage3D(M,Ce,He,wt,Bt,Ue,de,Ge,Ct,Xt,It):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,He,wt,Ue,de,Ct,Xt,It.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,He,wt,It.width,It.height,Ct,It.data):V.texSubImage2D(V.TEXTURE_2D,Ce,He,wt,Ue,de,Ct,Xt,It);V.pixelStorei(V.UNPACK_ROW_LENGTH,ht),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ln),V.pixelStorei(V.UNPACK_SKIP_ROWS,tn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,li),Ce===0&&q.generateMipmaps&&V.generateMipmap(M),Oe.unbindTexture()},this.initRenderTarget=function(P){E.get(P).__webglFramebuffer===void 0&&H.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?H.setTextureCube(P,0):P.isData3DTexture?H.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?H.setTexture2DArray(P,0):H.setTexture2D(P,0),Oe.unbindTexture()},this.resetState=function(){z=0,Y=0,Z=null,Oe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}function td(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),a={},l={},u=i[0].morphTargetsRelative,d=new fn;let f=0;for(let m=0;m<i.length;++m){const g=i[m];let p=0;if(t!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in g.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;a[v]===void 0&&(a[v]=[]),a[v].push(g.attributes[v]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". Make sure all geometries have the same number of attributes."),null;if(u!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in g.morphAttributes){if(!r.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+".  .morphAttributes must be consistent throughout all geometries."),null;l[v]===void 0&&(l[v]=[]),l[v].push(g.morphAttributes[v])}if(e){let v;if(t)v=g.index.count;else if(g.attributes.position!==void 0)v=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+m+". The geometry must have either an index or a position attribute"),null;d.addGroup(f,v,m),f+=v}}if(t){let m=0;const g=[];for(let p=0;p<i.length;++p){const v=i[p].index;for(let b=0;b<v.count;++b)g.push(v.getX(b)+m);m+=i[p].attributes.position.count}d.setIndex(g)}for(const m in a){const g=eh(a[m]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" attribute."),null;d.setAttribute(m,g)}for(const m in l){const g=l[m][0].length;if(g===0)break;d.morphAttributes=d.morphAttributes||{},d.morphAttributes[m]=[];for(let p=0;p<g;++p){const v=[];for(let C=0;C<l[m].length;++C)v.push(l[m][C][p]);const b=eh(v);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+m+" morphAttribute."),null;d.morphAttributes[m].push(b)}}return d}function eh(i){let e,t,n,r=-1,a=0;for(let f=0;f<i.length;++f){const m=i[f];if(e===void 0&&(e=m.array.constructor),e!==m.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=m.itemSize),t!==m.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=m.normalized),n!==m.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=m.gpuType),r!==m.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=m.count*t}const l=new e(a),u=new Dn(l,t,n);let d=0;for(let f=0;f<i.length;++f){const m=i[f];if(m.isInterleavedBufferAttribute){const g=d/t;for(let p=0,v=m.count;p<v;p++)for(let b=0;b<t;b++){const C=m.getComponent(p,b);u.setComponent(p+g,b,C)}}else l.set(m.array,d);d+=m.count*t}return r!==void 0&&(u.gpuType=r),u}const ns=[{id:"penn",name:"Penn",file:"penn-logo.png"},{id:"xlab",name:"xLab",file:"brands/xlab.png"},{id:"alliance",name:"Alliance",file:"brands/alliance.png"},{id:"jhu",name:"Johns Hopkins",file:"brands/johns-hopkins.png"},{id:"jirl",name:"JIRL",file:"brands/jirl.png"}];class Yb{constructor(e,t,n){this.venue=t,this.walls=n,this.boards=[],this.flags=[],this.pennants=0,this.loaded=!1,this.group=new ni,this.group.name="venue-branding",e.add(this.group),this.ready=this.load()}async load(){const e=await Promise.all(ns.map(n=>new Promise((r,a)=>{const l=new Image;l.onload=()=>r(l),l.onerror=()=>a(new Error(`${n.name} logo could not be loaded`)),l.src=`/demo/venue/${n.file}`})));this.images=Object.fromEntries(ns.map((n,r)=>[n.id,e[r]]));const t=this.venue.textTexture(4096,640,(n,r,a)=>{n.fillStyle="#ffffff",n.fillRect(0,0,r,a),n.fillStyle="#011f5b",n.fillRect(0,a-24,r*.78,24),n.fillStyle="#990000",n.fillRect(r*.78,a-24,r*.22,24);const l=[["penn",.04,.17],["xlab",.225,.11],["alliance",.36,.2],["jhu",.59,.225],["jirl",.845,.125]];for(const[u,d,f]of l)this.drawLogo(n,u,d*r,90,f*r,a-200)});this.wallBoard(t,17,2.65625,[-3,-4,4.55],[1,0,0],"east-brand-wall"),this.wallBoard(t,17,2.65625,[-3,-5,4.55],[-1,0,0],"west-brand-wall"),this.addPennants([-3,-4,6.8],[1,0,0]),this.addPennants([-3,-5,6.8],[-1,0,0]);for(const[n,r,a,l]of[["alliance",-20,-8,1.25],["jirl",-20,-14,1.5],["xlab",4.5,-.5,-Math.PI/2],["jhu",4.5,9,-Math.PI/2]])this.addFlag(n,r,a,l);this.loaded=!0,this.images=null}drawLogo(e,t,n,r,a,l,u=!1){const d=this.images[t];e.save(),e.translate(n+a/2,r+l/2),u&&(e.rotate(-Math.PI/2),[a,l]=[l,a]);const f=Math.min(a/d.naturalWidth,l/d.naturalHeight);e.drawImage(d,-d.naturalWidth*f/2,-d.naturalHeight*f/2,d.naturalWidth*f,d.naturalHeight*f),e.restore()}material(e){const t=new Fr({color:e,roughness:.93,metalness:0});return this.venue.materials.push(t),t}mesh(e,t,n,r){this.venue.geometries.push(e);const a=new en(e,t);return a.position.set(...r),n.add(a),a}wallMount(e,t){for(const f of this.walls)f.updateMatrixWorld(!0);const n=new W(...t),r=new jh(new W(...e),n).intersectObjects(this.walls,!1)[0];if(!r)throw new Error("Branding must attach to an existing wall");const a=new W(n.y,-n.x,0),l=new W(0,0,1),u=n.clone().negate(),d=new ni;return d.position.copy(r.point).addScaledVector(u,.07),d.quaternion.setFromRotationMatrix(new Ft().makeBasis(a,l,u)),this.group.add(d),d}wallBoard(e,t,n,r,a,l){const u=this.wallMount(r,a);u.name=l,this.mesh(new yi(t+.06,n+.06,.045),this.material("#85909b"),u,[0,0,-.035]);const d=this.venue.decal(e,t,n,[0,0,0],[1,0,0],[0,1,0],u);d.material.transparent=!1,d.material.depthWrite=!0,d.material.polygonOffset=!0,d.material.polygonOffsetFactor=-2,d.material.polygonOffsetUnits=-2;const f=this.material("#707983");for(const m of[-t/2+.07,t/2-.07])for(const g of[-n/2+.07,n/2-.07])this.mesh(new Kl(.018,6,4),f,u,[m,g,.018]);u.userData={logos:ns.map(m=>m.name),width:t,height:n},this.boards.push(u)}addPennants(e,t){const n=this.wallMount(e,t);n.name="wall-pennants";const r=["#011f5b","#990000","#e7ebef"].map(u=>this.material(u)),a=Array.from({length:29},(u,d)=>{const f=-8.5+d*17/28;return new W(f,-Math.sin(Math.max(0,Math.min(1,(f+7.7)/15.4))*Math.PI)*.17,.02)});this.mesh(new Jl(new Vh(a),28,.008,4,!1),this.material("#747f89"),n,[0,0,0]);const l=[[],[],[]];for(let u=0;u<15;u++){const d=-7.7+u*1.1,f=Math.sin(u/14*Math.PI)*.17;l[u%3].push(d-.26,-f,.03,d,-.64-f,.055,d+.26,-f,.03),this.pennants++}for(let u=0;u<3;u++){const d=new fn;d.setAttribute("position",new Ot(l[u],3)),d.computeVertexNormals(),this.mesh(d,r[u],n,[0,0,0])}}addFlag(e,t,n,r){const a=new ni;a.name=`flag-${e}`,a.position.set(t,n,this.venue.floorBounds.max.z),a.rotation.z=r,this.group.add(a);const l=this.material("#71808b"),u=this.material("#394751");this.mesh(new yi(.54,.44,.04),u,a,[0,0,.02]);const d=this.mesh(new zr(.014,.018,3.12,8),l,a,[0,0,1.6]);d.rotation.x=Math.PI/2;const f=this.mesh(new zr(.012,.012,1.06,8),l,a,[.5,0,3.13]);f.rotation.z=Math.PI/2;const m=this.venue.textTexture(512,1280,(g,p,v)=>{g.fillStyle="#ffffff",g.fillRect(0,0,p,v),g.fillStyle="#011f5b",g.fillRect(0,0,p,65),g.fillRect(0,v-125,p,125),g.fillStyle="#990000",g.fillRect(0,v-125,p,15),this.drawLogo(g,e,50,140,p-100,v-400,e==="alliance"||e==="jhu"),g.fillStyle="#ffffff",g.font="600 28px Arial",g.textAlign="center",g.fillText("AI Coaching",p/2,v-50)});for(const g of[-1,1]){const p=this.venue.decal(m,1,2.5,[.52,-g*.008,1.855],[g,0,0],[0,0,1],a);p.material.transparent=!1,p.material.depthWrite=!0}a.userData.logo=ns.find(g=>g.id===e).name,this.flags.push(a)}setStyle(e){this.group.visible=e!=="original"}snapshot(){return{loaded:this.loaded,visible:this.group.visible,logos:ns.map(e=>e.name),boards:this.boards.map(e=>({name:e.name,position:e.position.toArray(),normal:new W(0,0,1).applyQuaternion(e.quaternion).toArray(),...e.userData})),flags:this.flags.map(e=>({name:e.name,position:e.position.toArray(),logo:e.userData.logo})),pennants:this.pennants}}dispose(){this.group.removeFromParent()}}const us={studio:{name:"Daylight Workshop",floor:"#989e9d",seam:"#858c8b",wall:"#d1d3d5",upper:"#dadcde",ceiling:"#b8bcc1",trim:"#68737e",fixture:"#8b939b",stripe:"#697d94"},arena:{name:"Graphite Hangar",floor:"#68757b",seam:"#5c6b70",wall:"#b9c5c8",upper:"#cbd2d4",ceiling:"#89989f",trim:"#5e737e",stripe:"#647993"},gallery:{name:"Soft Sage Workshop",floor:"#8c9d90",seam:"#7a8c7f",wall:"#c9d1c7",upper:"#d1d7cc",ceiling:"#a7b3a8",trim:"#7f9689",stripe:"#768499"}};function Kb(i,e){if(i.texture==="81d7488f559b.png")return"floor";if(i.texture==="11dbfc4c0f3f.png")return"wall";if(i.texture==="b11888927f3c.png"){e.computeBoundingBox();const t=e.boundingBox;return t.max.z-t.min.z<.01&&t.min.z>8?"ceiling":"upper"}return i.texture==="c19d0105b81b.png"?"trim":i.texture==="f05ece705e83.png"?"fixture":!i.texture&&i.position[2]>5?"light":"trim"}function Jb(i,e){const t=i.getAttribute("position"),n=new Float32Array(t.count*2);i.computeBoundingBox();const r=i.boundingBox,a=e==="floor"||e==="ceiling",l=r.max.x-r.min.x>r.max.y-r.min.y;for(let u=0;u<t.count;u++)n[u*2]=(a||l?t.getX(u):t.getY(u))/6,n[u*2+1]=a?t.getY(u)/6:t.getZ(u)/3;return new Dn(n,2)}class Zb{constructor(e){this.textures=[],this.materials=[],this.geometries=[],this.gateLabels=[],this.gateSupports=[],this.wallSigns=[],this.floorBounds=new Oi,this.wallBounds=new Oi,this.roles={},this.style="studio";for(const r of["floor","wall","upper","ceiling","trim","fixture","light"]){const a=r==="light"?new gs({color:"#f2f4f6",side:wn}):new Fr({color:"#ffffff",side:wn,roughness:.92,metalness:0});if(this.roles[r]=a,this.materials.push(a),["floor","wall","upper","ceiling"].includes(r)){const l=document.createElement("canvas");l.width=l.height=1024;const u=new yu(l);u.colorSpace=rn,u.wrapS=u.wrapT=hs,u.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),a.map=u,this.textures.push(u)}}this.setStyle("studio");const t=new Promise((r,a)=>{const l=new Image;l.onload=()=>{this.grain=l,this.setStyle(this.style),r()},l.onerror=()=>a(new Error("Venue floor texture could not be loaded")),l.src="/demo/venue/matte-floor.png"}),n=new Promise((r,a)=>{this.pennTexture=new $h().load("/demo/venue/penn-logo.png",r,void 0,()=>a(new Error("Penn wall logo could not be loaded"))),this.pennTexture.colorSpace=rn,this.pennTexture.anisotropy=4,this.textures.push(this.pennTexture)});this.ready=Promise.all([t,n])}setStyle(e){if(e!=="original"&&!us[e])throw new Error("Unknown venue style");this.style=e;const t=us[e]||us.studio;for(const n of["trim","fixture"])this.roles[n].color.set(t[n]||t.trim);for(const n of["floor","wall","upper","ceiling"]){const r=this.roles[n],a=r.map.image,l=a.getContext("2d"),u=a.width;if(l.fillStyle=t[n],l.fillRect(0,0,u,u),this.grain&&(l.globalCompositeOperation="multiply",l.globalAlpha=n==="floor"?.48:.16,l.drawImage(this.grain,0,0,u,u),l.globalAlpha=1,l.globalCompositeOperation="source-over"),n==="floor"){l.strokeStyle=t.seam,l.lineWidth=1;for(const d of[0,u/2,u])l.beginPath(),l.moveTo(d,0),l.lineTo(d,u),l.moveTo(0,d),l.lineTo(u,d),l.stroke();r.roughness=.96}else if(n==="wall")l.fillStyle=t.stripe,l.fillRect(0,u*.55,u,u*.45),l.fillStyle=t.trim,l.fillRect(0,u-48,u,48),l.strokeStyle="rgba(70,80,75,.08)",l.lineWidth=1,l.beginPath(),l.moveTo(0,0),l.lineTo(0,u),l.stroke(),r.roughness=.94;else if(n==="upper"){l.strokeStyle="rgba(50,65,60,.1)",l.lineWidth=2;for(let d=0;d<u;d+=u/3)l.beginPath(),l.moveTo(d,0),l.lineTo(d,u),l.stroke();r.roughness=.94}else{l.strokeStyle="rgba(40,60,55,.12)",l.lineWidth=2;for(let d=0;d<u;d+=u/12)l.beginPath(),l.moveTo(d,0),l.lineTo(d,u),l.stroke();l.strokeStyle=t.trim,l.lineWidth=3,l.beginPath(),l.moveTo(0,0),l.lineTo(u,0),l.stroke(),r.roughness=.93}r.map.needsUpdate=!0}for(const n of this.wallSigns)n.visible=e!=="original";for(const n of this.gateLabels)n.visible=e!=="original";for(const n of this.gateSupports)n.visible=e!=="original";this.branding?.setStyle(e)}textTexture(e,t,n){const r=document.createElement("canvas");r.width=e,r.height=t,n(r.getContext("2d"),e,t);const a=new yu(r);return a.colorSpace=rn,a.anisotropy=4,this.textures.push(a),a}decal(e,t,n,r,a,l,u){const d=new Ms(t,n),f=new gs({map:e,transparent:!0,alphaTest:.02,depthWrite:!1,toneMapped:!1}),m=new en(d,f),g=new W(...a),p=new W(...l),v=new W().crossVectors(g,p);return m.position.set(...r),m.quaternion.setFromRotationMatrix(new Ft().makeBasis(g,p,v)),u.add(m),this.geometries.push(d),this.materials.push(f),m}brandGate(e,t){const n=this.textTexture(1024,1024,(r,a,l)=>{r.fillStyle="#f4f6fa",r.font="700 52px Arial",r.textAlign="center",r.textBaseline="middle",r.fillText("AI Coaching",a/2,70,580),r.font="600 42px Arial",r.fillText(String(t+1).padStart(2,"0"),a/2,l-70);for(const u of[38,a-110]){r.save(),r.beginPath(),r.rect(u,185,72,654),r.clip();for(const d of[222,268,712,758])r.beginPath(),r.moveTo(u,d),r.lineTo(u+72,d+36),r.lineTo(u+72,d+59),r.lineTo(u,d+23),r.closePath(),r.fill();r.restore()}});for(const r of[-1,1])this.gateLabels.push(this.decal(n,1.4,1.4,[r*.021,0,0],[0,r,0],[0,0,1],e))}addGateSupports(e){const t=new zr(.011,.011,1,8).rotateX(Math.PI/2),n=new yi(.38,.16,.026),r=new Fr({color:"#7d8991",roughness:.8,metalness:.25}),a=new Fr({color:"#525c65",roughness:.95,metalness:0});this.geometries.push(t,n),this.materials.push(r,a);const l=this.floorBounds.max.z;for(const[u,d]of e){d.geometry.computeBoundingBox();const f=d.geometry.boundingBox,m=new W().setFromMatrixPosition(d.matrix),g=new W(m.x,m.y,l).applyMatrix4(d.matrix.clone().invert()).z,p=g+.026,v=f.min.z+.035,b=v-p;if(b<=0)continue;const C=new ni;C.name=`gate-support-${u}`,d.add(C);for(const S of[f.min.y+.1,f.max.y-.1]){const x=new en(t,r);x.scale.z=b,x.position.set(0,S,(v+p)/2);const F=new en(n,a);F.position.set(0,S,g+.013);for(const D of[x,F])D.castShadow=!0,D.receiveShadow=!0,C.add(D)}C.userData={index:u,floorZ:l,poleDiameter:.022,poleHeight:b,baseCount:2},this.gateSupports.push(C)}}addWallSigns(e,t){const n=t.reduce((l,u)=>l+u[0],0)/t.length,r=this.textTexture(2048,384,(l,u)=>{l.fillStyle="#011f5b",l.font="700 190px Arial",l.textAlign="center",l.fillText("AI Coaching",u/2,235),l.fillStyle="#011f5b",l.fillRect(702,290,430,9),l.fillStyle="#990000",l.fillRect(1140,290,206,9)});e.updateMatrixWorld(!0);const a=new W(n,4,4.2);for(const l of[[0,-1,0],[0,1,0]]){const u=new W(...l),d=new jh(a,u).intersectObjects(e.children,!1)[0];if(!d)continue;const f=d.point.clone().addScaledVector(u,-.025),m=l[1]<0,g=this.decal(m?this.pennTexture:r,m?5:7,m?3:1.3125,f.toArray(),[u.y,-u.x,0],[0,0,1],e);g.userData.logo=m?"Penn":"AI Coaching",this.wallSigns.push(g)}}addBranding(e,t){return this.branding=new Yb(e,this,t),this.branding.ready}snapshot(){return{style:this.style,gateLabels:this.gateLabels.length,gateSupports:this.gateSupports.length,supportsVisible:this.gateSupports.filter(e=>e.visible&&e.parent.visible).length,supportDimensions:this.gateSupports.map(e=>e.userData),wallSigns:this.wallSigns.length,pennSigns:this.wallSigns.filter(e=>e.userData.logo==="Penn").length,pennLogoLoaded:!!this.pennTexture.image?.complete,floorBounds:{min:this.floorBounds.min.toArray(),max:this.floorBounds.max.toArray()},branding:this.branding?.snapshot()}}dispose(){this.branding?.dispose();for(const e of this.textures)e.dispose();for(const e of this.materials)e.dispose();for(const e of this.geometries)e.dispose()}}class Qb{constructor(e,t){this.group=new ni,this.group.name="trackside-event",e.add(this.group),this.materials=[],this.geometries=[],this.textures=[],this.people=[],this.props=[],this.floorZ=t,this.enabled=new URLSearchParams(location.search).get("event")!=="off",this.style="studio",this.loaded=!1,this.colors={navy:this.material("#122c52"),white:this.material("#e2e5e7"),steel:this.material("#747d85",.68,.25),black:this.material("#262d33"),rubber:this.material("#151a20"),wood:this.material("#b3aaa0"),red:this.material("#990000"),screen:this.material("#40566c")},this.addFurniture(),this.setVisible(),this.ready=this.loadPeople()}material(e,t=.9,n=0){const r=new Fr({color:e,roughness:t,metalness:n});return this.materials.push(r),r}mesh(e,t,n,r){this.geometries.push(e);const a=new en(e,t);return a.position.set(...r),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}box(e,t,n,r){return this.mesh(new yi(...n),r,e,t)}rod(e,t,n,r,a){const l=new W(...t),u=new W(...n),d=u.clone().sub(l),f=this.mesh(new zr(r,r,d.length(),8),a,e,l.add(u).multiplyScalar(.5).toArray());return f.quaternion.setFromUnitVectors(new W(0,1,0),d.normalize()),f}prop(e,t,n,r=0){const a=new ni;return a.name=e,a.position.set(t,n,this.floorZ),a.rotation.z=r,this.group.add(a),this.props.push(a),a}barrier(e,t,n){const r=this.prop("spectator-rail",e,t),a=this.colors;for(const l of[-1,1]){const u=l*n/2;this.rod(r,[0,u,.05],[0,u,1.02],.021,a.steel),this.box(r,[0,u,.025],[.6,.16,.05],a.rubber)}this.rod(r,[0,-n/2,1.02],[0,n/2,1.02],.024,a.steel),this.box(r,[0,0,.69],[.025,n-.12,.45],a.navy),this.box(r,[.015,0,.52],[.006,n-.12,.035],a.white)}camera(e,t){const n=this.prop("tripod-camera",e,t,-.7),r=this.colors;for(let a=0;a<3;a++){const l=a*Math.PI*2/3,u=[Math.cos(l)*.48,Math.sin(l)*.48,.03];this.rod(n,u,[0,0,1.34],.018,r.steel),this.box(n,u,[.075,.075,.045],r.rubber),this.rod(n,[u[0]*.5,u[1]*.5,.66],[0,0,.57],.009,r.black)}this.rod(n,[0,0,1.22],[0,0,1.6],.029,r.black),this.box(n,[0,0,1.67],[.29,.32,.21],r.black),this.rod(n,[0,-.12,1.67],[0,-.33,1.67],.087,r.rubber),this.rod(n,[0,-.325,1.67],[0,-.34,1.67],.062,r.screen),this.box(n,[-.2,.06,1.71],[.1,.02,.13],r.screen),this.rod(n,[.1,.1,1.54],[.22,.4,1.44],.012,r.black)}addFurniture(){const e=this.colors;this.barrier(-12.7,-8.9,3.5),this.barrier(3.55,-4.2,2.3);const t=this.prop("equipment-table",-14.35,-13.2);this.box(t,[0,0,.79],[1,2.5,.065],e.wood);for(const r of[-.39,.39])for(const a of[-1.05,1.05])this.rod(t,[r,a,0],[r,a,.76],.025,e.steel);this.box(t,[-.03,-.65,.843],[.36,.52,.025],e.black);const n=this.box(t,[-.2,-.65,1.01],[.025,.52,.31],e.black);n.rotation.y=-.15,this.box(t,[-.18,-.65,1.01],[.012,.46,.255],e.screen),this.box(t,[.02,.1,.87],[.22,.32,.095],e.black);for(const r of[.015,.18])this.rod(t,[.04,r,.91],[.04,r,.97],.012,e.steel);this.box(t,[.05,.8,.88],[.19,.31,.13],e.white),this.rod(t,[.03,.67,.93],[.03,.67,1.1],.007,e.black);for(const[r,a]of[[-.65,.66],[.35,.85]]){this.box(t,[.03,r,.16],[.57,a,.3],e.black);for(const l of[-1,1])this.box(t,[.32,r+l*a*.32,.2],[.018,.055,.05],e.steel)}this.camera(4.35,-6.8),this.camera(-14,12)}async loadPeople(){const e="/demo/venue/event/",t=await fetch(`${e}spectators.json.gz`);if(!t.ok)throw new Error("Spectator geometry could not be loaded");const n=new Uint8Array(await t.arrayBuffer()),r=JSON.parse(I0(n[0]===31&&n[1]===139?dh(n):n)),a=r.poses.map(g=>{const p=new fn;for(const v of["position","normal"])p.setAttribute(v,new Ot(g[v],3));return g.index&&p.setIndex(g.index),p.computeBoundingBox(),this.geometries.push(p),p}),l=this.material("#ffffff");l.vertexColors=!0;const u=["#334c6a","#8b8d8c","#656b64","#a9a59c","#733d41","#414951"],d=["#bb896b","#97664e","#cfa58b","#785340"],f=["#40352d","#57473a","#2b2725","#6b5946"],m=[[-13.65,-7.9,Math.PI/2],[-13.6,-9.2,Math.PI/2+.2],[-14.25,-10.2,Math.PI/2-.25],[4.4,-3.6,-Math.PI/2],[4.45,-4.8,-Math.PI/2-.2],[4.72,-6.05,-Math.PI/2]];for(let g=0;g<2;g++)for(let p=0;p<6;p++)m.push([-15.1-g*1.5-p%2*.2,-6.7-p*1.14-g*.37,Math.PI/2+(p%3-1)*.23]);m.push([-18.4,-8.2,1.4],[-18.8,-9.4,1.8],[-18.2,-10.8,1.2],[-17.7,-12.2,1.6],[-16,-14.8,1.2],[-13.4,-15,2.1]),m.forEach(([g,p,v],b)=>{const C=b%3,S=C*3+(b%11===2?2:b%2),x=a[S].clone(),F=r.poses[S].role,D=[new at(d[b%4]),new at(d[b%4]).multiplyScalar(.82),new at(f[b%4]),new at("#242628"),new at(u[b*5%6]),new at(b%3===0?"#414c58":"#343b43"),new at(b%4===0?"#b6b8b8":"#36383a")],L=new Float32Array(F.length*3);F.forEach((B,A)=>D[B].toArray(L,A*3)),x.setAttribute("color",new Ot(L,3)),this.geometries.push(x);const O=new en(x,l);O.name=b===5?"camera-operator":`spectator-${b+1}`;const R=[.96,1.025,1,.985,1.04,.95][b%6];O.position.set(g,p,this.floorZ),O.rotation.z=v,O.scale.setScalar(R),O.castShadow=!0,O.receiveShadow=!0,this.group.add(O),this.people.push(O)}),this.batchStaticDetails(),this.loaded=!0}batchStaticDetails(){this.group.updateMatrixWorld(!0);const e=[];this.group.traverse(a=>{if(!a.isMesh)return;const l=a.geometry.clone().applyMatrix4(a.matrixWorld),u=l.getAttribute("position").count;for(const d of Object.keys(l.attributes))["position","normal","color"].includes(d)||l.deleteAttribute(d);if(!l.getAttribute("color")){const d=new Float32Array(u*3);for(let f=0;f<u;f++)a.material.color.toArray(d,f*3);l.setAttribute("color",new Ot(d,3))}e.push(l)});const t=td(e);for(const a of e)a.dispose();const n=this.material("#ffffff");n.vertexColors=!0;const r=new en(t,n);r.name="batched-trackside-details",r.castShadow=!0,r.receiveShadow=!0,this.geometries.push(t),this.group.clear(),this.group.add(r)}setVisible(e=this.style,t=this.enabled){this.style=e,this.enabled=t,this.group.visible=t&&e!=="original"}snapshot(){return{enabled:this.enabled,visible:this.group.visible,loaded:this.loaded,people:this.people.length,props:this.props.length,positions:[...this.people,...this.props].map(e=>{const t=new Oi().setFromObject(e);return{name:e.name,position:e.position.toArray(),bounds:{min:t.min.toArray(),max:t.max.toArray()}}})}}dispose(){for(const e of this.textures)e.dispose();for(const e of this.materials)e.dispose();for(const e of this.geometries)e.dispose();this.group.removeFromParent()}}class eE{constructor(e,t,n){this.sim=t,this.source=n,this.mode="follow",this.lastStep=-1,this.smooth=null,this.renderer=new jb({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=rn,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=os,this.renderer.toneMapping=Nl,this.renderer.toneMappingExposure=1.35,e.append(this.renderer.domElement),this.scene=new dv,this.scene.background=new at("#d4e5ed");const r=new Zv(16777215,1.7);this.scene.add(r);const a=new jv(15136255,12102032,1.8);a.up.set(0,0,1),this.scene.add(a);const l=new Au(16775144,2.2);l.position.set(1,15,18),this.scene.add(l);const u=new Au(14019071,.9);u.position.set(-18,-15,6),this.scene.add(u),this.lights=[r,a,l,u],l.castShadow=!0,l.shadow.mapSize.set(1024,1024),Object.assign(l.shadow.camera,{left:-25,right:25,top:35,bottom:-35,near:.1,far:90}),l.shadow.bias=-3e-4,l.shadow.normalBias=.035,l.shadow.radius=3.5,l.shadow.intensity=.4,l.target.position.set(-7,2,0),this.scene.add(l.target),this.ceilingLights=[[-7,-16,7.5],[-1,2,7.5],[-7,20,7.5]].map(C=>{const S=new Kv(16775663,30,35,1.05,.85,2);return S.position.set(...C),S.target.position.set(C[0],C[1],0),this.scene.add(S,S.target),S}),this.venue=new Zb(this.renderer),this.staticSurfaces=[],this.camera=new bn(82,1,.008,250),this.camera.up.set(0,0,1),this.fov=n.cameras.fpv.fovy,this.dynamic=[],this.gateMeshes=new Map,this.materials=[],this.geometries=[],this.textures=[];const d=getComputedStyle(e);this.gateColors={current:d.getPropertyValue("--gate-current").trim(),idle:d.getPropertyValue("--gate-idle").trim()};const f=new $h,m=new Map,g=new Map,p=new Map;this.textureReady=[this.venue.ready];const v=n.meshes.map(C=>{const S=new fn;return S.setAttribute("position",new Ot(C.position.flat(),3)),S.setAttribute("normal",new Ot(C.normal.flat(),3)),C.uv&&S.setAttribute("uv",new Ot(C.uv.flat(),2)),this.geometries.push(S),S});for(const C of n.geoms){if(C.mesh<0)continue;const S=C.bodyName?.startsWith("gate"),x=C.body>0&&!S,F=this.matrix(C.matrix,C.position),D=!x&&!S?v[C.mesh].clone().applyMatrix4(F):null,L=D?Kb(C,D):null,O=JSON.stringify([C.rgba,C.texture,S,L]);let R=g.get(O);if(!R){if(R=new Fr({color:new at().setRGB(...C.rgba.slice(0,3)),roughness:.9,metalness:.02,side:wn,emissive:2434341,emissiveIntensity:.16}),C.texture){if(!m.has(C.texture)){let B,A;this.textureReady.push(new Promise((k,z)=>{B=k,A=z}));const I=f.load(`/demo/sim/textures/${C.texture}`,B,void 0,A);I.colorSpace=rn,I.wrapS=I.wrapT=hs,I.anisotropy=4,m.set(C.texture,I),this.textures.push(I)}R.map=m.get(C.texture)}g.set(O,R),this.materials.push(R)}if(!x&&!S){const B=D;this.geometries.push(B),R.userData.venueRole=L,B.setAttribute("venueUv",Jb(B,L)),L==="floor"&&this.venue.floorBounds.union(B.boundingBox),L==="wall"&&this.venue.wallBounds.union(B.boundingBox),p.has(R)||p.set(R,[]),p.get(R).push(B)}else{S?(R=new gs({color:this.gateColors.idle,side:wn,toneMapped:!1}),this.materials.push(R)):(R=R.clone(),R.emissive.set(0),R.roughness=.65,R.metalness=.08,C.bodyName.endsWith("_prop")&&R.color.set("#e6e9ed"),this.materials.push(R));const B=new en(v[C.mesh],R);if(B.matrixAutoUpdate=!1,B.matrix.copy(F),this.scene.add(B),B.castShadow=!0,B.receiveShadow=!S,S){const A=Number(C.bodyName.slice(4));this.gateMeshes.set(A,B),this.venue.brandGate(B,A)}else this.dynamic.push({mesh:B,id:C.id})}}for(const[C,S]of p)for(const x of[!0,!1]){const F=S.filter(O=>!!O.attributes.uv===x);if(!F.length)continue;const D=td(F),L=new en(D,C);this.geometries.push(D),this.scene.add(L),L.receiveShadow=!0,L.castShadow=C.userData.venueRole==="fixture",this.staticSurfaces.push({mesh:L,original:C,originalUv:D.getAttribute("uv"),venueUv:D.getAttribute("venueUv"),role:C.userData.venueRole})}this.venue.addWallSigns(this.scene,n.gates),this.venue.addGateSupports(this.gateMeshes),this.textureReady.push(this.venue.addBranding(this.scene,this.staticSurfaces.filter(C=>C.role==="wall"||C.role==="upper").map(C=>C.mesh))),this.event=new Qb(this.scene,this.venue.floorBounds.max.z),this.textureReady.push(this.event.ready);const b=new URLSearchParams(location.search).get("venue");this.setVenue(b==="original"||us[b]?b:"studio"),this.observer=new ResizeObserver(()=>this.resize(e)),this.observer.observe(e),this.resize(e)}setVenue(e){this.lastRenderKey=null,this.venue.setStyle(e);const t=e==="original";this.event.setVisible(e);for(const r of this.staticSurfaces){r.mesh.material=t?r.original:this.venue.roles[r.role];const a=t?r.originalUv:r.venueUv;a?r.mesh.geometry.setAttribute("uv",a):r.mesh.geometry.deleteAttribute("uv")}const n=t?[1.7,1.8,2.2,.9]:[.3,.85,1.45,.3];this.lights.forEach((r,a)=>r.intensity=n[a]),this.lights[1].color.set(t?15136255:15660025),this.lights[1].groundColor.set(t?12102032:11449533),this.lights[2].color.set(t?16775144:16775666),this.lights[3].color.set(t?14019071:15134198),this.lights[1].position.set(...t?[0,1,0]:[0,0,1]),this.ceilingLights.forEach(r=>r.visible=!t),this.renderer.shadowMap.enabled=!t,this.lights[2].position.set(...t?[1,15,18]:[-9,8,8]),this.lights[2].target.position.set(...t?[0,0,0]:[-7,2,0])}matrix(e,t){return new Ft().set(e[0],e[1],e[2],t[0],e[3],e[4],e[5],t[1],e[6],e[7],e[8],t[2],0,0,0,1)}resize(e){const{width:t,height:n}=e.getBoundingClientRect();this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.lastRenderKey=null}render(){const e=this.sim,t=e.data,n=new W(...e.position),r=new ti(e.quaternion[1],e.quaternion[2],e.quaternion[3],e.quaternion[0]),a=[e.steps,e.gate,...e.position,...e.quaternion,this.mode,this.renderer.toneMappingExposure].join(",");if(a!==this.lastRenderKey){this.lastRenderKey=a;for(const{mesh:l,id:u}of this.dynamic)l.matrix.copy(this.matrix(t.geom_xmat.subarray(u*9,u*9+9),t.geom_xpos.subarray(u*3,u*3+3))),l.matrixWorldNeedsUpdate=!0;for(const[l,u]of this.gateMeshes)u.visible=l!==(e.gate===6?0:6),u.material.color.set(l===e.gate?this.gateColors.current:this.gateColors.idle);if(this.mode==="fpv"){this.camera.fov=this.fov,this.camera.position.copy(n).add(new W(...this.source.cameras.fpv.position).applyQuaternion(r));const l=this.source.cameras.fpv.quaternion,u=new ti(l[1],l[2],l[3],l[0]),d=as(e.quaternion),f=Math.atan2(d[3],d[0]),m=r.clone().multiply(u),g=new ti().setFromAxisAngle(new W(0,0,1),f).multiply(u),p=new ti(m.x*.9+g.x*.1,m.y*.9+g.y*.1,m.z*.9+g.z*.1,m.w*.9+g.w*.1).normalize();!this.smooth||e.steps<this.lastStep?this.smooth=p:e.steps!==this.lastStep&&(this.smooth.dot(p)<0&&p.set(-p.x,-p.y,-p.z,-p.w),this.smooth.set(this.smooth.x*.6+p.x*.4,this.smooth.y*.6+p.y*.4,this.smooth.z*.6+p.z*.4,this.smooth.w*.6+p.w*.4).normalize()),this.camera.quaternion.copy(this.smooth)}else if(this.mode==="follow"){this.camera.fov=62;const l=as(e.quaternion),u=Math.atan2(l[3],l[0]);this.camera.position.copy(n).add(new W(-1.15*Math.cos(u),-1.15*Math.sin(u),.38)),this.camera.lookAt(n.clone().add(new W(.7*Math.cos(u),.7*Math.sin(u),.12)))}else this.camera.fov=58,this.camera.position.set(3,26,7.5),this.camera.lookAt(-3,0,1.5);this.lastStep=e.steps,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera)}}setEvent(e){this.event.setVisible(this.venue.style,e),this.lastRenderKey=null,this.render()}dispose(){this.observer.disconnect(),this.event.dispose(),this.venue.dispose(),this.renderer.dispose();for(const e of new Set(this.geometries))e.dispose();for(const e of this.materials)e.dispose();for(const e of this.textures)e.dispose()}}const th=-1+2/3.15,nd=[{name:"Roll",index:1,keys:[["KeyA","A"],["KeyD","D"]]},{name:"Yaw",index:3,keys:[["KeyQ","Q"],["KeyE","E"]]},{name:"Pitch",index:2,keys:[["KeyW","W"],["KeyS","S"]]},{name:"Thrust",index:0,keys:[["ArrowDown","Down"],["ArrowUp","Up"]]}],tE=[["Space","Space","Pause / resume"],["KeyR","R","Reset flight"],["KeyC","C","Camera"],["KeyH","H","Tutorial"]],Ea=i=>Number.isFinite(i)?Math.max(-1,Math.min(1,i)):0,ko=(i,e,t=1)=>Math.abs(i)<e?0:t*Math.sign(i)*Math.sqrt(Math.abs(i));function nE(i,e,t,n={left:[0,0],right:[0,0]}){const r=[th+.5*(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown"))),.8*(Number(i.has("KeyD"))-Number(i.has("KeyA"))),.8*(Number(i.has("KeyS"))-Number(i.has("KeyW"))),.8*(Number(i.has("KeyE"))-Number(i.has("KeyQ")))],a=nd.filter(u=>u.keys.some(([d])=>i.has(d))).map(u=>u.index);let l=r.slice();if(e?.connected){const u=d=>Ea(e.axes[d]);l=[-Math.sign(u(1))*Math.pow(Math.abs(u(1)),1.5),ko(u(t.rollAxis),t.deadzone,t.invertRoll?-1:1),ko(-u(3),t.deadzone),ko(u(t.yawAxis),t.deadzone,t.invertYaw?-1:1)];for(const d of a)l[d]=r[d]}return n.left.some(u=>u!==0)&&(l[0]=th-n.left[1]*.5,l[3]=n.left[0]),n.right.some(u=>u!==0)&&(l[1]=n.right[0],l[2]=n.right[1]),{human:l.map(Ea),keyboardAxes:a}}const nh=(i,e)=>`<kbd data-key="${i}">${e}</kbd>`;class iE{constructor({onClose:e,onPoll:t}){this.dialog=document.createElement("dialog"),this.dialog.id="tutorial",this.dialog.setAttribute("aria-labelledby","tutorial-title"),this.dialog.innerHTML=`
      <header class="tutorial-header"><h2 id="tutorial-title">Controls</h2><span class="tutorial-state"><i data-lucide="pause"></i>Paused</span><button id="close-tutorial" class="icon-button" aria-label="Close tutorial" title="Close (Esc)"><i data-lucide="x"></i></button></header>
      <div class="tutorial-body">
        <section class="keyboard-monitor"><h3><i data-lucide="keyboard"></i>Keyboard</h3>
          <div class="key-groups">${nd.map(n=>`<div class="key-group"><span>${n.name}</span><div>${n.keys.map(([r,a])=>nh(r,a)).join("")}</div></div>`).join("")}</div>
          <div class="shortcut-list">${tE.filter(([n])=>n!=="KeyH").map(([n,r,a])=>`<div><span>${a}</span>${nh(n,r)}</div>`).join("")}</div>
        </section>
        <section class="gamepad-monitor"><h3><i data-lucide="gamepad-2"></i>Controller <span id="pad-status" role="status">Scanning...</span></h3>
          <p id="pad-hint">Press any controller button to connect.</p>
          <p id="pad-name" hidden></p>
          <div class="stick-monitors disconnected">${["Left","Right"].map((n,r)=>`<div><div class="stick-monitor" aria-label="${n} stick"><span id="pad-stick-${r}"></span></div><span>${n} stick</span></div>`).join("")}</div>
          <div id="pad-buttons" class="pad-buttons" aria-label="Controller buttons" hidden></div>
        </section>
      </div>`,document.body.append(this.dialog),this.dialog.querySelector("#close-tutorial").onclick=e,this.dialog.addEventListener("cancel",n=>{n.preventDefault(),e()}),this.padSignature="",this.input=null,this.pollTimer=null,this.onPoll=t;for(const n of["focus","pageshow","gamepadconnected","gamepaddisconnected"])window.addEventListener(n,()=>this.startPolling());document.addEventListener("visibilitychange",()=>document.hidden?this.stopPolling():this.startPolling()),window.addEventListener("pagehide",()=>this.stopPolling()),this.dialog.addEventListener("close",()=>{this.open||this.stopPolling()})}get open(){return this.dialog.open}show(){this.dialog.showModal(),this.dialog.querySelector("#close-tutorial").focus(),this.dialog.querySelector(".tutorial-body").scrollTop=0,this.startPolling()}close(){this.stopPolling(),this.dialog.close(),this.input=null}startPolling(){this.stopPolling(),!(!this.open||document.hidden)&&(this.onPoll(),this.pollTimer=setInterval(()=>this.onPoll(),100))}stopPolling(){clearInterval(this.pollTimer),this.pollTimer=null}update(e,t,n){if(!this.open)return;this.input=[...n];for(const m of this.dialog.querySelectorAll("[data-key]"))m.classList.toggle("pressed",e.has(m.dataset.key));const r=this.dialog.querySelector("#pad-status"),a=t?"Connected":"Scanning...";r.textContent!==a&&(r.textContent=a),r.classList.toggle("connected",!!t),this.dialog.querySelector("#pad-hint").hidden=!!t;const l=this.dialog.querySelector("#pad-name");l.hidden=!t,l.textContent=t?.id||"",l.title=t?.id||"",this.dialog.querySelector(".stick-monitors").classList.toggle("disconnected",!t);const u=Math.min(t?.axes.length||0,32),d=Math.min(t?.buttons.length||0,64),f=`${t?.index}:${t?.id}:${u}:${d}`;if(f!==this.padSignature){this.padSignature=f;const m=this.dialog.querySelector("#pad-buttons");m.hidden=!d,m.innerHTML=Array.from({length:d},(g,p)=>`<span data-pad-button="${p}" title="Button ${p}">B${p}</span>`).join("");for(const g of["roll-axis","yaw-axis"]){const p=document.getElementById(g);for(let v=0;v<u;v++)Array.from(p.options).some(b=>b.value===String(v))||p.add(new Option(`Axis ${v}`,v))}}for(let m=0;m<2;m++)this.dialog.querySelector(`#pad-stick-${m}`).style.transform=`translate(${Ea(t?.axes[m*2])*26}px,${Ea(t?.axes[m*2+1])*26}px)`;for(let m=0;m<d;m++){const g=t.buttons[m],p=typeof g=="number"?g:g.value;this.dialog.querySelector(`[data-pad-button="${m}"]`).classList.toggle("pressed",!!g.pressed||p>.1)}}}const rE=[{file:"music/hci-bgm-1.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - 40,000 Feet over the Prairies",seconds:372.976327,sourceSha256:"360d74febf7c697624fb37d966ae2f5c992299008d9338e66c4d81cc71572d47",sha256:"15aff80fc55041c49f9e8e8faaaa5060a37d94e304f980de7c82ab67f30a014a"},{file:"music/hci-bgm-2.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Bandit at 6 O_clock",seconds:291.866122,sourceSha256:"5a08259cf3a9c80a77523c9914f494bc3abcf2eb70bb87adb0969255285a0709",sha256:"10c3b598d6f0eef0e38b091d683d5b87a1d3f42f2028363d95e2e8e14fed646f"},{file:"music/hci-bgm-3.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Frontal Attack",seconds:344.555102,sourceSha256:"97c854b8e39b936444127445b2c0b7d6b372bfff4941deb93dff376c80605771",sha256:"23f1b9b46a3269602034cce4a0150d4193f83e1c9ea6e254653c331505f87d4c"},{file:"music/hci-bgm-4.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Interdiction",seconds:276.27102,sourceSha256:"88631643e5c6a846ab4eacc807eebc3b21b0c0a119b17aadd5e95aecf669933c",sha256:"e03f48a536228271efa478645612d9c2c9a7374f91c7c05892d936872a67c33e"},{file:"music/hci-bgm-5.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Through the Clouds",seconds:264.907755,sourceSha256:"259a1188cbb78b1151e2a4a5c2cc8bf689424b9b58425fd934fc5f27633e3704",sha256:"6629a3274664402d01d89fb28782b5621ecc1644b3838a6b4ae43ee5321fd0d0"},{file:"music/hci-bgm-6.mp3",title:"Gaijin Entertainment,Jimmie Asche,Nikita Mokrov - Waltz of the Tornado",seconds:293.616327,sourceSha256:"2e91044ca725c4f486b9ad2f878ef147bc310f5d0e7fa16c468deb1d2bb1652f",sha256:"89627d8e12c11acf05155b87e0a6e1c44c4cbb8433caef462c48d1b2119f6e3b"}],ih={encourage:5,eval_start:3,eval_end:3,autopilot_on:1,takeover:1,roll_left_light:2,roll_left_hard:2,roll_right_light:2,roll_right_hard:2,yaw_left_light:2,yaw_left_hard:2,yaw_right_light:2,yaw_right_hard:2},sE=(i,e=0)=>`${i}${["autopilot_on","takeover"].includes(i)?"":`_${e}`}.wav`;function aE(i,e){for(const[t,n,r,a]of[["yaw",3,.05,.2],["roll",1,.3,.6]]){const l=Math.abs(i[n]-e[n])/2;if(l<r)continue;const u=e[n]>i[n];return`${t}_${t==="yaw"?u?"left":"right":u?"right":"left"}_${l>=a?"hard":"light"}`}return null}class oE{constructor({baseUrl:e,onCue:t=()=>{},onError:n=()=>{},random:r=Math.random}={}){this.baseUrl=e,this.onCue=t,this.onError=n,this.random=r,this.enabled=!0;try{this.enabled=localStorage.getItem("drone-audio")!=="muted"}catch{}this.musicEnabled=!0;try{this.musicEnabled=localStorage.getItem("drone-music")!=="muted"}catch{}this.context=null,this.paused=!1,this.buffers=new Map,this.voice=null,this.generation=0,this.music=null,this.musicQueue=[],this.musicTrack=null,this.lastPlay=-1/0,this.lastCorrection=-1/0,this.lastCue=null,this.playCount=0,this.error=null}async unlock(){if(this.enabled)try{this.context||(this.context=new(window.AudioContext||window.webkitAudioContext),this.master=this.context.createGain(),this.master.gain.value=1,this.master.connect(this.context.destination),this.musicGain=this.context.createGain(),this.musicGain.gain.value=0,this.musicGain.connect(this.master)),this.paused||await this.context.resume(),this.startMusic()}catch(e){this.fail(e)}}fail(e){this.error=String(e.message||e),this.onError(this.error)}async buffer(e){if(!this.buffers.has(e)){const t=fetch(`${this.baseUrl}${e}`).then(async n=>{if(!n.ok)throw new Error(`Audio HTTP ${n.status}: ${e}`);return this.context.decodeAudioData(await n.arrayBuffer())});this.buffers.set(e,t),t.catch(()=>this.buffers.delete(e))}return this.buffers.get(e)}updateMusicGain(){this.musicGain&&this.musicGain.gain.setTargetAtTime(this.enabled&&this.musicEnabled?this.voice?.035:.24:0,this.context.currentTime,this.voice?.05:.3)}nextMusicTrack(){if(!this.musicQueue.length){this.musicQueue=[...rE];for(let e=this.musicQueue.length-1;e>0;e--){const t=Math.floor(this.random()*(e+1));[this.musicQueue[e],this.musicQueue[t]]=[this.musicQueue[t],this.musicQueue[e]]}}this.musicTrack=this.musicQueue.pop(),this.music.src=`${this.baseUrl}${this.musicTrack.file}`}async startMusic(){if(!(!this.enabled||!this.musicEnabled||!this.context||this.paused)&&(this.music||(this.music=new Audio,this.music.preload="metadata",this.musicNode=this.context.createMediaElementSource(this.music),this.musicNode.connect(this.musicGain),this.music.addEventListener("ended",()=>{this.nextMusicTrack(),this.startMusic()}),this.nextMusicTrack()),!!this.music.paused)){this.updateMusicGain();try{await this.music.play()}catch(e){e.name!=="AbortError"&&this.enabled&&this.musicEnabled&&!this.paused&&this.fail(e)}}}stopMusic(){this.music?.pause(),this.updateMusicGain()}setMusicEnabled(e){this.musicEnabled=!!e;try{localStorage.setItem("drone-music",this.musicEnabled?"enabled":"muted")}catch{}this.musicEnabled?this.unlock():this.stopMusic()}stopVoice(){if(this.generation++,this.voice){try{this.voice.stop()}catch{}this.voice=null}this.updateMusicGain(),Number.isFinite(this.lastPlay)||(this.lastPlay=this.lastCorrection=this.context?.currentTime??0)}async play(e){if(!this.enabled||!this.context||!Object.hasOwn(ih,e))return;this.stopVoice();const t=this.generation;this.lastPlay=this.lastCorrection=1/0;const n=sE(e,Math.floor(this.random()*ih[e]));try{const r=await this.buffer(n);if(t!==this.generation||!this.enabled)return;const a=this.context.createBufferSource();a.buffer=r,a.connect(this.master),this.voice=a,a.onended=()=>{this.voice===a&&(this.voice=null,this.updateMusicGain())},a.start(),this.updateMusicGain();const l=this.context.currentTime;["eval_start","eval_end","autopilot_on","takeover"].includes(e)?this.lastPlay=this.lastCorrection=l+r.duration:(this.lastPlay=l,this.lastCorrection=e==="encourage"?l-2.5:l),this.lastCue=e,this.playCount++,this.onCue({name:e,filename:n,duration:r.duration})}catch(r){t===this.generation&&(this.lastPlay=this.lastCorrection=this.context.currentTime,this.fail(r))}}setEnabled(e){this.enabled=!!e;try{localStorage.setItem("drone-audio",this.enabled?"enabled":"muted")}catch{}this.master&&(this.master.gain.value=this.enabled?1:0),this.stopVoice(),this.enabled||this.stopMusic(),this.lastPlay=this.lastCorrection=this.context?.currentTime??0,this.enabled&&this.unlock()}setPaused(e){if(this.paused=!!e,this.paused&&this.music?.pause(),!this.context)return;(this.paused?this.context.suspend():this.context.resume()).then(()=>{this.paused||this.startMusic()}).catch(n=>this.fail(n))}tick(e,t,n=!1){if(!this.context||this.paused||!this.enabled||!e||!t||n||this.voice)return;const r=this.context.currentTime;if(r-this.lastCorrection>=5){const a=aE(e,t);if(a){this.play(a);return}}r-this.lastPlay>=5&&(this.lastPlay=r,this.random()<.5&&this.play("encourage"))}snapshot(){return{enabled:this.enabled,state:this.context?.state??"locked",paused:this.paused,lastCue:this.lastCue,playCount:this.playCount,error:this.error,music:{enabled:this.musicEnabled,playing:!!this.music&&!this.music.paused&&this.music.readyState>=2&&this.enabled&&!this.paused&&this.context?.state==="running",gain:this.musicGain?.gain.value??0,ducked:this.enabled&&this.musicEnabled&&!!this.voice&&!!this.music,track:this.musicTrack?.file??null,time:this.music?.currentTime??0}}}}const ki=[{id:"uncoached",label:"No Coach",detail:"0% steering assistance"},{id:"mia",label:"MIA",detail:"Human-aware assistance"},{id:"l2c",label:"AI Coaching",detail:"Level-adaptive assistance"}],nn=i=>`<i data-lucide="${i}"></i>`,Ra=document.querySelector("#app");Ra.classList.add("booting");Ra.innerHTML=`
<div id="viewport" aria-label="Interactive MuJoCo drone racing scene"></div>
<header class="brand"><span class="brand-mark">${nn("plane")}</span><div><h1>AI Coaching</h1><span>Drone Racing</span></div></header>
<button id="open-tutorial" class="tutorial-entry" title="Tutorial & input check (H)" aria-haspopup="dialog" aria-controls="tutorial">${nn("book-open")}<span>Tutorial</span><kbd>H</kbd></button>
<div class="baseline-selector"><div class="experience-tabs segmented" role="tablist" aria-label="Flight experience"><button id="tab-demo" role="tab" aria-controls="demo-panel" aria-selected="true">Demo</button><button id="tab-hci" role="tab" aria-controls="hci-panel" aria-selected="false">HCI methods</button></div>
<section id="demo-panel" role="tabpanel" aria-labelledby="tab-demo"><div class="demo-methods segmented" role="radiogroup" aria-label="Flight mode">${ki.map(i=>`<button id="demo-${i.id}" data-method="${i.id}" role="radio" aria-checked="${i.id==="l2c"}" title="${i.detail}">${i.label}</button>`).join("")}</div><span id="demo-method-detail"></span><span class="axis-contract">You: roll & yaw · AI: thrust & pitch</span></section>
<section id="hci-panel" role="tabpanel" aria-labelledby="tab-hci" hidden><label for="baseline">Coaching method</label><select id="baseline"><option value="l2c">L2C · AI Coaching</option><option value="mia">MIA · Minimal intervention</option><option value="rbf">RBF · Rule-based fading</option></select><span id="baseline-detail"></span></section>
<div id="steering-feedback" hidden><div class="blend-live"><span>Live roll/yaw blend</span><strong id="live-blend"></strong></div><div class="command-legend"><span class="human-key">${nn("gamepad-2")} Input</span><span class="applied-key">${nn("plane")} Applied</span></div>${["roll","yaw"].map(i=>`<div class="command-row"><span>${i==="roll"?"Roll":"Yaw"}</span><div class="command-track" aria-label="${i} input and applied action"><b data-command="${i}-human"></b><b data-command="${i}-applied"></b></div></div>`).join("")}</div></div>
<div class="telemetry"><div><span>LAP</span><strong id="lap">00</strong></div><div><span>TIME</span><strong id="timer">00:00.00</strong></div><div><span>GATE</span><strong id="gate">01 <small>/ 12</small></strong></div></div>
<aside id="settings" class="settings" hidden aria-label="Flight settings"><div class="panel-title"><h2>Flight settings</h2><button class="icon-button" id="close-settings" title="Close settings" aria-label="Close settings">${nn("x")}</button></div>
<label>Control mode<select id="mode"><option value="expert">Expert autopilot</option><option value="uncoached">No Coach · steering</option><optgroup label="HCI methods"><option value="l2c">L2C · AI Coaching</option><option value="mia">MIA · Minimal intervention</option><option value="rbf">RBF · Rule-based fading</option></optgroup><optgroup label="Debug controls"><option value="assisted">Fixed assistance</option><option value="manual">Manual flight</option><option value="coach">Coach · fixed skill</option><option value="tracking">Tracking actor only</option></optgroup></select></label>
<label id="alpha-row" hidden>AI assistance <output id="alpha-label">80%</output><input id="alpha" type="range" min="0" max="100" value="80"></label>
<label id="skill-row" hidden>Fixed skill <output id="skill-label">0.00</output><input id="skill" type="range" min="0" max="100" value="0"></label>
<label>Brightness <output id="exposure-label">135%</output><input id="exposure" type="range" min="60" max="220" value="135"></label>
<label>Venue style<select id="venue">${Object.entries(us).map(([i,e])=>`<option value="${i}">${e.name}</option>`).join("")}<option value="original">Original warehouse</option></select></label>
<div class="checks"><label><input id="event-details" type="checkbox" checked>Trackside details</label></div>
<div class="checks"><label><input id="music" type="checkbox" checked>Background music</label></div>
<div class="input-heading">${nn("gamepad-2")}<strong id="device">Keyboard</strong></div>
<label>Roll axis<select id="roll-axis"><option value="2">Right stick X · axis 2</option><option value="0">Axis 0</option><option value="1">Axis 1</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<label>Yaw axis<select id="yaw-axis"><option value="0">Left stick X · axis 0</option><option value="1">Axis 1</option><option value="2">Axis 2</option><option value="3">Axis 3</option><option value="4">Axis 4</option><option value="5">Axis 5</option></select></label>
<div class="checks"><label><input id="invert-roll" type="checkbox">Invert roll</label><label><input id="invert-yaw" type="checkbox" checked>Invert yaw</label></div>
<label>Stick deadzone <output id="deadzone-label">5%</output><input id="deadzone" type="range" min="0" max="30" value="5"></label>
<button id="export" class="export">${nn("download")} Export flight log</button><div class="engine">MuJoCo 3.13 <span>Browser physics</span></div></aside>
<div class="flight-data"><span id="speed">0.0 <small>m/s</small></span><span id="altitude">2.0 <small>m AGL</small></span><span id="status">AUTOPILOT</span></div>
<div class="gate-strip" id="gate-strip" aria-label="Gate progress">${Array.from({length:12},(i,e)=>`<span data-gate="${e}">${e+1}</span>`).join("")}</div>
<div class="joystick left-stick" aria-label="Touch yaw and thrust" role="application"><span></span></div><div class="joystick right-stick" aria-label="Touch roll and pitch" role="application"><span></span></div>
<nav class="toolbar" aria-label="Flight controls">
<div class="segmented" role="group" aria-label="Camera view"><button data-view="fpv" aria-pressed="false">FPV</button><button data-view="follow" class="selected" aria-pressed="true">Chase</button><button data-view="overview" aria-pressed="false">Track</button></div><span class="divider"></span>
<button id="pause" class="icon-button" title="Pause (Space)" aria-label="Pause">${nn("pause")}</button><button id="reset" class="icon-button" title="Reset flight (R)" aria-label="Reset flight">${nn("rotate-ccw")}</button><button id="sound" class="icon-button" title="Mute audio" aria-label="Mute audio">${nn("volume-2")}</button><button id="settings-toggle" class="icon-button" title="Flight settings" aria-label="Flight settings" aria-expanded="false">${nn("settings-2")}</button><button id="fullscreen" class="icon-button" title="Full screen" aria-label="Full screen">${nn("maximize")}</button>
<div class="control-switch"><div class="mode-status" role="status" aria-live="polite" aria-atomic="true"><span>Current mode</span><strong id="current-mode">Autopilot</strong></div><button id="take-control" class="primary" title="Start a new trial using the selected coaching method">${nn("gamepad-2")}<span>Start flying</span></button></div></nav>
<div id="notice" role="status" hidden></div><div class="loading" id="loading" aria-busy="true"><span class="spinner"></span><strong>Preparing flight</strong><span id="loading-status" role="status">Loading MuJoCo</span><progress id="loading-progress" max="6" value="0" aria-label="Loading stages"></progress><div class="loading-summary"><span id="loading-stage">0 / 6</span><span id="loading-detail"></span></div><button id="retry" hidden>Retry</button></div>`;const lE={Play:J0,Pause:Y0,RotateCcw:Z0,Settings2:Q0,Maximize:q0,Minimize:j0,Gamepad2:$0,Camera:V0,Download:W0,Volume2:t_,VolumeX:n_,X:i_,Sun:e_,Plane:K0,ChevronDown:H0,BookOpen:G0,Keyboard:X0},Wr=()=>mh({icons:lE});Wr();const ge=i=>document.getElementById(i),id=document.querySelectorAll("#open-tutorial,.baseline-selector button,.baseline-selector input,#baseline,.toolbar button,.settings button,.settings input,.settings select");id.forEach(i=>i.disabled=!0);let we,Et,vn=!1,Fn=!1,Pr=0,Ui=0,rd=0,rh,bs=new URLSearchParams(location.search).get("experience")==="hci"?"hci":"demo",vs="l2c";const gn=new oE({baseUrl:"/demo/audio/",onCue:i=>ar.push({event:"audio",time:we?.coaching?.time??we?.data.time??0,trialId:Ir,mode:we?.mode,...i}),onError:()=>Wt("Audio could not play. Use the sound button to retry.")}),Es=new Set,mi={left:[0,0],right:[0,0]},ar=[],sd=[];let Fl="Keyboard",Ir=0;const Vn=new iE({onClose:uE,onPoll:()=>{const{human:i,pad:e}=Da();Vn.update(Es,e,i)}});Wr();const ad=document.querySelector(".baseline-selector");function ec(){Ra.style.setProperty("--notice-below-method",`${ad.getBoundingClientRect().bottom+8}px`)}const cE=new ResizeObserver(ec);cE.observe(ad);window.addEventListener("resize",ec);ec();function Wt(i,e){if(ge("notice").textContent=i,e){const t=document.createElement("kbd");t.textContent=e,ge("notice").append(t)}ge("notice").hidden=!1,clearTimeout(rh),rh=setTimeout(()=>ge("notice").hidden=!0,3e3)}function Hn(i){vn=Vn.open||!!i,Ui=0,Pr=performance.now(),gn.setPaused(vn),ge("pause").innerHTML=nn(vn?"play":"pause"),ge("pause").setAttribute("aria-label",vn?"Resume":"Pause"),ge("pause").title=`${vn?"Resume":"Pause"} (Space)`,Wr(),we&&cr()}function od(){Hn(!vn),Wt(vn?"Flight paused":"Flight resumed","Space")}function lr(i){const e={expert:"Autopilot",uncoached:"No Coach",assisted:"AI-assisted",manual:"Manual",coach:"Coach (fixed)",tracking:"Tracking",...Ur};if(!we||!Object.hasOwn(e,i))throw new Error("Invalid flight mode");we.coaching&&sd.push({id:Ir,endedAt:new Date().toISOString(),state:we.snapshot(),beliefs:we.coaching.belief.probabilities}),gn.stopVoice(),we.setMode(i),ge("mode").value=i,ge("skill-row").hidden=i!=="coach",ge("alpha-row").hidden=i!=="assisted",i==="assisted"&&(we.lastAction=we.action(Da().human)),Object.hasOwn(Ur,i)&&(i==="rbf"&&La("hci"),Ir++,ge("baseline").value=i,Et.smooth=null,Ui=0,ar.push({event:"trial_start",trialId:Ir,method:i,at:new Date().toISOString()})),ki.some(n=>n.id===i)&&ud(i),ge("current-mode").textContent=e[i];const t=ge("take-control");t.innerHTML=`${nn(i==="expert"?"gamepad-2":"plane")}<span>${i==="expert"?"Start flying":"Use autopilot"}</span>`,t.title=i==="expert"?"Start a new trial using the selected coaching method":"Switch to expert autopilot",Wr(),cr()}function tc(){!we||Vn.open||(we.coaching||we.mode==="uncoached"?lr(we.mode):we.reset(),Et.smooth=null,Ui=0,Wt("Flight reset","R"))}function Il(i){if(!["fpv","follow","overview"].includes(i))throw new Error("Invalid camera");Et&&(Et.mode=i),document.querySelectorAll("[data-view]").forEach(e=>{const t=e.dataset.view===i;e.classList.toggle("selected",t),e.setAttribute("aria-pressed",String(t))})}function ld(i){Il(i),Wt(`Camera: ${{fpv:"FPV",follow:"Chase",overview:"Track"}[i]}`,"C")}function Pa(i){ge("settings").hidden=!i,ge("settings-toggle").setAttribute("aria-expanded",String(i))}function Bi(){Es.clear(),mi.left=[0,0],mi.right=[0,0],document.querySelectorAll(".joystick>span").forEach(i=>i.style.transform="")}function cd(){!Fn||Vn.open||(Bi(),Pa(!1),Hn(!0),ge("notice").hidden=!0,Vn.show())}function uE(i=!0){Vn.close(),Bi(),Hn(!0),ge("open-tutorial").focus(),i&&Wt("Flight paused","Space")}function hE(i,e,t){const n=new Blob([i],{type:e}),r=URL.createObjectURL(n),a=document.createElement("a");a.href=r,a.download=t,a.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}function La(i){bs=i,ge("demo-panel").hidden=i!=="demo",ge("hci-panel").hidden=i!=="hci";for(const e of["demo","hci"])ge(`tab-${e}`).setAttribute("aria-selected",String(i===e)),ge(`tab-${e}`).classList.toggle("selected",i===e),ge(`tab-${e}`).tabIndex=i===e?0:-1}La(bs);for(const i of["demo","hci"])ge(`tab-${i}`).onclick=()=>{La(i),cr()};document.querySelector(".experience-tabs").addEventListener("keydown",i=>{if(["ArrowLeft","ArrowRight"].includes(i.key)){i.preventDefault();const e=ge(`tab-${bs==="demo"?"hci":"demo"}`);e.disabled||(e.click(),e.focus())}});function ud(i){const e=ki.find(t=>t.id===i);if(!e)throw new Error("Invalid demo method");vs=i;for(const t of ki){const n=ge(`demo-${t.id}`);n.setAttribute("aria-checked",String(t.id===i)),n.classList.toggle("selected",t.id===i),n.tabIndex=t.id===i?0:-1}ge("demo-method-detail").textContent=e.detail}ud(vs);for(const i of ki)ge(`demo-${i.id}`).onclick=()=>{Fn&&nc(i.id)};document.querySelector(".demo-methods").addEventListener("keydown",i=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(i.key)){i.preventDefault();const e=ki.findIndex(r=>r.id===vs),t=["ArrowLeft","ArrowUp"].includes(i.key)?-1:1,n=ge(`demo-${ki[(e+t+3)%3].id}`);n.disabled||(n.click(),n.focus())}});function nc(i){i!==we.mode&&(Bi(),lr(i),Et.smooth=null,Ui=0,Pr=performance.now(),Wt(`${ge("mode").selectedOptions[0].textContent}${vn?" · Paused":""}`))}function dE(i){lr(i),Et.smooth=null,Bi(),Ui=0,ar.push({event:"method_demo_start",method:i,at:new Date().toISOString()}),Hn(!1),gn.unlock(),cr()}function Da(){let i=[];try{i=Array.from(navigator.getGamepads?.()??[])}catch{}const e=i.find(a=>a?.connected),t={rollAxis:Number(ge("roll-axis").value),yawAxis:Number(ge("yaw-axis").value),invertRoll:ge("invert-roll").checked,invertYaw:ge("invert-yaw").checked,deadzone:Number(ge("deadzone").value)/100},{human:n,keyboardAxes:r}=nE(Es,e,t,mi);return Fl=e?`${r.length?"Keyboard + ":""}${e.id}`:"Keyboard",(mi.left.some(a=>a!==0)||mi.right.some(a=>a!==0))&&(Fl="Touch controls"),{human:n,pad:e}}for(const i of["left","right"]){let e=function(r){const a=t.getBoundingClientRect();mi[i]=[Mn((r.clientX-a.left-a.width/2)/(a.width*.35)),Mn((r.clientY-a.top-a.height/2)/(a.height*.35))],t.firstElementChild.style.transform=`translate(${mi[i][0]*28}px,${mi[i][1]*28}px)`};const t=document.querySelector(`.${i}-stick`);let n=null;t.addEventListener("pointerdown",r=>{n=r.pointerId,t.setPointerCapture(n),e(r)}),t.addEventListener("pointermove",r=>{r.pointerId===n&&e(r)});for(const r of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(r,()=>{n=null,mi[i]=[0,0],t.firstElementChild.style.transform=""})}ge("pause").onclick=od;ge("reset").onclick=tc;ge("open-tutorial").onclick=cd;ge("settings-toggle").onclick=()=>{Pa(ge("settings").hidden),Wt(ge("settings").hidden?"Settings closed":"Flight settings")};ge("close-settings").onclick=()=>{Pa(!1),Wt("Settings closed")};ge("take-control").onclick=()=>{Fn&&(Bi(),we.mode==="expert"?bs==="demo"?(dE(vs),Wt(`${ki.find(i=>i.id===vs).label} started`)):(lr(ge("baseline").value),Hn(!1),Wt(`${Ur[we.mode]} started`)):(lr("expert"),Wt(vn?"Autopilot selected. Flight paused.":"Autopilot active")))};ge("baseline").onchange=()=>{Fn&&nc(ge("baseline").value)};ge("mode").onchange=i=>{Fn&&(Object.hasOwn(Ur,i.target.value)&&La("hci"),nc(i.target.value))};document.querySelectorAll("[data-view]").forEach(i=>{i.title=`${i.textContent} camera (C to cycle)`,i.onclick=()=>ld(i.dataset.view)});ge("alpha").oninput=i=>{we&&(we.alpha=Number(i.target.value)/100),ge("alpha-label").value=i.target.value+"%",we?.mode==="assisted"&&(we.lastAction=we.action(Da().human),cr())};ge("skill").oninput=i=>{we&&(we.skill=Number(i.target.value)/100),ge("skill-label").value=(Number(i.target.value)/100).toFixed(2)};ge("exposure").oninput=i=>{Et&&(Et.renderer.toneMappingExposure=Number(i.target.value)/100),ge("exposure-label").value=i.target.value+"%"};ge("venue").onchange=i=>{Et&&(Et.setVenue(i.target.value),Wt(ge("venue").selectedOptions[0].textContent))};ge("event-details").onchange=i=>{Et&&Et.setEvent(i.target.checked)};ge("deadzone").oninput=i=>ge("deadzone-label").value=i.target.value+"%";ge("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Wt("Full screen is unavailable in this browser")}};document.addEventListener("fullscreenchange",()=>{const i=!!document.fullscreenElement;ge("fullscreen").innerHTML=nn(i?"minimize":"maximize"),ge("fullscreen").title=i?"Exit full screen":"Full screen",ge("fullscreen").setAttribute("aria-label",ge("fullscreen").title),Wr(),Wt(i?"Full screen enabled":"Full screen closed")});function hd(){ge("sound").innerHTML=nn(gn.enabled?"volume-2":"volume-x"),ge("sound").setAttribute("aria-label",gn.enabled?"Mute audio":"Enable audio"),ge("sound").title=ge("sound").getAttribute("aria-label"),ge("sound").setAttribute("aria-pressed",String(gn.enabled)),Wr()}ge("sound").onclick=()=>{gn.setEnabled(!gn.enabled),hd(),Wt(gn.enabled?"Audio enabled":"Audio muted")};ge("music").checked=gn.musicEnabled;ge("music").onchange=i=>{gn.setMusicEnabled(i.target.checked)};hd();for(const i of["pointerdown","keydown"])document.addEventListener(i,()=>{Fn&&gn.unlock()},{capture:!0});ge("export").onclick=()=>{we&&(hE(JSON.stringify({manifest:we.policies.expert.metadata,physics:"MuJoCo 3.13 WASM",hciConfig:gh,state:we.snapshot(),currentTrial:Ir,beliefs:we.coaching?.belief.probabilities??null,trials:sd,rows:ar},null,2),"application/json",`ai-coaching-drone-racing-${Date.now()}.json`),Wt("Flight log exported"))};window.addEventListener("keydown",i=>{!Fn||["INPUT","SELECT","TEXTAREA"].includes(i.target.tagName)||(Es.add(i.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!(Vn.open||i.repeat)&&(i.code==="Space"&&od(),i.code==="KeyR"&&tc(),i.code==="KeyC"&&Et&&ld(["fpv","follow","overview"][(["fpv","follow","overview"].indexOf(Et.mode)+1)%3]),i.code==="KeyH"&&cd(),i.code==="Escape"&&Pa(!1)))});window.addEventListener("keyup",i=>Es.delete(i.code));window.addEventListener("blur",()=>{Bi(),Fn&&Hn(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&(Bi(),Fn&&Hn(!0))});window.addEventListener("gamepadconnected",i=>Wt(`Controller connected: ${i.gamepad.id}`));window.addEventListener("gamepaddisconnected",()=>{Fn&&(Bi(),Hn(!0),Wt("Controller disconnected. Flight paused."))});const fE=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${(i%60).toFixed(2).padStart(5,"0")}`;function cr(){const i=we.coaching?.snapshot(we.gate);ge("lap").textContent=String(we.laps).padStart(2,"0"),ge("timer").textContent=fE(i?i.lapTime:we.lapStart===null?we.steps*.02:we.steps*.02-we.lapStart),ge("gate").innerHTML=`${String(we.gate+1).padStart(2,"0")} <small>/ 12</small>`,ge("speed").innerHTML=`${Math.hypot(...we.data.qvel.subarray(0,3)).toFixed(1)} <small>m/s</small>`,ge("altitude").innerHTML=`${we.position[2].toFixed(1)} <small>m AGL</small>`,ge("status").textContent=vn?"PAUSED":we.mode==="expert"?"AUTOPILOT":we.mode==="uncoached"?"NO COACH":we.mode==="manual"?"MANUAL":`${we.mode.toUpperCase()} · ${Math.round(we.effectiveAlpha*100)}% AI`;const e=i?{coaching:"Coaching",evaluation:"Evaluation",recovery:"Recovery"}[i.phase]:"";ge("baseline-detail").textContent=i?`${vn?"Paused":e} · ${Math.round(we.effectiveAlpha*100)}% blend${we.mode==="l2c"?` · Level ${i.skillLevel}`:""}`:"",ge("device").textContent=Fl,ge("steering-feedback").hidden=we.mode==="expert",ge("live-blend").textContent=`${Math.round(we.effectiveAlpha*100)}%`;for(const[t,n]of[["roll",1],["yaw",3]])for(const[r,a]of[["human",we.lastHuman],["applied",we.lastAction]])document.querySelector(`[data-command="${t}-${r}"]`).style.left=`${50+Mn(a?.[n]??0)*50}%`;document.querySelectorAll("[data-gate]").forEach(t=>{t.classList.toggle("current",Number(t.dataset.gate)===we.gate),t.classList.toggle("passed",Number(t.dataset.gate)<we.gate)})}function dd(i){try{const e=Pr?Math.max(0,(i-Pr)/1e3):0;Pr&&(Ui+=vn?0:Math.min(e,.1)),Pr=i;const{human:t}=Da();for(;Ui>=.02&&!vn;){const n=we.coaching?.snapshot(we.gate),r=we.action(t),a=we.step(r);Ui-=.02;const l=we.coaching?.snapshot(we.gate);l&&n.phase!==l.phase&&gn.play(l.phase==="recovery"?"autopilot_on":n.phase==="recovery"?"takeover":l.phase==="evaluation"?"eval_start":"eval_end"),we.steps%5===0&&(ar.push({time:we.coaching?.time??we.data.time,trialId:we.coaching?Ir:null,mode:we.mode,position:we.position,action:r,human:t,gate:we.gate,alpha:we.effectiveAlpha,coaching:we.coaching?.snapshot(we.gate)??null}),ar.length>36e3&&ar.shift()),a.failed&&(Wt(`${a.cause}. Resetting flight.`),we.recover(),Et.smooth=null)}Et.render(),rd++%3===0&&cr(),gn.tick(we.coaching||we.mode==="assisted"?t:null,we.lastController,we.coaching?.evaluation.recovery)}catch(e){console.error(e),Hn(!0),Wt("Flight paused due to a simulation error.")}requestAnimationFrame(dd)}function ir(i,e,t="",n=0){ge("loading-status").textContent=e,ge("loading-progress").value=Math.min(6,i+n),ge("loading-stage").textContent=`${i} / 6`,ge("loading-detail").textContent=t,ge("loading-progress").setAttribute("aria-valuetext",`${i} of 6 stages complete. ${e}. ${t}`)}async function fd(i,e,t){ir(e,t);const n=await fetch(i);if(!n.ok)throw new Error(`${t} failed (${n.status})`);const r=n.headers.get("content-encoding"),a=r&&r!=="identity"?0:Number(n.headers.get("content-length"));if(!n.body)return new Uint8Array(await n.arrayBuffer());const l=n.body.getReader(),u=[];let d=0;try{for(;;){const{done:g,value:p}=await l.read();if(g)break;u.push(p),d+=p.length;const v=b=>`${(b/1048576).toFixed(1)} MB`;ir(e,t,a?`${v(d)} / ${v(a)}`:v(d),a?Math.min(.9,.9*d/a):0)}}finally{l.releaseLock()}const f=new Uint8Array(d);let m=0;for(const g of u)f.set(g,m),m+=g.length;return f}async function Bo(i,e,t){const n=await fd(`/demo/sim/${i}`,e,t);return n[0]===31&&n[1]===139?dh(n):n}async function pE(){try{const i=await fd($c,0,"Loading physics engine");ir(0,"Starting physics engine","",.95);const e=await v0({wasmBinary:i,locateFile:d=>d.endsWith(".wasm")?$c:d}),t=await Bo("physics.mjb.gz",1,"Loading flight model"),n=JSON.parse(new TextDecoder().decode(await Bo("scene.json.gz",2,"Loading warehouse"))),r=JSON.parse(new TextDecoder().decode(await Bo("policies.json.gz",3,"Loading control policies")));ir(4,"Preparing graphics"),we=new m_(e,t,n,r),Et=new eE(ge("viewport"),we,n),Il(Et.mode),lr(we.mode),ge("venue").value=Et.venue.style;let a=0;const l=Et.textureReady.length;ir(5,"Loading visual assets",`0 / ${l}`),await Promise.all(Et.textureReady.map(async d=>{await d,a++,ir(5,"Loading visual assets",`${a} / ${l}`,.95*a/l)})),ge("event-details").checked=Et.event.enabled,Et.render(),ir(6,"Ready"),Fn=!0,id.forEach(d=>d.disabled=!1),ge("loading").setAttribute("aria-busy","false"),ge("loading").hidden=!0,Ra.classList.remove("booting"),requestAnimationFrame(dd),window.flight={snapshot:()=>({...we.snapshot(),paused:vn,experience:bs,tutorialOpen:Vn.open,audio:gn.snapshot(),inputPreview:Vn.open?Vn.input:null,view:Et.mode,orientation:we.quaternion,camera:{position:Et.camera.position.toArray(),quaternion:Et.camera.quaternion.toArray()},venue:Et.venue.style,frames:rd,ready:Fn,action:we.lastAction,human:we.lastHuman}),visuals:()=>({...Et.venue.snapshot(),event:Et.event.snapshot()}),setVenue:d=>{Et.setVenue(d),ge("venue").value=d,Et.render()},setPaused:Hn,setMode:lr,setCamera:Il,reset:tc,step:d=>{if(Vn.open)throw new Error("Close the tutorial before advancing physics");if(!Number.isInteger(d)||d<0||d>1e4)throw new Error("Invalid steps");for(let f=0;f<d&&!we.step(we.action()).failed;f++);return Et.render(),cr(),we.snapshot()}};const u=document.modelContext;if(u?.registerTool){const d=new AbortController;for(const f of[{name:"get_flight_state",description:"Read current flight state",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>window.flight.snapshot()},{name:"set_flight_paused",description:"Pause or resume the flight",inputSchema:{type:"object",properties:{paused:{type:"boolean"}},required:["paused"],additionalProperties:!1},execute:m=>{if(typeof m.paused!="boolean")throw new Error("paused must be boolean");return Hn(m.paused),window.flight.snapshot()}}])Promise.resolve(u.registerTool(f,{signal:d.signal})).catch(()=>{});window.addEventListener("pagehide",()=>d.abort(),{once:!0})}}catch(i){console.error(i),ge("loading-status").textContent=i.message,ge("loading").setAttribute("aria-busy","false"),ge("loading").classList.add("error"),ge("retry").hidden=!1,ge("retry").onclick=()=>location.reload()}}pE();const mE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
