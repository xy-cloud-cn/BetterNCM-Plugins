(()=>{var X=Object.defineProperty;var Y=(r,e,t)=>e in r?X(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var q=(r,e,t)=>(Y(r,typeof e!="symbol"?e+"":e,t),t);var I=new EventTarget;var Z=()=>{};var h=Z,k=console.warn,j=console.error;function D(r,e){let t=0;return function(){let o=this,a=arguments;t&&clearTimeout(t),t=setTimeout(r.bind(o,a),e)}}var E="Apple-Musiclike-lyrics";var $=`config.betterncm.${"plugin"in globalThis?plugin?.manifest?.slug||plugin?.manifest?.name||E:E}`,v=ee();function ee(){try{return JSON.parse(localStorage.getItem($)||"{}")}catch(r){return k("\u8B66\u544A\uFF1AAMLL \u63D2\u4EF6\u914D\u7F6E\u8BFB\u53D6\u5931\u8D25",r),{}}}var te=D(function(){try{localStorage.setItem($,JSON.stringify(v))}catch(e){k("\u8B66\u544A\uFF1AAMLL \u63D2\u4EF6\u914D\u7F6E\u4FDD\u5B58\u5931\u8D25",e)}I.dispatchEvent(new Event("config-saved"))},2e3);function F(r,e){e===void 0?delete v[r]:v[r]=e,te()}function L(r,e){return v[r]===void 0?e:v[r]}function re(){let r=L("eapiRequestFuncName","");return h("\u52A0\u5BC6\u8BF7\u6C42\u51FD\u6570",r),L("ncmPackageVersion","")!==APP_CONF.packageVersion&&(r="",F("ncmPackageVersion",APP_CONF.packageVersion)),r===""&&(r=W()||"",r===""&&(r=W(!0)||""),F("eapiRequestFuncName",r),I.dispatchEvent(new Event("config-changed-eapiRequestFuncName"))),r}try{re()}catch{}function W(r=!1){let e=betterncm.ncm.findApiFunction(t=>t.toString().includes("_bindTokenRequest yidun getToken undefined"));if(e){for(let t in e[1])if(e[1][t]===e[0]){h("\u67E5\u627E\u5230\u539F\u59CB\u8BF7\u6C42\u51FD\u6570\uFF1A",t,e);let n=t;if(r)return n;for(let o in e[1])if(e[1][o]?.originalFunc?.toString()?.includes(`.${n}(`))return h("\u67E5\u627E\u5230\u7ED1\u5B9A\u8BF7\u6C42\u51FD\u6570\uFF1A",o,e),o}}return h("\u67E5\u627E\u8BF7\u6C42\u51FD\u6570\u5931\u8D25"),null}function U(r){let e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",t=[];for(let n=0;n<r;n++)t.push(e.charAt(Math.floor(Math.random()*e.length)));return t.join("")}var x=class extends Array{constructor(t=(n,o)=>Number(n)-Number(o)){super();this._comparator=t}_sorted=!1;sort=t=>(this._comparator=t||this._comparator,this._sorted=!0,super.sort(this._comparator));push=t=>(this._sorted=!1,super.push(t));pop=()=>(this._sorted||this.sort(),super.pop());peek=t=>(this._sorted||this.sort(),t===void 0&&(t=this.length-1),this[t]);size=()=>this.length;debug=()=>(this._sorted||this.sort(),this)};var y=class{constructor(e,t,n,o,a,c,i){this.r1=e;this.r2=t;this.g1=n;this.g2=o;this.b1=a;this.b2=c;this.histo=i}_count=-1;_volume=0;_avg=[];volume=e=>this._volume&&!e?this._volume:(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1),this._volume);count=e=>{if(this._count>-1&&!e)return this._count;let t=0,n,o,a,c;for(n=this.r1;n<=this.r2;n++)for(o=this.g1;o<=this.g2;o++)for(a=this.b1;a<=this.b2;a++)c=d(n,o,a),t+=this.histo[c]||0;return this._count=t,this._count};copy=()=>new y(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo);avg=e=>{if(this._avg.length&&e)return this._avg;let t=0,n=1<<T,o=0,a=0,c=0,i,s,u,l,m;for(s=this.r1;s<=this.r2;s++)for(u=this.g1;u<=this.g2;u++)for(l=this.b1;l<=this.b2;l++)m=d(s,u,l),i=this.histo[m]||0,t+=i,o+=i*(s+.5)*n,a+=i*(u+.5)*n,c+=i*(l+.5)*n;return t?this._avg=[~~(o/t),~~(a/t),~~(c/t)]:this._avg=[~~(n*(this.r1+this.r2+1)/2),~~(n*(this.g1+this.g2+1)/2),~~(n*(this.b1+this.b2+1)/2)],this._avg};contains=e=>{let[t,n,o]=e.map(a=>a>>T);return t>=this.r1&&t<=this.r2&&n>=this.g1&&n<=this.g2&&o>=this.b1&&o<=this.b2}};var A=5,T=8-A,O=1e3,z=.75,p={naturalOrder:(r,e)=>r<e?-1:r>e?1:0,sum:(r,e)=>r.reduce((t,n)=>t+(e?e.call(r,n):Number(n)),0),max:(r,e)=>Math.max.apply(null,e?r.map(e):r.map(t=>Number(t))),size:r=>r.reduce((e,t)=>t?e+1:e,0)},d=(r,e,t)=>(r<<2*A)+(e<<A)+t;var G=r=>{let e=new Array(1<<3*A),t,n=1/0,o=0,a=1/0,c=0,i=1/0,s=0,u,l,m;return r.forEach(function(g){[u,l,m]=g.map(f=>f>>T),t=d(u,l,m),e[t]=(e[t]||0)+1,u<n?n=u:u>o&&(o=u),l<a?a=l:l>c&&(c=l),m<i?i=m:m>s&&(s=m)}),{vbox:new y(n,o,a,c,i,s,e),histo:e}},H=(r,e)=>{if(!e.count())return[];if(e.count()===1)return[e.copy()];let t=e.r2-e.r1+1,n=e.g2-e.g1+1,o=e.b2-e.b1+1,a=p.max([t,n,o]),c=[],i=0,s,u,l,m,g;if(a===t)for(s=e.r1;s<=e.r2;s++){for(m=0,u=e.g1;u<=e.g2;u++)for(l=e.b1;l<=e.b2;l++)g=d(s,u,l),m+=r[g]||0;i+=m,c[s]=i}else if(a===n)for(s=e.g1;s<=e.g2;s++){for(m=0,u=e.r1;u<=e.r2;u++)for(l=e.b1;l<=e.b2;l++)g=d(u,s,l),m+=r[g]||0;i+=m,c[s]=i}else for(s=e.b1;s<=e.b2;s++){for(m=0,u=e.r1;u<=e.r2;u++)for(l=e.g1;l<=e.g2;l++)g=d(u,l,s),m+=r[g]||0;i+=m,c[s]=i}let f=S=>{let P=`${S}1`,w=`${S}2`,R,_,N,B,b;for(s=e[P];s<=e[w]&&!(c[s]>=i/2);s++);for(N=e.copy(),B=e.copy(),R=s-e[P],_=e[w]-s,b=R<=_?Math.min(e[w]-1,~~(s+_/2)):Math.max(e[P],~~(s-1-R/2));!c[b]&&b<=e[w];)b++;return N[w]=b,B[P]=b+1,[N,B]};return f(a===t?"r":a===n?"g":"b")};var M=class{vboxes;constructor(){this.vboxes=new x(M._compare)}push=e=>{this.vboxes.push({vbox:e,color:e.avg()})};palette=()=>this.vboxes.map(e=>e.color);size=()=>this.vboxes.size();map=e=>{for(let t=0;t<this.vboxes.size();t++)if(this.vboxes.peek(t).vbox.contains(e))return this.vboxes.peek(t).color;return this.nearest(e)};nearest=e=>{let t,n,o,a;for(t=0;t<this.vboxes.size();t++)o=Math.sqrt(Math.pow(e[0]-this.vboxes.peek(t).color[0],2)+Math.pow(e[1]-this.vboxes.peek(t).color[1],2)+Math.pow(e[2]-this.vboxes.peek(t).color[2],2)),(n===void 0||o<n)&&(n=o,a=this.vboxes.peek(t).color);return a};forcebw=()=>{this.vboxes.sort((o,a)=>p.naturalOrder(p.sum(o.color),p.sum(a.color)));let e=this.vboxes[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(this.vboxes[0].color=[0,0,0]);let t=this.vboxes.length-1,n=this.vboxes[t].color;n[0]>251&&n[1]>251&&n[2]>251&&(this.vboxes[t].color=[255,255,255]),this.vboxes.sort(M._compare)}},C=M;q(C,"_compare",(e,t)=>p.naturalOrder(e.vbox.count()*e.vbox.volume(),t.vbox.count()*t.vbox.volume()));var K=(r,e)=>{if(!r.length||e<1||e>256)return new C;let{histo:t,vbox:n}=G(r),o=new x((i,s)=>p.naturalOrder(i.count(),s.count()));o.push(n);let a=(i,s)=>{let u=i.size(),l=0,m;for(;l<O;){if(u>=s||l++>O||!i.peek().count())return;m=i.pop();let[g,f]=H(t,m);if(!g)return;i.push(g),f&&(i.push(f),u++)}};a(o,z*e),o.sort((i,s)=>p.naturalOrder(i.count()*i.volume(),s.count()*s.volume())),a(o,e);let c=new C;for(;o.size();)c.push(o.pop());return c};var J;var V={},ne=new Map;function oe(r,e,t=[]){return V[r]={funcName:r,funcBody:e},(...n)=>{if(J)return new Promise((o,a)=>{let c=U(16)+Date.now();ne.set(c,[o,a]),J.postMessage({id:c,funcName:r,args:n},t.map(i=>n[i]).filter(i=>!!i))});k("AMLL Worker \u5C1A\u672A\u8FD0\u884C\uFF0C\u6B63\u5728\u672C\u5730\u7EBF\u7A0B\u6267\u884C\u51FD\u6570",r,n);try{let o=e(...n);return Promise.resolve(o)}catch(o){return Promise.reject(o)}}}var We=oe("grabImageColors",async(r,e=16)=>{let t=new OffscreenCanvas(r.width,r.height),n=t.getContext("2d");if(n){n.drawImage(r,0,0);let o=n.getImageData(0,0,t.width,t.height),a=[];for(let s=0;s<o.width*o.height;s++)a.push([o.data[s*4],o.data[s*4+1],o.data[s*4+2]]);let c=K(a,e),i=[];return c.palette().forEach(s=>i.push(s)),i}else return[]});onmessage=async r=>{try{h("\u6B63\u5728\u6267\u884C\u540E\u53F0\u4EFB\u52A1",r.data.id,r.data.funcName,r.data.args);let t=await V[r.data.funcName].funcBody(...r.data.args);postMessage({id:r.data.id,result:t})}catch(e){j("\u540E\u53F0\u4EFB\u52A1\u53D1\u751F\u9519\u8BEF",r.data.id,r.data.funcName,r.data.args,e),postMessage({id:r.data.id,result:void 0,error:e})}};h("AMLL \u540E\u53F0\u7EBF\u7A0B\u6B63\u5728\u8FD0\u884C\uFF01");})();
