(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1207:function(t,e,r){"use strict";r.r(e);var n={layout:"dokter/dashboard",data:function(){return{form:{nama:"",no_hp:"",nip:"",tmp_lahir:"",tgl_lahir:"",umur:"",goldar:"",kp:""},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.photo="",this.form.no_hp="",this.form.nip="",this.form.tmp_lahir="",this.form.tgl_lahir="",this.form.umur="",this.form.goldar="",this.form.kp="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},o=r(10),l=r(13),v=r.n(l),d=r(170),c=r(189),f=r(171),m=r(543),h=r(184),x=r(587),_=r(172),w=r(558),y=r(544),k=r(88),O=r(191),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"pageTable"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("v-card",[r("v-toolbar",{attrs:{card:"",color:"white"}},[r("h3",[t._v("Data Pemeriksaan")])]),t._v(" "),r("v-divider"),t._v(" "),r("v-flex",{attrs:{sm12:""}},[t.show?r("v-form",{on:{submit:t.onSubmit}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("No. Antrian")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"No. Antrian",value:"001",color:"primary",id:"testing",type:"number",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("No. Rekam Medik")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"No. Rekam Medik",value:"001",color:"primary",id:"testing",type:"number",disabled:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Nama")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Nama",value:"Kodir",color:"primary",id:"testing",type:"text",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Alamat")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{name:"input-5",placeholder:"Alamat Lengkap",value:"",color:"teal","multi-line":"",disabled:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Poli")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Jenis Poli",value:"Umum",color:"primary",id:"testing",type:"text",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Keluhan")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{items:t.keluhan,tags:"",placeholder:"Keluhan","multi-line":"","item-text":"keluhan","item-value":"abbr","return-object":""},model:{value:t.multi1,callback:function(e){t.multi1=e},expression:"multi1"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Tindakan")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{items:t.tindakan,tags:"",placeholder:"Tindakan","multi-line":"","item-text":"tindakan","item-value":"abbr","return-object":""},model:{value:t.multi1,callback:function(e){t.multi1=e},expression:"multi1"}})],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Hasil Diagnosa")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{name:"input-5",placeholder:"Hasil Diagnosa",color:"teal","multi-line":""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Obat")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-select",{attrs:{items:t.obat,placeholder:"Obat","item-text":"obat","item-value":"abbr","single-line":""},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Dosis")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Dosis",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Aturan Minum")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Aturan Minum",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Jumlah")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Jumlah Obat",color:"primary",id:"testing",type:"number"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Obat")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-select",{attrs:{items:t.obat,placeholder:"Obat","item-text":"obat","item-value":"abbr","single-line":""},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Dosis")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Dosis",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Aturan Minum")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Aturan Minum",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Jumlah")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Jumlah Obat",color:"primary",id:"testing",type:"number"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Obat")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-select",{attrs:{items:t.obat,placeholder:"Obat","item-text":"obat","item-value":"abbr","single-line":""},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Dosis")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Dosis",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Aturan Minum")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Aturan Minum",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Jumlah")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Jumlah Obat",color:"primary",id:"testing",type:"number"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Obat")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-select",{attrs:{items:t.obat,placeholder:"Obat","item-text":"obat","item-value":"abbr","single-line":""},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Dosis")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Dosis",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Aturan Minum")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Aturan Minum",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),r("v-flex",{attrs:{xs1:""}},[r("v-subheader",[t._v("Jumlah")])],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-text-field",{attrs:{name:"input-1",placeholder:"Jumlah Obat",color:"primary",id:"testing",type:"number"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-subheader",[t._v("Catatan")])],1),t._v(" "),r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{name:"input-5",placeholder:"Catatan",color:"teal","multi-line":""}})],1)],1),t._v(" "),r("v-btn",{attrs:{color:"success",type:"submit"}},[t._v("Kirim")])],1):t._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:c.a,VContainer:f.a,VDivider:m.a,VFlex:h.a,VForm:x.a,VLayout:_.a,VSelect:w.a,VSubheader:y.a,VTextField:k.a,VToolbar:O.a})},558:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));var n=r(560),o=(r(61),r(563),r(561).a),l=r(62),v=r(30),d=r(18),c=o.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:n.a.options.props.transition},computed:{classes:function(){return Object.assign(o.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||o.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var t=o.options.computed.$_menuProps.call(this);return t.transition=t.transition||"v-menu-transition",t}},methods:{genSelections:function(){return this.editable?o.options.methods.genSelections.call(this):n.a.options.methods.genSelections.call(this)},genCommaSelection:function(t,e,r){return this.segmented?this.genSegmentedBtn(t):n.a.options.methods.genCommaSelection.call(this,t,e,r)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=l.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(t){var e=this,r=this.getValue(t),n=this.computedItems.find((function(i){return e.getValue(i)===r}))||t;return n.text&&n.callback?this.$createElement(v.a,{props:{flat:!0},on:{click:function(t){t.stopPropagation(),n.callback(t)}}},[n.text]):(Object(d.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),f=r(559),m=r(197),h=r(196),x={functional:!0,$_wrapperFor:n.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(t,e){var r=e.props,data=e.data,l=e.slots,v=e.parent;Object(h.a)(data);var _=Object(m.a)(l(),t);return r.autocomplete&&Object(d.d)("<v-select autocomplete>","<v-autocomplete>",x,v),r.combobox&&Object(d.d)("<v-select combobox>","<v-combobox>",x,v),r.tags&&Object(d.d)("<v-select tags>","<v-combobox multiple>",x,v),r.overflow&&Object(d.d)("<v-select overflow>","<v-overflow-btn>",x,v),r.segmented&&Object(d.d)("<v-select segmented>","<v-overflow-btn segmented>",x,v),r.editable&&Object(d.d)("<v-select editable>","<v-overflow-btn editable>",x,v),data.attrs=data.attrs||{},r.combobox||r.tags?(data.attrs.multiple=r.tags,t(f.a,data,_)):r.autocomplete?(data.attrs.multiple=r.multiple,t(o,data,_)):r.overflow||r.segmented||r.editable?(data.attrs.segmented=r.segmented,data.attrs.editable=r.editable,t(c,data,_)):(data.attrs.multiple=r.multiple,t(n.a,data,_))}};e.b=x},559:function(t,e,r){"use strict";var n=r(562);e.a=n.a},563:function(t,e,r){var content=r(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("50fa3656",content,!0,{sourceMap:!1})},564:function(t,e,r){var n=r(11)(!1);n.push([t.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""]),t.exports=n},571:function(t,e,r){var content=r(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("26d73d9e",content,!0,{sourceMap:!1})},572:function(t,e,r){var n=r(11)(!1);n.push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""]),t.exports=n},587:function(t,e,r){"use strict";r(68),r(54),r(288),r(2),r(61),r(571);var n=r(67);e.a={name:"v-form",mixins:[Object(n.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return!this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}}}]);