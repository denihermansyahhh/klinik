(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1307:function(t,e,r){"use strict";r.r(e);var n={layout:"dokter/dashboard",data:function(){return{form:{nama:"",no_hp:"",nip:"",tmp_lahir:"",tgl_lahir:"",umur:"",goldar:"",kp:""},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.photo="",this.form.no_hp="",this.form.nip="",this.form.tmp_lahir="",this.form.tgl_lahir="",this.form.umur="",this.form.goldar="",this.form.kp="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},o=r(10),l=r(13),d=r.n(l),v=r(170),h=r(189),f=r(171),c=r(543),m=r(184),x=r(587),_=r(172),y=r(544),w=r(88),k=r(191),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"pageTable"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("v-card",[r("v-toolbar",{attrs:{card:"",color:"white"}},[r("h3",[t._v("Rujukan Ke Rumah Sakit")])]),t._v(" "),r("v-divider"),t._v(" "),r("v-flex",{attrs:{sm12:""}},[t.show?r("v-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Nama Dokter")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Masukan nama dokter",color:"primary",id:"testing",type:"text",required:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Nama Rumah Sakit")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Masukan nama rumah sakit",color:"primary",id:"testing",type:"text",required:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Nama Pasien")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Masukan nama pasien",color:"primary",id:"testing",type:"text",required:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Usia")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Masukan usia pasien",color:"primary",id:"testing",type:"number",required:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Alamat")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-5",placeholder:"Masukan alamat lengkap",color:"teal","multi-line":"",required:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Hasil Pemeriksaan Sementara")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-5",placeholder:"Masukan hasil pemeriksaan sementara",color:"teal","multi-line":"",required:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Hasil Tindakan Sementara")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-5",placeholder:"Masukan hasil tindakan sementara",color:"teal","multi-line":"",required:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Kondisi Pasien")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-5",placeholder:"Kondisi pasien saat akan dirujuk",color:"teal","multi-line":"",required:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Catatan")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-text-field",{attrs:{name:"input-5",placeholder:"Catatan",color:"teal","multi-line":"",required:""}})],1)],1),t._v(" "),r("v-btn",{attrs:{type:"submit",color:"success"}},[t._v("Simpan")]),t._v(" "),r("v-btn",{attrs:{type:"reset",color:"red"}},[t._v("Reset")])],1):t._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VContainer:f.a,VDivider:c.a,VFlex:m.a,VForm:x.a,VLayout:_.a,VSubheader:y.a,VTextField:w.a,VToolbar:k.a})},571:function(t,e,r){var content=r(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("26d73d9e",content,!0,{sourceMap:!1})},572:function(t,e,r){var n=r(11)(!1);n.push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""]),t.exports=n},587:function(t,e,r){"use strict";r(68),r(54),r(288),r(2),r(61),r(571);var n=r(67);e.a={name:"v-form",mixins:[Object(n.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return!this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}}}]);