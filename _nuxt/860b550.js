(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1300:function(t,e,r){"use strict";r.r(e);var o={layout:"apotek/dashboard",data:function(){return{form:{nama:"",jenis:"",stok:""},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.nama="",this.form.jenis="",this.form.stok="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},n=r(10),l=r(13),m=r.n(l),f=r(170),c=r(171),d=r(184),v=r(172),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-statistic"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("a",{attrs:{href:"/apotek/obat"}},[r("v-btn",{staticClass:"warning"},[t._v("Kembali")])],1)]),t._v(" "),r("v-flex",{attrs:{sm12:""}},[t.show?r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Nama Obat:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Masukan Nama Obat",required:""},model:{value:t.form.nama,callback:function(e){t.$set(t.form,"nama",e)},expression:"form.nama"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-2",label:"Jenis Obat:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",placeholder:"Masukan Jenis Obat",required:""},model:{value:t.form.jenis,callback:function(e){t.$set(t.form,"jenis",e)},expression:"form.jenis"}})],1),t._v(" "),r("b-form-group",{attrs:{id:"input-group-2",label:"Stok Obat:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",placeholder:"Masukan Stok Obat",type:"number",required:""},model:{value:t.form.stok,callback:function(e){t.$set(t.form,"stok",e)},expression:"form.stok"}})],1),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e(),t._v(" "),r("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[r("pre",{staticClass:"m-0"},[t._v(t._s(t.form))])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VContainer:c.a,VFlex:d.a,VLayout:v.a})}}]);