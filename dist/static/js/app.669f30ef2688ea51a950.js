webpackJsonp([0],{"+6I+":function(t,e){},"2b4o":function(t,e,n){t.exports=n.p+"static/img/cart-with-ajax.836f19e.png"},"4Wfx":function(t,e,n){t.exports=n.p+"static/img/CTCB.35bc073.png"},"4how":function(t,e){},"76Jo":function(t,e){t.exports={hahow:{title:"Hahow 課程範例作品",text:"這邊集合了在 Hahow 課程中製作的完成度高的範例"},tools:{title:"自己製作的小工具",text:"這邊集合了因應生活的某些需求自行製作開發的小工具們"},projects:{title:"實習工作中參與進行的專案",text:"這邊整理了於「墨雨設計」中觀摩實習過程中參與的專案們"},others:{title:"其餘類別的作品",text:"這邊整理了其餘類別的作品"}}},"9npU":function(t,e){t.exports=[{title:"天氣盒子",type:"hahow",context:null,githubUrl:"https://github.com/w71800/weather-box",gitpagesUrl:"https://w71800.github.io/weather-box/",imgUrl:"weather-box.png"},{title:"拉丁文變格練習器",type:"tools",context:null,githubUrl:"https://github.com/w71800/latin-declension-practice",gitpagesUrl:"https://w71800.github.io/latin-declension-practice/",imgUrl:"latin-declension-practice.png"},{title:"天數計算器",type:"tools",context:null,githubUrl:"https://github.com/w71800/livingday-calculator",gitpagesUrl:"https://w71800.github.io/livingday-calculator/dist/",imgUrl:"livingday-calculator.png"},{title:"摩斯密碼",type:"hahow",context:null,githubUrl:"https://github.com/w71800/morse-code",gitpagesUrl:"https://w71800.github.io/morse-code",imgUrl:"morse-code.png"},{title:"小怪獸",type:"hahow",context:null,githubUrl:"https://github.com/w71800/monster",gitpagesUrl:"https://w71800.github.io/monster",imgUrl:"monster.png"},{title:"ajax 功能購物車",type:"hahow",context:null,githubUrl:"https://github.com/w71800/cart-with-ajax",gitpagesUrl:"https://w71800.github.io/cart-with-ajax",imgUrl:"cart-with-ajax.png"},{title:"FAB DAO 募資專案",type:"projects",context:null,githubUrl:null,gitpagesUrl:"https://project.fab.tw",imgUrl:"FAB-DAO.png"},{title:"個人簡歷",type:"others",context:null,githubUrl:"https://github.com/w71800/resume",gitpagesUrl:"https://w71800.github.io/resume",imgUrl:"resume.png"},{title:"成果發表會入口網",type:"others",context:null,githubUrl:"https://github.com/w71800/TMHC_2019",gitpagesUrl:"https://w71800.github.io/TMHC_2019",imgUrl:"TMHC_2019.png"},{title:"中信金員工內訓用職能網",type:"projects",context:null,githubUrl:null,gitpagesUrl:null,imgUrl:"CTCB.png"}]},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"navbar"}},[e("div",{staticClass:"nav-container"},[e("div",{staticClass:"links"},[e("router-link",{attrs:{to:"/"}},[this._v("回首頁")]),e("router-link",{attrs:{to:"/hahow"}},[this._v("Hahow")]),e("router-link",{attrs:{to:"/tools"}},[this._v("小工具")]),e("router-link",{attrs:{to:"/projects"}},[this._v("參與專案")]),e("router-link",{attrs:{to:"/others"}},[this._v("其餘")])],1)])])},staticRenderFns:[]};var s=n("VU/8")({},r,!1,function(t){n("u9cF")},null,null).exports,a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"footer"}})},staticRenderFns:[]};var o=n("VU/8")({data:function(){return{}},computed:{}},a,!1,function(t){n("+6I+")},null,null).exports,c=n("76Jo"),l=n.n(c),u=n("9npU"),p=n.n(u),h={install:function(){},test:function(){console.log("test")}};console.log(h);var d={provide:function(){return{works:p.a}},data:function(){return{works:p.a}},components:{NavBar:s,Footer:o},name:"App"},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var f=n("VU/8")(d,g,!1,function(t){n("OeZq")},null,null).exports,m=n("/ocq"),v={computed:{imgUrl:function(){return n("nvbl")}},mounted:function(){var t=document.querySelector("svg"),e=document.querySelector("h5");t.addEventListener("animationend",function(t){e.classList.add("show")})}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:{backgroundImage:"url("+this.imgUrl+")"},attrs:{id:"landing"}},[e("div",{staticClass:"filter"}),e("div",{staticClass:"text"},[e("svg",{staticClass:"title"},[e("text",{attrs:{x:"50%",y:"50%"}},[this._v("威利的作品集")])]),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[e("span",{staticClass:"orange"},[this._v("Portfolio ")]),e("span",[this._v("of IKA")])])}]};var w=n("VU/8")(v,b,!1,function(t){n("dWV9")},"data-v-1be31ca8",null).exports,x={props:{hahow:{type:Object}},inject:["works"],computed:{cardDatas:function(){return this.works.filter(function(t){return"hahow"==t.type})}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("Description",{attrs:{data:this.hahow}}),e("div",{staticClass:"cards"},this._l(this.cardDatas,function(t){return e("Card",{key:t.title,attrs:{data:t}})}),1)],1)},staticRenderFns:[]};var U=n("VU/8")(x,_,!1,function(t){n("lkNx")},null,null).exports,y={props:{tools:{type:Object}},inject:["works"],computed:{cardDatas:function(){return this.works.filter(function(t){return"tools"==t.type})}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("Description",{attrs:{data:this.tools}}),e("div",{staticClass:"cards"},this._l(this.cardDatas,function(t){return e("Card",{attrs:{keys:t.title,data:t}})}),1)],1)},staticRenderFns:[]};var k=n("VU/8")(y,C,!1,function(t){n("tC3E")},"data-v-731a495a",null).exports,j={props:{projects:{type:Object}},inject:["works"],computed:{cardDatas:function(){return this.works.filter(function(t){return"projects"==t.type})}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("Description",{attrs:{data:this.projects}}),e("div",{staticClass:"cards"},this._l(this.cardDatas,function(t){return e("Card",{attrs:{keys:t.title,data:t}})}),1)],1)},staticRenderFns:[]};var F=n("VU/8")(j,D,!1,function(t){n("4how")},null,null).exports,O={props:{others:{type:Object}},inject:["works"],computed:{cardDatas:function(){return this.works.filter(function(t){return"others"==t.type})}}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container"}},[e("Description",{attrs:{data:this.others}}),e("div",{staticClass:"cards"},this._l(this.cardDatas,function(t){return e("Card",{attrs:{keys:t.title,data:t}})}),1)],1)},staticRenderFns:[]};var R=n("VU/8")(O,E,!1,function(t){n("ZRB5")},"data-v-44bb2aad",null).exports,B=l.a.hahow,A=l.a.tools,H=l.a.projects,N=l.a.others;i.a.use(m.a);var T=new m.a({mode:"hash",routes:[{path:"/",name:"Hahow",component:w},{path:"/hahow",name:"Hahow",props:{hahow:B},component:U},{path:"/tools",name:"Tools",props:{tools:A},component:k},{path:"/projects",name:"Projects",props:{projects:H},component:F},{path:"/others",name:"Others",props:{others:N},component:R}]}),V={props:["data"],computed:{imgUrl:function(){return n("g2Y0")("./"+this.data.imgUrl)}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"card"}},[n("div",{staticClass:"img",style:{backgroundImage:"url("+t.imgUrl+")"}}),n("div",{staticClass:"info"},[n("div",{staticClass:"links"},[t.data.gitpagesUrl?n("div",{staticClass:"icon site"},[n("a",{attrs:{href:t.data.gitpagesUrl,target:"_blank"}})]):t._e(),t.data.githubUrl?n("div",{staticClass:"icon github"},[n("a",{attrs:{href:t.data.githubUrl,target:"_blank"}})]):t._e()])]),n("div",{staticClass:"cover"}),n("div",{staticClass:"title"},[t._v(t._s(t.data.title))])])},staticRenderFns:[]};var $=n("VU/8")(V,q,!1,function(t){n("olS/")},"data-v-5e10841c",null).exports,M={props:{data:{type:Object}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"description"}},[e("h1",[this._v(this._s(this.data.title))]),e("p",[this._v(this._s(this.data.text))]),e("hr")])},staticRenderFns:[]};var J=n("VU/8")(M,S,!1,function(t){n("TMRc")},"data-v-980dbc3a",null).exports,I={install:function(t){t.component("Card",$),t.component("Description",J)}};i.a.config.productionTip=!1,i.a.use(I);new i.a({el:"#app",router:T,components:{App:f},template:"<App/>"})},OeZq:function(t,e){},SMNs:function(t,e,n){t.exports=n.p+"static/img/latin-declension-practice.adf6a39.png"},TMRc:function(t,e){},ZRB5:function(t,e){},bSox:function(t,e,n){t.exports=n.p+"static/img/succulent-intro.8ef6a76.png"},dWV9:function(t,e){},"ff//":function(t,e,n){t.exports=n.p+"static/img/resume.e1c8869.png"},g2Y0:function(t,e,n){var i={"./CTCB.png":"4Wfx","./FAB-DAO.png":"qJBd","./TMHC_2019.png":"lpNl","./cart-with-ajax.png":"2b4o","./header.png":"nvbl","./latin-declension-practice.png":"SMNs","./livingday-calculator.png":"obzq","./monster.png":"tm/y","./morse-code.png":"qhwP","./resume.png":"ff//","./succulent-intro.png":"bSox","./weather-box.png":"rJON"};function r(t){return n(s(t))}function s(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(i)},r.resolve=s,t.exports=r,r.id="g2Y0"},lkNx:function(t,e){},lpNl:function(t,e,n){t.exports=n.p+"static/img/TMHC_2019.8a389ec.png"},nvbl:function(t,e,n){t.exports=n.p+"static/img/header.afd5ab8.png"},obzq:function(t,e,n){t.exports=n.p+"static/img/livingday-calculator.7cb33ac.png"},"olS/":function(t,e){},qJBd:function(t,e,n){t.exports=n.p+"static/img/FAB-DAO.13bb876.png"},qhwP:function(t,e,n){t.exports=n.p+"static/img/morse-code.585e4fc.png"},rJON:function(t,e,n){t.exports=n.p+"static/img/weather-box.dfda23e.png"},tC3E:function(t,e){},"tm/y":function(t,e,n){t.exports=n.p+"static/img/monster.0e1793c.png"},u9cF:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.669f30ef2688ea51a950.js.map