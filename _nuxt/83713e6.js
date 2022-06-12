/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1041:function(t,e,r){"use strict";r(831)},1042:function(t,e,r){var n=r(11)(!1);n.push([t.i,".media-cotent--wrap[data-v-e67f6996],.media-menu[data-v-e67f6996]{min-width:260px;border-right:1px solid #eee;min-height:calc(100vh - 114px)}.media-detail[data-v-e67f6996]{min-width:300px;border-left:1px solid #eee}",""]),t.exports=n},1206:function(t,e,r){"use strict";r.r(e);r(68),r(54);var n=r(686),l=r.n(n),o=r(155),c=r(35),v={layout:"dashboard",components:{VuePerfectScrollbar:r.n(c).a},props:{type:{type:String,default:"image"}},data:function(){return{size:"lg",view:"grid",selectedFile:{path:"/static/icon/empty_file.svg"},imageMime:["image/jpeg","image/png","image/svg+xml"],folders:[{name:"bg",lastModified:"2018-03-03"},{name:"cards",lastModified:"2018-03-03"},{name:"avatar",lastModified:"2018-03-03"}]}},computed:{mediaMenu:function(){return o.b},files:function(){return Object(o.a)()}},methods:{isImage:function(t){return this.imageMime.includes(t.fileType)},mimeIcons:function(t){return this.imageMime.includes(t.fileType)?"image":"insert_drive_file"},showDetail:function(t){this.selectedFile=t},fileSize:function(t){return l.a.format(t)},formateDate:function(t){return t?new Date(t).toLocaleDateString():""},computeFileImage:function(t){return this.isImage(t)?t.path:"/static/icon/file_empty.svg"}}},d=(r(1041),r(10)),f=r(13),m=r.n(f),_=r(170),h=r(549),w=r(189),x=r(180),y=r(182),C=r(171),V=r(543),M=r(184),k=r(190),B=r(172),D=r(173),L=r(175),T=r(177),F=r(9),I=r(14),S=r(191),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"media",attrs:{id:"media"}},[r("v-toolbar",{staticClass:"elevation-0 transparent media-toolbar"},[r("v-btn-toggle",[r("v-btn",{attrs:{flat:""}},[r("v-icon",{attrs:{color:"primary"}},[t._v("cloud_upload")]),t._v("\n         Upload\n      ")],1),t._v(" "),r("v-btn",{attrs:{flat:""}},[r("v-icon",{attrs:{color:"primary"}},[t._v("folder")]),t._v("\n          Add Folder\n      ")],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn-toggle",{model:{value:t.view,callback:function(e){t.view=e},expression:"view"}},[r("v-btn",{attrs:{flat:"",value:"list"}},[r("v-icon",{attrs:{color:"primary"}},[t._v("view_headline")])],1),t._v(" "),r("v-btn",{attrs:{flat:"",value:"grid"}},[r("v-icon",{attrs:{color:"primary"}},[t._v("view_list")])],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("div",{staticClass:"layout row media-layout"},[r("div",{staticClass:"media-content flex transparent"},[r("vue-perfect-scrollbar",{staticClass:"media-content--warp"},["grid"===t.view?r("v-container",{attrs:{fluid:""}},[r("v-layout",{staticClass:"x-grid-lg",attrs:{row:"",wrap:""}},[t._l(t.folders,(function(e,n){return r("v-flex",{key:"folder"+n,staticClass:"pa-2",attrs:{lg4:"",sm12:"",xs12:""}},[r("v-card",{attrs:{flat:"",tile:""}},[r("v-card-media",{attrs:{height:"150px"}},[r("v-icon",{staticClass:"mx-auto",attrs:{size:"135",color:"indigo"}},[t._v("folder")])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-title",[t._v("\n                  "+t._s(e.name)+"\n                ")])],1)],1)})),t._v(" "),t._l(t.files,(function(e,n){return r("v-flex",{key:n,staticClass:"pa-2",attrs:{lg4:"",sm12:"",xs12:""}},[r("a",{staticClass:"d-flex",on:{click:function(r){return t.showDetail(e)}}},[r("v-card",{attrs:{flat:"",tile:""}},[t.isImage(e)?r("img",{staticStyle:{height:"150px",width:"100%"},attrs:{src:e.path,alt:""}}):r("v-icon",{staticClass:"mx-auto",attrs:{size:"135"}},[t._v("insert_drive_file")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-title",[t._v("\n                    "+t._s(e.fileName)+"\n                  ")])],1)],1)])}))],2)],1):r("v-layout",{attrs:{column:""}},[r("v-list",{staticClass:"transparent",attrs:{dense:""}},t._l(t.files,(function(e,n){return r("v-list-tile",{key:"list-file-"+n,attrs:{avatar:""},on:{click:function(r){return t.showDetail(e)}}},[r("v-list-tile-avatar",[r("v-icon",[t._v(t._s(t.mimeIcons(e)))])],1),t._v(" "),r("v-list-tile-content",[r("div",{staticClass:"container pl-0"},[r("div",{staticClass:"layout row"},[r("div",{staticClass:"flex"},[t._v(" "+t._s(e.fileName))]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"caption"},[t._v(t._s(e?t.formateDate(e.ctime):""))])],1)])])],1)})),1)],1)],1)],1)])],1)}),[],!1,null,"e67f6996",null);e.default=component.exports;m()(component,{VBtn:_.a,VBtnToggle:h.a,VCard:w.a,VCardMedia:x.a,VCardTitle:y.a,VContainer:C.a,VDivider:V.a,VFlex:M.a,VIcon:k.a,VLayout:B.a,VList:D.a,VListTile:L.a,VListTileAvatar:T.a,VListTileContent:F.b,VSpacer:I.a,VToolbar:S.a})},686:function(t,e,r){"use strict";t.exports=function(t,e){if("string"==typeof t)return v(t);if("number"==typeof t)return c(t,e);return null},t.exports.format=c,t.exports.parse=v;var n=/\B(?=(\d{3})+(?!\d))/g,l=/(?:\.0*|(\.[^0]+)0+)$/,map={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:1024*(1<<30)},o=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;function c(t,e){if(!Number.isFinite(t))return null;var r=Math.abs(t),o=e&&e.thousandsSeparator||"",c=e&&e.unitSeparator||"",v=e&&void 0!==e.decimalPlaces?e.decimalPlaces:2,d=Boolean(e&&e.fixedDecimals),f=e&&e.unit||"";f&&map[f.toLowerCase()]||(f=r>=map.tb?"TB":r>=map.gb?"GB":r>=map.mb?"MB":r>=map.kb?"KB":"B");var m=(t/map[f.toLowerCase()]).toFixed(v);return d||(m=m.replace(l,"$1")),o&&(m=m.replace(n,o)),m+c+f}function v(t){if("number"==typeof t&&!isNaN(t))return t;if("string"!=typeof t)return null;var e,r=o.exec(t),n="b";return r?(e=parseFloat(r[1]),n=r[4].toLowerCase()):(e=parseInt(t,10),n="b"),Math.floor(map[n]*e)}},831:function(t,e,r){var content=r(1042);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("6505baf0",content,!0,{sourceMap:!1})}}]);