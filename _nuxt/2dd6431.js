(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1179:function(t,e,o){"use strict";o.r(e);var n={components:{VWidget:o(555).a},data:function(){return{includeFiles:!1,enabled:!1,checkbox1:!1,checkbox2:!1,checkbox3:!1,checkbox4:!1,checkbox5:!1,radio1:!1,radio2:!1,radio3:!1,radio4:!1,radio5:!1,s1:!1,s2:!1,ex7:"red",ex8:"primary",colors:["red","indigo","orange","primary"]}},computed:{},methods:{}},r=o(10),l=o(13),c=o.n(l),d=o(613),h=o(171),v=o(184),f=o(172),m=o(598),x=o(599),_=o(544),k=o(707),w=o(88),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page-selection-controls"}},[o("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{lg6:"",sm12:""}},[o("v-widget",{attrs:{title:"Checkbox"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",{staticClass:"basic"},[o("v-subheader",{staticClass:"pa-0"},[t._v("Single")]),t._v(" "),o("v-checkbox",{attrs:{label:"Default: "+t.checkbox1.toString()},model:{value:t.checkbox1,callback:function(e){t.checkbox1=e},expression:"checkbox1"}}),t._v(" "),o("v-checkbox",{attrs:{label:"Purple : "+t.checkbox2.toString(),color:"purple"},model:{value:t.checkbox2,callback:function(e){t.checkbox2=e},expression:"checkbox2"}}),t._v(" "),o("v-checkbox",{attrs:{label:"Disabled : "+t.checkbox3.toString(),color:"success",disabled:""},model:{value:t.checkbox3,callback:function(e){t.checkbox3=e},expression:"checkbox3"}}),t._v(" "),o("v-checkbox",{attrs:{label:"Indeterminate : "+t.checkbox4.toString(),color:"success",indeterminate:""},model:{value:t.checkbox4,callback:function(e){t.checkbox4=e},expression:"checkbox4"}})],1),t._v(" "),o("div",{staticClass:"multile"},[o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-subheader",{staticClass:"pa-0"},[t._v("Multple Selected : ["+t._s(t.colors.toString())+"]")])],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[o("v-checkbox",{attrs:{label:"red",color:"red",value:"red","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}}),t._v(" "),o("v-checkbox",{attrs:{label:"red darken-3",color:"red darken-3",value:"red darken-3","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[o("v-checkbox",{attrs:{label:"indigo",color:"indigo",value:"indigo","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}}),t._v(" "),o("v-checkbox",{attrs:{label:"indigo darken-3",color:"indigo darken-3",value:"indigo darken-3","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[o("v-checkbox",{attrs:{label:"orange",color:"orange",value:"orange","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}}),t._v(" "),o("v-checkbox",{attrs:{label:"orange darken-3",color:"orange darken-3",value:"orange darken-3","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[o("v-checkbox",{attrs:{label:"primary",color:"primary",value:"primary","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}}),t._v(" "),o("v-checkbox",{attrs:{label:"secondary",color:"secondary",value:"secondary","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[o("v-checkbox",{attrs:{label:"success",color:"success",value:"success","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}}),t._v(" "),o("v-checkbox",{attrs:{label:"info",color:"info",value:"info","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm4:"",md4:""}},[o("v-checkbox",{attrs:{label:"warning",color:"warning",value:"warning","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}}),t._v(" "),o("v-checkbox",{attrs:{label:"error",color:"error",value:"error","hide-details":""},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1)],1)],1)],1),t._v(" "),o("div",{staticClass:"text-mixed  mt-3"},[o("v-subheader",{staticClass:"pa-0"},[t._v("Inline with a textfield")]),t._v(" "),o("v-layout",{staticClass:"ma-0",attrs:{"align-center":""}},[o("v-checkbox",{staticClass:"shrink mr-2",attrs:{"hide-details":""},model:{value:t.includeFiles,callback:function(e){t.includeFiles=e},expression:"includeFiles"}}),t._v(" "),o("v-text-field",{attrs:{label:"Include files"}})],1),t._v(" "),o("v-layout",{staticClass:"ma-0",attrs:{"align-center":""}},[o("v-checkbox",{staticClass:"shrink mr-2",attrs:{"hide-details":""},model:{value:t.enabled,callback:function(e){t.enabled=e},expression:"enabled"}}),t._v(" "),o("v-text-field",{attrs:{label:"I only work if you check the box",disabled:!t.enabled}})],1)],1)])])],1),t._v(" "),o("v-flex",{attrs:{lg6:"",sm12:""}},[o("v-widget",{attrs:{title:"Raidio Buttons"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",{staticClass:"basic"},[o("v-subheader",{staticClass:"pa-0"},[t._v("Default vertical")]),t._v(" "),o("v-radio-group",{attrs:{mandatory:!1},model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[o("v-radio",{attrs:{label:"Primary",color:"primary",value:"radio-1"}}),t._v(" "),o("v-radio",{attrs:{label:"Success",color:"success",value:"radio-2"}}),t._v(" "),o("v-radio",{attrs:{label:"Info",color:"info",value:"radio-3"}})],1)],1),t._v(" "),o("div",{staticClass:"basic"},[o("v-subheader",{staticClass:"pa-0"},[t._v("Horizontal")]),t._v(" "),o("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[o("v-radio",{attrs:{label:"Radio 1",value:"radio-1",color:"pink"}}),t._v(" "),o("v-radio",{attrs:{label:"Radio 2",value:"radio-2",color:"secondary"}}),t._v(" "),o("v-radio",{attrs:{label:"Radio 3",value:"radio-3",color:"teal"}})],1)],1)])]),t._v(" "),o("v-widget",{staticClass:"mt-3",attrs:{title:"Switches"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("div",{staticClass:"basic"},[o("v-subheader",{staticClass:"pa-0"},[t._v("Default value: "+t._s(t.s1))]),t._v(" "),o("v-switch",{attrs:{label:t.s1?"On":"Off"},model:{value:t.s1,callback:function(e){t.s1=e},expression:"s1"}})],1),t._v(" "),o("div",{staticClass:"basic"},[o("v-subheader",{staticClass:"pa-0"},[t._v("Custom text value: "+t._s(t.s2))]),t._v(" "),o("v-switch",{attrs:{value:"Yes",label:t.s2?"Yes":"No",color:"success"},model:{value:t.s2,callback:function(e){t.s2=e},expression:"s2"}})],1)])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCheckbox:d.a,VContainer:h.a,VFlex:v.a,VLayout:f.a,VRadio:m.a,VRadioGroup:x.a,VSubheader:_.a,VSwitch:k.a,VTextField:w.a})},555:function(t,e,o){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},r=o(10),l=o(13),c=o.n(l),d=o(189),h=o(119),v=o(543),f=o(14),m=o(191),x=o(16),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"v-widget"}},[o("v-card",[t.enableHeader?o("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[o("v-toolbar-title",[o("h4",[t._v(t._s(t.title))])]),t._v(" "),o("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?o("v-divider"):t._e(),t._v(" "),o("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:h.b,VDivider:v.a,VSpacer:f.a,VToolbar:m.a,VToolbarTitle:x.b})},567:function(t,e,o){var content=o(580);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("3c22fb13",content,!0,{sourceMap:!1})},568:function(t,e,o){"use strict";o(21),o(48),o(49),o(2);var n=o(90),r=o(570),l=o(569);e.a=n.a.extend({name:"selectable",mixins:[r.a,l.a],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(t){return{lazyValue:t.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(o){return t.valueComparator(o,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t}},methods:{genLabel:function(){if(!this.hasLabel)return null;var label=n.a.options.methods.genLabel.call(this);return label.data.on={click:this.onChange},label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var o=input.length;(input=input.filter((function(o){return!t.valueComparator(o,e)}))).length===o&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},569:function(t,e,o){"use strict";var n=o(4),r=o(6);e.a=n.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.i}}})},570:function(t,e,o){"use strict";var n=o(91),r=o(4);e.a=r.default.extend({name:"rippleable",directives:{Ripple:n.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),data.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",data)):null},onChange:function(){}}})},574:function(t,e,o){var content=o(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("605ac091",content,!0,{sourceMap:!1})},575:function(t,e,o){var n=o(11)(!1);n.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;margin-right:16px;outline:none}.v-radio--is-disabled{pointer-events:none}",""]),t.exports=n},576:function(t,e,o){var content=o(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("701cd39e",content,!0,{sourceMap:!1})},577:function(t,e,o){var n=o(11)(!1);n.push([t.i,".v-input--radio-group__input{display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=n},580:function(t,e,o){var n=o(11)(!1);n.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.application--is-rtl .v-input--selection-controls .v-input--selection-controls__input{margin-right:0;margin-left:8px}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls .v-input__append-outer,.v-input--selection-controls .v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls .v-input__control{flex-grow:0;width:auto}.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot{margin-bottom:12px}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;margin-right:8px;transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:color,transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input input{position:absolute;opacity:0;width:100%;height:100%}.v-input--selection-controls__input+.v-label,.v-input--selection-controls__input input{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple .v-ripple__container{transform:scale(1.4)}.v-input--selection-controls.v-input .v-label{align-items:center;display:inline-flex;top:0;height:auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(.8)}',""]),t.exports=n},598:function(t,e,o){"use strict";o(3),o(52),o(33),o(21),o(34),o(22),o(574);var n=o(23),r=o(120),l=o(24),c=o(570),d=o(17),h=o(568),v=o(67),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function m(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}e.a={name:"v-radio",mixins:[l.a,c.a,Object(v.a)("radio","v-radio","v-radio-group"),d.a],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:f({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var t,e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return(t=h.a.options.methods.genInput).call.apply(t,[this].concat(m(o)))},genLabel:function(){return this.$createElement(r.a,{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||"",dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",f({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(n.a,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(t){return t("div",this.computedData,[this.genRadio(),this.genLabel()])}}},599:function(t,e,o){"use strict";o(27),o(198),o(567),o(576);var n=o(90),r=o(569),l=o(67);e.a=n.a.extend({name:"v-radio-group",mixins:[r.a,Object(l.b)("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},n.a.options.methods.genDefaultSlot.call(this))},onRadioChange:function(t){this.disabled||(this.hasInput=!0,this.internalValue=t,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(t){t.relatedTarget&&t.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",t))},register:function(t){t.isActive=this.valueComparator(this.internalValue,t.value),t.$on("change",this.onRadioChange),t.$on("blur",this.onRadioBlur),this.radios.push(t)},setErrorState:function(t){for(var e=this.radios.length;--e>=0;)this.radios[e].parentError=t},setActiveRadio:function(){for(var t=this.radios.length;--t>=0;){var e=this.radios[t];e.isActive=this.valueComparator(this.internalValue,e.value)}},unregister:function(t){t.$off("change",this.onRadioChange),t.$off("blur",this.onRadioBlur);var e=this.radios.findIndex((function(e){return e===t}));e>-1&&this.radios.splice(e,1)}}})},613:function(t,e,o){"use strict";o(21),o(48),o(49),o(567);var n=o(23),r=o(568),l=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a={name:"v-checkbox",mixins:[r.a],props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"}},data:function(t){return{inputIndeterminate:t.indeterminate}},computed:{classes:function(){return{"v-input--selection-controls":!0,"v-input--checkbox":!0}},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon}},watch:{indeterminate:function(t){this.inputIndeterminate=t}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",l({},this.$attrs,{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(n.a,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}},639:function(t,e,o){var content=o(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("59067dd9",content,!0,{sourceMap:!1})},640:function(t,e,o){var n=o(11)(!1);n.push([t.i,".theme--light.v-input--switch__thumb{color:#fafafa}.theme--light.v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled .v-input--switch__thumb{color:#bdbdbd!important}.theme--light.v-input--switch.v-input--is-disabled .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.application--is-rtl .v-input--switch .v-input--selection-controls__ripple{left:auto;right:-14px}.application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-16px)}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{left:-14px;top:calc(50% - 24px)}.v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(16px)}",""]),t.exports=n},707:function(t,e,o){"use strict";o(567),o(639);var n=o(568),r=o(199),l=o(80),c=o(154),d=o(6),h=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a={name:"v-switch",directives:{Touch:r.a},mixins:[n.a],props:{loading:{type:[Boolean,String],default:!1}},computed:{classes:function(){return{"v-input--selection-controls v-input--switch":!0}},switchData:function(){return this.setTextColor(this.loading?void 0:this.computedColor,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",this.$attrs),this.genRipple(this.setTextColor(this.computedColor,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",h({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",h({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(l.b,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(c.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===d.r.left&&this.isActive||t.keyCode===d.r.right&&!this.isActive)&&this.onChange()}}}}}]);