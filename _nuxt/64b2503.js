(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{1234:function(e,t,n){"use strict";n.r(t);var r=n(703),l={layout:"pendaftaran/dashboard",data:function(){return{search:"",complex:{headers:[{text:"No"},{text:"Name",value:"name"},{text:"NIK",value:"nik"},{text:"Tanggal Periksa",value:"tgl_periksa"},{text:"Jadwal",value:"jadwal"},{text:"Action",value:""}],items:r.a}}}},m=n(10),o=n(13),d=n.n(o),c=n(170),k=n(189),v=n(119),h=n(171),_=n(1095),f=n(543),y=n(184),x=n(190),U=n(172),w=n(88),V=n(191),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"pageTable"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[e._v("Daftar Pemeriksaan")])]),e._v(" "),n("v-flex",{attrs:{sm12:""}},[n("a",{attrs:{href:"/pendaftaran/daftar_pemeriksaan/tambah"}},[n("v-btn",{staticClass:"primary"},[e._v(" Tambah Data")])],1)]),e._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("v-toolbar",{attrs:{card:"",color:"white"}},[n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"",solo:"","prepend-icon":"search",placeholder:"Ketik Nama Pasien","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("filter_list")])],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pa-0"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.complex.headers,search:e.search,items:e.complex.items,"rows-per-page-items":[10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.index))]),e._v(" "),n("td",[e._v(e._s(t.item.name))]),e._v(" "),n("td",[e._v(e._s(t.item.nik))]),e._v(" "),n("td",[e._v(e._s(t.item.tgl_periksa))]),e._v(" "),n("td",[e._v(e._s(t.item.jadwal_dokter))]),e._v(" "),n("td",[n("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"",color:"warning",small:""}},[n("v-icon",[e._v("edit")])],1),e._v(" "),n("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"",color:"pink",small:""}},[n("v-icon",[e._v("delete")])],1)],1)]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:c.a,VCard:k.a,VCardText:v.b,VContainer:h.a,VDataTable:_.a,VDivider:f.a,VFlex:y.a,VIcon:x.a,VLayout:U.a,VTextField:w.a,VToolbar:V.a})},703:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(61),n(20);var r=[{uuid:"65a6eb21-67b5-45c3-9af7-faca2d9b60d4",name:"Dessie",jenis_kelamin:"Perempuan",kategori:"Umum",tmpt_lahir:"Mayer Greens",nik:"934672358238",tgl_periksa:"20-02-2021",dokter:"dr. Bella Koffa",phone:"08129380511",usia:"20",poli:"Umum",antrian:"001",alamat:"street 431 Grimes Common suite Apt. 530 city East Lunahaven state Virginia country Hungary"},{uuid:"46d6f992-5729-4588-b7f8-ce74f21157ba",name:"Olin",jenis_kelamin:"Perempuan",kategori:"Umum",tmpt_lahir:"Mayer Greens",phone:"08223417756",usia:"20",poli:"Umum",nik:"934672358238",alamat:"street 0813 Mayer Greens suite Apt. 551 city Bergstromburgh",antrian:"002"},{uuid:"bd30e201-cceb-410e-8497-a4072bc399f5",name:"Rollin",jenis_kelamin:"Lak-Laki",kategori:"Umum",tmpt_lahir:"Mayer Greens",phone:"08655715502",usia:"35",poli:"Umum",nik:"934672358238",alamat:"street 0813 Mayer Greens suite Apt. 551 city Bergstromburgh",antrian:"003"},{uuid:"da95e977-cd54-4077-a767-1b7f33ef6919",name:"Murl",kategori:"Umum",tmpt_lahir:"Bauchside",phone:"08732190615",usia:"29",poli:"Umum",jenis_kelamin:"Laki-laki",nik:"934672358238",alamat:"Tanner Circles suite Apt. 994 city Bauchside state Ohio country Uganda",antrian:"004"},{uuid:"6124d4e8-77ed-4b34-868d-d312bfab5de2",name:"Breanna",kategori:"BPJS",tmpt_lahir:"Virginia",phone:"645.045.0876 x35882",usia:"18",poli:"Umum",jenis_kelamin:"Perempuan",nik:"934672358238",alamat:"street 431 Grimes Common suite Apt. 530 city East Lunahaven state Virginia country Hungary",antrian:"005"},{uuid:"eef93cb1-7766-4413-a5cf-ecbf71fa3674",name:"Maya",kategori:"BPJS",tmpt_lahir:"Cloydville",phone:"08537702815",usia:"26",poli:"Umum",jenis_kelamin:"Perempuan",nik:"934672358238",alamat:"street Guillermo Springs suite Suite 574 city Cloydville country Saint Barthelemy",antrian:"006"},{uuid:"899d0e31-b71e-4d95-a8a0-6a8bceb314bd",name:"Santiago",kategori:"Umum",tmpt_lahir:"Alabama",phone:"08921598655",usia:"20",poli:"Umum",jenis_kelamin:"Laki-laki",nik:"934672358238",alamat:"street 7868 Windler Dam suite Suite 876 city state Alabama country Belarus",antrian:"006"},{uuid:"a41c6c4a-9cb1-45d1-8c6f-091044ba51ff",name:"Leonardo",kategori:"Umum",tmpt_lahir:"North Toyfor",phone:"08757611519",usia:"42",poli:"Umum",jenis_kelamin:"Laki-laki",nik:"934672358238",alamat:"street 146 Lemke Mountains suite Apt. 407 city North Toyfor country Senegal",antrian:"007"},{uuid:"3782c174-1f2c-4dc4-b75d-0bedf400e023",name:"Lora",kategori:"BPJS",tmpt_lahir:"Leuschkemouth",phone:"08285269280",usia:"20",poli:"Umum",jenis_kelamin:"Perempuan",nik:"934672358238",alamat:"street 4018 Willms Turnpike Suite 573 city Leuschkemouth country Dominican Republic",antrian:"008"}]}}]);