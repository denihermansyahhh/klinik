(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1309:function(t,e,r){"use strict";r.r(e);var l=r(555),n=r(605),v={layout:"kasir/dashboard",components:{VWidget:l.a},data:function(){return{headers:[{text:"Layanan",value:"layanan",align:"center",sortable:!1},{text:"Keterangan",value:"keterangan",align:"center",sortable:!1}],items:n.default,colors:{processing:"blue",sent:"red",delivered:"green"}}},computed:{},methods:{getColorByStatus:function(t){return this.colors[t]}}},o=r(10),d=r(13),x=r.n(d),c=r(189),_=r(119),m=r(545),f=r(171),k=r(543),y=r(184),w=r(172),h=r(544),C=r(88),T=r(191),V=r(16),component=Object(o.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-text-fields"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("v-widget",{attrs:{title:"Detail Tagihan Pembayaran"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs3:""}},[r("v-subheader",[t._v("Data Pasien")]),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-3",label:"No. Keram Medis",value:"RM-21091108-157",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-3",label:"Tanggal Periksa",value:"2021-09-11",disabled:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-3",label:"Nama Pasien",value:"Santiago",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-3",label:"Nama Dokter",value:"Maejuki",disabled:""}})],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-5",label:"Alamat",value:"Jalan Banyar No. 78 Desa Kupu Kec. Dukuh Turi Kab. Tegal","multi-line":"",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[t._v("\n                      Status / Hasil Pemeriksaan :\n                      "),r("v-chip",{attrs:{color:"green","text-color":"white",small:""}},[t._v("Rawat Jalan")])],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs9:""}},[r("v-card",[r("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[r("v-toolbar-title",[r("h4",[t._v("Data Pelayanan")])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{},[[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Pemeriksaan\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Pemeriksaan Umum")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Biaya Admin\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Rp. 15.000")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Biaya Pemeriksaan\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Rp. 40.000")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Status Penebusan Obat\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("strong",[t._v(": ")]),t._v(" "),r("v-chip",{attrs:{color:"green","text-color":"white",small:""}},[t._v("Tebus Semua")])],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Farmasi\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v("\n                              : Obat Pusing Kepala"),r("small",{attrs:{align:"right"}},[t._v("\n                                (Rp.20.000)")])]),t._v(" "),r("div",{staticClass:"title"},[t._v("\n                              : Obat Penurun Panas"),r("small",{attrs:{align:"right"}},[t._v("\n                                (Rp.10.000)")])]),t._v(" "),r("div",{staticClass:"title"},[t._v("\n                              : Vitamin"),r("small",{attrs:{align:"right"}},[t._v("\n                                (Rp.50.000)")])])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Total Farmasi\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Rp. 80.000")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Total Pembayaran\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Rp. 135.000")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Uang Diterima\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Rp. 200.000")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Total Kembalian\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Rp. 65.000")])])],1)],t._v(" "),r("v-divider")],2)],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VCard:c.a,VCardText:_.b,VChip:m.a,VContainer:f.a,VDivider:k.a,VFlex:y.a,VLayout:w.a,VSubheader:h.a,VTextField:C.a,VToolbar:T.a,VToolbarTitle:V.b})},555:function(t,e,r){"use strict";var l={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},n=r(10),v=r(13),o=r.n(v),d=r(189),x=r(119),c=r(543),_=r(14),m=r(191),f=r(16),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[t.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?r("v-divider"):t._e(),t._v(" "),r("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;o()(component,{VCard:d.a,VCardText:x.b,VDivider:c.a,VSpacer:_.a,VToolbar:m.a,VToolbarTitle:f.b})},605:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(61),r(20);var l=[{uuid:"899d0e31-b71e-4d95-a8a0-6a8bceb314bd",no_rm:"RM-21091108-157",name:"Santiago",nik:"9834195157",phone:"1-489-921-2159 x8655",usia:"20",tanggal_periksa:"2021-09-11",dokter:"Maejuki",jenis_kelamin:"Laki-laki",alamat:"Jalan Banyar No. 78 Desa Kupu Kec. Dukuh Turi Kab. Tegal"},{uuid:"a41c6c4a-9cb1-45d1-8c6f-091044ba51ff",no_rm:"RM-21091108-158",name:"Leonardo",nik:"9834195158",phone:"445-761-1519",usia:"21",tanggal_periksa:"2021-09-11",dokter:"Jepri",jenis_kelamin:"Laki-laki",alamat:"Jalan Merpati No. 71 Kelurahan Mintaragen Kec. Tegal Timur Kota Tegal"},{uuid:"3782c174-1f2c-4dc4-b75d-0bedf400e023",no_rm:"RM-21091108-159",name:"Lora",nik:"9834195159",phone:"315-215-2852 x69280",usia:"23",tanggal_periksa:"2021-09-11",dokter:"Adi",jenis_kelamin:"Perempuan",alamat:"Jalan Kutilang No 29 Kelurahan Tegalsari Kec. Tegal Barat Kota Tegal"}]}}]);