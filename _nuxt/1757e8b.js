(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1123:function(t,e,r){"use strict";r.r(e);var n={components:{VWidget:r(555).a},data:function(){return{slider1:0,slider2:0,slider3:0,media1:0,media2:0,ex1:{label:"color",val:25,color:"orange darken-3"},ex2:{label:"track-color",val:75,color:"green lighten-1"},ex3:{label:"thumb-color",val:50,color:"red"}}},computed:{},methods:{}},l=r(10),o=r(13),d=r.n(o),c=r(171),h=r(184),v=r(172),m=r(727),_=r(544),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-sliders"}},[r("v-container",{attrs:{"grid-list-lg":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-widget",{attrs:{title:"Basic Usage"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-subheader",[t._v("Default")]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"layout column"},[r("div",{staticClass:"flex"},[r("v-slider",{attrs:{step:"0"},model:{value:t.slider1,callback:function(e){t.slider1=e},expression:"slider1"}})],1)])]),t._v(" "),r("v-subheader",[t._v("Disabled")]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"layout column"},[r("div",{staticClass:"flex"},[r("v-slider",{attrs:{step:"0",disabled:""},model:{value:t.slider2,callback:function(e){t.slider2=e},expression:"slider2"}})],1)])]),t._v(" "),r("v-subheader",[t._v("Concreate step (Drag the slider)")]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"layout column"},[r("div",{staticClass:"flex"},[r("v-slider",{attrs:{placeholder:"step",color:"pink",max:255,"thumb-label":"",step:"10",ticks:""},model:{value:t.slider3,callback:function(e){t.slider3=e},expression:"slider3"}})],1)])]),t._v(" "),r("v-subheader",[t._v("With Icon")]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"layout column"},[r("div",{staticClass:"flex"},[r("v-slider",{attrs:{"prepend-icon":"volume_up"},model:{value:t.media1,callback:function(e){t.media1=e},expression:"media1"}}),t._v(" "),r("v-slider",{attrs:{"prepend-icon":"volume_down"},model:{value:t.media2,callback:function(e){t.media2=e},expression:"media2"}})],1)])]),t._v(" "),r("v-subheader",[t._v("Custom color")]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"layout column"},[r("div",{staticClass:"flex"},[r("v-slider",{attrs:{label:t.ex1.label,color:t.ex1.color},model:{value:t.ex1.val,callback:function(e){t.$set(t.ex1,"val",e)},expression:"ex1.val"}}),t._v(" "),r("v-slider",{attrs:{label:t.ex2.label,"track-color":t.ex2.color},model:{value:t.ex2.val,callback:function(e){t.$set(t.ex2,"val",e)},expression:"ex2.val"}}),t._v(" "),r("v-slider",{attrs:{label:t.ex3.label,"thumb-color":t.ex3.color,"thumb-label":""},model:{value:t.ex3.val,callback:function(e){t.$set(t.ex3,"val",e)},expression:"ex3.val"}})],1)])])],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VContainer:c.a,VFlex:h.a,VLayout:v.a,VSlider:m.a,VSubheader:_.a})},555:function(t,e,r){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},l=r(10),o=r(13),d=r.n(o),c=r(189),h=r(119),v=r(543),m=r(14),_=r(191),f=r(16),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[t.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?r("v-divider"):t._e(),t._v(" "),r("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VCard:c.a,VCardText:h.b,VDivider:v.a,VSpacer:m.a,VToolbar:_.a,VToolbarTitle:f.b})},652:function(t,e,r){var content=r(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("4c115251",content,!0,{sourceMap:!1})},653:function(t,e,r){var n=r(11)(!1);n.push([t.i,'.theme--light.v-input--slider .v-slider__track,.theme--light.v-input--slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--light.v-input--slider .v-slider__track__container:after{border:1px solid rgba(0,0,0,.87)}.theme--light.v-input--slider .v-slider__ticks{border-color:rgba(0,0,0,.87);color:rgba(0,0,0,.54)}.theme--light.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb-label{background:rgba(0,0,0,.26)}.theme--light.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb{border:3px solid rgba(0,0,0,.26)}.theme--light.v-input--slider:not(.v-input--is-dirty).v-input--slider--is-active .v-slider__thumb{border:3px solid rgba(0,0,0,.38)}.theme--light.v-input--slider.v-input--is-disabled .v-slider__thumb{border:5px solid rgba(0,0,0,.26)}.theme--light.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{background:rgba(0,0,0,.26)}.theme--light.v-input--slider.v-input--slider--is-active .v-slider__track{background:rgba(0,0,0,.38)}.theme--dark.v-input--slider .v-slider__track,.theme--dark.v-input--slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider .v-slider__track__container:after{border:1px solid #fff}.theme--dark.v-input--slider .v-slider__ticks{border-color:#fff;color:hsla(0,0%,100%,.7)}.theme--dark.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb-label{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb{border:3px solid hsla(0,0%,100%,.2)}.theme--dark.v-input--slider:not(.v-input--is-dirty).v-input--slider--is-active .v-slider__thumb{border:3px solid hsla(0,0%,100%,.3)}.theme--dark.v-input--slider.v-input--is-disabled .v-slider__thumb{border:5px solid hsla(0,0%,100%,.2)}.theme--dark.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider.v-input--slider--is-active .v-slider__track{background:hsla(0,0%,100%,.3)}.application--is-rtl .v-input--slider .v-label{margin-left:16px;margin-right:0}.v-input--slider{margin-top:16px}.v-input--slider.v-input--is-focused .v-slider__thumb-container--is-active:not(.v-slider__thumb-container--show-label):before{opacity:.2;transform:scale(1)}.v-input--slider.v-input--is-focused .v-slider__track{transition:none}.v-input--slider.v-input--is-focused.v-input--slider--ticks .v-slider .v-slider__tick,.v-input--slider.v-input--is-focused.v-input--slider--ticks .v-slider__track__container:after,.v-input--slider.v-input--slider--ticks .v-slider__ticks.v-slider__ticks--always-show{opacity:1}.v-input--slider.v-input--slider--ticks-labels .v-input__slot{margin-bottom:16px}.v-input--slider.v-input--is-readonly .v-input__control{pointer-events:none}.v-input--slider.v-input--is-disabled .v-slider__thumb{transform:translateY(-50%) scale(.45)}.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{border:0 solid transparent}.v-input--slider .v-input__slot>:first-child:not(:only-child){margin-right:16px}.v-slider{cursor:default;display:flex;align-items:center;position:relative;height:32px;flex:1;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;opacity:0;padding:0;width:100%}.v-slider__track__container{height:2px;left:0;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);width:100%}.v-slider__track__container:after{content:"";position:absolute;right:0;top:0;height:2px;transition:.3s cubic-bezier(.25,.8,.5,1);width:2px;opacity:0}.v-slider__thumb,.v-slider__ticks,.v-slider__track{position:absolute;top:0}.v-slider__track{transform-origin:right;overflow:hidden}.v-slider__track,.v-slider__track-fill{height:2px;left:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-slider__track-fill{position:absolute;transform-origin:left}.v-slider__ticks-container{position:absolute;left:0;height:2px;width:100%;top:50%;transform:translateY(-50%)}.v-slider__ticks{opacity:0;border-style:solid;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__ticks>span{position:absolute;top:8px;transform:translateX(-50%);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__ticks:first-child>span{transform:translateX(0)}.v-slider__ticks:last-child>span{transform:translateX(-100%)}.v-slider:not(.v-input--is-dirty) .v-slider__ticks:first-child{border-color:transparent}.v-slider__thumb-container{position:absolute;top:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container:before{content:"";color:inherit;background:currentColor;height:32px;left:-16px;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:-16px;transform:scale(.2);width:32px;will-change:transform,opacity}.v-slider__thumb,.v-slider__thumb-container:before{border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb{width:24px;height:24px;left:-12px;top:50%;background:transparent;transform:translateY(-50%) scale(.6);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--is-active .v-slider__thumb-container--is-active .v-slider__thumb{transform:translateY(-50%) scale(1)}.v-slider--is-active .v-slider__thumb-container--is-active.v-slider__thumb-container--show-label .v-slider__thumb{transform:translateY(-50%) scale(0)}.v-slider--is-active .v-slider__ticks-container .v-slider__ticks{opacity:1}.v-slider__thumb-label__container{top:0}.v-slider__thumb-label,.v-slider__thumb-label__container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb-label>*{transform:rotate(-45deg)}.v-slider__track,.v-slider__track-fill{position:absolute}',""]),t.exports=n},727:function(t,e,r){"use strict";r(27),r(22),r(19),r(68),r(54),r(21),r(48),r(49),r(652);var n=r(80),l=r(90),o=r(94),d=r(6),c=r(18),h=r(209),v=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a=l.a.extend({name:"v-slider",directives:{ClickOutside:o.a},mixins:[h.a],props:{alwaysDirty:Boolean,inverseLabel:Boolean,label:String,min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},ticks:{type:[Boolean,String],default:!1,validator:function(t){return"boolean"==typeof t||"always"===t}},tickLabels:{type:Array,default:function(){return[]}},tickSize:{type:[Number,String],default:1},thumbColor:{type:String,default:null},thumbLabel:{type:[Boolean,String],default:null,validator:function(t){return"boolean"==typeof t||"always"===t}},thumbSize:{type:[Number,String],default:32},trackColor:{type:String,default:null},value:[Number,String]},data:function(t){return{app:{},isActive:!1,keyPressed:0,lazyValue:void 0!==t.value?t.value:Number(t.min),oldValue:null}},computed:{classes:function(){return{"v-input--slider":!0,"v-input--slider--ticks":this.showTicks,"v-input--slider--inverse-label":this.inverseLabel,"v-input--slider--ticks-labels":this.tickLabels.length>0,"v-input--slider--thumb-label":this.thumbLabel||this.$scopedSlots.thumbLabel}},showTicks:function(){return this.tickLabels.length>0||!this.disabled&&this.stepNumeric&&!!this.ticks},showThumbLabel:function(){return!this.disabled&&(!!this.thumbLabel||""===this.thumbLabel||this.$scopedSlots["thumb-label"])},computedColor:function(){return this.disabled?null:this.validationState||this.color||"primary"},computedTrackColor:function(){return this.disabled?null:this.trackColor||null},computedThumbColor:function(){return this.disabled||!this.isDirty?null:this.validationState||this.thumbColor||this.color||"primary"},internalValue:{get:function(){return this.lazyValue},set:function(t){var e=this.min,r=this.max,n=this.roundValue(Math.min(Math.max(t,e),r));n!==this.lazyValue&&(this.lazyValue=n,this.$emit("input",n),this.validate())}},stepNumeric:function(){return this.step>0?parseFloat(this.step):0},trackFillStyles:function(){var t=this.$vuetify.rtl?"auto":0,e=this.$vuetify.rtl?0:"auto",r=this.inputWidth+"%";return this.disabled&&(r="calc("+this.inputWidth+"% - 8px)"),{transition:this.trackTransition,left:t,right:e,width:r}},trackPadding:function(){return this.isActive||this.inputWidth>0||this.disabled?0:7},trackStyles:function(){var t=this.disabled?"calc("+this.inputWidth+"% + 8px)":this.trackPadding+"px",e=this.$vuetify.rtl?"auto":t,r=this.$vuetify.rtl?t:"auto",n=this.disabled?"calc("+(100-this.inputWidth)+"% - 8px)":"100%";return{transition:this.trackTransition,left:e,right:r,width:n}},tickStyles:function(){var t=Number(this.tickSize);return{"border-width":t+"px","border-radius":t>1?"50%":null,transform:t>1?"translateX(-"+t+"px) translateY(-"+(t-1)+"px)":null}},trackTransition:function(){return this.keyPressed>=2?"none":""},numTicks:function(){return Math.ceil((this.max-this.min)/this.stepNumeric)},inputWidth:function(){return(this.roundValue(this.internalValue)-this.min)/(this.max-this.min)*100},isDirty:function(){return this.internalValue>this.min||this.alwaysDirty}},watch:{min:function(t){t>this.internalValue&&this.$emit("input",parseFloat(t))},max:function(t){t<this.internalValue&&this.$emit("input",parseFloat(t))},value:function(t){this.internalValue=t}},mounted:function(){this.app=document.querySelector("[data-app]")||Object(c.c)("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genListeners:function(){return{blur:this.onBlur,click:this.onSliderClick,focus:this.onFocus,keydown:this.onKeyDown,keyup:this.onKeyUp}},genInput:function(){return this.$createElement("input",{attrs:v({"aria-label":this.label,name:this.name,role:"slider",tabindex:this.disabled?-1:this.$attrs.tabindex,value:this.internalValue,readonly:!0,"aria-readonly":String(this.readonly),"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue},this.$attrs),on:this.genListeners(),ref:"input"})},genSlider:function(){return this.$createElement("div",{staticClass:"v-slider",class:{"v-slider--is-active":this.isActive},directives:[{name:"click-outside",value:this.onBlur}]},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isFocused||this.isActive,this.onThumbMouseDown)]},genSteps:function(){var t=this;if(!this.step||!this.showTicks)return null;var e=Object(d.f)(this.numTicks+1).map((function(i){var e=[];return t.tickLabels[i]&&e.push(t.$createElement("span",t.tickLabels[i])),t.$createElement("span",{key:i,staticClass:"v-slider__ticks",class:{"v-slider__ticks--always-show":"always"===t.ticks||t.tickLabels.length>0},style:v({},t.tickStyles,{left:i*(100/t.numTicks)+"%"})},e)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container"},e)},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},genThumbContainer:function(t,e,r,n){var l=[this.genThumb()],o=this.getLabel(t);return this.showThumbLabel&&l.push(this.genThumbLabel(o)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--is-active":r,"v-slider__thumb-container--show-label":this.showThumbLabel},style:{transition:this.trackTransition,left:(this.$vuetify.rtl?100-e:e)+"%"},on:{touchstart:n,mousedown:n}}),l)},genThumbLabel:function(content){var t=Object(d.d)(this.thumbSize);return this.$createElement(n.d,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label__container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:t,width:t}}),[content])])])},genTrackContainer:function(){var t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track__container",ref:"track"},t)},getLabel:function(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):this.$createElement("span",t)},onBlur:function(t){2!==this.keyPressed&&(this.isActive=!1,this.isFocused=!1,this.$emit("blur",t))},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onThumbMouseDown:function(t){this.oldValue=this.internalValue,this.keyPressed=2;var e={passive:!0};this.isActive=!0,this.isFocused=!1,"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,e),Object(d.a)(this.app,"touchend",this.onSliderMouseUp)):(this.app.addEventListener("mousemove",this.onMouseMove,e),Object(d.a)(this.app,"mouseup",this.onSliderMouseUp)),this.$emit("start",this.internalValue)},onSliderMouseUp:function(){this.keyPressed=0;var t={passive:!0};this.isActive=!1,this.isFocused=!1,this.app.removeEventListener("touchmove",this.onMouseMove,t),this.app.removeEventListener("mousemove",this.onMouseMove,t),this.$emit("end",this.internalValue),Object(d.i)(this.oldValue,this.internalValue)||this.$emit("change",this.internalValue)},onMouseMove:function(t){var e=this.parseMouseMove(t),r=e.value;e.isInsideTrack&&this.setInternalValue(r)},onKeyDown:function(t){if(!this.disabled&&!this.readonly){var e=this.parseKeyDown(t);null!=e&&(this.setInternalValue(e),this.$emit("change",e))}},onKeyUp:function(){this.keyPressed=0},onSliderClick:function(t){this.isFocused=!0,this.onMouseMove(t),this.$emit("change",this.internalValue)},parseMouseMove:function(t){var e=this.$refs.track.getBoundingClientRect(),r=e.left,n=e.width,l="touches"in t?t.touches[0].clientX:t.clientX,o=Math.min(Math.max((l-r)/n,0),1)||0;this.$vuetify.rtl&&(o=1-o);var d=l>=r-8&&l<=r+n+8;return{value:parseFloat(this.min)+o*(this.max-this.min),isInsideTrack:d}},parseKeyDown:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.internalValue;if(!this.disabled){var r=d.r.pageup,n=d.r.pagedown,l=d.r.end,o=d.r.home,c=d.r.left,h=d.r.right,v=d.r.down,m=d.r.up;if([r,n,l,o,c,h,v,m].includes(t.keyCode)){t.preventDefault();var _=this.stepNumeric||1,f=(this.max-this.min)/_;if([c,h,v,m].includes(t.keyCode)){this.keyPressed+=1;var k=this.$vuetify.rtl?[c,m]:[h,m],y=k.includes(t.keyCode)?1:-1,x=t.shiftKey?3:t.ctrlKey?2:1;e+=y*_*x}else if(t.keyCode===o)e=parseFloat(this.min);else if(t.keyCode===l)e=parseFloat(this.max);else{var w=t.keyCode===n?1:-1;e-=w*_*(f>100?f/10:10)}return e}}},roundValue:function(t){if(!this.stepNumeric)return t;var e=this.step.toString().trim(),r=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,n=this.min%this.stepNumeric,l=Math.round((t-n)/this.stepNumeric)*this.stepNumeric+n;return parseFloat(Math.max(Math.min(l,this.max),this.min).toFixed(r))},setInternalValue:function(t){this.internalValue=t}}})}}]);