(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1092:function(t,e,n){"use strict";n.r(e);var r=n(557),l=(n(61),n(20),[{nama_ruangan:"Paviliun",tipe:"BPJS",fasilitas:"4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi"},{nama_ruangan:"Anggrek",tipe:"VIP",fasilitas:"4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi"},{nama_ruangan:"Kamboja",tipe:"VVIP",fasilitas:"4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi"},{nama_ruangan:"Mawar",tipe:"Umum",fasilitas:"4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi"},{nama_ruangan:"Melati",tipe:"Umum",fasilitas:"4 Tempat Tidur, 4 Kipas Angin, 4 Meja, 8 Kursi"}]),o={layout:"administrator/dashboard",components:{MiniStatistic:r.a},data:function(){return{search:"",complex:{selected:[],headers:[{text:"No. ",value:"no"},{text:"Nama",value:"nama_ruangan"},{text:"Tipe Ruangan",value:"tipe"},{text:"Fasilitas",value:"fasilitas"},{text:"Action",value:""}],items:l}}}},c=n(10),d=n(13),v=n.n(d),m=n(170),_=n(189),x=n(171),f=n(1095),h=n(543),T=n(184),C=n(190),V=n(172),w=n(88),k=n(191),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-statistic"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("Data Ruangan")])]),t._v(" "),n("v-flex",{attrs:{sm12:""}},[n("v-btn",{staticClass:"primary",attrs:{"nuxt-link":"",to:"data/tambah"}},[t._v(" Tambah Data")])],1),t._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-toolbar",{attrs:{card:"",color:"white"}},[n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"",solo:"","prepend-icon":"search",placeholder:"Tuliskan Nama Ruangan","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card",{staticClass:"pa-0"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.complex.headers,search:t.search,items:t.complex.items,"rows-per-page-items":[5,10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.index+1))]),t._v(" "),n("td",[t._v(t._s(e.item.nama_ruangan))]),t._v(" "),n("td",[t._v(t._s(e.item.tipe))]),t._v(" "),n("td",[t._v(t._s(e.item.fasilitas))]),t._v(" "),n("td",[n("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"","nuxt-link":"",to:"data/edit",color:"warning",small:""}},[n("v-icon",[t._v("edit")])],1),t._v(" "),n("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"",color:"pink",small:""}},[n("v-icon",[t._v("delete")])],1)],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"20ad3433",null);e.default=component.exports;v()(component,{VBtn:m.a,VCard:_.a,VContainer:x.a,VDataTable:f.a,VDivider:h.a,VFlex:T.a,VIcon:C.a,VLayout:V.a,VTextField:w.a,VToolbar:k.a})},557:function(t,e,n){"use strict";var r={props:{icon:String,title:String,subTitle:String,color:String}},l=n(10),o=n(13),c=n.n(o),d=n(189),v=n(119),m=n(171),_=n(190),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",{staticClass:"pa-0"},[n("v-container",{staticClass:"pa-0"},[n("div",{staticClass:"layout row ma-0"},[n("div",{staticClass:"sm6 xs6 flex"},[n("div",{staticClass:"layout column ma-0 justify-center align-center"},[n("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),t._v(" "),n("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 white--text",class:t.color},[n("div",{staticClass:"headline"},[t._v(t._s(t.title))]),t._v(" "),n("span",{staticClass:"caption"},[t._v(t._s(t.subTitle))])])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VContainer:m.a,VIcon:_.a})}}]);