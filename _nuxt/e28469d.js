(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1335:function(e,t,n){"use strict";n.r(t);var r=n(39),o=n(37),l=(n(19),n(28),n(555)),c=n(565),d={layout:"keuangan/dashboard",components:{VWidget:l.a},data:function(){return{picker:null,picker2:null,arrayEvents:null,date1:null,date2:null,date:null,menu:!1,modal:!1,complex:{headers:[{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Phone",value:"phone"}],items:c.a}}},mounted:function(){this.arrayEvents=Object(o.a)(Array(6)).map((function(){var e=Math.floor(30*Math.random()),t=new Date;return t.setDate(e),t.toISOString().substr(0,10)}))},methods:{functionEvents:function(e){var t=e.split("-"),n=Object(r.a)(t,3)[2];return parseInt(n,10)%3==0}}},m=n(10),v=n(13),f=n.n(v),h=n(170),k=n(189),y=n(119),_=n(171),x=n(1095),w=n(1075),P=n(553),C=n(543),S=n(184),T=n(172),j=n(546),z=n(14),V=n(88),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"pageTable"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-widget",{staticClass:"mt-3",attrs:{title:"Laporan Data Penggajian Karyawan"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs11:"",sm5:""}},[n("v-menu",{ref:"menu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":e.date},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in menu","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1)],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-flex",{attrs:{xs11:"",sm5:""}},[n("v-dialog",{ref:"dialog",attrs:{persistent:"",lazy:"","full-width":"",width:"290px","return-value":e.date},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in dialog","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.date)}}},[e._v("OK")])],1)],1)],1)],1)],1)],1)]),e._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[e._v("Data Obat Dan Inventory")])]),e._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("div",[n("b-button",{attrs:{variant:"outline-danger"}},[e._v("Export PDF")]),e._v(" "),n("b-button",{attrs:{variant:"outline-success"}},[e._v("Export Excel")]),e._v(" "),n("b-button",{attrs:{variant:"outline-primary"}},[e._v("Print")])],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pa-0"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.complex.headers,search:e.search,items:e.complex.items,"rows-per-page-items":[10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.name))]),e._v(" "),n("td",[e._v(e._s(t.item.email))]),e._v(" "),n("td",[e._v(e._s(t.item.phone))])]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,"d85e1274",null);t.default=component.exports;f()(component,{VBtn:h.a,VCard:k.a,VCardText:y.b,VContainer:_.a,VDataTable:x.a,VDatePicker:w.a,VDialog:P.a,VDivider:C.a,VFlex:S.a,VLayout:T.a,VMenu:j.a,VSpacer:z.a,VTextField:V.a})},555:function(e,t,n){"use strict";var r={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},o=n(10),l=n(13),c=n.n(l),d=n(189),m=n(119),v=n(543),f=n(14),h=n(191),k=n(16),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[e.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer"),e._v(" "),e._t("widget-header-action")],2):e._e(),e._v(" "),e.enableHeader?n("v-divider"):e._e(),e._v(" "),n("v-card-text",{class:e.contentBg},[e._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);t.a=component.exports;c()(component,{VCard:d.a,VCardText:m.b,VDivider:v.a,VSpacer:f.a,VToolbar:h.a,VToolbarTitle:k.b})},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(61),n(20);var r=[{uuid:"65a6eb21-67b5-45c3-9af7-faca2d9b60d4",no:"1",name:"Dessie purwono",email:"Dessie7937@gmail.com",username:"Dessie79",jobTitle:"Web Developer",phone:"1-360-812-9380 x511",avatar:n(284),spesialis:"Poli Umum",praktek:"Senin",address:{street:"655 Archibald Groves",suite:"Apt. 818",city:"Carlosshire",state:"Arkansas",country:"Somalia",zipcode:"10406",geo:{lat:"-44.6063",lng:"-169.7706"}}},{uuid:"28d9f265-74d7-4f85-83d4-6a21fca57dcf",no:"2",name:"Jakayla",jobTitle:"Web Designer",email:"Jakayla_Crooks867@yahoo.com",username:"Jakayla_Crooks86",phone:"610.499.1240",avatar:n(285),spesialis:"Poli Gigi",praktek:"Senin",address:{street:"281 Tillman Forge",suite:"Apt. 381",city:"New Sandrinemouth",state:"North Dakota",country:"Reunion",zipcode:"19540-8186",geo:{lat:"-12.3375",lng:"-117.9067"}}},{uuid:"14ddae1e-986d-42f4-8d17-46a02d469b2b",no:"3",name:"Hobart",jobTitle:"Sales",email:"Hobart_Mueller.Thiel@hotmail.com",username:"Hobart_Mueller",phone:"1-590-385-3349",avatar:n(286),spesialis:"Poli THT",praktek:"Selasa",address:{street:"706 Padberg Knoll",suite:"Suite 818",city:"Port Mablefurt",state:"Arkansas",country:"Netherlands Antilles",zipcode:"89975-6584",geo:{lat:"-42.9187",lng:"8.5866"}}},{uuid:"6a03248b-1752-4332-a3a9-7108528cc9d3",no:"4",name:"Celestine",jobTitle:"Marketing",email:"Celestine.Casper59@hotmail.com",username:"Celestine.Casper",phone:"1-830-046-3289",avatar:n(287),spesialis:"Poli Mata",praktek:"Rabu",address:{street:"9528 Schroeder Track",suite:"Apt. 443",city:"Godfreyburgh",state:"Montana",country:"Slovenia",zipcode:"10220",geo:{lat:"36.8638",lng:"20.0047"}}},{uuid:"ee272550-36e8-4fe2-889d-c1ee701c5863",no:"5",name:"Hortense",email:"Hortense99.Jakubowski@yahoo.com",jobTitle:"Project Manager",username:"Hortense99",phone:"712.916.2569 x0663",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg",spesialis:"Poli Gigi",praktek:"Kamis",address:{street:"9046 Allen Ferry",suite:"Suite 429",city:"Angushaven",state:"Michigan",country:"Costa Rica",zipcode:"92378-7065",geo:{lat:"78.1292",lng:"-134.6632"}}},{uuid:"77f4b102-9df5-43ba-966a-6f816806c5e2",no:"6",name:"Pat",jobTitle:"Product Manager",email:"Pat_Zulauf81.Bartell86@gmail.com",username:"Pat_Zulauf81",phone:"(058) 200-7342",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rehatkathuria/128.jpg",spesialis:"Poli Umum",praktek:"Jumat",address:{street:"62268 Favian Coves",suite:"Suite 993",city:"Baumbachstad",state:"New Mexico",country:"Montserrat",zipcode:"44440",geo:{lat:"-34.7835",lng:"148.8907"}}},{uuid:"36a1ead7-57a0-4275-8a21-956194ab7cdf",no:"7",name:"Solon",jobTitle:"Web Developer",email:"Solon.Bauch4_Rath@hotmail.com",username:"Solon.Bauch4",phone:"789-914-4904 x173",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg",spesialis:"Poli Umum",praktek:"Sabtu",address:{street:"8153 Favian Walk",suite:"Apt. 495",city:"East Preston",state:"Idaho",country:"Iceland",zipcode:"24555",geo:{lat:"-42.5691",lng:"-2.5791"}}},{uuid:"b5899bef-d01e-42d8-af2d-edfb16b6b21e",no:"8",name:"Calista",jobTitle:"Programmer",email:"Calista_Mertz1757@hotmail.com",username:"Calista_Mertz17",phone:"961-703-4134",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg",spesialis:"Poli Umum",praktek:"Selasa",address:{street:"886 Wendy Circles",suite:"Apt. 933",city:"Lake Loy",state:"Rhode Island",country:"South Africa",zipcode:"65261",geo:{lat:"-58.9245",lng:"-43.6330"}}},{uuid:"7d910620-84e1-49fc-951e-d375587b8189",no:"9",name:"Jackeline",jobTitle:"Sales Executive",email:"Jackeline.Abshire_Dach@yahoo.com",username:"Jackeline.Abshire",phone:"(326) 903-5706 x6854",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/larrybolt/128.jpg",spesialis:"Poli Umum",praktek:"Rabu",address:{street:"416 Cathy Spur",suite:"Apt. 431",city:"North Camila",state:"Pennsylvania",country:"Libyan Arab Jamahiriya",zipcode:"31751",geo:{lat:"64.0673",lng:"154.7671"}}},{uuid:"afdb5033-5bcc-4cec-b932-353a83410b44",no:"10",name:"Jamey",jobTitle:"PHP Developer",email:"Jamey_Grant_Cruickshank73@gmail.com",username:"Jamey_Grant",phone:"545-939-2404 x32373",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mikebeecham/128.jpg",spesialis:"Poli Umum",praktek:"Kamis",address:{street:"38372 Mante Glen",suite:"Suite 090",city:"Robertsside",state:"Texas",country:"Equatorial Guinea",zipcode:"86558-7214",geo:{lat:"-55.0222",lng:"-100.5977"}}}]}}]);