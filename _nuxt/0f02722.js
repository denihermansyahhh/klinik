(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1302:function(t,e,l){"use strict";l.r(e);var n=l(555),r=l(600),d={layout:"apotek/dashboard",components:{VWidget:n.a},data:function(){return{headers:[{text:"Nama Obar",value:"obat",align:"center"},{text:"Aturan Minum",value:"aturan_minum",align:"center"},{text:"Dosis",value:"dosis",align:"center"},{text:"Jumlah",value:"jumlah",align:"center"},{text:"Status Tebus",value:"status",align:"center"},{text:"Catatan             ",value:"Catatan",align:"center"}],items:r.a,colors:{processing:"blue",sent:"red",delivered:"green"}}},computed:{},methods:{getColorByStatus:function(t){return this.colors[t]}}},o=l(10),v=l(13),c=l.n(v),m=l(189),x=l(119),_=l(545),f=l(171),h=l(1095),k=l(543),w=l(184),V=l(172),T=l(14),C=l(544),y=l(88),j=l(191),S=l(16),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"page-text-fields"}},[l("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{sm12:""}},[l("v-widget",{attrs:{title:"Detail Penebusan Obat"}},[l("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[l("v-container",[l("v-layout",{attrs:{row:""}},[l("v-flex",{attrs:{xs3:""}},[l("v-subheader",[t._v("Data Pasien")]),t._v(" "),l("v-layout",{attrs:{row:""}},[l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{name:"input-3",label:"No. Keram Medis",value:"RM-21091108-157",disabled:""}})],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{name:"input-3",label:"Tanggal Periksa",value:"2021-09-11",disabled:""}})],1)],1),t._v(" "),l("v-layout",{attrs:{row:""}},[l("v-flex",{attrs:{xs12:""}},[l("v-layout",{attrs:{row:""}},[l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{name:"input-3",label:"Nama Pasien",value:"Santiago",disabled:""}})],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{name:"input-3",label:"Nama Dokter",value:"Maejuki",disabled:""}})],1)],1)],1),t._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{name:"input-5",label:"Alamat",value:"Jalan Banyar No. 78 Desa Kupu Kec. Dukuh Turi Kab. Tegal","multi-line":"",disabled:""}})],1)],1)],1),t._v(" "),l("v-flex",{attrs:{xs9:""}},[l("v-card",[l("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[l("v-toolbar-title",[l("h4",[t._v("Data Obat")])]),t._v(" "),l("v-spacer"),t._v(" "),l("v-chip",{attrs:{color:"green","text-color":"white"}},[t._v("Tebus Semua")])],1),t._v(" "),l("v-divider"),t._v(" "),l("v-card-text",{staticClass:"pa-0"},[[l("v-data-table",{staticClass:"elevation-0 table-striped",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[l("td",[t._v(t._s(e.item.obat))]),t._v(" "),l("td",{staticClass:"text-xs-left"},[t._v("\n                              "+t._s(e.item.aturan_minum)+"\n                            ")]),t._v(" "),l("td",{staticClass:"text-xs-left"},[t._v("\n                              "+t._s(e.item.dosis)+"\n                            ")]),t._v(" "),l("td",{staticClass:"text-xs-left"},[l("v-text-field",{attrs:{type:"number",disabled:""},model:{value:e.item.jumlah,callback:function(l){t.$set(e.item,"jumlah",t._n(l))},expression:"props.item.jumlah"}})],1),t._v(" "),l("td",{staticClass:"text-xs-left"},[l("v-chip",{attrs:{label:"",small:"",color:t.getColorByStatus(e.item.status),"text-color":"white"}},[t._v(t._s(e.item.status))])],1),t._v(" "),l("td",{staticClass:"text-xs-left"},[t._v("\n                              "+t._s(e.item.catatan)+"\n                            ")])]}}])})],t._v(" "),l("v-divider")],2)],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:m.a,VCardText:x.b,VChip:_.a,VContainer:f.a,VDataTable:h.a,VDivider:k.a,VFlex:w.a,VLayout:V.a,VSpacer:T.a,VSubheader:C.a,VTextField:y.a,VToolbar:j.a,VToolbarTitle:S.b})},555:function(t,e,l){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},r=l(10),d=l(13),o=l.n(d),v=l(189),c=l(119),m=l(543),x=l(14),_=l(191),f=l(16),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"v-widget"}},[l("v-card",[t.enableHeader?l("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[l("v-toolbar-title",[l("h4",[t._v(t._s(t.title))])]),t._v(" "),l("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?l("v-divider"):t._e(),t._v(" "),l("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;o()(component,{VCard:v.a,VCardText:c.b,VDivider:m.a,VSpacer:x.a,VToolbar:_.a,VToolbarTitle:f.b})},600:function(t,e,l){"use strict";e.a=[{id:"150",obat:"Obat kepala pusing",aturan_minum:"3 x 1",dosis:"1",jumlah:"9",status:"Tebus",catatan:"diminum sesudah makan , berhenti minum jika sudah tidak sakit kepala"},{id:"151",obat:"Obat penurun panas",aturan_minum:"3 x 1",dosis:"1",jumlah:"9",status:"Tebus",catatan:"diminum sesudah makan , berhenti minum jika sudah tidak sakit kepala"},{id:"300",obat:"Vitamin",aturan_minum:"2 x 1",dosis:"1",jumlah:"6",status:"Tebus",catatan:"diminum sesudah makan , habiskan"}]}}]);