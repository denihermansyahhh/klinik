(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1350:function(t,e,r){"use strict";r.r(e);var n={layout:"administrator/dashboard",data:function(){return{form:{tipe:"BPJS"},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.tipe="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},o=r(10),l=r(13),c=r.n(l),d=r(170),v=r(189),f=r(119),m=r(171),h=r(184),_=r(172),w=r(14),x=r(88),V=r(191),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-btn",{attrs:{color:"warning","nuxt-link":"",to:".",outline:"",depressed:""}},[t._v("Kembali")]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("v-card",[r("v-toolbar",{attrs:{card:""}},[r("h3",[t._v("Edit Data Tipe Ruangan")])]),t._v(" "),r("v-card-text",[t.show?r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{lg12:"",sm12:""}},[r("v-text-field",{attrs:{label:"Tipe Ruangan",name:"tipe",placeholder:"Masukan tipe Ruangan",required:""},model:{value:t.form.tipe,callback:function(e){t.$set(t.form,"tipe",e)},expression:"form.tipe"}})],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-card-actions",{staticClass:"pb-4 pl-3"},[r("v-btn",{attrs:{type:"submit",color:"primary",depressed:""}},[t._v("Simpan")]),t._v(" "),r("v-btn",{attrs:{type:"reset",color:"pink",outline:"",depressed:""}},[t._v("Kosongkan")])],1)],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VContainer:m.a,VFlex:h.a,VLayout:_.a,VSpacer:w.a,VTextField:x.a,VToolbar:V.a})}}]);