(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1053:function(t,n,o){"use strict";o(837)},1054:function(t,n,o){var r=o(11)(!1);r.push([t.i,".custom-loader{-webkit-animation:loader 1s infinite;animation:loader 1s infinite;display:flex}@-webkit-keyframes loader{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes loader{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""]),t.exports=r},1249:function(t,n,o){"use strict";o.r(n);var r={components:{VWidget:o(555).a},data:function(){return{text:"center",icon:"justify",toggle_none:null,toggle_one:0,toggle_exclusive:2,toggle_multiple:[0,1,2],loader:null,loading:!1,loading2:!1,loading3:!1,loading4:!1}},computed:{},watch:{loader:function(){var t=this,n=this.loader;this[n]=!this[n],setTimeout((function(){t[n]=!1}),3e3),this.loader=null}},methods:{}},e=(o(1053),o(10)),l=o(13),v=o.n(l),c=o(170),_=o(549),d=o(171),f=o(184),m=o(190),x=o(172),component=Object(e.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"page-buttons"}},[o("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xl6:""}},[o("v-widget",{attrs:{title:"Basic Usage"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",[o("v-btn",{attrs:{color:"success"}},[t._v("Success")]),t._v(" "),o("v-btn",{attrs:{color:"error"}},[t._v("Error")]),t._v(" "),o("v-btn",{attrs:{color:"warning"}},[t._v("Warning")]),t._v(" "),o("v-btn",{attrs:{color:"info"}},[t._v("Info")])],1)])]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Flat button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",[o("v-btn",{attrs:{color:"success",flat:""}},[t._v("Success")]),t._v(" "),o("v-btn",{attrs:{color:"error",flat:""}},[t._v("Error")]),t._v(" "),o("v-btn",{attrs:{color:"warning",flat:""}},[t._v("Warning")]),t._v(" "),o("v-btn",{attrs:{color:"info",flat:""}},[t._v("Info")])],1)])]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Depressed button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",[o("v-btn",{attrs:{color:"success",depressed:""}},[t._v("Success")]),t._v(" "),o("v-btn",{attrs:{color:"error",depressed:""}},[t._v("Error")]),t._v(" "),o("v-btn",{attrs:{color:"warning",depressed:""}},[t._v("Warning")]),t._v(" "),o("v-btn",{attrs:{color:"info",depressed:""}},[t._v("Info")])],1)])]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Outline button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",[o("v-btn",{attrs:{color:"success",outline:""}},[t._v("Success")]),t._v(" "),o("v-btn",{attrs:{color:"error",outline:""}},[t._v("Error")]),t._v(" "),o("v-btn",{attrs:{color:"warning",outline:""}},[t._v("Warning")]),t._v(" "),o("v-btn",{attrs:{color:"info",outline:""}},[t._v("Info")])],1)])]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Rounded button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",[o("v-btn",{attrs:{color:"success",round:""}},[t._v("Success")]),t._v(" "),o("v-btn",{attrs:{color:"error",round:""}},[t._v("Error")]),t._v(" "),o("v-btn",{attrs:{color:"warning",round:""}},[t._v("Warning")]),t._v(" "),o("v-btn",{attrs:{color:"info",round:""}},[t._v("Info")])],1)])]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Floating button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",[o("v-btn",{attrs:{color:"success",dark:"",fab:""}},[o("v-icon",{attrs:{dark:""}},[t._v("remove")])],1),t._v(" "),o("v-btn",{attrs:{color:"pink",dark:"",fab:""}},[o("v-icon",{attrs:{dark:""}},[t._v("favorite")])],1),t._v(" "),o("v-btn",{attrs:{color:"red",dark:"",fab:""}},[o("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1)])]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Loading button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",[o("v-btn",{attrs:{color:"secondary",loading:t.loading,disabled:t.loading},nativeOn:{click:function(n){t.loader="loading"}}},[t._v("\n                Accept Terms\n              ")]),t._v(" "),o("v-btn",{staticClass:"white--text",attrs:{loading:t.loading3,disabled:t.loading3,color:"blue-grey"},nativeOn:{click:function(n){t.loader="loading3"}}},[t._v("\n                Upload\n                "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("cloud_upload")])],1),t._v(" "),o("v-btn",{attrs:{color:"success",loading:t.loading2,disabled:t.loading2},nativeOn:{click:function(n){t.loader="loading2"}}},[t._v("\n                Custom Loader\n                "),o("span",{attrs:{slot:"loader"},slot:"loader"},[t._v("Loading...")])]),t._v(" "),o("v-btn",{attrs:{color:"info",loading:t.loading4,disabled:t.loading4},nativeOn:{click:function(n){t.loader="loading4"}}},[t._v("\n                Icon Loader\n                "),o("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[o("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)])])],1),t._v(" "),o("v-flex",{attrs:{xl6:""}},[o("v-widget",{attrs:{title:"Icon button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("p",[t._v("Normal")])]),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:""}},[o("v-btn",{attrs:{flat:"",icon:"",color:"pink"}},[o("v-icon",[t._v("favorite")])],1)],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:""}},[o("v-btn",{attrs:{flat:"",icon:"",color:"indigo"}},[o("v-icon",[t._v("star")])],1)],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:""}},[o("v-btn",{attrs:{flat:"",icon:"",color:"green"}},[o("v-icon",[t._v("cached")])],1)],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:""}},[o("v-btn",{attrs:{flat:"",icon:"",color:"deep-orange"}},[o("v-icon",[t._v("thumb_up")])],1)],1)],1),t._v(" "),o("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("p",[t._v("Disabled")])]),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:""}},[o("v-btn",{attrs:{icon:"",disabled:""}},[o("v-icon",[t._v("favorite")])],1)],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:""}},[o("v-btn",{attrs:{icon:"",disabled:""}},[o("v-icon",[t._v("star")])],1)],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:""}},[o("v-btn",{attrs:{icon:"",disabled:""}},[o("v-icon",[t._v("cached")])],1)],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:""}},[o("v-btn",{attrs:{icon:"",disabled:""}},[o("v-icon",[t._v("thumb_up")])],1)],1)],1)],1)],1)]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Sizing button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[o("v-flex",{attrs:{xs12:"",sm6:""}},[o("div",{staticClass:"text-xs-center"},[o("div",[o("v-btn",{attrs:{small:"",color:"primary",dark:""}},[t._v("Small Button")])],1),t._v(" "),o("div",[o("v-btn",{attrs:{color:"warning",dark:""}},[t._v("Normal Button")])],1),t._v(" "),o("div",[o("v-btn",{attrs:{color:"error",dark:"",large:""}},[t._v("Large Button")])],1)])]),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:""}},[o("div",{staticClass:"text-xs-center"},[o("div",[o("v-btn",{attrs:{color:"primary",fab:"",small:"",dark:""}},[o("v-icon",[t._v("edit")])],1)],1),t._v(" "),o("div",[o("v-btn",{attrs:{color:"warning",fab:"",dark:""}},[o("v-icon",[t._v("account_circle")])],1)],1),t._v(" "),o("div",[o("v-btn",{attrs:{color:"error",fab:"",large:"",dark:""}},[o("v-icon",[t._v("alarm")])],1)],1)])])],1)],1)],1)]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Block button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",[o("v-btn",{attrs:{color:"success",block:""}},[t._v("Success")]),t._v(" "),o("v-btn",{attrs:{color:"error",block:""}},[t._v("Error")]),t._v(" "),o("v-btn",{attrs:{color:"warning",block:""}},[t._v("Warning")]),t._v(" "),o("v-btn",{attrs:{color:"info",block:""}},[t._v("Info")])],1)])])],1),t._v(" "),o("v-flex",{attrs:{xl12:""}},[o("v-widget",{attrs:{title:"Toggle button"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{staticClass:"py-2",attrs:{xs12:"",sm6:""}},[o("p",[t._v("Exclusive")]),t._v(" "),o("v-btn-toggle",{model:{value:t.toggle_exclusive,callback:function(n){t.toggle_exclusive=n},expression:"toggle_exclusive"}},[o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_left")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_center")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_right")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_justify")])],1)],1)],1),t._v(" "),o("v-flex",{staticClass:"py-2",attrs:{xs12:"",sm6:""}},[o("p",[t._v("Multiple")]),t._v(" "),o("v-btn-toggle",{attrs:{multiple:""},model:{value:t.toggle_multiple,callback:function(n){t.toggle_multiple=n},expression:"toggle_multiple"}},[o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_bold")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_italic")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_underlined")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_color_fill")])],1)],1)],1),t._v(" "),o("v-flex",{staticClass:"py-2",attrs:{xs12:"",sm6:""}},[o("p",[t._v("No Options Selected")]),t._v(" "),o("v-btn-toggle",{model:{value:t.toggle_none,callback:function(n){t.toggle_none=n},expression:"toggle_none"}},[o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_left")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_center")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_right")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_justify")])],1)],1)],1),t._v(" "),o("v-flex",{staticClass:"py-2",attrs:{xs12:"",sm6:""}},[o("p",[t._v("Mandatory")]),t._v(" "),o("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.toggle_one,callback:function(n){t.toggle_one=n},expression:"toggle_one"}},[o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_left")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_center")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_right")])],1),t._v(" "),o("v-btn",{attrs:{flat:""}},[o("v-icon",[t._v("format_align_justify")])],1)],1)],1),t._v(" "),o("v-flex",{staticClass:"py-2",attrs:{xs12:"",sm6:""}},[o("p",[t._v("Text Options")]),t._v(" "),o("v-btn-toggle",{model:{value:t.text,callback:function(n){t.text=n},expression:"text"}},[o("v-btn",{attrs:{flat:"",value:"left"}},[t._v("\n                      Left\n                    ")]),t._v(" "),o("v-btn",{attrs:{flat:"",value:"center"}},[t._v("\n                      Center\n                    ")]),t._v(" "),o("v-btn",{attrs:{flat:"",value:"right"}},[t._v("\n                      Right\n                    ")]),t._v(" "),o("v-btn",{attrs:{flat:"",value:"justify"}},[t._v("\n                      Justify\n                    ")])],1)],1),t._v(" "),o("v-flex",{staticClass:"py-2",attrs:{xs12:"",sm6:""}},[o("p",[t._v("Text & Icon Options")]),t._v(" "),o("v-btn-toggle",{model:{value:t.icon,callback:function(n){t.icon=n},expression:"icon"}},[o("v-btn",{attrs:{flat:"",value:"left"}},[o("span",[t._v("Left")]),t._v(" "),o("v-icon",[t._v("format_align_left")])],1),t._v(" "),o("v-btn",{attrs:{flat:"",value:"center"}},[o("span",[t._v("Center")]),t._v(" "),o("v-icon",[t._v("format_align_center")])],1),t._v(" "),o("v-btn",{attrs:{flat:"",value:"right"}},[o("span",[t._v("Right")]),t._v(" "),o("v-icon",[t._v("format_align_right")])],1),t._v(" "),o("v-btn",{attrs:{flat:"",value:"justify"}},[o("span",[t._v("Justify")]),t._v(" "),o("v-icon",[t._v("format_align_justify")])],1)],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:c.a,VBtnToggle:_.a,VContainer:d.a,VFlex:f.a,VIcon:m.a,VLayout:x.a})},555:function(t,n,o){"use strict";var r={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},e=o(10),l=o(13),v=o.n(l),c=o(189),_=o(119),d=o(543),f=o(14),m=o(191),x=o(16),component=Object(e.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"v-widget"}},[o("v-card",[t.enableHeader?o("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[o("v-toolbar-title",[o("h4",[t._v(t._s(t.title))])]),t._v(" "),o("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?o("v-divider"):t._e(),t._v(" "),o("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);n.a=component.exports;v()(component,{VCard:c.a,VCardText:_.b,VDivider:d.a,VSpacer:f.a,VToolbar:m.a,VToolbarTitle:x.b})},837:function(t,n,o){var content=o(1054);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("d3659252",content,!0,{sourceMap:!1})}}]);