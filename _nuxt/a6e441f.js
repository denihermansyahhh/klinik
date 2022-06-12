(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1181:function(e,t,r){"use strict";r.r(t);var n={components:{VWidget:r(555).a},data:function(){return{step:1,e13:1}},computed:{},methods:{}},o=r(10),l=r(13),v=r.n(l),c=r(170),_=r(189),h=r(171),d=r(543),f=r(184),m=r(172),x=r(643),w=r(644),y=r(589),k=r(645),V=r(544),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page-steppers"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("v-subheader",[e._v("Horizontal Step")]),e._v(" "),r("v-stepper",{model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{step:"1",complete:e.step>1}},[e._v("Name of step 1")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{step:"2",complete:e.step>2}},[e._v("Name of step 2")]),e._v(" "),r("v-divider"),e._v(" "),r("v-stepper-step",{attrs:{step:"3"}},[e._v("Name of step 3")])],1),e._v(" "),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(t){e.step=2}}},[e._v("Continue")]),e._v(" "),r("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1),e._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(t){e.step=3}}},[e._v("Continue")]),e._v(" "),r("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1),e._v(" "),r("v-stepper-content",{attrs:{step:"3"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(t){e.step=1}}},[e._v("Continue")]),e._v(" "),r("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1)],1)],1)],1),e._v(" "),r("v-flex",{attrs:{sm12:""}},[r("v-subheader",[e._v("Vertical Step")]),e._v(" "),r("v-stepper",{attrs:{vertical:""},model:{value:e.e13,callback:function(t){e.e13=t},expression:"e13"}},[r("v-stepper-step",{attrs:{step:"1",complete:""}},[e._v("\n            Name of step 1\n          ")]),e._v(" "),r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(t){e.e13=2}}},[e._v("Continue")]),e._v(" "),r("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1),e._v(" "),r("v-stepper-step",{attrs:{step:"2",complete:""}},[e._v("Name of step 2")]),e._v(" "),r("v-stepper-content",{attrs:{step:"2"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(t){e.e13=3}}},[e._v("Continue")]),e._v(" "),r("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1),e._v(" "),r("v-stepper-step",{attrs:{step:"3",rules:[function(){return!1}]}},[e._v("\n            Ad templates\n            "),r("small",[e._v("Alert message")])]),e._v(" "),r("v-stepper-content",{attrs:{step:"3"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(t){e.e13=4}}},[e._v("Continue")]),e._v(" "),r("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1),e._v(" "),r("v-stepper-step",{attrs:{step:"4"}},[e._v("View setup instructions")]),e._v(" "),r("v-stepper-content",{attrs:{step:"4"}},[r("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-1",height:"200px"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(t){e.e13=1}}},[e._v("Continue")]),e._v(" "),r("v-btn",{attrs:{flat:""}},[e._v("Cancel")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:c.a,VCard:_.a,VContainer:h.a,VDivider:d.a,VFlex:f.a,VLayout:m.a,VStepper:x.a,VStepperContent:w.a,VStepperHeader:y.a,VStepperItems:y.b,VStepperStep:k.a,VSubheader:V.a})},555:function(e,t,r){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},o=r(10),l=r(13),v=r.n(l),c=r(189),_=r(119),h=r(543),d=r(14),f=r(191),m=r(16),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[e.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[e._v(e._s(e.title))])]),e._v(" "),r("v-spacer"),e._v(" "),e._t("widget-header-action")],2):e._e(),e._v(" "),e.enableHeader?r("v-divider"):e._e(),e._v(" "),r("v-card-text",{class:e.contentBg},[e._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);t.a=component.exports;v()(component,{VCard:c.a,VCardText:_.b,VDivider:h.a,VSpacer:d.a,VToolbar:f.a,VToolbarTitle:m.b})},589:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return _}));var n=r(6),o=r(643),l=r(645),v=r(644),c=Object(n.g)("v-stepper__header"),_=Object(n.g)("v-stepper__items");o.a,v.a,l.a},643:function(e,t,r){"use strict";r(27),r(22),r(2),r(674);var n=r(67),o=r(17),l=r(15),v=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e};t.a=Object(l.a)(Object(n.b)("stepper"),o.a).extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{nonLinear:Boolean,altLabels:Boolean,vertical:Boolean,value:[Number,String]},data:function(){return{inputValue:null,isBooted:!1,steps:[],content:[],isReverse:!1}},computed:{classes:function(){return v({"v-stepper":!0,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{inputValue:function(e,t){this.isReverse=Number(e)<Number(t);for(var r=this.steps.length;--r>=0;)this.steps[r].toggle(this.inputValue);for(var n=this.content.length;--n>=0;)this.content[n].toggle(this.inputValue,this.isReverse);this.$emit("input",this.inputValue),t&&(this.isBooted=!0)},value:function(){var e=this;this.$nextTick((function(){return e.inputValue=e.value}))}},mounted:function(){this.inputValue=this.value||this.steps[0].step||1},methods:{register:function(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister:function(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter((function(i){return i!==e})):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter((function(i){return i!==e})))},stepClick:function(e){var t=this;this.$nextTick((function(){return t.inputValue=e}))}},render:function(e){return e("div",{class:this.classes},this.$slots.default)}})},644:function(e,t,r){"use strict";r(27),r(21),r(48),r(49);var n=r(80),o=r(67),l=r(6),v=r(15);t.a=Object(v.a)(Object(o.a)("stepper","v-stepper-content","v-stepper")).extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{classes:function(){return{"v-stepper__content":!0}},computedTransition:function(){return this.isReverse?n.g:n.h},styles:function(){return this.isVertical?{height:Object(l.d)(this.height)}:{}},wrapperClasses:function(){return{"v-stepper__wrapper":!0}}},watch:{isActive:function(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame((function(){t=e.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return e.isActive&&(e.height=t||"auto")}),450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return e.height=0}),10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={class:this.classes},r={class:this.wrapperClasses,style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var n=e("div",r,[this.$slots.default]),content=e("div",t,[n]);return e(this.computedTransition,{on:this.$listeners},[content])}})},645:function(e,t,r){"use strict";r(27),r(21),r(48),r(49);var n=r(23),o=r(24),l=r(67),v=r(91),c=r(15);t.a=Object(c.a)(o.a,Object(l.a)("stepper","v-stepper-step","v-stepper")).extend({name:"v-stepper-step",directives:{Ripple:v.a},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$vuetify.icons.complete"},editIcon:{type:String,default:"$vuetify.icons.edit"},errorIcon:{type:String,default:"$vuetify.icons.error"},editable:Boolean,rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step":!0,"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error":this.hasError,"v-stepper__step--complete":this.complete,"error--text":this.hasError}},hasError:function(){return this.rules.some((function(e){return!0!==e()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},toggle:function(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render:function(e){var data={class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},t=void 0;t=this.hasError?[e(n.a,{},this.errorIcon)]:this.complete?this.editable?[e(n.a,{},this.editIcon)]:[e(n.a,{},this.completeIcon)]:String(this.step);var r=!(this.hasError||!this.complete&&!this.isActive)&&this.color,o=e("span",this.setBackgroundColor(r,{staticClass:"v-stepper__step__step"}),t),label=e("div",{staticClass:"v-stepper__label"},this.$slots.default);return e("div",data,[o,label])}})},674:function(e,t,r){var content=r(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("0eae6486",content,!0,{sourceMap:!1})},675:function(e,t,r){var n=r(11)(!1);n.push([e.i,".theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.54)}.theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.application--is-rtl .v-stepper .v-stepper__step__step{margin-right:0;margin-left:12px}.v-stepper{overflow:hidden;position:relative}.v-stepper,.v-stepper__header{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:12px;justify-content:center;height:24px;margin-right:8px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-stepper__step__step .v-icon{font-size:18px}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:24px;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{align-items:flex-start;display:flex;flex-direction:column;text-align:left}.v-stepper__label small{font-size:12px;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px;padding:16px 60px 16px 23px;width:auto}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{align-self:center}.v-stepper--alt-labels .v-stepper__step__step{margin-right:0;margin-bottom:11px}@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-right:0}}",""]),e.exports=n}}]);