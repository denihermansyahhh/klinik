(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1195:function(t,e,n){"use strict";n.r(e);var r={components:{VWidget:n(555).a},data:function(){return{page:1}},computed:{},methods:{}},l=n(10),o=n(13),c=n.n(o),d=n(171),h=n(184),v=n(172),f=n(844),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-parallax"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{lg12:""}},[r("v-widget",{attrs:{title:"Default"}},[r("div",{staticClass:"text-xs-center",attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-parallax",{attrs:{src:n(293)}})],1)]),t._v(" "),r("v-widget",{staticClass:"mt-3",attrs:{title:"Content inside"}},[r("div",{staticClass:"text-xs-center",attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-parallax",{attrs:{src:n(292)}},[r("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[r("h1",{staticClass:"white--text"},[t._v("Vuetify.js")]),t._v(" "),r("h4",{staticClass:"white--text"},[t._v("Build your application today!")])])],1)],1)]),t._v(" "),r("v-widget",{staticClass:"mt-3",attrs:{title:"Jumbotron inside"}},[r("div",{staticClass:"text-xs-center",attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-parallax",{attrs:{src:n(295),height:"700",jumbotron:""}})],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VContainer:d.a,VFlex:h.a,VLayout:v.a,VParallax:f.a})},555:function(t,e,n){"use strict";var r={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},l=n(10),o=n(13),c=n.n(o),d=n(189),h=n(119),v=n(543),f=n(14),w=n(191),m=n(16),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[t.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?n("v-divider"):t._e(),t._v(" "),n("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:h.b,VDivider:v.a,VSpacer:f.a,VToolbar:w.a,VToolbarTitle:m.b})},684:function(t,e,n){var content=n(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("115eb253",content,!0,{sourceMap:!1})},685:function(t,e,n){var r=n(11)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},844:function(t,e,n){"use strict";n(27),n(684);var r=n(4).default.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),l=n(15);e.a=Object(l.a)(r).extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, "+this.parallax+"px)"}}},watch:{parallax:function(){this.isBooted=!0}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1))},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[e,content])}})}}]);