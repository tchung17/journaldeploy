(function(e){function t(t){for(var r,a,u=t[0],i=t[1],c=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"97ae2e41"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"7a934321"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=s[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/journaldeploy/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"032d":function(e,t,n){"use strict";var r=n("260b"),a=n("000b"),o=n("e71f"),s={apiKey:"AIzaSyAGtzvqh-7pkpYVozSNYwauS7ENRSH9HCM",authDomain:"journal-cd949.firebaseapp.com",projectId:"journal-cd949",storageBucket:"journal-cd949.appspot.com",messagingSenderId:"164916645712",appId:"1:164916645712:web:9bab71c3b997e9c32ce655",measurementId:"G-46L50ET69K"},u=Object(r["a"])(s),i=(Object(a["a"])(u),Object(o["c"])());t["a"]=i},"0bbf":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("el-menu",{staticClass:"el-menu-demo",attrs:{router:!0,mode:"horizontal","default-active":e.$route.path}},[t("el-menu-item",{attrs:{index:"/"}},[e._v("Home")]),t("el-menu-item",{attrs:{index:"/entries"}},[e._v("View your entries")]),t("el-menu-item",{attrs:{index:"/admin"}},[e._v("Add questions")])],1),t("router-view")],1)},o=[],s=(n("14d9"),{methods:{handleSelect:function(e,t){this.$router.push(e)}}}),u=s,i=(n("a65e"),n("2877")),c=Object(i["a"])(u,a,o,!1,null,null,null),l=c.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home",staticStyle:{display:"flex","justify-content":"center"}},[t("el-card",{staticClass:"box-card"},[t("h3",[e._v(" "+e._s(e.date))]),t("el-form",[e._l(e.questions,(function(n,r){return t("el-form-item",{key:r},[t("div",[e._v(e._s(n.text))]),"name"==n.type||"music"==n.type||"any"==n.type?t("el-input",{model:{value:n.answer,callback:function(t){e.$set(n,"answer",t)},expression:"question.answer"}}):e._e(),"yes/no"==n.type?t("el-radio-group",{model:{value:n.answer,callback:function(t){e.$set(n,"answer",t)},expression:"question.answer"}},[t("el-radio-button",{attrs:{label:"Yes"}}),t("el-radio-button",{attrs:{label:"No"}})],1):e._e(),"bar"==n.type?t("el-slider",{attrs:{step:1,max:10,"show-stops":""},model:{value:n.answer,callback:function(t){e.$set(n,"answer",t)},expression:"question.answer"}}):e._e()],1)})),t("el-form-item",[t("div",{staticStyle:{display:"flex"}},[t("el-input",{attrs:{placeholder:"Link entry with your most recent entry code"},model:{value:e.prevID,callback:function(t){e.prevID=t},expression:"prevID"}},[t("template",{slot:"append"},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("Submit")])],1)],2)],1)])],2)],1)],1)},f=[],b=n("c7eb"),m=n("1da1"),h=(n("4d90"),n("159b"),n("b64b"),n("e9c4"),n("032d")),v=n("e71f"),y=n("fb9c"),g=n.n(y),w={name:"Home",data:function(){return{questions:[],prevID:"",currentID:"",date:""}},components:{},mounted:function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),r=e.getFullYear();e=n+"-"+t+"-"+r,this.date=e,this.getQuestions()},methods:{getQuestions:function(){var e=this;return Object(m["a"])(Object(b["a"])().mark((function t(){var n;return Object(b["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["b"])(Object(v["a"])(h["a"],"questions","11-28-2022"));case 2:if(n=t.sent,n.exists()){t.next=8;break}return t.next=6,Object(v["b"])(Object(v["a"])(h["a"],"questions",e.date));case 6:return n=t.sent,t.abrupt("return");case 8:Object.keys(n.data()).forEach((function(t){return e.questions.push(JSON.parse(n.data()[t]))}));case 9:case"end":return t.stop()}}),t)})))()},onSubmit:function(){var e=this;return Object(m["a"])(Object(b["a"])().mark((function t(){var n,r,a;return Object(b["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.questions.some((function(e){return!e.answer}))){t.next=3;break}return e.$notify.error({title:"Error",message:"Please answer all questions!"}),t.abrupt("return");case 3:if(""==e.prevID){t.next=15;break}return t.next=6,Object(v["b"])(Object(v["a"])(h["a"],"entries",e.prevID));case 6:if(n=t.sent,n.exists()){t.next=12;break}return console.log("doesn't exist"),t.abrupt("return");case 12:if(!n.data.nextID){t.next=15;break}return console.log("already has a next element"),t.abrupt("return");case 15:return r=new g.a,a=r(),t.next=19,Object(v["d"])(Object(v["a"])(h["a"],"entries",a),{answerArr:JSON.stringify(e.questions),dayID:e.date,prevID:e.prevID,nextID:""});case 19:if(""==e.prevID){t.next=22;break}return t.next=22,Object(v["d"])(Object(v["a"])(h["a"],"entries",e.prevID),{nextID:a},{merge:!0});case 22:e.currentID=a,e.$confirm("Success! The code for this entry is: "+a).then((function(e){done()})).catch((function(e){}));case 24:case"end":return t.stop()}}),t)})))()}}},x=w,j=(n("ffb3"),Object(i["a"])(x,p,f,!1,null,null,null)),O=j.exports;r["default"].use(d["a"]);var S=[{path:"/",name:"Home",component:O},{path:"/entries",name:"Entries",component:function(){return n.e("about").then(n.bind(null,"4230"))}},{path:"/admin",name:"Admin",component:function(){return n.e("about").then(n.bind(null,"3530"))}}],k=new d["a"]({mode:"history",base:"/journaldeploy/",routes:S}),_=k,I=n("2f62");r["default"].use(I["a"]);var D=new I["a"].Store({state:{},mutations:{},actions:{},modules:{addEntry:function(e,t){e.commit,e.state,e.dispatch},getQuestion:function(e,t){e.commit,e.state,e.dispatch},getAllEntries:function(e,t){e.commit,e.state,e.dispatch},addQuestion:function(e,t){e.commit,e.state,e.dispatch},updateQuestion:function(e,t){e.commit,e.state,e.dispatch}}}),E=n("5c96"),q=n.n(E),A=n("b2d6"),C=n.n(A);n("0fae");r["default"].config.productionTip=!1,r["default"].use(q.a,{locale:C.a}),new r["default"]({router:_,store:D,render:function(e){return e(l)}}).$mount("#app")},a65e:function(e,t,n){"use strict";n("0bbf")},ff9a:function(e,t,n){},ffb3:function(e,t,n){"use strict";n("ff9a")}});
//# sourceMappingURL=app.0764e2e8.js.map