(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1161:function(t,e,r){"use strict";r.r(e);var n=r(39),l=r(37),o=(r(19),r(28),r(555)),d=r(748),c={layout:"administrator/dashboard",components:{VWidget:o.a},data:function(){return{form:{awal:"12-09-2019",akhir:"12-10-2019"},picker:null,picker2:null,arrayEvents:null,date1:null,date2:null,date:null,menu:!1,modal:!1,complex:{headers:[{text:"Name",value:"name"},{text:"Bagian Kerja",value:"bagian_kerja"},{text:"Hadir",value:"hadir"},{text:"Izin",value:"izin"},{text:"Cuti",value:"cuti"},{text:"Alpa",value:"alpa"}],items:d.a}}},mounted:function(){this.arrayEvents=Object(l.a)(Array(6)).map((function(){var t=Math.floor(30*Math.random()),e=new Date;return e.setDate(t),e.toISOString().substr(0,10)}))},methods:{functionEvents:function(t){var e=t.split("-"),r=Object(n.a)(e,3)[2];return parseInt(r,10)%3==0}}},v=r(10),f=r(13),m=r.n(f),_=r(170),h=r(189),k=r(119),x=r(171),w=r(1095),y=r(1075),V=r(553),j=r(543),z=r(184),C=r(172),D=r(546),E=r(14),T=r(88),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"pageTable"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-widget",{staticClass:"mt-3",attrs:{title:"Laporan Data Absen Karyawan"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs11:"",sm5:""}},[r("v-menu",{ref:"menu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[r("v-text-field",{attrs:{slot:"activator",label:"Picker in menu","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.form.awal,callback:function(e){t.$set(t.form,"awal",e)},expression:"form.awal"}}),t._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.form.awal,callback:function(e){t.$set(t.form,"awal",e)},expression:"form.awal"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs11:"",sm5:""}},[r("v-dialog",{ref:"dialog",attrs:{persistent:"",lazy:"","full-width":"",width:"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("v-text-field",{attrs:{slot:"activator",label:"Picker in dialog","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.form.akhir,callback:function(e){t.$set(t.form,"akhir",e)},expression:"form.akhir"}}),t._v(" "),r("v-date-picker",{attrs:{scrollable:""},model:{value:t.form.akhir,callback:function(e){t.$set(t.form,"akhir",e)},expression:"form.akhir"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs3:"",sm2:""}},[r("v-btn",{attrs:{flat:"",color:"primary",outline:""}},[t._v("Lihat")])],1)],1)],1)]),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("h3",[t._v("Data Absen Karyawan")])]),t._v(" "),r("v-flex",{attrs:{lg12:""}},[r("v-card",[r("div",[r("b-button",{attrs:{variant:"outline-danger"}},[t._v("Export PDF")]),t._v(" "),r("b-button",{attrs:{variant:"outline-success"}},[t._v("Export Excel")]),t._v(" "),r("b-button",{attrs:{variant:"outline-primary"}},[t._v("Print")])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.complex.headers,search:t.search,items:t.complex.items,"rows-per-page-items":[10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.name))]),t._v(" "),r("td",[t._v(t._s(e.item.bagian_kerja))]),t._v(" "),r("td",[t._v(t._s(e.item.hadir))]),t._v(" "),r("td",[t._v(t._s(e.item.izin))]),t._v(" "),r("td",[t._v(t._s(e.item.cuti))]),t._v(" "),r("td",[t._v(t._s(e.item.alpa))])]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,"6dd48307",null);e.default=component.exports;m()(component,{VBtn:_.a,VCard:h.a,VCardText:k.b,VContainer:x.a,VDataTable:w.a,VDatePicker:y.a,VDialog:V.a,VDivider:j.a,VFlex:z.a,VLayout:C.a,VMenu:D.a,VSpacer:E.a,VTextField:T.a})},555:function(t,e,r){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},l=r(10),o=r(13),d=r.n(o),c=r(189),v=r(119),f=r(543),m=r(14),_=r(191),h=r(16),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[t.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?r("v-divider"):t._e(),t._v(" "),r("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VCard:c.a,VCardText:v.b,VDivider:f.a,VSpacer:m.a,VToolbar:_.a,VToolbarTitle:h.b})},748:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(61),r(20);var n=[{uuid:"65a6eb21-67b5-45c3-9af7-faca2d9b60d4",no:"1",name:"Dessie purwono",bagian_kerja:"apotek",status:"hadir",hadir:"23",izin:"2",cuti:"0",alpa:"0"},{uuid:"28d9f265-74d7-4f85-83d4-6a21fca57dcf",no:"2",name:"Jakayla",bagian_kerja:"apotek",status:"hadir",hadir:"23",izin:"2",cuti:"0",alpa:"0"},{uuid:"14ddae1e-986d-42f4-8d17-46a02d469b2b",no:"3",name:"Hobart",status:"hadir",bagian_kerja:"apotek",hadir:"23",izin:"2",cuti:"0",alpa:"0"},{uuid:"6a03248b-1752-4332-a3a9-7108528cc9d3",no:"4",name:"Celestine",status:"hadir",bagian_kerja:"kasir",hadir:"23",izin:"2",cuti:"0",alpa:"0"},{uuid:"ee272550-36e8-4fe2-889d-c1ee701c5863",no:"5",name:"Hortense",status:"hadir",bagian_kerja:"keuangan",hadir:"23",izin:"2",cuti:"0",alpa:"0"},{uuid:"77f4b102-9df5-43ba-966a-6f816806c5e2",no:"6",name:"Pat",status:"hadir",bagian_kerja:"kepala apotek",hadir:"23",izin:"2",cuti:"0",alpa:"0"},{uuid:"b5899bef-d01e-42d8-af2d-edfb16b6b21e",no:"8",name:"Calista",status:"hadir",bagian_kerja:"pendaftaran",hadir:"23",izin:"2",cuti:"0",alpa:"0"},{uuid:"7d910620-84e1-49fc-951e-d375587b8189",no:"9",name:"Jackeline",status:"hadir",bagian_kerja:"administrasi",hadir:"23",izin:"2",cuti:"0",alpa:"0"}]}}]);