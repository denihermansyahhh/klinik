(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1219:function(t,e,l){"use strict";l.r(e);var r=l(557),n=l(70),o={layout:"kasir/dashboard",components:{MiniStatistic:r.a},data:function(){return{search:"",complex:{selected:[],headers:[{text:"Waktu",value:"waktu"},{text:"No. Rekam Medis",value:"no_rekam_medis"},{text:"Nama",value:"name"},{text:"Alamat",value:"alamat"}],items:n.a}}}},c=l(10),d=l(13),v=l.n(d),m=l(189),_=l(119),x=l(171),f=l(1095),h=l(543),C=l(184),k=l(172),w=l(88),V=l(191),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"page-statistic"}},[l("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[l("mini-statistic",{attrs:{icon:"people_alt",title:"2","sub-title":"Pasien Menunggu Pembayaran",color:"red darken-2"}})],1),t._v(" "),l("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[l("mini-statistic",{attrs:{icon:"people_alt",title:"2","sub-title":"Pasien Menunggu Konfirmasi Obat",color:"yellow darken-2"}})],1),t._v(" "),l("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[l("mini-statistic",{attrs:{icon:"people_alt",title:"7","sub-title":"Pasien Dalam Antrian Pemeriksaan",color:"blue darken-1"}})],1),t._v(" "),l("v-flex",{attrs:{sm12:""}},[l("h3",[t._v("Antrian Pembayaran Hari Ini")])]),t._v(" "),l("v-flex",{attrs:{lg12:""}},[l("v-card",[l("v-toolbar",{attrs:{card:"",color:"white"}},[l("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"",solo:"","prepend-icon":"search",placeholder:"Tuliskan Nama Pasien","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),l("v-divider"),t._v(" "),l("v-card-text",{staticClass:"pa-0"},[l("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.complex.headers,search:t.search,items:t.complex.items,"rows-per-page-items":[5,10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:t._u([{key:"items",fn:function(e){return[l("td",[t._v(t._s(e.index))]),t._v(" "),l("td",[t._v(t._s(e.item.name))]),t._v(" "),l("td",[t._v(t._s(e.item.email))]),t._v(" "),l("td",[t._v(t._s(e.item.phone))])]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,"525b2a2e",null);e.default=component.exports;v()(component,{VCard:m.a,VCardText:_.b,VContainer:x.a,VDataTable:f.a,VDivider:h.a,VFlex:C.a,VLayout:k.a,VTextField:w.a,VToolbar:V.a})},557:function(t,e,l){"use strict";var r={props:{icon:String,title:String,subTitle:String,color:String}},n=l(10),o=l(13),c=l.n(o),d=l(189),v=l(119),m=l(171),_=l(190),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",[l("v-card-text",{staticClass:"pa-0"},[l("v-container",{staticClass:"pa-0"},[l("div",{staticClass:"layout row ma-0"},[l("div",{staticClass:"sm6 xs6 flex"},[l("div",{staticClass:"layout column ma-0 justify-center align-center"},[l("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),t._v(" "),l("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 white--text",class:t.color},[l("div",{staticClass:"headline"},[t._v(t._s(t.title))]),t._v(" "),l("span",{staticClass:"caption"},[t._v(t._s(t.subTitle))])])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VContainer:m.a,VIcon:_.a})}}]);