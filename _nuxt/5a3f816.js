(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1204:function(t,e,r){"use strict";r.r(e);var n=r(35),l=r.n(n),o=r(83),c={components:{VuePerfectScrollbar:l.a},data:function(){return{selected:[2],mailActions:[{href:"#",title:"Delete",click:function(t){console.log(t)}},{href:"Mark as read",title:"Mark as read",click:function(t){console.log(t)}},{href:"Spam",title:"Spam",click:function(t){console.log(t)}}]}},computed:{mail:function(){return Object(o.c)(this.$route.params.uuid)}},created:function(){window.AppMail=this},methods:{computeMailPath:function(t){return"/mail/0/"+t},formatDate:function(s){return new Date(s).toLocaleDateString()}}},v=r(10),d=r(13),m=r.n(d),f=r(676),_=r(178),h=r(170),y=r(189),x=r(119),C=r(171),w=r(543),V=r(184),k=r(190),$=r(172),D=r(14),M=r(88),T=r(191),S=r(16),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-0 mail-reply",attrs:{fluid:"","fill-height":"",id:"mailReply"}},[r("v-layout",{staticClass:"mail-reply--layout",attrs:{column:""}},[r("v-toolbar",{staticClass:"mail-reply--toolbar",attrs:{flat:"",fixed:"",app:""}},[r("v-toolbar-title",[r("v-avatar",{attrs:{size:"32"}},[r("img",{attrs:{src:t.mail.from.avatar}})]),t._v(" "),r("span",[t._v(" "+t._s(t.mail.from.name))])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:"yellow",small:""}},[t._v("star")])],1),t._v(" "),r("div",{staticClass:"caption"},[t._v(t._s(t.formatDate(t.mail.created_at)))]),t._v(" "),r("v-btn",{attrs:{icon:"",small:""}},[r("v-icon",{attrs:{small:""}},[t._v("reply")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",small:""}},[r("v-icon",{attrs:{small:""}},[t._v("reply_all")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",small:""}},[r("v-icon",{attrs:{small:""}},[t._v("delete")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",small:""}},[r("v-icon",{attrs:{small:""}},[t._v("expand_more")])],1)],1),t._v(" "),r("v-flex",{staticClass:"mail-reply--content"},[r("vue-perfect-scrollbar",{staticClass:"mail-reply--scrollbar"},[r("v-card",[r("v-card-text",{staticClass:"pa-4"},[r("div",{staticClass:"mail-reply--item"},[r("div",{staticClass:"layout column"},[r("h3",{staticClass:"headline"},[t._v("Hi Michael")]),t._v(" "),r("div",{staticClass:"text--secondary my-4",domProps:{innerHTML:t._s(t.mail.content)}}),t._v(" "),r("h4",[t._v(" "+t._s(t.mail.from.name)+",\n                  "),r("br"),t._v("\n                  Thanks\n                ")]),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("div",{staticClass:"py-3"},[r("v-alert",{attrs:{outline:"",color:"primary",icon:"attach_file",value:!0}},[t._v("\n                    Weekly Report\n                  ")])],1),t._v(" "),r("v-card",[r("v-card-text",{staticClass:"pa-0"},[r("v-text-field",{attrs:{counter:"",placeholder:"Your reply here","full-width":"","multi-line":""}})],1),t._v(" "),r("v-toolbar",{attrs:{dense:"",flat:""}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("attach_file")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("link")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("camera")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:"",icon:""}},[r("v-icon",[t._v("send")])],1)],1)],1)],1)])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAlert:f.a,VAvatar:_.a,VBtn:h.a,VCard:y.a,VCardText:x.b,VContainer:C.a,VDivider:w.a,VFlex:V.a,VIcon:k.a,VLayout:$.a,VSpacer:D.a,VTextField:M.a,VToolbar:T.a,VToolbarTitle:S.b})},614:function(t,e,r){var content=r(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("b619bfda",content,!0,{sourceMap:!1})},615:function(t,e,r){var n=r(11)(!1);n.push([t.i,".v-alert{border-radius:0;border-width:4px 0 0;border-style:solid;color:#fff;display:flex;font-size:14px;margin:4px auto;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert .v-alert__icon.v-icon,.v-alert__dismissible .v-icon{align-self:center;color:rgba(0,0,0,.3);font-size:24px}.v-alert--outline .v-icon{color:inherit!important}.v-alert__icon{margin-right:16px}.v-alert__dismissible{align-self:flex-start;color:inherit;margin-left:16px;margin-right:0;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-alert__dismissible:hover{opacity:.8}.v-alert--no-icon .v-alert__icon{display:none}.v-alert>div{align-self:center;flex:1 1}@media screen and (max-width:600px){.v-alert__icon{display:none}}.v-alert.v-alert{border-color:rgba(0,0,0,.12)!important}.v-alert.v-alert--outline{border:1px solid!important}",""]),t.exports=n},676:function(t,e,r){"use strict";r(54),r(614);var n=r(23),l=r(24),o=r(42),c=r(207),v=r(15);e.a=Object(v.a)(l.a,o.a,c.a).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(n.a,{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(n.a,{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],r=t("div",(this.outline?this.setTextColor:this.setBackgroundColor)(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[r]):r}})}}]);