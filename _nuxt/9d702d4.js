(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1164:function(t,e,n){"use strict";n.r(e);var r=n(39),l=n(37),o=(n(19),n(28),n(555)),c=n(586),d={layout:"administrator/dashboard",components:{VWidget:o.a},data:function(){return{picker:null,picker2:null,arrayEvents:null,date1:null,date2:null,date:null,menu:!1,modal:!1,complex:{headers:[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"}],items:c.a}}},mounted:function(){this.arrayEvents=Object(l.a)(Array(6)).map((function(){var t=Math.floor(30*Math.random()),e=new Date;return e.setDate(t),e.toISOString().substr(0,10)}))},methods:{functionEvents:function(t){var e=t.split("-"),n=Object(r.a)(e,3)[2];return parseInt(n,10)%3==0}}},v=n(10),m=n(13),f=n.n(m),_=n(170),x=n(189),h=n(119),k=n(171),y=n(1095),w=n(1075),V=n(553),P=n(543),D=n(184),S=n(172),C=n(546),E=n(14),T=n(88),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pageTable"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-widget",{staticClass:"mt-3",attrs:{title:"Laporan Data Pelayanan Apotek"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs11:"",sm5:""}},[n("v-menu",{ref:"menu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in menu","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-flex",{attrs:{xs11:"",sm5:""}},[n("v-dialog",{ref:"dialog",attrs:{persistent:"",lazy:"","full-width":"",width:"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in dialog","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1)],1)],1)],1)],1)]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("Data Pelayanan Apotek")])]),t._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("div",[n("b-button",{attrs:{variant:"outline-danger"}},[t._v("Export PDF")]),t._v(" "),n("b-button",{attrs:{variant:"outline-success"}},[t._v("Export Excel")]),t._v(" "),n("b-button",{attrs:{variant:"outline-primary"}},[t._v("Print")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pa-0"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.complex.headers,search:t.search,items:t.complex.items,"rows-per-page-items":[10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.name))]),t._v(" "),n("td",[t._v(t._s(e.item.email))]),t._v(" "),n("td",[t._v(t._s(e.item.phone))])]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,"62ff03c3",null);e.default=component.exports;f()(component,{VBtn:_.a,VCard:x.a,VCardText:h.b,VContainer:k.a,VDataTable:y.a,VDatePicker:w.a,VDialog:V.a,VDivider:P.a,VFlex:D.a,VLayout:S.a,VMenu:C.a,VSpacer:E.a,VTextField:T.a})},555:function(t,e,n){"use strict";var r={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},l=n(10),o=n(13),c=n.n(o),d=n(189),v=n(119),m=n(543),f=n(14),_=n(191),x=n(16),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[t.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?n("v-divider"):t._e(),t._v(" "),n("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VDivider:m.a,VSpacer:f.a,VToolbar:_.a,VToolbarTitle:x.b})},586:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(61),n(20);var r=[{uuid:"36a1ead7-57a0-4275-8a21-956194ab7cdf",no:"7",name:"Solon",bagian_kerja:"dokter",jobTitle:"Web Developer",email:"Solon.Bauch4_Rath@hotmail.com",username:"Solon.Bauch4",phone:"789-914-4904 x173",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg",spesialis:"Poli Umum",praktek:"Sabtu",address:{street:"8153 Favian Walk",suite:"Apt. 495",city:"East Preston",state:"Idaho",country:"Iceland",zipcode:"24555",geo:{lat:"-42.5691",lng:"-2.5791"}}},{uuid:"afdb5033-5bcc-4cec-b932-353a83410b44",no:"10",name:"Jamey",bagian_kerja:"dokter",jobTitle:"PHP Developer",email:"Jamey_Grant_Cruickshank73@gmail.com",username:"Jamey_Grant",phone:"545-939-2404 x32373",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mikebeecham/128.jpg",spesialis:"Poli Umum",praktek:"Kamis",address:{street:"38372 Mante Glen",suite:"Suite 090",city:"Robertsside",state:"Texas",country:"Equatorial Guinea",zipcode:"86558-7214",geo:{lat:"-55.0222",lng:"-100.5977"}}}]}}]);